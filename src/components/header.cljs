(ns components.header
  (:require ["react-native" :as rn]))

(def styles
  ^js (-> {:container
           {:flex 1
            :backgroundColor "#fff"
            :alignItems "center"
            :justifyContent "center"}
           :title
           {:fontWeight "bold"
            :fontSize 24
            :color "blue"}}
          (clj->js)
          (rn/StyleSheet.create)))

(defn header [text]
  [:> rn/View {:style (.-container styles)}
   [:> rn/Text {:style (.-title styles)} text]])

