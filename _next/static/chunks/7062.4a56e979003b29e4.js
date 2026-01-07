"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,7062],{14662:(e,t,n)=>{n.d(t,{EU:()=>a,Jo:()=>l,rH:()=>r});var i=n(48060);let r=e=>e?.mode.isReadOnly()||!e?.getContent(),a=(e,t)=>{let n=e.editorContainer?.querySelector(".tox-editor-header");n instanceof HTMLDivElement&&n.addEventListener("click",()=>{n.removeAttribute("title"),e.mode.set("design"),t()},i.w3),e.mode.set("readonly")},o=new Set(["wikipedia.org","archive.org"]),l=e=>{if(!e)return!1;try{let{hostname:t}=new URL(e),[,n,i]=t.split(".");return o.has(`${n}.${i}`)||o.has(t)}catch{return!1}}},47062:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var i=n(74848),r=n(33540);let a=r.default.div`
  height: 100%;

  [role="application"] {
    border-radius: 0;
    height: 100% !important;

    button[aria-disabled="true"] {
      pointer-events: none;

      svg {
        fill: rgb(255, 255, 255, 50%);
      }
    }

    .tox-statusbar {
      font-size: 12px;
    }

    &[aria-disabled="true"] {
      .tox-editor-header {
        height: 0;
        margin-top: -1px;
        overflow: hidden;
        padding: 0;
        position: relative;
        visibility: hidden;

        &::after {
          bottom: 0;
          color: rgb(200, 200, 200);
          content: "Edit Document";
          cursor: pointer;
          display: flex;
          font-size: 12px;
          font-weight: 600;
          height: 24px;
          left: 0;
          padding: 0 10px;
          padding-bottom: 2px;
          place-content: center;
          place-items: center;
          position: fixed;
          transform: translateZ(0);
          visibility: visible;
          width: auto;
          z-index: 1;
        }

        &:hover::after {
          background-color: rgba(255, 255, 255, 15%);
        }

        .tox-toolbar-overlord {
          display: none;
        }
      }

      /* stylelint-disable selector-class-pattern */
      .tox-statusbar__path-item {
        display: none;
      }
      /* stylelint-enable selector-class-pattern */
    }

    iframe {
      background-color: #202124;
    }
  }
