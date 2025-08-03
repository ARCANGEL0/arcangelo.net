"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7543],{2001:(e,t,i)=>{i.d(t,{A:()=>g});var r=i(14232),o=i(42771),n=i(16361),s=i(60109);let l={height:"inherit",opacity:1,scale:1,width:"inherit"},a={opacity:0,scale:.95},c={...a,height:"inherit",width:"inherit"},A={...c,scale:1},u={opacity:1,scale:1},h={opacity:0,scale:.7},d=()=>({height:(0,s.Bv)()+n.D5,width:(0,s.e8)()}),g=(e,t=!1)=>{let{processes:{[e]:i}={}}=(0,o.N)(),{closing:s,componentWindow:g,maximized:p,minimized:x,taskbarEntry:m}=i||{},[w,f]=(0,r.useState)(Object.create(null)),[b,v]=(0,r.useState)(Object.create(null));return(0,r.useLayoutEffect)(()=>{if(!g||s)return;let{x:e=0,y:t=0}=g.getBoundingClientRect();f({...u,...d(),x:0-e,y:0-t+n.D5})},[s,g,p]),(0,r.useLayoutEffect)(()=>{if(!m||!g||s)return;let{height:e=0,width:t=0,x:i=0,y:r=0}=m.getBoundingClientRect(),{height:o=0,width:n=0,x:l=0,y:a=0}=g.getBoundingClientRect(),c=Math.round(i-l-n/2+t/2),A=Math.round(r-a-o/2-e/2);(0!==c||0!==A)&&v({...h,x:c,y:A})},[s,g,x,m]),(0,r.useEffect)(()=>{let e=()=>{p&&f(e=>({...e,...d()}))};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[p]),{animate:(x?"minimize":"")||(!s&&p?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:n.f9.WINDOW},variants:{active:l,exit:a,initial:t?A:c,maximize:w,minimize:b}}}},26951:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(14232),o=i(90194),n=i(64148),s=i(42771),l=i(16361);let a=e=>{let{contextMenu:t}=(0,n.b)(),{onClose:i,onMaximize:a,onMinimize:c}=(0,o.A)(e),{processes:{[e]:A}}=(0,s.N)(),{allowResizing:u=!0,hideMaximizeButton:h,hideMinimizeButton:d,maximized:g,minimized:p}=A||{};return(0,r.useMemo)(()=>t?.(()=>{let e=g||p,t=!h||!d;return[t&&{action:()=>{p?c():a()},disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!d&&{action:c,disabled:p,icon:p?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!h&&{action:a,disabled:e||!u,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},t&&l.kG,{action:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[u,t,h,d,g,p,i,a,c])}},34901:(e,t,i)=>{i.d(t,{Ay:()=>l,EX:()=>o,Ho:()=>r,WB:()=>n,lH:()=>s});let r={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},o={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,s=166,l={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${s}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}}},55137:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(14232),o=i(42771),n=i(70185),s=i(16361);let l=(e,t,i)=>{let{foregroundId:l,prependToStack:a,setForegroundId:c,stackOrder:A=[]}=(0,n.w)(),{processes:{[e]:u}}=(0,o.N)(),{closing:h=!1,componentWindow:d=i,minimized:g=!1,taskbarEntry:p,url:x}=u||{},m=(0,r.useMemo)(()=>A.length+(g?1:-A.indexOf(e))+1,[e,g,A]),w=(0,r.useCallback)(i=>{let{relatedTarget:r}=i,o=r===p,n=r&&p?.previousSibling?.contains(r),l=r&&d?.contains(r);c(r=>r!==e||o||l?r:(n?d?.focus(s.VD):t?.onBlurCapture?.(i),n?r:""))},[t,d,e,c,p]),f=(0,r.useCallback)(i=>{let{relatedTarget:r}=i||{};d?.contains(document.activeElement)?(a(e),c(e)):r&&document.activeElement!==p||(d?.focus(s.VD),t?.onFocusCapture?.(i))},[t,d,e,a,c,p]);return(0,r.useLayoutEffect)(()=>{e===l&&f()},[l,e,f]),(0,r.useLayoutEffect)(()=>{!d||h||g||c(e)},[h,d,e,g,c,x]),(0,r.useMemo)(()=>({onBlurCapture:w,onClickCapture:f,onFocusCapture:f,zIndex:m,...s.W8}),[f,w,m])}},74789:(e,t,i)=>{i.d(t,{Gn:()=>s,Ve:()=>c,WZ:()=>A,Xc:()=>a,r_:()=>l});var r=i(34901),o=i(16361),n=i(60109);let s=(e,t,i=[],r=0)=>{let[s]=e.split(o.QB),l=`${s}${o.QB}`,a=i.find(e=>e.startsWith(l))||"",{componentWindow:c}=t?.[a]||{},{x:A=0,y:u=0,width:h=0,height:d=0}=c?.getBoundingClientRect()||{};return!(A+r+h>(0,n.e8)()||u+r+d>(0,n.Bv)())&&(A||u)?{x:A+r,y:u+r}:void 0},l=({height:e,width:t})=>{let[i,r]=[(0,n.Bv)(),(0,n.e8)()];return{x:Math.floor(r/2-(0,n.kl)(t)/2),y:Math.floor((i-o.D5)/2-(0,n.kl)(e)/2)}},a={BOTTOM:15,LEFT:150,RIGHT:50,TOP:0},c=(e,t,i=!1)=>{let{position:r,size:o}=e||{},{x:s=0,y:l=0}=r||{},{height:c=0,width:A=0}=o||{};return i?s+a.RIGHT>t.x||s+(0,n.kl)(A)-a.LEFT<0||l+a.BOTTOM>t.y||l+a.TOP<0:s<0||l<0||s+(0,n.kl)(A)>t.x||l+(0,n.kl)(c)>t.y},A=(e,t)=>{let i=Number(e.height-50),s=Number(e.width),[l,a]=[(0,n.Bv)(),(0,n.e8)()],c=l-o.D5-15,A=Math.max(r.WB,Math.min(i,c)),u=Math.max(r.lH,Math.min(s,a));if(!t)return{height:A,width:u};let h=i===A,d=s===u;return h||d?h?d?{height:A,width:u}:{height:Math.round(A/(s/u)),width:u}:{height:A,width:Math.round(u/(i/A))}:i>s?{height:A,width:Math.round(u/(c/A))}:{height:Math.round(A/(a/u)),width:u}}},75014:(e,t,i)=>{i.d(t,{Su:()=>l,US:()=>a,_X:()=>s,gR:()=>n});var r=i(37876),o=i(14232);let n=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),s=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),l=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),a=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]}))},97543:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var r=i(37876),o=i(14232),n=i(77232);let s=n.default.div`
  background-color: inherit;
  height: inherit;
  transform: translate3d(0, 0, 0);
  width: inherit;
