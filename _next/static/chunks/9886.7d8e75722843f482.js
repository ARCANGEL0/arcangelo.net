"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197,9886],{99886:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var n=r(74848),a=r(16286),s=r(96540);let i=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})})),l=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})})),o=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})})),c=(0,s.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})}));var u=r(33540),d=r(57725);let h="48px",f="32px",m=u.default.div`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${f};
  padding-top: ${h};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${f} ${f};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    div {
      color: rgb(167, 167, 167);
      font-size: 13px;
      padding: 0 38px;
      text-align: center;
    }

    img {
      display: ${({$showImage:e})=>e?"block":"none"};
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${h};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${h};
      width: ${h};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 50%);
      }

      &:active {
        background-color: rgba(100, 100, 100, 50%);
      }
    }
  }

  &.drop {
    ${(0,d.A)("Drop photo file here","#fff")};
  }
`;var p=r(35568),g=r(90925),w=r(62104),v=r(55650);let b={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1},x=(e,t,r)=>{let[n,i]=(0,s.useState)(),{getScale:l,reset:o,zoomIn:c,zoomOut:u,zoomToPoint:d,zoomWithWheel:h}=n||{},{processes:{[e]:f}}=(0,w.N)(),{closing:m,componentWindow:x,url:y=""}=f||{},{prependFileToTitle:j}=(0,v.A)(e),A=(0,s.useCallback)(e=>{let{detail:{scale:t=0,x:r=0,y:s=0}={}}=e||{};if(y&&t){let{minScale:e,step:i}=b,l=t<e+i;l&&(r||s)&&window.setTimeout(()=>n?.reset(),50),m||j(l?(0,a.basename)(y):`${(0,a.basename)(y)} (${Math.floor(100*t)}%)`)}},[m,n,j,y]),E=(0,s.useCallback)(e=>h?.(e,{step:.3}),[h]);return(0,g.A)(x,o),(0,s.useEffect)(()=>(t&&r&&(t.addEventListener("panzoomchange",A),r.addEventListener("wheel",E)),()=>{t?.removeEventListener("panzoomchange",A),r?.removeEventListener("wheel",E)}),[r,t,A,E]),(0,s.useEffect)(()=>(t&&!n&&i((0,p.A)(t,b)),()=>n?.destroy()),[t,n]),{reset:o,scale:l?.(),zoomIn:c,zoomOut:u,zoomToPoint:d}};var y=r(8218),j=r(41017),A=r(17927),E=r(75892),T=r(87952),$=r(48060),L=r(37e3),k=r(30197);let{maxScale:C,minScale:z}=b,B=({id:e})=>{let{processes:{[e]:t}={},url:r}=(0,w.N)(),{componentWindow:u,closing:d=!1,url:h=""}=t||{},[f,p]=(0,s.useState)({}),[g,b]=(0,s.useState)(!1),{prependFileToTitle:B}=(0,v.A)(e),{readFile:H,readdir:P}=(0,j.f)(),I=(0,s.useRef)(null),M=(0,s.useRef)(null),R=(0,s.useRef)(null),{reset:q,scale:D,zoomIn:S,zoomOut:U,zoomToPoint:N}=x(e,M.current,R.current),{fullscreenElement:O,toggleFullscreen:F}=(0,A.T)(),_=(0,s.useCallback)(async()=>{let e=await H(h),t=(0,L.uQ)(h),r=await (0,k.decodeImageToBuffer)(t,e);p(t=>{let[n]=Object.keys(t);if(n){if(n===h)return t;q?.()}return{[h]:(0,L.Zd)(r||e,(0,L.hH)(h))}}),B((0,a.basename)(h))},[B,H,q,h]),W=(0,s.useCallback)(async({key:t})=>{switch(t){case"ArrowRight":case"ArrowLeft":{let n=await P((0,a.dirname)(h)),s=n.indexOf((0,a.basename)(h)),i=(t,s)=>{if(-1===t)return;let l=t+(s?1:-1);if(-1===l||l===n.length)return;let o=n[l];$.O4.has((0,L.uQ)(o))?r(e,(0,a.join)((0,a.dirname)(h),o)):i(l,s)};i(s,"ArrowRight"===t)}}},[e,P,r,h]);return(0,s.useEffect)(()=>{!h||f[h]||d||_()},[d,_,f,h]),(0,s.useEffect)(()=>(u?.addEventListener("keydown",W),()=>u?.removeEventListener("keydown",W)),[u,W]),(0,n.jsxs)(m,{ref:I,$showImage:!!(f[h]&&!g),className:h?"":"drop",onContextMenu:L.CH,...(0,y.A)({id:e}),children:[(0,n.jsxs)("nav",{className:"top",children:[(0,n.jsx)(T.A,{disabled:!h||D===C||g,onClick:S,...(0,L.Pf)("Zoom in"),children:(0,n.jsx)(o,{})}),(0,n.jsx)(T.A,{disabled:!h||D===z||g,onClick:U,...(0,L.Pf)("Zoom out"),children:(0,n.jsx)(c,{})})]}),(0,n.jsxs)("figure",{ref:R,...(0,E.A)(e=>{D===z?N?.(2*z,e,{animate:!0}):q?.()}),children:[(0,n.jsx)("img",{ref:M,alt:(0,a.basename)(h,(0,a.extname)(h)),decoding:"async",loading:"eager",onError:()=>b(!0),onLoad:()=>b(!1),src:f[h],...$.rJ}),g&&(0,n.jsxs)("div",{children:[(0,a.basename)(h),(0,n.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,n.jsx)("nav",{className:"bottom",children:(0,n.jsx)(T.A,{disabled:!h,onClick:()=>F(I.current,"show"),...(0,L.Pf)("Full-screen"),children:O===I.current?(0,n.jsx)(l,{}):(0,n.jsx)(i,{})})})]})}},8218:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(16286),a=r(96540),s=r(51780),i=r(16091),l=r(13296),o=r(41017),c=r(62104),u=r(1364),d=r(48060),h=r(37e3),f=r(96119);let m=({callback:e,directory:t=d.Bn,id:r,onDragLeave:m,onDragOver:p,updatePositions:g})=>{let{url:w}=(0,c.N)(),v=(0,f.w)(),{iconPositions:b,sortOrders:x,setIconPositions:y}=(0,u.w)(),{exists:j,mkdirRecursive:A,updateFolder:E,writeFile:T}=(0,o.f)(),$=(0,a.useCallback)(async(e,t,a)=>{if(r){if(t){let s=(0,n.join)(d.Bn,e);if(await A(d.Bn),await T(s,t,!0))return a===l.z.UPDATE_URL&&w(r,s),E(d.Bn,e),(0,n.basename)(s)}else a===l.z.UPDATE_URL&&w(r,e)}return""},[r,A,E,w,T]),{openTransferDialog:L}=(0,s.A)();return{onDragLeave:m,onDragOver:e=>{p?.(e),(0,h.CH)(e)},onDrop:a=>{if(d.jj.has((0,h.uQ)(t)))return;if(g&&a.target instanceof HTMLElement){let{files:e,text:r}=(0,i.bn)(a);if(0===e.length&&""===r)return;(async()=>{let s={x:a.clientX,y:a.clientY},i=[];if(r){try{i=JSON.parse(r)}catch{}if(!Array.isArray(i))return;let[e]=i;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;i=i.map(e=>(0,n.basename)(e))}else e instanceof FileList?i=[...e].map(e=>e.name):i=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);i=await Promise.all(i.map(async e=>{let r=`${t}/${e}`;if(!b[r]||!await j(r))return e;let a=0;do a+=1,r=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${a})${(0,n.extname)(e)}`;while(b[r]&&await j(r));return(0,n.basename)(r)})),(0,h.$Y)(t,a.target,b,x,s,i,y,j)})()}let s="string"==typeof r;s&&!g&&t===d.Bn&&v.current[r]?.componentWindow?.focus(d.VD),(0,i.nX)(a,e||$,t,L,s)}}}},55650:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),a=r(62104),s=r(25573),i=r(48060);let l=e=>{let{title:t}=(0,a.N)(),[r]=e.split(i.QB),{title:l}=s.A[r]||{};return{appendFileToTitle:(0,n.useCallback)((r,n)=>{let a=r?` - ${r}${n?` ${i.g6}`:""}`:"";t(e,`${l}${a}`)},[e,l,t]),prependFileToTitle:(0,n.useCallback)((r,n,a)=>{let s=r?`${n?`${i.g6} `:""}${r}${a?" ":" - "}`:"";t(e,`${s}${l}`)},[e,l,t])}}},75892:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),a=r(48060);let s=(e,t=!1)=>{let r=(0,n.useRef)(),s=(0,n.useRef)(0);return{onClick:(0,n.useCallback)(n=>{let i=()=>{n.stopPropagation(),e(n)},l=()=>{r.current&&(clearTimeout(r.current),r.current=void 0)},o=()=>{s.current>=12&&l(),void 0===r.current?(n.target.removeEventListener("pointermove",o),s.current=0):s.current+=1};t?i():void 0===r.current?(r.current=window.setTimeout(l,a.UW.DOUBLE_CLICK),n.target.addEventListener("pointermove",o,{passive:!0})):(l(),i())},[e,t])}}},90925:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(96540);let a=(e,t)=>{let[r,a]=(0,n.useState)();(0,n.useEffect)(()=>{t&&a(new ResizeObserver(t))},[t]),(0,n.useEffect)(()=>(e instanceof HTMLElement&&r?.observe(e),()=>{e instanceof HTMLElement&&r?.unobserve(e)}),[e,r])}},57725:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(33540);let a=(e,t)=>(0,n.css)`
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
`},30197:(e,t,r)=>{r.d(t,{decodeImageToBuffer:()=>g,getFirstAniImage:()=>f,getLargestIcon:()=>m});var n=r(48060),a=r(48287).Buffer;function s(e,t=[]){let{length:r}=t,n=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)].concat(t);return[r>>24&255,r>>16&255,r>>8&255,255&r].concat(n,function(e){let t=[],r=0;for(let e=0;e<256;++e)r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=e)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1)?0xedb88320^r>>>1:r>>>1,t[e]=r;for(let n of(r=-1,e))r=r>>>8^t[(r^n)&255];return[(r^=-1)>>24&255,r>>16&255,r>>8&255,255&r]}(n))}let i=e=>a.from(new Uint8Array(function(e){if(e.length<22||113!==e[0]||111!==e[1]||105!==e[2]||102!==e[3])return;let t=e[4]<<24|e[5]<<16|e[6]<<8|e[7],r=e[12],n=e[13];if(3!==r&&4!==r&&1!==n)return;let a=e.length-8,i=[],l=Array.from({length:64}).fill(0),o=255,c=14;for(;c<a;){let t=e[c],r=t>>6;if(255===t){let t=e[c+1],r=e[c+2],n=e[c+3],a=e[c+4];c+=5,o=t<<24|r<<16|n<<8|a,l[(3*t+5*r+7*n+11*a)%64]=o,i.push(o)}else if(254===t){let t=e[c+1],r=e[c+2],n=e[c+3],a=255&o;c+=4,o=t<<24|r<<16|n<<8|a,l[(3*t+5*r+7*n+11*a)%64]=o,i.push(o)}else if(0===r){if(0===e[c]&&0===e[c+1]&&0===e[c+2]&&0===e[c+3]&&0===e[c+4]&&0===e[c+5]&&0===e[c+6]&&1===e[c+7])break;c+=1,o=l[t],i.push(o)}else if(1===r){let e=(o>>24&255)+((t>>4&3)-2)&255,r=(o>>16&255)+((t>>2&3)-2)&255,n=(o>>8&255)+((3&t)-2)&255,a=255&o;c+=1,o=e<<24|r<<16|n<<8|a,l[(3*e+5*r+7*n+11*a)%64]=o,i.push(o)}else if(2===r){let r=e[c+1],n=(63&t)-32&255,a=(r>>4&15)-8+n&255,s=(15&r)-8+n&255,u=(o>>24&255)+a&255,d=(o>>16&255)+n&255,h=(o>>8&255)+s&255,f=255&o;c+=2,o=u<<24|d<<16|h<<8|f,l[(3*u+5*d+7*h+11*f)%64]=o,i.push(o)}else{for(let e=(63&t)+1;e>0;--e)i.push(o);c+=1}}return function(e,t,r){let n=[],a=[120,1],i=1+t*r,l=65535^i;for(let s=0;e.length!=s;s+=t){let o=s+t;a.push(o===e.length?1:0,255&i,i>>8&255,255&l,l>>8&255),n.push(1),a.push(0);for(let t=s;o!==t;++t){let s=e[t];n.push(s>>24&255),a.push(s>>24&255),n.push(s>>16&255),a.push(s>>16&255),n.push(s>>8&255),a.push(s>>8&255),4===r&&(n.push(255&s),a.push(255&s))}}let o=e.length/t;return[137,80,78,71,13,10,26,10].concat(s("IHDR",[t>>24&255,t>>16&255,t>>8&255,255&t,o>>24&255,o>>16&255,o>>8&255,255&o,8,3===r?2:6,0,0,0]),s("IDAT",a.concat(function(e){let t=0,r=0;for(let n of e)r=(r+(t=(t+n)%65521))%65521;return[r>>8,255&r,t>>8,255&t]}(n))),s("IEND"))}(i,t,r)}(new Uint8Array(e))));var l=r(37e3),o=r(48287).Buffer;let c=async e=>{let t=document.createElement("img");return document.createElement("picture").append(Object.assign(document.createElement("source"),{srcset:"data:,x",type:e}),t),await new Promise(e=>{requestAnimationFrame(e)}),"string"==typeof t.currentSrc&&t.currentSrc.length>0},u=async e=>await c("image/jxl")?e:new Promise(t=>{let r=new Worker("System/JXL.js/jxl_dec.js");r.postMessage({image:e,jxlSrc:"image.jxl"}),r.addEventListener("message",e=>{t((0,l.Jf)(e?.data?.imgData)),r.terminate()})}),d=async e=>await c("image/heic")?e:new Promise(t=>{let n=new Worker(r.tu(new URL(r.p+r.u(5296),r.b)),{name:"libheif"});n.postMessage(e),n.addEventListener("message",({data:e})=>{t((0,l.Jf)(e)),n.terminate()})}),h=async e=>{let t=await (0,l.iI)(),{parseAni:a}=await r.e(8956).then(r.bind(r,18956)),s=[];try{({images:s}=a(e))}catch{return e}return await Promise.all(s.map(e=>new Promise(r=>{let a=new Image,s=(0,l.Zd)(o.from(e));t.setOptions({transparent:""}),a.addEventListener("load",()=>{t.addFrame(a),(0,l.E)(s),r()},n.w3),a.src=s}))),new Promise(e=>{t.on("finished",r=>{(0,l.Z6)(r).then(e),t.freeWorkers.forEach(e=>e?.terminate())}).render()})},f=async e=>{let t;let{parseAni:n}=await r.e(8956).then(r.bind(r,18956));try{return{images:[t]}=n(e),o.from(t)}catch{}},m=async(e,t)=>{try{let{default:n}=await r.e(707).then(r.t.bind(r,80707,23)),[a]=n(e).filter(({width:e})=>e<=t).sort((e,t)=>t.width-e.width),s=document.createElement("canvas"),i=s.getContext("2d",{desynchronized:!0});return s.width=a.width,s.height=a.height,i?.putImageData(a,0,0),s.toDataURL()}catch{return""}},p=async(e,t)=>new Promise(r=>{let a=new Image;a.addEventListener("load",()=>r(!0),n.w3),a.addEventListener("error",()=>r(!1),n.w3),a.src=(0,l.Zd)(t,(0,l.hH)("",e))}),g=async(e,t)=>{switch(e){case".jxl":return u(t);case".qoi":return i(t);case".ani":try{return await h(t)}catch{return f(t)}case".cur":return await p(e,t)?t:f(t);default:if(n.U7.has(e))return d(t);if(n.lp.has(e))return o.from((await r.e(7713).then(r.t.bind(r,7713,23))).bufferToURI(t).replace("data:image/png;base64,",""),"base64")}return t}}}]);