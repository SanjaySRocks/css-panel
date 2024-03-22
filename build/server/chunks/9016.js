"use strict";exports.id=9016,exports.ids=[9016],exports.modules={9016:(e,n,a)=>{a.r(n),a.d(n,{default:()=>O});var s=a(98284),t=a(69501),r=a(83701),i=a(44375),l=a(78447),o=a(72178),d=a(43807),c=a(42685),m=a(66819),u=a(48768),h=a(73876),x=a(22173),j=a(86221),p=a(58510),b=a(37297),g=a(70627),f=a(36065),y=a(72150),v=a(61756),w=a(73553),N=a(27083),_=a(31755),P=a(85615);let C=e=>{switch(e){case"ACTIVE":return s.jsx(w.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Active"});case"EXPIRED":return s.jsx(w.z,{color:"success",size:"sm",variant:"flat",radius:"sm",children:"Expired"});case"UNBANNED":return s.jsx(w.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Removed"});default:return s.jsx(w.z,{color:"secondary",size:"sm",variant:"flat",radius:"sm",children:"Unknown"})}};var z=a(80823),D=a(70059),A=a(46705),R=a(83201),T=a(80131),Z=a(11168),E=a(41278),S=a(11082),L=a(85733),I=a(74591),k=a(34002),M=a(76425),Y=a(1902),B=a(16490),X=a(61524),U=a(4570);let $=U.z.object({player_steamid:U.z.string().optional(),player_ip:U.z.string().optional(),reason:U.z.string().min(3),duration:U.z.string(),comment:U.z.string().optional()}),F=({open:e,setOpen:n,mutate:a})=>{let[t,r]=(0,x.useState)(!1),i=async()=>{if(!t){r(!0);try{await (0,Z.Z)("/api/bans",{method:"POST",data:l.values}),await a(),E.Am.success("Succesfully banned player!"),n(!1)}catch(n){let e=n?.response?.data||n?.message;console.error(n),E.Am.error(`Failed to create ban!
${e||n}`)}r(!1)}},l=(0,L.c)({initialValues:{player_steamid:"",player_ip:"",reason:"",duration:"",comment:""},validate:(0,I.F)($)});return s.jsx(k.R,{isOpen:e,onOpenChange:t?void 0:n,children:s.jsx(M.A,{children:e=>(0,s.jsxs)("form",{onSubmit:l.onSubmit(i),children:[s.jsx(Y.k,{className:"flex flex-col gap-1",children:"Create new ban"}),(0,s.jsxs)(B.I,{children:[s.jsx("p",{children:"You can ban a player by either their Steam64 / SteamId / Profile URL or their IP address."}),s.jsx(v.Y,{...l.getInputProps("player_steamid"),errorMessage:l.errors.player_steamid,label:"Player Steam64 / SteamId / Profile URL",placeholder:"7656XXXXXX",variant:"bordered",isDisabled:t||!!l.values.player_ip,autoFocus:!0}),s.jsx(v.Y,{...l.getInputProps("player_ip"),errorMessage:l.errors.player_ip,label:"IP Address",placeholder:"1.1.1.1",variant:"bordered",isDisabled:t||!!l.values.player_steamid}),s.jsx(v.Y,{...l.getInputProps("reason"),errorMessage:l.errors.reason,label:"Reason (min 3 characters)",placeholder:"Cheating / Griefing / Toxicity / etc.",variant:"bordered",isDisabled:t}),s.jsx(v.Y,{...l.getInputProps("duration"),errorMessage:l.errors.duration,label:"Duration in minutes",placeholder:"for example, 60",description:"0 for permanent",variant:"bordered",type:"number",isDisabled:t}),s.jsx(v.Y,{...l.getInputProps("comment"),errorMessage:l.errors.comment,label:"Comment (optional)",variant:"bordered",isDisabled:t}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start now ",(0,s.jsxs)("b",{children:["(",(0,S.Z)(),")"]})]}),(0,s.jsxs)("span",{children:["and will end at"," ",s.jsx("b",{children:"0"===l.values.duration?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,S.Z)(new Date().getTime()+6e4*Number(l.values.duration))})]})]})]}),(0,s.jsxs)(X.R,{children:[s.jsx(y.A,{color:"danger",variant:"flat",onPress:e,isDisabled:t,children:"Cancel"}),s.jsx(y.A,{color:"primary",type:"submit",isLoading:t,children:"Ban player"})]})]})})})},V=(0,a(2193).Ue)(e=>({action:null,setAction:n=>e({action:n}),isLoading:!1,setIsLoading:n=>e({isLoading:n}),details:null,setDetails:n=>e({details:n}),reset:()=>e({action:null,isLoading:!1,details:null})}));U.z.object({reason:U.z.string()}),U.z.object({reason:U.z.string(),duration:U.z.string()}),U.z.object({comment:U.z.string()}),U.z.object({reason:U.z.string(),duration:U.z.string()}),U.z.enum(["unban","reban","comment","edit","delete"]);let O=({type:e})=>{let[n,a]=(0,x.useState)(!1),[L,I]=(0,x.useState)(1),k=10;"/"===(0,f.usePathname)()&&(k=5);let{data:M,isLoading:Y,mutate:B}=(0,P.ZP)(`/api/bans?page=${L}&rows=${k}`,_.Z,{keepPreviousData:!0}),X=(0,x.useMemo)(()=>M?.count?Math.ceil(M.count/k):0,[M?.count,k]),{admin:U}=(0,A.ZP)(),{x:$,y:O,open:W,handleCloseMenu:J,handleOpen:G,info:H}=(0,D.Z)(),q=V(e=>e.action),K=V(e=>e.setAction),Q=V(e=>e.details),ee=V(e=>e.setDetails),en=V(e=>e.isLoading),ea=V(e=>e.setIsLoading),es=V(e=>e.reset),et=async()=>{if(q&&!en&&H){ea(!0);try{await Z.Z.post(`/api/bans/${H.id}`,{action:q,details:Q}),await B(),es(),E.ZP.success(`Player ${q}ed successfully`)}catch(e){E.ZP.error(`Error ${q} player`)}ea(!1)}},er=(e,n)=>{switch(n){case"player_name":return s.jsx(z.default,{href:`https://steamcommunity.com/profiles/${e.player_steamid}`,target:"_blank",passHref:!0,children:s.jsx(N.z,{avatarProps:{radius:"lg",src:e.player_avatar||""},name:e.player_name,children:e.player_name?.slice(0,10)})});case"status":return C(e.status);case"reason":return e.reason.length>10?s.jsx(g.e,{content:e.reason,showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.reason.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.reason});case"unban_reason":return e.unban_reason&&e.unban_reason.length>10?s.jsx(g.e,{content:e.unban_reason,showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.unban_reason?.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.unban_reason});case"duration":return s.jsx(w.z,{color:"primary",size:"sm",variant:"flat",radius:"sm",children:0===e.duration?"Permanent":`${e.duration} minutes`});case"admin_name":return e.admin_name?"Console"===e.admin_name?s.jsx(w.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Console"}):s.jsx(z.default,{href:`https://steamcommunity.com/profiles/${e.admin_steamid}`,target:"_blank",passHref:!0,children:s.jsx(N.z,{avatarProps:{radius:"lg",src:e.admin_avatar||""},name:e.admin_name,children:e.admin_name})}):s.jsx(s.Fragment,{children:"-"});case"timeLeft":if(0===e.duration)return s.jsx(w.z,{color:"danger",size:"sm",variant:"flat",radius:"sm",children:"Permanent"});if("UNBANNED"===e.status||"EXPIRED"===e.status)return s.jsx(p.W,{color:"success",value:100,isStriped:!0});let a=new Date,t=new Date(e.created),r=new Date(e.ends),i=Math.round((a.getTime()-t.getTime())/(r.getTime()-t.getTime())*100),l=Math.round((r.getTime()-a.getTime())/6e4),o=i<50?"warning":i>=100?"success":"primary";return l>0?s.jsx(g.e,{content:`${l} minutes left`,color:o,showArrow:!0,children:s.jsx(p.W,{color:o,value:i,isStriped:!0})}):s.jsx(p.W,{color:o,value:i,isStriped:!0});case"comment":return e.comment?e.comment.length>10?s.jsx(g.e,{content:e.comment,showArrow:!0,children:s.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)})}):s.jsx("div",{className:"text-xs font-light",children:e.comment?.slice(0,10)}):s.jsx(s.Fragment,{children:"-"});default:return s.jsx(s.Fragment,{})}},ei=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Admin"},"admin_name"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Remove Reason"},"unban_reason"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft"),s.jsx(r.j,{children:"Comment"},"comment")]});switch(e){case"MANAGE":ei=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Admin"},"admin_name"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Remove Reason"},"unban_reason"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft"),s.jsx(r.j,{children:"Comment"},"comment")]});break;case"SMALL":ei=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft")]});break;case"NORMAL":ei=(0,s.jsxs)(t.J,{children:[s.jsx(r.j,{children:"Player"},"player_name"),s.jsx(r.j,{children:"Status"},"status"),s.jsx(r.j,{children:"Admin"},"admin_name"),s.jsx(r.j,{children:"Reason"},"reason"),s.jsx(r.j,{children:"Remove Reason"},"unban_reason"),s.jsx(r.j,{children:"Duration"},"duration"),s.jsx(r.j,{children:"Time left"},"timeLeft")]})}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.b,{topContent:(0,s.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,s.jsxs)("div",{className:"text-start",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Bans"}),(0,s.jsxs)("code",{className:"text-sm font-normal",children:["total: ",M?.count||""]})]}),U&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.A,{size:"sm",variant:"flat",color:"primary",onClick:()=>a(!0),children:[s.jsx(c.Z,{}),"New ban"]}),s.jsx(F,{open:n,setOpen:a,mutate:B})]})]}),bottomContent:(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"flex w-full justify-center",children:s.jsx(j.g,{color:"primary",page:L,total:X,onChange:e=>I(e),size:"sm",isCompact:!0,showControls:!0,showShadow:!0})}),U&&"MANAGE"===e&&s.jsx("span",{className:"text-sm",children:"Tip, your can right click on a player row for more actions"})]}),children:[ei,s.jsx(l.y,{items:M?.results??[],loadingContent:s.jsx(b.c,{}),loadingState:Y?"loading":"idle",children:e=>s.jsx(o.g,{onContextMenu:n=>U&&G&&G(n,e)||void 0,children:n=>s.jsx(d.X,{children:er(e,n)})},e.id)})]}),U&&s.jsx(R.Z,{open:W,x:$,y:O,handleCloseMenu:J,items:[{category:"Ban Actions",items:[{key:"Comment",description:"Write a comment on this ban, this will be visible to other admins",icon:m.Z,color:"default",onClick:()=>{K("comment"),ee({comment:H?.comment||""})}},{key:H?.status==="UNBANNED"||H?.status==="EXPIRED"?"Reban":"Remove Ban (shorten)",description:H?.status==="UNBANNED"||H?.status==="EXPIRED"?"Reban the player":"Remove the player ban (shorten the duration)",icon:u.Z,color:"default",onClick:()=>{H?.status==="UNBANNED"||H?.status==="EXPIRED"?(K("reban"),ee({reason:"",duration:"0"})):(K("unban"),ee({reason:""}))}},{key:"Edit Ban",description:"Edit the ban duration or reason",icon:m.Z,color:"primary",onClick:()=>{K("edit"),ee({reason:H?.reason||"",duration:H?.duration?.toString()||"0"})}},{key:"Delete Ban",description:"Delete the ban from the database (permanent action)",icon:h.Z,color:"danger",onClick:()=>{K("delete")}}]}]}),U&&(0,s.jsxs)(T.Z,{open:"comment"===q,handleClose:es,action:et,isLoading:en,actionText:"Save",children:[s.jsx("div",{children:"Write a comment on this ban, this will be visible to other admins"}),s.jsx(v.Y,{label:"Comment",value:Q?.comment||"",onValueChange:e=>ee({comment:e})})]}),U&&(0,s.jsxs)(T.Z,{open:"unban"===q,handleClose:es,action:et,isLoading:en,actionText:"Unban",children:[s.jsx("div",{children:"You sure you want to unban the user?"}),s.jsx(v.Y,{label:"Reason",value:Q?.reason||"",onValueChange:e=>ee({reason:e})})]}),U&&(0,s.jsxs)(T.Z,{open:"reban"===q,handleClose:es,action:et,isLoading:en,actionText:"Reban",children:[s.jsx("div",{children:"You sure you want to reban the user?"}),s.jsx(v.Y,{label:"Reason",value:Q?.reason||"",onValueChange:e=>ee({...Q,reason:e})}),s.jsx(v.Y,{label:"Time (in minutes)",type:"number",value:Q?.duration||"",onValueChange:e=>ee({...Q,duration:e}),description:"Time in minutes, 0 = Permanent ban"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban will start again at ",s.jsx("b",{children:(0,S.Z)()})]}),(0,s.jsxs)("span",{children:["the ban will end at"," ",s.jsx("b",{children:Q?.duration==="0"?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,S.Z)(new Date().getTime()+6e4*Number(Q?.duration))})]})]})]}),U&&(0,s.jsxs)(T.Z,{open:"edit"===q,handleClose:es,action:et,isLoading:en,actionText:"Edit",children:[s.jsx("div",{children:"This will replace the ban duration or reason"}),s.jsx(v.Y,{label:"Ban Reason",value:Q?.reason||"",onValueChange:e=>ee({...Q,reason:e})}),s.jsx(v.Y,{label:"Ban Time (in minutes)",type:"number",value:Q?.duration||"",onValueChange:e=>ee({...Q,duration:e}),description:"Time in minutes, this will be added to the current duration, 0 = Permanent ban (will replace the duration)"}),(0,s.jsxs)("div",{className:"flex flex-col text-xs",children:[(0,s.jsxs)("span",{children:["The ban started at ",s.jsx("b",{children:(0,S.Z)(H?.created)})]}),(0,s.jsxs)("span",{children:["After the edit, the ban will end at"," ",s.jsx("b",{children:Q?.duration==="0"?s.jsx("b",{className:"text-red-700",children:"Permanent"}):(0,S.Z)(new Date(H?.created||"").getTime()+6e4*Number(Q?.duration))})]})]})]}),U&&s.jsx(T.Z,{open:"delete"===q,handleClose:es,action:et,isLoading:en,actionText:"Delete",children:s.jsx("div",{children:"Are you sure you want to delete the ban? this action is permanent and cannot be undone"})})]})}}};