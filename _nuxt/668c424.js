(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{252:function(t,e,n){"use strict";n.r(e);n(9),n(7),n(5),n(17);var o={data:function(){return{rawCode:"",convertedText:""}},methods:{updateInfo:function(t,e){var n=t.target.value;if(!(void 0===n||""===n||n.length<40)){var o=["Sòòl","Rề","Đồ","Fà","Mì","Là","Sòl","Sì","Đô","Rê","Mi","Fa","Sol","La","Đố","Si","Mí","Rế","Sól","Fá","Đốố","Lá","Míí","Sí"];this.convertedText=n.split("\n").map((function(t,e){return t.split(" ").map((function(t,e){if(void 0===t||""===t||isNaN(t))return t;var n=parseInt(t);return void 0!==o[n-1]?o[n-1]:t})).join(" ")})).join("\n")}}}},r=n(46),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("textarea",{staticClass:"form-control lefttext",attrs:{rows:"30"},on:{change:t.updateInfo}})]),t._v(" "),n("div",{staticClass:"col-6"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.convertedText,expression:"convertedText"}],staticClass:"form-control righttext",attrs:{rows:"30"},domProps:{value:t.convertedText},on:{input:function(e){e.target.composing||(t.convertedText=e.target.value)}}})])])])}),[],!1,null,"84ed27a6",null);e.default=component.exports}}]);