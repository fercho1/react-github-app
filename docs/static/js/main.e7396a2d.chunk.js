(this["webpackJsonpgithub-app"]=this["webpackJsonpgithub-app"]||[]).push([[0],{32:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(19),s=t.n(c),r=t(7),i=t(2),l=t(13),o=t(12),j=t(9),b=t.n(j),d=t(11),u=function(){var e=Object(d.a)(b.a.mark((function e(){var a,t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users/fercho1/repos",e.next=3,fetch("https://api.github.com/users/fercho1/repos");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,n=t.map((function(e){return{id:e.id,name:e.name}})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=t(0),h=function(e){var a=e.name;return Object(m.jsx)("div",{className:"container mt-5",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("h3",{children:[" ",a," "]})})})})},p=function(){var e=function(){var e=Object(n.useState)({data:[],loading:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){u().then((function(e){c({data:e,loading:!1})}))}),[]),t}(),a=e.data,t=e.loading;return Object(m.jsxs)(m.Fragment,{children:[t&&Object(m.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(m.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(m.jsx)(h,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(d.a)(b.a.mark((function e(){var a,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users/fercho1",e.next=3,fetch("https://api.github.com/users/fercho1");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){var a=e.login,t=e.avatar_url,n=e.name,c=e.html_url,s=e.public_repos,i=e.type,l=e.following;return Object(m.jsxs)("div",{className:"row mt-5 ml-2",children:[Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("img",{src:t,alt:a,className:"img-thumbnail rounded-circle animate__animated animate__fadeInLeft"})}),Object(m.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(m.jsxs)("h3",{children:[" ",a," "]}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:" Name: "})," ",n," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:" Url: "})," ",c," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:" Type: "})," ",i," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[" ",Object(m.jsx)("b",{children:" Following: "})," ",l," "]})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/repositories",children:["Repositories:   ",s]})]})]})},v=function(){var e=function(){var e=Object(n.useState)({data:[],loading:!0}),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){x().then((function(e){c({data:e,loading:!1})}))}),[]),t}(),a=e.data,t=e.loading;return Object(m.jsxs)(m.Fragment,{children:[t&&Object(m.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(m.jsx)("div",{className:"card-grid",children:Object(m.jsx)(O,Object(l.a)({},a),a.id)})]})},f=function(){return Object(m.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(r.b,{className:"navbar-brand",to:"/",children:"GithubApp"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(m.jsxs)("ul",{className:"navbar-nav",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/user",children:"User"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/repositories",children:"Repositories"})})]})})]})})},g=function(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(i.d,{children:[Object(m.jsx)(i.b,{exact:!0,path:"/",component:v}),Object(m.jsx)(i.b,{exact:!0,path:"/user",component:v}),Object(m.jsx)(i.b,{exact:!0,path:"/repositories",component:p}),Object(m.jsx)(i.a,{to:"/user"})]})]})})},N=function(){return Object(m.jsx)(g,{})};s.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e7396a2d.chunk.js.map