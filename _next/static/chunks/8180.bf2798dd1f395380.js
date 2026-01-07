"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,8180],{28180:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(74848),i=a(16286),l=a(96540),s=a(33540);let r=s.default.div`
  iframe {
    opacity: ${({$loaded:e})=>e?"100%":"0%"};
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`;var o=a(51583),d=a(8218),f=a(55650),c=a(41017),p=a(62104),u=a(1364),m=a(48060),w=a(37e3);let g=({id:e})=>{let{closeWithTransition:t,processes:{[e]:{libs:[a=""]=[],url:s=""}={}}={}}=(0,p.N)(),{createPath:g,exists:h,readFile:b,updateFolder:y,writeFile:$}=(0,c.f)(),{foregroundId:x,setForegroundId:k,setWallpaper:v}=(0,u.w)(),E=(0,l.useRef)(null),[_,j]=(0,l.useState)(!1),[A,B]=(0,l.useState)(),{prependFileToTitle:H}=(0,f.A)(e),L=(0,l.useCallback)(e=>t=>{let a=(0,i.join)(m.rO,"wallpaper.png");t.toBlob(async t=>{await $(a,await (0,w.Z6)(t),!0),v(a,e)})},[v,$]),{onDragOver:T,onDrop:C}=(0,d.A)({id:e});return(0,l.useEffect)(()=>{H("Untitled")},[H]),(0,l.useEffect)(()=>{x!==e&&E.current?.contentWindow?.addEventListener("click",()=>k(e),m.w3)},[x,e,k]),(0,l.useEffect)(()=>{let{contentWindow:a}=E.current||{};if(_&&a&&!A){let n=a.systemHooks.showOpenFileDialog,l=a.file_new;B(a),a.file_new=()=>{H("Untitled"),l()},a.systemHooks.setWallpaperTiled=L("tile"),a.systemHooks.setWallpaperCentered=L("center"),a.systemHooks.showOpenFileDialog=async e=>{let{file:t}=await n(e);return H(t.name),{file:t}},a.close=()=>t(e),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async({defaultFileName:e,getBlob:t})=>y(m.Bn,await g(`${e}.png`,m.Bn,await (0,w.Z6)(await t("image/png")))),a.systemHooks.writeBlobToHandle=async(e,t)=>{await h(e)&&(await $(e,await (0,w.Z6)(t),!0),y((0,i.dirname)(e),(0,i.basename)(e)))},a.addEventListener("dragover",T),a.addEventListener("drop",C)}},[t,g,h,e,A,_,T,C,H,L,y,$]),(0,l.useEffect)(()=>{A&&s&&b(s).then(e=>{let t=A.onunhandledrejection;A.onunhandledrejection=e=>{t?.(e),e?.reason?.message==="either options.data or options.file or options.filePath must be passed"&&H("Untitled")},A.open_from_file(new File([e],s),s),H((0,i.basename)(s))})},[A,H,b,s]),(0,n.jsxs)(r,{$loaded:_,children:[!_&&(0,n.jsx)(o.default,{className:"loading"}),(0,n.jsx)("iframe",{ref:E,height:"100%",id:`jspaint-${e}`,onLoad:()=>j(!0),src:a,title:e,width:"100%",...m.aI})]})}},51583:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(33540);let i=n.default.div`
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
`},8218:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(16286),i=a(96540),l=a(51780),s=a(16091),r=a(13296),o=a(41017),d=a(62104),f=a(1364),c=a(48060),p=a(37e3),u=a(96119);let m=({callback:e,directory:t=c.Bn,id:a,onDragLeave:m,onDragOver:w,updatePositions:g})=>{let{url:h}=(0,d.N)(),b=(0,u.w)(),{iconPositions:y,sortOrders:$,setIconPositions:x}=(0,f.w)(),{exists:k,mkdirRecursive:v,updateFolder:E,writeFile:_}=(0,o.f)(),j=(0,i.useCallback)(async(e,t,i)=>{if(a){if(t){let l=(0,n.join)(c.Bn,e);if(await v(c.Bn),await _(l,t,!0))return i===r.z.UPDATE_URL&&h(a,l),E(c.Bn,e),(0,n.basename)(l)}else i===r.z.UPDATE_URL&&h(a,e)}return""},[a,v,E,h,_]),{openTransferDialog:A}=(0,l.A)();return{onDragLeave:m,onDragOver:e=>{w?.(e),(0,p.CH)(e)},onDrop:i=>{if(c.jj.has((0,p.uQ)(t)))return;if(g&&i.target instanceof HTMLElement){let{files:e,text:a}=(0,s.bn)(i);if(0===e.length&&""===a)return;(async()=>{let l={x:i.clientX,y:i.clientY},s=[];if(a){try{s=JSON.parse(a)}catch{}if(!Array.isArray(s))return;let[e]=s;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;s=s.map(e=>(0,n.basename)(e))}else e instanceof FileList?s=[...e].map(e=>e.name):s=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);s=await Promise.all(s.map(async e=>{let a=`${t}/${e}`;if(!y[a]||!await k(a))return e;let i=0;do i+=1,a=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${i})${(0,n.extname)(e)}`;while(y[a]&&await k(a));return(0,n.basename)(a)})),(0,p.$Y)(t,i.target,y,$,l,s,x,k)})()}let l="string"==typeof a;l&&!g&&t===c.Bn&&b.current[a]?.componentWindow?.focus(c.VD),(0,s.nX)(i,e||j,t,A,l)}}}},55650:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(96540),i=a(62104),l=a(25573),s=a(48060);let r=e=>{let{title:t}=(0,i.N)(),[a]=e.split(s.QB),{title:r}=l.A[a]||{};return{appendFileToTitle:(0,n.useCallback)((a,n)=>{let i=a?` - ${a}${n?` ${s.g6}`:""}`:"";t(e,`${r}${i}`)},[e,r,t]),prependFileToTitle:(0,n.useCallback)((a,n,i)=>{let l=a?`${n?`${s.g6} `:""}${a}${i?" ":" - "}`:"";t(e,`${l}${r}`)},[e,r,t])}}}}]);