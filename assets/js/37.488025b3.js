(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{214:function(t,n,e){},440:function(t,n,e){"use strict";var i=e(214);e.n(i).a},475:function(t,n,e){"use strict";e.r(n);var i=e(249),r=e.n(i),s={data:function(){return{order:!1,list:[{id:1,name:"사과",price:1e3},{id:2,name:"바나나",price:2e3},{id:3,name:"딸기",price:3e3}]}},computed:{sortedList:function(){return r()(this.list,"price",this.order?"desc":"asc")}}},c=(e(440),e(1)),o=Object(c.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[e("button",{on:{click:function(n){t.order=!t.order}}},[t._v("변경하기")])]),t._v(" "),e("transition-group",{staticClass:"list",attrs:{tag:"ul"}},t._l(t.sortedList,function(n){return e("li",{key:n.id},[t._v("\n      "+t._s(n.name)+" "+t._s(n.price)+"원\n    ")])}),0)],1)},[],!1,null,"f6a75bd4",null);n.default=o.exports}}]);