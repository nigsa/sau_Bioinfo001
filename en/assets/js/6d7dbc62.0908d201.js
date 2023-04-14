"use strict";(self.webpackChunksau_research_00=self.webpackChunksau_research_00||[]).push([[991],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(n),d=a,m=k["".concat(s,".").concat(d)]||k[d]||p[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"Concepts_230407_oo01",title:"Clusters"},s=void 0,u={unversionedId:"k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",id:"k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",isDocsHomePage:!1,title:"Clusters",description:"\u5168\u4f53\u56f3",source:"@site/docs/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01.md",sourceDirName:"k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01",slug:"/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",permalink:"/en/k8s/MasteringKubernetes3rd/Chap1/Concepts_230407_oo01/Concepts_230407_oo01",tags:[],version:"current",lastUpdatedAt:1681435542,formattedLastUpdatedAt:"4/14/2023",frontMatter:{id:"Concepts_230407_oo01",title:"Clusters"},sidebar:"infraSidebar",previous:{title:"What is Kubernetes?",permalink:"/en/k8s/MasteringKubernetes3rd/Chap1/WhatIs_230407_oo01/WhatIs_230407_oo01"},next:{title:"Pods",permalink:"/en/k8s/MasteringKubernetes3rd/Chap1/Pod_230407_oo01/Pod_230407_oo01"}},c=[{value:"\u5168\u4f53\u56f3",id:"\u5168\u4f53\u56f3",children:[]},{value:"\u7528\u8a9e\u306e\u5b9a\u7fa9 : \u30af\u30e9\u30b9\u30bf\u30fc",id:"\u7528\u8a9e\u306e\u5b9a\u7fa9--\u30af\u30e9\u30b9\u30bf\u30fc",children:[]},{value:"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u5b9f\u4f8b : kind",id:"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u5b9f\u4f8b--kind",children:[]},{value:"kind \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"kind-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[{value:"kubectl \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"kubectl-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"kind \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"kind-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-1",children:[]},{value:"Creating a Cluster",id:"creating-a-cluster",children:[]},{value:"Deleting a Cluster",id:"deleting-a-cluster",children:[]},{value:"\u30b9\u30ef\u30c3\u30d7\u306b\u3064\u3044\u3066",id:"\u30b9\u30ef\u30c3\u30d7\u306b\u3064\u3044\u3066",children:[]}]}],p={toc:c};function k(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5168\u4f53\u56f3"},"\u5168\u4f53\u56f3"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7941).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u56f3\u3092\u898b\u308b\u3068\u3001Node \u306f Interntet => Firewall => Node \u5185\u306e Proxy \u3068\u901a\u4fe1\u3067\u304d\u308b\u3068\u66f8\u3044\u3066\u3042\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"Master \u306e\u65b9\u306f kubectl \u30b3\u30de\u30f3\u30c9\u304c\u901a\u4fe1\u3067\u304d\u308b\u3068\u66f8\u3044\u3066\u3042\u308b\u3002")),(0,l.kt)("p",null,"\u7b2c 4 \u7248\u3067\u306f\u4ee5\u4e0b\u306e\u56f3\u306b\u5909\u308f\u3063\u3066\u3044\u308b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4939).Z})),(0,l.kt)("p",null,"\u3053\u306e\u56f3\u306f Kubernetes \u306e\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u56f3\u3068\u540c\u3058\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/"},"https://kubernetes.io/docs/concepts/overview/components/"))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u4e0a\u8a18\u306e\u56f3\u306f\u3044\u305a\u308c\u306b\u3057\u308d\u898b\u306b\u304f\u3044\u3002\uff08\u5b57\u304c\u5c0f\u3055\u3044\u3002\u8981\u7d20\u304c\u591a\u3059\u304e\u3002\uff09"),(0,l.kt)("p",null,"Kubernetes in Action (2018)\u306e\u56f3\u306e\u307b\u3046\u304c\u898b\u3084\u3059\u3044\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4317).Z})),(0,l.kt)("p",null,"\u3053\u306e\u56f3\u306f Kubernetes \u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u305d\u306e\u914d\u7f6e\u3092\u8868\u3057\u3066\u3044\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30af\u30e9\u30b9\u30bf\u30fc\u306f Master node \u3068 Worker node \u304b\u3089\u306a\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"Master node \u3067\u306f control plane \u306b\u5c5e\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u52d5\u3044\u3066\u3044\u308b\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"etcd : \u7ba1\u7406\u7528\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"),(0,l.kt)("li",{parentName:"ul"},"API server "),(0,l.kt)("li",{parentName:"ul"},"controller manager, scheduler "))),(0,l.kt)("li",{parentName:"ul"},"Worker node \u3067\u306f\u4ee5\u4e0b\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u52d5\u3044\u3066\u3044\u308b\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"container runtime (Docker, rkt, ...)"),(0,l.kt)("li",{parentName:"ul"},"kubelet : which talks to the API server and manages containers on its node"),(0,l.kt)("li",{parentName:"ul"},"kube-proxy")))),(0,l.kt)("h2",{id:"\u7528\u8a9e\u306e\u5b9a\u7fa9--\u30af\u30e9\u30b9\u30bf\u30fc"},"\u7528\u8a9e\u306e\u5b9a\u7fa9 : \u30af\u30e9\u30b9\u30bf\u30fc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clusters",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A cluster is a collection of hosts (nodes).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3064\u307e\u308a host = node \u3068\u8a00\u3063\u3066\u3044\u308b\u3002"))))),(0,l.kt)("li",{parentName:"ul"},"Nodes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A node is a single host. It may be a physical or virtual machine. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3064\u307e\u308a node = \u7269\u7406\u8a08\u7b97\u6a5f\uff08\u307e\u305f\u306f VM) = host \u3068\u8a00\u3063\u3066\u3044\u308b\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Each Kubernetes node runs several Kubernetes components, such as the kubelet, the container runtime, and kube-proxy. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uff08\u5927\u62b5\u306e\uff09node \u306e\u4e0a\u3067\u306f kubelet, container runtime, kube-proxy \u304c\u52d5\u3044\u3066\u3044\u3066\u3001\n\uff08\u6b21\u306e control plane \u306e\u8aac\u660e\u3092\u8aad\u3080\u3068\uff09\u3068\u3042\u308b node \u306e\u4e0a\u3067\u306f control plane \u306b\u5c5e\u3059\u308b\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u52d5\u3044\u3066\u3044\u308b\u3001\u3068\u89e3\u3055\u308c\u308b\u3002"))))),(0,l.kt)("li",{parentName:"ul"},"Control plane ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Usually, all the control plane components are set up on the same host although its not required.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u3053\u3046\u66f8\u3044\u3066\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u306f\u3001Control plane \u306f(node \u3068\u5bfe\u6bd4\u3055\u308c\u308b\u3088\u3046\u306a\u3082\u306e\u3067\u306f\u306a\u304f)\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3067\u3042\u308b\u3001\u3068\u8a00\u3063\u3066\u3044\u308b\u3002"))),(0,l.kt)("li",{parentName:"ul"},"The control plane of Kubernetes consists of several components:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"an API server, "),(0,l.kt)("li",{parentName:"ul"},"a scheduler, "),(0,l.kt)("li",{parentName:"ul"},"a controller manager and optionally a cloud controller manager. ")))))),(0,l.kt)("p",null,"\u7b2c 3 \u7248\u3067\u306f The master is the control plane of Kubernetes.\u3068\u306a\u3063\u3066\u3044\u308b\u304c\u7b2c 4 \u7248\u3067\u306f master \u3068\u3044\u3046\u8a00\u8449\u304c\u524a\u9664\u3055\u308c\u3066\u3044\u308b\u3002\nmaster \u3068\u8a00\u3063\u3066\u3057\u307e\u3046\u3068 master node \u3064\u307e\u308a node \u306e\u4e00\u7a2e\u3068\u89e3\u3055\u308c\u3066\u3057\u307e\u3044\u304c\u3061\u3060\u304b\u3089\u3060\u308d\u3046\u3002\u305d\u3046\u53d6\u3063\u3066\u3057\u307e\u3046\u3068\u4e0a\u8a18\u5b9a\u7fa9\u306e\u8fbb\u8904\u304c\u5408\u308f\u306a\u304f\u306a\u3063\u3066\u304f\u308b\u3002"),(0,l.kt)("h2",{id:"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u5b9f\u4f8b--kind"},"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u5b9f\u4f8b : kind"),(0,l.kt)("p",null,"kind \u306f\u4e0a\u8a18\u306e\u7269\u7406\u8a08\u7b97\u6a5f\u306e\u610f\u5473\u306e node \u306e\u4ee3\u308f\u308a\u306b\u3001Docker \u30b3\u30f3\u30c6\u30ca\u3092 node \u3068\u898b\u7acb\u3066\u3066 Kubernetes \u3092\u7c21\u6613\u7684\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u4ed5\u7d44\u307f\u3002"),(0,l.kt)("p",null,"kind \u306b\u304a\u3051\u308b\u30ce\u30fc\u30c9\u3068\u306f\uff1fkind \u306b\u304a\u3051\u308b\u30de\u30eb\u30c1\u30ce\u30fc\u30c9\u69cb\u6210\u3068\u306f\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"kind \u306f\u3001\u4e00\u53f0\u306e\u7269\u7406\u8a08\u7b97\u6a5f\u306e\u4e2d\u3067\u3057\u304b\u52d5\u4f5c\u3057\u306a\u3044\u3002\u8907\u6570\u53f0\u306e\u7269\u7406\u8a08\u7b97\u6a5f\u3092\u3064\u306a\u304e\u5408\u308f\u305b\u3066\u7269\u7406\u30af\u30e9\u30b9\u30bf\u69cb\u6210\u3068\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3002"),(0,l.kt)("li",{parentName:"ul"},"kind \u306e\u7528\u8a9e\u3067\u30ce\u30fc\u30c9\u3068\u306f\u7269\u7406\u8a08\u7b97\u6a5f\u306b\u898b\u7acb\u3066\u305f Docker \u30b3\u30f3\u30c6\u30ca\u306e\u3053\u3068\u3002"),(0,l.kt)("li",{parentName:"ul"},"kind \u306e\u7528\u8a9e\u3067\u30de\u30eb\u30c1\u30ce\u30fc\u30c9\u69cb\u6210\u3068\u306f\u3001\uff11\u53f0\u306e\u7269\u7406\u8a08\u7b97\u6a5f\u306e\u4e2d\u306b\u8907\u6570\u306e Docker \u30b3\u30f3\u30c6\u30ca(=kind \u306e\u610f\u5473\u306e\u30ce\u30fc\u30c9\uff09\u3092\u7acb\u3066\u3066\u3001Docker \u30b3\u30f3\u30c6\u30ca\u306e\u30af\u30e9\u30b9\u30bf\u3092\u69cb\u6210\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3066\u3044\u308b\u3002")),(0,l.kt)("h2",{id:"kind-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"kind \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"Kubuntu Linux 22.04LTS \u306b kind \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u307f\u305f\u3002"),(0,l.kt)("p",null,"\u53c2\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"https://kind.sigs.k8s.io/docs/user/quick-start/"))),(0,l.kt)("h3",{id:"kubectl-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"kubectl \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"\u53c2\u8003\u8cc7\u6599\uff08kind \u306e\u516c\u5f0f\u30de\u30cb\u30e5\u30a2\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\uff09\u306e\u5192\u982d\u306b\u3001kubectl \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u3088\u3068\u66f8\u3044\u3066\u3042\u3063\u305f\u306e\u3067\u3001\n\u6307\u793a\u306b\u5f93\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u4e0b\u8a18\u3092\u53c2\u8003\u306b\u3057\u3066 kubectl \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u3088\u3068\u306e\u3053\u3068\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"},"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/"))),(0,l.kt)("p",null,"\u624b\u9806\u306e\u7c21\u4fbf\u3055\u306e\u305f\u3081\n\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u3092\u7528\u3044\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u884c\u3063\u305f\u3002"),(0,l.kt)("p",null,"Update the apt package index and install packages needed to use the Kubernetes apt repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install -y ca-certificates curl\n")),(0,l.kt)("p",null,"Download the Google Cloud public signing key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo curl -fsSLo /etc/apt/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg\n")),(0,l.kt)("p",null,"Add the Kubernetes apt repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n')),(0,l.kt)("p",null,"Update apt package index with the new repository and install kubectl:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install -y kubectl\n")),(0,l.kt)("p",null,"\u554f\u984c\u306a\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u3002\n\u6700\u5f8c\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt-get install -y kubectl"),"\u306e\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3042\u3063\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"oogasawa@MiniPC:~/tmp (2023-04-14 03:03:07)\n$ sudo apt-get install -y kubectl\n\u30d1\u30c3\u30b1\u30fc\u30b8\u30ea\u30b9\u30c8\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059... \u5b8c\u4e86\n\u4f9d\u5b58\u95a2\u4fc2\u30c4\u30ea\u30fc\u3092\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059... \u5b8c\u4e86        \n\u72b6\u614b\u60c5\u5831\u3092\u8aad\u307f\u53d6\u3063\u3066\u3044\u307e\u3059... \u5b8c\u4e86        \n\u4ee5\u4e0b\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u81ea\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3057\u305f\u304c\u3001\u3082\u3046\u5fc5\u8981\u3068\u3055\u308c\u3066\u3044\u307e\u305b\u3093:\n  libflashrom1 libftdi1-2 libllvm13\n\u3053\u308c\u3092\u524a\u9664\u3059\u308b\u306b\u306f 'sudo apt autoremove' \u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u4ee5\u4e0b\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u65b0\u305f\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059:\n  kubectl\n\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9: 0 \u500b\u3001\u65b0\u898f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb: 1 \u500b\u3001\u524a\u9664: 0 \u500b\u3001\u4fdd\u7559: 44 \u500b\u3002\n10.2 MB \u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u64cd\u4f5c\u5f8c\u306b\u8ffd\u52a0\u3067 49.3 MB \u306e\u30c7\u30a3\u30b9\u30af\u5bb9\u91cf\u304c\u6d88\u8cbb\u3055\u308c\u307e\u3059\u3002\n\u53d6\u5f97:1 https://packages.cloud.google.com/apt kubernetes-xenial/main amd64 kubectl amd64 1.27.0-00 [10.2 MB]\n10.2 MB \u3092 2 \u79d2 \u3067\u53d6\u5f97\u3057\u307e\u3057\u305f (4,339 kB/s)\n\u4ee5\u524d\u306b\u672a\u9078\u629e\u306e\u30d1\u30c3\u30b1\u30fc\u30b8 kubectl \u3092\u9078\u629e\u3057\u3066\u3044\u307e\u3059\u3002\n(\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059 ... \u73fe\u5728 249642 \u500b\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u307e\u3059\u3002)\n.../kubectl_1.27.0-00_amd64.deb \u3092\u5c55\u958b\u3059\u308b\u6e96\u5099\u3092\u3057\u3066\u3044\u307e\u3059 ...\nkubectl (1.27.0-00) \u3092\u5c55\u958b\u3057\u3066\u3044\u307e\u3059...\nkubectl (1.27.0-00) \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059 ...\noogasawa@MiniPC:~/tmp (2023-04-14 03:03:28)\n$ \n\n")),(0,l.kt)("h3",{id:"kind-\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb-1"},"kind \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,'\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e"Quick Start" => "Install From Release Binaries"\u306b\u5f93\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3002'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"https://kind.sigs.k8s.io/docs/user/quick-start/"))),(0,l.kt)("p",null,"\u624b\u9806\u306f\u5358\u306b\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3042\u308b\u3002"),(0,l.kt)("p",null,"On Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd $HOME/tmp\ncurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64\nchmod +x ./kind\nsudo mv ./kind /usr/local/bin/kind\n")),(0,l.kt)("p",null,"\u554f\u984c\u306a\u304f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f\u3002\u5b9f\u884c\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3042\u3063\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ogasawa@MiniPC:~/tmp (2023-04-14 03:08:37)\n$ curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100    97  100    97    0     0    208      0 --:--:-- --:--:-- --:--:--   208\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0\n100 6808k  100 6808k    0     0  3032k      0  0:00:02  0:00:02 --:--:-- 7684k\noogasawa@MiniPC:~/tmp (2023-04-14 03:08:47)\n$ chmod +x ./kind\noogasawa@MiniPC:~/tmp (2023-04-14 03:08:56)\n$ sudo mv ./kind /usr/local/bin/kind\noogasawa@MiniPC:~/tmp (2023-04-14 03:09:06)\n$ \n\n")),(0,l.kt)("h3",{id:"creating-a-cluster"},"Creating a Cluster"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kind create cluster"),"\u3092\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u4f5c\u3089\u308c\u308b\u3068\u306e\u3053\u3068\u306a\u306e\u3067\u3084\u3063\u3066\u307f\u305f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker \u3092\u4e00\u822c\u30e6\u30fc\u30b6\u3067\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u304b\u3063\u305f\u306e\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"sudo"),"\u304c\u5fc5\u8981\u3060\u3063\u305f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'oogasawa@MiniPC:~/tmp (2023-04-14 03:09:06)\n$ kind create cluster\nERROR: failed to create cluster: failed to list nodes: command "docker ps -a --filter label=io.x-k8s.kind.cluster=kind --format \'{{.Names}}\'" failed with error: exit status 1\nCommand Output: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json?all=1&filters=%7B%22label%22%3A%7B%22io.x-k8s.kind.cluster%3Dkind%22%3Atrue%7D%7D": dial unix /var/run/docker.sock: connect: permission denied\noogasawa@MiniPC:~/tmp (2023-04-14 03:14:21)\n$ sudo kind create cluster\nCreating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.26.3) \ud83d\uddbc \n \u2713 Preparing nodes \ud83d\udce6  \n \u2713 Writing configuration \ud83d\udcdc \n \u2713 Starting control-plane \ud83d\udd79\ufe0f \n \u2713 Installing CNI \ud83d\udd0c \n \u2713 Installing StorageClass \ud83d\udcbe \nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nNot sure what to do next? \ud83d\ude05  Check out https://kind.sigs.k8s.io/docs/user/quick-start/\n')),(0,l.kt)("p",null,"\u3053\u306e\u72b6\u614b\u3060\u3068\u3001\u540c\u69d8\u306b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3092\u3064\u304b\u3046\u3068\u304d\u306b\u3082",(0,l.kt)("inlineCode",{parentName:"p"},"sudo"),"\u304c\u5fc5\u8981\u3067\u3042\u3063\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"oogasawa@MiniPC:~/tmp (2023-04-14 03:16:12)\n$ kubectl cluster-info --context kind-kind\nerror: context \"kind-kind\" does not exist\n\noogasawa@MiniPC:~/tmp (2023-04-14 03:20:37)\n$ sudo kubectl cluster-info --context kind-kind\nKubernetes control plane is running at https://127.0.0.1:44393\nCoreDNS is running at https://127.0.0.1:44393/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\noogasawa@MiniPC:~/tmp (2023-04-14 03:20:59)\n$\n")),(0,l.kt)("p",null,"\u3053\u306e\u4f8b\u306e\u3088\u3046\u306b\u5358\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"kind create cluster"),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001kind-control-plane \u3068\u3044\u3046 node 1 \u3064\u304b\u3089\u306a\u308b\u30af\u30e9\u30b9\u30bf\u304c\u751f\u6210\u3055\u308c\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"oogasawa@MiniPC:~/tmp (2023-04-14 03:42:42)\n$ sudo kubectl get nodes\nNAME                 STATUS   ROLES           AGE   VERSION\nkind-control-plane   Ready    control-plane   26m   v1.26.3\noogasawa@MiniPC:~/tmp (2023-04-14 03:42:49)\n$ \n\n")),(0,l.kt)("h3",{id:"deleting-a-cluster"},"Deleting a Cluster"),(0,l.kt)("p",null,"\u3053\u306e\u4f8b\u306e\u3088\u3046\u306b\u5358\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"kind create cluster"),"\u30b3\u30de\u30f3\u30c9\u3067\u30af\u30e9\u30b9\u30bf\u3092\u4f5c\u3063\u305f\u5834\u5408\u306f\u3001\n\u5358\u306b",(0,l.kt)("inlineCode",{parentName:"p"},"kind delete cluster"),"\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30af\u30e9\u30b9\u30bf\u304c\u524a\u9664\u3067\u304d\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'oogasawa@MiniPC:~/tmp (2023-04-14 03:42:49)\n$ sudo kind delete cluster\nDeleting cluster "kind" ...\nDeleted nodes: ["kind-control-plane"]\noogasawa@MiniPC:~/tmp (2023-04-14 03:48:14)\n$ sudo kubectl cluster-info \nE0414 03:48:26.486964  157208 memcache.go:265] couldn\'t get current server API group list: Get "http://localhost:8080/api?timeout=32s": dial tcp 127.0.0.1:8080: connect: connection refused\nE0414 03:48:26.487394  157208 memcache.go:265] couldn\'t get current server API group list: Get "http://localhost:8080/api?timeout=32s": dial tcp 127.0.0.1:8080: connect: connection refused\nE0414 03:48:26.489075  157208 memcache.go:265] couldn\'t get current server API group list: Get "http://localhost:8080/api?timeout=32s": dial tcp 127.0.0.1:8080: connect: connection refused\nE0414 03:48:26.490790  157208 memcache.go:265] couldn\'t get current server API group list: Get "http://localhost:8080/api?timeout=32s": dial tcp 127.0.0.1:8080: connect: connection refused\nE0414 03:48:26.491691  157208 memcache.go:265] couldn\'t get current server API group list: Get "http://localhost:8080/api?timeout=32s": dial tcp 127.0.0.1:8080: connect: connection refused\n\nTo further debug and diagnose cluster problems, use \'kubectl cluster-info dump\'.\nThe connection to the server localhost:8080 was refused - did you specify the right host or port?\noogasawa@MiniPC:~/tmp (2023-04-14 03:48:26)\n$ \n')),(0,l.kt)("h3",{id:"\u30b9\u30ef\u30c3\u30d7\u306b\u3064\u3044\u3066"},"\u30b9\u30ef\u30c3\u30d7\u306b\u3064\u3044\u3066"),(0,l.kt)("p",null,"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5\u3067\u3042\u308b kubeadm \u3092\u4f7f\u3063\u3066 Kubernetes \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u304d\u306b\u306f\u30b9\u30ef\u30c3\u30d7\u304c\u30aa\u30d5\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u30c1\u30a7\u30c3\u30af\u3055\u308c\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"))),(0,l.kt)("p",null,"\u3057\u304b\u3057 kind \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u4f5c\u696d\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u30b9\u30ef\u30c3\u30d7\u81ea\u4f53\u306f\u5b58\u5728\u3057\u3066\u3044\u305f\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u4f55\u3082\u8a00\u308f\u308c\u306a\u304b\u3063\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"oogasawa@MiniPC:~/public_html/works/fasta_store (2023-04-14 09:54:37)\n$ swapon -s\nFilename        Type        Size        Used        Priority\n/swapfile       file        2097148     0       -2\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306f ChatGPT \u306e\u51fa\u529b"),(0,l.kt)("p",null,"Kubernetes in Docker (kind)\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u3067 Kubernetes \u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3067\u3042\u308a\u3001\u30b9\u30ef\u30c3\u30d7\u304c\u30aa\u30f3\u306b\u306a\u3063\u3066\u3044\u3066\u3082\u6a5f\u80fd\u3057\u307e\u3059\u304c\u3001\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u30b9\u30ef\u30c3\u30d7\u306f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u60aa\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30b9\u30ef\u30c3\u30d7\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30e1\u30e2\u30ea\u304c\u4e0d\u8db3\u3057\u305f\u5834\u5408\u306b\u3001\u4e00\u90e8\u306e\u30c7\u30fc\u30bf\u304c\u30c7\u30a3\u30b9\u30af\u306b\u30b9\u30ef\u30c3\u30d7\u30a2\u30a6\u30c8\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u4f4e\u4e0b\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u30fc\u3084\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u304c\u4f4e\u4e0b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"Kubernetes \u3067\u306f\u3001\u30ce\u30fc\u30c9\u306e\u30e1\u30e2\u30ea\u3092\u7ba1\u7406\u3059\u308b kubelet \u304c\u30b9\u30ef\u30c3\u30d7\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001kind \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30b9\u30ef\u30c3\u30d7\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002\u30b9\u30ef\u30c3\u30d7\u3092\u30aa\u30d5\u306b\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ sudo swapoff -a\n")),(0,l.kt)("p",null,"\u305f\u3060\u3057\u3001\u30b9\u30ef\u30c3\u30d7\u3092\u30aa\u30d5\u306b\u3059\u308b\u524d\u306b\u3001\u5341\u5206\u306a\u30e1\u30e2\u30ea\u3092\u6301\u3064\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u5341\u5206\u306a\u30e1\u30e2\u30ea\u304c\u306a\u3044\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"))}k.isMDXComponent=!0},7941:function(e,t,n){t.Z=n.p+"assets/images/architecture-f11ce99727a2008f22449d9d3eca2fcd.png"},4939:function(e,t,n){t.Z=n.p+"assets/images/architecture4-d0b667f6c8c373ccd12ae0f5cccd04c7.png"},4317:function(e,t,n){t.Z=n.p+"assets/images/k8s_in_action-08999b546672fa478b1742508cf009c7.png"}}]);