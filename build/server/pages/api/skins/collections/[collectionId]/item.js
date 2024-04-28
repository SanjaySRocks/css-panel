"use strict";(()=>{var e={};e.id=5759,e.ids=[5759],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},14655:(e,t,s)=>{s.a(e,async(e,n)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>u,routeModule:()=>d});var a=s(44614),i=s(49531),r=s(55621),o=s(14669),l=e([o]);o=(l.then?(await l)():l)[0];let u=(0,r.l)(o,"default"),c=(0,r.l)(o,"config"),d=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/skins/collections/[collectionId]/item",pathname:"/api/skins/collections/[collectionId]/item",bundlePath:"",filename:""},userland:o});n()}catch(e){n(e)}})},14669:(e,t,s)=>{s.a(e,async(e,n)=>{try{s.r(t),s.d(t,{default:()=>c});var a=s(13949),i=s(18391),r=s(88022),o=s(73907),l=s(10474),u=e([i,r,o,l]);[i,r,o,l]=u.then?(await u)():u;let c=async(e,t)=>{if(!o.Z)return t.status(500).json({message:"Database not connected"});if(!await (0,i.ed)("skins-collections"))return t.status(404).json({message:"Module not found"});await l.Z.run(e,t);let{method:s}=e,{collectionId:n}=e.query,u=await o.Z.skins.collections.getById(Number(n));if(!u)return t.status(404).json({message:"Collection not found"});let c=await (0,r.Z)(e,t);if(c){if(c.id!==u.steamid)return t.status(403).json({message:"Forbidden"});if("DELETE"===s)try{switch(e.body.type){case"SKIN":{let{weapon_id:s,weapon_paint_id:i}=e.body,r=a.DA.find(e=>e.weapons.find(e=>e.id===s));switch(r?.name){case"Gloves":{let e=a.ku.find(e=>e.id===s)?.weapon_defindex;if(!e)return t.status(404).json({message:"Weapon not found"});let r=u.json,l={...r,skins:r.skins.filter(t=>t.weapon_defindex!==e||t.weapon_paint_id!==i),gloves:null};await o.Z.skins.collections.update(Number(n),u.name,l);break}case"Knives":{let e=a.ku.find(e=>e.id===s),r=e?.weapon_defindex;if(!r)return t.status(404).json({message:"Weapon not found"});let l=u.json,c=l.knife?.knife,d={...l,skins:l.skins.filter(e=>e.weapon_defindex!==r||e.weapon_paint_id!==i),knife:c===e?.id?null:l.knife};await o.Z.skins.collections.update(Number(n),u.name,d);break}default:{let e=a.ku.find(e=>e.id===s)?.weapon_defindex;if(!e)return t.status(404).json({message:"Weapon not found"});let r=u.json,l={...r,skins:r.skins.filter(t=>t.weapon_defindex!==e||t.weapon_paint_id!==i)};if(l.skins.length<4)return t.status(400).json({message:"You need at least 4 skins in your collection"});await o.Z.skins.collections.update(Number(n),u.name,l)}}break}case"MUSIC_KIT":{let e={...u.json,music:null};await o.Z.skins.collections.update(Number(n),u.name,e);break}case"AGENT":{let t=u.json,s={...t,agents:{...t.agents,[e.body.team]:null}};await o.Z.skins.collections.update(Number(n),u.name,s)}}return t.status(200).json({message:"Collection item deleted"})}catch(e){return console.error(e),t.status(500).json({message:"Internal server error"})}}};n()}catch(e){n(e)}})},18391:(e,t,s)=>{s.a(e,async(e,n)=>{try{s.d(t,{$6:()=>u,By:()=>c,GQ:()=>f,ZW:()=>l,ed:()=>g});var a=s(73907),i=s(99648),r=e([a,i]);[a,i]=r.then?(await r)():r;let o=process.env.DOMAIN?.replace("http://","").replace("https://",""),l=async()=>await y.post("/hosts",{identifier:o}).then(()=>{log("Registered/Logged in to liceses API")}),u=async({method:e,moduleId:t})=>{try{let{data:s}=await y.post("/licenses/start",{cycle:e,hostId:o,moduleId:t,returnUrl:`${process.env.DOMAIN}/admin/modules`});return log(`Created license process for ${t}, method: ${e}`),log(s,typeof s),s}catch(e){throw e}},c=async()=>{try{let{data:e}=await y.get("/modules/css-panel");return log(`Loaded ${e.length} modules`),e}catch(e){return error(e),[]}},d=null,p=null,m=async()=>{if(d&&p&&Date.now()<p)return d;try{let{data:e}=await y.get(`/licenses/active/${o}`);return log(`Loaded ${e.length} licenses`),d=e,p=Date.now()+1e4,e}catch(e){return error(e),[]}},f=async e=>{try{return(await m()).find(t=>t.module.identifier===e)||null}catch(e){return error(e),null}},g=async e=>{try{if(!a.Z)return{enabled:!1,settings:{},license:null};let t=await f(e);if(!t)return{enabled:!1,settings:{},license:null};let s=await a.Z.settings.getByKey("modules",!1),n=s?.find(t=>t.identifier===e),i=!!n?.enabled,r=n?.settings||{};return{enabled:i,settings:r,license:t}}catch(e){return error(e),{enabled:!1,settings:{},license:null}}},y=i.default.create({baseURL:"https://li.csspanel.dev/v1"});n()}catch(e){n(e)}})},10474:(e,t,s)=>{s.a(e,async(e,n)=>{try{s.d(t,{Z:()=>c});var a=s(60276),i=s(45616),r=s(429),o=s.n(r),l=e([i]);i=(l.then?(await l)():l)[0];let u=(0,i.default)();u.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let c=u;n()}catch(e){n(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>o});let n=require("passport");var a=s.n(n);let i=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let r=process.env.DOMAIN||"";r.startsWith("http")||(r=`https://${r}`),a().use(new i.Strategy({returnURL:`${r}/api/auth/return`,realm:`${r}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let o=a()},88022:(e,t,s)=>{s.a(e,async(e,n)=>{try{s.d(t,{Z:()=>r});var a=s(73907),i=e([a]);a=(i.then?(await i)():i)[0];let r=(e,t)=>new Promise(async(s,n)=>a.Z?e.user?void s(e.user):n(t.status(400).json({success:!1,error:"Protected Route"})):t.status(500).json({message:"Database not connected"}));n()}catch(e){n(e)}})}};var t=require("../../../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[2867],()=>s(14655));module.exports=n})();