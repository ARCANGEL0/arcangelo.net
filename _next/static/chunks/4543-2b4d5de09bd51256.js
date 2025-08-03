"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4543],{4213:(e,t,n)=>{n.d(t,{BN:()=>i,Q2:()=>o,r5:()=>a});var r=n(16361);let a="Start",i="Type here to search",o=({relatedTarget:e},t,n,a,i,o=!1)=>{if(!(e&&t?.contains(e))){let l=t?.nextSibling,s=e===l,c=e?.parentElement===l,u=e?.title===i;e&&(o&&s||!s&&(!c||!u))?n(!1):(a||t)?.focus(r.VD)}}},8431:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(77232);let a=r.default.ol`
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`},20067:(e,t,n)=>{n.d(t,{S7:()=>l,TY:()=>o,_T:()=>m,cO:()=>a,f$:()=>s,gF:()=>r,j2:()=>c,sz:()=>u,vJ:()=>i,vS:()=>d});let r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},a={COASTAL_LANDSCAPE:()=>n.e(3285).then(n.bind(n,63285)),HEXELLS:()=>n.e(3040).then(n.bind(n,83040)),MATRIX:()=>n.e(9253).then(n.bind(n,29253)),STABLE_DIFFUSION:()=>n.e(9948).then(n.bind(n,7567)),VANTA:()=>n.e(3185).then(n.bind(n,93185))},i={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(2336),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(5911),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(1808),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(8687),n.b)),{name:`Wallpaper (Vanta Waves)${e?` [${e}]`:""}`})},o=Object.keys(i),l=.1,s=[{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"APOD",name:"NASA APOD",startsWith:!0},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],c=":scope > canvas",u=":scope > video",d=10,m="preloadWallpaper"},40661:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(77232),a=n(16361);let i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},o=(e=a.Gm,t=0,n=0,o="dark")=>(0,r.css)`
  overflow: auto;
  scrollbar-gutter: stable;

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: ${i[o].thumb} ${i[o].track};
  }

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[o].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[o].buttonHover};
    }

    &:active {
      background-color: ${i[o].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
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
    background-blend-mode: ${i[o].blendMode};
  }
`},41422:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(42771),a=n(70185);let i=e=>{let{stackOrder:t=[]}=(0,a.w)(),{processes:n}=(0,r.N)();return t.find(t=>t!==e&&!n?.[t]?.minimized)||""}},44543:(e,t,n)=>{let r,a;n.d(t,{A:()=>ey});var i=n(37876),o=n(79052),l=n(14232),s=n(18847),c=n.n(s);let u=["name","date","type","size"],d={date:{name:"Date modified",width:133},name:{name:"Name",width:133},size:{name:"Size",width:70},type:{name:"Type",width:80}};var m=n(77232),p=n(20779);let f=m.default.div`
  display: flex;
  font-size: 12px;
  height: ${({theme:e})=>e.sizes.fileManager.detailsRowHeight};
  margin-left: 2px;
  place-items: center;

  div {
    color: rgb(222, 222, 222);
    overflow: hidden;
    padding-right: ${({theme:e})=>e.sizes.fileManager.detailsEndPadding}px;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:last-child {
      margin-right: -${({theme:e})=>e.sizes.fileManager.detailsEndPadding/2}px;
      padding-right: ${({theme:e})=>e.sizes.fileManager.detailsEndPadding-4}px;
      text-align: right;
    }
  }
`;var g=n(54239),b=n(30690),h=n(46711),w=n(60109);let v=(0,l.memo)(({columns:e,isDirectory:t,path:n,stats:r})=>{let{stat:a}=(0,h.f)(),{formats:o}=(0,m.useTheme)(),s=(0,l.useCallback)(async()=>{let e=r.size===b.df?await a(n):r;return{date:(0,g.y8)(n,e,o.dateModified),size:t?"":(0,w.ET)(e.size,!0),type:t?"File folder":(0,g.ti)((0,w.uQ)(n))}},[o.dateModified,t,n,a,r]),[c,u]=(0,l.useState)(),d=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{c||d.current||(d.current=!0,s().then(e=>{u(e),d.current=!1}))},[c,s]),(0,i.jsxs)(f,{children:[(0,i.jsx)("div",{style:{width:e?.date.width},children:c?.date}),(0,i.jsx)("div",{style:{width:e?.type.width},children:c?.type}),(0,i.jsx)("div",{style:{width:e?.size.width},children:c?.size})]})}),x=m.default.figure`
  pointer-events: ${({$renaming:e})=>e?"all":void 0};

  figcaption {
    pointer-events: none;
  }
`;var y=n(97246),A=n(42771),k=n(91372),E=n(70185),$=n(17786),S=n(16361);let M=(e,t)=>{let{setForegroundId:r,updateRecentFiles:a}=(0,E.w)(),{createPath:i,updateFolder:s}=(0,h.f)(),{minimize:c,open:u,url:d}=(0,A.N)(),m=(0,$.w)();return(0,l.useCallback)(async(l,p)=>{let{preferProcessIcon:f,singleton:g,icon:b}=k.A[l]||{},h=g?Object.keys(m.current).find(e=>e===l||e.startsWith(`${l}${S.QB}`)):"",v=e;if(e.startsWith("ipfs://")){let{getIpfsFileName:t,getIpfsResource:r}=await n.e(1894).then(n.bind(n,11894)),a=await r(e);v=(0,o.join)(S.Bn,await i(await t(e,a),S.Bn,a)),s(S.Bn,(0,o.basename)(v))}h?(d(h,v),m.current[h].minimized&&c(h),r(h)):(u(l||"OpenWith",{url:v},g||p===S.$6||f?b:p),v&&l&&a(v,l,(0,w.t$)(v)?(0,o.basename)(t,(0,o.extname)(t)):void 0))},[i,c,u,t,m,r,d,s,a,e])},j=new Set([".001",".7z",".ace",".apk",".appx",".arj",".bz2",".bzip2",".cab",".chm",".chw",".cpio",".deb",".dll",".dmg",".doc",".docx",".epub",".esd",".exe",".flv",".gz",".gzip",".hfs",".hxs",".img",".ipa",".jar",".lha",".lit",".lzh",".lzma",".mbr",".msi",".ntfs",".ods",".odt",".ova",".pages",".pkg",".ppt",".qcow",".qcow2",".r00",".rar",".rpm",".squashfs",".swf",".swm",".sys",".tar",".taz",".tgz",".txz",".udf",".vdi",".vhd",".vhdx",".vmdk",".wim",".xar",".xip",".xls",".xlsx",".xpi",".xz",".z",".zipx"]);var z=n(82050),D=n(35858),C=n(64148);let T=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),L=[".aac",".mp3",".ogg",".wav"],R=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".mpg",".ogv",".webm",".wmv"]),F=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"],O=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),H=[".bmp",".gif",".jpg",".png",".psd",".svg",".tiff"];var W=n(82850),B=n(72328),P=n(52179),N=n(98892),U=n(82909).Buffer;let{alias:I}=S.sx;var G=n(81501),V=n(78011),Q=n(57807),q=n(71553),K=n(3861),X=n(42670),Y=n(91977),_=n(50980),J=n(82909).Buffer;let Z=c()(()=>Promise.resolve().then(n.bind(n,84788)).then(e=>e.Down),{loadableGenerated:{webpack:()=>[84788]}}),ee=c()(()=>n.e(5307).then(n.bind(n,55307)),{loadableGenerated:{webpack:()=>[55307]}}),et=[],en=[],er=({columns:e,fileActions:t,fileManagerId:r,fileManagerRef:a,focusedEntries:s,focusFunctions:c,hideShortcutIcon:u,isDesktop:d,isHeading:f,isLoadingFileManager:er,loadIconImmediately:ea,name:ei,path:eo,readOnly:el,renaming:es,selectionRect:ec,setRenaming:eu,stats:ed,hasNewFolderIcon:em,view:ep})=>{let{blurEntry:ef,focusEntry:eg}=c,{url:eb}=(0,A.N)(),eh=(0,l.useRef)(null),ew=(0,_.K)(eh,a,d),ev=(0,l.useMemo)(()=>ed.isDirectory(),[ed]),[{comment:ex,getIcon:eA,icon:ek,pid:eE,subIcons:e$,url:eS},eM]=(0,G.A)(eo,ev,em,d||ew),ej=M(eS,eo),{createPath:ez,exists:eD,fs:eC,mkdirRecursive:eT,pasteList:eL,stat:eR,updateFolder:eF,writeFile:eO}=(0,h.f)(),[eH,eW]=(0,l.useState)(!1),{formats:eB,sizes:eP}=(0,m.useTheme)(),eN=(0,l.useMemo)(()=>"list"===ep,[ep]),eU=(0,l.useMemo)(()=>(0,o.basename)(eo),[eo]),eI=(0,l.useMemo)(()=>ev?"":(0,w.uQ)(eS),[ev,eS]),eG=(0,l.useMemo)(()=>(0,w.t$)(eS),[eS]),eV=(0,l.useMemo)(()=>S.O4.has(eI)||S.yH.has(eI)||eG,[eG,eI]),eQ=(0,l.useMemo)(()=>1===s.length&&s[0]===eU,[eU,s]),eq=(0,l.useMemo)(()=>(0,w.uQ)(eo),[eo]),eK=(0,l.useMemo)(()=>eq===S.b3,[eq]),eX=eK?eS:eo,eY=(0,V.A)({callback:async(e,t)=>{if(!s.includes(eU)){let n=await ez(e,eX,t);if(n)return eF(eX,n),n}return""},directory:eX}),e_=(0,l.useMemo)(()=>"FileExplorer"===eE,[eE]),eJ=(0,l.useMemo)(()=>((e,t,n,r,a=!1)=>{let i=e.replace(/-/g,S.Jc),{lines:o}=(0,g.AN)(i,t,n,r);if(o.length>2){let t=a||e.includes(" ")?o.slice(0,2).join(""):o[0];return`${t.slice(0,-3).trim()}...`}return i})(ei,eP.fileEntry.fontSize,eB.systemFont,eP.fileEntry[eN?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"],!d),[eB.systemFont,d,eN,ei,eP.fileEntry]),eZ=(0,l.useRef)(null),e0=(0,l.useRef)(!1),e1=(0,l.useRef)(!1),e2=(0,l.useRef)(),e7=(0,l.useCallback)(async()=>{if(ev)return"";if(eK){if(ex)return ex;if(eS){if(eS.startsWith("http:")||eS.startsWith("https:"))return decodeURIComponent(eS);let e=(0,o.dirname)(eS);return`Location: ${(0,o.basename)(eS,(0,o.extname)(eS))}${!e||"."===e?"":` (${(0,o.dirname)(eS)})`}`}return""}let e=(0,g.ti)(eq),t=ed.size===b.df?await eR(eo):ed,{size:n}=t,r=(0,w.ET)(n),a=`Type: ${e}${"-1 bytes"===r?"":`
Size: ${r}`}`,i=(0,g.y8)(eo,t,eB.dateModified);return`${a}
Date modified: ${i}`},[ex,eq,eB.dateModified,ev,eK,eo,eR,ed,eS]),[e3,e6]=(0,l.useState)(),e5=(0,l.useCallback)(()=>{e_&&r&&!window.globalKeyStates?.ctrlKey&&!S.jj.has(eI)?(eb(r,eS),ef()):e_&&eN?eW(e=>!e):ej(eE,eV?void 0:ek)},[ef,eb,r,ek,eV,eN,ej,e_,eE,eS,eI]),e4=(0,l.useMemo)(()=>ew&&void 0!==e&&"details"===ep,[e,ew,ep]),e9=(0,l.useMemo)(()=>e4&&e?e.name.width-eP.fileManager.detailsStartPadding:0,[e,e4,eP.fileManager.detailsStartPadding]);return(0,l.useEffect)(()=>{er||!ew||e0.current||(async()=>{if(ek.startsWith("blob:")||ek.startsWith("data:")){if(ek.startsWith("data:image/jpeg;base64,"))return;e0.current=!0;let e=(0,o.join)(S.jv,`${eo}${S.V9}`);if(".ico"!==eI&&!eS.startsWith(S.uH)&&!eS.startsWith(S._O)&&!await eD(e)&&eZ.current instanceof HTMLImageElement){let t=async n=>{if(eZ.current instanceof HTMLImageElement){let r="";if(eZ.current.currentSrc.startsWith("data:image/gif;base64,")||eZ.current.currentSrc.startsWith("data:image/png;base64,"))r=eZ.current.currentSrc;else if(eZ.current.currentSrc.startsWith("blob:"))r=await (0,w.Sk)(await (await fetch(eZ.current.currentSrc)).blob());else{let e,a,i,{clientHeight:o,clientWidth:l}=eZ.current,{naturalHeight:s,naturalWidth:c}=eZ.current,u=c/s;u!==l/o&&(c>s?e=o/u:a=l*u);let d=await (0,w.em)();try{i=await d?.toCanvas(eZ.current,{height:e,skipAutoScale:!0,style:{objectPosition:e?"top":a?"left":void 0},width:a})}catch{}i&&((0,w.b0)(i)||n)?r=i.toDataURL("image/png"):setTimeout(()=>t(!0),S.UW.WINDOW)}r&&en.push(async()=>{let t=(0,o.dirname)(e);await eT(t);let n=J.from(r.replace(/data:.*;base64,/,""),"base64");return await eO(e,n,!0),eM(e=>({...e,icon:(0,w.Zd)(n)})),eF(t,(0,o.basename)(e)),en.shift(),en[0]?.()}),1===en.length&&await en[0]()}};eZ.current.complete?t():eZ.current.addEventListener("load",()=>t(),S.w3)}}else if(!eK||"function"==typeof eA||eG){if(e0.current||!eC)return;let e=await (0,g.$j)(eC,(0,o.join)(S.jv,`${eo}${S.V9}`));e?e0.current||(e0.current=!0,eM(t=>({...t,icon:e}))):!e1.current&&eh.current&&"function"==typeof eA&&(e2.current=new AbortController,await eA(e2.current.signal),e1.current=!e2.current.signal.aborted)}})(),!ew&&e2.current&&e2.current.abort()},[eD,eC,eA,ek,er,eK,ew,eG,eT,eo,eM,eF,eS,eI,eO]),(0,l.useEffect)(()=>()=>{try{e2.current?.abort()}catch{}},[]),(0,l.useLayoutEffect)(()=>{if(eh.current&&a.current){let e=s.includes(eU),t=et.includes(eU),n=e||t;if(e&&t&&et.splice(et.indexOf(eU),1),ec){let e=((e,t,n,r)=>{let{x:a=0,y:i=0,width:o=0,height:l=0}=n,s=new DOMRect(a,i,Number(o),Number(l));return!(e.left-t.left>=s.right||e.top-t.top>=s.bottom||e.right-t.left<=s.left||e.bottom-t.top+r<=s.top)})(eh.current.getBoundingClientRect(),a.current.getBoundingClientRect(),ec,a.current.scrollTop);e&&!n?(et.push(eU),eg(eU),eh.current.focus(S.VD)):!e&&n&&ef(eU)}else n&&eh.current!==document.activeElement&&1===s.length&&!eh.current.contains(document.activeElement)&&eh.current.focus(S.VD)}},[ef,a,eU,eg,s,ec]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(K.A,{ref:eh,"aria-label":ei,onMouseOver:()=>e7().then(e6),title:e3,...eN&&{...S.P4,as:p.m.button},...(0,q.A)(e5,eN),...e_&&eY,...((e,t,r,a,{archiveFiles:i,deleteLocalPath:s,downloadFiles:c,extractFiles:u,newShortcut:d},{blurEntry:m,focusEntry:p},f,b,v,x)=>{let{minimize:y,open:G,url:V}=(0,A.N)(),Q=(0,$.w)(),{aiEnabled:q,setCursor:K,setForegroundId:X,setWallpaper:Y,updateRecentFiles:_}=(0,E.w)(),J=(0,o.basename)(r),Z=f.includes(J),ee=M(e,r),{copyEntries:et,createPath:en,lstat:er,mapFs:ea,moveEntries:ei,readFile:eo,rootFs:el,unMapFs:es,updateFolder:ec}=(0,h.f)(),{contextMenu:eu}=(0,C.b)(),ed=(0,B.i)(),{onContextMenuCapture:em,...ep}=(0,l.useMemo)(()=>eu?.(()=>{let l=(0,w.uQ)(e),{process:m=[]}=l in z.A?z.A[l]:{},p=m.filter(e=>e!==t).filter(e=>e!==t),h=1===f.length,A=()=>h||!Z?[r]:[...new Set([r,...f.map(e=>(0,o.join)((0,o.dirname)(r),e))])],E=[],$=(0,w.uQ)(r),M=$===S.b3,C=el?.mountList.some(e=>e===r&&(0,D.isMountedFolder)(el?.mntMap[e]));if(!x&&!C){let m=(0,g.YD)(l);if(E.push({action:()=>ei(A()),label:"Cut"},{action:()=>et(A()),label:"Copy"},S.kG),(m||M||!$&&!l)&&E.push({action:()=>A().forEach(async e=>{let t=m&&!(await er(e)).isDirectory()?m:"FileExplorer";d(e,t)}),label:"Create shortcut"}),E.push({action:()=>A().forEach(e=>s(e)),label:"Delete"},{action:()=>a(J),label:"Rename"},S.kG,{action:()=>{let t=Object.keys(Q.current).find(t=>t===`Properties${S.QB}${e}`);t?(Q.current[t].minimized&&y(t),X(t)):G("Properties",{shortcutPath:M?r:void 0,url:M?r:e})},label:"Properties"}),r)if(r===(0,o.join)(S.Bn,S.YH)){if("function"==typeof FileSystemHandle){let e=(e,t)=>{ea(e,t).then(e=>{ec("/",e),G("FileExplorer",{url:(0,o.join)("/",e)})}).catch(()=>{})},t="showDirectoryPicker"in window,n="function"==typeof navigator.storage?.getDirectory&&!(0,w.nr)();E.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[S.kG]:[])}}else{E.unshift(S.kG);let a=T.has($),s=O.has($),d=R.has($);if(a||s||d){let e=a||d;E.unshift(S.kG,{label:"Convert to",menu:(e?a?L:F:H).filter(e=>e!==$).map(t=>{let a=t.replace(".","");return{action:async()=>{let t=await Promise.all(A().map(async e=>[e,await eo(e)])),i=e?(await n.e(4252).then(n.bind(n,89490))).transcode:(await n.e(7662).then(n.bind(n,87662))).convert,l=await i(t,a);await Promise.all(l.map(async([e,t])=>{let n=(0,o.basename)(e),a=(0,o.dirname)(r);ec(a,await en(n,a,t))}))},label:a.toUpperCase()}})})}S.Mk.includes($)&&E.unshift(S.kG,{label:"Convert to",menu:S.Mk.filter(e=>e!==$).map(e=>{let t=e.replace(".","");return{action:()=>{A().forEach(async e=>{let a=`${(0,o.dirname)(e)}/${(0,o.basename)(e,(0,o.extname)(e))}.${t}`,{convertSheet:i}=await n.e(3576).then(n.bind(n,93576)),l=await i(await eo(e),t),s=(0,o.dirname)(r);ec(s,await en((0,o.basename)(a),s,U.from(l)))})},label:t.toUpperCase()}})}),".m3u"!==$&&S.hL.has($)&&E.unshift(S.kG,{action:()=>{A().forEach(async e=>{let t=`${(0,o.dirname)(e)}/${(0,o.basename)(e,(0,o.extname)(e))}.m3u`,{createM3uPlaylist:a,tracksFromPlaylist:i}=await n.e(2482).then(n.bind(n,92482)),l=a(await i((await eo(e)).toString(),(0,w.uQ)(e))),s=(0,o.dirname)(r);ec(s,await en((0,o.basename)(t),s,U.from(l)))})},label:"Convert to M3U"});let f="FileExplorer"===t;if(h&&!f&&!(0,w.t$)(e)){let t=(0,o.basename)(e),n={text:`${t} - ${I}`,title:t,url:`${window.location.origin}?url=${e}`};try{!el?.mountList.some(e=>"/"!==e&&r.startsWith(`${e}/`))&&(0,g.Aw)(b)&&navigator.canShare?.(n)&&E.unshift({SvgIcon:W.SY,action:()=>navigator.share(n),label:"Share"})}catch{}}E.unshift({action:()=>i(A()),label:"Add to archive..."},...j.has(l)||S.jj.has(l)?[{action:()=>u(e),label:"Extract Here"},S.kG]:[],{action:()=>c(A()),label:"Download"}),M||f||S.hr.forEach(e=>{e===m||p.includes(e)||p.push(e)})}E.unshift(S.kG)}C&&E.push(S.kG,{action:()=>es(r,el?.mntMap[r].getName()!=="FileSystemAccess"),label:"Disconnect"}),S.PD.has(l)&&E.unshift({action:()=>{G("Paint",{url:e}),e&&_(e,"Paint")},label:"Edit"}),S.Dh.has(l)&&E.unshift({action:()=>K(e),label:"Set as mouse pointer"}),(q||ed&&"summarizer"in window.ai)&&S.$h.has(l)&&E.unshift(S.kG,{label:`AI (${N.aV})`,menu:[...q||ed&&"summarizer"in window.ai?[{action:()=>(t=>{window.initialAiPrompt=`${t}: ${e}`;let n=document.querySelector("main > section > footer > button.new-topic");n?n?.click():(0,P.t)(N.bK)?.click()})("Summarize"),label:"Summarize Text"}]:[]]});let B=S.yH.has(l);if((B||S.O4.has(l)&&!S.Dh.has(l)&&".svg"!==l)&&E.unshift({label:"Set as background",...B?{action:()=>Y(e)}:{menu:[{action:()=>Y(e,"fill"),label:"Fill"},{action:()=>Y(e,"fit"),label:"Fit"},{action:()=>Y(e,"stretch"),label:"Stretch"},{action:()=>Y(e,"tile"),label:"Tile"},{action:()=>Y(e,"center"),label:"Center"}]}}),p.length>0&&E.unshift({label:"Open with",menu:[...p.map(e=>{let{icon:t,title:n}=k.A[e]||{};return{action:()=>{ee(e,t)},icon:t,label:n}}),S.kG,{action:()=>G("OpenWith",{url:e}),label:"Choose another app"}],primary:!t}),t){let{icon:n}=k.A[t]||{};if(M&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")&&!e.startsWith("nostr:")){let t=""===l||".zip"===l;E.unshift({action:()=>G("FileExplorer",{url:(0,o.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}v&&"FileExplorer"===t&&!S.jj.has(l)&&E.unshift({action:()=>{ee(t,n)},label:"Open in new window"}),E.unshift({action:()=>{"FileExplorer"===t&&v&&!S.jj.has(l)?V(v,e):ee(t,n)},icon:n,label:"Open",primary:!0})}return E[0]===S.kG?E.slice(1):E}),[q,i,J,V,eu,et,en,s,c,u,v,f,ed,Z,er,ea,y,ei,d,G,ee,r,t,Q,eo,x,el?.mntMap,el?.mountList,K,X,a,Y,b,es,ec,_,e]);return{onContextMenuCapture:e=>{Z||(m(),p(J)),em(e)},...ep}})(eS,eE,eo,eu,t,c,s,ed,r,el),children:[(0,i.jsxs)(x,{ref:(0,l.useCallback)(e=>{eN&&(0,w.Qv)()&&(0,Y.a)(e)},[eN]),$renaming:es,style:e4?{maxWidth:e9,minWidth:e9}:void 0,...f&&{"aria-level":1,role:"heading"},children:[(0,i.jsx)(X.A,{ref:eZ,$eager:ea,$moving:"move"===eL[eo],alt:ei,src:ek,...Q.H[ep]}),(0,i.jsx)(y.A,{alt:ei,icon:ek,isDesktop:d,showShortcutIcon:!!(u||ed.systemShortcut),subIcons:e$,view:ep}),es?(0,i.jsx)(ee,{isDesktop:d,name:ei,path:eo,renameFile:(e,n)=>{t.renameFile(e,n),eu("")},setRenaming:eu,view:ep}):(0,i.jsx)("figcaption",{children:eQ&&ei.length!==eJ.length?ei:eJ}),eN&&e_&&(0,i.jsx)(Z,{flip:eH})]}),e4&&e&&(0,i.jsx)(v,{columns:e,isDirectory:ev,path:eo,stats:ed})]}),eH&&(0,i.jsx)(ey,{url:eS,hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,isStartMenu:!0,loadIconsImmediately:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};var ea=n(52245),ei=n(49697),eo=n(84966),el=n(54188),es=n(20067),ec=n(91754),eu=n(82909).Buffer;let ed=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),em="video/webm",ep="video/mp4",ef=2,eg=m.default.span`
  background-color: rgb(32, 32, 32);
  display: block;
  margin-bottom: 6px;
  margin-right: ${({theme:e})=>e.sizes.fileManager.detailsStartPadding}px;
  position: sticky;
  top: 0;
  width: fit-content;
  z-index: 1;

  ol {
  margin-top: 50px;
    display: flex;
    height: ${({theme:e})=>e.sizes.fileManager.columnHeight};

    li {
      color: rgb(222, 222, 222);
      display: flex;
      font-size: 12px;
      padding-left: 6px;
      place-items: center;
      position: relative;

      > svg {
        fill: rgb(149, 149, 149);
        left: calc(50% - 4px);
        position: absolute;
        top: 0;
        transition: none !important;
        width: 7px;

        &[style^="transform"] {
          top: -1px;
        }
      }

      .name {
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        top: -1px;
        white-space: nowrap;
      }

      .resize {
        border-left: 1px solid rgb(99, 99, 99);
        cursor: col-resize;
        height: 25px;
        padding-left: ${({theme:e})=>e.sizes.fileManager.columnResizeWidth}px;
        position: absolute;
        right: -${({theme:e})=>e.sizes.fileManager.columnResizeWidth}px;
        z-index: 1;
      }

      &:hover {
        background-color: rgb(67, 67, 67);

        .resize {
          border-left: none;
        }
      }

      &:active {
        background-color: rgb(131, 131, 131);
      }

      &:first-child {
        padding-left: 17px;
      }
    }
  }
`;var eb=n(84788);let eh=(0,l.memo)(({columns:e,directory:t,files:n,setColumns:r})=>{let{sizes:a}=(0,m.useTheme)(),o=(0,l.useRef)(""),s=(0,l.useRef)(0),{setSortOrder:c,sortOrders:d}=(0,E.w)(),[,p="name",f]=d[t]??[];return(0,i.jsx)(eg,{children:(0,i.jsx)("ol",{children:u.map(l=>(0,i.jsxs)("li",{onPointerDownCapture:e=>{0===e.button&&(o.current="resize"===e.target.className?l:"",s.current=e.clientX)},onPointerMoveCapture:e=>{if(o.current){let t=o.current;r(n=>{if(!n?.[t])return n;let r={...n},i=r[t].width+e.clientX-s.current;return i<a.fileManager.columnMinWidth||Math.abs(s.current-e.clientX)>15||(r[t].width=i,s.current=e.clientX),r})}},onPointerUpCapture:e=>{0===e.button&&(o.current?(o.current="",s.current=0):c(t,Object.keys((0,eo.w9)(t,n,l,!f)),l,!f))},style:{width:`${e[l].width}px`},children:[p===l&&(0,i.jsx)(eb.Down,{flip:f}),(0,i.jsx)("div",{className:"name",children:e[l].name}),(0,i.jsx)("span",{className:"resize"})]},e[l].name))})})}),ew=c()(()=>n.e(7919).then(n.bind(n,7919)),{loadableGenerated:{webpack:()=>[7919]}}),ev=c()(()=>n.e(5411).then(n.bind(n,65411)),{loadableGenerated:{webpack:()=>[65411]}}),ex=c()(()=>n.e(3010).then(n.bind(n,43010)),{loadableGenerated:{webpack:()=>[43010]}}),ey=(0,l.memo)(({allowMovingDraggableEntries:e,hideFolders:t,hideLoading:s,hideScrolling:c,hideShortcutIcons:u,id:m,isDesktop:p,isStartMenu:f,loadIconsImmediately:b,readOnly:v,showStatusBar:x,skipFsWatcher:y,skipSorting:k,url:M})=>{let{views:j,setViews:z}=(0,E.w)(),T=(0,l.useMemo)(()=>p?"icon":f?"list":j[M]||"icon",[p,f,M,j]),L=(0,l.useMemo)(()=>"details"===T,[T]),[R,F]=(0,l.useState)(()=>L?d:void 0),[O,H]=(0,l.useState)(M),[W,B]=(0,l.useState)(""),[P,N]=(0,l.useState)(!1),U=(0,l.useRef)(null),{focusedEntries:I,focusableEntry:G,...q}=(e=>{let[t,n]=(0,l.useState)([]),r=(0,l.useCallback)(e=>n(e?t=>t.filter(t=>t!==e):[]),[]),a=(0,l.useCallback)(e=>n(t=>t.includes(e)?t:[...t,e]),[]),i=(0,l.useRef)(!1),o=(0,l.useCallback)(t=>{let{relatedTarget:n,target:a}=t,o=e.current===n;o&&i.current?((0,w.CH)(t),a?.focus(S.VD)):(o||e.current?.contains(n))&&n instanceof HTMLElement||r()},[r,e]),s=(0,l.useCallback)(()=>{i.current=!0,window.requestAnimationFrame(()=>{i.current=!1})},[]),c=(0,l.useRef)({x:0,y:0});return{blurEntry:r,focusEntry:a,focusableEntry:e=>{let n=t.includes(e),i=1===t.length&&t[0]===e;return{className:(0,w.$z)({"focus-within":n,"only-focused":i}),onBlurCapture:o,onFocusCapture:s,onMouseDown:({ctrlKey:t,pageX:i,pageY:o})=>{c.current={x:i,y:o},t?n?r(e):a(e):n||(r(),a(e))},onMouseUp:({ctrlKey:t,pageX:n,pageY:o,button:l})=>{let{x:s,y:u}=c.current;t||i||0!==l||s!==n||u!==o||(r(),a(e)),c.current={x:0,y:0}}}},focusedEntries:t}})(U),{fileActions:K,files:X,folderActions:Y,isLoading:_,updateFiles:J}=(0,el.A)(M,B,q,{hideFolders:t,hideLoading:s,skipFsWatcher:y,skipSorting:k}),{lstat:Z,mountFs:ee,rootFs:et}=(0,h.f)(),{StyledFileEntry:en,StyledFileManager:eg}=Q.o[T],{isSelecting:eb,selectionRect:ey,selectionStyling:eA,selectionEvents:ek}=((e,t,{blurEntry:n},r)=>{let[a,i]=(0,l.useState)(()=>Object.create(null)),[o,s]=(0,l.useState)(()=>Object.create(null)),{x:c,y:u}=a,{height:d,width:m}=o,p=(0,l.useRef)(0),f=(0,l.useRef)(o),g=({clientX:t,clientY:n})=>{if(p.current)return;let{scrollLeft:r=0,scrollTop:a=0}=e.current||{},{x:i=0,y:o=0}=e.current?.getBoundingClientRect()||{};s({height:n-o-(u||0)+a,width:t-i-(c||0)+r}),p.current=window.requestAnimationFrame(()=>{p.current=0})},{menu:b,setMenu:h}=(0,C.b)(),w="number"==typeof c&&"number"==typeof u,v="number"==typeof m&&"number"==typeof d&&w&&0===Object.keys(b).length,x={isSelecting:v,selectionEvents:{onMouseDown:({clientX:r,clientY:a,target:o})=>{if(o!==e.current)return;let{scrollLeft:l=0,scrollTop:c=0}=e.current,{x:u=0,y:d=0}=e.current.getBoundingClientRect();s(Object.create(null)),i({x:r-u+l,y:a-d+c}),b&&Object.keys(b).length>0&&h(Object.create(null)),t.length>0&&n()}},selectionStyling:((e,t,n,r,a)=>{if(!e)return Object.create(null);let i=Number(t),o=Number(n);return{height:`${Math.abs(i)}px`,transform:`translate(
        ${Number(r)+Math.min(o,0)}px,
        ${Number(a)+Math.min(i,0)}px)`,width:`${Math.abs(o)}px`}})(v,d,m,c,u)};if(w){let t=()=>{s(Object.create(null)),i(Object.create(null))},n=e.current?.scrollHeight||0,a=e.current?.scrollWidth||0;x.selectionEvents.onMouseLeave=()=>{if(x.isSelecting){let i=t=>{if(g(t),r||!e.current)return;let i=Math.abs(Number(f.current.width))/100+1,o=Math.abs(Number(f.current.height))/100+1;e.current.scrollBy(e.current.scrollLeft+e.current.clientWidth>a?0:Math.round(t.movementX*i),e.current.scrollTop+e.current.clientHeight>n?0:Math.round(t.movementY*o))};window.addEventListener("mousemove",i),window.addEventListener("mouseup",()=>{t(),window.removeEventListener("mousemove",i)},S.w3)}},x.selectionEvents.onMouseMove=g,x.selectionEvents.onMouseUp=t}return v&&(x.selectionRect=Object.assign(Object.create(null),a,o),f.current=o),x})(U,I,q,p),eE=((e,{focusEntry:t},r,a,i)=>{let[s,c]=(0,l.useState)(-1),{exists:u}=(0,h.f)(),{iconPositions:d,sortOrders:m,setIconPositions:p,setSortOrder:f}=(0,E.w)(),g=(0,l.useRef)(),b=(0,l.useRef)(!1),v=(0,l.useRef)({x:0,y:0}),x=(0,l.useRef)(Object.create(null)),y=({clientX:e,clientY:t})=>{x.current={...x.current,x:e,y:t}},A=r.current?.parentElement?.tagName==="MAIN",k=(0,l.useCallback)(async()=>{if(r.current){let e=[...r.current.querySelectorAll(".focus-within")];if(e.length>1){g.current?g.current.src="":g.current=new Image;let t=await (0,w.em)();if(!t)return;try{let{UNKNOWN_ICON:a}=await n.e(5313).then(n.bind(n,25313)),i=e.every(({style:e})=>e?.gridRowStart&&e?.gridColumnStart),o=await t?.toCanvas(r.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some(e=>e.contains(t)),imagePlaceholder:a,skipAutoScale:!0}),l=i?(0,w.Aq)(o):o;g.current.src=l.toDataURL(),v.current={x:o.width-l.width,y:o.height-l.height}}catch{}}}},[r]);return(0,l.useEffect)(()=>{!a&&e.length>1?k():0===e.length&&(b.current=!1)},[e,a,k]),(n,a,l)=>({draggable:!0,onDragEnd:(t=>n=>{(0,w.CH)(n),i&&e.length>0?((0,w.$Y)(t,r.current,d,m,x.current,e,p,u),r.current?.removeEventListener("dragover",y)):-1!==s&&f(t,t=>{let n=t.filter(t=>!e.includes(t));return n.splice(s,0,...e),n})})(n),onDragOver:({target:t})=>{if(!i&&t instanceof HTMLLIElement){let{children:n=[]}=t.parentElement||{};c(e.includes(a)?-1:[...n].indexOf(t))}},onDragStart:((n,a,l)=>s=>{if(l||"ontouchstart"in window)return void(0,w.CH)(s);t(a);let c=e.length<=1;if(s.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(c?[(0,o.join)(n,a)]:e.map(e=>(0,o.join)(n,e)))),c&&s.nativeEvent.dataTransfer?.setData("DownloadURL",`${(0,w.hH)(a)||"application/octet-stream"}:${a}:${window.location.href}${(0,o.join)(n,a)}`),!c&&g.current){if(!b.current){b.current=!0;let e=v.current.x||v.current.y;v.current={x:e?s.nativeEvent.clientX-v.current.x:s.nativeEvent.offsetX,y:e?s.nativeEvent.clientY-v.current.y:s.nativeEvent.offsetY+5}}s.nativeEvent.dataTransfer?.setDragImage(g.current,A?v.current.x:s.nativeEvent.offsetX,A?v.current.y:s.nativeEvent.offsetY)}Object.assign(s.dataTransfer,{effectAllowed:"move"}),i&&(x.current=e.length>1?{offsetX:s.nativeEvent.offsetX,offsetY:s.nativeEvent.offsetY}:Object.create(null),r.current?.addEventListener("dragover",y,{passive:!0}))})(n,a,l),style:A?d[(0,o.join)(n,a)]:void 0})})(I,q,U,eb,e),e$=(0,V.A)({callback:Y.newPath,directory:M,updatePositions:e}),eS=((e,{addToFolder:t,newPath:i,pasteToFolder:s,sortByOrder:[[c,u],d]},m,p)=>{let{contextMenu:f}=(0,C.b)(),{exists:b,mapFs:v,pasteList:x={},readFile:y,rootFs:k,writeFile:M,updateFolder:j}=(0,h.f)(),{iconPositions:z,setForegroundId:T,setWallpaper:L,setIconPositions:R,sortOrders:F,updateRecentFiles:O,wallpaperImage:H}=(0,E.w)(),W=(0,l.useCallback)(e=>{if("VANTA"===e){let e=0==(ef-=1);L(`VANTA${e?" WIREFRAME":""}`),e&&(ef=2)}else ef=2,L(e)},[L]),{minimize:B,open:P}=(0,A.N)(),N=(0,l.useCallback)((t,n)=>{R(t=>Object.fromEntries(Object.entries(t).filter(([t])=>(0,o.dirname)(t)!==e))),d(""===t?([e])=>[e,n]:((e,t)=>([n,r])=>[e,n===e?!r:t])(t,n))},[R,d,e]),U=(0,l.useMemo)(()=>m&&"function"==typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(em)||window?.MediaRecorder?.isTypeSupported(ep)),[m]),I=(0,l.useCallback)(async()=>{if(a&&r){let{active:e}=r;try{a.requestData(),r.getTracks().forEach(e=>e.stop())}catch{}if(a=void 0,r=void 0,e)return}let e=(0,w.gm)()||(0,w.nr)(),t={video:{frameRate:30},...!e&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}},[i]=(r=await navigator.mediaDevices.getDisplayMedia(t)).getVideoTracks(),{height:l,width:s}=i.getSettings(),c=MediaRecorder.isTypeSupported(em),u=`Screen Capture ${(0,w.Im)()}.${c?"webm":"mp4"}`;a=new MediaRecorder(r,{bitsPerSecond:l&&s?l*s*30:void 0,mimeType:c?em:ep});let d=(0,o.join)(S.Bn,u),m=Date.now(),p=!1;a.start(),a.addEventListener("dataavailable",async t=>{let{data:r}=t;if(r?.size){let t=await (0,w.Z6)(r);if(await M(d,p?eu.concat([await y(d),t]):t,p),!c||e||a&&"inactive"!==a.state)j(S.Bn,u);else{let{default:e}=await n.e(667).then(n.t.bind(n,667,23));e((0,w.vJ)(await y(d)),Date.now()-m,async e=>{await M(d,await (0,w.Z6)(e),!0),j(S.Bn,u)})}p=!0}})},[y,j,M]),G=(0,ec._)(),V=(0,$.w)(),Q=(0,l.useCallback)((e,t)=>{if(t&&m){let{clientX:n,clientY:r}="TouchEvent"in window&&t.nativeEvent instanceof TouchEvent?t.nativeEvent.touches[0]:t.nativeEvent;(0,w.$Y)(S.Bn,t.target,z,F,{x:n,y:r},e,R,b)}},[b,z,m,R,F]),q=(0,l.useCallback)(async(e,t,n)=>i(e,t,"rename",e=>Q([e],n)),[i,Q]);return(0,l.useMemo)(()=>f?.(n=>{let{offsetX:a,offsetY:i,target:l}=n.nativeEvent;if(!m&&!p&&a>l.clientWidth)return[{action:()=>{let e=0;i>l.clientHeight-17?e=l.scrollHeight:i>17&&(e=Math.round(l.scrollHeight*(i-34)/(l.clientHeight-34))),l.scrollTo({behavior:"instant",top:e})},label:"Scroll Here"},S.kG,{action:()=>{l.scrollTo({behavior:"instant",top:0})},label:"Top"},{action:()=>{l.scrollTo({behavior:"instant",top:l.scrollHeight})},label:"Bottom"},S.kG,{action:()=>{l.scrollBy({behavior:"instant",top:-l.clientHeight})},label:"Page Up"},{action:()=>{l.scrollBy({behavior:"instant",top:l.clientHeight})},label:"Page Down"},S.kG,{action:()=>{l.scrollBy({behavior:"instant",top:-44})},label:"Scroll Up"},{action:()=>{l.scrollBy({behavior:"instant",top:44})},label:"Scroll Down"}];let d=[{action:()=>t().then(e=>Q(e,n)),label:"Add file(s)"},...(0,w.AQ)()?[{action:()=>v(e).then(t=>{Q([t],n),j(e,t),P("FileExplorer",{url:(0,o.join)(e,t)})}).catch(()=>{}),label:"Map directory"}]:[]],f=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement,h=(0,D.getMountUrl)(e,k?.mntMap||{}),y=S.jj.has((0,w.uQ)(e))||h&&!(0,D.isMountedFolder)(k?.mntMap[h]);return[{label:"Sort by",menu:[{action:()=>N("name",!0),label:"Name",toggle:"name"===c},{action:()=>N("size",!1),label:"Size",toggle:"size"===c},{action:()=>N("type",!0),label:"Item type",toggle:"type"===c},{action:()=>N("date",!1),label:"Date modified",toggle:"date"===c},S.kG,{action:()=>N("",!0),label:"Ascending",toggle:u},{action:()=>N("",!1),label:"Descending",toggle:!u}]},{action:()=>j(e),label:"Refresh"},...m?[S.kG,{label:"Background",menu:es.f$.filter(({requiresWebGPU:e})=>!e||G).reduce((e,t)=>[...e,{action:()=>{f&&ed?.(),W(t.id)},label:t.name||t.id,toggle:t.startsWith?H.startsWith(t.id):H===t.id}],f?[{action:ed,checked:!0,label:"Music Visualization"},S.kG]:[])},...U?[{action:I,label:r?.active?"Stop screen capture":"Capture screen"}]:[]]:[],...y?[]:[S.kG,...d,{action:()=>P("Terminal",{url:e}),label:"Open Terminal here"},S.kG,{action:()=>s(n),disabled:0===Object.keys(x).length,label:"Paste"},S.kG,{label:"New",menu:[{action:()=>q("New folder",void 0,n),icon:S.tz,label:"Folder"},S.kG,{action:()=>q("New Rich Text Document.whtml",eu.from(""),n),icon:(0,g.QW)(".whtml"),label:"Rich Text Document"},{action:()=>q("New Text Document.txt",eu.from(""),n),icon:(0,g.QW)(".txt"),label:"Text Document"}]},...m?[]:[S.kG,{action:()=>{let t=Object.keys(V.current).find(t=>t===`Properties${S.QB}${e}`);t?(V.current[t].minimized&&B(t),T(t)):P("Properties",{url:e})},label:"Properties"}]],...m?[S.kG,{action:async()=>{if(!await b(S.K$)){let e=await fetch(document.location.href),t=eu.from(await e.arrayBuffer());await M(S.K$,t),j((0,o.dirname)(S.K$),(0,o.basename)(S.K$))}P("MonacoEditor",{url:S.K$}),O(S.K$,"MonacoEditor")},label:"View page source"},{action:()=>P("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}),[t,U,I,f,b,G,u,m,p,v,B,q,P,x,s,V,k?.mntMap,T,W,c,Q,j,O,N,e,H,M])})(M,Y,p,f),eM=!s&&_||M!==O,ej=((e,t,n,r,{blurEntry:a,focusEntry:i},{newPath:s,pasteToFolder:c},u,d,m,p)=>{let{copyEntries:f,deletePath:g,moveEntries:b}=(0,h.f)(),{url:v}=(0,A.N)(),{openTransferDialog:x}=(0,ei.A)(),{foregroundId:y}=(0,E.w)();return(0,l.useEffect)(()=>{let e=e=>{e.clipboardData?.files?.length&&(!y&&t===S.Bn||y===m)&&(e.stopImmediatePropagation?.(),(0,eo.L3)(e.clipboardData.files,t,s).then(x))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)},[y,m,s,x,t]),(0,l.useCallback)(l=>s=>{if("list"===p)return;let{ctrlKey:h,key:x,target:y,shiftKey:A}=s;if(!A)if(h)switch(x.toLowerCase()){case"a":if((0,w.CH)(s),y instanceof HTMLOListElement){let[e]=y.querySelectorAll("button");e?.focus(S.VD)}Object.keys(e).forEach(e=>i(e));break;case"c":(0,w.CH)(s),f(n.map(e=>(0,o.join)(t,e)));break;case"x":(0,w.CH)(s),b(n.map(e=>(0,o.join)(t,e)));break;case"v":(0,w.CH)(s),y instanceof HTMLOListElement&&c()}else switch(x){case"F2":n.length>0&&l&&((0,w.CH)(s),r(l));break;case"F5":m&&((0,w.CH)(s),u());break;case"Delete":n.length>0&&((0,w.CH)(s),n.forEach(async e=>{let n=(0,o.join)(t,e);await g(n)&&u(void 0,n)}),a());break;case"Backspace":m&&((0,w.CH)(s),v(m,(0,o.dirname)(t)));break;case"Enter":n.length>0&&y instanceof HTMLButtonElement&&((0,w.CH)(s),(0,w.k2)(y,2));break;default:if(x.startsWith("Arrow")){if((0,w.CH)(s),!(y instanceof HTMLElement))return;let e=y;if(!(y instanceof HTMLButtonElement)&&!(e=y.querySelector("button")))return;let{x:t,y:n,height:r,width:a}=e.getBoundingClientRect(),i="ArrowUp"===x||"ArrowDown"===x?document.elementFromPoint(t,n+r/2+("ArrowUp"===x?-r:r)):document.elementFromPoint(t+a/2+("ArrowLeft"===x?-a:a),n);if(i instanceof HTMLOListElement){let t=e.closest("li");if(t instanceof HTMLLIElement){let e=[...i.children],n=e.indexOf(t);("ArrowUp"===x||"ArrowDown"===x)&&(i=e["ArrowUp"===x?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}let o=i?.closest("button"),l=o;o instanceof HTMLButtonElement&&d.current?.contains(o)||(l=e),l?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}else if(/^[\da-z]$/i.test(x)){(0,w.CH)(s);let t=Object.keys(e),r=t.indexOf(n[n.length-1]),o=x.toLowerCase(),l=x.toUpperCase(),c=[...t.slice(r),...t.slice(0,r)].find(e=>!n.includes(e)&&(e.startsWith(o)||e.startsWith(l)));c&&(a(),i(c),d.current?.querySelector(`button[aria-label='${c}']`)?.scrollIntoView())}}},[a,v,f,g,d,e,i,n,m,b,c,r,u,t,p])})(X,M,I,B,q,Y,J,U,m,T),[ez,eD]=(0,l.useState)("prompt"),eC=(0,l.useRef)(!1),eT=(0,l.useMemo)(()=>""===W?ej():void 0,[ej,W]),eL=(0,l.useMemo)(()=>Object.keys(X),[X]),eR=!p&&!f&&!eM&&"list"!==T&&0===eL.length;return(0,l.useEffect)(()=>{eC.current||"granted"===ez||et?.mntMap[O]?.getName()!=="FileSystemAccess"||(eC.current=!0,Promise.resolve().then(n.bind(n,35858)).then(({requestPermission:e})=>e(O).then(e=>{let t="granted"===e;(!e||t)&&(eD("granted"),t&&J())}).catch(e=>{e?.message==="Permission already granted"&&eD("granted")}).finally(()=>{eC.current=!1})))},[O,ez,et?.mntMap,J]),(0,l.useEffect)(()=>{!P&&S.jj.has((0,w.uQ)(M))&&(async()=>{(await Z(M)).isDirectory()||N(e=>(e||ee(M).then(()=>setTimeout(J,100)).catch(()=>{}),!0))})()},[Z,ee,P,J,M]),(0,l.useEffect)(()=>{M!==O&&(Y.resetFiles(),H(M),eD("denied"))},[O,Y,M]),(0,l.useEffect)(()=>{eM||p||f||U.current?.focus(S.VD)},[p,f,eM]),(0,l.useEffect)(()=>{F(L?d:void 0)},[L]),(0,i.jsxs)(i.Fragment,{children:[eM?(0,i.jsx)(ex,{}):(0,i.jsxs)(i.Fragment,{children:[eR&&(0,i.jsx)(ev,{}),(0,i.jsxs)(eg,{ref:U,$isEmptyFolder:eR,$scrollable:!c,onKeyDown:eT,...v?{onContextMenu:w.CH}:{$selecting:eb,...e$,...eS,...ek},...S.W8,children:[L&&R&&(0,i.jsx)(eh,{columns:R,directory:M,files:X,setColumns:F}),eb&&(0,i.jsx)(ea.A,{style:eA}),eL.map(e=>(0,i.jsx)(en,{$desktop:p,$selecting:eb,$visible:!_,...!v&&eE(M,e,W===e),...""===W&&{onKeyDown:ej(e)},...G(e),children:(0,i.jsx)(er,{columns:R,fileActions:K,fileManagerId:m,fileManagerRef:U,focusFunctions:q,focusedEntries:I,hasNewFolderIcon:f,hideShortcutIcon:u,isDesktop:p,isHeading:p&&X[e].systemShortcut,isLoadingFileManager:_,loadIconImmediately:b,name:(0,o.basename)(e,S.b3),path:(0,o.join)(M,e),readOnly:v,renaming:W===e,selectionRect:ey,setRenaming:B,stats:X[e],view:T})},e))]})]}),x&&(0,i.jsx)(ew,{count:eM?0:eL.length,directory:M,fileDrop:e$,selected:I,setView:e=>{z(t=>({...t,[M]:e})),F("details"===e?d:void 0)},view:T})]})})},50202:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(77232),a=n(40661),i=n(16361);let o=r.default.ol`
  ${({$scrollable:e})=>e?(0,a.A)():void 0};
  margin-top: 50px;
  contain: strict;
  display: grid;
  gap: ${({theme:e})=>`${e.sizes.fileManager.rowGap} ${e.sizes.fileManager.columnGap}`};
  grid-auto-flow: row;
  grid-template-columns: ${({theme:e})=>`repeat(auto-fill, ${e.sizes.fileManager.gridEntryWidth})`};
  grid-template-rows: ${({theme:e})=>`repeat(auto-fill, ${e.sizes.fileManager.gridEntryHeight})`};
  height: 100%;
  overflow: ${({$isEmptyFolder:e,$scrollable:t})=>!e&&t?void 0:"hidden"};
  padding: ${({theme:e})=>e.sizes.fileManager.padding};
  place-content: flex-start;
  pointer-events: ${({$selecting:e})=>e?"auto":void 0};

  main > & {
    grid-auto-flow: column;
    height: calc(100% - ${i.D5}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`},50980:(e,t,n)=>{n.d(t,{K:()=>i});var r=n(14232),a=n(16361);let i=(e,t,n=!1)=>{let i=(0,r.useRef)(!1),[o,l]=(0,r.useState)(n);return(0,r.useEffect)(()=>{n||!e.current||i.current||(i.current=!0,new IntersectionObserver(e=>e.forEach(({isIntersecting:e})=>l(e)),{root:"object"==typeof t&&t.current||"string"==typeof t&&e.current.closest(t)||e.current.parentElement,...a.A8}).observe(e.current))},[n,e,t]),o}},52179:(e,t,n)=>{n.d(t,{A:()=>v,t:()=>m});var r=n(14232),a=n(4213),i=n(42771),o=n(70185),l=n(9974),s=n(17786),c=n(16361),u=n(60109),d=n(90194);let m=e=>document.querySelector(`main > nav > div[title='${e}']`),p=!1,f=!1,g=!1,b=e=>((0,u.CH)(e),!!g||(g=!0,setTimeout(()=>{g=!1},c.Sq),!1)),h=new Set(["ARROWDOWN","ARROWUP","D","E","R","S","X"]),w=e=>{let{altKey:t,ctrlKey:n,shiftKey:r,metaKey:a}=e;window.globalKeyStates={altKey:t,ctrlKey:n,metaKey:a,shiftKey:r}},v=()=>{let{closeWithTransition:e,minimize:t,open:n}=(0,i.N)(),c=(0,s.w)(),{foregroundId:g,stackOrder:v}=(0,o.w)(),{fullscreenElement:x,toggleFullscreen:y}=(0,l.T)(),{onMaximize:A,onMinimize:k}=(0,d.A)(g),E=(0,r.useRef)({}),$=(0,r.useRef)({E:()=>n("FileExplorer"),ESCAPE:()=>m(a.r5)?.click(),F10:()=>n("Terminal"),F12:()=>n("DevTools"),F5:()=>window.location.reload(),R:()=>n("Run"),S:()=>m(a.BN)?.click(),X:()=>m(a.r5)?.dispatchEvent(new MouseEvent("contextmenu",{clientX:1,clientY:(0,u.Bv)()-1}))});(0,r.useEffect)(()=>{let e=e=>{w(e);let{altKey:t,ctrlKey:n,key:r,shiftKey:a}=e,i=r?.toUpperCase();i&&(a?(n||!h.has(i))&&$.current?.[i]&&!b(e)&&$.current[i]():"F11"===i?((0,u.CH)(e),y()):document.activeElement===document.body&&i.startsWith("ARROW")?document.body.querySelector("main ol li button")?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})):n&&t&&E.current?.[i]?E.current?.[i]?.():x===document.documentElement&&("META"===i?p=!0:t&&E.current?.[i]?((0,u.CH)(e),E.current?.[i]?.()):"ESCAPE"===i?document.pointerLockElement?document.exitPointerLock():y():p&&h.has(i)&&$.current?.[i]&&!b(e)&&(f=!0,$.current[i]())))},t=e=>{w(e),p&&x===document.documentElement&&e.key?.toUpperCase()==="META"&&(p=!1,f?f=!1:m(a.r5)?.click())};return document.addEventListener("keydown",e,{capture:!0}),document.addEventListener("keyup",t,{capture:!0,passive:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("keyup",t,{capture:!0})}},[x,y]),(0,r.useEffect)(()=>{E.current={...E.current,F4:()=>e(g)}},[e,g]),(0,r.useEffect)(()=>{$.current={...$.current,ARROWDOWN:()=>{let{hideMinimizeButton:e=!1,maximized:t,minimized:n}=c.current[g]||{};t?A():n||e||k(!0)},ARROWUP:()=>{let{allowResizing:e=!0,hideMaximizeButton:t=!1,maximized:n,minimized:r}=c.current[g]||{};r?k(!0):n||!e||t||A()},D:()=>(0,u.UH)(c.current,v,t)}},[g,t,A,k,c,v])}},52245:(e,t,n)=>{n.d(t,{A:()=>l,z:()=>o});var r=n(37876),a=n(77232);let i=(0,a.createGlobalStyle)`
  body {
    pointer-events: none;
  }
`,o=a.default.span`
  background-color: ${({theme:e})=>e.colors.selectionHighlightBackground};
  border: ${({theme:e})=>`1px solid ${e.colors.selectionHighlight}`};
  position: absolute;
  z-index: 2;
`,l=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(o,{...e})]})},57807:(e,t,n)=>{n.d(t,{H:()=>d,o:()=>u});var r=n(77232);let a=r.default.li`
  margin-bottom: -1px;
  margin-left: ${({theme:e})=>e.sizes.fileManager.detailsStartPadding}px;
  width: fit-content;

  button {
    display: flex;
    padding-left: 4px;
    text-align: left;

    figure {
      bottom: 1px;
      display: flex;
      flex-direction: row;
      height: ${({theme:e})=>e.sizes.fileManager.detailsRowHeight};
      padding-right: ${({theme:e})=>e.sizes.fileManager.detailsEndPadding}px;
      place-items: center;
      position: relative;

      figcaption {
        color: ${({theme:e})=>e.colors.fileEntry.text};
        font-size: ${({theme:e})=>e.sizes.fileEntry.fontSize};
        overflow: hidden;
        padding-left: 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-word;
      }
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.fileEntry.background};
  }

  &.focus-within {
    background-color: ${({theme:e})=>e.colors.fileEntry.backgroundFocused};

    &:hover {
      background-color: ${({theme:e,$selecting:t})=>t?e.colors.fileEntry.backgroundFocused:e.colors.fileEntry.backgroundFocusedHover};
    }
  }
`;var i=n(66673);let o=r.default.li`
  display: ${({$visible:e})=>e?"flex":"none"};
  height: min-content;
  outline-offset: -2px;
  padding: 2px;

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: ${({theme:e})=>e.colors.fileEntry.text};
        font-size: ${({theme:e})=>e.sizes.fileEntry.fontSize};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        text-shadow: ${({$desktop:e,theme:t})=>e?t.colors.fileEntry.textShadow:void 0};
        word-break: break-word;
      }

      picture {
        height: ${({theme:e})=>e.sizes.fileEntry.iconSize};
        width: ${({theme:e})=>e.sizes.fileEntry.iconSize};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.fileEntry.background};
    outline: ${({$desktop:e,theme:t})=>e?`1px solid ${t.colors.fileEntry.border}`:void 0};
  }

  &.focus-within {
    background-color: ${({theme:e})=>e.colors.fileEntry.backgroundFocused};
    outline: ${({$desktop:e,theme:t})=>e?`1px solid ${t.colors.fileEntry.borderFocused}`:void 0};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &:hover {
      background-color: ${({theme:e,$selecting:t})=>t?e.colors.fileEntry.backgroundFocused:e.colors.fileEntry.backgroundFocusedHover};
      outline: ${({$desktop:e,theme:t})=>e?`1px solid ${t.colors.fileEntry.borderFocusedHover}`:void 0};
    }
  }
`;var l=n(50202),s=n(86076),c=n(8431);let u={details:{StyledFileEntry:a,StyledFileManager:i.A},icon:{StyledFileEntry:o,StyledFileManager:l.A},list:{StyledFileEntry:s.A,StyledFileManager:c.A}},d={details:{imgSize:16},detailsSub:{displaySize:8,imgSize:16},icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}}},66673:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(77232),a=n(52245),i=n(40661);let o=r.default.ol`
  ${({$scrollable:e})=>e?(0,i.A)():void 0};

  contain: strict;
  overflow: ${({$isEmptyFolder:e,$scrollable:t})=>!e&&t?void 0:"hidden"};
  pointer-events: ${({$selecting:e})=>e?"auto":void 0};
  scrollbar-gutter: auto;

  picture:not(:first-of-type) {
    position: absolute;
  }

  ${a.z} {
    top: 0;
  }
`},71553:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(14232),a=n(16361);let i=(e,t=!1)=>{let n=(0,r.useRef)(),i=(0,r.useRef)(0);return{onClick:(0,r.useCallback)(r=>{let o=()=>{r.stopPropagation(),e(r)},l=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},s=()=>{i.current>=12&&l(),void 0===n.current?(r.target.removeEventListener("pointermove",s),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(l,a.UW.DOUBLE_CLICK),r.target.addEventListener("pointermove",s,{passive:!0})):(l(),o())},[e,t])}}},72328:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(14232);let a=!1,i=async()=>{if(!("ai"in window)||!("languageModel"in window.ai)||"object"!=typeof window.ai.languageModel||!("capabilities"in window.ai.languageModel)||"function"!=typeof window.ai.languageModel.capabilities)return!1;try{return a="readily"===(await window.ai.languageModel.capabilities()).available}catch{return!1}},o=()=>{let[e,t]=(0,r.useState)(a),n=(0,r.useCallback)(async()=>{await i()&&t(!0)},[]);return(0,r.useEffect)(()=>{e||requestAnimationFrame(n)},[n,e]),e}},78011:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(79052),a=n(14232),i=n(49697),o=n(84966),l=n(54188),s=n(46711),c=n(42771),u=n(70185),d=n(16361),m=n(60109),p=n(17786);let f=({callback:e,directory:t=d.Bn,id:n,onDragLeave:f,onDragOver:g,updatePositions:b})=>{let{url:h}=(0,c.N)(),w=(0,p.w)(),{iconPositions:v,sortOrders:x,setIconPositions:y}=(0,u.w)(),{exists:A,mkdirRecursive:k,updateFolder:E,writeFile:$}=(0,s.f)(),S=(0,a.useCallback)(async(e,t,a)=>{if(n)if(t){let i=(0,r.join)(d.Bn,e);if(await k(d.Bn),await $(i,t,!0))return a===l.z.UPDATE_URL&&h(n,i),E(d.Bn,e),(0,r.basename)(i)}else a===l.z.UPDATE_URL&&h(n,e);return""},[n,k,E,h,$]),{openTransferDialog:M}=(0,i.A)();return{onDragLeave:f,onDragOver:e=>{g?.(e),(0,m.CH)(e)},onDrop:a=>{if(d.jj.has((0,m.uQ)(t)))return;if(b&&a.target instanceof HTMLElement){let{files:e,text:n}=(0,o.bn)(a);if(0===e.length&&""===n)return;(async()=>{let i={x:a.clientX,y:a.clientY},o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;o=o.map(e=>(0,r.basename)(e))}else o=e instanceof FileList?[...e].map(e=>e.name):[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=await Promise.all(o.map(async e=>{let n=`${t}/${e}`;if(!v[n]||!await A(n))return e;let a=0;do a+=1,n=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${a})${(0,r.extname)(e)}`;while(v[n]&&await A(n));return(0,r.basename)(n)})),(0,m.$Y)(t,a.target,v,x,i,o,y,A)})()}let i="string"==typeof n;i&&!b&&t===d.Bn&&w.current[n]?.componentWindow?.focus(d.VD),(0,o.nX)(a,e||S,t,M,i)}}}},81501:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(14232),a=n(54239),i=n(46711),o=n(35858),l=n(16361),s=n(60109);let c={icon:"",pid:"",url:""},u=(e,t=!1,n=!1,u=!0)=>{let[d,m]=(0,r.useState)(c),p=(0,r.useRef)(!1),f=e=>{m(e),p.current=!1},{fs:g,rootFs:b}=(0,i.f)();return(0,r.useEffect)(()=>{if(g&&b&&!p.current&&u&&d===c){p.current=!0;let r=t?"":(0,s.uQ)(e);r&&(!t||l.jj.has(r)||(0,o.isMountedFolder)(b.mntMap[e]))?(0,a.O6)(g,e,r,f):(0,a.qz)(g,b,e,t,n,f)}},[g,n,d,t,u,e,b]),[d,m]}},84788:(e,t,n)=>{n.r(t),n.d(t,{Back:()=>i,Down:()=>c,Forward:()=>o,GoTo:()=>s,Refresh:()=>l,Search:()=>d,Up:()=>u});var r=n(37876),a=n(14232);let i=(0,a.memo)(()=>(0,r.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M15 18l-6-6 6-6"})})),o=(0,a.memo)(()=>(0,r.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M9 18l6-6-6-6"})})),l=(0,a.memo)(()=>(0,r.jsx)("svg",{className:"refresh",viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),s=(0,a.memo)(()=>(0,r.jsx)("svg",{className:"go-to",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.906 16 17.203 30.703l-1.406-1.406L28.094 17H0v-2h28.094L15.797 2.703l1.406-1.406z"})})),c=(0,a.memo)(({flip:e})=>{let t=(0,a.useMemo)(()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0,[e]);return(0,r.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M18 15l-6-6-6 6"})})}),u=(0,a.memo)(()=>{let e=(0,a.useMemo)(()=>({marginTop:"-1px"}),[]);return(0,r.jsxs)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"}),(0,r.jsx)("path",{d:"M9 22V12h6v10M2 10.6L12 2l10 8.6"})]})}),d=(0,a.memo)(()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})}))},86076:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(77232);let a=r.default.li`
  display: flex;
  flex-direction: column;

  figure {
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    padding-left: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: rgb(210, 210, 210);
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      pointer-events: none;
      width: 8px;
    }

    picture,
    svg {
      transition: margin 0.25s ease-out;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }

      picture,
      svg {
        transition: none;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: hsla(0, 0%, 35%, 70%);
      }
    }

    @media (pointer: coarse) {
      &:active {
        background-color: hsla(0, 0%, 35%, 70%);
        border: 1px solid hsla(0, 0%, 45%, 70%);
      }
    }
  }
