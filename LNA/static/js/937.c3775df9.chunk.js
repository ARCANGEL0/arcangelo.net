"use strict";(self.webpackChunklna=self.webpackChunklna||[]).push([[937],{5224:(e,s,a)=>{a.d(s,{z:()=>i});const n=(0,a(1191).ZP)("button")`
  background: ${e=>e.color||"#212738ff"};
  color: ${e=>e.color?"#212738ff":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(187, 0, 0);
    background-color: rgb(187, 0, 0);
  }
`;var r=a(184);const i=e=>{let{color:s,fixedWidth:a,children:i,onClick:t,className:l}=e;return(0,r.jsx)(n,{color:s,className:l,fixedWidth:a,onClick:t,children:i})}},937:(e,s,a)=>{a.r(s),a.d(s,{default:()=>z});var n=a(605),r=a(9603),i=a(4720),t=a(7413),l=a(2791),d=a(7530);var o=a(5224),c=a(1191);const m=(0,c.ZP)("p")`
  margin-top: 1.5rem;
`,h=(0,c.ZP)("div")`
  position: relative;
  max-width: 700px;
`,x=(0,c.ZP)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var p=a(184);const g=(0,i.Z)()((e=>{let{title:s,content:a,t:n}=e;return(0,p.jsxs)(h,{children:[(0,p.jsx)("h6",{children:n(s)}),(0,p.jsx)(x,{children:(0,p.jsx)(m,{children:n(a)})})]})})),u=(0,c.ZP)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
    

`,f=(0,c.ZP)("input")`
  font-size: 0.875rem;
  border: 1px solid #cacaca;
  
`,j=(0,c.ZP)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,b=(0,c.ZP)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  border: 1px solid #cacaca;
`,Z=(0,c.ZP)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,v=(0,i.Z)()((e=>{let{name:s,placeholder:a,onChange:n,t:r}=e;return(0,p.jsxs)(u,{children:[(0,p.jsx)(Z,{htmlFor:s,children:r(s)}),(0,p.jsx)(f,{placeholder:r(a),name:s,id:s,onChange:n})]})})),w=(0,i.Z)()((e=>{let{name:s,placeholder:a,onChange:n,t:r}=e;return(0,p.jsxs)(j,{children:[(0,p.jsx)(Z,{htmlFor:s,children:r(s)}),(0,p.jsx)(b,{placeholder:r(a),id:s,name:s,onChange:n})]})}));var y=a(3014);const P=(0,c.ZP)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,C=(0,c.ZP)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,k=(0,c.ZP)("span")`
  display: block;
  font-weight: 600;
  color: #B64F50;
  height: 0.775rem;
  padding: 0 0.675rem;
`,S=(0,c.ZP)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,z=(0,i.Z)()((e=>{let{title:s,content:a,id:i,t:c,carregar:m}=e;const{values:h,errors:x,handleChange:u,handleSubmit:f}=((e,s)=>{const[a,n]=(0,l.useState)({name:"",email:"",message:""}),[r,i]=(0,l.useState)({}),[t,o]=(0,l.useState)(!1),[c,m]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(t){e(!0);const n={from_name:a.name,reply_to:a.email,message:a.message};d.ZP.send("service_tsqncfl","template_n281ssn",n,"VPWshh0QHyiBo4Lc_").then((a=>{e(!1),s("success"),m(!0)})).catch((a=>{e(!1),s("error")})).finally((()=>{o(!1)}))}}),[t]),(0,l.useEffect)((()=>{c&&(n({name:"",email:"",message:""}),m(!1))}),[c]),{handleChange:e=>{const{name:s,value:a}=e.target;n((e=>({...e,[s]:a}))),i((e=>({...e,[s]:""})))},handleSubmit:e=>{e.preventDefault();const s=(e=>{let s={};return e.name||(s.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email is required",e.message||(s.message="Message is required"),s})(a);i(s),0===Object.keys(s).length&&o(!0)},values:a,errors:r}})(m,(e=>{"success"===e?y.Z.success({message:c("Success"),description:c("Message sent!")}):"error"===e&&y.Z.error({message:c("Error"),description:c("Message not sent!")})})),j=e=>{let{type:s}=e;const a=x[s];return(0,p.jsx)(t.LG,{direction:"left",children:(0,p.jsx)(k,{erros:x[s],children:c(a)})})};return(0,p.jsx)(P,{id:i,children:(0,p.jsxs)(n.Z,{justify:"space-between",align:"middle",children:[(0,p.jsx)(r.Z,{lg:12,md:11,sm:24,xs:24,children:(0,p.jsx)(t.Mi,{direction:"left",children:(0,p.jsx)(g,{title:s,content:a})})}),(0,p.jsx)(r.Z,{lg:12,md:12,sm:24,xs:24,children:(0,p.jsx)(t.Mi,{direction:"right",children:(0,p.jsxs)(C,{autoComplete:"off",onSubmit:f,children:[(0,p.jsxs)(r.Z,{span:24,children:[(0,p.jsx)(v,{type:"text",name:"name",placeholder:"Your Name",value:h.name,onChange:u}),(0,p.jsx)(j,{type:"name"})]}),(0,p.jsxs)(r.Z,{span:24,children:[(0,p.jsx)(v,{type:"text",name:"email",placeholder:"Your Email",value:h.email,onChange:u}),(0,p.jsx)(j,{type:"email"})]}),(0,p.jsxs)(r.Z,{span:24,children:[(0,p.jsx)(w,{placeholder:"Your Message",value:h.message,name:"message",onChange:u}),(0,p.jsx)(j,{type:"message"})]}),(0,p.jsx)(S,{children:(0,p.jsx)(o.z,{className:"contactSubmit",name:"submit",children:c("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=937.c3775df9.chunk.js.map