"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6734],{2282:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(14232),i=r(42771);let a=(e,t)=>{let{url:r}=(0,i.N)(),[a,l]=(0,o.useState)(e),[n,s]=(0,o.useState)(()=>[e]),[c,d]=(0,o.useState)(0),p=(0,o.useCallback)(e=>{let o=c+e;d(o),l(n[o]),r(t,n[o])},[r,n,t,c]);return(0,o.useEffect)(()=>{e!==a&&(d(c+1),l(e),s([...n.slice(0,c+1),e]))},[a,n,c,e]),{canGoBack:c>0,canGoForward:c<n.length-1,currentUrl:a,history:n,moveHistory:p,position:c}}},2435:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(14232),i=r(42771),a=r(91372),l=r(16361);let n=e=>{let{title:t}=(0,i.N)(),[r]=e.split(l.QB),{title:n}=a.A[r]||{};return{appendFileToTitle:(0,o.useCallback)((r,o)=>{let i=r?` - ${r}${o?` ${l.g6}`:""}`:"";t(e,`${n}${i}`)},[e,n,t]),prependFileToTitle:(0,o.useCallback)((r,o,i)=>{let a=r?`${o?`${l.g6} `:""}${r}${i?" ":" - "}`:"";t(e,`${a}${n}`)},[e,n,t])}}},3350:(e,t,r)=>{r.d(t,{f:()=>x,A:()=>w});var o=r(37876),i=r(79052),a=r(14232),l=r(84788),n=r(77232);let s=n.default.div`
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
`;var c=r(64148),d=r(46711),p=r(42771),u=r(3861),h=r(16361),g=r(60109),m=r(54239),f=r(70185);let x={"aria-label":"Address",enterKeyHint:"go",inputMode:"url",name:"address",...h.m8},w=(0,a.forwardRef)(({id:e},t)=>{let r=(0,a.useRef)(null),{open:n,url:w,processes:{[e]:{icon:b,url:v=""}}}=(0,p.N)(),$=(0,a.useMemo)(()=>(0,i.basename)(v)||h.l6,[v]),[k,y]=(0,a.useState)($),{exists:j,stat:M,updateFolder:C}=(0,d.f)(),{updateRecentFiles:A}=(0,f.w)(),E=(0,a.useMemo)(()=>k!==$&&k!==v&&document.activeElement===t.current,[k,t,$,v]),T=(0,a.useCallback)(async()=>{if(k&&await j(k))if((await M(k)).isDirectory())w(e,k);else{let e=(0,m.YD)((0,g.uQ)(k));n(e||"OpenWith",{url:k}),e&&A(k,e)}t.current?.blur()},[k,t,w,j,e,n,M,A]);return(0,a.useEffect)(()=>{t.current&&(k===v?t.current.select():k===$?window.getSelection()?.removeAllRanges():document.activeElement!==t.current&&y($))},[k,t,$,v]),(0,o.jsxs)(s,{children:[(0,o.jsx)("input",{ref:t,className:E?"inputing":"",onBlurCapture:({relatedTarget:e})=>{r.current!==e&&y(v)},onChange:({target:e})=>y(e.value),onFocusCapture:()=>y(v),onKeyDown:({key:e})=>{"Enter"===e&&T()},value:v,...x,...(e=>{let{contextMenu:t}=(0,c.b)();return(0,a.useMemo)(()=>t?.(()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]),[e,t])})(v)}),(0,o.jsx)(u.A,{ref:r,className:"action",onClick:()=>{y(v),E?T():C(v)},onFocusCapture:()=>setTimeout(()=>y(v),h.UW.DOUBLE_CLICK/2),...(0,g.Pf)(E?`Go to "${k}"`:`Refresh "${$}" (F5)`),children:E?(0,o.jsx)(l.GoTo,{}):(0,o.jsx)(l.Refresh,{})})]})})},6734:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var o=r(37876),i=r(79052),a=r(14232),l=r(3350),n=r(64148),s=r(82050),c=r(60109),d=r(16361);let p="/Apps/Browser/directory/icons",u={"FutureSplash File":"portal","HTML Document":"layout","Media Playlist File":"movie","Picture File":"image2","Shockwave Flash File":"portal",audio:"sound2",compressed:"compressed",emulator:"portal",executable:"binary",font:"a",image:"diskimg",jsdos:"compressed",marked:"layout",pdf:"layout",python:"p",tinymce:"layout",wapm:"binary"},h={...Object.fromEntries(Object.entries(s.A).map(([e,{icon:t="",type:r=""}])=>[e,u[t||r]||"generic"])),".7z":"compressed",".gz":"compressed",".ini":"text",".js":"text",".json":"text",".pk3":"compressed",".rar":"compressed",".sh":"script",".tar":"tar",".tgz":"compressed",".txt":"text",".url":"link",".wsz":"compressed"},g={back:"PARENTDIR",folder:"DIR",image2:"IMG",movie:"VID",text:"TXT"},m=(0,a.memo)(({direction:e})=>{let t=(0,a.useMemo)(()=>"right"===e?{transform:"scaleX(-1)"}:void 0,[e]);return(0,o.jsx)("svg",{style:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})}),f=(0,a.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})),x=(0,a.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}));var w=r(77232);let b=w.default.div`
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
`;var v=r(30719),$=r(2435),k=r(46711),y=r(42771),j=r(91372),M=r(2282),C=r(3861),A=r(42670),E=r(54239),T=r(70185);let D=({id:e})=>{let{icon:t,linkElement:r,url:s,processes:{[e]:u},open:w}=(0,y.N)(),{setForegroundId:D,updateRecentFiles:L}=(0,T.w)(),{prependFileToTitle:S}=(0,$.A)(e),{initialTitle:N="",url:z=""}=u||{},I=z||v.Ko,{canGoBack:R,canGoForward:B,history:F,moveHistory:O,position:P}=(0,M.A)(I,e),{exists:H,fs:U,stat:G,readFile:K,readdir:W}=(0,k.f)(),q=(0,a.useRef)(null),V=(0,a.useRef)(null),[Q,_]=(0,a.useState)(!1),[X,Y]=(0,a.useState)(""),J=e=>{O(e),q.current&&(q.current.value=F[P+e])},Z=(0,a.useRef)(""),ee=(e,t)=>{let r=!1;try{r=t.location?.pathname==="srcdoc"}catch{}r?(Y(""),V.current?.setAttribute("src",e)):t.location?.replace(e)},et=(0,a.useCallback)(t=>{q.current&&(q.current.value=t),s(e,t)},[s,e]),{backMenu:er,forwardMenu:eo}=((e,t,r)=>{let{contextMenu:o}=(0,n.b)();return{backMenu:(0,a.useMemo)(()=>o?.(()=>e.filter((e,r)=>r<t).map((e,o)=>({action:()=>r(o-t),label:e})).reverse()),[o,e,r,t]),forwardMenu:(0,a.useMemo)(()=>o?.(()=>e.filter((e,r)=>r>t).map((e,t)=>({action:()=>r(t+1),label:e}))),[o,e,r,t])}})(F,P,O),ei=(()=>{let{contextMenu:e}=(0,n.b)();return(0,a.useMemo)(()=>e?.(e=>[{action:()=>e?.target?.dispatchEvent(new MouseEvent("click",{bubbles:!0,ctrlKey:!0})),label:"Open in new window"}]),[e])})(),ea=(0,a.useCallback)(async r=>{let{contentWindow:o}=V.current||{};if(o?.location){let a=[".htm",".html"].includes((0,c.uQ)(r))&&await H(r);if(_(!0),a&&Y((await K(r)).toString()),t(e,j.A.Browser.icon),r.toLowerCase().startsWith(v.Er.url))ee(`${window.location.origin}${v.Er.path}`,o),S(`${v.Er.url}/`);else if(!a){let a=await (0,c.pE)(r);if(v.L0.has(a.host)||v.L0.has(r)){let e=decodeURI(a.pathname).replace(/\/$/,"")||"/",t=Object.fromEntries(new URLSearchParams(a.search.replace(";","&")).entries()),{O:r,C:l}=t,n=!r||"A"===r,s=v.p2,u="404 Not Found";if(await H(e)&&(await G(e)).isDirectory()){let r=(await Promise.all((await W(e)).map(async t=>{let r,o,a=(0,i.join)(e,t);if((0,c.uQ)(t)===d.b3)try{({comment:r,url:o}=(0,E.DB)(await K(a)))}catch{}let l=await G(o&&await H(o)?o:a),n=l.isDirectory();return{description:r,href:n&&o?o:a,icon:n?"folder":void 0,modified:l.mtime,size:n||o?void 0:l.size}}))).sort((e,t)=>Number("folder"===t.icon)-Number("folder"===e.icon)).sort((e,t)=>{if("folder"===e.icon==("folder"===t.icon)){let r=(0,i.basename)(e.href),o=(0,i.basename)(t.href);return n?r<o?-1:1:r>o?-1:1}return 0}).sort((e,t)=>{if(!l||"N"===l)return 0;let r=r=>{let o=r(e),i=r(t);return o===i?0:n?o<i?-1:1:o>i?-1:1};return"S"===l?r(({size:e})=>e??0):"M"===l?r(({modified:e})=>e?.getTime()??0):"D"===l?r(({description:e})=>e??""):0}).sort((e,t)=>Number("folder"===t.icon)-Number("folder"===e.icon));V.current?.addEventListener("load",()=>{try{o.document.body.querySelectorAll("a").forEach(t=>{t.addEventListener("click",t=>{t.preventDefault();let r=t.currentTarget,o="folder"===r.getAttribute("type"),{origin:i,pathname:a,search:l}=new URL(r.href);l?et(`${i}${encodeURI(e)}${l}`):o?et(r.href):U&&r.href&&(0,E.O6)(U,decodeURI(a),(0,c.uQ)(a),({pid:e,url:t})=>{w(e||"OpenWith",{url:t}),e&&t&&L(t,e)})})})}catch{}},d.w3),s=((e,t,{C:r,O:o},a)=>`
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
          <th valign="top"><img decoding="async" src="${p}/blank.gif" alt="[ICO]" /></th>
          <th><a href="${t}?C=N;O=${!r||"N"===r&&"A"===o?"D":"A"}">Name</a></th><th><a href="${t}?C=M;O=${"M"===r&&"A"===o?"D":"A"}">Last modified</a></th>
          <th><a href="${t}?C=S;O=${"S"===r&&"A"===o?"D":"A"}">Size</a></th><th><a href="${t}?C=D;O=${"D"===r&&"A"===o?"D":"A"}">Description</a></th>
        </tr>
        <tr>
          <th colspan="5"><hr /></th>
        </tr>
        ${a.map(({alt:e,description:r,href:o,icon:a,modified:l,size:n})=>{let s=a||h[(0,c.uQ)(o)]||"generic",u="back"===s,m=u||"folder"===s?"folder":"file",f=u?"Parent Directory":"/"===o?d.l6:(0,i.basename)(o);return`
              <tr>
                <td valign="top">
                  <a href="${t}${o}" type=${m}>
                    <img decoding="async" src="${p}/${s}.gif" alt="[${g[s]||e||"   "}]">
                  </a>
                </td>
                <td>
                  <a href="${t}${o}" type=${m}>${f}${"folder"===s?"/":""}</a>
                </td>
                <td align="right">${l?.toISOString().replace("T"," ").split(".")[0].slice(0,-3)||""}</td>
                <td align="right">${(e=>{if(void 0===e)return" - ";let t=["","K","M","G","T"],r=Math.floor((e?Math.log(e):0)/Math.log(1024));r=Math.min(r,t.length-1);let o=e/1024**r,i=Number(o=o>=100?Math.round(o):Math.round(10*o)/10).toString();return i.length>3&&(i=Number(Math.round(o)).toString()),i+(0!==o&&o<10&&o%1==0?".0":"")+t[r]})(n)}</td>
                <td>${r||"&nbsp;"}</td>
              </tr>`}).join("")}
          <tr><th colspan="5"><hr /></th></tr>
      </table>
    </body>
  </html>
