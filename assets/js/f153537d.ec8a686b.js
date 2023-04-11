"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[910],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7928:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={id:"Volume_230407_oo01",title:"Volume"},c=void 0,s={unversionedId:"k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01/Volume_230407_oo01",id:"k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01/Volume_230407_oo01",isDocsHomePage:!1,title:"Volume",description:"Local storage used by the pod is ephemeral and goes away with the pod in most cases.",source:"@site/docs/k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01/Volume_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01/Volume_230407_oo01",permalink:"/sau_Bioinfo001/k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01/Volume_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681194066,formattedLastUpdatedAt:"2023/4/11",frontMatter:{id:"Volume_230407_oo01",title:"Volume"},sidebar:"infraSidebar",previous:{title:"Service",permalink:"/sau_Bioinfo001/k8s/MasteringKubernetes3rd/Chap1/Service_230407_oo01/Service_230407_oo01"},next:{title:"Creating k8s Clusters Overview",permalink:"/sau_Bioinfo001/k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01/Creating_230407_oo01"}},l=[],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Local storage used by the pod is ephemeral and goes away with the pod in most cases. ")),(0,a.kt)("p",null,'Pod \u306f "local storage" \u3092 container \u306b\u63d0\u4f9b\u3059\u308b\u6a5f\u80fd\u304c\u3042\u308b\u304c\u3001"local storage"\u306f Pod \u304c\u306a\u304f\u306a\u308b\u3068\u306a\u304f\u306a\u3063\u3066\u3057\u307e\u3046\u3002'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The essence of a volume is a directory with some data that is mounted into a container.")),(0,a.kt)("p",null,"Volume \u306f container \u304c\u30de\u30a6\u30f3\u30c8\u3067\u304d\u308b\u6c38\u7d9a\u7684\u306a\u30b9\u30c8\u30ec\u30fc\u30b8\u9818\u57df\u306e\u3053\u3068\u3002\uff08\u30de\u30a6\u30f3\u30c8\u3059\u308b\u306e\u306f pod \u3067\u306f\u306a\u304f container.)"),(0,a.kt)("p",null,"Volume \u306b\u306f\u3044\u308d\u3044\u308d\u306a\u30bf\u30a4\u30d7\u304c\u3042\u308b\u304c\u3001",(0,a.kt)("strong",{parentName:"p"},"Container Storage Interface (CSI)"),"\u3068\u3044\u3046\u65b9\u6cd5\u304c\u304a\u3059\u3059\u3081\u3002\u4ed6\u306e\u65b9\u6cd5\u306f fade-out\u3002"))}m.isMDXComponent=!0}}]);