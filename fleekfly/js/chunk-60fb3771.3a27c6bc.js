(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60fb3771"],{"111e":function(t,o,e){"use strict";var n=e("8f23"),a=e.n(n);a.a},"11e9":function(t,o,e){var n=e("52a7"),a=e("4630"),i=e("6821"),r=e("6a99"),s=e("69a8"),c=e("c69a"),l=Object.getOwnPropertyDescriptor;o.f=e("9e1e")?l:function(t,o){if(t=i(t),o=r(o,!0),c)try{return l(t,o)}catch(e){}if(s(t,o))return a(!n.f.call(t,o),t[o])}},"1f5a":function(t,o,e){},"28a5":function(t,o,e){"use strict";var n=e("aae3"),a=e("cb7c"),i=e("ebd6"),r=e("0390"),s=e("9def"),c=e("5f1b"),l=e("520a"),u=e("79e5"),f=Math.min,g=[].push,d="split",v="length",h="lastIndex",m=4294967295,p=!u(function(){RegExp(m,"y")});e("214f")("split",2,function(t,o,e,u){var I;return I="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[v]||2!="ab"[d](/(?:ab)*/)[v]||4!="."[d](/(.?)(.?)/)[v]||"."[d](/()()/)[v]>1||""[d](/.?/)[v]?function(t,o){var a=String(this);if(void 0===t&&0===o)return[];if(!n(t))return e.call(a,t,o);var i,r,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===o?m:o>>>0,p=new RegExp(t.source,u+"g");while(i=l.call(p,a)){if(r=p[h],r>f&&(c.push(a.slice(f,i.index)),i[v]>1&&i.index<a[v]&&g.apply(c,i.slice(1)),s=i[0][v],f=r,c[v]>=d))break;p[h]===i.index&&p[h]++}return f===a[v]?!s&&p.test("")||c.push(""):c.push(a.slice(f)),c[v]>d?c.slice(0,d):c}:"0"[d](void 0,0)[v]?function(t,o){return void 0===t&&0===o?[]:e.call(this,t,o)}:e,[function(e,n){var a=t(this),i=void 0==e?void 0:e[o];return void 0!==i?i.call(e,a,n):I.call(String(a),e,n)},function(t,o){var n=u(I,t,this,o,I!==e);if(n.done)return n.value;var l=a(t),g=String(this),d=i(l,RegExp),v=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"y":"g"),A=new d(p?l:"^(?:"+l.source+")",h),C=void 0===o?m:o>>>0;if(0===C)return[];if(0===g.length)return null===c(A,g)?[g]:[];var E=0,y=0,b=[];while(y<g.length){A.lastIndex=p?y:0;var w,S=c(A,p?g:g.slice(y));if(null===S||(w=f(s(A.lastIndex+(p?0:y)),g.length))===E)y=r(g,y,v);else{if(b.push(g.slice(E,y)),b.length===C)return b;for(var k=1;k<=S.length-1;k++)if(b.push(S[k]),b.length===C)return b;y=E=w}}return b.push(g.slice(E)),b}]})},3167:function(t,o){t.exports="data:image/png;base64,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"},3656:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"footer4"},[e("div",{staticClass:"baozhang"},[t._m(0),e("div",{staticClass:"buy-p"},[e("h3",[t._v(t._s(t.$t("mainFooter_1")))]),e("p",[e("em"),t._v(t._s(t.$t("mainFooter_1_1"))+" ")]),e("p",[e("em"),t._v(t._s(t.$t("mainFooter_1_2")))])])]),e("div",{staticClass:"footmenu"},[e("div",{staticClass:"footmenu-list"},[e("ul",{staticClass:"f-list"},[e("li",[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(o){return t.go(1)}}},[t._v(t._s(t.$t("mainFooter_About")))]),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(o){return t.go(2)}}},[t._v(t._s(t.$t("mainFooter_shipping")))]),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(o){return t.go(3)}}},[t._v(t._s(t.$t("mainFooter_return")))]),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(o){return t.go(4)}}},[t._v(t._s(t.$t("mainFooter_privacy")))]),e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(o){return t.go(5)}}},[t._v(t._s(t.$t("mainFooter_contact")))])]),e("li",[t._v("© 2019 "),e("a",{attrs:{href:"/",title:""}},[t._v(t._s(t.href))]),t._v(t._s(t.$t("mainFooter_2")))])])])])])},a=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"buy-logo"},[n("img",{attrs:{src:e("3167")}})])}],i={data:function(){return{href:""}},methods:{go:function(t){this.$router.push({name:"flootPage",params:{flootType:t}})}},mounted:function(){this.href=location.host}},r=i,s=(e("58d7"),e("2877")),c=Object(s["a"])(r,n,a,!1,null,"c6d3f0dc",null);o["a"]=c.exports},3846:function(t,o,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"58d7":function(t,o,e){"use strict";var n=e("1f5a"),a=e.n(n);a.a},"5a6c":function(t,o,e){"use strict";e.d(o,"d",function(){return n}),e.d(o,"c",function(){return a}),e.d(o,"e",function(){return i}),e.d(o,"a",function(){return r}),e.d(o,"b",function(){return s});e("6b54"),e("28a5"),e("c5f6");function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Number(t).toFixed(2)}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=t/100,e=o.toString().split(".");return 1==e.length?(o=o.toString()+".00",o):e.length>1?(e[1].length<2&&(o=o.toString()+"0"),o):void 0}function i(t){t=(t||0).toString();var o="";while(t.length>3)o=","+t.slice(-3)+o,t=t.slice(0,t.length-3);return t&&(o=t+o),o}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Number(t)/100}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Number(t)}},"5dbc":function(t,o,e){var n=e("d3f4"),a=e("8b97").set;t.exports=function(t,o,e){var i,r=o.constructor;return r!==e&&"function"==typeof r&&(i=r.prototype)!==e.prototype&&n(i)&&a&&a(t,i),t}},"5f53":function(t,o){t.exports="data:image/png;base64,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"},"6b54":function(t,o,e){"use strict";e("3846");var n=e("cb7c"),a=e("0bfb"),i=e("9e1e"),r="toString",s=/./[r],c=function(t){e("2aba")(RegExp.prototype,r,t,!0)};e("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)}):s.name!=r&&c(function(){return s.call(this)})},7286:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticStyle:{"background-color":"#f0f0f0"}},[n("van-nav-bar",{staticClass:"left50",attrs:{"left-arrow":"",fixed:t.bar_fixed,"z-index":3},on:{"click-left":t.onClickNavLeft}},[n("van-icon",{attrs:{slot:"left",name:"wap-nav"},slot:"left"}),n("img",{staticStyle:{"max-height":"40px"},attrs:{slot:"title",src:e("84cc")},slot:"title"}),n("van-icon",{attrs:{slot:"right",name:"search"},on:{click:t.onSeek},slot:"right"})],1),n("div",{staticStyle:{height:"46px"}}),n("van-sidebar",{directives:[{name:"show",rawName:"v-show",value:t.navLeft_show,expression:"navLeft_show"}],attrs:{id:"navLeft"},model:{value:t.activeKey,callback:function(o){t.activeKey=o},expression:"activeKey"}},t._l(t.category,function(o,e){return n("van-sidebar-item",{key:e,attrs:{title:o.mallCategoryName},on:{click:function(n){return t.golistPage(o.mallCategoryId,e)}}})}),1),n("van-overlay",{attrs:{show:t.show},on:{click:function(o){t.show=!1,t.navLeft_show=!1}}}),n("div",{staticClass:"swiper-area"},[n("van-swipe",{attrs:{autoplay:1e3},on:{change:t.onChange}},[t._l(t.bannerPicArray,function(o,e){return n("van-swipe-item",{key:e},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.image,expression:"banner.image"}],attrs:{width:"100%"},on:{click:function(e){return t.goGoodsPage(o.good_id)}}})])}),n("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v("\n                "+t._s(t.current+1)+"/"+t._s(t.bannerPicArray.length)+"\n            ")])],2),n("div",{staticClass:"swiper-span"})],1),n("div",{staticClass:"type-bar"},t._l(t.category,function(o,e){return n("div",{key:e,on:{click:function(n){return t.golistPage(o.mallCategoryId,e)}}},[n("img",{attrs:{src:o.image_url,width:"90%"}}),n("span",[t._v(t._s(o.mallCategoryName))])])}),0),t._l(t.floorData,function(t,o){return n("floor-component",{key:o,attrs:{floorData:t.floor,floorTitle:t.name}})}),n("div",{staticClass:"hot-area"},[n("div",{staticClass:"hot-title"},[t._v(t._s(t.$t("hotgoods")))]),n("div",{staticClass:"hot-goods"},[n("van-list",t._l(t.hotGoods,function(t,o){return n("van-col",{key:o,attrs:{span:"12"}},[n("goods-info",{attrs:{goodsId:t.goodsId,goodsImage:t.image,goodsName:t.name,goodsPrice:t.price,mallPrice:t.mallPrice}})],1)}),1)],1)]),n("mainFooter")],2)},a=[],i=e("bc3a"),r=e.n(i),s=(e("dfa4"),e("7212")),c=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"floor"},[e("div",{staticClass:"floor-title"},[t._v(t._s(t.floorTitle))]),e("div",{staticClass:"floor-anomaly"},[e("div",{staticClass:"floor-one"},[e("img",{attrs:{src:t.floorData0.image,width:"100%"},on:{click:function(o){return t.goGoodsPage(t.floorData0.goodsId)}}})]),e("div",[e("div",{staticClass:"floor-two"},[e("img",{attrs:{src:t.floorData1.image,width:"100%"},on:{click:function(o){return t.goGoodsPage(t.floorData1.goodsId)}}})]),e("div",[e("img",{attrs:{src:t.floorData2.image,width:"100%"},on:{click:function(o){return t.goGoodsPage(t.floorData2.goodsId)}}})])])]),e("div",{staticClass:"floor-rule"},t._l(t.floorData.slice(3),function(o,n){return e("div",{key:n},[e("img",{attrs:{src:o.image,width:"100%"},on:{click:function(e){return t.goGoodsPage(o.goodsId)}}})])}),0)])])},l=[],u={props:["floorData","floorTitle"],data:function(){return{floorData0:{},floorData1:{},floorData2:{}}},created:function(){this.floorData0=this.floorData[0],this.floorData1=this.floorData[1],this.floorData2=this.floorData[2]},methods:{goGoodsPage:function(t){this.$router.push({name:"Goods",query:{goodsId:t}})}}},f=u,g=(e("111e"),e("2877")),d=Object(g["a"])(f,c,l,!1,null,"15575326",null),v=d.exports,h=e("3656"),m=e("5a6c"),p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"goods-info",on:{click:function(o){return t.goGoodsPage()}}},[e("div",{staticClass:"goods-image"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.goodsImage,expression:"goodsImage"}],attrs:{width:"100%"}})]),e("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsName))]),"ind-BA"===t.$store.state.lang?e("div",{staticClass:"goods-price"},[t._v(t._s(t.$store.state.money_sign)+t._s(t._f("num")(t.goodsPrice))+" "),e("s",[t._v(" "+t._s(t.$store.state.money_sign)+t._s(t._f("num")(t.mallPrice)))])]):e("div",{staticClass:"goods-price"},[t._v(t._s(t.$store.state.money_sign)+t._s(t.goodsPrice)+" "),e("s",[t._v(" "+t._s(t.$store.state.money_sign)+t._s(t.mallPrice))])]),e("div",{staticClass:"goods-btn"},[t._v(t._s(t.$t("buyNow")))])])},I=[],A={props:["goodsImage","goodsName","goodsPrice","goodsId","mallPrice"],filters:{moneyFilter:function(t){return Object(m["d"])(t)},num:function(t){return Object(m["b"])(t)}},methods:{goGoodsPage:function(){this.$router.push({name:"Goods",query:{goodsId:this.goodsId}})}}},C=A,E=(e("af21"),Object(g["a"])(C,p,I,!1,null,"1c4176ae",null)),y=E.exports,b=e("841a"),w=e.n(b),S={data:function(){return{bar_fixed:!0,navLeft_show:!1,activeKey:9999999,show:!1,swiperOption:{slidesPerView:3},msg:"Shopping Mall",locationIcon:e("5f53"),bannerPicArray:[],category:[],adBanner:"",recommendGoods:[],floorData:[],floor1:[],floor2:[],floor3:[],floorName:{},hotGoods:[],nav_img:[e("e5c6")],current:0}},filters:{moneyFilter:function(t){return Object(m["d"])(t)},int:function(t){return Object(m["a"])(t)},num:function(t){return Object(m["b"])(t)}},components:{swiper:s["swiper"],swiperSlide:s["swiperSlide"],floorComponent:v,goodsInfo:y,mainFooter:h["a"]},created:function(){var t=this;r()({url:w.a.getShopingMallInfo,method:"get"}).then(function(o){console.log(o),200==o.status&&(t.category=o.data.data.category,t.bannerPicArray=o.data.data.slides,t.floorData=o.data.data.floorData,t.hotGoods=o.data.data.hotGoods)}).catch(function(t){console.log(t)})},methods:{golistPage:function(t,o){this.show=!1,this.navLeft_show=!1,this.$router.push({name:"CategoryList",params:{categorySubId:t,index:o}})},goGoodsPage:function(t){console.log(t),this.$router.push({name:"Goods",query:{goodsId:t}})},onClickNavLeft:function(){this.show=!this.show,this.navLeft_show=!this.navLeft_show},onChange:function(t){this.current=t},onSeek:function(){this.$router.push({name:"seek"})}},mounted:function(){console.log(location.href);var t=document.documentElement.clientHeight;document.getElementById("navLeft").style.height=t-46+"px"}},k=S,P=(e("c5f7"),Object(g["a"])(k,n,a,!1,null,"0dbb080e",null));o["default"]=P.exports},"766c":function(t,o,e){},"84cc":function(t,o,e){t.exports=e.p+"img/ydzs.eca6653c.png"},"8b97":function(t,o,e){var n=e("d3f4"),a=e("cb7c"),i=function(t,o){if(a(t),!n(o)&&null!==o)throw TypeError(o+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,o,n){try{n=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),o=!(t instanceof Array)}catch(a){o=!0}return function(t,e){return i(t,e),o?t.__proto__=e:n(t,e),t}}({},!1):void 0),check:i}},"8f23":function(t,o,e){},9093:function(t,o,e){var n=e("ce10"),a=e("e11e").concat("length","prototype");o.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},aa77:function(t,o,e){var n=e("5ca1"),a=e("be13"),i=e("79e5"),r=e("fdef"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(t,o,e){var a={},s=i(function(){return!!r[t]()||c[t]()!=c}),l=a[t]=s?o(g):r[t];e&&(a[e]=l),n(n.P+n.F*s,"String",a)},g=f.trim=function(t,o){return t=String(a(t)),1&o&&(t=t.replace(l,"")),2&o&&(t=t.replace(u,"")),t};t.exports=f},aae3:function(t,o,e){var n=e("d3f4"),a=e("2d95"),i=e("2b4c")("match");t.exports=function(t){var o;return n(t)&&(void 0!==(o=t[i])?!!o:"RegExp"==a(t))}},af21:function(t,o,e){"use strict";var n=e("e2d9"),a=e.n(n);a.a},c5f6:function(t,o,e){"use strict";var n=e("7726"),a=e("69a8"),i=e("2d95"),r=e("5dbc"),s=e("6a99"),c=e("79e5"),l=e("9093").f,u=e("11e9").f,f=e("86cc").f,g=e("aa77").trim,d="Number",v=n[d],h=v,m=v.prototype,p=i(e("2aeb")(m))==d,I="trim"in String.prototype,A=function(t){var o=s(t,!1);if("string"==typeof o&&o.length>2){o=I?o.trim():g(o,3);var e,n,a,i=o.charCodeAt(0);if(43===i||45===i){if(e=o.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(o.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+o}for(var r,c=o.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>a)return NaN;return parseInt(c,n)}}return+o};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var o=arguments.length<1?0:t,e=this;return e instanceof v&&(p?c(function(){m.valueOf.call(e)}):i(e)!=d)?r(new h(A(o)),e,v):A(o)};for(var C,E=e("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;E.length>y;y++)a(h,C=E[y])&&!a(v,C)&&f(v,C,u(h,C));v.prototype=m,m.constructor=v,e("2aba")(n,d,v)}},c5f7:function(t,o,e){"use strict";var n=e("766c"),a=e.n(n);a.a},e2d9:function(t,o,e){},e5c6:function(t,o,e){t.exports=e.p+"img/cartempty.1cec98ee.png"},fdef:function(t,o){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-60fb3771.3a27c6bc.js.map