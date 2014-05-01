// Compiled by ClojureScript 0.0-2197
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_56122 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_56122;
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
var G__56126__delegate = function (x,p__56123){var map__56125 = p__56123;var map__56125__$1 = ((cljs.core.seq_QMARK_.call(null,map__56125))?cljs.core.apply.call(null,cljs.core.hash_map,map__56125):map__56125);var validator = cljs.core.get.call(null,map__56125__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__56125__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__56126 = function (x,var_args){
var p__56123 = null;if (arguments.length > 1) {
  p__56123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__56126__delegate.call(this,x,p__56123);};
G__56126.cljs$lang$maxFixedArity = 1;
G__56126.cljs$lang$applyTo = (function (arglist__56127){
var x = cljs.core.first(arglist__56127);
var p__56123 = cljs.core.rest(arglist__56127);
return G__56126__delegate(x,p__56123);
});
G__56126.cljs$core$IFn$_invoke$arity$variadic = G__56126__delegate;
return G__56126;
})()
;
atom = function(x,var_args){
var p__56123 = var_args;
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
reagent.ratom.IDisposable = (function (){var obj56129 = {};return obj56129;
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
reagent.ratom.IRunnable = (function (){var obj56131 = {};return obj56131;
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
reagent.ratom.IComputedImpl = (function (){var obj56133 = {};return obj56133;
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
{var x__4903__auto___56146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4903__auto___56146))].join(''))].join(''));
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
var this$__$1 = this;var seq__56134_56147 = cljs.core.seq.call(null,derefed);var chunk__56135_56148 = null;var count__56136_56149 = 0;var i__56137_56150 = 0;while(true){
if((i__56137_56150 < count__56136_56149))
{var w_56151 = cljs.core._nth.call(null,chunk__56135_56148,i__56137_56150);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_56151))
{} else
{cljs.core.add_watch.call(null,w_56151,this$__$1,reagent.ratom._handle_change);
}
{
var G__56152 = seq__56134_56147;
var G__56153 = chunk__56135_56148;
var G__56154 = count__56136_56149;
var G__56155 = (i__56137_56150 + 1);
seq__56134_56147 = G__56152;
chunk__56135_56148 = G__56153;
count__56136_56149 = G__56154;
i__56137_56150 = G__56155;
continue;
}
} else
{var temp__4092__auto___56156 = cljs.core.seq.call(null,seq__56134_56147);if(temp__4092__auto___56156)
{var seq__56134_56157__$1 = temp__4092__auto___56156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56134_56157__$1))
{var c__4226__auto___56158 = cljs.core.chunk_first.call(null,seq__56134_56157__$1);{
var G__56159 = cljs.core.chunk_rest.call(null,seq__56134_56157__$1);
var G__56160 = c__4226__auto___56158;
var G__56161 = cljs.core.count.call(null,c__4226__auto___56158);
var G__56162 = 0;
seq__56134_56147 = G__56159;
chunk__56135_56148 = G__56160;
count__56136_56149 = G__56161;
i__56137_56150 = G__56162;
continue;
}
} else
{var w_56163 = cljs.core.first.call(null,seq__56134_56157__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_56163))
{} else
{cljs.core.add_watch.call(null,w_56163,this$__$1,reagent.ratom._handle_change);
}
{
var G__56164 = cljs.core.next.call(null,seq__56134_56157__$1);
var G__56165 = null;
var G__56166 = 0;
var G__56167 = 0;
seq__56134_56147 = G__56164;
chunk__56135_56148 = G__56165;
count__56136_56149 = G__56166;
i__56137_56150 = G__56167;
continue;
}
}
} else
{}
}
break;
}
var seq__56138_56168 = cljs.core.seq.call(null,self__.watching);var chunk__56139_56169 = null;var count__56140_56170 = 0;var i__56141_56171 = 0;while(true){
if((i__56141_56171 < count__56140_56170))
{var w_56172 = cljs.core._nth.call(null,chunk__56139_56169,i__56141_56171);if(cljs.core.contains_QMARK_.call(null,derefed,w_56172))
{} else
{cljs.core.remove_watch.call(null,w_56172,this$__$1);
}
{
var G__56173 = seq__56138_56168;
var G__56174 = chunk__56139_56169;
var G__56175 = count__56140_56170;
var G__56176 = (i__56141_56171 + 1);
seq__56138_56168 = G__56173;
chunk__56139_56169 = G__56174;
count__56140_56170 = G__56175;
i__56141_56171 = G__56176;
continue;
}
} else
{var temp__4092__auto___56177 = cljs.core.seq.call(null,seq__56138_56168);if(temp__4092__auto___56177)
{var seq__56138_56178__$1 = temp__4092__auto___56177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56138_56178__$1))
{var c__4226__auto___56179 = cljs.core.chunk_first.call(null,seq__56138_56178__$1);{
var G__56180 = cljs.core.chunk_rest.call(null,seq__56138_56178__$1);
var G__56181 = c__4226__auto___56179;
var G__56182 = cljs.core.count.call(null,c__4226__auto___56179);
var G__56183 = 0;
seq__56138_56168 = G__56180;
chunk__56139_56169 = G__56181;
count__56140_56170 = G__56182;
i__56141_56171 = G__56183;
continue;
}
} else
{var w_56184 = cljs.core.first.call(null,seq__56138_56178__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_56184))
{} else
{cljs.core.remove_watch.call(null,w_56184,this$__$1);
}
{
var G__56185 = cljs.core.next.call(null,seq__56138_56178__$1);
var G__56186 = null;
var G__56187 = 0;
var G__56188 = 0;
seq__56138_56168 = G__56185;
chunk__56139_56169 = G__56186;
count__56140_56170 = G__56187;
i__56141_56171 = G__56188;
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
var this$__$1 = this;var seq__56142_56189 = cljs.core.seq.call(null,self__.watching);var chunk__56143_56190 = null;var count__56144_56191 = 0;var i__56145_56192 = 0;while(true){
if((i__56145_56192 < count__56144_56191))
{var w_56193 = cljs.core._nth.call(null,chunk__56143_56190,i__56145_56192);cljs.core.remove_watch.call(null,w_56193,this$__$1);
{
var G__56194 = seq__56142_56189;
var G__56195 = chunk__56143_56190;
var G__56196 = count__56144_56191;
var G__56197 = (i__56145_56192 + 1);
seq__56142_56189 = G__56194;
chunk__56143_56190 = G__56195;
count__56144_56191 = G__56196;
i__56145_56192 = G__56197;
continue;
}
} else
{var temp__4092__auto___56198 = cljs.core.seq.call(null,seq__56142_56189);if(temp__4092__auto___56198)
{var seq__56142_56199__$1 = temp__4092__auto___56198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56142_56199__$1))
{var c__4226__auto___56200 = cljs.core.chunk_first.call(null,seq__56142_56199__$1);{
var G__56201 = cljs.core.chunk_rest.call(null,seq__56142_56199__$1);
var G__56202 = c__4226__auto___56200;
var G__56203 = cljs.core.count.call(null,c__4226__auto___56200);
var G__56204 = 0;
seq__56142_56189 = G__56201;
chunk__56143_56190 = G__56202;
count__56144_56191 = G__56203;
i__56145_56192 = G__56204;
continue;
}
} else
{var w_56205 = cljs.core.first.call(null,seq__56142_56199__$1);cljs.core.remove_watch.call(null,w_56205,this$__$1);
{
var G__56206 = cljs.core.next.call(null,seq__56142_56199__$1);
var G__56207 = null;
var G__56208 = 0;
var G__56209 = 0;
seq__56142_56189 = G__56206;
chunk__56143_56190 = G__56207;
count__56144_56191 = G__56208;
i__56145_56192 = G__56209;
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
var make_reaction__delegate = function (f,p__56210){var map__56212 = p__56210;var map__56212__$1 = ((cljs.core.seq_QMARK_.call(null,map__56212))?cljs.core.apply.call(null,cljs.core.hash_map,map__56212):map__56212);var derefed = cljs.core.get.call(null,map__56212__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__56212__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__56212__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__56212__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
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
var p__56210 = null;if (arguments.length > 1) {
  p__56210 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__56210);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__56213){
var f = cljs.core.first(arglist__56213);
var p__56210 = cljs.core.rest(arglist__56213);
return make_reaction__delegate(f,p__56210);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map