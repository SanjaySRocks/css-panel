"use strict";(()=>{var e={};e.id=1951,e.ids=[1951],e.modules={43582:e=>{e.exports=require("@fabricio-191/valve-server-query")},429:e=>{e.exports=require("cookie-session")},62418:e=>{e.exports=require("mysql2/promise")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},99648:e=>{e.exports=import("axios")},97564:e=>{e.exports=import("chalk")},45616:e=>{e.exports=import("next-connect")},2782:e=>{e.exports=import("steam-api-sdk")},9926:e=>{e.exports=import("zod")},37270:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>d,default:()=>u,routeModule:()=>c});var s=r(44614),n=r(49531),i=r(55621),l=r(82601),o=e([l]);l=(o.then?(await o)():o)[0];let u=(0,i.l)(l,"default"),d=(0,i.l)(l,"config"),c=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/servers/[serverId]",pathname:"/api/servers/[serverId]",bundlePath:"",filename:""},userland:l});a()}catch(e){a(e)}})},82601:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>o});var s=r(18999),n=r(73907),i=r(10474),l=e([s,n,i]);[s,n,i]=l.then?(await l)():l;let o=async(e,t)=>{if(!n.Z)return t.status(500).json({message:"Database not connected"});await i.Z.run(e,t);let{method:r}=e;if("GET"===r)try{let{serverId:r}=e.query;if(!await n.Z.servers.getById(Number(r)))return t.status(404).json({error:"Server not found"});let a=!!e.user?.id&&!!await n.Z.admins.getBySteam64(e.user?.id),i=await (0,s.Z)(Number(r),a);return t.status(200).json(i)}catch(e){return t.status(500).json({error:e})}};a()}catch(e){a(e)}})},48350:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>l});var s=r(2782),n=e([s]);s=(n.then?(await n)():n)[0];let i=new Map,l=async e=>{try{let t=[...new Set(e)].filter(e=>!isNaN(Number(e)));if(!t.length)return[];let r=t.filter(e=>i.has(e)),a=t.filter(e=>!i.has(e)),n=r.map(e=>i.get(e)).filter(e=>void 0!==e)||[],l=[];return a.length>0&&(l=await (0,s.From64ToUser)(a,1e3)||[]).forEach(e=>i.set(e.steamid,e)),[...n,...l]}catch(e){return[]}};a()}catch(e){a(e)}})},63217:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(43582);let s="1.5.1",n=e=>e.replace(/[^\x20-\x7E]/g," "),i=async(e,t,r)=>{try{let i=await (0,a.RCON)({ip:e,port:t,password:r,enableWarns:!0,retries:2,timeout:2e3});i.authenticate();let l=i.connection?.options?.ip??null,o=await i.exec("css_query");if(!o)return null;let u=n(o),d=JSON.parse(u),{pr:c}=d.server;return c!==s&&warn(`[PluginStatus] The plugin version (${c}) for ${e}:${t} is outdated, the latest version is: ${s}
-> Download the latest version from: https://github.com/CSSPanel/Plugin`),{...d,serverIp:l}}catch(r){return r?.message?.includes("Connection timeout")?warn(`getting Plugin RCON status: ${e}:${t}: ${r}
Make sure that the server is running and the RCON is enabled.`):warn(`getting Plugin RCON status: ${e}:${t}: ${r}
Make sure that the plugin is installed and the RCON is enabled.
-> Download: https://github.com/CSSPanel/Plugin`),null}}},18999:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>u});var s=r(48350),n=r(85295),i=r(63217),l=r(73907),o=e([s,l]);[s,l]=o.then?(await o)():o;let u=async(e,t)=>{if(!l.Z)throw Error("Database not connected");let r=await l.Z.servers.getById(e);if(!r)throw Error("Server not found");let{hostname:a,address:o,rcon:u}=r,[d,c]=o.split(":");if(u){let{server:r,players:n,serverIp:m}=await (0,i.Z)(d,Number(c),u)||{};if(!r||!n)throw Error("Server not found");let p=t?await l.Z.chatLogs.getAllByServerAndMinutes(Number(e),5):[],h=await (0,s.Z)(n.map(e=>e.s64)),g=await Promise.all(n.map(async r=>{if(!l.Z)throw Error("Database not connected");let{id:a,s64:s,s:n,k:i,d:o}=r,u=await l.Z.admins.getBySteam64AndServerId(s,e),d=h.find(e=>e.steamid===s);return{userId:a,playerName:d?d.personaname:s,avatar:d?d.avatar:"",steam64:s,score:n,admin:t?u:null,kills:i,deaths:o}}));return{id:e,hostname:a,address:o,map:r.map,players:g,maxPlayers:r.mP,playersPercentage:Math.round(n.length/r.mP*100),vac:null,game:"Counter-Strike 2",chat:{messages:p},serverIp:m||void 0}}{let r=await (0,n.Z)(d,Number(c),u);if(!r)throw Error("Server not found");let i=t?await l.Z.chatLogs.getAllByServerAndMinutes(Number(e),5):[],m=await (0,s.Z)(r.serverPlayers?.map(e=>e.steamId64)||[]),p=r.serverPlayers?await Promise.all(r.serverPlayers?.map(async r=>{if(!l.Z)throw Error("Database not connected");let{id:a,name:s,steamId64:n}=r,i=await l.Z.admins.getBySteam64AndServerId(n,Number(e)),o=m.find(e=>e.steamid===n);return{userId:a,steam64:n,playerName:o?o.personaname:s,avatar:o?o.avatar:"",ping:0,admin:t?i:null}})):r.players;return{id:e,hostname:a,address:o,playersPercentage:Math.round(r.players/r.maxPlayers*100),map:r.map,players:p,maxPlayers:r.maxPlayers,vac:r.VAC,game:r.game,chat:{messages:i}}}};a()}catch(e){a(e)}})},85295:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(43582);let s=async(e,t,r)=>{try{let s=await (0,a.RCON)({ip:e,port:t,password:r});s.authenticate();let n=(await s.exec("css_players")).split("\n"),i=/\[#(\d+)\] "(.*?)" \(IP Address: "(.*?)" SteamID64: "(.*?)"\)/,l=[];for(let e of n){let t=e.match(i);if(t){let[,e,r,a,s]=t;s&&l.push({id:parseInt(e),name:r,ipAddress:a,steamId64:s})}}return s.destroy(),l}catch(r){return error(`Error getting RCON status: ${e}:${t}`,r),null}},n=async(e,t,r)=>{try{let n=await (0,a.Server)({ip:e,port:t,timeout:2e3}),i=await n.getInfo();n.disconnect();let{name:l,map:o,game:u,players:d,VAC:c,version:m}=i;r?debug(`RCON Found for server ${e}:${t}, the server info will be pulled with RCON.
Note that you can should consider using our official plugin to get more information and features.
https://github.com/CSSPanel/Plugin`):log(`RCON not found for server ${e}:${t}, the server info will be pulled without RCON, this means that players and advanced information modal will not be shown.
Consider using our official plugin to get more information and features.
https://github.com/CSSPanel/Plugin`);let p=r?await s(e,t,r):null,h=p?p?.map(e=>{let{ipAddress:t,...r}=e;return r}):null;return{name:l,map:o,players:d.online,serverPlayers:h,maxPlayers:d.max,VAC:c,version:m,game:u}}catch(r){return error(`[Error] getting server info: ${e}:${t}: ${r}`),null}}},10474:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>d});var s=r(60276),n=r(45616),i=r(429),l=r.n(i),o=e([n]);n=(o.then?(await o)():o)[0];let u=(0,n.default)();u.use(l()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),u.use(s.Z.initialize()),u.use(s.Z.session());let d=u;a()}catch(e){a(e)}})},60276:(e,t,r)=>{r.d(t,{Z:()=>l});let a=require("passport");var s=r.n(a);let n=require("passport-steam");s().serializeUser(async(e,t)=>{t(null,e)}),s().deserializeUser(async(e,t)=>{t(null,e)});let i=process.env.DOMAIN||"";i.startsWith("http")||(i=`https://${i}`),s().use(new n.Strategy({returnURL:`${i}/api/auth/return`,realm:`${i}/`,apiKey:process.env.STEAM_API_KEY||""},(e,t,r)=>(t.identifier=e,r(null,t))));let l=s()}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[2867],()=>r(37270));module.exports=a})();