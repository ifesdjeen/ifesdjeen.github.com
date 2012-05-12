---
title: An easy way to deploy your Clojure code with Leiningen, Capistrano and some Shell scripts.
layout: article
disqus_identifier: "how_to_deploy_clojure_code"
disqus_url: "http://coffeenco.de/articles/how_to_deploy_clojure_code.html"
---

First time we faced the problem of rolling out our Clojure code, we knew Java deployment experience will be helpful, but
we still wanted to use tools that we're most familiar with (read: capistrano).

Capistrano makes it easy to roll out your code to multiple machines, and Multistage extension we use helps to get your deployment
via multiple stages. There were several things which are widly known, but somewhat often underutilized.

## SSH Agent forwarding

One of them is SSH agent forwarding. It helps you to keep using your private keys while deploying with Capistrano. Whenever
the remote server is querying for a key, the challenge will be routed back to your shell. Of course, target machine should have
your public key, but it's usually not an issue. for that, you have to use ```ssh_options[:forward_agent] = true``` directive in
your Capistrano file.

## Multi-target deployment

Whenever you have let's say 5 machines to deploy to, you want to make sure your deployment reaches all of them. For that, you
can specify list of servers to deploy to.

Now, let's talk about two concepts. First is __roles__. In capistrano, predefined roles are ```:web```, ```:app``` and ```:db```.
It's easy to guess which one serves certain purposes. In that case, you can define certain tasks that will be ran __only__
when target has a certain role.

Let's imagine quite a simple setup. You have 4 servers. Two of them are application servers, that handle all the slow backend
calculations. One of them is Database, and last one is web front-end.

<script src="https://gist.github.com/2667797.js?file=server_spec.rb"></script>

Now, let's say you want your application servers to be restarted whenever one at a time, so that other one could be still available
in a meanwhile and handle requests.

<script src="https://gist.github.com/2667797.js?file=tasks_spec.rb"></script>

So, __#restart_db__ will run only on the server with ```:db``` role, __#restart_app__ only for ```:app``` role etc.

Second concept is primary/secondary machines. That's quite handy, for example, whenever one of your application servers behaves,
as master, and other ones as slaves.

<script src="https://gist.github.com/2667797.js?file=task_spec_2.rb"></script>

<script src="https://gist.github.com/2667797.js?file=task_spec_3.rb"></script>

In that case, __#start_slave__ will get run for both servers, and __#start_master__ only for ```:primary => true```.


## Multistage deployments

With Capistrano Mutistage extension, it's very easy to configure where you want to deploy right now.

<script src="https://gist.github.com/2667797.js?file=multistage_deployments_1.rb"></script>

Here, I specified four deployment stages: development, QA, staging and production. Whenever I want to deploy my new piece of code to
for QA, or for my colleagues to check something cool on staging, I simply specify deployment stage:

```
bundle exec cap staging deploy
```

Quite easy, huh?

## Some Clojure-specific stuff

First off, as you most likely already know, you can package your Clojure application to Jar file and run it straight from Jar anywhere.
In some cases you want to have Uberjar, which contains all the dependencies in a single package, that's very easy to copy and deploy.

In order to enable your application to be ran from Jar, you have to:

  * have ```(defn -main [])``` function in your core namespace.
  * your core namespace has to have ```(:gen-class)``` directive, that lets compiler know that it shuold generate a named class out of that namespace.
  * configure entrypoint in your __project.clj___ by adding ```:main my-application.server```.
  * specify that your core namespace should be AOT-compiled by adding ```:aot [ my-application.server]``` to your __project.clj__.

So, your ```my-application.server``` namespace in the end will look as follows:

<script src="https://gist.github.com/2667797.js?file=server.clj"></script>

Now, you have to package your app to jar by running

```
lein jar
```

Or

```
lein uberjar
```

Former will package a single Jar, that will look up the rest of dependencies in a __CLASSPATH__, latter will package a jar with everything
your app needs to be ran as a standalone application. In most cases, when deploying (unless you have extremely heavy dependencies), it's
easier to package Uberjar.

Now, it's possible to run your app by running

```
java -jar target/my-app-0.1.0-SNAPSHOT-standalone.jar
```

### Writing run.sh file

One problem solved now. You app is packaged as Jar now. But in order to have a full-featured deployment, you'd probably want to run it
as a daemon and be able to start and stop it. For that, let's first write a run-script:

<script src="https://gist.github.com/2667797.js?file=run.sh"></script>

That script will:

  * run your application
  * set JVM initial Heap size to 512mb and max to 1024mb (check out -Xms and -Xmx options)
  * bash ```&``` will run your command in background
  * ```$!``` will capture the PID of the last background command
  * ```echo $! > ...``` will put your PID to the specified file

When using __start-stop-daemon__ (some details are given here below), it usually expects that application creates pidfile itself.
As our jar does not create one, we're creating it ourselves. __start-stop-daemon__ manpage discourages usage of ```--make-pidfile```,
and encourages application to handle pid creation itself. That may be or may not be a good solution in your case.

### Writing initscript.sh

If you're not familiar with [start-stop-daemon](http://manpages.ubuntu.com/manpages/dapper/en/man8/start-stop-daemon.8.html), you can read
up some man pages. It's extremely useful for running pretty much anything as a daemon.

There's not that much to check out. We let __start-stop-daemon__ know all the details about our executable: pidfile, chuid to change user
to, make it run in a quiet mode etc.

<script src="https://gist.github.com/2667797.js?file=initscript.sh"></script>

Well, that's pretty much it. It's just one of many ways for you to handle your clojure deployments.
