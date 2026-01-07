"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,3162],{61149:(e,n,t)=>{t.d(n,{f:()=>b,A:()=>m});var r=t(74848),i=t(16286),o=t(96540),a=t(16093),A=t(33540);let l=A.default.div`
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  background: rgba(70,70,70,0.5);
  border-radius: 10px;
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight}px;
  margin: 6px 12px 5px 5px;
  overflow: hidden;
  padding: 0 22px 2px 11px;
  position: relative;
  width: 100%;

  input {
    background-color:transparent;
    border-right: 1px solid rgb(21, 21, 21);
    color: #fff;
    font-family: ${({theme:e})=>e.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight-2}px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 2px);

    &:focus,
    &.inputing {
      height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight}px;
    }
  }

  img {
    left: 2px;
    position: absolute;
    top: 1px;
  }

  .action {
    background-color: transparent;
    display: flex;
    height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight-2}px;
    margin: 0;
    place-content: center;
    place-items: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;

    &:hover {
      background-color: rgb(27, 41, 49);
      border: 1px solid rgb(34, 114, 153);
    }

    &:active {
      background-color: rgb(28, 57, 71);
      border: 1px solid rgb(38, 160, 218);
    }

    svg {
      color: rgb(128, 128, 128);
      stroke: rgb(128, 128, 128);

      &.refresh {
        position: relative;
        stroke-width: 3;
        top: 0px;
        width: 150%;
        left: 1px

      }

      &.go-to {
        height: 12px;
        stroke-width: 2;
        width: 12px;
      }
    }
  }
