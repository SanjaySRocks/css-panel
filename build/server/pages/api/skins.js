"use strict";(()=>{var e={};e.id=9478,e.ids=[9478],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},96133:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var r=s(44614),i=s(49531),n=s(55621),o=s(42247),u=e([o]);o=(u.then?(await u)():u)[0];let l=(0,n.l)(o,"default"),c=(0,n.l)(o,"config"),d=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/skins",pathname:"/api/skins",bundlePath:"",filename:""},userland:o});a()}catch(e){a(e)}})},42247:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>l});var r=s(18391),i=s(88022),n=s(73907),o=s(10474),u=e([r,i,n,o]);[r,i,n,o]=u.then?(await u)():u;let l=async(e,t)=>{if(!n.Z)return t.status(500).json({message:"Database not connected"});if(!(await (0,r.ed)("skins")).enabled)return t.status(404).json({message:"Module not found"});await o.Z.run(e,t);let{method:s}=e,a=await (0,i.Z)(e,t);if(a&&"GET"===s)try{let e=a.id,s=await n.Z.skins.agents.getBySteamId(e),r=await n.Z.skins.gloves.getBySteamId(e),i=await n.Z.skins.knife.getBySteamId(e),o=await n.Z.skins.music.getBySteamId(e),u=await n.Z.skins.skins.getBySteamId(e),l=await n.Z.skins.collections.getBySteamId(e);return t.status(200).json({agents:s,gloves:r,knife:i,music:o,skins:u,collections:l})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}};a()}catch(e){a(e)}})},10474:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>c});var r=s(60276),i=s(45616),n=s(429),o=s.n(n),u=e([i]);i=(u.then?(await u)():u)[0];let l=(0,i.default)();l.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(r.Z.initialize()),l.use(r.Z.session());let c=l;a()}catch(e){a(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>o});let a=require("passport");var r=s.n(a);let i=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let n=process.env.DOMAIN||"";n.startsWith("http")||(n=`https://${n}`),r().use(new i.Strategy({returnURL:`${n}/api/auth/return`,realm:`${n}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=r()},88022:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>n});var r=s(73907),i=e([r]);r=(i.then?(await i)():i)[0];let n=(e,t)=>new Promise(async(s,a)=>r.Z?e.user?void s(e.user):a(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));a()}catch(e){a(e)}})}};var t=require("../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[2867],()=>s(96133));module.exports=a})();