goog.provide('shadow.react_native');
if((typeof shadow !== 'undefined') && (typeof shadow.react_native !== 'undefined') && (typeof shadow.react_native.root_ref !== 'undefined')){
} else {
shadow.react_native.root_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.react_native !== 'undefined') && (typeof shadow.react_native.root_component_ref !== 'undefined')){
} else {
shadow.react_native.root_component_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Renders the application root component in a hot-reloadable way,
 * should be called after every reload.
 * 
 * - app-id (string) is used as the AppRegister.registerComponent name
 *   it cannot be changed after the first call and must match the configured
 *   app name from react-native.
 * - root is expected to be a react element or a function producing one
 * 
 * Reagent example:
 * 
 * (ns my.app
 *   (:require [shadow.react-native :refer (render-root)]
 *             [reagent.core :as r]
 *             ["react-native" :as rn))
 * 
 * (defn root []
 *    [:> rn/View ...])
 * 
 * (defn ^:dev/after-load start []
 *   (render-root "AwesomeApp" (r/as-element [root])))
 * 
 * (defn init []
 *   (start))
 * 
 * with :init-fn my.app/init in the shadow-cljs.edn build config.
 */
shadow.react_native.render_root = (function shadow$react_native$render_root(app_id,root){
var first_call_QMARK_ = (cljs.core.deref(shadow.react_native.root_ref) == null);
cljs.core.reset_BANG_(shadow.react_native.root_ref,root);

if((!(first_call_QMARK_))){
var temp__5735__auto__ = cljs.core.deref(shadow.react_native.root_component_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var root__$1 = temp__5735__auto__;
return root__$1.forceUpdate();
} else {
return null;
}
} else {
var Root = shadow.js.shim.module$create_react_class(({"componentDidMount": (function (){
var this$ = this;
return cljs.core.reset_BANG_(shadow.react_native.root_component_ref,this$);
}), "componentWillUnmount": (function (){
return cljs.core.reset_BANG_(shadow.react_native.root_component_ref,null);
}), "render": (function (){
var body = cljs.core.deref(shadow.react_native.root_ref);
if(cljs.core.fn_QMARK_(body)){
return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null));
} else {
return body;
}
})}));
return shadow.js.shim.module$react_native.AppRegistry.registerComponent(app_id,(function (){
return Root;
}));
}
});

//# sourceMappingURL=shadow.react_native.js.map