`;var s=t(78744);let p=e=>{let{contextMenu:n}=(0,s.b)();return(0,o.useMemo)(()=>n?.(()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]),[e,n])};var c=t(41017),d=t(62104),g=t(87952),u=t(48060),h=t(37e3),f=t(91745),x=t(1364);let b={"aria-label":"Address",enterKeyHint:"go",inputMode:"url",name:"address",...u.m8},m=(0,o.forwardRef)(({id:e},n)=>{let t=(0,o.useRef)(null),{open:A,url:s,processes:{[e]:{icon:m,url:v=""}}}=(0,d.N)(),w=(0,o.useMemo)(()=>(0,i.basename)(v)||u.l6,[v]),[E,C]=(0,o.useState)(w),{exists:k,stat:B,updateFolder:R}=(0,c.f)(),{updateRecentFiles:M}=(0,x.w)(),y=(0,o.useMemo)(()=>E!==w&&E!==v&&document.activeElement===n.current,[E,n,w,v]),j=(0,o.useCallback)(async()=>{if(E&&await k(E)){if((await B(E)).isDirectory())s(e,E);else{let e=(0,f.YD)((0,h.uQ)(E));A(e||"OpenWith",{url:E}),e&&M(E,e)}}n.current?.blur()},[E,n,s,k,e,A,B,M]);return(0,o.useEffect)(()=>{n.current&&(E===v?n.current.select():E===w?window.getSelection()?.removeAllRanges():document.activeElement!==n.current&&C(w))},[E,n,w,v]),(0,r.jsxs)(l,{children:[(0,r.jsx)("input",{ref:n,className:y?"inputing":"",onBlurCapture:({relatedTarget:e})=>{t.current!==e&&C(v)},onChange:({target:e})=>C(e.value),onFocusCapture:()=>C(v),onKeyDown:({key:e})=>{"Enter"===e&&j()},value:v,...b,...p(v)}),(0,r.jsx)(g.A,{ref:t,className:"action",onClick:()=>{C(v),y?j():R(v)},onFocusCapture:()=>setTimeout(()=>C(v),u.UW.DOUBLE_CLICK/2),...(0,h.Pf)(y?`Go to "${E}"`:`Refresh "${w}" (F5)`),children:y?(0,r.jsx)(a.GoTo,{}):(0,r.jsx)(a.Refresh,{})})]})})},77440:(e,n,t)=>{var r,i=t(33540).default.nav(r||(r=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}(["\n  background-color: rgb(25, 25, 25);\n  display: flex;\n  height: ",';\n\n  svg {\n    color: #fff;\n    fill: currentColor;\n    height: 16px;\n    transition: color 0.35s ease;\n    width: 16px;\n  }\n\n  > button {\n    height: 16px;\n    max-height: 36px;\n    max-width: 34px;\n    min-height: 36px;\n    min-width: 34px;\n\n    &[title^="Home"] {\n      max-width: 0px;\n      min-width: 0px;\n      position: relative;\n      right: 15px;\n      top: -2px;\n    }\n\n    &[title="Recent locations"] {\n      left: -15px;\n      position: relative;\n\n      svg {\n        stroke: currentColor;\n        stroke-width: 3px;\n        width: 16px;\n      }\n    }\n\n    &:active {\n      svg {\n        color: rgb(54, 116, 178);\n        transition: none;\n      }\n    }\n\n    &:hover {\n      svg {\n        color: rgb(50, 152, 254);\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: rgb(140, 140, 140);\n      }\n    }\n  }\n'],["\n  background-color: rgb(25, 25, 25);\n  display: flex;\n  height: ",';\n\n  svg {\n    color: #fff;\n    fill: currentColor;\n    height: 16px;\n    transition: color 0.35s ease;\n    width: 16px;\n  }\n\n  > button {\n    height: 16px;\n    max-height: 36px;\n    max-width: 34px;\n    min-height: 36px;\n    min-width: 34px;\n\n    &[title^="Home"] {\n      max-width: 0px;\n      min-width: 0px;\n      position: relative;\n      right: 15px;\n      top: -2px;\n    }\n\n    &[title="Recent locations"] {\n      left: -15px;\n      position: relative;\n\n      svg {\n        stroke: currentColor;\n        stroke-width: 3px;\n        width: 16px;\n      }\n    }\n\n    &:active {\n      svg {\n        color: rgb(54, 116, 178);\n        transition: none;\n      }\n    }\n\n    &:hover {\n      svg {\n        color: rgb(50, 152, 254);\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: rgb(140, 140, 140);\n      }\n    }\n  }\n'])),function(e){return e.theme.sizes.fileExplorer.navBarHeight});n.A=i},63162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var r=t(74848),i=t(16286),o=t(96540),a=t(61149),A=t(16093),l=t(77440),s=t(60978),p=t(78744),c=t(62104),d=t(41543),g=t(87952),u=t(48060),h=t(37e3),f=t(90925);let x=(0,o.forwardRef)(({hideSearch:e,id:n},t)=>{let{url:x,processes:{[n]:{url:b=""}}}=(0,c.N)();"/"===b||(0,i.basename)((0,i.dirname)(b));let{contextMenu:m,menu:v,setMenu:w}=(0,p.b)(),{canGoBack:E,canGoForward:C,history:k,moveHistory:B,position:R}=(0,d.A)(b,n),M=(0,o.useMemo)(()=>k.map((e,n)=>({action:()=>B(n-R),checked:R===n,label:(0,i.basename)(e)||u.l6,primary:R===n})).reverse(),[k,B,R]),{onContextMenuCapture:y}=(0,o.useMemo)(()=>m?.(()=>M),[m,M]),[j,S]=(0,o.useState)(!1),Q=(0,o.useRef)(null),[U,F]=(0,o.useState)(!1),H=(0,o.useCallback)(([{contentRect:e}])=>{let n=e.width<260;U&&!n?F(!1):!U&&n&&F(!0)},[U]);return(0,o.useEffect)(()=>{S(M===v.items)},[v.items,M]),(0,f.A)(Q.current,H),(0,r.jsxs)(l.A,{ref:Q,...(0,s.A)(n),onDragOver:h.CH,onDrop:h.CH,children:[(0,r.jsx)(g.A,{disabled:!E,onClick:()=>B(-1),...(0,h.Pf)(E?`Back to ${(0,i.basename)(k[R-1])||u.l6}`:"Back"),children:(0,r.jsx)(A.Back,{})}),(0,r.jsx)(g.A,{disabled:!C,onClick:()=>B(1),...(0,h.Pf)(C?`Forward to ${(0,i.basename)(k[R+1])||u.l6}`:"Forward"),children:(0,r.jsx)(A.Forward,{})}),(0,r.jsx)(g.A,{disabled:1===k.length,onClick:e=>{if(e.preventDefault(),j)w(Object.create(null));else{let{height:n=0,y:t=0,x:r=0}=Q.current?.getBoundingClientRect()||{};y((r||t)&&n?{pageX:r,pageY:t+n-3}:e)}},...(0,h.Pf)("Recent locations"),children:(0,r.jsx)(A.Down,{})}),(0,r.jsx)(g.A,{disabled:"/"===b,onClick:()=>x(n,(0,i.dirname)("/")),...(0,h.Pf)("Home"),children:(0,r.jsx)(A.Up,{})}),(0,r.jsx)(a.A,{ref:t,id:n})]})});var b=t(33540),m=t(51583),v=t(44260),w=t(6311);let E=b.default.div`
  ${v.A}, ${w.A} {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`};
  }

  ${w.A} {
    column-gap: 2px;
    padding: 6px 6px 6px 14px;

    figcaption {
      padding: 1px 0 2px;
    }
  }

  ${m.default} {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.fileExplorer.navBarHeight} - ${e.sizes.fileExplorer.statusBarHeight})`};
  }
