"use strict";(self.webpackChunklna=self.webpackChunklna||[]).push([[333],{3333:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var o=t(2791),i=t(4581);const s=(0,t(1191).ZP)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;function r(e){return null!==e&&void 0!==e&&e===e.window}var l=t(184);const d=()=>{const[e,n]=(0,o.useState)(!1),t=t=>{const o=((e,n)=>{if("undefined"===typeof window)return 0;const t=n?"scrollTop":"scrollLeft";let o=0;var i;return r(e)?o=e[n?"pageYOffset":"pageXOffset"]:e instanceof Document?o=e.documentElement[t]:e&&(o=e[t]),e&&!r(e)&&"number"!==typeof o&&(o=null===(i=(e.ownerDocument||e).documentElement)||void 0===i?void 0:i[t]),o})(t.target,!0);!e&&o>350?n(!0):o<=350&&n(!1)};(0,o.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[]);return(0,l.jsx)(s,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,l.jsx)(i.l,{className:"",imgId:"",src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=333.94f8ecfb.chunk.js.map