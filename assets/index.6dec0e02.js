import{d as A,o as n,c as l,F as y,r as T,a as v,b as I,n as k,t as w,p as B,e as O,f as p,g as K,h as H,i as x,w as U,T as W,j as Z,k as z,l as J}from"./vendor.206afc82.js";const Q=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};Q();const D=" Using word of the day instead.";function X(){if(location.search)try{const e=atob(location.search.slice(1));if(e.length!==5)alert(`Incorrect word length from encoded query. ${D}`);else return e}catch{alert(`Malformed encoded word query. ${D}`)}const t=new Date,u=new Date(2022,0,0),i=Number(t)-Number(u);let a=Math.floor(i/(1e3*60*60*24));for(;a>N.length;)a-=N.length;return N[a]}const N=["roman","millo"],Y=[...N,...allowedGuesses];var P=(t,u)=>{const i=t.__vccOpts||t;for(const[a,e]of u)i[a]=e;return i};const ee=t=>(B("data-v-a7ac7f5c"),t=t(),O(),t),te={id:"keyboard"},se={class:"row"},re={key:0,class:"spacer"},oe=["onClick"],ae={key:0},ne={key:1,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},le=ee(()=>v("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},null,-1)),ce=[le],ue={key:1,class:"spacer"},ie=A({props:{letterStates:null},emits:["key"],setup(t){const u=["qwertyuiop".split(""),"asdfghjkl".split(""),["Enter",..."zxcvbnm".split(""),"Backspace"]];return(i,a)=>(n(),l("div",te,[(n(),l(y,null,T(u,(e,o)=>v("div",se,[o===1?(n(),l("div",re)):I("",!0),(n(!0),l(y,null,T(e,d=>(n(),l("button",{class:k([d.length>1&&"big",t.letterStates[d]]),onClick:g=>i.$emit("key",d)},[d!=="Backspace"?(n(),l("span",ae,w(d),1)):(n(),l("svg",ne,ce))],10,oe))),256)),o===1?(n(),l("div",ue)):I("",!0)])),64))]))}});var de=P(ie,[["__scopeId","data-v-a7ac7f5c"]]),f;(function(t){t[t.INITIAL=0]="INITIAL",t.CORRECT="correct",t.PRESENT="present",t.ABSENT="absent"})(f||(f={}));const fe=t=>(B("data-v-17125642"),t=t(),O(),t),ve={key:0,class:"message"},pe={key:0},he=fe(()=>v("header",null,[v("h1",null,"VVORDLE"),v("a",{id:"source-link",href:"https://github.com/yyx990803/vue-wordle",target:"_blank"},"Source")],-1)),_e={id:"board"},me=A({setup(t){const u=X(),i=p(Array.from({length:6},()=>Array.from({length:5},()=>({letter:"",state:f.INITIAL}))));let a=p(0);const e=K(()=>i.value[a.value]);let o=p(""),d=p(""),g=p(-1),C=p(!1);const h=p({});let b=!0;const S=s=>L(s.key);window.addEventListener("keyup",S),H(()=>{window.removeEventListener("keyup",S)});function L(s){!b||(/^[a-zA-Z]$/.test(s)?M(s.toLowerCase()):s==="Backspace"?V():s==="Enter"&&G())}function M(s){for(const c of e.value)if(!c.letter){c.letter=s;break}}function V(){for(const s of[...e.value].reverse())if(s.letter){s.letter="";break}}function G(){if(e.value.every(s=>s.letter)){const s=e.value.map(r=>r.letter).join("");if(!Y.includes(s)&&s!==u){$(),E("Not in word list");return}const c=u.split("");e.value.forEach((r,_)=>{c[_]===r.letter&&(r.state=h.value[r.letter]=f.CORRECT,c[_]=null)}),e.value.forEach(r=>{!r.state&&c.includes(r.letter)&&(r.state=f.PRESENT,c[c.indexOf(r.letter)]=null,h.value[r.letter]||(h.value[r.letter]=f.PRESENT))}),e.value.forEach(r=>{r.state||(r.state=f.ABSENT,h.value[r.letter]||(h.value[r.letter]=f.ABSENT))}),b=!1,e.value.every(r=>r.state===f.CORRECT)?setTimeout(()=>{d.value=F(),E(["Genio","Magnificent","Impressive","Splendid","Great","Phew"][a.value],-1),C.value=!0},1600):a.value<i.value.length-1?(a.value++,setTimeout(()=>{b=!0},1600)):setTimeout(()=>{E(u.toUpperCase(),-1)},1600)}else $(),E("Not enough letters")}function E(s,c=1e3){o.value=s,c>0&&setTimeout(()=>{o.value=""},c)}function $(){g.value=a.value,setTimeout(()=>{g.value=-1},1e3)}const q={[f.CORRECT]:"\u{1F7E9}",[f.PRESENT]:"\u{1F7E8}",[f.ABSENT]:"\u2B1C",[f.INITIAL]:null};function F(){return i.value.slice(0,a.value+1).map(s=>s.map(c=>q[c.state]).join("")).join(`
`)}return(s,c)=>(n(),l(y,null,[x(W,null,{default:U(()=>[o.value?(n(),l("div",ve,[Z(w(o.value)+" ",1),d.value?(n(),l("pre",pe,w(d.value),1)):I("",!0)])):I("",!0)]),_:1}),he,v("div",_e,[(n(!0),l(y,null,T(i.value,(r,_)=>(n(),l("div",{class:k(["row",g.value===_&&"shake",C.value&&a.value===_&&"jump"])},[(n(!0),l(y,null,T(r,(m,R)=>(n(),l("div",{class:k(["tile",m.letter&&"filled",m.state&&"revealed"])},[v("div",{class:"front",style:z({transitionDelay:`${R*300}ms`})},w(m.letter),5),v("div",{class:k(["back",m.state]),style:z({transitionDelay:`${R*300}ms`,animationDelay:`${R*100}ms`})},w(m.letter),7)],2))),256))],2))),256))]),x(de,{onKey:L,"letter-states":h.value},null,8,["letter-states"])],64))}});var ye=P(me,[["__scopeId","data-v-17125642"]]);window.addEventListener("resize",j);j();function j(){document.body.style.setProperty("--vh",window.innerHeight+"px")}J(ye).mount("#app");