`;var C=t(91745),k=t(46285),B=t(41017),R=t(56431);let M=({id:e})=>{let{icon:n,title:t,processes:{[e]:a},url:A}=(0,c.N)(),{componentWindow:l,closing:s,icon:p="",url:d=""}=a||{},{fs:g,rootFs:f}=(0,B.f)(),[b,m]=(0,o.useState)(d),v=(0,o.useRef)(null),w=(0,i.basename)(d),M=(0,R.getMountUrl)(d,f?.mntMap||{}),y=(0,o.useCallback)(e=>{if(e.altKey&&"D"===e.key.toUpperCase())(0,h.CH)(e),v.current?.focus(u.VD);else{let n=e?.target?.querySelector("ol li button");n?.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,cancelable:!0,ctrlKey:e.ctrlKey,key:e.key,shiftKey:e.shiftKey}))}},[]);return(0,o.useEffect)(()=>{d&&(t(e,w||u.l6),(!p||d!==b||M&&p!==u._A||p===u.tz)&&(M&&d===M?n(e,(0,R.isMountedFolder)(f?.mntMap[d])?u._A:u.PI):g&&(n(e,`/System/Icons/${w?"folder":"pc"}.webp`),(0,C.q_)(g,d).then(t=>{t&&n(e,t)})),m(d)))},[b,w,g,p,e,M,f?.mntMap,n,t,d]),(0,o.useEffect)(()=>{!l||s||d||(A(e,"/home/root"),n(e,"/System/Icons/pc.webp"))},[s,e,l,n,A,d]),(0,o.useEffect)(()=>(l?.addEventListener("keydown",y),()=>l?.removeEventListener("keydown",y)),[l,y]),d?(0,r.jsxs)(E,{children:[(0,r.jsx)(x,{ref:v,hideSearch:!!M,id:e}),(0,r.jsx)(k.A,{id:e,url:d,showStatusBar:!0})]}):null}},51583:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(33540);let i=r.default.div`
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
`},60978:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(96540),i=t(6191),o=t(78744),a=t(62104),A=t(48060);let l=e=>{let{contextMenu:n}=(0,o.b)(),{onClose:t,onMaximize:l,onMinimize:s}=(0,i.A)(e),{processes:{[e]:p}}=(0,a.N)(),{allowResizing:c=!0,hideMaximizeButton:d,hideMinimizeButton:g,maximized:u,minimized:h}=p||{};return(0,r.useMemo)(()=>n?.(()=>{let e=u||h,n=!d||!g;return[n&&{action:()=>{h?s():l()},disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!g&&{action:s,disabled:h,icon:h?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!d&&{action:l,disabled:e||!c,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},n&&A.kG,{action:t,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[c,n,d,g,u,h,t,l,s])}},41543:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(96540),i=t(62104);let o=(e,n)=>{let{url:t}=(0,i.N)(),[o,a]=(0,r.useState)(e),[A,l]=(0,r.useState)(()=>[e]),[s,p]=(0,r.useState)(0),c=(0,r.useCallback)(e=>{let r=s+e;p(r),a(A[r]),t(n,A[r])},[t,A,n,s]);return(0,r.useEffect)(()=>{e!==o&&(p(s+1),a(e),l([...A.slice(0,s+1),e]))},[o,A,s,e]),{canGoBack:s>0,canGoForward:s<A.length-1,currentUrl:o,history:A,moveHistory:c,position:s}}},90925:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(96540);let i=(e,n)=>{let[t,i]=(0,r.useState)();(0,r.useEffect)(()=>{n&&i(new ResizeObserver(n))},[n]),(0,r.useEffect)(()=>(e instanceof HTMLElement&&t?.observe(e),()=>{e instanceof HTMLElement&&t?.unobserve(e)}),[e,t])}}}]);