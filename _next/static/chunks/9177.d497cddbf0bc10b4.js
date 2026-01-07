"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,9177],{39177:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o=r(74848),i=r(33540);let a=i.default.div`
  display: flex;
  height: 100%;
  width: 100%;

  .video-js {
    height: 100%;
    width: 100%;

    .vjs-big-play-button {
      display: none;
    }

    .vjs-control-bar {
      background-color: rgb(240, 240, 240);
      padding: 0 1;

      &:not(.no-interaction) {
        display: flex !important;
        opacity: 100% !important;
      }

      .no-interaction {
        display: none !important;
        opacity: 0% !important;
        pointer-events: none !important;
      }
    }

    &.vjs-youtube,
    &.vjs-fullscreen.vjs-user-inactive {
      .vjs-control-bar {
        opacity: 0% !important;
      }
    }

    .vjs-button {
      color: rgb(116, 116, 116);
      height: 28px;
      position: relative;
      width: 28px;
      z-index: 0;

      &::after {
        background-color: rgb(225, 225, 225);
        border: 1px solid rgb(173, 173, 173);
        content: "";
        height: calc(100% - 4px);
        left: 0;
        margin: 2px 0 0 2px;
        position: absolute;
        top: 1px;
        width: calc(100% - 4px);
        z-index: -1;
      }

      &:hover {
        &::after {
          background-color: rgb(229, 241, 251);
          border-color: rgb(0, 120, 215);
        }
      }

      &:active {
        &::after {
          background-color: rgb(204, 228, 247);
          border-color: rgb(0, 84, 153);
        }
      }
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }

    .vjs-current-time {
      padding-left: 8px;
      padding-right: 2px;
    }

    .vjs-duration {
      padding-left: 2px;
      padding-right: 8px;
    }

    .vjs-current-time-display,
    .vjs-duration-display {
      color: #000;
      font-family: sans-serif;
      font-size: 11px;
    }

    .vjs-picture-in-picture-control {
      margin: 0 -2px;
    }

    .vjs-load-progress {
      border-radius: 5px;

      div {
        background: linear-gradient(
          180deg,
          rgb(189, 189, 189) 0%,
          rgb(219, 219, 219) 100%
        );
        border-radius: 5px;
      }
    }

    .vjs-play-progress {
      background: linear-gradient(
        180deg,
        rgb(44, 137, 224) 0%,
        rgb(40, 125, 204) 100%
      );
      border-radius: 5px;

      &::before {
        color: rgb(237, 237, 237);
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
        top: 1px;
      }
    }

    .vjs-progress-holder {
      border-radius: 5px;
      font-size: 1.7em !important;
      height: 9px;
    }

    .vjs-volume-control {
      background-color: rgb(240, 240, 240);
      border-radius: 5px 5px 0 0;
      left: -28px !important;
      position: relative;

      .vjs-volume-bar {
        height: 5.5em;
        margin: 1.5em auto;
      }

      .vjs-volume-level {
        background: linear-gradient(
          180deg,
          rgb(247, 76, 100) 0%,
          rgb(125, 210, 125) 50%
        );
        border-radius: 5px;
        color: rgb(237, 237, 237);
        font-size: 1.5em;
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
      }
    }

    .vjs-volume-panel {
      width: 28px !important;
    }

    .vjs-fullscreen-control,
    .vjs-play-control {
      .vjs-icon-placeholder {
        &::before {
          font-size: 2.4em;
          top: -5px;
        }
      }

      &.vjs-ended {
        .vjs-icon-placeholder {
          &::before {
            font-size: 2.3em;
            top: -3px;
          }
        }
      }
    }

    .vjs-poster {
      background-size: contain;
    }

    video {
      background-image: url("/System/Icons/48x48/vlc.webp");
      background-position: center calc(50% - 15px);
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }
  }
