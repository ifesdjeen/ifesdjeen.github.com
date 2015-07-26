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

# State Of the Art

Concept of Thread Safety arises exactly from the problem that it's hard to
guarantee all the operations within your data structures are atomic,
so you have to introduce several indirection layers for them. Pieces
that have to be syncronised are also hard to identify. In more complex
scenarios you have to also think about the access patterns, and despite
safety of the concrete operations, one can still end up with an
unpredictable state.

Gladly, there are many solutions that allow one to simplify development
of concurrent software. Sometimes such guarantees are granted by
applying simple mathematical concepts such as `commutativity` (think:
reordering of values applied by the operation) and `associativity`
(think: changing the order of operation application).

Another way of thinking of it is atomic operations: each and every
operation is guaranteed to leave the object in an absolutely predictable
state, as if there were no other operation running at the same time.
This concept is often combined with transactionality, which means
that operations will might get retried. More of it will be covered
in next paragraphs.

If you imagine a simple in-memory cache, which consists just of a `Map`
that holds keys and values. If you check the implementation of the `HashMap`
itself, it becomes obvious that updating it involves several steps.
In case several threads are competing for the resource, it's impossible
to say which thread will be starting any particular operation in
any timeframe.

Locks are hard to get right, and I don't want to go into detailed
examples of how to analyse the software to reassure yourself that
it's formally correct. In this post, I'm going to concentrate on
one of the methods which is much simpler to grasp, implement, use
and reason about. But before that let's think about why an
alternative can even be better. 

# Why Go Lockless?

Concurrent Programming with locks is by no means an easy task. It is's often
very hard to get right and is prone to many problems, such as `deadlocks`,
`livelocks` and `race conditions`. All these problems are very hard to
identify and debug, and often appear to be heisenbugs. 

Lock-free algorithms allow threads to keep the control over CPU and try
progressing forward as long as it is possible. It is much simpler to reason
about your achitecture, concurrency and the general program layout when
you know you don't have to worry if something that's going to be accessed
from several threads doesn't have to be syncronised.

One of the reasons to go lockless is an overhead introduced by the
resource aquisition. Same problem can also result to resource contention.
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
run without aquiring locks to the resources. Before comitting the result
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
operations weren't atomic, it would have been possible to aquire lock
from several threads.

# Atoms

Atom is a concept that were present for a while, although got
more popular with `Clojure`. `Clojure` has a very simple implementation
of an `Atom`, which you can find [here](https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/Atom.java).
Although Clojure implementation isn't generic, mostly due to how
Clojure is operating on data structures, and you will find that
every operation only has just `Object` type signatures in it.

I've tried to generify the implementation and add a couple of
operations to it. You can find my implementation in `Halflife`,
an upcoming Stream Processing solution on JVM [here](https://github.com/ifesdjeen/halflife/blob/master/halflife-core/src/java/halflife/bus/concurrent/Atom.java).

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
    for (;;) {
      T old = ref.get();
      T newv = swapOp.apply(old);
      if(ref.compareAndSet(old, newv)) {
        return newv;
      }
    }
  }

  /**
   * Atomically update the Atom (simply reset the value without learning the old one).
   **/
  public T reset(T newv) {
    for (;;) {
      T old = ref.get();
      if(ref.compareAndSet(old, newv)) {
        return newv;
      }
    }
  }
}
```

As you can see, an implementation is extremely simple. We're using
a generic `java.util.concurrent.AtomicReference` here, w

# Immutable Data Structure

# Persistent Data Structures





# Lambdas

## captured context

## wrapping

## Passing operations

## 
