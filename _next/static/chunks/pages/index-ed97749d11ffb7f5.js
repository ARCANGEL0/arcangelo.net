(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3332],{4713:(e,t,n)=>{"use strict";n.d(t,{$W:()=>i,nh:()=>a,rv:()=>r});let i={camera:{far:400,fov:30,near:.1},color:"rgb(8,8,8)",colorCycleSpeed:1e6,forceAnimate:!1,hh:50,hue:0,lightness:20,material:{options:{fog:!1,wireframe:!0}},saturation:0,shininess:35,waveHeight:70,waveSpeed:.35,ww:50},r={gyroControls:!1,mouseControls:!1,mouseEase:!1,touchControls:!1},a=["/System/Vanta.js/three.min.js","/System/Vanta.js/vanta.waves.min.js"]},14113:(e,t,n)=>{"use strict";n.d(t,{BG:()=>l,UU:()=>o,v5:()=>s,vj:()=>a});var i=n(37876),r=n(14232);let a=(0,r.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"m257.5 977.5 465-465.5-465-465.5 45-45 511 510.5-511 510.5z"})})),o=(0,r.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"m257.5 977.5 465-465.5-465-465.5 45-45 511 510.5-511 510.5z"})})),s=(0,r.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M768 128h192v192h-64v-82.5l-228 228-45.5-45.5 228-228H768v-64zm0 384 64-64v384H0V256h640l-64 64H64v448h704V512z"})})),l=(0,r.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M768 0q13 0 24.75 5t20.5 13.75T827 39.25 832 64v464q0 15.5 4.75 27t11.75 21.75 15.5 20.5T879.5 620t11.75 29 4.75 39v144q0 13-5 24.75t-13.75 20.5-20.5 13.75-24.75 5H384v64q0 19.5-10.75 35.5T344.5 1019q-11.5 5-24.5 5-26.5 0-45.5-19L128 858.5V0h640zM320 784q0-22.5 4.75-38.75t11.75-29T352 693.5t15.5-20.25 11.75-22T384 624V301.5l-192-192V832l128 128V784zm512-96q0-15.5-4.75-27t-11.75-21.75-15.5-20.5T784.5 596t-11.75-29-4.75-39V64H237.5l192 192q9 9 13.75 20.75T448 301.5V624q0 22.5-4.75 38.75t-11.75 29T416 714.5t-15.5 20.25-11.75 22T384 784v48h448V688z"})}))},16760:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(81465)}])},37989:(e,t,n)=>{"use strict";n.d(t,{N:()=>g});var i=n(37876),r=n(14232),a=n(5048),o=n(91200),s=n(3866),l=n(39751);class c extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){let n=(0,r.useId)(),a=(0,r.useRef)(null),o=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:s}=(0,r.useContext)(l.Q);return(0,r.useInsertionEffect)(()=>{let{width:e,height:i,top:r,left:l}=o.current;if(t||!a.current||!e||!i)return;a.current.dataset.motionPopId=n;let c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${r}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,i.jsx)(c,{isPresent:t,childRef:a,sizeRef:o,children:r.cloneElement(e,{ref:a})})}let u=({children:e,initial:t,isPresent:n,onExitComplete:a,custom:l,presenceAffectsLayout:c,mode:u})=>{let f=(0,o.M)(m),h=(0,r.useId)(),p=(0,r.useCallback)(e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;a&&a()},[f,a]),g=(0,r.useMemo)(()=>({id:h,initial:t,isPresent:n,custom:l,onExitComplete:p,register:e=>(f.set(e,!1),()=>f.delete(e))}),c?[Math.random(),p]:[n,p]);return(0,r.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[n]),r.useEffect(()=>{n||f.size||!a||a()},[n]),"popLayout"===u&&(e=(0,i.jsx)(d,{isPresent:n,children:e})),(0,i.jsx)(s.t.Provider,{value:g,children:e})};function m(){return new Map}let f=e=>e.key||"";function h(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var p=n(50181);let g=({children:e,custom:t,initial:n=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync",propagate:m=!1})=>{let[g,w]=function(e=!0){let t=(0,r.useContext)(s.t);if(null===t)return[!0,null];let{isPresent:n,onExitComplete:i,register:a}=t,o=(0,r.useId)();(0,r.useEffect)(()=>{e&&a(o)},[e]);let l=(0,r.useCallback)(()=>e&&i&&i(o),[o,i,e]);return!n&&i?[!1,l]:[!0]}(m),v=(0,r.useMemo)(()=>h(e),[e]),b=m&&!g?[]:v.map(f),x=(0,r.useRef)(!0),y=(0,r.useRef)(v),k=(0,o.M)(()=>new Map),[E,S]=(0,r.useState)(v),[j,$]=(0,r.useState)(v);(0,p.E)(()=>{x.current=!1,y.current=v;for(let e=0;e<j.length;e++){let t=f(j[e]);b.includes(t)?k.delete(t):!0!==k.get(t)&&k.set(t,!1)}},[j,b.length,b.join("-")]);let z=[];if(v!==E){let e=[...v];for(let t=0;t<j.length;t++){let n=j[t],i=f(n);b.includes(i)||(e.splice(t,0,n),z.push(n))}"wait"===d&&z.length&&(e=z),$(h(e)),S(v);return}let{forceRender:C}=(0,r.useContext)(a.L);return(0,i.jsx)(i.Fragment,{children:j.map(e=>{let r=f(e),a=(!m||!!g)&&(v===j||b.includes(r));return(0,i.jsx)(u,{isPresent:a,initial:(!x.current||!!n)&&void 0,custom:a?void 0:t,presenceAffectsLayout:c,mode:d,onExitComplete:a?void 0:()=>{if(!k.has(r))return;k.set(r,!0);let e=!0;k.forEach(t=>{t||(e=!1)}),e&&(null==C||C(),$(y.current),m&&(null==w||w()),l&&l())},children:e},r)})})}},52921:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var i=n(14232),r=n(98892),a=n(64148),o=n(42771),s=n(70185),l=n(9974),c=n(17786),d=n(16361),u=n(60109),m=n(91754),f=n(72328);let h=(e=!1)=>{let{contextMenu:t}=(0,a.b)(),{minimize:n,open:h}=(0,o.N)(),{aiEnabled:p,setAiEnabled:g,stackOrder:w}=(0,s.w)(),v=(0,c.w)(),{fullscreenElement:b,toggleFullscreen:x}=(0,l.T)(),y=(0,m._)(),k=(0,f.i)();return(0,i.useMemo)(()=>t?.(()=>{let t=Object.entries(v.current),i=t.length>0&&!t.some(([,{minimized:e}])=>!e),a=[{action:()=>(0,u.UH)(v.current,w,n),label:e?"Desktop":i?"Show open windows":"Show the desktop"}];return e?a.unshift({action:()=>h("Terminal"),label:"Terminal"},d.kG,{action:()=>h("FileExplorer"),label:"File Explorer"},{action:()=>h("Run"),label:"Run"},d.kG):a.unshift({action:()=>x(),label:b===document.documentElement?"Exit full screen":"Enter full screen"},d.kG,...y&&!k?[{action:()=>g(!p),checked:p,label:`Show ${r.K1} button`},d.kG]:[]),a}),[p,t,b,y,k,n,e,h,v,g,w,x])}},81465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ex});var i=n(37876),r=n(14232),a=n(37989),o=n(18847),s=n.n(o),l=n(42771);let c=s()(()=>n.e(6850).then(n.bind(n,46850)),{loadableGenerated:{webpack:()=>[46850]}}),d=(0,r.memo)(()=>{let{processes:e={}}=(0,l.N)();return(0,i.jsx)(a.N,{initial:!1,presenceAffectsLayout:!1,children:Object.entries(e).map(([e,{closing:t,Component:n,hasWindow:r}])=>e&&n&&!t&&(0,i.jsx)(c,{Component:n,hasWindow:r,id:e},e))})});var u=n(77232);let m=u.default.main`
  background-color: transparent;
  contain: strict;
  height: 100vh;
  inset: 0;
  overflow: hidden;
  overscroll-behavior: none;
  position: fixed;
  width: 100vw;

  #loading-status {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 8px;
    box-shadow: 0 0 50px 1px #000;
    display: none;
    font-weight: 600;
    left: 50%;
    padding: 12px 15px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  > canvas {
    background-color: inherit;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;var f=n(79052),h=n(20067),p=n(4713),g=n(46711),w=n(70185),v=n(96856),b=n(16361),x=n(60109);let y=[];var k=n(44543);let E=({children:e})=>{let t=(0,r.useRef)(null);return(e=>{let{exists:t,lstat:i,readFile:a,readdir:o,updateFolder:s,writeFile:l}=(0,g.f)(),{sessionLoaded:c,setWallpaper:d,wallpaperImage:m,wallpaperFit:k}=(0,w.w)(),{colors:E}=(0,u.useTheme)(),[S]=(0,r.useMemo)(()=>m.split(" "),[m]),j="VANTA WIREFRAME"===m,$=(0,v.A)(h.vJ[S],void 0,j?"Wireframe":""),z=(0,r.useRef)(),C=(0,r.useRef)(!1),A=(0,r.useCallback)(t=>{e.current?.querySelector(h.sz)?.remove(),t||(e.current?.querySelector(h.j2)?.remove(),window.WallpaperDestroy?.()),"SLIDESHOW"!==S&&(document.documentElement.style.removeProperty("--after-background"),document.documentElement.style.removeProperty("--before-background"))},[e,S]),I=(0,r.useCallback)(async n=>{let i;if(!e.current||window.DEBUG_DISABLE_WALLPAPER)return;let{matches:r}=window.matchMedia("(prefers-reduced-motion: reduce)"),o=!window.top||window===window.top;if(!o)try{o=window.location.origin!==window.top?.location.origin}catch{o=!0}if("VANTA"===S)i={...p.$W,waveSpeed:p.$W.waveSpeed*(r?h.S7:1)},p.$W.material.options.wireframe=j||!o;else if(m.startsWith("MATRIX"))i={animationSpeed:r?h.S7:1,volumetric:m.endsWith("3D"),...o?{}:{fallSpeed:-.09,forwardSpeed:-.25}};else if("STABLE_DIFFUSION"===S){let e=`${b.zQ}/${b.sY}`;await t(e)&&(i={prompts:JSON.parse((await a(e))?.toString()||"[]")})}if(document.documentElement.style.setProperty("background",document.documentElement.style.background.replace(/".*"/,"")),A(n),!C.current&&"function"==typeof window.OffscreenCanvas&&$.current){let t={config:i,devicePixelRatio:1};if(n)$.current.postMessage(t);else{let n=(0,x.aH)(e.current);if($.current.postMessage({canvas:n,...t},[n]),"STABLE_DIFFUSION"===S){let t=document.createElement("div");t.id="loading-status",e.current?.append(t),window.WallpaperDestroy=()=>{t.remove(),window.WallpaperDestroy=void 0},$.current.addEventListener("message",({data:e})=>{"[error]"===e.type?d("VANTA"):e.type?t.textContent=e.message||"":e.message||(z.current=window.setTimeout(()=>I(!0),b.S4*(window.STABLE_DIFFUSION_DELAY_IN_MIN_OVERRIDE??h.vS))),t.style.display=e.message?"block":"none"})}else $.current.addEventListener("message",({data:e})=>{"[error]"===e.type&&(e.message.includes("getContext")?(C.current=!0,I()):d("SLIDESHOW"))})}}else if(h.cO[S]){let t=()=>d("VANTA"===S?"SLIDESHOW":"VANTA");h.cO[S]().then(({default:n})=>n?.(e.current,i,t)).catch(t)}else d("VANTA")},[e,t,a,A,d,j,m,S,$]),M=(0,r.useCallback)(async e=>(await o(e)).reduce(async(t,n)=>{let r=(0,f.join)(e,n);return[...await t,...(await i(r)).isDirectory()?await M(r):[b.O4.has((0,x.uQ)(r))&&!b.q$.has((0,x.uQ)(r))?r:""]].filter(Boolean)},Promise.resolve([])),[o,i]),T=(0,r.useCallback)(async()=>{let[,i]=/url\((.*)\)/.exec(document.documentElement.style.getPropertyValue((0,x.r3)()?"--before-background":"--after-background"))||[];i=i?.replace(/\\/g,""),i?.startsWith("blob:")&&(0,x.E)(i),A();let r="",o="",c=k,u="SLIDESHOW"===S;if(u){let e=`${b.zQ}/${b.QM}`;await t(e)||(await l(e,JSON.stringify(await t(b.zQ)?await M(b.zQ):"[]")),s(b.zQ,b.QM)),0===y.length&&y.push(...[...new Set(JSON.parse((await a(e))?.toString()||"[]"))].sort(()=>Math.random()-.5));do{r=y.shift()||"";let[e]=y;e&&(document.querySelector(`#${h._T}`)?.remove(),(0,x.NN)(e.startsWith("/")?`${window.location.origin}${e}`:e,h._T,"auto")),r.startsWith("/")&&(r=`${window.location.origin}${r}`)}while(i===r&&y.length>1);c="fill"}else if("APOD"===S){let[,,e]=m.split(" "),[t,,n,,i]=new Intl.DateTimeFormat(b.Xn,{timeZone:"US/Eastern"}).formatToParts(Date.now()).map(({value:e})=>e);if(e===`${i}-${t}-${n}`)return;let{date:a="",hdurl:s="",url:l=""}=await (0,x.t_)("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");if(s||l){if(r=((0,x.e8)()>1024?s:l)||l,c="fit",(0,x.t$)(r)){let e=`https://i.ytimg.com/vi/${(0,x.IP)(r)}`;r=`${e}/maxresdefault.jpg`,o=`${e}/hqdefault.jpg`}else s&&l&&s!==l&&(o=r===l?s:l);let e=`APOD ${r} ${a}`;e!==m&&(d(e,c),setTimeout(I,b.il))}}else if(await t(m)){let{decodeImageToBuffer:e}=await n.e(9868).then(n.bind(n,97487)),t=await a(m),i=await e((0,x.uQ)(m),t);r=(0,x.Zd)(i||t)}if(r)if(b.yH.has((0,x.uQ)(m))){let t=document.createElement("video");t.src=r,t.autoplay=!0,t.controls=!1,t.disablePictureInPicture=!0,t.disableRemotePlayback=!0,t.loop=!0,t.muted=!0,t.playsInline=!0,t.style.position="absolute",t.style.inset="0",t.style.width="100%",t.style.height="100%",t.style.objectFit="cover",t.style.objectPosition="center center",t.style.zIndex="-1",e.current?.append(t)}else{let e=e=>{let t=h.gF[c];if(u)try{let{searchParams:n}=new URL(e),{x:i,y:r}=Object.fromEntries(n.entries());t=`${(0,x.Si)(i)} ${(0,x.Si)(r)} / cover`}catch{}let n="tile"===c?"repeat":"no-repeat",i=window===window.top,r=(0,x.r3)();document.documentElement.style.setProperty(`--${r?"after":"before"}-background`,`url(${CSS.escape(e)}) ${t} ${n} fixed border-box border-box ${i?E.background:E.text}`),document.documentElement.style.setProperty("--after-background-opacity",r?"1":"0"),document.documentElement.style.setProperty("--before-background-opacity",r?"0":"1"),i||document.documentElement.style.setProperty("--background-blend-mode","difference")};if(o){let t=new Image;t.addEventListener("load",()=>e(r)),t.addEventListener("error",()=>e(o)),t.decoding="async",t.src=r}else e(r),u&&(z.current=window.setTimeout(T,b.cm))}else I()},[E,e,t,M,I,a,A,d,s,k,m,S,l]);(0,r.useEffect)(()=>{c&&(z.current&&window.clearTimeout(z.current),S&&!h.TY.includes(S)?T().catch(I):I())},[T,I,c,S]),(0,r.useEffect)(()=>{let t=()=>{if(!e.current||!h.cO[S])return;let t=e.current.getBoundingClientRect();$.current?.postMessage(t);let n=e.current.querySelector(h.j2);n instanceof HTMLCanvasElement&&(n.style.width=`${t.width}px`,n.style.height=`${t.height}px`)};return window.addEventListener("resize",t,{passive:!0}),()=>window.removeEventListener("resize",t)},[e,S,$])})(t),(0,i.jsxs)(m,{ref:t,children:[(0,i.jsx)(k.A,{url:b.Bn,allowMovingDraggableEntries:!0,hideLoading:!0,hideScrolling:!0,isDesktop:!0,loadIconsImmediately:!0}),e]})};var S=n(54239),j=n(89462);let $=u.default.div`
  color: ${({theme:e})=>e.colors.text};
  display: flex;
  font-size: ${({theme:e})=>e.sizes.clock.fontSize};
  height: 100%;
  line-height: ${b.D5-j.VY}px;
  max-width: ${({theme:e,$width:t})=>`calc(${t}px + ${2*e.sizes.clock.padding}px)`};
  min-width: ${({theme:e,$width:t})=>`calc(${t}px + ${2*e.sizes.clock.padding}px)`};
  padding: ${({theme:e})=>`0 ${e.sizes.clock.padding}px`};
  place-content: center;
  position: absolute;
  right: ${({theme:e,$hasAI:t})=>t?e.sizes.taskbar.ai.buttonWidth:0};
  white-space: nowrap;

  &:hover {
    background-color: ${({theme:e})=>e.colors.taskbar.hover};
  }

  &:active {
    background-color: ${({theme:e})=>e.colors.taskbar.foreground};
  }
`;var z=n(64148);let C={local:"Local",ntp:"Server"},A=7,I=()=>{A=7},M=async({target:e})=>{if(7===A&&e instanceof HTMLElement&&(e.removeEventListener("mouseleave",I),e.addEventListener("mouseleave",I,b.w3)),0==(A-=1)){let{spawnSheep:e}=await n.e(7970).then(n.bind(n,57970));e(),A=7}},T=(0,r.memo)(({hasAI:e,setClockWidth:t,toggleCalendar:a,width:o})=>{let[s,l]=(0,r.useState)(Object.create(null)),{date:c,time:d}=s,{clockSource:m}=(0,w.w)(),f=(0,r.useCallback)(()=>new Worker(n.tu(new URL(n.p+n.u(218),n.b)),{name:`Clock (${C[m]})`}),[m]),h=(0,r.useRef)(),p=(0,r.useMemo)(()=>"OffscreenCanvas"in window,[]),g=(0,r.useCallback)(({data:e,target:t})=>{"source"===e?t.postMessage(m):l(t=>h.current&&t.date===e.date?t:e)},[m]),y=(e=>{let{contextMenu:t}=(0,z.b)(),{clockSource:n,setClockSource:i}=(0,w.w)();return(0,r.useMemo)(()=>t?.(()=>{e(!1);let t="local"===n;return[{action:()=>i("local"),label:"Local time",toggle:t},{action:()=>i("ntp"),label:"Server time",toggle:!t}]}),[n,t,i,e])})(a),k=(0,v.A)(f,g),E=(0,r.useRef)({height:b.D5,width:o}),{formats:{systemFont:j},sizes:{clock:{fontSize:A}}}=(0,u.useTheme)(),I=(0,r.useCallback)(()=>Math.min(Math.max(b.li,Math.ceil((0,S.kD)("44:44:44",A,j))),1.5*b.li),[A,j]),T=(0,r.useCallback)(e=>{!h.current&&k.current&&e instanceof HTMLDivElement&&([...e.children].forEach(e=>e.remove()),E.current.width=I(),t(E.current.width),h.current=(0,x.aH)(e,window.devicePixelRatio,E.current),k.current.postMessage({canvas:h.current,devicePixelRatio:window.devicePixelRatio},[h.current]))},[k,s]),L=(0,r.useCallback)(e=>{M(e),a()},[a]);return((0,r.useEffect)(()=>{h.current=void 0},[m]),(0,r.useEffect)(()=>{if(p){let e=()=>window.matchMedia(`(resolution: ${window.devicePixelRatio}x)`).addEventListener("change",()=>{k.current?.postMessage({clockSize:E.current,devicePixelRatio:window.devicePixelRatio}),e()},b.w3);e()}else t(I())},[k,I,t,p]),d)?(0,i.jsx)($,{ref:p?T:void 0,$hasAI:e,$width:o,"aria-label":"Clock",onClick:L,role:"timer",title:c,suppressHydrationWarning:!0,...y,...b.W8,children:p?void 0:d}):null});var L=n(14113),D=n(3861);let R=(0,u.default)(D.A)`
  background-color: ${({$active:e,$highlight:t,theme:n})=>e&&(t?n.colors.taskbar.foreground:"hsla(0, 0%, 25%, 50%)")};
  display: flex;
  fill: ${({theme:e})=>e.colors.taskbar.button.color};
  height: 100%;
  left: ${({$left:e})=>e?`${e}px`:0};
  place-content: center;
  place-items: center;
  position: absolute;

  && {
    width: ${({theme:e})=>e.sizes.taskbar.button.width}px;
  }

  svg {
    height: ${({theme:e})=>e.sizes.taskbar.button.iconSize};
  }

  &:hover {
    background-color: ${({$active:e,theme:t})=>e?t.colors.taskbar.foreground:t.colors.taskbar.hover};

    svg {
      fill: ${({$highlight:e,theme:t})=>e?t.colors.highlight:void 0};
    }
  }

  &:active {
    background-color: hsla(0, 0%, 20%, 70%);

    svg {
      fill: ${({$highlight:e})=>e?"hsla(207, 100%, 60%, 80%)":void 0};
    }
  }
`;var N=n(4213),O=n(52921);let _=({searchVisible:e,toggleSearch:t})=>{let{sizes:{taskbar:n}}=(0,u.useTheme)();return(0,i.jsx)(R,{$active:e,$left:n.button.width,onClick:()=>t(),...b.WW,...(0,x.Pf)(N.BN),...(0,O.A)(),children:(0,i.jsx)(L.vj,{})})},P=(0,r.memo)(()=>(0,i.jsx)("svg",{viewBox:"0 0 588.42 568.88",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{className:"st0",d:"M483.009,360.176c-1.424-13.064-3.35-25.629-5.698-37.614c-5.947-30.987-14.822-58.301-23.956-81.165 c-19.686-48.919-41.045-77.566-41.045-77.566s9.886-14.242,12.484-67.52c0.248-3.682,0.331-7.453,0.417-11.478 c1.088-43.307-15.412-71.954-28.398-81.337c-5.861-4.352-10.973-4.688-13.404-0.753c-3.096,4.778-14.238,21.195-27.138,39.789 c-1.174,1.596-2.348,3.273-3.518,5.031c-21.028,30.406-45.07,64.748-45.07,64.748H256h-51.684c0,0-24.042-34.341-45.069-64.748 c-1.17-1.758-2.344-3.435-3.517-5.031C142.829,23.94,131.687,7.522,128.591,2.744c-2.429-3.935-7.542-3.599-13.404,0.753 c-12.986,9.383-29.486,38.03-28.398,81.337c0.086,4.025,0.168,7.796,0.417,11.478c2.597,53.278,12.483,67.52,12.483,67.52 s-21.359,28.648-41.045,77.566c-9.133,22.864-18.009,50.178-23.956,81.165c-2.347,11.984-4.274,24.55-5.697,37.614 c-0.086,0.589-0.086,1.26-0.168,1.849l1.174-0.09l0.667-0.081h1.006l47.078-2.928l-6.282,50.758l49.589-7.706l8.377,36.272 l36.309-19.142c11.607,31.143,26.868,70.678,33.257,81.075c10.938,17.85,35.02,12.754,52.534,2.561 c1.297-0.761,2.376-1.448,3.346-2.103c0.969,0.654,2.041,1.342,3.354,2.103c17.51,10.193,41.585,15.289,52.526-2.561 c6.389-10.406,21.743-49.974,33.424-81.116l36.386,19.184l8.377-36.272l49.589,7.706l-6.283-50.758l47.078,2.928h1.007l0.666,0.081 l1.174,0.09C483.094,361.436,483.094,360.765,483.009,360.176z M128.845,146.056c-12.823-14.814-18.21-50.93-13.866-67.839 c2.724-10.66,13.182-15.068,19.727-7.542c6.56,7.534,29.568,49.638,29.568,49.638S132.072,144.445,128.845,146.056z M168.045,329.386c0,0-13.96-29.318-16.753-40.484c34.901,0,48.865,19.543,54.448,25.13l8.376,18.152L168.045,329.386z M283.638,456.066c-10.671,13.596-20.635,14.022-27.642,14.022c-7.006,0-16.962-0.426-27.646-14.022 c-8.561-10.888-1.559-24.14,9.35-24.14c3.89,0,18.295,0,18.295,0s14.414,0,18.303,0 C285.212,431.926,292.218,445.178,283.638,456.066z M343.955,329.386l-46.072,2.798l8.377-18.152 c5.583-5.587,19.547-25.13,54.448-25.13C357.915,300.067,343.955,329.386,343.955,329.386z M383.143,146.056 c-3.223-1.611-35.42-25.743-35.42-25.743s23.003-42.104,29.555-49.638c6.548-7.526,17.003-3.117,19.739,7.542 C401.365,95.126,395.965,131.241,383.143,146.056z"})})),W=({startMenuVisible:e,toggleStartMenu:t})=>{let[a,o]=(0,r.useState)(!1),s=(0,r.useRef)(!1),l=(0,r.useCallback)(async()=>{if(s.current)return;s.current=!0;let e=(await n.e(3021).then(n.t.bind(n,93021,19))).default;e?.forEach(e=>(0,x.NN)(e)),o(!0)},[]),c=(0,r.useCallback)(async({ctrlKey:e,shiftKey:i})=>{if(a||l(),t(),e&&i){let{spawnSheep:e}=await n.e(7970).then(n.bind(n,57970));e()}},[l,a,t]);return(0,i.jsx)(R,{$active:e,onClick:c,onMouseOver:a?void 0:l,$highlight:!0,...b.WW,...(0,x.Pf)(N.r5),...(0,O.A)(!0),children:(0,i.jsx)(P,{})})},B=u.default.nav`

  background-color: rgba(0,0,0,0.6);
  bottom: 0;
  contain: size layout;
  height: ${b.D5}px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0vh;
  width: 100vw;
  z-index: 100000;
`,H=u.default.ol`
  column-gap: 1px;
  display: flex;
  height: 100%;
  left: ${({theme:e})=>2*e.sizes.taskbar.button.width}px;
  margin: 0 3px;
  overflow: hidden;
  position: absolute;
  right: ${({$clockWidth:e,$hasAI:t,theme:n})=>`calc(${e}px + ${2*n.sizes.clock.padding}px + ${t?n.sizes.taskbar.ai.buttonWidth:"0px"})`};
`,V=s()(()=>n.e(4381).then(n.bind(n,14381)),{loadableGenerated:{webpack:()=>[14381]}}),G=(0,r.memo)(({clockWidth:e,hasAI:t})=>{let{processes:n={}}=(0,l.N)();return(0,i.jsx)(H,{$clockWidth:e,$hasAI:t,children:(0,i.jsx)(a.N,{initial:!1,presenceAffectsLayout:!1,children:Object.entries(n).filter(([,{closing:e,hideTaskbarEntry:t}])=>!e&&!t).map(([e,{icon:t,title:n}])=>(0,i.jsx)(V,{icon:t,id:e,title:n},e))})})});var F=n(72328);let q=s()(()=>Promise.all([n.e(4587),n.e(6518)]).then(n.bind(n,46518)),{loadableGenerated:{webpack:()=>[46518]}}),U=s()(()=>Promise.all([n.e(4587),n.e(8441)]).then(n.bind(n,68441)),{loadableGenerated:{webpack:()=>[68441]}}),Q=s()(()=>n.e(8751).then(n.bind(n,28751)),{loadableGenerated:{webpack:()=>[28751]}}),Y=s()(()=>n.e(5486).then(n.bind(n,55486)),{loadableGenerated:{webpack:()=>[55486]}}),K=s()(()=>n.e(6292).then(n.bind(n,96292)),{loadableGenerated:{webpack:()=>[96292]}}),X=(0,r.memo)(()=>{let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1),[u,m]=(0,r.useState)(b.li),{aiEnabled:f}=(0,w.w)(),h=(0,F.i)(),p=(0,r.useCallback)(e=>t(t=>e??!t),[]),g=(0,r.useCallback)(e=>o(t=>e??!t),[]),v=(0,r.useCallback)(e=>l(t=>e??!t),[]),x=(0,r.useCallback)(e=>d(t=>e??!t),[]),y=h||f;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.N,{initial:!1,presenceAffectsLayout:!1,children:[e&&(0,i.jsx)(K,{toggleStartMenu:p},"startMenu"),n&&(0,i.jsx)(Y,{toggleSearch:g},"search")]}),(0,i.jsxs)(B,{...(0,O.A)(),...b.W8,children:[(0,i.jsx)(W,{startMenuVisible:e,toggleStartMenu:p}),(0,i.jsx)(_,{searchVisible:n,toggleSearch:g}),(0,i.jsx)(G,{clockWidth:u,hasAI:y}),(0,i.jsx)(T,{hasAI:y,setClockWidth:m,toggleCalendar:v,width:u}),y&&(0,i.jsx)(q,{aiVisible:c,toggleAI:x})]}),(0,i.jsxs)(a.N,{initial:!1,presenceAffectsLayout:!1,children:[s&&(0,i.jsx)(Q,{toggleCalendar:v},"calendar"),c&&(0,i.jsx)(U,{toggleAI:x},"aiChat")]})]})}),J=(0,u.keyframes)`
  0% { content: "[    0.000000] Booting ArcangelOS..." }
  17% { content: "[    0.000000] Booting ArcangelOS... \\00000a [    0.001234] Initializing kernel version 1.0.0... \\00000a" }
  27% { content: "[    0.000000] Booting ArcangelOS... \\00000a [    0.001234] Initializing kernel version 1.0.0... \\00000a [    0.005678] Detecting hardware configuration... \\00000a [    0.020000] Initializing system services... \\00000a [    0.025678] Starting systemd version 245... " }
  36% { content: "[    0.000000] Booting ArcangelOS... \\00000a [    0.001234] Initializing kernel version 1.0.0... \\00000a [    0.005678] Detecting hardware configuration... \\00000a [    0.020000] Initializing system services... \\00000a [    0.025678] Starting systemd version 245... \\00000a [    0.015678] Storage: 1TB SSD \\00000a [    0.018765] Network: Ethernet interface found \\00000a [    0.010000] CPU: AMD Ryzen 7 3700X @ 3.60GHz \\00000a [    0.012345] Memory: 16GB DDR4 RAM detected" }
  42% { content: "[    0.018765] Network: Ethernet interface found \\00000a [    0.010000] CPU: AMD Ryzen 7 3700X @ 3.60GHz \\00000a [    0.012345] Memory: 16GB DDR4 RAM detected \\00000a [    0.030000] Mounting filesystems... \\00000a [    0.035678] /dev/sda1 mounted as root \\00000a [    0.038765] Loading kernel modules... \\00000a [    0.050000] Starting network manager... \\00000a [    0.055678] Network manager started successfully" }
  49% { content: "[    0.060000] Starting security services... \\00000a [    0.065678] Firewall: iptables active \\00000a [    0.070000] Loading user-space applications... \\00000a [    0.075678] Starting graphical interface... \\00000a [    0.080000] Display: NVIDIA GeForce GTX 1080 detected" }
  60% { content: " [    0.075678] Starting graphical interface... \\00000a [    0.080000] Display: NVIDIA GeForce GTX 1080 detected \\00000a [    0.085678] Initializing display services... \\00000a [    0.090000] ArcangelOS is ready! \\00000a [    0.095678] All systems operational. \\00000a NET: Registered protocol family 31 \\00000a Bluetooth: HCI device and connection manager initialized" }
  66% { content: "[    0.095678] All systems operational. \\00000a NET: Registered protocol family 31 \\00000a Bluetooth: HCI device and connection manager initialized \\00000a iwlwifi 0000:03:00.0: Detected Intel(R) Centrino(R) Wireless-N 2230 BGN, REV=0xC8 \\00000a iwlwifi 0000:03:00.0: L1 Enabled - LTR Disabled \\00000a Bluetooth: L2CAP socket layer initialized \\00000a Bluetooth: HCI socket layer initialized \\00000a [drm] Supports vblank timestamp caching Rev 2 (21.10.2013). \\00000a" }
  78% { content: "Bluetooth: HCI socket layer initialized \\00000a [drm] Supports vblank timestamp caching Rev 2 (21.10.2013). \\00000a [drm] Driver supports precise vblank timestamp query. \\00000a vgaarb: device changed decodes: PCI:0000:00:02.0,olddecodes=io+mem,decodes=none:owns=io+mem \\00000a gpio_ich: GPIO from 436 to 511 on gpio_ich \\00000a cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time) \\00000a cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A) \\00000a" }
  100% { content: "cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time) \\00000a cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (300 mBi, 2000 mBm), (N/A) \\00000a ip6_tables: (C) 2000-2006 Netfilter Core Team \\00000a bridge: automatic filtering via arp/ip/ip6tables has been deprecated. Update your scripts to load br_netfilter if you need this. \\00000a device virbr0-nic entered promiscuous mode \\00000a nf_conntrack version 0.5.0 (16384 buckets, 65536 max) \\00000a [OK] SYSTEM READY! \\00000a" }
`,Z=(0,u.keyframes)`
  0% { opacity: 0 }
  100% { opacity: 1 }
`,ee=(0,u.keyframes)`
  0% { --num: 0 }
  22% { --num: 22 }
  45% { --num: 45 }
  60% { --num: 66 }
  80% { --num: 78 }
  92% { --num: 89 }
  100% { --num: 100 }
`,et=(0,u.keyframes)`
  0% { width: 0% }
  22% { width: 22% }
  45% { width: 45% }
  60% { width: 66% }
  80% { width: 78% }
  92% { width: 89% }
  100% { width: 100% }
`,en=(0,u.keyframes)`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
`,ei=u.default.div`
  display: flex;
  height: 100vh;
  width: 95vw;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: white;
  overflow: hidden;
`,er=u.default.div`
  display: flex;  
  flex-direction: column;
  width: 80%;
  animation: ${Z} 1s ease-in-out;
`,ea=u.default.div`
  display: flex;
      margin-bottom: 0.5vw;
`,eo=u.default.p`
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.3rem;
`,es=u.default.div`
  font-size: 24px;
  animation: ${en} 1s linear infinite;
margin: -0.5em;
    margin-left: 0.5vw;
    left: 2vw;
    font-size: 24px;
    height: -moz-fit-content;

`,el=u.default.p`
  counter-reset: num var(--num);
  margin-left: auto;
  transition: --num 5s;
  animation: ${ee} 14s ease-in-out;
  font-family: 'Orbitron', sans-serif;
  animation-fill-mode: forwards;

  &::before {
    font-family: 'Orbitron', sans-serif;
    content: counter(num);
  }
`,ec=u.default.div`
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 3px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
`,ed=u.default.div`
  height: 0.6rem;
  margin: 1px 0px;
  background: white;
  animation: ${et} 14s ease-in-out;
  animation-fill-mode: forwards;
`,eu=u.default.div`
  margin-top: 0.5rem;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  height: 1.2rem;
`,em=u.default.div`
  width: 1rem;
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;
  border-radius: 3px;
`,ef=u.default.div`
  margin-left: auto;
  display: flex;
  align-items: end;
  margin-top: 5rem;

  &::after {
    height: 5rem;
    font-size: 12px;
    white-space: pre;
    text-align: end;
    color: #b5b5b5;
    content: "Initializing system . . ."; // Text can be updated dynamically if needed
    animation: ${J} 14s ease;
    animation-fill-mode: forwards;
  }
`,eh=(0,u.createGlobalStyle)`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

  @property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }
`,ep=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eh,{}),(0,i.jsx)(ei,{children:(0,i.jsxs)(er,{children:[(0,i.jsxs)(ea,{children:[(0,i.jsx)(eo,{children:"LOADING"}),(0,i.jsx)(es,{children:"∴"}),(0,i.jsx)(el,{children:"%"})]}),(0,i.jsx)(ec,{children:(0,i.jsx)(ed,{})}),(0,i.jsxs)(eu,{children:[(0,i.jsx)(em,{children:"!"}),"\xa0 ARCANGEL-OS, v6.1. PLEASE WAIT"]}),(0,i.jsx)(ef,{})]})})]});var eg=n(52179),ew=n(17786),ev=n(91372);let eb=e=>e.startsWith("http://")||e.startsWith("https://")||e.startsWith("chrome://"),ex=(0,r.memo)(()=>{let[e,t]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},15e3);return()=>clearTimeout(e)},[]),(()=>{let{setForegroundId:e}=(0,w.w)(),t=(0,ew.w)();(0,r.useEffect)(()=>{let n=()=>{if(document.activeElement instanceof HTMLIFrameElement){let[n]=Object.entries(t.current).find(([,{componentWindow:e}])=>e?.contains(document.activeElement))||[];n&&(e(n),window.addEventListener("click",({target:n})=>{let[i=""]=Object.entries(t.current).find(([,{componentWindow:e}])=>n instanceof HTMLElement&&e?.contains(n))||[];e(i)},b.w3))}};return window.addEventListener("blur",n,{passive:!0}),()=>window.removeEventListener("blur",n)},[t,e])})(),(()=>{let{exists:e,fs:t}=(0,g.f)(),{open:n}=(0,l.N)(),i=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(i.current||!t||!e||!n)return;i.current=!0;let r=(0,x.ov)("app"),a=(0,x.ov)("url"),o=async t=>{if(!t)return;let i=!1;try{i="Browser"===t&&eb(a)||await e(a)}catch{}("FileExplorer"!==t||!a||i)&&n(t,i?{url:a}:void 0)};if(r)o(Object.fromEntries(Object.entries(ev.A).filter(([,{dialogProcess:e}])=>!e).map(([e])=>[e.toLowerCase(),e]))[r.toLowerCase()]);else if(a){let e=(0,x.uQ)(a);o(eb(a)?"Browser":e?(0,S.YD)(e):"FileExplorer")}},[e,t,n])})(),(0,eg.A)(),(0,r.useEffect)(()=>{let e=e=>{e.error?.stack?.includes("eval at <anonymous>")&&(0,x.CH)(e)};return window.addEventListener("error",e),()=>window.removeEventListener("error",e)},[]),e)?(0,i.jsx)(ep,{}):(0,i.jsxs)(E,{children:[(0,i.jsx)(X,{}),(0,i.jsx)(d,{})]})})},89462:(e,t)=>{"use strict";t.VY=void 0,new Intl.DateTimeFormat("en",{day:"numeric",month:"long",year:"numeric"}),new Intl.DateTimeFormat("en",{hour:"numeric",hour12:!1,minute:"2-digit",second:"2-digit"}),new Intl.DateTimeFormat("en",{weekday:"long"}),t.VY=1},96856:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var i=n(14232);let r=(e,t,n)=>{let r=(0,i.useRef)();return(0,i.useEffect)(()=>(e&&!r.current&&(r.current=e(n),t&&r.current.addEventListener("message",t,{passive:!0}),r.current.postMessage("init")),()=>{r.current?.terminate(),r.current=void 0}),[t,n,e]),r}}},e=>{e.O(0,[4543,636,6593,8792],()=>e(e.s=16760)),_N_E=e.O()}]);