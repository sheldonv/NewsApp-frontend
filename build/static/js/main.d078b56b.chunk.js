(this.webpackJsonppassport=this.webpackJsonppassport||[]).push([[0],{184:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},217:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(40),o=n.n(r),s=(n(184),n(13)),i=n(15),l=n.n(i),u=n(23),d=n(59),j=n(304),p=n(305),b=n(101),h=n(303),x=n(306),O=n(150),g=n.n(O),f=Object(a.createContext)({loggedIn:!1,logOut:function(){},logIn:function(){console.log("reached")},firstVisit:!1,userId:null}),m=n(162),v=n(307),w=n(151),k=n.n(w),y=n(294),C=n(308),S=Object(a.createContext)({toggleColorMode:function(){},color:"dark",getColor:function(){}}),I=n(4),N=n(302),B=n(296),D=n(311),T=n(298),A=n(284),R=n(285),E=n(143),M=n.n(E),z=n(147),G=n.n(z),H=n(145),P=n.n(H),F=n(146),L=n.n(F),U=n(54),V=n(2),W=Object(y.a)({sideDrawer:{display:"flex",justifyContent:"center",alignItems:"center"}}),J=function(){return Object(V.jsx)(M.a,{})},_=function(){return Object(V.jsx)(P.a,{})},q=function(){return Object(V.jsx)(L.a,{})},K=function(){return Object(V.jsx)(G.a,{})};function Q(e){var t=a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(s.a)(t,2),c=n[0],r=n[1],o=W(),i=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(d.a)(Object(d.a)({},c),{},Object(I.a)({},e,t)))}},l=function(e){return Object(V.jsx)(N.a,{sx:{width:"top"===e||"bottom"===e?"auto":300},className:o.sideDrawer,onClick:i(e,!1),onKeyDown:i(e,!1),children:Object(V.jsxs)(D.a,{children:[Object(V.jsx)(U.b,{to:"/",children:Object(V.jsxs)(T.a,{button:!0,href:"www.google.com",children:[Object(V.jsx)(A.a,{children:Object(V.jsx)(J,{})}),Object(V.jsx)(R.a,{primary:"HOME"})]},"HOME")}),Object(V.jsx)(U.b,{to:"/dashboard",children:Object(V.jsxs)(T.a,{button:!0,href:"www.google.com",children:[Object(V.jsx)(A.a,{children:Object(V.jsx)(K,{})}),Object(V.jsx)(R.a,{primary:"DASHBOARD"})]},"DASHBOARD")}),Object(V.jsx)(U.b,{to:"/advanced",children:Object(V.jsxs)(T.a,{button:!0,children:[Object(V.jsx)(A.a,{children:Object(V.jsx)(_,{})}),Object(V.jsx)(R.a,{primary:"ADVANCED"})]},"ADVANCED SEARCH")}),Object(V.jsx)(U.b,{to:"/about",children:Object(V.jsxs)(T.a,{button:!0,children:[Object(V.jsx)(A.a,{children:Object(V.jsx)(q,{})}),Object(V.jsx)(R.a,{primary:"ABOUT"})]},"ABOUT")})]})})};return Object(V.jsx)("div",{children:["left"].map((function(t){return Object(V.jsxs)(a.Fragment,{children:[Object(V.jsx)(h.a,{onClick:i(t,!0),children:e.children}),Object(V.jsx)(B.a,{anchor:t,open:c[t],onClose:i(t,!1),onOpen:i(t,!0),children:l(t)})]},t)}))})}var X=n(5),Y=n(220),Z=n(287),$=Object(X.a)((function(e){return Object(V.jsx)(m.a,Object(d.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(Y.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}})),ee=Object(y.a)((function(e){return{viewOptionsTitle:{fontSize:"1em",fontWeight:"bold"},menu:{width:"300px",padding:"0 !important"},button:{},menuIcon:{border:"none",width:"-5px",outline:"none",padding:"0 !important",marginRight:"0px"},viewOptions:{display:"list-item",flexDirection:"row",position:"relative"},switch:{},darkModeButton:{height:"1.5em"},appHeader:{paddingRight:"0px !important",color:"secondary"},abRoot:{},abStatic:{}}})),te=function(){var e,t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=(n[0],n[1],Object(a.useContext)(f)),r=a.useState(null),o=Object(s.a)(r,2),i=o[0],l=o[1],u=Boolean(i),d=ee(),O=a.useContext(S),m=Object(a.useState)(!1),w=Object(s.a)(m,2),y=(w[0],w[1]),I=a.useState(!0),N=Object(s.a)(I,2),B=N[0],D=(N[1],function(){l(null)});return"light"==O.color&&(e="#989890"),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(j.a,{position:"fixed",className:d.root,sx:{backgroundColor:e},children:Object(V.jsxs)(p.a,{children:[Object(V.jsx)(Q,{children:Object(V.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){y((function(e){return!e}))},children:Object(V.jsx)(g.a,{sx:{color:"text.secondary"}})})}),Object(V.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NewsPinger"}),c.loggedIn?Object(V.jsx)(h.a,{color:"inherit",href:"".concat("https://newsapppinger.herokuapp.com","/auth/logout"),children:"Logout"}):Object(V.jsx)(h.a,{color:"inherit",href:"".concat("https://newsapppinger.herokuapp.com","/auth/google"),children:"Login"}),Object(V.jsx)("div",{children:Object(V.jsx)(x.a,{"aria-label":"more",id:"long-button","aria-controls":"long-menu","aria-expanded":u?"true":void 0,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},children:Object(V.jsx)(k.a,{})})})]})}),Object(V.jsxs)($,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:i,open:u,onClose:D,children:[Object(V.jsx)(v.a,{onClick:D,disableRipple:!0,sx:{paddingLeft:"1.5rem"},children:"View Options"}),Object(V.jsx)(Z.a,{}),Object(V.jsxs)(v.a,{onClick:D,disableRipple:!0,children:[Object(V.jsx)(C.a,{checked:B,onChange:function(){O.toggleColorMode(),console.log(c.loggedIn)},inputProps:{"aria-label":"controlled"}}),"DarkMode"]})]})]})},ne=n(18),ae=(n(192),n(318)),ce=n(301),re=n(314),oe=n(315),se=n(316),ie=n(317),le=n(288),ue=(n(193),n(110)),de=n(156),je=n.n(de),pe=(n(299),n(93)),be=n.n(pe),he=n(153),xe=n.n(he),Oe=Object(le.a)((function(e){var t;return{cardImage:(t={},Object(I.a)(t,e.breakpoints.up(0),{height:70}),Object(I.a)(t,e.breakpoints.up(350),{height:90}),Object(I.a)(t,e.breakpoints.up(400),{height:106}),Object(I.a)(t,e.breakpoints.up(450),{height:115}),Object(I.a)(t,e.breakpoints.up(499),{height:125}),Object(I.a)(t,e.breakpoints.up(550),{height:145}),Object(I.a)(t,e.breakpoints.up(600),{height:100}),Object(I.a)(t,e.breakpoints.up(650),{height:140}),Object(I.a)(t,e.breakpoints.up(1e3),{height:180}),Object(I.a)(t,e.breakpoints.up(1050),{}),Object(I.a)(t,e.breakpoints.up(1150),{}),Object(I.a)(t,e.breakpoints.up(1200),{}),Object(I.a)(t,e.breakpoints.up(1250),{height:175}),t),cardActions:{display:ue.a,justifyContent:"space-between"},source:{textAlign:"right"}}})),ge=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=(n[0],n[1],Oe()),r=null;e.title.includes("-")?(r=e.title.lastIndexOf("-"),r=e.title.slice(0,r)):r=e.title;var o=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(),n.preventDefault(),t.next=4,xe.a.post("".concat("https://newsapppinger.herokuapp.com","/user/save"),e.save);case 4:t.sent;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(V.jsx)(ce.a,{xs:12,sm:4,lg:3,item:!0,style:{zIndex:"10"},sx:{gridRow:{borderBottom:"",position:"relative",paddingBottom:"2rem","&::after":{content:'"dfdfdfdfd"',position:"absolute",width:"94.8%",height:"90%",backgroundColor:"transparent",borderBottom:"1px solid orange",display:"block",zIndex:"-1",top:"10%"}}},children:Object(V.jsxs)(re.a,{className:"articleCard",children:[Object(V.jsx)(oe.a,{className:"cardMedia",children:Object(V.jsx)("div",{className:"".concat(c.cardImage," articleImage"),children:Object(V.jsx)("img",{src:e.image,alt:""})})}),Object(V.jsx)(se.a,{children:Object(V.jsxs)(b.a,{variant:"",gutterBottom:!0,component:"div",children:[r,Object(V.jsx)(b.a,{className:c.source,component:"div",children:e.source}),Object(V.jsx)("hr",{})]})}),Object(V.jsxs)(ie.a,{className:c.cardActions,children:[Object(V.jsx)(h.a,{href:e.url,children:"read more"}),Object(V.jsx)(h.a,{variant:"contained",startIcon:Object(V.jsx)(je.a,{}),color:"secondary",onClick:function(e){return o(e)},children:"Save"})]})]})})},fe=n(292),me=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=Object(y.a)({textField:{width:"100%",marginLeft:"auto",marginRight:"auto",paddingBottom:10,marginTop:"0",fontWeight:500},input:{color:"black",fontSize:"2em",height:"100%",outline:"none",border:"1px solid darkorange"},searchIcon:{}}),we=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),j=i[0],p=i[1],b=ve(),h="";h="light"===Object(a.useContext)(S).color?"black":"white",Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me("".concat("https://newsapppinger.herokuapp.com","/news/headlines"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.articles);case 7:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)((function(){var e=document.getElementById("articlesGrid");console.log(e),e.onload=function(){console.log(e)},e.onload()}),[j]);var x=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,me("".concat("https://newsapppinger.herokuapp.com","/news/search/?query=").concat(j));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r(a.articles);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)(ae.a,{children:[Object(V.jsx)("div",{className:"welcome",children:Object(V.jsx)("h3",{children:"Todays Headlines"})}),Object(V.jsx)("div",{className:"searchBox",children:Object(V.jsx)("form",{onSubmit:function(e){e.preventDefault(),x(e)},children:Object(V.jsx)(fe.a,{id:"outlined-basic",label:"Search Todays News",variant:"outlined",margin:"none",className:b.textField,InputProps:{className:b.input,endAdornment:Object(V.jsx)(be.a,{className:b.searchIcon,style:{width:"3rem",fontSize:"2rem",color:h},onClick:function(e){x(e)}})},onChange:function(e){!function(e){p(e.target.value)}(e)}})})}),Object(V.jsx)(ce.a,{id:"articlesGrid",container:!0,columnSpacing:2,rowSpacing:5,sx:{gridRow:{"& > div:not(:nth-child(4n))::after":{width:"100%"}}},children:c.map((function(e){return Object(V.jsx)(ge,{image:e.urlToImage,title:e.title,url:e.url,source:e.source.name,description:e.description,save:Object(d.a)({},e)})}))})]})},ke=n(293),ye=n(309),Ce=n(310),Se=n(297),Ie=n(224),Ne=(n(215),n(217),function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"},body:null});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Be={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",bgcolor:"background.paper",border:"1px solid #000",borderRadius:"9px",boxShadow:24,p:4,color:"text.primary"},De={width:"80%",margin:"0 auto"},Te=Object(Ie.a)((function(e){return{saveButton:{textAlign:"center",width:"40%",float:"right"},gridItem:{textAlign:"center"},categoryButton:{width:"10em"},categoryBorder:{width:"10em",border:"1px solid black"},modal:{width:"90%"}}})),Ae=[],Re=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),i=Object(s.a)(o,2),d=i[0],j=i[1],p=Object(a.useState)(""),x=Object(s.a)(p,2),O=x[0],g=x[1],f=Object(a.useState)([]),m=Object(s.a)(f,2),v=m[0],w=m[1],k=Object(a.useState)(!1),y=Object(s.a)(k,2),C=y[0],S=y[1],I=Object(a.useState)(!1),B=Object(s.a)(I,2),D=B[0],T=B[1],A=Object(a.useState)([]),R=Object(s.a)(A,2),E=R[0],M=R[1],z=Te(),G=function(){return r(!0)},H=function(){return r(!1)};Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne("".concat("https://newsapppinger.herokuapp.com","/user"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,g(n),n&&(!1===n.dashboardInit?G():(a=n.categories.split("x"),j(a)));case 8:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.getElementById(d[0]);case 2:e.sent,L(d[0]);case 4:case"end":return e.stop()}}),e)}))),[d]);var P=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.checked?(Ae.push(t.target.value),M([].concat(Ae))):(n=Ae.indexOf(t.target.value),Ae.splice(n,1),M([].concat(Ae)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Ae.length>0)){e.next=19;break}return t=Ae.join("x"),e.next=4,Ne("".concat("https://newsapppinger.herokuapp.com","/news/categories/?categories=").concat(t,"&id=").concat(O._id));case 4:return n=e.sent,e.next=7,n.json();case 7:if(a=e.sent,c=a.categories.split("x"),j(c),null===a.categories){e.next=17;break}return e.next=13,Ne("".concat("https://newsapppinger.herokuapp.com","/users/dashboardinit/?id=").concat(O._id));case 13:return r=e.sent,e.next=16,r.json();case 16:e.sent;case 17:e.next=20;break;case 19:T(!0);case 20:H();case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne("".concat("https://newsapppinger.herokuapp.com","/news/category/?category=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,w([]),w(a.articles);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U={"& > div:not(:nth-child(4n))::after":{width:"100%"}};return Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{className:"welcome",children:"Dashboard"}),Object(V.jsx)(ae.a,{children:Object(V.jsxs)(ce.a,{id:"articlesGrid",container:!0,columnSpacing:2,rowSpacing:5,sx:{gridRow:U},children:[d.map((function(e){return Object(V.jsx)(ce.a,{item:!0,xs:6,className:z.gridItem,children:Object(V.jsx)(h.a,{id:e,variant:"outlined",size:"small",className:e==d[0]&&!1===C?z.categoryBorder:z.categoryButton,onClick:function(){S(!0),L(e)},children:e.toUpperCase()})})})),Object(V.jsx)(ce.a,{item:!0,xs:6,className:z.gridItem,children:Object(V.jsx)(h.a,{disabled:!D,variant:"outlined",size:"small",className:z.categoryButton,onClick:function(){w(O.articles)},children:"Saved"})}),Object(V.jsx)(ce.a,{item:!0,xs:6,className:z.gridItem,children:Object(V.jsx)(h.a,{disabled:!D,variant:"outlined",size:"small",className:z.categoryButton,onClick:function(){d.forEach((function(e){})),G()},children:"Add"})})]})}),Object(V.jsx)(ke.a,{open:n,onClose:H,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:De,children:Object(V.jsxs)(N.a,{sx:Be,children:[Object(V.jsx)(b.a,{variant:"h6",component:"h2",children:"Choose your categories"}),Object(V.jsxs)(b.a,{sx:{mt:2},children:[Object(V.jsxs)(ye.a,{children:[Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{defaultChecked:d.includes("entertainment")}),label:"Entertainment",value:"entertainment",id:"entertainment",onChange:function(e){return P(e)}}),Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{defaultChecked:d.includes("sports")}),label:"Sports",value:"sports",id:"sports",defaultChecked:d.includes("sports"),onChange:function(e){return P(e)}}),Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{}),label:"Business",value:"business",id:"business",defaultChecked:d.includes("business"),onChange:function(e){return P(e)}}),Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{}),label:"Technology",value:"technology",id:"technology",defaultChecked:d.includes("technology"),onChange:function(e){return P(e)}}),Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{}),label:"Health",value:"health",id:"health",defaultChecked:d.includes("health"),onChange:function(e){return P(e)}}),Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{}),label:"Science",value:"science",id:"science",defaultChecked:d.includes("science"),onChange:function(e){return P(e)}}),Object(V.jsx)(Ce.a,{control:Object(V.jsx)(Se.a,{}),label:"General",value:"general",id:"general",defaultChecked:d.includes("general"),onChange:function(e){return P(e)}})]}),Object(V.jsx)(h.a,{variant:"contained",className:z.saveButton,onClick:F,disabled:0===E.length,children:"Save"})]})]})}),Object(V.jsxs)(ae.a,{className:"articlesConsole",children:[v.articles,Object(V.jsx)(ce.a,{id:"articlesGrid",container:!0,columnSpacing:2,rowSpacing:5,sx:{gridRow:U},children:v.map((function(e){return Object(V.jsx)(ge,{image:e.urlToImage,title:e.title,url:e.url,source:e.source.name,description:e.description,save:e})}))})]})]})},Ee=n(27),Me=n(161),ze=n(319),Ge=n(291),He=n(160),Pe=n.n(He),Fe=n(157),Le=n.n(Fe),Ue=n(158),Ve=n.n(Ue),We=n(159),Je=n.n(We),_e=Object(le.a)((function(e){return{footer:{color:"text.primary",display:"flex",backgroundColor:"background.default",padding:".5rem",width:"96%",flexDirection:"column"},footerTop:Object(I.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},e.breakpoints.up("600"),{flexDirection:"row",justifyContent:"space-around"}),span:{padding:".3rem"},socialFooter:Object(I.a)({display:"flex",justifyContent:"space-between",alignItems:"center","& span":{padding:".5rem"},width:"100%"},e.breakpoints.up("600"),{width:"40%",paddingBottom:"1rem",paddingTop:"1rem"}),divider:Object(I.a)({width:"100%",marginTop:"1rem",height:"1px",border:"0",borderTop:"1px solid orange"},e.breakpoints.up("600"),{margin:"0px"}),iconDiv:Object(I.a)({display:"flex",width:"70%",justifyContent:"space-between","& span":{},marginTop:"1rem"},e.breakpoints.up("600"),{width:"40%",marginTop:"0px"}),copyRight:Object(I.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& span":Object(I.a)({marginTop:".3rem"},e.breakpoints.up("600"),{flexDirection:"row",width:"40%",justifyContent:"space-around"})},e.breakpoints.up("600"),{flexDirection:"row",width:"100%",justifyContent:"space-around"})}})),qe=function(e){var t=_e();return Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)("div",{className:t.footer,children:[Object(V.jsxs)("div",{className:t.footerTop,children:[Object(V.jsxs)("div",{className:t.socialFooter,children:[Object(V.jsx)("span",{children:"HOME"}),Object(V.jsx)("span",{children:"LOGIN"}),Object(V.jsx)("span",{children:"DASHBOARD"}),Object(V.jsx)("span",{children:"ABOUT"})]}),Object(V.jsxs)("div",{className:t.iconDiv,children:[Object(V.jsx)("span",{children:Object(V.jsx)(Le.a,{})}),Object(V.jsx)("span",{children:Object(V.jsx)(Ve.a,{})}),Object(V.jsx)("span",{children:Object(V.jsx)(Je.a,{})}),Object(V.jsx)("span",{children:Object(V.jsx)(Pe.a,{})})]})]}),Object(V.jsx)("hr",{className:t.divider}),Object(V.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",padding:"1rem",paddingBottom:"-.8rem"},children:Object(V.jsxs)("div",{className:t.copyRight,children:[Object(V.jsx)("span",{style:{textAlign:"right"},children:"\xa9  NewsPinger \xa0. All Rights Reserved"}),Object(V.jsx)("span",{children:"Powered \xa0 by \xa0 NewsApi"})]})})]})})},Ke=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Content-Type":"application/json"},body:null});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Qe(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!1),r=Object(s.a)(c,2),o=(r[0],r[1],Object(a.useState)([])),i=Object(s.a)(o,2),d=(i[0],i[1],Object(Ee.a)(),a.useContext(S),Object(a.useContext)(f));return Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke("".concat("https://newsapppinger.herokuapp.com","/user"));case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&(a.firstName&&(console.log(a.firstName),d.logIn()),n(a));case 7:case"end":return e.stop()}}),e)}))),[]),Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Ge.a,{}),Object(V.jsx)(N.a,{sx:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",bgcolor:"background.default",color:"text.primary",borderRadius:1,p:3,paddingBottom:"0px",flexDirection:"column"},children:Object(V.jsxs)(U.a,{children:[Object(V.jsx)(te,{}),Object(V.jsxs)(ne.d,{children:[Object(V.jsx)(ne.b,{path:"/",exact:!0,children:Object(V.jsx)(we,{})}),Object(V.jsx)(ne.b,{path:"/dashboard",exact:!0,children:Object(V.jsx)(Re,{})}),Object(V.jsx)(ne.a,{to:"/",exact:!0})]}),Object(V.jsx)(qe,{})]})})]})}function Xe(){var e=a.useState("dark"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),i=o[0],d=o[1],j=Object(a.useContext)(f),p=Object(a.useState)({}),b=Object(s.a)(p,2),h=(b[0],b[1]);Object(a.useEffect)(Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ke("".concat("https://newsapppinger.herokuapp.com","/user"));case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent)&&(n.firstName&&j.logIn(),h(n));case 7:case"end":return e.stop()}}),e)}))),[]);var x=Object(a.useCallback)((function(){alert(j.loggedIn),d(!1)}),[]),O=Object(a.useCallback)((function(){d(!0)}),[]),g=function(){c((function(e){return"light"===e?"dark":"light"}))};a.useMemo((function(){return{toggleColorMode:g}}),[]);var m=a.useMemo((function(){return Object(Me.a)({palette:{mode:n}})}),[n]);return Object(V.jsx)(f.Provider,{value:{loggedIn:i,logOut:x,logIn:O},children:Object(V.jsx)(S.Provider,{value:{toggleColorMode:g,color:n},children:Object(V.jsx)(ze.a,{theme:m,children:Object(V.jsx)(Qe,{})})})})}o.a.render(Object(V.jsx)(Xe,{}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.d078b56b.chunk.js.map