---
title: "What is Non-blocking IO"
layout: article
disqus_identifier: "what_is_non_blocking_io"
disqus_url: "http://coffeenco.de/articles/what_is_non_blocking_io.html"
---

# What was that non-blocking io all cool kids are talking about?

## Epoll without libev ##

So far This is only a draft of an article. It's quite a complex topic, and there's a ton of misinformation all over internets.
I'm trying to compile what I have learned while writing several applications and using libev, EM and Cool.io. Ping me if you
find something that you do not agree with here.

Libev is a wrapper, that's used in a big variety of languages to handle async operations. Internally, it's binding to backend of your preference and lets you [read()](http://linux.die.net/man/2/read) and select() things from socket. Actually, both read() and select() could be also used for synchronous operations, it all depends on flags you set.

I'm not a big expert in all the backends. I did learn some basics, but here most of examples will be using libev.

First, epoll_create(http://linux.die.net/man/2/epoll_create) is used to create epoll_event struct, which is defined as:

```c
typedef union epoll_data {
   void    *ptr;
   int      fd;
   uint32_t u32;
   uint64_t u64;
} epoll_data_t;

struct epoll_event {
   uint32_t     events;    /* Epoll events */
   epoll_data_t data;      /* User data variable */
};
```

After that, [epoll_ctl](http://linux.die.net/man/2/epoll_ctl) is used to create a control interface for it.

Everything you read from now on is launched inside while(1) loop. Well, in libev it's a bit more complicated, it's do {} while (assert_true(assertinons)) loop, but the concept is quite the same. So, just for instance:

```c
struct epoll_event event;
int socket = getsocket(); // Some function that initializes your socket. Actually, it may easily be shared across even loop ticks. I think that'd be a preferred behaviour.

// Initialize events
event.events = EPOLLIN | EPOLLPRI | EPOLLERR | EPOLLHUP; // Refer to http://linux.die.net/man/2/epoll_ctl for available events
event.data.fd = socket;

if (epoll_ctl(epoll_fd, EPOLL_CTL_ADD, socket, &event) == -1) {
  close(epoll_fd);
  epoll_ctl (epoll_fd, EPOLL_CTL_DEL, socket, &event);
  continue; // If we failed to open the descriptor.
}

int epoll_max_connections = 1;

int count = epoll_wait(epoll_fd, events, epoll_max_connections, 500);

if (count > 0) {

  for (i = 0; i < count; ++i) {
    int result = recv(socket,&record,sizeof(record), 0); // Here i fetch a simple record that's later memcpy'ed to the binary structure. But you can receive whatever you like.
    if (result > 0) {
    }
  }
}
```

So, we create an epoll structure, control interface, and start listening to incoming connections with given timeout. Next, we get a number of file descriptors waiting for requested I/O operation or zero, in case no events were ready to be dispatched.

Up till now your workflow was: create a socket, connect to it, initialize epoll control structure, wait for event and if there're any file descriptors waiting, read data from them with [recv](http://linux.die.net/man/2/recv).

## Patterns and flows

If you have several commands that circulate between your peers, think of how to determine what kind of data you received, and how to handle it. And try to have only one place where these handles can occur. For example, if you issue a heartbeat, and want all your timer to continue regular execution, you should not wait for acknowledgment from the peer. If you do start, though

That was an extremely simplified representation of what's going on inside of libev event loop. Let's try to think of what else is happening.

When the backend is initialized, it's setting backend_poll, declared as:

```c
#define VAR(name,decl) decl;
  #include "ev_vars.h"
#undef VAR

VAR (backend_poll  , void (*backend_poll)(EV_P_ ev_tstamp timeout))
```

In your application you initialize a main loop:

```c
struct ev_loop *loop;
loop = ev_default_loop (EVBACKEND_EPOLL);
```

Now, there are several concepts existing: timers and events.
In order to initialize event, you need a control structure and a callback. That callback is going to be triggered whenever epoll_wait acknowledged that there's some data to be dispatched. It will be called only once even if several events are waiting for dispatch.

### Event

```c
struct ev_io my_io;
static void data_received_cb (EV_P_ struct ev_io *w, int revents);

ev_io_init (&my_io, data_received_cb, getsocket(), EV_READ);
ev_io_start (loop, &my_io);
```

### Timer

```c
struct ev_timer heartbeat_watcher;
static void heartbeat_cb (EV_P_ struct ev_timer *w, int revents);

ev_timer_init (&heartbeat_watcher, heartbeat_cb, 1, 1);
ev_timer_start (loop, &heartbeat_watcher);
```

So, basically event does pretty much the same thing as was described above, on bare epoll example. Timers are used for events that require to be executed in a timely manner (go figure) once or many times. We've been using timers for things like heartbeats, for example. If your client needs to acknowledge connection with server due to channel instability or anything else. Or, another example would be to reconnect after failure, retry until connection is established, and notify operator in case it couldn't be done for longer time.

Timers will checked for execution and queued on each loop run.

When dealing with sockets on C level, it's very important to handle all the cases. Since all the functions are very well documented, it's quite easy to figure out. Try to avoid socket leaks, always close descriptors you do not use anymore, check for socket before dispatching commands etc.

Every flow, even the most basic one will involve not only scheduling your events, but putting them off the list as well.


If you take a look at libev code, you will find tons of details about differences of implementation of Async I/O on all the operation system.

## Further reading

Better things to read on the topic:

  * Very good post by Mathias Meyer on EM: http://www.paperplanes.de/2011/4/25/eventmachine-how-does-it-work.html
  * Docs of libev: http://doc.dvgu.ru/devel/ev.html
  * IBM article on libev and libevent: http://www.ibm.com/developerworks/aix/library/au-libev/index.html
  * The C10K problem: http://www.kegel.com/c10k.html
  * Epoll, sciense and superpoll: http://sheddingbikes.com/posts/1280829388.html

Source code of cool.io and eventmachine is highly advised as well:

  * https://github.com/tarcieri/cool.io
  * https://github.com/eventmachine/eventmachine
