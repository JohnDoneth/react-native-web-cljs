(ns components.header
  (:require ["react-native" :as rn]
            [clojure.walk]))

(def stylesheet (.-StyleSheet rn))

(defn create-stylesheet [styles]
  (->> styles
       (clj->js)
       (.create stylesheet)
       (js->clj)
       (clojure.walk/keywordize-keys)))

(defn static-asset [path] path)

(def styles
  (create-stylesheet
   {:container
    {:flex 1
     :backgroundColor "#fff"
     :alignItems "center"
     :justifyContent "center"}
    :title
    {:fontWeight "bold"
     :fontSize 64
     :color "blue"}}))

(defn header [text]
  [:> rn/View {:style (:container styles)}
   [:> rn/Text {:style (:title styles)} text]
   [:> rn/Image {:source (static-asset "cljs-white.svg")}]])

