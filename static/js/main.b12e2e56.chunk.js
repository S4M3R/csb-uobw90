(this["webpackJsonpreact-redux-course"]=this["webpackJsonpreact-redux-course"]||[]).push([[0],{104:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(25),o=c.n(r),a=c(35),s=c(180),i="SET_POKEMON",j="SET_ERROR",l="CLEAR_ERROR",u=c(179),O=c(176),d=c(119),b=c.p+"static/media/logo_v4.0905522d.svg",p=c(4),h=function(){return Object(p.jsx)(u.a,{fixed:"top",children:Object(p.jsxs)(O.a,{children:[Object(p.jsx)(u.a.Item,{to:"/",children:Object(p.jsx)(d.a,{size:"small",src:b})}),Object(p.jsx)(u.a.Item,{to:"/",children:"Home"}),Object(p.jsx)(u.a.Item,{to:"/",position:"right",children:"Favorites"})]})})},m=(c(139),function(e){var t=e.children,c=Object(a.c)((function(e){return e.errorMessage})),n=Object(a.b)();return Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{}),c&&Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)(s.a,{onDismiss:function(){var e;n({type:l,payload:e})},content:c,color:"red"})}),Object(p.jsx)("div",{className:"Layout-content",children:t})]})}),f=c(118),x=c(182),v=c(178);c(140);function _(){return Object(p.jsx)("div",{className:"Searcher wrapper",children:Object(p.jsx)(x.a,{children:Object(p.jsx)(x.a.Column,{widescreen:10,largeScreen:10,mobile:16,className:"Searcher",children:Object(p.jsx)(v.a,{aligned:"right",input:{fluid:!0},showNoResults:!1,placeholder:"Encuentra a tu Pokem\xf3n favorito"})})})})}var E=c(58),g=c(177),S=c(86),N=(c(104),function(e){var t=e.pokemon;return Object(p.jsx)(x.a.Column,{mobile:16,tablet:8,computer:4,children:Object(p.jsxs)("div",{className:"PokemonCard",children:[Object(p.jsx)(E.a,{name:"favorite",color:"yellow"}),Object(p.jsx)(d.a,{centered:!0,src:t.sprites.front_default}),Object(p.jsx)("h2",{className:"PokemonCard-title",children:t.name}),Object(p.jsx)(g.a,{}),Object(p.jsx)(S.a,{color:"violet",children:"claro"})]})})}),R=function(e){var t=e.pokemons;return Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)(x.a,{children:t.map((function(e,t){return Object(p.jsx)(N,{pokemon:e},"pokemon-".concat(t))}))})})};R.defaultProps={pokemons:[]};var w=R,k=(c(141),c(83)),T=c.n(k),y=Object({NODE_ENV:"production",PUBLIC_URL:"https://.github.io/csb-uobw90",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).POKEAPI||"https://pokeapi.co/api/v2/",P=T.a.create({baseURL:y});var C=function(e){Object(f.a)(e);var t=Object(a.b)(),c=Object(a.c)((function(e){return e.list}));return Object(n.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:151;return P.get("/pokemon?limit=".concat(e))})().then((function(e){var c=e.data.results;return Promise.all(c.map((function(e){return T.a.get(e.url)}))).then((function(e){console.log(e);var c=e.map((function(e){return e.data}));console.log(c),t({type:i,payload:c})})).catch((function(e){t({type:j,payload:"Ocurrio un error"})}))}))}),[]),Object(p.jsxs)("div",{className:"Home",children:[Object(p.jsx)(_,{}),Object(p.jsx)(w,{pokemons:c})]})},D=(c(160),function(){return Object(p.jsx)(m,{children:Object(p.jsx)(C,{})})}),I=(c(161),c(94)),L=c(38),H={list:[],errorMessage:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(L.a)(Object(L.a)({},e),{},{list:t.payload});case j:return Object(L.a)(Object(L.a)({},e),{},{errorMessage:t.payload});case l:return Object(L.a)(Object(L.a)({},e),{},{errorMessage:""});default:return Object(L.a)({},e)}},M=Object(I.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(I.a)((function(e){return function(e){return function(t){console.log("disparando: ",t),e(t)}}}))),U=Object(I.c)(K,M);o.a.render(Object(p.jsxs)(a.a,{store:U,children:[Object(p.jsx)(D,{})," "]}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.b12e2e56.chunk.js.map