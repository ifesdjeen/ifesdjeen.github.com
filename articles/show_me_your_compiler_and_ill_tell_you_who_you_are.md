---
title: "Show me your compiler and I'll show you who you are"
layout: article
disqus_identifier: "show_me_your_compiler_and_ill_tell_you_who_you_are"
disqus_url: "http://coffeenco.de/articles/show_me_your_compiler_and_ill_tell_you_who_you_are.html"
---

# Show me your compiler and I'll show you who you are

During the different "phases" of my software developer life I'm thinking
of programming languages in very different ways: is dynamic better
than static, compiled is better than interpreted and so on.

Despite the fact many people were discussing this topic, have strong
opinions and taking sides, I try to approach this question from the
perspective of my productivity of my team and my own.

During initial phases of any software project, when design is still
unclear, and many features are being added, dynamic languages help a
lot, since you can chance method / function returns any way you like,
change APIs and move code around.

## Primitives

In Clojure, people like to pass primitives around. Everything you see
around application is either a hash, vector, list or a set. It's easy to
transform them, change keys and rename the fields, change the
order, arity or return type. However, whenever it comes to
refactoring, and stabilizing an API, you realize that you can't easily
find all occurrences of a certain `type` and changing it is gets
harder as the codebase grows.

Often people "solve" this problem by writing unit tests. This may be a
reasonable approach for tested APIs, but library internals remain a
black box, where consistency is questionable. You may face a subtle
bug caused by missed replace or a typo.

## Compile-time checks

Having an instrument that can help you to at least validate input,
output and basic format, show you what type you're currently dealing
with is invaluable.

In the best case, it will be available for you during the compile
time. Clojure `records` may be a good start for that. If you turn
`warn-on-reflection` on, and put corresponding type hints around your
code you'll at least get warned whenever you mistype a key or use a
wrong name for it. However, this doesn't save you from having a wrong
value for the key.

## Schema validation

Wrong value is harder to verify, and it falls into two categories:
value (may) be correct, but is of a wrong type (for example, you
forgot to convert `"123"` string to integer `123` or vice versa), or
value is of a correct type, but doesn't correspond to business
requirements.

Incorrect value type may be checked by schema validation. This is
quite easy to solve by having a factory, generating entities of a
certain type, that can perform a runtime validation, and throw an
exception that you catch during a test phase. This will also ease a
process of modifying unit-tests, since instead of seeing a test
failure that `"123"` (string) value isn't equal to `123` integer
value, you'll see that a certain key in your record holds a value of a
wrong type.

Having that said, I often miss the way Haskell allowed me to see
precise type signatures for everything I have in my program. I
(almost) always know that I pass values in a correct order,
and types flowing through the functions are matching.

## Typespecs and runtime checks

In Erlang, you can use `typespecs` in your function, and get a runtime
error when input type doesn't correspond to the specified `when`
condition. In Clojure, you can achieve same thing using assertions.

Knowing that a function will be called only when arguments types are
correct saves you a lot of time catching integer / string
concatenation issues or arithmetic exceptions because of an attempt to
add a string to double.

It's a bit sad, that often such things are nearly impossible during
compile-time, or simply make your program too verbose, since you have
to pass a type name along with variable.

## Overall consistency

Having consistent naming across the application also helps to easily
find occurrences of certain types. But I'm afraid that no tool can
help you with naming. I'll take a lot of diligence to always pass a
`User` type under `user` variable name, and not add multiple
(single-character) shortcuts.

Another "evil" I've experienced lately is a bunch of anonymous
functions, having an inconsistent variable order and unpredictable
return types, having no name at all and not tested in isolation, only
together with an enclosing function. Such things give you weird stack
traces, are hard to track and refactor.

## Conclusion?

I still do not know which way is better. But I also see that I'm
writing software in a different way, and running a test suite doesn't
do it all for me anymore. I want more power from compiler, I want to
be able to verify variable order along with the types. I want to know
that whenever there's a function call, I won't get an exception saying
that function arity is wrong.

Maybe the difference in understanding that issue comes from the ways
I'm writing software. If earlier I've been mostly writing programming
as if it was on a paper: you start on the top, write from left to
right until the page ends, then flip a page and continue on the next
one. Right now, I'm constantly changing things around and make small
changes affecting larger amounts of previously existing code.

I'm not advocating either one of mentioned approaches, nor I'm trying
to criticize them. I just want to warn everyone, end encourage to help
yourselves to evolve the codebases you're working on. Make it easy for
you to find things, find or construct tools that will catch your
(inevitable) error sooner, during compilation or at least test
phases. Add as many checks as it's possible, add compiler flags to
discard checks on performance-critical code paths, if you can't afford
validating your code all the time.

People say that time of Ruby on Rails is gone (not going to verify,
prove or disprove that claim). I'm saying that time of writing
software from top to the bottom is gone __for me__. I want to have
proper tools that give me the most information about the code I write
__while__ I write it.

