"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6285],{16093:(e,t,n)=>{n.r(t),n.d(t,{Back:()=>a,Down:()=>c,Forward:()=>o,GoTo:()=>s,Refresh:()=>l,Search:()=>d,Up:()=>u});var r=n(74848),i=n(96540);let a=(0,i.memo)(()=>(0,r.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M15 18l-6-6 6-6"})})),o=(0,i.memo)(()=>(0,r.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M9 18l6-6-6-6"})})),l=(0,i.memo)(()=>(0,r.jsx)("svg",{className:"refresh",viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),s=(0,i.memo)(()=>(0,r.jsx)("svg",{className:"go-to",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M31.906 16 17.203 30.703l-1.406-1.406L28.094 17H0v-2h28.094L15.797 2.703l1.406-1.406z"})})),c=(0,i.memo)(({flip:e})=>{let t=(0,i.useMemo)(()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0,[e]);return(0,r.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M18 15l-6-6-6 6"})})}),u=(0,i.memo)(()=>{let e=(0,i.useMemo)(()=>({marginTop:"-1px"}),[]);return(0,r.jsxs)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"}),(0,r.jsx)("path",{d:"M9 22V12h6v10M2 10.6L12 2l10 8.6"})]})}),d=(0,i.memo)(()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})}))},39971:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(74848),i=n(96540),a=n(67963),o=n(31251),l=n(48060);let s=(0,i.memo)(({baseIcon:e,icon:t,imgSize:n,isDesktop:s,isFirstImage:c,alt:u,totalSubIcons:d,view:m})=>{let p=(0,i.useMemo)(()=>{let e=![l.D7,l.N9].includes(t)&&!t.startsWith("blob:")&&!t.startsWith(l.jv)&&!t.startsWith(l.zP);return t===l.D7&&"details"===m?{displaySize:16,imgSize:48}:a.H[e?"details"===m?"detailsSub":"sub":m]},[t,m]),f=(0,i.useMemo)(()=>{if(t===l.N9)return{zIndex:3};if(e===l.$6){let e=d-1>1,t=16===n,r=c&&e?t?"matrix(0.4, 0.14, 0, 0.8, -0.5, 2)":"matrix(0.4, 0.14, 0, 0.7, -4, 2)":t?"matrix(0.5, 0.05, 0, 0.8, 3.5, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)";return{objectFit:"cover",transform:`${r} translateZ(0px)`,zIndex:c?2:1}}},[e,t,n,c,d]);return(0,r.jsx)(o.A,{$eager:s||t===l.D7,alt:u,src:t,style:f,...p})}),c=(0,i.memo)(({alt:e,icon:t,imgSize:n,isDesktop:a,showShortcutIcon:o,subIcons:c,view:u})=>{let d=(0,i.useMemo)(()=>o?c?.filter(e=>e!==l.D7):c,[o,c]),m=(0,i.useMemo)(()=>{let e=d?.length;return e&&"details"===u&&d[e-1]===l.N9?[]:d?.filter(e=>e!==t)||[]},[t,d,u]);return(0,r.jsx)(r.Fragment,{children:m.map((i,o)=>(0,r.jsx)(s,{alt:e,baseIcon:t,icon:i,imgSize:n,isDesktop:a,isFirstImage:0===o,totalSubIcons:m.length,view:u},i))})})},28424:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(96540),i=n(91745),a=n(41017),o=n(56431),l=n(48060),s=n(37e3);let c={icon:"",pid:"",url:""},u=(e,t=!1,n=!1,u=!0)=>{let[d,m]=(0,r.useState)(c),p=(0,r.useRef)(!1),f=e=>{m(e),p.current=!1},{fs:g,rootFs:b}=(0,a.f)();return(0,r.useEffect)(()=>{if(g&&b&&!p.current&&u&&d===c){p.current=!0;let r=t?"":(0,s.uQ)(e);r&&(!t||l.jj.has(r)||(0,o.isMountedFolder)(b.mntMap[e]))?(0,i.O6)(g,e,r,f):(0,i.qz)(g,b,e,t,n,f)}},[g,n,d,t,u,e,b]),[d,m]}},83664:(e,t,n)=>{n.d(t,{A:()=>l,z:()=>o});var r=n(74848),i=n(33540);let a=(0,i.createGlobalStyle)`
  body {
    pointer-events: none;
  }
`,o=i.default.span`
  background-color: ${({theme:e})=>e.colors.selectionHighlightBackground};
  border: ${({theme:e})=>`1px solid ${e.colors.selectionHighlight}`};
  position: absolute;
  z-index: 2;
`,l=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)(o,{...e})]})},46285:(e,t,n)=>{let r,i;n.d(t,{A:()=>ez});var a=n(74848),o=n(16286),l=n(96540),s=n(14953),c=n.n(s);let u=["name","date","type","size"],d={date:{name:"Date modified",width:133},name:{name:"Name",width:133},size:{name:"Size",width:70},type:{name:"Type",width:80}};var m=n(33540),p=n(48470);let f=m.default.div`
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
`;var g=n(91745),b=n(85845),h=n(41017),w=n(37e3);let v=(0,l.memo)(({columns:e,isDirectory:t,path:n,stats:r})=>{let{stat:i}=(0,h.f)(),{formats:o}=(0,m.useTheme)(),s=(0,l.useCallback)(async()=>{let e=r.size===b.df?await i(n):r;return{date:(0,g.y8)(n,e,o.dateModified),size:t?"":(0,w.ET)(e.size,!0),type:t?"File folder":(0,g.ti)((0,w.uQ)(n))}},[o.dateModified,t,n,i,r]),[c,u]=(0,l.useState)(),d=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{c||d.current||(d.current=!0,s().then(e=>{u(e),d.current=!1}))},[c,s]),(0,a.jsxs)(f,{children:[(0,a.jsx)("div",{style:{width:e?.date.width},children:c?.date}),(0,a.jsx)("div",{style:{width:e?.type.width},children:c?.type}),(0,a.jsx)("div",{style:{width:e?.size.width},children:c?.size})]})}),x=m.default.figure`
  pointer-events: ${({$renaming:e})=>e?"all":void 0};

  figcaption {
    pointer-events: none;
  }
`;var y=n(39971),k=n(62104),A=n(25573),E=n(1364),$=n(96119),M=n(48060);let S=(e,t)=>{let{setForegroundId:r,updateRecentFiles:i}=(0,E.w)(),{createPath:a,updateFolder:s}=(0,h.f)(),{minimize:c,open:u,url:d}=(0,k.N)(),m=(0,$.w)();return(0,l.useCallback)(async(l,p)=>{let{preferProcessIcon:f,singleton:g,icon:b}=A.A[l]||{},h=g?Object.keys(m.current).find(e=>e===l||e.startsWith(`${l}${M.QB}`)):"",v=e;if(e.startsWith("ipfs://")){let{getIpfsFileName:t,getIpfsResource:r}=await n.e(1451).then(n.bind(n,1451)),i=await r(e);v=(0,o.join)(M.Bn,await a(await t(e,i),M.Bn,i)),s(M.Bn,(0,o.basename)(v))}h?(d(h,v),m.current[h].minimized&&c(h),r(h)):(u(l||"OpenWith",{url:v},g||p===M.$6||f?b:p),v&&l&&i(v,l,(0,w.t$)(v)?(0,o.basename)(t,(0,o.extname)(t)):void 0))},[a,c,u,t,m,r,d,s,i,e])},j=new Set([".001",".7z",".ace",".apk",".appx",".arj",".bz2",".bzip2",".cab",".chm",".chw",".cpio",".deb",".dll",".dmg",".doc",".docx",".epub",".esd",".exe",".flv",".gz",".gzip",".hfs",".hxs",".img",".ipa",".jar",".lha",".lit",".lzh",".lzma",".mbr",".msi",".ntfs",".ods",".odt",".ova",".pages",".pkg",".ppt",".qcow",".qcow2",".r00",".rar",".rpm",".squashfs",".swf",".swm",".sys",".tar",".taz",".tgz",".txz",".udf",".vdi",".vhd",".vhdx",".vmdk",".wim",".xar",".xip",".xls",".xlsx",".xpi",".xz",".z",".zipx"]);var z=n(97279),C=n(56431),D=n(78744);let R=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),T=[".aac",".mp3",".ogg",".wav"],F=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".mpg",".ogv",".webm",".wmv"]),H=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"],L=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),B=[".bmp",".gif",".jpg",".png",".psd",".svg",".tiff"];var O=n(58991),W=n(15289),P=n(59554),N=n(10581),U=n(48287).Buffer;let{alias:G}=M.sx,I=(e,t,r,i,{archiveFiles:a,deleteLocalPath:s,downloadFiles:c,extractFiles:u,newShortcut:d},{blurEntry:m,focusEntry:p},f,b,v,x)=>{let{minimize:y,open:I,url:Q}=(0,k.N)(),V=(0,$.w)(),{aiEnabled:q,setCursor:K,setForegroundId:Y,setWallpaper:X,updateRecentFiles:Z}=(0,E.w)(),J=(0,o.basename)(r),_=f.includes(J),ee=S(e,r),{copyEntries:et,createPath:en,lstat:er,mapFs:ei,moveEntries:ea,readFile:eo,rootFs:el,unMapFs:es,updateFolder:ec}=(0,h.f)(),{contextMenu:eu}=(0,D.b)(),ed=(0,W.i)(),{onContextMenuCapture:em,...ep}=(0,l.useMemo)(()=>eu?.(()=>{let l=w.uQ(e),{process:m=[]}=l in z.A?z.A[l]:{},p=m.filter(e=>e!==t).filter(e=>e!==t),h=1===f.length,k=()=>h||!_?[r]:[...new Set([r,...f.map(e=>o.join(o.dirname(r),e))])],E=[],$=w.uQ(r),S=$===M.b3,D=el?.mountList.some(e=>e===r&&C.isMountedFolder(el?.mntMap[e]));if(!x&&!D){let m=g.YD(l);if(E.push({action:()=>ea(k()),label:"Cut"},{action:()=>et(k()),label:"Copy"},M.kG),(m||S||!$&&!l)&&E.push({action:()=>k().forEach(async e=>{let t=m&&!(await er(e)).isDirectory()?m:"FileExplorer";d(e,t)}),label:"Create shortcut"}),E.push({action:()=>k().forEach(e=>s(e)),label:"Delete"},{action:()=>i(J),label:"Rename"},M.kG,{action:()=>{let t=Object.keys(V.current).find(t=>t===`Properties${M.QB}${e}`);t?(V.current[t].minimized&&y(t),Y(t)):I("Properties",{shortcutPath:S?r:void 0,url:S?r:e})},label:"Properties"}),r){if(r===o.join(M.Bn,M.YH)){if("function"==typeof FileSystemHandle){let e=(e,t)=>{ei(e,t).then(e=>{ec("/",e),I("FileExplorer",{url:o.join("/",e)})}).catch(()=>{})},t="showDirectoryPicker"in window,n="function"==typeof navigator.storage?.getDirectory&&!w.nr();E.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[M.kG]:[])}}else{E.unshift(M.kG);let i=R.has($),s=L.has($),d=F.has($);if(i||s||d){let e=i||d;E.unshift(M.kG,{label:"Convert to",menu:(e?i?T:H:B).filter(e=>e!==$).map(t=>{let i=t.replace(".","");return{action:async()=>{let t=await Promise.all(k().map(async e=>[e,await eo(e)])),a=e?(await n.e(1919).then(n.bind(n,91919))).transcode:(await n.e(2819).then(n.bind(n,2819))).convert,l=await a(t,i);await Promise.all(l.map(async([e,t])=>{let n=o.basename(e),i=o.dirname(r);ec(i,await en(n,i,t))}))},label:i.toUpperCase()}})})}M.Mk.includes($)&&E.unshift(M.kG,{label:"Convert to",menu:M.Mk.filter(e=>e!==$).map(e=>{let t=e.replace(".","");return{action:()=>{k().forEach(async e=>{let i=`${o.dirname(e)}/${o.basename(e,o.extname(e))}.${t}`,{convertSheet:a}=await n.e(6361).then(n.bind(n,66361)),l=await a(await eo(e),t),s=o.dirname(r);ec(s,await en(o.basename(i),s,U.from(l)))})},label:t.toUpperCase()}})}),".m3u"!==$&&M.hL.has($)&&E.unshift(M.kG,{action:()=>{k().forEach(async e=>{let t=`${o.dirname(e)}/${o.basename(e,o.extname(e))}.m3u`,{createM3uPlaylist:i,tracksFromPlaylist:a}=await n.e(1823).then(n.bind(n,51823)),l=i(await a((await eo(e)).toString(),w.uQ(e))),s=o.dirname(r);ec(s,await en(o.basename(t),s,U.from(l)))})},label:"Convert to M3U"});let f="FileExplorer"===t;if(h&&!f&&!w.t$(e)){let t=o.basename(e),n={text:`${t} - ${G}`,title:t,url:`${window.location.origin}?url=${e}`};try{!el?.mountList.some(e=>"/"!==e&&r.startsWith(`${e}/`))&&g.Aw(b)&&navigator.canShare?.(n)&&E.unshift({SvgIcon:O.SY,action:()=>navigator.share(n),label:"Share"})}catch{}}E.unshift({action:()=>a(k()),label:"Add to archive..."},...j.has(l)||M.jj.has(l)?[{action:()=>u(e),label:"Extract Here"},M.kG]:[],{action:()=>c(k()),label:"Download"}),S||f||M.hr.forEach(e=>{e===m||p.includes(e)||p.push(e)})}}E.unshift(M.kG)}if(D&&E.push(M.kG,{action:()=>es(r,el?.mntMap[r].getName()!=="FileSystemAccess"),label:"Disconnect"}),M.PD.has(l)&&E.unshift({action:()=>{I("Paint",{url:e}),e&&Z(e,"Paint")},label:"Edit"}),M.Dh.has(l)&&E.unshift({action:()=>K(e),label:"Set as mouse pointer"}),(q||ed&&"summarizer"in window.ai)&&M.$h.has(l)){let t=t=>{window.initialAiPrompt=`${t}: ${e}`;let n=document.querySelector("main > section > footer > button.new-topic");n?n?.click():P.t(N.bK)?.click()};E.unshift(M.kG,{label:`AI (${N.aV})`,menu:[...q||ed&&"summarizer"in window.ai?[{action:()=>t("Summarize"),label:"Summarize Text"}]:[]]})}let W=M.yH.has(l);if((W||M.O4.has(l)&&!M.Dh.has(l)&&".svg"!==l)&&E.unshift({label:"Set as background",...W?{action:()=>X(e)}:{menu:[{action:()=>X(e,"fill"),label:"Fill"},{action:()=>X(e,"fit"),label:"Fit"},{action:()=>X(e,"stretch"),label:"Stretch"},{action:()=>X(e,"tile"),label:"Tile"},{action:()=>X(e,"center"),label:"Center"}]}}),p.length>0&&E.unshift({label:"Open with",menu:[...p.map(e=>{let{icon:t,title:n}=A.A[e]||{};return{action:()=>{ee(e,t)},icon:t,label:n}}),M.kG,{action:()=>I("OpenWith",{url:e}),label:"Choose another app"}],primary:!t}),t){let{icon:n}=A.A[t]||{};if(S&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")&&!e.startsWith("nostr:")){let t=""===l||".zip"===l;E.unshift({action:()=>I("FileExplorer",{url:o.dirname(e)},""),label:`Open ${t?"folder":"file"} location`})}v&&"FileExplorer"===t&&!M.jj.has(l)&&E.unshift({action:()=>{ee(t,n)},label:"Open in new window"}),E.unshift({action:()=>{"FileExplorer"===t&&v&&!M.jj.has(l)?Q(v,e):ee(t,n)},icon:n,label:"Open",primary:!0})}return E[0]===M.kG?E.slice(1):E}),[q,a,J,Q,eu,et,en,s,c,u,v,f,ed,_,er,ei,y,ea,d,I,ee,r,t,V,eo,x,el?.mntMap,el?.mountList,K,Y,i,X,b,es,ec,Z,e]);return{onContextMenuCapture:e=>{_||(m(),p(J)),em(e)},...ep}};var Q=n(28424);let V=(e,t,n,r,i)=>{if(!e)return Object.create(null);let a=Number(t),o=Number(n);return{height:`${Math.abs(a)}px`,transform:`translate(
        ${Number(r)+Math.min(o,0)}px,
        ${Number(i)+Math.min(a,0)}px)`,width:`${Math.abs(o)}px`}},q=(e,t,n,r)=>{let{x:i=0,y:a=0,width:o=0,height:l=0}=n,s=new DOMRect(i,a,Number(o),Number(l));return!(e.left-t.left>=s.right||e.top-t.top>=s.bottom||e.right-t.left<=s.left||e.bottom-t.top+r<=s.top)};var K=n(8218),Y=n(67963),X=n(75892),Z=n(87952),J=n(31251),_=n(89612),ee=n(17261),et=n(48287).Buffer;let en=c()(()=>Promise.resolve().then(n.bind(n,16093)).then(e=>e.Down),{loadableGenerated:{webpack:()=>[16093]}}),er=c()(()=>n.e(2494).then(n.bind(n,82494)),{loadableGenerated:{webpack:()=>[82494]}}),ei=(e,t,n,r,i=!1)=>{let a=e.replace(/-/g,M.Jc),{lines:o}=(0,g.AN)(a,t,n,r);if(o.length>2){let t=i||e.includes(" ")?o.slice(0,2).join(""):o[0];return`${t.slice(0,-3).trim()}...`}return a},ea=[],eo=[],el=({columns:e,fileActions:t,fileManagerId:n,fileManagerRef:r,focusedEntries:i,focusFunctions:s,hideShortcutIcon:c,isDesktop:u,isHeading:d,isLoadingFileManager:f,loadIconImmediately:A,name:E,path:$,readOnly:j,renaming:z,selectionRect:C,setRenaming:D,stats:R,hasNewFolderIcon:T,view:F})=>{let{blurEntry:H,focusEntry:L}=s,{url:B}=(0,k.N)(),O=(0,l.useRef)(null),W=(0,ee.K)(O,r,u),P=(0,l.useMemo)(()=>R.isDirectory(),[R]),[{comment:N,getIcon:U,icon:G,pid:V,subIcons:el,url:es},ec]=(0,Q.A)($,P,T,u||W),eu=S(es,$),{createPath:ed,exists:em,fs:ep,mkdirRecursive:ef,pasteList:eg,stat:eb,updateFolder:eh,writeFile:ew}=(0,h.f)(),[ev,ex]=(0,l.useState)(!1),{formats:ey,sizes:ek}=(0,m.useTheme)(),eA=(0,l.useMemo)(()=>"list"===F,[F]),eE=(0,l.useMemo)(()=>(0,o.basename)($),[$]),e$=(0,l.useMemo)(()=>P?"":(0,w.uQ)(es),[P,es]),eM=(0,l.useMemo)(()=>(0,w.t$)(es),[es]),eS=(0,l.useMemo)(()=>M.O4.has(e$)||M.yH.has(e$)||eM,[eM,e$]),ej=(0,l.useMemo)(()=>1===i.length&&i[0]===eE,[eE,i]),eC=(0,l.useMemo)(()=>(0,w.uQ)($),[$]),eD=(0,l.useMemo)(()=>eC===M.b3,[eC]),eR=eD?es:$,eT=(0,K.A)({callback:async(e,t)=>{if(!i.includes(eE)){let n=await ed(e,eR,t);if(n)return eh(eR,n),n}return""},directory:eR}),eF=(0,l.useMemo)(()=>"FileExplorer"===V,[V]),eH=(0,l.useMemo)(()=>ei(E,ek.fileEntry.fontSize,ey.systemFont,ek.fileEntry[eA?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"],!u),[ey.systemFont,u,eA,E,ek.fileEntry]),eL=(0,l.useRef)(null),eB=(0,l.useRef)(!1),eO=(0,l.useRef)(!1),eW=(0,l.useRef)(),eP=(0,l.useCallback)(async()=>{if(P)return"";if(eD){if(N)return N;if(es){if(es.startsWith("http:")||es.startsWith("https:"))return decodeURIComponent(es);let e=(0,o.dirname)(es);return`Location: ${(0,o.basename)(es,(0,o.extname)(es))}${e&&"."!==e?` (${(0,o.dirname)(es)})`:""}`}return""}let e=(0,g.ti)(eC),t=R.size===b.df?await eb($):R,{size:n}=t,r=(0,w.ET)(n),i=`Type: ${e}${"-1 bytes"===r?"":`
Size: ${r}`}`,a=(0,g.y8)($,t,ey.dateModified);return`${i}
Date modified: ${a}`},[N,eC,ey.dateModified,P,eD,$,eb,R,es]),[eN,eU]=(0,l.useState)(),eG=(0,l.useCallback)(()=>{eF&&n&&!window.globalKeyStates?.ctrlKey&&!M.jj.has(e$)?(B(n,es),H()):eF&&eA?ex(e=>!e):eu(V,eS?void 0:G)},[H,B,n,G,eS,eA,eu,eF,V,es,e$]),eI=(0,l.useMemo)(()=>W&&void 0!==e&&"details"===F,[e,W,F]),eQ=(0,l.useMemo)(()=>eI&&e?e.name.width-ek.fileManager.detailsStartPadding:0,[e,eI,ek.fileManager.detailsStartPadding]);return(0,l.useEffect)(()=>{f||!W||eB.current||(async()=>{if(G.startsWith("blob:")||G.startsWith("data:")){if(G.startsWith("data:image/jpeg;base64,"))return;eB.current=!0;let e=(0,o.join)(M.jv,`${$}${M.V9}`);if(".ico"!==e$&&!es.startsWith(M.uH)&&!es.startsWith(M._O)&&!await em(e)&&eL.current instanceof HTMLImageElement){let t=async n=>{if(eL.current instanceof HTMLImageElement){let r=()=>(eo.shift(),eo[0]?.()),i="";if(eL.current.currentSrc.startsWith("data:image/gif;base64,")||eL.current.currentSrc.startsWith("data:image/png;base64,"))i=eL.current.currentSrc;else if(eL.current.currentSrc.startsWith("blob:"))i=await (0,w.Sk)(await (await fetch(eL.current.currentSrc)).blob());else{let e,r,a;let{clientHeight:o,clientWidth:l}=eL.current,{naturalHeight:s,naturalWidth:c}=eL.current,u=c/s;u!==l/o&&(c>s?e=o/u:r=l*u);let d=await (0,w.em)();try{a=await d?.toCanvas(eL.current,{height:e,skipAutoScale:!0,style:{objectPosition:e?"top":r?"left":void 0},width:r})}catch{}a&&((0,w.b0)(a)||n)?i=a.toDataURL("image/png"):setTimeout(()=>t(!0),M.UW.WINDOW)}i&&eo.push(async()=>{let t=(0,o.dirname)(e);await ef(t);let n=et.from(i.replace(/data:.*;base64,/,""),"base64");return await ew(e,n,!0),ec(e=>({...e,icon:(0,w.Zd)(n)})),eh(t,(0,o.basename)(e)),r()}),1===eo.length&&await eo[0]()}};eL.current.complete?t():eL.current.addEventListener("load",()=>t(),M.w3)}}else if(!eD||"function"==typeof U||eM){if(eB.current||!ep)return;let e=await (0,g.$j)(ep,(0,o.join)(M.jv,`${$}${M.V9}`));e?eB.current||(eB.current=!0,ec(t=>({...t,icon:e}))):!eO.current&&O.current&&"function"==typeof U&&(eW.current=new AbortController,await U(eW.current.signal),eO.current=!eW.current.signal.aborted)}})(),!W&&eW.current&&eW.current.abort()},[em,ep,U,G,f,eD,W,eM,ef,$,ec,eh,es,e$,ew]),(0,l.useEffect)(()=>()=>{try{eW.current?.abort()}catch{}},[]),(0,l.useLayoutEffect)(()=>{if(O.current&&r.current){let e=i.includes(eE),t=ea.includes(eE),n=e||t;if(e&&t&&ea.splice(ea.indexOf(eE),1),C){let e=q(O.current.getBoundingClientRect(),r.current.getBoundingClientRect(),C,r.current.scrollTop);e&&!n?(ea.push(eE),L(eE),O.current.focus(M.VD)):!e&&n&&H(eE)}else n&&O.current!==document.activeElement&&1===i.length&&!O.current.contains(document.activeElement)&&O.current.focus(M.VD)}},[H,r,eE,L,i,C]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(Z.A,{ref:O,"aria-label":E,onMouseOver:()=>eP().then(eU),title:eN,...eA&&{...M.P4,as:p.m.button},...(0,X.A)(eG,eA),...eF&&eT,...I(es,V,$,D,t,s,i,R,n,j),children:[(0,a.jsxs)(x,{ref:(0,l.useCallback)(e=>{eA&&(0,w.Qv)()&&(0,_.a)(e)},[eA]),$renaming:z,style:eI?{maxWidth:eQ,minWidth:eQ}:void 0,...d&&{"aria-level":1,role:"heading"},children:[(0,a.jsx)(J.A,{ref:eL,$eager:A,$moving:"move"===eg[$],alt:E,src:G,...Y.H[F]}),(0,a.jsx)(y.A,{alt:E,icon:G,isDesktop:u,showShortcutIcon:!!(c||R.systemShortcut),subIcons:el,view:F}),z?(0,a.jsx)(er,{isDesktop:u,name:E,path:$,renameFile:(e,n)=>{t.renameFile(e,n),D("")},setRenaming:D,view:F}):(0,a.jsx)("figcaption",{children:ej&&E.length!==eH.length?E:eH}),eA&&eF&&(0,a.jsx)(en,{flip:ev})]}),eI&&e&&(0,a.jsx)(v,{columns:e,isDirectory:P,path:$,stats:R})]}),ev&&(0,a.jsx)(ez,{url:es,hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,isStartMenu:!0,loadIconsImmediately:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};var es=n(83664);let ec=(e,t,{blurEntry:n},r)=>{let[i,a]=(0,l.useState)(()=>Object.create(null)),[o,s]=(0,l.useState)(()=>Object.create(null)),{x:c,y:u}=i,{height:d,width:m}=o,p=(0,l.useRef)(0),f=(0,l.useRef)(o),g=({clientX:t,clientY:n})=>{if(p.current)return;let{scrollLeft:r=0,scrollTop:i=0}=e.current||{},{x:a=0,y:o=0}=e.current?.getBoundingClientRect()||{};s({height:n-o-(u||0)+i,width:t-a-(c||0)+r}),p.current=window.requestAnimationFrame(()=>{p.current=0})},{menu:b,setMenu:h}=(0,D.b)(),w="number"==typeof c&&"number"==typeof u,v="number"==typeof m&&"number"==typeof d&&w&&0===Object.keys(b).length,x={isSelecting:v,selectionEvents:{onMouseDown:({clientX:r,clientY:i,target:o})=>{if(o!==e.current)return;let{scrollLeft:l=0,scrollTop:c=0}=e.current,{x:u=0,y:d=0}=e.current.getBoundingClientRect();s(Object.create(null)),a({x:r-u+l,y:i-d+c}),b&&Object.keys(b).length>0&&h(Object.create(null)),t.length>0&&n()}},selectionStyling:V(v,d,m,c,u)};if(w){let t=()=>{s(Object.create(null)),a(Object.create(null))},n=e.current?.scrollHeight||0,i=e.current?.scrollWidth||0;x.selectionEvents.onMouseLeave=()=>{if(x.isSelecting){let a=t=>{if(g(t),r||!e.current)return;let a=Math.abs(Number(f.current.width))/100+1,o=Math.abs(Number(f.current.height))/100+1;e.current.scrollBy(e.current.scrollLeft+e.current.clientWidth>i?0:Math.round(t.movementX*a),e.current.scrollTop+e.current.clientHeight>n?0:Math.round(t.movementY*o))};window.addEventListener("mousemove",a),window.addEventListener("mouseup",()=>{t(),window.removeEventListener("mousemove",a)},M.w3)}},x.selectionEvents.onMouseMove=g,x.selectionEvents.onMouseUp=t}return v&&(x.selectionRect=Object.assign(Object.create(null),i,o),f.current=o),x},eu=(e,{focusEntry:t},r,i,a)=>{let[s,c]=(0,l.useState)(-1),{exists:u}=(0,h.f)(),{iconPositions:d,sortOrders:m,setIconPositions:p,setSortOrder:f}=(0,E.w)(),g=(0,l.useRef)(),b=(0,l.useRef)(!1),v=(0,l.useRef)({x:0,y:0}),x=(0,l.useRef)(Object.create(null)),y=({clientX:e,clientY:t})=>{x.current={...x.current,x:e,y:t}},k=r.current?.parentElement?.tagName==="MAIN",A=t=>n=>{(0,w.CH)(n),a&&e.length>0?((0,w.$Y)(t,r.current,d,m,x.current,e,p,u),r.current?.removeEventListener("dragover",y)):-1!==s&&f(t,t=>{let n=t.filter(t=>!e.includes(t));return n.splice(s,0,...e),n})},$=t=>({target:n})=>{if(!a&&n instanceof HTMLLIElement){let{children:r=[]}=n.parentElement||{};c(e.includes(t)?-1:[...r].indexOf(n))}},M=(n,i,l)=>s=>{if(l||"ontouchstart"in window){(0,w.CH)(s);return}t(i);let c=e.length<=1;if(s.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(c?[o.join(n,i)]:e.map(e=>o.join(n,e)))),c&&s.nativeEvent.dataTransfer?.setData("DownloadURL",`${w.hH(i)||"application/octet-stream"}:${i}:${window.location.href}${o.join(n,i)}`),!c&&g.current){if(!b.current){b.current=!0;let e=v.current.x||v.current.y;v.current={x:e?s.nativeEvent.clientX-v.current.x:s.nativeEvent.offsetX,y:e?s.nativeEvent.clientY-v.current.y:s.nativeEvent.offsetY+5}}s.nativeEvent.dataTransfer?.setDragImage(g.current,k?v.current.x:s.nativeEvent.offsetX,k?v.current.y:s.nativeEvent.offsetY)}Object.assign(s.dataTransfer,{effectAllowed:"move"}),a&&(x.current=e.length>1?{offsetX:s.nativeEvent.offsetX,offsetY:s.nativeEvent.offsetY}:Object.create(null),r.current?.addEventListener("dragover",y,{passive:!0}))},S=(0,l.useCallback)(async()=>{if(r.current){let e=[...r.current.querySelectorAll(".focus-within")];if(e.length>1){g.current?g.current.src="":g.current=new Image;let t=await (0,w.em)();if(!t)return;try{let{UNKNOWN_ICON:i}=await n.e(9588).then(n.bind(n,59588)),a=e.every(({style:e})=>e?.gridRowStart&&e?.gridColumnStart),o=await t?.toCanvas(r.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some(e=>e.contains(t)),imagePlaceholder:i,skipAutoScale:!0}),l=a?(0,w.Aq)(o):o;g.current.src=l.toDataURL(),v.current={x:o.width-l.width,y:o.height-l.height}}catch{}}}},[r]);return(0,l.useEffect)(()=>{!i&&e.length>1?S():0===e.length&&(b.current=!1)},[e,i,S]),(e,t,n)=>({draggable:!0,onDragEnd:A(e),onDragOver:$(t),onDragStart:M(e,t,n),style:k?d[(0,o.join)(e,t)]:void 0})};var ed=n(51780),em=n(16091);let ep=(e,t,n,r,{blurEntry:i,focusEntry:a},{newPath:s,pasteToFolder:c},u,d,m,p)=>{let{copyEntries:f,deletePath:g,moveEntries:b}=(0,h.f)(),{url:v}=(0,k.N)(),{openTransferDialog:x}=(0,ed.A)(),{foregroundId:y}=(0,E.w)();return(0,l.useEffect)(()=>{let e=e=>{e.clipboardData?.files?.length&&(!y&&t===M.Bn||y===m)&&(e.stopImmediatePropagation?.(),(0,em.L3)(e.clipboardData.files,t,s).then(x))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)},[y,m,s,x,t]),(0,l.useCallback)(l=>s=>{if("list"===p)return;let{ctrlKey:h,key:x,target:y,shiftKey:k}=s;if(!k){if(h)switch(x.toLowerCase()){case"a":if((0,w.CH)(s),y instanceof HTMLOListElement){let[e]=y.querySelectorAll("button");e?.focus(M.VD)}Object.keys(e).forEach(e=>a(e));break;case"c":(0,w.CH)(s),f(n.map(e=>(0,o.join)(t,e)));break;case"x":(0,w.CH)(s),b(n.map(e=>(0,o.join)(t,e)));break;case"v":(0,w.CH)(s),y instanceof HTMLOListElement&&c()}else switch(x){case"F2":n.length>0&&l&&((0,w.CH)(s),r(l));break;case"F5":m&&((0,w.CH)(s),u());break;case"Delete":n.length>0&&((0,w.CH)(s),n.forEach(async e=>{let n=(0,o.join)(t,e);await g(n)&&u(void 0,n)}),i());break;case"Backspace":m&&((0,w.CH)(s),v(m,(0,o.dirname)(t)));break;case"Enter":n.length>0&&y instanceof HTMLButtonElement&&((0,w.CH)(s),(0,w.k2)(y,2));break;default:if(x.startsWith("Arrow")){if((0,w.CH)(s),!(y instanceof HTMLElement))return;let e=y;if(!(y instanceof HTMLButtonElement)&&!(e=y.querySelector("button")))return;let{x:t,y:n,height:r,width:i}=e.getBoundingClientRect(),a="ArrowUp"===x||"ArrowDown"===x?document.elementFromPoint(t,n+r/2+("ArrowUp"===x?-r:r)):document.elementFromPoint(t+i/2+("ArrowLeft"===x?-i:i),n);if(a instanceof HTMLOListElement){let t=e.closest("li");if(t instanceof HTMLLIElement){let e=[...a.children],n=e.indexOf(t);("ArrowUp"===x||"ArrowDown"===x)&&(a=e["ArrowUp"===x?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}let o=a?.closest("button"),l=o;o instanceof HTMLButtonElement&&d.current?.contains(o)||(l=e),l?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}else if(/^[\da-z]$/i.test(x)){(0,w.CH)(s);let t=Object.keys(e),r=t.indexOf(n[n.length-1]),o=x.toLowerCase(),l=x.toUpperCase(),c=[...t.slice(r),...t.slice(0,r)].find(e=>!n.includes(e)&&(e.startsWith(o)||e.startsWith(l)));c&&(i(),a(c),d.current?.querySelector(`button[aria-label='${c}']`)?.scrollIntoView())}}}},[i,v,f,g,d,e,a,n,m,b,c,r,u,t,p])},ef=e=>{let[t,n]=(0,l.useState)([]),r=(0,l.useCallback)(e=>n(e?t=>t.filter(t=>t!==e):[]),[]),i=(0,l.useCallback)(e=>n(t=>t.includes(e)?t:[...t,e]),[]),a=(0,l.useRef)(!1),o=(0,l.useCallback)(t=>{let{relatedTarget:n,target:i}=t,o=e.current===n;o&&a.current?((0,w.CH)(t),i?.focus(M.VD)):(o||e.current?.contains(n))&&n instanceof HTMLElement||r()},[r,e]),s=(0,l.useCallback)(()=>{a.current=!0,window.requestAnimationFrame(()=>{a.current=!1})},[]),c=(0,l.useRef)({x:0,y:0});return{blurEntry:r,focusEntry:i,focusableEntry:e=>{let n=t.includes(e),a=1===t.length&&t[0]===e;return{className:(0,w.$z)({"focus-within":n,"only-focused":a}),onBlurCapture:o,onFocusCapture:s,onMouseDown:({ctrlKey:t,pageX:a,pageY:o})=>{c.current={x:a,y:o},t?n?r(e):i(e):n||(r(),i(e))},onMouseUp:({ctrlKey:t,pageX:n,pageY:o,button:l})=>{let{x:s,y:u}=c.current;t||a||0!==l||s!==n||u!==o||(r(),i(e)),c.current={x:0,y:0}}}},focusedEntries:t}};var eg=n(13296),eb=n(40423),eh=n(48287).Buffer;let ew=(e,t)=>([n,r])=>[e,n===e?!r:t],ev="video/webm",ex="video/mp4",ey=2,ek=(e,{addToFolder:t,newPath:a,pasteToFolder:s,sortByOrder:[[c,u],d]},m,p)=>{let{contextMenu:f}=(0,D.b)(),{exists:b,mapFs:v,pasteList:x={},readFile:y,rootFs:A,writeFile:S,updateFolder:j}=(0,h.f)(),{iconPositions:z,setForegroundId:R,setWallpaper:T,setIconPositions:F,sortOrders:H,updateRecentFiles:L,wallpaperImage:B}=(0,E.w)(),O=(0,l.useCallback)(e=>{if("VANTA"===e){let e=0==(ey-=1);T(`VANTA${e?" WIREFRAME":""}`),e&&(ey=2)}else ey=2,T(e)},[T]),{minimize:W,open:P}=(0,k.N)(),N=(0,l.useCallback)((t,n)=>{F(t=>Object.fromEntries(Object.entries(t).filter(([t])=>(0,o.dirname)(t)!==e))),d(""===t?([e])=>[e,n]:ew(t,n))},[F,d,e]),U=(0,l.useMemo)(()=>m&&"function"==typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(ev)||window?.MediaRecorder?.isTypeSupported(ex)),[m]),G=(0,l.useCallback)(async()=>{if(i&&r){let{active:e}=r;try{i.requestData(),r.getTracks().forEach(e=>e.stop())}catch{}if(i=void 0,r=void 0,e)return}let e=(0,w.gm)()||(0,w.nr)(),t={video:{frameRate:30},...!e&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}},[a]=(r=await navigator.mediaDevices.getDisplayMedia(t)).getVideoTracks(),{height:l,width:s}=a.getSettings(),c=MediaRecorder.isTypeSupported(ev),u=`Screen Capture ${(0,w.Im)()}.${c?"webm":"mp4"}`;i=new MediaRecorder(r,{bitsPerSecond:l&&s?l*s*30:void 0,mimeType:c?ev:ex});let d=(0,o.join)(M.Bn,u),m=Date.now(),p=!1;i.start(),i.addEventListener("dataavailable",async t=>{let{data:r}=t;if(r?.size){let t=await (0,w.Z6)(r);if(await S(d,p?eh.concat([await y(d),t]):t,p),!c||e||i&&"inactive"!==i.state)j(M.Bn,u);else{let{default:e}=await n.e(1707).then(n.t.bind(n,41707,23));e((0,w.vJ)(await y(d)),Date.now()-m,async e=>{await S(d,await (0,w.Z6)(e),!0),j(M.Bn,u)})}p=!0}})},[y,j,S]),I=(0,eb._)(),Q=(0,$.w)(),V=(0,l.useCallback)((e,t)=>{if(t&&m){let{clientX:n,clientY:r}="TouchEvent"in window&&t.nativeEvent instanceof TouchEvent?t.nativeEvent.touches[0]:t.nativeEvent;(0,w.$Y)(M.Bn,t.target,z,H,{x:n,y:r},e,F,b)}},[b,z,m,F,H]),q=(0,l.useCallback)(async(e,t,n)=>a(e,t,"rename",e=>V([e],n)),[a,V]);return(0,l.useMemo)(()=>f?.(n=>{let{offsetX:i,offsetY:a,target:l}=n.nativeEvent;if(!m&&!p&&i>l.clientWidth)return[{action:()=>{let e=0;if(a>l.clientHeight-17)e=l.scrollHeight;else if(a>17){let t=2*17;e=Math.round(l.scrollHeight*(a-t)/(l.clientHeight-t))}l.scrollTo({behavior:"instant",top:e})},label:"Scroll Here"},M.kG,{action:()=>{l.scrollTo({behavior:"instant",top:0})},label:"Top"},{action:()=>{l.scrollTo({behavior:"instant",top:l.scrollHeight})},label:"Bottom"},M.kG,{action:()=>{l.scrollBy({behavior:"instant",top:-l.clientHeight})},label:"Page Up"},{action:()=>{l.scrollBy({behavior:"instant",top:l.clientHeight})},label:"Page Down"},M.kG,{action:()=>{l.scrollBy({behavior:"instant",top:-44})},label:"Scroll Up"},{action:()=>{l.scrollBy({behavior:"instant",top:44})},label:"Scroll Down"}];let d=[{action:()=>t().then(e=>V(e,n)),label:"Add file(s)"},...w.AQ()?[{action:()=>v(e).then(t=>{V([t],n),j(e,t),P("FileExplorer",{url:o.join(e,t)})}).catch(()=>{}),label:"Map directory"}]:[]];document.querySelector("main .webamp-desktop canvas"),HTMLCanvasElement;let f=C.getMountUrl(e,A?.mntMap||{}),h=M.jj.has(w.uQ(e))||f&&!C.isMountedFolder(A?.mntMap[f]);return[{label:"Sort by",menu:[{action:()=>N("name",!0),label:"Name",toggle:"name"===c},{action:()=>N("size",!1),label:"Size",toggle:"size"===c},{action:()=>N("type",!0),label:"Item type",toggle:"type"===c},{action:()=>N("date",!1),label:"Date modified",toggle:"date"===c},M.kG,{action:()=>N("",!0),label:"Ascending",toggle:u},{action:()=>N("",!1),label:"Descending",toggle:!u}]},{action:()=>j(e),label:"Refresh"},...m?[M.kG,...U?[{action:G,label:r?.active?"Stop screen capture":"Capture screen"}]:[]]:[],...h?[]:[M.kG,...d,{action:()=>P("Terminal",{url:e}),label:"Open Terminal here"},M.kG,{action:()=>s(n),disabled:0===Object.keys(x).length,label:"Paste"},M.kG,{label:"New",menu:[{action:()=>q("New folder",void 0,n),icon:M.tz,label:"Folder"},M.kG,{action:()=>q("New Rich Text Document.whtml",eh.from(""),n),icon:g.QW(".whtml"),label:"Rich Text Document"},{action:()=>q("New Text Document.txt",eh.from(""),n),icon:g.QW(".txt"),label:"Text Document"}]},...m?[]:[M.kG,{action:()=>{let t=Object.keys(Q.current).find(t=>t===`Properties${M.QB}${e}`);t?(Q.current[t].minimized&&W(t),R(t)):P("Properties",{url:e})},label:"Properties"}]],...m?[M.kG,{action:async()=>{if(!await b(M.K$)){let e=await fetch(document.location.href),t=eh.from(await e.arrayBuffer());await S(M.K$,t),j(o.dirname(M.K$),o.basename(M.K$))}P("MonacoEditor",{url:M.K$}),L(M.K$,"MonacoEditor")},label:"View page source"},{action:()=>P("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}),[t,U,G,f,b,I,u,m,p,v,W,q,P,x,s,Q,A?.mntMap,R,O,c,V,j,L,N,e,B,S])},eA=m.default.span`
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
`;var eE=n(16093);let e$=(0,l.memo)(({columns:e,directory:t,files:n,setColumns:r})=>{let{sizes:i}=(0,m.useTheme)(),o=(0,l.useRef)(""),s=(0,l.useRef)(0),{setSortOrder:c,sortOrders:d}=(0,E.w)(),[,p="name",f]=d[t]??[];return(0,a.jsx)(eA,{children:(0,a.jsx)("ol",{children:u.map(l=>(0,a.jsxs)("li",{onPointerDownCapture:e=>{0===e.button&&(o.current="resize"===e.target.className?l:"",s.current=e.clientX)},onPointerMoveCapture:e=>{if(o.current){let t=o.current;r(n=>{if(!n?.[t])return n;let r={...n},a=r[t].width+e.clientX-s.current;return a<i.fileManager.columnMinWidth||Math.abs(s.current-e.clientX)>15||(r[t].width=a,s.current=e.clientX),r})}},onPointerUpCapture:e=>{0===e.button&&(o.current?(o.current="",s.current=0):c(t,Object.keys((0,em.w9)(t,n,l,!f)),l,!f))},style:{width:`${e[l].width}px`},children:[p===l&&(0,a.jsx)(eE.Down,{flip:f}),(0,a.jsx)("div",{className:"name",children:e[l].name}),(0,a.jsx)("span",{className:"resize"})]},e[l].name))})})}),eM=c()(()=>n.e(39).then(n.bind(n,10039)),{loadableGenerated:{webpack:()=>[10039]}}),eS=c()(()=>n.e(9634).then(n.bind(n,49634)),{loadableGenerated:{webpack:()=>[49634]}}),ej=c()(()=>n.e(1583).then(n.bind(n,51583)),{loadableGenerated:{webpack:()=>[51583]}}),ez=(0,l.memo)(({allowMovingDraggableEntries:e,hideFolders:t,hideLoading:r,hideScrolling:i,hideShortcutIcons:s,id:c,isDesktop:u,isStartMenu:m,loadIconsImmediately:p,readOnly:f,showStatusBar:g,skipFsWatcher:b,skipSorting:v,url:x})=>{let{views:y,setViews:k}=(0,E.w)(),A=(0,l.useMemo)(()=>u?"icon":m?"list":y[x]||"icon",[u,m,x,y]),$=(0,l.useMemo)(()=>"details"===A,[A]),[S,j]=(0,l.useState)(()=>$?d:void 0),[z,C]=(0,l.useState)(x),[D,R]=(0,l.useState)(""),[T,F]=(0,l.useState)(!1),H=(0,l.useRef)(null),{focusedEntries:L,focusableEntry:B,...O}=ef(H),{fileActions:W,files:P,folderActions:N,isLoading:U,updateFiles:G}=(0,eg.A)(x,R,O,{hideFolders:t,hideLoading:r,skipFsWatcher:b,skipSorting:v}),{lstat:I,mountFs:Q,rootFs:V}=(0,h.f)(),{StyledFileEntry:q,StyledFileManager:X}=Y.o[A],{isSelecting:Z,selectionRect:J,selectionStyling:_,selectionEvents:ee}=ec(H,L,O,u),et=eu(L,O,H,Z,e),en=(0,K.A)({callback:N.newPath,directory:x,updatePositions:e}),er=ek(x,N,u,m),ei=!r&&U||x!==z,ea=ep(P,x,L,R,O,N,G,H,c,A),[eo,ed]=(0,l.useState)("prompt"),em=(0,l.useRef)(!1),eb=(0,l.useMemo)(()=>""===D?ea():void 0,[ea,D]),eh=(0,l.useMemo)(()=>Object.keys(P),[P]),ew=!u&&!m&&!ei&&"list"!==A&&0===eh.length;return(0,l.useEffect)(()=>{em.current||"granted"===eo||V?.mntMap[z]?.getName()!=="FileSystemAccess"||(em.current=!0,Promise.resolve().then(n.bind(n,56431)).then(({requestPermission:e})=>e(z).then(e=>{let t="granted"===e;(!e||t)&&(ed("granted"),t&&G())}).catch(e=>{e?.message==="Permission already granted"&&ed("granted")}).finally(()=>{em.current=!1})))},[z,eo,V?.mntMap,G]),(0,l.useEffect)(()=>{!T&&M.jj.has((0,w.uQ)(x))&&(async()=>{(await I(x)).isDirectory()||F(e=>(e||Q(x).then(()=>setTimeout(G,100)).catch(()=>{}),!0))})()},[I,Q,T,G,x]),(0,l.useEffect)(()=>{x!==z&&(N.resetFiles(),C(x),ed("denied"))},[z,N,x]),(0,l.useEffect)(()=>{ei||u||m||H.current?.focus(M.VD)},[u,m,ei]),(0,l.useEffect)(()=>{j($?d:void 0)},[$]),(0,a.jsxs)(a.Fragment,{children:[ei?(0,a.jsx)(ej,{}):(0,a.jsxs)(a.Fragment,{children:[ew&&(0,a.jsx)(eS,{}),(0,a.jsxs)(X,{ref:H,$isEmptyFolder:ew,$scrollable:!i,onKeyDown:eb,...f?{onContextMenu:w.CH}:{$selecting:Z,...en,...er,...ee},...M.W8,children:[$&&S&&(0,a.jsx)(e$,{columns:S,directory:x,files:P,setColumns:j}),Z&&(0,a.jsx)(es.A,{style:_}),eh.map(e=>(0,a.jsx)(q,{$desktop:u,$selecting:Z,$visible:!U,...!f&&et(x,e,D===e),...""===D&&{onKeyDown:ea(e)},...B(e),children:(0,a.jsx)(el,{columns:S,fileActions:W,fileManagerId:c,fileManagerRef:H,focusFunctions:O,focusedEntries:L,hasNewFolderIcon:m,hideShortcutIcon:s,isDesktop:u,isHeading:u&&P[e].systemShortcut,isLoadingFileManager:U,loadIconImmediately:p,name:(0,o.basename)(e,M.b3),path:(0,o.join)(x,e),readOnly:f,renaming:D===e,selectionRect:J,setRenaming:R,stats:P[e],view:A})},e))]})]}),g&&(0,a.jsx)(eM,{count:ei?0:eh.length,directory:x,fileDrop:en,selected:L,setView:e=>{k(t=>({...t,[x]:e})),j("details"===e?d:void 0)},view:A})]})})},8218:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(16286),i=n(96540),a=n(51780),o=n(16091),l=n(13296),s=n(41017),c=n(62104),u=n(1364),d=n(48060),m=n(37e3),p=n(96119);let f=({callback:e,directory:t=d.Bn,id:n,onDragLeave:f,onDragOver:g,updatePositions:b})=>{let{url:h}=(0,c.N)(),w=(0,p.w)(),{iconPositions:v,sortOrders:x,setIconPositions:y}=(0,u.w)(),{exists:k,mkdirRecursive:A,updateFolder:E,writeFile:$}=(0,s.f)(),M=(0,i.useCallback)(async(e,t,i)=>{if(n){if(t){let a=(0,r.join)(d.Bn,e);if(await A(d.Bn),await $(a,t,!0))return i===l.z.UPDATE_URL&&h(n,a),E(d.Bn,e),(0,r.basename)(a)}else i===l.z.UPDATE_URL&&h(n,e)}return""},[n,A,E,h,$]),{openTransferDialog:S}=(0,a.A)();return{onDragLeave:f,onDragOver:e=>{g?.(e),(0,m.CH)(e)},onDrop:i=>{if(d.jj.has((0,m.uQ)(t)))return;if(b&&i.target instanceof HTMLElement){let{files:e,text:n}=(0,o.bn)(i);if(0===e.length&&""===n)return;(async()=>{let a={x:i.clientX,y:i.clientY},o=[];if(n){try{o=JSON.parse(n)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;o=o.map(e=>(0,r.basename)(e))}else e instanceof FileList?o=[...e].map(e=>e.name):o=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);o=await Promise.all(o.map(async e=>{let n=`${t}/${e}`;if(!v[n]||!await k(n))return e;let i=0;do i+=1,n=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${i})${(0,r.extname)(e)}`;while(v[n]&&await k(n));return(0,r.basename)(n)})),(0,m.$Y)(t,i.target,v,x,a,o,y,k)})()}let a="string"==typeof n;a&&!b&&t===d.Bn&&w.current[n]?.componentWindow?.focus(d.VD),(0,o.nX)(i,e||M,t,S,a)}}}},44260:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(33540),i=n(83664),a=n(43680);let o=r.default.ol`
  ${({$scrollable:e})=>e?(0,a.A)():void 0};

  contain: strict;
  overflow: ${({$isEmptyFolder:e,$scrollable:t})=>!e&&t?void 0:"hidden"};
  pointer-events: ${({$selecting:e})=>e?"auto":void 0};
  scrollbar-gutter: auto;

  picture:not(:first-of-type) {
    position: absolute;
  }

  ${i.z} {
    top: 0;
  }
`},6311:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(33540),i=n(43680),a=n(48060);let o=r.default.ol`
  ${({$scrollable:e})=>e?(0,i.A)():void 0};
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
    height: calc(100% - ${a.D5}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`},54357:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(33540);let i=r.default.li`
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
`},2566:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(33540);let i=r.default.ol`
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`},67963:(e,t,n)=>{n.d(t,{H:()=>d,o:()=>u});var r=n(33540);let i=r.default.li`
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
`;var a=n(44260);let o=r.default.li`
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
`;var l=n(6311),s=n(54357),c=n(2566);let u={details:{StyledFileEntry:i,StyledFileManager:a.A},icon:{StyledFileEntry:o,StyledFileManager:l.A},list:{StyledFileEntry:s.A,StyledFileManager:c.A}},d={details:{imgSize:16},detailsSub:{displaySize:8,imgSize:16},icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}}},10581:(e,t,n)=>{n.d(t,{K1:()=>r,Qq:()=>l,aE:()=>o,aV:()=>i,bK:()=>a,tT:()=>s});let r="Λ ＲＣＡＮＧＥＬ. \uD835\uDC0E\uD835\uDC12",i="v1.3",a=`${r} (${i})`,o="balanced",l=()=>new Worker(n.tu(new URL(n.p+n.u(61),n.b)),{name:"AI"}),s="ai-chat-window"},67488:(e,t,n)=>{n.d(t,{BN:()=>a,Q2:()=>o,r5:()=>i});var r=n(48060);let i="Start",a="Type here to search",o=({relatedTarget:e},t,n,i,a,o=!1)=>{if(!(e&&t?.contains(e))){let l=t?.nextSibling,s=e===l,c=e?.parentElement===l,u=e?.title===a;e&&(o&&s||!s&&(!c||!u))?n(!1):(i||t)?.focus(r.VD)}}},6191:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(96540),i=n(59091),a=n(62104),o=n(1364),l=n(96119),s=n(48060);let c=e=>{let t=(0,i.A)(e),{setForegroundId:n,removeFromStack:c}=(0,o.w)(),{closeWithTransition:u,maximize:d,minimize:m}=(0,a.N)(),p=(0,l.w)(),f=(0,r.useCallback)(r=>{m(e),r||n(t)},[e,m,t,n]),g=(0,r.useCallback)(()=>{let t=()=>{d(e),n(e),p.current[e]?.componentWindow?.focus(s.VD)},[r]=p.current[e]?.componentWindow?.getAnimations()||[];r?.finished?r.finished.then(t):t()},[e,d,p,n]);return{onClose:(0,r.useCallback)(()=>{c(e),u(e),n(t)},[u,e,t,c,n]),onMaximize:g,onMinimize:f}}},59091:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(62104),i=n(1364);let a=e=>{let{stackOrder:t=[]}=(0,i.w)(),{processes:n}=(0,r.N)();return t.find(t=>t!==e&&!n?.[t]?.minimized)||""}},75892:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540),i=n(48060);let a=(e,t=!1)=>{let n=(0,r.useRef)(),a=(0,r.useRef)(0);return{onClick:(0,r.useCallback)(r=>{let o=()=>{r.stopPropagation(),e(r)},l=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},s=()=>{a.current>=12&&l(),void 0===n.current?(r.target.removeEventListener("pointermove",s),a.current=0):a.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(l,i.UW.DOUBLE_CLICK),r.target.addEventListener("pointermove",s,{passive:!0})):(l(),o())},[e,t])}}},59554:(e,t,n)=>{n.d(t,{A:()=>v,t:()=>m});var r=n(96540),i=n(67488),a=n(62104),o=n(1364),l=n(17927),s=n(96119),c=n(48060),u=n(37e3),d=n(6191);let m=e=>document.querySelector(`main > nav > div[title='${e}']`),p=!1,f=!1,g=!1,b=e=>((0,u.CH)(e),!!g||(g=!0,setTimeout(()=>{g=!1},c.Sq),!1)),h=new Set(["ARROWDOWN","ARROWUP","D","E","R","S","X"]),w=e=>{let{altKey:t,ctrlKey:n,shiftKey:r,metaKey:i}=e;window.globalKeyStates={altKey:t,ctrlKey:n,metaKey:i,shiftKey:r}},v=()=>{let{closeWithTransition:e,minimize:t,open:n}=(0,a.N)(),c=(0,s.w)(),{foregroundId:g,stackOrder:v}=(0,o.w)(),{fullscreenElement:x,toggleFullscreen:y}=(0,l.T)(),{onMaximize:k,onMinimize:A}=(0,d.A)(g),E=(0,r.useRef)({}),$=(0,r.useRef)({E:()=>n("FileExplorer"),ESCAPE:()=>m(i.r5)?.click(),F10:()=>n("Terminal"),F12:()=>n("DevTools"),F5:()=>window.location.reload(),R:()=>n("Run"),S:()=>m(i.BN)?.click(),X:()=>m(i.r5)?.dispatchEvent(new MouseEvent("contextmenu",{clientX:1,clientY:u.Bv()-1}))});(0,r.useEffect)(()=>{let e=e=>{w(e);let{altKey:t,ctrlKey:n,key:r,shiftKey:i}=e,a=r?.toUpperCase();a&&(i?(n||!h.has(a))&&$.current?.[a]&&!b(e)&&$.current[a]():"F11"===a?((0,u.CH)(e),y()):document.activeElement===document.body&&a.startsWith("ARROW")?document.body.querySelector("main ol li button")?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})):n&&t&&E.current?.[a]?E.current?.[a]?.():x===document.documentElement&&("META"===a?p=!0:t&&E.current?.[a]?((0,u.CH)(e),E.current?.[a]?.()):"ESCAPE"===a?document.pointerLockElement?document.exitPointerLock():y():p&&h.has(a)&&$.current?.[a]&&!b(e)&&(f=!0,$.current[a]())))},t=e=>{w(e),p&&x===document.documentElement&&e.key?.toUpperCase()==="META"&&(p=!1,f?f=!1:m(i.r5)?.click())};return document.addEventListener("keydown",e,{capture:!0}),document.addEventListener("keyup",t,{capture:!0,passive:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("keyup",t,{capture:!0})}},[x,y]),(0,r.useEffect)(()=>{E.current={...E.current,F4:()=>e(g)}},[e,g]),(0,r.useEffect)(()=>{$.current={...$.current,ARROWDOWN:()=>{let{hideMinimizeButton:e=!1,maximized:t,minimized:n}=c.current[g]||{};t?k():n||e||A(!0)},ARROWUP:()=>{let{allowResizing:e=!0,hideMaximizeButton:t=!1,maximized:n,minimized:r}=c.current[g]||{};r?A(!0):n||!e||t||k()},D:()=>(0,u.UH)(c.current,v,t)}},[g,t,k,A,c,v])}},17261:(e,t,n)=>{n.d(t,{K:()=>a});var r=n(96540),i=n(48060);let a=(e,t,n=!1)=>{let a=(0,r.useRef)(!1),[o,l]=(0,r.useState)(n);return(0,r.useEffect)(()=>{n||!e.current||a.current||(a.current=!0,new IntersectionObserver(e=>e.forEach(({isIntersecting:e})=>l(e)),{root:"object"==typeof t&&t.current||"string"==typeof t&&e.current.closest(t)||e.current.parentElement,...i.A8}).observe(e.current))},[n,e,t]),o}},40423:(e,t,n)=>{n.d(t,{_:()=>o});var r=n(96540);let i=!1,a=async()=>{let e;if("undefined"==typeof navigator||!("gpu"in navigator))return!1;try{e=await navigator.gpu.requestAdapter()}catch{return!1}if(!e)return!1;let t=0x40000000>(e.limits.maxBufferSize??0)||0x40000000>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0);return t||(i=!0),!t},o=()=>{let[e,t]=(0,r.useState)(i),n=(0,r.useCallback)(async()=>{await a()&&t(!0)},[]);return(0,r.useEffect)(()=>{e||requestAnimationFrame(n)},[n,e]),e}},15289:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(96540);let i=!1,a=async()=>{if(!("ai"in window)||!("languageModel"in window.ai)||"object"!=typeof window.ai.languageModel||!("capabilities"in window.ai.languageModel)||"function"!=typeof window.ai.languageModel.capabilities)return!1;try{return i="readily"===(await window.ai.languageModel.capabilities()).available}catch{return!1}},o=()=>{let[e,t]=(0,r.useState)(i),n=(0,r.useCallback)(async()=>{await a()&&t(!0)},[]);return(0,r.useEffect)(()=>{e||requestAnimationFrame(n)},[n,e]),e}},43680:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(33540),i=n(48060);let a={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},o=(e=i.Gm,t=0,n=0,o="dark")=>(0,r.css)`
  overflow: auto;
  scrollbar-gutter: stable;

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: ${a[o].thumb} ${a[o].track};
  }

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${a[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${a[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${a[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${a[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${a[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${a[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${a[o].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${a[o].buttonHover};
    }

    &:active {
      background-color: ${a[o].active};
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
    background-blend-mode: ${a[o].blendMode};
  }
`},89612:(e,t,n)=>{n.d(t,{a:()=>a});let r={capture:!0,passive:!0},i={capture:!1,passive:!0},a=(e,t=!1,n=1,a=!1)=>{e&&requestAnimationFrame(()=>{let o=()=>{t||(e.style.background=""),e.style.borderImage=""};if(t){let t=({clientX:i,clientY:l})=>{if(e.isConnected){let{x:t,y:r}=e.getBoundingClientRect(),o=a&&document.elementFromPoint(i,l)===e;e.style.borderImage=`radial-gradient(75px at ${i-t}px ${l-r}px, rgba(${o?"255, 255, 255, 80%":"200, 200, 200, 60%"}), transparent) 1 / ${n}px / 0 stretch`}else document.removeEventListener("mousemove",t,r),document.removeEventListener("mouseleave",o,r)};document.addEventListener("mousemove",t,r),document.addEventListener("mouseleave",o,r)}else e.addEventListener("mousemove",({offsetX:t,offsetY:r})=>{e.style.background=`radial-gradient(circle at ${t}px ${r}px, rgba(200, 200, 200, 30%), transparent)`,e.style.borderImage=`radial-gradient(75px at ${t}px ${r}px, rgba(200, 200, 200, 60%), transparent) 1 / ${n}px / 0 stretch`},i),e.addEventListener("mouseleave",o,i)})}}}]);