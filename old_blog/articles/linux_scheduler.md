---
title: "The Importance of Being Idle"
layout: article
disqus_identifier: "linux_scheduler"
disqus_url: "http://coffeenco.de/articles/linux_scheduler.html"
---

## Importance of Being Idle

Recently I've spoken with half a dozen people about non-blocking I/O. Most of the arguments they could come up with was "that it is freaking faster", other ones asked me to give them some benchmarks. I'm not here to give those, since I'm not a fan of ballpark estimates, and these arguments won't change anyting, really. It seems that new fancy non-blocking implementations somehow work/act as follows…

Let's imagine we have a web-application. Simplifying it's flows, it basically:

  * reads HTML templates from disk (a)
  * processes request and applies some business logic (b)
  * **makes an evil call to database** (c)
  * puts data from database to templates and gives them back to client (d)

Somehow, when speaking to "them" it sounded to me that (c) is somehow executed in parallel to everyhing else. Oh man, that would be just fancy! I get a request from browser, fire up a call to database, and while it's running, I render everything and just inject whatever I need on it's places. But…

**It doesn't work like that**

Having a more or less complex web application requires you to have data from database *before* you start rendering your HTML, because user may not be authorized to view content, or you may want to apply a different template, or whatever. So use case must be very different. There's been enough said about performance of blocking vs non-blocking approaches, so I'm leaving it up to reader to decide which one of those he wants to use. I just want to remind of one important concept, that seems to be forgotten when comparing a theoretical performance (let's be honest, measuring performance in practice is way more difficult, thus may be even more subjective than theoretical).

If your piece of software is simply ready to serve another request in parallel, I can't really help you but asking you to surf some internet and do some math, and at least try to understand basic concepts of evented vs threaded approaches before trying to solve your problems using either one of those.

## Scheduler

It seems that many misunderstandings that evole around non-blocking I/O actually arise because of lack of understanding of Linux Scheduler.

Everyone seems to be aware that there's some type of scheduler, but what exactly does it do? Sometimes people take an number of cores on their machine as an opportunity for an immediate performance improvement, which is not always relevant. In order to utilize multicore systems, most of time you need to put some effort.

That was repeated half a million times, but let's recap. Time-sharing is related to concurrency, not parallelism. Single core can run only one process at any given period of time. This is something that is completely transparent to the process, although you can help scheduler to know when to use processor time for other stuff.

### sleep(1)

The simplest example ever is an eternal while loop. By no surprise, it eats up a complete processor core. Whenever you insert `sleep` (or even `nanosleep`) into that loop, load instantly drops. The thing is that load drops not just because your program "sleeps" or does nothing, that's just a tiny part of what's going on.

When there's no sleep in your main loop, it runs without any delays, thus using all the possible processor power, since it has nothing to block on. When kernel sees a sleep, it marks your process as sleeping and moved to sleeping queue. In a meanwhile freed processor time will be used for whatever stuff your kernel thinks is usable.

According to man page, sleep command suspends execution for a minimum of seconds. So, speaking primitively, sleep schedules an operation to be executed X seconds later.

## I/O actions

To prevent tasks from taking over the CPU and making other tasks waiting for CPU access, scheduler also can change a task priority. If the task is CPU-bound, it gets lower priority than an I/O bound one. I/O-bound tasks use the CPU to start an I/O and then sleep, while waiting for the operation to comple. This allows other tasks access to the CPU.

When people say **blocking I/O** everyone shivers and starts pretending that it wasn't him who's done that. There's nothing wrong with blocking on I/O operations, really. Smart people have taken care about it for us.

Mainly, poll and select were created to determine wether an I/O operation will block. They are complementary to `read` and `write`.

I/O operations are performed by `poll`, `select` and `epoll` system calls. Support for these system calls is provided though `poll` method. It is called when program performs one of these system calls. After it's called, it calls `poll_wait`, that registers wait queue for that system call. Driver will call `poll_freewait`  the queue whenever data's available.

What's important here is understanding that even though blocking system calls block your process execution, it does not mean that they're blocking everything. earth doesn't spin while you do that and kittens die.

Operating system actually does take care of your blocking operatins. It still will do some useful stuff while you're blocked.

## Memory management

That is a complicated topic and that's something I'm not absolutely sure how relevant that may actually be. That relies heavily on your language's Garbage Collector, Virtual Machine or your memory management skills. I am very open to hear your opinion about that argument.

There are 2 system calls: `brk` and `sbrk` (2), in addition to `free`, `malloc` (3). Latter ones are responsible for allocating an freeing memory. Former ones are used internally, on demand for changing the heap size of the process.

Even though we have them in both cases, in non-threaded environment the likelihood of program memory space extension is more. Allocator usually goes through free memory and checks (differently, depending on an operating system) for either first satisfying or best satisfying place to allocate. If there's not enough space to allocate (which is somewhat likely because of memory fragmentation), it will extend program memory, and will not give it back to OS until `free` frees the datastructures that are closer to the end of allocated space.

`malloc` first scans the list of memory blocks previously released by `free` in order to find one whose size is larger than or equal to its requirements. If the block is exactly the right size, then it is returned to the caller. If it is larger, then it is split, so that a block of the correct size is returned to the caller and a smaller free block is left on the free list. If no block on the free list is large enough, then `malloc` calls `sbrk` to allocate more memory. To reduce the number of calls to `sbrk`, malloc starts asking `brk` to allocate more memory in advance.

So, any long-running program (which web-server certainly is) that repeatedly allocates memory for various purposes, must deallocate any memory after using it. If it doesn't do so, heap will steadily grow until we reach the limits of available virtual memory, at which point further attempts to allocate memory fail. Having short-lived threads may possibly ease memory management and help you to avoid such problems. Whereas having a single non-blocking handler and not setting concurrently handled connection limit may allocate a lot of memory and, even though, most memory is freed, it may not go back to Operating System.

I'm currently working on in-depth article about libev. It will be useful for you, no matter which technology you use underneath. I am also working on several subjects that seem to be either forgotten, misunderstood or rarely mentioned by many people I talk to. These are: posix threads, some system calls that are less-popular, memory management, process communication and more. If you have some suggestions, please let me know.
