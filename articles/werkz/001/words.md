Enlive has a very interesting codebase. I've been trying to tackle a couple of issues, but ended up not being
satisfied with the code, therefore couldn't really contribute anything useful. Some things were developed
and used in closed source project, but were never good enough to get opensourced.

First issue I've tried to tackcle was adding multiple arity support to snippets:

```clojure
(defmacro snippet* [nodes & body]
  (let [nodesym (gensym "nodes")]
    `(let [~nodesym (map annotate ~nodes)]
       (fn ~@(for [[args & forms] (bodies body)]
           `(~args
              (doall (flatmap (transformation ~@forms) ~nodesym))))))))

(defmacro snippet
 "A snippet is a function that returns a seq of nodes."
 [source selector args & forms]
  (let [[options source selector args & forms]
         (pad-unless map? {} (list* source selector args forms))]
    `(let [opts# (merge (ns-options (find-ns '~(ns-name *ns*)))
                   ~options)]
       (snippet* (select (html-resource ~source opts#) ~selector) ~args ~@forms))))

(defmacro defsnippet
 "Define a named snippet -- equivalent to (def name (snippet source selector args ...))."
 [name source selector args & forms]
 `(def ~name (snippet ~source ~selector ~args ~@forms)))
```

For me, the most interesting thing was the use of `fn`. That's a great thing in case you want to create a rich DSL.
Say, you want to perform a set of actions (function bodies), based on other params passed to that function.

Very simplified representation would look like




(defmacro snippet
 "A snippet is a function that returns a seq of nodes."
 [prefix postfix args & gen]
 `(let [opts# (merge (ns-options (find-ns '~(ns-name *ns*)))
                     ~options)]
    (snippet* (select (html-resource ~source opts#) ~selector) ~args ~@forms)))

(defmacro defsentence
 [name prefix postfix args & gen]
 `(def ~name (snippet ~prefix ~postfix ~args ~@gen)))
