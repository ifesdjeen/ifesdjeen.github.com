---
title: "Cognitive Monitoring, part 1"
description: "Simple tricks that will improve your monitoring techniques by providing information in a way that's easier for your brain to see and interpret."
keywords: "monitoring, devops, psychology, vizualization, graphs"
layout: article
disqus_identifier: "cognitive_monitoring"
disqus_url: "http://coffeenco.de/articles/cognitive_monitoring.html"
---

## Cognitive Monitoring

When implementing a monitoring system, or, being more precise, visualization part for the monitoring system, it’s very important to keep in mind several concepts of a human mind.

## Context matters

Same image means different things in different contexts. Check that image out:

<img src="/assets/images/cognitive_monitoring/illusion_01.png" style="max-width: 95%" />

Have you noticed that B and 13 are pretty much the same image? But when reading top-to-bottom and left-to-right, its quite easy for us to interpret them differently, right? You have no doubt that you're reading A-B-C sequence when reading left-to-right and 12-13-14 sequence when looking up-to-bottom.

Same goes for patterns. Consider a graph (1):

<img src="/assets/images/cognitive_monitoring/01.png" style="max-width: 95%" />

Here we see server memory, raising pretty fast, and noticable drops. And another graph (2):

<img src="/assets/images/cognitive_monitoring/02.png" style="max-width: 95%" />

Here we see data points that are staying in pretty much same range.

Without a good context, it’s hard to tell which one may speak of abnormalitites. In case first one is JVM memory, you may be certain that things are going well, and Garbage Collection cleans up unnecessary resources. On the other hand, if it’s website performance times, that climb up and then suddenly drop, you may want to check your application code.

Or, for example that graph:

<img src="/assets/images/cognitive_monitoring/03.png" style="max-width: 95%" />

Here we see some reasonable distribution, but also some spikes.

If it’s your backend server processor times, it may be fine (it gets something new/heavy to do every once in a while, other than that it remains in normal funcitonality mode). Same pattern for web server may be considered critical, and require investigation, for example, on the load balancer side.

Given different context, we will interpret some behavior as normal, and some other behavior as abnormal. For processor times. Also, different number ranges for different number classes gields different conclusions.

## Quantity weights & differences

For example, when speaking of TCP packet loss/retransmits, it’s important to see the number. It’s definitely not a binary metric (happens all the time), but often, especially if the numbers are aggregare (10, 100, 1000 machines), it’s hard to estimate wether current retransmits frequency is large or small.

Here, several things help:

  * normal/tolerable packet loss (e.q. 0.1%), anything that gets above the line is a subject for an investigation. In that case, of course, you have to measure not absolute, but relative packet loss: 0.1% of 1gb and 10gb are different numbers, therefore should be treated differently.
  * threshold (most likely, time-bound). E.q. Whenever the value changes for more than 0.1%, and stays so for 10 seconds. Sometimes it may be useful to specify how fast the value should change to become a suspect.

When you aggregate exceptions from your application servers, after certain number of occurences you have less interest to the precise number. Also, different exceptions, as they influence different part of your application, may be reacted upon very differently.

If your cache clusters becomes unreachable, you get a rather large amount of cache-miss exceptions. Website gets slower, but is still functional. On the other hand, when there’s a bug in application logic that doesn’t allow user to log in, see his dashboard or app can’t connect to the database server at all, you may not see as many of these exceptions in the database. Nevertheless, they are obviously more critical and important.

For that cause, it’s important to have a real-time ability to prioritize certain exception types, and escalate issues immediately and to have sane escalation defaults.

For example, new exception occurs:

  * If it occured just once, notify whoever may be responsible for the application area in a “soft” way, let him sleep, he’ll get it fixed later.
  * If exception count outgrows certain threshold within given period of time (e.q. 10 times per hour vs 10 times per second), escalate the issue.
  * When any changes in theshold or frequency occur, notify operator about them (that may be helpful during issue investigation)
  * If the issue has been known to be critical enough, fire red alert immediately, when there’s any automation available (happens more often than one would like to with Cloud(tm) providers), fire that one up as well.

Here under “escalate” everyone should have his own logic: ticket in your favorite system -> email notification -> sms -> call -> team call sounds generic enough, but YMMV.

## Provide possible heuristics

Check out:

	the accurate intuitions of experts are better explained by the effects of prolonged practice than by heuristics.

And

	skill and heuristics are alternative sources of intuitive judgments and choices.

These are quotes from Daniel Kahneman book, "Thinking, Fast and Slow"

Heuristic is a mental shortcut to make congnitive load of making a decision.

User of your monitoring solution may be an experienced devops, or just a beginner. Of course, for an experienced person it’s often enough to see rough sketches of graph, generated by graphite or RRDTool. For less experienced person, you may want to provide visualizations or facts that make decision making easier.

### Horizon graphs

One of such heuristics is horizon graph. It helps you to increase data density, while preserving resoluiton. Without prior knowledge about horizon graphs they may look quite confusing:

<img src="/assets/images/cognitive_monitoring/horizon_01.png" style="max-width: 95%" />

Same graph originally looked like that:

<img src="/assets/images/cognitive_monitoring/horizon_02.png" style="max-width: 95%" />

But learning how they work:

<img src="/assets/images/cognitive_monitoring/horizon_03.png" style="max-width: 95%" />

Changes your understanding. Now you see that higher-dense blue indicates a number, that's lower that lower-dense blue, and higher-dense red represents a negative number, that's absolute value is lower than lower-dense red area. Now, looking at a graph you can visually compare an amount of different colors on graph, and understand where your values lay.

### Theshold encoding

Seeing a pattern may be a difficult task. Marking abnormalities, or values that are particularly interesting for observer with different colors, helps a lot, too. It's sometimes called Theshold Encoding:

<img src="/assets/images/cognitive_monitoring/04.png" style="max-width: 95%" />

Here, temperature above 55°F is marked with red color. It's very obvious for an observer, which values are above the threshold and which are below.

### Grid

Yet another thing that helps a lot is a grid. Consider the following graph:

<img src="/assets/images/cognitive_monitoring/05.png" style="max-width: 95%" />

The line is clear, points are visible. But it's still hard to guess an exact value, right? Everything changes as soon as we bring the grid in:

<img src="/assets/images/cognitive_monitoring/06.png" />

We can now see where values cross X axis, and it becomes more obvious which quadrants values lay in.

If you find these things useful, in next post I'm going to cover different principles, such as:

  * consistency over completeness
  * interactive information
  * picking the right graph for your visualization
  * spotting presence vs spotting absence

Attributions:

  * Images for horizon graphs are taken from [d3.horizon](https://github.com/d3/d3-plugins/tree/master/horizon) plugin
  * Theshold encoding image is caputred from [this bl.ock](http://bl.ocks.org/3970883)

<i>Published on Jan 6 2013</i>
