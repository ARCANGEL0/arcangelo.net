"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,6609],{46609:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(74848),r=a(33540);let i=r.default.div`
  .eruda-container {
    position: relative !important;
    z-index: 1 !important;

    .eruda-dev-tools {
      height: 100% !important;
      opacity: 100% !important;

      .eruda-nav-bar-container {
        .eruda-nav-bar {
          overflow: hidden;
        }
      }
    }

    .eruda-entry-btn {
      display: none;
    }
  }
`;var o=a(96540),s=a(62104),d=a(37e3);let l={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1},u=({containerRef:e,id:t,loading:a,setLoading:n,url:r})=>{let{processes:{[t]:{closing:i=!1,libs:u=[]}={}}={}}=(0,s.N)();(0,o.useEffect)(()=>{(0,d.aY)(u).then(()=>{if(window.eruda&&e.current){let t=e.current.querySelector("div"),a=(0,d.e8)();t&&(window.eruda.init({...l,container:t}),window.eruda.remove("info"),window.eruda.remove("snippets"),a<395&&window.eruda.remove("resources"),a<321&&window.eruda.remove("sources"),window.eruda.show(),n(!1))}})},[e,u,n]),(0,o.useEffect)(()=>(window.eruda&&r&&!a&&!i&&window.eruda.show(r),()=>{i&&window.eruda?.destroy()}),[i,a,r])};var f=a(14153);let c=({id:e})=>(0,n.jsx)(f.A,{StyledComponent:i,id:e,useHook:u,children:(0,n.jsx)("div",{})})},14153:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(74848),r=a(96540),i=a(51583),o=a(8218),s=a(62104);let d=(0,r.memo)(({id:e,useHook:t,StyledComponent:a,children:d})=>{let{processes:{[e]:{url:l=""}={}}}=(0,s.N)(),u=(0,r.useRef)(null),[f,c]=(0,r.useState)(!0),w=(0,r.useMemo)(()=>({contain:"strict",visibility:f?"hidden":"visible"}),[f]);return t({containerRef:u,id:e,loading:f,setLoading:c,url:l}),(0,n.jsxs)(n.Fragment,{children:[f&&(0,n.jsx)(i.default,{}),(0,n.jsx)(a,{ref:u,style:w,...(0,o.A)({id:e}),children:d})]})})},51583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(33540);let r=n.default.div`
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
`},8218:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(16286),r=a(96540),i=a(51780),o=a(16091),s=a(13296),d=a(41017),l=a(62104),u=a(1364),f=a(48060),c=a(37e3),w=a(96119);let m=({callback:e,directory:t=f.Bn,id:a,onDragLeave:m,onDragOver:p,updatePositions:h})=>{let{url:v}=(0,l.N)(),y=(0,w.w)(),{iconPositions:b,sortOrders:x,setIconPositions:g}=(0,u.w)(),{exists:A,mkdirRecursive:j,updateFolder:k,writeFile:E}=(0,d.f)(),S=(0,r.useCallback)(async(e,t,r)=>{if(a){if(t){let i=(0,n.join)(f.Bn,e);if(await j(f.Bn),await E(i,t,!0))return r===s.z.UPDATE_URL&&v(a,i),k(f.Bn,e),(0,n.basename)(i)}else r===s.z.UPDATE_URL&&v(a,e)}return""},[a,j,k,v,E]),{openTransferDialog:$}=(0,i.A)();return{onDragLeave:m,onDragOver:e=>{p?.(e),(0,c.CH)(e)},onDrop:r=>{if(f.jj.has((0,c.uQ)(t)))return;if(h&&r.target instanceof HTMLElement){let{files:e,text:a}=(0,o.bn)(r);if(0===e.length&&""===a)return;(async()=>{let i={x:r.clientX,y:r.clientY},o=[];if(a){try{o=JSON.parse(a)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;o=o.map(e=>(0,n.basename)(e))}else e instanceof FileList?o=[...e].map(e=>e.name):o=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=await Promise.all(o.map(async e=>{let a=`${t}/${e}`;if(!b[a]||!await A(a))return e;let r=0;do r+=1,a=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${r})${(0,n.extname)(e)}`;while(b[a]&&await A(a));return(0,n.basename)(a)})),(0,c.$Y)(t,r.target,b,x,i,o,g,A)})()}let i="string"==typeof a;i&&!h&&t===f.Bn&&y.current[a]?.componentWindow?.focus(f.VD),(0,o.nX)(r,e||S,t,$,i)}}}}}]);