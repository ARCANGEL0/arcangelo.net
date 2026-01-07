"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6202],{16202:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var n=o(74848),i=o(33540),a=o(96540);let r=e=>{let[t]=window.speechSynthesis.getVoices(),o=new SpeechSynthesisUtterance(e);o.voice=t,o.pitch=.9,o.rate=1.5,o.volume=.5,window.speechSynthesis.speak(o)};var s=o(29614),l=o(48060);let c=(e,t=.75)=>({animate:"active",exit:{transition:{duration:l.f9.TASKBAR_ITEM/10,ease:"circIn"},width:`${e*t}px`},initial:"initial",transition:{duration:l.f9.TASKBAR_ITEM,ease:"circOut"},variants:{active:{width:`${e}px`},initial:{width:`${e*t}px`}}});var p=o(10581),d=o(48470);let h=(0,i.default)(d.m.section)`
  background-color: rgb(32, 32, 32);
  border-left: 1px solid rgb(104, 104, 104);
  bottom: 0px;
  color: rgb(200, 200, 200);
  font-size: 14px;
  height: calc(100% - ${l.D5}px);
  position: absolute;
  right: 0;
  z-index: ${({$zIndex:e})=>e};

  /* Add this CSS to your stylesheet */
.typing-effect {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black; /* Cursor effect */
  animation: typing 4s steps(40) 1s 1 normal both, blink 0.75s step-end infinite;
}

