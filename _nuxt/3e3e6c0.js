(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{307:function(e,t,n){"use strict";n.r(t);n(7),n(17),n(54),n(68),n(209);var r=n(23),o=(n(55),n(20)),c={scrollToTop:!0,data:function(){return{images:[],finalImages:[],caching:[],onLoading:!0,onLoading2:!0,testUrl:"",msg:""}},mounted:function(){var e=this;this.initFinalImages(),this.getImages().then((function(t){e.msg="0/".concat(e.images.length)}))},methods:{initFinalImages:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$localforage.images.keys();case 2:n=t.sent,r=[],i=0;case 5:if(!(i<n.length)){t.next=15;break}return t.next=8,e.$localforage.images.getItem(n[i]);case 8:if(t.sent.year===e.$route.query.year){t.next=11;break}return t.abrupt("continue",12);case 11:r.push(n[i]);case 12:i++,t.next=5;break;case 15:e.finalImages=e.shuffle(r);case 16:case"end":return t.stop()}}),t)})))()},downloadAllImages:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],r=0,e.onLoading2=!1,i=0;case 4:if(!(i<e.images.length)){t.next=16;break}if(n.push(e.getImage(e.images[i])),!(n.length>=50)){t.next=13;break}return t.next=9,Promise.all(n);case 9:t.sent,r+=n.length,e.msg="".concat(r,"/").concat(e.images.length),n=[];case 13:i++,t.next=4;break;case 16:if(!(n.length>0)){t.next=23;break}return t.next=19,Promise.all(n);case 19:t.sent,r+=n.length,e.msg="".concat(r,"/").concat(e.images.length),n=[];case 23:e.onLoading2=!0;case 24:case"end":return t.stop()}}),t)})))()},scrollToTop:function(){$("html, body").animate({scrollTop:0},"slow")},loadingImgs:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.nextItems();case 2:e.$nextTick((function(){$("#myGallery").justifiedGallery({rowHeight:300,lastRow:"nojustify",margins:3}).on("jg.complete",(function(){}))}));case 3:case"end":return t.stop()}}),t)})))()},nextItems:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.finalImages&&0!==e.finalImages.length){t.next=2;break}return t.abrupt("return");case 2:for(e.onLoading=!1,n=[],i=0;i<100;i++)n.push(e.getImage({image_url:e.finalImages.pop(),image_date:null}));return t.next=7,Promise.all(n);case 7:o=t.sent,e.onLoading=!0,e.caching=[].concat(Object(r.a)(e.caching),Object(r.a)(o));case 10:case"end":return t.stop()}}),t)})))()},getImages:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.year){t.next=3;break}return e.images=[],t.abrupt("return");case 3:return t.next=5,fetch("/jsons/".concat(e.$route.query.year,".json"));case 5:if(!(n=t.sent).ok){t.next=13;break}return t.next=9,n.json();case 9:r=t.sent,e.images=e.shuffle(r),t.next=14;break;case 13:e.images=[];case 14:case"end":return t.stop()}}),t)})))()},shuffle:function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e},getImage:function(img){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,a,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$localforage.images.getItem(img.image_url);case 2:if(null==(n=t.sent)){t.next=5;break}return t.abrupt("return",e.imgUrlFromBytes(n));case 5:return t.next=7,fetch("https://cdn.bolacmuito.xyz/ximg.php?url="+img.image_url);case 7:return r=t.sent,t.next=10,r.arrayBuffer();case 10:return a=t.sent,s=r.headers.get("content-type"),n={buffer:a,bufferType:s,date:img.image_date,year:e.$route.query.year,path:img.image_url},t.next=15,e.$localforage.images.setItem(img.image_url,n);case 15:return t.abrupt("return",e.imgUrlFromBytes(n));case 16:case"end":return t.stop()}}),t)})))()},imgUrlFromBytes:function(e){return URL.createObjectURL(new Blob([e.buffer],{type:e.bufferType}))}}},l=n(49),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(t){return e.downloadAllImages()}}},[e._v("Download all\n    "),n("i",{staticClass:"fa fa-download"}),e._v(" "),n("i",{staticClass:"fa fa-spinner fa-spin",class:{hidden:e.onLoading2}}),e._v(" "),e.msg?n("span",{domProps:{textContent:e._s(e.msg)}}):e._e()]),e._v(" "),n("div",{attrs:{id:"myGallery"}},e._l(e.caching,(function(image){return n("a",{key:image,attrs:{target:"_blank",href:image}},[n("img",{staticClass:"img-fluid lazy",attrs:{src:image}})])})),0),e._v(" "),e.finalImages.length>0?n("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(t){return e.loadingImgs()}}},[e._v("\n    Load more ("),n("span",{domProps:{textContent:e._s(e.finalImages.length)}}),e._v(" images left)\n    "),n("i",{staticClass:"fa fa-spinner fa-spin",class:{hidden:e.onLoading}})]):e._e(),e._v(" "),n("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"},on:{click:function(t){return e.scrollToTop()}}},[e._v("Go to Top "),n("i",{staticClass:"fas fa-arrow-up"})])])}),[],!1,null,"118fe660",null);t.default=component.exports}}]);