(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{581:function(e,t,n){"use strict";n.r(t);n(35);var r={props:["permessi"],data:function(){return{selectOrdine:"Più recente",itemOrdine:["Più recente","Meno recente","Prezzo crescente","Prezzo decerescente","Dimensione crescente","Dimensione decerescente","Qualità crescente","Qualità decrescente"],selectStato:"qualsiasi",itemStato:["ottimo","sufficiente","buono","pessimo","qualsiasi"],min:0,max:2e3,range:[0,2e3]}},computed:{height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"200%";case"sm":case"md":case"lg":case"xl":return"100%"}}},watch:{selectOrdine:function(e){this.$nuxt.$emit(e)},selectStato:function(e){this.$nuxt.$emit(e,e,this.selectOrdine,this.range)}},methods:{submit:function(){this.$nuxt.$emit("prezzo",this.selectStato,this.selectOrdine,this.range)}}},l=n(87),c=n(123),o=n.n(c),m=n(727),d=n(441),v=n(416),h=n(407),f=n(592),x=n(728),w=n(410),S=n(721),O=n(517),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-app-bar",{attrs:{color:"white",height:e.height}},[n("v-row",[n("v-col",{attrs:{cols:e.permessi?6:12,sm:e.permessi?4:6}},[n("v-select",{attrs:{items:e.itemOrdine,filled:"",label:"Ordine","hide-details":""},model:{value:e.selectOrdine,callback:function(t){e.selectOrdine=t},expression:"selectOrdine"}})],1),e._v(" "),n("v-col",{directives:[{name:"show",rawName:"v-show",value:e.permessi,expression:"permessi"}],attrs:{cols:"6",sm:"4"}},[n("v-select",{attrs:{items:e.itemStato,filled:"",label:"Stato","hide-details":""},model:{value:e.selectStato,callback:function(t){e.selectStato=t},expression:"selectStato"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:e.permessi?4:6}},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("v-range-slider",{staticClass:"align-center",attrs:{max:e.max,min:e.min,"hide-details":""},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}}),e._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:e.range[0],"hide-details":"","single-line":"",type:"number"},on:{change:function(t){return e.$set(e.range,0,t)}}})],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:e.range[1],"hide-details":"","single-line":"",type:"number"},on:{change:function(t){return e.$set(e.range,1,t)}}})],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"},on:{click:e.submit}},[e._v("\n\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VAppBar:m.a,VBtn:d.a,VCard:v.a,VCol:h.a,VForm:f.a,VRangeSlider:x.a,VRow:w.a,VSelect:S.a,VTextField:O.a})}}]);