"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,1653],{1653:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var n=r(74848),o=r(33540),a=r(43680);let i=o.default.div`
  canvas[style*="cursor: none;"] {
    cursor: default !important;
  }

  canvas {
    height: 100%;
    width: 100%;
  }

  ol {
    ${(0,a.A)()};
    background-color: rgb(32, 33, 36);
    color: rgb(232, 234, 237);
    font-family: "Lucida Grande", sans-serif, monospace;
    font-size: 13px;
    height: 100%;
    line-height: 19px;
    overflow: hidden scroll;
    width: 100%;

    li {
      border-bottom: 1px solid rgb(58, 58, 58);
      padding: 0 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`;var l=r(16286),c=r(96540);let{height:b=0,width:s=0}=r(25573).A.BoxedWine.defaultSize||{},u={"inline-default-ondemand-root-overlay":"/wine1.7.55-v8-min-online",ondemand:"root",resolution:`${s}x${b}`,root:"/fullWine1.7.55-v8"},d=e=>[...Object.entries(u),...Object.entries(e)].map(([e,t])=>`${e}=${t}`).join("&");var A=r(16602),g=r(55650),m=r(41017),p=r(62104),h=r(37e3),k=r(48287).Buffer;let f=e=>{let[[t]=[]]=Object.entries(e).filter(([e])=>e.toLowerCase().endsWith(".exe")).sort(([,e],[,t])=>t.length-e.length);return t},w=({containerRef:e,id:t,setLoading:n,url:o})=>{let{appendFileToTitle:a}=(0,g.A)(t),{processes:{[t]:{libs:i=[]}={}}={}}=(0,p.N)(),{readFile:b}=(0,m.f)(),s=(0,A.A)(),u=(0,c.useRef)(),w=(0,c.useRef)(),v=(0,c.useCallback)(async()=>{let t={},c=o?await b(o):k.from(""),u=(0,h.uQ)(o),A=".exe"===u,{zipAsync:g}=await r.e(6789).then(r.bind(r,16789)),m=(0,l.basename)(o,u),p=async()=>k.from(await g({[(0,l.basename)(o)]:c}));if(A)c=await p();else if(o){let{unzip:e}=await r.e(6789).then(r.bind(r,16789));try{m=f(await e(c))||""}catch{c=await p(),m=""}}t={...c?{"app-payload":c.toString("base64")}:{},...m?{p:m}:{}},w.current||(e.current?.prepend(document.createElement("ol")),w.current=window.setInterval(()=>{(0,h.b0)(e.current?.querySelector("canvas"))&&(clearInterval(w.current),w.current=void 0,e.current?.querySelector("ol")?.remove())},100)),window.BoxedWineConfig={...window.BoxedWineConfig,consoleLog:t=>{let r=e.current?.querySelector("ol");if(r){let e=document.createElement("li");e.textContent=t,r.append(e),r.scrollTop=r.scrollHeight,setTimeout(()=>r.scrollTo(0,r.scrollHeight),10)}},urlParams:d(t)},(0,h.aY)(i).then(()=>{o&&a(m||(0,l.basename)(o));try{window.BoxedWineShell(()=>{n(!1),s(window.FS,"BoxedWine")})}catch{}})},[a,e,i,s,b,n,o]);(0,c.useEffect)(()=>(u.current!==o&&(o||!u.current)&&(u.current=o,v()),()=>{window.BoxedWineConfig={...window.BoxedWineConfig,isRunning:!1}}),[v,o])};var v=r(14153);let x=({id:e})=>(0,n.jsx)(v.A,{StyledComponent:i,id:e,useHook:w,children:(0,n.jsx)("canvas",{id:"boxedWineCanvas",onContextMenu:h.CH})})},14153:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(74848),o=r(96540),a=r(51583),i=r(8218),l=r(62104);let c=(0,o.memo)(({id:e,useHook:t,StyledComponent:r,children:c})=>{let{processes:{[e]:{url:b=""}={}}}=(0,l.N)(),s=(0,o.useRef)(null),[u,d]=(0,o.useState)(!0),A=(0,o.useMemo)(()=>({contain:"strict",visibility:u?"hidden":"visible"}),[u]);return t({containerRef:s,id:e,loading:u,setLoading:d,url:b}),(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)(a.default,{}),(0,n.jsx)(r,{ref:s,style:A,...(0,i.A)({id:e}),children:c})]})})},51583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(33540);let o=n.default.div`
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
`},16602:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(96540),o=r(41017);let a=()=>{let{mountEmscriptenFs:e,unMapFs:t,updateFolder:r}=(0,o.f)(),a=(0,n.useRef)();return(0,n.useEffect)(()=>()=>{if(a.current){let e=a.current;a.current="",t(e,!0).then(()=>r("/",void 0,e)).catch(()=>{})}},[t,r]),(0,n.useCallback)(async(t,n)=>{if(!t)return;let o="";try{o=await e(t,n)}catch{}o&&(r("/",o),a.current=o)},[e,r])}},8218:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(16286),o=r(96540),a=r(51780),i=r(16091),l=r(13296),c=r(41017),b=r(62104),s=r(1364),u=r(48060),d=r(37e3),A=r(96119);let g=({callback:e,directory:t=u.Bn,id:r,onDragLeave:g,onDragOver:m,updatePositions:p})=>{let{url:h}=(0,b.N)(),k=(0,A.w)(),{iconPositions:f,sortOrders:w,setIconPositions:v}=(0,s.w)(),{exists:x,mkdirRecursive:$,updateFolder:y,writeFile:B}=(0,c.f)(),C=(0,o.useCallback)(async(e,t,o)=>{if(r){if(t){let a=(0,n.join)(u.Bn,e);if(await $(u.Bn),await B(a,t,!0))return o===l.z.UPDATE_URL&&h(r,a),y(u.Bn,e),(0,n.basename)(a)}else o===l.z.UPDATE_URL&&h(r,e)}return""},[r,$,y,h,B]),{openTransferDialog:E}=(0,a.A)();return{onDragLeave:g,onDragOver:e=>{m?.(e),(0,d.CH)(e)},onDrop:o=>{if(u.jj.has((0,d.uQ)(t)))return;if(p&&o.target instanceof HTMLElement){let{files:e,text:r}=(0,i.bn)(o);if(0===e.length&&""===r)return;(async()=>{let a={x:o.clientX,y:o.clientY},i=[];if(r){try{i=JSON.parse(r)}catch{}if(!Array.isArray(i))return;let[e]=i;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;i=i.map(e=>(0,n.basename)(e))}else e instanceof FileList?i=[...e].map(e=>e.name):i=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);i=await Promise.all(i.map(async e=>{let r=`${t}/${e}`;if(!f[r]||!await x(r))return e;let o=0;do o+=1,r=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${o})${(0,n.extname)(e)}`;while(f[r]&&await x(r));return(0,n.basename)(r)})),(0,d.$Y)(t,o.target,f,w,a,i,v,x)})()}let a="string"==typeof r;a&&!p&&t===u.Bn&&k.current[r]?.componentWindow?.focus(u.VD),(0,i.nX)(o,e||C,t,E,a)}}}},55650:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),o=r(62104),a=r(25573),i=r(48060);let l=e=>{let{title:t}=(0,o.N)(),[r]=e.split(i.QB),{title:l}=a.A[r]||{};return{appendFileToTitle:(0,n.useCallback)((r,n)=>{let o=r?` - ${r}${n?` ${i.g6}`:""}`:"";t(e,`${l}${o}`)},[e,l,t]),prependFileToTitle:(0,n.useCallback)((r,n,o)=>{let a=r?`${n?`${i.g6} `:""}${r}${o?" ":" - "}`:"";t(e,`${a}${l}`)},[e,l,t])}}},43680:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(33540),o=r(48060);let a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},i=(e=o.Gm,t=0,r=0,i="dark")=>(0,n.css)`
  overflow: auto;
  scrollbar-gutter: stable;

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: ${a[i].thumb} ${a[i].track};
  }

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${a[i].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${a[i].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${a[i].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${a[i].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${a[i].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${a[i].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${a[i].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${a[i].buttonHover};
    }

    &:active {
      background-color: ${a[i].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${a[i].blendMode};
  }
`}}]);