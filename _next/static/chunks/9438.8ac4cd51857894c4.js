"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3010,9438],{29438:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var n=i(37876),r=i(14232);let s=[["Libera.Chat","web.libera.chat/webirc/websocket/"],["ErgoTestnet","testnet.ergo.chat/webirc"],["InspIRCd Testnet","testnet.inspircd.org",8097]];var o=i(43010),a=i(42771),c=i(91372),l=i(16361);let f=({id:e})=>{let{linkElement:t,processes:{[e]:{libs:[i=""]=[]}={}}={},title:f}=(0,a.N)(),[d,u]=(0,r.useState)(!1),[w,h]=(0,r.useState)([]),p=(0,r.useRef)(null);return(0,r.useEffect)(()=>{window.localStorage.getItem("kiwiirc")||window.localStorage.setItem("kiwiirc",JSON.stringify((e=>{let t=`${e}${[9,9,9,9].map(e=>Math.floor(Math.random()*e)).join("")}`;return{networks:s.map(([e,i,n=443],r)=>({buffers:[{enabled:!0,name:"*",settings:{}}],connection:{direct:!0,encoding:"utf8",nick:t,port:n,server:i,tls:!0},id:r+1,name:e,settings:{show_raw_caps:!1}}))}})("Guest")))},[]),(0,r.useEffect)(()=>{if(d&&p.current?.contentWindow){let i=p.current.contentWindow;i?.kiwi.on("irc.join",({channel:e},{name:t})=>h(i=>[...new Set([...i,`${e}/${t}`])])),i?.kiwi.on("irc.part",({channel:e},{name:t})=>h(i=>i.filter(i=>i!==`${e}/${t}`))),t(e,"peekElement",p.current)}},[e,t,d]),(0,r.useEffect)(()=>{f(e,`${c.A.IRC.title}${0===w.length?"":` - ${w.join(", ")}`}`)},[w,e,f]),(0,n.jsxs)("div",{children:[!d&&(0,n.jsx)(o.default,{}),(0,n.jsx)("iframe",{ref:p,height:"100%",onLoad:()=>u(!0),src:i,title:e,width:"100%",...l.aI})]})}},43010:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var n=i(77232);let r=n.default.div`
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
`}}]);