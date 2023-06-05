"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6349],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},826:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09"},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64",id:"version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64",title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09",description:"\u5728\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u4e0a\u8fd0\u884c Rancher \u76ee\u524d\u8fd8\u5904\u5728\u5b9e\u9a8c\u9636\u6bb5\uff0cRancher \u5c1a\u672a\u6b63\u5f0f\u652f\u6301\u8be5\u529f\u80fd\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64.md",sourceDirName:"how-to-guides/advanced-user-guides/enable-experimental-features",slug:"/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64.md",tags:[],version:"2.6",lastUpdatedAt:1685574630,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u542f\u7528\u5b9e\u9a8c\u529f\u80fd",permalink:"/zh/v2.6/pages-for-subheaders/enable-experimental-features"},next:{title:"\u4f7f\u7528\u975e\u9ed8\u8ba4\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers"}},c={},u=[],p={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u4e0a\u8fd0\u884c Rancher \u76ee\u524d\u8fd8\u5904\u5728\u5b9e\u9a8c\u9636\u6bb5\uff0cRancher \u5c1a\u672a\u6b63\u5f0f\u652f\u6301\u8be5\u529f\u80fd\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u8282\u70b9\u4f7f\u7528 ARM64 \u67b6\u6784\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u4e0a\u8fd0\u884c Rancher"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6b64\u9009\u9879\u4ec5\u9002\u7528\u4e8e Docker \u5b89\u88c5\u3002\u8bf7\u77e5\u6089\uff0c\u4ee5\u4e0b\u5b89\u88c5\u547d\u4ee4\u53d6\u4ee3\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker \u5b89\u88c5\u94fe\u63a5"),"\u4e2d\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# \u5728\u6700\u540e\u4e00\u884c `rancher/rancher:vX.Y.Z` \u4e2d\uff0c\u8bf7\u52a1\u5fc5\u5c06 "X.Y.Z" \u66ff\u6362\u4e3a\u5305\u542b ARM64 \u7248\u672c\u7684\u53d1\u5e03\u7248\u672c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u5339\u914d\u7248\u672c\u662f v2.5.8\uff0c\u8bf7\u5728\u6b64\u884c\u586b\u5199 `rancher/rancher:v2.5.8`\u3002\ndocker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:vX.Y.Z\n')))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u68c0\u67e5\u4f60\u7684\u53d1\u884c\u7248\u672c\u662f\u5426\u4e0e ARM64 \u67b6\u6784\u517c\u5bb9\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u627e\u5230\u5bf9\u5e94\u7248\u672c\u7684\u53d1\u884c\u8bf4\u660e\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"Rancher \u53d1\u884c\u7248\u672c"),"\u81ea\u884c\u67e5\u8be2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u6807\u7b7e\u548c\u7248\u672c\u53f7\u76f4\u63a5\u627e\u5230\u4f60\u7684\u7248\u672c\u3002\u4f8b\u5982\uff0c\u4f60\u4f7f\u7528\u7684\u7248\u672c\u4e3a 2.5.8\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases/tag/v2.5.8"},"Rancher \u53d1\u884c\u7248\u672c - 2.5.8"),"\u3002"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u96c6\u7fa4\u5e76\u6dfb\u52a0\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u5fc5\u987b\u4e3a 1.12 \u6216\u66f4\u9ad8\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"CNI \u7f51\u7edc\u63d2\u4ef6\u5fc5\u987b\u662f ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.6/faq/container-network-interface-providers#flannel"},"Flannel")))),(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u5305\u542b\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u7684\u96c6\u7fa4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u5fc5\u987b\u4e3a 1.12 \u6216\u66f4\u9ad8\u7248\u672c")))),(0,a.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u5982\u4f55\u914d\u7f6e\u96c6\u7fa4\u9009\u9879\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"\u96c6\u7fa4\u9009\u9879"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u672a\u7ecf\u6d4b\u8bd5\u7684\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitoring\u3001\u544a\u8b66\u3001Notifiers\u3001\u6d41\u6c34\u7ebf\u548c Logging"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5e94\u7528\u5546\u5e97\u53d1\u5e03\u5e94\u7528")))}s.isMDXComponent=!0}}]);