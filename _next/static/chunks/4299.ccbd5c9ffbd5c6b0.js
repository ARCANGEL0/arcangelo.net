"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4299],{34299:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(74848),r=i(96540),l=i(21507),c=i(33540);let n=c.default.div`
  background-color: rgba(30,30,30,0.5);
  display: flex;
  flex-direction: column;
  height: 100%;

  .others {
    
    background: rgba(100,100,100,0.2);
    margin-top: 10px;
    margin-right: 50%;
   margin-left: 4.5%;
    padding-top: 1%;

  }
  div {
    height: calc(100% - 56px - 80px);
    overflow-y: scroll;
  }

  
  h4 {
    font-weight: 400;
    color: #fff;
  }

  h2 {
    font-size: 18px;
  
    color: #fff;
   border-bottom: 1px solid rgba(150,150,150,0.3);
    text-align: center;
    padding: 16px 24px;
  }

  h4 {
    padding: 0 0 6px 23px;
  }

  nav {
   
    height: 80px;
    width: 100%;

    button {
      background-color: rgb(100, 100, 100,0.5);
      border-radius: 10px;
      color: #000;
      font-size: 15px;
      font-weight: 600;
      height: 32px;
      margin: 24px;
      position: absolute;
      right: 0;
      width: 200px;

      &:hover {
        background-color: rgb(216, 216, 216);
      }

      &:active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`,a=c.default.ul`
 
  padding-bottom: 9px;
  position: relative;
  width: 100%;

  &::before {
   content: "";
    height: 1px;
    left: 17px;
    position: absolute;
    top: -1px;
    width: calc(100% - 34px);
  }

  li {
    &:active {
      scale: 0.975;
    }

    &:first-child {
      margin-top: 2px;
    }

    &:hover {
      background-color: rgb(222, 222, 222);
    }

    figure {
      color: #cecece;
      display: flex;
      padding: 0 23px;

      figcaption {
        font-size: 15px;
        padding: 0 12px;

      }

      picture {
        
        display: flex;
        height: 40px;
        place-content: center;
        place-items: center;
        width: 40px;
      }
    }

    &.selected {
      background-color: rgb(12, 131, 218);

      figcaption {
        color: #fff;
      }
    }

    padding: 5px 0;
  }
`;var s=i(91745),d=i(62104),p=i(25573),h=i(1364),x=i(87952),g=i(31251),f=i(48060),u=i(37e3);let b=new Set(["BoxedWine","JSDOS","Marked","MonacoEditor","OpenType","PDF","Paint","Photos","Ruffle","TinyMCE","V86","VideoPlayer","Vim","Webamp"]),k=({icon:e,onClick:t,selected:i,title:r})=>(0,o.jsx)("li",{className:i?"selected":"",children:(0,o.jsx)(x.A,{onClick:t,children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(g.A,{alt:r,displaySize:24,imgSize:32,src:e}),(0,o.jsx)("figcaption",{children:r})]})})}),m=(0,r.memo)(({id:e})=>{let{closeWithTransition:t,open:i,processes:{[e]:c}={}}=(0,d.N)(),{foregroundId:g,setForegroundId:m,updateRecentFiles:j}=(0,h.w)(),{url:w}=c||{},C=w?(0,u.uQ)(w):"",v=(0,s.YD)(C),{title:y,icon:S}=v&&p.A[v]||{},[A,D]=(0,r.useState)(v),[E,O]=(0,r.useState)(!1),W=(0,r.useRef)(""),N=(0,r.useCallback)(o=>{i(o,{url:w}),t(e),w&&o&&j(w,o)},[t,e,i,j,w]),z=(0,r.useCallback)(e=>{W.current===e?N(e):(W.current=e,setTimeout(()=>{W.current=""},f.UW.DOUBLE_CLICK),D(e))},[N]),_=(0,l.A)(e);return(0,r.useEffect)(()=>{let i=g===e;E?i||t(e):(i||m(e),setTimeout(()=>O(!0),f.UW.WINDOW))},[E,t,g,e,m]),(0,o.jsxs)(n,{ref:e=>e?.focus(f.VD),onContextMenu:u.CH,..._,children:[(0,o.jsx)("h2",{children:"How do you want to open this file?"}),(0,o.jsxs)("div",{children:[y&&S&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Suggested application"}),(0,o.jsx)(a,{..._,children:(0,o.jsx)(k,{icon:S,onClick:()=>z(v),selected:A===v,title:y},y)}),(0,o.jsx)("h4",{children:"❱❱❱ Other apps"})]}),(0,o.jsx)(a,{$hideBorder:!y||!S,children:Object.entries(p.A).filter(([e])=>b.has(e)&&e!==v).map(([e,{icon:t,title:i}])=>(0,o.jsx)(k,{icon:t,onClick:()=>z(e),selected:A===e,title:i},i))})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(x.A,{onClick:()=>N(A),children:"OK"})})]})})},21507:(e,t,i)=>{i.d(t,{A:()=>c});var o=i(96540),r=i(62104),l=i(48060);let c=e=>{let{closeWithTransition:t}=(0,r.N)();return{onKeyDownCapture:(0,o.useCallback)(({key:i})=>"Escape"===i&&t(e),[t,e]),...l.W8}}}}]);