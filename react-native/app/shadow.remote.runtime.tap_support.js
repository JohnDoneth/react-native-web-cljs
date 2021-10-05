goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44781,p__44782){
var map__44785 = p__44781;
var map__44785__$1 = (((((!((map__44785 == null))))?(((((map__44785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44785):map__44785);
var svc = map__44785__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44785__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44785__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44785__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44787 = p__44782;
var map__44787__$1 = (((((!((map__44787 == null))))?(((((map__44787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44787):map__44787);
var msg = map__44787__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44787__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44787__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44802,p__44803){
var map__44804 = p__44802;
var map__44804__$1 = (((((!((map__44804 == null))))?(((((map__44804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44804):map__44804);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44804__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44805 = p__44803;
var map__44805__$1 = (((((!((map__44805 == null))))?(((((map__44805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44805):map__44805);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44805__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44814,p__44815){
var map__44816 = p__44814;
var map__44816__$1 = (((((!((map__44816 == null))))?(((((map__44816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44816):map__44816);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44817 = p__44815;
var map__44817__$1 = (((((!((map__44817 == null))))?(((((map__44817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44817):map__44817);
var msg = map__44817__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44817__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44831,tid){
var map__44832 = p__44831;
var map__44832__$1 = (((((!((map__44832 == null))))?(((((map__44832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44832):map__44832);
var svc = map__44832__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44832__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44841 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44842 = null;
var count__44843 = (0);
var i__44844 = (0);
while(true){
if((i__44844 < count__44843)){
var vec__44852 = chunk__44842.cljs$core$IIndexed$_nth$arity$2(null,i__44844);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44852,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44852,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44867 = seq__44841;
var G__44868 = chunk__44842;
var G__44869 = count__44843;
var G__44870 = (i__44844 + (1));
seq__44841 = G__44867;
chunk__44842 = G__44868;
count__44843 = G__44869;
i__44844 = G__44870;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44841);
if(temp__5735__auto__){
var seq__44841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44841__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44841__$1);
var G__44872 = cljs.core.chunk_rest(seq__44841__$1);
var G__44873 = c__4556__auto__;
var G__44874 = cljs.core.count(c__4556__auto__);
var G__44875 = (0);
seq__44841 = G__44872;
chunk__44842 = G__44873;
count__44843 = G__44874;
i__44844 = G__44875;
continue;
} else {
var vec__44855 = cljs.core.first(seq__44841__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44855,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44855,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44876 = cljs.core.next(seq__44841__$1);
var G__44877 = null;
var G__44878 = (0);
var G__44879 = (0);
seq__44841 = G__44876;
chunk__44842 = G__44877;
count__44843 = G__44878;
i__44844 = G__44879;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44837_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44837_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44838_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44838_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44839_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44839_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44840_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44840_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44859){
var map__44860 = p__44859;
var map__44860__$1 = (((((!((map__44860 == null))))?(((((map__44860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44860):map__44860);
var svc = map__44860__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44860__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44860__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
