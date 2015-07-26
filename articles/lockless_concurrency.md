---
title: "Things overlooked in Java Community, Part 1: Lockless Concurrency"
layout: article
disqus_identifier: "things_overlooked_in_java_community_lockless_concurrency"
disqus_url: "http://coffeenco.de/articles/2012_gym_gear.html"
---

# Introduction

I've recently visited `#jcrete`, a Java Un-Conference. After talking with people,
it stroke me that many things, that's been available and extremely popular in the
other communities (like Clojure and Haskell) are still unheard there. 

Ever since Java got `Lambdas`, `Streams` and default methods in `Interfaces`, it
actually became much more enjoyable language to use. It should have also changed
ways people write their code, although this process is much slower than I would
have expected.

`Lambdas` allowed us to pass anonymous functions with captured context in order
to avoid creating class for every single possible clause where variables escape
the context. They also allow to think of operations in terms of small, atomic
pieces that can be combined, passed around, reused and referenced.

In this post I’ll try to examine the question of lockless concurrency in Java -
an extremely useful, yet shamefully overlooked topic.

# State of the Art

Before we start, let's discuss the concept of `atomicity`. By saying that
the set of operations is `atomic`, you imply the guarantee that operations
(usually representing a single logical part) will behave as if they were
a single step. No other thread can observe the operation in a half-complete
state.

Concept of Thread Safety arises exactly from the problem that it's hard to
guarantee all operations within your data structures are `atomic`
so you have to introduce several indirection layers for them. Pieces
that have to be synchronised are also hard to identify. In more complex
scenarios you have to also think about the access patterns, and despite
safety of the concrete operations, one can still end up with an
unpredictable state.

"Traditional" example of non-atomic operation is pretty much anything
that looks like a "single entry", but is, in fact, multiple, for example,
there's an integer field `a` with an intial value of 0, which is updated
from two threads:

```java
// One is trying to update it by adding 100 to it
a = a + 100;

// Second one is trying to update it by adding 200
a = a + 200;
```

Reading `a` is an atomic operation (you can't read the value of `a`
partially). Same with writing `a`: it will be atomic. Although the
value of `a` may change between the initial read and the final
assignment.

`a` was equal to `0`. One thread is trying to add `100` to it,
which would result to `100`. Meanwhile, another thread is
trying to modify the value of `a` by adding `200`. 

If both operations were applied after one another sequentially,
we'd end up with a value of `300` (`0 + 100 + 200`).

Although, because theads have read the initial value of `a` (which
was `0`), we might end up having `a` with a value of _either_
`100` _or_ `200`. So it's not only utterly wrong, but also
undeterministic.

This is certainly an oversimplified scenario, but it demonstrates
how non-atomic operation might go wrong.

