(ns workshop)

;;
;; Primitive expressions
;;

(+ 1 1)

(+ 1 1 1)

(+ (* 3 5) (- 10 6))

;;
;; Flow operations
;;

(if true
  (println "That was true")
  (println "That was false"))

(def a 1)
(if (= a 1)
  "That was true"
  "That was false")

(cond (= a 1) (println "One")
      (= a 2) (println "Two")
      (= a 3) (println "Three"))

(defn from-five-to-ten
  [x]
  (and (> x 5) (< x 10)))

(def not-from-five-to-ten
  (complement from-five-to-ten))

;; And now combine everything!

(defn increment-if-form-five-to-ten-decrement-otherwise
  [x]
  ((if (from-five-to-ten x)
     inc
     dec)
   x))

;;
;; Square root, Newton method
;;

(defn square
  [x]
  (* x x))

(defn abs
  [n]
  (if (< n 0)
    (- n)
    n))

(defn avg
  [x & more]
  (if (empty? more)
    x
    (/ (apply + (cons x more)) (inc (count more)))))

(defn good-enough?
  [guess x]
  (< (abs (- (square guess) x)) 0.001))

(defn improve
  [guess x]
  (avg guess (/ x guess)))

(defn sqrt-iter
  [guess x]
  (if (good-enough? guess x)
    guess
    (sqrt-iter (improve guess x)
               x)))

(defn sqrt
  [x]
  (sqrt-iter 1.0 x))

;;
;; Fibonacci!
;;

(defn fib
  [n]
  (cond (= n 0) 0
        (= n 1) 1
        :else (+ (fib (dec n))
                 (fib (- n 2)))))

(def fib-seq
  (lazy-cat [0 1] (map + (rest fib-seq) fib-seq)))







(comment (defn konrad-if
           [assertion truth-clause false-clause]
           (cond assertion truth-clause
                 :else false-clause)))

(defmacro konrad-if
  [assertion truth-clause & false-clause]
  `(cond ~assertion
         ~truth-clause
         :else ~false-clause))

(defn yea
  []
  (println "I'm gonna write yea now")
  "YEA")

(defn doh
  []
  (println "I'm gonna write doh now")
  "DOH")

(println
 (konrad-if
  (= 2 2)
  (yea)
  (doh)))

(comment
  (dotimes [i 50]
    (propagate
     {:data { :hostname "localhost"
             :type "memory_usage"
             :additional_info {"Verbose" false
                               "ObjectPendingFinalizationCount" 0
                               "HeapMemoryUsage" {"committed" 3215982592 "init" 3221225472 "max" 7426736128 "used" 2448939616}
                               "NonHeapMemoryUsage"{"committed" 368181248 "init" 270991360 "max" 369098752 "used" 337100328}}
             "tags" ["performance" "memory"]}}
     "genua"
     )
    ))