"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3110],{40661:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(77232),i=r(16361);let a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},n=(e=i.Gm,t=0,r=0,n="dark")=>(0,o.css)`
  overflow: auto;
  scrollbar-gutter: stable;

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: ${a[n].thumb} ${a[n].track};
  }

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${a[n].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${a[n].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${a[n].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${a[n].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${a[n].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${a[n].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${a[n].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${a[n].buttonHover};
    }

    &:active {
      background-color: ${a[n].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${a[n].blendMode};
  }
`},51304:(e,t,r)=>{r.d(t,{B:()=>i,F:()=>a});let o=async e=>{let{default:t}=await Promise.all([r.e(1412),r.e(7990)]).then(r.bind(r,81412));return t({format:e,locateFile:e=>`/static/${e}`})},i=async e=>(await o("text")).analyzeData(()=>e.length,()=>e),a=async e=>{let t=await o("object");return(await t.analyzeData(()=>e.length,()=>e)).media}},73110:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var o=r(37876),i=r(14232);let a=e=>"number"==typeof e||"string"==typeof e?e:"toString"in e?e.toString():"",n=new Set(["UserComment"]);var l=r(51304);let b=new Set(["@type","@typeorder","DataSize","extra","FileSize","ID","StreamOrder","UniqueID","VideoCount"]),c=e=>e.toString().padStart(2,"0");var d=r(33848),s=r(77232),g=r(40661),p=r(16361);let A=s.default.div`
  background-color: #fff;
  border: 1px solid rgb(217, 217, 217);
  height: calc(100% - 64px);
  padding: 12px 13px;
  position: relative;
  top: -1px;

  table {
    ${(0,g.A)(p.Gm,0,0,"light")};
    border: 1px solid rgb(130, 135, 144);
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    text-align: left;

    thead {
      background-color: #fff;
      display: flex;
      height: 24px;
      padding: 8px 5px;
      place-items: center;
      position: sticky;
      top: 0;
      z-index: 2;

      th {
        border-right: 1px solid #e0e0e0;
        font-size: 12px;
        font-weight: 400;
        padding-left: 4px;

        &.property {
          padding-left: 0;
          width: 123px;
        }

        &.value {
          border-right: none;
        }
      }
    }

    tbody {
      font-size: 12px;
      padding-bottom: 8px;

      tr {
        display: block;
        padding: 0 5px;

        th {
          font-weight: 400;
          max-width: 127px;
          overflow: hidden;
          padding-right: 4px;
          text-overflow: ellipsis;
          vertical-align: top;
          white-space: nowrap;
          width: 127px;
        }

        td {
          cursor: text;
          max-width: 157px;
          overflow: hidden;
          text-overflow: ellipsis;
          user-select: text;

          img {
            width: 100%;
          }
        }

        &.header {
          color: rgb(0, 45, 135);
          display: inline-table;
          margin-top: 4px;
          padding-left: 12px;
          padding-right: 10px;

          &:hover {
            background-color: rgba(0, 140, 255, 10%);
          }

          &:first-child {
            margin-top: 0;
          }

          .line {
            position: relative;
            width: 100%;

            &::before {
              background-color: rgb(178, 193, 224);
              content: "";
              display: block;
              height: 1px;
              left: 0;
              position: absolute;
              top: 8px;
              width: 100%;
            }
          }
        }
      }
    }
  }
`;var h=r(46711);let u=(0,i.memo)(({hasExif:e,id:t,metaData:s,setMetaData:g,url:p})=>{let u=(0,i.useMemo)(()=>!(s.exif||s.mediaType),[s]),{readFile:m}=(0,h.f)(),[x,k]=(0,i.useState)();return((e,t,o)=>{(0,i.useEffect)(()=>{e&&!t&&r.e(3877).then(r.t.bind(r,33877,23)).then(({default:t})=>{let{thumbnail:r,...i}=t.readFromBinaryFile(e?.buffer),{blob:l,...b}=r||{},c=Object.entries(b),d=Object.entries(i),s=c.length>0,g=d.length>0;o(e=>({...e,exif:s||g?{...g?{EXIF:Object.fromEntries(d.filter(([e])=>!n.has(e)).map(([e,t])=>[e,a(t)]))}:{},...s?{Thumbnail:{...Object.fromEntries(c.map(([e,t])=>[e,a(t)])),...l?{Image:URL.createObjectURL(l)}:{}}}:{}}:void 0}))})},[t,e,o])})(e?x:void 0,s.exif,g),((e,t,r)=>{(0,i.useEffect)(()=>{if(e&&!t){let t=(e={})=>r(t=>({...t,mediaType:e}));(0,l.F)(e).then(e=>t(e?.track?.reduce((e,t)=>({...e,[t["@type"]]:Object.fromEntries([...Object.entries(t),...Object.entries(t.extra||{})].filter(([e])=>!b.has(e)).map(([e,t])=>[e,((e,t)=>{if("Duration"===e){let e=Math.floor(t/3600),r=Math.floor((t-3600*e)/60),o=Math.floor(t-3600*e-60*r);return`${c(e)}:${c(r)}:${c(o)}`}return"OverallBitRate"===e||"BitRate"===e?`${Math.floor(t/1e3)}kbps`:"FrameRate"===e?`${t} frames/second`:t})(e,t)]))}),{})||{})).catch(()=>t({}))}},[t,e,r])})(x,s.mediaType,g),(0,i.useEffect)(()=>{u&&p&&!x&&m(p).then(k)},[x,u,m,p]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A,{children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:"property",children:"Property"}),(0,o.jsx)("th",{className:"value",children:"Value"})]})}),(0,o.jsxs)("tbody",{children:[u&&(0,o.jsx)("tr",{className:"header",children:(0,o.jsx)("td",{children:"Loading..."})}),!u&&Object.entries({...s.exif,...s.mediaType}).map(([e,t],r)=>(0,o.jsxs)(i.Fragment,{children:[(0,o.jsxs)("tr",{className:"header",children:[(0,o.jsx)("th",{children:e}),(0,o.jsx)("th",{className:"line"})]}),Object.entries(t).map(([e,t])=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{title:e,children:e}),(0,o.jsx)("td",{children:"string"==typeof t&&t.startsWith("blob:")?(0,o.jsx)("img",{alt:"Thumbnail",decoding:"async",loading:"lazy",src:t}):t})]},`${e}-${t}`))]},`${e}${r}`))]})]})}),(0,o.jsx)(d.A,{id:t})]})})}}]);