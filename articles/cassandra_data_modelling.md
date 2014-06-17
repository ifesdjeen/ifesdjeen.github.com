---
title: "Cassandra Data Modelling"
layout: article
disqus_identifier: "cassandra_data_modelling"
disqus_url: "http://coffeenco.de/articles/cassandra_data_modelling.html"
---

## About this guide

This guide once was a part of [Cassaforte](http://github.com/clojurewerkz.org/cassaforte), our Cassandra driver,
but it was taken out of documentation guides. Since I still think it's quite a usful thing, I decided to re-publish
it on my blog.

This guide explains how to model your data "Cassandra Way". There're several concepts that you can utilize to
ease access to your data.

Most of the things you can do in Cassandra are rather straightforward. But from time to time, I'm still hearing
similar questions, especially ones about pagination, range queries and flexible schema. This guide covers all
these approaches, explaining basic features that can be used to achieve desired results.

## Static Tables

If you have single-lookup entries, such as users table, use a simple key. For example, you have a table that stores user
data, where users are accessed by unique `name` identifier.

```sql
CREATE TABLE users (age int, name varchar, city varchar, PRIMARY KEY (name));
```

In this example, let's say we have following values within our table:

```
|    :name | :age |      :city |
|----------+------+------------|
| Nicholas |   20 |      Paris |
|   Robert |   22 |     Berlin |
|  Matthew |   31 |     Zurich |
|      Max |   34 |   New York |
|    Viola |   27 |   Portland |
|     Alex |   20 |     Munich |
|     Lisa |   19 |       Kiev |
|      Dan |   23 | Dusseldorf |
|  Ingress |   25 |      Tokio |
|  Michael |   30 |     Moscow |
```

You won't be able to do any range queries, you will only be able to paginate across values storing the last item, for example:

```sql
SELECT * FROM users LIMIT 5;
```

Returns the first page (5 entries) of user data:

```
 name     | age | city
----------+-----+----------
 Nicholas |  20 |    Paris
   Robert |  22 |   Berlin
  Matthew |  31 |   Zurich
      Max |  34 | New York
    Viola |  27 | Portland
```

In order to retrieve the next page, you'd have to query by token, because internally Cassandra can only perform token comparison.
Here, you should take the last entry key and run token query against database:

```sql
SELECT * FROM users WHERE token(name) > token('Viola') LIMIT 5;
```

Which returns next 5 items:

```
 name    | age | city
---------+-----+------------
    Alex |  20 |     Munich
    Lisa |  19 |       Kiev
     Dan |  23 | Dusseldorf
 Ingress |  25 |      Tokio
 Michael |  30 |     Moscow
```

That's pretty much a how you can implement pagination within your application. You can't perform any sorting, only top-to-bottom
paginagion across the items.

In essence, one thing you should never do is full table scans. Most of the things you query for should be constrainted by
primary key. One of the examples may be an event log for the users. For example, you want to log event ocurrences for particular
user, when he logs in, logs out, or writes a message to another user. In that case, you may want to have user's `name` as
a partition key, and let's say `created_at` as a second part of the key.

## Using Compound Keys

In current Cassandra terminology, term __Compound Key__ is used to describe entries that are identified
by the set of keys. This terms is used to avoid ambiguity with __Composite Columns__ that were used in previous
versions of Cassandra.

Queries with locked partition key are not expensive, since you can guarantee that things that
have same partition key will be located on the same node.

```sql
CREATE TABLE user_events (created_at timestamp, name varchar, event_type varchar, PRIMARY KEY (name, created_at));
```

```
 name | created_at               | event_type
------+--------------------------+-------------
 Alex | 2012-01-01 12:20:00+0100 |   logged_in
 Alex | 2012-01-01 12:25:00+0100 | new_message
 Alex | 2012-01-01 12:30:00+0100 | new_message
 Alex | 2012-01-01 12:35:00+0100 |   new_reply
 Alex | 2012-01-01 12:40:00+0100 |  logged_out
 Alex | 2012-01-01 15:30:00+0100 |   logged_in
```

In that case, you have an ability to perform range query, locking partition key on certain user and specifying a range:

```sql
SELECT * FROM user_events WHERE name='Alex' AND created_at > '2012-01-01 12:20' AND created_at < '2012-01-01 12:40';
```

```
 name | created_at               | event_type
------+--------------------------+-------------
 Alex | 2012-01-01 12:25:00+0100 | new_message
 Alex | 2012-01-01 12:30:00+0100 | new_message
 Alex | 2012-01-01 12:35:00+0100 |   new_reply
```

## Dynamic Tables

__Dynamic Column Families__ is something that is more specific to Cassandra.
It is related to the Wide Rows concept. Let's say we need to store information
about how the movie was rated. For that, we create a `movies` table with a
_compound key_, that consists of `title` and `time`, when it was rated. We'll use
`rating` column to store rating for the given time.

```sql
CREATE TABLE movies (title varchar, rating int, time timestamp, PRIMARY KEY (title, time));
```

Now let's take a closer look on how the information is stored:

```
|   row key    |                                columns                                      |
|--------------+-------------------------|-------------------------|-------------------------|
|              | 1368284297711:"rating"  | 1368284468993:"rating"  | 1368284474188:"rating"  |
| Pulp Fiction +-------------------------|-------------------------|-------------------------|
|              |           9             |           10            |            6            |
|--------------+-------------------------|-------------------------|-------------------------|
|              | 1368284605867:"rating"  | 1368284612339:"rating"  | 1368284617643:"rating"  |
|   Futurama   +-------------------------|-------------------------|-------------------------|
|              |           5             |           8             |           10            |
|--------------+-------------------------|-------------------------|-------------------------|
```

And so on. In this case we've treated both `time` and `rating` columns as values. You can go further
and use one of them as something that's looks more like a key. For example, you can store data about
organizations pretty much the same way. In this example, we'll have a table called `people`, that
holds `name` of the person, `company` he works for, `field_name` (which is set by application, that
could be anything, like 'address' or 'phone').

If you think of data the way we initially described it (`company` holds `people`, that can have
some information about them stored in arbirary fields), you can represent it as:


```
|   row key    |                                columns                                      |
|--------------+-------------------------|-------------------------|-------------------------|
|              |  "John Smith":"phone"   | "John Smith":"address"  | "Jane Anderson":"phone" | ...
|  Company A   +-------------------------|-------------------------|-------------------------|
|              |    +1 123 456 789       |    Sunny Boulevard 154  |    +1 675 434 44 55     | ...
|--------------+-------------------------|-------------------------|-------------------------|
|              |  "Nick Jumbo":"phone"   |   "Andrew Hoe":"phone"  | "Jeffrey May":"address" | ...
|  Company B   +-------------------------|-------------------------|-------------------------|
|              |    +1 314 568 133       |    +1 853 235 382       |    Strange Loop 382     | ...
|--------------+-------------------------|-------------------------|-------------------------|
```

It's kind of a phone book, but you may have artibrary fields for things like phone, address and so on.
Note that any person may have both phone or address, or just one of them. It's up to application and
user to decide what to store in those columns.

All you need is to have a composite key. Of course, same exact table could be represented as:

```
|      name     | field_name  |     field_value     |  company  |
|---------------+-------------+---------------------+-----------|
|    John Smith |       phone |      +1 123 456 789 | Company A |
|    John Smith |     address | Sunny Boulevard 154 | Company A |
| Jane Anderson |       phone |    +1 675 434 44 55 | Company A |
|    Nick Jumbo |       phone |      +1 314 568 133 | Company B |
|    Andrew Hoe |       phone |      +1 853 235 382 | Company B |
|   Jeffrey May |     address |    Strange Loop 382 | Company B |
```

But thinking of your data in multiple dimentions will open many alternatives to the way you
approach your data.

That should give you a basic idea on how to model things.

## Collection Columns

In relational databases, there're no collection datatypes on a value level. Usually this problem
is solved by creating an additional table, for example, if you have a table `users`, and
each user can have more than one phone number, you create another table, `user_phone_numbers`, which
has a foreign key `user_id`, that holds string values for telephones. From time to time this may be
useful in Cassandra, too, especially if you want to attach some metadata to each entry, and use
additional indexes on metadata for flexible queries.

Nevertheless, there's one more possibility in Cassandra. You can use nested `list`, `set` or `map`
column types to store values related to certain entity. There're no internal querying possibilities
for collection types (you won't be able to find user by one of his email adresses this way).

For example, if you want to model an address book, you can create `users` table with and use
`emails` as a `list` type column:

```sql
CREATE TABLE users (name varchar,
                    emails list<varchar>,
                    PRIMARY KEY (name));
```

You may have noticed that we had to specify value type for list as `list<varchar>`, where
`list` specifies that there may be more than one value stored and `varchar` specifies a type of
stored value.

Now, you can insert users with their emails:

```sql
INSERT INTO users (test_list, name)
  VALUES (['alex@gmail.com', 'alexp@clojurewerkz.org', 'alex@coffeenco.de'], 'Alex');
```

If you query users table, you'll see that emails are stored in an array internally:

```
 name | emails
------+-------------------------------------------------------------
 Alex | [alex@gmail.com, alexp@clojurewerkz.org, alex@coffeenco.de]
```

It is possible to perform usual list operations, such as prepending, appending and deleting values
in the list. `set` is working in a manner very similar to list, with the only exception that sets
store only single value in case of duplicates. Which means that if you try to append same value
to the list several times, it will be only written once.

Alternatively, you can chose to use `map` type. Maps in Cassandra are associative arrays, that
hold a key and a value associated with it. Speaking of an address book, you can chose to use
`map` type for holding emails, phone numbers and addresses for the user:

```sql
CREATE TABLE users (name varchar,
                    contact_info map<varchar, varchar>,
                    PRIMARY KEY (name));
```

Now, you can insert maps holding values:

```sql
INSERT INTO users (name, contact_info)
  VALUES ('Alex', {'phone' : '+1 111 222 333',
                   'email' : 'alex@gmail.com',
                   'address' : 'Sierra Drive 212, 01002'});
```

Now, `contact_info` values will be stored in a map:

```
 name | emails
------+----------------------------------------------------------------------------------
 Alex | {phone: +1 111 222 333, email: alex@gmail.com, address: Sierra Drive 212, 01002}
```

## General advices

Good things to remember while modelling your data would be:

  * Structure everything around __partition key__, so that entries that belong together would
    be stored on same nodes
  * Denormalize everything, based on reading patterns. If certain things are retrieved together,
    store them together.
  * When necessary, use __Dynamic Tables__. In that case you're able to utilize internal storage
    in the best way, using values within column names. Cassaforte provides resources for mapping
    Dynamic Tables back to straightforward structure.
  * When using __Dynamic Tables__ or __Compound Keys__, you're able to perform range queries
    with locked partition key, and achieve some flexibility in terms of querying. Make sure
    that you don't go wild with these, though. It's a nice feature, but if you're trying to
    squeeze large amounts of data just for sakes of being able to perform range queries, you
    may want to split it to smaller chunks or reconsider your reading patterns.
  * Make sure that your keys do not collide. That is especially applicable to time-series.
    You may end up overwriting some parts of the data.

<i>Published on June 17, 2014</i>
