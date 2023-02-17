"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),d=l,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={},a="LLVM",p={unversionedId:"cpp/llvm",id:"cpp/llvm",title:"LLVM",description:"IR -- intermediate representation",source:"@site/docs/cpp/37. llvm.md",sourceDirName:"cpp",slug:"/cpp/llvm",permalink:"/cpp/cpp/llvm",draft:!1,tags:[],version:"current",sidebarPosition:37,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9759\u6001\u5b58\u50a8\u533a Vs \u52a8\u6001\u5b58\u50a8\u533a",permalink:"/cpp/cpp/\u9759\u6001\u5b58\u50a8\u533a Vs \u52a8\u6001\u5b58\u50a8\u533a"},next:{title:"RAII",permalink:"/cpp/cpp/RAII \u539f\u5219"}},i={},c=[{value:"LLVM \u67b6\u6784\u4e0b\u7684\u7f16\u8bd1\u5668\u5f00\u53d1",id:"llvm-\u67b6\u6784\u4e0b\u7684\u7f16\u8bd1\u5668\u5f00\u53d1",level:2},{value:"Clang",id:"clang",level:2},{value:"LLDB",id:"lldb",level:2},{value:"LLD",id:"lld",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"llvm"},"LLVM"),(0,l.kt)("p",null,"IR -- intermediate representation"),(0,l.kt)("p",null,"LLVM \u662f\u7f16\u8bd1\u5668\u67b6\u6784\uff0c\u5c06\u7f16\u8bd1\u5668\u7684\u201c\u524d\u7aef\u201d\u548c\u201c\u540e\u7aef\u201d\u8fdb\u884c\u5206\u79bb\uff0c\u201c\u524d\u7aef\u201d\u8d1f\u8d23 AST \u7684\u751f\u6210\uff0c\u201c\u540e\u7aef\u201d\u8d1f\u8d23\u5c06 AST \u8f6c\u5316\u4e3a\u673a\u5668\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u201c\u524d\u7aef\u201d\u90e8\u5206\u7531\u7528\u6237\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"\u201c\u540e\u7aef\u201d\u90e8\u5206\u7531 LLVM \u5b8c\u6210\uff0c\u7528\u6237\u9700\u8981\u7f16\u5199\u4ece AST \u5230 IR \u7684\u4ee3\u7801\uff0c\u800c\u4ece IR \u5230\u673a\u5668\u4ee3\u7801\u5219\u662f\u7531 LLVM \u81ea\u52a8\u751f\u6210\u3002"),(0,l.kt)("h2",{id:"llvm-\u67b6\u6784\u4e0b\u7684\u7f16\u8bd1\u5668\u5f00\u53d1"},"LLVM \u67b6\u6784\u4e0b\u7684\u7f16\u8bd1\u5668\u5f00\u53d1"),(0,l.kt)("p",null,"SOURCE CODE -> IR Code -> Native Machine Code"),(0,l.kt)("p",null,"\u8fd9\u771f\u7684\u5f88\u50cf JVM\uff0c\u6bd5\u7adf\u76ee\u524d JVM \u4e5f\u6709 JIT \u4e86\u3002"),(0,l.kt)("h2",{id:"clang"},"Clang"),(0,l.kt)("p",null,"clang \u5c31\u662f\u4f7f\u7528 LLVM \u67b6\u6784\u5f00\u53d1\u7684 C/C++/Objective-C \u7684\u7f16\u8bd1\u5668\u3002"),(0,l.kt)("h2",{id:"lldb"},"LLDB"),(0,l.kt)("p",null,"LLDB \u662f\u57fa\u4e8e LLVM \u548c Clang \u7684\u8c03\u8bd5\u5668\u3002"),(0,l.kt)("h2",{id:"lld"},"LLD"),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a linker."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://llvm.org/Users.html"},"https://llvm.org/Users.html"))))}s.isMDXComponent=!0}}]);