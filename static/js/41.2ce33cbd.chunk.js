"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[41],{1041:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,i,o,c=e(2791),u=e(6030),d=e(6140),l=e(885),s=e(4569),p=e.n(s),m=e(9312),f=function(){return function(n){n((0,m.$0)()),p().get("/contacts").then((function(t){var e=t.data;return n((0,m.v2)(e))})).catch((function(t){return n((0,m.I7)(t))}))}},h=e(168),x=e(6031),g=x.ZP.form(r||(r=(0,h.Z)(["\n  padding: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  /* outline: 1px solid black; */\n  width: 400px;\n"]))),b=x.ZP.label(a||(a=(0,h.Z)(["\n  /* color: #212121; */\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),Z=x.ZP.input(i||(i=(0,h.Z)(["\n  margin-top: 10px;\n  padding: 4px;\n  width: 150px;\n"]))),v=x.ZP.button(o||(o=(0,h.Z)(["\n  width: 100px;\n  border-radius: 4px;\n  padding: 4px;\n"]))),j=e(184);function w(){var n=(0,c.useState)(""),t=(0,l.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(""),i=(0,l.Z)(a,2),o=i[0],d=i[1],s=(0,u.I0)(),f=function(n){var t=n.target,e=t.name,a=t.value;switch(e){case"name":r(a);break;case"number":d(a);break;default:return}};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(g,{onSubmit:function(n){n.preventDefault(),s(function(n){var t=n.name,e=n.number;return function(n){var r={name:t,number:e};n((0,m.md)()),p().post("/contacts",r).then((function(t){var e=t.data;n((0,m.ff)(e))})).catch((function(t){return n((0,m.xZ)(t))}))}}({name:e,number:o})),r(""),d("")},children:[(0,j.jsxs)(b,{htmlFor:"",children:["Name",(0,j.jsx)(Z,{type:"text",name:"name",value:e,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:""})]}),(0,j.jsxs)(b,{htmlFor:"",children:["Number",(0,j.jsx)(Z,{type:"tel",name:"number",value:o,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:""})]}),(0,j.jsx)(v,{type:"submit",children:"Add contact"})]})})}var y,k,C,P,A,z,F,I=function(n){return n.phonebook.filter},E=x.ZP.div(y||(y=(0,h.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),N=x.ZP.li(k||(k=(0,h.Z)(["\n  /* color: #212121; */\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),_=x.ZP.ul(C||(C=(0,h.Z)(["\n  // outline: 1px solid black;\n  width: 400px;\n  padding-left: 20px;\n  // padding-right: 20px;\n  margin-bottom: 20px;\n"]))),q=x.ZP.p(P||(P=(0,h.Z)([""]))),M=x.ZP.button(A||(A=(0,h.Z)([""])));function S(){var n=(0,u.v9)((function(n){return function(n){var t=function(n){return n.phonebook.contacts}(n),e=I(n).toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}(n)})),t=(0,u.I0)(),e=function(n){return t(function(n){return function(t){t((0,m.us)()),p().delete("/contacts/".concat(n)).then((function(){return t((0,m.uv)(n))})).catch((function(n){return t((0,m.EF)(n))}))}}(n))};return(0,c.useEffect)((function(){t(f())}),[t]),(0,j.jsx)(E,{children:(0,j.jsx)(_,{children:n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,j.jsxs)(N,{children:[(0,j.jsxs)(q,{children:[r,": ",a]}),(0,j.jsx)(M,{onClick:function(){return e(t)},children:"Delete"})]},t)}))})})}var $,B=x.ZP.label(z||(z=(0,h.Z)(["\n  /* color: #212121; */\n  font-weight: 500;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),D=x.ZP.input(F||(F=(0,h.Z)(["\n  margin-top: 10px;\n  padding: 4px;\n  width: 150px;\n"])));function J(){var n=(0,u.v9)(I),t=(0,u.I0)();return(0,j.jsxs)(B,{htmlFor:"",children:["Find contacts by name",(0,j.jsx)(D,{type:"text",name:"filter",value:n,onChange:function(n){return t((0,m.M6)(n.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter key word"})]})}var L=x.ZP.div($||($=(0,h.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  /* padding-left: 20px;\n  padding-right: 20px; */\n\n  /* width: 1200px; */\n"]))),T=function(n){var t=(0,u.I0)();return(0,c.useEffect)((function(){return t(f())}),[t]),(0,j.jsxs)(L,{children:[(0,j.jsx)(d.x7,{}),(0,j.jsx)(w,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(J,{}),(0,j.jsx)(S,{})]})}}}]);
//# sourceMappingURL=41.2ce33cbd.chunk.js.map