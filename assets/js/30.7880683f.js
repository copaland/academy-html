(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{204:function(n,t,i){},359:function(n,t,i){"use strict";var e=i(204);i.n(e).a},463:function(n,t,i){"use strict";i.r(t);var e={data:function(){return{list:[{id:1,name:"슬라임",hp:100},{id:2,name:"고블린",hp:200},{id:3,name:"드래곤",hp:500}]}},methods:{doAttack:function(n){this.list[n].hp-=10}}},s=(i(359),i(1)),a=Object(s.a)(e,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("ul",n._l(n.list,function(t,e){return t.hp?i("li",{key:t.id},[n._v("\n    ID."+n._s(t.id)+" "+n._s(t.name)+" HP."+n._s(t.hp)+"\n    "),t.hp<50?i("span",{staticClass:"hinsi"},[n._v("빈사 상태! ")]):n._e(),n._v(" "),i("button",{on:{click:function(t){return n.doAttack(e)}}},[n._v("공격하기")])]):n._e()}),0)},[],!1,null,"57e58fef",null);t.default=a.exports}}]);