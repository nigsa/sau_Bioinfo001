"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[59],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,f=k["".concat(u,".").concat(m)]||k[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"Motivation_230407_oo01",title:"Kubernetes \u3092\u4f7f\u3063\u3066\u3084\u308a\u305f\u3044\u3053\u3068"},u=void 0,p={unversionedId:"k8s/MasteringKubernetes3rd/Motivation_230407_oo01/Motivation_230407_oo01",id:"k8s/MasteringKubernetes3rd/Motivation_230407_oo01/Motivation_230407_oo01",isDocsHomePage:!1,title:"Kubernetes \u3092\u4f7f\u3063\u3066\u3084\u308a\u305f\u3044\u3053\u3068",description:"1. Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u516c\u958b",source:"@site/docs/k8s/MasteringKubernetes3rd/Motivation_230407_oo01/Motivation_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Motivation_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Motivation_230407_oo01/Motivation_230407_oo01",permalink:"/en/k8s/MasteringKubernetes3rd/Motivation_230407_oo01/Motivation_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681194066,formattedLastUpdatedAt:"4/11/2023",frontMatter:{id:"Motivation_230407_oo01",title:"Kubernetes \u3092\u4f7f\u3063\u3066\u3084\u308a\u305f\u3044\u3053\u3068"},sidebar:"infraSidebar",next:{title:"What is Kubernetes?",permalink:"/en/k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01"}},c=[{value:"1. Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u516c\u958b",id:"1-web-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u516c\u958b",children:[{value:"\u958b\u767a\u3068\u8a08\u7b97\u57fa\u76e4\u7ba1\u7406\u306e\u5206\u96e2",id:"\u958b\u767a\u3068\u8a08\u7b97\u57fa\u76e4\u7ba1\u7406\u306e\u5206\u96e2",children:[]}]},{value:"2. \u30d3\u30c3\u30b0\u30c7\u30fc\u30bf\u7cfb\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u5229\u7528\uff08\u30d0\u30c3\u30c1\u51e6\u7406\uff09",id:"2-\u30d3\u30c3\u30b0\u30c7\u30fc\u30bf\u7cfb\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u5229\u7528\u30d0\u30c3\u30c1\u51e6\u7406",children:[]},{value:"3. \u30b9\u30d1\u30b3\u30f3\u306e\u7a3c\u50cd\u7d71\u8a08\u306e\u53d6\u5f97",id:"3-\u30b9\u30d1\u30b3\u30f3\u306e\u7a3c\u50cd\u7d71\u8a08\u306e\u53d6\u5f97",children:[]}],s={toc:c};function k(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-web-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u516c\u958b"},"1. Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u516c\u958b"),(0,i.kt)("p",null,"DDBJ \u304c\u516c\u958b\u3057\u3066\u3044\u308b\u591a\u6570\u306e Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u516c\u958b\u3057\u305f\u3044\u3002\n\uff08\u958b\u767a\u52b9\u7387\u5411\u4e0a\u306e\u305f\u3081\u4eee\u60f3\u57fa\u76e4\u3092\u4f7f\u3044\u305f\u3044\u3002\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8a08\u7b97\u30ce\u30fc\u30c9\u304c\u58ca\u308c\u305f\u3068\u304d\u306b\u81ea\u52d5\u7684\u306b\u5225\u306e\u30ce\u30fc\u30c9\u4e0a\u3067\u30b5\u30fc\u30d3\u30b9\u3092\u7d99\u7d9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},"autoscale \u307e\u3067\u306f\u4eca\u306e\u6240\u8003\u3048\u3066\u3044\u306a\u3044\u3002")),(0,i.kt)("h3",{id:"\u958b\u767a\u3068\u8a08\u7b97\u57fa\u76e4\u7ba1\u7406\u306e\u5206\u96e2"},"\u958b\u767a\u3068\u8a08\u7b97\u57fa\u76e4\u7ba1\u7406\u306e\u5206\u96e2"),(0,i.kt)("p",null,"\u53e4\u306e UNIX \u7ba1\u7406\u624b\u6cd5\u3067\u306f\u3001\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u30eb\u30fc\u30c8\u6a29\u9650\u304c\u5fc5\u8981\u3067\u3042\u308b\u3053\u3068\u304b\u3089\u3001\n\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u7ba1\u7406\u307e\u3067\u304c\u8a08\u7b97\u57fa\u76e4\u5074\u306e\u4ed5\u4e8b\u3067\u3042\u3063\u305f\u304c\u3001\u4eca\u65e5\u3067\u306f\u3053\u306e\u30e2\u30c7\u30eb\u306f\u7834\u7dbb\u3057\u3066\u3044\u308b\u3002"),(0,i.kt)("p",null,"\u4eee\u60f3\u57fa\u76e4\u6280\u8853\u306e\u767b\u5834\u306b\u3088\u308a\u3001\u958b\u767a\u8005\u5074\u3067\u4eee\u60f3\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u3067\u3092\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3002\n\u4eca\u65e5\u306e\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u3067\u306f\u3053\u3046\u306a\u3063\u3066\u3044\u306a\u3044\u3068\u52b9\u7387\u304c\u60aa\u3044\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8153).Z})),(0,i.kt)("p",null,"\uff08\u5c0f\u8a00\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30af\u30e9\u30b9\u30bf\u8a08\u7b97\u6a5f\u3092\u69cb\u6210\u3059\u308b\u30ce\u30fc\u30c9\u304c\u6642\u3005\u58ca\u308c\u308b\u306e\u306f\u5f53\u305f\u308a\u524d\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u58ca\u308c\u3066\u3082\u30b5\u30fc\u30d3\u30b9\u304c\u6b62\u307e\u3089\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u306e\u306f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u5074\u306e\u8cac\u4efb"),(0,i.kt)("li",{parentName:"ul"},"k8s \u304c\u7121\u304f\u3066\u3082\u4ed6\u306b\u3082\u8272\u3093\u306a\u65b9\u6cd5\u304c\u3042\u308b\u3002k8s \u304c\u3044\u3064\u3082\u6700\u9069\u306a\u308f\u3051\u3067\u3082\u306a\u3044\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u3064\u3044\u3067\u306b\u3044\u3046\u3068\u3001\u30b9\u30d1\u30b3\u30f3\u306f\u305d\u306e\u3078\u3093\u306e\u30bd\u30d5\u30c8\u3092\u7f6e\u3044\u3066\u304a\u304f\u3068\u81ea\u52d5\u7684\u306b\u3088\u3057\u306a\u306b\u901f\u304f\u3057\u3066\u304f\u308c\u308b\u6a5f\u68b0\u3067\u306f\u306a\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e0a\u624b\u306b\u4f7f\u3048\u3070\u901f\u304f\u306a\u308b\u3082\u306e\u3002")))),(0,i.kt)("h2",{id:"2-\u30d3\u30c3\u30b0\u30c7\u30fc\u30bf\u7cfb\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u5229\u7528\u30d0\u30c3\u30c1\u51e6\u7406"},"2. \u30d3\u30c3\u30b0\u30c7\u30fc\u30bf\u7cfb\u306e\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u306e\u5229\u7528\uff08\u30d0\u30c3\u30c1\u51e6\u7406\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spark \u306a\u3069\u3067\u30c7\u30fc\u30bf\u51e6\u7406\u3092\u3057\u305f\u304f\u306a\u3063\u305f\u3068\u304d\u306b\u3001\u7c21\u5358\u306b\u4f7f\u3048\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u3053\u308c\u306b\u3064\u3044\u3066\u306f\u3001\u5fc5\u305a\u3057\u3082 k8s \u3092\u4f7f\u308f\u306a\u3044\u3068\u3044\u3051\u306a\u3044\u308f\u3051\u3067\u306f\u306a\u3044\u3002\u3059\u3079\u3066\u306e\u7ba1\u7406\u3092 k8s \u306b\u3057\u305f\u3044\u308f\u3051\u3067\u306f\u306a\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"VxLAN \u306a\u3069\u306e\u4eee\u60f3\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u3046\u3068\u3001\u305d\u308c\u306a\u308a\u306b\u6027\u80fd\u306e\u52a3\u5316\u304c\u3042\u308b\u306e\u3067\u672c\u6765\u306f\u907f\u3051\u308b\u3079\u304d\u304b\u3082\u3057\u308c\u306a\u3044\u3002"))),(0,i.kt)("li",{parentName:"ul"},"k8s \u3092\u4f7f\u3048\u3070\u7269\u7406\u8a08\u7b97\u6a5f\u306e\u7bc0\u7d04\u306b\u306a\u308b\u3053\u3068\u304c\u671f\u5f85\u3055\u308c\u308b\u3002")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"nVIDIA \u306e AI \u89e3\u6790\u57fa\u76e4\u3092\u3001\u7c21\u5358\u306b\u4f7f\u3048\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(276).Z})),(0,i.kt)("h2",{id:"3-\u30b9\u30d1\u30b3\u30f3\u306e\u7a3c\u50cd\u7d71\u8a08\u306e\u53d6\u5f97"},"3. \u30b9\u30d1\u30b3\u30f3\u306e\u7a3c\u50cd\u7d71\u8a08\u306e\u53d6\u5f97"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30d1\u30b3\u30f3\u5168\u4f53\u306e\u30ed\u30b0\u89e3\u6790\uff08\u30ed\u30b0\u306e\u4fdd\u7ba1\u3092\u542b\u3081\u3066\uff09\u3092 k8s \u306e\u4e0a\u3067\u884c\u3044\u305f\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30ed\u30b0\u306e\u4fdd\u7ba1\u3092\u7ba1\u7406\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u3067\u884c\u3063\u3066\u3044\u308b\u304c\u3001\u5b89\u5168\u306a\u533a\u753b\u3092\u7269\u7406\u8a08\u7b97\u57fa\u76e4\u3067\u69cb\u7bc9\u3057\u3088\u3046\u3068\u3059\u308b\u3068\n(1)\u307e\u305a\u3001\u3044\u3061\u3044\u3061\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u8cfc\u5165\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u305a\u304a\u91d1\u3068\u6642\u9593\u304c\u304b\u304b\u308b\u3002 (2)\u672c\u5f53\u306b\u8a2d\u5b9a\u304c\u5b89\u5168\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u5224\u7136\u3068\u3057\u306a\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3080\u3057\u308d k8s \u4eee\u60f3\u57fa\u76e4\u4e0a\u306b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fc\u4e0a\u91cd\u8981\u306a\u3082\u306e\u3092\u7f6e\u3044\u3066\u3057\u307e\u3063\u305f\u307b\u3046\u304c\u5b89\u5168\u306a\u306e\u3067\u306f\u306a\u3044\u304b\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"=> Sysdig \u306e\u5c0e\u5165\uff08\u691c\u8a3c\uff09")))))),(0,i.kt)("p",null,"(\u5c0f\u8a00)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u907a\u4f1d\u7814\u30b9\u30d1\u30b3\u30f3\u4e0a\u306e\u554f\u984c\u3092\u5b9f\u30c7\u30fc\u30bf\u3067\u8868\u73fe\u3057\u7406\u89e3\u3057\u3066\u3044\u306a\u3044\u306e\u3067\u3042\u308c\u3070\u3001\u660e\u65e5\u304b\u3089\u5916\u306e\u4eba\u304c\u907a\u4f1d\u7814\u30b9\u30d1\u30b3\u30f3\u3092\u904b\u7528\u3057\u3066\u3082\u306a\u3093\u306e\u554f\u984c\u3082\u306a\u3044\u3053\u3068\u306b\u306a\u308b\u3002\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u5168\u304f\u4e00\u7dd2\u3060\u304b\u3089\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u907a\u4f1d\u7814\u30b9\u30d1\u30b3\u30f3\u306f\u903c\u8feb\u3057\u3066\u3044\u308b => \u7a3c\u50cd\u7d71\u8a08\u306f\u4e88\u7b97\u8981\u6c42\u306e\u305f\u3081\u306b\u6700\u91cd\u8981\u3002\u7a3c\u50cd\u7d71\u8a08\u306f\u58f2\u4e0a\u306b\u76f4\u7d50\u3057\u3066\u3044\u308b\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u5bfe\u5fdc\u304c\u3082\u3046\u4e00\u3064\u306e\u9375\u3002")))))}k.isMDXComponent=!0},276:function(e,t,n){t.Z=n.p+"assets/images/nvidia_rapidas-2114485ac1f6382f5e3a2c330118a8a7.png"},8153:function(e,t,n){t.Z=n.p+"assets/images/sc_overview-213ec18972282a30cc3ce312c547f1fb.png"}}]);