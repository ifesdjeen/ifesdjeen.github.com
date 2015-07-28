---
title: "JVM Performance Tricks: Object Pooling"
layout: article
disqus_identifier: "jvm_performance_part_1_object_pooling"
disqus_url: "http://coffeenco.de/articles/jvm_performance_part_1_object_pooling.html"
---

# Well Known Forgotten Tricks

Most problem are quite straightforward to solve: when something is slow,
you can either optimize it or parallelize it. When you hit a throughput
barrier, you partition a workload to more workers. Although when you
face problems that involve Garbage Collection pauses or simply hit the
limit of the virtual machine you're working with, it gets much harder to
fix them.

When you're working on top of a VM, you may face things that are simply
out of your control. Namely, time drifts and latency.  Gladly, there are
enough battle-tested solutions, that require a bit of understanding of
how JVM works.

If you can serve 10K requests per second, conforming with certain
performance (memory and CPU parameters), it doesn't automatically mean
that you'll be able to liearly scale it up to 20K. If you're allocating
too many objects on heap, or waste CPU cycles on something that can be
avoided, you'll eventually hit the wall.

The simplest (yet underrated) way of saving up on memory allocations is
object pooling. Even though the concept is sounds similar to just
pooling objects and socket descriptors, there's a slight difference.

When we're talking about socket descriptors, we have limited, rather
small (tens, hundreds, or max thousands) amount of descriptors to go
through.  These resources are pooled because of the high initialization
cost (establishing connection, performing a handshake over the network,
memory-mapping the file or whatever else). In this article we'll talk
about pooling larger amounts of short-lived objects which are not so
expensive to initialize, to save allocation and deallocation costs and
avoid memory fragmentation.

# Object Pooling

Object Pool is a design pattern, that works with a set of pre-initalized
entities, instead of disposing and then re-creating them on
demand. Whenever the client of the pool is done working with an object,
it just returns it to the pool for recycling.

You may think about pooling like about the manual memory management:
allocation and freeing of objects is explicit.

In garbage-collected langauges, such as Java, pooling is used to reduce
the garbage collection pressure by handling memory management in
critical parts of the program in an explicit manner.

If the objects contained in the pool have large initialization cost, or
have to be created in large quantities at a time, pool can be used to
pay this cost upfront (for example, during the application startup), and
avoiding these expensive operations during the working mode.

