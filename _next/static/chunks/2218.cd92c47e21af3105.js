"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2218],{92218:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var i=r(74848),a=r(33540),o=r(96540),n=r(46285),s=r(48470),l=r(54357),u=r(2566),c=r(61377),d=r(43680),p=r(48060);let h=(0,a.default)(s.m.nav)`
  ${({theme:e})=>(0,c.A)(e.sizes.startMenu.maxHeight,e.sizes.startMenu.size)}
   #startMenu {
   padding: 3%
   background-color: rgba(0,0,0,0.3);
   height: 56vh !important
   } 
  ${u.A} {
    ${(0,d.A)(p.a_,-2,-1)};
    margin-top: 0;
    overflow-x: hidden;
    padding-bottom: ${({theme:e})=>e.sizes.startMenu.sideBar.buttonHeight/2}px;
  
    padding-top: 10%;
    padding-left: 7%;

    ${l.A} {
      width: ${({theme:e})=>`${e.sizes.startMenu.size-e.sizes.startMenu.sideBar.width-p.a_}px`};

      @supports not selector(::-webkit-scrollbar) {
        width: ${({theme:e})=>`${e.sizes.startMenu.size-e.sizes.startMenu.sideBar.width-p.Jf}px`};
      }
    }

    ${u.A} {
      margin: 0;
      overflow: hidden;
      padding: 0;
      scrollbar-gutter: auto;

      figure {
        picture {
          margin-left: 11px;
        }

        &:active {
          picture {
            margin-left: 15px;
          }
        }

        picture,
        svg {
          transition: none;
        }
      }
    }

    @supports not selector(::-webkit-scrollbar) {
      scrollbar-width: ${({$showScrolling:e})=>e?"thin":"none"};
    }

    &::-webkit-scrollbar {
      width: ${({$showScrolling:e})=>e?p.a_:0}px;
    }

    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-track {
      background-color: ${({$showScrolling:e})=>e?void 0:"transparent"};
    }

    &::-webkit-scrollbar-button:single-button {
      background-color: ${({$showScrolling:e})=>e?void 0:"transparent"};
      border: ${({$showScrolling:e})=>e?void 0:"1px solid transparent"};
    }

    &::-webkit-scrollbar-thumb:vertical {
      background-color: ${({$showScrolling:e})=>e?void 0:"rgb(167, 167, 167)"};
    }
  }
`;var b=r(68443);let g=a.default.span`
  backdrop-filter: ${({theme:e})=>`blur(${e.sizes.taskbar.panelBlur})`};
  height: ${({$height:e})=>e};
  inset: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;var $=r(67488),v=r(47102),w=r(59554);let x=({toggleStartMenu:e})=>{let t=(0,o.useRef)(null),{sizes:{startMenu:r}}=(0,a.useTheme)(),[s,l]=(0,o.useState)(!1),u=(0,o.useMemo)(()=>CSS.supports("selector(::-webkit-scrollbar)"),[]),c=(0,o.useMemo)(()=>r.size-(u?p.a_:p.Jf),[u,r.size]),d=(0,o.useCallback)(({clientX:e=0})=>l(e>c),[c]),x=(0,o.useCallback)(e=>{e?.focus(p.VD),t.current=e},[]),f=(0,v.A)(r.maxHeight),{height:k}=f.variants?.active??{};return(0,i.jsxs)(h,{ref:x,$showScrolling:s,id:"startMenu",onBlurCapture:r=>(0,$.Q2)(r,t.current,e,void 0,$.r5),onKeyDown:({key:t})=>{if("Escape"===t)e(!1);else if(1===t.length){e(!1);let r=(0,w.t)($.BN);if(r){r.click();let e=0,i=window.setInterval(()=>{let r=document.querySelector("main > nav .search > input");r&&(0,b.V0)(r,t),(r||++e>10)&&window.clearInterval(i)},50)}}},onMouseLeave:()=>l(!1),onMouseMove:d,...f,...p.W8,children:[(0,i.jsx)(g,{$height:k}),(0,i.jsx)(n.A,{url:p.Z$,hideLoading:!0,hideShortcutIcons:!0,isStartMenu:!0,loadIconsImmediately:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})}},68443:(e,t,r)=>{r.d(t,{$A:()=>u,V0:()=>l,cK:()=>s});var i=r(16286),a=r(91745),o=r(48060),n=r(37e3);let s=async(e,t,r)=>{if(!e)return;let{subIcons:s,icon:l,pid:u=o.hr[0],url:c}=await new Promise(r=>{e.lstat(t,(i,o)=>{let s=!i&&!!o&&o.isDirectory(),l=(0,n.uQ)(t);l&&!s?(0,a.O6)(e,t,l,e=>r(e)):(0,a.qz)(e,e.getRootFS(),t,s,!1,e=>r(e),!1)})});if(r?.aborted)return;let d=(0,n.t$)(c);return{icon:await (0,a.$j)(e,(0,i.join)(d?o.zP:o.jv,`${d?new URL(c).pathname.replace("/",""):c}${o.V9}`))||l,pid:u,subIcons:s?.includes(o.N9)?s:[],url:c||t}},l=(e,t)=>{let r=0===e.value.length,i=()=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value")?.set?.call(e,t),e.dispatchEvent(new Event("input",{bubbles:!0}))};i(),requestAnimationFrame(()=>r&&1===t.length&&2===e.value.length&&i())},u=(e,t,r,i,o)=>o?"Nostr URI":i?"App":r?"YouTube Video":e?.isDirectory()||!t?"File folder":(0,a.ti)(t)},61377:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(33540),a=r(48060);let o=(e,t,r=0,o=!1)=>(0,i.css)`
  background-color: hsla(0, 0%, 13%, 95%);
  border: ${o?"1px solid hsla(0, 0%, 25%, 75%)":"none"};
  border-bottom-width: 0;
  top: 3vh;
  padding-top: 2px;
  bottom: ${a.D5}px;
  box-shadow: 3px 0 10px 3px hsla(0, 0%, 10%, 50%);
  contain: strict;
  display: flex;
  height: 100%;
  left: ${r}px;
  max-height: ${e}px;
  max-width: ${t}px;
  position: absolute;
  width: calc(100% - ${r}px);
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(0, 0%, 13%, 70%);
  }
`},47102:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(48060),a=r(37e3);let o=(e,t=!0,r=.5,o=.75)=>{let n=Math.min(e,(0,a.Bv)()-i.D5);return{animate:"active",exit:{height:`${n*o}px`,transition:{duration:i.f9.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:i.f9.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${n}px`,paddingTop:0},initial:{height:`${n*o}px`,paddingTop:t?`${n*r}px`:0}}}}}}]);