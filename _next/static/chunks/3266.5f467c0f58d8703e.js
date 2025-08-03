"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3266,9948],{7567:(e,t,a)=>{a.r(t),a.d(t,{StableDiffusionLibs:()=>r,default:()=>s,runStableDiffusion:()=>i});var n=a(60109);let r=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Apps/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Apps/StableDiffusion/stable_diffusion.js"],i=async(e,t,a=!1,i=!0)=>{a||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await (0,n.aY)(r)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Apps/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),i||(globalThis.tvmjsGlobalEnv.canvas=void 0),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||t;let{prompts:s}=e;globalThis.tvmjsGlobalEnv.prompts=s?.length?s:[["A photo of an astronaut riding a elephant on jupiter",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()},s=(e,t={})=>{if(!e)return;let a=document.createElement("canvas");a.height=window.innerHeight,a.width=window.innerWidth,e.append(a),i(t,a)}},23266:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(37876),r=a(14232),i=a(64148),s=a(46711),o=a(16361),l=a(70185),u=a(60109),d=a(77232);let c="hsl(270, 100%, 20%)",p="#fff",f="13px",b="512px",m=d.default.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  nav {
    display: flex;
    gap: ${"5px"};
    padding: ${f};
    width: 100%;

    .prompts {
      display: flex;
      flex-direction: column;
      gap: ${"5px"};
      min-width: 0;
      width: 100%;

      textarea {
        border: 1px solid ${c};
        border-radius: ${"4px"};
        font-family: ${({theme:e})=>e.formats.systemFont};
        font-size: 12px;
        padding: ${"5px"};
        resize: none;
      }
    }

    button {
      background: linear-gradient(
        to bottom right,
        ${"hsl(270, 100%, 30%)"} 0%,
        ${c} 100%
      );
      border: 1px solid ${c};
      border-radius: ${"4px"};
      color: ${p};
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;

      &:disabled {
        background: ${"#ccc"};
      }

      &:active:not(:disabled) {
        background: ${p};
        color: ${c};
      }
    }
  }

  .image {
    display: flex;
    margin: ${f};
    margin-top: 0;
    max-height: ${b};
    max-width: ${b};
    overflow: auto;
    place-content: center;
    place-items: center;
    position: relative;

    .status {
      background-color: ${p};
      border: 1px solid ${c};
      border-radius: ${"4px"};
      box-shadow: rgba(0, 0, 0, 20%) 4px 4px 4px;
      margin: 10px;
      padding: 10px;
      position: absolute;
      text-align: center;
    }

    canvas {
      background-color: ${p};
      border: 1px solid ${c};
      border-radius: ${"4px"};
      max-height: 100%;
      max-width: 100%;
    }
  }
`;var g=a(7567),v=a(91754),h=a(96856);let x=()=>new Worker(a.tu(new URL(a.p+a.u(8535),a.b)),{name:"Stable Diffusion"}),w=["A photo of an astronaut riding a horse on Mars",""],j="No WebGPU Support",$=()=>{let e=(0,r.useRef)(null),[t,a]=(0,r.useState)(w),d=(0,r.useRef)(!1),c=(0,r.useMemo)(()=>"OffscreenCanvas"in window,[]),p=(0,h.A)(x),f=(0,r.useRef)(!1),[b,$]=(0,r.useState)(j),k=(0,r.useCallback)(async()=>{if(e.current){let a={prompts:[t]};if(c&&p.current)if(f.current)p.current.postMessage({config:a});else{let t=e.current.transferControlToOffscreen();f.current=!0,p.current.postMessage({canvas:t,config:a},[t]),p.current.addEventListener("message",({data:e})=>$(e.message))}else window.tvmjsGlobalEnv.logger=$,await (0,g.runStableDiffusion)(a,e.current),$("");d.current=!0}},[t,p,c]),S=(0,v._)(),{onContextMenuCapture:E}=((e,t,a)=>{let{contextMenu:n}=(0,i.b)(),{createPath:d,updateFolder:c}=(0,s.f)(),{setWallpaper:p}=(0,l.w)(),f=(0,r.useCallback)(async a=>{let n=`${t}.png`;return e.current&&(n=await d(n,a,(0,u.SJ)(e.current)),c(a)),n},[e,d,t,c]);return(0,r.useMemo)(()=>n?.(()=>[{action:()=>f(o.Bn),disabled:!a,label:"Save to desktop"},{action:()=>f(o.Sb).then(e=>p(`${o.Sb}/${e}`)),disabled:!a,label:"Set as background"}]),[n,a,f,p])})(e,t[0],d.current&&!b);return(0,r.useEffect)(()=>{S&&b===j&&$("")},[S,b]),(0,n.jsxs)(m,{children:[(0,n.jsxs)("nav",{children:[(0,n.jsxs)("div",{className:"prompts",children:[(0,n.jsx)("textarea",{defaultValue:t[0],onChange:({target:e})=>a(([,t])=>[e.value.trim(),t]),placeholder:"Input Prompt"}),(0,n.jsx)("textarea",{defaultValue:t[1],onChange:({target:e})=>a(([t])=>[t,e.value.trim()]),placeholder:"Negative Prompt"})]}),(0,n.jsx)("button",{disabled:!!b||!S||""===t[0]&&""===t[1],onClick:k,type:"button",children:"Generate"})]}),(0,n.jsxs)("div",{className:"image",children:[(0,n.jsx)("canvas",{ref:e,height:512,onContextMenuCapture:E,width:512}),b&&(0,n.jsx)("div",{className:"status",children:b})]})]})}},91754:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(14232);let r=!1,i=async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}if(!e)return!1;let t=0x40000000>(e.limits.maxBufferSize??0)||0x40000000>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0);return t||(r=!0),!t},s=()=>{let[e,t]=(0,n.useState)(r),a=(0,n.useCallback)(async()=>{await i()&&t(!0)},[]);return(0,n.useEffect)(()=>{e||requestAnimationFrame(a)},[a,e]),e}},96856:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(14232);let r=(e,t,a)=>{let r=(0,n.useRef)();return(0,n.useEffect)(()=>(e&&!r.current&&(r.current=e(a),t&&r.current.addEventListener("message",t,{passive:!0}),r.current.postMessage("init")),()=>{r.current?.terminate(),r.current=void 0}),[t,a,e]),r}}}]);