/* Keyframes for typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Cursor blink effect */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}


  section {
    &::-webkit-scrollbar {
      width: 16px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-clip: content-box;
      background-color: rgb(77, 77, 77);
      border: 6px solid transparent;
      border-radius: 16px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgb(121, 121, 121);
    }

    display: flex;
    flex-direction: column;
    height: calc(100% - 49px - 122px);
    min-width: ${({$width:e})=>e-1}px;
    overflow: hidden auto;
    place-content: space-between;

    .convo-header {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 20px;
      place-content: center;
      place-items: center;
      width: ${({$scrollbarVisible:e})=>e?"calc(70% + 6px)":"70%"};

      .title {
        display: flex;
        font-size: 28px;
        font-weight: 700;
        margin-top:50px;

        > svg {
          height: 34px;
          margin-right: 8px;
          margin-top: 3px;
          width: 34px;
        }
      }

      .convo-style {
        display: flex;
        flex-direction: column;
        gap: 17px;
        place-content: center;
        place-items: center;

        .buttons {
          border: 1px solid rgb(102, 102, 102);
          border-radius: 4px;
          display: flex;
          margin-bottom: 48px;

          button {
            background-color: transparent;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            max-width: 100px;
            min-width: 100px;
            padding: 7px 28px;
            place-items: center;

            &.selected {
              background: ${({$secondaryColor:e,$tertiaryColor:t})=>`linear-gradient(135deg, ${e} 0%, ${t} 100%)`};
            }
          }

          h2,
          h4 {
            font-weight: 400;
            pointer-events: none;
          }

          h2 {
            font-size: 12.5px;
          }

          h4 {
            font-size: 9.5px;
            padding-bottom: 3px;
          }
        }
      }
    }

    .conversation {
      color: #fff;
      width: 70%;
      display: flex;
      flex-direction: column;
      font-size: 13.5px;
      gap: 13px;
      letter-spacing: 0.2px;
      margin-bottom: ${({$responding:e})=>e?"43px":void 0};
      padding: 16px;
      padding-bottom: 5px;

      .user {
        .avatar {
          .person {
            background: ${({$tertiaryColor:e})=>e};
            border-radius: 50%;
            fill: rgb(255, 255, 255, 45%);
            padding: 5px;
          }
        }
      }

      .avatar {
        display: flex;
        font-size: 15px;
        padding-bottom: 12px;
        place-items: center;

        svg {
          height: 24px;
          margin-right: 12px;
          width: 24px;
        }
      }

      .message {
        cursor: text;
        padding-left: 36px;
        user-select: text;
        white-space: pre-line;

        * {
          cursor: text;
          user-select: text;
        }

        pre {
          background-color: rgb(26, 26, 26);
          border: 1px solid rgb(48, 48, 48);
          border-radius: 5px;
          padding: 12px;
        }

        code {
          white-space: pre-wrap;

          &.language-js,
          &.language-python {
            &::before {
              background-color: rgb(29, 29, 29);
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              display: flex;
              font-family: ${({theme:e})=>e.formats.systemFont};
              font-size: 15px;
              font-weight: 600;
              height: 40px;
              left: -12px;
              padding: 0 12px;
              place-items: center;
              position: relative;
              top: -12px;
              width: calc(100% + 24px);
            }
          }

          &.language-js::before {
            content: "JavaScript";
          }

          &.language-python::before {
            content: "Python";
          }
        }

        &:hover {
          + .controls button {
            visibility: visible;
          }
        }

        p:last-child {
          display: inline;
        }

        pre:last-child {
          display: inline-block;
        }
      }

      .image-container {
        background-color: rgb(240, 240, 240);
        border: 1px solid rgb(102, 102, 102);
        border-radius: 10px;
        margin-bottom: 18px;
        margin-top: 10px;
        padding: 12px;

        canvas {
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

          animation: gradient 15s ease infinite;
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 400% 400%;
          border-radius: 10px;
          height: auto;
          max-width: 100%;
        }

        &:not(.generating) canvas {
          animation: unset;
          background: transparent;
          background-size: unset;
        }

        .prompt {
          color: rgb(15, 15, 15);
          font-size: 12px;
          padding-bottom: 6px;
          padding-left: 6px;
        }

        .powered-by {
          display: flex;
          place-content: end;
          width: 100%;

          div {
            background-color: rgb(230, 230, 230);
            border: 1px solid rgb(220, 220, 220);
            border-radius: 5px;
            color: rgb(90, 90, 90);
            font-size: 11.5px;
            padding: 5px;
            width: fit-content;
          }
        }
      }

      .responding {
        background-color: transparent;
        bottom: 120px;
        display: flex;
        left: 0;
        margin: 0 16px;
        margin-top: -6px;
        padding: 7px 0;
        place-content: center;
        place-items: center;
        position: absolute;
        width: calc(100% - 32px);

        .stop {
          background-color: transparent;
         color: #fff;
          cursor: pointer;
          display: flex;
          font-size: 13px;
          letter-spacing: 0.3px;
          min-height: 36px;
          padding: 8px;
          place-content: center;
          place-items: center;

          &:hover {
            background-color: transparent;
          }

          &.canceling {
            background-color: transparent;
          }

          .stop-icon {
            fill: ${({$primaryColor:e})=>e};
            height: 18px;
            margin-right: 6px;
            width: 18px;
          }
        }
      }

      .failed-session {
        display: flex;
        font-size: 12px;
        margin-bottom: 10px;
        place-content: center;
        place-items: center;
        width: ${({$scrollbarVisible:e})=>e?"calc(100% + 6px)":"100%"};

        &::before,
        &::after {
          border-bottom: 1px solid rgb(48, 48, 48);
          content: "";
          flex: 1 1 0%;
          margin-top: 3px;
        }

        &::before {
          margin-inline-end: 5px;
        }

        &::after {
          margin-inline-start: 5px;
        }

        a {
          color: ${({$primaryColor:e})=>e};
          cursor: pointer;
          margin-left: 4px;
        }

        .warning-icon {
          fill: ${({$primaryColor:e})=>e};
          height: 18px;
          margin-right: 4px;
          margin-top: 2px;
          width: 18px;
        }
      }

      .controls {
        padding-left: 36px;
        padding-top: 11px;
        pointer-events: all;
        position: relative;

        &.hidden {
          display: none;
        }

        &.invisible {
          height: 13px;
          opacity: 0%;
          pointer-events: none;
        }

        .control {
          background-color: transparent;
          border-radius: 5px;
          height: 32px;
          visibility: hidden;
          width: 32px;

          &:hover {
            background-color: rgb(45, 45, 45);
            border: 1px solid rgb(65, 65, 65);
          }

          &:active {
            background-color: rgb(42, 42, 42);
          }

          .control-icon {
            fill: #fff;
            height: 20px;
            width: 20px;
          }

          .save-icon {
            position: relative;
            top: 1px;
          }

          .background-icon {
            position: relative;
            top: -1px;
          }
        }

        &:hover,
        &.last {
          .control {
            visibility: visible;
          }
        }
      }
    }
  }

  .header {
    height: 49px;
    min-width: ${({$width:e})=>e-1}px;
    padding: 14px 15px 16px;

    header {
      display: flex;
      justify-content: space-between;
      padding: 3px 1px;

      nav {
        position: relative;
        right: -8px;
        top: -9px;

        .close {
          border-radius: 5px;
          height: 36px;
          transition: background-color 0.2s ease-in-out;
          width: 36px;

          > svg {
            fill: rgb(241, 241, 241);
            width: 12px;
          }

          &:hover {
            background-color: rgb(49, 49, 49);
          }
        }
      }
    }
  }

  footer {
    top: 15%;
    display: flex;
    flex-direction: row;
    height: 122px;
    min-width: ${({$width:e})=>e-1}px;
    padding: 16px 24px;
    place-content: space-between;
    position: sticky;

    .new-topic {
      background: ${({$secondaryColor:e,$tertiaryColor:t})=>`linear-gradient(135deg, ${e} 0%, ${t} 100%)`};
      border-radius: 50%;
      cursor: pointer;
      height: 40px;
      place-content: center;
      place-items: center;
      transition: opacity 0.1s 0.1s ease-in-out;
      width: 40px;

      > .chat {
        fill: #fff;
        height: 20px;
        pointer-events: none;
        position: relative;
        top: 1px;
        width: 20px;
      }

      &:active {
        border: 1px solid rgb(32, 32, 32);
      }
    }

    .submit {
      background-color: transparent;
      border-radius: 5px;
      height: 36px;
      position: relative;
      right: -336px;
      top: 49px;

      .send {
        fill: ${({$primaryColor:e,$typing:t})=>t?e:"rgb(99, 99, 99)"};
        height: 20px;
        pointer-events: none;
        position: relative;
        top: 1px;
        width: 20px;
      }

      &:hover {
        background-color: ${({$typing:e})=>e?"rgb(44, 44, 44)":void 0};
        cursor: ${({$typing:e})=>e?"pointer":void 0};
      }

      &:active {
        background-color: rgb(38, 38, 38);
      }
    }

    textarea {
      background-color: rgb(31, 31, 31);
      border: 1px solid rgb(102, 102, 102);
      border-radius: 7px;
      bottom: 16px;
      color: #fff;
      font-family: ${({theme:e})=>e.formats.systemFont};
      font-size: 12.5px;
      letter-spacing: 0.6px;
      min-height: 90px;
      overflow: hidden;
      max-width: 65%;
      padding: 13px 44px 13px 15px;
      position: absolute;
      resize: none;
      transition:
        border-bottom 0.2s 0.2s ease-in-out,
        width 0.2s 0.2s ease-in-out;
      width: calc(93%);

      &::placeholder {
        color: rgb(206, 206, 206);
      }

      &:focus {
        border-bottom: ${({$primaryColor:e})=>`2px solid ${e}`};
        width: ${({$typing:e})=>e?"calc(100% - 28px)":void 0};

        & + .new-topic {
          opacity: ${({$typing:e})=>e?"0%":"100%"};
          transition-delay: ${({$typing:e})=>e?.2:.4}s;
        }
      }

      &:not(:focus) + .new-topic {
        transition-delay: 0.4s;
      }
    }
  }
