(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{274:function(t,e,n){var r=n(5),o=n(205).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},275:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("2bcbdb5a",content,!0,{sourceMap:!1})},276:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("3836695f",content,!0,{sourceMap:!1})},277:function(t,e,n){var content=n(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("1c94a1da",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("5c696e76",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n.r(e);var r,o={name:"index"},l=(n(286),n(49)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"btn btn-success",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])],2)])])])])}),[],!1,null,"76cce15c",null).exports,d=new Uint8Array(16);function f(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(d)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var h=function(t){return"string"==typeof t&&v.test(t)},m=[],_=0;_<256;++_)m.push((_+256).toString(16).substr(1));var w,y,x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase();if(!h(n))throw TypeError("Stringified UUID is invalid");return n},U=0,I=0;var k=function(t){if(!h(t))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};var C=function(t,e,n){function r(t,r,o,l){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],i=0;i<t.length;++i)e.push(t.charCodeAt(i));return e}(t)),"string"==typeof r&&(r=k(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var c=new Uint8Array(16+t.length);if(c.set(r),c.set(t,r.length),(c=n(c))[6]=15&c[6]|e,c[8]=63&c[8]|128,o){l=l||0;for(var i=0;i<16;++i)o[l+i]=c[i];return o}return x(c)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function D(t){return 14+(t+64>>>9<<4)+1}function O(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function j(q,a,b,t,s,e){return O((n=O(O(a,q),O(t,e)))<<(r=s)|n>>>32-r,b);var n,r}function A(a,b,t,e,n,s,r){return j(b&t|~b&e,a,b,n,s,r)}function R(a,b,t,e,n,s,r){return j(b&e|t&~e,a,b,n,s,r)}function E(a,b,t,e,n,s,r){return j(b^t^e,a,b,n,s,r)}function T(a,b,t,e,n,s,r){return j(t^(b|~e),a,b,n,s,r)}function M(s,t,e,n){switch(s){case 0:return t&e^~t&n;case 1:return t^e^n;case 2:return t&e^t&n^e&n;case 3:return t^e^n}}function L(t,e){return t<<e|t>>>32-e}var S={v1:function(t,e,n){var i=e&&n||0,b=e||new Array(16),r=(t=t||{}).node||w,o=void 0!==t.clockseq?t.clockseq:y;if(null==r||null==o){var l=t.random||(t.rng||f)();null==r&&(r=w=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==o&&(o=y=16383&(l[6]<<8|l[7]))}var c=void 0!==t.msecs?t.msecs:Date.now(),d=void 0!==t.nsecs?t.nsecs:I+1,dt=c-U+(d-I)/1e4;if(dt<0&&void 0===t.clockseq&&(o=o+1&16383),(dt<0||c>U)&&void 0===t.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");U=c,I=d,y=o;var v=(1e4*(268435455&(c+=122192928e5))+d)%4294967296;b[i++]=v>>>24&255,b[i++]=v>>>16&255,b[i++]=v>>>8&255,b[i++]=255&v;var h=c/4294967296*1e4&268435455;b[i++]=h>>>8&255,b[i++]=255&h,b[i++]=h>>>24&15|16,b[i++]=h>>>16&255,b[i++]=o>>>8|128,b[i++]=255&o;for(var m=0;m<6;++m)b[i+m]=r[m];return e||x(b)},v3:C("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var i=0;i<e.length;++i)t[i]=e.charCodeAt(i)}return function(input){for(var output=[],t=32*input.length,i=0;i<t;i+=8){var e=input[i>>5]>>>i%32&255,n=parseInt("0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e),16);output.push(n)}return output}(function(t,e){t[e>>5]|=128<<e%32,t[D(e)-1]=e;for(var a=1732584193,b=-271733879,n=-1732584194,r=271733878,i=0;i<t.length;i+=16){var o=a,l=b,c=n,d=r;a=A(a,b,n,r,t[i],7,-680876936),r=A(r,a,b,n,t[i+1],12,-389564586),n=A(n,r,a,b,t[i+2],17,606105819),b=A(b,n,r,a,t[i+3],22,-1044525330),a=A(a,b,n,r,t[i+4],7,-176418897),r=A(r,a,b,n,t[i+5],12,1200080426),n=A(n,r,a,b,t[i+6],17,-1473231341),b=A(b,n,r,a,t[i+7],22,-45705983),a=A(a,b,n,r,t[i+8],7,1770035416),r=A(r,a,b,n,t[i+9],12,-1958414417),n=A(n,r,a,b,t[i+10],17,-42063),b=A(b,n,r,a,t[i+11],22,-1990404162),a=A(a,b,n,r,t[i+12],7,1804603682),r=A(r,a,b,n,t[i+13],12,-40341101),n=A(n,r,a,b,t[i+14],17,-1502002290),b=A(b,n,r,a,t[i+15],22,1236535329),a=R(a,b,n,r,t[i+1],5,-165796510),r=R(r,a,b,n,t[i+6],9,-1069501632),n=R(n,r,a,b,t[i+11],14,643717713),b=R(b,n,r,a,t[i],20,-373897302),a=R(a,b,n,r,t[i+5],5,-701558691),r=R(r,a,b,n,t[i+10],9,38016083),n=R(n,r,a,b,t[i+15],14,-660478335),b=R(b,n,r,a,t[i+4],20,-405537848),a=R(a,b,n,r,t[i+9],5,568446438),r=R(r,a,b,n,t[i+14],9,-1019803690),n=R(n,r,a,b,t[i+3],14,-187363961),b=R(b,n,r,a,t[i+8],20,1163531501),a=R(a,b,n,r,t[i+13],5,-1444681467),r=R(r,a,b,n,t[i+2],9,-51403784),n=R(n,r,a,b,t[i+7],14,1735328473),b=R(b,n,r,a,t[i+12],20,-1926607734),a=E(a,b,n,r,t[i+5],4,-378558),r=E(r,a,b,n,t[i+8],11,-2022574463),n=E(n,r,a,b,t[i+11],16,1839030562),b=E(b,n,r,a,t[i+14],23,-35309556),a=E(a,b,n,r,t[i+1],4,-1530992060),r=E(r,a,b,n,t[i+4],11,1272893353),n=E(n,r,a,b,t[i+7],16,-155497632),b=E(b,n,r,a,t[i+10],23,-1094730640),a=E(a,b,n,r,t[i+13],4,681279174),r=E(r,a,b,n,t[i],11,-358537222),n=E(n,r,a,b,t[i+3],16,-722521979),b=E(b,n,r,a,t[i+6],23,76029189),a=E(a,b,n,r,t[i+9],4,-640364487),r=E(r,a,b,n,t[i+12],11,-421815835),n=E(n,r,a,b,t[i+15],16,530742520),b=E(b,n,r,a,t[i+2],23,-995338651),a=T(a,b,n,r,t[i],6,-198630844),r=T(r,a,b,n,t[i+7],10,1126891415),n=T(n,r,a,b,t[i+14],15,-1416354905),b=T(b,n,r,a,t[i+5],21,-57434055),a=T(a,b,n,r,t[i+12],6,1700485571),r=T(r,a,b,n,t[i+3],10,-1894986606),n=T(n,r,a,b,t[i+10],15,-1051523),b=T(b,n,r,a,t[i+1],21,-2054922799),a=T(a,b,n,r,t[i+8],6,1873313359),r=T(r,a,b,n,t[i+15],10,-30611744),n=T(n,r,a,b,t[i+6],15,-1560198380),b=T(b,n,r,a,t[i+13],21,1309151649),a=T(a,b,n,r,t[i+4],6,-145523070),r=T(r,a,b,n,t[i+11],10,-1120210379),n=T(n,r,a,b,t[i+2],15,718787259),b=T(b,n,r,a,t[i+9],21,-343485551),a=O(a,o),b=O(b,l),n=O(n,c),r=O(r,d)}return[a,b,n,r]}(function(input){if(0===input.length)return[];for(var t=8*input.length,output=new Uint32Array(D(t)),i=0;i<t;i+=8)output[i>>5]|=(255&input[i/8])<<i%32;return output}(t),8*t.length))})),v4:function(t,e,n){var r=(t=t||{}).random||(t.rng||f)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return x(r)},v5:C("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var r=unescape(encodeURIComponent(t));t=[];for(var i=0;i<r.length;++i)t.push(r.charCodeAt(i))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var o=t.length/4+2,l=Math.ceil(o/16),c=new Array(l),d=0;d<l;++d){for(var f=new Uint32Array(16),v=0;v<16;++v)f[v]=t[64*d+4*v]<<24|t[64*d+4*v+1]<<16|t[64*d+4*v+2]<<8|t[64*d+4*v+3];c[d]=f}c[l-1][14]=8*(t.length-1)/Math.pow(2,32),c[l-1][14]=Math.floor(c[l-1][14]),c[l-1][15]=8*(t.length-1)&4294967295;for(var h=0;h<l;++h){for(var m=new Uint32Array(80),_=0;_<16;++_)m[_]=c[h][_];for(var w=16;w<80;++w)m[w]=L(m[w-3]^m[w-8]^m[w-14]^m[w-16],1);for(var a=n[0],b=n[1],y=n[2],x=n[3],U=n[4],I=0;I<80;++I){var s=Math.floor(I/20),k=L(a,5)+M(s,b,y,x)+U+e[s]+m[I]>>>0;U=x,x=y,y=L(b,30)>>>0,b=a,a=k}n[0]=n[0]+a>>>0,n[1]=n[1]+b>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+x>>>0,n[4]=n[4]+U>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}))};var B={components:{modal:c},props:{user:{type:Object},modalId:{type:String,default:function(){return S.v1()}}},methods:{openModal:function(){$("#".concat(this.modalId)).modal()}}},P=(n(288),Object(l.a)(B,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mytag"},[e("a",{attrs:{href:"javascript:;","data-toggle":"modal"},on:{click:this.openModal}},[e("i",{staticClass:"fa fa-eye"})]),this._v(" "),e("div",{staticClass:"modal fade",attrs:{id:this.modalId,tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("img",{attrs:{src:this.user.avatar,width:"470px"}})])])])])])}),[],!1,null,"50aea06e",null));e.default=P.exports},283:function(t,e,n){"use strict";n.r(e);n(4),n(28),n(7),n(10),n(8),n(85),n(17),n(274),n(54),n(67),n(33);var r=n(42),o=n(285),l={props:{pages:{type:[Array,Object],default:function(){return[]}},userId:String},data:function(){return{onDownloading:!1,reqsInfo:{dataset:[],total:200,index:0},poolInfo:{max:20,inProcess:0,done:0,pid:null},msg:""}},methods:{downloadImgLinks:function(){var t=this;if(""!==this.userId){var e=this.pages.filter((function(t){return t.indexOf("photos")>0})).map((function(e){return t.$axios.$get("/".concat(t.userId).concat(e))}));e.length<=0||Promise.all(e).then((function(e){if(!(e.length<=0)){t.onDownloading=!0;for(var n=[],i=0;i<e.length;i++){var o=e[i];if("success"===o.type){var l=o.data;"object"===Object(r.a)(l)&&(l=Object.values(l)),n.push.apply(n,l)}}t.fetchImageLinkByPhotoIds(n)}}))}},fetchImageLinkByPhotoIds:function(t){var e=this;this.reqsInfo.dataset=t,this.reqsInfo.total=t.length,this.reqsInfo.index=0,this.poolInfo.done=0,this.poolInfo.inProcess=0,this.onDownloading=!0,this.axiosPool((function(t){var n=new Blob([t.join("\n")],{type:"text/plain;charset=utf-8"});Object(o.saveAs)(n,"images_".concat(e.userId,".txt")),e.onDownloading=!1}))},axiosPool:function(t){var e=this,n={},r=[];this.poolInfo.pid=setInterval((function(){if(e.poolInfo.inProcess=Object.keys(n).length,e.msg="(".concat(e.poolInfo.done,"/").concat(e.reqsInfo.total,") - pool ").concat(e.poolInfo.inProcess),e.poolInfo.done>=e.reqsInfo.total)return clearInterval(e.poolInfo.pid),e.msg="",void t(r);if(!(e.poolInfo.inProcess>=e.poolInfo.max)){var o=Math.random(),l=e.reqsInfo.dataset[e.reqsInfo.index];n[o]=e.$axios.$get("/".concat(e.userId,"_photos_").concat(l)).then((function(t){var n=t.data,o=e.getMaxImgUrl(n);""!==o&&r.push(o)})).finally((function(){delete n[o],e.poolInfo.done++})),e.reqsInfo.index++}}),100)},getMaxImgUrl:function(img){for(var t=["sq","q","t","s","n","w","m","z","c","l","h","k","3k","4k","5k","6k","o"].reverse(),e="",i=0;i<t.length;i++){var n=t[i];if(void 0!==img["url_".concat(n)]&&void 0!==img["url_".concat(n)]){e=img["url_".concat(n)];break}}return e}}},c=n(49),d={components:{DownloadImagesButton:Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"javascript:;"},on:{click:t.downloadImgLinks}},[""!==t.msg?n("span",[t._v(t._s(t.msg))]):t._e(),t._v(" "),t.onDownloading?t._e():n("i",{staticClass:"fa fa-download"}),t._v(" "),t.onDownloading?n("i",{staticClass:"fa fa-hourglass"}):t._e()])}),[],!1,null,"7bff0932",null).exports,ShowAvatar:n(282).default},props:{user:{type:[Object,Array]},status:{type:String,default:function(){return"wait"}}},data:function(){return{userId:"",pages:[],totalVideos:0}},computed:{validUsername:function(){return null!=this.user.realname&&""!=this.user.realname}},created:function(){this.userId=this.user.user_id},mounted:function(){var t=this;this.loadPages((function(){t.totalVideos=t.pages.filter((function(t){return t.indexOf("video")>0})).length}))},methods:{loadPages:function(t){var e=this;this.$axios.$get("/".concat(this.userId,"_pageInfo")).then((function(n){"success"===n.type&&(e.pages=n.data,t())}))},removeThisUser:function(){this.$emit("handleOnDeleteUser",this.user)},retryDownload:function(){switch(this.status){case"task_alt":this.$emit("handleRetry",this.user,"done");break;case"dangerous":this.$emit("handleRetry",this.user,"delete")}}}},f=(n(290),Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-7"},[n("nuxt-link",{attrs:{target:"_blank",to:{path:"/flickr/detail",query:{userId:t.user.user_id}}}},[n("span",[t._v(t._s(t.user.user_id))])]),t._v(" "),t.validUsername?n("b",{staticClass:"badge badge-info"},[t._v(t._s(t.user.realname))]):t._e(),t._v(" "),n("a",{attrs:{target:"_blank",href:"https://www.flickr.com/photos/"+t.user.user_id}},[n("i",{staticClass:"fa fa-flickr"})]),t._v(" "),t.totalVideos>0?n("span",[n("i",{staticClass:"fa fa-video"})]):t._e(),t._v(" "),t.user.avatar?n("ShowAvatar",{attrs:{user:t.user}}):t._e()],1),t._v(" "),n("div",{staticClass:"col-5"},[t.pages.length>0?n("DownloadImagesButton",{attrs:{pages:t.pages,userId:t.userId}}):t._e(),t._v(" "),"pending_actions"!=t.status?n("a",{attrs:{href:"javascript:;"},on:{click:t.retryDownload}},[n("i",{staticClass:"fa fa-sync"})]):t._e(),t._v(" "),n("b-badge",{attrs:{variant:"info"}},[t._v(t._s(t.user.totalImgs))]),t._v(" "),n("b-badge",{attrs:{variant:"info"}},[n("span",{staticClass:"material-icons md-n"},[t._v(t._s(t.status))])]),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:t.removeThisUser}},[n("span",{staticClass:"material-icons md-n"},[t._v("delete")])])],1)])}),[],!1,null,"10689886",null));e.default=f.exports;installComponents(f,{ShowAvatar:n(282).default})},285:function(t,e,n){(function(n){var r,o,l;o=[],void 0===(l="function"==typeof(r=function(){"use strict";function e(a,b,t){var e=new XMLHttpRequest;e.open("GET",a),e.responseType="blob",e.onload=function(){g(e.response,b,t)},e.onerror=function(){console.error("could not download file")},e.send()}function r(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function o(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(t){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,t){var i=l.URL||l.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?o(n):r(n.href)?e(b,g,t):o(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){o(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,g,n){if(g=g||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(t,n),g);else if(r(t))e(t,g,n);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout((function(){o(i)}))}}:function(b,t,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return e(b,t,n);var r="application/octet-stream"===b.type,i=/constructor/i.test(l.HTMLElement)||l.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||r&&i||a)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var a=c.result;a=o?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},c.readAsDataURL(b)}else{var d=l.URL||l.webkitURL,f=d.createObjectURL(b);g?g.location=f:location.href=f,g=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});l.saveAs=g.saveAs=g,t.exports=g})?r.apply(e,o):r)||(t.exports=l)}).call(this,n(46))},286:function(t,e,n){"use strict";n(275)},287:function(t,e,n){(e=n(65)(!1)).push([t.i,".modal-mask[data-v-76cce15c]{position:absolute;background-color:#fff;z-index:10;min-width:260px}",""]),t.exports=e},288:function(t,e,n){"use strict";n(276)},289:function(t,e,n){(e=n(65)(!1)).push([t.i,".mytag[data-v-50aea06e]{display:inline-block;position:relative}",""]),t.exports=e},290:function(t,e,n){"use strict";n(277)},291:function(t,e,n){(e=n(65)(!1)).push([t.i,".material-icons.md-n[data-v-10689886]{font-size:1em}.material-icons.md-18[data-v-10689886]{font-size:18px}.material-icons.md-24[data-v-10689886]{font-size:24px}.material-icons.md-36[data-v-10689886]{font-size:36px}.material-icons.md-48[data-v-10689886]{font-size:48px}",""]),t.exports=e},292:function(t,e,n){"use strict";n(278)},293:function(t,e,n){(e=n(65)(!1)).push([t.i,".mbtn span[data-v-c1687d2a]{vertical-align:middle}.show_form[data-v-c1687d2a]{position:fixed;z-index:1000;background-color:#f3f3f3;width:99%;height:210px;top:60px;padding:15px}.mt-210[data-v-c1687d2a]{margin-top:210px}",""]),t.exports=e},301:function(t,e,n){"use strict";n.r(e);n(28),n(17),n(6),n(206),n(54),n(13),n(144),n(67),n(207),n(68);var r=n(25),o={components:{UserItem:n(283).default},head:function(){return{title:""===this.pageInfo.title?"NuxtJS":"NuxtJS | "+this.pageInfo.title}},props:{},data:function(){return{pageInfo:{title:"Flickr"},link:{url:"",text:""},message:"",links:[],waitUsers:{},deleteUsers:{},doneUsers:{},allUsers:{}}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("/users_wait").then((function(e){"error"!==e.data.type&&(t.waitUsers=e.data.data)})),t.$axios.get("/users_delete").then((function(e){"error"!==e.data.type&&(t.deleteUsers=e.data.data)})),t.$axios.get("/users_done").then((function(e){"error"!==e.data.type&&(t.doneUsers=e.data.data)})),t.$axios.get("/users_all").then((function(e){"error"!==e.data.type&&(t.allUsers=e.data.data)}));case 4:case"end":return e.stop()}}),e)})))()},refreshObjExceptThis:function(t,e){var n={};for(var r in e)t.user_id!==r&&(n[r]=e[r]);return n},removeByDelete:function(t){var e=this;this.$axios.delete("/".concat(t.user_id,"_photos")).then((function(t){return console.log(t,"remove photos done")})),this.$axios.$delete("/users_delete/".concat(t.user_id)).then((function(n){e.deleteUsers=e.refreshObjExceptThis(t,e.deleteUsers)}))},moveWaitToDelete:function(t){var e=this;this.$axios.post("/users_delete/".concat(t.user_id),t).then((function(n){e.$axios.$delete("/users_wait/".concat(t.user_id)).then((function(n){e.waitUsers=e.refreshObjExceptThis(t,e.waitUsers),e.deleteUsers[t.user_id]=t}))}))},moveDoneToDelete:function(t){var e=this;this.$axios.post("/users_delete/".concat(t.user_id),t).then((function(n){e.$axios.$delete("/users_done/".concat(t.user_id)).then((function(n){e.doneUsers=e.refreshObjExceptThis(t,e.doneUsers),e.deleteUsers[t.user_id]=t}))}))},onDeleteUser:function(t,e){"delete"===e&&this.removeByDelete(t),"wait"===e&&this.moveWaitToDelete(t),"done"===e&&this.moveDoneToDelete(t)},onRetryDownload:function(t,e){var n=this;"delete"===e&&this.$axios.post("/users_wait/".concat(t.user_id),t).then((function(e){n.$axios.$delete("/users_delete/".concat(t.user_id)).then((function(e){n.deleteUsers=n.refreshObjExceptThis(t,n.deleteUsers),n.waitUsers[t.user_id]=t}))})),"done"===e&&this.$axios.post("/users_wait/".concat(t.user_id),t).then((function(e){n.$axios.$delete("/users_done/".concat(t.user_id)).then((function(e){n.doneUsers=n.refreshObjExceptThis(t,n.doneUsers),n.waitUsers[t.user_id]=t}))}))},getMsgOfInvalidData:function(){return this.validUrl(this.link.url)?""===this.link.text?"Description cannot be empty":"":"URL invalid"},addDataToServer:function(){var t=this;if(this.link.text=this.link.url,this.validUrl(this.link.url)&&""!==this.link.text){this.message="";var e=this.getUserIdFromUrl(this.link.url);if(void 0===this.allUsers[e]){var n={user_id:e,display_text:this.link.text};this.$axios.post("/users_all/".concat(e),n).then((function(r){t.$axios.$post("/users_wait/".concat(e),n).then((function(r){t.waitUsers[e]=n,t.allUsers[e]=n,t.link={url:"",text:""}}))}))}else this.message="This user already on the server"}else this.message=this.getMsgOfInvalidData()},validUrl:function(t){if(""===t)return!1;try{new URL(t)}catch(t){return!1}return!0},getUserIdFromUrl:function(t){return this.validUrl(t)?(t.endsWith("/")&&(t=t.substring(0,t.length-1)),(t=(t=t.replace("https://www.flickr.com/photos/","")).replace("https://www.flickr.com/people/","")).indexOf("/")>0&&(t=t.substring(0,t.indexOf("/"))),t):""}}},l=(n(292),n(49)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid m-2"},[n("div",{staticClass:"row show_form"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.link.url,expression:"link.url"}],staticClass:"form-control",attrs:{type:"text",id:"url"},domProps:{value:t.link.url},on:{change:t.addDataToServer,input:function(e){e.target.composing||t.$set(t.link,"url",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"mbtn btn btn-primary",attrs:{type:"button"},on:{click:t.addDataToServer}},[t._v("Add "),n("span",{staticClass:"material-icons"},[t._v("add")])]),t._v(" "),""!==t.message?n("div",{staticClass:"mt-2 alert alert-danger"},[t._v(t._s(t.message))]):t._e()])]),t._v(" "),n("div",{staticClass:"row mt-210"},[n("div",{staticClass:"col-lg-6 col-sm-12 p-2"},[t._m(0),t._v(" "),t._l(t.waitUsers,(function(e,r){return n("div",{key:"wait"+r},[n("user-item",{attrs:{user:e,status:"pending_actions"},on:{handleOnDeleteUser:function(n){return t.onDeleteUser(e,"wait")}}})],1)}))],2),t._v(" "),n("div",{staticClass:"col-lg-6 col-sm-12 p-2"},[t._m(1),t._v(" "),t._l(t.doneUsers,(function(e,r){return n("div",{key:"done"+r},[n("user-item",{attrs:{user:e,status:"task_alt"},on:{handleRetry:t.onRetryDownload,handleOnDeleteUser:function(n){return t.onDeleteUser(e,"done")}}})],1)}))],2),t._v(" "),t.deleteUsers.length>0||Object.keys(t.deleteUsers).length>0?n("div",{staticClass:"col-lg-12 col-sm-12 p-2"},[t._m(2),t._v(" "),t._l(t.deleteUsers,(function(e,r){return n("div",{key:"del"+r},[n("user-item",{attrs:{user:e,status:"dangerous"},on:{handleRetry:t.onRetryDownload,handleOnDeleteUser:function(n){return t.onDeleteUser(e,"delete")}}})],1)}))],2):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 alert alert-info"},[this._v("Wait "),e("span",{staticClass:"material-icons md-n"},[this._v("pending_actions")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 alert alert-success"},[this._v("Done "),e("span",{staticClass:"material-icons md-n"},[this._v("thumb_up")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-2 alert alert-danger"},[this._v("Deleted "),e("span",{staticClass:"material-icons md-n"},[this._v("delete")])])}],!1,null,"c1687d2a",null);e.default=component.exports;installComponents(component,{UserItem:n(283).default})}}]);