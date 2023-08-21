"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={},a="Linux \u7528\u6237\u7ba1\u7406",o={unversionedId:"Linux/Linux\u7528\u6237\u7ba1\u7406",id:"Linux/Linux\u7528\u6237\u7ba1\u7406",title:"Linux \u7528\u6237\u7ba1\u7406",description:"\u6587\u4ef6\u6240\u6709\u8005",source:"@site/docs/Linux/3. Linux\u7528\u6237\u7ba1\u7406.md",sourceDirName:"Linux",slug:"/Linux/Linux\u7528\u6237\u7ba1\u7406",permalink:"/cpp/Linux/Linux\u7528\u6237\u7ba1\u7406",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux \u6587\u4ef6\u7cfb\u7edf\u8ba8\u8bba",permalink:"/cpp/Linux/Linux\u6587\u4ef6\u7cfb\u7edf"},next:{title:"Linux Operating System",permalink:"/cpp/Linux/Linux Crash Course"}},p={},u=[{value:"\u6587\u4ef6\u6240\u6709\u8005",id:"\u6587\u4ef6\u6240\u6709\u8005",level:2},{value:"\u7528\u6237\u7ec4",id:"\u7528\u6237\u7ec4",level:2},{value:"Others",id:"others",level:2},{value:"\u4fe1\u606f\u5b58\u50a8",id:"\u4fe1\u606f\u5b58\u50a8",level:2},{value:"\u6587\u4ef6\u6743\u9650\u6982\u5ff5",id:"\u6587\u4ef6\u6743\u9650\u6982\u5ff5",level:2},{value:"ls -al",id:"ls--al",level:3},{value:"\u4fee\u6539\u6587\u4ef6\u5c5e\u6027\u548c\u6743\u9650",id:"\u4fee\u6539\u6587\u4ef6\u5c5e\u6027\u548c\u6743\u9650",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"linux-\u7528\u6237\u7ba1\u7406"},"Linux \u7528\u6237\u7ba1\u7406"),(0,l.kt)("h2",{id:"\u6587\u4ef6\u6240\u6709\u8005"},"\u6587\u4ef6\u6240\u6709\u8005"),(0,l.kt)("p",null,"Linux \u662f\u591a\u7528\u6237\u3001\u591a\u4efb\u52a1\u7684\u7cfb\u7edf\uff0c\u56e0\u6b64\u53ef\u80fd\u5e38\u5e38\u4f1a\u6709\u591a\u4eba\u540c\u65f6\u4f7f\u7528\u8fd9\u53f0\u4e3b\u673a\u8fdb\u884c\u5de5\u4f5c\uff0c\u4e3a\u4e86\u4fdd\u62a4\u6bcf\u4e2a\u4eba\u7684\u9690\u79c1\u6570\u636e\uff0c\u4ee5\u53ca\u9488\u5bf9\u6bcf\u4e2a\u4eba\uff0c\u8bbe\u7f6e\u4e0d\u540c\u7684\u5de5\u4f5c\u73af\u5883\uff0cLinux \u4e2d\u63d0\u51fa\u4e86\u6587\u4ef6\u6240\u6709\u8005\u7684\u6982\u5ff5\u3002"),(0,l.kt)("h2",{id:"\u7528\u6237\u7ec4"},"\u7528\u6237\u7ec4"),(0,l.kt)("p",null,"\u76ee\u7684\u662f\u5c06\u7528\u6237\u5206\u7ec4\uff0c\u4ece\u800c\u9488\u5bf9\u6bcf\u4e00\u4e2a\u7ec4\u8bbe\u7f6e\u4e0d\u540c\u7684\u6743\u9650\u3002"),(0,l.kt)("h2",{id:"others"},"Others"),(0,l.kt)("p",null,"Linux \u7684\u4efb\u610f\u4e00\u4e2a\u6587\u4ef6\u90fd\u5177\u6709 ",(0,l.kt)("strong",{parentName:"p"},"User, Group \u548c Others")," \u4e09\u79cd\u6743\u9650\u3002"),(0,l.kt)("h2",{id:"\u4fe1\u606f\u5b58\u50a8"},"\u4fe1\u606f\u5b58\u50a8"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528\u6237\u53ca\u5bc6\u7801\u4fe1\u606f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/passwd")),(0,l.kt)("li",{parentName:"ol"},"\u4e2a\u4eba\u5bc6\u7801\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/shadow")),(0,l.kt)("li",{parentName:"ol"},"\u7528\u6237\u7ec4\u4fe1\u606f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/group"))),(0,l.kt)("h2",{id:"\u6587\u4ef6\u6743\u9650\u6982\u5ff5"},"\u6587\u4ef6\u6743\u9650\u6982\u5ff5"),(0,l.kt)("h3",{id:"ls--al"},"ls -al"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"-rw-r--r-- 1 civitasv(user) civitasv(group)     141 datetime  filename\n")),(0,l.kt)("p",null,"-rw-r--r-- \u6309\u7167 ",(0,l.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u7c7b\u578b \u6587\u4ef6\u6240\u6709\u8005\u7684\u6743\u9650 \u6587\u4ef6\u6240\u5c5e\u7528\u6237\u7ec4\u7684\u6743\u9650 \u5176\u4ed6\u4eba\u5bf9\u6b64\u6587\u4ef6\u7684\u6743\u9650")," \u663e\u793a\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"[\u6587\u4ef6\u7c7b\u578b]"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"[d]")," \u8868\u793a\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"[-]")," \u8868\u793a\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"[l]")," \u8868\u793a\u94fe\u63a5\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"[b]")," \u8868\u793a\u8bbe\u5907\u6587\u4ef6\u91cc\u9762\u7684\u53ef\u4f9b\u5b58\u50a8\u7684\u63a5\u53e3\u8bbe\u5907"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"[c]")," \u8868\u793a\u8bbe\u5907\u6587\u4ef6\u91cc\u9762\u7684\u4e32\u884c\u7aef\u53e3\u8bbe\u5907\uff0c\u4f8b\u5982\u952e\u76d8\u3001\u9f20\u6807"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"[\u6743\u9650]"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"r \u8868\u793a\u53ef\u8bfb"),(0,l.kt)("li",{parentName:"ol"},"w \u8868\u793a\u53ef\u5199"),(0,l.kt)("li",{parentName:"ol"},"x \u8868\u793a\u53ef\u6267\u884c")))),(0,l.kt)("h3",{id:"\u4fee\u6539\u6587\u4ef6\u5c5e\u6027\u548c\u6743\u9650"},"\u4fee\u6539\u6587\u4ef6\u5c5e\u6027\u548c\u6743\u9650"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chgrp"),": \u4fee\u6539\u7528\u6237\u6240\u5c5e\u7528\u6237\u7ec4"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chown"),": \u4fee\u6539\u6587\u4ef6\u6240\u5c5e\u7528\u6237"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod"),": \u6539\u53d8\u6587\u4ef6\u7684\u6743\u9650, u: user, g: group, o: others, a: all")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6587\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"r")," \u8868\u793a\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"w")," \u8868\u793a\u7f16\u8f91\u6587\u4ef6\u5185\u5bb9\uff08\u4f46\u4e0d\u80fd\u5220\u9664\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u8868\u793a\u6267\u884c\u8be5\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6587\u4ef6\u5939\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"r")," \u8868\u793a\u8bfb\u53d6\u6587\u4ef6\u5939\u5185\u6587\u4ef6\u7ed3\u6784\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"w")," \u8868\u793a\u65b0\u589e\u3001\u5220\u9664\u6587\u4ef6\uff08\u5b9e\u8d28\u4e0a\u662f\u4fee\u6539\u4e86\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u6392\u5e8f\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u8868\u793a\u5141\u8bb8\u8fdb\u5165\u8be5\u6587\u4ef6\u5939\uff08cd\uff09")))}m.isMDXComponent=!0}}]);