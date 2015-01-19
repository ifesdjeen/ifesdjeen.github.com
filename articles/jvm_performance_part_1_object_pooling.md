---
title: "JVM Performance Tricks, Part 1: Object Pooling"
layout: article
disqus_identifier: "jvm_performance_part_1_object_pooling"
disqus_url: "http://coffeenco.de/articles/jvm_performance_part_1_object_pooling.html"
---

## Well Known Forgotten Tricks 

Most problem are quite straightforward to solve: when something is slow,
you can either optimize it or parallelize it. When you hit a throughput
barrier, you partition things to more workers. Although when you face
problems that involve Garbage Collection pauses or simply hit the limit
of the virtual machine you're working with, it gets much harder to fix
them.

When you're working on top of a Virtual Machine, you may face things 
that are simply out of your control. Namely, time drifts and latency.
Gladly, there are enough battle-tested solutions, that require a bit
of understanding of JVM internals and the way things work.

Over the course of next several months, I'll be releasing articles on
Java Performance Optimisation mechanisms, which will include (but won't
be limited by) subjects: 

  * Compare and Swap operations 
  * Lock operation internals 
  * Working with Off-Heap data
  * 0-zopy on JVM
  * False Sharing / CPU Cache Alignment 
  * Time Drifts and Waiting Strategies 
  * Useful Bit Operations and their application
  * Object Freezing 
  
If you can serve 10K requests per second, conforming with certain
performance (memory and CPU parameters), it doesn't mean that you'll 
be able to liearly scale it up to 20K. If you're allocating too many
objects on heap, or waste CPU cycles on something unnecessary, you'll
eventually hit the wall. 

The simplest (yet very underrated) way of saving up on memory allocations
is object pooling. Even though the concept is sounds similar to just 
pooling objects and socket descriptors, there's a slight difference.
When we're talking about socket descriptors, we have limited, rather 
small (tens, hundreds, or max thousands) of descriptors to go through. 
These resources are pooled because of the high initialization cost
(establishing connection, performing a handshake over the network, 
memory-mapping the file or whatever else). 


## Object Pooling

Pooling objects is the first and most straightforward way to reduce
the Garbage Collection pressure. There are three easy-to-identify 
use-cases for object pooling. We're always talking about the objects
sharing the same structure (more often than not, they're just instances
of the same class). Also, these objects are mostly short-lived. 

  * objects are allocated constantly at a specific rate (fast enough
  that it starts influencing application performance), the garbage 
  collection times gradually increase until stabilizing, memory 
  usage grows.   
  * objects are allocated with bursts, every burst resulting in a 
  system lag, followed by a noticable GC pause

In the majority of cases such objects are created as either data 
containers or wrappers, that acti as an envelope between an application 
an internal message bus and the API. You can see such things every day: when using Database
Drivers, that have Request and Response objects created for each request
and response, Message or Event wrappers that your favorite messaging
system using. Parsers create objects of a certain type as a result of 
parsing, RPC libraries create protocol message instances. These objects are literally everywhere.

Object Pooling helps to preserve and reuse these constructed object
instances. This is the most straightforward solution for when your
profiler tells you that you're constructing way too many objects of the
same exact type all the time.

There are two basic recycling patterns for pools are borrowing and 
reference-counting.

### Borrowing 

Borrowing mostly looks like `malloc` / `free` on top of
garbage-collected runtime, and you'll certainly face same issues as you
were facing back in the days programming non-garbage collected
languages.

If you have freed the object and returned it to the pool, any 
modifications to it or reading from it will lead to unpredictable 
results: other writers or readers may hold same object at the same
time. In C, any operation on freed (dangling) pointer would result into
segmentation fault. Here you just have to take care of it yourself, 
or build in some additional protection mechanisms.

Borrowing is good when the consumer operation has explicit begin/end. 
In majority of cases, it isn't used in cases when object could be
accessed by multiple threads simultaneously. In this case
synchronising access and exit point may just be too complicated. 

Big advantage of borrowing is that object may know absolutely nothing
about pool or even existance of the pool. It has to have some `reset`
mechanisms, but since the control over borrowing and return is 
completely up to consumer, object itself doesn't have to take care of
it. This means that you may even pool the API objects of an external
library.

### Reference-counting

