(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7908],{1564:function(e,t,n){Promise.resolve().then(n.bind(n,3120))},7512:function(e,t,n){"use strict";n.r(t);var s=n(1840),i=n(7917),r=n(1318),a=n(4740),o=n(646);t.default=e=>{let{children:t,flags:n}=e,{admin:l,isLoading:u}=(0,o.ZP)(),c=(0,r.useRouter)();return(0,a.useEffect)(()=>{if(!u){if(!l)return c.push("/");if(n.length>0&&!n.some(e=>{var t;return null===(t=l.flags)||void 0===t?void 0:t.includes(e)}))return c.push("/admin")}},[l,u,c,n]),u?(0,s.jsx)(i.c,{}):l?(0,s.jsx)(s.Fragment,{children:t}):(0,s.jsx)(s.Fragment,{children:"No Access"})}},8136:function(e,t,n){"use strict";n.r(t),n.d(t,{ADMIN_TABS:function(){return o}});var s=n(1840),i=n(1318),r=n(1426),a=n(986);t.default=()=>{let e=(0,i.usePathname)(),t=(0,i.useRouter)();return(0,s.jsx)(r.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:o,children:e=>(0,s.jsx)(a.r,{title:e.title},e.path)})};let o=[{path:"/admin",title:"Statistics",permissions:[]},{path:"/admin/modules",title:"Modules",permissions:[]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},3120:function(e,t,n){"use strict";n.r(t);var s=n(1840),i=n(1318),r=n(8136),a=n(7512),o=n(2554);t.default=()=>{let e=(0,i.usePathname)(),t=r.ADMIN_TABS.find(t=>t.path===e);return(0,s.jsx)(a.default,{flags:(null==t?void 0:t.permissions)||[],children:(0,s.jsx)(o.default,{type:"MANAGE"})})}},9779:function(e,t,n){"use strict";var s=n(1840),i=n(7040),r=n(964),a=n(7743),o=n(8826),l=n(9954),u=n(776);t.Z=e=>{let{open:t,children:n,action:c,handleClose:d,isLoading:m,actionText:p}=e;return(0,s.jsx)(i.R,{isOpen:t,onOpenChange:!m&&d||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:(0,s.jsx)(r.A,{children:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.k,{className:"flex flex-col gap-1",children:"Confirmation"}),(0,s.jsx)(o.I,{children:n}),(0,s.jsxs)(l.R,{children:[(0,s.jsx)(u.A,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),(0,s.jsx)(u.A,{color:"primary",onPress:c,isLoading:m,children:p||"Confirm"})]})]})})})}},9325:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(1840),i=n(7100),r=n(2819),a=n(4838),o=n(4740),l=(e,t)=>{(0,o.useEffect)(()=>{let n=n=>{let s=null==e?void 0:e.current;!s||(null==s?void 0:s.contains(n.target))||t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])},u=n(851),c=e=>{let{open:t,x:n,y:c,handleCloseMenu:d,items:m}=e,p=(0,o.useRef)(null);return l(p,d),t&&(0,s.jsx)(u.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:n,top:c},ref:p,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},children:(0,s.jsx)(i.X,{variant:"flat","aria-label":"Listbox menu with sections",items:m,children:m.map(e=>{let{category:t,items:n}=e;return(0,s.jsx)(r.y,{title:t,children:n.map(e=>{let{key:t,description:n,icon:i,color:r,onClick:o}=e;return(0,s.jsx)(a.R,{description:(0,s.jsx)("span",{className:"text-foreground-700",children:n}),startContent:(0,s.jsx)(i,{}),color:r||"default",onClick:()=>{o&&o(),d()},children:t},t)})},t)})})})}},175:function(e,t,n){"use strict";var s=n(1916);t.Z=e=>s.Z.get(e).then(e=>e.data)},5549:function(e,t){"use strict";t.Z=e=>{let t=e?new Date(e):new Date;return t.toLocaleDateString()+" - "+t.toLocaleTimeString()}},646:function(e,t,n){"use strict";n.d(t,{hY:function(){return o},jc:function(){return l}});var s=n(2573),i=n(917),r=n(175),a=n(1916);let o=async()=>{await (0,a.Z)("/api/auth/logout"),await (0,i.JG)("/api/auth"),s.Am.success("Logged out successfully")},l=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,n=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),r=setInterval(async()=>{n&&n.closed&&(await (0,i.JG)("/api/auth"),s.Am.success("Logged in successfully!"),clearInterval(r))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:n}=(0,i.ZP)("/api/auth",r.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:n||!e?null:e.user,admin:n||!e?null:e.admin,isLoading:t}}},4631:function(e,t,n){"use strict";var s=n(4740);t.Z=()=>{let[e,t]=(0,s.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{t({...e,open:!1})},handleOpen:(e,n)=>{e.preventDefault();let{pageX:s,pageY:i}=e;t({open:!0,x:s,y:i,info:n})},info:e.info}}}},function(e){e.O(0,[6286,1781,3277,6969,9261,2299,5792,6402,1326,3910,9764,9741,8659,1716,1062,9638,7819,5343,2554,7942,1784,1744],function(){return e(e.s=1564)}),_N_E=e.O()}]);