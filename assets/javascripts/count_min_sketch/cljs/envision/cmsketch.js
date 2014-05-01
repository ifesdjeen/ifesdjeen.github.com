// Compiled by ClojureScript 0.0-2197
goog.provide('envision.cmsketch');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('envision.sha1');
goog.require('envision.sha1');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
envision.cmsketch.eps = 0.06;
envision.cmsketch.confidence = 1.0E-6;
envision.cmsketch.round = (function round(v){return Math.round(v);
});
envision.cmsketch.depth = (function depth(confidence){return envision.cmsketch.round.call(null,Math.log((1 / confidence)));
});
envision.cmsketch.width = (function width(eps){return envision.cmsketch.round.call(null,(Math.E / eps));
});
envision.cmsketch.make_sketch = (function make_sketch(){var depth = envision.cmsketch.depth.call(null,envision.cmsketch.confidence);var width = envision.cmsketch.width.call(null,envision.cmsketch.eps);return cljs.core.with_meta.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,depth,cljs.core.vec.call(null,cljs.core.repeat.call(null,width,0)))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"depth","depth",1109376565),depth,new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"eps","eps",1014004890),envision.cmsketch.eps,new cljs.core.Keyword(null,"confidence","confidence",1843155452),envision.cmsketch.confidence], null));
});
envision.cmsketch.sketch_state = reagent.core.atom.call(null,envision.cmsketch.make_sketch.call(null));
envision.cmsketch.current_word = reagent.core.atom.call(null,"");
envision.cmsketch.active_positions_state = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
envision.cmsketch.positions = (function positions(sketch,val){var map__4985 = cljs.core.meta.call(null,sketch);var map__4985__$1 = ((cljs.core.seq_QMARK_.call(null,map__4985))?cljs.core.apply.call(null,cljs.core.hash_map,map__4985):map__4985);var width = cljs.core.get.call(null,map__4985__$1,new cljs.core.Keyword(null,"width","width",1127031096));var depth = cljs.core.get.call(null,map__4985__$1,new cljs.core.Keyword(null,"depth","depth",1109376565));var iter__4195__auto__ = ((function (map__4985,map__4985__$1,width,depth){
return (function iter__4986(s__4987){return (new cljs.core.LazySeq(null,((function (map__4985,map__4985__$1,width,depth){
return (function (){var s__4987__$1 = s__4987;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4987__$1);if(temp__4092__auto__)
{var s__4987__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4987__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__4987__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__4989 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__4988 = 0;while(true){
if((i__4988 < size__4194__auto__))
{var i = cljs.core._nth.call(null,c__4193__auto__,i__4988);cljs.core.chunk_append.call(null,b__4989,envision.cmsketch.round.call(null,cljs.core.mod.call(null,(envision.sha1.sha1.call(null,val) / (i + 1)),(width - 1))));
{
var G__4990 = (i__4988 + 1);
i__4988 = G__4990;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4989),iter__4986.call(null,cljs.core.chunk_rest.call(null,s__4987__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4989),null);
}
} else
{var i = cljs.core.first.call(null,s__4987__$2);return cljs.core.cons.call(null,envision.cmsketch.round.call(null,cljs.core.mod.call(null,(envision.sha1.sha1.call(null,val) / (i + 1)),(width - 1))),iter__4986.call(null,cljs.core.rest.call(null,s__4987__$2)));
}
} else
{return null;
}
break;
}
});})(map__4985,map__4985__$1,width,depth))
,null,null));
});})(map__4985,map__4985__$1,width,depth))
;return iter__4195__auto__.call(null,cljs.core.range.call(null,0,depth));
});
envision.cmsketch.cm_sketch_add = (function cm_sketch_add(sketch,val){var map__4994 = cljs.core.meta.call(null,sketch);var map__4994__$1 = ((cljs.core.seq_QMARK_.call(null,map__4994))?cljs.core.apply.call(null,cljs.core.hash_map,map__4994):map__4994);var deoth = cljs.core.get.call(null,map__4994__$1,new cljs.core.Keyword(null,"deoth","deoth",1109375604));var width = cljs.core.get.call(null,map__4994__$1,new cljs.core.Keyword(null,"width","width",1127031096));var positions = envision.cmsketch.positions.call(null,sketch,val);return cljs.core.reduce.call(null,((function (map__4994,map__4994__$1,deoth,width,positions){
return (function (acc,p__4995){var vec__4996 = p__4995;var i = cljs.core.nth.call(null,vec__4996,0,null);var j = cljs.core.nth.call(null,vec__4996,1,null);return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),cljs.core.inc);
});})(map__4994,map__4994__$1,deoth,width,positions))
,sketch,envision.cmsketch.with_index.call(null,positions));
});
envision.cmsketch.with_index = (function with_index(v){return cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),v);
});
envision.cmsketch.todo_app = (function todo_app(props){return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",3533945175),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",1370565925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",2138738794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (e){cljs.core.reset_BANG_.call(null,envision.cmsketch.current_word,e.target.value);
return null;
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",1370565925),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.sr-only","label.sr-only",3867387090)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",3871499702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return cljs.core.swap_BANG_.call(null,envision.cmsketch.sketch_state,(function (p1__4997_SHARP_){return envision.cmsketch.cm_sketch_add.call(null,p1__4997_SHARP_,cljs.core.deref.call(null,envision.cmsketch.current_word));
}));
})], null),"Add"], null)], null),(function (){var st = cljs.core.deref.call(null,envision.cmsketch.sketch_state);var word = cljs.core.deref.call(null,envision.cmsketch.current_word);var positions = envision.cmsketch.positions.call(null,st,word);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",1370565925),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Estimated Value: ",cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (st,word,positions){
return (function (p1__4998_SHARP_){return cljs.core.get_in.call(null,st,p1__4998_SHARP_);
});})(st,word,positions))
,envision.cmsketch.with_index.call(null,positions)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-bordered.table-condensed","table.table.table-striped.table-bordered.table-condensed",3629960844),(function (){var iter__4195__auto__ = ((function (st,word,positions){
return (function iter__5039(s__5040){return (new cljs.core.LazySeq(null,((function (st,word,positions){
return (function (){var s__5040__$1 = s__5040;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5040__$1);if(temp__4092__auto__)
{var s__5040__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5040__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__5040__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__5042 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__5041 = 0;while(true){
if((i__5041 < size__4194__auto__))
{var vec__5061 = cljs.core._nth.call(null,c__4193__auto__,i__5041);var row_index = cljs.core.nth.call(null,vec__5061,0,null);var row = cljs.core.nth.call(null,vec__5061,1,null);cljs.core.chunk_append.call(null,b__5042,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),(function (){var iter__4195__auto__ = ((function (i__5041,vec__5061,row_index,row,c__4193__auto__,size__4194__auto__,b__5042,s__5040__$2,temp__4092__auto__,st,word,positions){
return (function iter__5062(s__5063){return (new cljs.core.LazySeq(null,((function (i__5041,vec__5061,row_index,row,c__4193__auto__,size__4194__auto__,b__5042,s__5040__$2,temp__4092__auto__,st,word,positions){
return (function (){var s__5063__$1 = s__5063;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5063__$1);if(temp__4092__auto____$1)
{var s__5063__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5063__$2))
{var c__4193__auto____$1 = cljs.core.chunk_first.call(null,s__5063__$2);var size__4194__auto____$1 = cljs.core.count.call(null,c__4193__auto____$1);var b__5065 = cljs.core.chunk_buffer.call(null,size__4194__auto____$1);if((function (){var i__5064 = 0;while(true){
if((i__5064 < size__4194__auto____$1))
{var vec__5068 = cljs.core._nth.call(null,c__4193__auto____$1,i__5064);var column_index = cljs.core.nth.call(null,vec__5068,0,null);var v = cljs.core.nth.call(null,vec__5068,1,null);cljs.core.chunk_append.call(null,b__5065,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((!(cljs.core.empty_QMARK_.call(null,positions))) && (cljs.core._EQ_.call(null,column_index,cljs.core.nth.call(null,positions,row_index))))?"success":"text-center")], null),[cljs.core.str(v)].join('')], null));
{
var G__5079 = (i__5064 + 1);
i__5064 = G__5079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5065),iter__5062.call(null,cljs.core.chunk_rest.call(null,s__5063__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5065),null);
}
} else
{var vec__5069 = cljs.core.first.call(null,s__5063__$2);var column_index = cljs.core.nth.call(null,vec__5069,0,null);var v = cljs.core.nth.call(null,vec__5069,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((!(cljs.core.empty_QMARK_.call(null,positions))) && (cljs.core._EQ_.call(null,column_index,cljs.core.nth.call(null,positions,row_index))))?"success":"text-center")], null),[cljs.core.str(v)].join('')], null),iter__5062.call(null,cljs.core.rest.call(null,s__5063__$2)));
}
} else
{return null;
}
break;
}
});})(i__5041,vec__5061,row_index,row,c__4193__auto__,size__4194__auto__,b__5042,s__5040__$2,temp__4092__auto__,st,word,positions))
,null,null));
});})(i__5041,vec__5061,row_index,row,c__4193__auto__,size__4194__auto__,b__5042,s__5040__$2,temp__4092__auto__,st,word,positions))
;return iter__4195__auto__.call(null,envision.cmsketch.with_index.call(null,row));
})()], null));
{
var G__5080 = (i__5041 + 1);
i__5041 = G__5080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5042),iter__5039.call(null,cljs.core.chunk_rest.call(null,s__5040__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5042),null);
}
} else
{var vec__5070 = cljs.core.first.call(null,s__5040__$2);var row_index = cljs.core.nth.call(null,vec__5070,0,null);var row = cljs.core.nth.call(null,vec__5070,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),(function (){var iter__4195__auto__ = ((function (vec__5070,row_index,row,s__5040__$2,temp__4092__auto__,st,word,positions){
return (function iter__5071(s__5072){return (new cljs.core.LazySeq(null,((function (vec__5070,row_index,row,s__5040__$2,temp__4092__auto__,st,word,positions){
return (function (){var s__5072__$1 = s__5072;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5072__$1);if(temp__4092__auto____$1)
{var s__5072__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5072__$2))
{var c__4193__auto__ = cljs.core.chunk_first.call(null,s__5072__$2);var size__4194__auto__ = cljs.core.count.call(null,c__4193__auto__);var b__5074 = cljs.core.chunk_buffer.call(null,size__4194__auto__);if((function (){var i__5073 = 0;while(true){
if((i__5073 < size__4194__auto__))
{var vec__5077 = cljs.core._nth.call(null,c__4193__auto__,i__5073);var column_index = cljs.core.nth.call(null,vec__5077,0,null);var v = cljs.core.nth.call(null,vec__5077,1,null);cljs.core.chunk_append.call(null,b__5074,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((!(cljs.core.empty_QMARK_.call(null,positions))) && (cljs.core._EQ_.call(null,column_index,cljs.core.nth.call(null,positions,row_index))))?"success":"text-center")], null),[cljs.core.str(v)].join('')], null));
{
var G__5081 = (i__5073 + 1);
i__5073 = G__5081;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5074),iter__5071.call(null,cljs.core.chunk_rest.call(null,s__5072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5074),null);
}
} else
{var vec__5078 = cljs.core.first.call(null,s__5072__$2);var column_index = cljs.core.nth.call(null,vec__5078,0,null);var v = cljs.core.nth.call(null,vec__5078,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(((!(cljs.core.empty_QMARK_.call(null,positions))) && (cljs.core._EQ_.call(null,column_index,cljs.core.nth.call(null,positions,row_index))))?"success":"text-center")], null),[cljs.core.str(v)].join('')], null),iter__5071.call(null,cljs.core.rest.call(null,s__5072__$2)));
}
} else
{return null;
}
break;
}
});})(vec__5070,row_index,row,s__5040__$2,temp__4092__auto__,st,word,positions))
,null,null));
});})(vec__5070,row_index,row,s__5040__$2,temp__4092__auto__,st,word,positions))
;return iter__4195__auto__.call(null,envision.cmsketch.with_index.call(null,row));
})()], null),iter__5039.call(null,cljs.core.rest.call(null,s__5040__$2)));
}
} else
{return null;
}
break;
}
});})(st,word,positions))
,null,null));
});})(st,word,positions))
;return iter__4195__auto__.call(null,envision.cmsketch.with_index.call(null,st));
})()], null)], null);
})()], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.cmsketch.todo_app], null),document.getElementById("app"));

//# sourceMappingURL=cmsketch.js.map