"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3010,4007],{35144:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(37876),a=n(14232),r=n(43010),s=n(78011),l=n(42771);let o=(0,a.memo)(({id:e,useHook:t,StyledComponent:n,children:o})=>{let{processes:{[e]:{url:c=""}={}}}=(0,l.N)(),u=(0,a.useRef)(null),[f,d]=(0,a.useState)(!0),w=(0,a.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:u,id:e,loading:f,setLoading:d,url:c}),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(r.default,{}),(0,i.jsx)(n,{ref:u,style:w,...(0,s.A)({id:e}),children:o})]})})},43010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var i=n(77232);let a=i.default.div`
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
`},68667:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(14232),a=n(46711);let r=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:n}=(0,a.f)(),r=(0,i.useRef)();return(0,i.useEffect)(()=>()=>{if(r.current){let e=r.current;r.current="",t(e,!0).then(()=>n("/",void 0,e)).catch(()=>{})}},[t,n]),(0,i.useCallback)(async(t,i)=>{if(!t)return;let a="";try{a=await e(t,i)}catch{}a&&(n("/",a),r.current=a)},[e,n])}},74007:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(37876),a=n(77232);let r=a.default.div`
  display: flex;
  place-content: center;

  canvas {
    background-color: #000;
    height: 100%;
    width: 100%;
  }
`;var s=n(14232),l=n(68667),o=n(42771),c=n(70185),u=n(16361),f=n(60109);let d=({containerRef:e,id:t,setLoading:n,loading:i})=>{let{processes:{[t]:r}={}}=(0,o.N)(),{componentWindow:d,defaultSize:w={height:0,width:0},libs:h=[],maximized:m=!1}=r||{},{windowStates:{[t]:p}}=(0,c.w)(),{sizes:{titleBar:v}}=(0,a.useTheme)(),g=(0,s.useRef)(!1),y=(0,l.A)(),{size:b}=p||{};(0,s.useEffect)(()=>{i&&(0,f.aY)(h).then(()=>{window.ioq3&&(window.ioq3.viewport=e.current,window.ioq3.elementPointerLock=!0,window.ioq3.callMain([]),n(!1),y(window.FS,"Quake3"))})},[e,h,i,y,n]),(0,s.useEffect)(()=>{window.ioq3&&setTimeout(()=>{g.current=m;let{height:e,width:t}=!m&&b||d?.getBoundingClientRect()||{};if(!e||!t)return;let n=w?(0,f.kl)(w.width)/(0,f.kl)(w.height):4/3,i=(0,f.kl)(t),a=i>(0,f.kl)(e)-v.height,r=m&&a?i/n:i,s=r/n;s>0&&r>0&&window.ioq3?.canvas&&(window.ioq3.setCanvasSize(r,s),window.ioq3.canvas.setAttribute("style",`object-fit: ${a?"contain":"scale-down"}`))},m||g.current?u.UW.WINDOW+10:0)},[d,w,m,b,v.height]),(0,s.useEffect)(()=>()=>{try{window.ioq3?.exit()}catch{}window.AL?.contexts.forEach(({ctx:e})=>e.close())},[])};var w=n(35144);let h=({id:e})=>(0,i.jsx)(w.A,{StyledComponent:r,id:e,useHook:d})},78011:(e,t,n)=>{n.d(t,{A:()=>h});var i=n(79052),a=n(14232),r=n(49697),s=n(84966),l=n(54188),o=n(46711),c=n(42771),u=n(70185),f=n(16361),d=n(60109),w=n(17786);let h=({callback:e,directory:t=f.Bn,id:n,onDragLeave:h,onDragOver:m,updatePositions:p})=>{let{url:v}=(0,c.N)(),g=(0,w.w)(),{iconPositions:y,sortOrders:b,setIconPositions:k}=(0,u.w)(),{exists:x,mkdirRecursive:A,updateFolder:E,writeFile:j}=(0,o.f)(),q=(0,a.useCallback)(async(e,t,a)=>{if(n){if(t){let r=(0,i.join)(f.Bn,e);if(await A(f.Bn),await j(r,t,!0))return a===l.z.UPDATE_URL&&v(n,r),E(f.Bn,e),(0,i.basename)(r)}else a===l.z.UPDATE_URL&&v(n,e)}return""},[n,A,E,v,j]),{openTransferDialog:C}=(0,r.A)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,d.CH)(e)},onDrop:a=>{if(f.jj.has((0,d.uQ)(t)))return;if(p&&a.target instanceof HTMLElement){let{files:e,text:n}=(0,s.bn)(a);if(0===e.length&&""===n)return;(async()=>{let r={x:a.clientX,y:a.clientY},s=[];if(n){try{s=JSON.parse(n)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;s=s.map(e=>(0,i.basename)(e))}else s=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=await Promise.all(s.map(async e=>{let n=`${t}/${e}`;if(!y[n]||!await x(n))return e;let a=0;do a+=1,n=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${a})${(0,i.extname)(e)}`;while(y[n]&&await x(n));return(0,i.basename)(n)})),(0,d.$Y)(t,a.target,y,b,r,s,k,x)})()}let r="string"==typeof n;r&&!p&&t===f.Bn&&g.current[n]?.componentWindow?.focus(f.VD),(0,s.nX)(a,e||q,t,C,r)}}}}}]);