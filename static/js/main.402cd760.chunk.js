(this["webpackJsonpoit-react-hw-02-phonebook"]=this["webpackJsonpoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"Form_form__1fqh4"}},11:function(t,e,n){t.exports={list:"ContactList_list__2WViT"}},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(17),n(2)),s=n(12),u=n(3),l=n(5),b=n(4),m=n(9),d=n.n(m),j=n(7),h=n(21),f=n(10),p=n.n(f),O=n(0),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=Object(h.a)(),t.numberInputId=Object(h.a)(),t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(i.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(j.a)(Object(j.a)({},t.state),{},{id:Object(h.a)()})),t.setState({name:"",number:""})},t.render=function(){return Object(O.jsxs)("form",{className:p.a.form,onSubmit:t.handleSubmit,children:[Object(O.jsxs)("label",{htmlFor:t.nameInputId,children:["Name",Object(O.jsx)("input",{id:t.nameInputId,onChange:t.handleChange,value:t.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{htmlFor:t.numberInputId,children:["Number",Object(O.jsx)("input",{id:t.numberInputId,onChange:t.handleChange,value:t.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{type:"submit",children:"Add Contact"})]})},t}return n}(a.Component),x=n(11),v=n.n(x),g=function(t){var e=t.arrContacts,n=t.removeContact;return Object(O.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(O.jsxs)("li",{children:[a,": ",r,Object(O.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},I=function(t){var e=t.title,n=t.onChange;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h4",{children:e}),Object(O.jsx)("input",{type:"text",name:"filter",onChange:n})]})},S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formSubmitRegister=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is alrady in contacts !")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilter=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(i.a)({},a,r))},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.render=function(){return Object(O.jsxs)("div",{className:d.a.section,children:[Object(O.jsx)("h1",{children:"PhoneBook"}),Object(O.jsx)(C,{onSubmit:t.formSubmitRegister}),Object(O.jsx)("h2",{children:"Contacts:"}),Object(O.jsx)(I,{onChange:t.handleFilter,title:"Find contacts by name"}),Object(O.jsx)(g,{removeContact:t.removeContact,arrContacts:t.filterContacts()})]})},t}return n}(a.Component),y=S;o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={section:"App_section__1Pbgs"}}},[[19,1,2]]]);
//# sourceMappingURL=main.402cd760.chunk.js.map