// Compiled by ClojureScript 0.0-2197
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_6053 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6053;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",1544652043,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6057__delegate = function (x,p__6054){var map__6056 = p__6054;var map__6056__$1 = ((cljs.core.seq_QMARK_.call(null,map__6056))?cljs.core.apply.call(null,cljs.core.hash_map,map__6056):map__6056);var validator = cljs.core.get.call(null,map__6056__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__6056__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__6057 = function (x,var_args){
var p__6054 = null;if (arguments.length > 1) {
  p__6054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6057__delegate.call(this,x,p__6054);};
G__6057.cljs$lang$maxFixedArity = 1;
G__6057.cljs$lang$applyTo = (function (arglist__6058){
var x = cljs.core.first(arglist__6058);
var p__6054 = cljs.core.rest(arglist__6058);
return G__6057__delegate(x,p__6054);
});
G__6057.cljs$core$IFn$_invoke$arity$variadic = G__6057__delegate;
return G__6057;
})()
;
atom = function(x,var_args){
var p__6054 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj6060 = {};return obj6060;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3466__auto__ = this$;if(and__3466__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4105__auto__ = (((this$ == null))?null:this$);return (function (){var or__3478__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj6062 = {};return obj6062;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3466__auto__ = this$;if(and__3466__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3466__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4105__auto__ = (((this$ == null))?null:this$);return (function (){var or__3478__auto__ = (reagent.ratom.run[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (reagent.ratom.run["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj6064 = {};return obj6064;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3466__auto__ = this$;if(and__3466__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3466__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4105__auto__ = (((this$ == null))?null:this$);return (function (){var or__3478__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3466__auto__ = k;if(and__3466__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3466__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4105__auto__ = (((k == null))?null:k);return (function (){var or__3478__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3478__auto__ = self__.auto_run;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__4903__auto___6077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4903__auto___6077))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3478__auto__ = self__.auto_run;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3466__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3466__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3478__auto__ = self__.auto_run;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__6065_6078 = cljs.core.seq.call(null,derefed);var chunk__6066_6079 = null;var count__6067_6080 = 0;var i__6068_6081 = 0;while(true){
if((i__6068_6081 < count__6067_6080))
{var w_6082 = cljs.core._nth.call(null,chunk__6066_6079,i__6068_6081);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6082))
{} else
{cljs.core.add_watch.call(null,w_6082,this$__$1,reagent.ratom._handle_change);
}
{
var G__6083 = seq__6065_6078;
var G__6084 = chunk__6066_6079;
var G__6085 = count__6067_6080;
var G__6086 = (i__6068_6081 + 1);
seq__6065_6078 = G__6083;
chunk__6066_6079 = G__6084;
count__6067_6080 = G__6085;
i__6068_6081 = G__6086;
continue;
}
} else
{var temp__4092__auto___6087 = cljs.core.seq.call(null,seq__6065_6078);if(temp__4092__auto___6087)
{var seq__6065_6088__$1 = temp__4092__auto___6087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6065_6088__$1))
{var c__4226__auto___6089 = cljs.core.chunk_first.call(null,seq__6065_6088__$1);{
var G__6090 = cljs.core.chunk_rest.call(null,seq__6065_6088__$1);
var G__6091 = c__4226__auto___6089;
var G__6092 = cljs.core.count.call(null,c__4226__auto___6089);
var G__6093 = 0;
seq__6065_6078 = G__6090;
chunk__6066_6079 = G__6091;
count__6067_6080 = G__6092;
i__6068_6081 = G__6093;
continue;
}
} else
{var w_6094 = cljs.core.first.call(null,seq__6065_6088__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6094))
{} else
{cljs.core.add_watch.call(null,w_6094,this$__$1,reagent.ratom._handle_change);
}
{
var G__6095 = cljs.core.next.call(null,seq__6065_6088__$1);
var G__6096 = null;
var G__6097 = 0;
var G__6098 = 0;
seq__6065_6078 = G__6095;
chunk__6066_6079 = G__6096;
count__6067_6080 = G__6097;
i__6068_6081 = G__6098;
continue;
}
}
} else
{}
}
break;
}
var seq__6069_6099 = cljs.core.seq.call(null,self__.watching);var chunk__6070_6100 = null;var count__6071_6101 = 0;var i__6072_6102 = 0;while(true){
if((i__6072_6102 < count__6071_6101))
{var w_6103 = cljs.core._nth.call(null,chunk__6070_6100,i__6072_6102);if(cljs.core.contains_QMARK_.call(null,derefed,w_6103))
{} else
{cljs.core.remove_watch.call(null,w_6103,this$__$1);
}
{
var G__6104 = seq__6069_6099;
var G__6105 = chunk__6070_6100;
var G__6106 = count__6071_6101;
var G__6107 = (i__6072_6102 + 1);
seq__6069_6099 = G__6104;
chunk__6070_6100 = G__6105;
count__6071_6101 = G__6106;
i__6072_6102 = G__6107;
continue;
}
} else
{var temp__4092__auto___6108 = cljs.core.seq.call(null,seq__6069_6099);if(temp__4092__auto___6108)
{var seq__6069_6109__$1 = temp__4092__auto___6108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6069_6109__$1))
{var c__4226__auto___6110 = cljs.core.chunk_first.call(null,seq__6069_6109__$1);{
var G__6111 = cljs.core.chunk_rest.call(null,seq__6069_6109__$1);
var G__6112 = c__4226__auto___6110;
var G__6113 = cljs.core.count.call(null,c__4226__auto___6110);
var G__6114 = 0;
seq__6069_6099 = G__6111;
chunk__6070_6100 = G__6112;
count__6071_6101 = G__6113;
i__6072_6102 = G__6114;
continue;
}
} else
{var w_6115 = cljs.core.first.call(null,seq__6069_6109__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_6115))
{} else
{cljs.core.remove_watch.call(null,w_6115,this$__$1);
}
{
var G__6116 = cljs.core.next.call(null,seq__6069_6109__$1);
var G__6117 = null;
var G__6118 = 0;
var G__6119 = 0;
seq__6069_6099 = G__6116;
chunk__6070_6100 = G__6117;
count__6071_6101 = G__6118;
i__6072_6102 = G__6119;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__6073_6120 = cljs.core.seq.call(null,self__.watching);var chunk__6074_6121 = null;var count__6075_6122 = 0;var i__6076_6123 = 0;while(true){
if((i__6076_6123 < count__6075_6122))
{var w_6124 = cljs.core._nth.call(null,chunk__6074_6121,i__6076_6123);cljs.core.remove_watch.call(null,w_6124,this$__$1);
{
var G__6125 = seq__6073_6120;
var G__6126 = chunk__6074_6121;
var G__6127 = count__6075_6122;
var G__6128 = (i__6076_6123 + 1);
seq__6073_6120 = G__6125;
chunk__6074_6121 = G__6126;
count__6075_6122 = G__6127;
i__6076_6123 = G__6128;
continue;
}
} else
{var temp__4092__auto___6129 = cljs.core.seq.call(null,seq__6073_6120);if(temp__4092__auto___6129)
{var seq__6073_6130__$1 = temp__4092__auto___6129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6073_6130__$1))
{var c__4226__auto___6131 = cljs.core.chunk_first.call(null,seq__6073_6130__$1);{
var G__6132 = cljs.core.chunk_rest.call(null,seq__6073_6130__$1);
var G__6133 = c__4226__auto___6131;
var G__6134 = cljs.core.count.call(null,c__4226__auto___6131);
var G__6135 = 0;
seq__6073_6120 = G__6132;
chunk__6074_6121 = G__6133;
count__6075_6122 = G__6134;
i__6076_6123 = G__6135;
continue;
}
} else
{var w_6136 = cljs.core.first.call(null,seq__6073_6130__$1);cljs.core.remove_watch.call(null,w_6136,this$__$1);
{
var G__6137 = cljs.core.next.call(null,seq__6073_6130__$1);
var G__6138 = null;
var G__6139 = 0;
var G__6140 = 0;
seq__6073_6120 = G__6137;
chunk__6074_6121 = G__6138;
count__6075_6122 = G__6139;
i__6076_6123 = G__6140;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6141){var map__6143 = p__6141;var map__6143__$1 = ((cljs.core.seq_QMARK_.call(null,map__6143))?cljs.core.apply.call(null,cljs.core.hash_map,map__6143):map__6143);var derefed = cljs.core.get.call(null,map__6143__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__6143__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__6143__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__6143__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__6141 = null;if (arguments.length > 1) {
  p__6141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__6141);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6144){
var f = cljs.core.first(arglist__6144);
var p__6141 = cljs.core.rest(arglist__6144);
return make_reaction__delegate(f,p__6141);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map