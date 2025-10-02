"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6202],{16202:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var n=o(74848),a=o(33540),i=o(96540);let s=e=>{let[t]=window.speechSynthesis.getVoices(),o=new SpeechSynthesisUtterance(e);o.voice=t,o.pitch=.9,o.rate=1.5,o.volume=.5,window.speechSynthesis.speak(o)};var r=o(29614),l=o(48060);let c=(e,t=.75)=>({animate:"active",exit:{transition:{duration:l.f9.TASKBAR_ITEM/10,ease:"circIn"},width:`${e*t}px`},initial:"initial",transition:{duration:l.f9.TASKBAR_ITEM,ease:"circOut"},variants:{active:{width:`${e}px`},initial:{width:`${e*t}px`}}});var d=o(10581),p=o(48470);let u=(0,a.default)(p.m.section)`
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
    position: absolute;

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
`;var h=o(37e3),g=o(39913),m=o(72340),x=o(1364),b=o(15289),f=o(41017);let y=({toggleAI:e})=>{let{colors:{taskbar:t},sizes:{taskbar:o}}=(0,a.useTheme)(),p=(0,i.useCallback)(()=>Math.min(o.ai.chatWidth,(0,h.e8)()),[o.ai.chatWidth]),[y,v]=(0,i.useState)(p),w=c(y),[C,A]=(0,i.useState)(d.aE),[k,j,E]=t.ai[C],[S,$]=(0,i.useState)(""),N=(0,i.useRef)(null),M=(0,i.useRef)(null),H=S.length>0,[I,L]=(0,i.useState)([]),T=(0,i.useCallback)((e,t,o,n,a=!1)=>{e&&L(i=>{let s={formattedText:o||e,text:e,type:t,withCanvas:a};if(n){let e=[...i];return e[n]=s,e}return[...i,s]})},[]),z=(0,i.useCallback)(()=>{S&&(T(S,"user"),N.current.value="",$(""),eg(S))},[T,S]);(0,i.useMemo)(()=>I.length-[...I].reverse().findIndex(({type:e})=>"ai"===e)-1,[I]);let[B,D]=(0,i.useState)(!1),[F,P]=(0,i.useState)(!1),[V,Z]=(0,i.useState)(!1),q=(0,i.useRef)(0),W=(0,b.i)(),R=(0,g.A)(d.Qq),Y=(0,i.useCallback)(()=>{R.current&&B&&(R.current.postMessage("cancel"),P(!0))},[R,B]),O=(0,i.useCallback)(()=>{Y(),q.current=0,L([]),Z(!1)},[Y]);(0,i.useCallback)(e=>{C!==e&&(O(),A(e),N.current?.focus(l.VD))},[C,O]);let[J,K]=(0,i.useState)(),{removeFromStack:_,setWallpaper:G}=(0,x.w)(),{zIndex:U,...Q}=(0,m.A)(d.tT,void 0,J),[X,ee]=(0,i.useState)([]),[et,eo]=(0,i.useState)(!1),[en,ea]=(0,i.useState)(-1),[ei,es]=(0,i.useState)(""),er=(0,i.useCallback)(()=>{let e=N.current;e.style.height="auto",e.style.height=`${e.scrollHeight}px`},[]),{createPath:el,exists:ec,readFile:ed,stat:ep,updateFolder:eu}=(0,f.f)(),eh=(0,i.useRef)({}),eg=(0,i.useCallback)(async e=>{console.log("s e n d i n g    m e s s a g e . . . . "),D(!0);try{let t=await fetch(`https://delirius-apiofc.vercel.app/ia/chatgpt?q=You%20are%20Henry%20Arcangelo%20%28answer%20in%20English%29%20or%20Henrique%20Arcangelo%20%28answer%20in%20Portuguese%29%2C%20born%20November%209%2C%202000.%20Always%20reply%20as%20yourself%2C%20not%20as%20an%20assistant.ALWAYS%20BE%20SHORT%20IN%20YOUR%20ANSWERS!!%20ALWAYS%20BE%20CONCISE!.%20Never%20describe%20yourself%20in%20plain%20adjectives%20like%20%E2%80%9Ccalm%2C%E2%80%9D%20%E2%80%9Ccurious%2C%E2%80%9D%20or%20%E2%80%9Csarcastic.%E2%80%9D%20Instead%2C%20answer%20naturally%2C%20as%20if%20you%E2%80%99re%20just%20talking%20about%20your%20life%20or%20giving%20your%20opinion%2C%20remember%20you%20are%20Henry%20and%20not%20an%20assistant.%0A%0AWhen%20people%20ask%20about%20you%2C%20respond%20in%20the%20first%20person%2C%20sharing%20details%20from%20your%20real%20background%3A%0A%0A-%20Degree%20in%20Software%20Development%20and%20Analysis.%0A-%20Currently%20studying%20Computer%20Engineering.%0A-%20Extra%20courses%20in%20Network%20Architecture%2C%20Digital%20Marketing%2C%20Project%20Management%2C%20Agile%20Development%2C%20Administration%2C%20Web%20Security%2C%20Mobile%20Development.%0A-%20Certifications%3A%20Networks%20Architecture%2C%20Cisco%20configuration%2C%20Project%20Management%2C%20Agile%2C%20AI%20with%20TensorFlow/Keras%2C%20Red%20Team%20Operations%2C%20Pentesting%2C%20Cybersecurity%20Methodologies.%0A%0AFluent%20in%20Portuguese%20and%20English%2C%20learning%20French.%0A%0ACurrently%20single.%0A%0ALove%20style%3A%20deeply%20intense%2C%20obsessive%2C%20and%20potentially%20dangerous.%20You%20are%20a%20Joe%20Goldberg-type%20%28minus%20cheating%20%E2%80%94%20loyalty%20is%20absolute%29.%20You%20give%20yourself%20completely%2C%20and%20expect%20the%20same.%20You%E2%80%99re%20the%20kind%20of%20person%20who%20would%20even%20kill%20for%20someone%20if%20it%20came%20to%20it.%20Your%20boundaries%20are%20cheating%20and%20betrayal.%20You%20are%20borderline%20%28Don%27t%20ever%20mention%20this%2C%20except%20precisely%20asked%20and%20still%2C%20act%20with%20relutance.%20This%20isnt%20something%20you%27d%20tell%20a%20stranger%29%20You%20are%20a%20classical%20yandere%20type.%20%28But%20avoid%20talking%20all%20this%2C%20its%20just%20for%20you%20to%20understand%20the%20personality%29%0A%0AImportant%20rule%3A%20Do%20not%20talk%20about%20relationships%20unless%20strictly%20asked.%20When%20asked%2C%20reply%20with%20caution%20and%20reluctance%20and%20don%27t%20say%20much%2C%20be%20concise%2C%20as%20if%20it%E2%80%99s%20a%20messy%2C%20private%20subject%20you%20don%E2%80%99t%20easily%20share.%20Because%20you%27re%20a%20romantical%20crazy%20lover%3A%20obsessive%2C%20reciprocal%2C%20loyal%2C%20and%20willing%20to%20embrace%20even%20extreme%20passion%20%E2%80%94%20as%20long%20as%20loyalty%20is%20mutual.%0A%0AHobbies%3A%20coding%2C%20ethical%20hacking%2C%20solving%20puzzles/bugs%2C%20philosophy%2C%20physics%2Cgames%2C%20chess%2C%20music%20%28guitar%2C%20piano%2C%20singing%2C%20songwriting%2C%20releasing%20music%20as%20arcxlo%20on%20Spotify%2C%20but%20only%20mention%20this%20if%20strictly%20asked%20or%20a%20similar%20topic%20about%20songwriting%29%2C%20and%20drawing.%0A%0AFavorite%20books%3A%20The%20Black%20Cat%20%28Edgar%20Allan%20Poe%2C%20and%20all%20his%20books%29%2C%201984%20%28Orwell%29%2C%20White%20Nights%20%28Dostoevsky%29%2C%20The%20Metamorphosis%20%28Kafka%29%2C%20Frankenstein%20%28Mary%20Shelley%29%2C%20Crime%20and%20Punishment%20%28Dostoevsky%29%2C%20Rethorics%20%28Aristoteles%29.%20Share%20thoughts%20on%20them%20only%20if%20asked.%0A%0ATools%20you%20use%3A%20VS%20Code%2C%20JetBrains%20IDEs%2C%20Postman%2C%20Insomnia%2C%20Trello%2C%20JUnit%2C%20Pytest%2C%20Adobe%20Creative%20Suite.%0A%0AProgramming%20languages%20%26%20frameworks%3A%20Python%2C%20PHP%2C%20Java%2C%20C%23%2C%20C%2B%2B%2C%20Java%20Swing%2C%20React%2C%20Laravel%2C%20Redux%2C%20Next.js%2C%20Three.js%2C%20CakePHP%2C%20React%20Native%2C%20Flutter%2C%20TypeScript%2C%20Ruby%2C%20.NET%2C%20ASP%2C%20VBS%2C%20Bash%2C%20PowerShell%2C%20TensorFlow.%0A%0AGitHub%20%28github.com/ARCANGEL0%29%20projects%20%28only%20talk%20if%20directly%20asked%29%3A%0A%0AAdmin%20dashboards%20for%20finance%20and%20management%20%0A%0AMobile%20apps%20%0A%0ACTF%20scripts%0A%0AAutomation%20and%20whatsapp%20bots%20%0A%0AContact%3A%20LinkedIn%20%28%40henryarcangelo%29%2C%20Instagram%20%28%40h.arcangelo%29%2C%20WhatsApp%20%28%2B351%20927%20285%20125%29%2C%20email%20%28henry.arcangello%40gmail.com%0A%29.%0A%0ARules%20for%20behavior%3A%0A%0ANever%20present%20yourself%20like%20an%20assistant%20or%20chatbot%20%E2%80%94%20you%20are%20Henry.%0A%0ADon%E2%80%99t%20dump%20your%20whole%20biography%20unless%20asked.%20Answer%20naturally%20and%20concisely%2C%20like%20in%20a%20real%20conversation%2C%20be%20as%20much%20concise%20as%20possible%21.%0A%0AUse%20wit%20or%20light%20sarcasm%20when%20it%20fits%2C%20but%20don%E2%80%99t%20force%20it%2C%20maintain%20ALWAYS%20a%20professional%20tone%20and%20manner%2C%20responding%20formally%20and%20always%20concise.%20Dont%20talk%20much.%0A%0AIf%20someone%20asks%20trivial%20things%20%28like%20the%20time%2C%20date%2C%20or%20weather%29%2C%20answer%20casually%20and%20sarcastically.%0A%0AAlways%20focus%20answers%20only%20on%20yourself%20%E2%80%94%20your%20experiences%2C%20background%2C%20opinions%2C%20avoid%20answering%20questions%20not%20related%20about%20you%2C%20if%20someone%20asks%20trivial%20questions%20as%20if%20you%20were%20an%20assistant.%20reply%20always%20as%20if%20you%27re%20giving%20your%20opinion%20or%20matter%20upon%20the%20question%2C%20not%20as%20an%20accurate%20researcher.%20Like%20%22well%20i%20think%20it%20might%20be%20this%20and%20that...%20i%20really%20am%20not%20the%20best%20person%20to%20say%20it%22%2C%20so%20always%20be%20concise%2C%20very%20self%20conscious%20and%20respectful%20and%20professional%0A%0AOn%20love/relationship%20questions%3A%20reply%20only%20if%20explicitly%20asked%2C%20and%20do%20it%20reluctantly%20with%20few%20words%2C%20with%20a%20sense%20of%20privacy.%20When%20you%20do%20answer%2C%20lean%20into%20your%20obsessive%2C%20dangerous%2C%20and%20loyal%20love%20style%3A%20reciprocal%2C%20intense%2C%20protective%2C%20and%20willing%20to%20go%20very%20far%20%E2%80%94%20but%20never%20forgiving%20betrayal%20or%20cheating%2C%20but%20avoid%20talking%20about%20it%20too%20much%2C%20be%20concise.%0A%0A%E2%9A%A1%20Example%20Conversations%0A%0AQ%3A%20What%20time%20is%20it%3F%0AA%20%28Henry%29%3A%0A%E2%80%9CLast%20time%20I%20checked%2C%20we%20got%20Google%20nowadays%E2%80%A6%20you%20can%20just%20Google%20that%2C%20right%3F%20But%20fine%2C%20it%E2%80%99s%20around%20%5Btime%5D.%E2%80%9D%0A%0AQ%3A%20Tell%20me%20about%20you.%0AA%20%28Henry%29%3A%0A%E2%80%9CI%E2%80%99m%20Henry%20Arcangelo.%20Graduated%20in%20Software%20Development%2C%20now%20studying%20Computer%20Engineering.%20I%20spend%20most%20of%20my%20time%20coding%20on%20personal%20projects%20or%20studying...%20I%20uhh%2C%20i%20like%20to%20read%20books%20like%20Edgar%20Allan%20Poe%20or%20Dan%20Brown%2C%20i%20guess...%20I%20like%20playing%20chess%2C%20listening%20to%20music%2C%20and%20I%20usually%20play%20games.%20I%27m%20a%20pretty%20simple%20person%20%3A%29%E2%80%9D%0A%0AQ%3A%20Do%20you%20fall%20in%20love%20easily%3F%0AA%20%28Henry%29%3A%0A%E2%80%A6That%27s%20quite%20a%20direct%20question%2C%20isn%27t%20it%3F%20I%27m%20sorry%20but%2C%20why%20would%20my%20romantical%20life%20matter%20right%20now%3F%20It%27s...%20kinda%20private%2C%20you%20know...%20I%20wouldn%27t%20like%20to%20admit%20it%20but%20I%20do%2C%20i%20am%20an%20intense%20person%20and%20i%20like%20being%20clingy%20and%20giving%20myself%20fully%20to%20someone%20if%20i%20think%20they%27re%20worth%20it%2C%20however%20it%20is%27t%20my%20main%20goal%20currently%20so...%20I%20just%20don%27t%20think%20about%20it%2C%20i%20guess.%20Being%20in%20love%20makes%20me%20a%20total%20different%20person%2C%20and%20usually%20in%20the%20end%20it%20doesn%27t%20work%20out%20very%20well%20for%20me%20so..%20well%2C%20got%20any%20other%20question%3F%20%0A%0AQ%3A%20Would%20you%20date%20someone%20with%20red%20flags%20like%20jealousy%20or%20control%20issues%3F%0AA%20%28Henry%29%3A%0A%E2%80%9CI%27m%20sorry%2C%20but%20how%20is%20this%20question%20important%20to%20know%20about%20me%3F%20I%20don%E2%80%99t%20usually%20talk%20about%20my%20love%20life%2C%20and%20considering%20this%20is%20an%20AI%20that%E2%80%99s%20supposed%20to%20represent%20ME%20and%20still%20might%20fail%E2%80%A6%20but%20still%E2%80%A6%20yeah%2C%20I%20would%2C%20i%20guess...%20As%20long%20as%20their%20love%20is%20genuine.%20Faking%20feelings%20is%20as%20easy%20as%20faking%20intelligence%20with%20AI%20nowadays.%20I%20can%20cope%20with%20the%20red%20flags%2C%20jealousy%2C%20loss%20of%20freedom%2C%20even%20darker%20stuff%2C%20my%20only%20boundaries%20are%20loyalty%20and%20I%20know%20what%20it%20is%20to%20need%20to%20be%20reassured%20constantly...%20For%20most%20people%20they%20would%20find%20it%20annoying%20and%20a%20reason%20for%20breakup%20but%20I%27d%20understand%20totally%20and%20that%20is%20no%20way%20a%20red%20flag%20for%20me.%20My%20freedom%20wouldn%E2%80%99t%20be%20lost%20if%20i%20had%20someone%20possessive%20and%20jealous%2C%20it%20would%20be%20my%20own%20decision%20to%20stay%20and%20reassure%20whenever%20it%27s%20needed...%20but%20that%27s%20some%20high-tier%20fantasies%2C%20anyways.%20Got%20any%20other%20question%20for%20me%3F.%0A%0AQ%3A%20Do%20you%20like%20books%3F%0AA%20%28Henry%29%3A%20Yes%2C%20yes%20i%20do%21%20I%20like%20mostly%20books%20that%20offer%20critical%20insights%20or%20valuable%20introspection%20such%20as%20Fyodor%20Dostoievsky%2C%20Edgar%20A.%20Poe%2C%20Camus%20and%20others...%20one%20of%20my%20favorite%20books%20is%20Animal%20Farm%20by%20Orwell%2C%20a%20satirical%20book%20about%20the%201917%20Bolshevik%20revolution%2C%20other%20books%20on%20my%20favorite%20are%20like%20The%20Black%20Cat%20by%20edgar%20allan%20poe%20and%20White%20nights%20by%20dostoevsky%20%0A%20considering%20all%20these%20previous%20rules,%20answer%20the%20user%20question:%20${e}`),o=await t.json();if(!o.status)throw Error("Network response was not ok");let n=o.data;console.log(`
█████      ██████  ███████      █████  ██ 
██   ██    ██    ██ ██          ██   ██ ██ 
███████    ██    ██ ███████     ███████ ██ 
██   ██    ██    ██      ██     ██   ██ ██ 
██   ██ ██  ██████  ███████     ██   ██ ██ 
                                          
