(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{285:function(t,e,o){"use strict";var n={data:function(){return{drawer:!0,user:JSON.parse(localStorage.getItem("user")),permesso:localStorage.getItem("permesso")}},methods:{goTo:function(t){window.location.href="https://site202109.tw.cs.unibo.it"+t}}},r=o(87),v=o(123),l=o.n(v),m=o(406),c=o(407),w=o(401),d=o(186),_=o(231),h=o(187),f=o(118),x=o(188),V=o(74),N=o(103),k=o(408),I=o(409),L=o(410),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"2"}},[o("v-navigation-drawer",{attrs:{permanent:"",width:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-img",{attrs:{src:"https://site202109.tw.cs.unibo.it/NoloNolo.png",alt:"logo di NoloNoloPlus"},on:{click:function(e){return t.goTo("/Home")}}}),t._v(" "),o("v-divider"),t._v(" "),o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:3==t.permesso,expression:"permesso == 3"}],staticClass:"px-2"},[o("v-list-item-title",[t._v("Manager: "+t._s(t.user.nome))])],1),t._v(" "),o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:2==t.permesso,expression:"permesso == 2"}],staticClass:"px-2"},[o("v-list-item-title",[t._v("Dipendente: "+t._s(t.user.nome))])],1),t._v(" "),o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:1==t.permesso,expression:"permesso == 1"}],staticClass:"px-2",attrs:{link:"",to:{path:"/User"}}},[o("v-list-item-avatar",[o("v-img",{attrs:{src:"https://site202109.tw.cs.unibo.it"+t.user.img.slice(2)}})],1),t._v(" "),o("v-list-item-title",[t._v(t._s(t.user.nome))])],1),t._v(" "),o("v-divider"),t._v(" "),o("v-list",{attrs:{dense:""}},[o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:3==t.permesso,expression:"permesso == 3"}],attrs:{link:""},on:{click:function(e){return t.goTo("/management/")}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-home-city")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Management")])],1)],1),t._v(" "),o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.permesso>=2,expression:"permesso >= 2"}],attrs:{link:""},on:{click:function(e){return t.goTo("/backoffice/")}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Back Office")])],1)],1),t._v(" "),o("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0==t.permesso,expression:"permesso == 0"}],attrs:{link:"",to:{path:"/Register"}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-plus")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Register")])],1)],1),t._v(" "),o("v-list-item",{attrs:{link:"",to:{path:"/"}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Exit/Logout")])],1)],1)],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"10"}},[o("v-main",[o("Nuxt")],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:m.a,VCol:c.a,VDivider:w.a,VIcon:d.a,VImg:_.a,VList:h.a,VListItem:f.a,VListItemAvatar:x.a,VListItemContent:V.a,VListItemIcon:N.a,VListItemTitle:V.c,VMain:k.a,VNavigationDrawer:I.a,VRow:L.a})},286:function(t,e,o){"use strict";var n={data:function(){return{}}},r=o(87),v=o(123),l=o.n(v),m=o(406),c=o(408),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-main",[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:m.a,VMain:c.a})},299:function(t,e,o){o(300),t.exports=o(301)}},[[299,19,8,20]]]);