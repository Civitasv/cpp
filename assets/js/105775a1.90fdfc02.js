"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||k[d]||a;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={},i="\u591a\u7ebf\u7a0b\u5f00\u53d1",l={unversionedId:"cpp/C++ \u4e2d\u7684\u591a\u7ebf\u7a0b\u5f00\u53d1",id:"cpp/C++ \u4e2d\u7684\u591a\u7ebf\u7a0b\u5f00\u53d1",title:"\u591a\u7ebf\u7a0b\u5f00\u53d1",description:'Concurrency means doing two things concurrently -- "Running together." Maybe you\'re switching back and forth between them.',source:"@site/docs/cpp/46. C++ \u4e2d\u7684\u591a\u7ebf\u7a0b\u5f00\u53d1.md",sourceDirName:"cpp",slug:"/cpp/C++ \u4e2d\u7684\u591a\u7ebf\u7a0b\u5f00\u53d1",permalink:"/cpp/cpp/C++ \u4e2d\u7684\u591a\u7ebf\u7a0b\u5f00\u53d1",draft:!1,tags:[],version:"current",sidebarPosition:46,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u624b\u5199\u4e00\u4e2a shared_ptr",permalink:"/cpp/cpp/\u624b\u5199\u4e00\u4e2a shared_ptr"},next:{title:"Templates and Generic Programming",permalink:"/cpp/cpp/\u6a21\u677f"}},c={},p=[{value:"Joining finished threads",id:"joining-finished-threads",level:2},{value:"\u6570\u636e\u7ade\u4e89",id:"\u6570\u636e\u7ade\u4e89",level:2},{value:"busy wait",id:"busy-wait",level:2},{value:"Solution",id:"solution",level:3},{value:"Typical use for mutex(protects data)",id:"typical-use-for-mutexprotects-data",level:3},{value:"condition_variable",id:"condition_variable",level:2},{value:"Thread-safe static initialization",id:"thread-safe-static-initialization",level:2},{value:"\u751a\u81f3\u6211\u4eec\u8fd8\u6709 shared_lock",id:"\u751a\u81f3\u6211\u4eec\u8fd8\u6709-shared_lock",level:2},{value:"\u4e92\u65a5\u9501/\u81ea\u65cb\u9501",id:"\u4e92\u65a5\u9501\u81ea\u65cb\u9501",level:2},{value:"Lock Free \u7f16\u7a0b",id:"lock-free-\u7f16\u7a0b",level:2},{value:"Atomic",id:"atomic",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u591a\u7ebf\u7a0b\u5f00\u53d1"},"\u591a\u7ebf\u7a0b\u5f00\u53d1"),(0,r.kt)("p",null,'Concurrency means doing two things concurrently -- "Running together." Maybe you\'re switching back and forth between them.'),(0,r.kt)("p",null,"Parallelism means doing two things in parallel -- simultaneously."),(0,r.kt)("h2",{id:"joining-finished-threads"},"Joining finished threads"),(0,r.kt)("p",null,'The new thread starts executing "immediately." When its job is done, the thread has nothing else to do: it becomes joinable.'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"join()")," will block this thread, until the other thread's job is finished."),(0,r.kt)("h2",{id:"\u6570\u636e\u7ade\u4e89"},"\u6570\u636e\u7ade\u4e89"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"using SC = chrono::steady_clock;\nauto deadline = SC::now() + chrono::seconds(10);\n\nint counter = 0;\nthread thread_b = thread([&]() {\n  while (SC::now() < deadline)\n    cout << \"B: \" << ++counter << '\\n';\n});\n\nwhile (SC::now() < deadline)\n  cout << \"A: \" << ++counter << '\\n';\n\nthread_b.join();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\uff1f")),(0,r.kt)("p",null,"\u7ebf\u7a0b A \u548c\u7ebf\u7a0b B \u53ef\u80fd\u5bf9 counter \u540c\u65f6\u8fdb\u884c write \u64cd\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u89e3\u51b3\uff1f")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"int counter = 0")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"atomic<int> counter = 0"),"\uff0c\u8fd9\u4fdd\u8bc1\u4e86\u6bcf\u6b21\u5bf9 counter \u7684\u8bfb\u5199\u64cd\u4f5c\u90fd\u662f\u539f\u5b50\u6027\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"using SC = chrono::steady_clock;\nauto deadline = SC::now() + chrono::seconds(10);\n\n// fix it\natomic<int> counter(0);\nthread thread_b = thread([&]() {\n  while (SC::now() < deadline)\n    cout << \"B: \" << ++counter << '\\n';\n});\n\nwhile (SC::now() < deadline)\n  cout << \"A: \" << ++counter << '\\n';\n\nthread_b.join();\n")),(0,r.kt)("h2",{id:"busy-wait"},"busy wait"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"atomic<bool> ready(false);\nthread thread_b = thread([&]() {\n  while (!ready) {\n    cout << \"NOT Ready\" << '\\n';\n  }\n  cout << \"Hello from B\" << '\\n';\n});\ncout << \"Hello from A\" << '\\n';\nready = true;\nthread_b.join();\ncout << \"Hello again from A\" << '\\n';\n")),(0,r.kt)("p",null,"while \u5faa\u73af\u6c38\u8fdc\u4e0d\u4f1a\u7ed3\u675f\uff08\u76f4\u5230 ready \u4e3a true\uff09\uff0c\u5bf9\u4e8e\u5355\u6838\u5904\u7406\u5668\u5f88\u4e0d\u53cb\u597d\u3002"),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"mutex mtx; // a key\nmtx.lock();\natomic<int> counter(0);\nthread thread_b = thread([&]() {\n  mtx.lock(); // blocking until thread a release(unlock) this mtx.\n  mtx.unlock();\n  cout << \"Hello from B\" << '\\n';\n});\n\ncout << \"Hello from A\" << '\\n';\nmtx.unlock();\nthread_b.join();\ncout << \"Hello again from A\" << '\\n';\n")),(0,r.kt)("h3",{id:"typical-use-for-mutexprotects-data"},"Typical use for mutex(protects data)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'struct Token {\n  string token;\n  Token(string token) : token(token) {}\n\n  static Token Create() { return Token("token"); }\n};\n\nclass TokenPool {\nprivate:\n  mutex mtx_;\n  vector<Token> tokens_;\n\npublic:\n  Token GetToken() {\n    mtx_.lock();\n    if (tokens_.empty())\n      tokens_.push_back(Token::Create());\n    Token t = std::move(tokens_.back());\n    tokens_.pop_back();\n    mtx_.unlock();\n    return t;\n  }\n};\n')),(0,r.kt)("p",null,"\u4f46\u662f\u4e0a\u9762\u7684\u4ee3\u7801\u5e76\u4e0d\u7b26\u5408 RAII \u539f\u5219\uff0c\u4f8b\u5982\uff1a\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens_.push_back")," \u4e2d\u629b\u51fa\u5f02\u5e38\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"mtx_.unlock")," \u6c38\u8fdc\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"lock_guard"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"mtx_.lock();\nif (tokens_.empty())\n  tokens_.push_back(Token::Create());\nToken t = std::move(tokens_.back());\ntokens_.pop_back();\nmtx_.unlock();\nreturn t;\n")),(0,r.kt)("p",null,"\u5c31\u50cf\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"unique_ptr")," \u7ba1\u7406\u5806\u53d8\u91cf\uff0c\u6211\u4eec\u4e5f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"unique_lock")," \u7ba1\u7406 mutex\u3002"),(0,r.kt)("p",null,"C++ 17 \u4e2d\u8fd8\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"scoped_lock"),"\uff0c\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"lock_guard")," \u7684\u4f18\u5316\uff0c\u5b83\u53ef\u4ee5\u540c\u65f6 lock \u591a\u4e2a mutex\u3002"),(0,r.kt)("h2",{id:"condition_variable"},"condition_variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'struct Token {\n  string token;\n  Token(string token) : token(token) {}\n\n  static Token Create() { return Token("token"); }\n};\n\nclass TokenPool {\nprivate:\n  vector<Token> tokens_;\n  mutex mtx_;\n  condition_variable cv_;\n\npublic:\n  void ReturnToken(Token t) {\n    unique_lock<mutex> lk(mtx_);\n    tokens_.push_back(t);\n    lk.unlock();\n    cv_.notify_one();\n  }\n\n  Token GetToken() {\n    unique_lock<mutex> lk(mtx_);\n    while (tokens_.empty())\n      cv_.wait(lk); // wait until `notify_xx`\n    Token t = std::move(tokens_.back());\n    tokens_.pop_back();\n    return t;\n  }\n};\n')),(0,r.kt)("p",null,"mutex \u548c condition_variable \u76f8\u7ed3\u5408\uff0c\u53ef\u4ee5\u7528\u5728 ",(0,r.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u8005--\u6d88\u8d39\u8005")," \u6a21\u578b\u4e2d\uff0c\u5176\u4e2d\u6d88\u8d39\u8005\u9700\u8981\u7b49\u5f85\u751f\u4ea7\u8005\u63d0\u4f9b\u8d44\u6e90\u3002"),(0,r.kt)("h2",{id:"thread-safe-static-initialization"},"Thread-safe static initialization"),(0,r.kt)("p",null,"C++ 11 \u4fdd\u8bc1\u4e86 static \u53d8\u91cf\u521d\u59cb\u5316\u7684\u7ebf\u7a0b\u5b89\u5168\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"std::call_once")," \u4fdd\u8bc1\u5b9e\u4f8b\u7684\u521d\u59cb\u5316\u4ec5\u8fdb\u884c\u4e00\u6b21\uff0c\u8fd9\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u6a21\u4eff\u4e86 static \u53d8\u91cf\u7684\u521d\u59cb\u5316\u6d41\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u751a\u81f3\u6211\u4eec\u8fd8\u6709-shared_lock"},"\u751a\u81f3\u6211\u4eec\u8fd8\u6709 shared_lock"),(0,r.kt)("h2",{id:"\u4e92\u65a5\u9501\u81ea\u65cb\u9501"},"\u4e92\u65a5\u9501/\u81ea\u65cb\u9501"),(0,r.kt)("p",null,"\u4e92\u65a5\u9501\u5f00\u9500\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f53\u7ebf\u7a0b\u52a0\u9501\u5931\u8d25\u65f6\uff0c\u5185\u6838\u4f1a\u628a\u7ebf\u7a0b\u7684\u72b6\u6001\u4ece\u8fd0\u884c\u8bbe\u7f6e\u4e3a\u7761\u7720\uff0c\u7136\u540e\u628a CPU \u5207\u6362\u7ed9\u5176\u4ed6\u7ebf\u7a0b\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u9501\u88ab\u91ca\u653e\u65f6\uff0c\u5904\u4e8e\u7761\u7720\u72b6\u6001\u7684\u7ebf\u7a0b\u4f1a\u53d8\u4e3a\u5c31\u7eea\u72b6\u6001\uff0c\u7136\u540e\u5185\u6838\u4f1a\u5728\u5408\u9002\u7684\u65f6\u95f4\uff0c\u628a CPU \u5207\u6362\u7ed9\u8be5\u7ebf\u7a0b\u8fd0\u884c")),(0,r.kt)("p",null,"\u5982\u679c\u88ab\u9501\u4f4f\u7684\u4ee3\u7801\u6267\u884c\u65f6\u95f4\u5f88\u591a\uff0c\u5c31\u4e0d\u5e94\u8be5\u7528\u4e92\u65a5\u9501\uff0c\u800c\u5e94\u8be5\u9009\u62e9\u4f7f\u7528\u81ea\u65cb\u9501\u3002"),(0,r.kt)("p",null,"\u81ea\u65cb\u9501\u4f7f\u7528 CPU \u63d0\u4f9b\u7684 CAS(Compare and swap) \u51fd\u6570\uff0c\u5728\u7528\u6237\u6001\u5b8c\u6210\u52a0\u9501\u548c\u89e3\u9501\u64cd\u4f5c\uff0c\u4e0d\u4f1a\u4e3b\u52a8\u4ea7\u751f\u7ebf\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u6240\u4ee5\u4f1a\u5feb\u4e00\u4e9b\uff0c\u5f00\u9500\u4e5f\u5c0f\u4e00\u4e9b\u3002"),(0,r.kt)("p",null,"\u81ea\u65cb\u9501\u4e0e\u4e92\u65a5\u9501\u4f7f\u7528\u5c42\u9762\u6bd4\u8f83\u76f8\u4f3c\uff0c\u4f46\u5b9e\u73b0\u5c42\u9762\u4e0a\u5b8c\u5168\u4e0d\u540c\uff1a\u5f53\u52a0\u9501\u5931\u8d25\u65f6\uff0c\u4e92\u65a5\u9501\u7528\u300c\u7ebf\u7a0b\u5207\u6362\u300d\u6765\u5e94\u5bf9\uff0c\u81ea\u65cb\u9501\u5219\u7528\u300c\u5fd9\u7b49\u5f85\u300d\u6765\u5e94\u5bf9\u3002"),(0,r.kt)("h2",{id:"lock-free-\u7f16\u7a0b"},"Lock Free \u7f16\u7a0b"),(0,r.kt)("h2",{id:"atomic"},"Atomic"),(0,r.kt)("p",null,"\u5e95\u5c42\u5c45\u7136\u4e5f\u80fd\u4f7f\u7528 CAS \u6216 TAS \u5b9e\u73b0"))}s.isMDXComponent=!0}}]);