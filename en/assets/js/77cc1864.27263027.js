"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[579],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4442:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"Creating_230407_oo01",title:"Creating k8s Clusters Overview"},u=void 0,s={unversionedId:"k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01/Creating_230407_oo01",id:"k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01/Creating_230407_oo01",isDocsHomePage:!1,title:"Creating k8s Clusters Overview",description:"Kubernetes Cluster \u3068\u306f kubernetes \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30af\u30e9\u30b9\u30bf\uff08\u7269\u7406\u8a08\u7b97\u6a5f\u306e\u96c6\u5408\uff09\u3068\u3044\u3046\u610f\u5473\u304b\u3002",source:"@site/docs/k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01/Creating_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01/Creating_230407_oo01",permalink:"/sau_Bioinfo001/en/k8s/MasteringKubernetes3rd/Chap2/Creating_230407_oo01/Creating_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681194066,formattedLastUpdatedAt:"4/11/2023",frontMatter:{id:"Creating_230407_oo01",title:"Creating k8s Clusters Overview"},sidebar:"infraSidebar",previous:{title:"Volume",permalink:"/sau_Bioinfo001/en/k8s/MasteringKubernetes3rd/Chap1/Volume_230407_oo01/Volume_230407_oo01"},next:{title:"HPE Ezmeral \u306e\u5546\u54c1\u4f53\u7cfb",permalink:"/sau_Bioinfo001/en/k8s/Ezmeral/sec_Overview/Portfolio_220914_oo01/Portfolio_220914_oo01"}},c=[{value:"\u672c\u7ae0\u306e\u5185\u5bb9",id:"\u672c\u7ae0\u306e\u5185\u5bb9",children:[{value:"\u7b2c 3 \u7248\u3067\u306e\u8a18\u8ff0",id:"\u7b2c-3-\u7248\u3067\u306e\u8a18\u8ff0",children:[]},{value:"\u7b2c 4 \u7248\u3067\u306e\u8a18\u8ff0",id:"\u7b2c-4-\u7248\u3067\u306e\u8a18\u8ff0",children:[]}]}],p={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes Cluster \u3068\u306f kubernetes \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u30af\u30e9\u30b9\u30bf\uff08\u7269\u7406\u8a08\u7b97\u6a5f\u306e\u96c6\u5408\uff09\u3068\u3044\u3046\u610f\u5473\u304b\u3002"),(0,o.kt)("h2",{id:"\u672c\u7ae0\u306e\u5185\u5bb9"},"\u672c\u7ae0\u306e\u5185\u5bb9"),(0,o.kt)("h3",{id:"\u7b2c-3-\u7248\u3067\u306e\u8a18\u8ff0"},"\u7b2c 3 \u7248\u3067\u306e\u8a18\u8ff0"),(0,o.kt)("p",null,"The topics we will cover are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a single-node cluster with Minikube"),(0,o.kt)("li",{parentName:"ul"},"Creating a multi-node cluster with KinD"),(0,o.kt)("li",{parentName:"ul"},"Creating a multi-node cluster using k3d"),(0,o.kt)("li",{parentName:"ul"},"Creating clusters in the cloud"),(0,o.kt)("li",{parentName:"ul"},"Creating bare-metal clusters from scratch"),(0,o.kt)("li",{parentName:"ul"},"Reviewing other options for creating Kubernetes clusters")),(0,o.kt)("h3",{id:"\u7b2c-4-\u7248\u3067\u306e\u8a18\u8ff0"},"\u7b2c 4 \u7248\u3067\u306e\u8a18\u8ff0"),(0,o.kt)("p",null,"The topics we will cover are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getting ready for your first cluster"),(0,o.kt)("li",{parentName:"ul"},"Creating a single-node cluster with Minikube"),(0,o.kt)("li",{parentName:"ul"},"Creating a multi-node cluster with Kind"),(0,o.kt)("li",{parentName:"ul"},"Creating a multi-node cluster using k3d"),(0,o.kt)("li",{parentName:"ul"},"Creating clusters in the cloud"),(0,o.kt)("li",{parentName:"ul"},"Creating bare-metal clusters from scratch"),(0,o.kt)("li",{parentName:"ul"},"Reviewing other options for creating Kubernetes clusters")))}f.isMDXComponent=!0}}]);