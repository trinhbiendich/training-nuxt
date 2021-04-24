(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{272:function(t,e,r){var content=r(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("6251d368",content,!0,{sourceMap:!1})},273:function(t,e,r){var content=r(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("2fc08032",content,!0,{sourceMap:!1})},275:function(t,e,r){"use strict";r.r(e);var n={name:"UserItem",props:{user:{type:[Object,Array]},status:{type:String,default:function(){return"wait"}}},methods:{removeThisUser:function(){this.$emit("handleOnDeleteUser",this.user)}}},l=(r(277),r(47)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-9"},[r("a",{attrs:{href:"/flickr/detail/?userId="+t.user.user_id}},[t._v(t._s(t.user.user_id))])]),t._v(" "),r("div",{staticClass:"col-3"},[r("b-badge",{attrs:{variant:"info"}},[r("span",{staticClass:"material-icons md-n"},[t._v(t._s(t.status))])]),t._v(" "),r("a",{attrs:{href:"javascript:;"},on:{click:t.removeThisUser}},[r("span",{staticClass:"material-icons md-n"},[t._v("delete")])])],1)])}),[],!1,null,"1a616c42",null);e.default=component.exports},277:function(t,e,r){"use strict";r(272)},278:function(t,e,r){(e=r(65)(!1)).push([t.i,".material-icons.md-n[data-v-1a616c42]{font-size:1em}.material-icons.md-18[data-v-1a616c42]{font-size:18px}.material-icons.md-24[data-v-1a616c42]{font-size:24px}.material-icons.md-36[data-v-1a616c42]{font-size:36px}.material-icons.md-48[data-v-1a616c42]{font-size:48px}",""]),t.exports=e},279:function(t,e,r){"use strict";r(273)},280:function(t,e,r){(e=r(65)(!1)).push([t.i,".mbtn span[data-v-2a78429f]{vertical-align:middle}",""]),t.exports=e},284:function(t,e,r){"use strict";r.r(e);r(27),r(16),r(5),r(203),r(53),r(12),r(143),r(67),r(204),r(57);var n=r(19),l={components:{UserItem:r(275).default},head:function(){return{title:""===this.pageInfo.title?"Training NuxtJS":"Training NuxtJS | "+this.pageInfo.title}},props:{},data:function(){return{pageInfo:{title:"Flickr"},link:{url:"",text:""},message:"",links:[],waitUsers:{},deleteUsers:{},doneUsers:{},allUsers:{}}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("/users_wait").then((function(e){"error"!==e.data.type&&(t.waitUsers=e.data.data)})),t.$axios.get("/users_delete").then((function(e){"error"!==e.data.type&&(t.deleteUsers=e.data.data)})),t.$axios.get("/users_done").then((function(e){"error"!==e.data.type&&(t.doneUsers=e.data.data)})),t.$axios.get("/users_all").then((function(e){"error"!==e.data.type&&(t.allUsers=e.data.data)}));case 4:case"end":return e.stop()}}),e)})))()},refreshObjExceptThis:function(t,e){var r={};for(var n in e)t.user_id!==n&&(r[n]=e[n]);return r},onDeleteUser:function(t,e){var r=this;"delete"===e&&this.$axios.post("/users_wait/".concat(t.user_id),t).then((function(e){r.$axios.$delete("/users_delete/".concat(t.user_id)).then((function(e){r.deleteUsers=r.refreshObjExceptThis(t,r.deleteUsers),r.waitUsers[t.user_id]=t}))})),"wait"===e&&this.$axios.post("/users_delete/".concat(t.user_id),t).then((function(e){r.$axios.$delete("/users_wait/".concat(t.user_id)).then((function(e){r.waitUsers=r.refreshObjExceptThis(t,r.waitUsers),r.deleteUsers[t.user_id]=t}))})),"done"===e&&this.$axios.post("/users_delete/".concat(t.user_id),t).then((function(e){r.$axios.$delete("/users_done/".concat(t.user_id)).then((function(e){r.doneUsers=r.refreshObjExceptThis(t,r.doneUsers),r.deleteUsers[t.user_id]=t}))}))},getMsgOfInvalidData:function(){return this.validUrl(this.link.url)?""===this.link.text?"Description cannot be empty":"":"URL invalid"},addDataToServer:function(){var t=this;if(this.validUrl(this.link.url)&&""!==this.link.text){this.message="";var e=this.getUserIdFromUrl(this.link.url);if(void 0===this.allUsers[e]){var r={user_id:e,display_text:this.link.text};this.$axios.post("/users_all/".concat(e),r).then((function(n){t.$axios.$post("/users_wait/".concat(e),r).then((function(n){t.waitUsers[e]=r,t.allUsers[e]=r,t.link={url:"",text:""}}))}))}else this.message="This user already on the server"}else this.message=this.getMsgOfInvalidData()},validUrl:function(t){if(""===t)return!1;try{new URL(t)}catch(t){return!1}return!0},getUserIdFromUrl:function(t){return this.validUrl(t)?(t.endsWith("/")&&(t=t.substring(0,t.length-1)),(t=(t=t.replace("https://www.flickr.com/photos/","")).replace("https://www.flickr.com/people/","")).indexOf("/")>0&&(t=t.substring(0,t.indexOf("/"))),t):""}}},o=(r(279),r(47)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid m-2"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.link.url,expression:"link.url"}],staticClass:"form-control",attrs:{type:"text",id:"url"},domProps:{value:t.link.url},on:{change:t.addDataToServer,input:function(e){e.target.composing||t.$set(t.link,"url",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"text"}},[t._v("Text")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.link.text,expression:"link.text"}],staticClass:"form-control",attrs:{type:"text",id:"text"},domProps:{value:t.link.text},on:{change:t.addDataToServer,input:function(e){e.target.composing||t.$set(t.link,"text",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"mbtn btn btn-primary",attrs:{type:"button"},on:{click:t.addDataToServer}},[t._v("Add "),r("span",{staticClass:"material-icons"},[t._v("add")])]),t._v(" "),""!==t.message?r("div",{staticClass:"mt-2 alert alert-danger"},[t._v(t._s(t.message))]):t._e()])]),t._v(" "),r("div",{staticClass:"row mt-2"},[r("div",{staticClass:"col-4 p-2"},[t._m(0),t._v(" "),t._l(t.waitUsers,(function(e,n){return r("div",{key:"wait"+n},[r("user-item",{attrs:{user:e,status:"pending_actions"},on:{handleOnDeleteUser:function(r){return t.onDeleteUser(e,"wait")}}})],1)}))],2),t._v(" "),r("div",{staticClass:"col-4 p-2"},[t._m(1),t._v(" "),t._l(t.deleteUsers,(function(e,n){return r("div",{key:"del"+n},[r("user-item",{attrs:{user:e,status:"dangerous"},on:{handleOnDeleteUser:function(r){return t.onDeleteUser(e,"delete")}}})],1)}))],2),t._v(" "),r("div",{staticClass:"col-4 p-2"},[t._m(2),t._v(" "),t._l(t.doneUsers,(function(e,n){return r("div",{key:"done"+n},[r("user-item",{attrs:{user:e,status:"task_alt"},on:{handleOnDeleteUser:function(r){return t.onDeleteUser(e,"done")}}})],1)}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 alert alert-info"},[this._v("Wait "),e("span",{staticClass:"material-icons md-n"},[this._v("pending_actions")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 alert alert-danger"},[this._v("Deleted "),e("span",{staticClass:"material-icons md-n"},[this._v("delete")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 alert alert-success"},[this._v("Done "),e("span",{staticClass:"material-icons md-n"},[this._v("thumb_up")])])}],!1,null,"2a78429f",null);e.default=component.exports;installComponents(component,{UserItem:r(275).default})}}]);