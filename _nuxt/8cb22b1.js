(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(t,e,n){"use strict";n.r(e);n(16),n(56);var r=n(19),o={name:"AdminManager",head:function(){return{title:""===this.pageInfo.title?"Training NuxtJS":"Training NuxtJS | "+this.pageInfo.title}},mounted:function(){this.fetchPageInfo()},data:function(){return{pageInfo:{title:""}}},methods:{fetchPageInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.pathMatch,r="https://test.opencms.codes/cake/api/sites/".concat(n),e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:"success"===(data=e.sent).type&&(console.log(data),t.pageInfo=data.data);case 9:case"end":return e.stop()}}),e)})))()}}},c=n(46),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.$route.params)+" "+this._s(this.$route.query))])}),[],!1,null,"bf234e5c",null);e.default=component.exports}}]);