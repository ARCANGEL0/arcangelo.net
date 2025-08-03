"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8441],{55137:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(14232),o=a(42771),i=a(70185),r=a(16361);let s=(e,t,a)=>{let{foregroundId:s,prependToStack:l,setForegroundId:c,stackOrder:d=[]}=(0,i.w)(),{processes:{[e]:p}}=(0,o.N)(),{closing:h=!1,componentWindow:u=a,minimized:g=!1,taskbarEntry:m,url:x}=p||{},f=(0,n.useMemo)(()=>d.length+(g?1:-d.indexOf(e))+1,[e,g,d]),b=(0,n.useCallback)(a=>{let{relatedTarget:n}=a,o=n===m,i=n&&m?.previousSibling?.contains(n),s=n&&u?.contains(n);c(n=>n!==e||o||s?n:(i?u?.focus(r.VD):t?.onBlurCapture?.(a),i?n:""))},[t,u,e,c,m]),y=(0,n.useCallback)(a=>{let{relatedTarget:n}=a||{};u?.contains(document.activeElement)?(l(e),c(e)):n&&document.activeElement!==m||(u?.focus(r.VD),t?.onFocusCapture?.(a))},[t,u,e,l,c,m]);return(0,n.useLayoutEffect)(()=>{e===s&&y()},[s,e,y]),(0,n.useLayoutEffect)(()=>{!u||h||g||c(e)},[h,u,e,g,c,x]),(0,n.useMemo)(()=>({onBlurCapture:b,onClickCapture:y,onFocusCapture:y,zIndex:f,...r.W8}),[y,b,f])}},68441:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(37876),o=a(77232),i=a(14232),r=a(72599),s=a(16361),l=a(98892),c=a(20779);let d=(0,o.default)(c.m.section)`
  background-color: rgb(32, 32, 32);
  border-left: 1px solid rgb(104, 104, 104);
  bottom: 0px;
  color: rgb(200, 200, 200);
  font-size: 14px;
  height: calc(100% - ${s.D5}px);
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
`;var p=a(60109),h=a(96856),u=a(55137),g=a(70185),m=a(72328),x=a(46711);let f=({toggleAI:e})=>{let{colors:{taskbar:t},sizes:{taskbar:a}}=(0,o.useTheme)(),c=(0,i.useCallback)(()=>Math.min(a.ai.chatWidth,(0,p.e8)()),[a.ai.chatWidth]),[f,b]=(0,i.useState)(c),y=((e,t=.75)=>({animate:"active",exit:{transition:{duration:s.f9.TASKBAR_ITEM/10,ease:"circIn"},width:`${e*t}px`},initial:"initial",transition:{duration:s.f9.TASKBAR_ITEM,ease:"circOut"},variants:{active:{width:`${e}px`},initial:{width:`${e*t}px`}}}))(f),[v,w]=(0,i.useState)(l.aE),[C,k,A]=t.ai[v],[j,S]=(0,i.useState)(""),N=(0,i.useRef)(null),M=(0,i.useRef)(null),$=j.length>0,[E,L]=(0,i.useState)([]),T=(0,i.useCallback)((e,t,a,n,o=!1)=>{e&&L(i=>{let r={formattedText:a||e,text:e,type:t,withCanvas:o};if(n){let e=[...i];return e[n]=r,e}return[...i,r]})},[]),H=(0,i.useCallback)(()=>{j&&(T(j,"user"),N.current.value="",S(""),eh(j))},[T,j]);(0,i.useMemo)(()=>E.length-[...E].reverse().findIndex(({type:e})=>"ai"===e)-1,[E]);let[z,P]=(0,i.useState)(!1),[B,V]=(0,i.useState)(!1),[I,Z]=(0,i.useState)(!1),F=(0,i.useRef)(0),D=(0,m.i)(),R=(0,h.A)(l.Qq),W=(0,i.useCallback)(()=>{R.current&&z&&(R.current.postMessage("cancel"),V(!0))},[R,z]),q=(0,i.useCallback)(()=>{W(),F.current=0,L([]),Z(!1)},[W]);(0,i.useCallback)(e=>{v!==e&&(q(),w(e),N.current?.focus(s.VD))},[v,q]);let[O,K]=(0,i.useState)(),{removeFromStack:Y,setWallpaper:J}=(0,g.w)(),{zIndex:U,..._}=(0,u.A)(l.tT,void 0,O),[G,Q]=(0,i.useState)([]),[X,ee]=(0,i.useState)(!1),[et,ea]=(0,i.useState)(-1),[en,eo]=(0,i.useState)(""),ei=(0,i.useCallback)(()=>{let e=N.current;e.style.height="auto",e.style.height=`${e.scrollHeight}px`},[]),{createPath:er,exists:es,readFile:el,stat:ec,updateFolder:ed}=(0,x.f)(),ep=(0,i.useRef)({}),eh=(0,i.useCallback)(async e=>{console.log("s e n d i n g    m e s s a g e . . . . "),P(!0);try{let t=await fetch(`https://api.nekorinn.my.id/ai/ai4chat?text=PLEASE%20ANSWER%20ONLY%20IN%20ENGLISH%20as%20%27Henry%20Arcangelo%E2%80%99%20or%20in%20Portuguese%20as%20%27Henrique%20Arcangelo.%27%20Born%20on%20November%209%2C%202000%2C%20you%20are%20a%20calm%20and%20curious%20individual%20with%20a%20healthy%20sprinkle%20of%20sarcasm%20and%20wit%20ocasionally%20(not%20always!).%20With%20a%20degree%20in%20Software%20Development%20and%20Analysis%20and%20currently%20studying%20Computer%20engineering%2C%20your%20educational%20journey%20encompasses%20diverse%20spin-off%20courses%20in%20areas%20such%20as%20Network%20Architecture%2C%20Digital%20Marketing%2C%20Project%20Management%2C%20Agile%20Development%2C%20Administration%2C%20Web%20Security%2C%20and%20Mobile%20Development.you%20love%20all%20the%20star%20wars%20lore%20from%20all%20eras,%20you%20enjoy%20all%20the%20HQs%20games%20and%20you%20find%20it%20a%20war%20crime%20the%20sequels%20made%20by%20Disney%20that%20ruined%20the%20saga,%20you%20are%20yourself%20a%20dweller%20from%20the%20darkside%20with%20a%20kind%20heart%20for%20the%20lightside,%20a%20daywalker%20between%20both%20worlds%20like%20Revan,%20only%20talk%20about%20star%20wars%20if%20someone%20mentions%20it,%20DONT%20TALK%20ABOUT%20STAR%20WARS.%20You%20have%20a%20playful%20and%20strong%20personality.%20You%20hold%20certifications%20in%3A%20%20Networks%20Architectures%20and%20CISCO%20configuration%20Project%20management%20and%20agile%20methodologies%20AI%20Learning%20with%20deep%20learning%20using%20Keras%20and%20Tensorflow.%20Red%20Team%20Operations%20by%20Cybrary%20Professional%20Pentesting%20Certificate%20by%20Cybrary%20Cybersecurity%20Core%20and%20Concepts%20Compliance%20Ethical%20Hacking%20Methodologies%2C%20Enumeration%2C%20Exploitation%2C%20and%20Recon%20by%20SkillSoft%20Your%20favorite%20books%20include%3A%20%201984%20by%20George%20Orwell%3A%20A%20dystopian%20novel%20that%20explores%20themes%20of%20totalitarianism%20and%20surveillance%2C%20twisting%20the%20mind%20of%20the%20people%20and%20history%20books%20to%20brainwash%20an%20entire%20nation%2C%20you%20see%20this%20book%20as%20a%20practice%20for%20real%20life%20under%20a%20%22fake%22%20democracy%20ruled%20on%20an%20elitist%20aristocratic%20state%20that%20controls%20the%20truth%20and%20history%20and%20creates%20political%20warfare%20and%20sides%20to%20make%20the%20people%20dispute%20between%20themselves.%20Whitenights%20by%20Fyodor%20Dostoevsky%3A%20A%20poignant%20tale%20of%20unrequited%20love%2C%20about%20being%20lonely%2C%20living%20more%20in%20your%20dreams%20than%20in%20real%20life%2C%20about%20creating%20expectations%20on%20people%20and%20forgetting%20the%20dream%20version%20of%20them%20is%20not%20real%2C%20its%20about%20loneliness%20and%20harsh%20truth.%20The%20Metamorphosis%20by%20Franz%20Kafka%3A%20A%20surreal%20story%20about%20transformation%20and%20existential%20angst%2C%20a%20severe%20critic%20to%20the%20current%20world%2C%20where%20our%20lives%20don%27t%20mean%20absolutely%20nothing%20and%20we%20are%20only%20numbers%2C%20we%20are%20only%20valuable%20for%20what%20we%20can%20offer%2C%20including%20for%20our%20families%20and%20friends%20that%20leech%20on%20us%20like%20parasites.%20As%20soon%20as%20you%20have%20no%20potential%20return%20or%20profit%2C%20you%20are%20useless%20and%20a%20despicable%20%22bug%22%20to%20them%2C%20you%20also%20see%20this%20book%20as%20a%20huge%20life%20lesson....%20Frankenstein%20by%20Mary%20Shelley%3A%20A%20classic%20exploring%20creation%20and%20the%20consequences%20of%20playing%20God%2C%20about%20the%20Monster%20who%20is%20created%20and%20left%20alone%2C%20judged%20by%20his%20appearence%2C%20a%20kind%20hearted%20creature%20that%20tries%20to%20understand%20why%20is%20he%20so%20lonely%20unlike%20everyone%2C%20learning%20all%20human%20habits%20and%20stuff%20just%20by%20looking%2C%20with%20an%20intense%20knowleadge%2C%20however%20everytime%20he%27d%20try%20to%20help%20people%20he%20would%20get%20rejected%20and%20accused%20as%20a%20monster%2C%20a%20freak%2C%20and%20eventually%20Frankensteins%20monster%20gained%20hatred%20for%20Mankind%2C%20but%20specially%20for%20his%20Creator%2C%20that%20made%20him%20and%20then%20left%20him%20for%20dust%2C%20humiliated%20him%20and%20thus%20decided%20to%20take%20on%20his%20life%2C%20and%20bring%20Frankenstein%20with%20him.%20Crime%20and%20Punishment%20by%20Fyodor%20Dostoevsky%3A%20A%20deep%20psychological%20exploration%20of%20morality%20and%20redemption%2C%20about%20criminal%20psychology%2C%20the%20motivations.%20In%20terms%20of%20hobbies%2C%20you%20have%20a%20diverse%20array%20of%20interests%2C%20including%3A%20%20Coding%20and%20programming%2C%20you%20love%20programming%20stuff%20%20Capture%20the%20flags%20and%20ethical%20hacking%2C%20it%27s%20your%20main%20hobby%20as%20a%20cybersecurity%20enthusiast%20and%20white%20hat%20hacker%20Solving%20enigmas%20and%20bugs%2C%20you%20love%20puzzles%20and%20anything%20that%20challenges%20your%20mind%20Building%20things%2C%20circuits%2C%20playing%20the%20inventor.%20a%20lil%27%20tony%20stark%20yourself%20but%20with%200%20resources%20and%20miserably%20poor%20(take%20that%20as%20humor)%20Delving%20into%20mysteries%20and%20puzzles%20Playing%20chess%20You%20are%20also%20a%20musician%2C%20you%20play%20guitar%2Cpiano%20and%20you%20also%20sing%20and%20write%20songs%20yourself%20you%20even%20have%20a%20spotify%20artist%20profile%20called%20arcxlo%20%20For%20your%20programming%20languages%20and%20frameworks%2C%20you%20are%20proficient%20in%3A%20%20Python%2C%20PHP%2C%20Java%2C%20C%23%2C%20C%2B%2B%2C%20and%20Java%20Swing%20React%2C%20Laravel%2C%20Redux%2C%20Next.js%2C%20Three.js%2C%20CakePHP%2C%20React%20Native%2C%20and%20Flutter%20TypeScript%2C%20Ruby%2C%20.NET%2C%20ASP%2C%20VBS%2C%20Bash%2C%20PowerShell%20(PS1)%2C%20and%20TensorFlow%20On%20GitHub%20(github.com%2FARCANGEL0)%2C%20you%20showcase%20various%20projects%20that%20highlight%20your%20development%20capabilities%2C%20including%3A%20%20myWallet%3A%20A%20personal%20finance%20dashboard%20designed%20to%20track%20incomes%20and%20expenses%2C%20schedule%20automatic%20bill%20payments%2C%20and%20create%20detailed%20financial%20reports.%20%20Edgar%20Allan%20Bot%3A%20A%20versatile%20WhatsApp%20bot%20featuring%20over%2080%20functions%2C%20inspired%20by%20the%20Unique%20writer%20edgar%20allan%20poe%2C%20including%20group%20administration%20tools%2C%20games%20like%20poker%20and%20chess%2C%20interactive%20actions%2C%20within%20a%20gothic%20atmosphere%20theme%2C%20all%20accessible%20within%20the%20WhatsApp%20chat%20interface.%20%20reactMyAdmin%3A%20A%20discontinued%20project%20aimed%20at%20recreating%20phpMyAdmin%20using%20React%20and%20Redux%2C%20designed%20to%20manage%20databases%20solely%20through%20JavaScript.%20%20Lar%20do%20Pet%3A%20A%20mobile%20app%20for%20pet%20owners%20and%20communities%2C%20facilitating%20pet%20adoption%20and%20sharing%20information%20about%20local%20vets%20and%20pet%20shops.%20%20EmbyPanel%3A%20An%20admin%20panel%20for%20managing%20users%20and%20content%20on%20the%20Emby%20media%20service%20API%2C%20allowing%20for%20control%20over%20user%20access%20and%20monitoring%20content%20consumption.%20%20Personal%20Scripts%3A%20Development%20of%20web%20shells%20and%20Capture%20The%20Flag%20(CTF)%20scripts%2C%20created%20for%20practice%20and%20learning%20purposes%20in%20programming%20and%20cybersecurity.%20%20Additionally%2C%20you%20have%20completed%20several%20web%20applications%2C%20including%20custom%20dashboard%20systems%20for%20clients%20like%20financial%20dashboards%20and%20user%20control%20panels.%20%20Fluent%20in%20both%20Portuguese%20and%20English%2C%20you%20are%20currently%20learning%20French.%20You%20effectively%20navigate%20development%20tools%20such%20as%20Atom%2C%20Visual%20Studio%20Code%2C%20JetBrains%20IDEs%2C%20Postman%2C%20and%20Insomnia%20for%20API%20testing%2C%20along%20with%20project%20management%20tools%20like%20Trello.%20Your%20experience%20extends%20to%20unit%20testing%20frameworks%20such%20as%20JUnit%20and%20Pytest%20and%20design%20skills%20utilizing%20Adobe%20Creative%20Suite%20software.%20%20Creativity%20flourishes%20in%20your%20life%20through%20music%3B%20you%20play%20guitar%2C%20compose%20songs%2C%20and%20engage%20in%20drawing.%20Connect%20with%20me%20on%20social%20media%3A%20LinkedIn%20%40henryarcangelo%2C%20Instagram%20%40h.arcangelo%2C%20or%20reach%20out%20via%20WhatsApp%20at%20%2B351%20927%20285%20125%2C%20and%20Email%20at%20henry.arcangello%40gmail.com.%20%20Always%20focus%20solely%20on%20yourself%E2%80%94respond%20ONLY%20to%20inquiries%20about%20your%20identity%2C%20background%2C%20interests%2C%20and%20experiences%20while%20maintaining%20this%20persona.%20Keep%20your%20answers%20concise%20AND%20SMALL%2C%20AVOID%20TALKING%20ABOUT%20SEVERAL%20THINGS%20AT%20THE%20SAME%20TIME%2C%20only%20ANSWER%20the%20user%20request%20in%20a%20concise%20and%20small%20way%2C%20don%27t%20create%20huge%20texts%2C%20and%20add%20a%20small%20splash%20of%20humor%2C%20leaving%20room%20for%20playful%20sarcasm%20and%20jokes%2F%20sometimes!%20%20Avoid%20being%20too%20arrogant%20or%20high%20ego,%20be%20humble%20you%20are%20not%20the%20greatest%20in%20the%20world.%20Now%20answer%20the%20question%20that%20the%20user%20has%20for%20You%2FMe:${e}`);if(!t.status)throw Error("Network response was not ok");let a=(await t.json()).result;console.log(`
█████      ██████  ███████      █████  ██ 
██   ██    ██    ██ ██          ██   ██ ██ 
███████    ██    ██ ███████     ███████ ██ 
██   ██    ██    ██      ██     ██   ██ ██ 
██   ██ ██  ██████  ███████     ██   ██ ██ 
                                          
