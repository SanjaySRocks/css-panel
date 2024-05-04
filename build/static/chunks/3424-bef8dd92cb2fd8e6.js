"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3424],{86198:function(e,t,n){var a=n(12412),s=n(23733),r=n(99940),i=n(92876),l=n(74226),o=n(82167),c=n(38751);t.Z=e=>{let{open:t,children:n,action:d,handleClose:u,isLoading:m,actionText:h}=e;return(0,a.jsx)(s.R,{isOpen:t,onOpenChange:!m&&u||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:(0,a.jsx)(r.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.k,{className:"flex flex-col gap-1",children:"Confirmation"}),(0,a.jsx)(l.I,{children:n}),(0,a.jsxs)(o.R,{children:[(0,a.jsx)(c.A,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),(0,a.jsx)(c.A,{color:"primary",onPress:d,isLoading:m,children:h||"Confirm"})]})]})})})}},47449:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(12412),s=n(73390),r=n(9646),i=n(14690),l=n(11225),o=n(11402),c=(e,t)=>{(0,o.useEffect)(()=>{let n=n=>{let a=null==e?void 0:e.current;!a||(null==a?void 0:a.contains(n.target))||t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])},d=n(74837),u=e=>{let{open:t,x:n,y:u,handleCloseMenu:m,items:h}=e,x=(0,o.useRef)(null);c(x,m);let{admin:p}=(0,d.ZP)(),j=null==p?void 0:p.flags,v=h.map(e=>{let{category:t,items:n}=e;return{category:t,items:n.filter(e=>{let{flags:t}=e;return!t||t.some(e=>null==j?void 0:j.includes(e))})}});return t&&(0,a.jsx)(l.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:n,top:u},ref:x,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},children:(0,a.jsx)(s.X,{variant:"flat","aria-label":"Listbox menu with sections",items:h,children:v.map(e=>{let{category:t,items:n}=e;return(0,a.jsx)(r.y,{title:t,children:n.map(e=>{let{key:t,description:n,icon:s,color:r,onClick:l}=e;return(0,a.jsx)(i.R,{description:(0,a.jsx)("span",{className:"text-foreground-700",children:n}),startContent:(0,a.jsx)(s,{}),color:r||"default",onClick:()=>{l&&l(),m()},children:t},t)})},t)})})})}},43424:function(e,t,n){n.d(t,{f:function(){return q},default:function(){return B}});var a=n(12412),s=n(21358),r=n(18134),i=n(77296),l=n(59688),o=n(36574),c=n(11365),d=n(98882),u=n(33425),m=n(14345),h=n(7864),x=n(66805),p=n(14690),j=n(95910),v=n(96044),g=n(80165),f=n(65979),y=n(75522),b=n(38751),w=n(22155),C=n(10889),T=n(11402),z=n(98786),E=n(66418),N=n(31946),P=n(72160),Z=n(85440);let D=(0,P.Ue)(e=>({action:null,setAction:t=>e({action:t}),isLoading:!1,setIsLoading:t=>e({isLoading:t}),details:null,setDetails:t=>e({details:t}),reset:()=>e({action:null,isLoading:!1,details:null})}));Z.z.object({reason:Z.z.string()}),Z.z.object({reason:Z.z.string(),duration:Z.z.string(),type:N.P}),Z.z.object({comment:Z.z.string()}),Z.z.object({reason:Z.z.string(),duration:Z.z.string(),type:N.P}),Z.z.enum(["unmute","remute","comment","edit","delete"]);var S=n(68601),_=n(86198),M=n(94643),L=n(47449),R=n(74837),A=n(41920),k=n(65414),I=n(55939),U=n(64093),Y=n(23733),X=n(99940),F=n(92876),V=n(74226),G=n(82167),O=n(30052),W=e=>{let{open:t,setOpen:n,mutate:s}=e,[r,i]=(0,T.useState)(!1),l=async()=>{if(!r){i(!0);try{await (0,O.Z)("/api/mutes",{method:"POST",data:o.values}),await s(),k.Am.success("Succesfully muted player!"),n(!1)}catch(n){var e;let t=(null==n?void 0:null===(e=n.response)||void 0===e?void 0:e.data)||(null==n?void 0:n.message);console.error(n),k.Am.error("Failed to create mute!\n".concat(t||n))}i(!1)}},o=(0,I.c)({initialValues:{player_steamid:"",reason:"",duration:"",comment:"",type:"MUTE"},validate:(0,U.F)(N.Z)});return(0,a.jsx)(Y.R,{isOpen:t,onOpenChange:r?void 0:n,children:(0,a.jsx)(X.A,{children:e=>(0,a.jsxs)("form",{onSubmit:o.onSubmit(l),children:[(0,a.jsx)(F.k,{className:"flex flex-col gap-1",children:"Create new mute"}),(0,a.jsxs)(V.I,{children:[(0,a.jsx)(C.Y,{...o.getInputProps("player_steamid"),errorMessage:o.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:r,autoFocus:!0}),(0,a.jsx)(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[o.values.type],onChange:e=>o.setValues({type:e.target.value}),isDisabled:r,disallowEmptySelection:!0,children:q.map(e=>(0,a.jsx)(p.R,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(C.Y,{...o.getInputProps("reason"),errorMessage:o.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:r}),(0,a.jsx)(C.Y,{...o.getInputProps("duration"),errorMessage:o.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:r}),(0,a.jsx)(C.Y,{...o.getInputProps("comment"),errorMessage:o.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:r}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start now ",(0,a.jsxs)("b",{children:["(",(0,S.Z)(),")"]})]}),(0,a.jsxs)("span",{children:["and will end at"," ",(0,a.jsx)("b",{children:"0"===o.values.duration?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,S.Z)(new Date().getTime()+6e4*Number(o.values.duration))})]})]})]}),(0,a.jsxs)(G.R,{children:[(0,a.jsx)(b.A,{color:"danger",variant:"flat",onPress:e,isDisabled:r,children:"Cancel"}),(0,a.jsx)(b.A,{color:"primary",type:"submit",isLoading:r,children:"Mute player"})]})]})})})},J=e=>{switch(e){case"ACTIVE":return(0,a.jsx)(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return(0,a.jsx)(E.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNMUTED":return(0,a.jsx)(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return(0,a.jsx)(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}},H=n(93806),K=n(1281);let q=[{name:"Gag (Chat)",value:"GAG"},{name:"Mute (Voice)",value:"MUTE"},{name:"Silence (Both)",value:"SILENCE"}];var B=e=>{var t,n;let{type:N}=e,[P,Z]=(0,T.useState)(!1),[I,U]=(0,T.useState)(1),[Y,X]=(0,T.useState)(""),[F]=(0,w.Nr)(Y,500),V=10;"/"===(0,f.usePathname)()&&(V=5);let{data:G,isLoading:B,mutate:Q}=(0,K.ZP)("/api/mutes?page=".concat(I,"&rows=").concat(V,"&query=").concat(F),A.Z,{keepPreviousData:!0}),$=(0,T.useMemo)(()=>(null==G?void 0:G.count)?Math.ceil(G.count/V):0,[null==G?void 0:G.count,V]),{admin:ee}=(0,R.ZP)(),{x:et,y:en,open:ea,handleCloseMenu:es,handleOpen:er,info:ei}=(0,M.Z)(),el=D(e=>e.action),eo=D(e=>e.setAction),ec=D(e=>e.details),ed=D(e=>e.setDetails),eu=D(e=>e.isLoading),em=D(e=>e.setIsLoading),eh=D(e=>e.reset),ex=async()=>{if(el&&!eu&&ei){em(!0);try{await O.Z.post("/api/mutes/".concat(ei.id),{action:el,details:ec}),await Q(),eh(),k.ZP.success("Player ".concat(el,"ed successfully"))}catch(e){k.ZP.error("Error ".concat(el," player"))}em(!1)}},ep=(e,t)=>{var n,s,r;switch(t){case"player_name":return(0,a.jsx)(H.default,{href:"https://steamcommunity.com/profiles/".concat(e.player_steamid),target:"_blank",passHref:!0,children:(0,a.jsx)(z.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:null===(n=e.player_name)||void 0===n?void 0:n.slice(0,10)})});case"status":return J(e.status);case"reason":return e.reason.length>10?(0,a.jsx)(y.e,{content:e.reason,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.reason});case"unmute_reason":return e.unmute_reason&&e.unmute_reason.length>10?(0,a.jsx)(y.e,{content:e.unmute_reason,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:null===(s=e.unmute_reason)||void 0===s?void 0:s.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.unmute_reason});case"type":return(0,a.jsx)(E.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:e.type});case"duration":return(0,a.jsx)(E.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":"".concat(e.duration," minutes")});case"admin_name":return e.admin_name?"Console"===e.admin_name?(0,a.jsx)(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):(0,a.jsx)(H.default,{href:"https://steamcommunity.com/profiles/".concat(e.admin_steamid),target:"_blank",passHref:!0,children:(0,a.jsx)(z.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):(0,a.jsx)(a.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return(0,a.jsx)(E.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNMUTED"===e.status||"EXPIRED"===e.status)return(0,a.jsx)(v.W,{color:"success",value:100,isStriped:!0});let i=new Date,l=new Date(e.created),o=new Date(e.ends),c=Math.round((i.getTime()-l.getTime())/(o.getTime()-l.getTime())*100)||0,d=Math.round((o.getTime()-i.getTime())/6e4),u=c<50?"warning":c>=100?"success":"primary";return d>0?(0,a.jsx)(y.e,{content:"".concat(d," minutes left"),color:u,showArrow:!0,children:(0,a.jsx)(v.W,{color:u,value:c,isStriped:!0})}):(0,a.jsx)(v.W,{color:u,value:c,isStriped:!0});case"comment":return e.comment?e.comment.length>10?(0,a.jsx)(y.e,{content:e.comment,showArrow:!0,children:(0,a.jsx)("div",{className:"text-xs font-light",children:null===(r=e.comment)||void 0===r?void 0:r.slice(0,10)})}):(0,a.jsx)("div",{className:"text-xs font-light",children:e.comment}):(0,a.jsx)(a.Fragment,{children:"-"});case"created":return(0,S.Z)(e.created);default:return(0,a.jsx)(a.Fragment,{})}},ej=(0,a.jsx)(a.Fragment,{});switch(N){case"MANAGE":ej=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Admin"},"admin_name"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft"),(0,a.jsx)(r.j,{children:"Comment"},"comment")]});break;case"SMALL":ej=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft")]});break;case"NORMAL":ej=(0,a.jsxs)(s.J,{children:[(0,a.jsx)(r.j,{children:"Player"},"player_name"),(0,a.jsx)(r.j,{children:"Status"},"status"),(0,a.jsx)(r.j,{children:"Admin"},"admin_name"),(0,a.jsx)(r.j,{children:"Type"},"type"),(0,a.jsx)(r.j,{children:"Reason"},"reason"),(0,a.jsx)(r.j,{children:"Remove Reason"},"unmute_reason"),(0,a.jsx)(r.j,{children:"Duration"},"duration"),(0,a.jsx)(r.j,{children:"Time left"},"timeLeft")]})}let ev=["@css/generic","@css/root","@web/mutes"],eg=(null==ee?void 0:null===(t=ee.flags)||void 0===t?void 0:t.some(e=>ev.includes(e)))||!1;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.b,{topContent:(0,a.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,a.jsxs)("div",{className:"text-start",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold",children:"Mutes"}),(0,a.jsxs)("code",{className:"text-sm font-normal",children:["total: ",(null==G?void 0:G.count)||""]})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(y.e,{content:"Search for player name, steamid, IP, reason, etc.",closeDelay:50,color:"primary",delay:400,children:(0,a.jsx)(C.Y,{label:"Search",labelPlacement:"outside-left",value:Y,onValueChange:X,size:"sm",classNames:{mainWrapper:"h-fit",base:"h-fit"},isClearable:!0})}),ee&&eg&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(b.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>Z(!0),children:[(0,a.jsx)(d.Z,{size:46}),"New mute"]}),(0,a.jsx)(W,{open:P,setOpen:Z,mutate:Q})]})]})]}),bottomContent:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex w-full justify-center",children:(0,a.jsx)(j.g,{color:"primary",page:I,total:$,onChange:e=>U(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),ee&&"MANAGE"===N&&(0,a.jsx)("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[ej,(0,a.jsx)(l.y,{items:null!==(n=null==G?void 0:G.results)&&void 0!==n?n:[],loadingContent:(0,a.jsx)(g.c,{}),loadingState:B?"loading":"idle",children:e=>(0,a.jsx)(o.g,{onContextMenu:t=>ee&&er&&er(t,e)||void 0,children:t=>(0,a.jsx)(c.X,{children:ep(e,t)})},e.id)})]}),ee&&(0,a.jsx)(L.Z,{open:ea,x:et,y:en,handleCloseMenu:es,items:[{category:"Mute Actions",items:[{key:"Comment",description:"Write a comment on this mute, this will be visible to other admins",icon:u.Z,color:"default",onClick:()=>{eo("comment"),ed({comment:(null==ei?void 0:ei.comment)||""})},flags:["@css/generic","@css/root","@web/mutes","@web/root"]},{key:(null==ei?void 0:ei.status)==="UNMUTED"||(null==ei?void 0:ei.status)==="EXPIRED"?"Re-mute":"Remove Mute (shorten)",description:(null==ei?void 0:ei.status)==="UNMUTED"||(null==ei?void 0:ei.status)==="EXPIRED"?"Re-mute the player":"Remove the player mute (shorten the duration)",icon:m.Z,color:"default",onClick:()=>{(null==ei?void 0:ei.status)==="UNMUTED"||(null==ei?void 0:ei.status)==="EXPIRED"?(eo("remute"),ed({reason:"",duration:"0",type:"MUTE"})):(eo("unmute"),ed({reason:""}))},flags:["@css/generic","@css/root","@web/mutes","@web/root"]},{key:"Edit Mute",description:"Edit the mute duration or reason",icon:u.Z,color:"primary",onClick:()=>{eo("edit"),ed({reason:(null==ei?void 0:ei.reason)||"",duration:(null==ei?void 0:ei.duration.toString())||"0",type:(null==ei?void 0:ei.type)||"MUTE"})},flags:["@css/generic","@css/root","@web/mutes","@web/root"]},{key:"Delete Mute",description:"Delete the mute from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{eo("delete")},flags:["@css/generic","@css/root","@web/mutes","@web/root"]}]}]}),ee&&(0,a.jsxs)(_.Z,{open:"comment"===el,handleClose:eh,action:ex,isLoading:eu,actionText:"Save",children:[(0,a.jsx)("div",{children:"Write a comment on this mute, this will be visible to other admins"}),(0,a.jsx)(C.Y,{label:"Comment",value:(null==ec?void 0:ec.comment)||"",onValueChange:e=>ed({comment:e})})]}),ee&&(0,a.jsxs)(_.Z,{open:"unmute"===el,handleClose:eh,action:ex,isLoading:eu,actionText:"Unmute",children:[(0,a.jsx)("div",{children:"You sure you want to unmute the user?"}),(0,a.jsx)(C.Y,{label:"Reason",value:(null==ec?void 0:ec.reason)||"",onValueChange:e=>ed({reason:e})})]}),ee&&(0,a.jsxs)(_.Z,{open:"remute"===el,handleClose:eh,action:ex,isLoading:eu,actionText:"Remute",children:[(0,a.jsx)("div",{children:"You sure you want to remute the user?"}),(0,a.jsx)(C.Y,{label:"Reason",value:(null==ec?void 0:ec.reason)||"",onValueChange:e=>ed({...ec,reason:e})}),(0,a.jsx)(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==ec?void 0:ec.type],onChange:e=>ed({...ec,type:e.target.value}),disallowEmptySelection:!0,children:q.map(e=>(0,a.jsx)(p.R,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(C.Y,{label:"Time (in minutes)",type:"number",value:(null==ec?void 0:ec.duration)||"",onValueChange:e=>ed({...ec,duration:e}),description:"Time in minutes, 0 = Permanent mute"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute will start again at ",(0,a.jsx)("b",{children:(0,S.Z)()})]}),(0,a.jsxs)("span",{children:["the mute will end at"," ",(0,a.jsx)("b",{children:(null==ec?void 0:ec.duration)==="0"?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,S.Z)(new Date().getTime()+6e4*Number(null==ec?void 0:ec.duration))})]})]})]}),ee&&(0,a.jsxs)(_.Z,{open:"edit"===el,handleClose:eh,action:ex,isLoading:eu,actionText:"Edit",children:[(0,a.jsx)("div",{children:"This will replace the mute duration or reason"}),(0,a.jsx)(C.Y,{label:"Mute Reason",value:null==ec?void 0:ec.reason,onValueChange:e=>ed({...ec,reason:e})}),(0,a.jsx)(x.g,{label:"Type",placeholder:"Select the mute type",selectedKeys:[null==ec?void 0:ec.type],onChange:e=>ed({...ec,type:e.target.value}),disallowEmptySelection:!0,children:q.map(e=>(0,a.jsx)(p.R,{value:e.value,children:e.name},e.value))}),(0,a.jsx)(C.Y,{label:"Mute Time (in minutes)",type:"number",value:(null==ec?void 0:ec.duration)||"",onValueChange:e=>ed({...ec,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent mute (will replace the duration)"}),(0,a.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,a.jsxs)("span",{children:["The mute started at ",(0,a.jsx)("b",{children:(0,S.Z)(null==ei?void 0:ei.created)})]}),(0,a.jsxs)("span",{children:["After the edit, the mute will end at"," ",(0,a.jsx)("b",{children:(null==ec?void 0:ec.duration)==="0"?(0,a.jsx)("b",{className:"text-red-700",children:"Permanent"}):(0,S.Z)(new Date((null==ei?void 0:ei.created)||"").getTime()+6e4*Number(null==ec?void 0:ec.duration))})]})]})]}),ee&&(0,a.jsx)(_.Z,{open:"delete"===el,handleClose:eh,action:ex,isLoading:eu,actionText:"Delete",children:(0,a.jsx)("div",{children:"Are you sure you want to delete the mute? this action is permanent and cannot be undone"})})]})}},41920:function(e,t,n){var a=n(30052);t.Z=e=>a.Z.get(e).then(e=>e.data)},68601:function(e,t){t.Z=e=>{let t=e?new Date(e):new Date;return t.toLocaleDateString()+" - "+t.toLocaleTimeString()}},74837:function(e,t,n){n.d(t,{hY:function(){return l},jc:function(){return o}});var a=n(65414),s=n(1281),r=n(41920),i=n(30052);let l=async()=>{await (0,i.Z)("/api/auth/logout"),await (0,s.JG)("/api/auth"),a.Am.success("Logged out successfully")},o=()=>{let e=window.innerWidth/2-300,t=window.innerHeight/2-400,n=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(t,", left=").concat(e)),r=setInterval(async()=>{n&&n.closed&&(await (0,s.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(r))},1e3)};t.ZP=()=>{let{data:e,isLoading:t,error:n}=(0,s.ZP)("/api/auth",r.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:n||!e?null:e.user,admin:n||!e?null:e.admin,isLoading:t}}},94643:function(e,t,n){var a=n(11402);t.Z=()=>{let[e,t]=(0,a.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{t({...e,open:!1})},handleOpen:(e,n)=>{e.preventDefault();let{pageX:a,pageY:s}=e;t({open:!0,x:a,y:s,info:n})},info:e.info}}},31946:function(e,t,n){n.d(t,{P:function(){return s}});var a=n(85440);let s=a.z.enum(["GAG","MUTE","SILENCE"]),r=a.z.object({player_steamid:a.z.string(),reason:a.z.string().min(3),duration:a.z.string(),comment:a.z.string().optional(),type:s});t.Z=r}}]);