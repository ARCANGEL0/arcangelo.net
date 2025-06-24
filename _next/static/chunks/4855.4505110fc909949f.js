"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,4855],{34855:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(74848),n=a(33540),r=a(57725);let i=n.default.div`
  height: 100%;
  width: 100%;

  &.drop {
    ${(0,r.A)("Drop SWF/SPL file here","#ffad33")};
  }

  ruffle-player {
    height: 100%;
    width: 100%;
  }
`;var s=a(16286),o=a(96540),f=a(55650),c=a(41017),u=a(62104),d=a(37e3);let p=({containerRef:e,id:t,setLoading:a,url:l})=>{let{linkElement:n,processes:{[t]:{libs:r=[]}={}}={}}=(0,u.N)(),[i,p]=(0,o.useState)(),{appendFileToTitle:m}=(0,f.A)(t),{readFile:h}=(0,c.f)(),w=(0,o.useCallback)(async()=>{e.current?.classList.remove("drop");try{await i?.load({data:await h(l)})}catch{}finally{a(!1)}m((0,s.basename)(l,(0,s.extname)(l)))},[m,e,i,h,a,l]);(0,o.useEffect)(()=>{(0,d.aY)(r).then(()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},p(window.RufflePlayer.newest().createPlayer()),l||(e.current?.classList.add("drop"),a(!1)))})},[e,r,a,l]),(0,o.useEffect)(()=>(e.current&&i&&(e.current.append(i),n(t,"peekElement",i)),()=>i?.remove()),[e,t,n,i]),(0,o.useEffect)(()=>{e.current&&i&&l&&w()},[e,w,i,l])};var m=a(14153);let h=({id:e})=>(0,l.jsx)(m.A,{StyledComponent:i,id:e,useHook:p})},14153:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(74848),n=a(96540),r=a(51583),i=a(8218),s=a(62104);let o=(0,n.memo)(({id:e,useHook:t,StyledComponent:a,children:o})=>{let{processes:{[e]:{url:f=""}={}}}=(0,s.N)(),c=(0,n.useRef)(null),[u,d]=(0,n.useState)(!0),p=(0,n.useMemo)(()=>({contain:"strict",visibility:u?"hidden":"visible"}),[u]);return t({containerRef:c,id:e,loading:u,setLoading:d,url:f}),(0,l.jsxs)(l.Fragment,{children:[u&&(0,l.jsx)(r.default,{}),(0,l.jsx)(a,{ref:c,style:p,...(0,i.A)({id:e}),children:o})]})})},51583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var l=a(33540);let n=l.default.div`
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
`},8218:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(16286),n=a(96540),r=a(51780),i=a(16091),s=a(13296),o=a(41017),f=a(62104),c=a(1364),u=a(48060),d=a(37e3),p=a(96119);let m=({callback:e,directory:t=u.Bn,id:a,onDragLeave:m,onDragOver:h,updatePositions:w})=>{let{url:y}=(0,f.N)(),b=(0,p.w)(),{iconPositions:$,sortOrders:g,setIconPositions:v}=(0,c.w)(),{exists:A,mkdirRecursive:x,updateFolder:k,writeFile:C}=(0,o.f)(),E=(0,n.useCallback)(async(e,t,n)=>{if(a){if(t){let r=(0,l.join)(u.Bn,e);if(await x(u.Bn),await C(r,t,!0))return n===s.z.UPDATE_URL&&y(a,r),k(u.Bn,e),(0,l.basename)(r)}else n===s.z.UPDATE_URL&&y(a,e)}return""},[a,x,k,y,C]),{openTransferDialog:j}=(0,r.A)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,d.CH)(e)},onDrop:n=>{if(u.jj.has((0,d.uQ)(t)))return;if(w&&n.target instanceof HTMLElement){let{files:e,text:a}=(0,i.bn)(n);if(0===e.length&&""===a)return;(async()=>{let r={x:n.clientX,y:n.clientY},i=[];if(a){try{i=JSON.parse(a)}catch{}if(!Array.isArray(i))return;let[e]=i;if(!e||e.startsWith(t)&&(0,l.basename)(e)===(0,l.relative)(t,e))return;i=i.map(e=>(0,l.basename)(e))}else e instanceof FileList?i=[...e].map(e=>e.name):i=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);i=await Promise.all(i.map(async e=>{let a=`${t}/${e}`;if(!$[a]||!await A(a))return e;let n=0;do n+=1,a=`${t}/${(0,l.basename)(e,(0,l.extname)(e))} (${n})${(0,l.extname)(e)}`;while($[a]&&await A(a));return(0,l.basename)(a)})),(0,d.$Y)(t,n.target,$,g,r,i,v,A)})()}let r="string"==typeof a;r&&!w&&t===u.Bn&&b.current[a]?.componentWindow?.focus(u.VD),(0,i.nX)(n,e||E,t,j,r)}}}},55650:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(96540),n=a(62104),r=a(25573),i=a(48060);let s=e=>{let{title:t}=(0,n.N)(),[a]=e.split(i.QB),{title:s}=r.A[a]||{};return{appendFileToTitle:(0,l.useCallback)((a,l)=>{let n=a?` - ${a}${l?` ${i.g6}`:""}`:"";t(e,`${s}${n}`)},[e,s,t]),prependFileToTitle:(0,l.useCallback)((a,l,n)=>{let r=a?`${l?`${i.g6} `:""}${a}${n?" ":" - "}`:"";t(e,`${r}${s}`)},[e,s,t])}}},57725:(e,t,a)=>{a.d(t,{A:()=>n});var l=a(33540);let n=(e,t)=>(0,l.css)`
  &::before {
    color: ${t};
    content: "${e}";
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 100%;
    left: 0;
    place-content: center;
    place-items: center;
    position: absolute;
    top: 0;
    width: 100%;
  }
`}}]);