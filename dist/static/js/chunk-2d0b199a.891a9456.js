(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b199a"],{2116:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("button",{on:{click:e.sendToParent}},[e._v("给外层")])])},s=[],a={mounted:function(){window.addEventListener("message",this.receive)},methods:{receive:function(e){console.log(e.data),window.parent.postMessage({type:"parent"},"*")},sendToParent:function(){}}},c=a,i=t("2877"),r=Object(i["a"])(c,o,s,!1,null,null,null);n["default"]=r.exports}}]);