`;var o=n(16286),l=n(96540),s=n(48060);let d={base_url:"/Apps/TinyMCE/",branding:!1,contextmenu:"",draggable_modal:!0,help_accessibility:!1,image_advtab:!0,plugins:`
  code help image link save wordcount`,promotion:!1,suffix:".min",toolbar:`
  save undo redo | formatselect | bold italic underline | forecolor backcolor |
  alignleft aligncenter alignright | outdent indent | code help`},c=`${s.Bn}/New Rich Text Document.whtml`;var u=n(14662),m=n(91745),f=n(8218),p=n(55650),w=n(41017),b=n(62104),g=n(1364),h=n(37e3),v=n(22951),y=n(48287).Buffer;let x=({containerRef:e,id:t,setLoading:i,url:r})=>{let{processes:{[t]:{libs:a=[]}={}}={},url:x}=(0,b.N)(),[E,$]=(0,l.useState)(),{prependFileToTitle:k}=(0,p.A)(t),{readFile:C,stat:A,updateFolder:L,writeFile:T}=(0,w.f)(),{onDragOver:D,onDrop:W}=(0,f.A)({id:t}),{setForegroundId:_}=(0,g.w)(),H=(0,l.useCallback)(async e=>{let t=new Date((0,m.nR)(e,await A(e))),n=new Intl.DateTimeFormat(s.Xn,{dateStyle:"medium"}).format(t);k(`${(0,o.basename)(e,(0,o.extname)(e))} (${n})`)},[k,A]),R=(0,v.U)(),S=(0,l.useCallback)(()=>{let t=e.current?.querySelector("iframe");t?.contentWindow&&[...t.contentWindow.document.links].forEach(e=>e.addEventListener("click",t=>{E?.mode.isReadOnly()&&R(t,e.dataset.mceHref||"",e.pathname,e.textContent||"")}))},[e,E?.mode,R]),U=(0,l.useCallback)(async()=>{if(E){let e=()=>{E.options.set("save_onsavecallback",async()=>{let e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},t=r||c;try{await T(".rtf"===(0,h.uQ)(t)?t.replace(".rtf",".whtml"):t,E.getContent(),!0),L((0,o.dirname)(t),(0,o.basename)(t)),H(t)}catch{e.text="Error occurred while saving.",e.type="error"}E.notificationManager.open(e);let n=E.notificationManager.getNotifications()?.[0]?.getEl()?.parentElement,i=E.editorContainer;n instanceof HTMLElement&&i instanceof HTMLElement&&(i.append(n),n.setAttribute("style","position: absolute; right: 0; bottom: 0; padding: 33px 25px;"),n.querySelector("[role=alert]")?.setAttribute("style","opacity: 1;")),t===c&&H(t)})},t=r?await C(r):y.from("");if(0===t.length)E.mode.set("design"),e();else{if((0,u.EU)(E,e),".rtf"===(0,h.uQ)(r)){let{RTFJS:e}=await Promise.all([n.e(1194),n.e(2e3)]).then(n.bind(n,32e3)),i=new e.Document(t),r=await i.render();E.setContent(r.map(e=>e.outerHTML).join(""))}else E.setContent(t.toString());S(),E.iframeElement?.contentDocument&&(E.iframeElement.contentDocument.documentElement.scrollTop=0)}r&&H(r)}},[E,S,C,L,H,r,T]),j=(0,l.useRef)(!1);(0,l.useEffect)(()=>{E||j.current||(j.current=!0,(0,h.aY)(a).then(()=>{window.tinymce&&e.current&&(window.tinymce.remove(),window.tinymce.init({readonly:!!r,selector:`.${[...e.current.classList].join(".")} div`,setup:e=>{e.on("ExecCommand",({command:e})=>{"mceNewDocument"===e&&(x(t,""),k(""))})},...d}).then(([n])=>{let r=e.current?.querySelector("iframe");r?.contentWindow&&(r.contentWindow.addEventListener("dragover",e=>{(0,u.rH)(n)&&D(e)}),r.contentWindow.addEventListener("drop",e=>{(0,u.rH)(n)&&W(e)}),r.contentWindow.addEventListener("blur",()=>_(e=>e===t?"":e)),r.contentWindow.addEventListener("focus",()=>_(t)),r.contentWindow.addEventListener("mousedown",({pageX:e})=>r.contentWindow&&e>r.contentWindow.innerWidth-s.Gm&&_(t))),$(n),i(!1)}))}))},[e,E,t,a,D,W,k,_,i,x,r]),(0,l.useEffect)(()=>{E&&U()},[E,U]),(0,l.useEffect)(()=>()=>{window.setTimeout(()=>E?.destroy(),0)},[E])};var E=n(14153);let $=({id:e})=>(0,i.jsx)(E.A,{StyledComponent:a,id:e,useHook:x,children:(0,i.jsx)("div",{})})},14153:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(74848),r=n(96540),a=n(51583),o=n(8218),l=n(62104);let s=(0,r.memo)(({id:e,useHook:t,StyledComponent:n,children:s})=>{let{processes:{[e]:{url:d=""}={}}}=(0,l.N)(),c=(0,r.useRef)(null),[u,m]=(0,r.useState)(!0),f=(0,r.useMemo)(()=>({contain:"strict",visibility:u?"hidden":"visible"}),[u]);return t({containerRef:c,id:e,loading:u,setLoading:m,url:d}),(0,i.jsxs)(i.Fragment,{children:[u&&(0,i.jsx)(a.default,{}),(0,i.jsx)(n,{ref:c,style:f,...(0,o.A)({id:e}),children:s})]})})},51583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var i=n(33540);let r=i.default.div`
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
`},8218:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(16286),r=n(96540),a=n(51780),o=n(16091),l=n(13296),s=n(41017),d=n(62104),c=n(1364),u=n(48060),m=n(37e3),f=n(96119);let p=({callback:e,directory:t=u.Bn,id:n,onDragLeave:p,onDragOver:w,updatePositions:b})=>{let{url:g}=(0,d.N)(),h=(0,f.w)(),{iconPositions:v,sortOrders:y,setIconPositions:x}=(0,c.w)(),{exists:E,mkdirRecursive:$,updateFolder:k,writeFile:C}=(0,s.f)(),A=(0,r.useCallback)(async(e,t,r)=>{if(n){if(t){let a=(0,i.join)(u.Bn,e);if(await $(u.Bn),await C(a,t,!0))return r===l.z.UPDATE_URL&&g(n,a),k(u.Bn,e),(0,i.basename)(a)}else r===l.z.UPDATE_URL&&g(n,e)}return""},[n,$,k,g,C]),{openTransferDialog:L}=(0,a.A)();return{onDragLeave:p,onDragOver:e=>{w?.(e),(0,m.CH)(e)},onDrop:r=>{if(u.jj.has((0,m.uQ)(t)))return;if(b&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,o.bn)(r);if(0===e.length&&""===n)return;(async()=>{let a={x:r.clientX,y:r.clientY},o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;o=o.map(e=>(0,i.basename)(e))}else e instanceof FileList?o=[...e].map(e=>e.name):o=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=await Promise.all(o.map(async e=>{let n=`${t}/${e}`;if(!v[n]||!await E(n))return e;let r=0;do r+=1,n=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${r})${(0,i.extname)(e)}`;while(v[n]&&await E(n));return(0,i.basename)(n)})),(0,m.$Y)(t,r.target,v,y,a,o,x,E)})()}let a="string"==typeof n;a&&!b&&t===u.Bn&&h.current[n]?.componentWindow?.focus(u.VD),(0,o.nX)(r,e||A,t,L,a)}}}},55650:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(96540),r=n(62104),a=n(25573),o=n(48060);let l=e=>{let{title:t}=(0,r.N)(),[n]=e.split(o.QB),{title:l}=a.A[n]||{};return{appendFileToTitle:(0,i.useCallback)((n,i)=>{let r=n?` - ${n}${i?` ${o.g6}`:""}`:"";t(e,`${l}${r}`)},[e,l,t]),prependFileToTitle:(0,i.useCallback)((n,i,r)=>{let a=n?`${i?`${o.g6} `:""}${n}${r?" ":" - "}`:"";t(e,`${a}${l}`)},[e,l,t])}}},22951:(e,t,n)=>{n.d(t,{U:()=>c});var i=n(16286),r=n(96540),a=n(14662),o=n(91745),l=n(62104),s=n(37e3),d=n(1364);let c=()=>{let{open:e}=(0,l.N)(),{updateRecentFiles:t}=(0,d.w)();return(0,r.useCallback)((n,r,l,d)=>{if((0,s.CH)(n),(0,s.t$)(r))e("VideoPlayer",{url:r});else if((0,a.Jo)(r))e("Browser",{initialTitle:d,url:r});else if(l&&""!==(0,i.relative)(decodeURI((r.startsWith("/")?r:`/${r}`).replace(window.location.origin,"")),decodeURI(l)))window.open(r,"_blank","noopener, noreferrer");else{let n=(0,o.YD)((0,s.uQ)(l));if(n){let i=decodeURI(l);e(n,{url:i}),i&&t(i,n)}}},[e,t])}}}]);