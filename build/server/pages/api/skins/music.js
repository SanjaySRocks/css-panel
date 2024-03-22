"use strict";(()=>{var e={};e.id=9634,e.ids=[9634],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},26099:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>u,routeModule:()=>p});var a=r(88667),n=r(25828),i=r(38051),o=r(67914),c=e([o]);o=(c.then?(await c)():c)[0];let u=(0,i.l)(o,"default"),l=(0,i.l)(o,"config"),p=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/skins/music",pathname:"/api/skins/music",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},67914:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(15892),n=r(85607),i=r(6995),o=r(74186),c=e([a,n,i,o]);[a,n,i,o]=c.then?(await c)():c;let u=async(e,t)=>{if(!i.Z)return t.status(500).json({message:"Database not connected"});await o.Z.run(e,t);let{method:r}=e,s=await (0,n.Z)(e,t);if(s)switch(r){case"GET":try{let e=s.id,r=await i.Z.skins.music.getBySteamId(e);return t.status(200).json(r)}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}case"POST":try{let r=s.id,{music_id:n}=e.body;if(!n)return t.status(400).json({message:"Missing parameters"});return await i.Z.skins.music.setBySteamId(r,Number(n)),(0,a.x)(`css_fexec ${s.id} css_wp`),t.status(200).json({message:"Music kit set"})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}}};s()}catch(e){s(e)}})},15892:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>u,x:()=>c});var a=r(43582),n=r(6995),i=e([n]);n=(i.then?(await i)():i)[0];let o=async(e,t)=>{if(!n.Z)throw Error("Database not connected");try{let r=await n.Z.servers.getById(Number(e));if(!r)throw Error("Server not found");let{address:s,rcon:i}=r,[o,c]=s.split(":");if(!i)throw Error("Server has no rcon password");let u=await (0,a.RCON)({ip:o,port:Number(c),password:i,enableWarns:!0,retries:2,timeout:2e3});u.authenticate();let l=await u.exec(t);if(!l)return"No response from server";return l}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},c=async e=>{if(!n.Z)throw Error("Database not connected");let t=await n.Z.servers.getAll();return await Promise.all(t.map(async t=>{try{let r=await o(t.id,e);return{server:t.hostname,response:r}}catch(e){return{server:t.hostname,response:e}}}))},u=o;s()}catch(e){s(e)}})},74186:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>l});var a=r(15313),n=r(45616),i=r(429),o=r.n(i),c=e([n]);n=(c.then?(await c)():c)[0];let u=(0,n.default)();u.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let l=u;s()}catch(e){s(e)}})},15313:(e,t,r)=>{r.d(t,{Z:()=>o});let s=require("passport");var a=r.n(s);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,r)=>(t.identifier=e,r(null,t))));let o=a()},85607:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>i});var a=r(6995),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t)=>new Promise(async(r,s)=>a.Z?e.user?void r(e.user):s(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));s()}catch(e){s(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[6037],()=>r(26099));module.exports=s})();