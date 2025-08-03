"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1032,3010],{35144:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(37876),r=n(14232),i=n(43010),l=n(78011),s=n(42771);let c=(0,r.memo)(({id:e,useHook:t,StyledComponent:n,children:c})=>{let{processes:{[e]:{url:o=""}={}}}=(0,s.N)(),u=(0,r.useRef)(null),[d,f]=(0,r.useState)(!0),m=(0,r.useMemo)(()=>({contain:"strict",visibility:d?"hidden":"visible"}),[d]);return t({containerRef:u,id:e,loading:d,setLoading:f,url:o}),(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)(i.default,{}),(0,a.jsx)(n,{ref:u,style:m,...(0,l.A)({id:e}),children:c})]})})},41032:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(37876),r=n(77232);let i=r.default.div`
  height: calc(100% - 30px) !important;
  width: 100% !important;

  canvas {
    height: calc(100% + 12px) !important;
    width: 100% !important;
  }
`;var l=n(14232),s=n(68667),c=n(42771),o=n(16361),u=n(60109);let d=({containerRef:e,id:t,setLoading:n})=>{let{processes:{[t]:{libs:a=[]}={}}={}}=(0,c.N)(),[r,i]=(0,l.useState)(),d=(0,s.A)();(0,l.useEffect)(()=>{let t=e.current?.querySelector("canvas");t instanceof HTMLCanvasElement&&(window.Module={canvas:t,postRun:()=>{n(!1),d(window.FS,"SpaceCadet")}},i(t))},[e,d,n]),(0,l.useEffect)(()=>(r&&setTimeout(()=>{let{height:t,width:n}=e.current?.getBoundingClientRect()||{};t&&n&&(r.style.height=`${t}px`,r.style.width=`${n}px`,(0,u.aY)(a,void 0,!!window.Module.canvas))},o.UW.WINDOW),()=>{if(r&&window.Module)try{window.Module.SDL2?.audioContext.close()}catch{}}),[r,e,a])};var f=n(35144);let m=({id:e})=>(0,a.jsx)(f.A,{StyledComponent:i,id:e,useHook:d,children:(0,a.jsx)("canvas",{id:"canvas",onContextMenu:u.CH})})},43010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(77232);let r=a.default.div`
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
`},68667:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(14232),r=n(46711);let i=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,r.f)(),i=(0,a.useRef)();return(0,a.useEffect)(()=>()=>{if(i.current){let e=i.current;i.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,a.useCallback)(async(t,a)=>{if(!t)return;let r="";try{r=await e(t,a)}catch{}r&&(n("/",r),i.current=r)},[e,n])}},78011:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(79052),r=n(14232),i=n(49697),l=n(84966),s=n(54188),c=n(46711),o=n(42771),u=n(70185),d=n(16361),f=n(60109),m=n(17786);let p=({callback:e,directory:t=d.Bn,id:n,onDragLeave:p,onDragOver:h,updatePositions:w})=>{let{url:v}=(0,o.N)(),y=(0,m.w)(),{iconPositions:x,sortOrders:g,setIconPositions:b}=(0,u.w)(),{exists:A,mkdirRecursive:C,updateFolder:j,writeFile:E}=(0,c.f)(),$=(0,r.useCallback)(async(e,t,r)=>{if(n)if(t){let i=(0,a.join)(d.Bn,e);if(await C(d.Bn),await E(i,t,!0))return r===s.z.UPDATE_URL&&v(n,i),j(d.Bn,e),(0,a.basename)(i)}else r===s.z.UPDATE_URL&&v(n,e);return""},[n,C,j,v,E]),{openTransferDialog:M}=(0,i.A)();return{onDragLeave:p,onDragOver:e=>{h?.(e),(0,f.CH)(e)},onDrop:r=>{if(d.jj.has((0,f.uQ)(t)))return;if(w&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,l.bn)(r);if(0===e.length&&""===n)return;(async()=>{let i={x:r.clientX,y:r.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,a.basename)(e)===(0,a.relative)(t,e))return;l=l.map(e=>(0,a.basename)(e))}else l=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=await Promise.all(l.map(async e=>{let n=`${t}/${e}`;if(!x[n]||!await A(n))return e;let r=0;do r+=1,n=`${t}/${(0,a.basename)(e,(0,a.extname)(e))} (${r})${(0,a.extname)(e)}`;while(x[n]&&await A(n));return(0,a.basename)(n)})),(0,f.$Y)(t,r.target,x,g,i,l,b,A)})()}let i="string"==typeof n;i&&!w&&t===d.Bn&&y.current[n]?.componentWindow?.focus(d.VD),(0,l.nX)(r,e||$,t,M,i)}}}}}]);