// Compiled by ClojureScript 0.0-2197
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
schema.core.Schema = (function (){var obj7436 = {};return obj7436;
})();
schema.core.walker = (function walker(this$){if((function (){var and__3466__auto__ = this$;if(and__3466__auto__)
{return this$.schema$core$Schema$walker$arity$1;
} else
{return and__3466__auto__;
}
})())
{return this$.schema$core$Schema$walker$arity$1(this$);
} else
{var x__4105__auto__ = (((this$ == null))?null:this$);return (function (){var or__3478__auto__ = (schema.core.walker[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (schema.core.walker["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Schema.walker",this$);
}
}
})().call(null,this$);
}
});
schema.core.explain = (function explain(this$){if((function (){var and__3466__auto__ = this$;if(and__3466__auto__)
{return this$.schema$core$Schema$explain$arity$1;
} else
{return and__3466__auto__;
}
})())
{return this$.schema$core$Schema$explain$arity$1(this$);
} else
{var x__4105__auto__ = (((this$ == null))?null:this$);return (function (){var or__3478__auto__ = (schema.core.explain[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (schema.core.explain["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
})().call(null,this$);
}
});
/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){var subschema_walker7438 = schema.core.subschema_walker;try{schema.core.subschema_walker = sub_walker;
return schema.core.subschema_walker.call(null,schema__$1);
}finally {schema.core.subschema_walker = subschema_walker7438;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){return cljs.core.comp.call(null,schema.utils.error_val,schema.core.start_walker.call(null,schema.core.walker,schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){var temp__4092__auto___7439 = schema.core.check.call(null,schema__$1,value);if(cljs.core.truth_(temp__4092__auto___7439))
{var error_7440 = temp__4092__auto___7439;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_7440)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),schema__$1,new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"error","error",1110689146),error_7440], null));
} else
{}
return value;
});
Function.prototype.schema$core$Schema$ = true;
Function.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var class_walker = (function (){var temp__4090__auto__ = schema.utils.class_schema.call(null,this$__$1);if(cljs.core.truth_(temp__4090__auto__))
{var more_schema = temp__4090__auto__;return schema.core.subschema_walker.call(null,more_schema);
} else
{return cljs.core.identity;
}
})();return ((function (class_walker,this$__$1){
return (function (x){var or__3478__auto__ = ((((x == null)) || (cljs.core.not.call(null,(function (){var or__3478__auto__ = (this$__$1 === x.constructor);if(or__3478__auto__)
{return or__3478__auto__;
} else
{return x instanceof this$__$1;
}
})())))?schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (class_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),this$__$1),new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null));
});})(class_walker,this$__$1))
)),null)):null);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return class_walker.call(null,x);
}
});
;})(class_walker,this$__$1))
});
Function.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var temp__4090__auto__ = schema.utils.class_schema.call(null,this$__$1);if(cljs.core.truth_(temp__4090__auto__))
{var more_schema = temp__4090__auto__;return schema.core.explain.call(null,more_schema);
} else
{return this$__$1;
}
});

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7442,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7442,new cljs.core.Keyword(null,"_","_",1013904337)))
{return self__._;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7442,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7441){var self__ = this;
var this__4071__auto____$1 = this;var pred__7444 = cljs.core.keyword_identical_QMARK_;var expr__7445 = k__4072__auto__;if(cljs.core.truth_(pred__7444.call(null,new cljs.core.Keyword(null,"_","_",1013904337),expr__7445)))
{return (new schema.core.AnythingSchema(G__7441,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7441),null));
}
});
schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;
schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.identity;
});
schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.Symbol(null,"Any","Any",-1640465531,null);
});
schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1013904337),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1013904337),self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7441){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,G__7441,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1013904337),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.AnythingSchema.cljs$lang$type = true;
schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});
schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/AnythingSchema");
});
schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){return (new schema.core.AnythingSchema(_));
});
schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__7443){return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1013904337).cljs$core$IFn$_invoke$arity$1(G__7443),null,cljs.core.dissoc.call(null,G__7443,new cljs.core.Keyword(null,"_","_",1013904337))));
});
/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EqSchema = (function (v,__meta,__extmap){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7448,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7448,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7448,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7447){var self__ = this;
var this__4071__auto____$1 = this;var pred__7450 = cljs.core.keyword_identical_QMARK_;var expr__7451 = k__4072__auto__;if(cljs.core.truth_(pred__7450.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__7451)))
{return (new schema.core.EqSchema(G__7447,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7447),null));
}
});
schema.core.EqSchema.prototype.schema$core$Schema$ = true;
schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core._EQ_.call(null,self__.v,x))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.v),new cljs.core.Symbol(null,"=","=",-1640531466,null));
});})(this$__$1))
)),null));
}
});
;})(this$__$1))
});
schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",-1640528283,null));
});
schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.EqSchema{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7447){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.EqSchema(self__.v,G__7447,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",1013904360),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.EqSchema.cljs$lang$type = true;
schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});
schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/EqSchema");
});
schema.core.__GT_EqSchema = (function __GT_EqSchema(v){return (new schema.core.EqSchema(v));
});
schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__7449){return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__7449),null,cljs.core.dissoc.call(null,G__7449,new cljs.core.Keyword(null,"v","v",1013904360))));
});
/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){return (new schema.core.EqSchema(v));
});

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7454,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7454,new cljs.core.Keyword(null,"vs","vs",1013908015)))
{return self__.vs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7454,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7453){var self__ = this;
var this__4071__auto____$1 = this;var pred__7456 = cljs.core.keyword_identical_QMARK_;var expr__7457 = k__4072__auto__;if(cljs.core.truth_(pred__7456.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),expr__7457)))
{return (new schema.core.EnumSchema(G__7453,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7453),null));
}
});
schema.core.EnumSchema.prototype.schema$core$Schema$ = true;
schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.contains_QMARK_.call(null,self__.vs,x))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.vs);
});})(this$__$1))
)),null));
}
});
;})(this$__$1))
});
schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-1637413190,null),self__.vs);
});
schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.EnumSchema{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",1013908015),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",1013908015),self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7453){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,G__7453,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",1013908015),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.EnumSchema.cljs$lang$type = true;
schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});
schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/EnumSchema");
});
schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){return (new schema.core.EnumSchema(vs));
});
schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__7455){return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",1013908015).cljs$core$IFn$_invoke$arity$1(G__7455),null,cljs.core.dissoc.call(null,G__7455,new cljs.core.Keyword(null,"vs","vs",1013908015))));
});
/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){return (new schema.core.EnumSchema(cljs.core.set.call(null,vs)));
};
var enum$ = function (var_args){
var vs = null;if (arguments.length > 0) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__7459){
var vs = cljs.core.seq(arglist__7459);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
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
schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7461,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7461,new cljs.core.Keyword(null,"p?","p?",1013907777)))
{return self__.p_QMARK_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7461,new cljs.core.Keyword(null,"pred-name","pred-name",3905755689)))
{return self__.pred_name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7461,else__4067__auto__);
} else
{return null;
}
}
}
});
schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7460){var self__ = this;
var this__4071__auto____$1 = this;var pred__7463 = cljs.core.keyword_identical_QMARK_;var expr__7464 = k__4072__auto__;if(cljs.core.truth_(pred__7463.call(null,new cljs.core.Keyword(null,"p?","p?",1013907777),expr__7464)))
{return (new schema.core.Predicate(G__7460,self__.pred_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7463.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",3905755689),expr__7464)))
{return (new schema.core.Predicate(self__.p_QMARK_,G__7460,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7460),null));
}
}
});
schema.core.Predicate.prototype.schema$core$Schema$ = true;
schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){var temp__4090__auto__ = (function (){try{if(cljs.core.truth_(self__.p_QMARK_.call(null,x)))
{return null;
} else
{return new cljs.core.Symbol(null,"not","not",-1640422260,null);
}
}catch (e7466){if((e7466 instanceof Object))
{var e = e7466;return new cljs.core.Symbol(null,"throws?","throws?",1316818251,null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7466;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var reason = temp__4090__auto__;return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (reason,temp__4090__auto__,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.pred_name);
});})(reason,temp__4090__auto__,this$__$1))
)),reason));
} else
{return x;
}
});
;})(this$__$1))
});
schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_))
{return new cljs.core.Symbol(null,"Int","Int",-1640457848,null);
} else
{if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_))
{return new cljs.core.Symbol(null,"Keyword","Keyword",-790286462,null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-1637082150,null));
} else
{return null;
}
}
}
});
schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.Predicate{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",1013907777),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",3905755689),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",1013907777),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",3905755689),self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7460){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__7460,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",3905755689),null,new cljs.core.Keyword(null,"p?","p?",1013907777),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.Predicate.cljs$lang$type = true;
schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});
schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/Predicate");
});
schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){return (new schema.core.Predicate(p_QMARK_,pred_name));
});
schema.core.map__GT_Predicate = (function map__GT_Predicate(G__7462){return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",1013907777).cljs$core$IFn$_invoke$arity$1(G__7462),new cljs.core.Keyword(null,"pred-name","pred-name",3905755689).cljs$core$IFn$_invoke$arity$1(G__7462),null,cljs.core.dissoc.call(null,G__7462,new cljs.core.Keyword(null,"p?","p?",1013907777),new cljs.core.Keyword(null,"pred-name","pred-name",3905755689))));
});
/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){return pred.call(null,p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){if(cljs.core.ifn_QMARK_.call(null,p_QMARK_))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}
return (new schema.core.Predicate(p_QMARK_,pred_name));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){return new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Protocol = (function (p,__meta,__extmap){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7468,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7468,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7468,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7467){var self__ = this;
var this__4071__auto____$1 = this;var pred__7470 = cljs.core.keyword_identical_QMARK_;var expr__7471 = k__4072__auto__;if(cljs.core.truth_(pred__7470.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__7471)))
{return (new schema.core.Protocol(G__7467,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7467),null));
}
});
schema.core.Protocol.prototype.schema$core$Schema$ = true;
schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.truth_(new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,x)))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",396750295,null));
});})(this$__$1))
)),null));
}
});
;})(this$__$1))
});
schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",1665271889,null));
});
schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.Protocol{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7467){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.Protocol(self__.p,G__7467,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.Protocol.cljs$lang$type = true;
schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});
schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/Protocol");
});
schema.core.__GT_Protocol = (function __GT_Protocol(p){return (new schema.core.Protocol(p));
});
schema.core.map__GT_Protocol = (function map__GT_Protocol(G__7469){return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__7469),null,cljs.core.dissoc.call(null,G__7469,new cljs.core.Keyword(null,"p","p",1013904354))));
});
RegExp.prototype.schema$core$Schema$ = true;
RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(!(typeof x === 'string'))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"string?","string?",772676615,null));
});})(this$__$1))
)),null));
} else
{if(cljs.core.not.call(null,cljs.core.re_find.call(null,this$__$1,x)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",-608081204,null));
});})(this$__$1))
)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
});
;})(this$__$1))
});
RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice(1,-1)),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",-1070456710,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",-1117382353,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Maybe = (function (schema,__meta,__extmap){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7474,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7474,new cljs.core.Keyword(null,"schema","schema",4400883987)))
{return self__.schema;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7474,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7473){var self__ = this;
var this__4071__auto____$1 = this;var pred__7476 = cljs.core.keyword_identical_QMARK_;var expr__7477 = k__4072__auto__;if(cljs.core.truth_(pred__7476.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__7477)))
{return (new schema.core.Maybe(G__7473,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7473),null));
}
});
schema.core.Maybe.prototype.schema$core$Schema$ = true;
schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = schema.core.subschema_walker.call(null,self__.schema);return ((function (sub_walker,this$__$1){
return (function (x){if((x == null))
{return null;
} else
{return sub_walker.call(null,x);
}
});
;})(sub_walker,this$__$1))
});
schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",-1536858591,null));
});
schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.Maybe{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7473){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.Maybe(self__.schema,G__7473,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",4400883987),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.Maybe.cljs$lang$type = true;
schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});
schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/Maybe");
});
schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});
schema.core.map__GT_Maybe = (function map__GT_Maybe(G__7475){return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__7475),null,cljs.core.dissoc.call(null,G__7475,new cljs.core.Keyword(null,"schema","schema",4400883987))));
});
/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap){
this.schema = schema;
this.name = name;
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
schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7480,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7480,new cljs.core.Keyword(null,"schema","schema",4400883987)))
{return self__.schema;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7480,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7480,else__4067__auto__);
} else
{return null;
}
}
}
});
schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7479){var self__ = this;
var this__4071__auto____$1 = this;var pred__7482 = cljs.core.keyword_identical_QMARK_;var expr__7483 = k__4072__auto__;if(cljs.core.truth_(pred__7482.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__7483)))
{return (new schema.core.NamedSchema(G__7479,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7482.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__7483)))
{return (new schema.core.NamedSchema(self__.schema,G__7479,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7479),null));
}
}
});
schema.core.NamedSchema.prototype.schema$core$Schema$ = true;
schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = schema.core.subschema_walker.call(null,self__.schema);return ((function (sub_walker,this$__$1){
return (function (x){return schema.utils.wrap_error_name.call(null,self__.name,sub_walker.call(null,x));
});
;})(sub_walker,this$__$1))
});
schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",-1535946510,null));
});
schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.NamedSchema{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7479){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,G__7479,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"schema","schema",4400883987),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.NamedSchema.cljs$lang$type = true;
schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});
schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/NamedSchema");
});
schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});
schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__7481){return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__7481),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__7481),null,cljs.core.dissoc.call(null,G__7481,new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"name","name",1017277949))));
});
/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Either = (function (schemas,__meta,__extmap){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7486,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7486,new cljs.core.Keyword(null,"schemas","schemas",2931061348)))
{return self__.schemas;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7486,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7485){var self__ = this;
var this__4071__auto____$1 = this;var pred__7488 = cljs.core.keyword_identical_QMARK_;var expr__7489 = k__4072__auto__;if(cljs.core.truth_(pred__7488.call(null,new cljs.core.Keyword(null,"schemas","schemas",2931061348),expr__7489)))
{return (new schema.core.Either(G__7485,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7485),null));
}
});
schema.core.Either.prototype.schema$core$Schema$ = true;
schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){var sub_walkers__$1 = cljs.core.seq.call(null,sub_walkers);while(true){
if(cljs.core.not.call(null,sub_walkers__$1))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",276625579,null)),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"%","%",-1640531490,null)),new cljs.core.Symbol(null,"check","check",-1545904447,null))),new cljs.core.Symbol(null,"some","some",-1636995411,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
)),null));
} else
{var res = cljs.core.first.call(null,sub_walkers__$1).call(null,x);if(!(schema.utils.error_QMARK_.call(null,res)))
{return res;
} else
{{
var G__7491 = cljs.core.next.call(null,sub_walkers__$1);
sub_walkers__$1 = G__7491;
continue;
}
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});
schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",1351541374,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});
schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.Either{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",2931061348),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",2931061348),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7485){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.Either(self__.schemas,G__7485,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",2931061348),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.Either.cljs$lang$type = true;
schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});
schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/Either");
});
schema.core.__GT_Either = (function __GT_Either(schemas){return (new schema.core.Either(schemas));
});
schema.core.map__GT_Either = (function map__GT_Either(G__7487){return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",2931061348).cljs$core$IFn$_invoke$arity$1(G__7487),null,cljs.core.dissoc.call(null,G__7487,new cljs.core.Keyword(null,"schemas","schemas",2931061348))));
});
/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){return (new schema.core.Either(schemas));
};
var either = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__7492){
var schemas = cljs.core.seq(arglist__7492);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Both = (function (schemas,__meta,__extmap){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7494,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7494,new cljs.core.Keyword(null,"schemas","schemas",2931061348)))
{return self__.schemas;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7494,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7493){var self__ = this;
var this__4071__auto____$1 = this;var pred__7496 = cljs.core.keyword_identical_QMARK_;var expr__7497 = k__4072__auto__;if(cljs.core.truth_(pred__7496.call(null,new cljs.core.Keyword(null,"schemas","schemas",2931061348),expr__7497)))
{return (new schema.core.Both(G__7493,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7493),null));
}
});
schema.core.Both.prototype.schema$core$Schema$ = true;
schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){return cljs.core.reduce.call(null,((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){if(schema.utils.error_QMARK_.call(null,x__$1))
{return x__$1;
} else
{return sub_walker.call(null,x__$1);
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});
schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",-1637501638,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});
schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.Both{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",2931061348),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",2931061348),self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7493){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.Both(self__.schemas,G__7493,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",2931061348),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.Both.cljs$lang$type = true;
schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});
schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/Both");
});
schema.core.__GT_Both = (function __GT_Both(schemas){return (new schema.core.Both(schemas));
});
schema.core.map__GT_Both = (function map__GT_Both(G__7495){return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",2931061348).cljs$core$IFn$_invoke$arity$1(G__7495),null,cljs.core.dissoc.call(null,G__7495,new cljs.core.Keyword(null,"schemas","schemas",2931061348))));
});
/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){return (new schema.core.Both(schemas));
};
var both = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__7499){
var schemas = cljs.core.seq(arglist__7499);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7501,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7501,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275)))
{return self__.preds_and_schemas;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7501,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7500){var self__ = this;
var this__4071__auto____$1 = this;var pred__7503 = cljs.core.keyword_identical_QMARK_;var expr__7504 = k__4072__auto__;if(cljs.core.truth_(pred__7503.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275),expr__7504)))
{return (new schema.core.ConditionalSchema(G__7500,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7500),null));
}
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;
schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var preds_and_walkers = cljs.core.mapv.call(null,((function (this$__$1){
return (function (p__7506){var vec__7507 = p__7506;var pred = cljs.core.nth.call(null,vec__7507,0,null);var schema__$1 = cljs.core.nth.call(null,vec__7507,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.subschema_walker.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas);return ((function (preds_and_walkers,this$__$1){
return (function (x){var temp__4090__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (preds_and_walkers,this$__$1){
return (function (p__7508){var vec__7509 = p__7508;var pred = cljs.core.nth.call(null,vec__7509,0,null);return pred.call(null,x);
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));if(cljs.core.truth_(temp__4090__auto__))
{var vec__7510 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__7510,0,null);var match = cljs.core.nth.call(null,vec__7510,1,null);return match.call(null,x);
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (temp__4090__auto__,preds_and_walkers,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",1290930716,null));
});})(temp__4090__auto__,preds_and_walkers,this$__$1))
)),null));
}
});
;})(preds_and_walkers,this$__$1))
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-432400321,null),cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__7511){var vec__7512 = p__7511;var pred = cljs.core.nth.call(null,vec__7512,0,null);var schema__$1 = cljs.core.nth.call(null,vec__7512,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas));
});
schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275),self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7500){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__7500,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.ConditionalSchema.cljs$lang$type = true;
schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});
schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/ConditionalSchema");
});
schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){return (new schema.core.ConditionalSchema(preds_and_schemas));
});
schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__7502){return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275).cljs$core$IFn$_invoke$arity$1(G__7502),null,cljs.core.dissoc.call(null,G__7502,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",684368275))));
});
/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){if((cljs.core.seq.call(null,preds_and_schemas)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args; got %s",cljs.core.count.call(null,preds_and_schemas))));
}
return (new schema.core.ConditionalSchema((function (){var iter__4195__auto__ = (function iter__7521(s__7522){return (new cljs.core.LazySeq(null,(function (){var s__7522__$1 = s__7522;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7522__$1);if(temp__4092__auto__)
{var s__7522__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7522__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__7522__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__7524 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__7523 = 0;while(true){
if((i__7523 < size__4194__auto__))
{var vec__7527 = cljs.core._nth.call(null,c__4193__auto__,i__7523);var pred = cljs.core.nth.call(null,vec__7527,0,null);var schema__$1 = cljs.core.nth.call(null,vec__7527,1,null);cljs.core.chunk_append.call(null,b__7524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",1017020587)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));
{
var G__7529 = (i__7523 + 1);
i__7523 = G__7529;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7524),iter__7521.call(null,cljs.core.chunk_rest.call(null,s__7522__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7524),null);
}
} else
{var vec__7528 = cljs.core.first.call(null,s__7522__$2);var pred = cljs.core.nth.call(null,vec__7528,0,null);var schema__$1 = cljs.core.nth.call(null,vec__7528,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",1017020587)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),iter__7521.call(null,cljs.core.rest.call(null,s__7522__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4195__auto__.call(null,cljs.core.partition.call(null,2,preds_and_schemas));
})()));
};
var conditional = function (var_args){
var preds_and_schemas = null;if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__7530){
var preds_and_schemas = cljs.core.seq(arglist__7530);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = new cljs.core.Keyword("schema.core","missing","schema.core/missing",1882142615);

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.RequiredKey = (function (k,__meta,__extmap){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7532,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7532,new cljs.core.Keyword(null,"k","k",1013904349)))
{return self__.k;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7532,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7531){var self__ = this;
var this__4071__auto____$1 = this;var pred__7534 = cljs.core.keyword_identical_QMARK_;var expr__7535 = k__4072__auto__;if(cljs.core.truth_(pred__7534.call(null,new cljs.core.Keyword(null,"k","k",1013904349),expr__7535)))
{return (new schema.core.RequiredKey(G__7531,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7531),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.RequiredKey{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",1013904349),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",1013904349),self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7531){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,G__7531,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",1013904349),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.RequiredKey.cljs$lang$type = true;
schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});
schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/RequiredKey");
});
schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){return (new schema.core.RequiredKey(k));
});
schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__7533){return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",1013904349).cljs$core$IFn$_invoke$arity$1(G__7533),null,cljs.core.dissoc.call(null,G__7533,new cljs.core.Keyword(null,"k","k",1013904349))));
});
/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){if((k instanceof cljs.core.Keyword))
{return k;
} else
{return (new schema.core.RequiredKey(k));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.OptionalKey = (function (k,__meta,__extmap){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7538,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7538,new cljs.core.Keyword(null,"k","k",1013904349)))
{return self__.k;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7538,else__4067__auto__);
} else
{return null;
}
}
});
schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7537){var self__ = this;
var this__4071__auto____$1 = this;var pred__7540 = cljs.core.keyword_identical_QMARK_;var expr__7541 = k__4072__auto__;if(cljs.core.truth_(pred__7540.call(null,new cljs.core.Keyword(null,"k","k",1013904349),expr__7541)))
{return (new schema.core.OptionalKey(G__7537,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7537),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.OptionalKey{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",1013904349),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",1013904349),self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7537){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,G__7537,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",1013904349),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.OptionalKey.cljs$lang$type = true;
schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});
schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/OptionalKey");
});
schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){return (new schema.core.OptionalKey(k));
});
schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__7539){return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",1013904349).cljs$core$IFn$_invoke$arity$1(G__7539),null,cljs.core.dissoc.call(null,G__7539,new cljs.core.Keyword(null,"k","k",1013904349))));
});
/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){return (new schema.core.OptionalKey(k));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){if((ks instanceof cljs.core.Keyword))
{return ks;
} else
{if((ks instanceof schema.core.RequiredKey))
{return ks.k;
} else
{if(schema.core.optional_key_QMARK_.call(null,ks))
{return ks.k;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));
} else
{return null;
}
}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){return (schema.core.required_key_QMARK_.call(null,ks)) || (schema.core.optional_key_QMARK_.call(null,ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){if(schema.core.specific_key_QMARK_.call(null,kspec))
{if((kspec instanceof cljs.core.Keyword))
{return kspec;
} else
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),((schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1024577770,null):((schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",180561963,null):null)));
}
} else
{return schema.core.explain.call(null,kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap){
this.kspec = kspec;
this.val_schema = val_schema;
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
schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7544,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7544,new cljs.core.Keyword(null,"kspec","kspec",1116257816)))
{return self__.kspec;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7544,new cljs.core.Keyword(null,"val-schema","val-schema",3985618239)))
{return self__.val_schema;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7544,else__4067__auto__);
} else
{return null;
}
}
}
});
schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7543){var self__ = this;
var this__4071__auto____$1 = this;var pred__7546 = cljs.core.keyword_identical_QMARK_;var expr__7547 = k__4072__auto__;if(cljs.core.truth_(pred__7546.call(null,new cljs.core.Keyword(null,"kspec","kspec",1116257816),expr__7547)))
{return (new schema.core.MapEntry(G__7543,self__.val_schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7546.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",3985618239),expr__7547)))
{return (new schema.core.MapEntry(self__.kspec,G__7543,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7543),null));
}
}
});
schema.core.MapEntry.prototype.schema$core$Schema$ = true;
schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var val_walker = schema.core.subschema_walker.call(null,self__.val_schema);if(schema.core.specific_key_QMARK_.call(null,self__.kspec))
{var optional_QMARK_ = schema.core.optional_key_QMARK_.call(null,self__.kspec);var k = schema.core.explicit_schema_key.call(null,self__.kspec);return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){if((schema.core._PLUS_missing_PLUS_ === x))
{if(optional_QMARK_)
{return null;
} else
{return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null)], null));
}
} else
{if(!(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,x))))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"count","count",-1545680184,null))),2),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__7549 = x;var xk = cljs.core.nth.call(null,vec__7549,0,null);var xv = cljs.core.nth.call(null,vec__7549,1,null);if(cljs.core._EQ_.call(null,xk,k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"xk","xk",-1640527700,null),new cljs.core.Symbol(null,"k","k",-1640531420,null))))].join('')));
}
var vres = val_walker.call(null,xv);var temp__4090__auto__ = schema.utils.error_val.call(null,vres);if(cljs.core.truth_(temp__4090__auto__))
{var ve = temp__4090__auto__;return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}
} else
{return null;
}
}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else
{var key_walker = schema.core.subschema_walker.call(null,self__.kspec);return ((function (key_walker,val_walker,this$__$1){
return (function (x){if(!(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,x))))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (key_walker,val_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"count","count",-1545680184,null))),2),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
)),null));
} else
{var out_k = key_walker.call(null,cljs.core.key.call(null,x));var out_ke = schema.utils.error_val.call(null,out_k);var out_v = val_walker.call(null,cljs.core.val.call(null,x));var out_ve = schema.utils.error_val.call(null,out_v);if(cljs.core.truth_((function (){var or__3478__auto__ = out_ke;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return out_ve;
}
})()))
{return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3478__auto__ = out_ke;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.key.call(null,x);
}
})(),(function (){var or__3478__auto__ = out_ve;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return new cljs.core.Symbol(null,"invalid-key","invalid-key",1700113218,null);
}
})()], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});
schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain_kspec.call(null,self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",-1829517702,null));
});
schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.MapEntry{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",1116257816),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",3985618239),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",1116257816),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",3985618239),self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7543){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__7543,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val-schema","val-schema",3985618239),null,new cljs.core.Keyword(null,"kspec","kspec",1116257816),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.MapEntry.cljs$lang$type = true;
schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});
schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/MapEntry");
});
schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__7545){return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",1116257816).cljs$core$IFn$_invoke$arity$1(G__7545),new cljs.core.Keyword(null,"val-schema","val-schema",3985618239).cljs$core$IFn$_invoke$arity$1(G__7545),null,cljs.core.dissoc.call(null,G__7545,new cljs.core.Keyword(null,"kspec","kspec",1116257816),new cljs.core.Keyword(null,"val-schema","val-schema",3985618239))));
});
schema.core.map_entry = (function map_entry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));if((cljs.core.count.call(null,key_schemata) < 2))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}
return cljs.core.first.call(null,key_schemata);
});
schema.core.map_walker = (function map_walker(map_schema){var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,map_schema);var extra_walker = (cljs.core.truth_(extra_keys_schema)?schema.core.subschema_walker.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,map_schema,extra_keys_schema))):null);var explicit_schema = cljs.core.dissoc.call(null,map_schema,extra_keys_schema);var explicit_walkers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4195__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__7562(s__7563){return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){var s__7563__$1 = s__7563;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7563__$1);if(temp__4092__auto__)
{var s__7563__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7563__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__7563__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__7565 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__7564 = 0;while(true){
if((i__7564 < size__4194__auto__))
{var vec__7568 = cljs.core._nth.call(null,c__4193__auto__,i__7564);var k = cljs.core.nth.call(null,vec__7568,0,null);var v = cljs.core.nth.call(null,vec__7568,1,null);cljs.core.chunk_append.call(null,b__7565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null));
{
var G__7573 = (i__7564 + 1);
i__7564 = G__7573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7565),iter__7562.call(null,cljs.core.chunk_rest.call(null,s__7563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7565),null);
}
} else
{var vec__7569 = cljs.core.first.call(null,s__7563__$2);var k = cljs.core.nth.call(null,vec__7569,0,null);var v = cljs.core.nth.call(null,vec__7569,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null),iter__7562.call(null,cljs.core.rest.call(null,s__7563__$2)));
}
} else
{return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;return iter__4195__auto__.call(null,explicit_schema);
})());var err_conj = schema.utils.result_builder.call(null,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,explicit_schema),cljs.core.count.call(null,explicit_walkers)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__7550_SHARP_){return (cljs.core.count.call(null,p1__7550_SHARP_) > 1);
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,explicit_schema)))))))));
}
return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){if(!(cljs.core.map_QMARK_.call(null,x)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,map_schema,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"map?","map?",-1637187556,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
)),null));
} else
{var x__$1 = x;var explicit_walkers__$1 = cljs.core.seq.call(null,explicit_walkers);var out = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.not.call(null,explicit_walkers__$1))
{return cljs.core.reduce.call(null,(cljs.core.truth_(extra_walker)?((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){return err_conj.call(null,out__$1,extra_walker.call(null,e));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__7570){var vec__7571 = p__7570;var k = cljs.core.nth.call(null,vec__7571,0,null);var _ = cljs.core.nth.call(null,vec__7571,1,null);return err_conj.call(null,out__$1,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",2071998757,null)], null)));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,x__$1);
} else
{var vec__7572 = cljs.core.first.call(null,explicit_walkers__$1);var wk = cljs.core.nth.call(null,vec__7572,0,null);var wv = cljs.core.nth.call(null,vec__7572,1,null);{
var G__7574 = cljs.core.dissoc.call(null,x__$1,wk);
var G__7575 = cljs.core.next.call(null,explicit_walkers__$1);
var G__7576 = err_conj.call(null,out,wv.call(null,(function (){var or__3478__auto__ = cljs.core.find.call(null,x__$1,wk);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return schema.core._PLUS_missing_PLUS_;
}
})()));
x__$1 = G__7574;
explicit_walkers__$1 = G__7575;
out = G__7576;
continue;
}
}
break;
}
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4195__auto__ = (function iter__7585(s__7586){return (new cljs.core.LazySeq(null,(function (){var s__7586__$1 = s__7586;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7586__$1);if(temp__4092__auto__)
{var s__7586__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7586__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__7586__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__7588 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__7587 = 0;while(true){
if((i__7587 < size__4194__auto__))
{var vec__7591 = cljs.core._nth.call(null,c__4193__auto__,i__7587);var k = cljs.core.nth.call(null,vec__7591,0,null);var v = cljs.core.nth.call(null,vec__7591,1,null);cljs.core.chunk_append.call(null,b__7588,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))));
{
var G__7593 = (i__7587 + 1);
i__7587 = G__7593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7588),iter__7585.call(null,cljs.core.chunk_rest.call(null,s__7586__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7588),null);
}
} else
{var vec__7592 = cljs.core.first.call(null,s__7586__$2);var k = cljs.core.nth.call(null,vec__7592,0,null);var v = cljs.core.nth.call(null,vec__7592,1,null);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))),iter__7585.call(null,cljs.core.rest.call(null,s__7586__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4195__auto__.call(null,this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker.call(null,this$__$1);
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker.call(null,this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),1))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}
var sub_walker = schema.core.subschema_walker.call(null,cljs.core.first.call(null,this$__$1));return ((function (sub_walker,this$__$1){
return (function (x){var or__3478__auto__ = ((cljs.core.set_QMARK_.call(null,x))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (sub_walker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"set?","set?",-1637004842,null));
});})(sub_walker,this$__$1))
)),null)));if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{var vec__7594 = cljs.core.juxt.call(null,cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.call(null,sub_walker,x));var good = cljs.core.nth.call(null,vec__7594,0,null);var bad = cljs.core.nth.call(null,vec__7594,1,null);if(cljs.core.seq.call(null,bad))
{return schema.utils.error.call(null,cljs.core.set.call(null,bad));
} else
{return cljs.core.set.call(null,good);
}
}
});
;})(sub_walker,this$__$1))
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7596,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7596,new cljs.core.Keyword(null,"schema","schema",4400883987)))
{return self__.schema;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7596,new cljs.core.Keyword(null,"optional?","optional?",2859340881)))
{return self__.optional_QMARK_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7596,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7596,else__4067__auto__);
} else
{return null;
}
}
}
}
});
schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7595){var self__ = this;
var this__4071__auto____$1 = this;var pred__7598 = cljs.core.keyword_identical_QMARK_;var expr__7599 = k__4072__auto__;if(cljs.core.truth_(pred__7598.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__7599)))
{return (new schema.core.One(G__7595,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7598.call(null,new cljs.core.Keyword(null,"optional?","optional?",2859340881),expr__7599)))
{return (new schema.core.One(self__.schema,G__7595,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7598.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__7599)))
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__7595,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7595),null));
}
}
}
});
schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.One{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",2859340881),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",2859340881),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7595){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__7595,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional?","optional?",2859340881),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"schema","schema",4400883987),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.One.cljs$lang$type = true;
schema.core.One.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});
schema.core.One.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/One");
});
schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){return (new schema.core.One(schema__$1,optional_QMARK_,name));
});
schema.core.map__GT_One = (function map__GT_One(G__7597){return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__7597),new cljs.core.Keyword(null,"optional?","optional?",2859340881).cljs$core$IFn$_invoke$arity$1(G__7597),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__7597),null,cljs.core.dissoc.call(null,G__7597,new cljs.core.Keyword(null,"schema","schema",4400883987),new cljs.core.Keyword(null,"optional?","optional?",2859340881),new cljs.core.Keyword(null,"name","name",1017277949))));
});
/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){return (new schema.core.One(schema__$1,false,name));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){return (new schema.core.One(schema__$1,true,name));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){var vec__7606 = cljs.core.split_with.call(null,(function (p1__7601_SHARP_){return ((p1__7601_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",2859340881).cljs$core$IFn$_invoke$arity$1(p1__7601_SHARP_)));
}),s);var required = cljs.core.nth.call(null,vec__7606,0,null);var more = cljs.core.nth.call(null,vec__7606,1,null);var vec__7607 = cljs.core.split_with.call(null,((function (vec__7606,required,more){
return (function (p1__7602_SHARP_){var and__3466__auto__ = (p1__7602_SHARP_ instanceof schema.core.One);if(and__3466__auto__)
{return new cljs.core.Keyword(null,"optional?","optional?",2859340881).cljs$core$IFn$_invoke$arity$1(p1__7602_SHARP_);
} else
{return and__3466__auto__;
}
});})(vec__7606,required,more))
,more);var optional = cljs.core.nth.call(null,vec__7607,0,null);var more__$1 = cljs.core.nth.call(null,vec__7607,1,null);if(((cljs.core.count.call(null,more__$1) <= 1)) && (cljs.core.every_QMARK_.call(null,((function (vec__7606,required,more,vec__7607,optional,more__$1){
return (function (p1__7603_SHARP_){return !((p1__7603_SHARP_ instanceof schema.core.One));
});})(vec__7606,required,more,vec__7607,optional,more__$1))
,more__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;
cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var vec__7608 = schema.core.parse_sequence_schema.call(null,this$__$1);var singles = cljs.core.nth.call(null,vec__7608,0,null);var multi = cljs.core.nth.call(null,vec__7608,1,null);var single_walkers = cljs.core.vec.call(null,(function (){var iter__4195__auto__ = ((function (vec__7608,singles,multi,this$__$1){
return (function iter__7609(s__7610){return (new cljs.core.LazySeq(null,((function (vec__7608,singles,multi,this$__$1){
return (function (){var s__7610__$1 = s__7610;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7610__$1);if(temp__4092__auto__)
{var s__7610__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7610__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__7610__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__7612 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__7611 = 0;while(true){
if((i__7611 < size__4194__auto__))
{var s = cljs.core._nth.call(null,c__4193__auto__,i__7611);cljs.core.chunk_append.call(null,b__7612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null));
{
var G__7627 = (i__7611 + 1);
i__7611 = G__7627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7612),iter__7609.call(null,cljs.core.chunk_rest.call(null,s__7610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7612),null);
}
} else
{var s = cljs.core.first.call(null,s__7610__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null),iter__7609.call(null,cljs.core.rest.call(null,s__7610__$2)));
}
} else
{return null;
}
break;
}
});})(vec__7608,singles,multi,this$__$1))
,null,null));
});})(vec__7608,singles,multi,this$__$1))
;return iter__4195__auto__.call(null,singles);
})());var multi_walker = (cljs.core.truth_(multi)?schema.core.subschema_walker.call(null,multi):null);var err_conj = schema.utils.result_builder.call(null,((function (vec__7608,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,m),null));
});})(vec__7608,singles,multi,single_walkers,multi_walker,this$__$1))
);return ((function (vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){var or__3478__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"sequential?","sequential?",1865038041,null));
});})(vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
)),null)));if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{var single_walkers__$1 = single_walkers;var x__$1 = x;var out = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4090__auto__ = cljs.core.first.call(null,single_walkers__$1);if(cljs.core.truth_(temp__4090__auto__))
{var vec__7613 = temp__4090__auto__;var first_single = cljs.core.nth.call(null,vec__7613,0,null);var single_walker = cljs.core.nth.call(null,vec__7613,1,null);if(cljs.core.empty_QMARK_.call(null,x__$1))
{if(cljs.core.truth_(first_single.optional_QMARK_))
{return out;
} else
{return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (single_walkers__$1,x__$1,out,vec__7613,first_single,single_walker,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"present?","present?",1377769629,null),(function (){var iter__4195__auto__ = ((function (single_walkers__$1,x__$1,out,vec__7613,first_single,single_walker,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__7614(s__7615){return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,vec__7613,first_single,single_walker,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){var s__7615__$1 = s__7615;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7615__$1);if(temp__4092__auto__)
{var s__7615__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7615__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__7615__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__7617 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__7616 = 0;while(true){
if((i__7616 < size__4194__auto__))
{var vec__7620 = cljs.core._nth.call(null,c__4193__auto__,i__7616);var single = cljs.core.nth.call(null,vec__7620,0,null);if(cljs.core.not.call(null,single.optional_QMARK_))
{cljs.core.chunk_append.call(null,b__7617,single.name);
{
var G__7628 = (i__7616 + 1);
i__7616 = G__7628;
continue;
}
} else
{return null;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7617),iter__7614.call(null,cljs.core.chunk_rest.call(null,s__7615__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7617),null);
}
} else
{var vec__7621 = cljs.core.first.call(null,s__7615__$2);var single = cljs.core.nth.call(null,vec__7621,0,null);if(cljs.core.not.call(null,single.optional_QMARK_))
{return cljs.core.cons.call(null,single.name,iter__7614.call(null,cljs.core.rest.call(null,s__7615__$2)));
} else
{return null;
}
}
} else
{return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,vec__7613,first_single,single_walker,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,vec__7613,first_single,single_walker,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;return iter__4195__auto__.call(null,single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,vec__7613,first_single,single_walker,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
)),null)));
}
} else
{{
var G__7629 = cljs.core.next.call(null,single_walkers__$1);
var G__7630 = cljs.core.rest.call(null,x__$1);
var G__7631 = err_conj.call(null,out,schema.utils.wrap_error_name.call(null,first_single.name,single_walker.call(null,cljs.core.first.call(null,x__$1))));
single_walkers__$1 = G__7629;
x__$1 = G__7630;
out = G__7631;
continue;
}
}
} else
{if(cljs.core.truth_(multi))
{return cljs.core.reduce.call(null,err_conj,out,cljs.core.map.call(null,multi_walker,x__$1));
} else
{if(cljs.core.seq.call(null,x__$1))
{return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,null,x__$1,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (single_walkers__$1,x__$1,out,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",1127383714,null));
});})(single_walkers__$1,x__$1,out,temp__4090__auto__,or__3478__auto__,vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
)),null)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return out;
} else
{return null;
}
}
}
}
break;
}
}
});
;})(vec__7608,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});
cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var vec__7622 = schema.core.parse_sequence_schema.call(null,this$__$1);var singles = cljs.core.nth.call(null,vec__7622,0,null);var multi = cljs.core.nth.call(null,vec__7622,1,null);return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4195__auto__ = ((function (vec__7622,singles,multi,this$__$1){
return (function iter__7623(s__7624){return (new cljs.core.LazySeq(null,((function (vec__7622,singles,multi,this$__$1){
return (function (){var s__7624__$1 = s__7624;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7624__$1);if(temp__4092__auto__)
{var s__7624__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7624__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__7624__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__7626 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__7625 = 0;while(true){
if((i__7625 < size__4194__auto__))
{var s = cljs.core._nth.call(null,c__4193__auto__,i__7625);cljs.core.chunk_append.call(null,b__7626,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-1719548647,null):new cljs.core.Symbol(null,"one","one",-1640421345,null))));
{
var G__7632 = (i__7625 + 1);
i__7625 = G__7632;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7626),iter__7623.call(null,cljs.core.chunk_rest.call(null,s__7624__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7626),null);
}
} else
{var s = cljs.core.first.call(null,s__7624__$2);return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-1719548647,null):new cljs.core.Symbol(null,"one","one",-1640421345,null))),iter__7623.call(null,cljs.core.rest.call(null,s__7624__$2)));
}
} else
{return null;
}
break;
}
});})(vec__7622,singles,multi,this$__$1))
,null,null));
});})(vec__7622,singles,multi,this$__$1))
;return iter__4195__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Record = (function (klass,schema,__meta,__extmap){
this.klass = klass;
this.schema = schema;
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
schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7634,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7634,new cljs.core.Keyword(null,"klass","klass",1116035314)))
{return self__.klass;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7634,new cljs.core.Keyword(null,"schema","schema",4400883987)))
{return self__.schema;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7634,else__4067__auto__);
} else
{return null;
}
}
}
});
schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7633){var self__ = this;
var this__4071__auto____$1 = this;var pred__7636 = cljs.core.keyword_identical_QMARK_;var expr__7637 = k__4072__auto__;if(cljs.core.truth_(pred__7636.call(null,new cljs.core.Keyword(null,"klass","klass",1116035314),expr__7637)))
{return (new schema.core.Record(G__7633,self__.schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7636.call(null,new cljs.core.Keyword(null,"schema","schema",4400883987),expr__7637)))
{return (new schema.core.Record(self__.klass,G__7633,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7633),null));
}
}
});
schema.core.Record.prototype.schema$core$Schema$ = true;
schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_checker = schema.core.subschema_walker.call(null,self__.schema);var pred_checker = (function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",2525540146).cljs$core$IFn$_invoke$arity$1(this$__$1);if(cljs.core.truth_(temp__4092__auto__))
{var evf = temp__4092__auto__;return schema.core.subschema_walker.call(null,schema.core.pred.call(null,evf));
} else
{return null;
}
})();return ((function (map_checker,pred_checker,this$__$1){
return (function (r){var or__3478__auto__ = (((r instanceof self__.klass))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,r,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (map_checker,pred_checker,this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null));
});})(map_checker,pred_checker,this$__$1))
)),null)));if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{var res = map_checker.call(null,r);if(schema.utils.error_QMARK_.call(null,res))
{return res;
} else
{var pred_res = (cljs.core.truth_(pred_checker)?pred_checker.call(null,r):null);if(schema.utils.error_QMARK_.call(null,pred_res))
{return pred_res;
} else
{return cljs.core.merge.call(null,r,res);
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});
schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",1719526922,null));
});
schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.Record{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",1116035314),self__.klass],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",1116035314),self__.klass],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",4400883987),self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7633){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,G__7633,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"klass","klass",1116035314),null,new cljs.core.Keyword(null,"schema","schema",4400883987),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.Record.cljs$lang$type = true;
schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});
schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/Record");
});
schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){return (new schema.core.Record(klass,schema__$1));
});
schema.core.map__GT_Record = (function map__GT_Record(G__7635){return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",1116035314).cljs$core$IFn$_invoke$arity$1(G__7635),new cljs.core.Keyword(null,"schema","schema",4400883987).cljs$core$IFn$_invoke$arity$1(G__7635),null,cljs.core.dissoc.call(null,G__7635,new cljs.core.Keyword(null,"klass","klass",1116035314),new cljs.core.Keyword(null,"schema","schema",4400883987))));
});
/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){if(cljs.core.map_QMARK_.call(null,schema__$1))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}
return (new schema.core.Record(klass,schema__$1));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){var vec__7642 = cljs.core.split_with.call(null,(function (p1__7639_SHARP_){return (p1__7639_SHARP_ instanceof schema.core.One);
}),input_schema);var required = cljs.core.nth.call(null,vec__7642,0,null);var more = cljs.core.nth.call(null,vec__7642,1,null);return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__7642,required,more){
return (function (p1__7640_SHARP_){return schema.core.explain.call(null,p1__7640_SHARP_.schema);
});})(vec__7642,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-1640531489,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
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
schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k7644,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7644,new cljs.core.Keyword(null,"output-schema","output-schema",1859815263)))
{return self__.output_schema;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7644,new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529)))
{return self__.input_schemas;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7644,else__4067__auto__);
} else
{return null;
}
}
}
});
schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__7643){var self__ = this;
var this__4071__auto____$1 = this;var pred__7646 = cljs.core.keyword_identical_QMARK_;var expr__7647 = k__4072__auto__;if(cljs.core.truth_(pred__7646.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",1859815263),expr__7647)))
{return (new schema.core.FnSchema(G__7643,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7646.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529),expr__7647)))
{return (new schema.core.FnSchema(self__.output_schema,G__7643,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__7643),null));
}
}
});
schema.core.FnSchema.prototype.schema$core$Schema$ = true;
schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.fn_QMARK_.call(null,x))
{return x;
} else
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (this$__$1){
return (function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null));
});})(this$__$1))
)),null));
}
});
;})(this$__$1))
});
schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.input_schemas) > 1))
{return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",-1640470942,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else
{return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-1640529574,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});
schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#schema.core.FnSchema{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",1859815263),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",1859815263),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529),self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__7643){var self__ = this;
var this__4063__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__7643,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",1859815263),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
schema.core.FnSchema.cljs$lang$type = true;
schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});
schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"schema.core/FnSchema");
});
schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){return (new schema.core.FnSchema(output_schema,input_schemas));
});
schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__7645){return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",1859815263).cljs$core$IFn$_invoke$arity$1(G__7645),new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529).cljs$core$IFn$_invoke$arity$1(G__7645),null,cljs.core.dissoc.call(null,G__7645,new cljs.core.Keyword(null,"output-schema","output-schema",1859815263),new cljs.core.Keyword(null,"input-schemas","input-schemas",4496114529))));
});
schema.core.arity = (function arity(input_schema){if(cljs.core.seq.call(null,input_schema))
{if((cljs.core.last.call(null,input_schema) instanceof schema.core.One))
{return cljs.core.count.call(null,input_schema);
} else
{return Number.MAX_VALUE;
}
} else
{return 0;
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regargless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){if(cljs.core.seq.call(null,input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}
return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas)));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",4400883987),schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){if(cljs.core.fn_QMARK_.call(null,f))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}
var or__3478__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{var m__6995__auto__ = cljs.core.meta.call(null,f);var k__6996__auto__ = new cljs.core.Keyword(null,"schema","schema",4400883987);var temp__4090__auto__ = cljs.core.find.call(null,m__6995__auto__,k__6996__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__6997__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__6997__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__6996__auto__,m__6995__auto__)));
}
}
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){return cljs.core.with_meta.call(null,schema__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});

//# sourceMappingURL=core.js.map