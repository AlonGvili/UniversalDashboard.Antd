(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[79],{1354:function(e,t,n){"use strict";n.r(t);n(888);var a=n(889),s=n.n(a),o=n(0),c=n.n(o),r=n(560);const l=({id:e,...t})=>{const[n,a]=Object(o.useState)(!1),[{content:l,attributes:i}]=Object(r.a)(e,t),{icon:b,color:u,closable:d}=i;return c.a.createElement(s.a,{id:e,icon:b&&UniversalDashboard.renderComponent(b),onClose:d&&(()=>{a(!0),UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:e+"onClose",eventName:"onClose",eventData:e})}),visible:!n,color:u,closable:d},UniversalDashboard.renderComponent(l))};l.displayName="AntdTag",t.default=l},560:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),s=n.n(a),o=n(80);function c(e,t){const{content:n,...c}=t,[r,l]=Object(a.useState)({content:n,attributes:c});!function(e,t){const n=s.a.useRef();n.current=t,s.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),l(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",r),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:r});break;case"addElement":l(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":l(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":l(e=>({...e,content:[]}));break;case"syncElement":i()}});const i=()=>{UniversalDashboard.get(Object(o.a)(e),e=>l(t=>({...t,content:e})))};return[r,i,l]}}}]);