(this["webpackJsonpyoutube-queue"]=this["webpackJsonpyoutube-queue"]||[]).push([[0],{39:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(25),s=a.n(i),r=(a(39),a(29)),l=a(30),o=a(22),j=a(26),u=a.n(j),d=a(89),h=a(91),b=a(94),O=a(98),g=a(97),f=a(92),x=a(95),m=a(96),p=a(93),w=a(99),S=a(100),y=a(27),k=a(4);w.a.addDefaultLocale(y);var v=Object(d.a)({table:{minWidth:650}});var I=function(){var e=v(),t=c.a.useState(JSON.parse(localStorage.getItem("alexjpaz-twitch/linkify-queue"))||[]),a=Object(l.a)(t,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){var e=new URLSearchParams(window.location.hash.slice(1)).get("channel"),t=new URLSearchParams(window.location.hash.slice(1)).get("token");console.log(e,t),o.onReward=function(e,t,a,n,c){var i={key:JSON.stringify([e,t,n,(new Date).getTime()]),date:new Date,user:e,reward:t,message:n};s((function(e){var t=[i].concat(Object(r.a)(e)).slice(0,25);return localStorage.setItem("alexjpaz-twitch/linkify-queue",JSON.stringify(t)),t}))},o.Init(e,t)}),[]),Object(k.jsx)(h.a,{fixed:!0,children:Object(k.jsx)(f.a,{component:p.a,children:Object(k.jsxs)(b.a,{className:e.table,"aria-label":"simple table",children:[Object(k.jsx)(x.a,{children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{children:"User"}),Object(k.jsx)(g.a,{children:"Time"}),Object(k.jsx)(g.a,{align:"left",children:"message"})]})}),Object(k.jsx)(O.a,{children:i.map((function(e){return Object(k.jsxs)(m.a,{children:[Object(k.jsx)(g.a,{component:"th",scope:"row",children:e.user}),Object(k.jsx)(g.a,{component:"th",scope:"row",children:e.date&&Object(k.jsx)(S.a,{date:e.date,locale:"en-US"})}),Object(k.jsx)(g.a,{align:"left",children:Object(k.jsx)(u.a,{properties:{target:"_blank"},children:e.message})})]},e.key)}))})]})})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(I,{})}),document.getElementById("root")),J()}},[[65,1,2]]]);
//# sourceMappingURL=main.c50e94a9.chunk.js.map