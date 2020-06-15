(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[43],{1323:function(e,t,r){"use strict";r.r(t);r(684);var n=r(854),o=r.n(n),a=r(0),c=r.n(a),s=r(569);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=({id:e,...t})=>{const[{attributes:r}]=Object(s.a)(e,t),{autoRefresh:n,refreshInterval:u,targetOffset:l,overlay:p,visible:f,...d}=r,[m,b]=Object(a.useState)(f);return c.a.createElement(o.a,i({},d,{align:{targetOffset:l},overlay:UniversalDashboard.renderComponent(p),visible:m,onVisibleChange:b(!m)}),c.a.createElement("span",null,UniversalDashboard.renderComponent(data)))}},568:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(10),o=r(570),a=r.n(o);const c=e=>{const t="?".concat(a.a.stringify(Object(n.i)()));return"".concat("/api/internal/component/element/").concat(e).concat(t)}},569:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(0),o=r.n(n),a=r(568);function c(e,t){const r=o.a.useRef();r.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,r.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}const s=(e="",t={})=>{UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:"".concat(elementId).concat(e),eventName:e,eventData:t})};function i(e,t){const{content:r,...o}=t,[i,u]=Object(n.useState)({content:r,attributes:o,onEvent:s});c(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),u(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",i),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:i});break;case"addElement":u(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":u(e=>{console.log("remove element event",t);let r=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...r]}});break;case"clearElement":u(e=>({...e,content:[]}));break;case"syncElement":l()}});const l=()=>{UniversalDashboard.get(Object(a.a)(e),e=>u(t=>({...t,content:e})))};return[i,l,u]}},570:function(e,t,r){"use strict";const n=r(571),o=r(572),a=r(573);function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map(t=>i(t,e)):null===r?r:i(r,e);n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:i(c,t),r(i(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=l,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[",o,"]"].join("")]:[...r,[s(t,e),"[",s(o,e),"]=",s(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[s(t,e),"=",s(n,e)].join("")]:[[r,s(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,s(t,e)]:[...r,[s(t,e),"=",s(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{const o=e[r];return void 0===o?"":null===o?s(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):s(r,t)+"="+s(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(l(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:i(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=u(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o),c=Object.assign(a,e.query);let i=t.stringify(c,r);i&&(i="?"+i);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l="#"+s(e.fragmentIdentifier,r)),`${n}${i}${l}`}},571:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},572:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function c(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=c(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var i=a[s];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},573:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}}}]);