`)(e,a.origin,t,"/"===e?r:[{href:(0,i.resolve)(e,".."),icon:"back"},...r]),u=`Index of ${e}`}Y(s),S(u)}else{let i=a.href;if(ee(i,o),i.startsWith(c.K6))S(`${r} - Google Search`);else{let{name:e=N}=v.ok?.find(({url:e})=>e===r)||{};S(e)}if(r.startsWith("ipfs://"))t(e,"/System/Icons/Favicons/ipfs.webp");else{let r=new Image,o=`${new URL(i).origin}${d.Jw}`;r.addEventListener("error",()=>{let{icon:r}=v.ok?.find(({url:e})=>e===i)||{};r&&t(e,r)},d.w3),r.addEventListener("load",()=>t(e,o),d.w3),r.decoding="async",r.src=o}}}}},[H,U,et,e,N,w,S,K,W,t,G,L]);return(0,a.useEffect)(()=>{u&&F[P]!==Z.current&&(Z.current=F[P],ea(F[P]))},[F,P,u,ea]),(0,a.useEffect)(()=>{V.current&&r(e,"peekElement",V.current)},[e,r]),(0,o.jsxs)(b,{$hasSrcDoc:!!X,children:[(0,o.jsxs)("nav",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(C.A,{disabled:!R,onClick:()=>J(-1),...(0,c.Pf)("Click to go back"),...er,children:(0,o.jsx)(m,{direction:"left"})}),(0,o.jsx)(C.A,{disabled:!B,onClick:()=>J(1),...(0,c.Pf)("Click to go forward"),...eo,children:(0,o.jsx)(m,{direction:"right"})}),(0,o.jsx)(C.A,{disabled:Q,onClick:()=>ea(F[P]),onContextMenu:c.CH,...(0,c.Pf)("Reload this page"),children:Q?(0,o.jsx)(x,{}):(0,o.jsx)(f,{})})]}),(0,o.jsx)("input",{ref:q,defaultValue:I,onFocusCapture:()=>q.current?.select(),onKeyDown:({key:t})=>{q.current&&"Enter"===t&&(s(e,q.current.value),Z.current===q.current.value&&ea(q.current.value),window.getSelection()?.removeAllRanges(),q.current.blur())},...l.f})]}),(0,o.jsx)("nav",{children:v.ok.map(({name:e,icon:t,url:r})=>(0,o.jsx)(C.A,{onClick:({ctrlKey:e})=>{e?w("Browser",{url:r}):et(r)},...(0,c.Pf)(`${e}
${r.replace(/^http:\/\//,"").replace(/\/$/,"")}`),...ei,children:(0,o.jsx)(A.A,{alt:e,imgSize:16,src:t})},e))}),(0,o.jsx)("iframe",{ref:V,onLoad:()=>{try{V.current?.contentWindow?.addEventListener("focus",()=>D(e))}catch{}Q&&_(!1)},srcDoc:X||void 0,title:e,...d.aI})]})}},84788:(e,t,r)=>{r.r(t),r.d(t,{Back:()=>a,Down:()=>c,Forward:()=>l,GoTo:()=>s,Refresh:()=>n,Search:()=>p,Up:()=>d});var o=r(37876),i=r(14232);let a=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M15 18l-6-6 6-6"})})),l=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9 18l6-6-6-6"})})),n=(0,i.memo)(()=>(0,o.jsx)("svg",{className:"refresh",viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),s=(0,i.memo)(()=>(0,o.jsx)("svg",{className:"go-to",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M31.906 16 17.203 30.703l-1.406-1.406L28.094 17H0v-2h28.094L15.797 2.703l1.406-1.406z"})})),c=(0,i.memo)(({flip:e})=>{let t=(0,i.useMemo)(()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0,[e]);return(0,o.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M18 15l-6-6-6 6"})})}),d=(0,i.memo)(()=>{let e=(0,i.useMemo)(()=>({marginTop:"-1px"}),[]);return(0,o.jsxs)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"}),(0,o.jsx)("path",{d:"M9 22V12h6v10M2 10.6L12 2l10 8.6"})]})}),p=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})}))}}]);