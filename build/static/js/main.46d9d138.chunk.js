(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(14),u=t.n(r),o=(t(20),t(4)),l=t(2),i=function(e){var n=e.handleSearch,t=e.searchTerm;return c.a.createElement("div",null,c.a.createElement("label",null,"Filter shown with: "),c.a.createElement("input",{onChange:n,value:t}))},s=function(e){var n=e.onSubmit,t=e.handleNameChange,a=e.handleNumberChange,r=e.nameValue,u=e.numberValue;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,c.a.createElement("label",null,"Name: "),c.a.createElement("input",{onChange:t,value:r})),c.a.createElement("div",null,c.a.createElement("label",null,"Number: "),c.a.createElement("input",{type:"tel",onChange:a,value:u})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Add")))},m=function(e){var n=e.data,t=e.searchTerm,a=e.onDeleteButtonClick,r=function(e,n){a&&a(e,n)};return!!n.length&&n.map((function(e){return e.name.toLowerCase().includes(t.toLowerCase())&&c.a.createElement("p",{key:e.id},e.name," : ",e.number,c.a.createElement("button",{onClick:r.bind(null,e.id,e.name)},"Delete"))}))},f=t(3),d=t.n(f),h="/api/persons",b=function(){return d.a.get(h).then((function(e){return e.data}))},p=function(e){return d.a.post(h,e).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return d.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){var n=e.message,t=e.type;return c.a.createElement("div",{className:"".concat("unsuccessful"===t?"notification--error":"notification--success"," notification")},n)};v.defaultProps={type:"successful"};var w=v,y=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),d=f[0],h=f[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),C=y[0],j=y[1],O=Object(a.useState)(""),S=Object(l.a)(O,2),k=S[0],N=S[1],T=Object(a.useState)({}),D=Object(l.a)(T,2),L=D[0],V=D[1];Object(a.useEffect)((function(){b().then((function(e){r(e)})).catch((function(e){return console.warn(e)}))}),[]);var A=function(){h(""),j("")};Object(a.useEffect)((function(){if(L.message){var e=setTimeout((function(){return V({})}),4e3);return function(){return clearTimeout(e)}}}),[L]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phonebook"),L.message&&c.a.createElement(w,{message:L.message,type:L.type,duratio:3e3}),c.a.createElement(i,{searchTerm:k,handleSearch:function(e){return N(e.target.value)}}),c.a.createElement("h2",null,"Add a new contact"),c.a.createElement(s,{onSubmit:function(e){(e.preventDefault(),d&&C)?(t.filter((function(e){return e.name.toLocaleLowerCase()===d.toLowerCase()})).length?function(){var e=window.confirm("".concat(d," is already added to phonebook, replace the old phonenumber with new one.")),n=t.find((function(e){return e.name===d})),a=Object(o.a)(Object(o.a)({},n),{},{number:C});e&&g(a.id,a).then((function(e){r(t.map((function(n){return n.id===e.id?e:n}))),V({message:"Replaced ".concat(d,"'s number.")})})).catch((function(e){console.warn(e),V({message:"Could not replace, as the information on ".concat(d," has already been removed from the server."),type:"unsuccessful"})}))}():function(){var e={name:d,number:C};p(e).then((function(n){r(t.concat(n)),V({message:"Added ".concat(e.name,".")})})).catch((function(e){console.warn(e.response.data.error),V({message:e.response.data.error,type:"unsuccessful"})}))}(),A()):V({message:"Please fill both fields.",type:"unsuccessful"})},handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return j(e.target.value)},nameValue:d,numberValue:C}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(m,{data:t,searchTerm:k,onDeleteButtonClick:function(e,n){window.confirm("Delete ".concat(n,"?"))&&(E(e).then((function(){r(t.filter((function(n){return n.id!==e}))),V({message:"Deleted ".concat(n,"'s contact successfuly.")})})).catch((function(e){V({message:"The information on ".concat(n," has already been removed from the server."),type:"unsuccessful"}),console.warn(e)})),A())}}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.46d9d138.chunk.js.map