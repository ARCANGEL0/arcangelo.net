"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,1894],{51894:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(74848),l=r(16286),a=r(96540);let i=(0,a.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})})),o=(0,a.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 17H0v-2h32v2z"})})),s=(0,a.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})})),c=(0,a.memo)(()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})}));var d=r(33540);let b=d.default.nav`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
  display: flex;
  height: 40px;
  position: absolute;
  top: ${({theme:e})=>e.sizes.titleBar.height}px;
  width: 100%;
  z-index: 1;

  .side-menu {
    display: flex;
    overflow: hidden;
    place-items: center;
    white-space: nowrap;
    width: 100%;

    span {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:first-child {
      color: #fff;
      font-size: 14px;
      margin-left: 16px;
      place-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      place-content: flex-end;
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    font-size: 24px;
    height: 30px;
    place-content: center;
    place-items: center;
    width: 30px;

    &.subtract {
      margin-right: 7px;
    }

    &.add {
      margin-left: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }

    &:hover {
      background-color: rgb(66, 70, 73);
    }

    svg {
      fill: #fff;
      height: 12px;
      stroke: #fff;
      width: 12px;
    }

    &:disabled {
      background-color: initial;

      svg {
        fill: rgb(110, 112, 114);
        stroke: rgb(110, 112, 114);
      }
    }

    &.download {
      svg {
        margin-left: 1px;
        scale: 1.15;
        stroke-width: 1.75;
        transform: scale(1.25, 1);
      }
    }
  }

  ol {
    display: flex;
    flex-direction: row;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;

    li {
      color: #fff;
      display: flex;
      flex-direction: row;
      font-size: 14px;

      input {
        background-color: rgb(25, 27, 28);
        color: #fff;
        height: 20px;
        text-align: center;

        &:disabled {
          color: rgb(110, 112, 114);
        }
      }

      &:not(:last-child)::after {
        background-color: rgb(112, 115, 117);
        content: "";
        margin-left: 20px;
        width: 1px;
      }

      &.pages {
        letter-spacing: 1.5px;
        line-height: 20px;
        padding-right: 10px;
        width: max-content;

        input {
          margin: 0 5px;
          width: 24px;
        }
      }

      &.scale {
        display: flex;
        place-items: center;

        input {
          width: 45px;
        }
      }
    }
  }
`;var g=r(55650),u=r(41017),p=r(62104),h=r(48060),A=r(37e3);let m=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],f=(e=0,t=0)=>{let r=e-8;if(r>=t)return 1;let n=r/t,l=m.findIndex(e=>e>=n);return l>0?m[l-1]:1},x=({containerRef:e,id:t,setLoading:r,url:n})=>{let{readFile:i}=(0,u.f)(),{argument:o,processes:{[t]:s}={},url:c}=(0,p.N)(),{libs:d=[],scale:b}=s||{},[m,x]=(0,a.useState)([]),w=(0,a.useRef)(null),v=(0,a.useCallback)(async(r,n)=>{let l;let a=document.createElement("canvas"),i=a.getContext("2d",h.cW),s=await n.getPage(r);if(b)l=s.getViewport({scale:b});else{let r=s.getViewport().viewBox[2],n=f(e.current?.clientWidth,r);o(t,"scale",n),l=s.getViewport({scale:n})}return a.height=l.height,a.width=l.width,await s.render({canvasContext:i,viewport:l}).promise,a},[o,e,t,b]),{prependFileToTitle:k}=(0,g.A)(t),$=(0,a.useRef)(!1),j=(0,a.useRef)(null),y=(0,a.useCallback)(async()=>{if(e.current){if(x([]),n){if(e.current.classList.remove("drop"),window.pdfjsLib&&!$.current){$.current=!0,o(t,"rendering",!0),e.current.scrollTop=0,r(!0);let a=await i(n);if(0===a.length)throw Error("File is empty");let s=window.pdfjsLib.getDocument(a),c=await s.promise,{info:d}=await c.getMetadata();w.current=s._worker,o(t,"subTitle",d.Title),o(t,"count",c.numPages),k((0,l.basename)(n)),j.current=new AbortController;for(let e=0;e<c.numPages&&!j.current.signal.aborted;e+=1){1===e&&r(!1);let t=await v(e+1,c);x(e=>[...e,t])}o(t,"rendering",!1),$.current=!1}}else e.current.classList.add("drop"),o(t,"subTitle",""),o(t,"count",0),k("")}r(!1)},[o,e,t,k,i,v,r,n]);(0,a.useEffect)(()=>{(0,A.aY)(d).then(()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Apps/PDF.js/pdf.worker.js",y().catch(()=>{c(t,""),r(!1),o(t,"rendering",!1),$.current=!1}))})},[o,t,d,y,r,c]),(0,a.useEffect)(()=>{let r=e.current?.querySelector("ol.pages");r&&([...r.children].forEach(e=>e.remove()),m?.forEach((n,l)=>{let a=document.createElement("li"),i=new IntersectionObserver(e=>e.forEach(({isIntersecting:e})=>{e&&o(t,"page",l+1)}),{root:e.current,...h.A8});a.append(n),r.append(a),i.observe(a)}))},[o,e,t,m]),(0,a.useEffect)(()=>()=>{j.current?.abort(),w.current?.destroy()},[])};var w=r(87952);let v=({id:e})=>{let{readFile:t}=(0,u.f)(),{argument:a,processes:{[e]:d}={}}=(0,p.N)(),{count:g=0,page:f=1,componentWindow:x,rendering:v=!1,scale:k=1,subTitle:$="",url:j=""}=d||{};return(0,n.jsxs)(b,{children:[(0,n.jsx)("div",{className:"side-menu",children:(0,n.jsx)("span",{children:$||(0,l.basename)(j)})}),(0,n.jsxs)("ol",{children:[0!==g&&(0,n.jsxs)("li",{className:"pages",children:[(0,n.jsx)("input",{enterKeyHint:"go",onChange:({target:t})=>{let r=Number(t.value);Number.isNaN(r)||r<1||r>g||(a(e,"page",r),x?.querySelectorAll("li")[r-1].scrollIntoView())},value:f})," ","/ ",g]}),(0,n.jsxs)("li",{className:"scale",children:[(0,n.jsx)(w.A,{className:"subtract",disabled:v||.25===k||0===g,onClick:()=>a(e,"scale",m[m.indexOf(k)-1]),...(0,A.Pf)("Zoom out"),children:(0,n.jsx)(o,{})}),(0,n.jsx)("input",{disabled:v||0===g,enterKeyHint:"done",onChange:({target:t})=>{if(!t.value.endsWith("%")||t.value.length>4||t.value.length<2)return;let r=Number(t.value.replace("%",""))/100;Number.isNaN(r)||r>m[m.length-1]||r<m[0]||a(e,"scale",m[m.findIndex(e=>e>=r)])},value:`${Math.round(100*k)}%`}),(0,n.jsx)(w.A,{className:"add",disabled:v||5===k||0===g,onClick:()=>a(e,"scale",m[m.indexOf(k)+1]),...(0,A.Pf)("Zoom in"),children:(0,n.jsx)(i,{})})]})]}),(0,n.jsxs)("div",{className:"side-menu",children:[(0,n.jsx)(w.A,{className:"download",disabled:0===g,onClick:async()=>{let e=document.createElement("a");e.href=(0,A.Zd)(await t(j)),e.download=(0,l.basename)(j),e.click()},...(0,A.Pf)("Download"),children:(0,n.jsx)(s,{})}),(0,n.jsx)(w.A,{disabled:0===g,onClick:async()=>{(0,A.nr)()&&(window.InstallTrigger=!0,setTimeout(()=>{delete window.InstallTrigger},5*h.iC));let{default:e}=await r.e(5162).then(r.t.bind(r,45162,23));e({base64:!0,printable:(await t(j)).toString("base64"),type:"pdf"})},...(0,A.Pf)("Print"),children:(0,n.jsx)(c,{})})]})]})};var k=r(57725),$=r(43680);let j=d.default.div`
  ${(0,$.A)()};

  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  && {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px - 40px)`};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }

  &.drop {
    ${(0,k.A)("Drop PDF file here","#fff")};
  }
`;var y=r(14153);let E=({id:e})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.A,{StyledComponent:j,id:e,useHook:x,children:(0,n.jsx)("ol",{className:"pages"})}),(0,n.jsx)(v,{id:e})]})},14153:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(74848),l=r(96540),a=r(51583),i=r(8218),o=r(62104);let s=(0,l.memo)(({id:e,useHook:t,StyledComponent:r,children:s})=>{let{processes:{[e]:{url:c=""}={}}}=(0,o.N)(),d=(0,l.useRef)(null),[b,g]=(0,l.useState)(!0),u=(0,l.useMemo)(()=>({contain:"strict",visibility:b?"hidden":"visible"}),[b]);return t({containerRef:d,id:e,loading:b,setLoading:g,url:c}),(0,n.jsxs)(n.Fragment,{children:[b&&(0,n.jsx)(a.default,{}),(0,n.jsx)(r,{ref:d,style:u,...(0,i.A)({id:e}),children:s})]})})},51583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(33540);let l=n.default.div`
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
`},8218:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(16286),l=r(96540),a=r(51780),i=r(16091),o=r(13296),s=r(41017),c=r(62104),d=r(1364),b=r(48060),g=r(37e3),u=r(96119);let p=({callback:e,directory:t=b.Bn,id:r,onDragLeave:p,onDragOver:h,updatePositions:A})=>{let{url:m}=(0,c.N)(),f=(0,u.w)(),{iconPositions:x,sortOrders:w,setIconPositions:v}=(0,d.w)(),{exists:k,mkdirRecursive:$,updateFolder:j,writeFile:y}=(0,s.f)(),E=(0,l.useCallback)(async(e,t,l)=>{if(r){if(t){let a=(0,n.join)(b.Bn,e);if(await $(b.Bn),await y(a,t,!0))return l===o.z.UPDATE_URL&&m(r,a),j(b.Bn,e),(0,n.basename)(a)}else l===o.z.UPDATE_URL&&m(r,e)}return""},[r,$,j,m,y]),{openTransferDialog:z}=(0,a.A)();return{onDragLeave:p,onDragOver:e=>{h?.(e),(0,g.CH)(e)},onDrop:l=>{if(b.jj.has((0,g.uQ)(t)))return;if(A&&l.target instanceof HTMLElement){let{files:e,text:r}=(0,i.bn)(l);if(0===e.length&&""===r)return;(async()=>{let a={x:l.clientX,y:l.clientY},i=[];if(r){try{i=JSON.parse(r)}catch{}if(!Array.isArray(i))return;let[e]=i;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;i=i.map(e=>(0,n.basename)(e))}else e instanceof FileList?i=[...e].map(e=>e.name):i=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);i=await Promise.all(i.map(async e=>{let r=`${t}/${e}`;if(!x[r]||!await k(r))return e;let l=0;do l+=1,r=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${l})${(0,n.extname)(e)}`;while(x[r]&&await k(r));return(0,n.basename)(r)})),(0,g.$Y)(t,l.target,x,w,a,i,v,k)})()}let a="string"==typeof r;a&&!A&&t===b.Bn&&f.current[r]?.componentWindow?.focus(b.VD),(0,i.nX)(l,e||E,t,z,a)}}}},55650:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(96540),l=r(62104),a=r(25573),i=r(48060);let o=e=>{let{title:t}=(0,l.N)(),[r]=e.split(i.QB),{title:o}=a.A[r]||{};return{appendFileToTitle:(0,n.useCallback)((r,n)=>{let l=r?` - ${r}${n?` ${i.g6}`:""}`:"";t(e,`${o}${l}`)},[e,o,t]),prependFileToTitle:(0,n.useCallback)((r,n,l)=>{let a=r?`${n?`${i.g6} `:""}${r}${l?" ":" - "}`:"";t(e,`${a}${o}`)},[e,o,t])}}},57725:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(33540);let l=(e,t)=>(0,n.css)`
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
`},43680:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(33540),l=r(48060);let a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},i=(e=l.Gm,t=0,r=0,i="dark")=>(0,n.css)`
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