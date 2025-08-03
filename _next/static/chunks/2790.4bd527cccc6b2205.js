"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2790],{94327:(A,e,i)=>{i.d(e,{A:()=>o});var a=i(48470),t=i(33540),r=i(87952);let o=(0,t.default)(a.m.li)`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  width: ${({theme:A})=>A.sizes.taskbar.entry.maxWidth};

  &::before {
    background-color: ${({$foreground:A,$progress:e,theme:i})=>A?e&&e>0&&e<100?i.colors.taskbar.foregroundProgress:i.colors.taskbar.foreground:""};
    background-image: ${({$progress:A,theme:e})=>A&&A>0&&A<100?`linear-gradient(to right, ${e.colors.progressBackground} 0% ${A}%, transparent ${A}% 100%)`:""};
    border-bottom: ${({$progress:A,theme:e})=>`
        ${e.sizes.taskbar.entry.borderSize} solid ${A&&A>0&&A<100?e.colors.progress:e.colors.highlight}
      `};
    bottom: 0;
    content: "";
    height: ${({$foreground:A})=>A?"100%":0};
    margin: ${({$foreground:A})=>A?"":"0 4px"};
    position: absolute;
    transition-duration: 0.1s;
    transition-property: ${({$foreground:A})=>A?"all":"width"};
    width: ${({$foreground:A})=>A?"100%":"calc(100% - 8px)"};
    z-index: -1;
  }

  &:hover {
    &::before {
      background-color: ${({$foreground:A,theme:e})=>A?e.colors.taskbar.foregroundHover:e.colors.taskbar.hover};
      height: 100%;
      margin: 0;
      width: 100%;
    }
  }

  &:active {
    &::before {
      background-color: ${({$foreground:A,theme:e})=>A?e.colors.taskbar.activeForeground:e.colors.taskbar.active};
    }
  }

  figure {
    align-items: center;
    display: flex;
    margin-bottom: ${({theme:A})=>A.sizes.taskbar.entry.borderSize};
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${({theme:A})=>A.colors.text};
      font-size: ${({theme:A})=>A.sizes.taskbar.entry.fontSize};
      margin: 0 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    picture {
      height: ${({theme:A})=>A.sizes.taskbar.entry.iconSize};
      position: relative;
      top: 1px;
      width: ${({theme:A})=>A.sizes.taskbar.entry.iconSize};
    }
  }

  > ${r.A} {
    align-items: center;
    display: flex;

    figure {
      width: 100%;
    }
  }
`},62790:(A,e,i)=>{i.r(e),i.d(e,{default:()=>f});var a=i(74848),t=i(96540),r=i(14953),o=i.n(r),n=i(83839),s=i(94327),l=i(33540),g=i(48060);let c=()=>{let{sizes:{taskbar:A}}=(0,l.useTheme)();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:g.f9.WINDOW},variants:{active:{width:A.entry.maxWidth},initial:{width:0}}}};var d=i(60978),h=i(59091),b=i(62104),u=i(1364),p=i(87952),m=i(31251),k=i(37e3);let E=o()(()=>i.e(2808).then(i.bind(i,92808)),{loadableGenerated:{webpack:()=>[92808]}}),f=(0,t.memo)(({icon:A,id:e,title:i})=>{let r=(0,h.A)(e),{foregroundId:o,setForegroundId:l}=(0,u.w)(),f=e===o,{linkElement:C,minimize:B,processes:{[e]:w}}=(0,b.N)(),{minimized:Q,progress:x}=w||{},R=(0,t.useCallback)(A=>{A&&C(e,"taskbarEntry",A)},[e,C]),[M,U]=(0,t.useState)(!1),z=()=>U(!1),S=(0,t.useMemo)(()=>(0,k.nr)()?g.WW:{},[]);return(0,a.jsxs)(s.A,{$foreground:f,$progress:x,onClick:z,onMouseEnter:()=>U(!0),onMouseLeave:z,...c(),...(0,d.A)(e),children:[(0,a.jsx)(n.N,{initial:!1,presenceAffectsLayout:!1,children:M&&(0,a.jsx)(E,{id:e})}),(0,a.jsx)(p.A,{ref:R,onClick:()=>{(Q||f)&&B(e),l(f?r:e)},...S,...(0,k.Pf)(i),children:(0,a.jsxs)("figure",{children:[(0,a.jsx)(m.A,{alt:i,imgSize:16,src:A}),(0,a.jsx)("figcaption",{children:i})]})})]})})},60978:(A,e,i)=>{i.d(e,{A:()=>s});var a=i(96540),t=i(6191),r=i(78744),o=i(62104),n=i(48060);let s=A=>{let{contextMenu:e}=(0,r.b)(),{onClose:i,onMaximize:s,onMinimize:l}=(0,t.A)(A),{processes:{[A]:g}}=(0,o.N)(),{allowResizing:c=!0,hideMaximizeButton:d,hideMinimizeButton:h,maximized:b,minimized:u}=g||{};return(0,a.useMemo)(()=>e?.(()=>{let A=b||u,e=!d||!h;return[e&&{action:()=>{u?l():s()},disabled:!A,icon:A?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!h&&{action:l,disabled:u,icon:u?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!d&&{action:s,disabled:A||!c,icon:A?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},e&&n.kG,{action:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC",label:"Close"}].filter(Boolean)}),[c,e,d,h,b,u,i,s,l])}}}]);