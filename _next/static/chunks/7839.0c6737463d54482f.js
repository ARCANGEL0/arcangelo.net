"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1451,7839,9343],{61149:(e,t,r)=>{r.d(t,{f:()=>x,A:()=>b});var o=r(74848),i=r(16286),a=r(96540),n=r(16093),s=r(33540);let l=s.default.div`
  background-position: 2px 5px;
  background-repeat: no-repeat;
  background-size: 16px;
  background: rgba(70,70,70,0.5);
  border-radius: 10px;
  border: 1px solid rgb(83, 83, 83);
  display: flex;
  height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight}px;
  margin: 6px 12px 5px 5px;
  overflow: hidden;
  padding: 0 22px 2px 11px;
  position: relative;
  width: 100%;

  input {
    background-color:transparent;
    border-right: 1px solid rgb(21, 21, 21);
    color: #fff;
    font-family: ${({theme:e})=>e.formats.systemFont};
    font-size: 12px;
    font-weight: 400;
    height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight-2}px;
    padding-bottom: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 2px);

    &:focus,
    &.inputing {
      height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight}px;
    }
  }

  img {
    left: 2px;
    position: absolute;
    top: 1px;
  }

  .action {
    background-color: transparent;
    display: flex;
    height: ${({theme:e})=>e.sizes.fileExplorer.navInputHeight-2}px;
    margin: 0;
    place-content: center;
    place-items: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;

    &:hover {
      background-color: rgb(27, 41, 49);
      border: 1px solid rgb(34, 114, 153);
    }

    &:active {
      background-color: rgb(28, 57, 71);
      border: 1px solid rgb(38, 160, 218);
    }

    svg {
      color: rgb(128, 128, 128);
      stroke: rgb(128, 128, 128);

      &.refresh {
        position: relative;
        stroke-width: 3;
        top: 0px;
        width: 150%;
        left: 1px

      }

      &.go-to {
        height: 12px;
        stroke-width: 2;
        width: 12px;
      }
    }
  }
