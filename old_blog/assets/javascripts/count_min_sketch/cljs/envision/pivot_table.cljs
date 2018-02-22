(ns envision.pivot-table
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(.tsv js/d3 "../../../example_data.tsv"
      (fn [a] (println a)))
