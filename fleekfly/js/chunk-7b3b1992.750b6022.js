(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3b1992"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var o,i,s=String(a(t)),c=n(r),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(i=s.charCodeAt(c+1))<56320||i>57343?e?s.charAt(c):o:e?s.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),o=r("6821"),i=r("6a99"),s=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=o(e),t=i(t,!0),c)try{return l(e,t)}catch(r){}if(s(e,t))return a(!n.f.call(e,t),e[t])}},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),i=r("be13"),s=r("2b4c"),c=r("520a"),l=s("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=s(e),h=!o(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),p=h?!o(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[d](""),!t}):void 0;if(!h||!p||"replace"===e&&!u||"split"===e&&!f){var g=/./[d],v=r(i,d,""[e],function(e,t,r,n,a){return t.exec===c?h&&!a?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),m=v[0],b=v[1];n(String.prototype,e,m),a(RegExp.prototype,d,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),o=r("ebd6"),i=r("0390"),s=r("9def"),c=r("5f1b"),l=r("520a"),u=r("79e5"),f=Math.min,d=[].push,h="split",p="length",g="lastIndex",v=4294967295,m=!u(function(){RegExp(v,"y")});r("214f")("split",2,function(e,t,r,u){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var o,i,s,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?v:t>>>0,m=new RegExp(e.source,u+"g");while(o=l.call(m,a)){if(i=m[g],i>f&&(c.push(a.slice(f,o.index)),o[p]>1&&o.index<a[p]&&d.apply(c,o.slice(1)),s=o[0][p],f=i,c[p]>=h))break;m[g]===o.index&&m[g]++}return f===a[p]?!s&&m.test("")||c.push(""):c.push(a.slice(f)),c[p]>h?c.slice(0,h):c}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):b.call(String(a),r,n)},function(e,t){var n=u(b,e,this,t,b!==r);if(n.done)return n.value;var l=a(e),d=String(this),h=o(l,RegExp),p=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),S=new h(m?l:"^(?:"+l.source+")",g),y=void 0===t?v:t>>>0;if(0===y)return[];if(0===d.length)return null===c(S,d)?[d]:[];var x=0,k=0,_=[];while(k<d.length){S.lastIndex=m?k:0;var I,C=c(S,m?d:d.slice(k));if(null===C||(I=f(s(S.lastIndex+(m?0:k)),d.length))===x)k=i(d,k,p);else{if(_.push(d.slice(x,k)),_.length===y)return _;for(var E=1;E<=C.length-1;E++)if(_.push(C[E]),_.length===y)return _;k=x=I}}return _.push(d.slice(x)),_}]})},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,s="lastIndex",c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(i=function(e){var t,r,i,u,f=this;return l&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),c&&(t=f[s]),i=a.call(f,e),c&&i&&(f[s]=f.global?i.index+i[0].length:t),l&&i&&i.length>1&&o.call(i[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),e.exports=i},"5a6c":function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return a});r("6b54"),r("28a5"),r("c5f6");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Number(e).toFixed(2)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=e/100,r=t.toString().split(".");return 1==r.length?(t=t.toString()+".00",t):r.length>1?(r[1].length<2&&(t=t.toString()+"0"),t):void 0}},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(e,o),e}},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"6b54":function(e,t,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),o=r("9e1e"),i="toString",s=/./[i],c=function(e){r("2aba")(RegExp.prototype,i,e,!0)};r("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?a.call(e):void 0)}):s.name!=i&&c(function(){return s.call(this)})},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),o=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},9350:function(e,t,r){},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),o=r("79e5"),i=r("fdef"),s="["+i+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(e,t,r){var a={},s=o(function(){return!!i[e]()||c[e]()!=c}),l=a[e]=s?t(d):i[e];r&&(a[r]=l),n(n.P+n.F*s,"String",a)},d=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},aab7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"navbar-div"},[r("van-nav-bar",{attrs:{title:e.isBuy?"结算":"购物车","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}},[e.isBuy?e._e():r("van-button",{attrs:{slot:"right",size:"small",round:"",type:"danger"},on:{click:e.clearCart},slot:"right"},[e._v("\n              清空购物车\n          ")])],1)],1),r("van-checkbox-group",{staticClass:"card-goods",model:{value:e.checkedGoods,callback:function(t){e.checkedGoods=t},expression:"checkedGoods"}},e._l(e.cartInfo,function(t){return r("van-checkbox",{key:t.selectedSkuComb.id,staticClass:"card-goods__item",attrs:{disabled:e.isBuy,name:t.selectedSkuComb.id}},[r("van-card",{attrs:{title:t.title,desc:e.showDesc(t),num:t.selectedNum,thumb:e.showImage(t.skuAttrText)}},[r("div",{staticClass:"redcolor",attrs:{slot:"tags"},slot:"tags"},[r("span",[e._v(e._s(e.moneySign)+e._s(e._f("toDivide")(t.selectedSkuComb.price)))])]),e.isBuy?e._e():r("div",{attrs:{slot:"footer"},slot:"footer"},[r("van-button",{attrs:{size:"mini",plain:"",hairline:"",type:"danger"},on:{click:function(r){return r.stopPropagation(),e.clearCartOne(t.selectedSkuComb.id)}}},[e._v("清除")])],1)])],1)}),1),r("van-row",{staticStyle:{padding:"10px"}},[r("van-col",[r("van-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("van-radio",{attrs:{name:"1"}},[r("span",{staticStyle:{"font-size":"14px"}},[e._v("货到付款")]),r("img",{attrs:{src:"/src/assets/images/cash.jpg",alt:""}})])],1)],1)],1),r("van-cell-group",[r("van-field",{attrs:{required:"",clearable:"",label:"姓名",placeholder:"请输入姓名","error-message":e.errName},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("van-field",{attrs:{label:"电话号码",clearable:"",clickable:"",placeholder:"请输入电话号码",type:"number",required:"","error-message":e.errTelephone},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}}),r("van-field",{attrs:{label:"邮箱",type:"email",clearable:"",clickable:"",placeholder:"请输入邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("van-field",{attrs:{label:"省市区",clearable:"",clickable:"",placeholder:"请输入省市区",required:"","error-message":e.errShort_address},model:{value:e.short_address,callback:function(t){e.short_address=t},expression:"short_address"}}),r("van-field",{attrs:{label:"详细地址",clearable:"",clickable:"",placeholder:"请输入详细地址",required:"","error-message":e.errAddress},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),r("van-field",{attrs:{label:"留言",clearable:"",clickable:"",placeholder:"请输入留言"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),r("van-submit-bar",{staticClass:"left50",attrs:{price:e.totalMoney,disabled:!e.checkedGoods.length,"button-text":"结算"},on:{submit:e.onSubmit}})],1)},a=[],o=(r("e7e5"),r("d399")),i=(r("7f7f"),r("ac6a"),r("bc3a")),s=r.n(i),c=r("841a"),l=r.n(c),u=r("5a6c"),f={data:function(){return{radio:"1",cartInfo:[],isEmpty:!1,checkedGoods:[],malldata:[],malldataOrder:[],countPrice:null,isBuy:!1,name:"",telephone:"",address:"",short_address:"",email:"",message:"",errName:"",errTelephone:"",errAddress:"",errShort_address:""}},created:function(){this.getCartInfo()},mounted:function(){console.log(this.cartInfo)},computed:{totalMoney:function(){var e=this;return this.malldata=[],this.malldataOrder=[],this.countPrice=null,this.checkedGoods.forEach(function(t){e.cartInfo.forEach(function(r){var n={};r.selectedSkuComb.id===t&&(n.good_id=r.goodsId,n.sku_id=r.selectedSkuComb.id,n.messages=r.messages.message_0,n.price=r.selectedSkuComb.price,n.sku_nums=r.selectedNum,e.malldata.push(n),e.malldataOrder.push(r),e.countPrice+=n.price*n.sku_nums)})}),console.log(this.malldata,this.countPrice),this.countPrice},moneySign:function(){return this.$store.money_sign}},filters:{moneyFilter:function(e){return Object(u["b"])(e)},toDivide:function(e){return Object(u["a"])(e)}},methods:{onClickLeft:function(){this.$router.go(-1)},getCartInfo:function(){var e=this.$route.params.skuData?this.$route.params.skuData:this.$route.query.skuData;this.isBuy=!!e,this.isBuy?(console.log(this.$route.params.skuData),this.cartInfo.push(e),this.checkedGoods.push(e.selectedSkuComb.id)):(localStorage.cartInfo&&(this.cartInfo=JSON.parse(localStorage.cartInfo)),console.log(" this.cartInfo:"+JSON.stringify(this.cartInfo)),this.isEmpty=this.cartInfo.length>0)},clearCart:function(){localStorage.removeItem("cartInfo"),this.cartInfo=[]},onSubmit:function(){var e=this;this.errName="",this.errTelephone="",this.errAddress="";var t=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(""!==this.name)if(""!==this.telephone)if(""!==this.short_address)if(""!==this.address)if(""==this.email||t.test(this.email)){console.log(this.malldata,this.countPrice);var r={};r.cart_data=this.malldata,r.countPrice=this.countPrice,r.receiver_name=this.name,r.receiver_phone=this.telephone,r.receiver_email=this.email,r.address=this.address,r.short_address=this.short_address,s()({url:l.a.sendOrderInfo,method:"post",data:r}).then(function(t){if(console.log(t),200==t.status&&t.data.success){if(!e.isBuy){var r=JSON.parse(localStorage.cartInfo),n=r.filter(function(t){if(e.checkedGoods.every(function(e){return e!=t.selectedSkuComb.id}))return t});localStorage.cartInfo=JSON.stringify(n)}e.$router.push({name:"order",params:{orderData:e.malldataOrder,orderResponse:t.data.data}})}else Object(o["a"])("服务器错误，数据提交失败")})}else Object(o["a"])("邮箱格式不正确");else this.errAddress="详细地址不能为空！";else this.errShort_address="省市区不能为空！";else this.errTelephone="电话不能为空！";else this.errName="姓名不能为空！"},showImage:function(e){var t="";return e.forEach(function(e){e.imgUrl&&(t=e.imgUrl)}),t},showDesc:function(e){return e.skuAttrText.map(function(e){return e.name}).join("/")+"   "+e.messages.message_0},clearCartOne:function(e){for(var t=0;t<this.cartInfo.length;t++)if(this.cartInfo[t].selectedSkuComb.id===e){this.cartInfo.splice(t,1);break}for(var r=JSON.parse(localStorage.cartInfo),n=0;n<r.length;n++)if(r[n].selectedSkuComb.id===e){r.splice(n,1);break}localStorage.cartInfo=JSON.stringify(r)}}},d=f,h=(r("d766"),r("2877")),p=Object(h["a"])(d,n,a,!1,null,"2c672afa",null);t["default"]=p.exports},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},ac6a:function(e,t,r){for(var n=r("cadf"),a=r("0d58"),o=r("2aba"),i=r("7726"),s=r("32e9"),c=r("84f2"),l=r("2b4c"),u=l("iterator"),f=l("toStringTag"),d=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(h),g=0;g<p.length;g++){var v,m=p[g],b=h[m],S=i[m],y=S&&S.prototype;if(y&&(y[u]||s(y,u,d),y[f]||s(y,f,m),c[m]=d,b))for(v in n)y[v]||o(y,v,n[v],!0)}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),s=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,f=r("86cc").f,d=r("aa77").trim,h="Number",p=n[h],g=p,v=p.prototype,m=o(r("2aeb")(v))==h,b="trim"in String.prototype,S=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():d(t,3);var r,n,a,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,c=t.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>a)return NaN;return parseInt(c,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(m?c(function(){v.valueOf.call(r)}):o(r)!=h)?i(new g(S(t)),r,p):S(t)};for(var y,x=r("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;x.length>k;k++)a(g,y=x[k])&&!a(p,y)&&f(p,y,u(g,y));p.prototype=v,v.constructor=p,r("2aba")(n,h,p)}},d766:function(e,t,r){"use strict";var n=r("9350"),a=r.n(n);a.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-7b3b1992.750b6022.js.map