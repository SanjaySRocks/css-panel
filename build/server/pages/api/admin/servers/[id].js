"use strict";(()=>{var e={};e.id=788,e.ids=[788],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},56082:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>c,default:()=>u,routeModule:()=>l});var a=t(44614),n=t(49531),i=t(55621),o=t(92594),d=e([o]);o=(d.then?(await d)():d)[0];let u=(0,i.l)(o,"default"),c=(0,i.l)(o,"config"),l=new a.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/admin/servers/[id]",pathname:"/api/admin/servers/[id]",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},92594:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>l});var a=t(73907),n=t(10474),i=t(91415),o=t(26993),d=t(22567),u=t(5584),c=e([a,n,i,o,d,u]);[a,n,i,o,d,u]=c.then?(await c)():c;let l=async(e,r)=>{await n.Z.run(e,r);let{method:t}=e;if(!await (0,o.Z)(e,r,["@web/root","@web/servers","@css/root","@web/rcon"],"OR"))return;let{id:s}=e.query;if(!a.Z)return r.status(500).json({message:"Database not connected"});if(!await a.Z.servers.getById(Number(s)))return r.status(404).json({message:"Server not found"});switch(t){case"PUT":{let{hostname:t,address:n,rcon:o,hidden:d}=i.Z.parse(e.body),c=await a.Z.servers.update(Number(s),{hostname:t,address:n,rcon:o,hidden:d});return(0,u.Z)("Server Edit",`Admin ${e.user?.displayName} (${e.user?.id}) edited server "${t}" (ip: ${n})`,e.user?.id,"adminActionsDiscordWebhook"),r.status(201).json(c)}case"POST":try{let{message:t}=e.body,a=await (0,d.Z)(Number(s),t);return(0,u.Z)("Server Rcon",`Admin ${e.user?.displayName} (${e.user?.id}) send a rcon command to server #${s} (command: ${t})`,e.user?.id,"adminActionsDiscordWebhook"),r.status(200).json({response:a})}catch(e){return r.status(500).json(e)}case"DELETE":try{if((await a.Z.admins.getByServerId(s)).length>0)return r.status(403).send("Please remove all admins from this server first");return await a.Z.servers.delete(Number(s)),(0,u.Z)("Server Delete",`Admin ${e.user?.displayName} (${e.user?.id}) deleted server #${s}`,e.user?.id,"adminActionsDiscordWebhook"),r.status(200).send("Server deleted")}catch(e){return r.status(500).json({message:"Error while deleting server",error:e})}default:return r.status(405).json({message:"Method not allowed"})}};s()}catch(e){s(e)}})},22567:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>u,x:()=>d});var a=t(43582),n=t(73907),i=e([n]);n=(i.then?(await i)():i)[0];let o=async(e,r)=>{if(!n.Z)throw Error("Database not connected");try{let t=await n.Z.servers.getById(Number(e));if(!t)throw Error("Server not found");let{address:s,rcon:i}=t,[o,d]=s.split(":");if(!i)throw Error("Server has no rcon password");let u=await (0,a.RCON)({ip:o,port:Number(d),password:i,enableWarns:!0,retries:2,timeout:2e3});u.authenticate();let c=await u.exec(r);if(!c)return"No response from server";return c}catch(e){throw warn(`Error while sending rcon command: ${e}`),e}},d=async e=>{if(!n.Z)throw Error("Database not connected");let r=await n.Z.servers.getAll();return await Promise.all(r.map(async r=>{try{let t=await o(r.id,e);return{server:r.hostname,response:t}}catch(e){return{server:r.hostname,response:e}}}))},u=o;s()}catch(e){s(e)}})},5584:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>o});var a=t(73907),n=t(72985),i=e([a,n]);[a,n]=i.then?(await i)():i;let o=async(e,r,t,s="discordWebhook")=>{if(a.Z)try{a.Z.logs.create(e,r,t);let i=await a.Z.settings.getByKey(s,!1);i&&"string"==typeof i&&(0,n.Z)({url:i,embeds:[{title:`**▬▬▬▬▬ [LOG :: ${e}] ▬▬▬▬▬**`,color:5352959,description:r,timestamp:new Date().toISOString()}]})}catch(e){console.error(`Failed to log: ${e}`)}};s()}catch(e){s(e)}})},10474:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>c});var a=t(60276),n=t(45616),i=t(429),o=t.n(i),d=e([n]);n=(d.then?(await d)():d)[0];let u=(0,n.default)();u.use(o()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(a.Z.initialize()),u.use(a.Z.session());let c=u;s()}catch(e){s(e)}})},60276:(e,r,t)=>{t.d(r,{Z:()=>o});let s=require("passport");var a=t.n(s);let n=require("passport-steam");a().serializeUser(async(e,r)=>{r(null,e)}),a().deserializeUser(async(e,r)=>{r(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),a().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,r,t)=>(r.identifier=e,t(null,r))));let o=a()},26993:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(73907),n=e([a]);a=(n.then?(await n)():n)[0];let i=(e,r,t,s="AND")=>new Promise(async(n,i)=>{if(!a.Z)return r.status(500).json({message:"Database not connected"});if(!e.user)return i(r.status(400).json({success:!1,error:"Protected Route"}));let o=e.user.id,d=await a.Z.admins.getBySteam64(o);if(!d)return i(r.status(401).json({success:!1,error:"Protected Route"}));if(!t)return n(d);let u=null;if("object"==typeof d.flags)u=d.flags;else{let e=await a.Z.adminGroups.getById(d.flags);e&&(u=e.flags)}if(null===u||!("AND"===s?t.every(e=>u.includes(e)):t.some(e=>u.includes(e))))return i(r.status(403).json({success:!1,error:"Protected Route"}));n(d)});s()}catch(e){s(e)}})},91415:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>i});var a=t(9926),n=e([a]);let i=(a=(n.then?(await n)():n)[0]).z.object({address:a.z.string().refine(e=>e.includes(":"),{message:"IP Address must include a port number"}),hostname:a.z.string().min(3),rcon:a.z.string().min(0).optional(),hidden:a.z.boolean().optional()});s()}catch(e){s(e)}})}};var r=require("../../../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[2867],()=>t(56082));module.exports=s})();