(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c1d1d154"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"cc1502b7"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[e._v("复试Demo")]),n("v-spacer"),n("v-btn",{attrs:{href:"http://www.skyland.net.cn/",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("上海尊蓝")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],u={name:"App",data:function(){return{}},created:function(){}},c=u,i=n("2877"),l=n("6544"),s=n.n(l),p=n("7496"),f=n("40dc"),d=n("8336"),m=n("132d"),v=n("f6c4"),h=n("2fa4"),b=Object(i["a"])(c,a,o,!1,null,null,null),g=b.exports;s()(b,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VIcon:m["a"],VMain:v["a"],VSpacer:h["a"]});n("d3b7"),n("3ca3"),n("ddb0");var y=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hello-world")},_=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" 基于Electron与Vuetify的Demo ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v(" 用于复试上海尊蓝信息科技的一个demo，主要功能为：在菜单栏的文件菜单中点击首选项，即可进行主题颜色的设置，相关配置将保存至本地。 使用vuetify框架开发UI以及使用ipc技术进行主进程与渲染进程间的通信。 ")])])],1)],1)},x=[],O={name:"HelloWorld",data:function(){return{}}},j=O,E=n("62ad"),k=n("a523"),S=n("adda"),V=n("0fd9"),A=Object(i["a"])(j,C,x,!1,null,null,null),P=A.exports;s()(A,{VCol:E["a"],VContainer:k["a"],VImg:S["a"],VRow:V["a"]});var T={name:"Home",components:{HelloWorld:P}},B=T,H=Object(i["a"])(B,w,_,!1,null,null,null),L=H.exports;r["a"].use(y["a"]);var M=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/config",name:"Config",component:function(){return n.e("about").then(n.bind(null,"1071"))}}],N=new y["a"]({base:"",routes:M}),D=N,I=n("2f62");r["a"].use(I["a"]);var $=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=n("f309"),J=n("fcf4"),R=ipcRenderer.sendSync("get-user-config"),U=R.backgroundColor;r["a"].use(q["a"]);var W=new q["a"]({theme:{themes:{light:{primary:U.hex,secondary:J["a"].red.lighten4,accent:J["a"].indigo.base}}}});r["a"].config.productionTip=!1,new r["a"]({router:D,store:$,vuetify:W,render:function(e){return e(g)}}).$mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.d9c8087a.js.map