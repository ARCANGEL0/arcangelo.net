"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3010,4568],{35144:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(37876),r=a(14232),i=a(43010),l=a(78011),s=a(42771);let o=(0,r.memo)(({id:e,useHook:t,StyledComponent:a,children:o})=>{let{processes:{[e]:{url:f=""}={}}}=(0,s.N)(),d=(0,r.useRef)(null),[c,u]=(0,r.useState)(!0),m=(0,r.useMemo)(()=>({contain:"strict",visibility:c?"hidden":"visible"}),[c]);return t({containerRef:d,id:e,loading:c,setLoading:u,url:f}),(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)(i.default,{}),(0,n.jsx)(a,{ref:d,style:m,...(0,l.A)({id:e}),children:o})]})})},43010:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(77232);let r=n.default.div`
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
`},78011:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(79052),r=a(14232),i=a(49697),l=a(84966),s=a(54188),o=a(46711),f=a(42771),d=a(70185),c=a(16361),u=a(60109),m=a(17786);let p=({callback:e,directory:t=c.Bn,id:a,onDragLeave:p,onDragOver:w,updatePositions:h})=>{let{url:y}=(0,f.N)(),g=(0,m.w)(),{iconPositions:v,sortOrders:b,setIconPositions:x}=(0,d.w)(),{exists:A,mkdirRecursive:j,updateFolder:k,writeFile:z}=(0,o.f)(),B=(0,r.useCallback)(async(e,t,r)=>{if(a)if(t){let i=(0,n.join)(c.Bn,e);if(await j(c.Bn),await z(i,t,!0))return r===s.z.UPDATE_URL&&y(a,i),k(c.Bn,e),(0,n.basename)(i)}else r===s.z.UPDATE_URL&&y(a,e);return""},[a,j,k,y,z]),{openTransferDialog:E}=(0,i.A)();return{onDragLeave:p,onDragOver:e=>{w?.(e),(0,u.CH)(e)},onDrop:r=>{if(c.jj.has((0,u.uQ)(t)))return;if(h&&r.target instanceof HTMLElement){let{files:e,text:a}=(0,l.bn)(r);if(0===e.length&&""===a)return;(async()=>{let i={x:r.clientX,y:r.clientY},l=[];if(a){try{l=JSON.parse(a)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;l=l.map(e=>(0,n.basename)(e))}else l=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=await Promise.all(l.map(async e=>{let a=`${t}/${e}`;if(!v[a]||!await A(a))return e;let r=0;do r+=1,a=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${r})${(0,n.extname)(e)}`;while(v[a]&&await A(a));return(0,n.basename)(a)})),(0,u.$Y)(t,r.target,v,b,i,l,x,A)})()}let i="string"==typeof a;i&&!h&&t===c.Bn&&g.current[a]?.componentWindow?.focus(c.VD),(0,l.nX)(r,e||B,t,E,i)}}}},94568:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(37876),r=a(77232);let i=r.default.div`
  display: flex;
  place-content: center;

  canvas {
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
`;var l=a(14232),s=a(42771),o=a(70185);let f=({containerRef:e,id:t,setLoading:a,loading:n})=>{let{processes:{[t]:r}={}}=(0,s.N)(),{componentWindow:i}=r||{},{windowStates:{[t]:f}}=(0,o.w)(),{size:d}=f||{};(0,l.useEffect)(()=>{if(a(!1),e.current){let e=()=>{if(i){let{height:e,width:t}=i.getBoundingClientRect()}};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}},[e,i,t,a])};var d=a(35144);let c=({id:e})=>(0,n.jsx)(d.A,{StyledComponent:i,id:e,useHook:f,children:(0,n.jsx)("iframe",{loading:"lazy",id:"playframe",frameBorder:"0",scrolling:"no",allowFullScreen:!0,src:"https://deusex.netlify.app/","data-rocket-lazyload":"fitvidscompatible","data-ruffle-polyfilled":"",className:"lazyloaded",style:{width:"100%",height:"100%"}})})}}]);