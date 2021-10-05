(ns components.header)

(defmacro static-asset [path]
  `(js/require ~(str "@assets/" path)))