(ns components.counter
  (:require ["react-native" :as rn]
            ["react" :as r]
            [core.styles :refer [create-stylesheet]]))

(def styles
  (create-stylesheet
   {:container {:flex 1
                :backgroundColor "#fff"
                :alignItems "center"
                :justifyContent "center"}

    :title {:fontWeight "bold"
            :fontSize 32
            :color "blue"
            :margin 24}

    :image {:width 128
            :height 128}}))

(defn body []
  (let [[count set-count] (r/useState 0)]
    [:> rn/View {:style (:container styles)}
     [:> rn/Button {:on-press #(set-count inc)} "Click"]
     [:> rn/Text {:style (:title styles)} count]]))

(defn counter []
  [:> rn/View
   [:f> body]])




