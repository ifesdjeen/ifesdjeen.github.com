---
title: Overcoming fear and bringing Clojure and C on board
layout: article
disqus_identifier: "overcoming_fear_and_bringing_clojure_and_c_on_board"
disqus_url: "http://coffeenco.de/articles/overcoming_fear_and_bringing_clojure_and_c_on_board.html"
---

There are many things that lay outside of your comfort zone. But solving problems in your knowledge domain
will very soon lead to solutions that do not scale well, or would be not as good as ones that are already
available in Java or C worlds.

Using Clojure for backend development opened up a world of Java libraries and allowed scaling that was not
possible before.

AMQP allowed us to interconnect 3 languages (Ruby, C and Clojure) and turn our system into a scalable,
extendable and modular one.

Once you start using these things, you can't imagine the world without them.

You'll hear an interesting story about how to:

  * build and open source over 10 Clojure libraries (including, but not limited to "Langohr":(https://github.com/michaelklishin/langohr),
"Monger":(https://github.com/michaelklishin/monger"), "Elastisch":(https://github.com/clojurewerkz/elastisch)
  * build your own Node.js on top of "libabbitmq-c":(http://hg.rabbitmq.com/rabbitmq-c/) and
"libv8":(http://code.google.com/p/v8/), that would run on ARM-based devices with 200Mhz processor and 64Mb RAM
  * prototype in C, and iterate until it works in Ruby with FFI
  * build a distributed proxy
  * build systems, that interconnect Ruby and Clojure via AMQP

