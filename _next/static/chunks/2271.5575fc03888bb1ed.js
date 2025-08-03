"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2271],{52271:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var o=r(74848),i=r(16286),l=r(96540),a=r(61149),n=r(78744);let s=(e,t,r)=>{let{contextMenu:o}=(0,n.b)();return{backMenu:(0,l.useMemo)(()=>o?.(()=>e.filter((e,r)=>r<t).map((e,o)=>({action:()=>r(o-t),label:e})).reverse()),[o,e,r,t]),forwardMenu:(0,l.useMemo)(()=>o?.(()=>e.filter((e,r)=>r>t).map((e,t)=>({action:()=>r(t+1),label:e}))),[o,e,r,t])}},c=()=>{let{contextMenu:e}=(0,n.b)();return(0,l.useMemo)(()=>e?.(e=>[{action:()=>e?.target?.dispatchEvent(new MouseEvent("click",{bubbles:!0,ctrlKey:!0})),label:"Open in new window"}]),[e])};var d=r(97279),p=r(37e3),u=r(48060);let h="/Apps/Browser/directory/icons",g={"FutureSplash File":"portal","HTML Document":"layout","Media Playlist File":"movie","Picture File":"image2","Shockwave Flash File":"portal",audio:"sound2",compressed:"compressed",emulator:"portal",executable:"binary",font:"a",image:"diskimg",jsdos:"compressed",marked:"layout",pdf:"layout",python:"p",tinymce:"layout",wapm:"binary"},m={...Object.fromEntries(Object.entries(d.A).map(([e,{icon:t="",type:r=""}])=>[e,g[t||r]||"generic"])),".7z":"compressed",".gz":"compressed",".ini":"text",".js":"text",".json":"text",".pk3":"compressed",".rar":"compressed",".sh":"script",".tar":"tar",".tgz":"compressed",".txt":"text",".url":"link",".wsz":"compressed"},f={back:"PARENTDIR",folder:"DIR",image2:"IMG",movie:"VID",text:"TXT"},x=e=>{if(void 0===e)return" - ";let t=["","K","M","G","T"],r=Math.floor((e?Math.log(e):0)/Math.log(1024));r=Math.min(r,t.length-1);let o=e/1024**r,i=Number(o=o>=100?Math.round(o):Math.round(10*o)/10).toString();return i.length>3&&(i=Number(Math.round(o)).toString()),i+(0!==o&&o<10&&o%1==0?".0":"")+t[r]},w=e=>e?.toISOString().replace("T"," ").split(".")[0].slice(0,-3)||"",b=(e,t,{C:r,O:o},l)=>`
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Index of ${e}</title>
      <style>
        a:visited { color: #00e; }
        img { display: block; }
      </style>
    </head>
    <body>
      <h1>Index of ${e}</h1>
      <table>
        <tr>
          <th valign="top"><img decoding="async" src="${h}/blank.gif" alt="[ICO]" /></th>
          <th><a href="${t}?C=N;O=${r&&("N"!==r||"A"!==o)?"A":"D"}">Name</a></th><th><a href="${t}?C=M;O=${"M"===r&&"A"===o?"D":"A"}">Last modified</a></th>
          <th><a href="${t}?C=S;O=${"S"===r&&"A"===o?"D":"A"}">Size</a></th><th><a href="${t}?C=D;O=${"D"===r&&"A"===o?"D":"A"}">Description</a></th>
        </tr>
        <tr>
          <th colspan="5"><hr /></th>
        </tr>
        ${l.map(({alt:e,description:r,href:o,icon:l,modified:a,size:n})=>{let s=l||m[(0,p.uQ)(o)]||"generic",c="back"===s,d=c||"folder"===s?"folder":"file",g=c?"Parent Directory":"/"===o?u.l6:(0,i.basename)(o);return`
              <tr>
                <td valign="top">
                  <a href="${t}${o}" type=${d}>
                    <img decoding="async" src="${h}/${s}.gif" alt="[${f[s]||e||"   "}]">
                  </a>
                </td>
                <td>
                  <a href="${t}${o}" type=${d}>${g}${"folder"===s?"/":""}</a>
                </td>
                <td align="right">${w(a)}</td>
                <td align="right">${x(n)}</td>
                <td>${r||"&nbsp;"}</td>
              </tr>`}).join("")}
          <tr><th colspan="5"><hr /></th></tr>
      </table>
    </body>
  </html>
`,v=(0,l.memo)(({direction:e})=>{let t=(0,l.useMemo)(()=>"right"===e?{transform:"scaleX(-1)"}:void 0,[e]);return(0,o.jsx)("svg",{style:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})}),$=(0,l.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})),k=(0,l.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}));var y=r(33540);let j=y.default.div`
  iframe {
    background-color: ${({$hasSrcDoc:e})=>e?"#fff":"initial"};
    border: 0;
    height: calc(100% - 42px - 37px);
    width: 100%;
  }

  nav {
    background-color: rgb(87, 87, 87);
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    div {
      display: flex;
      justify-content: space-around;
      margin-right: 2px;
      min-width: 102px;
      padding-left: 4px;
      width: 142px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: rgb(240, 240, 240);
        height: 20px;
        width: 20px;
      }

      &:hover {
        background-color: rgb(103, 103, 103);
      }

      &:active {
        background-color: rgb(110, 110, 110);
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(152, 152, 152);
        }
      }
    }

    &:not(:first-child) {
      border-bottom: 1px solid rgb(118, 115, 118);
      height: 37px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-bottom: 4px;
        margin-right: 8px;
      }
    }

    input {
      background-color: rgb(64, 62, 65);
      border-radius: 18px;
      color: rgb(255, 255, 255);
      font-family: ${({theme:e})=>e.formats.systemFont};
      font-size: 13px;
      height: 34px;
      letter-spacing: 0.2px;
      margin: 0 6px;
      padding: 0 13px;
      padding-bottom: 2px;
      width: 100%;

      &:focus {
        outline: 2px solid rgb(168, 199, 250);
      }

      &::selection {
        background-color: rgb(0, 74, 119);
      }
    }
  }
