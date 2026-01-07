"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,7727],{87727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(74848),r=a(33540);let i=r.default.div`
  display: flex;
  place-content: center;

  canvas {
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
`;var l=a(96540),s=a(62104),o=a(1364);let f=({containerRef:e,id:t,setLoading:a,loading:n})=>{let{processes:{[t]:r}={}}=(0,s.N)(),{componentWindow:i}=r||{},{windowStates:{[t]:f}}=(0,o.w)(),{size:d}=f||{};(0,l.useEffect)(()=>{if(a(!1),e.current){let e=()=>{if(i){let{height:e,width:t}=i.getBoundingClientRect()}};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[e,i,t,a])};var d=a(14153);let c=({id:e})=>(0,n.jsx)(d.A,{StyledComponent:i,id:e,useHook:f,children:(0,n.jsx)("iframe",{loading:"lazy",id:"playframe",frameBorder:"0",scrolling:"no",allowFullScreen:!0,src:"https://www.habbo.com/","data-rocket-lazyload":"fitvidscompatible","data-ruffle-polyfilled":"",className:"lazyloaded",style:{width:"100%",height:"100%"}})})},14153:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(74848),r=a(96540),i=a(51583),l=a(8218),s=a(62104);let o=(0,r.memo)(({id:e,useHook:t,StyledComponent:a,children:o})=>{let{processes:{[e]:{url:f=""}={}}}=(0,s.N)(),d=(0,r.useRef)(null),[c,u]=(0,r.useState)(!0),m=(0,r.useMemo)(()=>({contain:"strict",visibility:c?"hidden":"visible"}),[c]);return t({containerRef:d,id:e,loading:c,setLoading:u,url:f}),(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)(i.default,{}),(0,n.jsx)(a,{ref:d,style:m,...(0,l.A)({id:e}),children:o})]})})},51583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(33540);let r=n.default.div`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "L o a d i n g ...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`},8218:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(16286),r=a(96540),i=a(51780),l=a(16091),s=a(13296),o=a(41017),f=a(62104),d=a(1364),c=a(48060),u=a(37e3),m=a(96119);let w=({callback:e,directory:t=c.Bn,id:a,onDragLeave:w,onDragOver:p,updatePositions:h})=>{let{url:y}=(0,f.N)(),b=(0,m.w)(),{iconPositions:g,sortOrders:v,setIconPositions:x}=(0,d.w)(),{exists:A,mkdirRecursive:j,updateFolder:k,writeFile:z}=(0,o.f)(),B=(0,r.useCallback)(async(e,t,r)=>{if(a){if(t){let i=(0,n.join)(c.Bn,e);if(await j(c.Bn),await z(i,t,!0))return r===s.z.UPDATE_URL&&y(a,i),k(c.Bn,e),(0,n.basename)(i)}else r===s.z.UPDATE_URL&&y(a,e)}return""},[a,j,k,y,z]),{openTransferDialog:E}=(0,i.A)();return{onDragLeave:w,onDragOver:e=>{p?.(e),(0,u.CH)(e)},onDrop:r=>{if(c.jj.has((0,u.uQ)(t)))return;if(h&&r.target instanceof HTMLElement){let{files:e,text:a}=(0,l.bn)(r);if(0===e.length&&""===a)return;(async()=>{let i={x:r.clientX,y:r.clientY},l=[];if(a){try{l=JSON.parse(a)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;l=l.map(e=>(0,n.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=await Promise.all(l.map(async e=>{let a=`${t}/${e}`;if(!g[a]||!await A(a))return e;let r=0;do r+=1,a=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${r})${(0,n.extname)(e)}`;while(g[a]&&await A(a));return(0,n.basename)(a)})),(0,u.$Y)(t,r.target,g,v,i,l,x,A)})()}let i="string"==typeof a;i&&!h&&t===c.Bn&&b.current[a]?.componentWindow?.focus(c.VD),(0,l.nX)(r,e||B,t,E,i)}}}}}]);