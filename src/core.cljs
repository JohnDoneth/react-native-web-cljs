(ns core
  (:require [app.components.header :refer [header]]
            [reagent.dom :refer [render]]))

(defn init []
  (render [header "Hello, world!"]
          (js/document.getElementById "app")))
