// Compiled by ClojureScript 0.0-2197
goog.provide('envision.hello');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('envision.mini_histogram');
goog.require('envision.mini_histogram');
goog.require('envision.utils');
goog.require('envision.utils');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('reagent.core');
envision.hello.data = reagent.core.atom.call(null,cljs.core.js__GT_clj.call(null,renderData));
envision.hello.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),"Month",new cljs.core.Keyword(null,"y","y",1013904363),"Unit Sales",new cljs.core.Keyword(null,"groups","groups",4071411014),cljs.core.PersistentHashSet.EMPTY], null));
envision.hello.chart_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* @param {...*} var_args
*/
envision.hello.println = (function() { 
var println__delegate = function (all){return console.log(cljs.core.clj__GT_js.call(null,all));
};
var println = function (var_args){
var all = null;if (arguments.length > 0) {
  all = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,all);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__55064){
var all = cljs.core.seq(arglist__55064);
return println__delegate(all);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
envision.hello.select_control = (function select_control(options,k){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"form-control",new cljs.core.Keyword(null,"value","value",1125876963),k.call(null,cljs.core.deref.call(null,envision.hello.app_state)),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (e){return cljs.core.swap_BANG_.call(null,envision.hello.app_state,(function (s){var st = cljs.core.deref.call(null,envision.hello.chart_state);var new_measure = e.target.value;var axis = cljs.core.get.call(null,st,cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("-axis")].join('')));axis.measure = new_measure;
cljs.core.get.call(null,cljs.core.deref.call(null,envision.hello.chart_state),new cljs.core.Keyword(null,"chart","chart",1108527952)).draw();
return cljs.core.assoc.call(null,s,k,new_measure);
}));
})], null),cljs.core.map.call(null,(function (option){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),option], null);
}),options)], null);
});
envision.hello.groups = (function groups(){var st = cljs.core.deref.call(null,envision.hello.app_state);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),cljs.core.map.call(null,((function (st){
return (function (i){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (st){
return (function (e){var val = e.target.value;if((cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",4071411014),val], null)) == null))
{return cljs.core.swap_BANG_.call(null,envision.hello.app_state,((function (val,st){
return (function (st__$1){return cljs.core.assoc.call(null,st__$1,new cljs.core.Keyword(null,"groups","groups",4071411014),cljs.core.conj.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(st__$1),val));
});})(val,st))
);
} else
{return cljs.core.swap_BANG_.call(null,envision.hello.app_state,((function (val,st){
return (function (st__$1){return cljs.core.assoc.call(null,st__$1,new cljs.core.Keyword(null,"groups","groups",4071411014),cljs.core.disj.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(st__$1),val));
});})(val,st))
);
}
});})(st))
,new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("btn btn-"),cljs.core.str(((!((cljs.core.get.call(null,cljs.core.get.call(null,st,new cljs.core.Keyword(null,"groups","groups",4071411014)),i) == null)))?"success":"default"))].join(''),new cljs.core.Keyword(null,"value","value",1125876963),i], null),i], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.mini_histogram.wrapped_mini_histogram,i,envision.hello.data], null)], null)], null);
});})(st))
,cljs.core.keys.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,envision.hello.data))))], null)], null)], null);
});
envision.hello.chart = (function chart(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null);
});
envision.hello.wrapped_chart = cljs.core.with_meta.call(null,envision.hello.chart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"should-component-update","should-component-update",2391343077),(function (this$){return true;
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",1606210541),(function (this$){var st = cljs.core.deref.call(null,envision.hello.app_state);var width = 500;var height = 320;var svg = dimple.newSvg(envision.utils.dom_node.call(null,this$),width,height);var chart = (new dimple.chart(svg,cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,envision.hello.data))));var x_axis = chart.addCategoryAxis("x",cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362)], null)));var y_axis = chart.addMeasureAxis("y",cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",1013904363)], null)));cljs.core.swap_BANG_.call(null,envision.hello.chart_state,((function (st,width,height,svg,chart,x_axis,y_axis){
return (function (s){return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"x-axis","x-axis",4493969224),x_axis,new cljs.core.Keyword(null,"y-axis","y-axis",4522598375),y_axis,new cljs.core.Keyword(null,"chart","chart",1108527952),chart);
});})(st,width,height,svg,chart,x_axis,y_axis))
);
chart.setBounds(50,50,(width - 50),(height - 120));
chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"groups","groups",4071411014).cljs$core$IFn$_invoke$arity$1(st)),dimple.plot.bubble);
return chart.draw();
})], null));
envision.hello.todo_app = (function todo_app(props){return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",3586580245),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-7","div.col-md-7",1688702429),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",1370565925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.hello.select_control,cljs.core.keys.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,envision.hello.data))),new cljs.core.Keyword(null,"x","x",1013904362)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",1370565925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Y"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.hello.select_control,cljs.core.keys.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,envision.hello.data))),new cljs.core.Keyword(null,"y","y",1013904363)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",1370565925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),"Groups"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.hello.groups], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1688702427),(function (){var st = cljs.core.deref.call(null,envision.hello.app_state);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.hello.wrapped_chart,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.rand_int.call(null,1000)], null)], null);
})()], null)], null);
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [envision.hello.todo_app], null),document.getElementById("app"));

//# sourceMappingURL=hello.js.map