(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8314],{97872:function(e,t,s){Promise.resolve().then(s.bind(s,90679)),Promise.resolve().then(s.bind(s,54773))},90679:function(e,t,s){"use strict";var n=s(12412),r=s(80165),i=s(65979),o=s(11402),a=s(74837);t.default=e=>{let{children:t,flags:s}=e,{admin:u,isLoading:c}=(0,a.ZP)(),l=(0,i.useRouter)();return(0,o.useEffect)(()=>{if(!c&&(!u||s.length>0&&!s.some(e=>{var t;return null===(t=u.flags)||void 0===t?void 0:t.includes(e)})))return l.push("/")},[u,c,l,s]),c?(0,n.jsx)(r.c,{}):u?(0,n.jsx)(n.Fragment,{children:t}):(0,n.jsx)(n.Fragment,{children:"No Access"})}},54773:function(e,t,s){"use strict";s.d(t,{r:function(){return u}});var n=s(12412),r=s(65979),i=s(28365),o=s(13327),a=s(74837);t.default=()=>{let e=(0,r.usePathname)(),t=(0,r.useRouter)(),{admin:s}=(0,a.ZP)(),c=(null==s?void 0:s.flags)||[],l=u.filter(e=>e.permissions.some(e=>c.includes(e)));return(0,n.jsx)(i.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:l,children:e=>(0,n.jsx)(o.r,{title:e.title},e.path)})};let u=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},65979:function(e,t,s){"use strict";var n=s(54760);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}}),s.o(n,"useSearchParams")&&s.d(t,{useSearchParams:function(){return n.useSearchParams}})},41920:function(e,t,s){"use strict";var n=s(30052);t.Z=e=>n.Z.get(e).then(e=>e.data)},74837:function(e,t,s){"use strict";s.d(t,{hY:function(){return a},jc:function(){return u}});var n=s(65414),r=s(1281),i=s(41920),o=s(30052);let a=async()=>{await (0,o.Z)("/api/auth/logout"),await (0,r.JG)("/api/auth"),n.Am.success("Logged out successfully")},u=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,s=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),i=setInterval(async()=>{s&&s.closed&&(await (0,r.JG)("/api/auth"),n.Am.success("Logged in successfully!"),clearInterval(i))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:s}=(0,r.ZP)("/api/auth",i.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:s||!e?null:e.user,admin:s||!e?null:e.admin,isLoading:t}}},40293:function(e,t,s){"use strict";s.d(t,{t:function(){return r}});var n=s(11402);function r(e={}){let{rerender:t=!1,delay:s=0}=e,r=(0,n.useRef)(!1),[i,o]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{r.current=!0;let e=null;return t&&(s>0?e=setTimeout(()=>{o(!0)},s):o(!0)),()=>{r.current=!1,t&&o(!1),e&&clearTimeout(e)}},[t]),[(0,n.useCallback)(()=>r.current,[]),i]}}},function(e){e.O(0,[687,9208,1281,5414,6187,5204,3866,7416,1744],function(){return e(e.s=97872)}),_N_E=e.O()}]);