`;var g=o(37e3),x=o(39913),u=o(72340),m=o(1364),b=o(15289),f=o(41017);let v=({toggleAI:e})=>{let{colors:{taskbar:t},sizes:{taskbar:o}}=(0,i.useTheme)(),d=(0,a.useCallback)(()=>Math.min(o.ai.chatWidth,(0,g.e8)()),[o.ai.chatWidth]),[v,w]=(0,a.useState)(d),y=c(v),[C,k]=(0,a.useState)(p.aE),[j,A,$]=t.ai[C],[N,S]=(0,a.useState)(""),M=(0,a.useRef)(null),B=(0,a.useRef)(null),L=N.length>0,[z,H]=(0,a.useState)([]),T=(0,a.useCallback)((e,t,o,n,i=!1)=>{e&&H(a=>{let r={formattedText:o||e,text:e,type:t,withCanvas:i};if(n){let e=[...a];return e[n]=r,e}return[...a,r]})},[]),E=(0,a.useCallback)(()=>{N&&(T(N,"user"),M.current.value="",S(""),ex(N))},[T,N]);(0,a.useMemo)(()=>z.length-[...z].reverse().findIndex(({type:e})=>"ai"===e)-1,[z]);let[F,V]=(0,a.useState)(!1),[Z,P]=(0,a.useState)(!1),[D,I]=(0,a.useState)(!1),R=(0,a.useRef)(0),q=(0,b.i)(),W=(0,x.A)(p.Qq),_=(0,a.useCallback)(()=>{W.current&&F&&(W.current.postMessage("cancel"),P(!0))},[W,F]),K=(0,a.useCallback)(()=>{_(),R.current=0,H([]),I(!1)},[_]);(0,a.useCallback)(e=>{C!==e&&(K(),k(e),M.current?.focus(l.VD))},[C,K]);let[J,U]=(0,a.useState)(),{removeFromStack:O,setWallpaper:Y}=(0,m.w)(),{zIndex:G,...Q}=(0,u.A)(p.tT,void 0,J),[X,ee]=(0,a.useState)([]),[et,eo]=(0,a.useState)(!1),[en,ei]=(0,a.useState)(-1),[ea,er]=(0,a.useState)(""),es=(0,a.useCallback)(()=>{let e=M.current;e.style.height="auto",e.style.height=`${e.scrollHeight}px`},[]),{createPath:el,exists:ec,readFile:ep,stat:ed,updateFolder:eh}=(0,f.f)(),eg=(0,a.useRef)({}),ex=(0,a.useCallback)(async e=>{console.log("s e n d i n g    m e s s a g e . . . . "),V(!0);try{let t=await fetch(`https://api.neoxr.eu/api/meta?q=You+are+Henry+Arcangelo%2C+25+Years+old%2C+born+09+Nov%2C+2000.+Always+reply+as+yourself%2C+never+as+an+assistant.+Be+concise+and+brief.+Do+not+use+adjectives+for+self-description%3B+speak+naturally%2C+as+a+person+sharing+facts+or+opinions.+Background%3A+Degree+in+Software+Development+%26+Analysis%3B+studying+Computer+Engineering%3B+extra+courses%3A+Network+Architecture%2C+Digital+Marketing%2C+Project+Management%2C+Agile%2C+Administration%2C+Web+Security%2C+Mobile+Development%3B+certifications%3A+Networks+Arch%2C+Cisco+config%2C+Project+Management%2C+Agile%2C+AI+TensorFlow%2FKeras%2C+Red+Team%2C+Pentesting%2C+Cybersecurity.+Fluent+PT%2FEN%2C+learning+FR.+Single.+Personality%3A+borderline%2C+intense%2C+loyal%2C+protective.+Love+style%3A+deep%2C+obsessive%2C+loyal%3B+boundaries%3A+cheating%2Fbetrayal.+Discuss+feelings+or+relationships+only+when+asked%3B+when+asked%2C+answer+calmly+and+briefly%2C+without+hesitation+but+with+privacy.+Hobbies%3A+coding%2C+ethical+hacking%2C+puzzles%2C+philosophy%2C+physics%2C+games%2C+chess%2C+music+%28guitar%2C+piano%2C+singing%2C+songwriting+as+arcxlo+on+Spotify%E2%80%94mention+only+if+asked%29%2C+and+drawing.+Favorite+books+%28only+if+asked%29%3A+The+Black+Cat%2C+1984%2C+White+Nights%2C+Metamorphosis%2C+Frankenstein%2C+Crime+and+Punishment%2C+Rhetorics.+Tools%3A+VS+Code%2C+JetBrains%2C+Postman%2C+Insomnia%2C+Trello%2C+JUnit%2C+Pytest%2C+Adobe+Creative.+Languages%2Fframeworks%3A+Python%2C+PHP%2C+Java%2C+C%23%2C+C%2B%2B%2C+Swing%2C+React%2C+Laravel%2C+Redux%2C+Next.js%2C+Three.js%2C+CakePHP%2C+React+Native%2C+Flutter%2C+TS%2C+Ruby%2C+.NET%2C+ASP%2C+VBS%2C+Bash%2C+PowerShell%2C+TensorFlow.+GitHub+github.com%2FARCANGEL0+%28only+if+asked%29%3A+dashboards%2C+mobile+apps%2C+CTF+scripts%2C+automation+%26+WhatsApp+bots.+Contact+%28only+if+asked%29%3A+LinkedIn+%40henryarcangelo%2C+Instagram+%40h.arcangelo%2C+WhatsApp+%2B351927285125%2C+email+henry.arcangello%40gmail.com+.+Behavior%3A+never+present+as+bot%3B+never+overexplain%3B+be+minimal%2C+factual%2C+human.+Subtle+wit+ok%2C+no+slang+or+robotic+tone%3B+speak+like+a+normal+person+to+a+stranger.+For+trivial+questions+%28time%2Fdate%2Fweather%29%2C+answer+casually%2Fsarcastically.+Focus+on+yourself%E2%80%94your+views+and+experience%3B+if+question+isn%E2%80%99t+about+you%2C+reply+as+opinion%2C+not+fact.+Love%2Frelationship+Q%3A+answer+only+if+explicit%3B+brief%2C+natural%2C+private%3B+hint+at+intensity%2Floyalty+without+overdetailing.Always%20be%20concise%20in%20your%20responses,%20don%27t%20go%20away%20overtalking%20everything%20except%20if%20asked,%20don%27t%20mention%20your%20love%20life%20as%20you%20are%20introvert%20about%20it%20++Now+answer+the+next+question+following+all+rules+above,,%20with%20minimal%20information%20as%20possible:${e}&apikey=7y6cD6`),o=await t.json();if(!o.status)throw Error("Network response was not ok");let n=o.data.message;console.log(`
█████      ██████  ███████      █████  ██ 
██   ██    ██    ██ ██          ██   ██ ██ 
███████    ██    ██ ███████     ███████ ██ 
██   ██    ██    ██      ██     ██   ██ ██ 
██   ██ ██  ██████  ███████     ██   ██ ██ 
                                          
