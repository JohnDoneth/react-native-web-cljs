(ns components.header
  (:require-macros [components.header :refer [static-asset]])
  (:require ["react-native" :as rn]
            [clojure.walk]
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


(defn header [text]
  [:> rn/View {:style (:container styles)}
   [:> rn/Text {:style (:title styles)} text]
   [:> rn/Image {:style (:image styles)
                 :source (static-asset "cljs-white.png")}]])


