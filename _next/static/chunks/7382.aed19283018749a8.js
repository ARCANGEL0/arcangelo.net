"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583,7382],{57382:(e,t,n)=>{n.r(t),n.d(t,{default:()=>es});var r=n(74848),o=n(16286),i=n(96540);let a=(0,i.memo)(()=>(0,r.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{clipRule:"evenodd",d:"m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z",fillRule:"evenodd"})})),l=(0,i.memo)(()=>(0,r.jsx)("svg",{className:"error",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{clipRule:"evenodd",d:"M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5 10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z",fillRule:"evenodd"})})),s=(0,i.memo)(()=>(0,r.jsx)("svg",{className:"info",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{clipRule:"evenodd",d:"M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z",fillRule:"evenodd"})})),c=(0,i.memo)(()=>(0,r.jsx)("svg",{className:"warning",fill:"currentColor",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{clipRule:"evenodd",d:"M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28 2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z",fillRule:"evenodd"})}));var u=n(33540);let d=u.default.ol`
  bottom: calc(18px + 29px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  place-items: flex-end;
  position: absolute;
  right: 26px;
  width: calc(100% - 80px);

  .notification {
    background: rgb(54, 53, 55);
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 50%);
    color: rgb(186, 182, 192);
    max-width: 100%;
    padding: 12px 14px 12px 12px;
    width: fit-content;

    &:hover {
      background: rgb(54, 53, 55);
    }

    figure {
      display: flex;
      place-items: center;

      svg {
        height: 16px;
        width: 16px;

        &.warning {
          color: rgb(253, 147, 71);
        }

        &.error {
          color: rgb(241, 76, 76);
        }

        &.info {
          color: rgb(55, 148, 255);
        }
      }

      figcaption {
        font-size: 14px;
        max-width: calc(100% - 16px);
        overflow: hidden;
        padding-left: 6px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`,f=u.default.footer`
  background-color: rgb(25, 25, 25);
  border-top: 1px solid rgb(19, 19, 19);
  bottom: 0;
  color: rgb(108, 103, 106);
  display: flex;
  font-size: 16px;
  height: 30px;
  place-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;

  ol.status {
    display: flex;
    place-content: flex-end;
    place-items: center;

    &:first-of-type {
      padding-left: 8px;
    }

    &:last-of-type {
      padding-right: 8px;
    }

    li {
      margin: 0 4px;
      padding: 4px 8px;
      white-space: nowrap;

      button {
        color: inherit;
        font-size: inherit;
        padding: 4px 8px;

        &.pretty {
          position: relative;
          top: -2px;
        }

        svg {
          fill: rgb(108, 103, 106);
          height: 16px;
          width: 16px;
        }
      }

      &:hover {
        background-color: rgb(37, 37, 37);
      }

      &:active {
        background-color: rgb(34, 34, 34);
      }

      &.clickable {
        padding: 0;
      }

      &.save {
        svg {
          margin-top: 4px;
        }
      }
    }
  }
`,p={paths:{vs:"/Apps/MonacoEditor/vs"}},h={".whtml":".html"};var g=n(94268),w=n(48060);let b=e=>{let t=h[e]||e;if(!g.q.has(t))return"";let{id:n=""}=window.monaco.languages.getLanguages().find(e=>e.extensions?.includes(t))||{};return n},m=({relatedTarget:e})=>{if(e instanceof HTMLElement){let t;"actions-container"===e.classList.value?t=e.closest(".monaco-menu-container"):"shadow-root-host"===e.classList.value&&e.shadowRoot instanceof ShadowRoot&&(t=e),t instanceof HTMLElement&&t.closest("section")&&t.closest("section")?.parentNode?.prepend(t)}},v=(e,t)=>{if(!t)return[];let{uri:n}=t.getModel()||{},[r]=n?.path.split("|")||[],o=n?.scheme==="file"?r:e||w.nB;return e&&e!==r?[]:[o,t.getValue()]},y=new Set(["json","css","sass","less","html","markdown","xml"]),x=async e=>["css","sass","less"].includes(e)?{parser:e,plugins:[await n.e(3220).then(n.bind(n,33220))]}:"html"===e?{parser:"html",plugins:[await n.e(9082).then(n.bind(n,29082))]}:"xml"===e?{parser:"xml",plugins:[(await n.e(5984).then(n.bind(n,35984))).default]}:"markdown"===e?{parser:"markdown",plugins:[await n.e(3358).then(n.bind(n,3358))]}:void 0,j=e=>y.has(e.toLowerCase()),O=async(e,t)=>{let r=e.toLowerCase();if("json"===r)try{return JSON.stringify(JSON.parse(t),void 0,2)}catch{return t}return(await n.e(8463).then(n.bind(n,68463))).format(t,await x(r))};var k=n(55650),C=n(41017),$=n(62104),A=n(87952),E=n(37e3);let P=({id:e})=>{let{processes:{[e]:t}}=(0,$.N)(),{editor:n,url:u}=t||{},{updateFolder:p,writeFile:h}=(0,C.f)(),{prependFileToTitle:g}=(0,k.A)(e),[w,b]=(0,i.useState)(""),[m,y]=(0,i.useState)("Ln 1, Col 1"),[x,P]=(0,i.useState)(1),[S,L]=(0,i.useState)([]),M=(e,t)=>L(n=>[...n,{message:e,type:t}]);return(0,i.useEffect)(()=>{S.length>0&&setTimeout(()=>{L(e=>e.slice(1))},1e4)},[S]),(0,i.useEffect)(()=>{let e=()=>{let e=n?.getSelection(),{positionColumn:t=0,positionLineNumber:r=0}=e||{},o=e?n?.getModel()?.getValueInRange(e):"";y(`Ln ${r}, Col ${t}${o?` (${o.length} selected)`:""}`)},t=()=>P(n?.getModel()?.getLineCount()||0);n?.onDidChangeModelContent(t),n?.onDidChangeCursorPosition(e),n?.onDidChangeModel(()=>{let r=n?.getModel(),o=r?.getLanguageId();o&&b(window.monaco?.languages.getLanguages().reduce((e,{id:t,aliases:n})=>t===o&&n?.[0]||e,o)),t(),e()})},[n]),(0,r.jsx)(f,{onContextMenuCapture:E.CH,children:n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ol",{className:"status",children:(0,r.jsxs)("li",{children:["Lines ",x]})}),(0,r.jsxs)("ol",{className:"status",children:[(0,r.jsx)("li",{className:"clickable save",children:(0,r.jsx)(A.A,{onClick:async()=>{let[e,t]=v(u,n);e&&t&&(await h(e,t,!0),p((0,o.dirname)(e),(0,o.basename)(e)),g((0,o.basename)(e)),M("File saved","info"))},...(0,E.Pf)("Save"),children:(0,r.jsx)(a,{})})}),u&&j(w)&&(0,r.jsx)("li",{className:"clickable",children:(0,r.jsx)(A.A,{className:"pretty",onClick:async()=>{try{n?.setValue(await O(w,n.getValue())),M("Formatted successfully","info")}catch(r){let{cause:e,loc:t,message:n}=r;M(e?`${e.msg||n}${t?.start?` (${t.start.line}:${t.start.column})`:""}`:n,"error")}},...(0,E.Pf)(`Pretty print ${(0,o.basename)(u)}`),children:"{ }"})}),m&&(0,r.jsx)("li",{className:"clickable",children:(0,r.jsx)(A.A,{onClick:()=>{try{n?.focus(),n?.getAction("editor.action.gotoLine")?.run()}catch{}},...(0,E.Pf)("Go to Line/Column"),children:m})}),""!==w&&(0,r.jsx)("li",{children:w})]}),(0,r.jsx)(d,{children:S.map(({message:e,type:t})=>(0,r.jsx)("li",{className:"notification",children:(0,r.jsxs)("figure",{children:["error"===t&&(0,r.jsx)(l,{}),"warning"===t&&(0,r.jsx)(c,{}),"info"===t&&(0,r.jsx)(s,{}),(0,r.jsx)("figcaption",{children:e})]})},`${t} ${e}`))})]})})},S=u.default.div`
  color: ${({theme:e})=>e.colors.text};
  width: 100%;

  && {
    height: ${({theme:e})=>`calc(100% - ${e.sizes.titleBar.height}px - 31px)`};
  }
`;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function D(e){return function t(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function N(e){return({}).toString.call(e).includes("Object")}function G(e){return"function"==typeof e}var B=D(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),I={changes:function(e,t){return N(t)||B("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&B("changeField"),t},selector:function(e){G(e)||B("selectorType")},handler:function(e){G(e)||N(e)||B("handlerType"),N(e)&&Object.values(e).some(function(e){return!G(e)})&&B("handlersType")},initial:function(e){e||B("initialIsRequired"),N(e)||B("initialType"),Object.keys(e).length||B("initialContent")}};function F(e,t){return G(t)?t(e.current):t}function H(e,t){return e.current=R(R({},e.current),t),t}function V(e,t,n){return G(t)?t(e.current):Object.keys(n).forEach(function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])}),n}var _={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},q=(function(e){return function t(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}})(function(e,t){throw Error(e[t]||e.default)})(_);let U={config:function(e){return e||q("configIsRequired"),({}).toString.call(e).includes("Object")||q("configType"),e.urls?(console.warn(_.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},J=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}};var Q={type:"cancelation",msg:"operation is manually canceled"};let W=function(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(Q):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n};var Y=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),2!==n.length);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}}(e,2)||function(e,t){if(e){if("string"==typeof e)return z(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};I.initial(e),I.handler(t);var n={current:e},r=D(V)(n,t),o=D(H)(n),i=D(I.changes)(e),a=D(F)(n);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return I.selector(e),e(n.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(r,o,i,a)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}),0),K=Y[0],X=Y[1];function Z(e){return document.body.appendChild(e)}function ee(e){var t,n,r=K(function(e){return{config:e.config,reject:e.reject}}),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function et(){var e=K(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){en(t),e.resolve(t)},function(t){e.reject(t)})}function en(e){K().monaco||X({monaco:e})}var er=new Promise(function(e,t){return X({resolve:e,reject:t})});let eo={config:function(e){var t=U.config(e),n=t.monaco,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["monaco"]);X(function(e){return{config:function e(t,n){return Object.keys(n).forEach(function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))}),M(M({},t),n)}(e.config,r),monaco:n}})},init:function(){var e=K(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(X({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),W(er);if(window.monaco&&window.monaco.editor)return en(window.monaco),e.resolve(window.monaco),W(er);J(Z,ee)(et)}return W(er)}};var ei=n(81005);let ea=({containerRef:e,id:t,setLoading:n,url:r})=>{let{readFile:a,updateFolder:l,writeFile:s}=(0,C.f)(),{argument:c}=(0,$.N)(),{prependFileToTitle:u}=(0,k.A)(t),[d,f]=(0,i.useState)(),[h,g]=(0,i.useState)(),y=(0,i.useCallback)((e,t=0)=>{let n=`${e}|${t}`,r=h?.editor.getModels();return r?.some(e=>e._associatedResource.path===n)?y(e,t+1):h?.Uri.parse(n)},[h?.Uri,h?.editor]),x=(0,i.useCallback)(async()=>{let e=h?.editor.createModel((await a(r)).toString(),b(E.uQ(r)),y(r));return e?.onDidChangeContent(()=>u(o.basename(r),!0)),e},[y,h?.editor,u,a,r]),j=(0,i.useCallback)(async()=>{h&&d&&r.startsWith("/")&&(d.getModel()?.dispose(),d.setModel(await x())),u((0,o.basename)(r||w.nB))},[x,d,h,u,r]);(0,i.useEffect)(()=>{h||((0,ei.$)("define","MonacoEditor",2.5*w.iC),eo.config(p),eo.init().then(e=>g(e)))},[h]),(0,i.useEffect)(()=>{d?.onKeyDown(async e=>{let{ctrlKey:t,code:n,keyCode:i}=e;if(t&&("KeyS"===n||49===i)){e.preventDefault();let[t,n]=v(r,d);t&&"string"==typeof n&&(await s(t,n,!0),l(o.dirname(t),o.basename(t)),u(o.basename(t)))}})},[d,u,l,r,s]),(0,i.useEffect)(()=>{if(h&&!d&&e.current){let r=h.editor.create(e.current,{automaticLayout:!0,theme:"vs-dark"});e.current?.closest("section")?.addEventListener("focus",()=>r.focus(),{passive:!0}),e.current?.addEventListener("blur",m,{capture:!0,passive:!0}),f(r),c(t,"editor",r),n(!1)}return()=>{d&&h&&(d.getModel()?.dispose(),d.dispose())}},[e,d,t,h,c,n]),(0,i.useEffect)(()=>{h&&d&&r&&j()},[d,j,h,r])};var el=n(14153);let es=({id:e})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(el.A,{StyledComponent:S,id:e,useHook:ea}),(0,r.jsx)(P,{id:e})]})},14153:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(74848),o=n(96540),i=n(51583),a=n(8218),l=n(62104);let s=(0,o.memo)(({id:e,useHook:t,StyledComponent:n,children:s})=>{let{processes:{[e]:{url:c=""}={}}}=(0,l.N)(),u=(0,o.useRef)(null),[d,f]=(0,o.useState)(!0),p=(0,o.useMemo)(()=>({contain:"strict",visibility:d?"hidden":"visible"}),[d]);return t({containerRef:u,id:e,loading:d,setLoading:f,url:c}),(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(i.default,{}),(0,r.jsx)(n,{ref:u,style:p,...(0,a.A)({id:e}),children:s})]})})},51583:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(33540);let o=r.default.div`
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
`},8218:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(16286),o=n(96540),i=n(51780),a=n(16091),l=n(13296),s=n(41017),c=n(62104),u=n(1364),d=n(48060),f=n(37e3),p=n(96119);let h=({callback:e,directory:t=d.Bn,id:n,onDragLeave:h,onDragOver:g,updatePositions:w})=>{let{url:b}=(0,c.N)(),m=(0,p.w)(),{iconPositions:v,sortOrders:y,setIconPositions:x}=(0,u.w)(),{exists:j,mkdirRecursive:O,updateFolder:k,writeFile:C}=(0,s.f)(),$=(0,o.useCallback)(async(e,t,o)=>{if(n){if(t){let i=(0,r.join)(d.Bn,e);if(await O(d.Bn),await C(i,t,!0))return o===l.z.UPDATE_URL&&b(n,i),k(d.Bn,e),(0,r.basename)(i)}else o===l.z.UPDATE_URL&&b(n,e)}return""},[n,O,k,b,C]),{openTransferDialog:A}=(0,i.A)();return{onDragLeave:h,onDragOver:e=>{g?.(e),(0,f.CH)(e)},onDrop:o=>{if(d.jj.has((0,f.uQ)(t)))return;if(w&&o.target instanceof HTMLElement){let{files:e,text:n}=(0,a.bn)(o);if(0===e.length&&""===n)return;(async()=>{let i={x:o.clientX,y:o.clientY},a=[];if(n){try{a=JSON.parse(n)}catch{}if(!Array.isArray(a))return;let[e]=a;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;a=a.map(e=>(0,r.basename)(e))}else e instanceof FileList?a=[...e].map(e=>e.name):a=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);a=await Promise.all(a.map(async e=>{let n=`${t}/${e}`;if(!v[n]||!await j(n))return e;let o=0;do o+=1,n=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${o})${(0,r.extname)(e)}`;while(v[n]&&await j(n));return(0,r.basename)(n)})),(0,f.$Y)(t,o.target,v,y,i,a,x,j)})()}let i="string"==typeof n;i&&!w&&t===d.Bn&&m.current[n]?.componentWindow?.focus(d.VD),(0,a.nX)(o,e||$,t,A,i)}}}},55650:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),o=n(62104),i=n(25573),a=n(48060);let l=e=>{let{title:t}=(0,o.N)(),[n]=e.split(a.QB),{title:l}=i.A[n]||{};return{appendFileToTitle:(0,r.useCallback)((n,r)=>{let o=n?` - ${n}${r?` ${a.g6}`:""}`:"";t(e,`${l}${o}`)},[e,l,t]),prependFileToTitle:(0,r.useCallback)((n,r,o)=>{let i=n?`${r?`${a.g6} `:""}${n}${o?" ":" - "}`:"";t(e,`${i}${l}`)},[e,l,t])}}},81005:(e,t,n)=>{n.d(t,{$:()=>a,v:()=>i});let r="DEFAULT",o="__setter__",i=e=>e.forEach(e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}}),a=(e,t,n)=>{if(setTimeout(()=>{window.sharedGlobals&&e in window.sharedGlobals&&(window.sharedGlobals[e][o]=r)},n),window.sharedGlobals=window.sharedGlobals||{},e in window.sharedGlobals)window.sharedGlobals[e][o]=t;else{let n=window[e];window.sharedGlobals[e]={[r]:n,[o]:t},Object.defineProperty(window,e,{get(){if(window.sharedGlobals&&e in window.sharedGlobals){let{stack:t=""}=Error(),n=Object.keys(window.sharedGlobals[e]).filter(e=>![r,o].includes(e)).find(e=>new RegExp(e).test(t));return window.sharedGlobals[e][n||r]}return n},set(t){window.sharedGlobals&&e in window.sharedGlobals&&(window.sharedGlobals[e][window.sharedGlobals[e][o]]=t)}})}}}}]);