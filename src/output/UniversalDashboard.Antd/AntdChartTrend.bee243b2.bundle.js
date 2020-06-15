(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[31],{1148:function(e,t,n){n(1149),n(787)},1149:function(e,t,n){(function(e){var r=function(e){var r={id:e.id,exports:{}};return function(e){var r=n(86);(t=r(!1)).push([e.id,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.antd-pro-trend-trendItem {\n  display: inline-block;\n  font-size: "[theme:fontSizeBase,default:14px]";\n  line-height: 22px;\n}\n.antd-pro-trend-trendItem .antd-pro-trend-up,\n.antd-pro-trend-trendItem .antd-pro-trend-down {\n  position: relative;\n  top: 1px;\n  margin-left: 4px;\n}\n.antd-pro-trend-trendItem .antd-pro-trend-up i,\n.antd-pro-trend-trendItem .antd-pro-trend-down i {\n  font-size: 12px;\n  transform: scale(0.83);\n}\n.antd-pro-trend-trendItem .antd-pro-trend-up {\n  color: "[theme:red6,default:#f5222d]";\n}\n.antd-pro-trend-trendItem .antd-pro-trend-down {\n  top: -1px;\n  color: "[theme:green6,default:#52c41a]";\n}\n.antd-pro-trend-trendItem.antd-pro-trend-trendItemGrey .antd-pro-trend-up,\n.antd-pro-trend-trendItem.antd-pro-trend-trendItemGrey .antd-pro-trend-down {\n  color: "[theme:textColor,default:rgba(0, 0, 0, 0.65)]";\n}\n.antd-pro-trend-trendItem.antd-pro-trend-reverseColor .antd-pro-trend-up {\n  color: "[theme:green6,default:#52c41a]";\n}\n.antd-pro-trend-trendItem.antd-pro-trend-reverseColor .antd-pro-trend-down {\n  color: "[theme:red6,default:#f5222d]";\n}\n',""]),e.exports=t}(r),r.exports}(e),o=n(79);"string"==typeof r&&(r=[[e.i,r]]);for(var a=0;a<r.length;a++)o.loadStyles(r[a][1],!1);r.locals&&(e.exports=r.locals)}).call(this,n(78)(e))},1150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(789)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(0)),s=c(n(22));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={trendItem:"antd-pro-trend-trendItem",up:"antd-pro-trend-up",down:"antd-pro-trend-down",trendItemGrey:"antd-pro-trend-trendItemGrey",reverseColor:"antd-pro-trend-reverseColor"};t.default=function(e){var t,n=e.colorful,c=void 0===n||n,d=e.reverseColor,u=void 0!==d&&d,p=e.flag,f=e.children,m=e.className,y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["colorful","reverseColor","flag","children","className"]),b=(0,s.default)(l.trendItem,(i(t={},l.trendItemGrey,!c),i(t,l.reverseColor,u&&c),t),m);return a.default.createElement("div",o({},y,{className:b,title:"string"==typeof f?f:""}),a.default.createElement("span",null,f),p&&a.default.createElement("span",{className:l[p]},a.default.createElement(r.default,{type:"caret-"+p})))},e.exports=t.default},1374:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));n(236);var r=n(89),o=n.n(r),a=n(0),s=n.n(a),c=(n(1148),n(1150)),i=n.n(c),l=n(569),d=n(34),u=n(568),p=n(148);const f=Object(p.a)("ud-dashboard");function m({id:e,...t}){const[{attributes:n}]=Object(l.a)(e,t),{autoRefresh:r,refreshInterval:a,...c}=n,{data:p,error:m,status:y}=function(e,t,n){const r=Object(u.a)(e);return Object(d.useQuery)(["trend",{id:e}],async()=>{const e=await fetch(r,{headers:{dashboardid:f,UDConnectionId:UniversalDashboard.connectionId}});return await e.json()},{refetchInterval:t&&n,refetchIntervalInBackground:t})}(e,r,a);return"error"===y?s.a.createElement(o.a,{message:m.message,type:"error"}):s.a.createElement(i.a,c,p)}m.displayName="AntdChartTrend"},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(10),o=n(570),a=n.n(o);const s=e=>{const t="?".concat(a.a.stringify(Object(r.i)()));return"".concat("/api/internal/component/element/").concat(e).concat(t)}},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),a=n(568);function s(e,t){const n=o.a.useRef();n.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}const c=(e="",t={})=>{UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:"".concat(elementId).concat(e),eventName:e,eventData:t})};function i(e,t){const{content:n,...o}=t,[i,l]=Object(r.useState)({content:n,attributes:o,onEvent:c});s(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),l(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",i),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:i});break;case"addElement":l(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":l(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":l(e=>({...e,content:[]}));break;case"syncElement":d()}});const d=()=>{UniversalDashboard.get(Object(a.a)(e),e=>l(t=>({...t,content:e})))};return[i,d,l]}},570:function(e,t,n){"use strict";const r=n(571),o=n(572),a=n(573);function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function l(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=l(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const o="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map(t=>i(t,e)):null===n?n:i(n,e);r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,s]=a(t.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator"].includes(t.arrayFormat)?s:i(s,t),n(i(e,t),s,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=u(n[e],t);else r[e]=u(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=d,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),"[",o,"]"].join("")]:[...n,[c(t,e),"[",c(o,e),"]=",c(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[c(t,e),"[]"].join("")]:[...n,[c(t,e),"[]=",c(r,e)].join("")];case"comma":case"separator":return t=>(n,r)=>null==r||0===r.length?n:0===n.length?[[c(t,e),"=",c(r,e)].join("")]:[[n,c(r,e)].join(e.arrayFormatSeparator)];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,c(t,e)]:[...n,[c(t,e),"=",c(r,e)].join("")]}}(t),o={};for(const t of Object.keys(e))n(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map(n=>{const o=e[n];return void 0===o?"":null===o?c(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):c(n,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=a(e,"#");return Object.assign({url:n.split("?")[0]||"",query:p(d(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:i(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=l(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o),s=Object.assign(a,e.query);let i=t.stringify(s,n);i&&(i="?"+i);let d=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(d="#"+c(e.fragmentIdentifier,n)),`${r}${i}${d}`}},571:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},572:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function s(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=s(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),c=0;c<a.length;c++){var i=a[c];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},573:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},787:function(e,t,n){"use strict";n(108),n(788)},788:function(e,t,n){(function(e){var r=function(e){var r={id:e.id,exports:{}};return function(e){var r=n(86);(t=r(!1)).push([e.id,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n",""]),e.exports=t}(r),r.exports}(e),o=n(79);"string"==typeof r&&(r=[[e.i,r]]);for(var a=0;a<r.length;a++)o.loadStyles(r[a][1],!1);r.locals&&(e.exports=r.locals)}).call(this,n(78)(e))},789:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(234))&&r.__esModule?r:{default:r};var a=function(){return(0,o.default)(!1,"Icon","Empty Icon"),null};t.default=a}}]);