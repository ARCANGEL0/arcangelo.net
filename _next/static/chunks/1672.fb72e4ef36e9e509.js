"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1672],{17744:(e,t,r)=>{e.exports=r.p+"static/media/emscripten-module.1e0c139d.wasm"},31672:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});let n=(()=>{var e="file:///root/arcangeloOS-prod/node_modules/@jitl/quickjs-wasmfile-release-sync/dist/emscripten-module.browser.mjs";return function(t={}){var n,a,o,i=new Promise((e,t)=>{a=e,o=t}),_="object"==typeof window,u="function"==typeof importScripts;function s(e){for(let t of(e={log:e||function(){}},s.Ia))t(e);return t.quickJSEmscriptenExtensions=e}s.Ia=[],t.quickjsEmscriptenInit=s,s.Ia.push(e=>{e.getWasmMemory=function(){return d}});var l,S,f=Object.assign({},t),T="./this.program",c="";(_||u)&&(u?c=self.location.href:"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),e&&(c=e),c=c.startsWith("blob:")?"":c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1),u&&(S=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),l=e=>fetch(e,{credentials:"same-origin"}).then(e=>e.ok?e.arrayBuffer():Promise.reject(Error(e.status+" : "+e.url))));var m=t.print||console.log.bind(console),Q=t.printErr||console.error.bind(console);Object.assign(t,f),f=null,t.thisProgram&&(T=t.thisProgram);var d,g,p,b,h,w,y=t.wasmBinary,v=!1;function A(){var e=d.buffer;t.HEAP8=p=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAPU8=b=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAP32=h=new Int32Array(e),t.HEAPU32=w=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}d=t.wasmMemory?t.wasmMemory:new WebAssembly.Memory({initial:(t.INITIAL_MEMORY||0x1000000)/65536,maximum:32768}),A();var R=[],P=[],E=[],G=0,N=null,F=null;function M(e){throw t.onAbort?.(e),Q(e="Aborted("+e+")"),v=!0,g=1,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),o(e),e}var I,D=e=>e.startsWith("data:application/octet-stream;base64,");function C(e){if(e==I&&y)return new Uint8Array(y);if(S)return S(e);throw"both async and sync fetching of the wasm failed"}function k(e,t,r){return(y?Promise.resolve().then(()=>C(e)):l(e).then(e=>new Uint8Array(e),()=>C(e))).then(e=>WebAssembly.instantiate(e,t)).then(r,e=>{Q(`failed to asynchronously prepare wasm: ${e}`),M(e)})}function x(e){this.name="ExitStatus",this.message=`Program terminated with exit(${e})`,this.status=e}var L,O=e=>{for(;0<e.length;)e.shift()(t)},U=t.noExitRuntime||!0,j="undefined"!=typeof TextDecoder?new TextDecoder:void 0,B=(e,t,r)=>{var n=t+r;for(r=t;e[r]&&!(r>=n);)++r;if(16<r-t&&e.buffer&&j)return j.decode(e.subarray(t,r));for(n="";t<r;){var a=e[t++];if(128&a){var o=63&e[t++];if(192==(224&a))n+=String.fromCharCode((31&a)<<6|o);else{var i=63&e[t++];65536>(a=224==(240&a)?(15&a)<<12|o<<6|i:(7&a)<<18|o<<12|i<<6|63&e[t++])?n+=String.fromCharCode(a):(a-=65536,n+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else n+=String.fromCharCode(a)}return n},H=[0,31,60,91,121,152,182,213,244,274,305,335],z=[0,31,59,90,120,151,181,212,243,273,304,334],W={},V=e=>{if(!(e instanceof x||"unwind"==e))throw e},$=0,J=e=>{throw g=e,U||0<$||(t.onExit?.(e),v=!0),new x(e)},q=e=>{if(!v)try{if(e(),!(U||0<$))try{g=e=g,J(e)}catch(e){V(e)}}catch(e){V(e)}};L=()=>performance.now();var Y,K=(e,t,r)=>{var n=b;if(!(0<r))return 0;var a=t;r=t+r-1;for(var o=0;o<e.length;++o){var i=e.charCodeAt(o);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++o)),127>=i){if(t>=r)break;n[t++]=i}else{if(2047>=i){if(t+1>=r)break;n[t++]=192|i>>6}else{if(65535>=i){if(t+2>=r)break;n[t++]=224|i>>12}else{if(t+3>=r)break;n[t++]=240|i>>18,n[t++]=128|i>>12&63}n[t++]=128|i>>6&63}n[t++]=128|63&i}}return n[t]=0,t-a},X={},Z=()=>{if(!Y){var e,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:T||"./this.program"};for(e in X)void 0===X[e]?delete t[e]:t[e]=X[e];var r=[];for(e in t)r.push(`${e}=${t[e]}`);Y=r}return Y},ee=[null,[],[]],et=e=>{for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);127>=n?t++:2047>=n?t+=2:55296<=n&&57343>=n?(t+=4,++r):t+=3}return t},er=(e,r,n,a)=>{var o,i={string:e=>{var t=0;if(null!=e&&0!==e){t=et(e)+1;var r=e_(t);K(e,r,t),t=r}return t},array:e=>{var t=e_(e.length);return p.set(e,t),t}};e=t["_"+e];var _=[],u=0;if(a)for(var s=0;s<a.length;s++){var l=i[n[s]];l?(0===u&&(u=eu()),_[s]=l(a[s])):_[s]=a[s]}return o=n=e(..._),0!==u&&ei(u),n="string"===r?o?B(b,o):"":"boolean"===r?!!o:o},en={b:(e,t,r,n)=>{M(`Assertion failed: ${e?B(b,e):""}, at: `+[t?t?B(b,t):"":"unknown filename",r,n?n?B(b,n):"":"unknown function"])},q:()=>{M("")},n:()=>{U=!1,$=0},j:function(e,t,r){e=new Date(1e3*(t+2097152>>>0<4194305-!!e?(e>>>0)+0x100000000*t:NaN)),h[r>>2]=e.getSeconds(),h[r+4>>2]=e.getMinutes(),h[r+8>>2]=e.getHours(),h[r+12>>2]=e.getDate(),h[r+16>>2]=e.getMonth(),h[r+20>>2]=e.getFullYear()-1900,h[r+24>>2]=e.getDay(),t=e.getFullYear(),h[r+28>>2]=(0!=t%4||0==t%100&&0!=t%400?z:H)[e.getMonth()]+e.getDate()-1|0,h[r+36>>2]=-(60*e.getTimezoneOffset()),t=new Date(e.getFullYear(),6,1).getTimezoneOffset();var n=new Date(e.getFullYear(),0,1).getTimezoneOffset();h[r+32>>2]=0|(t!=n&&e.getTimezoneOffset()==Math.min(n,t))},l:(e,t)=>{if(W[e]&&(clearTimeout(W[e].id),delete W[e]),!t)return 0;var r=setTimeout(()=>{delete W[e],q(()=>eo(e,L()))},t);return W[e]={id:r,Na:t},0},o:(e,t,r,n)=>{var a=(new Date).getFullYear(),o=new Date(a,0,1).getTimezoneOffset();a=new Date(a,6,1).getTimezoneOffset(),w[e>>2]=60*Math.max(o,a),h[t>>2]=Number(o!=a),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?"-":"+"}${String(Math.floor(t/60)).padStart(2,"0")}${String(t%60).padStart(2,"0")}`})(o),t=t(a),a<o?(K(e,r,17),K(t,n,17)):(K(e,n,17),K(t,r,17))},p:()=>Date.now(),m:e=>{var t=b.length;if(0x80000000<(e>>>=0))return!1;for(var r=1;4>=r;r*=2){var n=t*(1+.2/r);n=Math.min(n,e+0x6000000);e:{n=(Math.min(0x80000000,65536*Math.ceil(Math.max(e,n)/65536))-d.buffer.byteLength+65535)/65536;try{d.grow(n),A();var a=1;break e}catch(e){}a=void 0}if(a)return!0}return!1},f:(e,t)=>{var r=0;return Z().forEach((n,a)=>{var o=t+r;for(a=w[e+4*a>>2]=o,o=0;o<n.length;++o)p[a++]=n.charCodeAt(o);p[a]=0,r+=n.length+1}),0},g:(e,t)=>{var r=Z();w[e>>2]=r.length;var n=0;return r.forEach(e=>n+=e.length+1),w[t>>2]=n,0},e:()=>52,k:function(){return 70},d:(e,t,r,n)=>{for(var a=0,o=0;o<r;o++){var i=w[t>>2],_=w[t+4>>2];t+=8;for(var u=0;u<_;u++){var s=b[i+u],l=ee[e];0===s||10===s?((1===e?m:Q)(B(l,0)),l.length=0):l.push(s)}a+=_}return w[n>>2]=a,0},a:d,c:J,s:function(e,r,n,a,o){return t.callbacks.callFunction(void 0,e,r,n,a,o)},r:function(e){return t.callbacks.shouldInterrupt(void 0,e)},i:function(e,r,n){return n=n?B(b,n):"",t.callbacks.loadModuleSource(void 0,e,r,n)},h:function(e,r,n,a){return n=n?B(b,n):"",a=a?B(b,a):"",t.callbacks.normalizeModule(void 0,e,r,n,a)}},ea=function(){function e(e){return ea=e.exports,P.unshift(ea.t),G--,t.monitorRunDependencies?.(G),0==G&&(null!==N&&(clearInterval(N),N=null),F&&(e=F,F=null,e())),ea}var n,a={a:en};if(G++,t.monitorRunDependencies?.(G),t.instantiateWasm)try{return t.instantiateWasm(a,e)}catch(e){Q(`Module.instantiateWasm callback failed with error: ${e}`),o(e)}return I||=t.locateFile?D("emscripten-module.wasm")?"emscripten-module.wasm":t.locateFile?t.locateFile("emscripten-module.wasm",c):c+"emscripten-module.wasm":new r.U(r(17744)).href,(n=function(t){e(t.instance)},y||"function"!=typeof WebAssembly.instantiateStreaming||D(I)||"function"!=typeof fetch?k(I,a,n):fetch(I,{credentials:"same-origin"}).then(e=>WebAssembly.instantiateStreaming(e,a).then(n,function(e){return Q(`wasm streaming compile failed: ${e}`),Q("falling back to ArrayBuffer instantiation"),k(I,a,n)}))).catch(o),{}}();t._malloc=e=>(t._malloc=ea.u)(e),t._QTS_Throw=(e,r)=>(t._QTS_Throw=ea.v)(e,r),t._QTS_NewError=e=>(t._QTS_NewError=ea.w)(e),t._QTS_RuntimeSetMemoryLimit=(e,r)=>(t._QTS_RuntimeSetMemoryLimit=ea.x)(e,r),t._QTS_RuntimeComputeMemoryUsage=(e,r)=>(t._QTS_RuntimeComputeMemoryUsage=ea.y)(e,r),t._QTS_RuntimeDumpMemoryUsage=e=>(t._QTS_RuntimeDumpMemoryUsage=ea.z)(e),t._QTS_RecoverableLeakCheck=()=>(t._QTS_RecoverableLeakCheck=ea.A)(),t._QTS_BuildIsSanitizeLeak=()=>(t._QTS_BuildIsSanitizeLeak=ea.B)(),t._QTS_RuntimeSetMaxStackSize=(e,r)=>(t._QTS_RuntimeSetMaxStackSize=ea.C)(e,r),t._QTS_GetUndefined=()=>(t._QTS_GetUndefined=ea.D)(),t._QTS_GetNull=()=>(t._QTS_GetNull=ea.E)(),t._QTS_GetFalse=()=>(t._QTS_GetFalse=ea.F)(),t._QTS_GetTrue=()=>(t._QTS_GetTrue=ea.G)(),t._QTS_NewRuntime=()=>(t._QTS_NewRuntime=ea.H)(),t._QTS_FreeRuntime=e=>(t._QTS_FreeRuntime=ea.I)(e),t._free=e=>(t._free=ea.J)(e),t._QTS_NewContext=(e,r)=>(t._QTS_NewContext=ea.K)(e,r),t._QTS_FreeContext=e=>(t._QTS_FreeContext=ea.L)(e),t._QTS_FreeValuePointer=(e,r)=>(t._QTS_FreeValuePointer=ea.M)(e,r),t._QTS_FreeValuePointerRuntime=(e,r)=>(t._QTS_FreeValuePointerRuntime=ea.N)(e,r),t._QTS_FreeVoidPointer=(e,r)=>(t._QTS_FreeVoidPointer=ea.O)(e,r),t._QTS_FreeCString=(e,r)=>(t._QTS_FreeCString=ea.P)(e,r),t._QTS_DupValuePointer=(e,r)=>(t._QTS_DupValuePointer=ea.Q)(e,r),t._QTS_NewObject=e=>(t._QTS_NewObject=ea.R)(e),t._QTS_NewObjectProto=(e,r)=>(t._QTS_NewObjectProto=ea.S)(e,r),t._QTS_NewArray=e=>(t._QTS_NewArray=ea.T)(e),t._QTS_NewArrayBuffer=(e,r,n)=>(t._QTS_NewArrayBuffer=ea.U)(e,r,n),t._QTS_NewFloat64=(e,r)=>(t._QTS_NewFloat64=ea.V)(e,r),t._QTS_GetFloat64=(e,r)=>(t._QTS_GetFloat64=ea.W)(e,r),t._QTS_NewString=(e,r)=>(t._QTS_NewString=ea.X)(e,r),t._QTS_GetString=(e,r)=>(t._QTS_GetString=ea.Y)(e,r),t._QTS_GetArrayBuffer=(e,r)=>(t._QTS_GetArrayBuffer=ea.Z)(e,r),t._QTS_GetArrayBufferLength=(e,r)=>(t._QTS_GetArrayBufferLength=ea._)(e,r),t._QTS_NewSymbol=(e,r,n)=>(t._QTS_NewSymbol=ea.$)(e,r,n),t._QTS_GetSymbolDescriptionOrKey=(e,r)=>(t._QTS_GetSymbolDescriptionOrKey=ea.aa)(e,r),t._QTS_IsGlobalSymbol=(e,r)=>(t._QTS_IsGlobalSymbol=ea.ba)(e,r),t._QTS_IsJobPending=e=>(t._QTS_IsJobPending=ea.ca)(e),t._QTS_ExecutePendingJob=(e,r,n)=>(t._QTS_ExecutePendingJob=ea.da)(e,r,n),t._QTS_GetProp=(e,r,n)=>(t._QTS_GetProp=ea.ea)(e,r,n),t._QTS_GetPropNumber=(e,r,n)=>(t._QTS_GetPropNumber=ea.fa)(e,r,n),t._QTS_SetProp=(e,r,n,a)=>(t._QTS_SetProp=ea.ga)(e,r,n,a),t._QTS_DefineProp=(e,r,n,a,o,i,_,u,s)=>(t._QTS_DefineProp=ea.ha)(e,r,n,a,o,i,_,u,s),t._QTS_GetOwnPropertyNames=(e,r,n,a,o)=>(t._QTS_GetOwnPropertyNames=ea.ia)(e,r,n,a,o),t._QTS_Call=(e,r,n,a,o)=>(t._QTS_Call=ea.ja)(e,r,n,a,o),t._QTS_ResolveException=(e,r)=>(t._QTS_ResolveException=ea.ka)(e,r),t._QTS_Dump=(e,r)=>(t._QTS_Dump=ea.la)(e,r),t._QTS_Eval=(e,r,n,a,o,i)=>(t._QTS_Eval=ea.ma)(e,r,n,a,o,i),t._QTS_GetModuleNamespace=(e,r)=>(t._QTS_GetModuleNamespace=ea.na)(e,r),t._QTS_Typeof=(e,r)=>(t._QTS_Typeof=ea.oa)(e,r),t._QTS_GetLength=(e,r,n)=>(t._QTS_GetLength=ea.pa)(e,r,n),t._QTS_IsEqual=(e,r,n,a)=>(t._QTS_IsEqual=ea.qa)(e,r,n,a),t._QTS_GetGlobalObject=e=>(t._QTS_GetGlobalObject=ea.ra)(e),t._QTS_NewPromiseCapability=(e,r)=>(t._QTS_NewPromiseCapability=ea.sa)(e,r),t._QTS_PromiseState=(e,r)=>(t._QTS_PromiseState=ea.ta)(e,r),t._QTS_PromiseResult=(e,r)=>(t._QTS_PromiseResult=ea.ua)(e,r),t._QTS_TestStringArg=e=>(t._QTS_TestStringArg=ea.va)(e),t._QTS_GetDebugLogEnabled=e=>(t._QTS_GetDebugLogEnabled=ea.wa)(e),t._QTS_SetDebugLogEnabled=(e,r)=>(t._QTS_SetDebugLogEnabled=ea.xa)(e,r),t._QTS_BuildIsDebug=()=>(t._QTS_BuildIsDebug=ea.ya)(),t._QTS_BuildIsAsyncify=()=>(t._QTS_BuildIsAsyncify=ea.za)(),t._QTS_NewFunction=(e,r,n)=>(t._QTS_NewFunction=ea.Aa)(e,r,n),t._QTS_ArgvGetJSValueConstPointer=(e,r)=>(t._QTS_ArgvGetJSValueConstPointer=ea.Ba)(e,r),t._QTS_RuntimeEnableInterruptHandler=e=>(t._QTS_RuntimeEnableInterruptHandler=ea.Ca)(e),t._QTS_RuntimeDisableInterruptHandler=e=>(t._QTS_RuntimeDisableInterruptHandler=ea.Da)(e),t._QTS_RuntimeEnableModuleLoader=(e,r)=>(t._QTS_RuntimeEnableModuleLoader=ea.Ea)(e,r),t._QTS_RuntimeDisableModuleLoader=e=>(t._QTS_RuntimeDisableModuleLoader=ea.Fa)(e),t._QTS_bjson_encode=(e,r)=>(t._QTS_bjson_encode=ea.Ga)(e,r),t._QTS_bjson_decode=(e,r)=>(t._QTS_bjson_decode=ea.Ha)(e,r);var eo=(e,t)=>(eo=ea.Ja)(e,t),ei=e=>(ei=ea.Ka)(e),e_=e=>(e_=ea.La)(e),eu=()=>(eu=ea.Ma)();function es(){function e(){if(!n&&(n=!0,t.calledRun=!0,!v)){if(O(P),a(t),t.onRuntimeInitialized?.(),t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var e=t.postRun.shift();E.unshift(e)}O(E)}}if(!(0<G)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)!function(){var e=t.preRun.shift();R.unshift(e)}();O(R),0<G||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),e()},1)):e())}}if(t.cwrap=(e,r,n,a)=>{var o=!n||n.every(e=>"number"===e||"boolean"===e);return"string"!==r&&o&&!a?t["_"+e]:(...t)=>er(e,r,n,t)},t.UTF8ToString=(e,t)=>e?B(b,e,t):"",t.stringToUTF8=(e,t,r)=>K(e,t,r),t.lengthBytesUTF8=et,F=function e(){n||es(),n||(F=e)},t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();return es(),i}})()}}]);