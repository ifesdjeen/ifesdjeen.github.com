

While reading SICP, I've started thinking of language primitives on a completely different abstraction level. That's just some things that got me wondering. All examples given here are written in Clojure, not Scheme though. Shouldn't be that different for any one of you.

## Lazy sequences. A-la DB Cursor,

### one-by-one

Very intuitive, but at the same time very elegant, easy to understand:

If we have an item to return from filter, return the item in a lazy manner. Otherwise - wait until predicate

(defn fetch-first
  []
  {:next-is 0})

(defn fetch-next
  [i]
  (println "fetching next " i)
  {:next-is i})

(defn find-people
  ([query] (find-all-people query nil 0 100))
  ([query el current limit]
     (if (< current limit)
       (cons
        (if (nil? el)
          (fetch-first)
          el)
        (lazy-seq (do
                    (find-all-people
                     query
                     (fetch-next (inc current))
                     (inc current)
                     limit)))))))

(find-all-people {})



(defn fetch-first
  []
  (range 0 32))


(defn fetch-next
  []
  (range 0 32))


(defn find-people
  ([query] (find-all-people query nil 0 100))
  ([query el current limit]
     (lazy-seq

      )
     (if (< current limit)
       (cons
        (if (nil? el)
          (fetch-first)
          el)
        (lazy-seq (find-all-people
                   query
                   (fetch-next (inc current))
                   (inc current)
                   limit))))))

### chunking

(defn filter
  "Returns a lazy sequence of the items in coll for which
  (pred item) returns true. pred must be free of side-effects."
  {:added "1.0"
   :static true}
  ([pred coll]
   (lazy-seq
    (when-let [s (seq coll)]
      (if (chunked-seq? s)
        (let [c (chunk-first s)
              size (count c)
              b (chunk-buffer size)]
          (dotimes [i size]
              (when (pred (.nth c i))
                (chunk-append b (.nth c i))))
          (chunk-cons (chunk b) (filter pred (chunk-rest s))))
        (let [f (first s) r (rest s)]
          (if (pred f)
            (cons f (filter pred r))
            (filter pred r))))))))



# Generating Lazy sequences

In Java, generating an infinite lazy sequence is rather straightforward: you take an Iterator and go step by step.
You save just enough information to make a calculation to take the next step. In Clojure, you do it using
`lazy-seq`.

When you need to process rather large chunk of data that's coming from



http://www.infoq.com/news/2009/12/clojure-11-rc1-transients
