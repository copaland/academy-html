(window.webpackJsonp=window.webpackJsonp||[]).push([[20,24],{105:function(t,e,o){},189:function(t,e,o){"use strict";var a=o(105);o.n(a).a},271:function(t,e,o){"use strict";o.r(e);o(189);var a=o(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal",appear:""}},[o("div",{staticClass:"modal modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[o("div",{staticClass:"modal-window"},[o("div",{staticClass:"modal-content"},[t._t("default")],2),t._v(" "),o("footer",{staticClass:"modal-footer"},[t._t("footer",[o("button",{on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])],2)])])])},[],!1,null,"7aa069a2",null);e.default=n.exports},496:function(t,e,o){"use strict";o.r(e);var a={components:{MyModal:o(271).default},data:function(){return{modal:!1,message:""}},methods:{openModal:function(){this.modal=!0},closeModal:function(){this.modal=!1},doSend:function(){this.message.length>0?(alert(this.message),this.message="",this.closeModal()):alert("메시지를 입력해주세요.")}}},n=o(1),s=Object(n.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"example-modal-window"},[o("p",[t._v("버튼을 누르면 모달 대화 상자가 열립니다.")]),t._v(" "),o("button",{on:{click:t.openModal}},[t._v("열기")]),t._v(" "),t.modal?o("MyModal",{on:{close:t.closeModal}},[o("p",[t._v("Vue.js Modal Window!")]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),o("template",{slot:"footer"},[o("button",{on:{click:t.doSend}},[t._v("제출")])])],2):t._e()],1)},[],!1,null,null,null);e.default=s.exports}}]);