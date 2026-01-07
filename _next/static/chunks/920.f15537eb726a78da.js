"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920,1583],{20920:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o=r(74848),n=r(33540),i=r(57725),a=r(43680),l=r(48060);let d=n.default.div`
  article {
    ${(0,a.A)(l.Gm,0,0,"light")};
    background-color: rgba(10,10,10,0.3);
    box-sizing: border-box;
    font-size: 16px;
    color: #cecece;
    height: 100%;
    line-height: 1.5;
    overflow-y: auto;
    padding: 16px 32px;
    width: 100%;
    word-wrap: break-word;

    * {
      all: revert;
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
        monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgba(27, 31, 35, 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }

    &.drop {
      ${(0,i.A)("Drop markdown file here","#000")};
    }
  }
`;var c=r(16286),s=r(96540),b=r(55650),g=r(41017),u=r(62104),A=r(37e3),p=r(22951);let m=({containerRef:e,id:t,loading:r,setLoading:o,url:n})=>{let{readFile:i}=(0,g.f)(),{prependFileToTitle:a}=(0,b.A)(t),{processes:{[t]:{libs:l=[]}={}}={}}=(0,u.N)(),d=(0,p.U)(),m=(0,s.useCallback)(()=>e.current?.querySelector("article"),[e]),h=(0,s.useCallback)(async()=>{let e=await i(n),t=m();t instanceof HTMLElement&&(t.classList.remove("drop"),t.innerHTML=window.DOMPurify.sanitize(window.marked.parse(e.toString(),{headerIds:!1,mangle:!1})),t.querySelectorAll("a").forEach(e=>e.addEventListener("click",t=>d(t,e.href||"",e.pathname,e.textContent||""))),t.scrollTop=0),a((0,c.basename)(n))},[m,d,a,i,n]);(0,s.useEffect)(()=>{r&&(0,A.aY)(l).then(()=>{window.marked&&o(!1)})},[l,r,o]),(0,s.useEffect)(()=>{r||(n?h():m()?.classList.add("drop"))},[m,h,r,n])};var h=r(14153);let k=({id:e})=>(0,o.jsx)(h.A,{StyledComponent:d,id:e,useHook:m,children:(0,o.jsx)("article",{})})},14662:(e,t,r)=>{r.d(t,{EU:()=>i,Jo:()=>l,rH:()=>n});var o=r(48060);let n=e=>e?.mode.isReadOnly()||!e?.getContent(),i=(e,t)=>{let r=e.editorContainer?.querySelector(".tox-editor-header");r instanceof HTMLDivElement&&r.addEventListener("click",()=>{r.removeAttribute("title"),e.mode.set("design"),t()},o.w3),e.mode.set("readonly")},a=new Set(["wikipedia.org","archive.org"]),l=e=>{if(!e)return!1;try{let{hostname:t}=new URL(e),[,r,o]=t.split(".");return a.has(`${r}.${o}`)||a.has(t)}catch{return!1}}},14153:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(74848),n=r(96540),i=r(51583),a=r(8218),l=r(62104);let d=(0,n.memo)(({id:e,useHook:t,StyledComponent:r,children:d})=>{let{processes:{[e]:{url:c=""}={}}}=(0,l.N)(),s=(0,n.useRef)(null),[b,g]=(0,n.useState)(!0),u=(0,n.useMemo)(()=>({contain:"strict",visibility:b?"hidden":"visible"}),[b]);return t({containerRef:s,id:e,loading:b,setLoading:g,url:c}),(0,o.jsxs)(o.Fragment,{children:[b&&(0,o.jsx)(i.default,{}),(0,o.jsx)(r,{ref:s,style:u,...(0,a.A)({id:e}),children:d})]})})},51583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var o=r(33540);let n=o.default.div`
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
`},8218:(e,t,r)=>{r.d(t,{A:()=>A});var o=r(16286),n=r(96540),i=r(51780),a=r(16091),l=r(13296),d=r(41017),c=r(62104),s=r(1364),b=r(48060),g=r(37e3),u=r(96119);let A=({callback:e,directory:t=b.Bn,id:r,onDragLeave:A,onDragOver:p,updatePositions:m})=>{let{url:h}=(0,c.N)(),k=(0,u.w)(),{iconPositions:f,sortOrders:w,setIconPositions:x}=(0,s.w)(),{exists:v,mkdirRecursive:$,updateFolder:y,writeFile:E}=(0,d.f)(),z=(0,n.useCallback)(async(e,t,n)=>{if(r){if(t){let i=(0,o.join)(b.Bn,e);if(await $(b.Bn),await E(i,t,!0))return n===l.z.UPDATE_URL&&h(r,i),y(b.Bn,e),(0,o.basename)(i)}else n===l.z.UPDATE_URL&&h(r,e)}return""},[r,$,y,h,E]),{openTransferDialog:C}=(0,i.A)();return{onDragLeave:A,onDragOver:e=>{p?.(e),(0,g.CH)(e)},onDrop:n=>{if(b.jj.has((0,g.uQ)(t)))return;if(m&&n.target instanceof HTMLElement){let{files:e,text:r}=(0,a.bn)(n);if(0===e.length&&""===r)return;(async()=>{let i={x:n.clientX,y:n.clientY},a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,o.basename)(e)===(0,o.relative)(t,e))return;a=a.map(e=>(0,o.basename)(e))}else e instanceof FileList?a=[...e].map(e=>e.name):a=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);a=await Promise.all(a.map(async e=>{let r=`${t}/${e}`;if(!f[r]||!await v(r))return e;let n=0;do n+=1,r=`${t}/${(0,o.basename)(e,(0,o.extname)(e))} (${n})${(0,o.extname)(e)}`;while(f[r]&&await v(r));return(0,o.basename)(r)})),(0,g.$Y)(t,n.target,f,w,i,a,x,v)})()}let i="string"==typeof r;i&&!m&&t===b.Bn&&k.current[r]?.componentWindow?.focus(b.VD),(0,a.nX)(n,e||z,t,C,i)}}}},55650:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(96540),n=r(62104),i=r(25573),a=r(48060);let l=e=>{let{title:t}=(0,n.N)(),[r]=e.split(a.QB),{title:l}=i.A[r]||{};return{appendFileToTitle:(0,o.useCallback)((r,o)=>{let n=r?` - ${r}${o?` ${a.g6}`:""}`:"";t(e,`${l}${n}`)},[e,l,t]),prependFileToTitle:(0,o.useCallback)((r,o,n)=>{let i=r?`${o?`${a.g6} `:""}${r}${n?" ":" - "}`:"";t(e,`${i}${l}`)},[e,l,t])}}},22951:(e,t,r)=>{r.d(t,{U:()=>s});var o=r(16286),n=r(96540),i=r(14662),a=r(91745),l=r(62104),d=r(37e3),c=r(1364);let s=()=>{let{open:e}=(0,l.N)(),{updateRecentFiles:t}=(0,c.w)();return(0,n.useCallback)((r,n,l,c)=>{if((0,d.CH)(r),(0,d.t$)(n))e("VideoPlayer",{url:n});else if((0,i.Jo)(n))e("Browser",{initialTitle:c,url:n});else if(l&&""!==(0,o.relative)(decodeURI((n.startsWith("/")?n:`/${n}`).replace(window.location.origin,"")),decodeURI(l)))window.open(n,"_blank","noopener, noreferrer");else{let r=(0,a.YD)((0,d.uQ)(l));if(r){let o=decodeURI(l);e(r,{url:o}),o&&t(o,r)}}},[e,t])}},57725:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(33540);let n=(e,t)=>(0,o.css)`
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
`},43680:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(33540),n=r(48060);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},a=(e=n.Gm,t=0,r=0,a="dark")=>(0,o.css)`
  overflow: auto;
  scrollbar-gutter: stable;

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: ${i[a].thumb} ${i[a].track};
  }

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[a].buttonHover};
    }

    &:active {
      background-color: ${i[a].active};
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
    background-blend-mode: ${i[a].blendMode};
  }
`}}]);