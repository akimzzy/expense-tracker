(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Expenses Tracker"))}),o=n(2),i=n(7),s=n(3),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},E={transactions:[]},d=Object(a.createContext)(E),f=function(e){var t=e.children,n=Object(a.useReducer)(m,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.reduce((function(e,t){return e+t}),0),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0),c=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"totals"},r.a.createElement("div",{className:"balance"},r.a.createElement("h3",null,"Balance"),r.a.createElement("h2",null,"$",t)),r.a.createElement("div",{className:"income"},r.a.createElement("h3",null,"Income"),r.a.createElement("h2",null,"$",c)),r.a.createElement("div",{className:"expenses"},r.a.createElement("h3",null,"Expenses"),r.a.createElement("h2",null,"$",Math.abs(n))))},p=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount>0?"+":"-",l=Math.abs(t.amount);return r.a.createElement("li",{className:t.amount>0?"transaction_item income-border":"transaction_item expense-border"},r.a.createElement("button",{onClick:function(){return n(t.id)}},"X"),r.a.createElement("div",null,t.name),r.a.createElement("div",null,c,"$",l))},h=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement("ul",{className:"transaction_list"},r.a.createElement("h3",null,"Transaction history"),e.map((function(e){return r.a.createElement(p,{key:e.id,transaction:e})})))},v=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(d).addTransaction;return r.a.createElement("form",{onSubmit:function(e){!function(e){if(e.preventDefault(),""!==n.trim()&&0!==i){var t={id:Math.ceil(1e6*Math.random())+1,name:n,amount:Number(i)};m(t),s(0),c("")}}(e)}},r.a.createElement("h3",null,"New transaction"),r.a.createElement("p",null,'If transaction is an expense, type "-" before amount. example "-10"'),r.a.createElement("div",{className:"name"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{placeholder:"enter text here",required:!0,id:"name",type:"text",value:n,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"amount"},r.a.createElement("label",{htmlFor:"amount"},"Amount"),r.a.createElement("input",{required:!0,id:"amount",type:"number",value:i,onChange:function(e){return s(e.target.value)}})),r.a.createElement("button",null,"Add new transaction"))};var O=function(){return document.title="Expenses tracker",r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(h,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b4ec8cad.chunk.js.map