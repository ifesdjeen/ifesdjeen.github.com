(ns envision.cmsketch
  (:require [reagent.core :as reagent :refer [atom]]
            [envision.sha1 :as sha1]))

(enable-console-print!)

(def eps 0.06)
(def confidence 0.000001)

(comment
  (def eps 0.3)
  (def confidence 0.0001))

(defn round
  [v]
  (.round js/Math v))

(defn depth
  [confidence]
  (round (.log js/Math (/ 1 confidence))))

(defn width
  [eps]
  (round (/ (.-E js/Math) eps)))

(defn make-sketch
  []
  (let [depth (depth confidence)
        width (width eps)]
    (with-meta
      (vec (repeat depth
                   (vec (repeat width 0))))
      {:depth      depth
       :width      width
       :eps        eps
       :confidence confidence})))

(def sketch-state (atom (make-sketch)))
(def current-word (atom ""))
(def active-positions-state (atom []))

(defn positions
  [sketch val]
  (let [{:keys [depth width]} (meta sketch)]
    (for [i (range 0 depth)]
      (round
       (mod (/ (sha1/sha1 val) (inc i))
            (dec width))))))

(defn cm-sketch-add
  [sketch val]
  (let [{:keys [width deoth]} (meta sketch)
        positions             (positions sketch val)]
    (reduce (fn [acc [i j]]
              (update-in acc [i j] inc))
            sketch
            (with-index positions))))

(defn with-index
  [v]
  (map vector (iterate inc 0) v))

(defn todo-app [props]
  (fn []
    [:div.form-inline
     [:div.form-group
      [:input.form-control {:onChange (fn [e]
                                        (reset! current-word (-> e .-target .-value))
                                        (comment
                                          (reset! active-positions-state
                                                  (positions (depth confidence)
                                                             (width eps)
                                                             (-> e .-target .-value)))))}]]
     [:div.form-group
      [:label.sr-only]
      [:button.btn.btn-success {:type "submit"
                                :onClick (fn []
                                           (swap! sketch-state #(cm-sketch-add % @current-word)))}
       "Add"]]


     (let [st        @sketch-state
           word      @current-word
           positions (positions st word)]

       [:div
        [:div.form-group
         [:h2
          "Estimated Value: " (apply min (map #(get-in st %) (with-index positions)))]]
        [:table.table.table-striped.table-bordered.table-condensed
         (for [[row-index row] (with-index st)]
           [:tr
            (for [[column-index v] (with-index row)]
              (do
                [:td {:class (if (and (not (empty? positions)) (= column-index (nth positions row-index)))
                               "success"
                               "text-center")}
                 (str v)]))])]])]))


(reagent/render-component [todo-app] (.getElementById js/document "app"))
