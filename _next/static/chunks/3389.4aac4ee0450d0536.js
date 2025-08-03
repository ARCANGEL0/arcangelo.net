"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3389],{78011:(e,t,n)=>{n.d(t,{A:()=>h});var i=n(79052),r=n(14232),a=n(49697),l=n(84966),s=n(54188),o=n(46711),c=n(42771),u=n(70185),f=n(16361),p=n(60109),d=n(17786);let h=({callback:e,directory:t=f.Bn,id:n,onDragLeave:h,onDragOver:m,updatePositions:x})=>{let{url:g}=(0,c.N)(),j=(0,d.w)(),{iconPositions:b,sortOrders:y,setIconPositions:w}=(0,u.w)(),{exists:v,mkdirRecursive:A,updateFolder:$,writeFile:T}=(0,o.f)(),C=(0,r.useCallback)(async(e,t,r)=>{if(n)if(t){let a=(0,i.join)(f.Bn,e);if(await A(f.Bn),await T(a,t,!0))return r===s.z.UPDATE_URL&&g(n,a),$(f.Bn,e),(0,i.basename)(a)}else r===s.z.UPDATE_URL&&g(n,e);return""},[n,A,$,g,T]),{openTransferDialog:F}=(0,a.A)();return{onDragLeave:h,onDragOver:e=>{m?.(e),(0,p.CH)(e)},onDrop:r=>{if(f.jj.has((0,p.uQ)(t)))return;if(x&&r.target instanceof HTMLElement){let{files:e,text:n}=(0,l.bn)(r);if(0===e.length&&""===n)return;(async()=>{let a={x:r.clientX,y:r.clientY},l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;let[e]=l;if(!e||e.startsWith(t)&&(0,i.basename)(e)===(0,i.relative)(t,e))return;l=l.map(e=>(0,i.basename)(e))}else l=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);l=await Promise.all(l.map(async e=>{let n=`${t}/${e}`;if(!b[n]||!await v(n))return e;let r=0;do r+=1,n=`${t}/${(0,i.basename)(e,(0,i.extname)(e))} (${r})${(0,i.extname)(e)}`;while(b[n]&&await v(n));return(0,i.basename)(n)})),(0,p.$Y)(t,r.target,b,y,a,l,w,v)})()}let a="string"==typeof n;a&&!x&&t===f.Bn&&j.current[n]?.componentWindow?.focus(f.VD),(0,l.nX)(r,e||C,t,F,a)}}}},79572:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(77232);let r=(e,t)=>(0,i.css)`
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
`},93389:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var i=n(37876),r=n(14232),a=n(77232),l=n(79572);let s=a.default.div`
  font-size: 13px;
  overflow: hidden auto;

  &.drop {
    ${(0,l.A)("Drop OTF/TTF/WOFF file here","#000")};
  }

  ol {
    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }

    padding: 2px 0;
  }

  figure {
    align-items: center;
    display: flex;
    padding-top: 2px;

    figcaption {
      padding-right: 15px;
    }
  }
`;var o=n(78011),c=n(46711),u=n(42771),f=n(91372),p=n(60109);let d=[12,18,24,36,48,60,72],h=4/3,m=e=>e?e.en||Object.values(e)[0]:"",x=(0,r.memo)(({font:e,fontSize:t,hideLabel:n,text:a})=>{let l=(0,r.useRef)(null),s=(0,i.jsx)("canvas",{ref:l});return((0,r.useEffect)(()=>{if(!e||!l.current)return;let n=Math.ceil(t*h),i=e.getPath(a||"The quick brown fox jumps over the lazy dog. 1234567890",0,n,n),{x2:r,y2:s}=i.getBoundingBox();l.current.setAttribute("height",`${Math.ceil(s)}`),l.current.setAttribute("width",`${Math.ceil(r)}`),i.draw(l.current.getContext("2d"))},[e,t,a]),n)?s:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:t}),s]})}),g=(0,r.memo)(({id:e})=>{let{processes:{[e]:{url:t=""}={}}={},title:a,url:l}=(0,u.N)(),{readFile:h}=(0,c.f)(),[g,j]=(0,r.useState)(),b=(0,r.useCallback)(async t=>{let{default:i}=await Promise.all([n.e(4311),n.e(7256)]).then(n.bind(n,99927)),{buffer:r}=await h(t);try{j(i.parse(r))}catch{l(e,""),j(void 0)}},[e,h,l]),{name:y,types:w,version:v}=(0,r.useMemo)(()=>{let e=[];return g?.supported&&e.push("OpenType Layout"),g?.outlinesFormat==="truetype"&&e.push("TrueType Outlines"),{name:m(g?.names.fullName),types:e.join(", "),version:m(g?.names.version)}},[g]);return(0,r.useEffect)(()=>{t&&b(t)},[b,t]),(0,r.useEffect)(()=>a(e,y?`${y} (${f.A.OpenType.title})`:f.A.OpenType.title),[e,y,a]),(0,i.jsx)(s,{className:t?"":"drop",...(0,o.A)({id:e}),onContextMenuCapture:p.CH,children:g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Font name: ",y]}),(0,i.jsxs)("li",{children:["Version: ",v]}),(0,i.jsx)("li",{children:w})]}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(x,{font:g,fontSize:15,text:"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",hideLabel:!0})}),(0,i.jsx)("li",{children:(0,i.jsx)(x,{font:g,fontSize:15,text:"1234567890.:,; ' \" (!?) +-*/=",hideLabel:!0})})]}),(0,i.jsx)("ol",{children:d.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(x,{font:g,fontSize:e})},e))})]})})})}}]);