"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(i,".").concat(m)]||u[m]||f[m]||c;return n?r.createElement(y,p(p({ref:t},l),{},{components:n})):r.createElement(y,p({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,p=new Array(c);p[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:o,p[1]=a;for(var s=2;s<c;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const c={},p="constexpr",a={unversionedId:"cpp/constexpr",id:"cpp/constexpr",title:"constexpr",description:"const \u548c constexpr \u7684\u6700\u5927\u533a\u522b\u662f\uff1aconstexpr \u5fc5\u987b\u5728\u7f16\u8bd1\u5668\u521d\u59cb\u5316\uff0c\u800c const \u53ef\u4ee5\u5728\u7f16\u8bd1\u5668\u521d\u59cb\u5316\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u3002",source:"@site/docs/cpp/2. constexpr.md",sourceDirName:"cpp",slug:"/cpp/constexpr",permalink:"/cpp/cpp/constexpr",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"const",permalink:"/cpp/cpp/const"},next:{title:"mutable",permalink:"/cpp/cpp/mutable"}},i={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constexpr"},"constexpr"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <array>\n#include <iostream>\n\nint main() {\n  constexpr int a = 5;\n  // a = 6; // error, const \u53d8\u91cf\u4e0d\u80fd\u6539\u53d8\n\n  constexpr int c = 10;\n  std::array<int, c> x; // okay\n\n  int size;\n  const int d = size; // okay\n  // std::array<int, d> y; // error\n\n  const int e = 5;\n  std::array<int, e> y; // okay, e is a constant expression\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"const \u548c constexpr \u7684\u6700\u5927\u533a\u522b\u662f\uff1aconstexpr \u5fc5\u987b\u5728\u7f16\u8bd1\u5668\u521d\u59cb\u5316\uff0c\u800c const \u53ef\u4ee5\u5728\u7f16\u8bd1\u5668\u521d\u59cb\u5316\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u3002")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"const \u548c constexpr \u90fd\u5b58\u5728\u7c7b\u578b\u5b89\u5168\u68c0\u67e5\uff0c\u9700\u8981\u5206\u914d\u5185\u5b58\uff0c\u5b58\u50a8\u5728\u6570\u636e\u6bb5\uff0c\u800c #define \u65e0\u7c7b\u578b\u5b89\u5168\u68c0\u67e5\uff0c\u4e0d\u5206\u914d\u5185\u5b58\uff0c\u5b58\u50a8\u5728\u4ee3\u7801\u6bb5\uff0c\u5b9a\u4e49\u5e38\u91cf\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9 constexpr \u6216 #define\uff0c\u4e0d\u8fc7 const \u548c constexpr \u65e0\u6cd5\u5b8c\u5168\u53d6\u4ee3 #define\u3002")))}u.isMDXComponent=!0}}]);