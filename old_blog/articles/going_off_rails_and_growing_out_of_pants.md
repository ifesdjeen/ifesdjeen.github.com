---
title: Going off Rails and growing out of pants
layout: article
disqus_identifier: "going_off_rails_and_growing_out_of_pants"
disqus_url: "http://coffeenco.de/articles/going_off_rails_and_growing_out_of_pants.html"
---

As it was already mentioned many times by many people [ActiveRecord](http://www.martinfowler.com/eaaCatalog/activeRecord.html) is

> An object that wraps a row in a database table or view, encapsulates the database access, and adds domain logic on that data.

> An object carries both data and behavior. Much of this data is persistent and needs to be stored in a database. Active Record uses the most obvious approach, putting data access logic in the domain object. This way all people know how to read and write their data to and from the database.

That and [DataMapper](http://martinfowler.com/eaaCatalog/dataMapper.html) is

> A layer of Mappers (473) that moves data between objects and a database while keeping them independent of each other and the mapper itself.

> The Data Mapper is a layer of software that separates the in-memory objects from the database. Its responsibility is to transfer data between the two and also to isolate them from each other. With Data Mapper the in-memory objects needn't know even that there's a database present; they need no SQL interface code, and certainly no knowledge of the database schema. (The database schema is always ignorant of the objects that use it.) Since it's a form of Mapper (473), Data Mapper itself is even unknown to the domain layer.

Even though ActiveRecord and Mongoid will be mentioned there, I do not mean to criticize them, since they do work perfectly for many cases, and
help millions of people all around the world. There are some limitations that come with a simple of use, which I want to address, and things
I suggest may not work for you.

Everything here looks so obvious and easy, but somehow in Ruby world people keep using ActiveRecord for hardcore logic, trying to incapsulate
more and more things into a tiny little object. And while we're trying to decouple our models, views and controllers, we somehow forget about
decoupling transfer and persistence from database logic, or even validations.

For example, in Mongoid and ActiveRecord you can see the following things: https://github.com/mongoid/mongoid/blob/master/spec/mongoid/persistence_spec.rb#L1021
https://github.com/rails/rails/blob/master/activerecord/test/cases/persistence_test.rb#L534 so, update_attributes updates your attributes in database, but
only when validations are passing (of course, you can force-save, but that's a complete different topic).



