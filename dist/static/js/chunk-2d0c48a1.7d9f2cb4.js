(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c48a1"],{"3aeb":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.aa,expression:"aa"}],attrs:{type:"text"},domProps:{value:e.aa},on:{input:function(n){n.target.composing||(e.aa=n.target.value)}}}),t("button",{on:{click:e.sendMessage}},[e._v("点击发送")]),t("button",{on:{click:e.closeSocket}},[e._v("断开")]),e._l(e.messageArr,(function(n,s){return t("span",{key:s},[e._v(e._s(n))])}))],2)},a=[],o={data:function(){return{ws:null,aa:"",hhh:"",messageArr:[]}},mounted:function(){var e=this,n=new WebSocket("ws://localhost:8080");this.ws=n,this.ws.addEventListener("open",(function(e){console.log("连接成功")})),this.ws.addEventListener("message",(function(n){console.log("连接成功"),"ping"===n.data?console.log("心跳"):e.messageArr.push(n.data)}))},methods:{sendMessage:function(){this.ws.send(this.aa)},closeSocket:function(){this.ws.close()}}},c=o,i=t("2877"),l=Object(i["a"])(c,s,a,!1,null,null,null);n["default"]=l.exports}}]);