Reference counting is slightly more complex in terms of implementation,
but it also offers more granular control over the data structure, and 
allows consumer to know nothing about pool itself by wrapping pool into
a some functional interface, like:

```java
(pooledObject, pooledObjectConsumer) -> {
  pooledObject.retain();
  pooledObjectConsumer.accept(pooledObject);
  pooledObject.release();
  };
```

Of course, it is not necessary to use lambdas. You can always use 
exlicit code blocks, or just method calls. What important is that each
time the objects enters a block, caller has to `retain` the object,
and `release` it after the execution block is done. Each object holds an
internal counter and a reference to the pool. As soon as counter reaches
zero, object returns itself to the pool. 

Reference counting is usually used when allocated objects are accessed
by more than a one consumer at a time, object can only be recycled after
all each block releases the reference. It is also good for sequential
pipelining or nesting processing, in order to avoid explicit operation 
begin/end, and allow recycling after last consumer is done with the
object. 

When working with pools, it important to identify pool growth
strategies, allocation trigger conditions and whether pool will be
bounded. 

## Allocation Triggers

__Allocation triggers__ are responsible for noticing that pool is low on
elements, and needs to allocate new resources. 

### Empty Pool Trigger

The most simple and straightforward way is to allocate objects whenever
the pool is empty. In this case, you can use some `Queue`
implementation, put elements into the Queue, `poll` the queue each time
you require a new object. If there're no objects available, the
allocation step should be triggered.

### Watermarks

Problem with this trigger strategy is of course that one of the poll 
operations will be paused to perform allocation. To avoid it, you may 
use low/high watermarks. Whenever the new object is requested from the
pool, you check how many elements are still available in the pool. If 
the resources are at critically low level, allocation step is triggered.

For example, you start with 100 elements, which corresponds to `100%`, and
objects get requested from the pool. After 75 elements are given, there
are only 25 elements left in the pool, and pool is now at the cricically
low resource level of `25%`, so additional resources are allocated, and
counter is adjusted accordingly.

### Lease/Return Rate

Most of the time, watermarks are enough, although sometimes a bit more
precision is required. In this case, you can use record `lease` and
`return` rates, at which objects are being taken or returned to the
pool. For that, you run a timer and count how many items were allocated
per second, and find some statistically significant number representing
the rate (for example, median, mean or some percentile, depending on how
widespread data points are). 

If you have 100 items in the pool, and 20 items are taken form pool
every second, but only 10 are returned, you will empty the pool after 9
seconds. 

$ poolWillBeEmptyIn = \frac{poolSize - takeRate}{takeRate - returnRate} + 1$

<script type="text/javascript" src="https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>

Using this information, you can "plan ahead" and allocate enough
elements to satisfy the lease requirements.

## Growth Strategies

__Growth strategies__ identify what happens when the allocation trigger
is fired, and __bounds__ specify maximum allowed amount of allocated
objects.

### Fixed Size

The simplest pool implementation is of course a fixed-size
pool. Elements are pre-allocated in one run, and pool is never grown
afterwards. 

Such an implementation is extremely useful when you need to make sure
that only a certain amount of objects can be out simultaneously, and
maybe throttle the application, forcing it to consume not more than a
certain amount of resources.

Fixed size pool may cause resource starvation, in case the pool size
isn't calculated optimally, but performance characteristics are easy to
grasp because allocations are done explicitly. 

Most of the time, you'd allocate more resources than you usually
need. This way, peak times would be causing some latency, although
you will have some free resources in the pool all the time.

### Tiny-Step growth

If you can identify the size of the pool mostly correctly, but think
that during peak times you still may run in resource starvation problem,
you can grow your pool with very small steps (say, one additional item
at a time). 

Of course you can allocate new item on-demand, which would add some
latency for every item, allocated after the pool was empty, but it's
very easy to implement and maintain, and the pool size will correspond
to the amount of objects that may possibly exist in the system
simultaneously.

### Block Growth

If can't afford any allocation latency, and would like to be able to get
a ready element from the pool any time, you'd have to use a block-growth
allocation strategy, combined with an __allocation trigger__ of your
preference. 

This way, every time you reach 25% watermark, you can allocate
additional 25% of the pool size and see if that'd fit the application
demand. 

