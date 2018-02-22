---
title: "Introduction to Enlive"
description: "Enlive tutorial, introduction and first steps"
layout: article
disqus_identifier: "introduction_to_enlive"
disqus_url: "http://coffeenco.de/articles/introduction_to_enlive.html"
---

__Update__: this document was taken from my private fork of Enlive, where I worked on updated readme doc for Enlive,
which somehow never got published.

You can checkout [enlive-ring](https://github.com/ifesdjeen/enlive-ring) for an example on how to use enlive with Ring.

# Enlive

Enlive is a selector-based (à la CSS) templating library for Clojure.

An Enlive template has two parts: a HTML file and a `deftemplate` form somewhere in a clj file.

David Nolen wrote a [nice tutorial](http://github.com/swannodette/enlive-tutorial/).

Another [tutorial](https://github.com/cgrand/enlive/wiki/Table-and-Layout-Tutorial,-Part-1:-The-Goal by Brian Marick) is by Brian Marick.

# Quickstart

## Template

First thing you need to start, is to define your first template. It's done with `deftemplate` function.
`deftemplate` is used as something what you would call layout in some other templating systems. In essence,
it's either a self-contained page (rarely true in bigger applications), or a container for snippets.

```clojure
(require '[net.cgrand.enlive-html :as html])

(html/deftemplate main-template "templates/application.html"
  [])
```

Now, you can start writing selectors and transformations for the given selectors. Let's add a title to the template. Given that your template already has `<head>` and `<title>` tags, let's insert a title.

Content of `templates/application.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>This is a title placeholder</title>
  </head>
  <body>
  </body>
</html>
```

```clojure
(html/deftemplate main-template "templates/application.html"
  []
  [:head :title] (html/content "Enlive starter kit"))
```

Here, `[:head :title]` is a selector, pretty much like a css
selector. If you're coming from jQuery, you can write same selector as
`$("head title")`. `html/content` is a transformation. It puts the
given content into the element specified by your selector.

## Snippet

Snippet is a unit of your page. It may be logical or visual entry, such
as header, footer, page element. Snippet is usually a part of a template,
and may serve as a container for other snippets.

Let's add several snippets. For example, navigation and some
content. For that, let's first define a template for the navigation.
Content of `templates/header.html`

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <header>
      <h1>Header placeholder</h1>
      <ul id="navigation">
        <li><a href="#">Placeholder for navigation</a></li>
      </ul>
    </header>
  </body>
</html>
```

```clojure
(html/defsnippet main-template "templates/header.html"
  [:header]
  [heading navigation-elements]
  [:h1] (html/content heading)
  [:ul [:li html/first-of-type]] (html/clone-for [[caption url] navigation-elements]
                                                 [:li :a] (html/content caption)
                                                 [:li :a] (html/set-attr :href url)))
```

# What's new in Enlive?

(most recent first)

By default selector-transformation pairs are run sequentially. When you know
that several transformations are independent, you can now specify (as an
optimization) to process them in lockstep. Note that this doesn't work with
fragments selectors.

Example:

```clojure
[:a :selector] a-transformation
[:another :selector] another-transformation
[:a :dependent :selector] yet-another-transformation
```

If the first two transformations are independent you can rewrite this code as:

```clojure
 :lockstep
  {[:a :selector] a-transformation
   [:another :selector] another-transformation}
  [:a :dependent :selector] yet-another-transformation
```

Transformations are now slightly restricted in their return values: a node or
a collection of nodes (instead of freely nested collections of nodes).

Dynamic selectors: selectors aren't compiled anymore. It means that you don't
need to wrap them in (selector ...) forms anymore nor to eval thme in the most
dynamic cases.

Fragment selectors allow to select adjacent nodes. They are denoted by a map of
two node selectors (eg `{[:h1] [:p]}`), bounds are inclusive and they select
the smallest matching fragments.

Transformations (the right-hand parts of rules) are now plain old closures.
These functions take one arg (the selected node) and return nil, another node
or a collection of nodes.

Rules are applied top-down: the first rule transforms the whole tree and the
resulting tree is passed to the next rules.

Nodes are transformed deep-first, that is: if a selector selects several nodes,
descendants are transformed first. Hence, when the transformation is applied to
an ancestor, you can "see" the transformed descendants (but you can not see
your transformed siblings).

```
   /B                                                                              /(T B)
  A    if A and B are selected and transformed by T then the resulting tree is (T A      )
   \C                                                                              \C
```

# Selectors

Enlive selectors can match either nodes or fragments (several adjacent nodes).

## Selectors 101

At the core, *every selector is a vector*. The items of this vector are called
*steps*.

A step is a predicate, for example `:h1`, `:p.some-class` or even
`(attr? :lang)`.

To select elements which match several predicates, you need to group
predicates into a vector: *inside steps, vectors mean "and"*. This may seem
confusing but the rule is simple: the outer-most vector hierarchically
chains steps, all other vectors denote intersection (and) between steps.

So `[:p (attr? :lang)]` is going to match any elements with a `lang` attribute
inside a `:p` element. On the other hand, `[[:p (attr? :lang)]]` is going to match
any `p` with a `lang` attribute.

Similarly, sets group predicates in an union. Hence *inside steps, sets mean
"or"*. So `[#{:div.class1 :div.class2}]` match every `div` which has either
`class1` or `class2`. This can alternatively be written
as `[[:div #{:.class1 .class2}]]`. Indeed you can have nested "ors" and "ands"
which means nested sets and vectors.

At the top level you can have a big "or" between selectors by wrapping several
selectors in a set. `#{[:td :em] [:th :em]}` is going to match any `em` insides
 either a `th` or a `td`. This is equivalent to `[#{:td :th} :em]`.

## Syntax

See [syntax.html](http://enlive.cgrand.net/syntax.html)

Some examples:

```
Enlive                                       CSS
=======================================================
[:div]                                       div
[:body :script]                              body script
#{[:ul.outline :> :li] [:ol.outline :> li]}  ul.outline > li, ol.outline > li
[#{:ul.outline :ol.outline} :> :li]          ul.outline > li, ol.outline > li
[[#{:ul :ol} :.outline] :> :li]              ul.outline > li, ol.outline > li
[:div :> :*]                                 div > *
[:div :> text-node]                          (text children of a div)
[:div :> any-node]                           (all children (including text nodes and comments) of a div)
{[:dt] [:dl]}                                (fragments starting by DT and ending at the *next* DD)
```

## Templates and snippets

A snippet is a function that returns a seq of nodes, it can be used as a
building block for more complex templates.

A template is a function that returns a seq of string -- basically it's a
snippet whose output is serialized. Templates return a seq of strings to avoid
building the whole string.

Templates and snippets transform a source (specified as a path (to access
resources on the classpath), a File, a Reader, an InputStream, an URI, an URL,
an element or a seq of nodes).


## The `at` form

The `at` form is the most important form in Enlive. There are implicit `at`
forms in `snippet` and `template`.

```clojure
(at a-node
  [:a :selector] a-transformation
  [:another :selector] another-transformation
  ;; ...
  )
```

The right-hand value of a rule can be `nil`. It's the idiomatic way to remove an
element.

Transformations are closures which take one arg (the selected node) and return
`nil`, another node or an arbitrarily nested collection of nodes.

Rules are applied top-down: the first rule transforms the whole tree and the
resulting tree is passed to the next rules.

## Transformations

A transformation is a function that returns either a node or collection of node.

Enlive defines several helper functions:

```clojure
;; Replaces the content of the element. Values can be nodes or collection of nodes.
(content "xyz" a-node "abc")

;; Replaces the content of the element. Values are strings containing html code.
(html-content "<blink>please no</blink>")

;; Wraps selected node into the given tag
(wrap :div)
;; or
(wrap :div {:class "foo"})

;; Opposite to wrap, returns the content of the selected node
unwrap

;; Sets given key value pairs as attributes for selected node
(set-attr :attr1 "val1" :attr2 "val2")

;; Removes attribute(s) from selected node
(remove-attr :attr1 :attr2)

;; Adds class(es) to the selected node
(add-class "foo" "bar")

;; Removes class(es) from the selected node
(remove-class "foo" "bar")

;; Chains (composes) several transformations. Applies functions from left to right.
(do-> transformation1 transformation2)

;; Clones the selected node, applying transformations to it.
(clone-for [item items] transformation)
;; or
(clone-for [item items]
  selector1 transformation1
  selector2 transformation2)

;; Appends the values to the content of the selected element.
(append "xyz" a-node "abc")

;; Prepends the values to the content of the selected element.
(prepend "xyz" a-node "abc")

;; Inserts the values after the current selection (node or fragment).
(after "xyz" a-node "abc")

;; Inserts the values before the current selection (node or fragment).
(before "xyz" a-node "abc")

;; Replaces the current selection (node or fragment).
(substitute "xyz" a-node "abc")

;; Takes all nodes (under the current element) matched by src-selector, removes
;; them and combines them with the elements matched by dest-selector.
(move [:.footnote] [:#footnotes] content)
```
