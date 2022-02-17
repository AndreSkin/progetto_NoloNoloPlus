(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{434:function(e,t,n){"use strict";var r=n(517);t.a=r.a},466:function(e,t,n){"use strict";n(12),n(11),n(16),n(10),n(17);var r=n(22),l=n(1),o=(n(6),n(13),n(467),n(15)),c=n(199),h=n(156),v=n(37),d=n(204),f=n(32),m=n(90),x=n(125),y=n(198),w=n(14);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(t){var n=Object(r.a)(t,2),l=n[0],o=n[1];e.$attrs.hasOwnProperty(l)&&Object(w.a)(l,o,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,e)},genClose:function(){var e=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var l=this.textColor||this.outlined&&this.color;return e(r,this.setTextColor(l,data),t)}})},467:function(e,t,n){var content=n(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("197fcea4",content,!0,{sourceMap:!1})},468:function(e,t,n){var r=n(28)(!1);r.push([e.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),e.exports=r},485:function(e,t){},486:function(e,t){},491:function(e,t){},492:function(e,t){},497:function(e,t){},498:function(e,t){},500:function(e,t){},504:function(e,t){},506:function(e,t){},509:function(e,t){},514:function(e,t){},516:function(e,t){},578:function(e,t,n){var content=n(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("53b16c22",content,!0,{sourceMap:!1})},699:function(e,t,n){"use strict";n(578)},700:function(e,t,n){var r=n(28)(!1);r.push([e.i,".reg{margin-bottom:20px}",""]),e.exports=r},701:function(e,t,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("83ff91dc",content,!0,{sourceMap:!1})},702:function(e,t,n){var r=n(28)(!1);r.push([e.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),e.exports=r},723:function(e,t,n){"use strict";n.r(t);var r=n(36),l=(n(105),n(35),n(20),n(82),n(483)),o={layout:"empty",data:function(){return{UserName:"",Password:"",Rpassword:"",EMail:"",Indirizzo:"",Image:[],Rules:[function(e){return!!e}],pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,valid:!1,show:!1,alert:{message:"",show:!1,type:""}}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return"100%";case"md":return"50%";case"lg":case"xl":return"30%"}}},methods:{submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,t.next=4,e.$axios({method:"get",url:"https://site202109.tw.cs.unibo.it/mongo/people?nome="+e.UserName}).then((function(t){200===t.status&&(e.alert.message="Nome utente già presente",e.alert.type="error",e.alert.show=!0)}));case 4:n=t.sent,t.next=39;break;case 7:return t.prev=7,t.t0=t.catch(1),t.prev=9,t.next=12,e.$axios({method:"get",url:"https://site202109.tw.cs.unibo.it/mongo/people?mail="+e.EMail}).then((function(t){200===t.status&&(e.alert.message="Email già presente",e.alert.type="error",e.alert.show=!0)}));case 12:(n=t.sent)&&(n=null),t.next=39;break;case 16:if(t.prev=16,t.t1=t.catch(9),e.pattern.test(e.EMail)){t.next=24;break}e.alert.message="Email non corretta",e.alert.type="error",e.alert.show=!0,t.next=39;break;case 24:if(e.Password===e.Rpassword){t.next=31;break}e.alert.message="Password diverse",e.alert.type="error",e.alert.show=!0,e.Rpassword="",t.next=39;break;case 31:return(data=new FormData).append("nome",e.UserName.trim()),data.append("mail",e.EMail),data.append("address",e.Indirizzo),data.append("image",e.Image),t.next=38,l.hash(e.Password,10,function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(l,o){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l){t.next=2;break}throw l;case 2:return t.prev=2,data.append("psw",o),t.next=6,e.$axios({method:"post",url:"https://site202109.tw.cs.unibo.it/mongo/posthere?type=user",headers:{"Content-Type":"multipart/form-data"},data:data}).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(200!==r.status){t.next=10;break}return t.prev=1,t.next=4,e.$axios({method:"get",url:"https://site202109.tw.cs.unibo.it/mongo/people?nome="+e.UserName}).then((function(e){200===e.status&&(localStorage.setItem("user",JSON.stringify({nome:e.data.val.nome,img:e.data.val.img})),localStorage.setItem("permesso",1),window.location.href="../Home")}));case 4:n=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n&&(n=null);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}());case 6:n=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n&&(n=null);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}());case 38:n=t.sent;case 39:case"end":return t.stop()}}),t,null,[[1,7],[9,16]])})))()},back:function(){window.location.href="../"}}},c=o,h=(n(699),n(87)),v=n(123),d=n.n(v),f=n(729),m=n(441),x=n(414),y=n(407),w=n(519),_=n(719),k=(n(12),n(11),n(13),n(16),n(17),n(124)),z=n(1),O=n(23),C=(n(40),n(56),n(6),n(63),n(34),n(159),n(10),n(50),n(701),n(434)),S=n(466),j=n(2),$=n(14),V=n(65);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(z.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=C.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"==typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(j.C)(e).every((function(e){return null!=e&&"object"===Object(O.a)(e)}))}}},computed:{classes:function(){return P(P({},C.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var n=t.size;return e+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(j.s)(t,1024===this.base))},internalArrayValue:function(){return Object(j.C)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var e=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var n=t.name,r=void 0===n?"":n,l=t.size,o=void 0===l?0:l,c=e.truncateText(r);return e.showSize?"".concat(c," (").concat(Object(j.s)(o,1024===e.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object($.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.multiple?e:e?[e]:[];Object(j.j)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(text,t){return e.$createElement(S.a,{props:{small:e.smallChips},on:{"click:close":function(){var n=e.internalValue;n.splice(t,1),e.internalValue=n}}},[text])})):[]},genControl:function(){var e=C.a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(V.c)(e.data.style,{display:"none"})),e},genInput:function(){var input=C.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[r],file:n,index:r}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=C.a.options.methods.genTextFieldSlot.call(this);return t.data.on=P(P({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(k.a)(e.target.files||[]);this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}}),R=n(717),B=n(410),D=n(517),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-row",[n("v-col",{attrs:{align:"center"}},[n("v-card",{staticStyle:{padding:"50px 50px 50px 50px"},attrs:{heigt:"30%",width:e.width}},[n("v-form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-file-input",{staticClass:"expanding-search rounded-pill reg",attrs:{id:"img",accept:"image/*",clearable:"",dense:"","persistent-label":"",label:"Image input",required:"","hide-details":"",rules:e.Rules},model:{value:e.Image,callback:function(t){e.Image=t},expression:"Image"}}),e._v(" "),n("v-text-field",{staticClass:"expanding-search rounded-pill reg",attrs:{"aria-label":"username",clearable:"",dense:"","persistent-placeholder":"",placeholder:"UserName",required:"","hide-details":"",rules:e.Rules},model:{value:e.UserName,callback:function(t){e.UserName=t},expression:"UserName"}}),e._v(" "),n("v-text-field",{staticClass:"expanding-search rounded-pill reg",attrs:{"aria-label":"email",clearable:"",dense:"","persistent-placeholder":"",placeholder:"E-Mail",required:"","hide-details":"",rules:e.Rules},model:{value:e.EMail,callback:function(t){e.EMail=t},expression:"EMail"}}),e._v(" "),n("v-text-field",{staticClass:"reg",attrs:{"aria-label":"password",rules:e.Rules,type:e.show?"text":"password",clearable:"",dense:"","persistent-placeholder":"",placeholder:"Password",required:"","hide-details":"","append-icon":e.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.Password,callback:function(t){e.Password=t},expression:"Password"}}),e._v(" "),n("v-text-field",{staticClass:"reg",attrs:{"aria-label":"ripeti password",rules:e.Rules,type:e.show?"text":"password",clearable:"",dense:"","persistent-placeholder":"",placeholder:"Ripeti password",required:"","hide-details":"","append-icon":e.show?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.Rpassword,callback:function(t){e.Rpassword=t},expression:"Rpassword"}}),e._v(" "),n("v-text-field",{staticClass:"expanding-search rounded-pill reg",attrs:{"aria-label":"indirizzo id fatturazzione",clearable:"",dense:"",placeholder:"Indirizzo di fatturazzione",required:"","hide-details":"",rules:e.Rules},model:{value:e.Indirizzo,callback:function(t){e.Indirizzo=t},expression:"Indirizzo"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit",disabled:!e.valid}},[e._v("\n\t\t\t\t\t\tRegister\n\t\t\t\t\t")])],1),e._v(" "),n("div",{staticClass:"text--disabled"},[n("small",[e._v("or")])]),e._v(" "),n("v-btn",{attrs:{color:"primary",small:"",text:"",type:"submit"},on:{click:e.back}},[e._v("\n\t\t\t\t\tHo già un account\n\t\t\t\t")]),e._v(" "),n("v-dialog",{attrs:{transition:"dialog-top-transition",width:"auto"},model:{value:e.alert.show,callback:function(t){e.$set(e.alert,"show",t)},expression:"alert.show"}},[n("v-alert",{staticClass:"ma-0",attrs:{type:e.alert.type}},[e._v(e._s(e.alert.message))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAlert:f.a,VBtn:m.a,VCard:x.a,VCol:y.a,VContainer:w.a,VDialog:_.a,VFileInput:E,VForm:R.a,VRow:B.a,VTextField:D.a})}}]);