(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{244:function(t,e,n){"use strict";n.r(e);var o={name:"ListArticle",props:{moduleName:String,className:String,data:{type:Array,defaut:[]}},mounted:function(){console.log(this.moduleName,this.data)},methods:{test:function(){}}},c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("h1",[t._v(t._s(t.moduleName))]),t._v(" "),t._l(t.data,(function(e){return n("div",[n("div",[t._v("Title: "+t._s(e.title))]),t._v(" "),n("div",[t._v("Desc: "+t._s(e.description))]),t._v(" "),n("hr")])}))],2)}),[],!1,null,"b70eb3b0",null);e.default=component.exports},247:function(t,e,n){"use strict";n.r(e);n(23),n(16),n(56);var o=n(19),c={components:{ListArticle:n(244).default},beforeCreate:function(){console.log("beforeCreate")},beforeMount:function(){console.log("beforeMount")},created:function(){console.log("created"),this.fetchXXX()},mounted:function(){console.log("mounted")},data:function(){return{mountains:[],planets:[]}},methods:{fetchXXX:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.opencms.codes/articles/mountains");case 2:return n=e.sent,e.next=5,fetch("https://api.opencms.codes/articles/planets");case 5:return o=e.sent,e.next=8,n.json();case 8:return t.mountains=e.sent.data,e.next=11,o.json();case 11:t.planets=e.sent.data;case 12:case"end":return e.stop()}}),e)})))()}}},r=n(46),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("ListArticle",{attrs:{moduleName:"aaaaaaa",className:"flex-1",data:this.mountains}}),this._v(" "),e("ListArticle",{attrs:{moduleName:"bbbbbbb",className:"flex-1",data:this.planets}})],1)}),[],!1,null,null,null),l=component.exports;installComponents(component,{ListArticle:n(244).default});var f={components:{Logo:l},head:function(){return{title:""===this.pageInfo.title?"Training NuxtJS":"Training NuxtJS | "+this.pageInfo.title}},mounted:function(){this.fetchPageInfo()},data:function(){return{pageInfo:{title:""}}},methods:{fetchPageInfo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.pathMatch,o="https://api.opencms.codes/sites/".concat(n),e.next=4,fetch(o);case 4:return c=e.sent,e.next=7,c.json();case 7:"success"===(data=e.sent).type&&(console.log(data),t.pageInfo=data.data);case 9:case"end":return e.stop()}}),e)})))()},checkLoginState:function(){FB.getLoginStatus((function(t){console.log("statusChangeCallback"),console.log(t),"connected"===t.status?(console.log("Welcome!  Fetching your information.... "),FB.api("/me",(function(t){console.log("Successful login for: "+t.name),alert("Thanks for logging in, "+t.name+"!")}))):alert("Please log into this webpage.")}))}}},m=Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(this.pageInfo.title))]),t._v(" "),n("button",{attrs:{scope:"public_profile,email"},on:{click:function(e){return t.checkLoginState()}}},[t._v("Login\n  ")])],1)}),[],!1,null,"1ad9a798",null);e.default=m.exports}}]);