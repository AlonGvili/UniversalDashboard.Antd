(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[44],{1059:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=s(n(0)),l=s(n(22)),u=s(n(1060));t.default=function(e){var t=e.prefixCls,n=void 0===t?"rc-footer":t,r=e.className,s=e.style,f=e.bottom,p=e.columns,m=e.maxColumnsPerRow,d=e.backgroundColor,b=e.columnLayout,y=e.theme,g=void 0===y?"dark":y,v=c(e,["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"]),O=l.default("".concat(n),r,a({},"".concat(n,"-").concat(g),!!g)),j="number"==typeof m&&m>0;return i.default.createElement("footer",Object.assign({},v,{className:O,style:o(o({},s),{},{backgroundColor:d})}),i.default.createElement("section",{className:"".concat(n,"-container")},p&&p.length>0&&i.default.createElement("section",{className:"".concat(n,"-columns"),style:{justifyContent:b,flexWrap:j?"wrap":void 0}},p.map((function(e,t){var r=e.title,a=e.icon,c=e.style,s=e.className,l=e.items,f=void 0===l?[]:l,p=o({},c);return j&&(p.flex="0 0 ".concat(100/(m+1)+.1,"%")),i.default.createElement(u.default,{key:t,prefixCls:n,title:r,icon:a,items:f,style:p,className:s})})))),f&&i.default.createElement("section",{className:"".concat(n,"-bottom")},i.default.createElement("div",{className:"".concat(n,"-bottom-container")},f)))}},1060:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a=r(n(22));t.default=function(e){var t=e.prefixCls,n=e.icon,r=e.title,c=e.items,s=void 0===c?[]:c,i=e.style,l=e.className;return o.default.createElement("div",{className:a.default("".concat(t,"-column"),l),style:i},(r||n)&&o.default.createElement("h2",null,n&&o.default.createElement("span",{className:"".concat(t,"-column-icon")},n),r),s.map((function(e,n){var r=e.LinkComponent||"a";return o.default.createElement("div",{className:a.default("".concat(t,"-item"),e.className),style:e.style,key:n},o.default.createElement(r,{href:e.url,to:"string"!=typeof r?e.url:void 0,target:e.openExternal?"_blank":void 0,rel:e.openExternal?"noopener noreferrer":void 0},e.icon&&o.default.createElement("span",{className:"".concat(t,"-item-icon")},e.icon),e.title),e.description&&o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"".concat(t,"-item-separator")},"-"),o.default.createElement("span",{className:"".concat(t,"-item-description")},e.description)))})))}},1342:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),o=n.n(r),a=n(1059),c=n.n(a),s=n(569);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l({id:e,...t}){const[{content:n,attributes:r}]=Object(s.a)(e,t),a=n.map(e=>({icon:e.icon&&UniversalDashboard.renderComponent(e.icon),items:e.content.map(e=>({icon:e.icon&&UniversalDashboard.renderComponent(e.icon),...e})),...e}));return o.a.createElement(c.a,i({},r,{columns:a,bottom:r.bottom&&UniversalDashboard.renderComponent(r.bottom)}))}l.displayName="AntdFooter"},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(10),o=n(570),a=n.n(o);const c=e=>{const t="?".concat(a.a.stringify(Object(r.i)()));return"".concat("/api/internal/component/element/").concat(e).concat(t)}},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),a=n(568);function c(e,t){const n=o.a.useRef();n.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}const s=(e="",t={})=>{UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:"".concat(elementId).concat(e),eventName:e,eventData:t})};function i(e,t){const{content:n,...o}=t,[i,l]=Object(r.useState)({content:n,attributes:o,onEvent:s});c(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),l(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",i),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:i});break;case"addElement":l(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":l(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":l(e=>({...e,content:[]}));break;case"syncElement":u()}});const u=()=>{UniversalDashboard.get(Object(a.a)(e),e=>l(t=>({...t,content:e})))};return[i,u,l]}},570:function(e,t,n){"use strict";const r=n(571),o=n(572),a=n(573);function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function l(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=l(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const o="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map(t=>i(t,e)):null===n?n:i(n,e);r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:i(c,t),n(i(e,t),c,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=f(n[e],t);else r[e]=f(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=u,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[s(t,e),"[",o,"]"].join("")]:[...n,[s(t,e),"[",s(o,e),"]=",s(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[s(t,e),"[]"].join("")]:[...n,[s(t,e),"[]=",s(r,e)].join("")];case"comma":case"separator":return t=>(n,r)=>null==r||0===r.length?n:0===n.length?[[s(t,e),"=",s(r,e)].join("")]:[[n,s(r,e)].join(e.arrayFormatSeparator)];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,s(t,e)]:[...n,[s(t,e),"=",s(r,e)].join("")]}}(t),o={};for(const t of Object.keys(e))n(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map(n=>{const o=e[n];return void 0===o?"":null===o?s(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):s(n,t)+"="+s(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=a(e,"#");return Object.assign({url:n.split("?")[0]||"",query:p(u(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:i(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=l(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o),c=Object.assign(a,e.query);let i=t.stringify(c,n);i&&(i="?"+i);let u=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(u="#"+s(e.fragmentIdentifier,n)),`${r}${i}${u}`}},571:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},572:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function c(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=c(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var i=a[s];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},573:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}}}]);