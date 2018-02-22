---
title: "Language is not important"
layout: article
disqus_identifier: "language_is_not_important"
disqus_url: "http://coffeenco.de/articles/language_is_not_important.html"
---

## Language is not important

Some people like to make fun of me and like to call me a hipster,
especially ever since I've started working with Functional Programming
languages. The longer you're working with them, the more opinionated you
get about the ways to build the software, and the more you start missing
certain features that generally have very little to do with Functional
Programming (such as pattern matching and list comprehensions), but are
extremely useful in a day-to-day life.

I've been doing Clojure since 2011 and have started looking at Erlang
and Haskell a couple of years ago. Up till the date, I still haven't
written anything reasonably large in Erlang (just a [toy implementation](https://github.com/ifesdjeen/polyxena)
of Cassandra CQL binary protocol, but that's still rather small).

With Haskell, I've done quite some things related to FFI (not sure
whether that counts more for C than for Haskell though), started writing
a [pet project](https://github.com/ifesdjeen/continuum) , which will take a long time to finish and polish. I've
even accidentally managed to send [two](https://github.com/ghc/ghc/commit/08610c1fdc7816c74faed40f8a7d3c4b4758709e) [pull](https://github.com/ghc/ghc/commit/35833122da8ddb2c0e7aaee0c9b6089af52e38b1) requests to GHC. But I'd
never call myself even an
[intermediate Haskeller](http://www.reddit.com/r/haskell/comments/2olrxn/what_is_an_intermediate_haskell_programmer/cmoldii?context=1). I'm
just an amateur and do it for sheer fun.

## Having drunk FP Kool Aid

On Twitter, someone (if you know who it was, please send me a link)
posted his (in that particular case I'm quite sure I got that gender
thing right) impressions about writing a first reasonably-sized Haskell
project. And it was a mixture of fun and pain. I can say that my
experience was rather similar.

When you just start working with Haskell, you start using (and abusing)
the do-notation and the Scary Monads start look rather imperative. Many
people (especially ones that aren't planning to build a great Haskell
career), stop there and decide they've seen it all, and know the Monads.

If you stick around Haskell for long enough, you realize that you don't
really need Monad everywhere, and the majority of things can actually be
accomplished with whatever Functor and Applicative offer. You don't feel
stuck when you see the type signatures, and you start really enjoying
that making a massive refactoring in your project can be done in
relatively small amount of time, and in majority of cases, "when it
compiles, it works".

It's hard to say how much time it takes to get from the first to the
second stage. For some people, it's a couple of days. For some, it may be
months. For me, it was rather long. I felt myself lost in front of all
those Monads and wanted to give up pretty much every day. When I tried
asking people about help, I was either getting answers that were rather
generic and didn't make sense for me (probably made a lot of sense for
the person on the other side of the wire). Although once I got an
awesome 30-minute lecture on Monad Transformers on IRC, and I will never
stop being thankful for that.

In general, it's close to impossible to just sit and start programming
Haskell. The syntax is simple, but you have to catch up on the theory. But I
now tend to think that the concepts behind all the cool things in
Haskell are much more important than Haskell itself for me.

For example, I now know that it's possible (and even understand how) to
write programs that have no nil values, or exceptions. Reading a
tutorial online will maybe help you to stop fighting the thought of
the impossibility of such, but won't really make you sit and stare at
ceiling for 20 minutes, realizing how cool that is and resenting not 
knowing it for your whole life. But both these things are only relevant
for me on a conceptual level. I can build them into any language I use. I
don't need Haskell for that.

*hears raging voices saying it's impossible without an awesome
type checker*

## Category Shmategory

I knew that Haskell is also a gateway drug into the world of Abstract
Algebra and Category Theory. So I decided to start with the books in my
native language and have gotten myself familiar with
[graphs](http://en.wikipedia.org/wiki/Graph_(mathematics)),
[isomorphisms](http://en.wikipedia.org/wiki/Isomorphism),
[binary operations](http://en.wikipedia.org/wiki/Binary_operation), all
the laws, theorems, axioms and so on, carrying a book with me all the
time, reading proofs while sipping coffee during the short break.

It's a great fun, I must say. And many things were extremely
interesting. So as I started feeling that I understand the algebraic
concepts and should move towards the roots of Haskell, I found that I
can understand everything there, too.

Except for I didn't understand why the nested let bindings should take 6
pages of formulas and proving to explain, and even the simplest types
are expressed in the terms so abstract that it felt necessary to google
for that GitHub repo Russian government banned GitHub over.

I must admit that I didn't do Ph.D. in either of those topics. It's all
been just my hobby, and I will some day continue studying Abstract
Algebra for fun. But for now, it all feels much too abstract and I see
absolutely no application for it in my life.

## Financial Pyramid

For all those months of learning, when I felt lost and every line of
code was taking minutes and sometimes hours to write, I kept listening
to the people who were saying that Haskell is a great investment, and I
should keep pressing on, because it will pay me back tenfold.

But I'm a Soviet Kid. I still can remember that
[MMM](https://en.wikipedia.org/wiki/MMM_(Ponzi_scheme_company)) story
from after-soviet time, when you were asked to invest for a greater
promise, so I'm very skeptical when, after a long time of working with
the language, and being very proficient with it, being able to write
whatever I want, I never feel certain or secure about what I am doing.

Maybe that has something to do with the Mysteries around Haskell and
superhuman abilities of the people who do it, that I was imagining back
when I just started. To be honest, I still feel this way. I have to
close my eyes for a second when someone mentions
[endomorphism](http://en.wikipedia.org/wiki/Endomorphism) or
[bijection](http://en.wikipedia.org/wiki/Bijection) to tie it all up
with the ongoing conversation. I just feel cheated, since in my head, by
now I should have stopped investing and could already start collecting
my dividends.

But since that's a rather philosophical post, I'm not putting any
concrete information such as dates here. It doesn't matter how much I
learned. It's been long enough for everyone I know to get bored with a
subject, and long enough for me to start pondering about where all the
time went. I can only speak for myself, and if it was different for you - I'm very glad.

But if you feel the same way I do, and, when looking around, only see
the people who find those discussions Abstract Algebra exciting (and not
tiring), and wonder if it all was worth the effort, be my guest. We can
create a club of people who at least didn't stick around Abstract
Algebra long enough to become dangerous.

## Back to the Basic(s)

Fast forward all that time, it's still much easier for me to make a
little web server in Clojure or Python, I still do most of juggling with
data in Clojure REPL, and still enjoy writing Java and C code (depending
on circumstances).

Do I think that the time was wasted? No, not at all. I think that the
time was well spent. I've learned a whole bunch of things, and I'm still
planning to continue writing my little database in Haskell. I just don't
want to invest years of my life into a demanding technology.

Moreover, it's impossible to grasp what [Functors](http://en.wikipedia.org/wiki/Functor), [Applicatives](https://www.haskell.org/haskellwiki/Applicative_functor) and
[Monads](http://en.wikipedia.org/wiki/Monad_%28functional_programming%29) (and all kinds of [Semigroups](http://en.wikipedia.org/wiki/Semigroup), [Monoids](http://en.wikipedia.org/wiki/Monoid) and other fancy things) are
from the ["Monad Tutorials"](https://www.haskell.org/haskellwiki/Monad_tutorials_timeline). They kind of scratch the surface of
usefulness from time to time, but in majority of cases they're either
misleading or not really helping to understand the whole power of the
concept and how to apply it in real life.

In that regard, learning Haskell helped more than anything else. You
don't just think of a Monad as a "side-effect" or a "container/context",
you think of it as a major building block of your application. And you
can start applying the same concept in your Java / Ruby / Clojure code,
or any other language. Without diving into it head first and spending
enough time for it to click in your head, I don't believe you will be
proficient enough to use it anywhere.

## Learning things

It's always hard to choose what to learn next since there are so many
things out there that are very interesting. Many people enthusiastic
about Functional Programming Languages are ready to teach their peers,
and invest their personal time into making it all bigger. But you have
to always bear in mind: it's a lot of effort and work. And it will
require effort not only from your side (as a teacher), but also from the
people who learn, which is quite normal and applies to anything,
starting from learning how to bike and up to quantum physics.

Most of the time, when people talk about using the cool stuff at work,
they also mention some bonds or obligations: the one who brought FP in should be teaching and supporting the others. I have spent 2 years
[helping people learn](http://www.meetup.com/Munich-Lambda) Clojure,
Haskell, and other FP Languages. And I can say that it takes a lot
of time, and usually return does not excite you so much. 

If you enter the World Of Haskell with the great enthusiasm, the
opportunities are pretty much endless. You start with Haskell itself,
and you can practice and master it for years and years. If you feel
fancy, you can start learning Category Theory (or [Homeopaty Type Theory](http://homotopytypetheory.org/))
and Abstract Algebra. I'm still not sure whether you have to have a
great mathematical mind in order to learn and understand it all (most
likely yes), I've only scratched the surface.

Once I've been told by the Haskell Enthusiast that I want to reap what I
saw too quickly, which I admit is true. But, unfortunately, there
are too many things applicable in everyday life I'd like to learn, so
I'm putting my `4b$7rac7 $7uff` endeavor on a pause.

## Language doesn't matter

After I've started doing Clojure, I thought I won't be ever able to
program Java again, because Functional Programming and all these things,
you know. But after doing both Clojure and Haskell (and many other
languages in between), I can say that language doesn't matter that
much. I now know where I can make mistakes, and write my Clojure code
the way I could have at least some poor man's type checking, and write
my Java code the way I could be at least remotely sure about what it
does after it compiled.

It's really great that I can have IO encoded in the type signature, but
that was never been a selling point for me. There are many other things
I appreciate much more (like
[ADTs](http://en.wikipedia.org/wiki/Algebraic_data_type), 
[Pattern Matching](http://en.wikipedia.org/wiki/Pattern_matching), [Tuples](http://en.wikipedia.org/wiki/Tuple) etc). But
they're generic and universal and do not belong to any specific piece
of technology. I'm also sure that sooner or later many things will get
better in mainstream programming languages. Whenever the humanity is
ready for that.

Knowing concepts turned out to be much more important than being able to
use a certain implementation (or syntax) for me. Of course, I will never
be able to do Pattern Matching in Java that'd look at least remotely
sane, but in the majority of cases I can also live with it. At least I can
guarantee immutability when I need it, and I now know and understand
very well how to work with immutable data structures without making your
code look awful or complicated.

So it all kind of boils down to simple and primitive things: being able
to verify that you haven't generally done anything stupid (typos, arity
checks), being able to make sure something isn't going to be modified
concurrently or invisibly, being able to compose things using Functions,
using more explicit and less verbose syntax and having enough freedom to
still use a more sensible language whenever it makes sense.

## Grass is always greener on the other side

Other than that - the tools that you're using aren't that important. The
most important stuff is going on in your brain. Despite the current hype
and global love to immutability, the concept has been around for a long
time. Pure functions were known for the longer time than computers
existed. And trust me, there will be many new languages that will
implement things in a better, more interesting way, and bring you
ever-more fun. Although, most of the time, I do not buy the argument
"older is better". 

Except for chasing new languages won't get you anywhere. Yes, there
will be a next big thing every two to five years. Yes, it's going to be
extremely exciting to learn it all and check it out. But let's just stop
for a minute and accept the fact that concepts are more important than a
concrete implementation. Every implementation is flawed, and there will
always be languages that do certain things better than yours.

For example, no one can still beat Erlang in [Binary Pattern Matching](http://www.erlang.org/doc/efficiency_guide/binaryhandling.html),
and the way Actors are implemented there. If you check out [OTP](http://learnyousomeerlang.com/what-is-otp) - you'll
want it under your tool belt every day.

There are people who prefer OCaml, Rust, Go (that happens, too, don't
ask me), even Ruby, Python, Scala (another secret), and they'll be
solving hard and interesting problems with these languages. And guess
what - these people may be as conceptually proficient as you are. And
they will certainly write some awesome software with the tools of their
preference.

When the mathematician is reading papers, it's not important for him
whether the others are using the same exact notation. People may use the
most obscure notations for their works because they have to optimize
for what they do. The same way it works in our industry. It will never
(never say never) converge to the single, commonly accepted language
(even if it's multi-paradigm and is running on JVM).

## Keep pressing on

Don't take away a fun of learning new things from yourself, but try to
always be skeptical about everything you've been promised. Learn the
concepts, but don't become a fanatic, since you'll lose a contact with
reality and won't be able to both learn and understand the things
outside of something you made your comfort zone.

It's obviously not necessary to dive deep into Category Theory to work
with Haskell, but somehow everyone who wants to be a part of the crowd
is doing it. I thought that I'd rather invest same time into other
things: algorithms, Linux kernel, statistics and linear algebra.

If it feels for you that this post is a rant - you're tuning yourself
much too negatively. Or if it felt as if learning new languages isn't
important for your career - no, it is extremely important. 

In the end, my own takeaway from writing it all is quite simple: take it
slow and take it easy. Don't try to match all the cool kids out
there. It may be that people writing about all the smart things have to
check in their little notebook if they've spelled it right. There will
be always someone who knows it all better, but you should never feel
intimidated by that. Also, don't feel bad that you can't use every
fancy thing you've read about at your work: it's not necessary, and
it's all happening and living in your head before it gets translated
into code in some language.

## P.S.

If you liked this post, you may also like
[Show me your compiler and I'll tell you who you are](http://coffeenco.de/articles/show_me_your_compiler_and_ill_tell_you_who_you_are.html)
post of mine.

If you're beginning with Haskell, you may like
[What monad type signatures look like in my imagination](http://coffeenco.de/articles/what_monad_type_signatures_look_like_in_my_imagination_part_1.html).

"Homeopaty" wasn't a typo. It was a joke. Also, real Homeopathy is 
spelled with `th`. Was inserted with the best intention of making
the post easier to read, and never to make the actual theory
unsound.

<i>Published on December 8, 2014</i>


