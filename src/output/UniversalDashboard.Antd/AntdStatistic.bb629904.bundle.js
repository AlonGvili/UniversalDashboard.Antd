(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[72],{1361:function(e,t,n){"use strict";n.r(t);n(858);var a=n(859),r=n.n(a),s=(n(239),n(92)),o=n.n(s),c=(n(254),n(162)),i=n.n(c),u=n(0),d=n.n(u),l=n(575),b=n(72),f=n(148),p=n(21);const h=Object(b.a)("ud-dashboard");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}Object(b.a)("ud-dashboard");t.default=({id:e,...t})=>{const[{attributes:n}]=Object(l.a)(e,t),{autoRefresh:a,refreshInterval:s}=n,{data:c,status:u,error:b,isFetching:v}=function(e,t,n){const a=Object(f.a)(e);return Object(p.useQuery)(["statistic",{id:e}],async()=>{const e=await fetch(a,{headers:{dashboardid:h,UDConnectionId:UniversalDashboard.connectionId}});return await e.json()},{refetchInterval:t&&n,refetchIntervalInBackground:t})}(e,a,s);return"loading"===u?d.a.createElement(i.a,{spinning:v,size:"small"}):"error"===u?d.a.createElement(o.a,{message:"Error in AntdStatistic component",description:b.message,type:"error"}):d.a.createElement(r.a,m({},n,{prefix:n.prefix&&UniversalDashboard.renderComponent(n.prefix),suffix:n.suffix&&UniversalDashboard.renderComponent(n.suffix),value:c}))}},575:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),s=n(148);function o(e,t){const n=r.a.useRef();n.current=t,r.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}function c(e,t){const{content:n,...r}=t,[c,i]=Object(a.useState)({content:n,attributes:r});o(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),i(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",c),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:c});break;case"addElement":i(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":i(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":i(e=>({...e,content:[]}));break;case"syncElement":u()}});const u=()=>{UniversalDashboard.get(Object(s.a)(e),e=>i(t=>({...t,content:e})))};return[c,u,i]}}}]);