(this["webpackJsonpintro-javascript"]=this["webpackJsonpintro-javascript"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(7),i=n.n(a),o=(n(16),n(2)),s=n(9),u=function(e){var t=e.setCategory,n=e.categories,a=t,i=n,u=Object(c.useState)(""),j=Object(o.a)(u,2),d=j[0],b=j[1],l=function(e){if(""!==d.trim()){var t=i.find((function(e){return e===d}));console.log(t),void 0===t?(a((function(e){return[d].concat(Object(s.a)(e))})),b("")):alert("Category is already exist")}else alert("Category is not defined")};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Add new category"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(e)},children:[Object(r.jsx)("input",{id:"category",type:"text",value:d,placeholder:"Add new category",onChange:function(e){b(e.target.value)},onKeyPress:function(e){}}),Object(r.jsx)("button",{type:"button",onClick:l,children:"Add Category"})]})]})},j=n(10),d=n(6),b=n.n(d),l=n(8),f=function(){var e=Object(l.a)(b.a.mark((function e(){var t,n,r,c,a,i,o=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"onePunch",n="https://api.giphy.com/v1/gifs/search?api_key=".concat("IUF5aM1djGu3bNyPeMKSxD363UQkfyFj","&q=").concat(t,"&limit=10"),e.prev=3,e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,imgURL:null===(t=e.images)||void 0===t?void 0:t.downsized}})),e.abrupt("return",i);case 15:return e.prev=15,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",[]);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();function h(e){var t=e.id,n=e.imgURL;return Object(r.jsx)("div",{className:"divImages card animate__animated animate__fadeInDown",children:Object(r.jsx)("img",{src:n.url,alt:t})},t)}var O=function(e){var t=e.category,n=void 0===t?"One Punch":t,a=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){return a({data:e,loading:!1})}))}),[e]),r}(n),i=a.data,s=a.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:n}),s&&"Cargando",Object(r.jsx)("div",{className:"card-grid",children:i.map((function(e){if(e.id)return Object(r.jsx)(h,Object(j.a)({},e),e.id)}))})]})},g=function(){var e=Object(c.useState)(["One Punch"]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(o.a)(i,2);s[0],s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"GifExpertApp"}),Object(r.jsx)(u,{setCategory:a,categories:n}),Object(r.jsx)("hr",{}),Object(r.jsx)("h3",{children:"Este ser\xe1 una iteraci\xf3n con un array"}),Object(r.jsx)("ol",{children:n.map((function(e,t){return Object(r.jsx)(O,{category:e},e)}))}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Este ser\xe1 una iteraci\xf3n con un objeto"})]})};i.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.46799012.chunk.js.map