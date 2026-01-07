"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{10039:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var i=r(74848),a=r(16286),s=r(96540),n=r(33540);let l=n.default.footer`
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: rgb(247, 247, 247);
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${({theme:e})=>e.sizes.fileExplorer.statusBarHeight};
  padding: 0 4px 0 5px;
  position: relative;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 9px;

    &::after {
      border-right: 1px solid rgb(247, 247, 247);
      content: "";
      height: 11px;
      margin-left: 12px;
      position: relative;
      top: 3px;
    }

    &.selected {
      padding-left: 7px;

      &::after {
        margin-left: 13px;
      }
    }
  }

  nav {
    display: flex;
    position: absolute;
    right: 4px;

    button {
      border: 1px solid transparent;
      display: flex;
      height: ${({theme:e})=>e.sizes.fileExplorer.statusBarHeight};
      place-content: center;
      place-items: center;
      width: 22px;

      picture {
        position: relative;
        top: -1px;
      }

      &:hover {
        background-color: rgb(77, 77, 77);
        border: 1px solid rgb(99, 99, 99);
      }

      &.active {
        background-color: rgb(102, 102, 102);
        border: 1px solid rgb(131, 131, 131);

        picture {
          padding-left: 1px;
          top: 0;
        }
      }
    }
  }
`;var o=r(41017),c=r(90925),p=r(37e3),d=r(85845);let u=({count:e,directory:t,fileDrop:r,selected:u,setView:f,view:g})=>{let{exists:x,lstat:h,stat:b}=(0,o.f)(),[m,v]=(0,s.useState)(d.df),[w,E]=(0,s.useState)(!1),{sizes:k}=(0,n.useTheme)(),y=(0,s.useCallback)(e=>E(e>k.fileExplorer.minimumStatusBarWidth),[k.fileExplorer.minimumStatusBarWidth]),C=(0,s.useRef)(null);return(0,s.useEffect)(()=>{(async()=>v(await u.reduce(async(e,r)=>{let i=await e;if(-2===i)return -2;let s=(0,a.join)(t,r);try{if(await x(s))return(await h(s)).isDirectory()?-2:(i===d.df?0:i)+(await b(s)).size}catch{}return e},Promise.resolve(d.df))))()},[t,x,h,u,b]),(0,s.useLayoutEffect)(()=>{C.current&&y(C.current.getBoundingClientRect().width)},[y]),(0,c.A)(C.current,(0,s.useCallback)(([{contentRect:{width:e=0}={}}])=>y(e),[y])),(0,i.jsxs)(l,{ref:C,onContextMenuCapture:p.CH,...r,children:[(0,i.jsxs)("div",{...(0,p.Pf)("Total item count"),children:[e," item",1===e?"":"s"]}),w&&u.length>0&&(0,i.jsxs)("div",{className:"selected",...(0,p.Pf)("Selected item count and size"),children:[u.length," item",1===u.length?"":"s"," selected",m!==d.df&&-2!==m?`\u00A0\u00A0${(0,p.ET)(m)}`:""]})]})}},90925:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(96540);let a=(e,t)=>{let[r,a]=(0,i.useState)();(0,i.useEffect)(()=>{t&&a(new ResizeObserver(t))},[t]),(0,i.useEffect)(()=>(e instanceof HTMLElement&&r?.observe(e),()=>{e instanceof HTMLElement&&r?.unobserve(e)}),[e,r])}}}]);