goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43399){
var map__43401 = p__43399;
var map__43401__$1 = (((((!((map__43401 == null))))?(((((map__43401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43401):map__43401);
var m = map__43401__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43401__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43414_43810 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43415_43811 = null;
var count__43416_43812 = (0);
var i__43417_43813 = (0);
while(true){
if((i__43417_43813 < count__43416_43812)){
var f_43816 = chunk__43415_43811.cljs$core$IIndexed$_nth$arity$2(null,i__43417_43813);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43816], 0));


var G__43817 = seq__43414_43810;
var G__43818 = chunk__43415_43811;
var G__43819 = count__43416_43812;
var G__43820 = (i__43417_43813 + (1));
seq__43414_43810 = G__43817;
chunk__43415_43811 = G__43818;
count__43416_43812 = G__43819;
i__43417_43813 = G__43820;
continue;
} else {
var temp__5735__auto___43821 = cljs.core.seq(seq__43414_43810);
if(temp__5735__auto___43821){
var seq__43414_43822__$1 = temp__5735__auto___43821;
if(cljs.core.chunked_seq_QMARK_(seq__43414_43822__$1)){
var c__4556__auto___43823 = cljs.core.chunk_first(seq__43414_43822__$1);
var G__43824 = cljs.core.chunk_rest(seq__43414_43822__$1);
var G__43825 = c__4556__auto___43823;
var G__43826 = cljs.core.count(c__4556__auto___43823);
var G__43827 = (0);
seq__43414_43810 = G__43824;
chunk__43415_43811 = G__43825;
count__43416_43812 = G__43826;
i__43417_43813 = G__43827;
continue;
} else {
var f_43830 = cljs.core.first(seq__43414_43822__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43830], 0));


var G__43831 = cljs.core.next(seq__43414_43822__$1);
var G__43832 = null;
var G__43833 = (0);
var G__43834 = (0);
seq__43414_43810 = G__43831;
chunk__43415_43811 = G__43832;
count__43416_43812 = G__43833;
i__43417_43813 = G__43834;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43841], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43841)))?cljs.core.second(arglists_43841):arglists_43841)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43429_43851 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43430_43852 = null;
var count__43431_43853 = (0);
var i__43432_43854 = (0);
while(true){
if((i__43432_43854 < count__43431_43853)){
var vec__43460_43855 = chunk__43430_43852.cljs$core$IIndexed$_nth$arity$2(null,i__43432_43854);
var name_43856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43460_43855,(0),null);
var map__43463_43857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43460_43855,(1),null);
var map__43463_43858__$1 = (((((!((map__43463_43857 == null))))?(((((map__43463_43857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43463_43857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43463_43857):map__43463_43857);
var doc_43859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43463_43858__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43463_43858__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43856], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43860], 0));

if(cljs.core.truth_(doc_43859)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43859], 0));
} else {
}


var G__43868 = seq__43429_43851;
var G__43869 = chunk__43430_43852;
var G__43870 = count__43431_43853;
var G__43871 = (i__43432_43854 + (1));
seq__43429_43851 = G__43868;
chunk__43430_43852 = G__43869;
count__43431_43853 = G__43870;
i__43432_43854 = G__43871;
continue;
} else {
var temp__5735__auto___43874 = cljs.core.seq(seq__43429_43851);
if(temp__5735__auto___43874){
var seq__43429_43879__$1 = temp__5735__auto___43874;
if(cljs.core.chunked_seq_QMARK_(seq__43429_43879__$1)){
var c__4556__auto___43882 = cljs.core.chunk_first(seq__43429_43879__$1);
var G__43883 = cljs.core.chunk_rest(seq__43429_43879__$1);
var G__43884 = c__4556__auto___43882;
var G__43885 = cljs.core.count(c__4556__auto___43882);
var G__43886 = (0);
seq__43429_43851 = G__43883;
chunk__43430_43852 = G__43884;
count__43431_43853 = G__43885;
i__43432_43854 = G__43886;
continue;
} else {
var vec__43469_43887 = cljs.core.first(seq__43429_43879__$1);
var name_43888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43469_43887,(0),null);
var map__43472_43889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43469_43887,(1),null);
var map__43472_43890__$1 = (((((!((map__43472_43889 == null))))?(((((map__43472_43889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43472_43889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43472_43889):map__43472_43889);
var doc_43891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43472_43890__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43472_43890__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43888], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43892], 0));

if(cljs.core.truth_(doc_43891)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43891], 0));
} else {
}


var G__43896 = cljs.core.next(seq__43429_43879__$1);
var G__43897 = null;
var G__43898 = (0);
var G__43899 = (0);
seq__43429_43851 = G__43896;
chunk__43430_43852 = G__43897;
count__43431_43853 = G__43898;
i__43432_43854 = G__43899;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__43481 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43482 = null;
var count__43483 = (0);
var i__43484 = (0);
while(true){
if((i__43484 < count__43483)){
var role = chunk__43482.cljs$core$IIndexed$_nth$arity$2(null,i__43484);
var temp__5735__auto___43910__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43910__$1)){
var spec_43911 = temp__5735__auto___43910__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43911)], 0));
} else {
}


