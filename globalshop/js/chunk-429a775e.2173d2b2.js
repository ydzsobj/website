(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-429a775e"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var i,o,c=String(a(t)),s=n(r),l=c.length;return s<0||s>=l?e?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?e?c.charAt(s):i:e?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),i=r("6821"),o=r("6a99"),c=r("69a8"),s=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=i(e),t=o(t,!0),s)try{return l(e,t)}catch(r){}if(c(e,t))return a(!n.f.call(e,t),e[t])}},"1f16":function(e,t,r){e.exports=r.p+"img/cash.a71311d7.jpg"},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),i=r("79e5"),o=r("be13"),c=r("2b4c"),s=r("520a"),l=c("species"),u=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=c(e),h=!i(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),p=h?!i(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[d](""),!t}):void 0;if(!h||!p||"replace"===e&&!u||"split"===e&&!f){var g=/./[d],b=r(o,d,""[e],function(e,t,r,n,a){return t.exec===s?h&&!a?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),m=b[0],v=b[1];n(String.prototype,e,m),a(RegExp.prototype,d,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),i=r("ebd6"),o=r("0390"),c=r("9def"),s=r("5f1b"),l=r("520a"),u=r("79e5"),f=Math.min,d=[].push,h="split",p="length",g="lastIndex",b=4294967295,m=!u(function(){RegExp(b,"y")});r("214f")("split",2,function(e,t,r,u){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var i,o,c,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?b:t>>>0,m=new RegExp(e.source,u+"g");while(i=l.call(m,a)){if(o=m[g],o>f&&(s.push(a.slice(f,i.index)),i[p]>1&&i.index<a[p]&&d.apply(s,i.slice(1)),c=i[0][p],f=o,s[p]>=h))break;m[g]===i.index&&m[g]++}return f===a[p]?!c&&m.test("")||s.push(""):s.push(a.slice(f)),s[p]>h?s.slice(0,h):s}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):v.call(String(a),r,n)},function(e,t){var n=u(v,e,this,t,v!==r);if(n.done)return n.value;var l=a(e),d=String(this),h=i(l,RegExp),p=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),y=new h(m?l:"^(?:"+l.source+")",g),x=void 0===t?b:t>>>0;if(0===x)return[];if(0===d.length)return null===s(y,d)?[d]:[];var S=0,k=0,_=[];while(k<d.length){y.lastIndex=m?k:0;var I,C=s(y,m?d:d.slice(k));if(null===C||(I=f(c(y.lastIndex+(m?0:k)),d.length))===S)k=o(d,k,p);else{if(_.push(d.slice(S,k)),_.length===x)return _;for(var $=1;$<=C.length-1;$++)if(_.push(C[$]),_.length===x)return _;k=S=I}}return _.push(d.slice(S)),_}]})},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"463d":function(e,t,r){"use strict";var n=r("4fcd"),a=r.n(n);a.a},"4fcd":function(e,t,r){},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(o=function(e){var t,r,o,u,f=this;return l&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(t=f[c]),o=a.call(f,e),s&&o&&(f[c]=f.global?o.index+o[0].length:t),l&&o&&o.length>1&&i.call(o[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),e.exports=o},"5a6c":function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return a}),r.d(t,"c",function(){return i});r("6b54"),r("28a5"),r("c5f6");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Number(e).toFixed(2)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e/100,r=t.toString().split(".");return 1==r.length?(t=t.toString()+".00",t):r.length>1?(r[1].length<2&&(t=t.toString()+"0"),t):void 0}function i(e){e=(e||0).toString();var t="";while(e.length>3)t=","+e.slice(-3)+t,e=e.slice(0,e.length-3);return e&&(t=e+t),t}},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var i,o=t.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&n(i)&&a&&a(e,i),e}},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"6b54":function(e,t,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),i=r("9e1e"),o="toString",c=/./[o],s=function(e){r("2aba")(RegExp.prototype,o,e,!0)};r("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?a.call(e):void 0)}):c.name!=o&&s(function(){return c.call(this)})},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),i=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:i}},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),i=r("79e5"),o=r("fdef"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(e,t,r){var a={},c=i(function(){return!!o[e]()||s[e]()!=s}),l=a[e]=c?t(d):o[e];r&&(a[r]=l),n(n.P+n.F*c,"String",a)},d=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},aab7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"navbar-div"},[n("van-nav-bar",{attrs:{title:e.isBuy?e.$t("account"):e.$t("shopCart"),"left-text":e.$t("back"),"left-arrow":""},on:{"click-left":e.onClickLeft}},[e.isBuy?e._e():n("van-button",{attrs:{slot:"right",size:"small",round:"",type:"danger"},on:{click:e.clearCart},slot:"right"},[e._v("\n             "+e._s(this.$t("clearCart"))+"\n          ")])],1)],1),0===e.cartInfo.length?n("div",{staticStyle:{height:"200px",display:"flex","justify-content":"center","flex-direction":"column","align-items":"center","background-color":"#fff"}},[n("van-row",[n("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:r("e5c6"),alt:""}})]),n("van-row",[e._v("\n            "+e._s(e.$t("cartnull"))+"\n        ")]),n("van-row",[n("van-button",{attrs:{size:"small",type:"default",icon:"arrow-left"},nativeOn:{click:function(t){return e.onClickLeft(t)}}},[e._v(e._s(e.$t("back")))])],1)],1):e._e(),n("van-checkbox-group",{staticClass:"card-goods",model:{value:e.checkedGoods,callback:function(t){e.checkedGoods=t},expression:"checkedGoods"}},e._l(e.cartInfo,function(t){return n("van-checkbox",{key:t.selectedSkuComb.id,staticClass:"card-goods__item",attrs:{disabled:e.isBuy,name:t.selectedSkuComb.id}},[n("van-card",{attrs:{title:t.title,desc:e.showDesc(t),num:t.selectedNum,thumb:e.showImage(t.skuAttrText)}},[n("div",{staticClass:"redcolor",attrs:{slot:"tags"},slot:"tags"},[n("span",[e._v(e._s(e.$store.money_sign)+e._s(e._f("toDivide")(t.selectedSkuComb.price)))])]),e.isBuy?e._e():n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-button",{staticStyle:{padding:"0 2px"},attrs:{size:"mini",plain:"",hairline:"",type:"danger"},on:{click:function(r){return r.stopPropagation(),e.clearCartOne(t.selectedSkuComb.id)}}},[e._v(e._s(e.$t("clear")))])],1)])],1)}),1),n("van-row",{staticStyle:{padding:"10px"}},[n("van-col",[n("van-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[n("van-radio",{attrs:{name:"1"}},[n("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(e.$t("payOnDelivery")))]),n("img",{staticStyle:{height:"25px","vertical-align":"bottom"},attrs:{src:r("1f16"),alt:""}})])],1)],1)],1),n("van-cell-group",{staticStyle:{"margin-bottom":"50px"}},[n("van-field",{attrs:{required:"",clearable:"",label:e.$t("name"),placeholder:e.$t("nameholder"),"error-message":e.errName},on:{input:e.fbinput},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{label:e.$t("phoneNumber"),clearable:"",clickable:"",placeholder:e.$t("phoneNumberholder"),type:"number",required:"","error-message":e.errTelephone},on:{input:e.fbinput},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}}),n("van-field",{attrs:{label:e.$t("email"),type:"email",clearable:"",clickable:"",placeholder:e.$t("emailholder")},on:{input:e.fbinput},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("van-field",{attrs:{label:e.$t("province"),clearable:"",clickable:"",placeholder:e.$t("provinceholder"),required:"","error-message":e.errShort_address},on:{input:e.fbinput},model:{value:e.short_address,callback:function(t){e.short_address=t},expression:"short_address"}}),n("van-field",{attrs:{label:e.$t("address"),clearable:"",clickable:"",placeholder:e.$t("addressholder"),required:"","error-message":e.errAddress},on:{input:e.fbinput},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),n("van-field",{attrs:{label:e.$t("message"),clearable:"",clickable:"",placeholder:e.$t("messageholder")},on:{input:e.fbinput},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),n("van-submit-bar",{staticClass:"left50",attrs:{loading:e.submitloading,currency:e.$store.money_sign,price:e.totalMoney,disabled:!e.checkedGoods.length,"button-text":e.$t("account"),label:e.$t("total")},on:{submit:e.onSubmit}})],1)},a=[],i=(r("e7e5"),r("d399")),o=(r("7f7f"),r("ac6a"),r("bc3a")),c=r.n(o),s=r("841a"),l=r.n(s),u=r("5a6c"),f={data:function(){return{fbinputFalg:!0,submitloading:!1,radio:"1",cartInfo:[],isEmpty:!1,checkedGoods:[],malldata:[],malldataOrder:[],countPrice:null,isBuy:!1,name:"",telephone:"",address:"",short_address:"",email:"",message:"",errName:"",errTelephone:"",errAddress:"",errShort_address:""}},created:function(){console.log("ddd",this.$store.state.fix,"cc",JSON.parse(localStorage.fix));var e=this.$store.state.fix,t=JSON.parse(localStorage.fix)-0;if(!e)try{fbq("init",t),fbq("track","PageView")}catch(r){}},activated:function(){this.getCartInfo()},mounted:function(){console.log(this.cartInfo)},computed:{totalMoney:function(){var e=this;return this.malldata=[],this.malldataOrder=[],this.countPrice=null,this.checkedGoods.forEach(function(t){e.cartInfo.forEach(function(r){var n={};r.selectedSkuComb.id===t&&(n.good_id=r.goodsId,n.sku_id=r.selectedSkuComb.id,n.messages=r.messages.message_0,n.price=r.selectedSkuComb.price,n.sku_nums=r.selectedNum,e.malldata.push(n),e.malldataOrder.push(r),e.countPrice+=n.price*n.sku_nums)})}),console.log(this.malldata,this.countPrice),this.countPrice}},filters:{toThousands:function(e){return Object(u["c"])()},moneyFilter:function(e){return Object(u["b"])(e)},toDivide:function(e){return Object(u["a"])(e)}},methods:{onClickLeft:function(){this.$router.go(-1)},getCartInfo:function(){var e=this.$route.params.skuData?this.$route.params.skuData:this.$route.query.skuData;this.isBuy=!!e,this.isBuy?(console.log(this.$route.params.skuData),this.cartInfo=[],this.cartInfo.push(e),this.checkedGoods=[],this.checkedGoods.push(e.selectedSkuComb.id)):(localStorage.cartInfo&&(this.cartInfo=JSON.parse(localStorage.cartInfo)),console.log(" this.cartInfo:"+JSON.stringify(this.cartInfo)),this.isEmpty=this.cartInfo.length>0)},clearCart:function(){localStorage.removeItem("cartInfo"),this.cartInfo=[]},onSubmit:function(){var e=this;this.errName="",this.errTelephone="",this.errAddress="",this.errShort_address="";var t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(""!==this.name)if(""!==this.telephone)if(""!==this.short_address)if(""!==this.address)if(""==this.email||t.test(this.email)){console.log(this.malldata,this.countPrice);var r={};r.cart_data=this.malldata,r.countPrice=this.countPrice,r.receiver_name=this.name,r.receiver_phone=this.telephone,r.receiver_email=this.email,r.address=this.address,r.short_address=this.short_address,r.leave_word=this.message,this.submitloading=!0,c()({url:l.a.sendOrderInfo,method:"post",data:r}).then(function(t){if(e.submitloading=!1,console.log(t),200==t.status&&t.data.success){if(!e.isBuy){var r=JSON.parse(localStorage.cartInfo),n=r.filter(function(t){if(e.checkedGoods.every(function(e){return e!=t.selectedSkuComb.id}))return t});localStorage.cartInfo=JSON.stringify(n)}try{fbq("track","InitiateCheckout")}catch(a){}try{fbq("track","Purchase",{value:Object(u["a"])(e.countPrice),currency:"USD"})}catch(a){}e.$router.push({name:"order",params:{orderData:e.malldataOrder,orderResponse:t.data.data}})}else Object(i["a"])(e.$t("serveError"))})}else Object(i["a"])(this.$t("errEmail"));else this.errAddress=this.$t("errAddress");else this.errShort_address=this.$t("errShort_address");else this.errTelephone=this.$t("errTelephone");else this.errName=this.$t("nameerr")},showImage:function(e){var t="";return e.forEach(function(e){e.imgUrl&&(t=e.imgUrl)}),t},showDesc:function(e){return e.skuAttrText.map(function(e){return e.name}).join("/")+"   "+e.messages.message_0},clearCartOne:function(e){for(var t=0;t<this.cartInfo.length;t++)if(this.cartInfo[t].selectedSkuComb.id===e){this.cartInfo.splice(t,1);break}for(var r=JSON.parse(localStorage.cartInfo),n=0;n<r.length;n++)if(r[n].selectedSkuComb.id===e){r.splice(n,1);break}localStorage.cartInfo=JSON.stringify(r)},fbinput:function(e){if(!this.fbinputFalg)return!1;this.fbinputFalg=!1;try{fbq("track","AddPaymentInfo")}catch(e){}}}},d=f,h=(r("463d"),r("2877")),p=Object(h["a"])(d,n,a,!1,null,"3ca823c7",null);t["default"]=p.exports},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),i=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},ac6a:function(e,t,r){for(var n=r("cadf"),a=r("0d58"),i=r("2aba"),o=r("7726"),c=r("32e9"),s=r("84f2"),l=r("2b4c"),u=l("iterator"),f=l("toStringTag"),d=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(h),g=0;g<p.length;g++){var b,m=p[g],v=h[m],y=o[m],x=y&&y.prototype;if(x&&(x[u]||c(x,u,d),x[f]||c(x,f,m),s[m]=d,v))for(b in n)x[b]||i(x,b,n[b],!0)}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),i=r("2d95"),o=r("5dbc"),c=r("6a99"),s=r("79e5"),l=r("9093").f,u=r("11e9").f,f=r("86cc").f,d=r("aa77").trim,h="Number",p=n[h],g=p,b=p.prototype,m=i(r("2aeb")(b))==h,v="trim"in String.prototype,y=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():d(t,3);var r,n,a,i=t.charCodeAt(0);if(43===i||45===i){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,s=t.slice(2),l=0,u=s.length;l<u;l++)if(o=s.charCodeAt(l),o<48||o>a)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(m?s(function(){b.valueOf.call(r)}):i(r)!=h)?o(new g(y(t)),r,p):y(t)};for(var x,S=r("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;S.length>k;k++)a(g,x=S[k])&&!a(p,x)&&f(p,x,u(g,x));p.prototype=b,b.constructor=p,r("2aba")(n,h,p)}},e5c6:function(e,t,r){e.exports=r.p+"img/cartempty.1cec98ee.png"},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-429a775e.2173d2b2.js.map