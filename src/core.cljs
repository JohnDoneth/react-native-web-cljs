(ns core
  (:require [components.header :refer [header]]
            [components.counter :refer [counter]]
            [reagent.core :as r]
            ["react-native" :as rn]
            [shadow.react-native :refer (render-root)]
            [core.styles :refer [create-stylesheet]]))

(def styles
  (create-stylesheet {:safe-area {:flex 1}}))

(defn root []
  [:> rn/SafeAreaView {:style (:safe-area styles)}
   [header "Hello, ClojureScript!"]
   [counter 0]])

(defn web? [] (= (.-OS (.-Platform rn)) "web"))

(defn init {:dev/after-load true} []
  (render-root "AwesomeProject" (r/as-element (root)))
  (if (web?)
    (rn/AppRegistry.runApplication
     "AwesomeProject"
     #js {:rootTag (js/document.getElementById "app")}) nil))