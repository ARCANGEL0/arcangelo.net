"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9031],{89031:t=>{function n(t){return!!("number"==typeof t||/^0x[0-9a-f]+$/i.test(t))||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t)}function o(t,n){return"constructor"===n&&"function"==typeof t[n]||"__proto__"===n}t.exports=function(t,e){e||(e={});var r={bools:{},strings:{},unknownFn:null};"function"==typeof e.unknown&&(r.unknownFn=e.unknown),"boolean"==typeof e.boolean&&e.boolean?r.allBools=!0:[].concat(e.boolean).filter(Boolean).forEach(function(t){r.bools[t]=!0});var s={};function i(t){return s[t].some(function(t){return r.bools[t]})}Object.keys(e.alias||{}).forEach(function(t){s[t]=[].concat(e.alias[t]),s[t].forEach(function(n){s[n]=[t].concat(s[t].filter(function(t){return n!==t}))})}),[].concat(e.string).filter(Boolean).forEach(function(t){r.strings[t]=!0,s[t]&&[].concat(s[t]).forEach(function(t){r.strings[t]=!0})});var a=e.default||{},c={_:[]};function l(t,n,e){for(var s=t,i=0;i<n.length-1;i++){var a=n[i];if(o(s,a))return;void 0===s[a]&&(s[a]={}),(s[a]===Object.prototype||s[a]===Number.prototype||s[a]===String.prototype)&&(s[a]={}),s[a]===Array.prototype&&(s[a]=[]),s=s[a]}var c=n[n.length-1];o(s,c)||((s===Object.prototype||s===Number.prototype||s===String.prototype)&&(s={}),s===Array.prototype&&(s=[]),void 0===s[c]||r.bools[c]||"boolean"==typeof s[c]?s[c]=e:Array.isArray(s[c])?s[c].push(e):s[c]=[s[c],e])}function f(t,o,e){if(!e||!r.unknownFn||r.allBools&&/^--[^=]+$/.test(e)||r.strings[t]||r.bools[t]||s[t]||!1!==r.unknownFn(e)){var i=!r.strings[t]&&n(o)?Number(o):o;l(c,t.split("."),i),(s[t]||[]).forEach(function(t){l(c,t.split("."),i)})}}Object.keys(r.bools).forEach(function(t){f(t,void 0!==a[t]&&a[t])});var u=[];-1!==t.indexOf("--")&&(u=t.slice(t.indexOf("--")+1),t=t.slice(0,t.indexOf("--")));for(var p=0;p<t.length;p++){var b,h,y=t[p];if(/^--.+=/.test(y)){var k=y.match(/^--([^=]+)=([\s\S]*)$/);b=k[1];var v=k[2];r.bools[b]&&(v="false"!==v),f(b,v,y)}else if(/^--no-.+/.test(y))f(b=y.match(/^--no-(.+)/)[1],!1,y);else if(/^--.+/.test(y))b=y.match(/^--(.+)/)[1],void 0===(h=t[p+1])||/^(-|--)[^-]/.test(h)||r.bools[b]||r.allBools||s[b]&&i(b)?/^(true|false)$/.test(h)?(f(b,"true"===h,y),p+=1):f(b,!r.strings[b]||"",y):(f(b,h,y),p+=1);else if(/^-[^-]+/.test(y)){for(var g=y.slice(1,-1).split(""),d=!1,E=0;E<g.length;E++){if("-"===(h=y.slice(E+2))){f(g[E],h,y);continue}if(/[A-Za-z]/.test(g[E])&&"="===h[0]){f(g[E],h.slice(1),y),d=!0;break}if(/[A-Za-z]/.test(g[E])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(h)){f(g[E],h,y),d=!0;break}if(g[E+1]&&g[E+1].match(/\W/)){f(g[E],y.slice(E+2),y),d=!0;break}f(g[E],!r.strings[g[E]]||"",y)}b=y.slice(-1)[0],d||"-"===b||(!t[p+1]||/^(-|--)[^-]/.test(t[p+1])||r.bools[b]||s[b]&&i(b)?t[p+1]&&/^(true|false)$/.test(t[p+1])?(f(b,"true"===t[p+1],y),p+=1):f(b,!r.strings[b]||"",y):(f(b,t[p+1],y),p+=1))}else if(r.unknownFn&&!1===r.unknownFn(y)||c._.push(r.strings._||!n(y)?y:Number(y)),e.stopEarly){c._.push.apply(c._,t.slice(p+1));break}}return Object.keys(a).forEach(function(t){var n,o;n=t.split("."),o=c,n.slice(0,-1).forEach(function(t){o=o[t]||{}}),n[n.length-1]in o||(l(c,t.split("."),a[t]),(s[t]||[]).forEach(function(n){l(c,n.split("."),a[t])}))}),e["--"]?c["--"]=u.slice():u.forEach(function(t){c._.push(t)}),c}}}]);