"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[228],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(t),f=a,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={},o="\u5806",p={unversionedId:"\u7b97\u6cd5/\u5806\u7684\u521b\u5efa",id:"\u7b97\u6cd5/\u5806\u7684\u521b\u5efa",title:"\u5806",description:"\u5806\u7528\u4e8e\u52a8\u6001\u6c42\u53d6\u6781\u503c\u3002",source:"@site/docs/\u7b97\u6cd5/4. \u5806\u7684\u521b\u5efa.md",sourceDirName:"\u7b97\u6cd5",slug:"/\u7b97\u6cd5/\u5806\u7684\u521b\u5efa",permalink:"/cpp/\u7b97\u6cd5/\u5806\u7684\u521b\u5efa",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6392\u5e8f\u7b97\u6cd5\u603b\u7ed3",permalink:"/cpp/\u7b97\u6cd5/\u6392\u5e8f\u7b97\u6cd5\u603b\u7ed3"},next:{title:"\u524d\u7f00\u548c\u7b97\u6cd5",permalink:"/cpp/\u7b97\u6cd5/\u524d\u7f00\u548c\u7b97\u6cd5"}},l={},d=[{value:"\u7ed9\u4e88\u4e8c\u53c9\u5806\u5b9e\u73b0",id:"\u7ed9\u4e88\u4e8c\u53c9\u5806\u5b9e\u73b0",level:2},{value:"Reference",id:"reference",level:2}],c={toc:d};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5806"},"\u5806"),(0,a.kt)("p",null,"\u5806\u7528\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u52a8\u6001\u6c42\u53d6\u6781\u503c"),"\u3002"),(0,a.kt)("h2",{id:"\u7ed9\u4e88\u4e8c\u53c9\u5806\u5b9e\u73b0"},"\u7ed9\u4e88\u4e8c\u53c9\u5806\u5b9e\u73b0"),(0,a.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 stl \u91cc\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"make_heap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"push_heap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pop_heap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sort_heap")," \u7b97\u6cd5\u3002"),(0,a.kt)("p",null,"\u4e8c\u53c9\u5806\u5c31\u662f\u4e00\u9897\u7279\u6b8a\u7684\u5b8c\u5168\u4e8c\u53c9\u6811\u3002\u5bf9\u4e8e\u5c0f\u9876\u5806\u6765\u8bf4\uff0c\u7236\u8282\u70b9\u7684\u6743\u503c\u4e0d\u5927\u4e8e\u513f\u5b50\u7684\u6743\u503c\u3002"),(0,a.kt)("p",null,"\u64cd\u4f5c\uff1a\u4e0b\u6c89 + \u4e0a\u6d6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Heap {\n  vector<int> data;\n  int size;\n\npublic:\n  Heap() : data({0}), size(0) {}\n\n  void Push(int val) {\n    data.push_back(val);\n    ShiftUp(data.size() - 1);\n    size++;\n  }\n\n  int Pop() {\n    if (data.size() <= 1) {\n      throw overflow_error("Data size");\n    }\n    int res = data[1];\n    swap(*(data.begin() + 1), *(data.end() - 1));\n    data.erase(data.end() - 1);\n    size--;\n    ShiftDown(1);\n    return res;\n  }\n\nprivate:\n  void ShiftDown(int index) {\n    int temp = data[index];\n    while ((index << 1) <= size) {\n      // \u5de6: 2*i \u53f3:2*i+1\n      int child = index << 1;\n      if (child != size && data[child + 1] < data[child]) {\n        // \u4f7f\u7528\u53f3\u8282\u70b9\n        child++;\n      }\n      if (temp > data[child]) {\n        dathead = new DListNode();\n    tail = new DListNode();a[index] = data[child];\n        index = child;\n      } else {\n        break;\n      }\n    }\n    data[index] = temp; // swap\n  }\n\n  void ShiftUp(int index) {\n    int temp = data[index];\n\n    while ((index >> 1) > 0) {\n      if (temp < data[index >> 1]) {\n        data[index] = data[index >> 1];\n        index = index >> 1;\n      } else\n        break;\n    }\n    data[index] = temp;\n  }\n};\n')),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u529b\u6263\u52a0\u52a0: ",(0,a.kt)("a",{parentName:"li",href:"https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/heap"},"https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/heap"))))}s.isMDXComponent=!0}}]);