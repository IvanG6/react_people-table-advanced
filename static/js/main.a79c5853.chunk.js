(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{16:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(17),s=a.n(n),c=a(9),r=(a(25),a(26),a(27),a(3)),l=a(11),i=a.n(l),o=a(0),d=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(c.c,{className:function(e){var t=e.isActive;return i()({"navbar-item":!0,"navbar-item is-tab":{"is-active":t}})},to:"/",end:!0,children:"Home"}),Object(o.jsx)(c.c,{className:function(e){var t=e.isActive;return i()({"navbar-item":!0,"navbar-item is-tab":{"is-active":t}})},to:"/people",children:"People"})]})})})},j=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},b=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},u=a(1),m=a.n(u),h=(a(16),a(7)),O=a(18),p=a.n(O),x=a(8),f=a(4),v=a.n(f);var g=m.a.createContext({people:[],setPeople:function(){},loading:!1,error:!1}),N=function(e){var t=e.children,a=Object(u.useState)([]),n=Object(h.a)(a,2),s=n[0],c=n[1],r=Object(u.useState)(!1),l=Object(h.a)(r,2),i=l[0],d=l[1],j=Object(u.useState)(!1),b=Object(h.a)(j,2),m=b[0],O=b[1];Object(u.useEffect)((function(){d(!0);var e=function(){var e=Object(x.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(c).catch((function(){return O(!0)})).finally((function(){return d(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=Object(u.useMemo)((function(){return{people:s,setPeople:c,loading:i,error:m}}),[s,i,m]);return Object(o.jsx)(g.Provider,{value:p,children:t})},_=function(){return Object(u.useContext)(g)},y=a(19),w=function(e){var t=e.person;return Object(o.jsx)(y.a,{selector:"#".concat(t.slug),children:Object(o.jsx)(c.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"has-text-link",children:t.name})})},C=function(e){var t=e.person,a=_().people,n=a.find((function(e){return e.name===t.motherName})),s=a.find((function(e){return e.name===t.fatherName}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("td",{children:Object(o.jsx)(w,{person:t})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:n?Object(o.jsx)(w,{person:n}):t.motherName||"-"}),Object(o.jsx)("td",{children:s?Object(o.jsx)(w,{person:s}):t.fatherName||"-"})]})},P=function(){var e=_().people,t=Object(r.f)(),a=Object(r.g)(),n=Object(c.d)(),s=Object(h.a)(n,1)[0],l=s.get("query")||"",d=Object(u.useState)(l),j=Object(h.a)(d,2),b=j[0],m=j[1],O=s.get("sortBy")||"",x=s.get("sortOrder")||"",f=Object(u.useMemo)((function(){return e.filter((function(e){var t,a;return e.name.toLowerCase().includes(l)||(null===(t=e.fatherName)||void 0===t?void 0:t.toLowerCase().includes(l))||(null===(a=e.motherName)||void 0===a?void 0:a.toLowerCase().includes(l))}))}),[e,l]),v=Object(u.useCallback)(p()((function(e){e?s.set("query",e.toLowerCase().trimLeft()):s.delete("query"),a("?".concat(s.toString()))}),500),[]),g=function(e){!function(e){s.set("sortBy",e),s.set("sortOrder","asc"===x?"desc":"asc"),a("?".concat(s.toString()))}(e),f.sort((function(t,a){switch(e){case"name":case"sex":return"asc"===x?a[e].localeCompare(t[e]):t[e].localeCompare(a[e]);case"born":case"died":return"asc"===x?a[e]-t[e]:t[e]-a[e];default:return 0}}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"is-flex is-justify-content-space-between mb-3",children:[Object(o.jsxs)("p",{className:"control has-icons-left",children:[Object(o.jsx)("input",{type:"search",value:b,onChange:function(e){m(e.target.value),v(e.target.value)},placeholder:"Find a person",className:"input",style:{width:"260px"}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-search"})})]}),Object(o.jsx)(c.b,{to:"/people/new",className:"button is-success",children:"Add a person"})]}),Object(o.jsxs)("table",{className:"table is-hoverable",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[["Name","Sex","Born","Died"].map((function(e){return Object(o.jsx)("th",{className:i()("table__sort",{"table__sort--asc":"asc"===x&&O===e.toLowerCase(),"table__sort--desc":"desc"===x&&O===e.toLowerCase()}),onClick:function(){g(e.toLowerCase())},children:e},e)})),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:f.map((function(e){return Object(o.jsx)("tr",{id:e.slug,className:i()({"has-background-warning":t.pathname==="/people/".concat(e.slug)}),children:Object(o.jsx)(C,{person:e})},e.slug)}))})]})]})},S=(a(31),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),L=function(){var e=_(),t=e.people,a=e.loading,n=e.error;return a?Object(o.jsx)(S,{}):n?Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"title",children:"People page"}),t.length>0&&Object(o.jsx)(P,{})]})},A=(a(32),a(5)),k=a(2),F=a(20),q=function(){var e=Object(r.g)(),t=_(),a=t.people,n=t.setPeople,s=Object(F.a)({mode:"onChange"}),c=s.register,l=s.handleSubmit,d=s.formState,j=d.errors,b=d.isValid,m=s.getValues,h=s.reset,O=m(),p=(new Date).getFullYear(),x=function(e){return a.filter((function(t){return t.sex===e&&t.born<O.born&&t.died>=O.born}))},f=Object(u.useMemo)((function(){return x("f")}),[O.born]),v=Object(u.useMemo)((function(){return x("m")}),[O.born]);return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("button",{type:"button",className:"form__back-btn button is-primary",onClick:function(){return e(-1)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-arrow-left"})})}),Object(o.jsx)("h1",{className:"title has-text-centered mb-6",children:"Add a new person"}),Object(o.jsxs)("form",{autoComplete:"off",onSubmit:l((function(t){var s=t,c="".concat(s.name.toLowerCase().split(" ").join("-"),"-").concat(s.born);s=Object(k.a)(Object(k.a)({},s),{},{slug:c}),n([].concat(Object(A.a)(a),[s])),e("/people"),h()})),children:[Object(o.jsxs)("div",{className:"form__field",children:[Object(o.jsx)("input",Object(k.a)(Object(k.a)({type:"text"},c("name",{required:"*Please, enter a name",pattern:{value:/^[A-Za-z][A-Za-z ]*$/,message:"*Name should contain only letters"}})),{},{className:i()("input",{"is-danger":null===j||void 0===j?void 0:j.name,"is-success":O.name}),placeholder:"Enter a name"})),(null===j||void 0===j?void 0:j.name)&&Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.name.message})]}),Object(o.jsxs)("div",{className:"form__wrapper",children:[Object(o.jsx)("div",{className:"form__field form__field--radio",children:Object(o.jsxs)("label",{htmlFor:"male",className:"radio",children:[Object(o.jsx)("input",Object(k.a)(Object(k.a)({id:"male",type:"radio"},c("sex",{required:"*Please, select a gender"})),{},{value:"m"})),"\xa0Male"]})}),Object(o.jsx)("div",{className:"form__field form__field--radio",children:Object(o.jsxs)("label",{htmlFor:"female",className:"radio",children:[Object(o.jsx)("input",Object(k.a)(Object(k.a)({id:"female",type:"radio"},c("sex",{required:"*Please, select a gender"})),{},{value:"f"})),"\xa0Female"]})}),(null===j||void 0===j?void 0:j.sex)&&Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.sex.message})]}),Object(o.jsxs)("div",{className:"form__field-wrapper is-flex",children:[Object(o.jsxs)("div",{className:"form__field",children:[Object(o.jsx)("input",Object(k.a)(Object(k.a)({type:"number"},c("born",{required:"*Please, enter a year of birth",min:{value:1400,message:"*A year should be between 1400 and ".concat(p)},max:{value:p,message:"*A year should be between 1400 and ".concat(p)}})),{},{className:i()("input",{"is-danger":null===j||void 0===j?void 0:j.born,"is-success":O.born}),placeholder:"Enter a year of birth"})),(null===j||void 0===j?void 0:j.born)&&Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.born.message})]}),Object(o.jsxs)("div",{className:"form__field",children:[Object(o.jsx)("input",Object(k.a)(Object(k.a)({type:"number"},c("died",{disabled:!1,min:{value:O.born,message:"*Please, enter a valid year of death"},max:{value:+O.born+150,message:"*A person can't be older then 150"}})),{},{className:i()("input",{"is-danger":null===j||void 0===j?void 0:j.died,"is-success":O.died}),placeholder:"Enter a year of death",disabled:!O.born})),(null===j||void 0===j?void 0:j.died)&&Object(o.jsx)("p",{className:"help is-danger",children:null===j||void 0===j?void 0:j.died.message})]})]}),Object(o.jsxs)("div",{className:"form__field-wrapper is-flex",children:[Object(o.jsx)("div",{className:"form__field select",children:Object(o.jsxs)("select",Object(k.a)(Object(k.a)({},c("motherName")),{},{className:"form__select",disabled:!O.born,children:[Object(o.jsx)("option",{value:"",children:"Select mother's name"}),f.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.slug)}))]}))}),Object(o.jsx)("div",{className:"form__field select",children:Object(o.jsxs)("select",Object(k.a)(Object(k.a)({},c("fatherName")),{},{className:"form__select",disabled:!O.born,children:[Object(o.jsx)("option",{value:"",children:"Select father's name"}),v.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.slug)}))]}))})]}),Object(o.jsx)("input",{type:"submit",value:"Add",className:"form__btn button is-success",disabled:!b})]})]})},E=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(d,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(N,{children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(j,{})}),Object(o.jsx)(r.b,{path:"people",element:Object(o.jsx)(L,{}),children:Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(L,{})})}),Object(o.jsx)(r.b,{path:"people/new",element:Object(o.jsx)(q,{})}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)(b,{})}),Object(o.jsx)(r.b,{path:"/home",element:Object(o.jsx)(r.a,{to:"/"})})]})})})})]})};s.a.render(Object(o.jsx)(c.a,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a79c5853.chunk.js.map