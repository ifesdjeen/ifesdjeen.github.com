
It's amazing how differently people are using Rails. Wide variety of tasks is covered, and many people start saying stuff like "it would be ridiculous overkill for most apps starting out" when they here about the setup we're using.

I'm here to bust that myth. And yes, I'm going to be talking about Nginx, AMQP, ElasticSearch, application modulariy, heavy usage of partials, traits and many other things. Every single one of them takes about 5 minutes to start with, and scales amazingly well for application of any size.

# STI models

Actually, here you should be really careful. If you see that entites are very similar from the first glance, but are logically distinguished, try to use modules and include required blocks into each of the given models separately. If you see that entites represent different aspects of one, more generic entity, use STI.

If you use an STI models with a complex form, it could become very handy. Imagine, you have 2 types of customers: suppliers and buyers. Creation process allows to select between 2 types.

(give an example about validation)


STI models

Nginx upload module + progress reporting

No nested attributes

Search modularity

Backend calculations & AMQP

No JS approach

Clear Partials

Conditional rendering

