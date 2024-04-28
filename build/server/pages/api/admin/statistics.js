"use strict";(()=>{var e={};e.id=1070,e.ids=[1070],e.modules={429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},57338:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>c,default:()=>l,routeModule:()=>d});var a=s(44614),n=s(49531),i=s(55621),u=s(32112),o=e([u]);u=(o.then?(await o)():o)[0];let l=(0,i.l)(u,"default"),c=(0,i.l)(u,"config"),d=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/statistics",pathname:"/api/admin/statistics",bundlePath:"",filename:""},userland:u});r()}catch(e){r(e)}})},66527:(e,t,s)=>{s.d(t,{Z:()=>r});let r=e=>{let t=new Date,s=[];for(let r=0;r<e;r++){let e=new Date(t.getTime()-864e5*r).toISOString().slice(0,10);s.push(e)}return s.reverse()}},32112:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c});var a=s(66527),n=s(26993),i=s(91298),u=s(73907),o=s(10474),l=e([n,i,u,o]);[n,i,u,o]=l.then?(await l)():l;let c=async(e,t)=>{if(await o.Z.run(e,t),!await (0,n.Z)(e,t,["@web/root","@web/logs","@css/root","@web/stats"],"OR"))return;let{method:s}=e;if(!u.Z)return t.status(500).json({message:"Database not connected"});if("GET"===s){let{days:s,servers:r}=i.Z.parse(e.query),n="ALL"===r?await u.Z.statistics.getEntriesByDays(Number(s)):await u.Z.statistics.getEntriesByServersAndDays(r.split(",").map(e=>Number(e)),Number(s)),o=(0,a.Z)(parseInt(s)).map(e=>{let t=n.filter(t=>new Date(t.connectDate).toDateString()===new Date(e).toDateString());return t?{date:e,number:t.length}:{date:e,number:0}});return t.status(200).json({servers:o})}};r()}catch(e){r(e)}})},10474:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>c});var a=s(60276),n=s(45616),i=s(429),u=s.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let l=(0,n.default)();l.use(u()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),l.use(a.Z.initialize()),l.use(a.Z.session());let c=l;r()}catch(e){r(e)}})},60276:(e,t,s)=>{s.d(t,{Z:()=>u});let r=require("passport");var a=s.n(r);let n=require("passport-steam");a().serializeUser(async(e,t)=>{t(null,e)}),a().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,s)=>(t.identifier=e,s(null,t))));let u=a()},26993:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>i});var a=s(73907),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,t,s,r="AND")=>new Promise(async(n,i)=>{if(!a.Z)return t.status(500).json({message:"Database not connected"});if(!e.user)return i(t.status(400).json({success:!1,error:"Protected Route"}));let u=e.user.id,o=await a.Z.admins.getBySteam64(u);if(!o)return i(t.status(401).json({success:!1,error:"Protected Route"}));if(!s)return n(o);let l=null;if("object"==typeof o.flags)l=o.flags;else{let e=await a.Z.adminGroups.getById(o.flags);e&&(l=e.flags)}if(null===l||!("AND"===r?s.every(e=>l.includes(e)):s.some(e=>l.includes(e))))return i(t.status(403).json({success:!1,error:"Protected Route"}));n(o)});r()}catch(e){r(e)}})},91298:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>i});var a=s(9926),n=e([a]);let i=(a=(n.then?(await n)():n)[0]).default.object({days:a.default.string().default("3").refine(e=>Number(e)>0&&365>Number(e),{message:"Days must be greater than 0 and less than 365"}),servers:a.default.string().default("ALL")});r()}catch(e){r(e)}})}};var t=require("../../../webpack-api-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[2867],()=>s(57338));module.exports=r})();