(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(15),a=n.n(c),o=n(3),r=n.n(o),u=n(6),i=n(4),l=n(2),s=n(0),d=function(e){var t=e.filter,n=e.onFilterChange;return Object(s.jsxs)("div",{children:["Filter shown with ",Object(s.jsx)("input",{value:t,onChange:n})]})},h=function(e){var t=e.addName,n=e.newName,c=e.handleInputChange,a=e.newNumber,o=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["name:",Object(s.jsx)("input",{type:"text",value:n,onChange:c})]}),Object(s.jsxs)("div",{children:["number:",Object(s.jsx)("input",{type:"text",value:a,onChange:o})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var t=e.personArr,n=e.deletePerson;return t.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("li",{className:"note",children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return n(e.id)},children:" Delete"})]},e.id)})}))},b="/persons",f={getAll:function(){return r.a.get(b)},create:function(e){return r.a.post(b,e).then((function(e){return e.data}))},update:function(e,t){return r.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},deletePerson:function(e){return r.a.delete("".concat(b,"/").concat(e))}},m=function(e){var t=e.message;return null===t?null:Object(s.jsx)("div",{className:"error",children:t})},p=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(""),o=Object(i.a)(a,2),r=o[0],b=o[1],p=Object(l.useState)(""),O=Object(i.a)(p,2),g=O[0],x=O[1],v=Object(l.useState)(""),w=Object(i.a)(v,2),N=w[0],C=w[1],y=Object(l.useState)(""),P=Object(i.a)(y,2),S=P[0],k=P[1];Object(l.useEffect)((function(){f.getAll().then((function(e){c(e.data)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phone book"}),Object(s.jsx)(m,{message:S}),Object(s.jsx)(d,{filter:N,onFilterChange:function(e){C(e.target.value)}}),Object(s.jsx)(h,{addName:function(e){if(e.preventDefault(),r&&g){var t={name:r,number:g,id:n.length+1},a=n.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}));if(a&&a.number!==g){if(window.confirm("".concat(a.name," is already added to phone book, replace the old number with a new one?"))){var o=Object(u.a)(Object(u.a)({},a),{},{number:g}),i=a.id;f.update(i,o).then((function(e){c(n.map((function(t){return t.id!==i?t:e}))),k("Number updated"),b(""),x(""),setTimeout((function(){k(null)}),3e3)})).catch((function(e){k("Something wrong happened while updating. Try again."),console.log(e),setTimeout((function(){k(null)}),3e3)}))}}else{if(a)return k("".concat(r," is already added to phone book.")),b(""),x(""),void setTimeout((function(){k(null)}),3e3);f.create(t).then((function(e){c(n.concat(e)),k("".concat(e.name," was added to the contact.")),b(""),x(""),setTimeout((function(){k(null)}),3e3)}))}}else alert("Please fill in the fields")},newName:r,handleInputChange:function(e){b(e.target.value)},newNumber:g,handleNumberChange:function(e){x(e.target.value)}}),Object(s.jsx)("h2",{children:"Name and Phone Number"}),Object(s.jsx)("ul",{children:Object(s.jsx)(j,{personArr:n,deletePerson:function(e){window.confirm("You sure you wanna delete it?")&&(f.deletePerson(e).then(c(n.filter((function(t){return t.id!==e})))).catch((function(e){console.log(e),k("No such person found.")})),k("Contact Deleted"),setTimeout((function(){k(null)}),3e3))}})})]})};n(39);r.a.get("http://localhost:3001/persons").then((function(e){a.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}))}},[[40,1,2]]]);
//# sourceMappingURL=main.54f88cad.chunk.js.map