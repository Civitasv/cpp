"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,p=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=i(n),f=c,y=l["".concat(o,".").concat(f)]||l[f]||d[f]||p;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var p=n.length,a=new Array(p);a[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[l]="string"==typeof e?e:c,a[1]=u;for(var i=2;i<p;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var r=n(7462),c=(n(7294),n(3905));const p={},a="struct and typedef struct",u={unversionedId:"cpp/struct_and_typedef_struct",id:"cpp/struct_and_typedef_struct",title:"struct and typedef struct",description:"C \u8bed\u8a00\u4e2d\uff1a",source:"@site/docs/cpp/11. struct_and_typedef_struct.md",sourceDirName:"cpp",slug:"/cpp/struct_and_typedef_struct",permalink:"/cpp/cpp/struct_and_typedef_struct",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:'extern "C"',permalink:"/cpp/cpp/extern_c"},next:{title:"struct Vs class",permalink:"/cpp/cpp/struct_vs_class"}},o={},i=[],s={toc:i};function l(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"struct-and-typedef-struct"},"struct and typedef struct"),(0,c.kt)("p",null,"C \u8bed\u8a00\u4e2d\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct Student {\n    int age;\n} S;\n\n// ==>\n\nstruct Student {\n    int age;\n};\n\ntypedef struct Student S;\n")),(0,c.kt)("p",null,"\u800c\u5728 C++ \u4e2d\uff0c\u4e0d\u9700\u8981\u4f7f\u7528 typedef\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"struct Student")," \u6216\u8005 ",(0,c.kt)("inlineCode",{parentName:"p"},"Student"),"\u3002"),(0,c.kt)("p",null,"\u82e5\u5b9a\u4e49\u4e86\u4e0e ",(0,c.kt)("inlineCode",{parentName:"p"},"Student")," \u540c\u540d\u7684\u51fd\u6570\uff0c\u5219 ",(0,c.kt)("inlineCode",{parentName:"p"},"Student")," \u53ea\u4ee3\u8868\u51fd\u6570\uff0c\u4e0d\u4ee3\u8868\u7ed3\u6784\u4f53\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-cpp"},'typedef struct Student {\n    int age;\n} S;\n\nvoid Student() {}           // \u6b63\u786e\uff0c\u5b9a\u4e49\u540e "Student" \u53ea\u4ee3\u8868\u6b64\u51fd\u6570\n\n//void S() {}               // \u9519\u8bef\uff0c\u7b26\u53f7 "S" \u5df2\u7ecf\u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a "struct Student" \u7684\u522b\u540d\n\nint main() {\n    Student();\n    struct Student me;      // \u6216\u8005 "S me";\n    return 0;\n}\n')),(0,c.kt)("p",null,"Weird, I'd better never know or use it."))}l.isMDXComponent=!0}}]);