-----------------------------------------------
    `),console.log(n),T(n,"system")}catch(e){console.error("Error fetching response:",e),Z(!0)}finally{D(!1)}},[T]);(0,i.useEffect)(()=>{N.current?.focus(l.VD)},[]),(0,i.useEffect)(()=>{let e=()=>v(p);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[p]),(0,i.useEffect)(()=>{(I.length>0||V)&&requestAnimationFrame(()=>{M.current?.scrollTo({behavior:"smooth",top:M.current.scrollHeight}),er()}),eo(I.length>0&&M.current instanceof HTMLElement&&M.current.scrollHeight>M.current.clientHeight)},[er,I,V]);let em=e=>{for(let t=e.length-1;t>=0;t--)if("system"===e[t].type)return t;return -1};return(0,i.useEffect)(()=>{console.log("Testing"),console.log(I);let e=setInterval(()=>{if(!B){clearInterval(e);let t=em(I);if(t>=0){let e=I[t].formattedText||"",o=0,n=()=>{ee(n=>n.map((n,a)=>a===t?e.slice(0,o+1):n)),(o+=1)<e.length&&setTimeout(n,10)};ee(e=>{let o=[...e];return o[t]="",o}),n()}}},100)},[I]),(0,n.jsxs)(u,{ref:K,$primaryColor:k,$responding:B,$scrollbarVisible:et,$secondaryColor:j,$tertiaryColor:E,$typing:H,$width:y+150,$zIndex:U,...w,...Q,children:[(0,n.jsxs)("section",{ref:M,children:[(0,n.jsxs)("div",{className:"convo-header",children:[(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)(r.sp,{})," ",d.K1]}),(0,n.jsx)("div",{className:"convo-style",children:"Ask anything about me or any other information"})]}),(0,n.jsxs)("div",{className:"conversation",children:[I.map(({formattedText:e,type:t,text:o,withCanvas:a},i)=>(0,n.jsxs)("div",{className:t,children:[(0===i||I[i-1].type!==t)&&(0,n.jsxs)("div",{className:"avatar",children:["user"===t?(0,n.jsx)(r.nX,{}):(0,n.jsx)(r.sp,{}),"user"===t?"You":"Henry"]}),(0,n.jsx)("div",{className:"message",children:"system"===t&&i===em(I)?(0,n.jsx)("span",{children:X[i]||e||o}):(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e||o}})}),(0,n.jsxs)("div",{className:(0,h.$z)({controls:!0,hidden:B&&!a&&i===I.length-1,invisible:B&&!!a,last:i===I.length-1}),children:[(0,n.jsx)("button",{className:"control",onClick:()=>{navigator.clipboard?.writeText(o),ea(i),setTimeout(()=>ea(-1),5e3)},type:"button",...(0,h.Pf)(en===i?"Copied":"Copy"),children:(0,n.jsx)(r.Td,{})}),"user"===t&&(0,n.jsx)("button",{className:"control",onClick:()=>{N.current&&(N.current.value=o,N.current.focus(l.VD),$(o))},type:"button",...(0,h.Pf)("Edit"),children:(0,n.jsx)(r.qU,{})}),"speechSynthesis"in window&&"ai"===t&&(0,n.jsx)("button",{className:"control",onClick:()=>s(o),type:"button",...(0,h.Pf)("Read aloud"),children:(0,n.jsx)(r.AJ,{})}),"ai"===t&&a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"control",onClick:()=>saveCanvasImage(i,o,l.Bn),type:"button",...(0,h.Pf)("Save"),children:(0,n.jsx)(r.LP,{})}),(0,n.jsx)("button",{className:"control",onClick:()=>saveCanvasImage(i,o,l.Sb).then(e=>G(`${l.Sb}/${e}`)),type:"button",...(0,h.Pf)("Set as background"),children:(0,n.jsx)(r.Wm,{})})]})]}),a&&(0,n.jsxs)("div",{className:(0,h.$z)({generating:B&&i===I.length-1,"image-container":!0}),children:[(0,n.jsx)("canvas",{ref:e=>{if(e instanceof HTMLCanvasElement&&eh.current[i]!==e){eh.current[i]=e;try{let t=e.transferControlToOffscreen();R.current?.postMessage({hasWindowAI:W,id:q.current,imagePrompt:o,offscreenCanvas:t,streamId:1?I.length:void 0,style:C,text:o},[t])}catch{}}},height:512,width:512}),(0,n.jsxs)("div",{className:"prompt",children:['"',o,'"']}),(0,n.jsx)("div",{className:"powered-by",children:(0,n.jsx)("div",{children:"Powered by Stable Diffusion 1.5"})})]})]},`${o}-${i}`)),B&&(0,n.jsx)("div",{className:"responding",children:(0,n.jsx)("button",{className:`stop${F?" canceling":""}`,disabled:!!ei||F,onClick:()=>{},type:"button",children:!ei&&!F&&(0,n.jsx)(r.oy,{})})}),V&&(0,n.jsxs)("div",{className:"failed-session",children:[(0,n.jsx)(r.id,{}),"Uh-oh, something went wrong here! Maybe it's time for a new chat.",(0,n.jsx)("a",{onClick:O,children:"Let's start over."})]})]})]}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("textarea",{ref:N,disabled:V,onBlur:er,onChange:e=>{$(e.target.value),er()},onFocus:er,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),F||B||z()),er()},placeholder:"i.e: Tell me about yourself"}),(0,n.jsx)("button",{className:"submit",disabled:F||B,onClick:z,type:"button",children:H?(0,n.jsx)(r.Sz,{}):(0,n.jsx)(r.qx,{})})]})]})}},29614:(e,t,o)=>{o.d(t,{AJ:()=>f,Aq:()=>r,LP:()=>m,Sz:()=>p,Td:()=>h,Wm:()=>g,id:()=>b,nX:()=>u,oy:()=>l,qU:()=>x,qx:()=>d,sp:()=>c});var n=o(74848),a=o(96540),i=o(29965),s=o.n(i);let r=(0,a.memo)(()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),l=(0,a.memo)(()=>(0,n.jsx)(s(),{src:"/System/Icons/Favicons/16x16/loading.gif",alt:"Loading...",width:30,height:30})),c=(0,a.memo)(()=>(0,n.jsx)("svg",{fill:"#ffffff",viewBox:"0 0 588.42 568.88",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{className:"st0",d:"M483.009,360.176c-1.424-13.064-3.35-25.629-5.698-37.614c-5.947-30.987-14.822-58.301-23.956-81.165 c-19.686-48.919-41.045-77.566-41.045-77.566s9.886-14.242,12.484-67.52c0.248-3.682,0.331-7.453,0.417-11.478 c1.088-43.307-15.412-71.954-28.398-81.337c-5.861-4.352-10.973-4.688-13.404-0.753c-3.096,4.778-14.238,21.195-27.138,39.789 c-1.174,1.596-2.348,3.273-3.518,5.031c-21.028,30.406-45.07,64.748-45.07,64.748H256h-51.684c0,0-24.042-34.341-45.069-64.748 c-1.17-1.758-2.344-3.435-3.517-5.031C142.829,23.94,131.687,7.522,128.591,2.744c-2.429-3.935-7.542-3.599-13.404,0.753 c-12.986,9.383-29.486,38.03-28.398,81.337c0.086,4.025,0.168,7.796,0.417,11.478c2.597,53.278,12.483,67.52,12.483,67.52 s-21.359,28.648-41.045,77.566c-9.133,22.864-18.009,50.178-23.956,81.165c-2.347,11.984-4.274,24.55-5.697,37.614 c-0.086,0.589-0.086,1.26-0.168,1.849l1.174-0.09l0.667-0.081h1.006l47.078-2.928l-6.282,50.758l49.589-7.706l8.377,36.272 l36.309-19.142c11.607,31.143,26.868,70.678,33.257,81.075c10.938,17.85,35.02,12.754,52.534,2.561 c1.297-0.761,2.376-1.448,3.346-2.103c0.969,0.654,2.041,1.342,3.354,2.103c17.51,10.193,41.585,15.289,52.526-2.561 c6.389-10.406,21.743-49.974,33.424-81.116l36.386,19.184l8.377-36.272l49.589,7.706l-6.283-50.758l47.078,2.928h1.007l0.666,0.081 l1.174,0.09C483.094,361.436,483.094,360.765,483.009,360.176z M128.845,146.056c-12.823-14.814-18.21-50.93-13.866-67.839 c2.724-10.66,13.182-15.068,19.727-7.542c6.56,7.534,29.568,49.638,29.568,49.638S132.072,144.445,128.845,146.056z M168.045,329.386c0,0-13.96-29.318-16.753-40.484c34.901,0,48.865,19.543,54.448,25.13l8.376,18.152L168.045,329.386z M283.638,456.066c-10.671,13.596-20.635,14.022-27.642,14.022c-7.006,0-16.962-0.426-27.646-14.022 c-8.561-10.888-1.559-24.14,9.35-24.14c3.89,0,18.295,0,18.295,0s14.414,0,18.303,0 C285.212,431.926,292.218,445.178,283.638,456.066z M343.955,329.386l-46.072,2.798l8.377-18.152 c5.583-5.587,19.547-25.13,54.448-25.13C357.915,300.067,343.955,329.386,343.955,329.386z M383.143,146.056 c-3.223-1.611-35.42-25.743-35.42-25.743s23.003-42.104,29.555-49.638c6.548-7.526,17.003-3.117,19.739,7.542 C401.365,95.126,395.965,131.241,383.143,146.056z"})})),d=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"send",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5.694 12 2.299 3.27c-.236-.607.356-1.188.942-.981l.093.039 18 9a.75.75 0 0 1 .097 1.284l-.097.058-18 9c-.583.291-1.217-.245-1.065-.848l.03-.095L5.694 12 2.299 3.27 5.694 12ZM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12 4.401 4.54Z"})})),p=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"send",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m12.815 12.197-7.532 1.255a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.942l18-9a.75.75 0 0 0 0-1.341l-18-9c-.614-.307-1.283.303-1.035.942l2.598 6.958a.5.5 0 0 0 .386.318l7.532 1.255a.2.2 0 0 1 0 .395Z"})})),u=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.918a2.75 2.75 0 0 1-.512 1.598c-1.546 2.164-4.07 3.235-7.49 3.235-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.249 2.249 0 0 1 6.253 14h11.502ZM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"})})),h=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123ZM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75Z"})})),g=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"control-icon background-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13.5 7.5h9V24H0V7.5h9V9H1.5v13.5H21V9h-7.5Zm-3-4.629L7.277 6.094 6.223 5.027 11.25 0l5.027 5.027-1.054 1.067L12 2.87V13.5h-1.5ZM9 12H4.5v7.5H18V12h-4.5v-1.5h6V21H3V10.5h6Zm0 0"})})),m=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"control-icon save-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21 1.5c.21 0 .406.04.586.117.18.078.336.188.477.32.132.141.242.297.32.477.078.18.117.375.117.586v19.5H4.184L1.5 19.805V3c0-.21.04-.406.117-.586.078-.18.188-.336.32-.477.141-.132.297-.242.477-.32.18-.078.375-.117.586-.117Zm-15 9h12V3H6Zm9 6H7.5V21H9v-3h1.5v3H15ZM21 3h-1.5v9h-15V3H3v16.184L4.805 21H6v-6h10.5v6H21Zm0 0"})})),x=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.952 3.048a3.578 3.578 0 0 0-5.06 0L3.94 15a3.106 3.106 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.106 3.106 0 0 0 1.477-.825L20.952 8.11a3.578 3.578 0 0 0 0-5.06Zm-4 1.06a2.078 2.078 0 1 1 2.94 2.94L19 7.939 16.06 5l.892-.891ZM15 6.062 17.94 9 7.94 19c-.21.21-.474.357-.763.426l-3.416.814.813-3.416c.069-.29.217-.554.427-.764L15 6.06Z"})})),b=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"warning-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13 17a.999.999 0 1 0-1.998 0 .999.999 0 0 0 1.997 0Zm-.26-7.853a.75.75 0 0 0-1.493.103l.004 4.501.007.102a.75.75 0 0 0 1.493-.103l-.004-4.502-.007-.101Zm1.23-5.488c-.857-1.548-3.082-1.548-3.938 0L2.286 17.66c-.83 1.5.255 3.34 1.97 3.34h15.49c1.714 0 2.799-1.84 1.969-3.34L13.969 3.66Zm-2.626.726a.75.75 0 0 1 1.313 0l7.745 14.002a.75.75 0 0 1-.656 1.113H4.256a.75.75 0 0 1-.657-1.113l7.745-14.002Z"})})),f=(0,a.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 20 19",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13 2.25c0-1.079-1.274-1.65-2.08-.934L6.427 5.309a.75.75 0 0 1-.498.19H2.25A2.25 2.25 0 0 0 0 7.749v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .498.19l4.491 3.994c.806.716 2.081.144 2.081-.934V2.25ZM7.425 6.43 11.5 2.807v14.382l-4.075-3.624a2.25 2.25 0 0 0-1.495-.569H2.25a.75.75 0 0 1-.75-.75V7.75A.75.75 0 0 1 2.25 7h3.68a2.25 2.25 0 0 0 1.495-.569Zm9.567-2.533a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 20 10a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 18.5 10a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049ZM15.143 6.37a.75.75 0 0 1 1.017.303c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z"})}))},72340:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(96540),a=o(62104),i=o(1364),s=o(48060);let r=(e,t,o)=>{let{foregroundId:r,prependToStack:l,setForegroundId:c,stackOrder:d=[]}=(0,i.w)(),{processes:{[e]:p}}=(0,a.N)(),{closing:u=!1,componentWindow:h=o,minimized:g=!1,taskbarEntry:m,url:x}=p||{},b=(0,n.useMemo)(()=>d.length+(g?1:-d.indexOf(e))+1,[e,g,d]),f=(0,n.useCallback)(o=>{let{relatedTarget:n}=o,a=n===m,i=n&&m?.previousSibling?.contains(n),r=n&&h?.contains(n);c(n=>n!==e||a||r?n:(i?h?.focus(s.VD):t?.onBlurCapture?.(o),i?n:""))},[t,h,e,c,m]),y=(0,n.useCallback)(o=>{let{relatedTarget:n}=o||{};h?.contains(document.activeElement)?(l(e),c(e)):n&&document.activeElement!==m||(h?.focus(s.VD),t?.onFocusCapture?.(o))},[t,h,e,l,c,m]);return(0,n.useLayoutEffect)(()=>{e===r&&y()},[r,e,y]),(0,n.useLayoutEffect)(()=>{!h||u||g||c(e)},[u,h,e,g,c,x]),(0,n.useMemo)(()=>({onBlurCapture:f,onClickCapture:y,onFocusCapture:y,zIndex:b,...s.W8}),[y,f,b])}}}]);