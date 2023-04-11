"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[161],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1440:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"Pod_230407_oo01",title:"Pods"},c=void 0,l={unversionedId:"k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01",id:"k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01",isDocsHomePage:!1,title:"Pods",description:"Pods",source:"@site/docs/k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01",permalink:"/sau_Bioinfo001/en/k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681194066,formattedLastUpdatedAt:"4/11/2023",frontMatter:{id:"Pod_230407_oo01",title:"Pods"},sidebar:"infraSidebar",previous:{title:"Clusters",permalink:"/sau_Bioinfo001/en/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01"},next:{title:"Labels",permalink:"/sau_Bioinfo001/en/k8s/MasteringKubernetes3rd/Chap1/Labels_230407_oo01/Labels_230407_oo01"}},u=[{value:"Pods",id:"pods",children:[]},{value:"Docker container",id:"docker-container",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pods"},"Pods"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A pod is the unit of work in Kubernetes. Each pod contains one or more containers. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All the containers in a pod have the same IP address and port space."),(0,a.kt)("li",{parentName:"ul"},"In addition, all the containers in a pod can have access to shared local storage on the node hosting the pod. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Containers don't get access to local storage or any other storage by default. Volumes of storage must be mounted into each container inside the pod explicitly. ")))),(0,a.kt)("h2",{id:"docker-container"},"Docker container"),(0,a.kt)("p",null,"It is possible to ",(0,a.kt)("strong",{parentName:"p"},"run multiple applications inside a single Docker container")," by having something like supervisord as the main Docker process that runs multiple processes, but this practice is often frowned upon for the following reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transparency",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Infrastructure \u5074\u304b\u3089\u898b\u3066\u3001(\u5358\u4e00\u6a5f\u80fd\u5358\u4e00\u30b3\u30f3\u30c6\u30ca\u306b\u3059\u308c\u3070)\u3069\u3046\u3044\u3046\u6a5f\u80fd\u306e container \u3067\u3042\u308b\u304b\u308f\u304b\u308a\u5b89\u304f\u306a\u308b => \u7ba1\u7406\u3057\u3084\u3059\u304f\u306a\u308b\u3002"))),(0,a.kt)("li",{parentName:"ul"},"decoupling software dependencies"),(0,a.kt)("li",{parentName:"ul"},"ease of use"),(0,a.kt)("li",{parentName:"ul"},"efficiency")))}d.isMDXComponent=!0}}]);