"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={slug:"/",sidebar_position:1},o="\ud83d\udee0\ufe0f C++",r={unversionedId:"cpp",id:"cpp",title:"\ud83d\udee0\ufe0f C++",description:"const",source:"@site/docs/cpp.md",sourceDirName:".",slug:"/",permalink:"/cpp/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar"},p={},s=[{value:"const",id:"const",level:2},{value:"constexpr",id:"constexpr",level:2},{value:"mutable",id:"mutable",level:2},{value:"static\u3001auto\u3001extern",id:"staticautoextern",level:2},{value:"this",id:"this",level:2},{value:"inline",id:"inline",level:2},{value:"volatile",id:"volatile",level:2},{value:"assert()",id:"assert",level:2},{value:"sizeof",id:"sizeof",level:2},{value:"extern &quot;C&quot;",id:"extern-c",level:2},{value:"struct and typedef struct",id:"struct-and-typedef-struct",level:2},{value:"struct Vs class",id:"struct-vs-class",level:2},{value:"union",id:"union",level:2},{value:"\u590d\u6742\u58f0\u660e",id:"\u590d\u6742\u58f0\u660e",level:2},{value:"\u9762\u5411\u5bf9\u8c61\uff0cC \u8bed\u8a00",id:"\u9762\u5411\u5bf9\u8c61c-\u8bed\u8a00",level:2},{value:"operator \u91cd\u8f7d",id:"operator-\u91cd\u8f7d",level:2},{value:"bool()",id:"bool",level:3},{value:"explicit",id:"explicit",level:2},{value:"noexcept",id:"noexcept",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-c"},"\ud83d\udee0\ufe0f C++"),(0,i.kt)("h2",{id:"const"},"const"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n\nint main() {\n  const int a = 5;\n  // a = 6; // error, const \u53d8\u91cf\u4e0d\u80fd\u6539\u53d8\n\n  int b = 2;\n  const int *p = &b;\n  // attention: const int = int const\n  // *p = 2; // error, \u6307\u9488\u6307\u5411\u7684\u503c\u662f const, \u6240\u4ee5\u4e0d\u80fd\u4fee\u6539\n  int *const p2 = &b;\n\n  *p2 = 20; // right, \u6b64\u65f6\u662f const \u6307\u9488\uff0c\u8868\u660e\u6307\u9488\u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u4f46\u6307\u5411\u7684\u53d8\u91cf\u53ef\u53d8\n\n  const int &c = b;\n  // c = 2; // error, \u5f15\u7528\u7684\u503c\u662f const, \u6240\u4ee5\u4e0d\u80fd\u4fee\u6539\n  // int &const d = b; // error, const \u4e0d\u80fd\u4fee\u9970\u5f15\u7528, \u56e0\u4e3a\u5f15\u7528\u53ea\u662f\u5bf9\u8c61\u7684\u522b\u540d\n\n  class Test {\n    void test() const {\n      // a = 2; // error, const \u6210\u5458\u51fd\u6570\u4e0d\u80fd\u4fee\u6539\u6210\u5458\u53d8\u91cf\uff0c\u5176\u5b9e\u5c31\u662f\u4e0d\u80fd\u4fee\u6539 this\n      // const int* this = object;\n    } // \u8868\u793a\u8be5\u51fd\u6570\u4e0d\u80fd\u4fee\u6539\u6210\u5458\u53d8\u91cf\n\n    int a;\n  };\n}\n")),(0,i.kt)("h2",{id:"constexpr"},"constexpr"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <array>\n#include <iostream>\n\nint main() {\n  constexpr int a = 5;\n  // a = 6; // error, const \u53d8\u91cf\u4e0d\u80fd\u6539\u53d8\n\n  constexpr int c = 10;\n  std::array<int, c> x; // okay\n\n  int size;\n  const int d = size; // okay\n  // std::array<int, d> y; // error\n\n  const int e = 5;\n  std::array<int, e> y; // okay, e is a constant expression\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"const \u548c constexpr \u7684\u6700\u5927\u533a\u522b\u662f\uff1aconstexpr \u5fc5\u987b\u5728\u7f16\u8bd1\u5668\u521d\u59cb\u5316\uff0c\u800c const \u53ef\u4ee5\u5728\u7f16\u8bd1\u5668\u521d\u59cb\u5316\uff0c\u4e5f\u53ef\u4ee5\u5728\u8fd0\u884c\u671f\u521d\u59cb\u5316\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"const \u548c constexpr \u90fd\u5b58\u5728\u7c7b\u578b\u5b89\u5168\u68c0\u67e5\uff0c\u9700\u8981\u5206\u914d\u5185\u5b58\uff0c\u5b58\u50a8\u5728\u6570\u636e\u6bb5\uff0c\u800c #define \u65e0\u7c7b\u578b\u5b89\u5168\u68c0\u67e5\uff0c\u4e0d\u5206\u914d\u5185\u5b58\uff0c\u5b58\u50a8\u5728\u4ee3\u7801\u6bb5\uff0c\u5b9a\u4e49\u5e38\u91cf\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9 constexpr \u6216 #define\uff0c\u4e0d\u8fc7 const \u548c constexpr \u65e0\u6cd5\u5b8c\u5168\u53d6\u4ee3 #define\u3002")),(0,i.kt)("h2",{id:"mutable"},"mutable"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/c-mutable-keyword/"},"https://www.geeksforgeeks.org/c-mutable-keyword/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Mutable {\n  mutable int x;\n  int y;\n\n  void ConstMethod() const {\n    x = 2;\n  }\n};\n")),(0,i.kt)("h2",{id:"staticautoextern"},"static\u3001auto\u3001extern"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid PRIVATE() {}\n} // namespace\n\nstatic void PrivateFunc() {}\n\nclass StaticUsage {\npublic:\n  static int a; // \u7c7b\u6570\u636e\u53d8\u91cf\n\n  static void ClassFunc() {\n    // \u7c7b\u51fd\u6570\n    PrivateFunc();\n    PRIVATE();\n  }\n  int A(); // declaration\n};\n\n// definition\ninline int StaticUsage::A() { return 0; }\n\nint main() {\n  static int a; // \u53d8\u91cf\u5b58\u50a8\u533a\u57df\u4e3a\u9759\u6001\u533a\n  StaticUsage::ClassFunc();\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u94fe\u63a5\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u65e0\u94fe\u63a5: \u5c40\u90e8\u53d8\u91cf"),(0,i.kt)("li",{parentName:"ol"},"\u5185\u90e8\u94fe\u63a5: static"),(0,i.kt)("li",{parentName:"ol"},"\u5916\u90e8\u94fe\u63a5: extern, \u9ed8\u8ba4\u662f\u5916\u90e8\u94fe\u63a5"))),(0,i.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u57df\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u5757\u4f5c\u7528\u57df"),(0,i.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u4f5c\u7528\u57df"))),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u671f\u9650\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u9759\u6001\u5b58\u50a8\u671f\u9650: static, \u5728\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u5360\u6709\u540c\u6837\u7684\u5b58\u50a8\u5355\u5143"),(0,i.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u5b58\u50a8\u671f\u9650: auto, \u5728\u6240\u5c5e\u5757\u88ab\u6267\u884c\u65f6\u83b7\u5f97\u5185\u5b58\u5355\u5143\uff0c\u5728\u5757\u7ec8\u6b62\u65f6\u91ca\u653e\u5185\u5b58\u5355\u5143\uff0c\u9ed8\u8ba4\u662f\u81ea\u52a8\u5b58\u50a8\u671f\u9650")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int a = 5; // \u5916\u90e8\u94fe\u63a5\u3001\u6587\u4ef6\u4f5c\u7528\u57df\u3001\u9759\u6001\u5b58\u50a8\u671f\u9650\nstatic int b = 5; // \u5185\u90e8\u94fe\u63a5\u3001\u6587\u4ef6\u4f5c\u7528\u57df\u3001\u9759\u6001\u5b58\u50a8\u671f\u9650\nint e = 5;\nstatic int f = 5;\nint main() {\n  static int c = 5; // \u65e0\u94fe\u63a5\u3001\u5757\u4f5c\u7528\u57df\u3001\u9759\u6001\u5b58\u50a8\u671f\u9650\n  int d = 5; // \u65e0\u94fe\u63a5\u3001\u5757\u4f5c\u7528\u57df\u3001\u81ea\u52a8\u5b58\u50a8\u671f\u9650\n  extern int e; // \u5916\u90e8\u94fe\u63a5\u3001\u5757\u4f5c\u7528\u57df\u3001\u9759\u6001\u5b58\u50a8\u671f\u9650\n  extern int f; // \u5185\u90e8\u94fe\u63a5\u3001\u5757\u4f5c\u7528\u57df\u3001\u9759\u6001\u5b58\u50a8\u671f\u9650\n}\n")),(0,i.kt)("h2",{id:"this"},"this"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728 non-static \u6210\u5458\u51fd\u6570\u4e2d\uff0c\u9690\u542b\u7740\u8be5\u6307\u9488\uff0c\u76f8\u5f53\u4e8e python \u4e2d\u7684 self \u53d8\u91cf"),(0,i.kt)("li",{parentName:"ol"},"\u5f53\u5bf9\u4e00\u4e2a\u5bf9\u8c61\u8c03\u7528\u6210\u5458\u51fd\u6570\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u5148\u5c06\u5bf9\u8c61\u7684\u5730\u5740\u8d4b\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u9488\uff0c\u5728\u6210\u5458\u51fd\u6570\u5185\u90e8\uff0c\u5b58\u53d6\u6570\u636e\u65f6\uff0c\u90fd\u4f1a\u9690\u5f0f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u9488"),(0,i.kt)("li",{parentName:"ol"},"this \u6307\u9488\u9ed8\u8ba4\u4e3a const \u6307\u9488\uff0c\u6240\u4ee5\u4e0d\u80fd\u4fee\u6539 this \u6307\u9488\u7684\u503c\uff0c\u5728 const \u6210\u5458\u51fd\u6570\u4e2d\uff0cthis \u6307\u9488\u7684\u7c7b\u578b\u662f const ClassName","*"," const\uff0c\u6240\u4ee5\u4e0d\u80fd\u4fee\u6539 this \u6307\u9488\u6307\u5411\u7684\u5bf9\u8c61\uff08\u4e0d\u80fd\u4fee\u6539\u4e0d\u662f mutable \u7684\u6570\u636e\u6210\u5458\uff09"),(0,i.kt)("li",{parentName:"ol"},"this \u662f\u4e00\u4e2a\u53f3\u503c\uff0c\u6ca1\u6709\u5730\u5740")),(0,i.kt)("h2",{id:"inline"},"inline"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n  inline virtual void who() { cout << "I am Base\\n"; }\n  virtual ~Base() {}\n};\nclass Derived : public Base {\npublic:\n  inline void who() // \u4e0d\u5199inline\u65f6\u9690\u5f0f\u5185\u8054\n  {\n    cout << "I am Derived\\n";\n  }\n};\n\nint main() {\n  // \u6b64\u5904\u7684\u865a\u51fd\u6570\n  // who()\uff0c\u662f\u901a\u8fc7\u7c7b\uff08Base\uff09\u7684\u5177\u4f53\u5bf9\u8c61\uff08b\uff09\u6765\u8c03\u7528\u7684\uff0c\u7f16\u8bd1\u671f\u95f4\u5c31\u80fd\u786e\u5b9a\u4e86\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u662f\u5185\u8054\u7684\uff0c\u4f46\u6700\u7ec8\u662f\u5426\u5185\u8054\u53d6\u51b3\u4e8e\u7f16\u8bd1\u5668\u3002\n  Base b;\n  b.who();\n\n  // \u6b64\u5904\u7684\u865a\u51fd\u6570\u662f\u901a\u8fc7\u6307\u9488\u8c03\u7528\u7684\uff0c\u5448\u73b0\u591a\u6001\u6027\uff0c\u9700\u8981\u5728\u8fd0\u884c\u65f6\u671f\u95f4\u624d\u80fd\u786e\u5b9a\uff0c\u6240\u4ee5\u4e0d\u80fd\u4e3a\u5185\u8054\u3002\n  Base *ptr = new Derived();\n  ptr->who();\n\n  // \u56e0\u4e3aBase\u6709\u865a\u6790\u6784\u51fd\u6570\uff08virtual ~Base() {}\uff09\uff0c\u6240\u4ee5 delete\n  // \u65f6\uff0c\u4f1a\u5148\u8c03\u7528\u6d3e\u751f\u7c7b\uff08Derived\uff09\u6790\u6784\u51fd\u6570\uff0c\u518d\u8c03\u7528\u57fa\u7c7b\uff08Base\uff09\u6790\u6784\u51fd\u6570\uff0c\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f\u3002\n  delete ptr;\n  ptr = nullptr;\n\n  return 0;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u628a\u5185\u8054\u51fd\u6570\u91cc\u9762\u7684\u5185\u5bb9\u5199\u5728\u8c03\u7528\u5185\u8054\u51fd\u6570\u5904\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u4e0d\u7528\u6267\u884c\u8fdb\u5165\u51fd\u6570\u7684\u6b65\u9aa4\uff0c\u76f4\u63a5\u6267\u884c\u51fd\u6570\u4f53\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e\u5b8f\uff0c\u5374\u6bd4\u5b8f\u591a\u4e86\u7c7b\u578b\u68c0\u67e5\uff0c\u771f\u6b63\u5177\u6709\u51fd\u6570\u7279\u6027\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5668\u4e00\u822c\u4e0d\u5185\u8054\u5305\u542b\u5faa\u73af\u3001\u9012\u5f52\u3001switch \u7b49\u590d\u6742\u64cd\u4f5c\u7684\u5185\u8054\u51fd\u6570\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u7c7b\u58f0\u660e\u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\uff0c\u9664\u4e86\u865a\u51fd\u6570\u7684\u5176\u4ed6\u51fd\u6570\u90fd\u4f1a\u81ea\u52a8\u9690\u5f0f\u5730\u5f53\u6210\u5185\u8054\u51fd\u6570\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class InlineClz {\npublic:\n  int A(); // declaration\n};\n\n// definition\ninline int InlineClz::A() { return 0; }\n")),(0,i.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u901f\u5ea6\u63d0\u9ad8\uff0c\u4ee3\u7801\u76f4\u63a5\u590d\u5236\u5230\u6267\u884c\u5904\uff0c\u65e0\u987b\u53c2\u6570\u538b\u6808\u3001\u7ed3\u679c\u8fd4\u56de\u7b49"),(0,i.kt)("li",{parentName:"ol"},"\u5185\u8054\u51fd\u6570\u76f8\u6bd4\u5b8f\u51fd\u6570\u6765\u8bf4\uff0c\u5728\u4ee3\u7801\u5c55\u5f00\u65f6\uff0c\u4f1a\u505a\u5b89\u5168\u68c0\u67e5\u6216\u81ea\u52a8\u7c7b\u578b\u8f6c\u6362\uff08\u540c\u666e\u901a\u51fd\u6570\uff09\uff0c\u800c\u5b8f\u5b9a\u4e49\u5219\u4e0d\u4f1a"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u7c7b\u4e2d\u58f0\u660e\u540c\u65f6\u5b9a\u4e49\u7684\u6210\u5458\u51fd\u6570\uff0c\u81ea\u52a8\u8f6c\u5316\u4e3a\u5185\u8054\u51fd\u6570\uff0c\u56e0\u6b64\u5185\u8054\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u7c7b\u7684\u6210\u5458\u53d8\u91cf\uff0c\u5b8f\u5b9a\u4e49\u5219\u4e0d\u80fd"),(0,i.kt)("li",{parentName:"ol"},"\u5bb9\u6613\u8c03\u8bd5")),(0,i.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u81a8\u80c0"),(0,i.kt)("li",{parentName:"ol"},"\u662f\u5426\u5185\u8054\uff0c\u7a0b\u5e8f\u5458\u4e0d\u53ef\u63a7\u3002\u5185\u8054\u51fd\u6570\u53ea\u662f\u5bf9\u7f16\u8bd1\u5668\u7684\u5efa\u8bae\uff0c\u662f\u5426\u5bf9\u51fd\u6570\u5185\u8054\uff0c\u51b3\u5b9a\u6743\u5728\u4e8e\u7f16\u8bd1\u5668")),(0,i.kt)("p",null,"\u865a\u51fd\u6570\u53ef\u4ee5\u662f\u5185\u8054\u51fd\u6570\u5417\uff1f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u865a\u51fd\u6570\u53ef\u4ee5\u662f\u5185\u8054\u51fd\u6570\uff0c\u5185\u8054\u662f\u53ef\u4ee5\u4fee\u9970\u865a\u51fd\u6570\u7684\uff0c\u4f46\u662f\u5f53\u865a\u51fd\u6570\u8868\u73b0\u591a\u6001\u6027\u7684\u65f6\u5019\u4e0d\u80fd\u5185\u8054\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5185\u8054\u662f\u5728\u7f16\u8bd1\u671f\u5efa\u8bae\u7f16\u8bd1\u5668\u5185\u8054\uff0c\u800c\u865a\u51fd\u6570\u7684\u591a\u6001\u6027\u5728\u8fd0\u884c\u671f\uff0c\u7f16\u8bd1\u5668\u65e0\u6cd5\u77e5\u9053\u8fd0\u884c\u671f\u8c03\u7528\u54ea\u4e2a\u4ee3\u7801\uff0c\u56e0\u6b64\u865a\u51fd\u6570\u8868\u73b0\u4e3a\u591a\u6001\u6027\u65f6\uff08\u8fd0\u884c\u671f\uff09\u4e0d\u53ef\u4ee5\u5185\u8054\u3002"),(0,i.kt)("li",{parentName:"ol"},"inline virtual \u552f\u4e00\u53ef\u4ee5\u5185\u8054\u7684\u65f6\u5019\u662f\uff1a\u7f16\u8bd1\u5668\u77e5\u9053\u6240\u8c03\u7528\u7684\u5bf9\u8c61\u662f\u54ea\u4e2a\u7c7b\uff08\u5982 Base::who()\uff09\uff0c\u8fd9\u53ea\u6709\u5728\u7f16\u8bd1\u5668\u5177\u6709\u5b9e\u9645\u5bf9\u8c61\u800c\u4e0d\u662f\u5bf9\u8c61\u7684\u6307\u9488\u6216\u5f15\u7528\u65f6\u624d\u4f1a\u53d1\u751f\u3002")),(0,i.kt)("h2",{id:"volatile"},"volatile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"volatile int i = 10;\n")),(0,i.kt)("p",null,"volatile tells the compiler that:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\"Hey compiler, I'm volatile and, you know, I can be changed by some XYZ that you're not even aware of. That XYZ could be anything. Maybe some alien outside this planet called program. Maybe some lightning, some form of interrupt, volcanoes, etc can mutate me. Maybe. You never know who is going to change me! So O you ignorant, stop playing an all-knowing god, and don't dare touch the code where I'm present. Okay?\"")),(0,i.kt)("h2",{id:"assert"},"assert()"),(0,i.kt)("p",null,"\u65ad\u8a00\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"#define NDEBUG")," \u5173\u95ed"),(0,i.kt)("h2",{id:"sizeof"},"sizeof"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  int a = 3;\n  cout << sizeof(a) << '\\n'; // return sizeof integer, 4\n\n  int *b = &a;\n  cout << sizeof(b) << '\\n'; // return sizeof pointer, 8\n\n  int n[] = {1, 2, 3, 4};\n  cout << sizeof(n) << '\\n'; // return size of array, 16\n\n  int *p = n;\n  cout << sizeof(p) << '\\n'; // return sizeof pointer, 8\n\n  string ss = \"1\";\n  cout << sizeof(ss) << '\\n'; // return sizeof string pointer, 32\n}\n")),(0,i.kt)("h2",{id:"extern-c"},'extern "C"'),(0,i.kt)("p",null,'\u76ee\u7684\uff1a\u8ba9 C++ \u7f16\u8bd1\u5668\u5c06 extern "C" \u7684\u58f0\u660e\u7684\u4ee3\u7801\u5f53\u4f5c C \u8bed\u8a00\u4ee3\u7801\u5904\u7406\uff0c\u53ef\u4ee5\u907f\u514d C++ \u56e0\u7b26\u53f7\u4fee\u9970\u5bfc\u81f4\u4ee3\u7801\u4e0d\u80fd\u548c C \u8bed\u8a00\u5e93\u4e2d\u7684\u7b26\u53f7\u8fdb\u884c\u94fe\u63a5\u7684\u95ee\u9898\u3002'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7b80\u5355\u6765\u8bf4\uff0cC++ \u4e2d\u51fd\u6570\u53ef\u4ee5\u91cd\u8f7d\uff0c\u56e0\u6b64\u5728\u5904\u7406\u51fd\u6570\u65f6\uff0c\u4f1a\u9996\u5148\u5bf9\u51fd\u6570\u540d\u8fdb\u884c\u4fee\u6539\uff0c\u4f46\u662f C \u8bed\u8a00\u4e2d\u4e0d\u5177\u6709\u91cd\u8f7d\u673a\u5236\uff0c\u4f7f\u7528 extern C \u540e\uff0cC++ \u5c31\u4e0d\u4f1a\u4fee\u6539\u51fd\u6570\u540d\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'C compiler does not use mangling while c++\'s does. So if you want to call a c interface from a c++ program, you have to clearly declared that the c interface as "extern c".')),(0,i.kt)("h2",{id:"struct-and-typedef-struct"},"struct and typedef struct"),(0,i.kt)("p",null,"C \u8bed\u8a00\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct Student {\n    int age;\n} S;\n\n// ==>\n\nstruct Student {\n    int age;\n};\n\ntypedef struct Student S;\n")),(0,i.kt)("p",null,"\u800c\u5728 C++ \u4e2d\uff0c\u4e0d\u9700\u8981\u4f7f\u7528 typedef\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"struct Student")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"Student"),"\u3002"),(0,i.kt)("p",null,"\u82e5\u5b9a\u4e49\u4e86\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," \u540c\u540d\u7684\u51fd\u6570\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"Student")," \u53ea\u4ee3\u8868\u51fd\u6570\uff0c\u4e0d\u4ee3\u8868\u7ed3\u6784\u4f53\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'typedef struct Student {\n    int age;\n} S;\n\nvoid Student() {}           // \u6b63\u786e\uff0c\u5b9a\u4e49\u540e "Student" \u53ea\u4ee3\u8868\u6b64\u51fd\u6570\n\n//void S() {}               // \u9519\u8bef\uff0c\u7b26\u53f7 "S" \u5df2\u7ecf\u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a "struct Student" \u7684\u522b\u540d\n\nint main() {\n    Student();\n    struct Student me;      // \u6216\u8005 "S me";\n    return 0;\n}\n')),(0,i.kt)("p",null,"Weird, I'd better never know or use it."),(0,i.kt)("h2",{id:"struct-vs-class"},"struct Vs class"),(0,i.kt)("p",null,"struct \u4f5c\u4e3a\u6570\u636e\u7684\u7ed3\u5408\uff0cclass \u4f5c\u4e3a OOP \u7684\u539f\u5b50\u3002"),(0,i.kt)("p",null,"struct \u9ed8\u8ba4\u8bbf\u95ee\u6743\u9650\u662f public, class \u9ed8\u8ba4\u662f private\u3002"),(0,i.kt)("p",null,"I prefer struct."),(0,i.kt)("h2",{id:"union"},"union"),(0,i.kt)("p",null,"use std::variant instead."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u8bbf\u95ee\u63a7\u5236\u7b26\u4e3a public"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u542b\u6709\u5f15\u7528\u7c7b\u578b\u7684\u6210\u5458"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u7ee7\u627f\u81ea\u5176\u4ed6\u7c7b\uff0c\u4e0d\u80fd\u4f5c\u4e3a\u57fa\u7c7b"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u80fd\u542b\u6709\u865a\u51fd\u6570"),(0,i.kt)("li",{parentName:"ol"},"\u533f\u540d union \u5728\u5b9a\u4e49\u6240\u5728\u4f5c\u7528\u57df\u53ef\u76f4\u63a5\u8bbf\u95ee union \u6210\u5458"),(0,i.kt)("li",{parentName:"ol"},"\u533f\u540d union \u4e0d\u80fd\u5305\u542b protected \u6216 private \u6210\u5458"),(0,i.kt)("li",{parentName:"ol"},"\u5168\u5c40\u533f\u540d\u8054\u5408\u5fc5\u987b\u662f\u9759\u6001\u7684")),(0,i.kt)("h2",{id:"\u590d\u6742\u58f0\u660e"},"\u590d\u6742\u58f0\u660e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int *(*x[10])(void);\n")),(0,i.kt)("p",null,"\u89c4\u5219\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u59cb\u7ec8\u4ece\u5185\u5f80\u5916\u8bfb\u58f0\u660e\u7b26\u53f7\uff0c\u5373\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u5f00\u59cb\u8bfb"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u4f5c\u9009\u62e9\u65f6\uff0c\u59cb\u7ec8\u5148\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," \u518d\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"*"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"int *x[10]")," \u8868\u793a\u5177\u6709 10 \u4e2a\u6307\u5411 int \u7684\u6307\u9488\u7684\u6570\u7ec4\u3002")),(0,i.kt)("h2",{id:"\u9762\u5411\u5bf9\u8c61c-\u8bed\u8a00"},"\u9762\u5411\u5bf9\u8c61\uff0cC \u8bed\u8a00"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n\n// The top-level class.\n\ntypedef struct sCommClass {\n  int (*open)(struct sCommClass *self, char *fspec);\n} tCommClass;\n\n// Inherit\n// Function for the TCP \'class\'.\nstatic int tcpOpen(tCommClass *tcp, char *fspec) {\n  printf("Opening TCP: %s\\n", fspec);\n  return 0;\n}\nstatic int tcpInit(tCommClass *tcp) {\n  tcp->open = &tcpOpen;\n  return 0;\n}\n\n// Function for the HTTP \'class\'.\nstatic int httpOpen(tCommClass *http, char *fspec) {\n  printf("Opening HTTP: %s\\n", fspec);\n  return 0;\n}\nstatic int httpInit(tCommClass *http) {\n  http->open = &httpOpen;\n  return 0;\n}\n\nint main(void) {\n  int status;\n  tCommClass commTcp, commHttp;\n\n  // Same \'base\' class but initialised to different sub-classes\n  tcpInit(&commTcp);\n  httpInit(&commHttp);\n\n  // Called in exactly the same manner, polymorphism\n  status = (commTcp.open)(&commTcp, "bigiron.box.com:5000");\n  status = (commHttp.open)(&commHttp, "http://www.microsoft.com");\n\n  return 0;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5c01\u88c5\uff0c\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u6307\u9488\u548c\u6570\u636e\u6307\u9488"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u7ee7\u627f\uff0c\u53ef\u4ee5\u4f7f\u7528\u7ed3\u6784\u4f53\u7684\u5d4c\u5957"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u591a\u6001\uff0c\u53ef\u4ee5\u4f7f\u7236\u7c7b\u548c\u5b50\u7c7b\u7684\u51fd\u6570\u6307\u9488\u4e0d\u540c")),(0,i.kt)("h2",{id:"operator-\u91cd\u8f7d"},"operator \u91cd\u8f7d"),(0,i.kt)("h3",{id:"bool"},"bool()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct A {\n  operator bool() const { return true; }\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"operator TypeName()")," are conversion operators. Thet allow objects of the class type to be used as if they were of type ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeName")," and when they are, they are converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeName")," using this conversion function.",(0,i.kt)("br",{parentName:"p"}),"\n","From ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4600295/what-is-the-meaning-of-operator-bool-const"},"https://stackoverflow.com/questions/4600295/what-is-the-meaning-of-operator-bool-const"))),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u4e2a\u8fd0\u7b97\u7b26\u91cd\u8f7d\u51fd\u6570\u80fd\u591f\u5c06 A \u5bf9\u8c61\u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"\u3002"),(0,i.kt)("h2",{id:"explicit"},"explicit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct A {\n  A(int a) { cout << \"Normal constructor\" << '\\n'; } // implicit constructor\n  A(const A &a) { cout << \"Copy constructor\" << '\\n'; }\n  operator bool() const { return true; }\n};\n\nstruct B {\n  explicit B(int b) {}\n  explicit operator bool() const { return true; }\n};\n\nint main() {\n  A a1(1);\n  A a2 = 1;\n  A a3{1};\n  A a4 = {1};\n  bool a5 = a1;\n\n  B b1(1); // OK\uff1a\u76f4\u63a5\u521d\u59cb\u5316\n  // B b2 = 1; // \u9519\u8bef\uff1a\u88ab explicit \u4fee\u9970\u6784\u9020\u51fd\u6570\u7684\u5bf9\u8c61\u4e0d\u53ef\u4ee5\u590d\u5236\u521d\u59cb\u5316\n  B b3{1};    // OK\uff1a\u76f4\u63a5\u5217\u8868\u521d\u59cb\u5316\n  // B b4 = {1}; // \u9519\u8bef\uff1a\u88ab explicit \u4fee\u9970\u6784\u9020\u51fd\u6570\u7684\u5bf9\u8c61\u4e0d\u53ef\u4ee5\u590d\u5236\u5217\u8868\u521d\u59cb\u5316\n  B b5 = (B)1; // OK\uff1a\u5141\u8bb8 static_cast \u7684\u663e\u5f0f\u8f6c\u6362\n  if (b1)\n    ; // OK\uff1a\u88ab explicit \u4fee\u9970\u8f6c\u6362\u51fd\u6570 B::operator bool() \u7684\u5bf9\u8c61\u53ef\u4ee5\u4ece B \u5230 bool\n      // \u7684\u6309\u8bed\u5883\u8f6c\u6362\n  bool b6(b1); // OK\uff1a\u88ab explicit \u4fee\u9970\u8f6c\u6362\u51fd\u6570 B::operator bool() \u7684\u5bf9\u8c61\u53ef\u4ee5\u4ece B\n               // \u5230 bool \u7684\u6309\u8bed\u5883\u8f6c\u6362\n  // bool b7 = b1; // \u9519\u8bef\uff1a\u88ab explicit \u4fee\u9970\u8f6c\u6362\u51fd\u6570 B::operator bool()\n                // \u7684\u5bf9\u8c61\u4e0d\u53ef\u4ee5\u9690\u5f0f\u8f6c\u6362\n  bool b8 = static_cast<bool>(b1); // OK\uff1astatic_cast \u8fdb\u884c\u76f4\u63a5\u521d\u59cb\u5316\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"explicit \u53ef\u4ee5\u9632\u6b62\u9690\u5f0f\u8f6c\u6362\uff0c\u66f4\u52a0\u5b89\u5168"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 explicit \u65f6\uff0c\u90e8\u5206\u60c5\u51b5\u4e0b\u4ecd\u53ef\u4ee5\u6309\u8bed\u5883\u8f6c\u6362\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"&&"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"||"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"?:"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"static_assert"))),(0,i.kt)("h2",{id:"noexcept"},"noexcept"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The noexcept operator performs a compile-time check that returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if an expression is declared to not throw any expressions.")),(0,i.kt)("p",null,"throw() \u76f8\u5f53\u4e8e noexcept(true)"))}u.isMDXComponent=!0}}]);