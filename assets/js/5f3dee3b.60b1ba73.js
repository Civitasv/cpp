"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,y=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="KMP",p={unversionedId:"\u7b97\u6cd5/KMP",id:"\u7b97\u6cd5/KMP",title:"KMP",description:"\u4ee3\u7801\u968f\u60f3\u5f55:",source:"@site/docs/\u7b97\u6cd5/1. KMP.md",sourceDirName:"\u7b97\u6cd5",slug:"/\u7b97\u6cd5/KMP",permalink:"/cpp/\u7b97\u6cd5/KMP",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5",permalink:"/cpp/\u7b97\u6cd5/"},next:{title:"LRU \u7f13\u5b58\u6dd8\u6c70\u7b56\u7565",permalink:"/cpp/\u7b97\u6cd5/LRU"}},i={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kmp"},"KMP"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ee3\u7801\u968f\u60f3\u5f55: ",(0,o.kt)("a",{parentName:"p",href:"https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC"},"https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC"))),(0,o.kt)("p",null,"KMP \u7b97\u6cd5\u4e3b\u8981\u5e94\u7528\u4e8e\u5b57\u7b26\u4e32\u5339\u914d\u3002"),(0,o.kt)("p",null,"\u4e3b\u8981\u601d\u60f3\u662f\u5f53\u51fa\u73b0\u5b57\u7b26\u4e32\u4e0d\u5339\u914d\u65f6\uff0c\u53ef\u4ee5\u77e5\u9053\u4e00\u90e8\u5206\u4e4b\u524d\u5df2\u7ecf\u5339\u914d\u7684\u6587\u672c\u5185\u5bb9\uff0c\u5229\u7528\u8fd9\u4e9b\u4fe1\u606f\uff0c\u4ee5\u907f\u514d\u4ece\u5934\u5339\u914d\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u5982\u4f55\u8bb0\u5f55\u5df2\u7ecf\u5339\u914d\u7684\u6587\u672c\u5185\u5bb9\uff0c\u662f KMP \u7684\u91cd\u70b9\u3002"),(0,o.kt)("p",null,"\u524d\u7f00\u8868\u7528\u4e8e\u8bb0\u5f55\u4e0b\u6807 i \u4e4b\u524d\u7684\u5b57\u7b26\u4e32\u4e2d\uff0c\u6709\u591a\u5927\u957f\u5ea6\u7684\u76f8\u540c",(0,o.kt)("strong",{parentName:"p"},"\u524d\u7f00"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u540e\u7f00"),"\u3002"),(0,o.kt)("p",null,"\u524d\u7f00\u6307\u4e0d\u5305\u542b\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7684\u6240\u6709\u4ee5\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5f00\u5934\u7684\u8fde\u7eed\u5b50\u4e32\uff1b\u540e\u7f00\u6307\u4e0d\u5305\u542b\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u6240\u6709\u4ee5\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7ed3\u5c3e\u7684\u8fde\u7eed\u5b50\u4e32\u3002"),(0,o.kt)("p",null,"\u4e2a\u4eba\u7406\u89e3\uff0cKMP \u7684\u5173\u952e\u70b9\u5728\u4e8e\u5982\u4f55\u5229\u7528\u5df2\u7ecf\u5339\u914d\u7684\u90e8\u5206\uff0cnext \u6570\u7ec4\u5c31\u662f\u5e72\u8fd9\u4e2a\u7684\uff0c\u5229\u7528\u524d\u7f00\u548c\u540e\u7f00\u7684\u6982\u5ff5\uff0c\u4ee5\u5b9e\u73b0\u5b57\u7b26\u4e32\u7684\u5339\u914d\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6784\u5efa next \u524d\u7f00\u6570\u7ec4\uff0cnext","[i]"," \u8868\u793a\u5b50\u5b57\u7b26\u4e32 (0,..i) \u7684\u6700\u957f\u76f8\u7b49\u524d\u540e\u7f00\u7684\u957f\u5ea6"),(0,o.kt)("li",{parentName:"ol"},"\u904d\u5386\u5339\u914d\uff0c\u5f53\u5339\u914d\u5931\u8d25\u65f6\uff0c\u4f7f\u5339\u914d\u70b9\u4f4d\u4e8e next","[i-1]","\uff0c\u56e0\u4e3a\uff0cnext","[i-1]","\u5b58\u50a8\u7740\u4e0e(0,..i-1)\u7684\u540e\u7f00\u76f8\u7b49\u7684\u6700\u957f\u524d\u7f00\u7684\u4e0b\u6807\u7684\u540e\u4e00\u4f4d\uff0c\u8fd9\u6837\uff0c\u53ef\u4ee5\u4ece\u8fd9\u4e2a\u4f4d\u7f6e\u7ee7\u7eed\u5339\u914d\uff0c\u5982\u679c\u8fd8\u662f\u5339\u914d\u4e0d\u4e0a\uff0c\u5219\u7ee7\u7eed\u79fb\u52a8\u5339\u914d\u70b9\u3002")))}s.isMDXComponent=!0}}]);