`;var n=r(16286),l=r(96540);let s="video/youtube",d={1:4,2:2,3:1,4:.5},p={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}},c=[360,640],u=[480,854],h={auto:c,hd1080:[1080,1920],hd1440:[1440,2560],hd2160:[2160,3840],hd720:[720,1280],highres:u,large:u,medium:c,small:[240,426],tiny:[144,256]};var g=r(55650),b=r(85531),m=r(41017),v=r(62104),x=r(48060),f=r(37e3);let y=({containerRef:e,id:t,loading:r,setLoading:o,url:i})=>{let{readFile:a}=(0,m.f)(),{argument:u,linkElement:y,processes:{[t]:{closing:w=!1,libs:k=[]}={}}}=(0,v.N)(),{updateWindowSize:j}=(0,b.A)(t),[T,z]=(0,l.useState)(),[$,A]=(0,l.useState)(),{prependFileToTitle:L}=(0,g.A)(t),M=(0,l.useCallback)(()=>{let{src:e=[]}=T?.getMedia()||{};if(Array.isArray(e)&&e.length>0){let[{src:t,url:r}]=e;t.startsWith("blob:")&&(r!==i||w)&&(0,f.E)(t)}},[w,T,i]),B=(0,l.useMemo)(()=>(0,f.t$)(i),[i]),E=(0,l.useCallback)(async()=>{M();let e=B?s:(0,f.hH)(i)||x.dU;return{src:B?i:(0,f.Zd)(await a(i),(0,f.nr)()?e:void 0),type:e,url:i}},[M,B,a,i]),C=(0,l.useRef)(!1),H=(0,l.useCallback)(()=>{let[r]=e.current?.childNodes??[],i=window.videojs(r,p,()=>{i.on("play",()=>{if(C.current)return;C.current=!0;let{ytPlayer:e}=i.tech_||{};e&&A(e);let[t,r]=e?h[e.getPlaybackQuality()]||c:[i.videoHeight(),i.videoWidth()],[o,a]=[(0,f.Bv)(),(0,f.e8)()];if(t&&r){let i=t+(e?0:30);i>o||r>a?j(Math.floor(i/r*a),Math.min(r,a)):j(i,r)}});let a=()=>{try{i.isFullscreen()?i.exitFullscreen():i.requestFullscreen()}catch{}};r.addEventListener("dblclick",a),r.addEventListener("mousewheel",e=>{i.volume(i.volume()+(e.deltaY>0?-.1:.1))},{passive:!0}),e.current?.closest("section")?.addEventListener("keydown",({key:e,altKey:t,ctrlKey:r})=>{if(t)d[e]?j(i.videoHeight()/d[e],i.videoWidth()/d[e]):"Enter"===e&&a();else if(!r)switch(e){case" ":i.paused()?i.play():i.pause();break;case"ArrowUp":i.volume(i.volume()+.1);break;case"ArrowDown":i.volume(i.volume()-.1);break;case"ArrowLeft":i.currentTime(i.currentTime()-10);break;case"ArrowRight":i.currentTime(i.currentTime()+10)}}),z(i),o(!1),B||y(t,"peekElement",r),u?.(t,"play",()=>i.play()),u?.(t,"pause",()=>i.pause()),u?.(t,"paused",e=>(e&&(i.on("pause",()=>e(!0)),i.on("play",()=>e(!1))),i.paused()))})},[u,e,t,B,y,o,j]),R=(0,l.useCallback)(t=>{let r=e.current?.querySelector(".vjs-control-bar");r instanceof HTMLElement&&(t===s?r.classList.add("no-interaction"):r.classList.remove("no-interaction"))},[e]),N=(0,l.useCallback)(async()=>{if(T&&i)try{let e=await E();C.current=!1,T.src(e),R(e.type),L(B?$?.videoTitle||"YouTube":(0,n.basename)(i))}catch{}},[E,B,R,T,L,i,$]);(0,l.useEffect)(()=>(r&&!T&&(0,f.aY)(k).then(()=>{"function"==typeof window.videojs&&H()}),()=>{w&&(M(),T?.dispose())}),[M,w,k,H,r,T]),(0,l.useEffect)(()=>{!r&&!w&&T&&i&&N()},[w,N,r,T,i])};var w=r(14153);let k=({id:e})=>(0,o.jsx)(w.A,{StyledComponent:a,id:e,useHook:y,children:(0,o.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})},14153:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(74848),i=r(96540),a=r(51583),n=r(8218),l=r(62104);let s=(0,i.memo)(({id:e,useHook:t,StyledComponent:r,children:s})=>{let{processes:{[e]:{url:d=""}={}}}=(0,l.N)(),p=(0,i.useRef)(null),[c,u]=(0,i.useState)(!0),h=(0,i.useMemo)(()=>({contain:"strict",visibility:c?"hidden":"visible"}),[c]);return t({containerRef:p,id:e,loading:c,setLoading:u,url:d}),(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsx)(a.default,{}),(0,o.jsx)(r,{ref:p,style:h,...(0,n.A)({id:e}),children:s})]})})},51583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(33540);let i=o.default.div`
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
`},8218:(e,t,r)=>{r.d(t,{A:()=>g});var o=r(16286),i=r(96540),a=r(51780),n=r(16091),l=r(13296),s=r(41017),d=r(62104),p=r(1364),c=r(48060),u=r(37e3),h=r(96119);let g=({callback:e,directory:t=c.Bn,id:r,onDragLeave:g,onDragOver:b,updatePositions:m})=>{let{url:v}=(0,d.N)(),x=(0,h.w)(),{iconPositions:f,sortOrders:y,setIconPositions:w}=(0,p.w)(),{exists:k,mkdirRecursive:j,updateFolder:T,writeFile:z}=(0,s.f)(),$=(0,i.useCallback)(async(e,t,i)=>{if(r){if(t){let a=(0,o.join)(c.Bn,e);if(await j(c.Bn),await z(a,t,!0))return i===l.z.UPDATE_URL&&v(r,a),T(c.Bn,e),(0,o.basename)(a)}else i===l.z.UPDATE_URL&&v(r,e)}return""},[r,j,T,v,z]),{openTransferDialog:A}=(0,a.A)();return{onDragLeave:g,onDragOver:e=>{b?.(e),(0,u.CH)(e)},onDrop:i=>{if(c.jj.has((0,u.uQ)(t)))return;if(m&&i.target instanceof HTMLElement){let{files:e,text:r}=(0,n.bn)(i);if(0===e.length&&""===r)return;(async()=>{let a={x:i.clientX,y:i.clientY},n=[];if(r){try{n=JSON.parse(r)}catch{}if(!Array.isArray(n))return;let[e]=n;if(!e||e.startsWith(t)&&(0,o.basename)(e)===(0,o.relative)(t,e))return;n=n.map(e=>(0,o.basename)(e))}else e instanceof FileList?n=[...e].map(e=>e.name):n=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);n=await Promise.all(n.map(async e=>{let r=`${t}/${e}`;if(!f[r]||!await k(r))return e;let i=0;do i+=1,r=`${t}/${(0,o.basename)(e,(0,o.extname)(e))} (${i})${(0,o.extname)(e)}`;while(f[r]&&await k(r));return(0,o.basename)(r)})),(0,u.$Y)(t,i.target,f,y,a,n,w,k)})()}let a="string"==typeof r;a&&!m&&t===c.Bn&&x.current[r]?.componentWindow?.focus(c.VD),(0,n.nX)(i,e||$,t,A,a)}}}},79808:(e,t,r)=>{r.d(t,{Ay:()=>l,EX:()=>i,Ho:()=>o,WB:()=>a,lH:()=>n});let o={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},a=30,n=166,l={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${a}px`,minWidth:`${n}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}}},36864:(e,t,r)=>{r.d(t,{Gn:()=>n,Ve:()=>d,WZ:()=>p,Xc:()=>s,r_:()=>l});var o=r(79808),i=r(48060),a=r(37e3);let n=(e,t,r=[],o=0)=>{let[n]=e.split(i.QB),l=`${n}${i.QB}`,s=r.find(e=>e.startsWith(l))||"",{componentWindow:d}=t?.[s]||{},{x:p=0,y:c=0,width:u=0,height:h=0}=d?.getBoundingClientRect()||{};return!(p+o+u>(0,a.e8)()||c+o+h>(0,a.Bv)())&&(p||c)?{x:p+o,y:c+o}:void 0},l=({height:e,width:t})=>{let[r,o]=[(0,a.Bv)(),(0,a.e8)()];return{x:Math.floor(o/2-(0,a.kl)(t)/2),y:Math.floor((r-i.D5)/2-(0,a.kl)(e)/2)}},s={BOTTOM:15,LEFT:150,RIGHT:50,TOP:0},d=(e,t,r=!1)=>{let{position:o,size:i}=e||{},{x:n=0,y:l=0}=o||{},{height:d=0,width:p=0}=i||{};return r?n+s.RIGHT>t.x||n+(0,a.kl)(p)-s.LEFT<0||l+s.BOTTOM>t.y||l+s.TOP<0:n<0||l<0||n+(0,a.kl)(p)>t.x||l+(0,a.kl)(d)>t.y},p=(e,t)=>{let r=Number(e.height-50),n=Number(e.width),[l,s]=[(0,a.Bv)(),(0,a.e8)()],d=l-i.D5-15,p=Math.max(o.WB,Math.min(r,d)),c=Math.max(o.lH,Math.min(n,s));if(!t)return{height:p,width:c};let u=r===p,h=n===c;return u||h?u?h?{height:p,width:c}:{height:Math.round(p/(n/c)),width:c}:{height:p,width:Math.round(c/(r/p))}:r>n?{height:p,width:Math.round(c/(d/p))}:{height:Math.round(p/(s/c)),width:c}}},55650:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(96540),i=r(62104),a=r(25573),n=r(48060);let l=e=>{let{title:t}=(0,i.N)(),[r]=e.split(n.QB),{title:l}=a.A[r]||{};return{appendFileToTitle:(0,o.useCallback)((r,o)=>{let i=r?` - ${r}${o?` ${n.g6}`:""}`:"";t(e,`${l}${i}`)},[e,l,t]),prependFileToTitle:(0,o.useCallback)((r,o,i)=>{let a=r?`${o?`${n.g6} `:""}${r}${i?" ":" - "}`:"";t(e,`${a}${l}`)},[e,l,t])}}},85531:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(33540),i=r(96540),a=r(36864),n=r(62104),l=r(1364);let s=e=>{let{setWindowStates:t}=(0,l.w)(),{processes:{[e]:{lockAspectRatio:r=!0,maximized:s=!1}={}}={}}=(0,n.N)(),{sizes:{titleBar:d}}=(0,o.useTheme)();return{updateWindowSize:(0,i.useCallback)((o,i)=>t(t=>({...t,[e]:{...t?.[e],maximized:s,size:(0,a.WZ)({height:o+d.height,width:i},r)}})),[e,r,s,t,d.height])}}}}]);