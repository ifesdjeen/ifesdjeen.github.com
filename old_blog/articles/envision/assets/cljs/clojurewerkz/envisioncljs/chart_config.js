// Compiled by ClojureScript 0.0-2197
goog.provide('clojurewerkz.envisioncljs.chart_config');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
var bad_keys__5283__auto___9137 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__5279__5284__auto__){return schema.core.required_key_QMARK_.call(null,p1__5279__5284__auto__);
}),cljs.core.keys.call(null,null)));if(cljs.core.not.call(null,bad_keys__5283__auto___9137))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__5283__auto___9137))));
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
* @param {*} category_fields
* @param {*} colors
* @param {*} clamp
* @param {*} font_size
* @param {*} font_family
* @param {*} gridline_shapes
* @param {*} hidden
* @param {*} log_base
* @param {*} use_log
* @param {*} measure
* @param {*} override_min
* @param {*} show_gridlines
* @param {*} show_percent
* @param {*} title_shape
* @param {*} tick_format
* @param {*} time_field
* @param {*} title
* @param {*} floating_bar_width
* @param {*} date_parse_format
* @param {*} ticks
* @param {*} time_period
* @param {*} time_interval
* @param {*} order_rule
* @param {*} group_order_rule
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
clojurewerkz.envisioncljs.chart_config.AxisConfig = (function (category_fields,colors,clamp,font_size,font_family,gridline_shapes,hidden,log_base,use_log,measure,override_min,show_gridlines,show_percent,title_shape,tick_format,time_field,title,floating_bar_width,date_parse_format,ticks,time_period,time_interval,order_rule,group_order_rule,__meta,__extmap){
this.category_fields = category_fields;
this.colors = colors;
this.clamp = clamp;
this.font_size = font_size;
this.font_family = font_family;
this.gridline_shapes = gridline_shapes;
this.hidden = hidden;
this.log_base = log_base;
this.use_log = use_log;
this.measure = measure;
this.override_min = override_min;
this.show_gridlines = show_gridlines;
this.show_percent = show_percent;
this.title_shape = title_shape;
this.tick_format = tick_format;
this.time_field = time_field;
this.title = title;
this.floating_bar_width = floating_bar_width;
this.date_parse_format = date_parse_format;
this.ticks = ticks;
this.time_period = time_period;
this.time_interval = time_interval;
this.order_rule = order_rule;
this.group_order_rule = group_order_rule;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>24){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9129,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506)))
{return self__.category_fields;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"colors","colors",3954028770)))
{return self__.colors;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"clamp","clamp",1108646957)))
{return self__.clamp;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"font-size","font-size",3722789425)))
{return self__.font_size;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"font-family","font-family",1122436628)))
{return self__.font_family;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383)))
{return self__.gridline_shapes;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"hidden","hidden",4091384092)))
{return self__.hidden;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"log-base","log-base",2980897580)))
{return self__.log_base;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"use-log","use-log",864728432)))
{return self__.use_log;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"measure","measure",1952225488)))
{return self__.measure;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"override-min","override-min",1079075907)))
{return self__.override_min;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411)))
{return self__.show_gridlines;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"show-percent","show-percent",535415015)))
{return self__.show_percent;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"title-shape","title-shape",4736767838)))
{return self__.title_shape;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"tick-format","tick-format",2828822937)))
{return self__.tick_format;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"time-field","time-field",706080108)))
{return self__.time_field;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"title","title",1124275658)))
{return self__.title;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855)))
{return self__.floating_bar_width;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050)))
{return self__.date_parse_format;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"ticks","ticks",1124259304)))
{return self__.ticks;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"time-period","time-period",4639240243)))
{return self__.time_period;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"time-interval","time-interval",1879826231)))
{return self__.time_interval;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"order-rule","order-rule",1724089741)))
{return self__.order_rule;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9129,new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579)))
{return self__.group_order_rule;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9129,else__4067__auto__);
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
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9128){var self__ = this;
var this__4071__auto____$1 = this;var pred__9131 = cljs.core.keyword_identical_QMARK_;var expr__9132 = k__4072__auto__;if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(G__9128,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"colors","colors",3954028770),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,G__9128,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"clamp","clamp",1108646957),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,G__9128,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"font-size","font-size",3722789425),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,G__9128,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"font-family","font-family",1122436628),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,G__9128,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,G__9128,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,G__9128,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"log-base","log-base",2980897580),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,G__9128,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"use-log","use-log",864728432),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,G__9128,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"measure","measure",1952225488),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,G__9128,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"override-min","override-min",1079075907),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,G__9128,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,G__9128,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"show-percent","show-percent",535415015),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,G__9128,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,G__9128,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,G__9128,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"time-field","time-field",706080108),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,G__9128,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"title","title",1124275658),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,G__9128,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,G__9128,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,G__9128,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"ticks","ticks",1124259304),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,G__9128,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"time-period","time-period",4639240243),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,G__9128,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,G__9128,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,G__9128,self__.group_order_rule,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9131.call(null,new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),expr__9132)))
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,G__9128,self__.__meta,self__.__extmap,null));
} else
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9128),null));
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
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#clojurewerkz.envisioncljs.chart_config.AxisConfig{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),self__.category_fields],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",3954028770),self__.colors],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clamp","clamp",1108646957),self__.clamp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-size","font-size",3722789425),self__.font_size],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-family","font-family",1122436628),self__.font_family],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),self__.gridline_shapes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hidden","hidden",4091384092),self__.hidden],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"log-base","log-base",2980897580),self__.log_base],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"use-log","use-log",864728432),self__.use_log],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"measure","measure",1952225488),self__.measure],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"override-min","override-min",1079075907),self__.override_min],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),self__.show_gridlines],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"show-percent","show-percent",535415015),self__.show_percent],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),self__.title_shape],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),self__.tick_format],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-field","time-field",706080108),self__.time_field],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",1124275658),self__.title],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),self__.floating_bar_width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),self__.date_parse_format],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ticks","ticks",1124259304),self__.ticks],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-period","time-period",4639240243),self__.time_period],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),self__.time_interval],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),self__.order_rule],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),self__.group_order_rule],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),self__.category_fields],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"colors","colors",3954028770),self__.colors],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clamp","clamp",1108646957),self__.clamp],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-size","font-size",3722789425),self__.font_size],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font-family","font-family",1122436628),self__.font_family],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),self__.gridline_shapes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hidden","hidden",4091384092),self__.hidden],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"log-base","log-base",2980897580),self__.log_base],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"use-log","use-log",864728432),self__.use_log],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"measure","measure",1952225488),self__.measure],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"override-min","override-min",1079075907),self__.override_min],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),self__.show_gridlines],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"show-percent","show-percent",535415015),self__.show_percent],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),self__.title_shape],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),self__.tick_format],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-field","time-field",706080108),self__.time_field],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",1124275658),self__.title],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),self__.floating_bar_width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),self__.date_parse_format],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ticks","ticks",1124259304),self__.ticks],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-period","time-period",4639240243),self__.time_period],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),self__.time_interval],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),self__.order_rule],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),self__.group_order_rule],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (24 + cljs.core.count.call(null,self__.__extmap));
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9128){var self__ = this;
var this__4063__auto____$1 = this;return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,G__9128,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, [new cljs.core.Keyword(null,"time-period","time-period",4639240243),null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),null,new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),null,new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),null,new cljs.core.Keyword(null,"time-field","time-field",706080108),null,new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),null,new cljs.core.Keyword(null,"measure","measure",1952225488),null,new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),null,new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),null,new cljs.core.Keyword(null,"font-size","font-size",3722789425),null,new cljs.core.Keyword(null,"title","title",1124275658),null,new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),null,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),null,new cljs.core.Keyword(null,"override-min","override-min",1079075907),null,new cljs.core.Keyword(null,"clamp","clamp",1108646957),null,new cljs.core.Keyword(null,"log-base","log-base",2980897580),null,new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),null,new cljs.core.Keyword(null,"ticks","ticks",1124259304),null,new cljs.core.Keyword(null,"font-family","font-family",1122436628),null,new cljs.core.Keyword(null,"show-percent","show-percent",535415015),null,new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),null,new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),null,new cljs.core.Keyword(null,"colors","colors",3954028770),null,new cljs.core.Keyword(null,"use-log","use-log",864728432),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(self__.category_fields,self__.colors,self__.clamp,self__.font_size,self__.font_family,self__.gridline_shapes,self__.hidden,self__.log_base,self__.use_log,self__.measure,self__.override_min,self__.show_gridlines,self__.show_percent,self__.title_shape,self__.tick_format,self__.time_field,self__.title,self__.floating_bar_width,self__.date_parse_format,self__.ticks,self__.time_period,self__.time_interval,self__.order_rule,self__.group_order_rule,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.cljs$lang$type = true;
clojurewerkz.envisioncljs.chart_config.AxisConfig.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojurewerkz.envisioncljs.chart_config/AxisConfig");
});
clojurewerkz.envisioncljs.chart_config.AxisConfig.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"clojurewerkz.envisioncljs.chart_config/AxisConfig");
});
clojurewerkz.envisioncljs.chart_config.__GT_AxisConfig = (function __GT_AxisConfig(category_fields,colors,clamp,font_size,font_family,gridline_shapes,hidden,log_base,use_log,measure,override_min,show_gridlines,show_percent,title_shape,tick_format,time_field,title,floating_bar_width,date_parse_format,ticks,time_period,time_interval,order_rule,group_order_rule){return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(category_fields,colors,clamp,font_size,font_family,gridline_shapes,hidden,log_base,use_log,measure,override_min,show_gridlines,show_percent,title_shape,tick_format,time_field,title,floating_bar_width,date_parse_format,ticks,time_period,time_interval,order_rule,group_order_rule));
});
clojurewerkz.envisioncljs.chart_config.map__GT_AxisConfig = (function map__GT_AxisConfig(G__9130){return (new clojurewerkz.envisioncljs.chart_config.AxisConfig(new cljs.core.Keyword(null,"category-fields","category-fields",2718508506).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"colors","colors",3954028770).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"clamp","clamp",1108646957).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"font-size","font-size",3722789425).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"font-family","font-family",1122436628).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"hidden","hidden",4091384092).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"log-base","log-base",2980897580).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"use-log","use-log",864728432).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"measure","measure",1952225488).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"override-min","override-min",1079075907).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"show-percent","show-percent",535415015).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"title-shape","title-shape",4736767838).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"tick-format","tick-format",2828822937).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"time-field","time-field",706080108).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"ticks","ticks",1124259304).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"time-period","time-period",4639240243).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"time-interval","time-interval",1879826231).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"order-rule","order-rule",1724089741).cljs$core$IFn$_invoke$arity$1(G__9130),new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579).cljs$core$IFn$_invoke$arity$1(G__9130),null,cljs.core.dissoc.call(null,G__9130,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),new cljs.core.Keyword(null,"colors","colors",3954028770),new cljs.core.Keyword(null,"clamp","clamp",1108646957),new cljs.core.Keyword(null,"font-size","font-size",3722789425),new cljs.core.Keyword(null,"font-family","font-family",1122436628),new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword(null,"log-base","log-base",2980897580),new cljs.core.Keyword(null,"use-log","use-log",864728432),new cljs.core.Keyword(null,"measure","measure",1952225488),new cljs.core.Keyword(null,"override-min","override-min",1079075907),new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),new cljs.core.Keyword(null,"show-percent","show-percent",535415015),new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),new cljs.core.Keyword(null,"time-field","time-field",706080108),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),new cljs.core.Keyword(null,"ticks","ticks",1124259304),new cljs.core.Keyword(null,"time-period","time-period",4639240243),new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579))));
});
schema.utils.declare_class_schema_BANG_.call(null,clojurewerkz.envisioncljs.chart_config.AxisConfig,schema.utils.assoc_when.call(null,schema.core.record.call(null,clojurewerkz.envisioncljs.chart_config.AxisConfig,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"time-period","time-period",4639240243),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),new cljs.core.Keyword(null,"time-field","time-field",706080108),new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),new cljs.core.Keyword(null,"measure","measure",1952225488),new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),new cljs.core.Keyword(null,"font-size","font-size",3722789425),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),new cljs.core.Keyword(null,"override-min","override-min",1079075907),new cljs.core.Keyword(null,"clamp","clamp",1108646957),new cljs.core.Keyword(null,"log-base","log-base",2980897580),new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),new cljs.core.Keyword(null,"ticks","ticks",1124259304),new cljs.core.Keyword(null,"font-family","font-family",1122436628),new cljs.core.Keyword(null,"show-percent","show-percent",535415015),new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),new cljs.core.Keyword(null,"colors","colors",3954028770),new cljs.core.Keyword(null,"use-log","use-log",864728432)],[schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any,schema.core.Any]),null)),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",2525540146),null));
/**
* Factory function for class AxisConfig, taking a map of keywords to field values, but not 400x slower than ->x like the clojure.core version
*/
clojurewerkz.envisioncljs.chart_config.map__GT_AxisConfig = (function map__GT_AxisConfig(m9126){var base__5280__auto__ = (new clojurewerkz.envisioncljs.chart_config.AxisConfig(cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"colors","colors",3954028770)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"clamp","clamp",1108646957)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"font-size","font-size",3722789425)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"font-family","font-family",1122436628)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"hidden","hidden",4091384092)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"log-base","log-base",2980897580)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"use-log","use-log",864728432)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"measure","measure",1952225488)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"override-min","override-min",1079075907)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"show-percent","show-percent",535415015)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"title-shape","title-shape",4736767838)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"tick-format","tick-format",2828822937)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"time-field","time-field",706080108)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"title","title",1124275658)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"ticks","ticks",1124259304)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"time-period","time-period",4639240243)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"time-interval","time-interval",1879826231)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"order-rule","order-rule",1724089741)),cljs.core.get.call(null,m9126,new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579))));var remaining__5281__auto__ = cljs.core.dissoc.call(null,m9126,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),new cljs.core.Keyword(null,"colors","colors",3954028770),new cljs.core.Keyword(null,"clamp","clamp",1108646957),new cljs.core.Keyword(null,"font-size","font-size",3722789425),new cljs.core.Keyword(null,"font-family","font-family",1122436628),new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),new cljs.core.Keyword(null,"hidden","hidden",4091384092),new cljs.core.Keyword(null,"log-base","log-base",2980897580),new cljs.core.Keyword(null,"use-log","use-log",864728432),new cljs.core.Keyword(null,"measure","measure",1952225488),new cljs.core.Keyword(null,"override-min","override-min",1079075907),new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),new cljs.core.Keyword(null,"show-percent","show-percent",535415015),new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),new cljs.core.Keyword(null,"time-field","time-field",706080108),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),new cljs.core.Keyword(null,"ticks","ticks",1124259304),new cljs.core.Keyword(null,"time-period","time-period",4639240243),new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579));if(cljs.core.seq.call(null,remaining__5281__auto__))
{return cljs.core.merge.call(null,base__5280__auto__,remaining__5281__auto__);
} else
{return base__5280__auto__;
}
});
/**
* Factory function for class AxisConfig, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
* @param {...*} var_args
*/
clojurewerkz.envisioncljs.chart_config.strict_map__GT_AxisConfig = (function() { 
var strict_map__GT_AxisConfig__delegate = function (m9127,p__9134){var vec__9136 = p__9134;var drop_extra_keys_QMARK___5282__auto__ = cljs.core.nth.call(null,vec__9136,0,null);if(cljs.core.truth_((function (){var or__3478__auto__ = drop_extra_keys_QMARK___5282__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,m9127),24);
}
})()))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Record has wrong set of keys: %s",clojure.data.diff.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m9127)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 24, [new cljs.core.Keyword(null,"time-period","time-period",4639240243),null,new cljs.core.Keyword(null,"hidden","hidden",4091384092),null,new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579),null,new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411),null,new cljs.core.Keyword(null,"time-field","time-field",706080108),null,new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050),null,new cljs.core.Keyword(null,"measure","measure",1952225488),null,new cljs.core.Keyword(null,"time-interval","time-interval",1879826231),null,new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383),null,new cljs.core.Keyword(null,"font-size","font-size",3722789425),null,new cljs.core.Keyword(null,"title","title",1124275658),null,new cljs.core.Keyword(null,"title-shape","title-shape",4736767838),null,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506),null,new cljs.core.Keyword(null,"override-min","override-min",1079075907),null,new cljs.core.Keyword(null,"clamp","clamp",1108646957),null,new cljs.core.Keyword(null,"log-base","log-base",2980897580),null,new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855),null,new cljs.core.Keyword(null,"ticks","ticks",1124259304),null,new cljs.core.Keyword(null,"font-family","font-family",1122436628),null,new cljs.core.Keyword(null,"show-percent","show-percent",535415015),null,new cljs.core.Keyword(null,"order-rule","order-rule",1724089741),null,new cljs.core.Keyword(null,"tick-format","tick-format",2828822937),null,new cljs.core.Keyword(null,"colors","colors",3954028770),null,new cljs.core.Keyword(null,"use-log","use-log",864728432),null], null), null)))));
}
return (new clojurewerkz.envisioncljs.chart_config.AxisConfig((function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"category-fields","category-fields",2718508506);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"colors","colors",3954028770);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"clamp","clamp",1108646957);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"font-size","font-size",3722789425);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"font-family","font-family",1122436628);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"hidden","hidden",4091384092);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"log-base","log-base",2980897580);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"use-log","use-log",864728432);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"measure","measure",1952225488);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"override-min","override-min",1079075907);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"show-percent","show-percent",535415015);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"title-shape","title-shape",4736767838);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"tick-format","tick-format",2828822937);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"time-field","time-field",706080108);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"title","title",1124275658);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"ticks","ticks",1124259304);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"time-period","time-period",4639240243);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"time-interval","time-interval",1879826231);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"order-rule","order-rule",1724089741);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9127;var k__5155__auto__ = new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})()));
};
var strict_map__GT_AxisConfig = function (m9127,var_args){
var p__9134 = null;if (arguments.length > 1) {
  p__9134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strict_map__GT_AxisConfig__delegate.call(this,m9127,p__9134);};
strict_map__GT_AxisConfig.cljs$lang$maxFixedArity = 1;
strict_map__GT_AxisConfig.cljs$lang$applyTo = (function (arglist__9138){
var m9127 = cljs.core.first(arglist__9138);
var p__9134 = cljs.core.rest(arglist__9138);
return strict_map__GT_AxisConfig__delegate(m9127,p__9134);
});
strict_map__GT_AxisConfig.cljs$core$IFn$_invoke$arity$variadic = strict_map__GT_AxisConfig__delegate;
return strict_map__GT_AxisConfig;
})()
;
clojurewerkz.envisioncljs.chart_config.make_axis_config = (function make_axis_config(p__9139){var map__9141 = p__9139;var map__9141__$1 = ((cljs.core.seq_QMARK_.call(null,map__9141))?cljs.core.apply.call(null,cljs.core.hash_map,map__9141):map__9141);var ticks = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"ticks","ticks",1124259304));var font_family = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"font-family","font-family",1122436628));var show_percent = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"show-percent","show-percent",535415015));var order_rule = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"order-rule","order-rule",1724089741));var colors = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"colors","colors",3954028770));var tick_format = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"tick-format","tick-format",2828822937));var use_log = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"use-log","use-log",864728432));var time_period = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"time-period","time-period",4639240243));var hidden = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"hidden","hidden",4091384092));var show_gridlines = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"show-gridlines","show-gridlines",1653520411));var group_order_rule = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"group-order-rule","group-order-rule",2803975579));var time_field = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"time-field","time-field",706080108));var date_parse_format = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"date-parse-format","date-parse-format",545586050));var measure = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"measure","measure",1952225488));var time_interval = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"time-interval","time-interval",1879826231));var title = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"title","title",1124275658));var gridline_shapes = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"gridline-shapes","gridline-shapes",2551383383));var font_size = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"font-size","font-size",3722789425));var title_shape = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"title-shape","title-shape",4736767838));var category_fields = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"category-fields","category-fields",2718508506));var clamp = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"clamp","clamp",1108646957));var override_min = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"override-min","override-min",1079075907));var log_base = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"log-base","log-base",2980897580));var floating_bar_width = cljs.core.get.call(null,map__9141__$1,new cljs.core.Keyword(null,"floating-bar-width","floating-bar-width",3299684855));return clojurewerkz.envisioncljs.chart_config.__GT_AxisConfig.call(null,category_fields,colors,clamp,font_size,font_family,gridline_shapes,hidden,log_base,use_log,measure,override_min,show_gridlines,show_percent,title_shape,tick_format,time_field,title,floating_bar_width,date_parse_format,ticks,time_period,time_interval,order_rule,group_order_rule);
});
var bad_keys__5283__auto___9153 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__5279__5284__auto__){return schema.core.required_key_QMARK_.call(null,p1__5279__5284__auto__);
}),cljs.core.keys.call(null,null)));if(cljs.core.not.call(null,bad_keys__5283__auto___9153))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__5283__auto___9153))));
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
* @param {*} id
* @param {*} width
* @param {*} height
* @param {*} top_x
* @param {*} top_y
* @param {*} chart_width
* @param {*} chart_height
* @param {*} x
* @param {*} x_type
* @param {*} y
* @param {*} y_type
* @param {*} z
* @param {*} x_config
* @param {*} y_config
* @param {*} series_type
* @param {*} series
* @param {*} interpolation
* @param {*} data
* @param {*} additional_series
* @param {*} headline
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
clojurewerkz.envisioncljs.chart_config.ChartConfig = (function (id,width,height,top_x,top_y,chart_width,chart_height,x,x_type,y,y_type,z,x_config,y_config,series_type,series,interpolation,data,additional_series,headline,__meta,__extmap){
this.id = id;
this.width = width;
this.height = height;
this.top_x = top_x;
this.top_y = top_y;
this.chart_width = chart_width;
this.chart_height = chart_height;
this.x = x;
this.x_type = x_type;
this.y = y;
this.y_type = y_type;
this.z = z;
this.x_config = x_config;
this.y_config = y_config;
this.series_type = series_type;
this.series = series;
this.interpolation = interpolation;
this.data = data;
this.additional_series = additional_series;
this.headline = headline;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>20){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9145,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"width","width",1127031096)))
{return self__.width;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"height","height",4087841945)))
{return self__.height;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"top-x","top-x",1124448626)))
{return self__.top_x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"top-y","top-y",1124448627)))
{return self__.top_y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"chart-width","chart-width",3401920137)))
{return self__.chart_width;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"chart-height","chart-height",1594958184)))
{return self__.chart_height;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"x","x",1013904362)))
{return self__.x;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"x-type","x-type",4494536417)))
{return self__.x_type;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"y","y",1013904363)))
{return self__.y;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"y-type","y-type",4523165568)))
{return self__.y_type;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"z","z",1013904364)))
{return self__.z;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"x-config","x-config",3920882089)))
{return self__.x_config;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"y-config","y-config",1368725128)))
{return self__.y_config;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"series-type","series-type",3351058498)))
{return self__.series_type;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"series","series",4403032553)))
{return self__.series;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990)))
{return self__.interpolation;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"data","data",1016980252)))
{return self__.data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"additional-series","additional-series",2161064527)))
{return self__.additional_series;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9145,new cljs.core.Keyword(null,"headline","headline",4193812806)))
{return self__.headline;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9145,else__4067__auto__);
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
}
}
}
}
}
}
}
}
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9144){var self__ = this;
var this__4071__auto____$1 = this;var pred__9147 = cljs.core.keyword_identical_QMARK_;var expr__9148 = k__4072__auto__;if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(G__9144,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"width","width",1127031096),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,G__9144,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"height","height",4087841945),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,G__9144,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"top-x","top-x",1124448626),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,G__9144,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"top-y","top-y",1124448627),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,G__9144,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,G__9144,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,G__9144,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"x","x",1013904362),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,G__9144,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"x-type","x-type",4494536417),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,G__9144,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"y","y",1013904363),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,G__9144,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"y-type","y-type",4523165568),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,G__9144,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"z","z",1013904364),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,G__9144,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"x-config","x-config",3920882089),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,G__9144,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"y-config","y-config",1368725128),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,G__9144,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"series-type","series-type",3351058498),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,G__9144,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"series","series",4403032553),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,G__9144,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,G__9144,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"data","data",1016980252),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,G__9144,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,G__9144,self__.headline,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9147.call(null,new cljs.core.Keyword(null,"headline","headline",4193812806),expr__9148)))
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,G__9144,self__.__meta,self__.__extmap,null));
} else
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9144),null));
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
}
}
}
}
}
}
}
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#clojurewerkz.envisioncljs.chart_config.ChartConfig{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top-x","top-x",1124448626),self__.top_x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top-y","top-y",1124448627),self__.top_y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),self__.chart_width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),self__.chart_height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-type","x-type",4494536417),self__.x_type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-type","y-type",4523165568),self__.y_type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z","z",1013904364),self__.z],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-config","x-config",3920882089),self__.x_config],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-config","y-config",1368725128),self__.y_config],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"series-type","series-type",3351058498),self__.series_type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"series","series",4403032553),self__.series],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),self__.interpolation],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),self__.additional_series],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headline","headline",4193812806),self__.headline],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top-x","top-x",1124448626),self__.top_x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top-y","top-y",1124448627),self__.top_y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),self__.chart_width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),self__.chart_height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",1013904362),self__.x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-type","x-type",4494536417),self__.x_type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",1013904363),self__.y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-type","y-type",4523165568),self__.y_type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"z","z",1013904364),self__.z],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x-config","x-config",3920882089),self__.x_config],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y-config","y-config",1368725128),self__.y_config],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"series-type","series-type",3351058498),self__.series_type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"series","series",4403032553),self__.series],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),self__.interpolation],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),self__.additional_series],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headline","headline",4193812806),self__.headline],null))], null),self__.__extmap));
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (20 + cljs.core.count.call(null,self__.__extmap));
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
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
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9144){var self__ = this;
var this__4063__auto____$1 = this;return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,G__9144,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,self__.__extmap,self__.__hash));
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"y-config","y-config",1368725128),null,new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),null,new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"z","z",1013904364),null,new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),null,new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"x-config","x-config",3920882089),null,new cljs.core.Keyword(null,"y-type","y-type",4523165568),null,new cljs.core.Keyword(null,"top-y","top-y",1124448627),null,new cljs.core.Keyword(null,"top-x","top-x",1124448626),null,new cljs.core.Keyword(null,"headline","headline",4193812806),null,new cljs.core.Keyword(null,"x-type","x-type",4494536417),null,new cljs.core.Keyword(null,"series-type","series-type",3351058498),null,new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),null,new cljs.core.Keyword(null,"series","series",4403032553),null,new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"height","height",4087841945),null,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(self__.id,self__.width,self__.height,self__.top_x,self__.top_y,self__.chart_width,self__.chart_height,self__.x,self__.x_type,self__.y,self__.y_type,self__.z,self__.x_config,self__.y_config,self__.series_type,self__.series,self__.interpolation,self__.data,self__.additional_series,self__.headline,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.cljs$lang$type = true;
clojurewerkz.envisioncljs.chart_config.ChartConfig.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojurewerkz.envisioncljs.chart_config/ChartConfig");
});
clojurewerkz.envisioncljs.chart_config.ChartConfig.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"clojurewerkz.envisioncljs.chart_config/ChartConfig");
});
clojurewerkz.envisioncljs.chart_config.__GT_ChartConfig = (function __GT_ChartConfig(id,width,height,top_x,top_y,chart_width,chart_height,x,x_type,y,y_type,z,x_config,y_config,series_type,series,interpolation,data,additional_series,headline){return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(id,width,height,top_x,top_y,chart_width,chart_height,x,x_type,y,y_type,z,x_config,y_config,series_type,series,interpolation,data,additional_series,headline));
});
clojurewerkz.envisioncljs.chart_config.map__GT_ChartConfig = (function map__GT_ChartConfig(G__9146){return (new clojurewerkz.envisioncljs.chart_config.ChartConfig(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"top-x","top-x",1124448626).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"top-y","top-y",1124448627).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"chart-width","chart-width",3401920137).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"chart-height","chart-height",1594958184).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"x-type","x-type",4494536417).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"y-type","y-type",4523165568).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"x-config","x-config",3920882089).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"y-config","y-config",1368725128).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"series-type","series-type",3351058498).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"series","series",4403032553).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"interpolation","interpolation",1573235990).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"additional-series","additional-series",2161064527).cljs$core$IFn$_invoke$arity$1(G__9146),new cljs.core.Keyword(null,"headline","headline",4193812806).cljs$core$IFn$_invoke$arity$1(G__9146),null,cljs.core.dissoc.call(null,G__9146,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"height","height",4087841945),new cljs.core.Keyword(null,"top-x","top-x",1124448626),new cljs.core.Keyword(null,"top-y","top-y",1124448627),new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"x-type","x-type",4494536417),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"y-type","y-type",4523165568),new cljs.core.Keyword(null,"z","z",1013904364),new cljs.core.Keyword(null,"x-config","x-config",3920882089),new cljs.core.Keyword(null,"y-config","y-config",1368725128),new cljs.core.Keyword(null,"series-type","series-type",3351058498),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),new cljs.core.Keyword(null,"headline","headline",4193812806))));
});
schema.utils.declare_class_schema_BANG_.call(null,clojurewerkz.envisioncljs.chart_config.ChartConfig,schema.utils.assoc_when.call(null,schema.core.record.call(null,clojurewerkz.envisioncljs.chart_config.ChartConfig,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y-config","y-config",1368725128),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"z","z",1013904364),new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"x-config","x-config",3920882089),new cljs.core.Keyword(null,"y-type","y-type",4523165568),new cljs.core.Keyword(null,"top-y","top-y",1124448627),new cljs.core.Keyword(null,"top-x","top-x",1124448626),new cljs.core.Keyword(null,"headline","headline",4193812806),new cljs.core.Keyword(null,"x-type","x-type",4494536417),new cljs.core.Keyword(null,"series-type","series-type",3351058498),new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"height","height",4087841945),new cljs.core.Keyword(null,"interpolation","interpolation",1573235990)],[schema.core.Any,schema.core.Any,schema.core.Int,schema.core.Int,schema.core.Str,schema.core.Any,schema.core.Str,schema.core.Str,schema.core.Any,schema.core.Str,schema.core.Int,schema.core.Int,schema.core.Str,schema.core.Str,schema.core.Keyword,schema.core.Int,schema.core.Keyword,schema.core.String,schema.core.Int,schema.core.Keyword]),null)),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",2525540146),null));
/**
* Factory function for class ChartConfig, taking a map of keywords to field values, but not 400x slower than ->x like the clojure.core version
*/
clojurewerkz.envisioncljs.chart_config.map__GT_ChartConfig = (function map__GT_ChartConfig(m9142){var base__5280__auto__ = (new clojurewerkz.envisioncljs.chart_config.ChartConfig(cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"id","id",1013907597)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"width","width",1127031096)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"height","height",4087841945)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"top-x","top-x",1124448626)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"top-y","top-y",1124448627)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"chart-width","chart-width",3401920137)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"chart-height","chart-height",1594958184)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"x","x",1013904362)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"x-type","x-type",4494536417)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"y","y",1013904363)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"y-type","y-type",4523165568)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"z","z",1013904364)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"x-config","x-config",3920882089)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"y-config","y-config",1368725128)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"series-type","series-type",3351058498)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"series","series",4403032553)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"data","data",1016980252)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"additional-series","additional-series",2161064527)),cljs.core.get.call(null,m9142,new cljs.core.Keyword(null,"headline","headline",4193812806))));var remaining__5281__auto__ = cljs.core.dissoc.call(null,m9142,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"height","height",4087841945),new cljs.core.Keyword(null,"top-x","top-x",1124448626),new cljs.core.Keyword(null,"top-y","top-y",1124448627),new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"x-type","x-type",4494536417),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"y-type","y-type",4523165568),new cljs.core.Keyword(null,"z","z",1013904364),new cljs.core.Keyword(null,"x-config","x-config",3920882089),new cljs.core.Keyword(null,"y-config","y-config",1368725128),new cljs.core.Keyword(null,"series-type","series-type",3351058498),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),new cljs.core.Keyword(null,"headline","headline",4193812806));if(cljs.core.seq.call(null,remaining__5281__auto__))
{return cljs.core.merge.call(null,base__5280__auto__,remaining__5281__auto__);
} else
{return base__5280__auto__;
}
});
/**
* Factory function for class ChartConfig, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
* @param {...*} var_args
*/
clojurewerkz.envisioncljs.chart_config.strict_map__GT_ChartConfig = (function() { 
var strict_map__GT_ChartConfig__delegate = function (m9143,p__9150){var vec__9152 = p__9150;var drop_extra_keys_QMARK___5282__auto__ = cljs.core.nth.call(null,vec__9152,0,null);if(cljs.core.truth_((function (){var or__3478__auto__ = drop_extra_keys_QMARK___5282__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,m9143),20);
}
})()))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Record has wrong set of keys: %s",clojure.data.diff.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m9143)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"y-config","y-config",1368725128),null,new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),null,new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"z","z",1013904364),null,new cljs.core.Keyword(null,"additional-series","additional-series",2161064527),null,new cljs.core.Keyword(null,"y","y",1013904363),null,new cljs.core.Keyword(null,"x","x",1013904362),null,new cljs.core.Keyword(null,"x-config","x-config",3920882089),null,new cljs.core.Keyword(null,"y-type","y-type",4523165568),null,new cljs.core.Keyword(null,"top-y","top-y",1124448627),null,new cljs.core.Keyword(null,"top-x","top-x",1124448626),null,new cljs.core.Keyword(null,"headline","headline",4193812806),null,new cljs.core.Keyword(null,"x-type","x-type",4494536417),null,new cljs.core.Keyword(null,"series-type","series-type",3351058498),null,new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),null,new cljs.core.Keyword(null,"series","series",4403032553),null,new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"height","height",4087841945),null,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990),null], null), null)))));
}
return (new clojurewerkz.envisioncljs.chart_config.ChartConfig((function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"id","id",1013907597);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"width","width",1127031096);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"height","height",4087841945);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"top-x","top-x",1124448626);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"top-y","top-y",1124448627);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"chart-width","chart-width",3401920137);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"chart-height","chart-height",1594958184);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"x","x",1013904362);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"x-type","x-type",4494536417);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"y","y",1013904363);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"y-type","y-type",4523165568);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"z","z",1013904364);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"x-config","x-config",3920882089);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"y-config","y-config",1368725128);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"series-type","series-type",3351058498);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"series","series",4403032553);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"interpolation","interpolation",1573235990);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"data","data",1016980252);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"additional-series","additional-series",2161064527);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})(),(function (){var m__5154__auto__ = m9143;var k__5155__auto__ = new cljs.core.Keyword(null,"headline","headline",4193812806);var temp__4090__auto__ = cljs.core.find.call(null,m__5154__auto__,k__5155__auto__);if(cljs.core.truth_(temp__4090__auto__))
{var pair__5156__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__5156__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__5155__auto__,m__5154__auto__)));
}
})()));
};
var strict_map__GT_ChartConfig = function (m9143,var_args){
var p__9150 = null;if (arguments.length > 1) {
  p__9150 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return strict_map__GT_ChartConfig__delegate.call(this,m9143,p__9150);};
strict_map__GT_ChartConfig.cljs$lang$maxFixedArity = 1;
strict_map__GT_ChartConfig.cljs$lang$applyTo = (function (arglist__9154){
var m9143 = cljs.core.first(arglist__9154);
var p__9150 = cljs.core.rest(arglist__9154);
return strict_map__GT_ChartConfig__delegate(m9143,p__9150);
});
strict_map__GT_ChartConfig.cljs$core$IFn$_invoke$arity$variadic = strict_map__GT_ChartConfig__delegate;
return strict_map__GT_ChartConfig;
})()
;
clojurewerkz.envisioncljs.chart_config.make_chart_config = (function make_chart_config(p__9155){var map__9157 = p__9155;var map__9157__$1 = ((cljs.core.seq_QMARK_.call(null,map__9157))?cljs.core.apply.call(null,cljs.core.hash_map,map__9157):map__9157);var chart_height = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"chart-height","chart-height",1594958184),250);var series = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"series","series",4403032553));var id = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"id","id",1013907597),"chart");var height = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"height","height",4087841945),350);var interpolation = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"interpolation","interpolation",1573235990));var chart_width = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"chart-width","chart-width",3401920137),500);var data = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"data","data",1016980252));var width = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"width","width",1127031096),620);var z = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"z","z",1013904364));var additional_series = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"additional-series","additional-series",2161064527));var y = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"x","x",1013904362));var x_config = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"x-config","x-config",3920882089));var y_type = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"y-type","y-type",4523165568));var top_y = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"top-y","top-y",1124448627),30);var top_x = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"top-x","top-x",1124448626),60);var headline = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"headline","headline",4193812806));var x_type = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"x-type","x-type",4494536417));var series_type = cljs.core.get.call(null,map__9157__$1,new cljs.core.Keyword(null,"series-type","series-type",3351058498),new cljs.core.Keyword(null,"line","line",1017226086));return clojurewerkz.envisioncljs.chart_config.__GT_ChartConfig.call(null,id,width,height,top_x,top_y,chart_width,chart_height,x,(function (){var or__3478__auto__ = cljs.core.keyword.call(null,x_type);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return new cljs.core.Keyword(null,"category","category",1064415344);
}
})(),y,(function (){var or__3478__auto__ = cljs.core.keyword.call(null,y_type);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return new cljs.core.Keyword(null,"measure","measure",1952225488);
}
})(),z,clojurewerkz.envisioncljs.chart_config.make_axis_config.call(null,x_config),clojurewerkz.envisioncljs.chart_config.make_axis_config.call(null,clojurewerkz.envisioncljs.chart_config.y_config),cljs.core.keyword.call(null,series_type),series,cljs.core.keyword.call(null,interpolation),cljs.core.clj__GT_js.call(null,data),additional_series,headline);
});

//# sourceMappingURL=chart_config.js.map