`;var l=i(82179),a=i(34901),c=i(42771);let A=e=>{let{processes:t}=(0,c.N)(),{maximized:i=!1,minimized:r=!1}=t[e]||{},n=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{n.current=!!(i||r)},[i,r]),n};var u=i(74789),h=i(70185),d=i(60109),g=i(16361);let p=(e=!0)=>document.querySelectorAll("iframe").forEach(t=>{t.style.pointerEvents=e?"initial":"none"}),x=({children:e,id:t,zIndex:i})=>{let{linkElement:s,processes:{[t]:x}}=(0,c.N)(),{Component:m,componentWindow:w,maximized:f,minimized:b}=x||{},v=(0,o.useRef)(null),C=(e=>{let{processes:{[e]:{allowResizing:t=!0,autoSizing:i=!1,lockAspectRatio:r=!1,maximized:s=!1}={}}}=(0,c.N)(),{setWindowStates:l}=(0,h.w)(),[x,m]=((e,t=!1)=>{let i=(e=>{let{processes:{[e]:t}={}}=(0,c.N)(),{defaultSize:i}=t||{},{sizes:{titleBar:r}}=(0,n.useTheme)();return(0,o.useMemo)(()=>i?{height:Number(i.height)+r.height,width:i.width}:g.RU,[i,r.height])})(e),{windowStates:{[e]:{size:r=i}={}}={}}=(0,h.w)(),{processes:{[e]:{lockAspectRatio:s=!1}={}}}=(0,c.N)(),[l,a]=(0,o.useState)(()=>(0,u.WZ)(r,s)),d=A(e);return(0,o.useLayoutEffect)(()=>{t&&!d.current&&a((0,u.WZ)(r,s))},[t,d,s,r]),[l,a]})(e,i),[w,f]=((e,t)=>{let{sizes:{window:{cascadeOffset:i}}}=(0,n.useTheme)(),{processes:r}=(0,c.N)(),{autoSizing:s,closing:l,componentWindow:a,initialRelativePosition:g}=r[e]||{},{stackOrder:p,windowStates:{[e]:x}={}}=(0,h.w)(),{position:m,size:w}=x||{},f=(0,o.useMemo)(()=>(0,u.Ve)(x,(0,d.LZ)()),[x]),[b,v]=(0,o.useState)(()=>!f&&m||(0,u.Gn)(e,r,p,i)||(0,u.r_)(t)),C=A(e);return(0,o.useEffect)(()=>{let e=()=>{let e=(0,d.LZ)();(0,u.Ve)({position:b,size:t},e,!0)&&v(({x:t,y:i})=>({x:Math.min(t,e.x-u.Xc.RIGHT),y:Math.min(i,e.y-u.Xc.BOTTOM)}))};return window.addEventListener("resize",e,{passive:!0}),()=>window.removeEventListener("resize",e)},[b,t]),(0,o.useLayoutEffect)(()=>{!s||l||!w||m||C.current||v((0,u.r_)(w))},[s,C,l,m,w]),(0,o.useLayoutEffect)(()=>{g&&a&&t&&v((0,d.$c)(a,g,t))},[a,g,t]),[b,v]})(e,x),b=(0,o.useCallback)((t,{x:i,y:r})=>{p();let o={x:i,y:r};(0,u.Ve)({position:o,size:x},(0,d.LZ)(),!0)||(f(o),l(t=>({...t,[e]:{...t[e],position:o}})))},[e,f,l,x]),v=(0,o.useCallback)((t,i,{style:{height:r,width:o,transform:n}},s,a)=>{let[,c,A]=/translate\((-?\d+)px, (-?\d+)px\)/.exec(n)||[],u="string"==typeof c&&"string"==typeof A?{x:(0,d.kl)(c),y:(0,d.kl)(A)}:a;p();let h={height:(0,d.kl)(r),width:(0,d.kl)(o)};u.y<0&&(h.height+=u.y,u.y=0),m(h),f(u),l(t=>({...t,[e]:{...t[e],position:u,size:h}}))},[e,f,m,l]),C=(0,o.useCallback)(()=>p(!1),[]),B=(0,o.useMemo)(()=>t&&!s?a.EX:a.Ho,[t,s]);return{disableDragging:s,enableResizing:B,lockAspectRatio:r,onDragStart:C,onDragStop:b,onResizeStart:C,onResizeStop:v,position:w,size:x,...a.Ay}})(t),B=(0,o.useMemo)(()=>({pointerEvents:b?"none":void 0,zIndex:i}),[b,i]),k=(0,o.useCallback)(e=>{v.current=e;let[i]=e?.resizableElement?.current?.children||[];m&&!w&&i&&s(t,"componentWindow",i)},[m,w,t,s]);return(0,o.useEffect)(()=>{if(!f){let{current:e}=v,[t,i]=e?.resizableElement?.current?.children||[];[...i?.children||[]].forEach(e=>{e?.setAttribute("tabindex",g.W8.tabIndex.toString()),e?.addEventListener("contextmenu",d.CH),e?.addEventListener("mousedown",e=>{e.preventDefault(),t?.focus(g.VD)})})}},[f]),(0,r.jsx)(l.p,{ref:k,style:B,...C,children:e})};var m=i(20779);let w=(0,n.default)(m.m.section)`
 background-color: rgba(0,0,0,0.5);
  box-shadow: ${({$isForeground:e,theme:t})=>e?t.colors.window.shadow:t.colors.window.shadowInactive};
  contain: strict;
  height: 100%;
  outline: ${({$isForeground:e,theme:t})=>`${t.sizes.window.outline} solid ${e?t.colors.window.outline:t.colors.window.outlineInactive}`};
  overflow: hidden;
  position: absolute;
  width: 100%;
  opacity: 1 !important;

  header + * {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px)`};
  }
`,f=({$foreground:e,theme:t})=>e?`1px solid ${t.colors.titleBar.background}`:`1px solid ${t.colors.titleBar.backgroundInactive}`,b=n.default.header`
  background-color: ${({$foreground:e,theme:t})=>e?t.colors.titleBar.background:t.colors.titleBar.backgroundInactive};
  border-bottom: ${f};
  display: flex;
  height: ${({theme:e})=>e.sizes.titleBar.height}px;
  position: relative;
  top: 0;
  z-index: 2;

  > button {
    align-items: center;
    color: ${({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.textInactive};
    display: flex;
    flex-grow: 1;
    font-size: ${({theme:e})=>e.sizes.titleBar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      pointer-events: none;
      position: relative;
      top: -1px;

      picture {
        height: ${({theme:e})=>e.sizes.titleBar.iconSize};
        margin-right: ${({theme:e})=>e.sizes.titleBar.iconMarginRight};
        width: ${({theme:e})=>e.sizes.titleBar.iconSize};
      }

      img,
      picture {
        pointer-events: all;
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

     button {
    border-left: ${f};
    box-sizing: content-box;
    display: flex;
    place-content: center;
    place-items: center;
    width: ${({theme:e})=>e.sizes.titleBar.buttonWidth};

    svg {
      fill: ${({$foreground:e,theme:t})=>e?t.colors.titleBar.text:t.colors.titleBar.buttonInactive};
      margin: 0 1px 2px 0;
      width: ${({theme:e})=>e.sizes.titleBar.buttonIconWidth};
    }

    &.minimize {
      svg {
        margin-bottom: 1px;
        margin-right: 0;
      }
    }

    &:hover {
      fill: ${({theme:e})=>e.colors.titleBar.backgroundHover};

      &.close {
        fill: ${({theme:e})=>e.colors.titleBar.closeHover};
        transition: background-color 0.25s ease;

        svg {
          fill: red; /* Set fill to red for close button on hover */
        }
      }

      &.maximize {
        svg {
          fill: yellow; /* Set fill to yellow for maximize button on hover */
        }
      }

      &.minimize {
        svg {
          fill: white; /* Set fill to white for minimize button on hover */
        }
      }

      svg {
        fill: ${({theme:e})=>e.colors.titleBar.text};
      }
    }

    &:active {
      background-color: inherit;

      &.close {
        background-color: inherit;
      }
    }

    &:disabled {
      svg {
        fill: ${({$foreground:e})=>e?"rgb(50, 50, 50)":"rgb(60, 60, 60)"};
      }

      &:hover {
        background-color: inherit;
      }
    }
  }
}
`;var v=i(75014),C=i(26951),B=i(90194),k=i(64148),E=i(71553),R=i(3861),z=i(42670);let j=(0,o.memo)(({id:e})=>{let{processes:{[e]:t}}=(0,c.N)(),{allowResizing:i=!0,closing:n,componentWindow:s,hideMaximizeButton:l,hideMinimizeButton:A,hideTitlebarIcon:u,icon:p,title:x,maximized:m}=t||{},{foregroundId:w}=(0,h.w)(),f=e===w,{onClose:j,onMaximize:S,onMinimize:y}=(0,B.A)(e),M=(0,E.A)(j),V=(0,E.A)(S),{menu:N,setMenu:G}=(0,k.b)(),O=(0,C.A)(e),$=(0,o.useRef)(0),D=(0,o.useRef)(),T=(0,o.useRef)(),Q=(0,o.useCallback)(e=>{let{x:t,y:i}=s?.getBoundingClientRect()||{};Date.now()-$.current>=g.a&&D.current&&D.current.x===t&&D.current.y===i&&O.onContextMenuCapture(Object.assign(e,{touches:T.current}))},[s,O]),U=(0,o.useCallback)(({touches:e})=>{s&&(s.blur(),s.focus(g.VD),$.current=Date.now(),D.current=s.getBoundingClientRect(),T.current=e)},[s]);return(0,r.jsxs)(b,{$foreground:f,className:a.Ay.dragHandleClassName,onDragOver:d.CH,onDrop:d.CH,...O,children:[(0,r.jsx)(R.A,{...!l&&i&&!n?V:{},onMouseDownCapture:({button:e})=>{0===e&&Object.keys(N).length>0&&G(Object.create(null))},onMouseUpCapture:()=>{s&&s!==document.activeElement&&s.focus(g.VD)},onTouchEndCapture:Q,onTouchStartCapture:U,children:(0,r.jsxs)("figure",{children:[!u&&(0,r.jsx)(z.A,{alt:x,imgSize:16,src:p,...M}),(0,r.jsx)("figcaption",{children:x})]})}),(0,r.jsxs)("nav",{className:"cancel",children:[!A&&(0,r.jsx)(R.A,{className:"minimize",onClick:()=>y(),...(0,d.Pf)("Minimize"),children:(0,r.jsx)(v.gR,{})}),!l&&(0,r.jsx)(R.A,{className:"maximize",disabled:!i,onClick:S,...(0,d.Pf)(m?"Restore Down":"Maximize"),children:m?(0,r.jsx)(v.Su,{}):(0,r.jsx)(v._X,{})}),(0,r.jsx)(R.A,{$short:l&&A,className:"close",onClick:j,...(0,d.Pf)("Close"),children:(0,r.jsx)(v.US,{})})]})]})});var S=i(55137),y=i(2001);let M=({children:e,id:t})=>{let{linkElement:i,processes:{[t]:n}}=(0,c.N)(),{backgroundColor:l,Component:a,hideTitlebar:A,peekElement:u}=n||{},{foregroundId:d}=(0,h.w)(),g=t===d,{zIndex:p,...m}=(0,S.A)(t),f=(0,y.A)(t),b=(0,o.useCallback)(e=>{a&&!u&&e&&i(t,"peekElement",e)},[a,t,i,u]);return(0,r.jsx)(x,{id:t,zIndex:p,children:(0,r.jsx)(w,{$backgroundColor:l,$isForeground:g,...m,...f,children:(0,r.jsxs)(s,{ref:b,children:[!A&&(0,r.jsx)(j,{id:t}),e]})})})}}}]);