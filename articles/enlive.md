(ns sf-plus.test.tutorial
  (:require [net.cgrand.enlive-html :as html]
            [sf-plus.request :as request]
            [sf-plus.utils :as utils])
  (:use [clojure.test]
        [sf-plus.test.test-helpers]))

(deftest test-test-test
  (html/sniptest "<html><body><header class=\"some_class\">Header Content</header><footer></footer></body></html>"
                 [:body :header] (fn [a] (println a)))


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
                                        ))))
                 )


  (println
   (html/sniptest "<html><body><header class=\"some_class\">Header Content</header><footer></footer></body></html>"
                  [:body :header] (html/content "Some New Content")))

)


(comment
(ns my.cool.website
  [net.cgrand.enlive-html :as html])


(html/defsnippet logged-in-user-header "base/logged_in_user_header.html"
  [:ul#user-links]
  [user]
  [html/this-node] (interpolate-snippet (assoc user
                                          :user-profile-url (profile-url user)
                                          :user-avatar-url (avatar-url user)))))



(require '[net.cgrand.enlive-html :as html])

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
    (let [html-source (html/html-snippet "<head><body><div id=\"{{person.nickname}}\"></div><i>{{even.deeper.hash}}</i></body></head>")]
      (is (= "<head></head><body><div id=\"ifesdjeen\"></div><i>YAY!</i></body>"
             (utils/render (interpolate-snippet html-source {:person {:nickname "ifesdjeen"} :even {:deeper {:hash "YAY!"}}})))))))
