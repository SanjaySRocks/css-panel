"use strict";(()=>{var e={};e.id=3823,e.ids=[3823],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},66912:e=>{e.exports=import("zustand")},85957:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var r=a(44614),n=a(49531),i=a(55621),u=a(26279),o=e([u]);u=(o.then?(await o)():o)[0];let l=(0,i.l)(u,"default"),c=(0,i.l)(u,"config"),d=new r.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/mutes/[muteId]",pathname:"/api/mutes/[muteId]",bundlePath:"",filename:""},userland:u});s()}catch(e){s(e)}})},96165:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Q0:()=>d,UT:()=>l,dC:()=>m,kN:()=>c,xI:()=>o});var r=a(68962),n=a(66912),i=a(9926),u=e([r,n,i]);[r,n,i]=u.then?(await u)():u,(0,n.create)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));let o=i.z.object({reason:i.z.string()}),l=i.z.object({reason:i.z.string(),duration:i.z.string(),type:r.P}),c=i.z.object({comment:i.z.string()}),d=i.z.object({reason:i.z.string(),duration:i.z.string(),type:r.P}),m=i.z.enum(["unmute","remute","comment","edit","delete"]);s()}catch(e){s(e)}})},26279:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>c});var r=a(26993),n=a(73907),i=a(10474),u=a(5584),o=a(96165),l=e([r,n,i,u,o]);[r,n,i,u,o]=l.then?(await l)():l;let c=async(e,t)=>{await i.Z.run(e,t);let{method:a}=e,s=await (0,r.Z)(e,t);if(s){if(!n.Z)return t.status(500).json({message:"Database not connected"});if("POST"===a)try{let{muteId:a}=e.query,r=await n.Z.mutes.getById(Number(a));if(!r)return t.status(404).json({error:"Mute not found"});let i=o.dC.parse(e.body.action),l=e.body.details;switch(i){case"unmute":{let{reason:e}=o.xI.parse(l);await n.Z.mutes.update(Number(a),{status:"UNMUTED",unmute_reason:e});break}case"remute":{let{reason:e,duration:t,type:r}=o.UT.parse(l),i=new Date,u=new Date(Date.now()+6e4*Number(t));await n.Z.mutes.update(Number(a),{status:"ACTIVE",reason:e,created:i,ends:u,duration:Number(t),admin_name:s.player_name,admin_steamid:s.player_steamid,unmute_reason:null,type:r});break}case"edit":{let{reason:e,duration:t,type:s}=o.Q0.parse(l),i=new Date(r.created),u=new Date(i.getTime()+6e4*Number(t)),c=u>new Date?"ACTIVE":"EXPIRED";await n.Z.mutes.update(Number(a),{reason:e,ends:u,duration:Number(t),status:c,type:s});break}case"comment":{let{comment:e}=o.kN.parse(l);await n.Z.mutes.update(Number(a),{comment:e});break}case"delete":await n.Z.mutes.delete(Number(a))}return(0,u.Z)("Mute Action",`Admin ${e.user?.displayName} (${e.user?.id}) performed action '${i}' on mute #${a}`,e.user?.id),t.status(200).json({message:"Message sent"})}catch(e){return t.status(500).json({error:e})}}};s()}catch(e){s(e)}})},5584:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>u});var r=a(73907),n=a(72985),i=e([r,n]);[r,n]=i.then?(await i)():i;let u=async(e,t,a)=>{if(r.Z)try{r.Z.logs.create(e,t,a);let s=await r.Z.settings.getByKey("discordWebhook",!1);s&&(0,n.Z)({url:s,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:t,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},10474:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>c});var r=a(60276),n=a(45616),i=a(429),u=a.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let l=(0,n.default)();l.use(u()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(r.Z.initialize()),l.use(r.Z.session());let c=l;s()}catch(e){s(e)}})},60276:(e,t,a)=>{a.d(t,{Z:()=>u});let s=require("passport");var r=a.n(s);let n=require("passport-steam");r().serializeUser(async(e,t)=>{t(null,e)}),r().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),r().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,a)=>(t.identifier=e,a(null,t))));let u=r()},26993:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>i});var r=a(73907),n=e([r]);r=(n.then?(await n)():n)[0];let i=(e,t,a,s="AND")=>new Promise(async(n,i)=>{if(!r.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let u=e.user.id,o=await r.Z.admins.getBySteam64(u);if(!o)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!a)return n(o);let l=null;if("object"==typeof o.flags)l=o.flags;else{let e=await r.Z.adminGroups.getById(o.flags);e&&(l=e.flags)}if(null===l||!("AND"===s?a.every(e=>l.includes(e)):a.some(e=>l.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(o)});s()}catch(e){s(e)}})},68962:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{P:()=>i,Z:()=>u});var r=a(9926),n=e([r]);let i=(r=(n.then?(await n)():n)[0]).z.enum(["GAG","MUTE","SILENCE"]),u=r.z.object({player_steamid:r.z.string(),reason:r.z.string().min(3),duration:r.z.string(),comment:r.z.string().optional(),type:i});s()}catch(e){s(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[2867],()=>a(85957));module.exports=s})();