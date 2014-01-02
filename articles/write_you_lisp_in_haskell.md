---
title: "Write you Lisp in Haskell!"
layout: article
disqus_identifier: "write_you_lisp_in_haskell"
disqus_url: "http://coffeenco.de/articles/write_you_lisp_in_haskell.html"
---

## Huskell

This article is an encouragement for everyone who wants to understand
CS better, for people who want to write their own little programming
language for sheer fun, to boost an understanding of what's going on
inside interpreter when you hit `enter`. For people who want to know
more about Lisp and Haskell (although former is arbitrary, since one
can write an interpreter in any language he prefers.

Before `DefLisp`, I had absolutely no idea about Haskell. I've heard
about Monads, parser combinators and how great it is to use Haskell for
basically anything in the world, although I never could come up with a
good grasp, and all my learning attempts were failing, since there was
nothing I could apply my knowledge to.

Surely, I'm still a newbie in Haskell, and there are many things I still
do not understand properly, but now I at least know enough to find
answers for my own questions, and have some questions I can ask.

## FP is easy

Meet [Huskell](https://twitter.com/huskelldog). She's a doge, that learns
herself some Functional Programming. She's an active community member,
and she's been very helpful in writing a `DefLisp`.

<img src="/assets/images/huskell.jpg" style="max-width:500px;"/>

I'm a bit concerned, since Haskell, same way as some other Functional
Programming languages, got a reputation that they have a __steep
learning curve__, and you have to know Math well, or understand
Functional Programming well in order to start working with those.

That's simply not true. You'll learn these things the same way you
learn how to use a new library, API or operating system. You may
struggle through some concepts, but after a bit of time, you'll be
surprised how naturally they're flowing from under your fingers.

You don't have to read books before learning a new language. Books will
probably scare you, and you'll read them blindly, not knowing what is
important and what you should or should not understand deeply at that
stage.

Best thing you can do is to set up an environment and start
hacking. You'll start asking right questions almost immediately: "How do
I write a function?", "How do I include a dependency?", "How do I
create my own data type?" and so on. You'll find answers in minutes,
and that knowledge will be accessible for you, since you'll know where
to look for answer in case you happen to forget it.

## Your codebase

Starting learning a new language usually involves learning a new
vocabulary. Things like ADT (algebraic data types), Type Classes,
Pattern Matching, Monads and so on were (in a way) foreign to me,
despite reading books, seeing blog posts and checking out other
people's code.

Implementing my own things gave me a chance to check out how to do it
quickly. Now I can open up my own codebase, one that I'm familiar with,
and find something I need. That's like your personal StackOverflow, a
Wiki, part of which is in your head (since you know what you've done),
and second part is in your repository.

I can write some things out of my head by now, but for some things I
still have to check out how I've done it before, and use some Sherlock
Holmes deduction to understand how to apply it to the problem I'm
currently solving.

## Writing Lisp

Writing your own Lisp is easy. Lisp has a very little syntax:

  * `a` is a symbol
  * `()` is an empty list
  * `(+ 1 1)` is an expression, which consists of a list of a symbol,
    number and another number.
  * `"str"` is a string

Of course that's just a beginning, since one can implement floating
point numbers, and some more primitives, but having just these things
can already enable you to implement a good portion of Lisp.

I'm not going to bore you with code. I'll leave some links to the code
snippets if you're interested in an implementation, but in this post
there will be a minimal amount of code.

So the data types for a little lisp are simple. We've got a
`LispExpression`, that can be one of the following:

  * `LispSymbol` is just a `String`
  * `LispString` is a `String` too, but with a little help of
    Algebraic Data Types we can distinguish them.
  * `LispList` is an `Array` of `LispExpressions` (recursion FTW)
  * `LispBool` is just a `Boolean`

You can check out this part of code, data type definition,
[here](http://git.io/pbWgug).

## Parsing

Parsing is the fun. I've been using
[Parsec](http://www.haskell.org/haskellwiki/Parsec) parser combinator
library, and it turned out to be very easy to understand and flexible.

You have to put things in a correct order, and make an overlap as
minimal as possible, but other than that it's quite easy. At that
stage, I've decided to make a separation between a `Symbol` and a
`ReservedKeyword`. So far I've gotten not that many reserved keywords:

  * `def` is a definition, used whenever you want to bind a `symbol` to
    some expression
  * `fn` is used for creating functions
  * `if` is a conditional
  * `defmacro` is used for creating named macros
  * `nil` is a nil :)

All the other symbols are at your disposal. In order to start parsing,
we [first
try](https://github.com/ifesdjeen/deflisp/blob/f80b885e39d26683e9bf14e70ef0d7668d3d0481/src/DefLisp/Core/Parser.hs#L72)
to figure out whether the input is a [reserved
keyword](https://github.com/ifesdjeen/deflisp/blob/f80b885e39d26683e9bf14e70ef0d7668d3d0481/src/DefLisp/Core/Parser.hs#L39-L46).
If it is, we create a `ReservedKeyword`, otherwise we proceed to check
whether it's a `Symbol`, `Number`, `String` or `List`.

## Evaluation

Result of parsing is an AST (Abstract Syntax Tree), which is used for further
evaluation. Based on AST, you can build evaluation rules. For example,
`Number` literal evaluates to the number itself. `String` evaluates to
string. Since `Symbol` is a link to some expression, we have to look it
up in the `Environment`.

`Environment` [is just a dictionary](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core/Types.hs#L11),
map of a `Symbol` mapped to the expression. In Lisp, functions capture
the environment around them, and it's called a `closure`. Because
functions can be nested within each other, there may be more than one
`closure`. For example:

```
(fn [a]
  (fn [b]
    (fn [c]
       (+ a b c))))
```

Here, we have a top-level function, which has a binding of `a`, which
becomes a closure for the second-level function. This function has a
binding of `b`, which becomes a closure for the third function. Third
function has access to two `closures` and an environment.

This brings us to the complete evaluation process:

```haskell
eval :: [LispEnvironment] -> LispExpression -> State LispEnvironment LispExpression
```

`eval` takes a stateful `LispEnvironment` (within [State monad](http://www.haskell.org/haskellwiki/State_Monad)
an array of `closures` (`[LispEnvironment]`), a form
(`LispExpression`), and when the State Monad is evaluated, we receive a
result of an expression, which is the last `LispExpression`.

[Lookup for the
`Symbol`](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L151-L155)
first checks the innermost closure for the value, if there was no value
found and we got `Nothing`, we try looking up in second innermost
closure, and so forth until we either find a value or conclude there
was nothing found in closures, so we try looking up in an
`Environment`. If we succeed, we return a value of symbol. Otherwise,
it's an error, since we don't know how to evaluate the symbol.

## Definitions

Evaluation process is based on the pattern matching, which makes it all
way easier. For example, we can say that when list consists of a `def`
keyword, followed by an expression (form), it should be defined in an
Environment:

```clojure
(def a (+ 1 1))
```

Since we have our AST defined, evaluation pattern match will look like
that:

```haskell
eval closure (LispList[(ReservedKeyword DefKeyword), var@(LispSymbol _), form])
```

The `form` [is
evaluated](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L167)
 and result of evaluation is saved in the `environment`, and new state
 of `environment` is [put
 back](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L168)
 into the state monad.

## Function evaluation

Functions have a two-step evaluation process. It's split into the
definition and evaluation itself. For example, when we have a list of :

```clojure
((fn [a] (+ a 1)) 1)
```

First, we evaluate a `(fn [a] (+ a 1))` form by creating a
`LispFunction`, [which receives](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L199-L200)
a current `closure` stack, `bindings` and a `form`.

Next, we match a `LispFunction` with the rest of the list. Rest of list
should have [the length of the
`bindings`](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L214)
that the function receives. Now, we create another closure, that
consists of `bindings` and the `forms`. In our example, we'll have a
dictionary of `{a 1}`, which means that `a` will be evaluated to `1`.

We [evaluate all the
arguments](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L218)
with the closure stack [together with new
bindings](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L220)
we just created, [evaluate the final
result](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L221)
and return it.

## Conditionals

Conditional consists of the `if` keyword, followed by three forms: a
[test
expression](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L205),
an expression that should be evaluated [if test expression is
true](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L206)
and an expression that should be evaluated
[if test expression is false](https://github.com/ifesdjeen/deflisp/blob/fb46b908941eb405408f598210733ffdac315bad/src/DefLisp/Core.hs#L207).

## Map/reduce

Having all the aforementioned things in place, we can start creating
first functional operations: `map` and `reduce`.

```clojure
(def map
  (fn [f coll]
    (if (empty? coll)
      ()
      (cons (f (first coll))
            (map f (next coll))))))
```

Here, `map` is defined. We start with a collection. Collection is split
into two parts: head and tail. Head of collection is evaluated against
the given function `f`, and tail of the collection is passed to the
recursive `map` call, together with a function `f` itself.

Same way, we can define a `reduce`:

```clojure
(defn reduce
  (fn [f coll acc]
    (if (empty? coll)
        acc
        (reduce f (next coll)
                (f acc (first coll)))))
```

Reduce receives a function `f`, a collection `coll` and initial
accumulator. On each step, we split the collection to two parts,
building a stack of functions that will be evaluated.

Whenever the collection, passed recursively is empty, we return an
accumulator. Since then, we simply start calling `f` against the result
of the next step. For example,

```clojure
(reduce (fn [acc i] (+ acc i)) 0 '(1 2 3))
```

On the first step, we take a head of list, `1`, and call `reduce` with
a function and a list of `(2 3)`, next we call it a list of with just
`(3)`, and finally with an empty list `()`. On that step, we return an
accumulator (which is `0`) in our case, and start applying arguments in
reverse order to sum function.

First, we add `0` and `3`, resulting `3` is returned, and `2` is added
to it, then `5` is added to `1`, and we finally get a `6`, which is a
result of our reduction.

## Conclusion

In next posts, I'll tell a bit more about the so-called `library`
functions, and why I decided to split user-defined and built-in
functions. Also, how the macro system was implemented, how the
bootstrap was done, and about some things I struggled with while
implementing the `DefLisp`.

I'll be glad to hear your feedback. You can reach me over
[email](alex@clojurewerkz.org) if you want to hear something particular
about it.

Also, if you're in Munich, we're starting a little campaign, where
we'll help anyone who wants to learn Haskell and implement an own Lisp
in it on the [Munich Lambda](http://www.meetup.com/Munich-Lambda/) user
group. You can already RVSP for the [Write your Lisp in Haskell
workshop](http://www.meetup.com/Munich-Lambda/events/150671292/), that
will occur already in March.

Until then, you can start learning Haskell and other FP languages with
us in our Functional Institute meetups. [First
one](http://www.meetup.com/Munich-Lambda/events/158156492/)
will take place at codecentric AG Munich Office on 9th of January.