`;var c=r(78744);let p=e=>{let{contextMenu:t}=(0,c.b)();return(0,a.useMemo)(()=>t?.(()=>[{action:()=>navigator.clipboard?.writeText(e),label:"Copy address"}]),[e,t])};var d=r(41017),h=r(62104),u=r(87952),m=r(48060),f=r(37e3),g=r(91745),w=r(1364);let x={"aria-label":"Address",enterKeyHint:"go",inputMode:"url",name:"address",...m.m8},b=(0,a.forwardRef)(({id:e},t)=>{let r=(0,a.useRef)(null),{open:s,url:c,processes:{[e]:{icon:b,url:y=""}}}=(0,h.N)(),v=(0,a.useMemo)(()=>(0,i.basename)(y)||m.l6,[y]),[k,j]=(0,a.useState)(v),{exists:$,stat:C,updateFolder:D}=(0,d.f)(),{updateRecentFiles:A}=(0,w.w)(),S=(0,a.useMemo)(()=>k!==v&&k!==y&&document.activeElement===t.current,[k,t,v,y]),E=(0,a.useCallback)(async()=>{if(k&&await $(k)){if((await C(k)).isDirectory())c(e,k);else{let e=(0,g.YD)((0,f.uQ)(k));s(e||"OpenWith",{url:k}),e&&A(k,e)}}t.current?.blur()},[k,t,c,$,e,s,C,A]);return(0,a.useEffect)(()=>{t.current&&(k===y?t.current.select():k===v?window.getSelection()?.removeAllRanges():document.activeElement!==t.current&&j(v))},[k,t,v,y]),(0,o.jsxs)(l,{children:[(0,o.jsx)("input",{ref:t,className:S?"inputing":"",onBlurCapture:({relatedTarget:e})=>{r.current!==e&&j(y)},onChange:({target:e})=>j(e.value),onFocusCapture:()=>j(y),onKeyDown:({key:e})=>{"Enter"===e&&E()},value:y,...x,...p(y)}),(0,o.jsx)(u.A,{ref:r,className:"action",onClick:()=>{j(y),S?E():D(y)},onFocusCapture:()=>setTimeout(()=>j(y),m.UW.DOUBLE_CLICK/2),...(0,f.Pf)(S?`Go to "${k}"`:`Refresh "${v}" (F5)`),children:S?(0,o.jsx)(n.GoTo,{}):(0,o.jsx)(n.Refresh,{})})]})})},16093:(e,t,r)=>{r.r(t),r.d(t,{Back:()=>a,Down:()=>c,Forward:()=>n,GoTo:()=>l,Refresh:()=>s,Search:()=>d,Up:()=>p});var o=r(74848),i=r(96540);let a=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"-8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M15 18l-6-6 6-6"})})),n=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"8 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M9 18l6-6-6-6"})})),s=(0,i.memo)(()=>(0,o.jsx)("svg",{className:"refresh",viewBox:"-10 -13 52 52",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),l=(0,i.memo)(()=>(0,o.jsx)("svg",{className:"go-to",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M31.906 16 17.203 30.703l-1.406-1.406L28.094 17H0v-2h28.094L15.797 2.703l1.406-1.406z"})})),c=(0,i.memo)(({flip:e})=>{let t=(0,i.useMemo)(()=>e?{transform:"scaleY(-1)",transition:"all 0.2s"}:void 0,[e]);return(0,o.jsx)("svg",{style:t,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M18 15l-6-6-6 6"})})}),p=(0,i.memo)(()=>{let e=(0,i.useMemo)(()=>({marginTop:"-1px"}),[]);return(0,o.jsxs)("svg",{style:e,viewBox:"0 -7 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"}),(0,o.jsx)("path",{d:"M9 22V12h6v10M2 10.6L12 2l10 8.6"})]})}),d=(0,i.memo)(()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"})}))},4769:(e,t,r)=>{r.d(t,{D:()=>i,p:()=>o});let o={0:{name:"Black",rgb:[12,12,12]},1:{name:"Blue",rgb:[0,55,218]},2:{name:"Green",rgb:[19,161,14]},3:{name:"Aqua",rgb:[58,150,221]},4:{name:"Red",rgb:[197,15,31]},5:{name:"Purple",rgb:[136,23,152]},6:{name:"Yellow",rgb:[193,156,0]},7:{name:"White",rgb:[204,204,204]},8:{name:"Gray",rgb:[118,118,118]},9:{name:"Light Blue",rgb:[59,120,255]},A:{name:"Light Green",rgb:[22,198,12]},B:{name:"Light Aqua",rgb:[97,214,214]},C:{name:"Light Red",rgb:[231,72,86]},D:{name:"Light Purple",rgb:[180,0,158]},E:{name:"Light Yellow",rgb:[249,241,165]},F:{name:"Bright White",rgb:[242,242,242]}},i=(e,t,r,o=!1)=>`\u001B[${o?"48":"38"};2;${e};${t};${r}m`},47839:(e,t,r)=>{r.d(t,{BZ:()=>x,DV:()=>m,ID:()=>y,Lw:()=>w,Pi:()=>p,RM:()=>f,_2:()=>b,e4:()=>g,k8:()=>u,yj:()=>c,z2:()=>d});var o=r(16286),i=r(4769),a=r(71147),n=r(12222),s=r(25573),l=r(48060);let c=(e,t,r)=>{Object.entries(t).forEach(([t,r])=>{e(`${t.padEnd(14)} ${r}`)}),r&&(e("\r\nAliases:\r\n"),Object.entries(r).forEach(([r,o])=>{o.forEach(o=>{e(`${o.padEnd(14)} ${t[r]}`)})}))},p={cd:"Changes the current directory.",clear:"Clears the screen.",color:"Specifies color attribute of console output.",copy:"Copies a file to another location.",date:"Displays the date.",del:"Deletes a file.",dir:"Displays list of entries in current directory.",echo:"Displays messages that are passed to it.",exit:"Quits the command interpreter.",ffmpeg:"Convert audio or video file to another format.",file:"Detects the MIME type of the file.",find:"Searches for a text string in a file or files.",git:"Read from git repositories.",help:"Provides Help information for commands.",history:"Displays command history list.",imagemagick:"Convert an image file to another format.",ipconfig:"Displays current IP.",license:"Displays license.",md:"Creates a directory.",mediainfo:"Displays relevant technical data about media files.",mount:"Mounts a local file system directory.",move:"Moves file or directory.",neofetch:"Displays system information.",nslookup:"Displays DNS information about a domain.",pwd:"Prints the working directory.",python:"Run code through Python interpreter.",qjs:"Run code through QuickJS interpreter.",rd:"Removes a directory.",ren:"Renames a file or directory.",rm:"Removes a file or directory.",pet:"Spawn a new pet.",shutdown:"Allows proper local shutdown of machine.",taskkill:"Kill or stop a running process or application.",tasklist:"Displays all currently running processes.",time:"Displays the system time.",title:"Sets the window title for the command interpreter.",touch:"Create empty file.",type:"Displays the contents of a file.",uptime:"Display the current uptime of the local system.",ver:"Displays the system version.",wapm:"Run universal Wasm binaries.",weather:"Weather forecast service.",whoami:"Displays user information.",wsl:"Launches the default Linux shell.",xlsx:"Convert a spreadsheet file to another format.",nmap:"Network exploration tool and security/port scanner.",xsstrike:"XSS vulnerability detection tool.",sqlmap:"Automated SQL injection and database takeover tool.",hashcat:" A powerful password recovery tool that efficiently cracks hashes. To use a custom wordlist, specify it with the format: --wordlist='Wordlist/<NAME>'.",wpscan:"WordPress vulnerability scanner.",gobuster:"Directory and file brute-forcing tool.",hydra:" A versatile network logon cracker that supports numerous protocols. To use a custom wordlist, specify it with the format: -w Wordlist/<NAME>.",john:"John the Ripper: A powerful password cracking software tool. To use a custom wordlist, specify it with the format: --wordlist=Wordlist/<NAME>.",phoneinfoga:"Phone number reconnaissance tool.",shodan:"A search engine for Internet-connected devices, enabling users to discover and analyze various devices and services exposed online.",ssh:"Secure shell connection"},d={cd:["chdir"],clear:["cls"],copy:["cp"],del:["erase"],dir:["ls"],exit:["quit"],find:["search"],git:["isogit"],ipconfig:["ifconfig","whatsmyip"],md:["mkdir"],move:["mv"],neofetch:["systeminfo"],python:["py","python3"],qjs:["node","quickjs"],rd:["rmdir"],ren:["rename"],pet:["esheep"],shutdown:["logout","restart"],taskkill:["kill"],tasklist:["ps"],type:["cat"],ver:["version"],wapm:["wasmer","wax"],weather:["wttr"],wsl:["linux"],nmap:["nmap"],xsstrike:["xsstrike"],sqlmap:["sqlmap"],shodan:["shodan"],hashcat:["hashcat"],wpscan:["wpscan"],gobuster:["gobuster"],hydra:["hydra"],john:["john"],phoneinfoga:["phoneinfoga"],ssh:["ssh"]},h=new Set(["cat","cd","chdir","copy","cp","del","dir","erase","ffmpeg","file","imagemagick","ls","nmap","xsstrike","sqlmap","hashcat","shodan","wpscan","gobuster","hydra","john","phoneinfoga","md","mediainfo","mkdir","move","ssh","mv","node","py","python","python3","qjs","quickjs","rd","ren","rename","rm","rmdir","touch","type","wapm","wasmer","wax","xlsx"]),u=e=>`zsh: ${e}: command not found`,m=(e,t)=>{let{_autocompleteHandlers:r}=t;r.forEach(({fn:e})=>t.removeAutocompleteHandler(e)),t.addAutocompleteHandler((t,[r])=>{if(0===t)return[...Object.keys(p),...e];if(1===t){let t=r.toLowerCase();if("git"===t)return Object.keys(a.P);if(h.has(t)||Object.entries(s.A).filter(([,{dialogProcess:e}])=>!e).map(([e])=>e.toLowerCase()).includes(t)||Object.keys(n.resourceAliasMap).includes(t))return e}return[]})},f=(e,t="")=>{let r=!1,o="",i=e=>{e.push(o),o=""},a=[...e].reduce((e,a,n)=>(t&&n>t.length?o+=a:" "===a&&!r&&o?i(e):'"'===a?(r=!r)||i(e):o+=a,e),[]);return o?[...a,o]:a},g=(e,t,r,o,i="=")=>{if(!o){let t=e.map(([e,t])=>e.padEnd(t," ")).join(" "),o=e.map(([,e])=>i.repeat(e)).join(" ");r(t),r(o)}let a=t.map(t=>t.map((r,o)=>{let[,i,a,n]=e[o],s=o===t.length-1?r:r.slice(0,i);return n&&(s=n(s)),a?s.padStart(i," "):s.padEnd(i," ")}).join(" "));a.length>0&&a.forEach(e=>r(e))},w=(e=!1)=>{if(window.performance){let[{duration:t}]=window.performance.getEntriesByType("navigation"),r=window.performance.timeOrigin+t,o=Math.ceil(Date.now()-r),i=Math.floor(o/l.$0),a=new Date(o),n=a.getUTCHours(),s=a.getUTCMinutes(),c=a.getUTCSeconds();return[...i?[`${i} day${1===i?"":"s"}`]:[],...n?[`${n} hour${1===n?"":"s"}`]:[],...s?[`${s} ${e?"min":"minute"}${1===s?"":"s"}`]:[],`${c} ${e?"sec":"second"}${1===c?"":"s"}`].join(", ")}return"Unknown"},x=(e,t)=>`${(0,i.D)(...i.p[e].rgb,!0)}${(0,i.D)(...i.p[e].rgb)}|||${t?.join("")||`${(0,i.D)(...i.p[0].rgb,!0)}${(0,i.D)(...i.p[7].rgb)}`}\u001B[0m`,b=e=>{try{navigator.clipboard?.readText?.().then(t=>e.handleCursorInsert(t))}catch{}},y=e=>{let t=e.toLowerCase().trim();return t.startsWith(".")?t.slice(1):t.includes(".")?(0,o.extname)(t).slice(1):t}},71147:(e,t,r)=>{r.d(t,{A:()=>s,P:()=>n});var o=r(16286),i=r(47839);let a=new Set(["checkout","clone","fetch","init","merge","pull"]),n={add:"Add a file to the git index (aka staging area)",branch:"Create a branch",checkout:"Checkout a branch",clone:"Clone a repository",commit:"Create a new commit",fetch:"Fetch commits from a remote repository",init:"Initialize a new repository",log:"Get commit descriptions from the git history",merge:"Merge two branches",pull:"Fetch and merge commits from a remote repository",push:"Push a branch or tag",status:"Tell whether a file has been changed",tag:"Create a lightweight tag",version:"Return the version number of isomorphic-git"},s=async([e,...t],s,l,c,p)=>{let d=await Promise.all([r.e(1334),r.e(3617)]).then(r.bind(r,65784));if(e in d){let i=await r.e(6464).then(r.bind(r,6464)),{default:n}=await r.e(9031).then(r.t.bind(r,89031,23)),{username:h,password:u,...m}=n(t),f=[],g={...m,corsProxy:"https://cors.isomorphic-git.org",dir:s,fs:c,http:i,onAuth:()=>({password:u,username:h}),onMessage:(e="")=>l(`remote: ${e.trim()}`),onProgress:({phase:e})=>{f[f.length-1]!==e&&(l(e),f.push(e))}};if("clone"===e){if(!g.url&&m._&&Array.isArray(m._)&&1===m._.length){let[e]=m._;g.url=e}let e=g.url?.split("/").pop()?.replace(/\.git$/,"")||"";e&&(l(`Cloning into '${e}'...`),g.dir=(0,o.join)(s,e))}try{let t=await d[e]?.(g);"string"==typeof t&&l(t)}catch(e){l(e.message)}a.has(e)&&p(s)}else(0,i.yj)(l,n)}},12222:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A,resourceAliasMap:()=>j});var o=r(74848),i=r(16286),a=r(96540),n=r(47839),s=r(33540),l=r(30743);let c=s.default.div`
  background-color: rgba(15,15,15,0.7);
  color:rgb(226, 226, 226);
  font-size: 12px;

  figure {
    display: flex;
    flex-direction: row;
    padding: 20px 11px 14px;

    figcaption {
      line-height: 15px;
      margin-bottom: 4px;
    }

    img {
      height: 32px;
      margin-right: 19px;
      width: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    label {
      margin-top: 3px;
      padding: 0 11px;
    }

    div {
      position: relative;
      width: 100%;

      input,
      select {
      background: rgba(60,60,60,0.9);
        border: 1px solid rgb(2, 2, 2);
        border-radius: 6px;
        font-family: ${({theme:e})=>e.formats.systemFont};
        font-size: 12px;
        height: 23px;
        line-height: 16px;
        margin: 0 13px 21px 8px;
        padding-bottom: 2px;
        padding-left: 5px;
        width: 100%;
      }

      select {
        background-color: #fff;
        clip-path: inset(0 0 0 calc(100% - 19px));
        position: absolute;
        width: calc(100% - 21px);

        &:disabled {
          border: 1px solid rgb(122, 122, 122);
          opacity: 100%;
        }
      }

      input {
        border-right: 0;
        margin-right: 32px;

        &:focus {
          border: 1px solid rgb(0, 120, 215);
          border-right: 0;

          + select {
            border-color: rgb(0, 120, 215);
          }
        }
      }
    }
  }

  nav {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    height: 100%;

    ${l.A} {
      height: 24px;
      margin-top: 19px;
      position: absolute;
      right: 12px;
      width: 86px;

      &:first-child {
        right: 107px;
      }
    }
  }
`;var p=r(91745),d=r(8218),h=r(41017),u=r(62104),m=r(25573),f=r(1364),g=r(48060),w=r(37e3),x=r(1451),b=r(69343),y=r(31251),v=r(61149);let k="open",j={cmd:"Terminal",code:"MonacoEditor",dos:"JSDOS",explorer:"FileExplorer",monaco:"MonacoEditor",mspaint:"Paint",vlc:"VideoPlayer"},$=`Type the name of a program, folder, document, or Internet resource, and ${g.sx.alias} will open it for you.`,C=e=>alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),D={esheep:b.spawnSheep,sheep:b.spawnSheep},A=({id:e})=>{let{open:t,closeWithTransition:r,processes:{Run:s}={}}=(0,u.N)(),{createPath:b,exists:A,lstat:S,readFile:E,updateFolder:M}=(0,h.f)(),{foregroundId:L,runHistory:B,setRunHistory:T,updateRecentFiles:R}=(0,f.w)(),z=(0,a.useRef)(null),[I,P]=(0,a.useState)(!0),[q,F]=(0,a.useState)(!B[0]),[W,H]=(0,a.useState)(!1),N=({target:e})=>F(!e?.value),O=(0,a.useCallback)(async o=>{if(!o)return;H(!0);let a=()=>T(e=>e[0]===o?e:[o,...e]),[s,...l]=(0,n.RM)(o),c=o,d=!0,h=await A(c);h||(c=l.length>0?l.join(" "):s);let u=c.startsWith("nostr:");u&&t("Messenger",{url:c});let f=c.startsWith("ipfs://");if(h||u||f||await A(c)){if(f)try{let e=await (0,x.getIpfsResource)(c);c=(0,i.join)(g.Bn,await b(await (0,x.getIpfsFileName)(c,e),g.Bn,e)),M(g.Bn,(0,i.basename)(c))}catch{}if((await S(c)).isDirectory())t("FileExplorer",{url:c},""),a();else if(s&&l.length>0&&c!==o){let[e]=Object.entries(m.A).filter(([,{dialogProcess:e}])=>!e).find(([e])=>e.toLowerCase()===s.toLowerCase())||[];if(e){let r="Browser"===e&&f?l.join(" "):c;t(e,{url:r}),a(),r&&R(r,e)}else C(s),d=!1}else{let e=(0,w.uQ)(c);if(e===g.b3){let{pid:e,url:r}=(0,p.DB)(await E(c));e&&(t(e,{url:r}),r&&R(r,e))}else{let r=(0,p.YD)(e)||"OpenWith",i="Browser"===r&&f?o:c;t(r,{url:i}),i&&r&&R(i,r)}a()}}else{let[e]=Object.entries(m.A).filter(([,{dialogProcess:e}])=>!e).find(([e])=>e.toLowerCase()===(j[c.toLowerCase()]||c).toLowerCase())||[];e?(t(e),a()):D[o.toLowerCase()]?(D[o.toLowerCase()](),a()):(C(o),d=!1)}H(!1),d&&r(e)},[r,b,A,e,S,t,E,T,M,R]);return(0,a.useLayoutEffect)(()=>{L===e&&(z.current?.focus(g.VD),z.current?.value&&z.current?.select())},[L,e]),(0,a.useLayoutEffect)(()=>{s?.url&&z.current&&(z.current.value=`${z.current.value.trimEnd()} ${s.url}`.trim(),F(!1))},[s?.url]),(0,o.jsxs)(c,{...(0,d.A)({id:e}),onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,w.CH)(e)},children:[(0,o.jsxs)("figure",{children:[(0,o.jsx)(y.A,{alt:"Run",imgSize:32,src:`${g.uH}/run.webp`}),(0,o.jsx)("figcaption",{children:$})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:k,children:"Open:"}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{ref:z,defaultValue:B[0],disabled:W,id:k,onBlurCapture:({relatedTarget:e})=>{!s?.componentWindow||s.componentWindow.contains(e)?z.current?.focus(g.VD):P(!1)},onChange:N,onFocusCapture:()=>P(!0),onKeyDownCapture:t=>{let{key:o}=t;"Enter"===o&&O(z.current?.value.trim()),"Escape"===o&&((0,w.CH)(t),r(e))},onKeyUp:N,...v.f})})]}),(0,o.jsxs)("nav",{children:[(0,o.jsx)(l.A,{className:I?"focus":"",disabled:q||W,onClick:()=>O(z.current?.value.trim()),children:"OK"}),(0,o.jsx)(l.A,{disabled:W,onClick:()=>r(e),children:"Cancel"})]})]})}},30743:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(33540);let i=o.default.button`

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
`},8218:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(16286),i=r(96540),a=r(51780),n=r(16091),s=r(13296),l=r(41017),c=r(62104),p=r(1364),d=r(48060),h=r(37e3),u=r(96119);let m=({callback:e,directory:t=d.Bn,id:r,onDragLeave:m,onDragOver:f,updatePositions:g})=>{let{url:w}=(0,c.N)(),x=(0,u.w)(),{iconPositions:b,sortOrders:y,setIconPositions:v}=(0,p.w)(),{exists:k,mkdirRecursive:j,updateFolder:$,writeFile:C}=(0,l.f)(),D=(0,i.useCallback)(async(e,t,i)=>{if(r){if(t){let a=(0,o.join)(d.Bn,e);if(await j(d.Bn),await C(a,t,!0))return i===s.z.UPDATE_URL&&w(r,a),$(d.Bn,e),(0,o.basename)(a)}else i===s.z.UPDATE_URL&&w(r,e)}return""},[r,j,$,w,C]),{openTransferDialog:A}=(0,a.A)();return{onDragLeave:m,onDragOver:e=>{f?.(e),(0,h.CH)(e)},onDrop:i=>{if(d.jj.has((0,h.uQ)(t)))return;if(g&&i.target instanceof HTMLElement){let{files:e,text:r}=(0,n.bn)(i);if(0===e.length&&""===r)return;(async()=>{let a={x:i.clientX,y:i.clientY},n=[];if(r){try{n=JSON.parse(r)}catch{}if(!Array.isArray(n))return;let[e]=n;if(!e||e.startsWith(t)&&(0,o.basename)(e)===(0,o.relative)(t,e))return;n=n.map(e=>(0,o.basename)(e))}else e instanceof FileList?n=[...e].map(e=>e.name):n=[...e].map(e=>e.getAsFile()?.name||"").filter(Boolean);n=await Promise.all(n.map(async e=>{let r=`${t}/${e}`;if(!b[r]||!await k(r))return e;let i=0;do i+=1,r=`${t}/${(0,o.basename)(e,(0,o.extname)(e))} (${i})${(0,o.extname)(e)}`;while(b[r]&&await k(r));return(0,o.basename)(r)})),(0,h.$Y)(t,i.target,b,y,a,n,v,k)})()}let a="string"==typeof r;a&&!g&&t===d.Bn&&x.current[r]?.componentWindow?.focus(d.VD),(0,n.nX)(i,e||D,t,A,a)}}}},1451:(e,t,r)=>{r.d(t,{getIpfsFileName:()=>c,getIpfsGatewayUrl:()=>l,getIpfsResource:()=>p});var o=r(48060),i=r(48287).Buffer;let a="",n=["https://<CID>.ipfs.cf-ipfs.com/","https://<CID>.ipfs.dweb.link/","https://cloudflare-ipfs.com/ipfs/<CID>/","https://gateway.ipfs.io/ipfs/<CID>/"],s=e=>new Promise(t=>{let r=window.setTimeout(()=>t(!1),o.iC),i=new Image;i.addEventListener("load",()=>{window.clearTimeout(r),t(!0)},o.w3),i.addEventListener("error",()=>{window.clearTimeout(r),t(!1)},o.w3),i.src=`${e.replace("<CID>","bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`}),l=async(e,t)=>{if(!a||t){for(let e of t?n.filter(e=>e!==a):n)if(await s(e)){a=e;break}if(!a)return""}let{pathname:o,protocol:i,search:l}=new URL(e);if("ipfs:"!==i)return"";let[c="",...p]=o.split("/").filter(Boolean),{CID:d}=await r.e(8480).then(r.bind(r,38480));return`${a.replace("<CID>",d.parse(c).toV1().toString())}${p.join("/")}${l}`},c=async(e,t)=>{let{pathname:o,searchParams:i}=new URL(e),a=i.get("filename");if(a)return a;let{fileTypeFromBuffer:n}=await r.e(4840).then(r.bind(r,54840)),{ext:s=""}=await n(t)||{};return`${o.split("/").filter(Boolean).join("_")}${s?`.${s}`:""}`},p=async e=>{let t;let r={...o.c9,cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null};try{t=await fetch(await l(e),r)}catch(o){"Failed to fetch"===o.message&&(t=await fetch(await l(e,!0),r))}return t instanceof Response?i.from(await t.arrayBuffer()):i.from("")}},69343:(e,t,r)=>{r.d(t,{countSheep:()=>p,killSheep:()=>c,spawnSheep:()=>s});var o=r(37e3);let i={neko:["/Apps/eSheep/neko.xml",10],pingus:["/Apps/eSheep/pingus.xml",10]},a=!1,n=()=>{let e=Object.keys(i).flatMap(e=>{let[,t]=i[e];return Array.from({length:t}).fill(e)}),t=Math.floor(Math.random()*e.length),[r]=i[e[t]];return r},s=()=>(0,o.aY)(["/Apps/eSheep/eSheep.js"]).then(()=>{if(window.Sheep){let e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});a?e.Start(n()):(a=!0,e.Start("/Apps/eSheep/eSheep.xml"))}}),l="main > div[style*='z-index: 2000'] > img[src^='data:image']",c=()=>{let e=document.querySelector(l);e?.parentElement?.remove()},p=()=>document.querySelectorAll(l).length}}]);