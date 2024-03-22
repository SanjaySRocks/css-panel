"use strict";(()=>{var e={};e.id=5577,e.ids=[5577],e.modules={429:e=>{e.exports=require("cookie-session")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},45616:e=>{e.exports=import("next-connect")},38051:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},86668:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>c,default:()=>o,routeModule:()=>p});var n=r(88667),i=r(25828),s=r(38051),u=r(30492),l=e([u]);u=(l.then?(await l)():l)[0];let o=(0,s.l)(u,"default"),c=(0,s.l)(u,"config"),p=new n.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth/return",pathname:"/api/auth/return",bundlePath:"",filename:""},userland:u});a()}catch(e){a(e)}})},30492:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>l});var n=r(15313),i=r(74186),s=e([i]);i=(s.then?(await s)():s)[0];let u="/api/auth/return",l=i.Z.use(u,n.Z.authenticate("steam",{failureRedirect:"/",failureMessage:!0,failWithError:!0})).get(u,(e,t)=>{t.end("<script>window.close();</script >")});a()}catch(e){a(e)}})},74186:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>c});var n=r(15313),i=r(45616),s=r(429),u=r.n(s),l=e([i]);i=(l.then?(await l)():l)[0];let o=(0,i.default)();o.use(u()({secret:process.env.SESSION_SECRET||"secret",maxAge:10368e6})),o.use(n.Z.initialize()),o.use(n.Z.session());let c=o;a()}catch(e){a(e)}})},15313:(e,t,r)=>{r.d(t,{Z:()=>u});let a=require("passport");var n=r.n(a);let i=require("passport-steam");n().serializeUser(async(e,t)=>{t(null,e)}),n().deserializeUser(async(e,t)=>{t(null,e)});let s=process.env.DOMAIN||"";s.startsWith("http")||(s=`https://${s}`),n().use(new i.Strategy({returnURL:`${s}/api/auth/return`,realm:`${s}/`,apiKey:process.env.STEAM_API_KEY||"",stateless:!0},(e,t,r)=>(t.identifier=e,r(null,t))));let u=n()},25828:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},88667:(e,t,r)=>{e.exports=r(20145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=86668);module.exports=r})();