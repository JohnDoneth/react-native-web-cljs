(ns core
  (:require [components.header :refer [header]]
            [reagent.core :as r]
            ["react-native" :as rn]
            [shadow.react-native :refer (render-root)]))

(defn root [] (header "Hello, ClojureScript!"))

(defn web? [] (= (.-OS (.-Platform rn)) "web"))

(defn init {:dev/after-load true} []
  (render-root "AwesomeProject" (r/as-element (root)))
  (if (web?)
    (rn/AppRegistry.runApplication
     "AwesomeProject"
     #js {:rootTag (js/document.getElementById "app")}) nil))