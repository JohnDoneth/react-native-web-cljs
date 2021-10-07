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

    :button {:padding-left 24
             :padding-right 24
             :padding-top 12
             :padding-bottom 12
             :margin 24
             :border-width 1
             :border-radius 5}}))

(defn body [initial-count]
  (let [[count set-count] (r/useState initial-count)]
    [:> rn/View {:style (:container styles)}
     [:> rn/Text {:style (:title styles)} count]
     [:> rn/TouchableOpacity {:style (:button styles) :on-press #(set-count inc)}
      [:> rn/Text {} "Click"]]]))

(defn counter [initial-count]
  [:f> body initial-count])




