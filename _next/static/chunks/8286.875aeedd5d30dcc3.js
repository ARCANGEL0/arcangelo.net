"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2473,8286],{38286:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(74848),r=a(96540),i=a(78744),s=a(41017),l=a(48060),o=a(1364),u=a(37e3);let d=(e,t,a)=>{let{contextMenu:n}=(0,i.b)(),{createPath:d,updateFolder:c}=(0,s.f)(),{setWallpaper:p}=(0,o.w)(),f=(0,r.useCallback)(async a=>{let n=`${t}.png`;return e.current&&(n=await d(n,a,(0,u.SJ)(e.current)),c(a)),n},[e,d,t,c]);return(0,r.useMemo)(()=>n?.(()=>[{action:()=>f(l.Bn),disabled:!a,label:"Save to desktop"},{action:()=>f(l.Sb).then(e=>p(`${l.Sb}/${e}`)),disabled:!a,label:"Set as background"}]),[n,a,f,p])};var c=a(33540);let p="hsl(270, 100%, 20%)",f="#fff",b="13px",m="512px",g=c.default.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  nav {
    display: flex;
    gap: ${"5px"};
    padding: ${b};
    width: 100%;

    .prompts {
      display: flex;
      flex-direction: column;
      gap: ${"5px"};
      min-width: 0;
      width: 100%;

      textarea {
        border: 1px solid ${p};
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
        ${p} 100%
      );
      border: 1px solid ${p};
      border-radius: ${"4px"};
      color: ${f};
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;

      &:disabled {
        background: ${"#ccc"};
      }

      &:active:not(:disabled) {
        background: ${f};
        color: ${p};
      }
    }
  }

  .image {
    display: flex;
    margin: ${b};
    margin-top: 0;
    max-height: ${m};
    max-width: ${m};
    overflow: auto;
    place-content: center;
    place-items: center;
    position: relative;

    .status {
      background-color: ${f};
      border: 1px solid ${p};
      border-radius: ${"4px"};
      box-shadow: rgba(0, 0, 0, 20%) 4px 4px 4px;
      margin: 10px;
      padding: 10px;
      position: absolute;
      text-align: center;
    }

    canvas {
      background-color: ${f};
      border: 1px solid ${p};
      border-radius: ${"4px"};
      max-height: 100%;
      max-width: 100%;
    }
  }
`;var v=a(24854),h=a(40423),x=a(39913);let w=()=>new Worker(a.tu(new URL(a.p+a.u(8535),a.b)),{name:"Stable Diffusion"}),j=["A photo of an astronaut riding a horse on Mars",""],$="No WebGPU Support",k=()=>{let e=(0,r.useRef)(null),[t,a]=(0,r.useState)(j),i=(0,r.useRef)(!1),s=(0,r.useMemo)(()=>"OffscreenCanvas"in window,[]),l=(0,x.A)(w),o=(0,r.useRef)(!1),[u,c]=(0,r.useState)($),p=(0,r.useCallback)(async()=>{if(e.current){let a={prompts:[t]};if(s&&l.current){if(o.current)l.current.postMessage({config:a});else{let t=e.current.transferControlToOffscreen();o.current=!0,l.current.postMessage({canvas:t,config:a},[t]),l.current.addEventListener("message",({data:e})=>c(e.message))}}else window.tvmjsGlobalEnv.logger=c,await (0,v.runStableDiffusion)(a,e.current),c("");i.current=!0}},[t,l,s]),f=(0,h._)(),{onContextMenuCapture:b}=d(e,t[0],i.current&&!u);return(0,r.useEffect)(()=>{f&&u===$&&c("")},[f,u]),(0,n.jsxs)(g,{children:[(0,n.jsxs)("nav",{children:[(0,n.jsxs)("div",{className:"prompts",children:[(0,n.jsx)("textarea",{defaultValue:t[0],onChange:({target:e})=>a(([,t])=>[e.value.trim(),t]),placeholder:"Input Prompt"}),(0,n.jsx)("textarea",{defaultValue:t[1],onChange:({target:e})=>a(([t])=>[t,e.value.trim()]),placeholder:"Negative Prompt"})]}),(0,n.jsx)("button",{disabled:!!u||!f||""===t[0]&&""===t[1],onClick:p,type:"button",children:"Generate"})]}),(0,n.jsxs)("div",{className:"image",children:[(0,n.jsx)("canvas",{ref:e,height:512,onContextMenuCapture:b,width:512}),u&&(0,n.jsx)("div",{className:"status",children:u})]})]})}},24854:(e,t,a)=>{a.r(t),a.d(t,{StableDiffusionLibs:()=>r,default:()=>s,runStableDiffusion:()=>i});var n=a(37e3);let r=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Apps/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Apps/StableDiffusion/stable_diffusion.js"],i=async(e,t,a=!1,i=!0)=>{a||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await (0,n.aY)(r)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await (await fetch("/Apps/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),i||(globalThis.tvmjsGlobalEnv.canvas=void 0),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||t;let{prompts:s}=e;globalThis.tvmjsGlobalEnv.prompts=s?.length?s:[["A photo of an astronaut riding a elephant on jupiter",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()},s=(e,t={})=>{if(!e)return;let a=document.createElement("canvas");a.height=window.innerHeight,a.width=window.innerWidth,e.append(a),i(t,a)}},40423:(e,t,a)=>{a.d(t,{_:()=>s});var n=a(96540);let r=!1,i=async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}if(!e)return!1;let t=0x40000000>(e.limits.maxBufferSize??0)||0x40000000>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0);return t||(r=!0),!t},s=()=>{let[e,t]=(0,n.useState)(r),a=(0,n.useCallback)(async()=>{await i()&&t(!0)},[]);return(0,n.useEffect)(()=>{e||requestAnimationFrame(a)},[a,e]),e}},39913:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(96540);let r=(e,t,a)=>{let r=(0,n.useRef)();return(0,n.useEffect)(()=>(e&&!r.current&&(r.current=e(a),t&&r.current.addEventListener("message",t,{passive:!0}),r.current.postMessage("init")),()=>{r.current?.terminate(),r.current=void 0}),[t,a,e]),r}}}]);