Pooling objects is the first and most straightforward way to reduce the
GC pressure. There are three easy-to-identify use-cases for object
pooling. We're always talking about the objects sharing the same
structure (often they're just instances of the same class). Also, these
objects are mostly short-lived.

Here's a couple of examples of the allocation patterns that are nice
candidates for pooling:

  * objects are allocated constantly at an unchanging rate (fast enough
  that it starts influencing application performance), the garbage 
  collection times gradually increase until stabilizing, memory 
  usage grows. 
  * objects are allocated with bursts, every burst resulting in a 
  system lag, followed by a noticable GC pause.

In the majority of cases such objects are created as either data
containers or wrappers, that act as an envelope between an application
and internal message bus, communication layer or some API.

You can see such things every day: when using Database Drivers that have
Request and Response objects created for each request and response,
Message or Event wrappers within favorite messaging system
using. Parsers create objects of a certain type as a result of parsing,
RPC libraries create protocol message instances. These objects are
literally everywhere.

Object Pooling helps to preserve and reuse these constructed object
instances. This might be a good solution for cases when your profiler
tells you that you're constantly creating way too many objects of the
same exact type.

There are two basic recycling patterns for pools are borrowing and
reference-counting: borrowing and reference counting. They mostly
borrowing is more explicit, reference counting implies automatic
recycling when all interested parties are done with the object.
Let's check out both of them.

## Borrowing 

Borrowing mostly looks like `malloc` / `free` on top of
garbage-collected runtime, and you'll certainly face same issues as you
were facing back in the days programming non-garbage collected
languages.

If you have freed the object and returned it to the pool, any
modifications to it or reading from it will lead to unpredictable
results: other writers or readers may hold same object at the same
time. In C, any operation on freed (dangling) pointer would result into
segmentation fault. Here you just have to take care of it yourself, or
build in some additional protection mechanisms.

Borrowing is good when the consumer operation has explicit begin/end. 
In majority of cases, it isn't used in cases when object could be
accessed by multiple threads simultaneously. In this case
synchronising access and exit point may just be too complicated. 

The Big advantage of borrowing is that object may know absolutely
nothing about pool or even existance of the pool. It has to have some
`reset` mechanisms, but since the control over borrowing and return is
completely up to consumer, object itself doesn't have to take care of
it. This means that you may even pool the API objects of an external
library.

## Reference-counting

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

Each time the objects enters a block, caller has to `retain` the object,
and `release` it after the execution block is done. Each object holds an
internal counter and a reference to the pool. As soon as counter reaches
zero, object returns itself to the pool.

Reference counting is usually used when allocated objects are accessed
by more than a one consumer at a time, object can only be recycled after
all blocks have releases the reference. It is also good for pipelining
or nested processing. In this case you can avoid explicit operation
begin/end, and allow recycling after last consumer is done with the
object.

# Allocation Triggers

When working with pools, it important to identify pool growth
strategies, allocation trigger conditions and whether pool will be
bounded. 

__Allocation triggers__ are responsible for noticing that pool is low on
elements, and needs to allocate new resources. 

## Empty Pool Trigger

The simplestway is to allocate objects whenever the pool is empty. In
this case, you can use some `Queue` implementation, put elements into
the queue, `poll` the queue each time you require a new object. If
there're no objects available, the allocation step is triggered.

## Watermarks

Problem with this trigger strategy is of course that one of the poll
operations will be paused to perform the allocation. To avoid it, you
may use watermarks. Whenever the new object is requested from the pool,
you check how many elements are still available in the pool. If the
resources are at critically low level, allocation step is triggered.

For example, you start with 100 elements, which corresponds to `100%`, and
objects get requested from the pool. After `75` elements are given, there
are only `25` elements left in the pool, and pool is now at the cricically
low resource level of `25%`, so additional resources are allocated, and
counter is adjusted accordingly.

## Lease/Return Rate

Most of the time, watermarks are enough, although sometimes a bit more
precision is required. In this case, you can use record `lease` and
`return` rates, at which objects are being taken and returned to the
pool. For that, you count how many items were allocated per second and
find some statistically significant number representing the rate.

For example, if you have `100` items in the pool, and `20` items are
taken form pool every second, but only `10` are returned, you will empty
the pool after `9` seconds.

$ poolWillBeEmptyIn = \frac{poolSize - takeRate}{takeRate - returnRate} + 1$

<script type="text/javascript" src="https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>

Using this information, you can "plan ahead" and allocate enough
elements to satisfy the lease requirements.

# Growth Strategies

__Growth strategies__ identify what happens when the allocation trigger
is fired, and __bounds__ specify maximum allowed amount of allocated
objects.

## Fixed Size

The simplest pool implementation is of course a fixed-size
pool. Elements are pre-allocated in one run, and pool is never grown
afterwards.

Such an implementation is most useful when you need to make sure that
only a certain amount of objects can be out simultaneously, and maybe
throttle the application, forcing it to consume not more than a certain
amount of resources.

Fixed size pool may cause resource starvation, in case the pool size
isn't calculated optimally, but performance characteristics are easy to
grasp, because allocations are done explicitly. 

Most of the time, you'd allocate more resources than you usually
need. This way, at peak times it might cause some latency when pool
becomes empty and you have to wait for the next freed object, although
you will have some free resources in the pool all the time.

## Tiny-Step growth

If you can identify the size of the pool with a good degree of
certanity, but think that during peak times you still may run in
resource starvation problem, you can grow your pool with very small
steps (say, one additional item at a time).

Of course you can allocate new item on-demand, which would add some
latency for every item, allocated after the pool was empty, but it's
easy to implement and maintain, and the pool size will correspond to the
maximum amount of objects that may possibly exist in the system
simultaneously.

## Block Growth

If you can't afford allocation pauses, and would like to be able to get
a ready element from the pool any time, you'd have to use a block-growth
allocation strategy, combined with an __allocation trigger__ of your
preference.

This way, every time you reach a `25%` watermark, you can allocate
the additional `25%` of the pool size and see if it fits the application
demand. 

In such cases, you're almost always allocating more resources than may
be possibly required, and large exponent values may result into running out
of memory.

Using lease/return rates, you may get down to quite precise pool
size. But it's always good to keep it flexible and allow pool to grow a
little.

## Pitfalls

Of course, as long as you start managing memory youself, you become
fully responsible for pretty much everything that's going with the
memory you're managing at all times. There are several ways things may
go wrong:

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
  * __Shrinking__: it's a good idea to shink the pool whenever there's
  a large amount of objects sit unused. Never shrinking a pool
  (freeing the objects from the pool), may result in an oversized pool.
  * __Object re-initialization__: if pool implementation doesn't have
  clear semantics of cleaning up the object, it might be unclear
  whose responsibility it is to bring the object back to the "clean"
  state. Make sure you can always guarantee that objects obtained from
  pool have a clean state and contain no dirty fields from previous
  usages. 

## Closing words

Object pooling is not for everyone. It doesn't make sense to start
pooling objects in early application development stages, since you don't
know what exactly to poll and can't clearly decide how to poll it.

There are ways to work around every problem, but they are often either
too complex, or too expensive to implement. However, it's always good
to have a couple of trick up your sleeve.

## JDK.IO Talk

This article accompanies my JDK.IO talk "Going Off Heap". You can watch the slides here:

<script async class="speakerdeck-embed" data-id="ef68ebc0820101327cb32efb460f291e" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

<i>Published on Jan 19 2015</i>

<small>Copyright(c) Alex Petrov. Commercial use of complete work or parts of work is not allowed.
When referencing complete work or parts of work, explicit attribution is required.</small>
