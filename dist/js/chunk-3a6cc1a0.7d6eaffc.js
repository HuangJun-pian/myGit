(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a6cc1a0"],{"21a1":function(s,t,i){"use strict";i("542d")},"542d":function(s,t,i){},e39f:function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"Register_box"},[i("div",{staticClass:"Login_main"},[i("div",{staticClass:"number"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"text",placeholder:"请设置登录密码"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),i("div",{staticClass:"verification"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.ispassword,expression:"ispassword"}],attrs:{type:"text",placeholder:"请再次输入密码"},domProps:{value:s.ispassword},on:{input:function(t){t.target.composing||(s.ispassword=t.target.value)}}})])]),i("div",{staticClass:"Loginbtn"},[i("button",{on:{click:function(t){s.password===s.ispassword?s.LoginNext():s.tishi("两次密码不一致重新输入")}}},[s._v("提交")])])])},e=[],o=i("d697"),n={data:function(){return{password:"",ispassword:""}},methods:{huoqu:function(){var s=this;this.isdTime=!0,console.log(String(Math.ceil(10*Math.random())));var t=setInterval((function(){s.dTime<=0?(s.dTime=59,s.isdTime=!1,clearInterval(t)):s.dTime--}),1e3)},LoginNext:function(){""==this.password||""==this.ispassword?this.tishi("不可为空哦"):(o["a"].success("起飞吧少年"),this.$router.push({path:"/Login"}))},tishi:function(s){this.ispassword="",o["a"].fail(s)}}},r=n,d=(i("21a1"),i("5d22")),c=Object(d["a"])(r,a,e,!1,null,"6d653ca0",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3a6cc1a0.7d6eaffc.js.map