---
title: Lazy is not that lazy
layout: article
disqus_identifier: "lazy_is_not_that_lazy"
disqus_url: "http://coffeenco.de/articles/lazy_is_not_that_lazy.html"
---

Clojure developers love to say that in Clojure, everything is lazy. That's true, up to some extend, of course.
That fact may be already well known to you, but I'd like to illustrate the fallacy of thinking of lazyness in
a `traditional` way, and what it may (potentially) lead to.

## Lazy seqs in action

First of all, it's worth mentioning that in Clojure, all lazy sequences are chunked.  Let's consider a rather simple
example: you want to implement some functionality, that requires sequencing and fallbacks, like recommendations
for the user (a-la Amazon FTW).

For example, let's express some basic recommendation functionality, in function outlines. Function should either
return up to three results (vector), nil or empty sequence, if no matches are present.

If user has visited one or more products from the currently active category, do retargeting, and return up to three
most recently visited products

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=01_lazy.clj""></script>

Otherwise, if user has visited one or more products from one of the related categories, display up to three most recently
visited products from these categories:

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=02_lazy.clj""></script>

Otherwise, display highlighted (promoted) products from the current category:

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=03_lazy.clj""></script>

If neither one of previous matches happened, fall back to standard website-wide highlights (promotions):

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=04_lazy.clj""></script>

Now, we define an order of execution:

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=05_lazy.clj""></script>

## Lazy enough?

Thinking in terms of lazy sequences, most straightforward implementation would be something like that:

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=06_lazy.clj""></script>

Both `map` and `filter` are lazy, that's true. But whenever the feature goes to production, you suddenly realize
that all the costly queries to the database are made from all four functions, because of chunking. So laziness
didn't help you in that case at all. Clojure runtime thinks: ok, he just wants the first result, but I'll prefetch
some more items for him, just in case he needs them later.

Instead of optimizing the code, we've made it worse. In case you need to break on the first match, you need to have
a bit different approach. If we can't (or shouldn't) implement that in terms of lazy functions, what do we do?
We need something that's closer to a `while()` loop, which could be either traditional recursion or `loop-recur`
construct.

## Recursion

Traditional recursive function would look something like that:

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=07_lazy.clj""></script>

You start with a complete sequence of fetchers, try first, if it has returned nil, you move to the next one,
and go through it until you actually find a match. Same functionality, in more 'clojuric' way would look like
that:

## More of a while thing

<script src="https://gist.github.com/ifesdjeen/4757594.js?file=08_lazy.clj""></script>

Bottomline is: if you need to go through the sequence that is either small, or executing the next step costs
more than an overhead of lazy seuence (that is made cheap with chunking and pre-fetching), use loop-recur construct.
I'm not trying to talk you out of using lazy sequences, just use them wisely. It's a very smart optimization,
and it exploits the implementation of standard Clojure data structures, for example, vectors are internally built
as a tree, where each node has at most 32 children.
