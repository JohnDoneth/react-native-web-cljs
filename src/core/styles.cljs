(ns core.styles (:require ["react-native" :as rn]
                          [clojure.walk]))

(def stylesheet (.-StyleSheet rn))

(defn create-stylesheet [styles]
  (->> styles
       (clj->js)
       (.create stylesheet)
       (js->clj)
       (clojure.walk/keywordize-keys)))