---
title: "Monitoring for More Civilized Age"
layout: article
---

## Monitorin' it

Monitoring is a hot topic right now, and there's a lot going on in the
industry at the moment. It is a difficult subject and everyone tends to
understand something different when he hears word `monitoring`.

For me, monitoring is more than just knowing the response time of your
web page or the amount of messages in your queues. It tells the story of
the life of system and provides insight into its health, from an
__operational__ and __business__ standpoint.

Everyone uses different types of software for monitoring, but it seems
that we're hitting the limits of most of that software quite
fast. Almost any available solution will solve the small problem of
collecting a precise number and then pushing it, maybe persisting a raw
value, running an aggregate on a rollup on it and then pushing it to
some visualisation layer. If you want to combine multiple metrics into
one, look for corellations, run statistical analysis on your numbers,
you'll have to implement a good chunk of it all by yourself.

Let's think of several common scenarios and solutions that are used
industry-wide, but may be slightly improved.

## Ad-hoc

`Ad-hoc` metrics are just driving me crazy. I once wanted to get to know
everything about what's going on on my website. I've started adding
timers, counters, gauges and so on to instrument my system.  And then I
had to deploy it to a farm of hundred-something servers. Some
time passed, and I realized that there were several things I didn't
really cover by metrics, but that were available within same scope
(let's say, an information about the HTTP referrer). I've added them,
and guess what? I had to redeploy my app to all the servers.

Imagine you call a tailor, and tell them to make a good suit for you.
Then you mention you're of an average height, and ask him to proceed to
work. After a little while you're calling again and tell him he's ready
to know your waist size. Then suit type. Then color preference.

Ad-hoc means "for this", and that's pretty much how monitoring is done:
we make an educated guess that a certain number would be interesting for
us, we add a counter for it, then we check see it on our dashboards,
realize we need yet something else, make adjustments, and iterate, which
may get quite costly along the way.

So this the issue that bothers me the most. The majority of currently
existing solutions make you think in terms of "gauges", "histograms",
"counters", "gauges", "timers" on the client side. So my application has
two responsibilities now: serving web content to my users, and also
figuring out which metrics it needs to send.

## Post-hoc

Let's make a paradigm switch and make it all post-hoc. Since you can't
be certain which parts of application code should be benchmarked, you're
just sending all possible values. For example, when there's a page-load
occuring, you're not sending a counter that

  * "ok, there's been a page-load"
  * and one more for "ok, increment an amount of people who used
    FireFox by one"
  * and also "ah, please also increment that little counter
    of 200OK pages",

But you're sending a complete payload, that testifies that there's been
a "`200OK` page load, with user agent of FireFox, it took `420
milliseconds`, `20` DB requests were made for it, referrer was
`FireFix`, it occured on host `web_124` in an application named `X`".

Or you're saying that "there's been a checkout for an amount of `250USD`,
made by a `fresh user`, that came through a certain `Facebook campaign`".

This also brings up a fact that monitoring system is only aware of a
single number coming into it, and it can't help me to find corellation
between two parameters or plot two variables against each other,
instread of creating a timeplot.

## Multi-metrics

Of course it's always possible to check corellation between two
independent params by looking at graphs. You can say that when page
response time goes up, processor load may be higher, too, which
indicates that you don't have enough web server capacity. If page load
starts going up because of some other factor, number of items in the
database for example, it may indicate a need to denormalise some data
and/or review table layout.

Although having these metrics as independent values is hard to
understand, especially when the values are located on different
dashboards (in cases like conversion rate vs page load time, since
people tend not to click a checkout button if they have waited for page
to load for couple of seconds), and insignificant changes to these
values may be quite difficult to spot on line graphs.

## Window operations

Exact numbers are rarely a point of interest. It would be too much for
us to see a page load time of each of million visits to our web page, or
to see all the transactions going on on our backend. We want to see the
shape of the data, and have an understanding of where the numbers
sit. Particular numbers will vary from second to second, hour to hour
and so on.

Utilizing windows is a core concept in getting an overview of a system
status. It allows you to specify granularity of your aggregate using
arbitrary emission predicate (which can mean many things), specify how
you want your data to be cooked by providing an aggregation function,
and specify how it should be appended to the backing array.

There are two basic types of windows that are mostly interesting for us:
sliding and tumbling. `Sliding windows` accumulates items in the backing
buffer until it's full, after that it starts dropping the oldest items
and appending newest items, passing current filled window state to the
aggregate function.

```
    t0       t1          t2         (emit)
   +---+  +---+---+  +---+---+---+
   | 1 |  | 1 | 2 |  | 1 | 2 | 3 |    <6>
   +---+  +---+---+  +---+---+---+

     t4             (emit)
   -...+---+---+---+        -...+---+---+---+
   : 1 : 2 | 3 | 4 |  <9>   : 2 : 3 | 4 | 5 |  <12>
   -...+---+---+---+        -...+---+---+---+
```

So, sliding window waits until it should emit (which can be controlled
by either `time`, `business values` (e.g. campaign has reached the end),
or `buffer size`. After emission, the oldest value is passed, and
current buffer contents are passed to some aggregate function that
reduces numbers.

`Tumbling windows` wait until it should emit, pass the current filled
window state to the aggregate function, then reset the backing buffer to
an empty state and starts over.

```
    t0       t1          t2         (emit)
  +---+  +---+---+  +---+---+---+           -...-...-...-
  | 1 |  | 1 | 2 |  | 1 | 2 | 3 |    <6>    : 1 : 2 : 3 :
  +---+  +---+---+  +---+---+---+           -...-...-...-

    t3       t4          t5         (emit)
  +---+  +---+---+  +---+---+---+           -...-...-...-
  | 4 |  | 4 | 5 |  | 4 | 5 | 6 |    <15>   : 4 : 5 : 6 :
  +---+  +---+---+  +---+---+---+           -...-...-...-
```

## Near real time analysis toolchain

Windows are irrepacable part of real-time analysis toolchain, but if
you want to have pluggable moving parts within your application, you
have to dig even deeper. If you only have composition on a functional
level, you will eventually have to implement your own routing layer. Think
about the scenario:

  * an event comes into the system
  * it should be routed to one of the metrics processors
  * the metric processor receives a complete event, and retrieves fields,
    relevant to the particular metric
  * some values should be filtered out (say, you don't want to take
    certain HTTP response types into consideration)
  * after filtering, they're pushed to timed tumbling window
  * when the window closes, it dispatches events to some aggregators
  * the aggregator makes calculations and pushes results to the ring buffer
    that holds last 100 values, also to all connected websockets and
    finally to the persistent store backend.

All of the parts are independent, and there will be more than one
entry per metric, and sooner or later it you'll get into dependency
hell, where it is not exactly clear how to compose parts, their
interfaces may not match and it may be not easy or possible to combine
them in different order.

For that case, you can use an embedded event processing systems. Here,
you can create named graphs of independent entries and combine them
together the way you want.

The most trivial example of such processing pipeline is a little graph
that calculates amounts of even and odd numbers independently from each
other:

<img src="/assets/images/topology_example.png" />

Here, parts are decoupled, and you can change order, attach and
detach entries in runtime. Each entry has its own key (splitter,
even-values, odd values), and you can get the current sum of even and odd
values by name. Such systems significantly reduce maintenance overhead
allowing you to build processing pipelines gradually, independently and
take care of wiring and dependencies on the last step.

## Data format

Thinking about generic protocols is always hard, and each protocol will
certainly make some things easier, and some more complex. But
event processing and analysis often boils down to just a handful of
numbers.

Let's consider a simple payload:

```js
{application: 'my-app'
 environment: 'production'
 type: 'page_load'
 execution_time: 542
 user_agent: 'Mozilla...'
 host: 'web001'
 status: 200}
```

Splitter will check out three values: `application`, `environment` and
`type` and identify the event. We know it came from the production
environment of "my-app" application and it is a page load event from one
of web servers.

Each event will have several metrics attached. Individual metrics
consist a key and value pairs.

Next step in our processing is defining a rollup and aggregates. Since
particulr numbers are too hard to observe and there are too many of them,
we use rollup aggregation: we wait for certain period of time, collect
status codes and execution times, then group execution times by status
code, and calculate median time for each status code.

Each `rollup` may have more than a single `aggregate`: it may be useful to
see median response time on a graph separate from maximum and minimum
response times.

After the aggregate has done their job, we can simply store the values into
the sliding window, that will serve as a source for the graph that we'll
render for observer. Let's consider several examples:

  * key: `status_code`, value: `execution_time`, aggregate: `max`. Each
    line on the graph relates to `status_code`, `x` axis represents
    time, and `y` axis represents reduced value per minute:

<img src="/assets/images/monitoring_for_more_civilized_age/graph_1.png" />

  * key: `user_agent`, value: doesn’t matter. Values don't matter
    because we only care about the amount of user_agents, so this way we
    can aggregate counts even on empty values. So each line represents a
    particular user agent, and `y` represents how many times particular
    user agent was used to access our website:

<img src="/assets/images/monitoring_for_more_civilized_age/graph_2.png" />

  * Same way we can see the breakdown of exceptions that occured on the
    page:

<img src="/assets/images/monitoring_for_more_civilized_age/graph_3.png" />

## Why windows matter

If we go back to the example of `user_agent` metric, we can see a flat
line that we know represents Elastic Load Balancer traffic from Amazon. It hits
our pages once every second on every server, and makes sure that the
backend is still responsive. It's acting very predictably, and you know
that every minute you'll get 100 ELB hits for 100 servers.

Just because this event is independent from the users that are coming to
your page, you can't use any other mean but time to control your
window. You can't wait until you collect 100 entries, since you can get
1000 user visits per minute, or you can get 10K. If you allow disparate
metrics to influence your window, you'll get weird and unrepresentative
graphs that won't make any sense for the observer.

Only by saying "ok, let's wait for one minute while collecting user agent
information, then perform a count per user agent" can you achieve the desired
result and make the ELB line flat, and compare it to all other
lines. Any other attempt will be completely unpredictable.

Of course, in an ideal world we would just send every possible event
from the system to the collector, and store it in some ultra-scalable
data store forever, and then use some magical query engine that will
make us any calculation in the way we'd like to have it.

But in reality, even a relatively small startup these days generates a
couple of gigabytes of raw data a day, and the majority of that data is only
required for real-time access. So however much of a good idea it is to store
everything, it may create a major operational overhead.

Since particular numbers aren't interesting for us most of time, we're
using their statistical representation to understand the shape of data, it
may be good to store raw data points only for the last week (month, or
year, but not forever), and store aggregated values forever.

This would of course limit us, since if we discovered some new metric that
it is only possible to yield from the raw data, we can only calculate it
for the raw data that we have available, but that decision is the
responsbility of the whomever implements the system. We should weight
all pros and cons and call a shot.

## Wrapping up

It's clear that creating __one size fits all__ tool is quite hard, so
following an 80/20 principle is the best we can do. Moving
responsibility of converting events to particular metrics from client to
server is a key for flexibility, and allowing multi-metrics, statistical
analysis and better visualisation capabilities.

By using simple concepts of `windows` and `pipelines`, you can build a
powerful instrument that'll help you to observe your data and make it
easier for you to see what is really going on on the server.

If you like, you can also check out my
[slides from Monitorama](https://speakerdeck.com/ifesdjeen/new-age-monitoring-toolchain),
where I talked about same principles.

If you'd like to learn more about our tooling, you can refer to:

  * [EEP](https://github.com/clojurewerkz/eep) for event emitter & windows
  * [Meltdown](https://github.com/clojurewerkz/eep) for anonymous topologies
  * [Eventoverse-graphs](https://github.com/ifesdjeen/eventoverse-graphs) for graphs
  * [Clj-pusher](https://github.com/ifesdjeen/clj-pushr) for websockets
  * [Cascalog](https://github.com/nathanmarz/cascalog) for map/reduce
