(window.webpackJsonp=window.webpackJsonp||[]).push([[17,23],{104:function(t,n,e){},195:function(t,n,e){"use strict";var i=e(104);e.n(i).a},196:function(t,n,e){},278:function(t,n,e){"use strict";e.r(n);e(195);var i=e(1),s=Object(i.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"before-load-content"},[this._v("\n  LOADING NOW\n")])},[],!1,null,"42ae29eb",null);n.default=s.exports},370:function(t,n,e){"use strict";var i=e(196);e.n(i).a},513:function(t,n,e){"use strict";e.r(n);var i=e(352),s=e.n(i),a={components:{Loading:e(278).default},data:function(){return{height:0,list:[]}},watch:{list:function(){var t=this;this.$nextTick(function(){t.height=t.$refs.body.getBoundingClientRect().height})}},methods:{loadContent:function(){var t=this;this.list=[],s.a.get("/data/list.json").then(function(n){setTimeout(function(){t.list=n.data},1500)})}},created:function(){this.loadContent()}},o=(e(370),e(1)),l=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"example-loading example"},[e("p",[e("button",{attrs:{disabled:!t.list.length},on:{click:t.loadContent}},[t._v("콘텐츠 새로고침")])]),t._v(" "),e("div",{staticClass:"flexbox-wrapper",style:{height:t.height+"px"}},[e("ul",{ref:"body",staticClass:"flexbox-body"},t._l(t.list,function(n){return e("li",{key:n.id},[t._v("\n        "+t._s(n.name)+" "+t._s(n.price)+"\n      ")])}),0),t._v(" "),e("transition",[t.list.length?t._e():e("Loading")],1)],1)])},[],!1,null,"75cb0d34",null);n.default=l.exports}}]);