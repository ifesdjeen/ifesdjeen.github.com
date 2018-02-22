If you're working with data a lot, quite soon it becomes close to
impossible to process an entire corpus in one run, or you simply can't
do that, since data is coming in form of events / tuples and you perform
analysis based on the calculations. Moreover, with growth of processing
codebase you're creating some kind of framework that allows you get most
of routing out of the way, so that you could pay more attention to
details rather than to grasp an entire flow at a time.

There's a lot of progress on this subject lately. Prismatic guys
released their processing library,
[Graph](https://github.com/Prismatic/plumbing), Zach Tellman, creator of
Aleph, made [Lamina](https://github.com/ztellman/lamina) that helps you
to work with streams and gives you some abstractions, Kyle Kingsbury
created [Riemann](https://github.com/aphyr/riemann), that implements
similar approach internally,
[Eventsourced](https://github.com/eligosource/eventsourced) is another
example, [Pipes](pipes.tinkerpop.com) from Tinkerpop,
[Storm](github.com/nathanmarz/storm) by Nathan Marz and many more
examples.

Basic idea remains the same. You have a stream of data coming in in form
of events. You build a topology of functions that broadcast, transform,
filter, aggregate or save state of tuples that are going through. This
way at any given point in time you can know the intermediate result of
calculation, in case when stream of events is being fetched from some
data source, or can get results interactively (some may say real-time
yo), and react to the system behavior.

After trying pretty much same approach out for quite some things, it did
work quite well.  Of course, depending on the required throughput my
approach may be not exactly what you want to use in your production
system, but most likely interface will still remain quite similar, even
though implementation details will have pretty much nothing in common.

# EEP Concepts

When we've first started investigating __state of art__ of event processing,
intuitive choices for inspiration were Erlang (gen_event) and
Node.js. Don't try to judge strictly here.  Of course, they certainly
take absolutely different approach to concurrency, but even emission
part looks quite similar.

In [gen_event](http://www.erlang.org/doc/man/gen_event.html) two
functions that are used more often than others are
`gen_event:add_handler` and `gen_event:notify`. Former subscribes you to
an occuring event, latter sends event to the emitter, which dispatches
it according to the
handler. [Node.js](http://nodejs.org/api/events.html) approach is
extremely similar: multiple handlers per event type, routed on emission.

Initial implementation of EEP was based on `ThreadPoolExecutor`, and was
functioning quite well, but after some research we decided to take a
look if we can use `RingBuffer` from
[Disruptor](https://github.com/LMAX-Exchange/disruptor), and after
several interactions we ended up using
[Reactor](https://github.com/reactor/reactor), written by SpringSource/
Pivotal engineers.

Reactor turned out to use same exact approach, and migration (after
spelling out everything reactor-related in Clojure) didn't take long.

Core concepts of EEP are:

  * `Emitter` is responsible for handler registration and event
    routing. It holds everything together.

  * `Event` is a tuple dispatched by world into the emitter. Event is an
    arbitrary tuple of user-defined structure. There's no validation
    provided internally for structure.

  * `Event Type` is a unique event type identifier, used for routing. It can
    be number, symbol, keyword, string or anything else. All the events
    coming into `Emitter` have type associated with them.

   * `Handler` is a function and optional state attached to it. Function is a
     callback, executed whenever `Event Type` is matched for the
     event. Single handler can be used for multiple `Event Types`, but
     `Event Type` can only have one `Handler` at a time.

Now, with these building blocks we can go ahead and start building
processing graphs. For that, we need to define several types of handlers
that are aware of what data looks like.

   * `filter` receives events of a certain type, and forwards ones
     for which `filter-fn` returns `true` to one or more other handlers

   * `splitter` receives events of a certain type, and dispatches them
     to type returned by predicate function. For example, you can split
     stream of integers to even and odd ones and process them down the
     pipeline differently.

   * `transformer` defines a transformer that gets typed tuples, applies
     transformation function to each one of them and forwards them to
     one or more other handlers. It's similar to applying `map` to
     elements of a list, except for function is applied to stream of data.

   * `aggregator` is initialized with initial value, then gets events of
     a certain type and aggregates state by applying aggregate function to
     current state and an incoming event. It's similar to `reduce`
     function in Clojure, except for it's applied to the stream of data.

   * `multicast` receives events of a certain type and broadcasts them
     to several handlers with different types. For example, whenever an
     alert is received, you may want to send notifications via email,
     IRC, Jabber and append event to the log file.

   * `observer` receives events of a certain type and runs function
     (potentially with side-effects) on each one of them.

   * `buffer` receives events of a certain type and stores them in a
     circular buffer with given capacity. As soon as capacity is
     reached, it distributes them to several other handlers.

   * `rollup` acts in a manner similar to buffer, except for it's
     time-bound but not capacity-bound, so whenever a time period is
     reached, it dispatches all the events to several other handlers.

Let's take a closer look at an example of stream processing. For
instance, you have a discrete stream of events coming from the web
servers, that hold information about page loads on your
website. Interesting infromation to monitor would be:

  * host (where the page load occured)
  * response code (HTTP status of the response)
  * user agent infromation
  * response duration
  * url of the response

From that single payload type you can already yield an incredible amount
of information, for example

  * slowest/fastest response time
  * last 20 response times
  * total number of responses (per given amount of time)
  * response number breakdown by status code
  * hottest URLs on the website (page loads breakdown by url)
  * user agent breakdown
  * count only 404s

If you do it in the most straightforward way, you will end up with lots
of ad-hoc code, that is related to routing: metrics that are related to
response time only need response time, you'll need to have buffers for
rollups that will aggregate data for a certain period and stream it to
next computation unit and so on.

We went through many use-cases that are related to discrete data
aggregation and worked out several entities that will help to create
calculation topologies. Besides that, you'll need a queue that will have
some build-in routing capabilities and will manage buffered aggregation,
filters, stream data down to several handlers and many other,
not-so-obvious things.

Now, we'll need to declare the metrics we want to aggregate on. In order
to make our processing graph more reusable, we'll separate metric
retrieval from metric calculation. This way, we'll be able to reuse same
aggregate function for several types of metrics and will be able to
achieve desired result by providing appropriate routing.

```clj
(def emitter (new-emitter))

;; Redistribute an event to all transformers and aggregators
(defmulticast emitter :page-load [:total-request-count
                                  :load-time-metrics
                                  :status-code-metrics
                                  :user-agent-metrics
                                  :url-metrics])
```

Now, let's define transformers that receive a complete event, take a
single field out of it and redistribute it further down:

```clj
;; Take only :load-time for metrics related to load time
(deftransformer emitter :load-time-metrics :load-time [:load-time-slowest :load-time-fastest :load-times-last-20])

;; Take only :status for metrics related to status code
(deftransformer emitter :status-code-metrics :status :count-by-status-code)

;; Take only :user-agent for metrics related to user agent
(deftransformer emitter :user-agent-metrics :user-agent :count-by-user-agent)

;; Take only :url for metrics related to url
(deftransformer emitter :url-metrics :url :count-by-url)
```

Now, we can define our aggregate functions:

```clj
;; Define an counter aggregator for all requests
(defaggregator emitter :total-request-count (fn [acc _] (inc acc)) 0)

;; Preserve only slowest load time
(defaggregator emitter :load-time-slowest (fn [previous current]
                                            (if (and previous (< previous current))
                                              previous
                                              current)) nil)
;; Preserve only fastest load time
(defaggregator emitter :load-time-fastest (fn [previous current]
                                            (if (and previous (> previous current))
                                              previous
                                              current)) nil)

(let [count-aggregate (fn [acc metric]
                        (assoc acc metric (inc (get acc metric 0))))]
  ;; Aggregate counts by status code
  (defaggregator emitter :count-by-status-code count-aggregate {})

  ;; Aggregate counts by user agent code
  (defaggregator emitter :count-by-user-agent count-aggregate {})

  ;; Aggregate counts by user url
  (defaggregator emitter :count-by-url count-aggregate {}))

;; Define a buffer for last 20 events
(defbuffer emitter :load-times-last-20 20)
```

Now our graph is ready, we can visualize it:
