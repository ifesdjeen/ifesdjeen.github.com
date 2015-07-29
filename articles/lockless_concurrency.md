---
title: "Things overlooked in Java Community: Lockless Concurrency"
layout: article
disqus_identifier: "things_overlooked_in_java_community_lockless_concurrency"
disqus_url: "http://coffeenco.de/articles/2012_gym_gear.html"
---

# A Gentle Introduction to Lockless Concurrency

# Introduction

I've recently visited `#jcrete`, a Java Un-Conference. After talking
with people, it struck me that many things that were available and
extremely popular in the other communities (like Clojure and Haskell)
are still so little used in Java world.

Ever since Java got `Lambdas`, `Streams` and default method
implementations in `Interfaces`, it actually became much more enjoyable
language to use. It should have also changed ways people write their
code, although this process is much slower than I would have expected.

`Lambdas` allowed us to pass anonymous functions in order to avoid
creating a class for every single possible clause where variables escape
the context. They also allow to think of operations in terms of small,
atomic pieces that can be combined, passed around, reused and
referenced.

In this post I’ll try to examine the question of lockless concurrency in
Java - an extremely useful, yet shamefully overlooked topic.
Implementing lockless algorithms and data structures requires some
intuition on basic principles, so let's start with something simple.

# State of the Art

Before we start, let's discuss the concept of `atomicity`. By saying
that the set of operations is `atomic`, you imply the guarantee that
operations will behave as if they were a single step. Usually such
operations represent a single logical step.  No other thread can observe
the operation in a half-complete state.

Concept of `Thread Safety` arises exactly from the problem that it's
hard to guarantee all operations within your data structures are
`atomic`, so you have to introduce several indirection layers to make it
work. Pieces that have to be synchronised are also hard to identify. In
more complex scenarios you have to also think about the access patterns,
and despite the operations themselves look safe, one can still end up
with an unpredictable state when using a combination of those.

"Traditional" example of non-atomic operation is pretty much anything
that looks like it's done in a single step, but is, in fact, done in
multiple, for example, there's an integer field `a` with an initial value
of `0`, which is updated from two threads:

```java
// One is trying to update it by adding 100 to it
a = a + 100;

// Second one is trying to update it by adding 200
a = a + 200;
```

Reading `a` is an atomic operation (you can't read the value of `a`
partially). Same with writing `a`: it will be atomic. Although the value
of `a` may change between the initial read and the final assignment.

`a` was equal to `0`. One thread is trying to add `100` to it, which
would result to `100`. Meanwhile, another thread is trying to modify the
value of `a` by adding `200`.

If both operations were applied after one another sequentially, we'd end
up with a value of `300` (`0 + 100 + 200`).

Although, because threads have read the initial value of `a` (which was
`0`), we might end up having `a` with a value of _either_ `100` _or_
`200`. So it's not only utterly wrong, but also non-deterministic.

This certainly is an oversimplified scenario, but it demonstrates how
non-atomic operation might go wrong.

