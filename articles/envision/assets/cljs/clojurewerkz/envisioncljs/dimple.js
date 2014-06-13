// Compiled by ClojureScript 0.0-2197
goog.provide('clojurewerkz.envisioncljs.dimple');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var bad_keys__5283__auto___8982 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__5279__5284__auto__){return schema.core.required_key_QMARK_.call(null,p1__5279__5284__auto__);
}),cljs.core.keys.call(null,null)));if(cljs.core.not.call(null,bad_keys__5283__auto___8982))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__5283__auto___8982))));
}
if(null)
{if(cljs.core.fn_QMARK_.call(null,null))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Extra-validator-fn? not a fn: %s",cljs.core.class$.call(null,null))));
}
} else
{}

/**
* @constructor
* @param {*} linear
* @param {*} linear_closed
* @param {*} step_before
* @param {*} step_after
* @param {*} basis
* @param {*} basis_open
* @param {*} basis_closed
* @param {*} bundle
* @param {*} cardinal
* @param {*} cardinal_open
* @param {*} cardinal_closed
* @param {*} monotone
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
clojurewerkz.envisioncljs.dimple.Interpolations = (function (linear,linear_closed,step_before,step_after,basis,basis_open,basis_closed,bundle,cardinal,cardinal_open,cardinal_closed,monotone,__meta,__extmap){
this.linear = linear;
this.linear_closed = linear_closed;
this.step_before = step_before;
this.step_after = step_after;
this.basis = basis;
this.basis_open = basis_open;
this.basis_closed = basis_closed;
this.bundle = bundle;
this.cardinal = cardinal;
this.cardinal_open = cardinal_open;
this.cardinal_closed = cardinal_closed;
this.monotone = monotone;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>12){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k8974,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"linear","linear",4206199447)))
{return self__.linear;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014)))
{return self__.linear_closed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"step-before","step-before",3144194322)))
{return self__.step_before;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"step-after","step-after",2605763341)))
{return self__.step_after;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"basis","basis",1107412912)))
{return self__.basis;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"basis-open","basis-open",4596653547)))
{return self__.basis_open;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301)))
{return self__.basis_closed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"bundle","bundle",3930989556)))
{return self__.bundle;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"cardinal","cardinal",1006291602)))
{return self__.cardinal;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945)))
{return self__.cardinal_open;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571)))
{return self__.cardinal_closed;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8974,new cljs.core.Keyword(null,"monotone","monotone",690646599)))
{return self__.monotone;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k8974,else__4067__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__8973){var self__ = this;
var this__4071__auto____$1 = this;var pred__8976 = cljs.core.keyword_identical_QMARK_;var expr__8977 = k__4072__auto__;if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"linear","linear",4206199447),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(G__8973,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,G__8973,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"step-before","step-before",3144194322),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,G__8973,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"step-after","step-after",2605763341),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,G__8973,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"basis","basis",1107412912),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,G__8973,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,G__8973,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,G__8973,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"bundle","bundle",3930989556),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,G__8973,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,G__8973,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,G__8973,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,G__8973,self__.monotone,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8976.call(null,new cljs.core.Keyword(null,"monotone","monotone",690646599),expr__8977)))
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,G__8973,self__.__meta,self__.__extmap,null));
} else
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__8973),null));
}
}
}
}
}
}
}
}
}
}
}
}
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#clojurewerkz.envisioncljs.dimple.Interpolations{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"linear","linear",4206199447),self__.linear],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),self__.linear_closed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step-before","step-before",3144194322),self__.step_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step-after","step-after",2605763341),self__.step_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"basis","basis",1107412912),self__.basis],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),self__.basis_open],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),self__.basis_closed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bundle","bundle",3930989556),self__.bundle],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),self__.cardinal],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),self__.cardinal_open],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),self__.cardinal_closed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"monotone","monotone",690646599),self__.monotone],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"linear","linear",4206199447),self__.linear],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),self__.linear_closed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step-before","step-before",3144194322),self__.step_before],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step-after","step-after",2605763341),self__.step_after],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"basis","basis",1107412912),self__.basis],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),self__.basis_open],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),self__.basis_closed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bundle","bundle",3930989556),self__.bundle],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),self__.cardinal],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),self__.cardinal_open],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),self__.cardinal_closed],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"monotone","monotone",690646599),self__.monotone],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (12 + cljs.core.count.call(null,self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__8973){var self__ = this;
var this__4063__auto____$1 = this;return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,G__8973,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
clojurewerkz.envisioncljs.dimple.Interpolations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"linear","linear",4206199447),null,new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),null,new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),null,new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),null,new cljs.core.Keyword(null,"basis","basis",1107412912),null,new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),null,new cljs.core.Keyword(null,"bundle","bundle",3930989556),null,new cljs.core.Keyword(null,"monotone","monotone",690646599),null,new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),null,new cljs.core.Keyword(null,"step-before","step-before",3144194322),null,new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),null,new cljs.core.Keyword(null,"step-after","step-after",2605763341),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new clojurewerkz.envisioncljs.dimple.Interpolations(self__.linear,self__.linear_closed,self__.step_before,self__.step_after,self__.basis,self__.basis_open,self__.basis_closed,self__.bundle,self__.cardinal,self__.cardinal_open,self__.cardinal_closed,self__.monotone,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
clojurewerkz.envisioncljs.dimple.Interpolations.cljs$lang$type = true;
clojurewerkz.envisioncljs.dimple.Interpolations.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojurewerkz.envisioncljs.dimple/Interpolations");
});
clojurewerkz.envisioncljs.dimple.Interpolations.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"clojurewerkz.envisioncljs.dimple/Interpolations");
});
clojurewerkz.envisioncljs.dimple.__GT_Interpolations = (function __GT_Interpolations(linear,linear_closed,step_before,step_after,basis,basis_open,basis_closed,bundle,cardinal,cardinal_open,cardinal_closed,monotone){return (new clojurewerkz.envisioncljs.dimple.Interpolations(linear,linear_closed,step_before,step_after,basis,basis_open,basis_closed,bundle,cardinal,cardinal_open,cardinal_closed,monotone));
});
clojurewerkz.envisioncljs.dimple.map__GT_Interpolations = (function map__GT_Interpolations(G__8975){return (new clojurewerkz.envisioncljs.dimple.Interpolations(new cljs.core.Keyword(null,"linear","linear",4206199447).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"step-before","step-before",3144194322).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"step-after","step-after",2605763341).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"basis","basis",1107412912).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"basis-open","basis-open",4596653547).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"bundle","bundle",3930989556).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"cardinal","cardinal",1006291602).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571).cljs$core$IFn$_invoke$arity$1(G__8975),new cljs.core.Keyword(null,"monotone","monotone",690646599).cljs$core$IFn$_invoke$arity$1(G__8975),null,cljs.core.dissoc.call(null,G__8975,new cljs.core.Keyword(null,"linear","linear",4206199447),new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),new cljs.core.Keyword(null,"step-before","step-before",3144194322),new cljs.core.Keyword(null,"step-after","step-after",2605763341),new cljs.core.Keyword(null,"basis","basis",1107412912),new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),new cljs.core.Keyword(null,"bundle","bundle",3930989556),new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),new cljs.core.Keyword(null,"monotone","monotone",690646599))));
});
schema.utils.declare_class_schema_BANG_.call(null,clojurewerkz.envisioncljs.dimple.Interpolations,schema.utils.assoc_when.call(null,schema.core.record.call(null,clojurewerkz.envisioncljs.dimple.Interpolations,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"linear","linear",4206199447),new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),new cljs.core.Keyword(null,"basis","basis",1107412912),new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),new cljs.core.Keyword(null,"bundle","bundle",3930989556),new cljs.core.Keyword(null,"monotone","monotone",690646599),new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),new cljs.core.Keyword(null,"step-before","step-before",3144194322),new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),new cljs.core.Keyword(null,"step-after","step-after",2605763341)],[schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str,schema.core.Str]),null)),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",2525540146),null));
/**
* Factory function for class Interpolations, taking a map of keywords to field values, but not 400x slower than ->x like the clojure.core version
*/
clojurewerkz.envisioncljs.dimple.map__GT_Interpolations = (function map__GT_Interpolations(m8971){var base__5280__auto__ = (new clojurewerkz.envisioncljs.dimple.Interpolations(cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"linear","linear",4206199447)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"step-before","step-before",3144194322)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"step-after","step-after",2605763341)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"basis","basis",1107412912)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"basis-open","basis-open",4596653547)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"bundle","bundle",3930989556)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"cardinal","cardinal",1006291602)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571)),cljs.core.get.call(null,m8971,new cljs.core.Keyword(null,"monotone","monotone",690646599))));var remaining__5281__auto__ = cljs.core.dissoc.call(null,m8971,new cljs.core.Keyword(null,"linear","linear",4206199447),new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),new cljs.core.Keyword(null,"step-before","step-before",3144194322),new cljs.core.Keyword(null,"step-after","step-after",2605763341),new cljs.core.Keyword(null,"basis","basis",1107412912),new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),new cljs.core.Keyword(null,"bundle","bundle",3930989556),new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),new cljs.core.Keyword(null,"monotone","monotone",690646599));if(cljs.core.seq.call(null,remaining__5281__auto__))
{return cljs.core.merge.call(null,base__5280__auto__,remaining__5281__auto__);
} else
{return base__5280__auto__;
}
});
/**
* Factory function for class Interpolations, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
* @param {...*} var_args
*/
clojurewerkz.envisioncljs.dimple.strict_map__GT_Interpolations = (function() { 
var strict_map__GT_Interpolations__delegate = function (m8972,p__8979){var vec__8981 = p__8979;var drop_extra_keys_QMARK___5282__auto__ = cljs.core.nth.call(null,vec__8981,0,null);if(cljs.core.truth_((function (){var or__3478__auto__ = drop_extra_keys_QMARK___5282__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,m8972),12);
}
})()))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Record has wrong set of keys: %s",clojure.data.diff.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m8972)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"linear","linear",4206199447),null,new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014),null,new cljs.core.Keyword(null,"basis-open","basis-open",4596653547),null,new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301),null,new cljs.core.Keyword(null,"basis","basis",1107412912),null,new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945),null,new cljs.core.Keyword(null,"bundle","bundle",3930989556),null,new cljs.core.Keyword(null,"monotone","monotone",690646599),null,new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571),null,new cljs.core.Keyword(null,"step-before","step-before",3144194322),null,new cljs.core.Keyword(null,"cardinal","cardinal",1006291602),null,new cljs.core.Keyword(null,"step-after","step-after",2605763341),null], null), null)))));
}
return (new clojurewerkz.envisioncljs.dimple.Interpolations((function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"linear","linear",4206199447);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"linear-closed","linear-closed",3398651014);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"step-before","step-before",3144194322);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"step-after","step-after",2605763341);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"basis","basis",1107412912);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"basis-open","basis-open",4596653547);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"basis-closed","basis-closed",3420244301);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"bundle","bundle",3930989556);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"cardinal","cardinal",1006291602);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"cardinal-open","cardinal-open",1459279945);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"cardinal-closed","cardinal-closed",3471254571);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8972;var k__5155__auto__ = new cljs.core.Keyword(null,"monotone","monotone",690646599);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})()));
};
var strict_map__GT_Interpolations = function (m8972,var_args){
var p__8979 = null;if (arguments.length > 1) {
  p__8979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strict_map__GT_Interpolations__delegate.call(this,m8972,p__8979);};
strict_map__GT_Interpolations.cljs$lang$maxFixedArity = 1;
strict_map__GT_Interpolations.cljs$lang$applyTo = (function (arglist__8983){
var m8972 = cljs.core.first(arglist__8983);
var p__8979 = cljs.core.rest(arglist__8983);
return strict_map__GT_Interpolations__delegate(m8972,p__8979);
});
strict_map__GT_Interpolations.cljs$core$IFn$_invoke$arity$variadic = strict_map__GT_Interpolations__delegate;
return strict_map__GT_Interpolations;
})()
;
clojurewerkz.envisioncljs.dimple.interpolations = clojurewerkz.envisioncljs.dimple.__GT_Interpolations.call(null,"linear","linear-closed","step-before","step-after","basis","basis-open","basis-closed","bundle","cardinal","cardinal-open","cardinal-closed","monotone");
clojurewerkz.envisioncljs.dimple.make_svg = (function make_svg(node,width,height){return dimple.newSvg(node,width,height);
});
clojurewerkz.envisioncljs.dimple.chart = dimple.chart;
clojurewerkz.envisioncljs.dimple.make_chart = (function make_chart(node,width,height){var svg = clojurewerkz.envisioncljs.dimple.make_svg.call(null,node,width,height);var constructor = dimple.chart;var chart = (new constructor(svg,null));return chart;
});
var bad_keys__5283__auto___8995 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__5279__5284__auto__){return schema.core.required_key_QMARK_.call(null,p1__5279__5284__auto__);
}),cljs.core.keys.call(null,null)));if(cljs.core.not.call(null,bad_keys__5283__auto___8995))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__5283__auto___8995))));
}
if(null)
{if(cljs.core.fn_QMARK_.call(null,null))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Extra-validator-fn? not a fn: %s",cljs.core.class$.call(null,null))));
}
} else
{}