var G__43912 = seq__43481;
var G__43913 = chunk__43482;
var G__43914 = count__43483;
var G__43915 = (i__43484 + (1));
seq__43481 = G__43912;
chunk__43482 = G__43913;
count__43483 = G__43914;
i__43484 = G__43915;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__43481);
if(temp__5735__auto____$1){
var seq__43481__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43481__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43481__$1);
var G__43916 = cljs.core.chunk_rest(seq__43481__$1);
var G__43917 = c__4556__auto__;
var G__43918 = cljs.core.count(c__4556__auto__);
var G__43919 = (0);
seq__43481 = G__43916;
chunk__43482 = G__43917;
count__43483 = G__43918;
i__43484 = G__43919;
continue;
} else {
var role = cljs.core.first(seq__43481__$1);
var temp__5735__auto___43920__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43920__$2)){
var spec_43921 = temp__5735__auto___43920__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43921)], 0));
} else {
}


var G__43922 = cljs.core.next(seq__43481__$1);
var G__43923 = null;
var G__43924 = (0);
var G__43925 = (0);
seq__43481 = G__43922;
chunk__43482 = G__43923;
count__43483 = G__43924;
i__43484 = G__43925;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43932 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43933 = cljs.core.ex_cause(t);
via = G__43932;
t = G__43933;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__43547 = datafied_throwable;
var map__43547__$1 = (((((!((map__43547 == null))))?(((((map__43547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43547):map__43547);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43547__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43547__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43547__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43554 = cljs.core.last(via);
var map__43554__$1 = (((((!((map__43554 == null))))?(((((map__43554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43554):map__43554);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43554__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43554__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43554__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43555 = data;
var map__43555__$1 = (((((!((map__43555 == null))))?(((((map__43555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43555):map__43555);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43555__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43555__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43555__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43556 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43556__$1 = (((((!((map__43556 == null))))?(((((map__43556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43556):map__43556);
var top_data = map__43556__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43588 = phase;
var G__43588__$1 = (((G__43588 instanceof cljs.core.Keyword))?G__43588.fqn:null);
switch (G__43588__$1) {
case "read-source":
var map__43594 = data;
var map__43594__$1 = (((((!((map__43594 == null))))?(((((map__43594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43594):map__43594);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43601 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43601__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43601,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43601);
var G__43601__$2 = (cljs.core.truth_((function (){var fexpr__43602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43602.cljs$core$IFn$_invoke$arity$1 ? fexpr__43602.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43602.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43601__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43601__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43601__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43614 = top_data;
var G__43614__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43614,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43614);
var G__43614__$2 = (cljs.core.truth_((function (){var fexpr__43627 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43627.cljs$core$IFn$_invoke$arity$1 ? fexpr__43627.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43627.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43614__$1);
var G__43614__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43614__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43614__$2);
var G__43614__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43614__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43614__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43614__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43614__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43633 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43633,(3),null);
var G__43643 = top_data;
var G__43643__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43643,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43643);
var G__43643__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43643__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43643__$1);
var G__43643__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43643__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43643__$2);
var G__43643__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43643__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43643__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43643__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43643__$4;
}

break;
case "execution":
var vec__43667 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43667,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43667,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43667,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43667,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43546_SHARP_){
var or__4126__auto__ = (p1__43546_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__43678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43678.cljs$core$IFn$_invoke$arity$1 ? fexpr__43678.cljs$core$IFn$_invoke$arity$1(p1__43546_SHARP_) : fexpr__43678.call(null,p1__43546_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__43684 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43684__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43684,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43684);
var G__43684__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43684__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43684__$1);
var G__43684__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43684__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43684__$2);
var G__43684__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43684__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43684__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43684__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43684__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43588__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43729){
var map__43730 = p__43729;
var map__43730__$1 = (((((!((map__43730 == null))))?(((((map__43730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43730):map__43730);
var triage_data = map__43730__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__43742 = phase;
var G__43742__$1 = (((G__43742 instanceof cljs.core.Keyword))?G__43742.fqn:null);
switch (G__43742__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43744 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43745 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43746 = loc;
var G__43747 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43748_43987 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43749_43988 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43750_43989 = true;
var _STAR_print_fn_STAR__temp_val__43751_43990 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43750_43989);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43751_43990);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43717_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43717_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43749_43988);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43748_43987);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43744,G__43745,G__43746,G__43747) : format.call(null,G__43744,G__43745,G__43746,G__43747));

break;
case "macroexpansion":
var G__43754 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43755 = cause_type;
var G__43756 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43757 = loc;
var G__43758 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43754,G__43755,G__43756,G__43757,G__43758) : format.call(null,G__43754,G__43755,G__43756,G__43757,G__43758));

break;
case "compile-syntax-check":
var G__43759 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43760 = cause_type;
var G__43761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43762 = loc;
var G__43763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43759,G__43760,G__43761,G__43762,G__43763) : format.call(null,G__43759,G__43760,G__43761,G__43762,G__43763));

break;
case "compilation":
var G__43764 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43765 = cause_type;
var G__43766 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43767 = loc;
var G__43768 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43764,G__43765,G__43766,G__43767,G__43768) : format.call(null,G__43764,G__43765,G__43766,G__43767,G__43768));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43769 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43770 = symbol;
var G__43771 = loc;
var G__43772 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43774_43995 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43775_43996 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43776_43997 = true;
var _STAR_print_fn_STAR__temp_val__43777_43998 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43776_43997);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43777_43998);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43720_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43720_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43775_43996);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43774_43995);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43769,G__43770,G__43771,G__43772) : format.call(null,G__43769,G__43770,G__43771,G__43772));
} else {
var G__43785 = "Execution error%s at %s(%s).\n%s\n";
var G__43787 = cause_type;
var G__43788 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43789 = loc;
var G__43790 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43785,G__43787,G__43788,G__43789,G__43790) : format.call(null,G__43785,G__43787,G__43788,G__43789,G__43790));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43742__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
