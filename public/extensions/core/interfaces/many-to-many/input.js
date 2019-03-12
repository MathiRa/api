parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"BEmr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("../../../mixins/interface")),t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e){return o(e)||l(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function o(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}var u={mixins:[e.default],name:"interface-many-to-many",data:function(){return{sort:{field:null,asc:!0},selectExisting:!1,selectionSaving:!1,selection:[],editExisting:null,addNew:null,edits:{},viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[]}},computed:{relationSetup:function(){return!!this.relation},currentCollection:function(){return this.relation.collection_one.collection},relatedCollection:function(){return this.relation.junction.collection_one.collection},relatedCollectionFields:function(){return this.relation.junction.collection_one.fields},junctionCollectionFields:function(){return this.relation.collection_many.fields},relatedKey:function(){return this.$lodash.find(this.relation.junction.collection_one.fields,{primary_key:!0}).field},junctionPrimaryKey:function(){return this.$lodash.find(this.relation.collection_many.fields,{primary_key:!0}).field},junctionRelatedKey:function(){return this.relation.junction.field_many.field},visibleFields:function(){return!1===this.relationSetup?[]:this.options.fields?this.options.fields.split(",").map(function(e){return e.trim()}):[]},items:function(){var e=this;return!1===this.relationSetup?null:this.$lodash.orderBy((this.value||[]).filter(function(e){return!e.$delete}).filter(function(t){return null!=t[e.junctionRelatedKey]}),function(t){return t[e.junctionRelatedKey][e.sort.field]},this.sort.asc?"asc":"desc")},columns:function(){var e=this;return!1===this.relationSetup?null:this.visibleFields.map(function(t){return{fieldInfo:e.relatedCollectionFields[t],field:t,name:e.$helpers.formatTitle(t)}})},relatedDefaultValues:function(){return!1===this.relationSetup?null:this.relatedCollectionFields?this.$lodash.mapValues(this.relatedCollectionFields,function(e){return e.default_value}):null},relatedDefaultsWithEdits:function(){return!1===this.relationSetup?null:this.relatedDefaultValues?t({},this.relatedDefaultValues,this.edits):null},filters:function(){return!1===this.relationSetup?null:[].concat(r(this.options.preferences&&this.options.preferences.filters||[]),r(this.filtersOverride))},viewOptions:function(){if(!1===this.relationSetup)return null;var e=this.options.preferences&&this.options.preferences.viewOptions||{};return t({},e,this.viewOptionsOverride)},viewType:function(){return!1===this.relationSetup?null:this.viewTypeOverride?this.viewTypeOverride:this.options.preferences&&this.options.preferences.viewType||"tabular"},viewQuery:function(){if(!1===this.relationSetup)return null;var e=this.options.preferences&&this.options.preferences.viewQuery||{};return t({},e,this.viewQueryOverride)}},created:function(){this.relationSetup&&(this.sort.field=this.visibleFields&&this.visibleFields[0],this.setSelection()),this.onSearchInput=this.$lodash.debounce(this.onSearchInput,200)},watch:{value:function(){this.setSelection()},relation:function(){this.relationSetup&&(this.sort.field=this.visibleFields&&this.visibleFields[0],this.setSelection())}},methods:{setViewOptions:function(e){this.viewOptionsOverride=t({},this.viewOptionsOverride,e)},setViewQuery:function(e){this.viewQueryOverride=t({},this.viewQueryOverride,e)},setSelection:function(){var e=this;this.value&&(this.selection=this.value.filter(function(e){return!e.$delete}).filter(function(t){return null!=t[e.junctionRelatedKey]}).map(function(t){return t[e.junctionRelatedKey]}))},changeSort:function(e){this.sort.field!==e?(this.sort.asc=!0,this.sort.field=e):this.sort.asc=!this.sort.asc},saveSelection:function(){var e=this;this.selectionSaving=!0;var i=(this.value||[]).filter(function(e){return!e.$delete}).filter(function(t){return t[e.junctionRelatedKey]}).map(function(t){return t[e.junctionRelatedKey][e.relatedKey]}),r=this.selection.map(function(t){return t[e.relatedKey]}),s=(this.value||[]).map(function(i){var s,l=(i[e.junctionRelatedKey]||{})[e.relatedKey];if(!l)return i;if(!1===r.includes(l))return n(s={},e.junctionPrimaryKey,i[e.junctionPrimaryKey]),n(s,"$delete",!0),s;if(i.$delete&&r.includes(l)){var o=t({},i);return delete o.$delete,o}return i}),l=r.filter(function(e){return!1===i.includes(e)});(l.length>0?this.$api.getItem(this.relatedCollection,l.join(",")):Promise.resolve()).then(function(e){return e?e.data:null}).then(function(t){t&&(Array.isArray(t)?t.forEach(function(t){return s.push(n({},e.junctionRelatedKey,t))}):s.push(n({},e.junctionRelatedKey,t))),e.$emit("input",s),e.selectExisting=!1,e.selectionSaving=!1}).catch(function(t){e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t}),e.selectionSaving=!1,e.selectExisting=!1})},dismissSelection:function(){this.setSelection(),this.selectExisting=!1},stageValue:function(e){var t=e.field,i=e.value;this.$set(this.edits,t,i)},saveEdits:function(){var e=this;this.$emit("input",r((this.value||[]||[]).map(function(i){return i.id===e.editExisting[e.junctionPrimaryKey]?t({},i,n({},e.junctionRelatedKey,t({},i[e.junctionRelatedKey],e.edits))):i}))),this.edits={},this.editExisting=!1},addNewItem:function(){this.$emit("input",[].concat(r(this.value||[]),[n({},this.junctionRelatedKey,this.edits)])),this.edits={},this.addNew=!1},removeRelated:function(e){var t=this,i=e.junctionKey,r=e.relatedKey,s=e.item;i?this.$emit("input",(this.value||[]).map(function(e){var r;return e[t.junctionPrimaryKey]===i?(n(r={},t.junctionPrimaryKey,e[t.junctionPrimaryKey]),n(r,"$delete",!0),r):e})):i||r?this.$emit("input",(this.value||[]).filter(function(e){return(e[t.junctionRelatedKey]||{})[t.relatedKey]!==r})):this.$emit("input",(this.value||[]).filter(function(e){return!1===t.$lodash.isEqual(e,s)}))},onSearchInput:function(e){this.setViewQuery({q:e})}}};exports.default=u;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"interface-many-to-many"},[!1===t.relationSetup?i("div",{staticClass:"notice"},[i("p",[i("i",{staticClass:"material-icons"},[t._v("warning")]),t._v(" "+t._s(t.$t("interfaces-many-to-many-relation_not_setup"))+" ")])]):t._e(),t._v(" "),[t.items.length?i("div",{staticClass:"table"},[i("div",{staticClass:"header"},[i("div",{staticClass:"row"},t._l(t.columns,function(e){return i("button",{key:e.field,attrs:{type:"button"},on:{click:function(i){return t.changeSort(e.field)}}},[t._v(" "+t._s(e.name)+" "),t.sort.field===e.field?i("i",{staticClass:"material-icons"},[t._v(" "+t._s(t.sort.asc?"arrow_downward":"arrow_upward")+" ")]):t._e()])}),0)]),t._v(" "),i("div",{staticClass:"body"},t._l(t.items,function(e){return i("div",{key:e[t.junctionPrimaryKey],staticClass:"row",on:{click:function(i){t.editExisting=e}}},[t._l(t.columns,function(s){return i("div",{key:s.field,staticClass:"no-wrap"},[i("v-ext-display",{attrs:{"interface-type":(s.fieldInfo||{}).interface||null,name:s.field,type:s.fieldInfo.type,datatype:s.fieldInfo.datatype,options:s.fieldInfo.options,value:e[t.junctionRelatedKey][s.field]}})],1)}),t._v(" "),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("remove_related"),expression:"$t('remove_related')"}],staticClass:"remove-item",attrs:{type:"button"},on:{click:function(i){return i.stopPropagation(),t.removeRelated({junctionKey:e[t.junctionPrimaryKey],relatedKey:e[t.junctionRelatedKey][t.relatedKey],item:e})}}},[i("i",{staticClass:"material-icons"},[t._v("close")])])],2)}),0)]):t._e(),t._v(" "),i("button",{staticClass:"style-btn select",attrs:{type:"button"},on:{click:function(e){t.addNew=!0}}},[i("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" "+t._s(t.$t("add_new"))+" ")]),t._v(" "),i("button",{staticClass:"style-btn select",attrs:{type:"button"},on:{click:function(e){t.selectExisting=!0}}},[i("i",{staticClass:"material-icons"},[t._v("playlist_add")]),t._v(" "),i("span",[t._v(t._s(t.$t("select_existing")))])])],t._v(" "),t.selectExisting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:t.$t("select_existing"),buttons:{save:{text:"save",color:"accent",loading:t.selectionSaving}},"action-required":""},on:{close:t.dismissSelection,save:t.saveSelection}},[i("div",{staticClass:"search"},[i("v-input",{staticClass:"search-input",attrs:{type:"search",placeholder:t.$t("search")},on:{input:t.onSearchInput}})],1),t._v(" "),i("v-items",{staticClass:"items",attrs:{collection:t.relatedCollection,filters:t.filters,"view-query":t.viewQuery,"view-type":t.viewType,"view-options":t.viewOptions,selection:t.selection},on:{options:t.setViewOptions,query:t.setViewQuery,select:function(e){t.selection=e}}})],1)],1):t._e(),t._v(" "),t.editExisting?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:t.$t("editing_item"),buttons:{save:{text:"save",color:"accent",loading:t.selectionSaving}}},on:{close:function(e){t.editExisting=!1},save:t.saveEdits}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{fields:t.relatedCollectionFields,values:t.editExisting[t.junctionRelatedKey]},on:{"stage-value":t.stageValue}})],1)])],1):t._e(),t._v(" "),t.addNew?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:t.$t("creating_item"),buttons:{save:{text:"save",color:"accent",loading:t.selectionSaving}}},on:{close:function(e){t.addNew=null},save:t.addNewItem}},[i("div",{staticClass:"edit-modal-body"},[i("v-form",{attrs:{fields:t.relatedCollectionFields,values:t.relatedDefaultsWithEdits},on:{"stage-value":t.stageValue}})],1)])],1):t._e()],2)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-10b09b",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["BEmr"], "__DirectusExtension__")