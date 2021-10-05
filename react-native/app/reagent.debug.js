goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__41404__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41405__i = 0, G__41405__a = new Array(arguments.length -  0);
while (G__41405__i < G__41405__a.length) {G__41405__a[G__41405__i] = arguments[G__41405__i + 0]; ++G__41405__i;}
  args = new cljs.core.IndexedSeq(G__41405__a,0,null);
} 
return G__41404__delegate.call(this,args);};
G__41404.cljs$lang$maxFixedArity = 0;
G__41404.cljs$lang$applyTo = (function (arglist__41406){
var args = cljs.core.seq(arglist__41406);
return G__41404__delegate(args);
});
G__41404.cljs$core$IFn$_invoke$arity$variadic = G__41404__delegate;
return G__41404;
})()
);

(o.error = (function() { 
var G__41407__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41410__i = 0, G__41410__a = new Array(arguments.length -  0);
while (G__41410__i < G__41410__a.length) {G__41410__a[G__41410__i] = arguments[G__41410__i + 0]; ++G__41410__i;}
  args = new cljs.core.IndexedSeq(G__41410__a,0,null);
} 
return G__41407__delegate.call(this,args);};
G__41407.cljs$lang$maxFixedArity = 0;
G__41407.cljs$lang$applyTo = (function (arglist__41411){
var args = cljs.core.seq(arglist__41411);
return G__41407__delegate(args);
});
G__41407.cljs$core$IFn$_invoke$arity$variadic = G__41407__delegate;
return G__41407;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
