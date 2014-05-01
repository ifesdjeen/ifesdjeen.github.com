

(defn filter
  "Returns a lazy sequence of the items in coll for which
  (pred item) returns true. pred must be free of side-effects."
  [pred coll]
  (let [step (fn [p c]
                 (when-let [s (seq c)]
                   (if (p (first s))
                     (cons (first s) (filter p (rest s)))
                     (recur p (rest s)))))]
    (lazy-seq (step pred coll))))

(defn find-all-people
  ([query]
     (find-all-people [] query))
  ([current-collection query]
     ((fn step [cc q]
         (println "Yo I am very lazy with query" cc q)
         (if (empty? cc)
           (cons 1 cc)
           (cons (inc (last cc)) (lazy-seq (step cc query)))
           )
         ) current-collection query)
))


(def fib-seq
  ((fn rfib [a b]
     (lazy-seq (cons a (rfib b (+ a b)))))
   0 1))
