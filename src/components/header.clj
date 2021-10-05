(ns components.header)

(defmacro static-asset [path rn]
  `(if (= (.-OS (.-Platform ~rn)) "web")
     {:uri ~(str "assets/" path)}
     (js/require ~(str "../" path))))