(ns web
  (:require [core :refer [root]]
            [reagent.dom :refer [render]]))

; Entry point for Web
(defn init {:dev/after-load true} []
  (render root
          (js/document.getElementById "app")))