`;var M=r(11462),C=r(55650),A=r(41017),E=r(62104),T=r(25573),D=r(41543),L=r(87952),S=r(31251),N=r(91745),z=r(1364);let I=({id:e})=>{let{icon:t,linkElement:r,url:n,processes:{[e]:d},open:h}=(0,E.N)(),{setForegroundId:g,updateRecentFiles:m}=(0,z.w)(),{prependFileToTitle:f}=(0,C.A)(e),{initialTitle:x="",url:w=""}=d||{},y=w||M.Ko,{canGoBack:I,canGoForward:R,history:B,moveHistory:F,position:O}=(0,D.A)(y,e),{exists:P,fs:H,stat:U,readFile:G,readdir:K}=(0,A.f)(),W=(0,l.useRef)(null),q=(0,l.useRef)(null),[V,Q]=(0,l.useState)(!1),[_,X]=(0,l.useState)(""),Y=e=>{F(e),W.current&&(W.current.value=B[O+e])},J=(0,l.useRef)(""),Z=(e,t)=>{let r=!1;try{r=t.location?.pathname==="srcdoc"}catch{}r?(X(""),q.current?.setAttribute("src",e)):t.location?.replace(e)},ee=(0,l.useCallback)(t=>{W.current&&(W.current.value=t),n(e,t)},[n,e]),{backMenu:et,forwardMenu:er}=s(B,O,F),eo=c(),ei=(0,l.useCallback)(async r=>{let{contentWindow:o}=q.current||{};if(o?.location){let l=[".htm",".html"].includes((0,p.uQ)(r))&&await P(r);if(Q(!0),l&&X((await G(r)).toString()),t(e,T.A.Browser.icon),r.toLowerCase().startsWith(M.Er.url))Z(`${window.location.origin}${M.Er.path}`,o),f(`${M.Er.url}/`);else if(!l){let l=await (0,p.pE)(r);if(M.L0.has(l.host)||M.L0.has(r)){let e=decodeURI(l.pathname).replace(/\/$/,"")||"/",t=Object.fromEntries(new URLSearchParams(l.search.replace(";","&")).entries()),{O:r,C:a}=t,n=!r||"A"===r,s=M.p2,c="404 Not Found";if(await P(e)&&(await U(e)).isDirectory()){let r=(await Promise.all((await K(e)).map(async t=>{let r,o;let l=(0,i.join)(e,t);if((0,p.uQ)(t)===u.b3)try{({comment:r,url:o}=(0,N.DB)(await G(l)))}catch{}let a=await U(o&&await P(o)?o:l),n=a.isDirectory();return{description:r,href:n&&o?o:l,icon:n?"folder":void 0,modified:a.mtime,size:n||o?void 0:a.size}}))).sort((e,t)=>Number("folder"===t.icon)-Number("folder"===e.icon)).sort((e,t)=>{if("folder"===e.icon==("folder"===t.icon)){let r=(0,i.basename)(e.href),o=(0,i.basename)(t.href);return n?r<o?-1:1:r>o?-1:1}return 0}).sort((e,t)=>{if(!a||"N"===a)return 0;let r=r=>{let o=r(e),i=r(t);return o===i?0:n?o<i?-1:1:o>i?-1:1};return"S"===a?r(({size:e})=>e??0):"M"===a?r(({modified:e})=>e?.getTime()??0):"D"===a?r(({description:e})=>e??""):0}).sort((e,t)=>Number("folder"===t.icon)-Number("folder"===e.icon));q.current?.addEventListener("load",()=>{try{o.document.body.querySelectorAll("a").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault();let r=t.currentTarget,o="folder"===r.getAttribute("type"),{origin:i,pathname:l,search:a}=new URL(r.href);a?ee(`${i}${encodeURI(e)}${a}`):o?ee(r.href):H&&r.href&&N.O6(H,decodeURI(l),p.uQ(l),({pid:e,url:t})=>{h(e||"OpenWith",{url:t}),e&&t&&m(t,e)})})})}catch{}},u.w3),s=b(e,l.origin,t,"/"===e?r:[{href:(0,i.resolve)(e,".."),icon:"back"},...r]),c=`Index of ${e}`}X(s),f(c)}else{let i=l.href;if(Z(i,o),i.startsWith(p.K6))f(`${r} - Google Search`);else{let{name:e=x}=M.ok?.find(({url:e})=>e===r)||{};f(e)}if(r.startsWith("ipfs://"))t(e,"/System/Icons/Favicons/ipfs.webp");else{let r=new Image,o=`${new URL(i).origin}${u.Jw}`;r.addEventListener("error",()=>{let{icon:r}=M.ok?.find(({url:e})=>e===i)||{};r&&t(e,r)},u.w3),r.addEventListener("load",()=>t(e,o),u.w3),r.decoding="async",r.src=o}}}}},[P,H,ee,e,x,h,f,G,K,t,U,m]);return(0,l.useEffect)(()=>{d&&B[O]!==J.current&&(J.current=B[O],ei(B[O]))},[B,O,d,ei]),(0,l.useEffect)(()=>{q.current&&r(e,"peekElement",q.current)},[e,r]),(0,o.jsxs)(j,{$hasSrcDoc:!!_,children:[(0,o.jsxs)("nav",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(L.A,{disabled:!I,onClick:()=>Y(-1),...(0,p.Pf)("Click to go back"),...et,children:(0,o.jsx)(v,{direction:"left"})}),(0,o.jsx)(L.A,{disabled:!R,onClick:()=>Y(1),...(0,p.Pf)("Click to go forward"),...er,children:(0,o.jsx)(v,{direction:"right"})}),(0,o.jsx)(L.A,{disabled:V,onClick:()=>ei(B[O]),onContextMenu:p.CH,...(0,p.Pf)("Reload this page"),children:V?(0,o.jsx)(k,{}):(0,o.jsx)($,{})})]}),(0,o.jsx)("input",{ref:W,defaultValue:y,onFocusCapture:()=>W.current?.select(),onKeyDown:({key:t})=>{W.current&&"Enter"===t&&(n(e,W.current.value),J.current===W.current.value&&ei(W.current.value),window.getSelection()?.removeAllRanges(),W.current.blur())},...a.f})]}),(0,o.jsx)("nav",{children:M.ok.map(({name:e,icon:t,url:r})=>(0,o.jsx)(L.A,{onClick:({ctrlKey:e})=>{e?h("Browser",{url:r}):ee(r)},...(0,p.Pf)(`${e}
${r.replace(/^http:\/\//,"").replace(/\/$/,"")}`),...eo,children:(0,o.jsx)(S.A,{alt:e,imgSize:16,src:t})},e))}),(0,o.jsx)("iframe",{ref:q,onLoad:()=>{try{q.current?.contentWindow?.addEventListener("focus",()=>g(e))}catch{}V&&Q(!1)},srcDoc:_||void 0,title:e,...u.aI})]})}},61149:(e,t,r)=>{r.d(t,{f:()=>w,A:()=>b});var o=r(74848),i=r(16286),l=r(96540),a=r(16093),n=r(33540);let s=n.default.div`
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
`;var c=r(78744);let d=e=>{let{contextMenu:t}=(0,c.b)();return(0,l.useMemo)(()=>t?.(()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]),[e,t])};var p=r(41017),u=r(62104),h=r(87952),g=r(48060),m=r(37e3),f=r(91745),x=r(1364);let w={"aria-label":"Address",enterKeyHint:"go",inputMode:"url",name:"address",...g.m8},b=(0,l.forwardRef)(({id:e},t)=>{let r=(0,l.useRef)(null),{open:n,url:c,processes:{[e]:{icon:b,url:v=""}}}=(0,u.N)(),$=(0,l.useMemo)(()=>(0,i.basename)(v)||g.l6,[v]),[k,y]=(0,l.useState)($),{exists:j,stat:M,updateFolder:C}=(0,p.f)(),{updateRecentFiles:A}=(0,x.w)(),E=(0,l.useMemo)(()=>k!==$&&k!==v&&document.activeElement===t.current,[k,t,$,v]),T=(0,l.useCallback)(async()=>{if(k&&await j(k)){if((await M(k)).isDirectory())c(e,k);else{let e=(0,f.YD)((0,m.uQ)(k));n(e||"OpenWith",{url:k}),e&&A(k,e)}}t.current?.blur()},[k,t,c,j,e,n,M,A]);return(0,l.useEffect)(()=>{t.current&&(k===v?t.current.select():k===$?window.getSelection()?.removeAllRanges():document.activeElement!==t.current&&y($))},[k,t,$,v]),(0,o.jsxs)(s,{children:[(0,o.jsx)("input",{ref:t,className:E?"inputing":"",onBlurCapture:({relatedTarget:e})=>{r.current!==e&&y(v)},onChange:({target:e})=>y(e.value),onFocusCapture:()=>y(v),onKeyDown:({key:e})=>{"Enter"===e&&T()},value:v,...w,...d(v)}),(0,o.jsx)(h.A,{ref:r,className:"action",onClick:()=>{y(v),E?T():C(v)},onFocusCapture:()=>setTimeout(()=>y(v),g.UW.DOUBLE_CLICK/2),...(0,m.Pf)(E?`Go to "${k}"`:`Refresh "${$}" (F5)`),children:E?(0,o.jsx)(a.GoTo,{}):(0,o.jsx)(a.Refresh,{})})]})})},16093:(e,t,r)=>{r.r(t),r.d(t,{Back:()=>l,Down:()=>c,Forward:()=>a,GoTo:()=>s,Refresh:()=>n,Search:()=>p,Up:()=>d});var o=r(74848),i=r(96540);let l=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M15 18l-6-6 6-6"})})),a=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9 18l6-6-6-6"})})),n=(0,i.memo)(()=>(0,o.jsx)("svg",{className:"refresh",viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),s=(0,i.memo)(()=>(0,o.jsx)("svg",{className:"go-to",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M31.906 16 17.203 30.703l-1.406-1.406L28.094 17H0v-2h28.094L15.797 2.703l1.406-1.406z"})})),c=(0,i.memo)(({flip:e})=>{let t=(0,i.useMemo)(()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0,[e]);return(0,o.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M18 15l-6-6-6 6"})})}),d=(0,i.memo)(()=>{let e=(0,i.useMemo)(()=>({marginTop:"-1px"}),[]);return(0,o.jsxs)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"}),(0,o.jsx)("path",{d:"M9 22V12h6v10M2 10.6L12 2l10 8.6"})]})}),p=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})}))},55650:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(96540),i=r(62104),l=r(25573),a=r(48060);let n=e=>{let{title:t}=(0,i.N)(),[r]=e.split(a.QB),{title:n}=l.A[r]||{};return{appendFileToTitle:(0,o.useCallback)((r,o)=>{let i=r?` - ${r}${o?` ${a.g6}`:""}`:"";t(e,`${n}${i}`)},[e,n,t]),prependFileToTitle:(0,o.useCallback)((r,o,i)=>{let l=r?`${o?`${a.g6} `:""}${r}${i?" ":" - "}`:"";t(e,`${l}${n}`)},[e,n,t])}}},41543:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(96540),i=r(62104);let l=(e,t)=>{let{url:r}=(0,i.N)(),[l,a]=(0,o.useState)(e),[n,s]=(0,o.useState)(()=>[e]),[c,d]=(0,o.useState)(0),p=(0,o.useCallback)(e=>{let o=c+e;d(o),a(n[o]),r(t,n[o])},[r,n,t,c]);return(0,o.useEffect)(()=>{e!==l&&(d(c+1),a(e),s([...n.slice(0,c+1),e]))},[l,n,c,e]),{canGoBack:c>0,canGoForward:c<n.length-1,currentUrl:l,history:n,moveHistory:p,position:c}}}}]);