(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbe5da6"],{"085f":function(e,i,t){"use strict";t("3e15")},"3e15":function(e,i,t){},"9a0a":function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"Register_box"},[t("div",{staticClass:"Login_main"},[t("div",{staticClass:"number"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.number},on:{input:function(i){i.target.composing||(e.number=i.target.value)}}}),t("button",{directives:[{name:"show",rawName:"v-show",value:!e.isdTime,expression:"!isdTime"}],staticClass:"huoqu",on:{click:function(i){return e.huoqu()}}},[e._v("获取验证码")]),t("button",{directives:[{name:"show",rawName:"v-show",value:e.isdTime,expression:"isdTime"}],staticClass:"huoqu"},[e._v(e._s(e.dTime))])]),t("div",{staticClass:"verification"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.verification,expression:"verification"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.verification},on:{input:function(i){i.target.composing||(e.verification=i.target.value)}}})])]),t("div",{staticClass:"Loginbtn"},[t("button",{on:{click:function(i){return e.LoginNext()}}},[e._v("确定")])])])},s=[],a=t("d697"),o={data:function(){return{number:"",verification:"",dTime:59,isdTime:!1}},methods:{huoqu:function(){var e=this;this.isdTime=!0;var i=setInterval((function(){e.dTime<=0?(e.dTime=59,e.isdTime=!1,clearInterval(i)):e.dTime--}),1e3)},LoginNext:function(){""!=this.number&&""!=this.verification?(Object(a["a"])("绑定成功，设置您的密码"),this.$router.push({path:"/SetPass"})):Object(a["a"])("不可为空哦")}}},r=o,u=(t("085f"),t("5d22")),c=Object(u["a"])(r,n,s,!1,null,"dd3be8c2",null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4fbe5da6.beac1eac.js.map