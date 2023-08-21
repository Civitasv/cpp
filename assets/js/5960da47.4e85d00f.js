"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,f=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},p="\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406",i={unversionedId:"cpp/\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406",id:"cpp/\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406",title:"\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406",description:"\u52a8\u6001\u591a\u6001",source:"@site/docs/cpp/40. \u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406.md",sourceDirName:"cpp",slug:"/cpp/\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406",permalink:"/cpp/cpp/\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Placement new",permalink:"/cpp/cpp/placement new"},next:{title:"\u6784\u9020\u51fd\u6570\u548c\u6790\u6784\u51fd\u6570",permalink:"/cpp/cpp/\u6784\u9020\u51fd\u6570\u548c\u6790\u6784\u51fd\u6570"}},o={},c=[{value:"\u5185\u5b58\u5206\u5e03",id:"\u5185\u5b58\u5206\u5e03",level:2},{value:"\u865a\u51fd\u6570\u7684\u5185\u5b58\u5206\u5e03",id:"\u865a\u51fd\u6570\u7684\u5185\u5b58\u5206\u5e03",level:2}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406"},"\u865a\u51fd\u6570\u548c\u865a\u8868\u7684\u539f\u7406"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u52a8\u6001\u591a\u6001")),(0,a.kt)("h2",{id:"\u5185\u5b58\u5206\u5e03"},"\u5185\u5b58\u5206\u5e03"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5185\u5b58\u5206\u5e03",src:n(728).Z,width:"1210",height:"976"})),(0,a.kt)("p",null,"2^32 Byte= 2^22 KB = 2^12 MB  = 2^2 GB = 4GB"),(0,a.kt)("p",null,"2^64 Byte = 2^54 KB = 2^44 MB = 2^34 GB = 2^22 TB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32 \u4f4d\u7cfb\u7edf\u7684\u5185\u6838\u7a7a\u95f4\u5360\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"1GB"),"\uff0c\u4f4d\u4e8e\u6700\u9ad8\u5904\uff0c\u5269\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"3G")," \u662f\u7528\u6237\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ul"},"64 \u4f4d\u7cfb\u7edf\u7684\u5185\u6838\u7a7a\u95f4\u548c\u7528\u6237\u7a7a\u95f4\u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"128TB"),"\uff0c\u5206\u522b\u5360\u636e\u6574\u4e2a\u5185\u5b58\u7a7a\u95f4\u7684\u6700\u9ad8\u548c\u6700\u4f4e\u5904\uff0c\u5269\u4e0b\u7684\u4e2d\u95f4\u90e8\u5206\u662f\u672a\u5b9a\u4e49\u7684\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u7a0b\u5728\u7528\u6237\u6001\u65f6\uff0c\u53ea\u80fd\u8bbf\u95ee\u7528\u6237\u7a7a\u95f4\u5185\u5b58"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u6709\u8fdb\u5165\u5185\u6838\u6001\u540e\uff0c\u624d\u53ef\u4ee5\u8bbf\u95ee\u5185\u6838\u7a7a\u95f4\u7684\u5185\u5b58")),(0,a.kt)("p",null,"\u7528\u6237\u7a7a\u95f4\u5185\u5b58\u4ece\u4f4e\u5230\u9ad8\u5206\u522b\u662f\u4ee3\u7801\u6bb5\u3001\u6570\u636e\u6bb5\u3001BSS\u6bb5\u3001\u5806\u6bb5\u3001\u6587\u4ef6\u6620\u5c04\u6bb5\u548c\u6808\u6bb5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6bb5\u5305\u62ec\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6bb5\u5305\u62ec\u5df2\u521d\u59cb\u5316\u7684\u9759\u6001\u5e38\u91cf\u548c\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"BSS \u6bb5\u5305\u62ec\u672a\u521d\u59cb\u5316\u7684\u9759\u6001\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u5806\u6bb5\u5305\u62ec\u52a8\u6001\u5206\u914d\u7684\u5185\u5b58\uff0c\u4ece\u4f4e\u5730\u5740\u5f00\u59cb\u5411\u4e0a\u589e\u957f"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u6620\u5c04\u6bb5\u5305\u62ec\u52a8\u6001\u5e93\u3001\u5171\u4eab\u5185\u5b58\u7b49\uff0c\u4ece\u4f4e\u5730\u5740\u5f00\u59cb\u5411\u4e0a\u589e\u957f"),(0,a.kt)("li",{parentName:"ul"},"\u6808\u6bb5\u5305\u62ec\u5c40\u90e8\u53d8\u91cf\u548c\u51fd\u6570\u8c03\u7528\u7684\u4e0a\u4e0b\u6587\u7b49")),(0,a.kt)("p",null,"\u4f7f\u7528 C \u6807\u51c6\u5e93\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"malloc")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"mmap"),"\uff0c\u5c31\u53ef\u4ee5\u5206\u522b\u5728\u5806\u548c\u6587\u4ef6\u6620\u5c04\u6bb5\u52a8\u6001\u5206\u914d\u5185\u5b58\u3002"),(0,a.kt)("h2",{id:"\u865a\u51fd\u6570\u7684\u5185\u5b58\u5206\u5e03"},"\u865a\u51fd\u6570\u7684\u5185\u5b58\u5206\u5e03"),(0,a.kt)("p",null,"\u865a\u51fd\u6570\u662f\u901a\u8fc7\u4e00\u5f20\u865a\u51fd\u6570\u8868\u6765\u5b9e\u73b0\u7684\u3002\u7b80\u79f0 V-Table\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class A {\n  public:\n    virtual void v_a() {}\n    virtual ~A() {}\n};\n\nint main() {\n  A* a = new A();\n  return 0;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"A")," \u7684\u5b9e\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," \u5728\u5185\u5b58\u4e2d\u7684\u5206\u5e03\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"a \u5185\u5b58\u5206\u5e03",src:n(125).Z,width:"985",height:"609"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u51fd\u6570\u7684\u6808\u5e27\u4e0a\u6709\u4e00\u4e2a A \u7c7b\u578b\u7684\u6307\u9488\u6307\u5411\u5806\u91cc\u9762\u5206\u914d\u7684\u5bf9\u8c61 A \u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u8c61 A \u5b9e\u4f8b\u7684\u5934\u90e8\u662f\u4e00\u4e2a vptr \u6307\u9488\uff0c\u7d27\u63a5\u7740\u662f A \u5bf9\u8c61\u6309\u7167\u58f0\u660e\u987a\u5e8f\u6392\u5217\u7684\u6210\u5458\u53d8\u91cf\uff08\u5f53\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u4fbf\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u5bf9\u8c61\u7684\u5730\u5740\uff0c\u5f97\u5230\u8be5\u5b9e\u4f8b\u7684\u865a\u51fd\u6570\u8868\uff0c\u4ece\u800c\u83b7\u53d6\u5176\u51fd\u6570\u6307\u9488\uff09"),(0,a.kt)("li",{parentName:"ul"},"vptr \u6307\u9488\u6307\u5411\u7684\u662f\u4ee3\u7801\u6bb5\u7684 A \u7c7b\u578b\u7684\u865a\u51fd\u6570\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u865a\u51fd\u6570\u8d77\u59cb\u5730\u5740\uff0c\u672c\u4f8b\u4e2d\u4e5f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"v_a"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://jacktang816.github.io/post/virtualfunction/"},"https://jacktang816.github.io/post/virtualfunction/"))))}m.isMDXComponent=!0},728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-03-03-19-40-27-2782719afb1c5a8ab3f1c17fadbc4bee.png"},125:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-03-03-20-25-13-a24450afdb0f4b98b913bbefe304e409.png"}}]);