-----------------------------------------------
    `),console.log(n),T(n,"system")}catch(e){console.error("Error fetching response:",e),I(!0)}finally{V(!1)}},[T]);(0,a.useEffect)(()=>{M.current?.focus(l.VD)},[]),(0,a.useEffect)(()=>{let e=()=>w(d);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[d]),(0,a.useEffect)(()=>{(z.length>0||D)&&requestAnimationFrame(()=>{B.current?.scrollTo({behavior:"smooth",top:B.current.scrollHeight}),es()}),eo(z.length>0&&B.current instanceof HTMLElement&&B.current.scrollHeight>B.current.clientHeight)},[es,z,D]);let eu=e=>{for(let t=e.length-1;t>=0;t--)if("system"===e[t].type)return t;return -1};return(0,a.useEffect)(()=>{console.log("Testing"),console.log(z);let e=setInterval(()=>{if(!F){clearInterval(e);let t=eu(z);if(t>=0){let e=z[t].formattedText||"",o=0,n=()=>{ee(n=>n.map((n,i)=>i===t?e.slice(0,o+1):n)),(o+=1)<e.length&&setTimeout(n,10)};ee(e=>{let o=[...e];return o[t]="",o}),n()}}},100)},[z]),(0,n.jsxs)(h,{ref:U,$primaryColor:j,$responding:F,$scrollbarVisible:et,$secondaryColor:A,$tertiaryColor:$,$typing:L,$width:v+150,$zIndex:G,...y,...Q,children:[(0,n.jsxs)("section",{ref:B,children:[(0,n.jsxs)("div",{className:"convo-header",children:[(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)(s.sp,{})," ",p.K1]}),(0,n.jsx)("div",{className:"convo-style",children:"Ask anything about me or any other information"})]}),(0,n.jsxs)("div",{className:"conversation",children:[z.map(({formattedText:e,type:t,text:o,withCanvas:i},a)=>(0,n.jsxs)("div",{className:t,children:[(0===a||z[a-1].type!==t)&&(0,n.jsxs)("div",{className:"avatar",children:["user"===t?(0,n.jsx)(s.nX,{}):(0,n.jsx)(s.sp,{}),"user"===t?"You":"Henry"]}),(0,n.jsx)("div",{className:"message",children:"system"===t&&a===eu(z)?(0,n.jsx)("span",{children:X[a]||e||o}):(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e||o}})}),(0,n.jsxs)("div",{className:(0,g.$z)({controls:!0,hidden:F&&!i&&a===z.length-1,invisible:F&&!!i,last:a===z.length-1}),children:[(0,n.jsx)("button",{className:"control",onClick:()=>{navigator.clipboard?.writeText(o),ei(a),setTimeout(()=>ei(-1),5e3)},type:"button",...(0,g.Pf)(en===a?"Copied":"Copy"),children:(0,n.jsx)(s.Td,{})}),"user"===t&&(0,n.jsx)("button",{className:"control",onClick:()=>{M.current&&(M.current.value=o,M.current.focus(l.VD),S(o))},type:"button",...(0,g.Pf)("Edit"),children:(0,n.jsx)(s.qU,{})}),"speechSynthesis"in window&&"ai"===t&&(0,n.jsx)("button",{className:"control",onClick:()=>r(o),type:"button",...(0,g.Pf)("Read aloud"),children:(0,n.jsx)(s.AJ,{})}),"ai"===t&&i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"control",onClick:()=>saveCanvasImage(a,o,l.Bn),type:"button",...(0,g.Pf)("Save"),children:(0,n.jsx)(s.LP,{})}),(0,n.jsx)("button",{className:"control",onClick:()=>saveCanvasImage(a,o,l.Sb).then(e=>Y(`${l.Sb}/${e}`)),type:"button",...(0,g.Pf)("Set as background"),children:(0,n.jsx)(s.Wm,{})})]})]}),i&&(0,n.jsxs)("div",{className:(0,g.$z)({generating:F&&a===z.length-1,"image-container":!0}),children:[(0,n.jsx)("canvas",{ref:e=>{if(e instanceof HTMLCanvasElement&&eg.current[a]!==e){eg.current[a]=e;try{let t=e.transferControlToOffscreen();W.current?.postMessage({hasWindowAI:q,id:R.current,imagePrompt:o,offscreenCanvas:t,streamId:1?z.length:void 0,style:C,text:o},[t])}catch{}}},height:512,width:512}),(0,n.jsxs)("div",{className:"prompt",children:['"',o,'"']}),(0,n.jsx)("div",{className:"powered-by",children:(0,n.jsx)("div",{children:"Powered by Stable Diffusion 1.5"})})]})]},`${o}-${a}`)),F&&(0,n.jsx)("div",{className:"responding",children:(0,n.jsx)("button",{className:`stop${Z?" canceling":""}`,disabled:!!ea||Z,onClick:()=>{},type:"button",children:!ea&&!Z&&(0,n.jsx)(s.oy,{})})}),D&&(0,n.jsxs)("div",{className:"failed-session",children:[(0,n.jsx)(s.id,{}),"Uh-oh, something went wrong here! Maybe it's time for a new chat.",(0,n.jsx)("a",{onClick:K,children:"Let's start over."})]})]})]}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("textarea",{ref:M,disabled:D,onBlur:es,onChange:e=>{S(e.target.value),es()},onFocus:es,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),Z||F||E()),es()},placeholder:"i.e: Tell me about yourself"}),(0,n.jsx)("button",{className:"submit",disabled:Z||F,onClick:E,type:"button",children:L?(0,n.jsx)(s.Sz,{}):(0,n.jsx)(s.qx,{})})]})]})}},29614:(e,t,o)=>{o.d(t,{AJ:()=>f,Aq:()=>s,LP:()=>u,Sz:()=>d,Td:()=>g,Wm:()=>x,id:()=>b,nX:()=>h,oy:()=>l,qU:()=>m,qx:()=>p,sp:()=>c});var n=o(74848),i=o(96540),a=o(29965),r=o.n(a);let s=(0,i.memo)(()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),l=(0,i.memo)(()=>(0,n.jsx)(r(),{src:"/System/Icons/Favicons/16x16/loading.gif",alt:"Loading...",width:30,height:30})),c=(0,i.memo)(()=>(0,n.jsx)("svg",{fill:"#ffffff",viewBox:"0 0 588.42 568.88",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{className:"st0",d:"M483.009,360.176c-1.424-13.064-3.35-25.629-5.698-37.614c-5.947-30.987-14.822-58.301-23.956-81.165 c-19.686-48.919-41.045-77.566-41.045-77.566s9.886-14.242,12.484-67.52c0.248-3.682,0.331-7.453,0.417-11.478 c1.088-43.307-15.412-71.954-28.398-81.337c-5.861-4.352-10.973-4.688-13.404-0.753c-3.096,4.778-14.238,21.195-27.138,39.789 c-1.174,1.596-2.348,3.273-3.518,5.031c-21.028,30.406-45.07,64.748-45.07,64.748H256h-51.684c0,0-24.042-34.341-45.069-64.748 c-1.17-1.758-2.344-3.435-3.517-5.031C142.829,23.94,131.687,7.522,128.591,2.744c-2.429-3.935-7.542-3.599-13.404,0.753 c-12.986,9.383-29.486,38.03-28.398,81.337c0.086,4.025,0.168,7.796,0.417,11.478c2.597,53.278,12.483,67.52,12.483,67.52 s-21.359,28.648-41.045,77.566c-9.133,22.864-18.009,50.178-23.956,81.165c-2.347,11.984-4.274,24.55-5.697,37.614 c-0.086,0.589-0.086,1.26-0.168,1.849l1.174-0.09l0.667-0.081h1.006l47.078-2.928l-6.282,50.758l49.589-7.706l8.377,36.272 l36.309-19.142c11.607,31.143,26.868,70.678,33.257,81.075c10.938,17.85,35.02,12.754,52.534,2.561 c1.297-0.761,2.376-1.448,3.346-2.103c0.969,0.654,2.041,1.342,3.354,2.103c17.51,10.193,41.585,15.289,52.526-2.561 c6.389-10.406,21.743-49.974,33.424-81.116l36.386,19.184l8.377-36.272l49.589,7.706l-6.283-50.758l47.078,2.928h1.007l0.666,0.081 l1.174,0.09C483.094,361.436,483.094,360.765,483.009,360.176z M128.845,146.056c-12.823-14.814-18.21-50.93-13.866-67.839 c2.724-10.66,13.182-15.068,19.727-7.542c6.56,7.534,29.568,49.638,29.568,49.638S132.072,144.445,128.845,146.056z M168.045,329.386c0,0-13.96-29.318-16.753-40.484c34.901,0,48.865,19.543,54.448,25.13l8.376,18.152L168.045,329.386z M283.638,456.066c-10.671,13.596-20.635,14.022-27.642,14.022c-7.006,0-16.962-0.426-27.646-14.022 c-8.561-10.888-1.559-24.14,9.35-24.14c3.89,0,18.295,0,18.295,0s14.414,0,18.303,0 C285.212,431.926,292.218,445.178,283.638,456.066z M343.955,329.386l-46.072,2.798l8.377-18.152 c5.583-5.587,19.547-25.13,54.448-25.13C357.915,300.067,343.955,329.386,343.955,329.386z M383.143,146.056 c-3.223-1.611-35.42-25.743-35.42-25.743s23.003-42.104,29.555-49.638c6.548-7.526,17.003-3.117,19.739,7.542 C401.365,95.126,395.965,131.241,383.143,146.056z"})})),p=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"send",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5.694 12 2.299 3.27c-.236-.607.356-1.188.942-.981l.093.039 18 9a.75.75 0 0 1 .097 1.284l-.097.058-18 9c-.583.291-1.217-.245-1.065-.848l.03-.095L5.694 12 2.299 3.27 5.694 12ZM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12 4.401 4.54Z"})})),d=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"send",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m12.815 12.197-7.532 1.255a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.942l18-9a.75.75 0 0 0 0-1.341l-18-9c-.614-.307-1.283.303-1.035.942l2.598 6.958a.5.5 0 0 0 .386.318l7.532 1.255a.2.2 0 0 1 0 .395Z"})})),h=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.918a2.75 2.75 0 0 1-.512 1.598c-1.546 2.164-4.07 3.235-7.49 3.235-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.249 2.249 0 0 1 6.253 14h11.502ZM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"})})),g=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123ZM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75Z"})})),x=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"control-icon background-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13.5 7.5h9V24H0V7.5h9V9H1.5v13.5H21V9h-7.5Zm-3-4.629L7.277 6.094 6.223 5.027 11.25 0l5.027 5.027-1.054 1.067L12 2.87V13.5h-1.5ZM9 12H4.5v7.5H18V12h-4.5v-1.5h6V21H3V10.5h6Zm0 0"})})),u=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"control-icon save-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21 1.5c.21 0 .406.04.586.117.18.078.336.188.477.32.132.141.242.297.32.477.078.18.117.375.117.586v19.5H4.184L1.5 19.805V3c0-.21.04-.406.117-.586.078-.18.188-.336.32-.477.141-.132.297-.242.477-.32.18-.078.375-.117.586-.117Zm-15 9h12V3H6Zm9 6H7.5V21H9v-3h1.5v3H15ZM21 3h-1.5v9h-15V3H3v16.184L4.805 21H6v-6h10.5v6H21Zm0 0"})})),m=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.952 3.048a3.578 3.578 0 0 0-5.06 0L3.94 15a3.106 3.106 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.106 3.106 0 0 0 1.477-.825L20.952 8.11a3.578 3.578 0 0 0 0-5.06Zm-4 1.06a2.078 2.078 0 1 1 2.94 2.94L19 7.939 16.06 5l.892-.891ZM15 6.062 17.94 9 7.94 19c-.21.21-.474.357-.763.426l-3.416.814.813-3.416c.069-.29.217-.554.427-.764L15 6.06Z"})})),b=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"warning-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13 17a.999.999 0 1 0-1.998 0 .999.999 0 0 0 1.997 0Zm-.26-7.853a.75.75 0 0 0-1.493.103l.004 4.501.007.102a.75.75 0 0 0 1.493-.103l-.004-4.502-.007-.101Zm1.23-5.488c-.857-1.548-3.082-1.548-3.938 0L2.286 17.66c-.83 1.5.255 3.34 1.97 3.34h15.49c1.714 0 2.799-1.84 1.969-3.34L13.969 3.66Zm-2.626.726a.75.75 0 0 1 1.313 0l7.745 14.002a.75.75 0 0 1-.656 1.113H4.256a.75.75 0 0 1-.657-1.113l7.745-14.002Z"})})),f=(0,i.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 20 19",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13 2.25c0-1.079-1.274-1.65-2.08-.934L6.427 5.309a.75.75 0 0 1-.498.19H2.25A2.25 2.25 0 0 0 0 7.749v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .498.19l4.491 3.994c.806.716 2.081.144 2.081-.934V2.25ZM7.425 6.43 11.5 2.807v14.382l-4.075-3.624a2.25 2.25 0 0 0-1.495-.569H2.25a.75.75 0 0 1-.75-.75V7.75A.75.75 0 0 1 2.25 7h3.68a2.25 2.25 0 0 0 1.495-.569Zm9.567-2.533a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 20 10a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 18.5 10a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049ZM15.143 6.37a.75.75 0 0 1 1.017.303c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z"})}))},72340:(e,t,o)=>{o.d(t,{A:()=>s});var n=o(96540),i=o(62104),a=o(1364),r=o(48060);let s=(e,t,o)=>{let{foregroundId:s,prependToStack:l,setForegroundId:c,stackOrder:p=[]}=(0,a.w)(),{processes:{[e]:d}}=(0,i.N)(),{closing:h=!1,componentWindow:g=o,minimized:x=!1,taskbarEntry:u,url:m}=d||{},b=(0,n.useMemo)(()=>p.length+(x?1:-p.indexOf(e))+1,[e,x,p]),f=(0,n.useCallback)(o=>{let{relatedTarget:n}=o,i=n===u,a=n&&u?.previousSibling?.contains(n),s=n&&g?.contains(n);c(n=>n!==e||i||s?n:(a?g?.focus(r.VD):t?.onBlurCapture?.(o),a?n:""))},[t,g,e,c,u]),v=(0,n.useCallback)(o=>{let{relatedTarget:n}=o||{};g?.contains(document.activeElement)?(l(e),c(e)):n&&document.activeElement!==u||(g?.focus(r.VD),t?.onFocusCapture?.(o))},[t,g,e,l,c,u]);return(0,n.useLayoutEffect)(()=>{e===s&&v()},[s,e,v]),(0,n.useLayoutEffect)(()=>{!g||h||x||c(e)},[h,g,e,x,c,m]),(0,n.useMemo)(()=>({onBlurCapture:f,onClickCapture:v,onFocusCapture:v,zIndex:b,...r.W8}),[v,f,b])}}}]);