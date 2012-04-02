---
title: Handle your uploads outside your web app
layout: article
disqus_identifier: "handle_your_uploads_ourside_your_web_app"
disqus_url: "http://coffeenco.de/articles/ruby_is_not_the_best_choice_for_uploads.html"
---

## The problem

Your application will grow faster than you can say Jack Robinson. Scalability and extendability should be built into architecture from day one.
Often people are taking shortcuts for sakes of simplicity, but many 'simpler' solutions get deeper and deeper into system's core and after
some time it's quite difficult to get them out of there.

*Modularity* often helps to build systems with interchangable and disposable parts. Back in Java days it was cool to use those IoC (Inversion
of Controls) and Dependency Injection things. In Ruby world everything is much easier. It's all solved by Duck Typing. Although, it's important
to bring the modularity to the next level, and start separating not only low-level-component-related functionality, but also more higher-order
concepts: functionality and features.

For example, if you use ElasticSearch for model indexing, it's good to have functionality related to indexing in a separate module,
or sometimes, even in a complete new library. Same goes for denormalization. If you want keep your data denormalized in some common
manner, it would be good to keep related functionality separate. If you do so, extending, replacing or even throwing these parts away
becomes easier.

After some time, you start noticing that denormalizing data in your models touces hundreds of records, indexing takes a bit
longer than initially expected, converting 250Mb video from avi to 3gp forces users to wait in front of screen and wonder why the heck
page load takes so much time. Having functionality already separated, it's enough to move everything you had to a different app,
launch callbacks whenever that functionality required, and handle processing offline, without keeping the user waiting.

