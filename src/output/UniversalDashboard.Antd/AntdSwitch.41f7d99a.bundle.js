(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[77],{1321:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n(851);var a=n(852),r=n.n(a),c=n(0),s=n.n(c),o=n(560);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u({id:e,...t}){const[{attributes:n}]=Object(o.a)(e,t),{checkedChildren:a,unCheckedChildren:u,checked:l}=n,[d,b]=Object(c.useState)(l),h={checkedChildren:a&&UniversalDashboard.renderComponent(a),unCheckedChildren:u&&UniversalDashboard.renderComponent(u)};return s.a.createElement(r.a,i({},n,h,{checked:d,onChange:t=>{b(t),UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:e+"onChange",eventName:"onChange",eventData:t})}}))}u.displayName="AntdSwitch"},560:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),c=n(80);function s(e,t){const{content:n,...s}=t,[o,i]=Object(a.useState)({content:n,attributes:s});!function(e,t){const n=r.a.useRef();n.current=t,r.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),i(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",o),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:o});break;case"addElement":i(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":i(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":i(e=>({...e,content:[]}));break;case"syncElement":u()}});const u=()=>{UniversalDashboard.get(Object(c.a)(e),e=>i(t=>({...t,content:e})))};return[o,u,i]}}}]);