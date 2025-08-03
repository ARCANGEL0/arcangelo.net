"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6515],{26515:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var i=t(37876),o=t(14232),n=t(20779),s=t(77232),a=t(7194),c=t(16361);let l=(0,s.default)(n.m.div)`
  backdrop-filter: ${({theme:e})=>`blur(${e.sizes.taskbar.blur})`};
  background-color: ${({theme:e})=>e.colors.taskbar.background};
  border: ${({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  bottom: ${c.D5}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  transform: ${({$offsetX:e})=>e?`translateX(${e}px)`:void 0};

  ${a.A}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${({theme:e})=>e.colors.taskbar.activeForeground};
    }
  }

  img {
    height: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.height}px;
    margin: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.margin}px;
    max-height: ${c.gR}px;
    max-width: ${c.gR}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button.close {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20) !important;
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }

  .controls {
    display: flex;
    place-content: center;
    position: absolute;
    top: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.height+2*e.sizes.taskbar.entry.peekImage.margin}px;
    width: 100%;

    button {
      background-color: rgb(70, 70, 70);
      border: 1px solid rgb(46, 46, 46);
      display: flex;
      height: 27px;
      place-content: center;
      place-items: center;
      width: 27px;

      &:active {
        background-color: rgb(61, 96, 153) !important;
        border: 1px solid rgb(49, 77, 122) !important;
      }

      &:hover {
        background-color: rgb(54, 101, 179);
        border: 1px solid rgb(43, 81, 143);
      }

      svg {
        fill: #fff;
        height: 16px;
        margin-left: 1px;
        pointer-events: none;
        user-select: none;
        width: 16px;
      }
    }
  }
`;var d=t(42771),g=t(60109);let p=async(e,r,t)=>{let i;if(!r.current)return;let o=()=>window.requestAnimationFrame(()=>p(e,r,t)),n=await (0,g.em)();try{let r="VIDEO"===e.tagName?{margin:"0",padding:"0"}:{};i=await n?.toCanvas(e,{...e.clientWidth>c.gR&&{canvasHeight:Math.round(c.gR/e.clientWidth*e.clientHeight),canvasWidth:c.gR},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0",...r}})}catch{}if(i&&i.width>0&&i.height>0)if((0,g.b0)(i)){let e=new Image,n=i.toDataURL();e.addEventListener("load",()=>{r.current&&(t(n),window.setTimeout(o,c.iC/15))},c.w3),e.decoding="async",e.src=n}else o()};var h=t(75014),u=t(90194),x=t(70185),m=t(3861);let w=(0,o.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 29.328V2.672h2.672v26.656H8zM21.328 2.672H24v26.656h-2.672V2.672z"})})),b=(0,o.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M28 16 8 30V2z"})})),k=(0,o.memo)(({id:e})=>{let{minimize:r,processes:{[e]:t}}=(0,d.N)(),{pause:n,paused:a,play:k,minimized:f=!1,title:v=e}=t||{},{setForegroundId:j}=(0,x.w)(),{onClose:C}=(0,u.A)(e),[y,R]=(0,o.useState)(0),S=(e=>{let{processes:{[e]:r}}=(0,d.N)(),{peekElement:t,componentWindow:i}=r||{},n=(0,o.useRef)(),[s,a]=(0,o.useState)(""),l=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{let e=t||i;return!n.current&&e&&(n.current=window.setTimeout(()=>window.requestAnimationFrame(()=>p(e,l,a)),document.querySelector(".peekWindow")?0:c.iC/2),l.current=!0),()=>{n.current&&(clearTimeout(n.current),n.current=void 0),l.current=!1}},[i,t]),s})(e),_=(0,o.useMemo)(()=>!!(k&&n&&a),[n,a,k]),V=((e=!1)=>{let{sizes:{taskbar:r}}=(0,s.useTheme)(),t=r.entry.peekImage.height+2*r.entry.peekImage.margin;return e&&(t+=r.entry.peekControlsHeight),{animate:"active",exit:"initial",initial:"initial",transition:{duration:c.f9.WINDOW,ease:"easeInOut"},variants:{active:{height:t,opacity:1},initial:{height:0,opacity:0}}}})(_),$=(0,o.useRef)(null),[G,I]=(0,o.useState)(!1),W=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{_&&a&&!W.current&&(W.current=!0,I(a(I)))},[a,_]),(0,o.useLayoutEffect)(()=>{if(S){let{left:e=0,right:r=0}=$.current?.getBoundingClientRect()||{},t=(0,g.e8)();e<0?R(Math.abs(e)):r>t&&R(t-r)}},[S]),S?(0,i.jsxs)(l,{ref:$,$offsetX:y,className:"peekWindow",onClick:()=>{f&&r(e),j(e)},...V,...c.W8,children:[(0,i.jsx)("img",{alt:v,decoding:"async",loading:"eager",src:S,...c.rJ}),(0,i.jsx)(m.A,{className:"close",onClick:C,...(0,g.Pf)("Close"),children:(0,i.jsx)(h.US,{})}),_&&(0,i.jsxs)("div",{className:"controls",children:[G&&(0,i.jsx)(m.A,{onClick:e=>{(0,g.CH)(e),k?.()},...(0,g.Pf)("Play"),...c.W8,children:(0,i.jsx)(b,{})}),!G&&(0,i.jsx)(m.A,{onClick:e=>{(0,g.CH)(e),n?.()},...(0,g.Pf)("Pause"),...c.W8,children:(0,i.jsx)(w,{})})]})]}):null})},75014:(e,r,t)=>{t.d(r,{Su:()=>a,US:()=>c,_X:()=>s,gR:()=>n});var i=t(37876),o=t(14232);let n=(0,o.memo)(()=>(0,i.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,i.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),s=(0,o.memo)(()=>(0,i.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,i.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),a=(0,o.memo)(()=>(0,i.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,i.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),c=(0,o.memo)(()=>(0,i.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,i.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,i.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]}))}}]);