`},90194:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(14232),a=n(41422),i=n(42771),o=n(70185),l=n(17786),s=n(16361);let c=e=>{let t=(0,a.A)(e),{setForegroundId:n,removeFromStack:c}=(0,o.w)(),{closeWithTransition:u,maximize:d,minimize:m}=(0,i.N)(),p=(0,l.w)(),f=(0,r.useCallback)(r=>{m(e),r||n(t)},[e,m,t,n]),g=(0,r.useCallback)(()=>{let t=()=>{d(e),n(e),p.current[e]?.componentWindow?.focus(s.VD)},[r]=p.current[e]?.componentWindow?.getAnimations()||[];r?.finished?r.finished.then(t):t()},[e,d,p,n]);return{onClose:(0,r.useCallback)(()=>{c(e),u(e),n(t)},[u,e,t,c,n]),onMaximize:g,onMinimize:f}}},91754:(e,t,n)=>{n.d(t,{_:()=>o});var r=n(14232);let a=!1,i=async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}if(!e)return!1;let t=0x40000000>(e.limits.maxBufferSize??0)||0x40000000>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0);return t||(a=!0),!t},o=()=>{let[e,t]=(0,r.useState)(a),n=(0,r.useCallback)(async()=>{await i()&&t(!0)},[]);return(0,r.useEffect)(()=>{e||requestAnimationFrame(n)},[n,e]),e}},91977:(e,t,n)=>{n.d(t,{a:()=>i});let r={capture:!0,passive:!0},a={capture:!1,passive:!0},i=(e,t=!1,n=1,i=!1)=>{e&&requestAnimationFrame(()=>{let o=()=>{t||(e.style.background=""),e.style.borderImage=""};if(t){let t=({clientX:a,clientY:l})=>{if(e.isConnected){let{x:t,y:r}=e.getBoundingClientRect(),o=i&&document.elementFromPoint(a,l)===e;e.style.borderImage=`radial-gradient(75px at ${a-t}px ${l-r}px, rgba(${o?"255, 255, 255, 80%":"200, 200, 200, 60%"}), transparent) 1 / ${n}px / 0 stretch`}else document.removeEventListener("mousemove",t,r),document.removeEventListener("mouseleave",o,r)};document.addEventListener("mousemove",t,r),document.addEventListener("mouseleave",o,r)}else e.addEventListener("mousemove",({offsetX:t,offsetY:r})=>{e.style.background=`radial-gradient(circle at ${t}px ${r}px, rgba(200, 200, 200, 30%), transparent)`,e.style.borderImage=`radial-gradient(75px at ${t}px ${r}px, rgba(200, 200, 200, 60%), transparent) 1 / ${n}px / 0 stretch`},a),e.addEventListener("mouseleave",o,a)})}},97246:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(37876),a=n(14232),i=n(57807),o=n(42670),l=n(16361);let s=(0,a.memo)(({baseIcon:e,icon:t,imgSize:n,isDesktop:s,isFirstImage:c,alt:u,totalSubIcons:d,view:m})=>{let p=(0,a.useMemo)(()=>{let e=![l.D7,l.N9].includes(t)&&!t.startsWith("blob:")&&!t.startsWith(l.jv)&&!t.startsWith(l.zP);return t===l.D7&&"details"===m?{displaySize:16,imgSize:48}:i.H[e?"details"===m?"detailsSub":"sub":m]},[t,m]),f=(0,a.useMemo)(()=>{if(t===l.N9)return{zIndex:3};if(e===l.$6){let e=d-1>1,t=16===n,r=c&&e?t?"matrix(0.4, 0.14, 0, 0.8, -0.5, 2)":"matrix(0.4, 0.14, 0, 0.7, -4, 2)":t?"matrix(0.5, 0.05, 0, 0.8, 3.5, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)";return{objectFit:"cover",transform:`${r} translateZ(0px)`,zIndex:c?2:1}}},[e,t,n,c,d]);return(0,r.jsx)(o.A,{$eager:s||t===l.D7,alt:u,src:t,style:f,...p})}),c=(0,a.memo)(({alt:e,icon:t,imgSize:n,isDesktop:i,showShortcutIcon:o,subIcons:c,view:u})=>{let d=(0,a.useMemo)(()=>o?c?.filter(e=>e!==l.D7):c,[o,c]),m=(0,a.useMemo)(()=>{let e=d?.length;return e&&"details"===u&&d[e-1]===l.N9?[]:d?.filter(e=>e!==t)||[]},[t,d,u]);return(0,r.jsx)(r.Fragment,{children:m.map((a,o)=>(0,r.jsx)(s,{alt:e,baseIcon:t,icon:a,imgSize:n,isDesktop:i,isFirstImage:0===o,totalSubIcons:m.length,view:u},a))})})},98892:(e,t,n)=>{n.d(t,{K1:()=>r,Qq:()=>l,aE:()=>o,aV:()=>a,bK:()=>i,tT:()=>s});let r="Λ ＲＣＡＮＧＥＬ. \uD835\uDC0E\uD835\uDC12",a="v1.3",i=`${r} (${a})`,o="balanced",l=()=>new Worker(n.tu(new URL(n.p+n.u(61),n.b)),{name:"AI"}),s="ai-chat-window"}}]);