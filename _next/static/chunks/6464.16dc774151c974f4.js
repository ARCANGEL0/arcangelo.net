"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6464],{6464:(e,t,r)=>{async function a(e,t){let r;let a=e[Symbol.asyncIterator]?e[Symbol.asyncIterator]():e[Symbol.iterator]?e[Symbol.iterator]():e.next?e:(r=[e],{next:()=>Promise.resolve({done:0===r.length,value:r.pop()}),return:()=>(r=[],{}),[Symbol.asyncIterator](){return this}});for(;;){let{value:e,done:r}=await a.next();if(e&&await t(e),r)break}a.return&&a.return()}async function n(e){let t=0,r=[];await a(e,e=>{r.push(e),t+=e.byteLength});let n=new Uint8Array(t),o=0;for(let e of r)n.set(e,o),o+=e.byteLength;return n}async function o({onProgress:e,url:t,method:r="GET",headers:a={},body:o}){o&&(o=await n(o));let s=await fetch(t,{method:r,headers:a,body:o}),u=s.body&&s.body.getReader?function(e){if(e[Symbol.asyncIterator])return e;let t=e.getReader();return{next:()=>t.read(),return:()=>(t.releaseLock(),{}),[Symbol.asyncIterator](){return this}}}(s.body):[new Uint8Array(await s.arrayBuffer())];for(let[e,t]of(a={},s.headers.entries()))a[e]=t;return{url:s.url,method:s.method,statusCode:s.status,statusMessage:s.statusText,body:u,headers:a}}r.r(t),r.d(t,{default:()=>s,request:()=>o});let s={request:o}}}]);