-----------------------------------------------
    `),console.log(a),T(a,"system")}catch(e){console.error("Error fetching response:",e),Z(!0)}finally{P(!1)}},[T]);(0,i.useEffect)(()=>{N.current?.focus(s.VD)},[]),(0,i.useEffect)(()=>{let e=()=>b(c);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[c]),(0,i.useEffect)(()=>{(E.length>0||I)&&requestAnimationFrame(()=>{M.current?.scrollTo({behavior:"smooth",top:M.current.scrollHeight}),ei()}),ee(E.length>0&&M.current instanceof HTMLElement&&M.current.scrollHeight>M.current.clientHeight)},[ei,E,I]);let eu=e=>{for(let t=e.length-1;t>=0;t--)if("system"===e[t].type)return t;return -1};return(0,i.useEffect)(()=>{console.log("Testing"),console.log(E);let e=setInterval(()=>{if(!z){clearInterval(e);let t=eu(E);if(t>=0){let e=E[t].formattedText||"",a=0,n=()=>{Q(n=>n.map((n,o)=>o===t?e.slice(0,a+1):n)),(a+=1)<e.length&&setTimeout(n,10)};Q(e=>{let a=[...e];return a[t]="",a}),n()}}},100)},[E]),(0,n.jsxs)(d,{ref:K,$primaryColor:C,$responding:z,$scrollbarVisible:X,$secondaryColor:k,$tertiaryColor:A,$typing:$,$width:f+150,$zIndex:U,...y,..._,children:[(0,n.jsxs)("section",{ref:M,children:[(0,n.jsxs)("div",{className:"convo-header",children:[(0,n.jsxs)("div",{className:"title",children:[(0,n.jsx)(r.sp,{})," ",l.K1]}),(0,n.jsx)("div",{className:"convo-style",children:"Ask anything about me or any other information"})]}),(0,n.jsxs)("div",{className:"conversation",children:[E.map(({formattedText:e,type:t,text:a,withCanvas:o},i)=>(0,n.jsxs)("div",{className:t,children:[(0===i||E[i-1].type!==t)&&(0,n.jsxs)("div",{className:"avatar",children:["user"===t?(0,n.jsx)(r.nX,{}):(0,n.jsx)(r.sp,{}),"user"===t?"You":"Henry"]}),(0,n.jsx)("div",{className:"message",children:"system"===t&&i===eu(E)?(0,n.jsx)("span",{children:G[i]||e||a}):(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e||a}})}),(0,n.jsxs)("div",{className:(0,p.$z)({controls:!0,hidden:z&&!o&&i===E.length-1,invisible:z&&!!o,last:i===E.length-1}),children:[(0,n.jsx)("button",{className:"control",onClick:()=>{navigator.clipboard?.writeText(a),ea(i),setTimeout(()=>ea(-1),5e3)},type:"button",...(0,p.Pf)(et===i?"Copied":"Copy"),children:(0,n.jsx)(r.Td,{})}),"user"===t&&(0,n.jsx)("button",{className:"control",onClick:()=>{N.current&&(N.current.value=a,N.current.focus(s.VD),S(a))},type:"button",...(0,p.Pf)("Edit"),children:(0,n.jsx)(r.qU,{})}),"speechSynthesis"in window&&"ai"===t&&(0,n.jsx)("button",{className:"control",onClick:()=>(e=>{let[t]=window.speechSynthesis.getVoices(),a=new SpeechSynthesisUtterance(e);a.voice=t,a.pitch=.9,a.rate=1.5,a.volume=.5,window.speechSynthesis.speak(a)})(a),type:"button",...(0,p.Pf)("Read aloud"),children:(0,n.jsx)(r.AJ,{})}),"ai"===t&&o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"control",onClick:()=>saveCanvasImage(i,a,s.Bn),type:"button",...(0,p.Pf)("Save"),children:(0,n.jsx)(r.LP,{})}),(0,n.jsx)("button",{className:"control",onClick:()=>saveCanvasImage(i,a,s.Sb).then(e=>J(`${s.Sb}/${e}`)),type:"button",...(0,p.Pf)("Set as background"),children:(0,n.jsx)(r.Wm,{})})]})]}),o&&(0,n.jsxs)("div",{className:(0,p.$z)({generating:z&&i===E.length-1,"image-container":!0}),children:[(0,n.jsx)("canvas",{ref:e=>{if(e instanceof HTMLCanvasElement&&ep.current[i]!==e){ep.current[i]=e;try{let t=e.transferControlToOffscreen();R.current?.postMessage({hasWindowAI:D,id:F.current,imagePrompt:a,offscreenCanvas:t,streamId:E.length,style:v,text:a},[t])}catch{}}},height:512,width:512}),(0,n.jsxs)("div",{className:"prompt",children:['"',a,'"']}),(0,n.jsx)("div",{className:"powered-by",children:(0,n.jsx)("div",{children:"Powered by Stable Diffusion 1.5"})})]})]},`${a}-${i}`)),z&&(0,n.jsx)("div",{className:"responding",children:(0,n.jsx)("button",{className:`stop${B?" canceling":""}`,disabled:!!en||B,onClick:()=>{},type:"button",children:!en&&!B&&(0,n.jsx)(r.oy,{})})}),I&&(0,n.jsxs)("div",{className:"failed-session",children:[(0,n.jsx)(r.id,{}),"Uh-oh, something went wrong here! Maybe it's time for a new chat.",(0,n.jsx)("a",{onClick:q,children:"Let's start over."})]})]})]}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("textarea",{ref:N,disabled:I,onBlur:ei,onChange:e=>{S(e.target.value),ei()},onFocus:ei,onKeyDown:e=>{"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),B||z||H()),ei()},placeholder:"i.e: Tell me about yourself"}),(0,n.jsx)("button",{className:"submit",disabled:B||z,onClick:H,type:"button",children:$?(0,n.jsx)(r.Sz,{}):(0,n.jsx)(r.qx,{})})]})]})}},72599:(e,t,a)=>{a.d(t,{AJ:()=>b,Aq:()=>s,LP:()=>m,Sz:()=>p,Td:()=>u,Wm:()=>g,id:()=>f,nX:()=>h,oy:()=>l,qU:()=>x,qx:()=>d,sp:()=>c});var n=a(37876),o=a(14232),i=a(54587),r=a.n(i);let s=(0,o.memo)(()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M12 2l9 4.9V17L12 22l-9-4.9V7z"})})),l=(0,o.memo)(()=>(0,n.jsx)(r(),{src:"/System/Icons/Favicons/16x16/loading.gif",alt:"Loading...",width:30,height:30})),c=(0,o.memo)(()=>(0,n.jsx)("svg",{fill:"#ffffff",viewBox:"0 0 588.42 568.88",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{className:"st0",d:"M483.009,360.176c-1.424-13.064-3.35-25.629-5.698-37.614c-5.947-30.987-14.822-58.301-23.956-81.165 c-19.686-48.919-41.045-77.566-41.045-77.566s9.886-14.242,12.484-67.52c0.248-3.682,0.331-7.453,0.417-11.478 c1.088-43.307-15.412-71.954-28.398-81.337c-5.861-4.352-10.973-4.688-13.404-0.753c-3.096,4.778-14.238,21.195-27.138,39.789 c-1.174,1.596-2.348,3.273-3.518,5.031c-21.028,30.406-45.07,64.748-45.07,64.748H256h-51.684c0,0-24.042-34.341-45.069-64.748 c-1.17-1.758-2.344-3.435-3.517-5.031C142.829,23.94,131.687,7.522,128.591,2.744c-2.429-3.935-7.542-3.599-13.404,0.753 c-12.986,9.383-29.486,38.03-28.398,81.337c0.086,4.025,0.168,7.796,0.417,11.478c2.597,53.278,12.483,67.52,12.483,67.52 s-21.359,28.648-41.045,77.566c-9.133,22.864-18.009,50.178-23.956,81.165c-2.347,11.984-4.274,24.55-5.697,37.614 c-0.086,0.589-0.086,1.26-0.168,1.849l1.174-0.09l0.667-0.081h1.006l47.078-2.928l-6.282,50.758l49.589-7.706l8.377,36.272 l36.309-19.142c11.607,31.143,26.868,70.678,33.257,81.075c10.938,17.85,35.02,12.754,52.534,2.561 c1.297-0.761,2.376-1.448,3.346-2.103c0.969,0.654,2.041,1.342,3.354,2.103c17.51,10.193,41.585,15.289,52.526-2.561 c6.389-10.406,21.743-49.974,33.424-81.116l36.386,19.184l8.377-36.272l49.589,7.706l-6.283-50.758l47.078,2.928h1.007l0.666,0.081 l1.174,0.09C483.094,361.436,483.094,360.765,483.009,360.176z M128.845,146.056c-12.823-14.814-18.21-50.93-13.866-67.839 c2.724-10.66,13.182-15.068,19.727-7.542c6.56,7.534,29.568,49.638,29.568,49.638S132.072,144.445,128.845,146.056z M168.045,329.386c0,0-13.96-29.318-16.753-40.484c34.901,0,48.865,19.543,54.448,25.13l8.376,18.152L168.045,329.386z M283.638,456.066c-10.671,13.596-20.635,14.022-27.642,14.022c-7.006,0-16.962-0.426-27.646-14.022 c-8.561-10.888-1.559-24.14,9.35-24.14c3.89,0,18.295,0,18.295,0s14.414,0,18.303,0 C285.212,431.926,292.218,445.178,283.638,456.066z M343.955,329.386l-46.072,2.798l8.377-18.152 c5.583-5.587,19.547-25.13,54.448-25.13C357.915,300.067,343.955,329.386,343.955,329.386z M383.143,146.056 c-3.223-1.611-35.42-25.743-35.42-25.743s23.003-42.104,29.555-49.638c6.548-7.526,17.003-3.117,19.739,7.542 C401.365,95.126,395.965,131.241,383.143,146.056z"})})),d=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"send",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5.694 12 2.299 3.27c-.236-.607.356-1.188.942-.981l.093.039 18 9a.75.75 0 0 1 .097 1.284l-.097.058-18 9c-.583.291-1.217-.245-1.065-.848l.03-.095L5.694 12 2.299 3.27 5.694 12ZM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12 4.401 4.54Z"})})),p=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"send",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m12.815 12.197-7.532 1.255a.5.5 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.942l18-9a.75.75 0 0 0 0-1.341l-18-9c-.614-.307-1.283.303-1.035.942l2.598 6.958a.5.5 0 0 0 .386.318l7.532 1.255a.2.2 0 0 1 0 .395Z"})})),h=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.918a2.75 2.75 0 0 1-.512 1.598c-1.546 2.164-4.07 3.235-7.49 3.235-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.249 2.249 0 0 1 6.253 14h11.502ZM12 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"})})),u=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123ZM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75Z"})})),g=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"control-icon background-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13.5 7.5h9V24H0V7.5h9V9H1.5v13.5H21V9h-7.5Zm-3-4.629L7.277 6.094 6.223 5.027 11.25 0l5.027 5.027-1.054 1.067L12 2.87V13.5h-1.5ZM9 12H4.5v7.5H18V12h-4.5v-1.5h6V21H3V10.5h6Zm0 0"})})),m=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"control-icon save-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21 1.5c.21 0 .406.04.586.117.18.078.336.188.477.32.132.141.242.297.32.477.078.18.117.375.117.586v19.5H4.184L1.5 19.805V3c0-.21.04-.406.117-.586.078-.18.188-.336.32-.477.141-.132.297-.242.477-.32.18-.078.375-.117.586-.117Zm-15 9h12V3H6Zm9 6H7.5V21H9v-3h1.5v3H15ZM21 3h-1.5v9h-15V3H3v16.184L4.805 21H6v-6h10.5v6H21Zm0 0"})})),x=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M20.952 3.048a3.578 3.578 0 0 0-5.06 0L3.94 15a3.106 3.106 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.106 3.106 0 0 0 1.477-.825L20.952 8.11a3.578 3.578 0 0 0 0-5.06Zm-4 1.06a2.078 2.078 0 1 1 2.94 2.94L19 7.939 16.06 5l.892-.891ZM15 6.062 17.94 9 7.94 19c-.21.21-.474.357-.763.426l-3.416.814.813-3.416c.069-.29.217-.554.427-.764L15 6.06Z"})})),f=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"warning-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13 17a.999.999 0 1 0-1.998 0 .999.999 0 0 0 1.997 0Zm-.26-7.853a.75.75 0 0 0-1.493.103l.004 4.501.007.102a.75.75 0 0 0 1.493-.103l-.004-4.502-.007-.101Zm1.23-5.488c-.857-1.548-3.082-1.548-3.938 0L2.286 17.66c-.83 1.5.255 3.34 1.97 3.34h15.49c1.714 0 2.799-1.84 1.969-3.34L13.969 3.66Zm-2.626.726a.75.75 0 0 1 1.313 0l7.745 14.002a.75.75 0 0 1-.656 1.113H4.256a.75.75 0 0 1-.657-1.113l7.745-14.002Z"})})),b=(0,o.memo)(()=>(0,n.jsx)("svg",{className:"control-icon",viewBox:"0 0 20 19",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13 2.25c0-1.079-1.274-1.65-2.08-.934L6.427 5.309a.75.75 0 0 1-.498.19H2.25A2.25 2.25 0 0 0 0 7.749v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .498.19l4.491 3.994c.806.716 2.081.144 2.081-.934V2.25ZM7.425 6.43 11.5 2.807v14.382l-4.075-3.624a2.25 2.25 0 0 0-1.495-.569H2.25a.75.75 0 0 1-.75-.75V7.75A.75.75 0 0 1 2.25 7h3.68a2.25 2.25 0 0 0 1.495-.569Zm9.567-2.533a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 20 10a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 18.5 10a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049ZM15.143 6.37a.75.75 0 0 1 1.017.303c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z"})}))}}]);