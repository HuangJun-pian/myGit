(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c74aa4e4"],{"2f28":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{staticStyle:{"margin-bottom":"0.1rem"},attrs:{title:"","left-text":"","right-text":t.txt,"left-arrow":""},on:{"click-left":t.onClickLeftHJ},scopedSlots:t._u([{key:"title",fn:function(){return[t._t("default")]},proxy:!0}],null,!0)})],1)},o=[],r={props:["txt"],data:function(){return{}},methods:{onClickLeftHJ:function(){this.$router.go(-1)}}},a=r,c=n("5d22"),l=Object(c["a"])(a,i,o,!1,null,null,null);e["a"]=l.exports},6269:function(t,e,n){},9301:function(t,e,n){"use strict";n("6269")},bc16:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set-name-h"},[n("van-nav-bar",{attrs:{title:"修改个人信息","right-text":"保存","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],staticClass:"input-h",attrs:{type:"text"},domProps:{value:t.txt},on:{input:function(e){e.target.composing||(t.txt=e.target.value)}}})])],1)},o=[],r=(n("425f"),n("2f28")),a=n("7b12"),c={components:{Return:r["a"]},data:function(){return{txt:this.$route.query.name}},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){var t=this;Object(a["q"])({nickname:this.txt}).then((function(e){t.$router.go(-1)}))}}},l=c,u=(n("9301"),n("5d22")),s=Object(u["a"])(l,i,o,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-c74aa4e4.8eddb463.js.map