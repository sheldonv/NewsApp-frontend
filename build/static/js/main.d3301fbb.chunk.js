(this.webpackJsonppassport=this.webpackJsonppassport||[]).push([[0],{187:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},220:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(40),o=n.n(r),i=(n(187),n(13)),s=n(15),l=n.n(s),u=n(26),d=n(59),j=n(324),b=n(325),p=n(101),h=n(323),x=n(326),O=n(155),f=n.n(O),g=Object(a.createContext)({loggedIn:!1,logOut:function(){},logIn:function(){},firstVisit:!1,userId:null}),m=n(166),v=n(327),w=n(156),k=n.n(w),y=n(314),C=n(328),S=Object(a.createContext)({toggleColorMode:function(){},color:"dark",getColor:function(){}}),I=n(4),N=n(322),B=n(316),D=n(331),T=n(318),A=n(304),R=n(305),E=n(149),M=n.n(E),z=n(113),H=n.n(z),P=n(151),F=n.n(P),G=n(152),V=n.n(G),L=n(49),U=n(2),W=Object(y.a)({sideDrawer:{display:"flex",justifyContent:"center",alignItems:"center"}}),J=function(){return Object(U.jsx)(M.a,{})},_=function(){return Object(U.jsx)(F.a,{})},q=function(){return Object(U.jsx)(V.a,{})},K=function(){return Object(U.jsx)(H.a,{})};function Q(e){var t=a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(i.a)(t,2),c=n[0],r=n[1],o=W(),s=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(d.a)(Object(d.a)({},c),{},Object(I.a)({},e,t)))}},l=function(e){return Object(U.jsx)(N.a,{sx:{width:"top"===e||"bottom"===e?"auto":300},className:o.sideDrawer,onClick:s(e,!1),onKeyDown:s(e,!1),children:Object(U.jsxs)(D.a,{children:[Object(U.jsx)(L.b,{to:"/",children:Object(U.jsxs)(T.a,{button:!0,href:"www.google.com",children:[Object(U.jsx)(A.a,{children:Object(U.jsx)(J,{})}),Object(U.jsx)(R.a,{primary:"HOME"})]},"HOME")}),Object(U.jsx)(L.b,{to:"/dashboard",children:Object(U.jsxs)(T.a,{button:!0,href:"www.google.com",children:[Object(U.jsx)(A.a,{children:Object(U.jsx)(K,{})}),Object(U.jsx)(R.a,{primary:"DASHBOARD"})]},"DASHBOARD")}),Object(U.jsx)(L.b,{to:"/advanced",children:Object(U.jsxs)(T.a,{button:!0,children:[Object(U.jsx)(A.a,{children:Object(U.jsx)(_,{})}),Object(U.jsx)(R.a,{primary:"ADVANCED"})]},"ADVANCED SEARCH")}),Object(U.jsx)(L.b,{to:"/about",children:Object(U.jsxs)(T.a,{button:!0,children:[Object(U.jsx)(A.a,{children:Object(U.jsx)(q,{})}),Object(U.jsx)(R.a,{primary:"ABOUT"})]},"ABOUT")})]})})};return Object(U.jsx)("div",{children:["left"].map((function(t){return Object(U.jsxs)(a.Fragment,{children:[Object(U.jsx)(h.a,{onClick:s(t,!0),children:e.children}),Object(U.jsx)(B.a,{anchor:t,open:c[t],onClose:s(t,!1),onOpen:s(t,!0),children:l(t)})]},t)}))})}var X=n(5),Y=n(223),Z=n(307),$=Object(X.a)((function(e){return Object(U.jsx)(m.a,Object(d.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(Y.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}})),ee=Object(y.a)((function(e){return{viewOptionsTitle:{fontSize:"1em",fontWeight:"bold"},menu:{width:"300px",padding:"0 !important"},button:{},menuIcon:{border:"none",width:"-5px",outline:"none",padding:"0 !important",marginRight:"0px"},viewOptions:{display:"list-item",flexDirection:"row",position:"relative"},switch:{},darkModeButton:{height:"1.5em"},appHeader:{paddingRight:"0px !important",color:"secondary"},abRoot:{},abStatic:{}}})),te=function(){var e,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=(n[0],n[1],Object(a.useContext)(g)),r=a.useState(null),o=Object(i.a)(r,2),s=o[0],l=o[1],u=Boolean(s),d=ee(),O=a.useContext(S),m=Object(a.useState)(!1),w=Object(i.a)(m,2),y=(w[0],w[1]),I=a.useState(!0),N=Object(i.a)(I,2),B=N[0],D=(N[1],function(){l(null)});return"light"==O.color&&(e="#989890"),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(j.a,{position:"fixed",className:d.root,sx:{backgroundColor:e},children:Object(U.jsxs)(b.a,{children:[Object(U.jsx)(Q,{children:Object(U.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){y((function(e){return!e}))},children:Object(U.jsx)(f.a,{sx:{color:"text.secondary"}})})}),Object(U.jsx)(p.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NewsPinger"}),c.loggedIn?Object(U.jsx)(h.a,{color:"inherit",href:"".concat("https://newsapppinger.herokuapp.com/","/auth/logout"),children:"Logout"}):Object(U.jsx)(h.a,{color:"inherit",href:"".concat("https://newsapppinger.herokuapp.com/","/auth/google"),children:"Login"}),Object(U.jsx)("div",{children:Object(U.jsx)(x.a,{"aria-label":"more",id:"long-button","aria-controls":"long-menu","aria-expanded":u?"true":void 0,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},children:Object(U.jsx)(k.a,{})})})]})}),Object(U.jsxs)($,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:s,open:u,onClose:D,children:[Object(U.jsx)(v.a,{onClick:D,disableRipple:!0,sx:{paddingLeft:"1.5rem"},children:"View Options"}),Object(U.jsx)(Z.a,{}),Object(U.jsxs)(v.a,{onClick:D,disableRipple:!0,children:[Object(U.jsx)(C.a,{checked:B,onChange:function(){O.toggleColorMode()},inputProps:{"aria-label":"controlled"}}),"DarkMode"]})]})]})},ne=n(19),ae=(n(195),n(338)),ce=n(321),re=n(334),oe=n(335),ie=n(336),se=n(337),le=n(308),ue=(n(196),n(116)),de=n(160),je=n.n(de),be=(n(319),n(93)),pe=n.n(be),he=n(114),xe=n.n(he),Oe=Object(le.a)((function(e){var t;return{cardImage:(t={},Object(I.a)(t,e.breakpoints.up(0),{height:70}),Object(I.a)(t,e.breakpoints.up(350),{height:90}),Object(I.a)(t,e.breakpoints.up(400),{height:106}),Object(I.a)(t,e.breakpoints.up(450),{height:115}),Object(I.a)(t,e.breakpoints.up(499),{height:125}),Object(I.a)(t,e.breakpoints.up(550),{height:145}),Object(I.a)(t,e.breakpoints.up(600),{height:100}),Object(I.a)(t,e.breakpoints.up(650),{height:140}),Object(I.a)(t,e.breakpoints.up(1e3),{height:180}),Object(I.a)(t,e.breakpoints.up(1050),{}),Object(I.a)(t,e.breakpoints.up(1150),{}),Object(I.a)(t,e.breakpoints.up(1200),{}),Object(I.a)(t,e.breakpoints.up(1250),{height:175}),t),cardActions:{display:ue.a,justifyContent:"space-between"},source:{textAlign:"right"}}})),fe=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=(n[0],n[1],Oe()),r=null;e.title.includes("-")?(r=e.title.lastIndexOf("-"),r=e.title.slice(0,r)):r=e.title;var o=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,xe.a.post("".concat("https://newsapppinger.herokuapp.com/","/user/save"),e.save);case 3:t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsx)(ce.a,{xs:12,sm:4,lg:3,item:!0,sx:{gridRow:{borderBottom:"",position:"relative",paddingBottom:"2rem","&::after":{content:'"dfdfdfdfd"',position:"absolute",width:"94.8%",height:"90%",backgroundColor:"transparent",borderBottom:"1px solid orange",display:"block",zIndex:100,top:"10%"}}},children:Object(U.jsxs)(re.a,{className:"articleCard",children:[Object(U.jsx)(oe.a,{className:"cardMedia",children:Object(U.jsx)("div",{className:"".concat(c.cardImage," articleImage"),children:Object(U.jsx)("img",{src:e.image,alt:""})})}),Object(U.jsx)(ie.a,{children:Object(U.jsxs)(p.a,{variant:"",gutterBottom:!0,component:"div",children:[r,Object(U.jsx)(p.a,{className:c.source,component:"div",children:e.source}),Object(U.jsx)("hr",{})]})}),Object(U.jsxs)(se.a,{className:c.cardActions,children:[Object(U.jsx)(h.a,{href:e.url,children:"read more"}),Object(U.jsx)(h.a,{variant:"contained",startIcon:Object(U.jsx)(je.a,{}),color:"secondary",onClick:function(e){return o(e)},children:"Save"})]})]})})},ge=n(312),me=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=Object(y.a)({textField:{width:"100%",marginLeft:"auto",marginRight:"auto",paddingBottom:10,marginTop:"0",fontWeight:500},input:{color:"black",fontSize:"2em",height:"100%",outline:"none",border:"1px solid darkorange"},searchIcon:{}}),we=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),j=s[0],b=s[1],p=ve(),h="";h="light"===Object(a.useContext)(S).color?"black":"white",Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me("".concat("https://newsapppinger.herokuapp.com/","/news/headlines"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.articles);case 7:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)((function(){var e=document.getElementById("articlesGrid");console.log(e),e.onload=function(){console.log(e)},e.onload()}),[j]);var x=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,me("".concat("https://newsapppinger.herokuapp.com/","/news/search/?query=").concat(j));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r(a.articles);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(ae.a,{children:[Object(U.jsx)("div",{className:"welcome",children:Object(U.jsx)("h3",{children:"Todays Headlines"})}),Object(U.jsx)("div",{className:"searchBox",children:Object(U.jsx)("form",{onSubmit:function(e){e.preventDefault(),x(e)},children:Object(U.jsx)(ge.a,{id:"outlined-basic",label:"Search Todays News",variant:"outlined",margin:"none",className:p.textField,InputProps:{className:p.input,endAdornment:Object(U.jsx)(pe.a,{className:p.searchIcon,style:{width:"3rem",fontSize:"2rem",color:h},onClick:function(e){x(e)}})},onChange:function(e){!function(e){b(e.target.value)}(e)}})})}),Object(U.jsx)(ce.a,{id:"articlesGrid",container:!0,columnSpacing:2,rowSpacing:5,sx:{gridRow:{"& > div:not(:nth-child(4n))::after":{width:"100%"}}},children:c.map((function(e){return Object(U.jsx)(fe,{image:e.urlToImage,title:e.title,url:e.url,source:e.source.name,description:e.description,save:Object(d.a)({},e)})}))})]})},ke=n(313),ye=n(329),Ce=n(330),Se=n(317),Ie=n(227),Ne=(n(218),n(219),n(220),function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"},body:null});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Be={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",bgcolor:"background.paper",border:"1px solid #000",borderRadius:"9px",boxShadow:24,p:4,color:"text.primary"},De={width:"80%",margin:"0 auto"},Te=Object(Ie.a)((function(e){return{saveButton:{textAlign:"center",width:"40%",float:"right"},gridItem:{textAlign:"center"},categoryButton:{width:"10em"},categoryBorder:{width:"10em",border:"1px solid black"},modal:{width:"90%"}}})),Ae=[],Re=function(){Object(a.useContext)(g),Object(ne.g)();var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),d=s[0],j=s[1],b=Object(a.useState)(""),x=Object(i.a)(b,2),O=x[0],f=x[1],m=Object(a.useState)([]),v=Object(i.a)(m,2),w=v[0],k=v[1],y=Object(a.useState)(!1),C=Object(i.a)(y,2),S=C[0],I=C[1],B=Object(a.useState)(!1),D=Object(i.a)(B,2),T=D[0],A=D[1],R=Object(a.useState)([]),E=Object(i.a)(R,2),M=E[0],z=E[1],H=Te(),P=(Object(a.useRef)(null),function(){return r(!0)}),F=function(){return r(!1)};Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne("".concat("https://newsapppinger.herokuapp.com/","/user"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n),n&&(alert("response froze Dashboard"),!1===n.dashboardInit?P():(a=n.categories.split("x"),j(a)));case 8:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById(d[0]);case 2:e.sent,L(d[0]);case 4:case"end":return e.stop()}}),e)}))),[d]);var G=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.checked?(Ae.push(t.target.value),z([].concat(Ae))):(n=Ae.indexOf(t.target.value),Ae.splice(n,1),z([].concat(Ae)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Ae.length>0)){e.next=19;break}return t=Ae.join("x"),e.next=4,Ne("".concat("https://newsapppinger.herokuapp.com/","/news/categories/?categories=").concat(t,"&id=").concat(O._id));case 4:return n=e.sent,e.next=7,n.json();case 7:if(a=e.sent,c=a.categories.split("x"),j(c),null===a.categories){e.next=17;break}return e.next=13,Ne("".concat("https://newsapppinger.herokuapp.com/","/users/dashboardinit/?id=").concat(O._id));case 13:return r=e.sent,e.next=16,r.json();case 16:e.sent;case 17:e.next=20;break;case 19:A(!0);case 20:F();case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne("".concat("https://newsapppinger.herokuapp.com/","/news/category/?category=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,k([]),k(a.articles);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{className:"welcome",children:"Dashboard"}),Object(U.jsx)(ae.a,{children:Object(U.jsxs)(ce.a,{container:!0,spacing:2,children:[d.map((function(e){return Object(U.jsx)(ce.a,{item:!0,xs:6,className:H.gridItem,children:Object(U.jsx)(h.a,{id:e,variant:"outlined",size:"small",className:e==d[0]&&!1===S?H.categoryBorder:H.categoryButton,onClick:function(){I(!0),L(e)},children:e.toUpperCase()})})})),Object(U.jsx)(ce.a,{item:!0,xs:6,className:H.gridItem,children:Object(U.jsx)(h.a,{disabled:!T,variant:"outlined",size:"small",className:H.categoryButton,onClick:function(){k(O.articles)},children:"Saved"})}),Object(U.jsx)(ce.a,{item:!0,xs:6,className:H.gridItem,children:Object(U.jsx)(h.a,{disabled:!T,variant:"outlined",size:"small",className:H.categoryButton,onClick:function(){d.forEach((function(e){})),P()},children:"Add"})})]})}),Object(U.jsx)(ke.a,{open:n,onClose:F,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:De,children:Object(U.jsxs)(N.a,{sx:Be,children:[Object(U.jsx)(p.a,{variant:"h6",component:"h2",children:"Choose your categories"}),Object(U.jsxs)(p.a,{sx:{mt:2},children:[Object(U.jsxs)(ye.a,{children:[Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{defaultChecked:d.includes("entertainment")}),label:"Entertainment",value:"entertainment",id:"entertainment",onChange:function(e){return G(e)}}),Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{defaultChecked:d.includes("sports")}),label:"Sports",value:"sports",id:"sports",defaultChecked:d.includes("sports"),onChange:function(e){return G(e)}}),Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{}),label:"Business",value:"business",id:"business",defaultChecked:d.includes("business"),onChange:function(e){return G(e)}}),Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{}),label:"Technology",value:"technology",id:"technology",defaultChecked:d.includes("technology"),onChange:function(e){return G(e)}}),Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{}),label:"Health",value:"health",id:"health",defaultChecked:d.includes("health"),onChange:function(e){return G(e)}}),Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{}),label:"Science",value:"science",id:"science",defaultChecked:d.includes("science"),onChange:function(e){return G(e)}}),Object(U.jsx)(Ce.a,{control:Object(U.jsx)(Se.a,{}),label:"General",value:"general",id:"general",defaultChecked:d.includes("general"),onChange:function(e){return G(e)}})]}),Object(U.jsx)(h.a,{variant:"contained",className:H.saveButton,onClick:V,disabled:0===M.length,children:"Save"})]})]})}),Object(U.jsxs)(ae.a,{className:"articlesConsole",children:[w.articles,Object(U.jsx)(ce.a,{container:!0,columnSpacing:2,rowSpacing:3,children:w.map((function(e){return Object(U.jsx)(fe,{image:e.urlToImage,title:e.title,url:e.url,source:e.source.name,description:e.description,save:e})}))})]})]})},Ee=n(27),Me=n(165),ze=n(339),He=n(311),Pe=n(164),Fe=n.n(Pe),Ge=n(161),Ve=n.n(Ge),Le=n(162),Ue=n.n(Le),We=n(163),Je=n.n(We),_e=Object(le.a)((function(e){return{footer:{color:"text.primary",display:"flex",backgroundColor:"background.default",padding:".5rem",width:"95%",flexDirection:"column"},footerTop:Object(I.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},e.breakpoints.up("600"),{flexDirection:"row",justifyContent:"space-around"}),span:{padding:".3rem"},socialFooter:Object(I.a)({display:"flex",justifyContent:"space-between",alignItems:"center","& span":{padding:".5rem"},width:"100%"},e.breakpoints.up("600"),{width:"40%",paddingBottom:"1rem",paddingTop:"1rem"}),divider:Object(I.a)({width:"100%",marginTop:"1rem",height:"1px",border:"0",borderTop:"1px solid orange"},e.breakpoints.up("600"),{margin:"0px"}),iconDiv:Object(I.a)({display:"flex",width:"70%",justifyContent:"space-between","& span":{},marginTop:"1rem"},e.breakpoints.up("600"),{width:"40%",marginTop:"0px"}),copyRight:Object(I.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& span":Object(I.a)({marginTop:".3rem"},e.breakpoints.up("600"),{flexDirection:"row",width:"40%",justifyContent:"space-around"})},e.breakpoints.up("600"),{flexDirection:"row",width:"100%",justifyContent:"space-around"})}})),qe=function(e){var t=_e();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("div",{className:t.footer,children:[Object(U.jsxs)("div",{className:t.footerTop,children:[Object(U.jsxs)("div",{className:t.socialFooter,children:[Object(U.jsx)("span",{children:"HOME"}),Object(U.jsx)("span",{children:"LOGIN"}),Object(U.jsx)("span",{children:"DASHBOARD"}),Object(U.jsx)("span",{children:"ABOUT"})]}),Object(U.jsxs)("div",{className:t.iconDiv,children:[Object(U.jsx)("span",{children:Object(U.jsx)(Ve.a,{})}),Object(U.jsx)("span",{children:Object(U.jsx)(Ue.a,{})}),Object(U.jsx)("span",{children:Object(U.jsx)(Je.a,{})}),Object(U.jsx)("span",{children:Object(U.jsx)(Fe.a,{})})]})]}),Object(U.jsx)("hr",{className:t.divider}),Object(U.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",padding:"1rem",paddingBottom:"-.8rem"},children:Object(U.jsxs)("div",{className:t.copyRight,children:[Object(U.jsx)("span",{style:{textAlign:"right"},children:"\xa9  NewsPinger \xa0. All Rights Reserved"}),Object(U.jsx)("span",{children:"Powered \xa0 by \xa0 NewsApi"})]})})]})})},Ke=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"},body:null});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Qe(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!1),r=Object(i.a)(c,2),o=r[0],s=r[1],d=Object(a.useState)(!1),j=Object(i.a)(d,2),b=j[0],p=j[1],h=Object(a.useState)([]),x=Object(i.a)(h,2),O=(x[0],x[1],Object(Ee.a)(),a.useContext(S),Object(a.useContext)(g)),f=Object(a.useCallback)((function(){s(!1)}),[]),m=Object(a.useCallback)((function(){s(!0)}),[]);return Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke("".concat("https://newsapppinger.herokuapp.com/","/user"));case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&(a.firstName&&O.logIn(),a.firstVisit,p(a.firstVisit),n(a));case 7:case"end":return e.stop()}}),e)}))),[]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(He.a,{}),Object(U.jsx)(N.a,{sx:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary",borderRadius:1,p:3,paddingBottom:"0px",flexDirection:"column"},children:Object(U.jsx)(L.a,{children:Object(U.jsxs)(g.Provider,{value:{loggedIn:o,logOut:f,firstVisit:b,logIn:m},children:[Object(U.jsx)(te,{}),Object(U.jsxs)(ne.d,{children:[Object(U.jsx)(ne.b,{path:"/",exact:!0,children:Object(U.jsx)(we,{})}),o&&Object(U.jsx)(ne.b,{path:"/dashboard",exact:!0,children:Object(U.jsx)(Re,{})}),Object(U.jsx)(ne.a,{to:"/",exact:!0})]}),Object(U.jsx)(qe,{})]})})})]})}function Xe(){var e=a.useState("dark"),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){c((function(e){return"light"===e?"dark":"light"}))};a.useMemo((function(){return{toggleColorMode:r}}),[]);var o=a.useMemo((function(){return Object(Me.a)({palette:{mode:n}})}),[n]);return Object(U.jsx)(S.Provider,{value:{toggleColorMode:r,color:n},children:Object(U.jsx)(ze.a,{theme:o,children:Object(U.jsx)(Qe,{})})})}o.a.render(Object(U.jsx)(Xe,{}),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.d3301fbb.chunk.js.map