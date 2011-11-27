-----
title: "Linux Scheduler"
layout: article
-----

Recently I've spoken with half a dozen people about non-blocking I/O. Most of the arguments they could come up with was "that it is freaking faster", other ones asked me to give them some benchmarks. I'm not here to give those, since I'm not a fan of ballpark estimates, and these arguments won't change anyting, really. It seems that new fancy non-blocking implementations somehow work/act as follows…

Let's imagine we have a web-application. Simplifying it's flows, it basically

a) reads HTML templates from disk
b) processes request and applies some business logic
c) makes a call to database
d) puts data from database to templates and gives them back to client.

Somehow, when speaking to "them" it sounded to me that (c) is somehow executed in parallel to everyhing else. Oh man, that would be just fancy! I get a request from browser, fire up a call to database, and while it's running, I render everything and just inject whatever I need on it's places. But…

**It doesn't work like that**

Having a more or less complex web application requires you to have data from database *before* you start rendering your HTML, because user may not be authorized to view content, or you may want to apply a different template, or whatever.

If your piece of software is simply ready to serve another request in parallel, I can't really help you but asking you to surf some internet and do some math, and at least try to understand basic concepts of evented vs threaded approaches before trying to solve your problems using either one of those.

## Scheduler

It seems that many misunderstandings that evole around non-blocking I/O actually arise because of lack of understanding of Linux Scheduler.

Everyone seems to be aware that there's some type of scheduler, but what exactly does it do? Sometimes people take an amount of cores on their machine as an opportunity for an immediate performance improvement, which is not always relevant. In order to utilize multicore systems, most of time you need to put some effort.

That was repeated half a million times, but let's recap. Time-sharing is related to concurrency, not parallelism. Single core can run only one process at any given period of time. This is something that is completely transparent to the process, although you can help scheduler to know when to use processor time for other stuff.

### sleep(1)

The simplest example ever is an eternal while loop. By no surprise, it eats up a complete processor core. Whenever you insert sleep (or even nanosleep) into that loop, load instantly drops. The thing is that load drops not just because your program "sleeps" or does nothing, that's just a tiny part of what's going on.

When there's no sleep in your main loop, it runs without any delays, thus using all the possible processor power, since it has nothing to block on. When kernel sees a sleep, it marks your process as sleeping and moved to sleeping queue. In a meanwhile freed processor time will be used for whatever stuff your kernel thinks is usable.

According to man page, sleep command suspends execution for a minimum of seconds. So, speaking primitively, sleep schedules an operation to be executed X seconds later.

### I/O actions

When people say "blocking I/O" everyone shivers and starts pretending that it wasn't him who's done that. There's nothing wrong with blocking on I/O operations, really. Smart people have taken care about it for us.

Mainly, poll and select were created to determine wether an I/O operation will block. They are complementary to *read* and *write*.

I/O operations are performed by poll, select and epoll system calls. Support for these system calls is provided though *poll* method. It is called when program performs one of these system calls. After it's called, it calls *poll_wait*, that registers wait queue for that system call. Driver will call *poll_freewait*  the queue whenever data's available.

What's important here is understanding that even though blocking system calls block your process execution, it does not mean that they're blocking everything. earth doesn't spin while you do that and kittens die.

Operating system actually does take care of your blocking operatins. It still will do some useful stuff while you're blocked.

I'm currently working on in-depth article about libev. It will be useful for you, no matter which technology you use underneath.