(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{272:function(e,t,n){var r=n(4),o=n(203).values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},273:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("4186ff2f",content,!0,{sourceMap:!1})},274:function(e,t,n){var content=n(283);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("1365ab5f",content,!0,{sourceMap:!1})},277:function(e,t,n){"use strict";n.r(t);n(6),n(9),n(272);var r=n(41),o=n(279),l={name:"UserItem",props:{user:{type:[Object,Array]},status:{type:String,default:function(){return"wait"}}},data:function(){return{onDownloading:!1,userId:"",msg:""}},computed:{validUsername:function(){return null!=this.user.realname&&""!=this.user.realname}},created:function(){this.userId=this.user.user_id},methods:{removeThisUser:function(){this.$emit("handleOnDeleteUser",this.user)},retryDownload:function(){switch(this.status){case"task_alt":this.$emit("handleRetry",this.user,"done");break;case"dangerous":this.$emit("handleRetry",this.user,"delete")}},collectData:function(e,t,n,r,o){var l=this;if(r>=n)return o(),void(this.onDownloading=!1);this.msg="(".concat(r,"/").concat(n,")");var c=e[r];this.$axios.$get("/".concat(this.userId,"_photos_").concat(c)).then((function(c){if("success"!==c.type);else for(var img=c.data,d=["sq","q","t","s","n","w","m","z","c","l","h","k","3k","4k","5k","6k","o"].reverse(),i=0;i<d.length;i++){var f=d[i];if(void 0!==img["url_".concat(f)]&&void 0!==img["url_".concat(f)]){t.push(img["url_".concat(f)]);break}}l.collectData(e,t,n,r+1,o)}))},downloadImgLinks:function(){var e=this;this.$axios.$get("/".concat(this.userId,"_photos")).then((function(t){if("success"===t.type){e.onDownloading=!0;var n=t.data;"object"===Object(r.a)(n)&&(n=Object.values(n));var l=[];e.collectData(n,l,n.length,0,(function(){var t=new Blob([l.join("\n")],{type:"text/plain;charset=utf-8"});Object(o.saveAs)(t,"imgs_".concat(e.userId,".txt"))}))}}))}}},c=(n(280),n(47)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-7"},[e.validUsername?n("b",[e._v(e._s(e.user.realname))]):e._e(),e._v(" "),n("nuxt-link",{staticClass:"badge badge-info",attrs:{target:"_blank",to:{path:"/flickr/detail",query:{userId:e.user.user_id}}}},[n("span",[e._v(e._s(e.user.user_id))]),e._v(" "),n("i",{staticClass:"fa fa-images"})]),e._v(" "),n("a",{attrs:{target:"_blank",href:"https://www.flickr.com/photos/"+e.user.user_id}},[n("i",{staticClass:"fa fa-flickr"})]),e._v(" "),""!==e.msg?n("span",[e._v(e._s(e.msg))]):e._e()],1),e._v(" "),n("div",{staticClass:"col-5"},[n("a",{attrs:{href:"javascript:;"},on:{click:e.downloadImgLinks}},[e.onDownloading?e._e():n("i",{staticClass:"fa fa-download"}),e._v(" "),e.onDownloading?n("i",{staticClass:"fa fa-hourglass"}):e._e()]),e._v(" "),"pending_actions"!=e.status?n("a",{attrs:{href:"javascript:;"},on:{click:e.retryDownload}},[n("i",{staticClass:"fa fa-sync"})]):e._e(),e._v(" "),n("b-badge",{attrs:{variant:"info"}},[e._v(e._s(e.user.totalImgs))]),e._v(" "),n("b-badge",{attrs:{variant:"info"}},[n("span",{staticClass:"material-icons md-n"},[e._v(e._s(e.status))])]),e._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:e.removeThisUser}},[n("span",{staticClass:"material-icons md-n"},[e._v("delete")])])],1)])}),[],!1,null,"76fea662",null);t.default=component.exports},279:function(e,t,n){(function(n){var r,o,l;o=[],void 0===(l="function"==typeof(r=function(){"use strict";function t(a,b,e){var t=new XMLHttpRequest;t.open("GET",a),t.responseType="blob",t.onload=function(){g(t.response,b,e)},t.onerror=function(){console.error("could not download file")},t.send()}function r(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function o(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(e){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,e){var i=l.URL||l.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?o(n):r(n.href)?t(b,g,e):o(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){o(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,g,n){if(g=g||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(e,n),g);else if(r(e))t(e,g,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(b,e,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return t(b,e,n);var r="application/octet-stream"===b.type,i=/constructor/i.test(l.HTMLElement)||l.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||r&&i||a)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var a=c.result;a=o?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},c.readAsDataURL(b)}else{var d=l.URL||l.webkitURL,f=d.createObjectURL(b);g?g.location=f:location.href=f,g=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});l.saveAs=g.saveAs=g,e.exports=g})?r.apply(t,o):r)||(e.exports=l)}).call(this,n(48))},280:function(e,t,n){"use strict";n(273)},281:function(e,t,n){(t=n(64)(!1)).push([e.i,".material-icons.md-n[data-v-76fea662]{font-size:1em}.material-icons.md-18[data-v-76fea662]{font-size:18px}.material-icons.md-24[data-v-76fea662]{font-size:24px}.material-icons.md-36[data-v-76fea662]{font-size:36px}.material-icons.md-48[data-v-76fea662]{font-size:48px}",""]),e.exports=t},282:function(e,t,n){"use strict";n(274)},283:function(e,t,n){(t=n(64)(!1)).push([e.i,".mbtn span[data-v-3ed9a0d1]{vertical-align:middle}",""]),e.exports=t},289:function(e,t,n){"use strict";n.r(t);n(27),n(16),n(5),n(204),n(53),n(12),n(143),n(67),n(205),n(66);var r=n(24),o={components:{UserItem:n(277).default},head:function(){return{title:""===this.pageInfo.title?"NuxtJS":"NuxtJS | "+this.pageInfo.title}},props:{},data:function(){return{pageInfo:{title:"Flickr"},link:{url:"",text:""},message:"",links:[],waitUsers:{},deleteUsers:{},doneUsers:{},allUsers:{}}},mounted:function(){this.initData()},methods:{initData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios.get("/users_wait").then((function(t){"error"!==t.data.type&&(e.waitUsers=t.data.data)})),e.$axios.get("/users_delete").then((function(t){"error"!==t.data.type&&(e.deleteUsers=t.data.data)})),e.$axios.get("/users_done").then((function(t){"error"!==t.data.type&&(e.doneUsers=t.data.data)})),e.$axios.get("/users_all").then((function(t){"error"!==t.data.type&&(e.allUsers=t.data.data)}));case 4:case"end":return t.stop()}}),t)})))()},refreshObjExceptThis:function(e,t){var n={};for(var r in t)e.user_id!==r&&(n[r]=t[r]);return n},removeByDelete:function(e){var t=this;this.$axios.delete("/".concat(e.user_id,"_photos")).then((function(e){return console.log(e,"remove photos done")})),this.$axios.$delete("/users_delete/".concat(e.user_id)).then((function(n){t.deleteUsers=t.refreshObjExceptThis(e,t.deleteUsers)}))},moveWaitToDelete:function(e){var t=this;this.$axios.post("/users_delete/".concat(e.user_id),e).then((function(n){t.$axios.$delete("/users_wait/".concat(e.user_id)).then((function(n){t.waitUsers=t.refreshObjExceptThis(e,t.waitUsers),t.deleteUsers[e.user_id]=e}))}))},moveDoneToDelete:function(e){var t=this;this.$axios.post("/users_delete/".concat(e.user_id),e).then((function(n){t.$axios.$delete("/users_done/".concat(e.user_id)).then((function(n){t.doneUsers=t.refreshObjExceptThis(e,t.doneUsers),t.deleteUsers[e.user_id]=e}))}))},onDeleteUser:function(e,t){"delete"===t&&this.removeByDelete(e),"wait"===t&&this.moveWaitToDelete(e),"done"===t&&this.moveDoneToDelete(e)},onRetryDownload:function(e,t){var n=this;"delete"===t&&this.$axios.post("/users_wait/".concat(e.user_id),e).then((function(t){n.$axios.$delete("/users_delete/".concat(e.user_id)).then((function(t){n.deleteUsers=n.refreshObjExceptThis(e,n.deleteUsers),n.waitUsers[e.user_id]=e}))})),"done"===t&&this.$axios.post("/users_wait/".concat(e.user_id),e).then((function(t){n.$axios.$delete("/users_done/".concat(e.user_id)).then((function(t){n.doneUsers=n.refreshObjExceptThis(e,n.doneUsers),n.waitUsers[e.user_id]=e}))}))},getMsgOfInvalidData:function(){return this.validUrl(this.link.url)?""===this.link.text?"Description cannot be empty":"":"URL invalid"},addDataToServer:function(){var e=this;if(this.validUrl(this.link.url)&&""!==this.link.text){this.message="";var t=this.getUserIdFromUrl(this.link.url);if(void 0===this.allUsers[t]){var n={user_id:t,display_text:this.link.text};this.$axios.post("/users_all/".concat(t),n).then((function(r){e.$axios.$post("/users_wait/".concat(t),n).then((function(r){e.waitUsers[t]=n,e.allUsers[t]=n,e.link={url:"",text:""}}))}))}else this.message="This user already on the server"}else this.message=this.getMsgOfInvalidData()},validUrl:function(e){if(""===e)return!1;try{new URL(e)}catch(e){return!1}return!0},getUserIdFromUrl:function(e){return this.validUrl(e)?(e.endsWith("/")&&(e=e.substring(0,e.length-1)),(e=(e=e.replace("https://www.flickr.com/photos/","")).replace("https://www.flickr.com/people/","")).indexOf("/")>0&&(e=e.substring(0,e.indexOf("/"))),e):""}}},l=(n(282),n(47)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid m-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"url"}},[e._v("URL")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link.url,expression:"link.url"}],staticClass:"form-control",attrs:{type:"text",id:"url"},domProps:{value:e.link.url},on:{change:e.addDataToServer,input:function(t){t.target.composing||e.$set(e.link,"url",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"text"}},[e._v("Text")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link.text,expression:"link.text"}],staticClass:"form-control",attrs:{type:"text",id:"text"},domProps:{value:e.link.text},on:{change:e.addDataToServer,input:function(t){t.target.composing||e.$set(e.link,"text",t.target.value)}}})]),e._v(" "),n("button",{staticClass:"mbtn btn btn-primary",attrs:{type:"button"},on:{click:e.addDataToServer}},[e._v("Add "),n("span",{staticClass:"material-icons"},[e._v("add")])]),e._v(" "),""!==e.message?n("div",{staticClass:"mt-2 alert alert-danger"},[e._v(e._s(e.message))]):e._e()])]),e._v(" "),n("div",{staticClass:"row mt-2"},[e.deleteUsers.length>0?n("div",{staticClass:"col-lg-12 col-sm-12 p-2"},[e._m(0),e._v(" "),e._l(e.deleteUsers,(function(t,r){return n("div",{key:"del"+r},[n("user-item",{attrs:{user:t,status:"dangerous"},on:{handleRetry:e.onRetryDownload,handleOnDeleteUser:function(n){return e.onDeleteUser(t,"delete")}}})],1)}))],2):e._e(),e._v(" "),n("div",{staticClass:"col-lg-6 col-sm-12 p-2"},[e._m(1),e._v(" "),e._l(e.waitUsers,(function(t,r){return n("div",{key:"wait"+r},[n("user-item",{attrs:{user:t,status:"pending_actions"},on:{handleOnDeleteUser:function(n){return e.onDeleteUser(t,"wait")}}})],1)}))],2),e._v(" "),n("div",{staticClass:"col-lg-6 col-sm-12 p-2"},[e._m(2),e._v(" "),e._l(e.doneUsers,(function(t,r){return n("div",{key:"done"+r},[n("user-item",{attrs:{user:t,status:"task_alt"},on:{handleRetry:e.onRetryDownload,handleOnDeleteUser:function(n){return e.onDeleteUser(t,"done")}}})],1)}))],2)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-2 alert alert-danger"},[this._v("Deleted "),t("span",{staticClass:"material-icons md-n"},[this._v("delete")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-2 alert alert-info"},[this._v("Wait "),t("span",{staticClass:"material-icons md-n"},[this._v("pending_actions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-2 alert alert-success"},[this._v("Done "),t("span",{staticClass:"material-icons md-n"},[this._v("thumb_up")])])}],!1,null,"3ed9a0d1",null);t.default=component.exports;installComponents(component,{UserItem:n(277).default})}}]);