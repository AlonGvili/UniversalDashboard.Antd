(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[82],{1371:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return g}));n(238);var t=n(91),r=n.n(t),c=(n(254),n(163)),o=n.n(c),l=n(0),i=n.n(l),s=n(282),d=n(148);function u({id:e}){const a=Object(d.a)(e),{data:n,isFetching:t}=Object(s.a)(a);return i.a.createElement(r.a.ErrorBoundary,null,i.a.createElement(i.a.Suspense,{fallback:i.a.createElement(o.a,{spinning:t,size:"large",tip:"Getting page data"})},UniversalDashboard.renderComponent(n)))}var m=n(10),p=n(289),b=n(21);function g(){const{data:e,error:a,status:n,isFetching:t}=Object(p.a)();if("loading"===n)return i.a.createElement(o.a,{spinning:t,size:"large",tip:"Getting pages",delay:500});if("error"===n)return i.a.createElement(r.a,{message:a.message,type:"error"});e.forEach(e=>{const a=Object(d.a)(e.id);b.queryCache.prefetchQuery(["page",{pageUrl:a}],()=>Object(s.b)(a))});const c=i.a.useCallback(e=>{let a=e.find(e=>e.defaultHomePage||"home"===e.name);return a?a.name:e[0].name},[])(e);return i.a.createElement(i.a.Suspense,{fallback:"Loading Page Please Wait...."},i.a.createElement(r.a.ErrorBoundary,null,i.a.createElement(m.d,null,e.length>1&&e.map(e=>i.a.createElement(m.b,{key:e.id,path:e.dynamic?"".concat(window.baseUrl).concat(e.url):"".concat(window.baseUrl,"/").concat(e.name)},i.a.createElement(u,{id:e.id}))),i.a.createElement(m.a,{exact:!0,from:"".concat(window.baseUrl),to:"".concat(window.baseUrl,"/").concat(c)}),i.a.createElement(m.a,{from:"".concat(window.baseUrl),to:"".concat(window.baseUrl,"/404")}))))}}}]);