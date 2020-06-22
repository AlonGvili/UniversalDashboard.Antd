(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[53],{1342:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(641);var r=n(642),o=n.n(r),a=n(0),c=n.n(a);n(569);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i({prefix:e,suffix:t,addonAfter:n,addonBefore:r,...a}){const i={prefix:e&&UniversalDashboard.renderComponent(e),suffix:t&&UniversalDashboard.renderComponent(t)},u={addonBefore:r&&UniversalDashboard.renderComponent(r),addonAfter:n&&UniversalDashboard.renderComponent(n)};return c.a.createElement(o.a.Password,s({},a,u,i))}},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(10),o=n(570),a=n.n(o);const c=e=>{const t="?".concat(a.a.stringify(Object(r.i)()));return"".concat("/api/internal/component/element/").concat(e).concat(t)}},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(0),o=n.n(r),a=n(568);function c(e,t){const n=o.a.useRef();n.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}const s=(e,t="",n={})=>{UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:"".concat(e).concat(t),eventName:t,eventData:n})};function i(e,t){const{content:n,...o}=t,[i,u]=Object(r.useState)({content:n,attributes:o,onEvent:s});c(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),u(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",i),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:i});break;case"addElement":u(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":u(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":u(e=>({...e,content:[]}));break;case"syncElement":l()}});const l=()=>{UniversalDashboard.get(Object(a.a)(e),e=>u(t=>({...t,content:e})))};return[i,l,u]}},570:function(e,t,n){"use strict";const r=n(571),o=n(572),a=n(573);function c(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const o="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map(t=>i(t,e)):null===n?n:i(n,e);r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:i(c,t),n(i(e,t),c,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=f(n[e],t);else r[e]=f(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=l,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[s(t,e),"[",o,"]"].join("")]:[...n,[s(t,e),"[",s(o,e),"]=",s(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[s(t,e),"[]"].join("")]:[...n,[s(t,e),"[]=",s(r,e)].join("")];case"comma":case"separator":return t=>(n,r)=>null==r||0===r.length?n:0===n.length?[[s(t,e),"=",s(r,e)].join("")]:[[n,s(r,e)].join(e.arrayFormatSeparator)];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,s(t,e)]:[...n,[s(t,e),"=",s(r,e)].join("")]}}(t),o={};for(const t of Object.keys(e))n(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map(n=>{const o=e[n];return void 0===o?"":null===o?s(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):s(n,t)+"="+s(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=a(e,"#");return Object.assign({url:n.split("?")[0]||"",query:p(l(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:i(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=u(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),c=Object.assign(a,e.query);let i=t.stringify(c,n);i&&(i="?"+i);let l=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l="#"+s(e.fragmentIdentifier,n)),`${r}${i}${l}`}},571:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},572:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function c(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=c(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var i=a[s];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},573:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},574:function(e,t,n){(function(t){for(var r=n(575),o="undefined"==typeof window?t:window,a=["moz","webkit"],c="AnimationFrame",s=o["request"+c],i=o["cancel"+c]||o["cancelRequest"+c],u=0;!s&&u<a.length;u++)s=o[a[u]+"Request"+c],i=o[a[u]+"Cancel"+c]||o[a[u]+"CancelRequest"+c];if(!s||!i){var l=0,f=0,p=[];s=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},i=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){i.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=i}}).call(this,n(88))},575:function(e,t,n){(function(t){(function(){var n,r,o,a,c,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-c)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),c=a-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(235))},589:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(38),o=n.n(r);function a(e){return e instanceof HTMLElement?e:o.a.findDOMNode(e)}},590:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){"function"==typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){o(t,e)}))}}function c(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)&&!("function"==typeof e&&e.prototype&&!e.prototype.render)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}))},607:function(e,t,n){"use strict";var r=n(19),o=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),c=r(n(608)),s=r(n(23)),i=function(e,t){return a.createElement(s.default,Object.assign({},e,{ref:t,icon:c.default}))};i.displayName="SearchOutlined";var u=a.forwardRef(i);t.default=u},608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},626:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(607))&&r.__esModule?r:{default:r};t.default=o,e.exports=o}}]);