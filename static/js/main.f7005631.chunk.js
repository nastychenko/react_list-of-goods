(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),i=n(5),o=n(6),a=n(9),l=n(7),u=n(8),b=n(1),h=n.n(b),d=(n(14),n(15),n(2)),p=n.n(d),j=n(0),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},t.handleReset=function(){t.setState({isReversed:!1,sortType:s.NONE})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=function(t,e){var n=e.sortType,r=e.isReversed,c=Object(u.a)(t);return c.sort((function(t,e){switch(n){case s.LENGTH:return t.length-e.length;case s.ALPHABET:return t.localeCompare(e);default:return 0}})),r&&c.reverse(),c}(N,this.state),n=this.state,r=n.sortType,c=n.isReversed,i=c||r!==s.NONE;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button","is-info",{"is-light":r!==s.ALPHABET}),onClick:function(){t.setState({sortType:s.ALPHABET})},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-success",{"is-light":r!==s.LENGTH}),onClick:function(){t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button","is-warning",{"is-light":!c}),onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),i&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(h.a.Component);c.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f7005631.chunk.js.map