Before I even start my long story, I'd recommend you to bookmark and add to your reading list 2 things: [http://rubyamqp.info/](http://rubyamqp.info/) (which I'm proud
to help maintaining to [Michael Klishin](http://twitter.com/michaelklishin)) and a book [RabbitMQ in Action](http://manning.com/videla/) by
[Alvaro Videla](http://twitter.com/old_sound). You'll see here why I consider these things important. There's no better source of clear and
elborate AMQP info than these two.

## Uploads

Let's start with a simplest case, that is often handled in a very limiting way. Handling file uploads. Most of people (including the ones I sometimes look up to, although in a product rather then
technical sense) in Ruby world handle their uploads with one of the two very popular solutions: [carierwave](https://github.com/jnicklas/carrierwave)
and [paperclip](https://github.com/thoughtbot/paperclip). They both are popular, and maybe even OK to be used in a 5-minute prototype, but I
think that it's completely unacceptable to let them handle your uploads and processing in production.

Just recently, while discussing a problem with Bundler requiring to fetch gem index from rubygems.org, someone said "Network transfers in
ruby are not exactly known for their speed". Besides that, handling uploads in your main app occupies at least one of your web workers
for the time of upload.

If people'd only handle uploads in Ruby, I'd probably keep silence at least for a little bit of time. But image resize, format changes
and all other kinds of stuff are handled in a similar manner. That's a bit too much.

The solution I'm going to talk about here was considered to be sic. "a ridiculous overkill for most apps starting out", by Chad Pytel
(one of creators of paperclip) [here](https://twitter.com/#!/cpytel/status/151436050814865411). Let's see the downsides of a paperclip
solution, and see what are the upsides of following my advise.

So, downsides of a 'standard' solution (and upsides of an alternative approach):

  * It's slower (so, avoiding Ruby here would bring us a performance boost)
  * Controllers become more difficult to test (so, removing upload handling will actually simplify the solution)
  * Poor large file handling (I'm not even sure if it's handled somehow easily with Ruby)
  * It's keeping your Web App busy for no good reason (so, separating functionality into a different app will give even a bigger performance boost)
  * Upload functionality is coupled with functionality related to reaction on upload (so, we'll also simplify process of adding more post-upload behaviors)

## Alternative approach

What I suggest here, includes:

  * Nginx (with an upload module)
  * Some kind of a message queue (we use AMQP, but Resque would work as well, for the people scared of messaging, any kind of a notification
for your backend processing server would work, even via HTTP)
  * 30 minutes of time

Most likely, you already use Nginx. If you do not, you should, but that's a story for another day. 30 minutes is not that much, so the only
thing that's missing is a messaging system. Here I'll cover only RabbitMQ. It's easy to install, it's powerful and blazingly fast, and having
more or less complex application will force you implement most of it's features on top of Resque (bad thing) sooner or later.

There's plenty information on the web about how to build nginx with [nginx_upload_module](http://www.grid.net.ru/nginx/upload.en.html),
so let's skip that and jump right into the configuration.

### Nginx configuration

Here's some sample nginx configuration:

    location ~ ^/uploads(\.json)?$ {
      # Where uploads should be passed
      upload_pass  @uploads_handler;

      # Temporary directory for your uploads
      upload_store /tmp;

      # Regex for names of fields which will be passed to backend from original request.
      upload_pass_form_field "_my_app_session";

      # Set form fields, that should be set by nginx and passed further to uploads handler
      upload_set_form_field         upload[filename]      "$upload_file_name";
      upload_set_form_field         upload[content_type]  "$upload_content_type";
      upload_set_form_field         upload[source_path]   "$upload_tmp_path";

      upload_aggregate_form_field   upload[id]            "$upload_file_sha1";
      upload_aggregate_form_field   upload[file_size]     "$upload_file_size";
    }

    location @uploads_handler {
      proxy_pass http://my_app; # your upstream name
    }

    upstream my_app {
      server 127.0.0.1:7000; # I
    }

After setting up Nginx, set up your rails application.

### Rails application

### models/upload.rb

    require 'fileutils'

    class Upload

      #
      # Behaviors
      #

      include Mongoid::Document

      #
      # Callbacks
      #

      before_save :move_file

      # That one will be covered in AMQP & Processing
      before_save :dispatch_messages

      field :file_size,    :type => Integer
      field :content_type, :type => String, :default => "application/octet-stream"

      attr_accessor :source_path
      attr_accessor :filename

      #
      # Validations
      #

      validates_presence_of     :file_size
      validates_numericality_of :file_size, :only_integer => true, :greater_than => 0

      #
      # API
      #

      def self.local_storage_root
        Application.config.upload_storage_root
      end

      def location
        File.join(self.class.local_storage_root, id)
      end

      #
      # Implementation
      #

      protected

      def move_file
        # Actually, even that part may be moved to the backend, for best performance
        if @source_path && !self.persisted?
          FileUtils.mv(@source_path, location)
        end
      end

    end

### routes.rb:

    resources :uploads

Controller is as small as you usually have it. Upload itself was already handled by Nginx, here you only create a model instance out of whatever it have sent you. It's also trivial to test it now.

### uploads_controller.rb

    def create
      @upload = Upload.create(params[:upload])
      respond_with @upload
    end

We've been handling uploads separately from a main form post. There are many plugins for any front-end framework you may possibly use that help you to achieve that.

### AMQP & Processing

Now, moving forward to the most important part: the backend processing. There's a great quote from Alvaro Videla's book on AMQP, which covers exactly the same topic.

> For example a web application may require that when a user uploads a new picture, the user own image gallery cache must be cleared and also he should be rewarded with some points for his action. We can have two queues bound to the 'upload-pictures' exchange, one with consumers clearing the cache and the other one for increasing user points. Also from this scenario we can see the advantage of using exchanges, bindings and queues over publishing messages directly to queues. What is such advantage? Let's say that the first requirement of the application was that after a picture was uploaded to the website then the user gallery cache was cleared. Easy enough we can have one queue to accomplish that. But what happens when the product owner comes to us with his super cool new feature of giving awards to users for their actions in the website? If we are sending messages directly to queues, then we have to modify the publisher's code to send message to the new points queue. If we have been using fanout exchanges the only thing that we have to do is to write the code for our new consumer and then declare and bind a new queue to the fanout exchange. As we said earlier, the publisher's code is completely decoupled from the consumer's code allowing us to increase our application functionality with ease.

Let's convert these words to some Ruby code. I'll be using [ruby-amqp gem](https://github.com/ruby-amqp/amqp).

We'll have two parts of the application: producer and consumer. Producer will generate and "push" messages to the queue, notifying backend about the incoming upload, and the fact that it should start handling it. Consumer will receive the message, convert it, resize it, send email to the user etc.

### Consumer

    #!/usr/bin/env ruby
    # encoding: utf-8

    require "rubygems"
    require "amqp"

    AMQP.start(:vhost => "uploads.development", :username => "uploads", :password => "uploads_password") do |connection|
      puts "Connected to broker..."

      # Open up a new channel
      channel  = AMQP::Channel.new(connection)

      # Declare an exchange
      exchange = channel.fanout("amq.fanout")

      # Declare a new queue, and bind it to our fanout exchange
      q = channel.queue("images.resize", :auto_delete => true, :exclusive => true).bind(exchange)
      q.subscribe do |metadata, payload|
        puts "images.resize received a message: #{payload.inspect}."
      end

      # Declare another queue, with handles a different type of functionality, and bind it to the same exchange
      q = channel.queue("images.reward_user", :auto_delete => true, :exclusive => true).bind(exchange)
      q.subscribe do |metadata, payload|
        puts "images.reward_user received a message: #{payload.inspect}."
      end
    end

For each action you want to be triggered on the event, you have to bind to fanout exchange, declare a queue, giving it a descriptive name, like "images.resize",
"images.crop" etc. You will receive payload and metadata published by producer, and run an according action. Here, the performance of your service doesn't matter
_that_ much anymore. It's complicated to make it less performing than it was before. Use image-magick directly, use any gem that you feel comfortable with.
that functionality is very easy to change afterwards, and you have a complete control over it, too.

### Producer

So, the producer:

    require "rubygems"

    require "amqp"

    AMQP.start(:vhost => "uploads.development", :username => "uploads", :password => "uploads_password") do |connection|
      puts "Connected to broker..."

      # Open up a new channel
      channel  = AMQP::Channel.new(connection)

      # Declare an exchange
      exchange = channel.fanout("amq.fanout")

      # Publish a message with uploaded file details, obtained from nginx, to an exchange.
      exchange.publish({:filename => "uploaded_image.jpg", :content_type => "image/jpeg", :source_path => "/tmp/dir/", :sha => "as10l..."})

      EventMachine.add_timer(0.5) do
        connection.close do
          EventMachine.stop
        end
      end
    end

Here you see that we connect to our AMQP server, create a fanout exchange and pubish you message to that exchange, not much more. It's just as easy as it is!

### Wrapping up

There's nothing scary in AMQP. Installing broker is really easy, writing Quickstart code doesn't even take a minute. Mastering your AMQP-fu will certainly
take some time, but you'll discover a feature-rich protocol and will see how easy it is to solve even the most copmlex task using it. The rest of things
for solving this particular task are already at your disposal.

If you want some 'takeaway', I'd want it to be **"write modular applications"** and **"do not couple your functionality"**. Both statements are
to be older than I am, and you have already heard a lot about that. But apps become so much easier to develop, maintain and scale by just following these two.
There are many ways of doing so, of course, but the concept remains the same: use right tools for right job, and if a little new concept will in the end
simplify your solution and bring benefits, you'll have to step over the semblant complexity.

That's only the first article of series. So far I have enough material for about 3-4 publications, but it needs some systematization
and, since a topic of 'where to process my shitz' is quite touchy and quite often is a point of discussion, material will be presented in chunks
that are easier to discuss.
