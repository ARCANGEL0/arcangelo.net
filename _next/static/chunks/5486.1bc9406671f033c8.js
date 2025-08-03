"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5313,5486],{22391:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(16361),o=i(60109);let n=(e,t=!0,i=.5,n=.75)=>{let s=Math.min(e,(0,o.Bv)()-r.D5);return{animate:"active",exit:{height:`${s*n}px`,transition:{duration:r.f9.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:r.f9.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${s}px`,paddingTop:0},initial:{height:`${s*n}px`,paddingTop:t?`${s*i}px`:0}}}}},25313:(e,t,i)=>{i.d(t,{UNKNOWN_ICON:()=>r});let r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB0ElEQVR42u2ZVWLbQBiEp/K6DOpb+LF4ip47oCuULpAYH3uAlcbMNOZpm0lsizWz+/3CgEc9aiuFHz9/YYVIcjAAkODcYYDoTyPQHZse7m0E49tLkid/8rz4BuD7RgFIYpW+fvmMXStJEvz+/RuvXr1KG41mVhT5RiECRMUYsUuF0Nv18+fPcXp6ktbrjSzPhRBCDxxUpVKpG+Ls7DSt1eprhwjYWwAdJQD9EGftELV2iCiHCAQMAvT04sVznJ+fpdVqNcuj1hOBJj0wCvECFxcXaeWhIuEUYFADAGZCXF5dpg/3DxmA99YIZVmGRXr58lVqi1CMER8+fOh+pkUS5XIZd7d3ylEIViI5M7wCITqa1wOAtDVPKD1A45andC1ES/N6DZCuzKsIWZr3RoikMK4jZGleD2BsntDOA74tT0gIOZrXEfJmXiti24KleBi1M09SThBIU/P6mZiW5qEXMW3NUzuMGrc8NYRssSE0hFyZVxFyLVgdIcOW51oIWZqHfj9ga15+rOLb8lIRg47m9RoQ/R+eeb0GaGleR8i15XWEqL5VFIIJ87V5u70nvrm+AUF0/8nx4ZlxgOj+9KeTk+Oz8/rrYnIYBAoWeNSj9qwWS/T9vUU9j2EAAAAASUVORK5CYII="},41824:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(77232),o=i(16361);let n=(e,t,i=0,n=!1)=>(0,r.css)`
  background-color: hsla(0, 0%, 13%, 95%);
  border: ${n?"1px solid hsla(0, 0%, 25%, 75%)":"none"};
  border-bottom-width: 0;
  top: 3vh;
  padding-top: 2px;
  bottom: ${o.D5}px;
  box-shadow: 3px 0 10px 3px hsla(0, 0%, 10%, 50%);
  contain: strict;
  display: flex;
  height: 100%;
  left: ${i}px;
  max-height: ${e}px;
  max-width: ${t}px;
  position: absolute;
  width: calc(100% - ${i}px);
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(0, 0%, 13%, 70%);
  }
`},55486:(e,t,i)=>{i.r(t),i.d(t,{NO_RESULTS:()=>W,SINGLE_LINE_HEIGHT_ADDITION:()=>K,default:()=>F});var r=i(37876),o=i(79052),n=i(77232),s=i(14232),l=i(20779),a=i(84788),c=i(54239);let p=(0,s.memo)(()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M28 8.578V32H2V0h17.422zM20 8h4.578L20 3.422V8zm6 22V10h-8V2H4v28h22z"})})),d=(0,s.memo)(()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 4v24H0V4h32zM2 6v10.578l7-6.984 10 10 4-4 7 6.984V6H2zm0 20h20.578L9 12.406l-7 7.016V26zm28 0v-.578l-7-7.016L20.406 21l5.016 5H30zm-5-14q-.406 0-.703-.297T24 11t.297-.703T25 10t.703.297T26 11t-.297.703T25 12z"})})),h=(0,s.memo)(()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"m32 24.125-8-4V24H0V8h24v3.875l8-4v16.25zM22 10H2v12h20V10zm8 1.109-6 3.016v3.75l6 3.016V11.11z"})}));var x=i(25313),u=i(14113),g=i(16361);let f=(0,n.css)`
  @supports not selector(::-webkit-scrollbar) {
    scrollbar-width: thin;
  }

  &::-webkit-scrollbar {
    width: ${g.a_}px;
  }
`;var m=i(40661);let b=n.default.div`
  ${(0,m.A)(g.a_,-2,-1)}
  ${f}
  background-color: rgba(20, 20, 20, 95%);
  border: 15px solid rgba(0,0,0,0%);
  border-bottom: none;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 20px;
  place-items: center;
  position: relative;
  scrollbar-gutter: auto;
  width: 100%;

  picture {
    padding-bottom: 18px;

    &:not(:first-of-type) {
      position: absolute;

      img {
        height: 64px;
        max-height: 64px;
        max-width: 64px;
        min-height: 64px;
        min-width: 64px;
        position: relative;
        width: 64px;
      }
    }
  }

  h1 {
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    word-break: break-word;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 13px;
    font-weight: 300;
  }

  table {
    border-collapse: collapse;
    border-top: 2px solid rgb(161, 161, 161);
    display: grid;
    font-size: 12px;
    gap: 10px;
    margin-top: 15px;
    padding: 15px 0;
    padding-bottom: 0;
    width: 100%;

    th {
      max-width: 100px;
      min-width: 100px;
      padding: 10px;
      text-align: left;
      white-space: nowrap;
      width: 100px;
    }

    td {
      color: rgb(208, 208, 208);
      padding-right: 5px;
      word-break: break-all;
    }

    tr:first-child {
      td {
        text-decoration: underline;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  ol {
    border-top: 2px solid rgb(161, 161, 161);
    margin-bottom: 7px;
    margin-top: 15px;
    padding: 10px 0;
    width: 100%;

    li {
      button {
        color: #fff;
        display: flex;
        font-size: 12px;
        padding: 8px 18px;
        place-items: start;

        svg {
          fill: #fff;
          height: 16px;
          margin-right: 12px;
          width: 16px;
        }
      }

      &:hover {
        background-color: rgb(42, 42, 42);
      }
    }
  }

  .back {
    border-radius: 50%;
    display: flex;
    height: 32px;
    left: 6px;
    place-content: center;
    place-items: center;
    position: absolute;
    top: 6px;
    width: 32px;

    svg {
      fill: #fff;
      height: 18px;
      margin-right: 2px;
      transform: scaleX(-1);
      width: 18px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 20%);
    }
  }
`;var w=i(96438),v=i(46711),j=i(70185),A=i(3861),y=i(42670),S=i(60109),k=i(97246);let z=({openApp:e,setActiveItem:t,singleLineView:i,url:n})=>{let{fs:l,stat:a}=(0,v.f)(),[p,d]=(0,s.useState)(),[h,f]=(0,s.useState)({icon:x.UNKNOWN_ICON}),m=(0,o.extname)(h?.url||n),{updateRecentFiles:z}=(0,j.w)(),$=(0,s.useCallback)(()=>{e(h?.pid,{url:h?.url}),h?.url&&h?.pid&&z(h?.url,h?.pid)},[h?.pid,h?.url,e,z]),C=(0,s.useRef)(null),I=!!h?.url&&(0,S.t$)(h.url),V=!!h?.url&&h.url.startsWith("nostr:"),R=!!h?.pid&&n===h.url&&(0,o.extname)(n)===g.b3,E=p?.isDirectory()||!m&&!I&&!V,N=I||V?n:h?.url,T=(0,s.useRef)(n),O="/"===N?g.l6:N?(0,o.basename)(N,g.b3):"";return(0,s.useEffect)(()=>{a(n).then(e=>T.current===n&&d(e)),(0,w.cK)(l,n).then(e=>e&&T.current===n&&f(e))},[l,a,n]),(0,s.useEffect)(()=>{C.current?.scrollTo({behavior:"smooth",top:0}),T.current=n},[n]),h?.url&&p?(0,r.jsxs)(b,{ref:C,children:[i&&(0,r.jsx)("div",{className:"back",onClick:()=>t(""),children:(0,r.jsx)(u.UU,{})}),(0,r.jsx)(y.A,{displaySize:64,imgSize:96,src:h?.icon}),(0,r.jsx)(k.A,{alt:O,icon:h?.icon,imgSize:64,showShortcutIcon:!1,subIcons:h?.subIcons,view:"icon"}),(0,r.jsx)("h1",{onClick:$,children:O}),(0,r.jsx)("h2",{children:(0,w.$A)(p,m,I,R,V)}),!R&&h?.url&&(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Location"}),(0,r.jsx)("td",{onClick:$,children:h.url})]}),!I&&!V&&!E&&(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Last modified"}),(0,r.jsx)("td",{children:new Date((0,c.nR)(h.url,p)).toLocaleString(g.Xn)})]})]})}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(A.A,{onClick:$,children:[(0,r.jsx)(u.v5,{}),"Open"]})}),"."!==(0,o.dirname)(N)&&(0,r.jsx)("li",{children:(0,r.jsxs)(A.A,{onClick:()=>e("FileExplorer",{url:(0,o.dirname)(N)}),children:[(0,r.jsx)(u.BG,{}),"Open ",E?"folder":"file"," location"]})})]})]}):(0,r.jsx)(r.Fragment,{children:" "})};var $=i(64148),C=i(42771),I=i(50980);let V={icon:x.UNKNOWN_ICON},R=({active:e,details:t,openApp:i,searchTerm:n,setActiveItem:l,url:a})=>{let{fs:p,readFile:d,stat:h}=(0,v.f)(),{updateRecentFiles:x}=(0,j.w)(),[f,m]=(0,s.useState)(),[b,A]=(0,s.useState)(V),z=(0,o.extname)(b?.url||a),R=(0,o.basename)(a,g.b3),E=(0,s.useMemo)(()=>{let e=R;try{e=e.replace(RegExp(`(${n})`,"i"),"<span>$1</span>")}catch{}return e},[R,n]),N=!!b?.url&&(0,S.t$)(b.url),T=N?a:a||b?.url,O=(0,s.useMemo)(()=>f&&!f.isDirectory()?`Last modified: ${new Date((0,c.nR)(T,f)).toLocaleString(g.Xn,{dateStyle:"short",timeStyle:"short"})}`:"",[T,f]),[_,D]=(0,s.useState)(!1),B=(0,s.useRef)(null),M=(0,I.K)(B,".list"),L=!!b?.pid&&a===b.url&&(0,o.extname)(a)===g.b3,H=f?.isDirectory()||!z&&!N,U=!!b?.url&&b.url.startsWith("nostr:"),{onContextMenuCapture:G}=(e=>{let{contextMenu:t}=(0,$.b)(),{open:i}=(0,C.N)();return(0,s.useMemo)(()=>t?.(()=>[{SvgIcon:u.BG,action:()=>i("FileExplorer",{url:(0,o.dirname)(e)},""),label:"Open file location"}]),[t,i,e])})(b?.url),K=(0,s.useRef)();return(0,s.useEffect)(()=>{let e=t||_;!f&&e&&h(a).then(m),K.current?M||(K.current.abort(),K.current=void 0):(e||M)&&b===V&&(K.current=new AbortController,(0,w.cK)(p,a,K.current.signal).then(e=>{e&&A(e),K.current=void 0}))},[t,p,_,b,M,h,f,a]),(0,s.useEffect)(()=>()=>{try{K.current?.abort()}catch{}},[]),(0,r.jsxs)("li",{ref:B,"aria-label":R,className:e?"active-item":void 0,onMouseOver:()=>!t&&D(!0),title:O?`${T}

${O}`:T,children:[(0,r.jsxs)("figure",{className:t?void 0:"simple",onClick:async()=>{i(b?.pid,L?void 0:{url:(0,o.extname)(T)===g.b3&&(0,c.DB)(await d(T))?.url||T}),T&&b?.pid&&x(T,b?.pid)},onContextMenuCapture:N||U||L||H?void 0:G,children:[(0,r.jsx)(y.A,{displaySize:t?32:16,imgSize:t?32:16,src:b?.icon}),(0,r.jsx)(k.A,{alt:E,icon:b?.icon,imgSize:t?32:16,showShortcutIcon:!1,subIcons:b?.subIcons,view:"icon"}),(0,r.jsxs)("figcaption",{children:[(0,r.jsx)("h1",{dangerouslySetInnerHTML:{__html:E}}),t&&f&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:(0,w.$A)(f,z,N,L,U)}),!N&&!L&&!H&&(0,r.jsx)("h2",{children:O})]})]})]}),!e&&(0,r.jsx)("div",{className:"select",onClick:()=>l(a),children:(0,r.jsx)(u.UU,{})})]})},E=n.default.figcaption`
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-top: 7px;

  &.disabled {
    pointer-events: none;
    user-select: none;
  }

  &:hover {
    background-color: rgba(60, 60, 60, 95%);
  }
`,N=({activeTab:e,activeItem:t,details:i,openApp:o,results:n,searchTerm:l,setActiveItem:a,changeTab:c,title:p})=>{let d=(0,s.useMemo)(()=>1===n.length&&n[0].ref===W,[n]);return 0===n.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)("figure",{children:[(0,r.jsx)(E,{className:e===p||"Best match"===p?"disabled":void 0,onClick:()=>c?.(p),children:p}),(0,r.jsx)("ol",{children:d?(0,r.jsxs)("li",{className:"no-results",children:["❱❱ No results found for '",l,"'"]}):n.map(({ref:e})=>(0,r.jsx)(R,{active:t===e,details:i,openApp:o,searchTerm:l,setActiveItem:a,url:e},e))})]})},T=n.default.figure`
  ol {
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    max-height: 97px;
    overflow-y: hidden;
    padding-top: 9px;

    li {
      background-color: rgba(60, 60, 60, 85%);
      border: 1px solid rgba(75, 75, 75, 85%);
      border-radius: 15px;
      display: flex;
      padding: 4px 10px;
      place-content: center;
      place-items: center;
      white-space: nowrap;

      h2 {
        bottom: 1px;
        display: block;
        font-size: 12px;
        font-weight: 400;
        height: 16px;
        max-width: 235px;
        overflow: hidden;
        padding-top: 1px;
        place-items: center;
        position: relative;
        text-overflow: ellipsis;
      }

      picture,
      img {
        height: 16px;
        margin-right: 5px;
        width: 16px;
      }

      &:hover {
        background-color: rgba(80, 80, 80, 85%);
      }
    }
  }
`,O=n.default.div`
  color: #fff;
  display: flex;
  height: ${({theme:e})=>`calc(100% - ${e.sizes.search.headerHeight}px - ${e.sizes.search.inputHeight}px)`};
  position: absolute;
  top: ${({theme:e})=>`${e.sizes.search.headerHeight}px`};
  width: 100%;

  .list {
    ${(0,m.A)(g.a_,-2,-1)}
    ${f}
    background-color: rgba(20, 20, 20, 95%);
    overflow-y: auto;
    scrollbar-gutter: auto;
    width: 100%;

    li {
      &.active-item {
        background-color: rgba(30, 80, 115, 25%);
      }

      position: relative;

      figure {
        display: flex;
        padding: 12px;
        padding-right: 32px;

        picture,
        img {
          height: 32px;
          max-height: 32px;
          max-width: 32px;
          min-height: 32px;
          min-width: 32px;
          width: 32px;
        }

        figcaption {
          font-size: 8px;
          margin-top: -2px;
          max-width: calc(100% - 26px);
          padding-left: 8px;

          h1 {
            font-size: 14.5px;
            font-weight: 400;
            overflow: hidden;
            padding-right: 12px;
            text-overflow: ellipsis;

            span {
              font-weight: 600;
            }
          }

          h2 {
            font-size: 13px;
            font-weight: 300;
            padding-top: 6px;
          }
        }

        &.simple {
          padding: 10px;

          picture,
          img {
            height: 16px;
            max-height: 16px;
            max-width: 16px;
            min-height: 16px;
            min-width: 16px;
            width: 16px;
          }

          figcaption {
            h1 {
              font-size: 14px;
              font-weight: 300;
              white-space: nowrap;
            }
          }
        }

        picture:not(:first-child) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }

      div.select {
        border-left: 1px solid transparent;
        display: flex;
        height: 100%;
        place-content: center;
        place-items: center;
        position: absolute;
        right: 0;
        top: 0;
        width: 26px;

        svg {
          fill: #fff;
          height: 16px;
          width: 16px;
        }
      }

      &:hover {
        background-color: rgba(100, 100, 100, 95%);

        div.select {
          background-color: rgba(60, 60, 60, 95%);
          border-left: 1px solid rgba(40, 40, 40, 95%);
        }

        figure {
          &:not(:hover) {
            background-color: rgba(60, 60, 60, 95%);
          }
        }

        &.active-item {
          background-color: rgba(16, 88, 145, 95%);
        }
      }

      div.select:hover {
        background-color: rgba(100, 100, 100, 95%);
      }
    }
  }
`;var _=i(41824);let D=(0,n.default)(l.m.nav)`
  ${({$singleLine:e,theme:t})=>(0,_.A)(t.sizes.search.maxHeight+(e?K:0),t.sizes.search.size,t.sizes.taskbar.button.width,!0)}

  backdrop-filter: ${({theme:e})=>`blur(${e.sizes.taskbar.panelBlur})`};

  @keyframes fade-in {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
  }

  .search {
    width: 100%;


    input {
      appearance: none;
   background: rgba(100,100,100,0.1);
  border: 0; 
      border-radius: 0;
      color: #cecece;
      font-size: 15px;
      height: 40px;
      padding: 10px;
      padding-left: 37px;
      width: 100%;

      &::placeholder {
        color: #cecece;
        inset: 0;
        left: 37px;
        opacity: 100%;
        overflow: visible;
      }

      &::-webkit-search-cancel-button {
        margin: 0 0 0 8px;
      }
    }
    #searchMenu {
    top: 5vh;
    background: rgba(0,0,0,0.8);
    } 


    svg {
      bottom: 12px;
      height: 16px;
      fill: #cecece;
      left: 12px;
      position: absolute;
      width: 16px;
      z-index: 2;
    }
  }
  
  .content {
    animation: fade-in 0.85s;
    height: calc(100% - 40px);

    .no-results {
      display: flex;
      font-size: 14px;
      font-weight: 300;
      padding: 5px 15px;
      place-items: center;
      pointer-events: none;
      user-select: none;

      svg {
        fill: #fff;
        height: 32px;
        margin-right: 12px;
        width: 32px;
      }
    }

    .tab {
      color: rgb(175, 175, 175);
      display: flex;
      flex-direction: column;
      height: ${({theme:e})=>`calc(100% - ${e.sizes.search.headerHeight}px - ${e.sizes.search.inputHeight}px)`};
      place-content: center;
      place-items: center;
      position: absolute;
      top: ${({theme:e})=>`${e.sizes.search.headerHeight}px`};
      width: 100%;

      h1 {
        font-size: 28px;
        font-weight: 400;
        padding-top: 14px;
      }

      h3 {
        font-size: 14px;
        font-weight: 400;
        padding-top: 8px;
      }

      svg {
        fill: rgb(115, 115, 115);
        height: 128px;
        width: 128px;
      }
    }

    > nav {
      position: absolute;
      right: 25px;
      top: 15px;

      .close-button svg {
        fill: rgb(200, 200, 200);
        height: 14px;

        &:hover {
          fill: #fff;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`,B=n.default.div`
  ${(0,m.A)(g.a_,-2,-1)}
  ${f}
  color: #fff;
  display: flex;
  height: ${({theme:e})=>`calc(100% - ${e.sizes.search.headerHeight}px - ${e.sizes.search.inputHeight}px)`};
  overflow: hidden;
  place-content: space-evenly;
  place-items: start;
  position: absolute;
  top: ${({theme:e})=>`${e.sizes.search.headerHeight}px`};
  width: 100%;

  @media (hover: none), (pointer: coarse) {
    overflow-y: scroll;
  }

  @supports (not (scrollbar-gutter: stable)) {
    padding-right: ${g.a_}px;

    @supports not selector(::-webkit-scrollbar) {
      padding-right: 8px;
    }

    @media (hover: hover), (pointer: fine) {
      &:hover {
        padding-right: 0;
      }
    }

    &:hover {
      overflow-y: scroll;
    }
  }

  @supports (scrollbar-gutter: stable) {
    &:hover {
      overflow-y: auto;
    }
  }

  figcaption {
    font-size: 13px;
    font-weight: 600;

    svg {
      fill: #fff;
      height: 16px;
      margin-bottom: -3px;
      margin-right: 6px;
      width: 16px;
    }
  }

  figure.card {
    background-color: rgba(20, 20, 20, 60%);
    border-radius: 5px;
    padding: 8px 12px;

    &:hover {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 40%);
    }

    > figcaption {
      padding-left: 2px;
      white-space: nowrap;
    }

    ol {
      display: flex;
      gap: 9px;
      margin-top: 10px;
      place-content: space-between;

      li {
        display: flex;
        flex-direction: column;
        max-width: 80px;
        min-width: 80px;
        text-align: left;

        img {
          background-color: rgba(60, 60, 60, 85%);
          border-radius: 5px;
          margin-bottom: 4px;
          min-height: 80px;
          min-width: 80px;
          padding: 12px;
          pointer-events: all;
          user-select: all;

          &:hover {
            background-color: rgba(16, 88, 145, 85%);
          }
        }

        h4 {
          font-size: 11px;
          font-weight: 400;
          padding-left: 2px;
        }

        &:hover {
          h4 {
            text-decoration: underline;
          }
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 10px 20px 24px;
    width: 100%;

    &:first-child {
      padding-bottom: ${({$singleLine:e})=>e?0:void 0};
    }
  }

  &.single-line {
    flex-direction: column;
    place-content: flex-start;

    figure.card {
      width: min-content;

      ol {
        gap: 16px;
      }
    }

    section {
      padding-right: 24px;

      &:not(:first-child) {
        padding-top: 16px;
      }
    }
  }
`;var M=i(4213),L=i(22391),H=i(75014),U=i(91372),G=i(65927);let K=34,W="NO_RESULTS",P={Documents:{icon:(0,r.jsx)(p,{}),subtitle:"for documents",title:"Documents"},Photos:{icon:(0,r.jsx)(d,{}),title:"Photos"},Videos:{icon:(0,r.jsx)(h,{}),title:"Videos"}},F=({toggleSearch:e})=>{let t=(0,s.useRef)(null),i=(0,s.useRef)(null),{recentFiles:p,updateRecentFiles:d}=(0,j.w)(),{lstat:h,readFile:x}=(0,v.f)(),[u,f]=(0,s.useState)("All"),{sizes:{search:m}}=(0,n.useTheme)(),[b,w]=(0,s.useState)(550),k=b<550,$=(0,L.A)(m.maxHeight+(k?K:0),!0,.1,0),I=(()=>{let{sizes:{search:e}}=(0,n.useTheme)(),t=`-${e.inputHeight}px`;return{animate:"active",exit:{bottom:t,position:"absolute",transition:{duration:g.f9.TASKBAR_ITEM/10,ease:"easeIn"}},initial:"initial",transition:{duration:g.f9.TASKBAR_ITEM/1,ease:"easeOut"},variants:{active:{bottom:0,position:"absolute"},initial:{bottom:t,position:"absolute"}}}})(),[V,R]=(0,s.useState)(!1),E=(0,s.useCallback)(e=>{e?.focus(g.VD),setTimeout(()=>R(!0),400),t.current=e},[]),[_,F]=(0,s.useState)(""),Y=(0,G.SQ)(_),[X,Z]=(0,s.useState)(""),[Q,q]=(0,s.useState)(""),{open:J}=(0,C.N)(),[ee,et]=(0,s.useState)([]),ei=(0,s.useMemo)(()=>"All"===u?Y[0]:Object.fromEntries(ee)[u]?.[0],[u,Y,ee]),er=(0,s.useRef)(null),eo=(0,s.useCallback)(e=>{t.current&&(t.current.value=("All"===e?t.current.value:`${e}: ${t.current.value}`).replace(`${u}: `,""),er.current?.scrollTo(0,0)),q(""),f(e)},[u]),en=(0,s.useCallback)((t,i)=>{e(!1),J(t,i)},[J,e]),es=(0,s.useRef)(0),el=(0,s.useRef)(!1),ea=(0,s.useCallback)(()=>{el.current||(el.current=!0,(0,S.Ig)([G.xc,G.iu]))},[]);return(0,s.useEffect)(()=>{!ei?.ref||X&&X===ei?.ref&&Q?!ei&&Q&&q(""):(Z(ei.ref),i.current&&i.current.clientWidth>550&&q(ei.ref))},[Q,X,ei]),(0,s.useEffect)(()=>{let e=()=>w(i.current?.clientWidth||0);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.useEffect)(()=>{Y.length>0?Y.reduce(async(e,t)=>{let i=await e,r=(0,o.extname)(t.ref),n="";return r===g.b3?t.ref.startsWith(`${g.zQ}/`)?n="Photos":t.ref.startsWith(`${g.Cj}/`)?n="VideoPlayer":{pid:n}=(0,c.Aw)(await h(t.ref))?(0,c.lH)(t.ref):(0,c.DB)(await x(t.ref)):n=(0,c.YD)(r),"Photos"===n?i.Photos.push(t):"VideoPlayer"===n?i.Videos.push(t):i.Documents.push(t),i},Promise.resolve({Documents:[],Photos:[],Videos:[]})).then(e=>et(Object.entries(e))):et([])},[h,x,Y]),(0,r.jsx)(D,{ref:i,$singleLine:k,id:"searchMenu",onBlurCapture:r=>(0,M.Q2)(r,i.current,e,t.current,M.BN,!0),onKeyDown:({key:t})=>{"Escape"===t&&e(!1)},...$,...g.W8,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"content",onContextMenu:S.CH,children:[(0,r.jsx)("nav",{children:(0,r.jsx)(A.A,{className:"close-button",onClick:()=>e(!1),...(0,S.Pf)("Close Search"),children:(0,r.jsx)(H.US,{})})}),!_&&"All"===u&&(0,r.jsx)(B,{$singleLine:k,className:k?"single-line":void 0,children:(0,r.jsx)("section",{children:p.length>0&&(0,r.jsxs)(T,{children:[(0,r.jsx)("figcaption",{children:"Recent"}),(0,r.jsx)("ol",{children:p.map(([e,t,i],n)=>(0,r.jsxs)("li",{onClick:()=>{en(t,{url:e}),0!==n&&setTimeout(()=>d(e,t,i),g.f9.TASKBAR_ITEM*g.iC)},children:[(0,r.jsx)(y.A,{displaySize:16,imgSize:16,src:U.A[t]?.icon}),(0,r.jsx)("h2",{children:i||(0,o.basename)(e,(0,o.extname)(e))})]},`${e}${t}`))})]})})}),!_&&"All"!==u&&(0,r.jsxs)("div",{className:"tab",children:[P[u].icon,(0,r.jsxs)("h1",{children:["Search ",P[u].title.toLowerCase()]}),(0,r.jsxs)("h3",{children:["Start typing to search"," ",P[u].subtitle||P[u].title.toLowerCase()]})]}),_&&(0,r.jsxs)(O,{children:[(!k||!Q)&&(0,r.jsxs)("div",{ref:er,className:"list",children:[(0,r.jsx)(N,{activeItem:Q,activeTab:u,openApp:en,results:[ei||{ref:W}],searchTerm:_,setActiveItem:q,title:"Best match",details:!0}),Y.length>1&&ee.map(([e,t])=>("All"===u||u===e)&&(0,r.jsx)(N,{activeItem:Q,activeTab:u,changeTab:eo,openApp:en,results:t.filter(e=>ei!==e),searchTerm:_,setActiveItem:q,title:e},e))]}),Q&&ei&&(0,r.jsx)(z,{openApp:en,setActiveItem:q,singleLineView:k,url:Q||ei?.ref})]})]}),(0,r.jsxs)(l.m.div,{className:"search",...I,children:[(0,r.jsx)(a.Search,{}),(0,r.jsx)("input",{ref:E,onChange:()=>{let e="All"===u?"":`${u}: `,i=t.current?.value.startsWith(e)?t.current?.value.replace(e,""):t.current?.value;window.clearTimeout(es.current),es.current=window.setTimeout(()=>F(i??""),es.current>0?g.Sq:0)},onClick:el.current?void 0:ea,onKeyDown:({key:e})=>{if(ea(),"Enter"===e&&ei?.ref){let e=i.current?.querySelector(".list li:first-child figure");e?.click()}},placeholder:"Type here to search",style:{caretColor:V?void 0:"transparent"},...G.Le})]})]})})}},65927:(e,t,i)=>{i.d(t,{iu:()=>c,Le:()=>d,xc:()=>p,od:()=>f,SQ:()=>m});var r=i(79052),o=i(14232),n=i(46711);let s=JSON.parse('{"X":[".cache",".json"],"P":[".md",".txt",".whtml"]}');var l=i(16361),a=i(60109);let c="/.index/search.lunr.json",p="/System/lunr/lunr.min.js",d={"aria-label":"Search",enterKeyHint:"search",inputMode:"search",name:"search",type:"search",...l.m8},h=Object.create(null),x=[],u=async(e,t)=>{if(window.lunr||await (0,a.aY)([p]),!t&&!h?.search){let e=await fetch(c,l.c9);try{let{paths:t,...i}=JSON.parse(await e.text());h=window.lunr?.Index.load(i),x=t}catch{}}let i=t??h,r=[],o=e.trim().replace(/\./g," ").replace(/\*~\^-\+/g,"");try{r=i.search?.(o),r?.length===0&&(r=i.search?.(`${o.split(" ").join("* ")}*`))}catch{}return r?r.map(e=>({...e,ref:(Object.prototype.hasOwnProperty.call(x,e.ref)?x[e.ref]:e.ref)||""})):[]},g=async(e,t)=>{let i=t?._getFs("/")?.fs,o=i?.getOverlayedFileSystems(),n=o?.writable,l=("function"==typeof n?._cache?.map?.keys&&[...n._cache.map.keys()]||Object.keys(n?._cache?.map||{})||[]).filter(e=>{let t=(0,a.uQ)(e);return!!t&&!s.X.includes(t)}),c=await Promise.all(l.map(async t=>{let i=(0,r.basename)(t,(0,r.extname)(t));return{name:i,path:t,text:s.P.includes((0,a.uQ)(t))?`${i} ${(await e(t)).toString()}`:i}})),p=window.lunr?.(function(){this.ref("path"),this.field("name"),this.field("text"),c.forEach(e=>this.add(e))});return window.lunr?.Index.load(p.toJSON())},f=async(e,t,i)=>{let r=await u(e),o=await g(t,i);return[...r,...await u(e,o)].sort((e,t)=>t.score-e.score)},m=e=>{let[t,i]=(0,o.useState)([]),{readFile:r,rootFs:s}=(0,n.f)();return(0,o.useEffect)(()=>{(async()=>{e.length>0?(window.lunr||await (0,a.aY)([p]),u(e).then(i),g(r,s).then(t=>u(e,t).then(e=>i(t=>[...t,...e].sort((e,t)=>t.score-e.score))))):i([])})()},[r,s,e]),t}},75014:(e,t,i)=>{i.d(t,{Su:()=>l,US:()=>a,_X:()=>s,gR:()=>n});var r=i(37876),o=i(14232);let n=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),s=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),l=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]})),a=(0,o.memo)(()=>(0,r.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,r.jsx)("circle",{cx:"8",cy:"8",r:"8"})," "]})]}))},96438:(e,t,i)=>{i.d(t,{$A:()=>c,V0:()=>a,cK:()=>l});var r=i(79052),o=i(54239),n=i(16361),s=i(60109);let l=async(e,t,i)=>{if(!e)return;let{subIcons:l,icon:a,pid:c=n.hr[0],url:p}=await new Promise(i=>{e.lstat(t,(r,n)=>{let l=!r&&!!n&&n.isDirectory(),a=(0,s.uQ)(t);a&&!l?(0,o.O6)(e,t,a,e=>i(e)):(0,o.qz)(e,e.getRootFS(),t,l,!1,e=>i(e),!1)})});if(i?.aborted)return;let d=(0,s.t$)(p);return{icon:await (0,o.$j)(e,(0,r.join)(d?n.zP:n.jv,`${d?new URL(p).pathname.replace("/",""):p}${n.V9}`))||a,pid:c,subIcons:l?.includes(n.N9)?l:[],url:p||t}},a=(e,t)=>{let i=0===e.value.length,r=()=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))};r(),requestAnimationFrame(()=>i&&1===t.length&&2===e.value.length&&r())},c=(e,t,i,r,n)=>n?"Nostr URI":r?"App":i?"YouTube Video":e?.isDirectory()||!t?"File folder":(0,o.ti)(t)}}]);