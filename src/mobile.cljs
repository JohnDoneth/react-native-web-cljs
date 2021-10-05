(ns mobile
  (:require [core :refer [root]]
            [reagent.core :as r]
            [shadow.react-native :refer (render-root)]))

; Entry point for React Native
(defn init {:dev/after-load true} []
  (render-root "app" (r/as-element (root))))
