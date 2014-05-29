---
title: "Count Min Sketch"
layout: article
disqus_identifier: "count_min_sketch"
disqus_url: "http:/coffeenco.de/articles/count_min_sketch.html"
---

## Count Min Sketch

[Count-min sketch](http://dimacs.rutgers.edu/~graham/pubs/papers/cm-full.pdf) is a __sublinear space__
data structure for summarizing data streams.

Count min sketch helps you to understand how many times certain item has occured in your stream. 
It's like a database which you can __only retrieve a count from__, without being able to __retrieve
a precise value__. So you can ask it "how many times have I seen Alex?" but you can never ask it
"what items have you seen at all?".

## Algorithm 

The algorithm itself is quite straightforward: 

  * You create a table, filled with zeroes, of a `width` $w$ and `height` $d$
  * $d$ is calculated from $d = ⌈ln 1/δ ⌉$
  * $w$ is calculated from $w = ⌈e/ε⌉$
  * You take $d$ linear hash functions 
  
### Update

  * You for rows with indexes from 0 to $d-1$ (zero-based index), you calculate a hash of given value
  * Having a current update row denoted as $i$, and $i$ hash-function denoted as $h$, and current value
    in your table denoted as $old$
  * You update a table at position $[i, h(value)]$ to $old + 1$
  
## Lookup

  * You for rows with indexes from 0 to $d-1$ (zero-based index), you calculate a hash of given value
  * Having a current update row denoted as $i$, and $i$ hash-function denoted as $h$
  * You find a maximum of values at positions $[i, h(value)]$ 
  * Profit!

# Live demo

You can play around with a live-updating implementation of a count min sketch below.
You enter a word, hit `add` button, table gets updated. For each entered word, you 
will see an estimated occurrence value.

<div id="app">&nbsp;</div>

<script src="/assets/javascripts/count_min_sketch/vendor/react-with-addons.js"></script>
<script src="/assets/javascripts/count_min_sketch/cljs/goog/base.js"></script>
<script src="/assets/javascripts/count_min_sketch/cljs/main.js"></script>
<script type="text/javascript">goog.require("envision.cmsketch");</script>


<script type="text/javascript" src="https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
