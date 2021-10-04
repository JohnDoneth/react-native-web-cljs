(ns stories.header
  (:require [components.header :refer [header]]
            [reagent.core :as r]))

(def ^:export default
  #js {:title     "Header Component"
       :component (r/reactify-component header)})

(defn ^:export FirstExample []
  (r/as-element [header "Hello, world!"]))

(defn ^:export SecondExample []
  (r/as-element [header "Test!"]))
