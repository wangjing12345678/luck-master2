(window["webpackJsonpaaa"]=window["webpackJsonpaaa"]||[]).push([["chunk-0ba29f04"],{"28b2":function(t,a,i){},"45ed":function(t,a,i){"use strict";i("eff4")},5996:function(t,a,i){},9037:function(t,a,i){"use strict";i("28b2")},bf49:function(t,a,i){"use strict";i("cc2f")},cc2f:function(t,a,i){},cd37:function(t,a,i){"use strict";i("5996")},d49f:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t._self._c;return a("div",[a("ball",{staticClass:"aaa"}),a("cardWrap"),a("div",{on:{click:t.kkkk}},[t._v("清空cookie")]),a("div",{on:{click:t.aaa}},[t._v("清空cookie")])],1)},e=[],s=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"container"},[a("span",{staticStyle:{"--i":"1"}}),a("span",{staticStyle:{"--i":"3"}}),a("span",{staticStyle:{"--i":"5"}}),a("div",{staticClass:"width-border-box"},[a("span",{staticStyle:{"--i":"1"}}),a("span",{staticStyle:{"--i":"5"}})]),a("div",{staticClass:"back-image"}),a("div",{staticClass:"main"},[a("div",{staticClass:"tangjialing"},[a("div",{staticClass:"pointer"},[a("div",{staticClass:"pointer-back"}),a("div",{staticClass:"pointer-single"})]),a("div",{staticClass:"center"},[a("div",{staticClass:"rotate-left-box"},[a("div")]),a("div",{staticClass:"rotate-right-box"},[a("div")]),a("div",{staticClass:"white-box"},[a("div",{staticClass:"word-box"},[t._v("实时守护中")])])])])])])])}],l={},c=l,r=(i("bf49"),i("2877")),d=Object(r["a"])(c,s,o,!1,null,null,null),u=d.exports,f=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrap"},[a("div",{on:{click:t.kkk}},[t._v("改变数字")]),t._l(t.moneyArr,(function(t,i){return a("card",{key:i,attrs:{num:t}})}))],2)},v=[],h=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-card"},[a("section",[a("div",{staticClass:"card",attrs:{"data-before":t.oVal,"data-after":t.nVal}}),a("div",{ref:"needFanzhuan",staticClass:"card card-second",class:{fanzhuan:t.flag},attrs:{"data-before":t.oVal,"data-after":t.nVal}})])])},p=[],m={props:{num:{type:[String,Number]}},data(){return{flag:!1,nVal:"",oVal:""}},watch:{num:{handler(t,a){this.nVal=t,this.oVal=a,void 0===a?(this.nVal=t,this.oVal=t):(this.flag=!0,setTimeout(()=>{this.oVal=this.nVal,this.flag=!1},500))},immediate:!0}},methods:{}},k=m,b=(i("45ed"),Object(r["a"])(k,h,p,!1,null,"26113dce",null)),g=b.exports;const C=function(t,a=0,i,n="",e="ceil"){var s,o;const l=null!==(s=window)&&void 0!==s&&null!==(s=s.globalConfig)&&void 0!==s&&null!==(s=s.systemTemp)&&void 0!==s&&s.amountDivided?null===(o=window)||void 0===o||null===(o=o.globalConfig)||void 0===o||null===(o=o.systemTemp)||void 0===o?void 0:o.amountDivided:4;t=(t+"").replace(/[^0-9+-Ee.]/g,"");const c=isFinite(+t)?+t:0,r=isFinite(+a)?Math.abs(a):0,d="undefined"===typeof n?",":n,u="undefined"===typeof i?".":i;let f="";const v=function(t,a){const i=Math.pow(10,a);return""+parseFloat(Math[e](parseFloat((t*i).toFixed(2*a))).toFixed(2*a))/i};f=(r?v(c,r):""+Math.round(c)).split(".");const h=new RegExp("(-?\\d+)(\\d{"+l+"})");if(d)while(h.test(f[0]))f[0]=f[0].replace(h,"$1"+d+"$2");return(f[1]||"").length<r&&(f[1]=f[1]||"",f[1]+=new Array(r-f[1].length+1).join("0")),f.join(u)},w=function(t){return""+C(t,0,".",",","floor")};var x={data(){return{money:99999}},computed:{moneyArr(){return String(w(this.money)).split("")}},components:{card:g},methods:{kkk(){this.money+=1}}},y=x,_=(i("cd37"),Object(r["a"])(y,f,v,!1,null,"1de12921",null)),V=_.exports,T={components:{ball:u,cardWrap:V},methods:{kkkk(){console.log(document.cookie),document.cookie="aa=000"},aaa(){this.delCookie()},delCookie(){for(var t=document.cookie.split(";"),a=0;a<t.length;a++){var i=t[a],n=i.indexOf("="),e=n>-1?i.substr(0,n):i;document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"}if(t.length>0)for(a=0;a<t.length;a++){i=t[a],n=i.indexOf("="),e=n>-1?i.substr(0,n):i;var s=location.host.substr(location.host.indexOf("."));document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain="+s}},deleteAllCookies(){for(var t=document.cookie.split(";"),a=0;a<t.length;a++){var i=t[a],n=i.indexOf("="),e=n>-1?i.substr(0,n):i;document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"}}}},O=T,j=(i("9037"),Object(r["a"])(O,n,e,!1,null,null,null));a["default"]=j.exports},eff4:function(t,a,i){}}]);