"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6361],{66361:(e,t,a)=>{a.d(t,{convertSheet:()=>r});var s=a(37e3),w=a(48287).Buffer;let n=async()=>(window.XLSX||await (0,s.aY)(["/Apps/SheetJS/xlsx.full.min.js"]),window.XLSX),r=async(e,t)=>{let a;let r=await n();if("numbers"===t){if(await (0,s.aY)(["/Apps/SheetJS/xlsx.zahl.js"]),!window.XLSX_ZAHL_PAYLOAD)return w.from("");a=window.XLSX_ZAHL_PAYLOAD}return r.write(r.read(e),{bookType:t,numbers:a,type:"buffer"})}}}]);