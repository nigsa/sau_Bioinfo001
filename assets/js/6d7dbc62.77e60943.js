"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[991],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={id:"Concepts_230407_oo01",title:"Clusters"},i=void 0,u={unversionedId:"k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",id:"k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",isDocsHomePage:!1,title:"Clusters",description:"\u5168\u4f53\u56f3",source:"@site/docs/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",permalink:"/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681194066,formattedLastUpdatedAt:"2023/4/11",frontMatter:{id:"Concepts_230407_oo01",title:"Clusters"},sidebar:"infraSidebar",previous:{title:"What is Kubernetes?",permalink:"/k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01"},next:{title:"Pods",permalink:"/k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01"}},c=[{value:"\u5168\u4f53\u56f3",id:"\u5168\u4f53\u56f3",children:[]},{value:"\u7528\u8a9e\u306e\u5b9a\u7fa9 : \u30af\u30e9\u30b9\u30bf\u30fc",id:"\u7528\u8a9e\u306e\u5b9a\u7fa9--\u30af\u30e9\u30b9\u30bf\u30fc",children:[]}],p={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5168\u4f53\u56f3"},"\u5168\u4f53\u56f3"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7941).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56f3\u3092\u898b\u308b\u3068\u3001Node \u306f Interntet => Firewall => Node \u5185\u306e Proxy \u3068\u901a\u4fe1\u3067\u304d\u308b\u3068\u66f8\u3044\u3066\u3042\u308b\u3002"),(0,a.kt)("li",{parentName:"ul"},"Master \u306e\u65b9\u306f kubectl \u30b3\u30de\u30f3\u30c9\u304c\u901a\u4fe1\u3067\u304d\u308b\u3068\u66f8\u3044\u3066\u3042\u308b\u3002")),(0,a.kt)("p",null,"\u7b2c 4 \u7248\u3067\u306f\u4ee5\u4e0b\u306e\u56f3\u306b\u5909\u308f\u3063\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4939).Z})),(0,a.kt)("h2",{id:"\u7528\u8a9e\u306e\u5b9a\u7fa9--\u30af\u30e9\u30b9\u30bf\u30fc"},"\u7528\u8a9e\u306e\u5b9a\u7fa9 : \u30af\u30e9\u30b9\u30bf\u30fc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clusters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A cluster is a collection of hosts (nodes).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u3064\u307e\u308a host = node \u3068\u8a00\u3063\u3066\u3044\u308b\u3002"))))),(0,a.kt)("li",{parentName:"ul"},"Nodes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A node is a single host. It may be a physical or virtual machine. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u3064\u307e\u308a node = \u7269\u7406\u8a08\u7b97\u6a5f\uff08\u307e\u305f\u306f VM) = host \u3068\u8a00\u3063\u3066\u3044\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},"Each Kubernetes node runs several Kubernetes components, such as the kubelet, the container runtime, and kube-proxy. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uff08\u5927\u62b5\u306e\uff09node \u306e\u4e0a\u3067\u306f kubelet, container runtime, kube-proxy \u304c\u52d5\u3044\u3066\u3044\u3066\u3001\n\uff08\u6b21\u306e control plane \u306e\u8aac\u660e\u3092\u8aad\u3080\u3068\uff09\u3068\u3042\u308b node \u306e\u4e0a\u3067\u306f control plane \u306b\u5c5e\u3059\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u52d5\u3044\u3066\u3044\u308b\u3001\u3068\u89e3\u3055\u308c\u308b\u3002"))))),(0,a.kt)("li",{parentName:"ul"},"Control plane ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Usually, all the control plane components are set up on the same host although its not required.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u3053\u3046\u66f8\u3044\u3066\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u3001Control plane \u306f(node \u3068\u5bfe\u6bd4\u3055\u308c\u308b\u3088\u3046\u306a\u3082\u306e\u3067\u306f\u306a\u304f)\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u3042\u308b\u3001\u3068\u8a00\u3063\u3066\u3044\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},"The control plane of Kubernetes consists of several components:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"an API server, "),(0,a.kt)("li",{parentName:"ul"},"a scheduler, "),(0,a.kt)("li",{parentName:"ul"},"a controller manager and optionally a cloud controller manager. ")))))),(0,a.kt)("p",null,"\u7b2c 3 \u7248\u3067\u306f The master is the control plane of Kubernetes.\u3068\u306a\u3063\u3066\u3044\u308b\u304c\u7b2c 4 \u7248\u3067\u306f master \u3068\u3044\u3046\u8a00\u8449\u304c\u524a\u9664\u3055\u308c\u3066\u3044\u308b\u3002\nmaster \u3068\u8a00\u3063\u3066\u3057\u307e\u3046\u3068 master node \u3064\u307e\u308a node \u306e\u4e00\u7a2e\u3068\u89e3\u3055\u308c\u3066\u3057\u307e\u3044\u304c\u3061\u3060\u304b\u3089\u3060\u308d\u3046\u3002\u305d\u3046\u53d6\u3063\u3066\u3057\u307e\u3046\u3068\u4e0a\u8a18\u5b9a\u7fa9\u306e\u8fbb\u8904\u304c\u5408\u308f\u306a\u304f\u306a\u3063\u3066\u304f\u308b\u3002"))}m.isMDXComponent=!0},7941:function(e,t,n){t.Z=n.p+"assets/images/architecture-f11ce99727a2008f22449d9d3eca2fcd.png"},4939:function(e,t,n){t.Z=n.p+"assets/images/architecture4-d0b667f6c8c373ccd12ae0f5cccd04c7.png"}}]);