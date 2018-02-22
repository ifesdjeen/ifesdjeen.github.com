// Compiled by ClojureScript 0.0-2197
goog.provide('envision.mini_histogram');
goog.require('cljs.core');
goog.require('envision.utils');
goog.require('envision.utils');
envision.mini_histogram.domain = (function domain(this$,v){return this$.domain(cljs.core.clj__GT_js.call(null,v));
});
envision.mini_histogram.range = (function range(this$,v){return this$.range(cljs.core.clj__GT_js.call(null,v));
});
envision.mini_histogram.linear = (function linear(this$){return this$.linear();
});
envision.mini_histogram.mini_histogram = (function mini_histogram(field){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-field","data-field",1189785737),field,new cljs.core.Keyword(null,"class","class",1108647146),"chart"], null)], null);
});
envision.mini_histogram.mini_histogram = (function mini_histogram(field,data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-field","data-field",1189785737),field,new cljs.core.Keyword(null,"class","class",1108647146),"chart"], null)], null);
});
envision.mini_histogram.normalise_negative = (function normalise_negative(values){var m = cljs.core.apply.call(null,cljs.core.min,values);if((m < 0))
{return cljs.core.map.call(null,((function (m){
return (function (p1__32757_SHARP_){return ((-1 * m) + p1__32757_SHARP_);
});})(m))
,values);
} else
{return values;
}
});
envision.mini_histogram.categorical_histogram_layout = (function categorical_histogram_layout(values){var m = cljs.core.apply.call(null,cljs.core.max,values);var length = (m / cljs.core.count.call(null,values));return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (m,length){
return (function (v,xx){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",1013904363),v,new cljs.core.Keyword(null,"length","length",4202507864),v,new cljs.core.Keyword(null,"x","x",1013904362),xx,new cljs.core.Keyword(null,"dx","dx",1013907462),length], null);
});})(m,length))
,values,cljs.core.iterate.call(null,((function (m,length){
return (function (p1__32758_SHARP_){return (p1__32758_SHARP_ + length);
});})(m,length))
,0)));
});
envision.mini_histogram.numerical_histogram_layout = (function numerical_histogram_layout(values){return d3.layout.histogram().call(null,cljs.core.clj__GT_js.call(null,values));
});
envision.mini_histogram.wrapped_mini_histogram = cljs.core.with_meta.call(null,envision.mini_histogram.mini_histogram,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",1606210541),(function (this$){var data = cljs.core.deref.call(null,cljs.core.last.call(null,this$.props.cljsArgv));var node = envision.utils.dom_node.call(null,this$);var field = envision.utils.data_field.call(null,node,new cljs.core.Keyword(null,"data-field","data-field",1189785737));var width = 300;var height = 35;var values = cljs.core.map.call(null,((function (data,node,field,width,height){
return (function (p1__32759_SHARP_){return cljs.core.get.call(null,p1__32759_SHARP_,field);
});})(data,node,field,width,height))
,data);var categorical_QMARK_ = typeof cljs.core.first.call(null,values) === 'string';var values__$1 = ((categorical_QMARK_)?cljs.core.vals.call(null,cljs.core.frequencies.call(null,values)):envision.mini_histogram.normalise_negative.call(null,values));var m = cljs.core.apply.call(null,cljs.core.max,values__$1);var x = envision.mini_histogram.range.call(null,envision.mini_histogram.domain.call(null,envision.mini_histogram.linear.call(null,d3.scale),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,m], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,width], null));var hist = ((categorical_QMARK_)?envision.mini_histogram.categorical_histogram_layout:envision.mini_histogram.numerical_histogram_layout).call(null,values__$1);var y = envision.mini_histogram.range.call(null,envision.mini_histogram.domain.call(null,envision.mini_histogram.linear.call(null,d3.scale),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (data,node,field,width,height,values,categorical_QMARK_,values__$1,m,x,hist){
return (function (p1__32760_SHARP_){return p1__32760_SHARP_.y;
});})(data,node,field,width,height,values,categorical_QMARK_,values__$1,m,x,hist))
,hist))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,0], null));var x_axis = d3.svg.axis().scale(x).orient(envision.mini_histogram.bottom);var svg = d3.select.call(null,node).append("svg").attr("width",width).attr("height",height).append("g").attr("transform",[cljs.core.str("translate(0,0)")].join(''));var bar = svg.selectAll(".bar").data(hist).enter().append("g").attr("class","bar").attr("transform",((function (data,node,field,width,height,values,categorical_QMARK_,values__$1,m,x,hist,y,x_axis,svg){
return (function (d){return [cljs.core.str("translate("),cljs.core.str(x.call(null,d.x)),cljs.core.str(","),cljs.core.str(y.call(null,d.y)),cljs.core.str(")")].join('');
});})(data,node,field,width,height,values,categorical_QMARK_,values__$1,m,x,hist,y,x_axis,svg))
);return bar.append("rect").attr("x",1).attr("width",(x.call(null,cljs.core.nth.call(null,hist,0).dx) - 1)).attr("height",((function (data,node,field,width,height,values,categorical_QMARK_,values__$1,m,x,hist,y,x_axis,svg,bar){
return (function (d){return y.call(null,(height - d.y));
});})(data,node,field,width,height,values,categorical_QMARK_,values__$1,m,x,hist,y,x_axis,svg,bar))
);
})], null));

//# sourceMappingURL=mini_histogram.js.map