(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{317:function(e,t,r){"use strict";r.r(t);r(7),r(17),r(54),r(68),r(209);var n=r(23),c=(r(55),r(20)),o={scrollToTop:!0,data:function(){return{images:[],caching:[],onLoading:!0,onLoading2:!0,testUrl:"",msg:""}},mounted:function(){this.init()},methods:{init:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getImages();case 2:console.log("init all image done"),e.msg="0/".concat(e.images.length);case 4:case"end":return t.stop()}}),t)})))()},downloadAllImages:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[],n=0,e.onLoading2=!1,i=e.images.length-1;case 4:if(!(i>0)){t.next=16;break}if(r.push(e.getImage(e.images[i])),!(r.length>=50)){t.next=13;break}return t.next=9,Promise.all(r);case 9:t.sent,n+=r.length,e.msg="".concat(n,"/").concat(e.images.length),r=[];case 13:i--,t.next=4;break;case 16:if(!(r.length>0)){t.next=23;break}return t.next=19,Promise.all(r);case 19:t.sent,n+=r.length,e.msg="".concat(n,"/").concat(e.images.length),r=[];case 23:e.onLoading2=!0;case 24:case"end":return t.stop()}}),t)})))()},scrollToTop:function(){$("html, body").animate({scrollTop:0},"slow")},loadingImgs:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.nextItems();case 2:e.$nextTick((function(){$("#myGallery").justifiedGallery({rowHeight:300,lastRow:"nojustify",margins:3}).on("jg.complete",(function(){}))}));case 3:case"end":return t.stop()}}),t)})))()},nextItems:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,c,i,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.images&&0!==e.images.length){t.next=2;break}return t.abrupt("return");case 2:e.onLoading=!1,r=[],c=[],i=0;case 6:if(!(i<500)){t.next=17;break}if(r.push(e.getImage(e.images.pop())),!(r.length>=20)){t.next=14;break}return t.next=11,Promise.all(r);case 11:o=t.sent,c=[].concat(Object(n.a)(c),Object(n.a)(o)),r=[];case 14:i++,t.next=6;break;case 17:if(!(r.length>0)){t.next=23;break}return t.next=20,Promise.all(r);case 20:l=t.sent,c=[].concat(Object(n.a)(c),Object(n.a)(l)),r=[];case 23:e.onLoading=!0,e.caching=c;case 25:case"end":return t.stop()}}),t)})))()},getImages:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.year){t.next=3;break}return e.images=[],t.abrupt("return");case 3:return t.next=5,fetch("/jsons/urls.".concat(e.$route.query.year,".json"));case 5:if(!(r=t.sent).ok){t.next=12;break}return t.next=9,r.json();case 9:e.images=t.sent,t.next=13;break;case 12:e.images=[];case 13:case"end":return t.stop()}}),t)})))()},shuffle:function(e){for(var t,r,n=e.length;0!==n;)r=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[r],e[r]=t;return e},getImage:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,a,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$localforage.images.getItem(e);case 2:if(null==(n=r.sent)){r.next=5;break}return r.abrupt("return",t.imgUrlFromBytes(n));case 5:return r.next=7,fetch("https://cdn.bolacmuito.xyz/ximg.php?url="+e);case 7:return c=r.sent,r.next=10,c.arrayBuffer();case 10:return a=r.sent,s=c.headers.get("content-type"),n={buffer:a,bufferType:s,year:t.$route.query.year,path:e},r.next=15,t.$localforage.images.setItem(e,n);case 15:return r.abrupt("return",t.imgUrlFromBytes(n));case 16:case"end":return r.stop()}}),r)})))()},imgUrlFromBytes:function(e){return URL.createObjectURL(new Blob([e.buffer],{type:e.bufferType}))}}},l=r(49),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(t){return e.downloadAllImages()}}},[r("i",{staticClass:"fa fa-download"}),e._v(" "),r("i",{staticClass:"fa fa-spinner fa-spin",class:{hidden:e.onLoading2}}),e._v(" "),e.msg?r("span",{domProps:{textContent:e._s(e.msg)}}):e._e()]),e._v(" "),r("a",{staticClass:"btn",class:{"btn-success":2019==e.$route.query.year,"btn-primary":2019!=e.$route.query.year},attrs:{href:"?year=2019"}},[e._v("2019")]),e._v(" "),r("a",{staticClass:"btn",class:{"btn-success":2020==e.$route.query.year,"btn-primary":2020!=e.$route.query.year},attrs:{href:"?year=2020"}},[e._v("2020")]),e._v(" "),r("a",{staticClass:"btn",class:{"btn-success":2021==e.$route.query.year,"btn-primary":2021!=e.$route.query.year},attrs:{href:"?year=2021"}},[e._v("2021")]),e._v(" "),r("div",{attrs:{id:"myGallery"}},e._l(e.caching,(function(image){return r("a",{key:image,attrs:{target:"_blank",href:image}},[r("img",{staticClass:"img-fluid lazy",attrs:{src:image}})])})),0),e._v(" "),r("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(t){return e.loadingImgs()}}},[e._v("\n    Load more ("),r("span",{domProps:{textContent:e._s(e.images.length)}}),e._v(" images left)\n    "),r("i",{staticClass:"fa fa-spinner fa-spin",class:{hidden:e.onLoading}})]),e._v(" "),r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"},on:{click:function(t){return e.scrollToTop()}}},[e._v("Go to Top "),r("i",{staticClass:"fas fa-arrow-up"})])])}),[],!1,null,"1d9d13f2",null);t.default=component.exports}}]);