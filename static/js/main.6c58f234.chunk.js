(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(12),o=n.n(s),i=(n(20),n(10)),u=n(14),l=n(5),j=n.n(l),d=n(7),b=n(4),h=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(r.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};h.defaultProps={color:"steelblue"};var f=h,p=n(2),O=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,a=Object(p.e)();return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:t}),"/"===a.pathname&&Object(r.jsx)(f,{color:c?"red":"green",text:c?"hide":"poot",onClick:n})]})};O.defaultProps={title:"Task Tracker"};var x=O,m=n(6),v=n(13),k=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(r.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(r.jsxs)("h3",{children:[t.text,Object(r.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(r.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(r.jsx)(r.Fragment,{children:t.map((function(e){return Object(r.jsx)(k,{task:e,onDelete:n,onToggle:c},e.id)}))})},y=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(b.a)(i,2),l=u[0],j=u[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),f=h[0],p=h[1];return Object(r.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?(t({text:s,day:l,reminder:f}),o(""),j(""),p(!1)):alert("Pleae add task")},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Task"}),Object(r.jsx)("input",{type:"text",placeholder:"Add Task",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Day & Time"}),Object(r.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control form-control-check",children:[Object(r.jsx)("label",{children:"Set Reminder"}),Object(r.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(r.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"Copyright \xa9 2021"}),Object(r.jsx)(m.b,{to:"/about",children:"About"})]})},T=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Version 1.0.0"}),Object(r.jsx)(m.b,{to:"/",children:"Go Back"})]})};var C=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),l=o[0],h=o[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,h([].concat(Object(u.a)(l),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:h(l.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,h(l.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(m.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(x,{onAdd:function(){return a(!n)},title:"Header",showAdd:n}),Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{path:"/",element:Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(y,{onAdd:v}),l.length>0?Object(r.jsx)(g,{tasks:l,onDelete:k,onToggle:C}):"No tasks to show"]}),render:function(e){}}),Object(r.jsx)(p.a,{path:"/about",element:Object(r.jsx)(T,{})})]}),Object(r.jsx)(w,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),S()}},[[22,1,2]]]);
//# sourceMappingURL=main.6c58f234.chunk.js.map