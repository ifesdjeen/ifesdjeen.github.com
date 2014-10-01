---
title: "What monad type signatures look like in my imagination, Part 1"
layout: article
disqus_identifier: "what_monad_type_sginatures_look_like_in_my_imagination"
disqus_url: "http://coffeenco.de/articles/what_monad_type_sginatures_look_like_in_my_imagination_part_1.html"
---

# What monad type signatures look like in my imagination, Part 1

The thing that's been bothering me with Haskell more than anything else 
is certainly type checking. Although, that's my favourite feature from
the language. Problem is, when you're just a beginner, it's just much
too hard to understand things and move forward, if you're more like me,
you start poking around until you got it to compile, shut lid of
your laptop and fall asleep because it's  way after midnight.

Since this is not a (yet another) Monad Tutorial, to learn what Monad,
Applicative and Functor are, it is better to refer to one of good 
sources to read about Monads themselves. The following two links have
been most helpful for me personally:

  * [Typeclassopedia](http://www.haskell.org/haskellwiki/Typeclassopedia) may
    be a great place to start and learn basic concepts.
  * [Monad Transformers Step By Step](http://www.cs.virginia.edu/~wh5a/personal/Transformers.pdf)
    is a great source to learn more about Monad Transformers.

For more information and links on how to start with Haskell, I suggest
referring to [Chris Allen's Learn Haskell repo](https://github.com/bitemyapp/learnhaskell).

## Intro

Several things to keep in mind while reading this article:

  * `Integer -> Integer` is read like "receives `Integer` and returns `Integer`"
  * `<-` is read like "is coming from"
  * Every `Monad` is also an `Applicative`, which is in turn a `Functor`. Keeping
    that in mind may help you to find easier/better fitting constructs.
  * I'm mostly using `IO` in all the examples. This was done intentionally, since
    everyone constantly says that `IO` is difficult in Haskell, and `Maybe` is so
    awesome. But composing things wrapped into `IO` context is just as easy and 
    convenient as composing things wrapped into `Maybe` context, so you may replace
    `IO` with `Maybe` (or any other "context") in most of examples and yield same
    exact results.
  * Most of functions don't have implementation, and I'm using `undefined` placeholder
    for them. This was done for you to be able to copy-and-paste the code straight
    to your favourite editor and try playing with them / seeing that they type check 
    without providing implementations or even thinking about implementation details.

## Approaching Monads 

After going through first several Monad Tutorials™, it was clear that monad is 
just a Typeclass, and there are many things that are, in essence, monads. Although
when it came to implementation, there was no good intuition, so I had to guess some
things, or try infer them from type signatures, which was not so easy. 

I've taken a notebook and starting writing things down for myself: when there's 
`X` on left hand side, and `Z` on right hand side, `Y` should come in the middle. 
This way I was able to start from either `X`, `Y` or `Z` and just  fill the blanks.
After a couple of repetitions things started getting more and more automatic, and
eventually I've mostly stopped noticing presence of monads in many parts of the 
codebase.

We all learn differently, and for me it got much easier when I started seeing 
these patterns. You may say it's all in signatures, and would be true, but if you 
already understand signatures perfectly well, this post is not for you. 

Main purpose of this article is for you to gain some intuition on when to use, 
what, and imagining which "visual" pattern that signature may be mapped to. 

## `bind` / `return`

Bind (`>>=`) and `return` is the simplest combination available in 
monadic stack, and everyone seems to get it quite fast.

```haskell
intOp :: IO Integer
intOp = undefined 

main = do 
-- ↓ here `i` is of type `Integer`
   i      <- intOp
-- in order to get it wrapped back to `IO`, we need to use `return`
  return (i + 1)
```

Even though I'm using `IO` monad here, same exact thing is 
possible with any other monad. 

## Two `bind`s and `return`

In the same way, you can combine things that are coming from several
contexts:

```haskell
intOp1 :: IO Integer
intOp1 = undefined 

intOp2 :: IO Integer
intOp2 = undefined 

main = do 
  i1      <- intOp1
  i2      <- intOp2  
  return (i1 + i2)
```

## `bind`, `<$>` and `return`

Now, let's imagine, we have one function that returns `IO Integer`,
and second one that returns `Maybe Integer`, and we'd like to return
a sum of them. Most likely the type of desired result would be
`IO (Maybe Integer)`:

```haskell
intOp1 :: IO Integer
intOp1 = undefined

intOp2 :: Maybe Integer
intOp2 = undefined

main2 :: IO (Maybe Integer)
main2 = do
  i1      <- intOp1
  return $ (i1+) <$> intOp2
```

Here, several things are worth mentioning:

  * type of `i1` is `Integer`
  * type of `i1+` is `Integer -> Integer` 
  * since `intOp2` is `Maybe Integer`, and `Maybe` is an `Functor`, we 
    can use `<$>` to apply `Integer -> Integer` opration to `Maybe Integer`.
    
So somewhere in my imagination the last line looks like:

```haskell
(Integer -> Integer) <$> (Maybe Integer)
```

And it would return `Maybe Integer`. In order to add our desired `IO`, we
shuold only add `return` before it.
    
## `liftM`

`liftM` was especially useful for me when writing some convenience functions
that operate on things within a monadic context. For example, if you have
an `IO (Integer, String)` (tuple within an `IO` context) and you'd like to 
extract the second part of tuple (which is `String`), you can use `liftM`:

```haskell
liftedSnd :: IO (Integer, String) -> IO String
liftedSnd = liftM snd
```

Here, we've converted a function with signature of `(a,b) -> b` to the function 
that operates within `IO` context: `IO (a,b) -> IO b`. 

Once again, there's nothing  specific about IO here, so you may as well use it 
with any other Monad.

You may have also noticed that `liftM` here may be as well replaced by `fmap` or 
`<$>`: 

```haskell 
extractSndFromTuple :: IO (Integer, String) -> IO String
extractSndFromTuple tuple = snd <$> tuple

-- Or even
extractSndFromTuple = fmap snd
```

## `liftM2`

`liftM` however has version with 2 arguments, called `liftM2`, which is very 
useful when you'd like, for example, make a sum of of several things, wrapped
into `IO` context. 

For example, if you want to concatenate two `Strings` wrapped into `IO`, you can
use `liftM2`: 

```haskell
concatenateIOStrings :: IO String -> IO String -> IO String
concatenateIOStrings = liftM2 (++)
```

You may as well use it with `Maybe`:

```haskell
concatenateMaybeStrings :: Maybe String -> Maybe String -> Maybe String
concatenateMaybeStrings = liftM2 (++)
```

Or even say that your helper is valid for __every__ Monad:

```haskell
concatenateMStrings :: Monad m => m String -> m String -> m String
concatenateMStrings = liftM2 (++)
```

Just for the reference, there are also versions of `liftM` for 3, 4, 5 
arguments: `liftM3`, `liftM4` and `liftM5`.

## `<$>` and `<*>`

Because every `Monad` is an `Applicative` and a `Functor`, you can use
`<$>` and `<*>` to yield the same exact result: 

```haskell
concatenateIOStrings :: IO String -> IO String -> IO String
concatenateIOStrings ioStr1 ioStr2 = (++) <$> ioStr1 <*> ioStr2
```

To generalize it all a bit, and get rid of tying yourself to `IO`, you
can say that this function is also valid for everything that is an
`Applicative`: 

```haskell
concatenateAStrings :: Applicative a => a String -> a String -> a String
concatenateAStrings ioStr1 ioStr2 = (++) <$> ioStr1 <*> ioStr2
```

To be honest, reading type signatures for `<$>` and `<*>` didn't help
me at first. Although seeing this pattern repeated by several people
in different projects have helped me to understand it all better.

## End of the part 1

Thanks for reading that far. I'm planning to write a second part of the
post, where I wanted to pretty much go on in the same spirit and
go through `mapM`, `sequence`, `traverse`, `join`, a word or two about
transformers, and show several combinations that I've learned "hard way".

If you liked this post, and would like to see the second part, please
ping me on [Twitter](http://twitter.com/ifesdjeen). It'd be good to know
whether there is any demand. If you're a seasoned Haskell developer, and
know how this post could be improved, please get in touch, too!
