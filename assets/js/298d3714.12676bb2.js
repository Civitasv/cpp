"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="\u8fed\u4ee3\u5668",i={unversionedId:"stl/\u8fed\u4ee3\u5668",id:"stl/\u8fed\u4ee3\u5668",title:"\u8fed\u4ee3\u5668",description:"\u8fed\u4ee3\u5668\u4ec0\u4e48\u65f6\u5019\u4f1a\u5931\u6548",source:"@site/docs/stl/5. \u8fed\u4ee3\u5668.md",sourceDirName:"stl",slug:"/stl/\u8fed\u4ee3\u5668",permalink:"/cpp/stl/\u8fed\u4ee3\u5668",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7a7a\u95f4\u914d\u7f6e\u5668",permalink:"/cpp/stl/\u7a7a\u95f4\u914d\u7f6e\u5668"},next:{title:"\u7b97\u6cd5",permalink:"/cpp/algorithm/"}},c={},p=[{value:"\u8fed\u4ee3\u5668\u4ec0\u4e48\u65f6\u5019\u4f1a\u5931\u6548",id:"\u8fed\u4ee3\u5668\u4ec0\u4e48\u65f6\u5019\u4f1a\u5931\u6548",level:2},{value:"\u8fed\u4ee3\u5668 vs \u6307\u9488",id:"\u8fed\u4ee3\u5668-vs-\u6307\u9488",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fed\u4ee3\u5668"},"\u8fed\u4ee3\u5668"),(0,o.kt)("h2",{id:"\u8fed\u4ee3\u5668\u4ec0\u4e48\u65f6\u5019\u4f1a\u5931\u6548"},"\u8fed\u4ee3\u5668\u4ec0\u4e48\u65f6\u5019\u4f1a\u5931\u6548"),(0,o.kt)("p",null,"\u8fed\u4ee3\u5668\u628a\u4e0d\u540c\u5bb9\u5668\u7684\u8bbf\u95ee\u903b\u8f91\u62bd\u8c61\u51fa\u6765\uff0c\u4ece\u800c\u5728\u4e0d\u7528\u66b4\u9732\u5bb9\u5668\u5185\u90e8\u7ed3\u6784\u7684\u60c5\u51b5\u4e0b\u8fbe\u5230\u5faa\u73af\u904d\u5386\u96c6\u5408\u7684\u6548\u679c\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u5e8f\u5217\u5bb9\u5668vector\uff0cdeque\u6765\u8bf4\uff0c\u4f7f\u7528erase\u540e\uff0c\u540e\u8fb9\u7684\u6bcf\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u90fd\u4f1a\u5931\u6548\uff0c\u540e\u8fb9\u6bcf\u4e2a\u5143\u7d20\u90fd\u5f80\u524d\u79fb\u52a8\u4e00\u4f4d\uff0cerase\u8fd4\u56de\u4e0b\u4e00\u4e2a\u6709\u6548\u7684\u8fed\u4ee3\u5668\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e\u5173\u8054\u5bb9\u5668map\uff0cset\u6765\u8bf4\uff0c\u4f7f\u7528\u4e86erase\u540e\uff0c\u5f53\u524d\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u5931\u6548\uff0c\u4f46\u662f\u5176\u7ed3\u6784\u662f\u7ea2\u9ed1\u6811\uff0c\u5220\u9664\u5f53\u524d\u5143\u7d20\uff0c\u4e0d\u4f1a\u5f71\u54cd\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff0c\u6240\u4ee5\u5728\u8c03\u7528erase\u4e4b\u524d\uff0c\u8bb0\u5f55\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\u5373\u53ef\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u4e8elist\u6765\u8bf4\uff0c\u5b83\u4f7f\u7528\u4e86\u4e0d\u8fde\u7eed\u5206\u914d\u7684\u5185\u5b58\uff0c\u5e76\u4e14\u5b83\u7684erase\u65b9\u6cd5\u4e5f\u4f1a\u8fd4\u56de\u4e0b\u4e00\u4e2a\u6709\u6548\u7684\u8fed\u4ee3\u5668\uff0c\u56e0\u6b64\u4e0a\u9762\u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"\u8fed\u4ee3\u5668-vs-\u6307\u9488"},"\u8fed\u4ee3\u5668 vs \u6307\u9488"),(0,o.kt)("p",null,'\u8fed\u4ee3\u5668\u4e0d\u662f\u6307\u9488\uff0c\u662f\u7c7b\u6a21\u677f\uff0c\u8868\u73b0\u7684\u50cf\u6307\u9488\u3002\u4ed6\u53ea\u662f\u6a21\u62df\u4e86\u6307\u9488\u7684\u4e00\u4e9b\u529f\u80fd\uff0c\u91cd\u8f7d\u4e86\u6307\u9488\u7684\u4e00\u4e9b\u64cd\u4f5c\u7b26\uff0c--\x3e\u3001++\u3001--\u7b49\u3002\u8fed\u4ee3\u5668\u5c01\u88c5\u4e86\u6307\u9488\uff0c\u662f\u4e00\u4e2a"\u53ef\u904d\u5386STL\uff08 Standard Template Library\uff09\u5bb9\u5668\u5185\u5168\u90e8\u6216\u90e8\u5206\u5143\u7d20"\u7684\u5bf9\u8c61\uff0c\u672c\u8d28\u662f\u5c01\u88c5\u4e86\u539f\u751f\u6307\u9488\uff0c\u662f\u6307\u9488\u6982\u5ff5\u7684\u4e00\u79cd\u63d0\u5347\uff0c\u63d0\u4f9b\u4e86\u6bd4\u6307\u9488\u66f4\u9ad8\u7ea7\u7684\u884c\u4e3a\uff0c\u76f8\u5f53\u4e8e\u4e00\u79cd\u667a\u80fd\u6307\u9488\uff0c\u4ed6\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u7ed3\u6784\u6765\u5b9e\u73b0\u4e0d\u540c\u7684++\uff0c--\u7b49\u64cd\u4f5c\u3002'),(0,o.kt)("p",null,"\u8fed\u4ee3\u5668\u8fd4\u56de\u7684\u662f\u5bf9\u8c61\u5f15\u7528\u800c\u4e0d\u662f\u5bf9\u8c61\u7684\u503c\uff0c\u6240\u4ee5cout\u53ea\u80fd\u8f93\u51fa\u8fed\u4ee3\u5668\u4f7f\u7528\u53d6\u503c\u540e\u7684\u503c\u800c\u4e0d\u80fd\u76f4\u63a5\u8f93\u51fa\u5176\u81ea\u8eab\u3002C"))}u.isMDXComponent=!0}}]);