Gladly, there are many solutions that allow one to simplify development
of concurrent software. Sometimes such guarantees can be achieved by
applying simple constraints such as `commutativity` (think: reordering
of values to which the operation is applied doesn't change the result)
and `associativity` (think: changing the order of operation application
doesn't change the result).

Another way of thinking of it is `atomic operations`: each and every
operation is guaranteed to leave the object in an absolutely predictable
(discrete) state, as if there were no other operation running at the
same time. This concept is often combined with `transactionality`, which
means that operations will get rolled back to their initial state and
re-run again. These subjects will be covered in next paragraphs.

# Why Go Lockless?

Introducing locks usually means several things. One of them is
__blocking__: locks imply an exclusive ownership over the locked
resource, which means that only one thread can progress at a time. The
rest of threads will be waiting for lock to be released. Locks may
introduce a contention, when there are many parties interested in the
certain resource. One of the ways to improve the situation is to use
read/write locks, which allow multiple readers to access the resource
simultaneously, but provide an exclusive resource ownership for the
writer. This means that writer will wait for other readers and
writers. Also, that readers will wait until writer is done manipulating
the resource, which all may result into contention.

Another one is __programming overhead__, which is harder to
measure. It's easy to overlook a block of code that requires
synchronisation, identifying possible thread safety issues in third-party
code needs an in-depth investigation and analysis, one can release a
lock too early or hold it for too long without a need.

Modelling such system requires thinking dependencies through to avoid
two resources waiting for not being able to proceed because one is
already holding a lock, but it's progress depends on another one,
requiring acquiring the same lock.

On the other hand, `lock-free` algorithms allow threads to keep the
control over CPU and try to progress forward as long as it is
possible. It is much simpler to reason about your architecture,
concurrency and the general program layout when you know that you don't
have to worry whether something that's going to be accessed concurrently
has to be synchronised.

For example, readers can always proceed without any locking at all.
Writers don't have to wait for readers, just have to make sure that
the changes that they apply to the object do not coincide with
other writes happen at the same time.

Such an approach is also much more straightforward to reason about.
When we move further to discuss `Atoms`, you'll notice that they make
the notion of a conflict by concurrent execution explicit, and provide
you with a straightforward way to fix it.

It's worth mentioning that lockless data structures are simple from
the user perspective, but require different design approaches from
the implementer, which doesn't always make them easier to implement.
One of the most straightforward data structures to implement is
a `Circular Buffer`: an array and two atomic integers for reader
and writer indexes.

Another interesting lockless data structure is a `ConcurrentBitSet`,
a concurrent lockless implementation of the `BitSet` which is using
an `AtomicLongArray` and bitwise operators with masks to get and
set certain bits. 

`ConcurrentLinkedQueue` implementation involves a `Node` object
holding a volatile field that's updated atomically with an
`AtomicReferenceFieldUpdater` and pointers to head and tail of
the Queue. If you check it's internals, it involves tight loops,
just like the `Atoms`, which will be adressed further during
this post.

If there's enough interest, I'll make a write up dissecting
methods used in these three data structures. They all use
different techniques, which seem to cover enough for anyone
to get a good overview of how to implement a lockless DS.

# Optimistic Concurrency

Optimistic Concurrency assumes that any __Atomic Operation__ on state
can be completed without interfering with others. Each and every
operation will run without acquiring locks to the resources. Before
committing the result to the memory, the operation will verify that
there was no modification to the resource during the update. If
verification discovers that data was in fact modified meanwhile, the
operation will be restarted.

Main assumption of the Optimistic Concurrency is that modifications
won't be performed simultaneously all the time, retries will be
infrequent and in majority of cases will never occur. Read patterns
aren't taken into consideration, since in lockless systems they do not
require any synchronisation whatsoever.

Since update operations are allowed to (and eventually will) retry, they
have to be both stateless (have no shared state between operations), and
pure (have no impact on other resources).

# Compare and Swap

Modern CPUs have built-in support for the atomic `Compare And Swap`
operations. In Java CAS operations are available via
`java.util.concurrent.atomic` package. Generally, such an operation
consists of 4 steps:

  * (1) Read the value from memory and save it for future reference
  * (2) Perform a necessary update of the value
  * (3) Read the value once again, make sure it hasn't changed since (1) by
    comparing it with a saved value
  * (4) Perform commit of the new value

New value will be immediately visible for all the reading threads.
While write or swap operation is performed, old value is available for
reading without any locking. Operation is guaranteed to be performed in
full at all times, therefore read values are safe to consume.

Things like `ReentrantLock` and `CountDownLatch`, for example, wouldn't
be possible without `CAS` memory guarantees. They are both implemented a
bit differently in JDK (via `sun.misc.Unsafe`, `compareAndSwapInt` and
`compareAndSwapObject`), but general idea is exactly the same. If lock
operations weren't atomic, it would have been possible to acquire lock
from several threads.

The alert reader will notice that such operations are prone to so called
`ABA Problems`, or a false-positive match, when the value between read
and write operations is getting changed from `A` to `B` and then back to
`A`. You can work around this problem for us by adding a counter
alongside with the value being swapped. Every operation will receive a
value together with a counter, which both will be later used for when
attempting a commit. If you need such guarantees on JVM, you have to use
an `AtomicStampedReference`.

# Atoms

Although CAS operations provide us with some very nice and useful
guarantees, they are just one of the building blocks for lock-free
programming. If you combine the Atomic Object with a tight loop, you end
up with so called `Atom`, which is simply a Reference that allows
performing safe operations on it.

Atoms have the following properties:

  * Every operation will succeed after the finite number of tries
  * Every operation leaves Atom in a consistent state
  * Operations applied to same input value will always result into
    the same output value

Another concept which is arising from Mathematics that applies to Atoms
is `linearizability`. If `atomicity` only guarantees that any operation
will succeed or fail under certain assumptions, `linearizability` implies
that the set of operations will look for the rest of system as
instantaneous (e.g. as if they were just one op).

Atom is a concept that was present for a while, although got more
popular with `Clojure`. `Clojure` has a very simple implementation of an
`Atom`, which you can find
[here](https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/Atom.java).
Clojure implementation doesn't use generics, mostly due to how Clojure
is operating on data structures, so you will find that every operation
only has just `Object` type signatures in it.

It's easy to improve this implementation to use Java generics. You can
find my implementation in `Halflife`, an upcoming Stream Processing
solution on JVM
[here](https://github.com/ifesdjeen/halflife/blob/master/halflife-core/src/java/halflife/bus/concurrent/Atom.java). I'm
also putting a simplified version here:

```java
package halflife.bus.concurrent;

import java.util.concurrent.atomic.AtomicReference;
import java.util.function.UnaryOperator;

/**
 * Generic Atom
 */
public class  Atom<T> {

  private AtomicReference<T> ref;

  public Atom(T ref) {
    this.ref = new AtomicReference<T>(ref);
  }

  /**
   * Dereference current Atom. Will return a current value of the Atom.
   **/
  public T deref() {
    return ref.get();
  }

  /**
   * Apply an Operation that will atomically update the Atom.
   **/
  public T swap(UnaryOperator<T> swapOp) {
    for (;;) {                           // (5)
      T old = ref.get();                 // (1)
      T newv = swapOp.apply(old);        // (2)
      if(ref.compareAndSet(old, newv)) { // (3)
        return newv;                     // (4)
      }
    }
  }

}
```

As you can see, an implementation is extremely simple. We, once again,
split up the whole update into several steps:

  * `(1)` we read the current value from the `AtomicReference` and save
    it for later reference
  * `(2)` we apply the update (swap) operation to the `old` value
  * `(3)` we compare the newer (updated `newv`) value with `old` and
    atomically set it
  * `(4)` we return a new value set by the `Atom` if the atomicity of
    the whole operation can be guaranteed by what we see
  * `(5)` if atomicity can't be guaranteed, we're running in an tight
    loop that will retry the operation until it succeeds.

We're using a generic `java.util.concurrent.AtomicReference` here, which,
by providing us with a `compareAndSet` operation, guarantees that the
value will only be set in case it hasn't been changed.

An eternal loop `(5)` might look a bit scary, but if you think of it for
another minute, this is an optimistic approach to concurrency: we expect
that update operations will be made by producers that, if ran
simultaneously, will make a small amount of retries, but will usually
succeed from the first attempt.

In practice, retries are so infrequent that you don't have to worry
about them.  Although it's always better to make sure your architecture
doesn't contradict to the general assumptions made by such an approach.

Another good thing about `Atoms` is that readers are completely
independent from writers, and they will simply be learning the latest
updated value by dereferencing an `Atom`, and will never collide with
writers.

# Thinking in Increments

These concepts will also strongly influence the way you're thinking
about how you're modelling your data. For example, you have an
`Atom<T>`, which has an unary (`T -> T`, read: taking a type `T` and
returning a type `T`) operation attached to it, you can define simple
rules and reason about possible outcomes of your software in terms of
the applied operations.

For example, if the operation look like `(Integer old) -> old + 100`,
you know that no matter which order the operations are applied in, they
will produce the same outcome. You can check composition of the possible
operations and whether they converge to the same result despite
reordering.

In fact, it's easier to think of these operations in terms of `+ 100`,
`- 50` and so on, discarding the `old` value. This way it becomes more
obvious that `Atom` starts with some initial state, and, given the same
set of updates to perform, no matter in which order, no matter when and
after how many attempts, the program will be producing the same exact
result.

Keeping a log of incoming events that you can replay can make your
software even more robust, especially if you happen to find an error in
an update operation and discover that all the updates to the state were
resulting to something you did not initially intend.  But that's a story
for another day.

# Immutable Data Structures

Of course, if you're using "normal" data structures inside of your
`Atom`, there's still a lot of room for error. So it's always better to
opt-out for the immutable data structures.

There are many ways of making your data structures immutable. One of
them is to only use `final` fields, and only have `getters`. It's
certainly very straightforward, but also limiting, since you may want to
use something more complex than `POJOs` (or `Value Bags` as they used to
be called).  Another downside of such an approach is that you'll end up
making a copy of the object on each update.

Gladly, there are enough resources and libraries out there that provide
you with lots of ready to use Data Structures, such as `Lists`, `Sets`,
`Maps` and so on. One of the examples is of course [Google
Guava](https://github.com/google/guava/wiki/ImmutableCollectionsExplained).
There are more implementations and examples, although I don't want to
endorse either one, so I'll leave it for others.

# Persistent Data Structures

If you're fancy to go a step further, you will end up with Persistent
Data Structures. They're still immutable, although they have a built-in
concept of `structural sharing`, which means that when the data
structure is updated, all previously read values are still available in
memory, and some parts of them are shared with a new one without
copying.

Let's walk through the simple example. For instance, we have a hashmap:

```
{ "key1": "value1" }
```

And we'd like to update it, by "inserting" one more value to it:

```
{ "key1": "value1"
  "key2": "value1" }
```

Now, if one of consumer threads have learned that __last__ value was `{
"key1": "value1" }`, it will stay like that for this thread: it is
guaranteed that map will not get changed during the iteration or while
getting particular values from the map. Although keys and values
themselves won't be copied: they will be shared between all the current
instances of the `Persistent Map`.

Of course, this implies that both keys and values have to be in fact
immutable, but in majority of cases it is possible to model your data in
the way that nested updates won't require any copying at all.

Persistent Data Structures reduce the memory consumption and help to
avoid copying, also freeing CPU resources for something more useful than
simply copying things around. It also allows you to avoid adding
semantics of copying into your program as such.

There are several nice implementations of Immutable Persistent Data
Structures in Java, one of them can be found
[here](http://pcollections.org/). 

# Conclusion

Immutable and Persistent Data Structures are both very powerful and
useful concepts, although they become much more useful when you combine
them with something like `Atoms`. They're both worth of a post their
own, there's a lot to learn about their internals and semantics.

If you decide to go lock-free, it's easy enough to end up solving
problems which were already solved by other communities some time ago,
so it's always better to check out what's going on around the world
and refer to the recent (or well-forgotten) developments.

Immutability is one of the ways of dealing with concurrency, but
there are other ways to do it. There are many compromises and
alternatives: data structures with fast snapshots for reads and
syncronised writes, lockless mutable data stuctures, STM (which,
depending on implementation, also uses locking underneath) but
helps to achieve transactionality over multiple data structures,
and so on.

I'd like to continue sharing the concepts and paradigms from the other
programming languages such as `Haskell`, `Clojure` and `Erlang`, also
from Java Open Source projects, such as
[Netty](https://github.com/netty/netty),
[Cassandra](https://github.com/apache/cassandra),
[Reactor](https://github.com/reactor/reactor) and many others.  Examples
include `Streams`, `Async I/O`, `Channels`, interesting non-mainstream
Data Structures such as skip lists, snapshottable data structures and
more.

I'll try my best not to go into nitty-gritty details and keeping it
practical and accessible, but will try to provide enough details for the
people who'd like to take a step further and learn these things deeper.


# Further Reading

You may also call it "background reading". In no particular order:

  * [Low-Level post on Atomic Operations](http://preshing.com/20130618/atomic-vs-non-atomic-operations/)
  * Most likely I'm not the first one to refer to [The Art of Multiprocessor Programming](http://www.amazon.de/The-Multiprocessor-Programming-Revised-Reprint/dp/0123973376)
  * [Is Parallel Programming Hard, And, If So, What Can You Do About It?](https://www.kernel.org/pub/linux/kernel/people/paulmck/perfbook/perfbook-1c.2015.01.31a.pdf)
  * [OpenJDK 8 Synchroniser](http://hg.openjdk.java.net/jdk8/jdk8/hotspot/file/87ee5ee27509/src/share/vm/runtime/synchronizer.cpp)
  * [Understanding Clojure's Persistent Vectors](http://hypirion.com/musings/understanding-persistent-vector-pt-1)
  * [Nonblocking Algorithms and Scalable Multicore Programming](http://queue.acm.org/detail.cfm?id=2492433)
  * [Proving the Correctness of Nonblocking Data Structures](http://queue.acm.org/detail.cfm?id=2490873)
  * [Lock-Free Code: A False Sense of Security](http://www.drdobbs.com/cpp/lock-free-code-a-false-sense-of-security/210600279)
  * [Linearizability: A Correctness Condition for Concurrent Objects](http://courses.cs.vt.edu/~cs5204/fall07-kafura/Papers/TransactionalMemory/Linearizability.pdf)
  * [ConcurrentBitSet](https://github.com/ifesdjeen/blomstre/blob/master/src/main/java/ifesdjeen/blomstre/ConcurrentBitSet.java)

Posted on 26 July 2015.

