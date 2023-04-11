"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[635],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"WhatIs_230407_oo01",title:"What is Kubernetes?"},l=void 0,u={unversionedId:"k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01",id:"k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01",isDocsHomePage:!1,title:"What is Kubernetes?",description:"What Kubernetes is",source:"@site/docs/k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01",permalink:"/sau_Bioinfo001/k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681194066,formattedLastUpdatedAt:"2023/4/11",frontMatter:{id:"WhatIs_230407_oo01",title:"What is Kubernetes?"},sidebar:"infraSidebar",previous:{title:"Kubernetes \u3092\u4f7f\u3063\u3066\u3084\u308a\u305f\u3044\u3053\u3068",permalink:"/sau_Bioinfo001/k8s/MasteringKubernetes3rd/Motivation_230407_oo01/Motivation_230407_oo01"},next:{title:"Clusters",permalink:"/sau_Bioinfo001/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01"}},c=[{value:"What Kubernetes is",id:"what-kubernetes-is",children:[]},{value:"Cattle versus pets",id:"cattle-versus-pets",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-kubernetes-is"},"What Kubernetes is"),(0,i.kt)("p",null,"Kubernetes is a platform that ",(0,i.kt)("strong",{parentName:"p"},"encompasses a huge number of services")," and capabilities that keeps growing. The core functionality is ",(0,i.kt)("strong",{parentName:"p"},"scheduling workloads in containers across your infrastructure"),", but it doesn't stop there. Here are some of the other capabilities Kubernetes brings to the table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mounting storage systems"),(0,i.kt)("li",{parentName:"ul"},"Distributing secrets"),(0,i.kt)("li",{parentName:"ul"},"Checking application health and readiness"),(0,i.kt)("li",{parentName:"ul"},"Replicating application instances"),(0,i.kt)("li",{parentName:"ul"},"Using the Horizontal Pod Autoscaler"),(0,i.kt)("li",{parentName:"ul"},"Using Cluster Autoscaling"),(0,i.kt)("li",{parentName:"ul"},"Naming and service discovery"),(0,i.kt)("li",{parentName:"ul"},"Balancing loads"),(0,i.kt)("li",{parentName:"ul"},"Rolling updates"),(0,i.kt)("li",{parentName:"ul"},"Monitoring resources"),(0,i.kt)("li",{parentName:"ul"},"Accessing and ingesting logs"),(0,i.kt)("li",{parentName:"ul"},"Debugging applications"),(0,i.kt)("li",{parentName:"ul"},"Providing authentication and authorization")),(0,i.kt)("h2",{id:"cattle-versus-pets"},"Cattle versus pets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the olden days ...",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Developers and users knew exactly what software was running on each machine. "),(0,i.kt)("li",{parentName:"ul"},"\uff08\u7269\u7406\uff09\u30b5\u30fc\u30d0\u306b\u30ae\u30ea\u30b7\u30e3\u795e\u8a71\u306e\u767b\u5834\u4eba\u7269\u306e\u540d\u524d\u3092\u3064\u3051\u305f\u308a\u3057\u3066\u3044\u305f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30b5\u30fc\u30d0\u3092\u30da\u30c3\u30c8\u306e\u3088\u3046\u306b\u6271\u3063\u305f\u3002"),(0,i.kt)("li",{parentName:"ul"},"When a server died it was a major crisis. "))),(0,i.kt)("li",{parentName:"ul"},"Obviously, that approach doesn't scale. When you have tens or hundreds of servers, you must start treating them like cattle. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kubernetes takes the cattle approach to the extreme and takes full responsibility for allocating containers to specific machines.")))))}h.isMDXComponent=!0}}]);