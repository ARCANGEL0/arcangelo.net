"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,6238],{96541:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),i=a(62104),r=a(1364);let l=({containerRef:e,id:t,setLoading:a,loading:l})=>{let{processes:{[t]:s}={}}=(0,i.N)(),{componentWindow:o}=s||{},{windowStates:{[t]:d}}=(0,r.w)(),{size:f}=d||{};(0,n.useEffect)(()=>{if(a(!1),e.current){let e=()=>{if(o){let{height:e,width:t}=o.getBoundingClientRect()}};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[e,o,t,a])}},96238:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(74848),i=a(33540);let r=i.default.div`
  display: flex;
  place-content: center;

  canvas {
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
`;var l=a(96541),s=a(14153);let o=({id:e})=>(0,n.jsx)(s.A,{StyledComponent:r,id:e,useHook:l.A,children:(0,n.jsx)("iframe",{loading:"lazy",id:"playframe",frameBorder:"0",scrolling:"no",allowFullScreen:!0,src:"https://arcangel0.github.io/HADesign","data-rocket-lazyload":"fitvidscompatible","data-ruffle-polyfilled":"",className:"lazyloaded",style:{width:"100%",height:"100%"}})})},14153:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(74848),i=a(96540),r=a(51583),l=a(8218),s=a(62104);let o=(0,i.memo)(({id:e,useHook:t,StyledComponent:a,children:o})=>{let{processes:{[e]:{url:d=""}={}}}=(0,s.N)(),f=(0,i.useRef)(null),[c,u]=(0,i.useState)(!0),m=(0,i.useMemo)(()=>({contain:"strict",visibility:c?"hidden":"visible"}),[c]);return t({containerRef:f,id:e,loading:c,setLoading:u,url:d}),(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)(r.default,{}),(0,n.jsx)(a,{ref:f,style:m,...(0,l.A)({id:e}),children:o})]})})},51583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(33540);let i=n.default.div`
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
`},8218:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(16286),i=a(96540),r=a(51780),l=a(16091),s=a(13296),o=a(41017),d=a(62104),f=a(1364),c=a(48060),u=a(37e3),m=a(96119);let p=({callback:e,directory:t=c.Bn,id:a,onDragLeave:p,onDragOver:h,updatePositions:w})=>{let{url:g}=(0,d.N)(),y=(0,m.w)(),{iconPositions:v,sortOrders:b,setIconPositions:x}=(0,f.w)(),{exists:A,mkdirRecursive:j,updateFolder:k,writeFile:z}=(0,o.f)(),B=(0,i.useCallback)(async(e,t,i)=>{if(a){if(t){let r=(0,n.join)(c.Bn,e);if(await j(c.Bn),await z(r,t,!0))return i===s.z.UPDATE_URL&&g(a,r),k(c.Bn,e),(0,n.basename)(r)}else i===s.z.UPDATE_URL&&g(a,e)}return""},[a,j,k,g,z]),{openTransferDialog:E}=(0,r.A)();return{onDragLeave:p,onDragOver:e=>{h?.(e),(0,u.CH)(e)},onDrop:i=>{if(c.jj.has((0,u.uQ)(t)))return;if(w&&i.target instanceof HTMLElement){let{files:e,text:a}=(0,l.bn)(i);if(0===e.length&&""===a)return;(async()=>{let r={x:i.clientX,y:i.clientY},l=[];if(a){try{l=JSON.parse(a)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;l=l.map(e=>(0,n.basename)(e))}else e instanceof FileList?l=[...e].map(e=>e.name):l=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=await Promise.all(l.map(async e=>{let a=`${t}/${e}`;if(!v[a]||!await A(a))return e;let i=0;do i+=1,a=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${i})${(0,n.extname)(e)}`;while(v[a]&&await A(a));return(0,n.basename)(a)})),(0,u.$Y)(t,i.target,v,b,r,l,x,A)})()}let r="string"==typeof a;r&&!w&&t===c.Bn&&y.current[a]?.componentWindow?.focus(c.VD),(0,l.nX)(i,e||B,t,E,r)}}}}}]);