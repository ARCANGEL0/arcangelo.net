"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818,3010],{30818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(37876),i=n(77232);let r=i.default.div`
  height: ${({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px)`};
  width: 100%;

  canvas {
    height: 100%;
    width: 100%;
  }
`;var s=n(14232),l=n(68667),o=n(42771),u=n(70185),c=n(16361),f=n(60109);let d=({containerRef:e,id:t,setLoading:n})=>{let{processes:{[t]:a}={}}=(0,o.N)(),r=(0,l.A)(),{windowStates:{[t]:d}}=(0,u.w)(),{size:h}=d||{},{libs:w}=a||{},{sizes:{titleBar:m}}=(0,i.useTheme)(),p=(0,s.useCallback)(()=>e.current?.querySelector("canvas"),[e]);(0,s.useEffect)(()=>{h&&(window.CCModule.setCanvasSize?.(f.kl(h.width),f.kl(h.height)-m.height),window.CCModule.OnResize?.())},[h,m.height]),(0,s.useEffect)(()=>{window.CCModule||setTimeout(()=>{let e=p();window.CCModule={arguments:["Singleplayer"],canvas:e,postRun:[()=>{n(!1),r(window.FS,"ClassiCube")},()=>{let{width:t,height:n}=e.getBoundingClientRect()||{};e.width=t,e.height=n}],print:console.info,setStatus:console.info},(0,f.aY)(w)},c.UW.WINDOW)},[p,w,r,n])};var h=n(35144);let w=({id:e})=>(0,a.jsx)(h.A,{StyledComponent:r,id:e,useHook:d,children:(0,a.jsx)("canvas",{onContextMenu:f.CH})})},35144:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(37876),i=n(14232),r=n(43010),s=n(78011),l=n(42771);let o=(0,i.memo)(({id:e,useHook:t,StyledComponent:n,children:o})=>{let{processes:{[e]:{url:u=""}={}}}=(0,l.N)(),c=(0,i.useRef)(null),[f,d]=(0,i.useState)(!0),h=(0,i.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:c,id:e,loading:f,setLoading:d,url:u}),(0,a.jsxs)(a.Fragment,{children:[f&&(0,a.jsx)(r.default,{}),(0,a.jsx)(n,{ref:c,style:h,...(0,s.A)({id:e}),children:o})]})})},43010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(77232);let i=a.default.div`
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
`},68667:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(14232),i=n(46711);let r=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,i.f)(),r=(0,a.useRef)();return(0,a.useEffect)(()=>()=>{if(r.current){let e=r.current;r.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,a.useCallback)(async(t,a)=>{if(!t)return;let i="";try{i=await e(t,a)}catch{}i&&(n("/",i),r.current=i)},[e,n])}},78011:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(79052),i=n(14232),r=n(49697),s=n(84966),l=n(54188),o=n(46711),u=n(42771),c=n(70185),f=n(16361),d=n(60109),h=n(17786);let w=({callback:e,directory:t=f.Bn,id:n,onDragLeave:w,onDragOver:m,updatePositions:p})=>{let{url:g}=(0,u.N)(),C=(0,h.w)(),{iconPositions:v,sortOrders:y,setIconPositions:b}=(0,c.w)(),{exists:x,mkdirRecursive:A,updateFolder:k,writeFile:j}=(0,o.f)(),S=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let r=(0,a.join)(f.Bn,e);if(await A(f.Bn),await j(r,t,!0))return i===l.z.UPDATE_URL&&g(n,r),k(f.Bn,e),(0,a.basename)(r)}else i===l.z.UPDATE_URL&&g(n,e)}return""},[n,A,k,g,j]),{openTransferDialog:$}=(0,r.A)();return{onDragLeave:w,onDragOver:e=>{m?.(e),(0,d.CH)(e)},onDrop:i=>{if(f.jj.has((0,d.uQ)(t)))return;if(p&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,s.bn)(i);if(0===e.length&&""===n)return;(async()=>{let r={x:i.clientX,y:i.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,a.basename)(e)===(0,a.relative)(t,e))return;s=s.map(e=>(0,a.basename)(e))}else s=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=await Promise.all(s.map(async e=>{let n=`${t}/${e}`;if(!v[n]||!await x(n))return e;let i=0;do i+=1,n=`${t}/${(0,a.basename)(e,(0,a.extname)(e))} (${i})${(0,a.extname)(e)}`;while(v[n]&&await x(n));return(0,a.basename)(n)})),(0,d.$Y)(t,i.target,v,y,r,s,b,x)})()}let r="string"==typeof n;r&&!p&&t===f.Bn&&C.current[n]?.componentWindow?.focus(f.VD),(0,s.nX)(i,e||S,t,$,r)}}}}}]);