"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6358],{16358:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var a=r(74848),n=r(33540),l=r(96540);let i=(0,l.memo)(()=>(0,a.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"m30.297 7.297 1.406 1.406L16 24.406.297 8.703l1.406-1.406L16 21.594z"})})),o=(0,l.memo)(()=>(0,a.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M30.547 23.953 16 9.422 1.453 23.953.047 22.547 16 6.578l15.953 15.969z"})}));var s=r(48470),c=r(48060);let d=(0,n.default)(s.m.section)`
  top: 3vh;
  backdrop-filter: ${({theme:e})=>`blur(${e.sizes.taskbar.panelBlur})`};
  background-color: ${({theme:e})=>e.colors.taskbar.background};
  border: ${({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  border-right: 0;
  bottom: ${c.D5}px;
  position: absolute;
  right: 0;
  z-index: 10000;

  table {
    padding: 4px 10px 19px;
    white-space: nowrap;

    td {
      color: #fff;
      display: inline-table;
      height: 40px;
      line-height: 32px;
      margin: 0 1px;
      text-align: center;
      width: 46px;

      &.prev,
      &.next {
        color: rgb(125, 125, 125);
      }
    }

    thead {
      font-size: 12px;

      td[colspan] {
        display: table-cell;
        padding: 0;

        div {
          display: flex;
          font-size: 15px;
          padding: 0 16px 0 12px;
          place-content: space-between;

          header {
            color: rgb(223, 223, 223);

            &:hover {
              color: #fff;
            }

            &:active {
              color: rgb(165, 156, 156);
            }
          }
        }
      }

      td:not([colspan]) {
        height: auto;
        margin-top: -1px;
      }

      nav {
        display: flex;
        flex-direction: row;
        gap: 32px;
        padding-top: 2px;

        button {
          fill: rgb(223, 223, 223);

          &:hover {
            fill: #fff;
          }

          &:active {
            fill: rgb(165, 156, 156);
          }

          svg {
            width: 16px;
          }
        }
      }
    }

    tbody.curr td.today {
      background-color: rgb(0, 120, 215);
      color: #fff;
      position: relative;

      &::after,
      &::before {
        content: "";
        position: absolute;
      }

      &::after {
        inset: 0;
      }

      &::before {
        border: 2px solid #000;
        inset: 2px;
      }

      &:hover {
        &::after {
          border: 2px solid rgb(102, 174, 231);
        }
      }

      &:active {
        &::after {
          border: 2px solid rgb(153, 201, 239);
        }
      }
    }
  }
`,h=[[1,"curr"],[2,"curr"],[3,"curr"],[4,"curr"],[5,"curr"],[6,"curr"],[7,"curr"]],p={11:{26:!0}},g=e=>{let t=e.getDate(),r=e.getMonth(),a=e.getFullYear(),n=new Date,l=n.getMonth()===r&&n.getFullYear()===a,i=new Date(a,r,1).getDay(),o=h.slice(0,7-i),s=[...Array.from({length:7-o.length}).map((e,t)=>[new Date(a,r,-t).getDate(),"prev"]).reverse(),...o],c=Array.from({length:new Date(a,r+1,0).getDate()}).map((e,t)=>new Date(a,r,t+1).getDate()).slice(s[s.length-1][0]).map(e=>[e,"curr"]),d=[...s,...c].reduce((e,r,a)=>{a%7==0&&e.push([]);let[n,i]=r;return e[e.length-1].push(l&&"curr"===i&&n===t?[n,"today"]:r),e},[]),p=d[d.length-1],g=Array.from({length:7-p.length}).map((e,t)=>[new Date(a,r+1,t+1).getDate(),"next"]);if(p.push(...g),d.length<6){let[e]=p[p.length-1];return[...d,e>6?h.map(([e])=>[e,"next"]):Array.from({length:7}).map((t,r)=>[r+1+e,"next"]),...4===d.length?[h.map(([e])=>[e+7,"next"])]:[]]}return d},u=(e,t)=>Math.random()*(t-e)+e,x=async(e,t)=>{let{default:a}=await r.e(4685).then(r.bind(r,14685));[[.25,{startVelocity:55}],[.2],[.35,{decay:.91,scalar:.8}],[.1,{decay:.92,scalar:1.2,startVelocity:25}],[.1,{startVelocity:45}]].forEach(([r,n])=>a({...n,angle:u(55,125),origin:{x:e/window.innerWidth,y:t/window.innerHeight},particleCount:Math.floor(200*r),spread:u(50,70)}))};var f=r(47102),m=r(87952),b=r(37e3),v=r(89612);let w=["Su","Mo","Tu","We","Th","Fr","Sa"],D=(0,l.memo)(({toggleCalendar:e})=>{let[t,r]=(0,l.useState)(()=>new Date),[s,h]=(0,l.useState)(()=>g(t)),u=(0,l.useMemo)(()=>new Date,[]),D=(0,l.useMemo)(()=>t.getMonth()===u.getMonth()&&t.getFullYear()===u.getFullYear(),[t,u]),y=e=>{let a=new Date(t),n=a.getMonth()+e;a.setDate(1),a.setMonth(n),(12===n?0:-1===n?11:n)===u.getMonth()&&a.setDate(u.getDate()),r(a),h(g(a))},j=(0,l.useRef)(null),{sizes:{calendar:{maxHeight:M}}}=(0,n.useTheme)(),k=(0,f.A)(M,!1),$=(0,b.Qv)();return(0,l.useEffect)(()=>{j.current?.addEventListener("blur",({relatedTarget:t})=>{if(t instanceof HTMLElement){if(j.current?.contains(t)){j.current?.focus(c.VD);return}let e=document.querySelector("main>nav [role=timer]");if(e instanceof HTMLDivElement&&(e===t||e.contains(t)))return}e(!1)}),j.current?.focus(c.VD)},[e]),s&&(0,a.jsx)(d,{ref:j,"aria-label":"Calendar",onContextMenu:b.CH,...k,...c.W8,children:(0,a.jsxs)("table",{children:[(0,a.jsxs)("thead",{children:[(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:w.length,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("header",{children:`${t.toLocaleString("default",{month:"long"})}, ${t.getFullYear()}`}),(0,a.jsxs)("nav",{children:[(0,a.jsx)(m.A,{onClick:()=>y(-1),children:(0,a.jsx)(o,{})}),(0,a.jsx)(m.A,{onClick:()=>y(1),children:(0,a.jsx)(i,{})})]})]})})}),(0,a.jsx)("tr",{children:w.map(e=>(0,a.jsx)("td",{children:e},e))})]}),(0,a.jsx)("tbody",{className:D?"curr":void 0,children:s?.map(e=>a.jsx("tr",{children:e.map(([e,r])=>a.jsx("td",{ref:e=>{$&&"today"!==r&&v.a(e,!0,2,!0)},className:r,onClick:r=>{p[t.getMonth()+1]?.[e]&&x(r.clientX+23,r.clientY+20)},children:e},`${e}${r}`))},e.toString()))})]})})})},47102:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(48060),n=r(37e3);let l=(e,t=!0,r=.5,l=.75)=>{let i=Math.min(e,(0,n.Bv)()-a.D5);return{animate:"active",exit:{height:`${i*l}px`,transition:{duration:a.f9.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:a.f9.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${i}px`,paddingTop:0},initial:{height:`${i*l}px`,paddingTop:t?`${i*r}px`:0}}}}}}]);