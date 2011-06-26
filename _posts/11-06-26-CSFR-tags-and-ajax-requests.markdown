---
layout: default
title: Rails CSFR tags & ajax requests
---

[CSFR](http://en.wikipedia.org/wiki/Cross-site_request_forgery) is one of many ways to exploit your web-applications. It employs session data in order to perform actions without users knowledge.

But, luckily, Rails has a protection m
In prior times, AJAX requests were allowed to bypass forgery protection, but today [things changed](https://docs.djangoproject.com/en/1.2/releases/1.2.5/#csrf-exception-for-ajax-requests)
