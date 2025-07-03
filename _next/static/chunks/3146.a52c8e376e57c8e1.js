"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3146],{68553:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(74848),n=r(30743),s=r(62104);let a=({id:e,onClick:t})=>{let{closeWithTransition:r}=(0,s.N)(),a=()=>r(e);return(0,i.jsxs)("nav",{className:"buttons",children:[(0,i.jsx)(n.A,{onClick:t||a,children:"OK"}),(0,i.jsx)(n.A,{onClick:a,children:"Cancel"})]})}},63146:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var i=r(74848),n=r(16286),s=r(96540),a=r(14953),l=r.n(a),o=r(21507),c=r(68553),d=r(41017);let p=e=>{let{stat:t}=(0,d.f)(),[r,i]=(0,s.useState)();return(0,s.useEffect)(()=>{!r&&e&&t(e).then(i)},[t,r,e]),r};var x=r(91745),h=r(16091),u=r(62104),f=r(25573),g=r(1364),b=r(31251),j=r(48060),m=r(37e3);let w=e=>{if(!e)return"";let t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),n=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");return`${t}/${r}/${i} & ${n}:${s}`},$=(0,s.memo)(({icon:e,id:t,isShortcut:r,pid:a,url:l})=>{let{closeWithTransition:o,icon:$}=(0,u.N)(),{setIconPositions:S}=(0,g.w)(),y=(0,s.useMemo)(()=>(0,m.uQ)(l||""),[l]),v=(0,x.ti)(y),k=(0,s.useRef)(null),{fs:A,readdir:C,rename:z,stat:D,updateFolder:E}=(0,d.f)(),N=p(l),[F,M]=(0,s.useState)(0),[R,T]=(0,s.useState)(0),[L,P]=(0,s.useState)(0),H=(0,s.useMemo)(()=>N?.isDirectory(),[N]),_=L||(H?0:N?.size),K=(0,s.useRef)(!1),O=(0,s.useRef)(),[Q,V]=(0,s.useState)(j.tz),W=(0,s.useCallback)(async()=>{if(k.current&&l&&k.current.value!==(0,n.basename)(l)){let e=(0,h.P$)(k.current.value).trim();if(e?.endsWith(".")&&(e=e.slice(0,-1)),e){let t=(0,n.dirname)(l),i=`${(0,n.join)(t,e)}${r?(0,n.extname)(l):""}`;await z(l,i)&&E(t,i,l),(0,n.dirname)(l)===j.Bn&&S(e=>{let{[l]:t,...r}=e;return t&&(r[i]=t),r})}}o(t)},[o,t,r,z,S,E,l]);return(0,s.useEffect)(()=>{H&&A&&(Q===j.tz&&(0,x.q_)(A,l).then(e=>e&&V(e)),$(t,Q||j.tz))},[Q,A,t,H,$,l]),(0,s.useEffect)(()=>{if(!K.current&&!r&&H){K.current=!0,O.current=new AbortController;let e=async t=>{if(O.current?.signal.aborted)return;let r=await C(t),i=0,s=0,a=0;for(let l of r){let r=await D((0,n.join)(t,l));r.isDirectory()?(s+=1,await e((0,n.join)(t,l))):(i+=1,a+=r.size)}P(e=>e+a),M(e=>e+i),T(e=>e+s)};e(l)}},[H,r,C,D,l]),(0,s.useEffect)(()=>()=>O.current?.abort(),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("table",{className:"general",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"header",children:[(0,i.jsxs)("th",{scope:"row",children:[(0,i.jsx)(b.A,{imgSize:32,src:H?Q:e}),r&&(0,i.jsx)(b.A,{imgSize:48,src:j.D7})]}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:k,defaultValue:(0,n.basename)(l,r?(0,n.extname)(l):void 0),enterKeyHint:"done",onKeyDown:e=>{"Enter"===e.key&&((0,m.CH)(e),W())},type:"text",...j.m8})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:H?"Type:":"Type of file:"}),(0,i.jsx)("td",{children:H?"File folder":r||v?`${r?"Shortcut":v} (${y})`:"File"})]}),!H&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:a?"Opens with:":"Description:"}),(0,i.jsxs)("td",{children:[a&&f.A[a]?.icon&&(0,i.jsx)(b.A,{imgSize:16,src:f.A[a].icon}),a?f.A[a]?.title||a:(0,n.basename)(l||"")]})]}),!H&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Location:"}),(0,i.jsx)("td",{children:(0,n.dirname)(l)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Size"}),(0,i.jsx)("td",{children:_?`${(0,m.ET)(_)} (${_.toLocaleString()} byte${1===_?"":"s"})`:"0 bytes"})]}),H&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Contains"}),(0,i.jsx)("td",{children:`${F.toLocaleString()} Files, ${R.toLocaleString()} Folders`})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Created at:"}),(0,i.jsx)("td",{children:`------ ${w(N?.ctime)}`})]}),!N?.isDirectory()&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Modified at:"}),(0,i.jsx)("td",{children:N&&`------ ${w(new Date((0,x.nR)(l,N)))}`})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Accessed at:"}),(0,i.jsx)("td",{children:`------ ${w(N?.atime)}`})]})]})}),(0,i.jsx)(c.A,{id:t,onClick:W})]})});var S=r(33540);let y=(f.A.Properties.defaultSize?.width||0)-6-8-6-24-74,v=S.default.div`
  padding: 0 ${8}px 0 ${6}px;
   background-color: rgba(30,30,30,0.5);
  table.general {
    color: #fff;
    height: calc(100% - 36px - 28px);
    padding-top: 14px;
    position: relative;
    top: -1px;
    width: 100%;

    tbody {
      display: flex;
      flex-direction: column;
      font-size: 11.5px;
      gap: 11px;

      tr {
        display: flex;
        padding: 0 ${12}px;
        place-content: center;
        place-items: center;

        &.header {
          margin-bottom: -4px;
          margin-top: -2px;
          padding: 0 10px 0 12px;
        }
      }

      th {
        font-weight: 400;
        text-align: left;
        width: ${74}px;

        picture:nth-child(2) {
          position: absolute;
          top: -2px;
        }
      }

      td {
        cursor: text;
        display: flex;
        max-width: ${y}px;
        overflow: auto;
        scrollbar-width: none;
        user-select: text;
        white-space: nowrap;
        width: calc(100% - 70px);

        &.spacer {
          border-bottom: 1px solid rgb(160, 160, 160);
          display: block;
          width: 100%;
        }

        input {
          background: rgba(200,200,200,0.3);
          font-size: 11px;
          height: 23px;
          color: #fff;
          border-radius: 5px;
          padding: 10px;
          width: 100%;
        }

        img {
          margin-right: 7px;
        }
      }
    }
  }

  nav {
    &.tabs {
      display: flex;
      height: 28px;
      padding-top: 7px;
      position: relative;
      z-index: 1;

      button {
        background: rgba(255, 255, 255,0.4);
        border-radius: 5px;
    border: 0;
        border-bottom-width: 0;
        display: flex;
        font-size: 11.5px;
        height: 21px;
        letter-spacing: -0.25px;
        line-height: 16px;
        padding: 1px 6px;
        place-content: center;
        width: auto;
        z-index: 2;

        &.inactive {
          background-color: rgb(240, 240, 240);
          border-bottom: 1px solid rgb(217, 217, 217);
          height: 19px;
          left: -1px;
          position: relative;
          top: 2px;
          z-index: 1;

          &:first-child {
            left: 2px;
          }

          &:hover {
            background-color: rgb(155, 249, 155);
            border: 0;
          }
        }
      }
    }

    &.buttons {
      display: flex;
      gap: 8px;
      height: 35px;
      margin-right: -1px;
      place-content: flex-end;
      place-items: center;

      button {
        height: 21px;
        line-height: 19px;
      }
    }
  }
`;var k=r(30743),A=r(28424),C=r(55650);let z=l()(()=>r.e(4286).then(r.bind(r,94286)),{loadableGenerated:{webpack:()=>[94286]}}),D=new Set(["PDF","Photos","Ruffle","VideoPlayer","Webamp"]),E=new Set([".jpg","jpeg",".tif",".tiff"]),N=({id:e})=>{let{icon:t,processes:{[e]:r}={}}=(0,u.N)(),{shortcutPath:a,url:l}=r||{},c=a||l||"",d=p(c),[{getIcon:x,icon:h,pid:f}]=(0,A.A)(c,d?.isDirectory()),{prependFileToTitle:g}=(0,C.A)(e),b=(0,s.useRef)(),w=(0,s.useRef)(null),S=(0,o.A)(e),[y,N]=(0,s.useState)("general"),F=!!r?.shortcutPath,[M,R]=(0,s.useState)({}),T="details"===y,L=(0,s.useMemo)(()=>(0,n.extname)(c),[c]);return(0,s.useEffect)(()=>{t(e,h),"function"==typeof x&&".exe"===L.toLowerCase()&&(b.current=new AbortController,x(b.current.signal)),c&&g((0,n.basename)(c,a?L:void 0),!1,!0)},[L,c,x,h,e,g,t,a]),(0,s.useEffect)(()=>()=>{try{b?.current?.abort?.()}catch{}},[]),(0,s.useEffect)(()=>w.current?.focus(j.VD),[]),(0,i.jsxs)(v,{ref:w,onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,m.CH)(e)},...S,children:[(0,i.jsx)("nav",{className:"tabs",children:D.has(f)&&!F&&(0,i.jsx)(k.A,{className:T?void 0:"inactive",onClick:T?void 0:()=>N("details"),children:"Details"})}),"general"===y&&(0,i.jsx)($,{icon:h,id:e,isShortcut:F,pid:f,url:c}),T&&(0,i.jsx)(z,{hasExif:E.has(L.toLowerCase()),id:e,metaData:M,setMetaData:R,url:l})]})}},30743:(e,t,r)=>{r.d(t,{A:()=>n});var i=r(33540);let n=i.default.button`

   background-color: rgb(100, 100, 100,0.5);
      border-radius: 10px;
  color: #000;
  display: grid;
  font-family: ${({theme:e})=>e.formats.systemFont};
  font-size: 12px;
  height: 23px;
  line-height: ${21}px;
  transition: background-color 0.25s ease;
  width: 73px;

  &:focus,
  &.focus {
   
    line-height: ${19}px;
  }

  &:hover {
     background-color: rgb(216, 216, 216);

    line-height: ${21}px;
  }

  &:active {
 background-color: #000;

    line-height: ${21}px;
    transition: none;
  }

  &:disabled {
    background-color: rgba(36, 36, 36, 0.5);
    border: 1px solid rgba(17, 17, 17, 0.7);
    color:rgb(97, 98, 105);
    line-height: ${21}px;
  }
`},21507:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(96540),n=r(62104),s=r(48060);let a=e=>{let{closeWithTransition:t}=(0,n.N)();return{onKeyDownCapture:(0,i.useCallback)(({key:r})=>"Escape"===r&&t(e),[t,e]),...s.W8}}},28424:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(96540),n=r(91745),s=r(41017),a=r(56431),l=r(48060),o=r(37e3);let c={icon:"",pid:"",url:""},d=(e,t=!1,r=!1,d=!0)=>{let[p,x]=(0,i.useState)(c),h=(0,i.useRef)(!1),u=e=>{x(e),h.current=!1},{fs:f,rootFs:g}=(0,s.f)();return(0,i.useEffect)(()=>{if(f&&g&&!h.current&&d&&p===c){h.current=!0;let i=t?"":(0,o.uQ)(e);i&&(!t||l.jj.has(i)||(0,a.isMountedFolder)(g.mntMap[e]))?(0,n.O6)(f,e,i,u):(0,n.qz)(f,g,e,t,r,u)}},[f,r,p,t,d,e,g]),[p,x]}},55650:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(96540),n=r(62104),s=r(25573),a=r(48060);let l=e=>{let{title:t}=(0,n.N)(),[r]=e.split(a.QB),{title:l}=s.A[r]||{};return{appendFileToTitle:(0,i.useCallback)((r,i)=>{let n=r?` - ${r}${i?` ${a.g6}`:""}`:"";t(e,`${l}${n}`)},[e,l,t]),prependFileToTitle:(0,i.useCallback)((r,i,n)=>{let s=r?`${i?`${a.g6} `:""}${r}${n?" ":" - "}`:"";t(e,`${s}${l}`)},[e,l,t])}}}}]);