/**
* @constructor
* @param {*} line
* @param {*} bubble
* @param {*} area
* @param {*} bar
* @param {*} linear_trend
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor = (function (line,bubble,area,bar,linear_trend,__meta,__extmap){
this.line = line;
this.bubble = bubble;
this.area = area;
this.bar = bar;
this.linear_trend = linear_trend;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k8987,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k8987,new cljs.core.Keyword(null,"line","line",1017226086)))
{return self__.line;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8987,new cljs.core.Keyword(null,"bubble","bubble",3930630142)))
{return self__.bubble;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8987,new cljs.core.Keyword(null,"area","area",1016906751)))
{return self__.area;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8987,new cljs.core.Keyword(null,"bar","bar",1014001541)))
{return self__.bar;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k8987,new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391)))
{return self__.linear_trend;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k8987,else__4067__auto__);
} else
{return null;
}
}
}
}
}
}
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__8986){var self__ = this;
var this__4071__auto____$1 = this;var pred__8989 = cljs.core.keyword_identical_QMARK_;var expr__8990 = k__4072__auto__;if(cljs.core.truth_(pred__8989.call(null,new cljs.core.Keyword(null,"line","line",1017226086),expr__8990)))
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(G__8986,self__.bubble,self__.area,self__.bar,self__.linear_trend,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8989.call(null,new cljs.core.Keyword(null,"bubble","bubble",3930630142),expr__8990)))
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,G__8986,self__.area,self__.bar,self__.linear_trend,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8989.call(null,new cljs.core.Keyword(null,"area","area",1016906751),expr__8990)))
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,G__8986,self__.bar,self__.linear_trend,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8989.call(null,new cljs.core.Keyword(null,"bar","bar",1014001541),expr__8990)))
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,self__.area,G__8986,self__.linear_trend,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8989.call(null,new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391),expr__8990)))
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,self__.area,self__.bar,G__8986,self__.__meta,self__.__extmap,null));
} else
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,self__.area,self__.bar,self__.linear_trend,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__8986),null));
}
}
}
}
}
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",1017226086),self__.line],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bubble","bubble",3930630142),self__.bubble],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"area","area",1016906751),self__.area],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bar","bar",1014001541),self__.bar],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391),self__.linear_trend],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",1017226086),self__.line],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bubble","bubble",3930630142),self__.bubble],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"area","area",1016906751),self__.area],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bar","bar",1014001541),self__.bar],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391),self__.linear_trend],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__8986){var self__ = this;
var this__4063__auto____$1 = this;return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,self__.area,self__.bar,self__.linear_trend,G__8986,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,self__.area,self__.bar,self__.linear_trend,self__.__meta,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bar","bar",1014001541),null,new cljs.core.Keyword(null,"bubble","bubble",3930630142),null,new cljs.core.Keyword(null,"area","area",1016906751),null,new cljs.core.Keyword(null,"line","line",1017226086),null,new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(self__.line,self__.bubble,self__.area,self__.bar,self__.linear_trend,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.cljs$lang$type = true;
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojurewerkz.envisioncljs.dimple/SeriesTypeConstructor");
});
clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"clojurewerkz.envisioncljs.dimple/SeriesTypeConstructor");
});
clojurewerkz.envisioncljs.dimple.__GT_SeriesTypeConstructor = (function __GT_SeriesTypeConstructor(line,bubble,area,bar,linear_trend){return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(line,bubble,area,bar,linear_trend));
});
clojurewerkz.envisioncljs.dimple.map__GT_SeriesTypeConstructor = (function map__GT_SeriesTypeConstructor(G__8988){return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(G__8988),new cljs.core.Keyword(null,"bubble","bubble",3930630142).cljs$core$IFn$_invoke$arity$1(G__8988),new cljs.core.Keyword(null,"area","area",1016906751).cljs$core$IFn$_invoke$arity$1(G__8988),new cljs.core.Keyword(null,"bar","bar",1014001541).cljs$core$IFn$_invoke$arity$1(G__8988),new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391).cljs$core$IFn$_invoke$arity$1(G__8988),null,cljs.core.dissoc.call(null,G__8988,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"bubble","bubble",3930630142),new cljs.core.Keyword(null,"area","area",1016906751),new cljs.core.Keyword(null,"bar","bar",1014001541),new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391))));
});
schema.utils.declare_class_schema_BANG_.call(null,clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor,schema.utils.assoc_when.call(null,schema.core.record.call(null,clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line","line",1017226086),schema.core.Any,new cljs.core.Keyword(null,"bubble","bubble",3930630142),schema.core.Any,new cljs.core.Keyword(null,"area","area",1016906751),schema.core.Any,new cljs.core.Keyword(null,"bar","bar",1014001541),schema.core.Any,new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391),schema.core.Any], null),null)),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",2525540146),null));
/**
* Factory function for class SeriesTypeConstructor, taking a map of keywords to field values, but not 400x slower than ->x like the clojure.core version
*/
clojurewerkz.envisioncljs.dimple.map__GT_SeriesTypeConstructor = (function map__GT_SeriesTypeConstructor(m8984){var base__5280__auto__ = (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor(cljs.core.get.call(null,m8984,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core.get.call(null,m8984,new cljs.core.Keyword(null,"bubble","bubble",3930630142)),cljs.core.get.call(null,m8984,new cljs.core.Keyword(null,"area","area",1016906751)),cljs.core.get.call(null,m8984,new cljs.core.Keyword(null,"bar","bar",1014001541)),cljs.core.get.call(null,m8984,new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391))));var remaining__5281__auto__ = cljs.core.dissoc.call(null,m8984,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"bubble","bubble",3930630142),new cljs.core.Keyword(null,"area","area",1016906751),new cljs.core.Keyword(null,"bar","bar",1014001541),new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391));if(cljs.core.seq.call(null,remaining__5281__auto__))
{return cljs.core.merge.call(null,base__5280__auto__,remaining__5281__auto__);
} else
{return base__5280__auto__;
}
});
/**
* Factory function for class SeriesTypeConstructor, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
* @param {...*} var_args
*/
clojurewerkz.envisioncljs.dimple.strict_map__GT_SeriesTypeConstructor = (function() { 
var strict_map__GT_SeriesTypeConstructor__delegate = function (m8985,p__8992){var vec__8994 = p__8992;var drop_extra_keys_QMARK___5282__auto__ = cljs.core.nth.call(null,vec__8994,0,null);if(cljs.core.truth_((function (){var or__3478__auto__ = drop_extra_keys_QMARK___5282__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,m8985),5);
}
})()))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Record has wrong set of keys: %s",clojure.data.diff.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m8985)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bar","bar",1014001541),null,new cljs.core.Keyword(null,"bubble","bubble",3930630142),null,new cljs.core.Keyword(null,"area","area",1016906751),null,new cljs.core.Keyword(null,"line","line",1017226086),null,new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391),null], null), null)))));
}
return (new clojurewerkz.envisioncljs.dimple.SeriesTypeConstructor((function (){var m__5154__auto__ = m8985;var k__5155__auto__ = new cljs.core.Keyword(null,"line","line",1017226086);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8985;var k__5155__auto__ = new cljs.core.Keyword(null,"bubble","bubble",3930630142);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8985;var k__5155__auto__ = new cljs.core.Keyword(null,"area","area",1016906751);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8985;var k__5155__auto__ = new cljs.core.Keyword(null,"bar","bar",1014001541);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m8985;var k__5155__auto__ = new cljs.core.Keyword(null,"linear-trend","linear-trend",1106700391);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})()));
};
var strict_map__GT_SeriesTypeConstructor = function (m8985,var_args){
var p__8992 = null;if (arguments.length > 1) {
  p__8992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strict_map__GT_SeriesTypeConstructor__delegate.call(this,m8985,p__8992);};
strict_map__GT_SeriesTypeConstructor.cljs$lang$maxFixedArity = 1;
strict_map__GT_SeriesTypeConstructor.cljs$lang$applyTo = (function (arglist__8996){
var m8985 = cljs.core.first(arglist__8996);
var p__8992 = cljs.core.rest(arglist__8996);
return strict_map__GT_SeriesTypeConstructor__delegate(m8985,p__8992);
});
strict_map__GT_SeriesTypeConstructor.cljs$core$IFn$_invoke$arity$variadic = strict_map__GT_SeriesTypeConstructor__delegate;
return strict_map__GT_SeriesTypeConstructor;
})()
;
clojurewerkz.envisioncljs.dimple.line = dimple.plot.line;
clojurewerkz.envisioncljs.dimple.bubble = dimple.plot.bubble;
clojurewerkz.envisioncljs.dimple.area = dimple.plot.area;
clojurewerkz.envisioncljs.dimple.bar = dimple.plot.bar;
clojurewerkz.envisioncljs.dimple.linear_trend = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stacked","stacked",3411230873),false,new cljs.core.Keyword(null,"grouped","grouped",1307333328),false,new cljs.core.Keyword(null,"supportedAxes","supportedAxes",535436389),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","y"], null)),new cljs.core.Keyword(null,"draw","draw",1016996022),(function (chart,series,duration){var line = d3.svg.line().x((function (d){return dimple._helpers.cx(d,chart,series);
})).y((function (d){return dimple._helpers.cy(d,chart,series);
}));var path = (function (){var or__3478__auto__ = series.path;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return chart.svg.append("g").attr("class","linear-trend").append("path").datum(series.chartData).attr("d",line).style("stroke","blue");
}
})();path.attr("d",line);
return series.path = path;
})], null));
clojurewerkz.envisioncljs.dimple.series_type_constructors = clojurewerkz.envisioncljs.dimple.__GT_SeriesTypeConstructor.call(null,clojurewerkz.envisioncljs.dimple.line,clojurewerkz.envisioncljs.dimple.bubble,clojurewerkz.envisioncljs.dimple.area,clojurewerkz.envisioncljs.dimple.bar,clojurewerkz.envisioncljs.dimple.linear_trend);
clojurewerkz.envisioncljs.dimple.configure_axis = (function configure_axis(axis,p__8997){var map__9005 = p__8997;var map__9005__$1 = ((cljs.core.seq_QMARK_.call(null,map__9005))?cljs.core.apply.call(null,cljs.core.hash_map,map__9005):map__9005);var axis_config = map__9005__$1;var fields_9012 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"time-period","time-period",4639240243),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),new cljs.core.Keyword(null,"time-field","time-field",706080108),new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),new cljs.core.Keyword(null,"measure","measure",1952225488),new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),new cljs.core.Keyword(null,"font-size","font-size",3722789425),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),new cljs.core.Keyword(null,"override-min","override-min",1079075907),new cljs.core.Keyword(null,"clamp","clamp",1108646957),new cljs.core.Keyword(null,"log-base","log-base",2980897580),new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),new cljs.core.Keyword(null,"ticks","ticks",1124259304),new cljs.core.Keyword(null,"font-family","font-family",1122436628),new cljs.core.Keyword(null,"show-percent","show-percent",535415015),new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),new cljs.core.Keyword(null,"colors","colors",3954028770),new cljs.core.Keyword(null,"use-log","use-log",864728432)],["timePeriod","hidden","groupOrderRule","showGridlines","timeField","dateParseFormat","measure","timeInterval","gridlineShapes","fontSize","title","titleShape","categoryFields","overrideMin","clamp","logBase","floatingBarWidth","ticks","fontFamily","showPercent","orderRule","tickFormat","colors","useLog"]);var seq__9006_9013 = cljs.core.seq.call(null,fields_9012);var chunk__9007_9014 = null;var count__9008_9015 = 0;var i__9009_9016 = 0;while(true){
if((i__9009_9016 < count__9008_9015))
{var vec__9010_9017 = cljs.core._nth.call(null,chunk__9007_9014,i__9009_9016);var k_9018 = cljs.core.nth.call(null,vec__9010_9017,0,null);var field_9019 = cljs.core.nth.call(null,vec__9010_9017,1,null);var temp__4092__auto___9020 = (function (){var m__5154__auto__ = axis_config;var k__5155__auto__ = k_9018;var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})();if(cljs.core.truth_(temp__4092__auto___9020))
{var v_9021 = temp__4092__auto___9020;cljs.core.println.call(null,k_9018,v_9021,field_9019);
(axis[field_9019] = v_9021);
} else
{}
{
var G__9022 = seq__9006_9013;
var G__9023 = chunk__9007_9014;
var G__9024 = count__9008_9015;
var G__9025 = (i__9009_9016 + 1);
seq__9006_9013 = G__9022;
chunk__9007_9014 = G__9023;
count__9008_9015 = G__9024;
i__9009_9016 = G__9025;
continue;
}
} else
{var temp__4092__auto___9026 = cljs.core.seq.call(null,seq__9006_9013);if(temp__4092__auto___9026)
{var seq__9006_9027__$1 = temp__4092__auto___9026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9006_9027__$1))
{var c__4226__auto___9028 = cljs.core.chunk_first.call(null,seq__9006_9027__$1);{
var G__9029 = cljs.core.chunk_rest.call(null,seq__9006_9027__$1);
var G__9030 = c__4226__auto___9028;
var G__9031 = cljs.core.count.call(null,c__4226__auto___9028);
var G__9032 = 0;
seq__9006_9013 = G__9029;
chunk__9007_9014 = G__9030;
count__9008_9015 = G__9031;
i__9009_9016 = G__9032;
continue;
}
} else
{var vec__9011_9033 = cljs.core.first.call(null,seq__9006_9027__$1);var k_9034 = cljs.core.nth.call(null,vec__9011_9033,0,null);var field_9035 = cljs.core.nth.call(null,vec__9011_9033,1,null);var temp__4092__auto___9036__$1 = (function (){var m__5154__auto__ = axis_config;var k__5155__auto__ = k_9034;var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})();if(cljs.core.truth_(temp__4092__auto___9036__$1))
{var v_9037 = temp__4092__auto___9036__$1;cljs.core.println.call(null,k_9034,v_9037,field_9035);
(axis[field_9035] = v_9037);
} else
{}
{
var G__9038 = cljs.core.next.call(null,seq__9006_9027__$1);
var G__9039 = null;
var G__9040 = 0;
var G__9041 = 0;
seq__9006_9013 = G__9038;
chunk__9007_9014 = G__9039;
count__9008_9015 = G__9040;
i__9009_9016 = G__9041;
continue;
}
}
} else
{}
}
break;
}
var temp__4092__auto___9042 = (function (){var m__5154__auto__ = axis_config;var k__5155__auto__ = new cljs.core.Keyword(null,"order-rule","order-rule",1724089741);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})();if(cljs.core.truth_(temp__4092__auto___9042))
{var v_9043 = temp__4092__auto___9042;axis.addOrderRule(v_9043);
} else
{}
var temp__4092__auto__ = (function (){var m__5154__auto__ = axis_config;var k__5155__auto__ = new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var v = temp__4092__auto__;return axis.addOrderRule(v);
} else
{return null;
}
});
clojurewerkz.envisioncljs.dimple.add_category_axis = (function add_category_axis(chart,axis_name,field_name,axis_config){clojurewerkz.envisioncljs.dimple.configure_axis.call(null,chart.addCategoryAxis(axis_name,field_name),axis_config);
return chart;
});
clojurewerkz.envisioncljs.dimple.add_measure_axis = (function add_measure_axis(chart,axis_name,field_name,axis_config){clojurewerkz.envisioncljs.dimple.configure_axis.call(null,chart.addMeasureAxis(axis_name,field_name),axis_config);
return chart;
});
var bad_keys__5283__auto___9055 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__5279__5284__auto__){return schema.core.required_key_QMARK_.call(null,p1__5279__5284__auto__);
}),cljs.core.keys.call(null,null)));if(cljs.core.not.call(null,bad_keys__5283__auto___9055))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__5283__auto___9055))));
}
if(null)
{if(cljs.core.fn_QMARK_.call(null,null))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Extra-validator-fn? not a fn: %s",cljs.core.class$.call(null,null))));
}
} else
{}

