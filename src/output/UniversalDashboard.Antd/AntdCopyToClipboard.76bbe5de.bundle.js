(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[36],{1037:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1038)),c=n(0),a=n(1039);function i(e){return e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName)}t.useClipboard=function(e){void 0===e&&(e={});var t=a.useTimedToggle(!1),n=t[0],r=t[1],s=c.useRef(null);function u(e){o.default(e).then(l).catch(f)}function l(){e.onSuccess&&e.onSuccess(),e.copiedTimeout&&r(e.copiedTimeout),e.selectOnCopy&&i(s.current)&&s.current.select()}function f(){e.onError&&e.onError(),!1!==e.selectOnError&&i(s.current)&&s.current.select()}return{copied:n,copy:c.useCallback((function(e){"string"==typeof e?u(e):s.current&&u(s.current.value)}),[]),isSupported:function(){return!!(navigator.clipboard||document.execCommand&&document.queryCommandSupported&&document.queryCommandSupported("copy"))},target:s}}},1038:function(e,t){e.exports=function(e){if(navigator.clipboard)return navigator.clipboard.writeText(e).catch((function(e){throw void 0!==e?e:new DOMException("The request is not allowed","NotAllowedError")}));var t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",document.body.appendChild(t);var n=window.getSelection(),r=window.document.createRange();n.removeAllRanges(),r.selectNode(t),n.addRange(r);var o=!1;try{o=window.document.execCommand("copy")}catch(e){console.log("error",e)}return n.removeAllRanges(),window.document.body.removeChild(t),o?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}},1039:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.useTimedToggle=function(e){var t=r.useState(!1),n=t[0],o=t[1],c=r.useRef(),a=r.useRef(e);return r.useEffect((function(){return function(){return clearTimeout(c.current)}}),[]),[n,function(e){clearTimeout(c.current),o(!a.current),c.current=window.setTimeout((function(){return o(a.current)}),e)}]}},1341:function(e,t,n){"use strict";n.r(t);n(597);var r=n(598),o=n.n(r),c=n(0),a=n.n(c),i=n(569),s=n(1037);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.default=e=>{const[t,n]=Object(i.a)(e.id,e),r=Object(s.useClipboard)(),{content:c,attributes:l}=t,{textToCopy:f,...p}=l;return a.a.createElement(o.a,u({},p,{htmlType:"button",type:l.buttonType,onClick:()=>r.copy(f),children:l.label}))}},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(10),o=n(570),c=n.n(o);const a=e=>{const t="?".concat(c.a.stringify(Object(r.i)()));return"".concat("/api/internal/component/element/").concat(e).concat(t)}},569:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),c=n(568);function a(e,t){const n=o.a.useRef();n.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}const i=(e,t="",n={})=>{UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:"".concat(e).concat(t),eventName:t,eventData:n})};function s(e,t){const{content:n,...o}=t,[s,u]=Object(r.useState)({content:n,attributes:o,onEvent:i});a(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),u(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",s),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:s});break;case"addElement":u(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":u(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":u(e=>({...e,content:[]}));break;case"syncElement":l()}});const l=()=>{UniversalDashboard.get(Object(c.a)(e),e=>u(t=>({...t,content:e})))};return[s,l,u]}},570:function(e,t,n){"use strict";const r=n(571),o=n(572),c=n(573);function a(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function s(e,t){return t.decode?o(e):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){a((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const o="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map(t=>s(t,e)):null===n?n:s(n,e);r[t]=o};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const o of e.split("&")){let[e,a]=c(t.decode?o.replace(/\+/g," "):o,"=");a=void 0===a?null:["comma","separator"].includes(t.arrayFormat)?a:s(a,t),n(s(e,t),a,r)}for(const e of Object.keys(r)){const n=r[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=f(n[e],t);else r[e]=f(n,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=l,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";a((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[i(t,e),"[",o,"]"].join("")]:[...n,[i(t,e),"[",i(o,e),"]=",i(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[i(t,e),"[]"].join("")]:[...n,[i(t,e),"[]=",i(r,e)].join("")];case"comma":case"separator":return t=>(n,r)=>null==r||0===r.length?n:0===n.length?[[i(t,e),"=",i(r,e)].join("")]:[[n,i(r,e)].join(e.arrayFormatSeparator)];default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,i(t,e)]:[...n,[i(t,e),"=",i(r,e)].join("")]}}(t),o={};for(const t of Object.keys(e))n(t)||(o[t]=e[t]);const c=Object.keys(o);return!1!==t.sort&&c.sort(t.sort),c.map(n=>{const o=e[n];return void 0===o?"":null===o?i(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):i(n,t)+"="+i(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,r]=c(e,"#");return Object.assign({url:n.split("?")[0]||"",query:p(l(e),t)},t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:s(r,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const r=u(e.url).split("?")[0]||"",o=t.extract(e.url),c=t.parse(o,{sort:!1}),a=Object.assign(c,e.query);let s=t.stringify(a,n);s&&(s="?"+s);let l=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(l="#"+i(e.fragmentIdentifier,n)),`${r}${s}${l}`}},571:function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},572:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function c(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],c(n),c(r))}function a(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=c(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=o.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),i=0;i<c.length;i++){var s=c[i];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},573:function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}},574:function(e,t,n){(function(t){for(var r=n(575),o="undefined"==typeof window?t:window,c=["moz","webkit"],a="AnimationFrame",i=o["request"+a],s=o["cancel"+a]||o["cancelRequest"+a],u=0;!i&&u<c.length;u++)i=o[c[u]+"Request"+a],s=o[c[u]+"Cancel"+a]||o[c[u]+"CancelRequest"+a];if(!i||!s){var l=0,f=0,p=[];i=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return i.call(o,e)},e.exports.cancel=function(){s.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=i,e.cancelAnimationFrame=s}}).call(this,n(88))},575:function(e,t,n){(function(t){(function(){var n,r,o,c,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,c=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*t.uptime(),a=c-i):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(235))}}]);