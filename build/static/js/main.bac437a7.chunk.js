(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(7),i=c.n(s),o=c(6),l=c.n(o),u=c(8),j=c(2),b=function(e){var t=e.titulo;return Object(a.jsx)("nav",{className:"nav-wrapper light-blue darken-3",children:Object(a.jsx)("a",{href:"#!",className:"brand-logo center",children:t})})},d=c(3),h=c.n(d),m=function(e,t){var c=Object(n.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1];return[s,function(){return Object(a.jsx)("select",{className:"browser-default",value:s,onChange:function(e){return i(e.target.value)},children:t.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.label},e.value)}))})}]},v=function(e){var t=e.setCategoria,c=m("general",[{value:"general",label:"General"},{value:"business",label:"Negocios"},{value:"entertainment",label:"Entretenimiento"},{value:"health",label:"Salud"},{value:"science",label:"Ciencia"},{value:"sports",label:"Deportes"},{value:"technology",label:"Tecnolog\xeda"}]),n=Object(j.a)(c,2),r=n[0],s=n[1];return Object(a.jsx)("div",{className:"".concat(h.a.buscador," row"),children:Object(a.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(a.jsx)("h2",{className:h.a.heading,children:"Encuentra Noticias por Categor\xeda"}),Object(a.jsx)(s,{}),Object(a.jsx)("div",{className:"input-field col s12",children:Object(a.jsx)("input",{type:"submit",className:"".concat(h.a.btnBlock," btn-large amber darken-2"),value:"Buscar"})})]})})})},O=c(4),f=c.n(O),g=function(e){var t=e.noticia,c=t.urlToImage,n=t.url,r=t.title,s=t.description,i=c?Object(a.jsx)("div",{className:"card-image image-top",children:Object(a.jsx)("img",{src:c,alt:r,className:"".concat(f.a.card_img)})}):null;return Object(a.jsx)("div",{className:"col s12 m6 l4",children:Object(a.jsxs)("div",{className:"".concat(f.a.card_height," card"),children:[i,Object(a.jsxs)("div",{className:"".concat(f.a.content," card-content"),children:[Object(a.jsx)("h5",{children:r}),Object(a.jsx)("p",{children:s})]}),Object(a.jsx)("div",{className:"card-action",children:Object(a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn",children:"Ver noticia completa"})})]})})},x=function(e){var t=e.noticias;return Object(a.jsx)("div",{className:"row",children:t.map((function(e){return Object(a.jsx)(g,{noticia:e},e.url)}))})};var p=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),o=i[0],d=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"986c4acce55947878613421bd6e26263",t="http://newsapi.org/v2/top-headlines?country=us&category=".concat(c,"&apiKey=").concat("986c4acce55947878613421bd6e26263"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,d(n.articles);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{titulo:"Buscador de Noticias"}),Object(a.jsxs)("div",{className:"container white",children:[Object(a.jsx)(v,{setCategoria:r}),Object(a.jsx)(x,{noticias:o})]})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),_()},3:function(e,t,c){e.exports={heading:"Formulario_heading__sN5Ey",buscador:"Formulario_buscador__2ABO4",btnBlock:"Formulario_btnBlock__2Wj7f"}},4:function(e,t,c){e.exports={card_img:"Noticia_card_img__3GFUo",card_height:"Noticia_card_height__1mbug",content:"Noticia_content__3L8hs"}}},[[15,1,2]]]);
//# sourceMappingURL=main.bac437a7.chunk.js.map