In such cases, you're almost always allocating more resources than may
be possibly required. Large exponent values may cause JVM to run out of
memory.

Using lease/return rates, you may get down to quite precise pool
size. But it's always good to keep it flexible and allow pool to grow a
little.

### Shrinking

I'm not covering shrinking strategies in this article, but technically
you may consider some strategy for releasing unnecessary resources after
a certain timeout, if you're sure you won't need to reclaim them any
time soon.

## Pitfalls

Of course, as long as you start managing memory youself, you become 100%
responsible for pretty much everything that's going with the memory
you're managing at all times. There are several ways things may go
wrong:

  * __Reference Leaks__: object is registered somewhere within your
    system, although did not get returned to the pool. This happens
    quite often, and leads to out of memory errors that are hard to
    track down. It gets particularly hard when you have references
    leaking under just one subtle scenario.
  * __Premature Recycling__: this happens where you decide to return the
    object to the pool, but still hold the reference to it, and try to
    perform write or read. In C/C++ you would usually get a Segmentation
    Fault under similar circumstances. Basically, it means that you're
    trying to access memory that does not belong to you, whether it is
    for reading or for writing. 
  * __Implicit Recycling__: may occur when you're working with reference
    counts. Because of the concurrent access, or error in one of the 
    consumers the object may be implicitly recycled, while you would
    expect that reference should still be valid. To avoid it, it is 
    important to keep all the operations explicit, never leak references 
    to untrusted consumers, have control means (such as interrupts) 
    over the consumers that break internal contracts.
  * __Sizing Errors__: this is quite usual for Byte Buffers and arrays:
    when objects should have different sizes / lengths, and are
    constructed in a tailored mode, although returned to the pool and
    reused as "one size fits all" objects. Usually you would get an
    IndexOutOfBounds error or similar, whenever trying to write or read
    to/from location that's outside of range of the generated object. If
    you're very (very, very) lucky, you may end up just carrying a
    memory overhead around (whenever the first tailored object is the
    largest one, and all smaller ones just fit in).
  * __Double Booking__: whenever two objects are aware of the fact that
    the object they received should be recycled after use, but reference
    to only of of them was actually known by the object itself. This is
    a variation of a reference leak, although that one happens more
    often, especially when there's any multiplexing involved: object
    gets dispatched to multiple destinations that have different
    performance, and one of them frees the object. Object eventually
    gets reused, and the remaining reference is now pretty much garbage
    for the reader.
  * __In-place modification__: it is always good idea to use immutable
    objects, but if conditions do not allow you do do that, you may
    run into problem of modification object while it's content is being
    read. 
  * 

## If there are so many pitfalls, why should I even bother?

First of all, object pooling is not for everyone. It doesn't make sense
to start pooling objects in early application development stages, since
code becomes more complex.

Second of all, detecting memory problems and tracking down problems
caused by GC pauses deserves an article of it's own. Only thing I can
tell you: the same way you can't accidentally get buff if you went to
gym a couple of times, you won't accidentally find yourself trying to
optimise object creation patterns. There will be lots of debugging,
profiling and optimisations before you actually get there.

There are ways to work around every problem, but they are often either
too complex, or too expensive in terms of resources. For example, you
could always pass a unique "transaction id" and verify whether the
object is in a consistent state with whatever the previous atomic state
was there, although such tracking itself would be error prone and hard
to implement. In the end, it will be effectively useless.

Try to cover your code with possible race condition detection. Make sure
that entry and exit points are always clear and visible, and nothing is
allowed to escape.

## Wrapping Up

If you liked this article, you can
[follow me on twitter](https://twitter.com/ifesdjeen). Over the next
several months, I'll be releasing the articles on JVM-related
performance tricks you may find helpful. If you have any comments on
this article, don't hesitate to ping me over [email](alex@clojurewerkz.org).

## JDK.IO Talk

This article accompanies my JDK.IO talk "Going Off Heap". You can watch the slides here:

<script async class="speakerdeck-embed" data-id="7750f99082020132ec290201723d3ce0" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

<i>Published on Jan 19 2015</i>

<small>Copyright(c) Alex Petrov. Commercial use of complete work or parts of work is not allowed.
When referencing complete work or parts of work, explicit attribution is required.</small>
