---
title: "Things overlooked in Java Community: Lockless Concurrency"
layout: article
disqus_identifier: "lockless_concurrency_2"
disqus_url: "http://coffeenco.de/articles/lockless_concurrency_2.html"
---

# Introduction to Lockless Concurrency: Part 2

# Bottlenecks, Contention and Scalability

The first post has been discussed on several forums, and it seems that my advise to
"avoid contention" was taken to an extreme. Now, let's look at it from a bit different
perspective. In computing and concurrency, there's a well-known problem called "Readers-
Writers Problem"

Now, let's discuss what Contention might mean, which one is better to avoid and why.
First one would be `readers vs writers`: when readers don't block each other, although
each writer has to obtain an exclusive ownership over the resource, so it should wait
for all readers to complete. In this case, readers aren't contended: lock is reentrant,
therefore any amount of readers can access the resource at a time.


# Designing Simple Lockless Data Structures

In the first post, I've tried to present lockless concurrency in a very positive
light, and someone has noted that developing the lockless data structures is
actually much harder than the "normal" ones. This is certainly true, but if we
aim for formal software correctness and we'd like to make sure that all possible
concurrent read and write patterns can't lead to unpredictable state, it's still
worth an investment.

There's been a lot of research in cognitive scienses on the opt-in vs opt-out
defaults. Non-Treadsave mutability has been a default in Java community for many
years for now. No wonder that with the current tooling, immutable or lockless
data structures are much harder to get implemented. We have to concentrate on building
up a primitive set that helps us to build them more naturally and try making
it simpler for the users of the data structures. 

The data structures that are going to be mentioned here are nothing new, they're
provided in order to develop an intuition and get a rough feel on what the lockless
data structure might look like and how it's implementation could be different from
it's locking (or non-tread-safe) counterpart.

## Circular Buffer

## Bit Set

## Linked Queue 



