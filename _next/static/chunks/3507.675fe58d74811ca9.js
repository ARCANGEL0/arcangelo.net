"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3507],{15674:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(77232);let n=o.default.button`

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
`},77102:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(14232),n=r(42771),i=r(16361);let s=e=>{let{closeWithTransition:t}=(0,n.N)();return{onKeyDownCapture:(0,o.useCallback)(({key:r})=>"Escape"===r&&t(e),[t,e]),...i.W8}}},93507:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var o=r(37876),n=r(79052),i=r(14232),s=r(77102),a=r(15674),l=r(77232);let d=(0,l.css)`
  animation: gradient 5s ease-in-out alternate infinite;
 background-size: 300% 300%;
 color: #eeeeee;
  content: "";
  inset: 0;
  position: absolute;
`,c=l.default.div`
  h1,
  div {
    align-items: baseline;
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px - 41px - 2px);
    justify-content: space-around;
    padding: 0 22px;

    progress {
    
      border: 1px solid rgb(188, 188, 188);
      height: 6px;
      overflow: hidden;
      position: relative;
      width: 100%;

      &::-webkit-progress-bar {
        background: rgb(230, 230, 230);
      }

      &::-webkit-progress-value {
        background: ${({theme:e})=>e.colors.progressBarRgb};
      }

      &::-moz-progress-bar {
        background: ${({theme:e})=>e.colors.progressBarRgb};
      }

      &:indeterminate {
        /* stylelint-disable-next-line block-no-empty */
        &::-moz-progress-bar {
          ${d}
        }

        /* stylelint-disable-next-line block-no-empty */
        &::after {
          ${d}
        }
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  div {
    margin-top: -10px;
  }

  h1 {
   
    display: flex;
    font-size: 15px;
    font-weight: 400;
    height: 40px;
    place-items: flex-start;
    white-space: nowrap;
    width: 100%;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  nav {
    
   
    bottom: 0;
    box-sizing: content-box;
    display: flex;
    height: 41px;
    padding-bottom: 1px;
    place-items: center;
    position: absolute;
    width: 100%;

    ${a.A} {
      padding-bottom: 1px;
      position: absolute;
      right: 22px;
    }
  }
`;var p=r(42771),u=r(16361),g=r(60109);let h=e=>Array.isArray(e?.[0]),b=({id:e})=>{let{argument:t,closeWithTransition:r,processes:{[e]:l}={},title:d}=(0,p.N)(),{closing:b,fileReaders:f,url:x}=l||{},[m,k]=(0,i.useState)(),[v="",{name:w=""}={}]=m||[],[y,$]=(0,i.useState)(0),C=(0,i.useRef)(),E=(0,i.useMemo)(()=>{if(b||!l)return C.current;let e="Copying",{operation:t}=f?.[0]||{};return t?e=t:x&&!f&&(e="Extracting"),C.current=e,e},[b,f,l,x]),A=(0,i.useRef)(!1),j=(0,i.useCallback)(()=>{A.current=!1,r(e)},[r,e]),z=(0,i.useCallback)(([e,...t])=>{let r=0===t.length;e.read().then(()=>{if($(e=>e+1),r)e.done?.(),j();else{let[{directory:e,name:r}]=t;k([e,{name:r}])}}),r||z(t)},[j]),M=(0,i.useCallback)(([[e,t,r],...o])=>{let n=0;k([t,e]),r.addEventListener("progress",({loaded:e=0})=>{let t=e-n;$(e=>e+t),n=e},{passive:!0}),r.addEventListener("loadend",()=>{o.length>0?M(o):j()},u.w3),r.readAsArrayBuffer(e)},[j]),N=(0,i.useMemo)(()=>h(f)?f.reduce((e,[{size:t=0}])=>e+t,0):f?.length||1/0,[f]),R=(0,s.A)(e);return(0,i.useEffect)(()=>{if(!A.current)if(f)if(f?.length>0)if(A.current=!0,h(f))M(f);else{let[{directory:e,name:t}]=f;k([e,{name:t}]),z(f)}else r(e);else x&&k([(0,n.dirname)(x),{name:(0,n.basename)(x)}])},[r,f,e,M,z,x]),(0,i.useEffect)(()=>{if(A.current){let r=Math.floor(y/N*100);t(e,"progress",r),d(e,`${r}% complete`)}},[t,e,y,d,N]),(0,i.useEffect)(()=>d(e,`${E}...`),[E,e,d]),(0,i.useEffect)(()=>()=>{b&&A.current&&(h(f)?f.forEach(([,,e])=>e.abort()):(f?.forEach(e=>e.abort()),f?.[0]?.done?.()))},[b,f]),(0,o.jsxs)(c,{onContextMenu:g.CH,...R,children:[(0,o.jsx)("h1",{children:w?`${E} '${w.length>=37?`${w.slice(0,37)}...`:w}'`:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:v?`To '${v}'`:""}),(0,o.jsx)("progress",{max:N,value:N===1/0?void 0:y})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(a.A,{onClick:()=>r(e),children:"Cancel"})})]})}}}]);