Gladly, there are many solutions that allow one to simplify development
of concurrent software. Sometimes such guarantees can be achieved by
applying simple constraints such as `commutativity` (think:
reordering of values to which the operation is applied doesn't change
the result) and `associativity` (think: changing the order of operation
application doesn't change the result).

Another way of thinking of it is atomic operations: each and every
operation is guaranteed to leave the object in an absolutely predictable
state, as if there were no other operation running at the same time.
This concept is often combined with transactionality, which means
that operations will get rolled back to their initial state and re-run.
More of it will be covered in next paragraphs.

Imagine a simple in-memory cache, which consists just of a `Map`
that holds keys and values. If you check the implementation of the `HashMap`
itself, it becomes obvious that updating it involves several steps.
In case several threads are competing for the resource, it's impossible
to say which thread will be starting any particular operation in
any timeframe.

# Programming With Locks

// Here Be Dragons

# Why Go Lockless?

Lock-free algorithms allow threads to keep the control over CPU and try
to progress forward as long as it is possible. It is much simpler to reason
about your achitecture, concurrency and the general program layout when
you know you don't have to worry if something is going to be accessed
from several threads doesn't have to be syncronised.

One of the reasons to go lockless is an overhead introduced by the
resource acquisition. Same problem can also result to resource contention.
This is particularly important for cases when there's a clear separation
of consumers and producers, although they both have to obtain an exclusive
ownership of the resource in order to progress.

When certain threads have a priority over the others, it may result into
higher-priority threads to wait for the resource and result into massive
scalability issues. Besides all the forementioned issues, problems with
locks, as it already was mentioned are hard to identify and debug. 

# Optimistic Concurrency

Optimistic Concurrency assumes that any __Atomic Operation__ on state can be
completed without interfering with others. Each and every operation will
run without acquiring locks to the resources. Before comitting the result
to the memory, the operation will verify that there was no modification
to the resource during the update operation. If verification discovers that
data was in fact modified meanwhile, the operation will be restarted.

Main assumption of the Optimistic Concurrency is that resources aren't
contended, and retries will be infrequent and in majority of cases will
never occur.

Since update operations are allowed (and eventually will) retry, they have
to be both stateless (have no shared state between operations), and pure
(have no side-effects on other resources).

# Compare and Swap

Modern CPUs have built-in support for the atomic `Compare And Swap` operations.
In Java they're available via `java.util.concurrent.atomic` package. Generally,
such an operation consists of 4 steps:

  * (1) Read the value from memory and save it for future reference
  * (2) Perform a necessary update of the value
  * (3) Read the value once again, make sure it hasn't changed since (1)
  * (4) Perform commit of the new value

The alert reader will notice that such operations are prone to so called
`ABA Problems`, or a false-positive match, when the value between read
and write operations is getting changed from `A` to `B` and then back to `A`.
Although CPU designers have already solved this problem for us by adding
a counter alongside with the value being swapped. Every operation will
receive a value together with a counter, which both will be later used
for when attempting a commit.

New value will be immediately visible for all the reading threads.
While write or swap operation is performed, old value is available for
reading without any locking. Operation is guaranteed to be performed
in full at all times, therefore read values are safe to consume.

Things like `ReentrantLock` and `CountDownLatch`, for example, wouldn't
be possible without `CAS` memory guarantees. They are both implemented
a bit differently in JDK (via `sun.misc.Unsafe`, `compareAndSwapInt` and
`compareAndSwapObject`), but general idea is exactly the same. If lock
operations weren't atomic, it would have been possible to acquire lock
from several threads.

# Atoms

Although CAS operations provide us with some very nice and useful
guarantees, they are just one of the building blocks for lock-free
programming. If you combine the Atomic Object with a tight loop,
you end up with so called `Atom`, which is simply a Reference
that allows performing safe operations on it.

Atoms have the following properties:

  * Every operation will suceed after the finite number of tries
  * Every operation leaves Atom in a consistent state
  * Operations applied to same input value will always result into
    the same output value

Another concept which is arising from Mathematics that applies
to Atoms is `linearizability`. If `atomicity` only guarantees
that any operation will suceed or fail under certain assumptions,
`linearizability` implies that the set of operations will look
for the rest of system as instantaneous (e.g. as if they
were just one op). 

Atom is a concept that were present for a while, although got
more popular with `Clojure`. `Clojure` has a very simple implementation
of an `Atom`, which you can find (here)[https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/Atom.java].
Although Clojure implementation isn't generic, mostly due to how
Clojure is operating on data structures, and you will find that
every operation only has just `Object` type signatures in it.

I've tried to generify the implementation and add a couple of
operations to it. You can find my implementation in `Halflife`,
an upcoming Stream Processing solution on JVM (here)[https://github.com/ifesdjeen/halflife/blob/master/halflife-core/src/java/halflife/bus/concurrent/Atom.java].

I'm also putting a simplified version here:

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

  * `(1)` we read the current value from the `AtomicReference` and save it
    for later reference
  * `(2)` we apply the update (swap) operation to the `old` value
  * `(3)` we compare the newer (updated `newv`) value with `old` and atomically
    set it
  * `(4)` we return a new value set by the `Atom` if the atomicity of the whole
    operation can be guaranteed by what we see
  * `(5)` if atomicity can't be guaranteed, we're running in an tight loop that
    will retry the operation until it suceeds.

We're using a generic `java.util.concurrent.AtomicReference` here, which
provides us with a `compareAndSet` operation, which guarantees that the value
will only be set in case it hasn't been changed.

An eternal loop `(5)` might look a bit scary, but if you think of it for
another minute, this, as was mentioned previously, is an optimistic approach
to concurrency: we expect that update operations will be made by producers
that, if ran simultaneously, will make a small amount of retries, but
will usually succeed from the first attempt.

In practice, retries are so infrequent that you shouldn't even think about them.
Although it's always better to make sure your architecture doesn't contradict
to the general assumptions made by such an approach.

Another good thing about `Atoms` is that readers are completely independent
from writers, and they will simply be learning the latest updated value by
dereferencing an `Atom`, and will never collide with writers.

# Thinking in Increments

These concepts will also stronlgy influence the way you're thinking about
how you're modelling your data. For example, you have an `Atom<T>`, which
has an unary (`T -> T`, read: taking a type `T` and returning a type `T`)
operation attached to it, you can define simple rules and reason about
possible outcomes of your software in terms of the applied operations.

For example, if the operation look like `(Integer old) -> old + 100`, you
know that no matter which order the operations are applied in, they
will produce the same outcome. You can check composition of the possible
operations and whether they converge to the same result despite
reordering.

In fact, it's easier to think of these operations in terms of `+ 100`,
`- 50` and so on, discarding the `old` value. This way it becomes
more obvious that `Atom` starts with some initial state, and, if
a certain set of operations is applied, no matter in which order,
no matter when and after how many attempts, the program will be error
prone.

Keeping a replayable log of incoming events can make your software
even more robust, especially if you happen to find an error in
an update operation and discover that all the updates to the
state were resulting to something you did not initially intend.
But that's a story for another day.

# Immutable Data Structures 

Of course, if you're using "normal" data structures inside of your `Atom`,
there's still a lot of room for error. So it's always better to opt-out
for the immutable data structures.

There are many ways of making your data structures immutable. One of them
is to only use `final` fields, and only have `getters`. It's certainly very
straightforward, but also limiting, since you may want to use something
more complex than `POJOs` (or `Value Bags` as they used to be called).
Another downside of such an approach is that you'll end up making a
copy of the object on each update.

Gladly, there are enough resources and libraries out there that provide
you with lots of ready to use Data Structures, such as `Lists`, `Sets`,
`Maps` and so on. One of the examples is of course (Google Guava)[https://github.com/google/guava/wiki/ImmutableCollectionsExplained].
There are more implementations and examples, although I don't want
to endorse either one, so I'll leave it for others.

# Persistent Data Structures

If you're fancy to go a step further, you will end up with Persistent
Data Structures. They're still immutable, although they have a built-in
concept of `structural sharing`, which means that when the data structure
is updated, all previously read values are still available in memory,
and some parts of them are shared with a new one without copying.

Let's walk through the simple example. For instance, we have a hashmap:

```
{ "key1": "value1" }
```

And we'd like to update it, by "inserting" one more value to it:

```
{ "key1": "value1"
  "key2": "value1" }
```

Now, if one of consumer threads have learned that __last__ value was
`{ "key1": "value1" }`, it will stay like that for this thread:
it is guaranteed that map will not get changed during the iteration
or while getting particular values from the map. Although keys
and values themselves won't be copied: they will be shared
between all the current instances of the `Persistent Map`.

Of course, this implies that both keys and values have to be in fact
immutable, but in majority of cases it is possible to model your
data in the way that nested updates won't require any copying at all.

Persistent Data Structures reduce the memory consumption and help
to avoid copying, also freeing CPU resources for something more
useful than simply copying things around. It also allows you to
avoid adding semantics of copying into your program as such.

There are several nice implementations of Immutable Persistent
Data Structures in Java, one of them could be found [here](http://pcollections.org/).

# Conclusion

Immutable and Persistent Data Structures are both very powerful
and useful concepts, although they become much more useful when
you combine them with something like `Atoms`.

If you decide to go lock-free, it's easy enough to end up solving
problems which were already solved by other communities some time
ago, so it's always better to look your fellow PLT person over the
shoulder and check out what are the recent (or well-forgotten)
developments in this direction.

There are more complex concepts, such as `Software Transactional Memory`,
which help to achieve transactionality over multiple Data Structures.

This post is one in an upcoming series of concepts from the languages
such as `Haskell`, `Clojure` and `Erlang`, which are worth taking
a look at. I'll be covering the concepts and paradigms which are
already actively used by the awsome Open Source projects such
as [Netty](https://github.com/netty/netty), [Cassandra](https://github.com/apache/cassandra),
[Reactor](https://github.com/reactor/reactor) and many others.
Examples include `Streams`, `Async I/O`, `Channels`, interesting
non-mainstream Data Structures such as skip lists, snapshottable
data structures and more.

I'll try my best not to go into nitty-gritty details and keeping it
practical and accessible, but will try to provide enough details
for the people who'd like to take a step further and learn
these things deeper.

# Further Reading

You may also call it "background reading". In no particular order:

  * [Low-Level post on Atomic Operations](http://preshing.com/20130618/atomic-vs-non-atomic-operations/)
  * Most likely I'm not the first one to refer to [The Art of Multiprocessor Programming](http://www.amazon.de/The-Multiprocessor-Programming-Revised-Reprint/dp/0123973376)
  * [Is Parallel Programming Hard, And, If So, What Can You Do About It?](https://www.kernel.org/pub/linux/kernel/people/paulmck/perfbook/perfbook-1c.2015.01.31a.pdf)
  * 

Posted on 26 July 2015.