/**
* @constructor
* @param {*} category
* @param {*} measure
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor = (function (category,measure,__meta,__extmap){
this.category = category;
this.measure = measure;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9047,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9047,new cljs.core.Keyword(null,"category","category",1064415344)))
{return self__.category;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9047,new cljs.core.Keyword(null,"measure","measure",1952225488)))
{return self__.measure;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9047,else__4067__auto__);
} else
{return null;
}
}
}
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9046){var self__ = this;
var this__4071__auto____$1 = this;var pred__9049 = cljs.core.keyword_identical_QMARK_;var expr__9050 = k__4072__auto__;if(cljs.core.truth_(pred__9049.call(null,new cljs.core.Keyword(null,"category","category",1064415344),expr__9050)))
{return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(G__9046,self__.measure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9049.call(null,new cljs.core.Keyword(null,"measure","measure",1952225488),expr__9050)))
{return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(self__.category,G__9046,self__.__meta,self__.__extmap,null));
} else
{return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(self__.category,self__.measure,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9046),null));
}
}
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#clojurewerkz.envisioncljs.dimple.AxisTypeConstructor{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",1064415344),self__.category],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"measure","measure",1952225488),self__.measure],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category","category",1064415344),self__.category],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"measure","measure",1952225488),self__.measure],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9046){var self__ = this;
var this__4063__auto____$1 = this;return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(self__.category,self__.measure,G__9046,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(self__.category,self__.measure,self__.__meta,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measure","measure",1952225488),null,new cljs.core.Keyword(null,"category","category",1064415344),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(self__.category,self__.measure,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.cljs$lang$type = true;
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojurewerkz.envisioncljs.dimple/AxisTypeConstructor");
});
clojurewerkz.envisioncljs.dimple.AxisTypeConstructor.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"clojurewerkz.envisioncljs.dimple/AxisTypeConstructor");
});
clojurewerkz.envisioncljs.dimple.__GT_AxisTypeConstructor = (function __GT_AxisTypeConstructor(category,measure){return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(category,measure));
});
clojurewerkz.envisioncljs.dimple.map__GT_AxisTypeConstructor = (function map__GT_AxisTypeConstructor(G__9048){return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(new cljs.core.Keyword(null,"category","category",1064415344).cljs$core$IFn$_invoke$arity$1(G__9048),new cljs.core.Keyword(null,"measure","measure",1952225488).cljs$core$IFn$_invoke$arity$1(G__9048),null,cljs.core.dissoc.call(null,G__9048,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"measure","measure",1952225488))));
});
schema.utils.declare_class_schema_BANG_.call(null,clojurewerkz.envisioncljs.dimple.AxisTypeConstructor,schema.utils.assoc_when.call(null,schema.core.record.call(null,clojurewerkz.envisioncljs.dimple.AxisTypeConstructor,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",1064415344),schema.core.Any,new cljs.core.Keyword(null,"measure","measure",1952225488),schema.core.Any], null),null)),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",2525540146),null));
/**
* Factory function for class AxisTypeConstructor, taking a map of keywords to field values, but not 400x slower than ->x like the clojure.core version
*/
clojurewerkz.envisioncljs.dimple.map__GT_AxisTypeConstructor = (function map__GT_AxisTypeConstructor(m9044){var base__5280__auto__ = (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor(cljs.core.get.call(null,m9044,new cljs.core.Keyword(null,"category","category",1064415344)),cljs.core.get.call(null,m9044,new cljs.core.Keyword(null,"measure","measure",1952225488))));var remaining__5281__auto__ = cljs.core.dissoc.call(null,m9044,new cljs.core.Keyword(null,"category","category",1064415344),new cljs.core.Keyword(null,"measure","measure",1952225488));if(cljs.core.seq.call(null,remaining__5281__auto__))
{return cljs.core.merge.call(null,base__5280__auto__,remaining__5281__auto__);
} else
{return base__5280__auto__;
}
});
/**
* Factory function for class AxisTypeConstructor, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
* @param {...*} var_args
*/
clojurewerkz.envisioncljs.dimple.strict_map__GT_AxisTypeConstructor = (function() { 
var strict_map__GT_AxisTypeConstructor__delegate = function (m9045,p__9052){var vec__9054 = p__9052;var drop_extra_keys_QMARK___5282__auto__ = cljs.core.nth.call(null,vec__9054,0,null);if(cljs.core.truth_((function (){var or__3478__auto__ = drop_extra_keys_QMARK___5282__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,m9045),2);
}
})()))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Record has wrong set of keys: %s",clojure.data.diff.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m9045)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measure","measure",1952225488),null,new cljs.core.Keyword(null,"category","category",1064415344),null], null), null)))));
}
return (new clojurewerkz.envisioncljs.dimple.AxisTypeConstructor((function (){var m__5154__auto__ = m9045;var k__5155__auto__ = new cljs.core.Keyword(null,"category","category",1064415344);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9045;var k__5155__auto__ = new cljs.core.Keyword(null,"measure","measure",1952225488);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})()));
};
var strict_map__GT_AxisTypeConstructor = function (m9045,var_args){
var p__9052 = null;if (arguments.length > 1) {
  p__9052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strict_map__GT_AxisTypeConstructor__delegate.call(this,m9045,p__9052);};
strict_map__GT_AxisTypeConstructor.cljs$lang$maxFixedArity = 1;
strict_map__GT_AxisTypeConstructor.cljs$lang$applyTo = (function (arglist__9056){
var m9045 = cljs.core.first(arglist__9056);
var p__9052 = cljs.core.rest(arglist__9056);
return strict_map__GT_AxisTypeConstructor__delegate(m9045,p__9052);
});
strict_map__GT_AxisTypeConstructor.cljs$core$IFn$_invoke$arity$variadic = strict_map__GT_AxisTypeConstructor__delegate;
return strict_map__GT_AxisTypeConstructor;
})()
;
clojurewerkz.envisioncljs.dimple.axis_type_constructors = clojurewerkz.envisioncljs.dimple.__GT_AxisTypeConstructor.call(null,clojurewerkz.envisioncljs.dimple.add_category_axis,clojurewerkz.envisioncljs.dimple.add_measure_axis);
/**
* @param {...*} var_args
*/
clojurewerkz.envisioncljs.dimple.add_axis = (function() { 
var add_axis__delegate = function (chart,axis_type,args){var c = (function (){var m__5154__auto__ = clojurewerkz.envisioncljs.dimple.axis_type_constructors;var k__5155__auto__ = axis_type;var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})();return cljs.core.apply.call(null,c,chart,args);
};
var add_axis = function (chart,axis_type,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return add_axis__delegate.call(this,chart,axis_type,args);};
add_axis.cljs$lang$maxFixedArity = 2;
add_axis.cljs$lang$applyTo = (function (arglist__9057){
var chart = cljs.core.first(arglist__9057);
arglist__9057 = cljs.core.next(arglist__9057);
var axis_type = cljs.core.first(arglist__9057);
var args = cljs.core.rest(arglist__9057);
return add_axis__delegate(chart,axis_type,args);
});
add_axis.cljs$core$IFn$_invoke$arity$variadic = add_axis__delegate;
return add_axis;
})()
;
clojurewerkz.envisioncljs.dimple.set_data = (function set_data(chart,data){chart.data = data;
return chart;
});
/**
* Set the size of the plot within the svg.
*/
clojurewerkz.envisioncljs.dimple.set_bounds = (function set_bounds(chart,x,y,width,height){chart.setBounds(x,y,width,height);
return chart;
});
clojurewerkz.envisioncljs.dimple.add_series = (function add_series(chart,series_literals,series_type,p__9058){var map__9060 = p__9058;var map__9060__$1 = ((cljs.core.seq_QMARK_.call(null,map__9060))?cljs.core.apply.call(null,cljs.core.hash_map,map__9060):map__9060);var cfg = map__9060__$1;var data = cljs.core.get.call(null,map__9060__$1,new cljs.core.Keyword(null,"data","data",1016980252));var interpolation = cljs.core.get.call(null,map__9060__$1,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990));var series_9061 = chart.addSeries(cljs.core.clj__GT_js.call(null,series_literals),(function (){var m__5154__auto__ = clojurewerkz.envisioncljs.dimple.series_type_constructors;var k__5155__auto__ = series_type;var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})());if(cljs.core.truth_(interpolation))
{series_9061.interpolation = (function (){var m__5154__auto__ = clojurewerkz.envisioncljs.dimple.interpolations;var k__5155__auto__ = interpolation;var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})();
} else
{}
if(cljs.core.truth_(data))
{series_9061.chartData = cljs.core.clj__GT_js.call(null,data);
} else
{}
return chart;
});
clojurewerkz.envisioncljs.dimple.draw = (function draw(chart){chart.draw();
return chart;
});
clojurewerkz.envisioncljs.dimple.filter_data = (function filter_data(data,field,accepted_values){return dimple.filterData(data,field,cljs.core.clj__GT_js.call(null,accepted_values));
});

//# sourceMappingURL=dimple.js.map