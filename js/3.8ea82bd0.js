(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"hhh LpR lFf"}},[o("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[o("q-toolbar",{staticClass:"bg-light-blue-10 text-white shadow-18 rounded-borders"},[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.drawerleft=!t.drawerleft}}}),o("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{to:"/",shrink:""}},[t._v("\n            "+t._s(t.title)+"\n          ")]),o("q-space"),o("q-btn",{attrs:{icon:"img:statics/icons/logo.png",stretch:"",flat:"",label:"首页"},on:{click:function(e){return t.brownlink("https://www.56yhz.com/")}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n            聚商汇首页\n            ")])],1),o("q-btn",{attrs:{icon:"img:statics/icons/apiauth.png",stretch:"",flat:"",label:"权限",to:"/apiauth"}}),o("q-btn",{attrs:{icon:"menu_book",stretch:"",flat:"",label:"开发文档"},on:{click:function(e){return t.brownlink("https://www.56yhz.com/docs/")}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              二次开发API文档\n            ")])],1),o("q-btn",{attrs:{round:"",flat:""},on:{click:function(e){return t.brownlink("https://github.com/Singosgu")}}},[o("q-avatar",{attrs:{size:"26px"}},[o("img",{attrs:{src:"statics/icons/GitHub.png"}})]),o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                GitHub链接\n                ")])],1),o("q-btn",{attrs:{round:"",flat:""},on:{click:function(e){return t.brownlink("https://gitee.com/Singosgu")}}},[o("q-avatar",{attrs:{size:"26px"}},[o("img",{attrs:{src:"statics/icons/gitee.ico"}})]),o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                码云链接\n                ")])],1),o("q-btn",{attrs:{icon:"contact_mail",stretch:"",flat:"",label:"联系我们"},on:{click:function(e){t.contact=!0}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              商务合作或给我们建议\n            ")])],1),""!==t.openid?o("q-separator",{attrs:{dark:"",vertical:""}}):t._e(),""!==t.openid?o("q-btn-dropdown",{attrs:{stretch:"",flat:"",icon:"account_circle","auto-close":""}},[o("q-list",[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",tabindex:"0"},on:{click:function(e){t.login=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{icon:"supervisor_account",color:"secondary","text-color":"white"}})],1),o("q-item-section",[o("q-item-label",[t._v("更改用户")])],1)],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",tabindex:"1"},on:{click:function(e){t.authDialog=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{icon:"supervisor_account",color:"secondary","text-color":"white"}})],1),o("q-item-section",[o("q-item-label",[t._v("我的授权码")])],1)],1),o("q-separator",{attrs:{inset:"",spaced:""}}),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",tabindex:"0"},on:{click:function(e){return t.logout()}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{icon:"all_out",color:"primary","text-color":"white"}})],1),o("q-item-section",[o("q-item-label",[t._v("用户退出")])],1)],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",tabindex:"1"},on:{click:function(e){return t.logoutAll()}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{icon:"settings_power",color:"negative","text-color":"white"}})],1),o("q-item-section",[o("q-item-label",[t._v("初始化退出")])],1)],1)],1)],1):t._e(),o("q-dialog",{model:{value:t.authDialog,callback:function(e){t.authDialog=e},expression:"authDialog"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("授权码")])]),o("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.authid)+"\n        ")]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),[""===t.openid?o("q-btn",{staticStyle:{"margin-right":"10px"},attrs:{label:"登入",color:"primary"},on:{click:function(e){t.login=!0}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              管理员账号登入无需授权码\n            ")])],1):t._e(),""===t.openid?o("q-btn",{attrs:{label:"注册",color:"primary"},on:{click:function(e){t.register=!0}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              注册获得管理员账号和授权码\n            ")])],1):t._e(),o("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("用户登入")])]),o("q-card-section",{staticClass:"q-pt-none"},[o("q-input",{attrs:{dense:"",label:"用户名",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit()}},model:{value:t.loginform.name,callback:function(e){t.$set(t.loginform,"name",e)},expression:"loginform.name"}}),o("q-input",{attrs:{type:"password",label:"密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit()}},model:{value:t.loginform.password,callback:function(e){t.$set(t.loginform,"password",e)},expression:"loginform.password"}}),t.auth?t._e():o("q-input",{attrs:{label:"授权码",placeholder:"请输入授权码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginSubmit()}},model:{value:t.authid,callback:function(e){t.authid=e},expression:"authid"}},[o("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale","content-class":"bg-negative",offset:[10,10],"content-style":"font-size: 14px"}},[o("div",[t._v("请询问管理拿到授权码，此授权码为首次登入时使用")]),o("div",[t._v("如果没有授权码，可以注册后拿到新的授权码，授权码为用户数据归类的统一标识")]),o("div",[t._v("管理员账号登入无需授权码")])])],1)],1),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.auth,expression:"!auth"}],attrs:{color:"accent",label:"管理员登入"},on:{click:function(e){return t.handleAdminLogin()}}}),o("q-btn",{attrs:{color:"primary",label:"用户登入"},on:{click:function(e){return t.loginSubmit()}}})],1)],1)],1),o("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:t.register,callback:function(e){t.register=e},expression:"register"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("管理员注册")])]),o("q-card-section",{staticClass:"q-pt-none"},[o("q-input",{attrs:{dense:"",label:"用户名",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.registerSubmit()}},model:{value:t.registerform.name,callback:function(e){t.$set(t.registerform,"name",e)},expression:"registerform.name"}}),o("q-input",{attrs:{type:"password",label:"密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.registerSubmit()}},model:{value:t.registerform.password1,callback:function(e){t.$set(t.registerform,"password1",e)},expression:"registerform.password1"}}),o("q-input",{attrs:{type:"password",label:"确认密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.registerSubmit()}},model:{value:t.registerform.password2,callback:function(e){t.$set(t.registerform,"password2",e)},expression:"registerform.password2"}})],1),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),o("q-btn",{attrs:{color:"primary",label:"注册"},on:{click:function(e){return t.registerSubmit()}}})],1)],1)],1)],""!==t.openid?o("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"event_note"},on:{click:function(e){return t.getNoteData()}}},[o("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n              "+t._s(t.note_num)+"\n            ")]),o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              备忘录\n            ")])],1):t._e()],2)],1),o("q-drawer",{attrs:{"show-if-above":"",mini:!t.drawerleft||t.miniState,width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3 shadow-24"},on:{"!click":function(e){return t.drawerClick(e)}},model:{value:t.drawerleft,callback:function(e){t.drawerleft=e},expression:"drawerleft"}},[o("q-scroll-area",{staticClass:"fit",staticStyle:{"overflow-y":"hidden"}},t._l(t.menuList,(function(e,a){return o("q-list",{key:a},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.link===e.link,to:{name:e.link},exact:"","active-class":"my-menu-link"},on:{click:function(o){t.link,e.link}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:e.icon}})],1),o("q-item-section",[t._v("\n                "+t._s(e.label)+"\n              ")])],1),e.separator?o("q-separator"):t._e()],1)})),1),o("div",{staticClass:"q-mini-drawer-hide absolute",staticStyle:{top:"15px",right:"-17px"}},[o("q-btn",{attrs:{dense:"",round:"",glossy:"",unelevated:"",color:"purple",icon:"chevron_left"},on:{click:function(e){t.miniState=!0}}})],1)],1),o("q-drawer",{attrs:{side:"right",bordered:"",width:340,breakpoint:500,"content-class":"bg-grey-3"},model:{value:t.drawerright,callback:function(e){t.drawerright=e},expression:"drawerright"}},[o("q-scroll-area",{staticClass:"fit"},[[o("div",{staticClass:"q-pa-md"},[o("div",{staticClass:"q-gutter-md row items-start"},[o("div",{staticClass:"flex flex-center",staticStyle:{"padding-top":"10px",height:"50px"}},[t._v("\n            选择日期即添加新的备忘信息\n            "),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.noteadd,expression:"noteadd"}],staticStyle:{"margin-left":"30px",height:"100%"},attrs:{round:"",color:"secondary",icon:"add"},on:{click:function(e){t.noteaddDialog=!0}}},[o("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              新增备忘信息\n            ")]),o("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:t.noteaddDialog,callback:function(e){t.noteaddDialog=e},expression:"noteaddDialog"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("备忘信息")])]),o("q-card-section",{staticClass:"q-pt-none"},[o("q-input",{staticStyle:{"margin-bottom":"20px"},attrs:{dense:"",label:"标题",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.noteSubmit()}},model:{value:t.noteform.title,callback:function(e){t.$set(t.noteform,"title",e)},expression:"noteform.title"}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteform.desc,expression:"noteform.desc"}],staticStyle:{width:"100%"},attrs:{placeholder:"备忘信息"},domProps:{value:t.noteform.desc},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.noteSubmit()},input:function(e){e.target.composing||t.$set(t.noteform,"desc",e.target.value)}}})],1),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),o("q-btn",{attrs:{color:"primary",label:"记录"},on:{click:function(e){return t.noteSubmit()}}})],1)],1)],1)],1)],1),o("q-date",{attrs:{events:t.events,"event-color":function(e){return e===t.today?"orange":"teal"}},on:{click:function(e){return t.Canlendadetail()}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)]),[o("div",{staticClass:"q-px-lg q-pb-md"},[o("q-timeline",{attrs:{color:"secondary"}},t._l(t.noteData,(function(e,a){return o("div",{key:a},[o("q-timeline-entry",{attrs:{title:e.title,subtitle:e.note_day,color:e.icon_color,icon:e.icon}},[o("q-badge",{attrs:{outline:"",color:e.label_color,label:e.label}}),o("div",{directives:[{name:"show",rawName:"v-show",value:"0"===e.edit,expression:"Note.edit === '0'"}]},[t._v("\n          "+t._s(e.desc)+"\n        ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:"1"===e.edit&&"0"===e.progress,expression:"Note.edit === '1' && Note.progress === '0'"}]},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.desc,expression:"Note.desc"}],staticStyle:{width:"100%"},attrs:{dense:"",autofocus:""},domProps:{value:e.desc},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.contactSubmit()},input:function(o){o.target.composing||t.$set(e,"desc",o.target.value)}}})]),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:"0"===e.progress&&"0"===e.edit,expression:"Note.progress === '0' && Note.edit ==='0'"}],attrs:{color:"secondary",label:"完成"},on:{click:function(e){return t.doneNote(a)}}}),"0"===e.progress&&"0"===e.edit?o("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{color:"accent",label:"修改"},on:{click:function(e){return t.editNote(a)}}}):t._e(),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:"0"===e.progress&&"0"===e.edit,expression:"Note.progress === '0' && Note.edit ==='0'"}],staticStyle:{"margin-left":"10px"},attrs:{color:"negative",label:"删除"},on:{click:function(e){return t.deleteNote(a)}}}),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:"0"===e.progress&&"1"===e.edit,expression:"Note.progress === '0' && Note.edit ==='1'"}],attrs:{color:"secondary",label:"取消"},on:{click:function(e){return t.CanceleditNote(a)}}}),o("q-btn",{directives:[{name:"show",rawName:"v-show",value:"0"===e.progress&&"1"===e.edit,expression:"Note.progress === '0' && Note.edit ==='1'"}],staticStyle:{"margin-left":"10px"},attrs:{color:"accent",label:"修改"},on:{click:function(e){return t.ConfirmeditNote(a)}}})],1)],1)})),0)],1)]]],2)],1),o("q-page-container",{staticStyle:{width:"100%"}},[o("router-view"),o("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[o("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.authid===t.openid,expression:"authid === openid"}],attrs:{flat:"",color:"black",label:"版权所有 ICP证：沪ICP备16034540号-1"},on:{click:function(e){return t.brownlink("http://www.miit.gov.cn/")}}}),o("q-btn",{attrs:{fab:"",glossy:"",icon:"contact_mail",color:"purple"},on:{click:function(e){t.contact=!0}}}),o("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[t._v("联系我们")])]),o("q-card-section",{staticClass:"q-pt-none"},[o("q-input",{staticStyle:{"padding-bottom":"10px"},attrs:{dense:"",label:"称呼",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.contactSubmit()}},model:{value:t.contactform.name,callback:function(e){t.$set(t.contactform,"name",e)},expression:"contactform.name"}}),o("q-input",{staticStyle:{"padding-bottom":"25px"},attrs:{dense:"",label:"联系方式"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.contactSubmit()}},model:{value:t.contactform.mobile,callback:function(e){t.$set(t.contactform,"mobile",e)},expression:"contactform.mobile"}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contactform.comments,expression:"contactform.comments"}],staticStyle:{width:"100%"},attrs:{placeholder:"备注信息"},domProps:{value:t.contactform.comments},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.contactSubmit()},input:function(e){e.target.composing||t.$set(t.contactform,"comments",e.target.value)}}})],1),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),o("q-btn",{attrs:{color:"primary",label:"发送"},on:{click:function(e){return t.contactSubmit()}}})],1)],1)],1)],1),o("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[o("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"accent"}})],1)],1)],1)},n=[],i=(o("28a5"),o("ac6a"),o("cadf"),o("06db"),o("5df3"),o("4f7f"),o("448a")),r=o.n(i),s=(o("7f7f"),o("758b")),c=[{icon:"insert_chart",label:"实时报表",link:"dashboard",separator:1,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"speaker_notes",label:"收货管理",link:"inbound",separator:0,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"rv_hookup",label:"发货管理",link:"outbound",separator:0,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"multiline_chart",label:"库存管理",link:"stock",separator:0,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"devices_other",label:"固定资产",link:"capital",separator:1,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"shop_two",label:"商品信息",link:"goods",separator:0,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"info",label:"基础信息",link:"baseinfo",separator:0,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"settings",label:"仓库设置",link:"warehouse",separator:1,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"},{icon:"assignment_ind",label:"员工管理",link:"staff",separator:0,create_time:"2021-04-15 12:46:02",last_update_time:"2021-04-15 12:46:02"}],l=o("b06b"),d={meta:{meta:{description:{name:"description",content:"聚商汇WMS--免费开源仓库管理系统"},keywords:{name:"keywords",content:"聚商汇,wms system, 仓库管理软件, 仓库管理，免费软件，免费wms"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}},link:{material:{rel:"shortcut icon",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}}},data:function(){return{title:"聚商汇WMS--免费开源仓库管理系统",left:!1,drawerleft:!1,drawerright:!1,miniState:!0,tab:"",logbtn:"1",auth:!1,authDialog:!1,authid:"",openid:"",login:!1,register:!1,link:"",contact:!1,contactform:{name:"",mobile:"",comments:""},loginform:{name:"",password:""},registerform:{name:"",password1:"",password2:""},menuList:c,date:"",today:"",events:[],noteadd:!0,note_num:0,noteaddDialog:!1,noteform:{title:"",desc:""},noteData:[],electronV:!1}},methods:{registerSubmit:function(){""===this.registerform.name?this.$q.notify({message:"用户名不可以为空",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.registerform.password1?this.$q.notify({message:"密码不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.registerform.password2?this.$q.notify({message:"请确认您第一次输入的密码",icon:"close",color:"negative",position:"right",timeout:1500}):this.registerform.password1!==this.registerform.password2?this.$q.notify({message:"2次输入的密码不一致",icon:"close",color:"negative",position:"right",timeout:1500}):this.handleRegisterSubmit()},loginSubmit:function(){var t=this;""===this.authid?this.$q.notify({message:"需要授权码才可以登入",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.loginform.name?this.$q.notify({message:"用户名不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.loginform.password?this.$q.notify({message:"密码不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):Object(s["f"])("authcheck",{data:this.authid}).then((function(e){"200"===e.data.code?(t.auth=!0,t.$q.localStorage.has("authid")&&t.$q.localStorage.getItem("authid")===t.authid||t.$q.localStorage.set("authid",t.authid),t.handleLogin()):(t.auth=!1,t.$q.notify({message:"授权码错误",icon:"close",color:"negative",position:"right",timeout:1500}))})).catch((function(t){return console.log(t)}))},authcheck:function(){var t=this;if(this.$q.localStorage.has("authid")){var e=this.$q.localStorage.getItem("authid");if(this.$q.localStorage.has("openid")){var o=this.$q.localStorage.getItem("openid");Object(s["f"])("initialdata/",{openid:o,authid:e}).then((function(e){if("1032"===e.data.code){t.authid=e.data.data.authid,t.auth=!0,t.openid=e.data.data.openid,t.note_num=e.data.note_num,t.events=e.data.events,t.events.map((function(e){t.events.push(e.note_day)})),t.events=r()(new Set(t.events)),t.noteData=e.data.today_note,t.noteData.forEach((function(t){t.edit="0","0"===t.progress?(t.label="待完成",t.label_color="negative"):(t.label="已完成",t.label_color="primary")})),t.$q.localStorage.set("notedata",t.noteData);var o=t.$q.localStorage.getItem("notedata");t.noteData=o,t.$q.localStorage.remove("notedata")}else t.$q.localStorage.remove("authid"),t.$q.localStorage.remove("openid"),t.auth=!1,t.note_num=0,t.authid="",t.openid="",t.noteData=[],t.events=[]})).catch((function(t){console.log(t)}))}else Object(s["f"])("initialdata/",{authid:e}).then((function(e){"1030"===e.data.code?(t.authid=e.data.data.authid,t.auth=!0):(t.$q.localStorage.remove("authid"),t.auth=!1)})).catch((function(t){console.log(t)}))}else this.$q.localStorage.has("openid")&&this.$q.localStorage.remove("openid")},handleLogin:function(){var t=this;Object(s["g"])("userlogin/",this.loginform).then((function(e){if("200"===e.data.code){t.login=!1,t.drawerright=!1,t.upnewdate(),t.openid=e.data.data.openid,t.$q.localStorage.set("openid",e.data.data.openid),t.note_num=e.data.note_num,t.note_num=e.data.note_num,t.events=e.data.events,t.events.map((function(e){t.events.push(e.note_day)})),t.events=r()(new Set(t.events)),t.noteData=e.data.today_note,t.noteData.forEach((function(t){t.edit="0","0"===t.progress?(t.label="待完成",t.label_color="negative"):(t.label="已完成",t.label_color="primary")})),t.$q.localStorage.set("notedata",t.noteData);var o=t.$q.localStorage.getItem("notedata");t.noteData=o,t.$q.localStorage.remove("notedata"),t.noteNum(),t.$q.notify({message:"登入成功",icon:"check",color:"positive",position:"right",timeout:1500})}else t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:1500})})).catch((function(t){return console.log(t)}))},handleAdminLogin:function(){var t=this;""===this.loginform.name?this.$q.notify({message:"用户名不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.loginform.password?this.$q.notify({message:"密码不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):Object(s["f"])("login",this.loginform).then((function(e){if(console.log(e.data),"200"===e.data.code){t.login=!1,t.drawerright=!1,t.upnewdate(),t.auth=!0,t.authid=e.data.data.authid,t.openid=e.data.data.openid,t.$q.localStorage.set("openid",e.data.data.openid),t.$q.localStorage.set("authid",e.data.data.openid),t.note_num=e.data.note_num,t.events=e.data.events,t.events.map((function(e){t.events.push(e.note_day)})),t.events=r()(new Set(t.events)),t.noteData=e.data.today_note,t.noteData.forEach((function(t){t.edit="0","0"===t.progress?(t.label="待完成",t.label_color="negative"):(t.label="已完成",t.label_color="primary")})),t.$q.localStorage.set("notedata",t.noteData);var o=t.$q.localStorage.getItem("notedata");t.noteData=o,t.$q.localStorage.remove("notedata"),t.noteNum(),t.$q.notify({message:"登入成功",icon:"check",color:"positive",position:"right",timeout:1500})}else t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:1500})})).catch((function(t){console.log(t)}))},handleRegisterSubmit:function(){var t=this;Object(s["f"])("register",this.registerform).then((function(e){"200"===e.data.code?(t.register=!1,t.registerform.name="",t.registerform.password1="",t.registerform.password2="",t.$q.localStorage.set("authid",e.data.data.openid),t.$q.localStorage.set("openid",e.data.data.openid),t.openid=e.data.data.openid,t.auth=!0,t.authid=e.data.data.openid,t.noteNum(),t.$q.notify({message:"注册成功",icon:"check",color:"positive",position:"right",timeout:1500})):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:1500})})).catch((function(t){return console.log(t)}))},logout:function(){this.drawerright=!1,this.login=!1,this.openid="",this.note_num=0,this.events=[],this.$q.localStorage.remove("openid")},logoutAll:function(){this.drawerright=!1,this.login=!1,this.auth=!1,this.openid="",this.authid="",this.note_num=0,this.events=[],this.$q.localStorage.remove("openid"),this.$q.localStorage.remove("authid"),this.$q.localStorage.remove("editnotetitle")},drawerClick:function(t){this.miniState&&(this.miniState=!1,t.stopPropagation())},versionCheck:function(){},contactSubmit:function(){var t=this;""===this.contactform.name?this.$q.notify({message:"称呼不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.contactform.mobile?this.$q.notify({message:"联系方式不能为空",icon:"close",color:"negative",position:"right",timeout:1500}):""===this.contactform.comments?this.$q.notify({message:"请输入您的需要和我们联系的信息",icon:"close",color:"negative",position:"right",timeout:1500}):(this.$set(this.contactform,"openid",this.openid),console.log(this.contactform),Object(s["f"])("contact",this.contactform).then((function(e){"200"===e.data.code?(t.contact=!1,t.$q.notify({message:"感谢您的反馈，我们会尽快联系您",icon:"check",color:"positive",position:"right",timeout:1500})):t.$q.notify({message:"或许请求次数过多，或者网络原因引起的提交不成功",icon:"close",color:"negative",position:"right",timeout:1500})})).catch((function(t){console.log(t)})))},brownlink:function(t){Object(l["a"])(t)},upnewdate:function(){var t=this,e=(new Date).getFullYear(),o=(new Date).getMonth()+1,a=(new Date).getDate();t.date=o<10&&a<10?e+"/0"+o+"/0"+a:o<10&&a>=10?e+"/0"+o+"/"+a:e+"/"+o+"/"+a,this.today=this.date,this.$q.localStorage.set("date",this.date)},editNote:function(t){this.noteData[t].edit="1",this.$q.localStorage.set("editnotedesc",this.noteData[t].desc),this.$q.localStorage.set("notedata",this.noteData);var e=this.$q.localStorage.getItem("notedata");this.noteData=e,this.$q.localStorage.remove("notedata")},doneNote:function(t){var e=this,o=this.$q.localStorage.getItem("openid");Object(s["d"])("notebook/",{openid:o},{id:this.noteData[t].id,progress:1}).then((function(o){e.noteData[t].progress="1",e.noteData[t].icon="check",e.noteData[t].icon_color="green",e.noteData[t].label="已完成",e.noteData[t].label_color="primary",e.$q.localStorage.set("notedata",e.noteData);var a=e.$q.localStorage.getItem("notedata");e.noteData=a,e.$q.localStorage.remove("notedata"),e.noteNum()})).catch((function(t){console.log(t)}))},deleteNote:function(t){var e=this;Object(s["b"])("notebook/",{id:this.noteData[t].id}).then((function(o){if("200"===o.data.code){e.noteData.splice(t,1),e.$q.localStorage.set("notedata",e.noteData);var a=e.$q.localStorage.getItem("notedata");e.noteData=a,e.$q.localStorage.remove("notedata"),e.noteNum()}})).catch((function(t){console.log(t)}))},CanceleditNote:function(t){this.noteData[t].edit="0";var e=this.$q.localStorage.getItem("editnotedesc");e===this.noteData[t].desc||(this.noteData[t].desc=e),this.$q.localStorage.set("notedata",this.noteData);var o=this.$q.localStorage.getItem("notedata");this.noteData=o,this.$q.localStorage.remove("notedata"),this.$q.localStorage.remove("editnotedesc")},ConfirmeditNote:function(t){var e=this;this.noteData[t].edit="0";var o=this.$q.localStorage.getItem("editnotedesc");if(o===this.noteData[t].desc);else{var a=this.$q.localStorage.getItem("openid");Object(s["d"])("notebook/",{openid:a},{id:this.noteData[t].id,desc:this.noteData[t].desc}).then((function(t){e.$q.localStorage.set("notedata",e.noteData);var o=e.$q.localStorage.getItem("notedata");e.noteData=o,e.$q.localStorage.remove("notedata")})).catch((function(t){console.log(t)}))}this.$q.localStorage.set("notedata",this.noteData);var n=this.$q.localStorage.getItem("notedata");this.noteData=n,this.$q.localStorage.remove("notedata"),this.$q.localStorage.remove("editnotedesc")},Canlendadetail:function(){var t=this,e=(new Date).getFullYear(),o=(new Date).getMonth()+1,a=(new Date).getDate(),n=this.$q.localStorage.getItem("date"),i=this.date.split("/");if(n===this.date);else{this.noteNum();var r=this.$q.localStorage.getItem("openid");Object(s["c"])("notebook/",{openid:r,note_day:this.date,max_page:50}).then((function(e){if("200"===e.data.results.code){t.noteData=e.data.results.data,t.$q.localStorage.set("notedata",t.noteData);var o=t.$q.localStorage.getItem("notedata");t.noteData=o,t.$q.localStorage.remove("notedata"),t.noteData.forEach((function(t){t.edit="0","0"===t.progress?(t.label="待完成",t.label_color="negative"):(t.label="已完成",t.label_color="primary")}))}})).catch((function(t){console.log(t)})),this.$q.localStorage.set("date",this.date),parseInt(i[0],10)<=e&&parseInt(i[1],10)<=o&&parseInt(i[2],10)<a?(this.noteadd=!1,console.log(i[0],i[1],i[2])):this.noteadd=!0}},noteSubmit:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.noteform.note_day=this.date,Object(s["e"])("notebook/",{openid:e},{data:this.noteform}).then((function(e){t.noteaddDialog=!1,t.noteform.title="",t.noteform.desc="",t.noteNum();var o=t.$q.localStorage.getItem("openid");Object(s["c"])("notebook/",{openid:o,note_day:t.date,max_page:50}).then((function(e){if("200"===e.data.results.code){t.noteData=e.data.results.data,t.$q.localStorage.set("notedata",t.noteData);var o=t.$q.localStorage.getItem("notedata");t.noteData=o,t.$q.localStorage.remove("notedata"),t.noteData.forEach((function(t){t.edit="0","0"===t.progress?(t.label="待完成",t.label_color="negative"):(t.label="已完成",t.label_color="primary")}))}})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},getNoteData:function(){this.drawerright=!this.drawerright},noteNum:function(){var t=this;if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");Object(s["c"])("notebook/note_num/",{openid:e,note_day:this.date}).then((function(e){t.note_num=e.data.data})).catch((function(t){console.log(t)}))}}},created:function(){this.upnewdate(),this.$q.localStorage.has("authid")&&(this.authid=this.$q.localStorage.getItem("authid"),this.auth=!0),this.$q.localStorage.has("openid")&&(this.openid=this.$q.localStorage.getItem("openid")),this.$q.platform.is.electron?this.electronV=!0:this.electronV=!1},mounted:function(){this.authcheck()}},u=d,m=(o("83ec"),o("2877")),p=o("eebe"),g=o.n(p),h=o("4d5a"),f=o("e359"),v=o("65c6"),b=o("9c40"),q=o("6ac5"),y=o("2c91"),k=o("05c0"),w=o("cb32"),_=o("eb85"),S=o("f20b"),$=o("1c1c"),x=o("66e5"),D=o("4074"),N=o("0170"),C=o("24e8"),I=o("f09f"),j=o("a370"),O=o("4b7e"),Q=o("27f9"),E=o("58a8"),P=o("9404"),z=o("4983"),L=o("0016"),A=o("52ee"),R=o("05eb"),T=o("74af"),M=o("09e3"),U=o("de5e"),F=o("5096"),B=o("7f67"),H=o("714f"),V=Object(m["a"])(u,a,n,!1,null,null,null);e["default"]=V.exports;g()(V,"components",{QLayout:h["a"],QHeader:f["a"],QToolbar:v["a"],QBtn:b["a"],QToolbarTitle:q["a"],QSpace:y["a"],QTooltip:k["a"],QAvatar:w["a"],QSeparator:_["a"],QBtnDropdown:S["a"],QList:$["a"],QItem:x["a"],QItemSection:D["a"],QItemLabel:N["a"],QDialog:C["a"],QCard:I["a"],QCardSection:j["a"],QCardActions:O["a"],QInput:Q["a"],QBadge:E["a"],QDrawer:P["a"],QScrollArea:z["a"],QIcon:L["a"],QDate:A["a"],QTimeline:R["a"],QTimelineEntry:T["a"],QPageContainer:M["a"],QPageSticky:U["a"],QPageScroller:F["a"]}),g()(V,"directives",{ClosePopup:B["a"],Ripple:H["a"]})},"758b":function(t,e,o){"use strict";o.d(e,"c",(function(){return m})),o.d(e,"e",(function(){return p})),o.d(e,"d",(function(){return f})),o.d(e,"b",(function(){return v})),o.d(e,"g",(function(){return g})),o.d(e,"f",(function(){return h})),o.d(e,"a",(function(){return s}));o("551c"),o("06db");var a=o("2b0e"),n=o("bc3a"),i=o.n(n),r=o("18d6"),s="http://127.0.0.1:8000/",c=i.a.create({baseURL:s,timeout:5e3}),l=i.a.create({baseURL:s,timeout:5e3}),d=i.a.create({baseURL:s,timeout:5e3}),u=i.a.create({baseURL:s,timeout:5e3});function m(t,e){return c.get(t,{params:e})}function p(t,e,o){return c.post(t,o,{params:e})}function g(t,e){return l.post(t,e)}function h(t,e){return d.post(t,e)}function f(t,e,o){return c.patch(t,o,{params:e})}function v(t,e,o){return u.delete(t,o,{params:e})}d.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.request.use((function(t){var e=r["a"].getItem("authid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.request.use((function(t){var e=r["a"].getItem("openid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),a["a"].prototype.$axios=c},"83ec":function(t,e,o){"use strict";var a=o("cff4"),n=o.n(a);n.a},cff4:function(t,e,o){}}]);