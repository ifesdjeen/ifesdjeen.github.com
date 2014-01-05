---
title: "Fabulous adventures with Enlive"
description: "How to build your own templating system using Enlive. Getting into the guts of Enlive, checking out what they do internally and learning how to build your own abstractions on top of it."
keywords: "clojure, enlive, template system"
layout: article
disqus_identifier: "fabulous_adventures_with_enlive"
disqus_url: "http://coffeenco.de/articles/fabulous_adventures_with_enlive.html"
---

## Adventures with Enlive

Enlive gives you a lot of different opportunities. You can write a DSL that fits your application/domain in a best way. You can organize your snippets the way it’s easy for both desigers and developers. It’s very difficult to achieve same level of flexibility with pretty much any other tool.

You can use enlive for numerous things. Main purpose of this set of tutorials is to help you to build rather complex websites and use it as a primary template language. We’ll cover the basics, and then will start building up our own abstractions on top of it, so that you could feel comfortable if you’re coming from Rails or Django background, want to have complex view logic and reusable components in your views.

To get more familiar with Enlive, I strongly suggest going through [David Nolen's](https://github.com/swannodette/enlive-tutorial/), or [Brian Marick's](https://github.com/cgrand/enlive/wiki/Table-and-Layout-Tutorial,-Part-1:-The-Goal) tutorials. I'm mostly writing about our experiences with Enlive, what helped us to do what we do, and try to provide tips on how to build more complex things on top of Enlive, rather than cover it's functionality.

Friends of mine mentioned that what I say here may be considered as not a 'traditional' way of doing things, which I do agree with. My major point is that Enlive could be used in many ways, and some of them are not as obvious, even though they are just as straightforward. If you're just starting up with Enlive, it may be helpful to see a couple of use-cases that may be or not be relevant to what you do. But knowing these things will definitely help you to find your own pattern.

## Anatomy of Enlive

### Tags

Probably, the first thing I would suggest learning about Enlive, is how it represents tags. For example, that:

```html
<img src="/palm_face.png" class="lazy" alt="Palm Face" style="display: inline-block;">
```

Becomes:

```clj
{:tag :img, :attrs {:style "display: inline-block;", :alt "Palm Face", :class lazy, :src "/palm_face.jpg" }, :content nil}
```

Knowing that, its a bit easier to understand what internals are built around and how they function.

### Transformations

Transformations are a heart of Enlive. We’ll use them as building blocks for our application.

Idea, that’s lying behind all the transformations you find in Enlive is extremely simple:

  * specify a selector (for example `[:body :div#header]`)
  * specify the transformation function (built-in ones are `content`, `append`, `clone-for`, `set-attr`, `remove-attr`).

For convenience, we'll use Enlive function called `sniptest`. It does pretty much same thing `defpage` and `deftemplate` do, and [is used](https://github.com/cgrand/enlive/blob/master/src/net/cgrand/enlive_html.clj#L911-L914) in [enlive test suite](https://github.com/cgrand/enlive/blob/master/test/net/cgrand/enlive_html/test.clj#L139-L143).

For example, you have a simple HTML snippet, such as:

```html
<html><body>
  <header class="some_class">Header Content</header>
  <footer></footer>
</body></html>
```

Now, let’s figure out what an enlive transformation function does.

```clj
(ns my-app
  (:require [net.cgrand.enlive-html :as html]))

(html/sniptest "<html><body><header class=\"some_class\">Header Content</header><footer></footer></body></html>"
               [:body :header] (fn [a] (println a)))
               ;; => {:tag :header, :attrs {:class some_class}, :content (Header Content)}
```

So, basically, what we get here is enlive representation of the selected tag. Let’s transform the tag now. For example, let’s upper-case the `:content` of the tag:

```clj
(html/sniptest "<html><body><header class=\"some_class\">Header Content</header><footer></footer></body></html>"
                  [:body :header] (fn [html-source]
                                    (assoc html-source
                                      :content
                                      (clojure.string/upper-case (first (:content html-source))))))
```

Remember what Enlive representation of a tag looked like? It’s basically a hash map, where the content is stored under `:content` key. Here, we `assoc` new, uppercased content within `html-source`.

Now, instead of "Header Content" we’ll get "HEADER CONTENT". Moving forward, let’s try selecting same exact thing twice, and transforming it twice, too. For that, let’s make the content of header repeat twice:

```clj
(html/sniptest "<html><body><header class=\"some_class\">Header Content</header><footer></footer></body></html>"
                  [:body :header] (fn [html-source]
                                    (assoc html-source
                                      :content
                                      (list (clojure.string/upper-case (first (:content html-source))))))
                  [:body :header] (fn [html-source]
                                    (let [content (first (:content html-source))]
                                      (assoc html-source
                                        :content
                                        (list
                                         (str content " " content)
                                         )))))
```

Obviously, we’ll get "HEADER CONTENT HEADER CONTENT". From that we can draw following conclusions:

  * transformation function receives selected content (and will modify it in some way)
  * transformation’s result is put instead of the selected item
  * having two identical selectors for transformations, second selector will be ran on the result of the first transformation.

Knowing these things, you can already apply some magic to your programs. For example, you can separate logic of modifying content and adding styles or attributes to some node, etc.

### content

```clj
(html/sniptest "<html><body><header class=\"some_class\">Header Content</header><footer></footer></body></html>"
                  [:body :header] (html/content "Some New Content"))
```

Output of this operation will be:

```html
<html><body>
  <header class="some_class">Some New Content</header>
  <footer></footer>
</body></html>
```

So basically `html/content` did pretty much same thing we’ve already seen, only in a more generic way.

### set-attr

`set-attr` is working in a very similar way to `content`. Instead of `assoc`-ing to `:content`, we `assoc` to `:attrs`:

```clj
(defn set-attr
 [& kvs]
 #(assoc % :attrs (apply assoc (:attrs % {}) kvs)))
```

So, for example:

```clj
{:tag :img, :attrs {:class "lazy"}, :content nil}
```

Having a transformation:

```clj
[:img] (set-attr :src "new_src.png" :alt "New Alt Yo")
```
You will get

```clj
{:tag :img, :attrs {:class "lazy" :src "new_src.png" :alt "New Alt Yo"}, :content nil}
```

## Custom transformations

Let’s make something more complex now. Personally, first time I’ve started using Enlive as a templating system, it was always taking me quite some time to put things on the places they belong.

For example, let’s take a GitHub header for logged in user (base/logged_in_user_header.html)

```html
<html>
  <body>
  <ul id="user-links">
	  <li>
    	<a href="/profile/link" class="name">
      		<img src="avatar.jpg" width="20" height="20">
      		<span>Username</span>
	    </a>
	  </li>
  </body>
</html>
```
And a snippet that’s going to put username, profile link and avatar on their places:

```clj
(ns my.cool.website
  [net.cgrand.enlive-html :as html])

(html/defsnippet logged-in-user-header "base/logged_in_user_header.html"
  [:ul#user-links]
  [user]
  [:a] (html/set-attr :href (profile-url user))
  [:a :img] (html/set-attr :src (avatar-url user))
  [:a :span] (html/content (:username user)))
```

Now, let’s say you had a redesign and username is now rendered not in a `span`, but in `div`. You have several possibilities, of course, one is to assign a class (or id) to the tag, and use more specific selector. But in any case, it’s a significant amount of an additional work to keep doing it all the time for all the things you need to inject anywhere on the website, and that can be quite unnerving.

So let’s make it possible to interpolate our hash into html snippet  (boilerplate part of html was ommited for brewity):

```html
<a href="{{user-profile-url}}" class="name">
  <img src="{{user-avatar-url}}" width="20" height="20">
  <span>{{username}}</span>
</a>
```

All we need to do now is to teach enlive how to interpolate such things. Knowing how enlive functions internally, it turns out to be extremely easy.

First, an anonymous function that is going to match our interpolations:

```clj
(def matcher #(re-find #"\{\{.*\}\}" (str %)))
```

Now, we need to build a predicate selector function for Enlive that will receive nodes and later apply transformations to the matched ones. In case with content (whenever interpolation is a part of the content), it’s quite easy:

```clj
[(html/text-pred matcher)] #(interpolate-kv % m "\\{\\{" "\\}\\}")
```

Predicate `(html/text-pred matcher)` will find only the tags that match our regular expression and apply `interpolate-kv` function to them.

In case with attributes (whenever interpolation is a part of one of attributes, but not of the content), it gets more complex:

```clj
[(html/pred
  #(some (fn [i] (and (not (nil? i)) (matcher i))) (get-in % [:attrs])))]
	#(interpolate-attrs interpolate-kv [m "\\{\\{" "\\}\\}"] %)
```

Here, we get all the attributes from the tag, find if either one of them has interpolations by matching the regular expression, and then apply `interpolate-attrs` function to the matched tag.

```clj
(require '[net.cgrand.enlive-html :as html])
(use 'clojure.test)

(defn apply-to-values [m f]
  "Applies `f` to each value of `m` map"
  (into {} (for [[k v] m]
             [k (f v)])))

;;
;; Predicates
;;

(def matcher #(re-find #"\{\{.*\}\}" (str %)))

(def attributes-have-interpolations?
  (html/pred #(some (fn [i] (and (not (nil? i)) (matcher i))) (get-in % [:attrs]))))

(def content-has-interpolations?
  (html/text-pred matcher))

(defn interpolate-kv
  "Interpolates values present within `m` hash to `pattern`"
  [^String pattern m]
  (let [interpolate-fn (fn [s [k v]] (clojure.string/replace s (str "{{" k "}}") (str v)))]
    (reduce #(interpolate-fn %1 %2)
            pattern
            (into {}
                  (for [i (re-seq #"\{\{(.*?)\}\}" pattern)]
                    [(second i)
                     (or
                      (get-in m (map keyword (clojure.string/split (second i) #"\.")))
                      (str "{{" (second i) "}}")
                      )])))))

(defn interpolate-attrs
  "Interpolates values present within `m` hash to `pattern`"
  [html-source m]
  (let [interpolated-attrs (utils/apply-to-values (:attrs html-source) #(interpolate-kv % m))]
    [(assoc html-source :attrs interpolated-attrs)]))

(defn interpolate-snippet
  "Interpolates snippet"
  [html-source m]
  (html/flatmap
   (html/transformation
    [attributes-have-interpolations?] #(interpolate-attrs % m)
    [content-has-interpolations?] #(interpolate-kv % m))
   html-source))

(deftest interpolations
  (testing "Complex interpolation"
    (let [html-source (html/html-snippet "<head><body><div id="{{person.nickname}}"></div><i>{{even.deeper.hash}}</i></body></head>")]
      (is (= "<head></head><body><div id="ifesdjeen"></div><i>YAY!</i></body>"
             (utils/render (interpolate-snippet html-source {:person {:nickname "ifesdjeen"} :even {:deeper {:hash "YAY!"}}})))))))
```

Turns out to be quite easy, right?

Now, our previous snippet, where we were manually putting each argument into the place it belongs, turns into:

```clj
(html/defsnippet logged-in-user-header "base/logged_in_user_header.html"
  [:ul#user-links]
  [user]
  [html/this-node] (interpolate-snippet (assoc user
                                          :user-profile-url (profile-url user)
                                          :user-avatar-url (avatar-url user))))
```

One of the interesting use cases for that would probably be Google analytics. Which you could of course solve differently (e.q. through introducing `data-attribute` or hidden input with a value that is read from JS). So, you could interpolate things like:

```html
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '{{account}}']);
  // ...
</script>
```

In that particular case it's quite helpful, since it may be not that great of an idea to maintain a single concern in two places (generic snippet for any website, and input that holds a website or page-specific value).

That enables you to add things to your hash, changing template, position of interpolation any time you want, and significantly reduces maintenance. When working with a designer, you may always render a pretty page with pre-set values for him, created by some convention, and after he’s done with his work, put interpolation placeholders back to your template for ease of your use.

As a security fanatic and general paranoid, I was wondering: what if there's some user input that is written to the database not escaped? What if someone posts wicked XSS to the form, and it gets rendered? There's nothing to be scared about here. As we manipulate content and attributes, without parsing/converting them to Enlive tags, it's all safe. Any input given by the user will be rendered as an escaped string, not as HTML. So here you may not worry, Enlive got it covered for you.

Enlive is a magical system, it allows you to do a lot of great stuff very easily. In the next episode, I’m going to tell more things about Enlive awesomeness and how to create Widget-based system, that will help you to A/B test things, boost performance of your website by parallelizing rendering of chunks, ease debugging of the website by creating snippets.

All these things are the part of our upcoming set of libraries for people who develop websites with Clojure. It’s far away from being framework, as we try to keep things decoupled and replacable. Moreover, by using Enlive instead of <name your favorite templating engine> you can build your own abstractions that are relevant to your domain instead of trying to squeeze your big idea into limiting engine.

Never be scared of writing your own thing. Often it will help you more than it will hinder. And, writing Clojure code is always fun. You can have it all.

<i>Published on Jul 2 2013</i>
