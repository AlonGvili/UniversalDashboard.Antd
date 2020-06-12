(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[11],{575:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),i=n(148);function a(e,t){const n=o.a.useRef();n.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}function l(e,t){const{content:n,...o}=t,[l,c]=Object(r.useState)({content:n,attributes:o});a(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),c(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",l),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:l});break;case"addElement":c(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":c(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":c(e=>({...e,content:[]}));break;case"syncElement":s()}});const s=()=>{UniversalDashboard.get(Object(i.a)(e),e=>c(t=>({...t,content:e})))};return[l,s,c]}},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[];return o.default.Children.forEach(t,(function(t){null!=t&&(Array.isArray(t)?n=n.concat(e(t)):(0,i.isFragment)(t)&&t.props?n=n.concat(e(t.props.children)):n.push(t))})),n};var r,o=(r=n(0))&&r.__esModule?r:{default:r},i=n(90)},599:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.responsiveMap=t.responsiveArray=void 0;t.responsiveArray=["xxl","xl","lg","md","sm","xs"];var o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t.responsiveMap=o;var i=[],a=-1,l={},c={matchHandlers:{},dispatch:function(e){return l=e,i.forEach((function(e){e.func(l)})),i.length>=1},subscribe:function(e){0===i.length&&this.register();var t=(++a).toString();return i.push({token:t,func:e}),e(l),t},unsubscribe:function(e){0===(i=i.filter((function(t){return t.token!==e}))).length&&this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],r=e.matchHandlers[n];r&&r.mql&&r.listener&&r.mql.removeListener(r.listener)}))},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],i=function(n){var o,i,a,c=n.matches;e.dispatch(r(r({},l),(a=c,(i=t)in(o={})?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,o)))},a=window.matchMedia(n);a.addListener(i),e.matchHandlers[n]={mql:a,listener:i},i(a)}))}};t.default=c},645:function(e,t,n){"use strict";var r=n(655).ReactInterval;r.ReactInterval=r,e.exports=r},655:function(e,t,n){"use strict";var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?s(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.ReactInterval=void 0;var f=function(e){function t(){var e,n;i(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return d(s(n=l(this,(e=c(t)).call.apply(e,[this].concat(o)))),"callback",(function(){n.timer&&((0,n.props.callback)(),n.start())})),d(s(n),"start",(function(){n.stop();var e=n.props.timeout;n.timer=setTimeout(n.callback,e)})),d(s(n),"stop",(function(){clearTimeout(n.timer),n.timer=null})),d(s(n),"render",(function(){return!1})),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.enabled&&this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=e.timeout,n=e.callback,r=e.enabled,o=this.props,i=o.timeout,a=o.callback,l=o.enabled;return i!==t||a!==n||l!==r}},{key:"componentDidUpdate",value:function(e){var t=e.enabled,n=e.timeout,r=this.props,o=r.timeout,i=r.enabled;i===t&&o===n||(i?this.start():this.stop())}},{key:"componentWillUnmount",value:function(){this.stop()}}])&&a(n.prototype,r),o&&a(n,o),t}(((r=n(0))&&r.__esModule?r:{default:r}).default.Component);t.ReactInterval=f,d(f,"defaultProps",{enabled:!1,timeout:1e3})},852:function(e,t,n){"use strict";n(109),n(943)},853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(n(0)),o=f(n(23)),i=f(n(578)),a=b(n(599)),l=f(n(236)),c=n(45),s=f(n(944)),u=f(n(946)),d=n(150);function f(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function b(e){if(e&&e.__esModule)return e;if(null===e||"object"!==v(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function w(e,t,n){var r=e;return(void 0===t||t>n)&&(r=(0,d.cloneElement)(e,{span:n}),(0,l.default)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function x(e){var t,n=e.prefixCls,l=e.title,u=e.column,d=void 0===u?g:u,f=e.colon,p=void 0===f||f,b=e.bordered,h=e.layout,x=e.children,O=e.className,j=e.style,S=e.size,P=r.useContext(c.ConfigContext),_=P.getPrefixCls,k=P.direction,E=_("descriptions",n),M=y(r.useState({}),2),C=M[0],A=M[1],N=function(e,t){if("number"==typeof e)return e;if("object"===v(e))for(var n=0;n<a.responsiveArray.length;n++){var r=a.responsiveArray[n];if(t[r]&&void 0!==e[r])return e[r]||g[r]}return 3}(d,C);r.useEffect((function(){var e=a.default.subscribe((function(e){"object"===v(d)&&A(e)}));return function(){a.default.unsubscribe(e)}}),[]);var D=function(e,t){var n=(0,i.default)(e).filter((function(e){return e})),r=[],o=[],a=t;return n.forEach((function(e,i){var l,c=null===(l=e.props)||void 0===l?void 0:l.span,s=c||1;if(i===n.length-1)return o.push(w(e,c,a)),void r.push(o);s<a?(a-=s,o.push(e)):(o.push(w(e,s,a)),r.push(o),a=t,o=[])})),r}(x,N);return r.createElement("div",{className:(0,o.default)(E,O,(t={},m(t,"".concat(E,"-").concat(S),S&&"default"!==S),m(t,"".concat(E,"-bordered"),!!b),m(t,"".concat(E,"-rtl"),"rtl"===k),t)),style:j},l&&r.createElement("div",{className:"".concat(E,"-title")},l),r.createElement("div",{className:"".concat(E,"-view")},r.createElement("table",null,r.createElement("tbody",null,D.map((function(e,t){return r.createElement(s.default,{key:t,index:t,colon:p,prefixCls:E,vertical:"vertical"===h,bordered:b,row:e})}))))))}x.Item=u.default;var O=x;t.default=O},943:function(e,t,n){(function(e){var r=function(e){var r={id:e.id,exports:{}};return function(e){var r=n(88);(t=r(!1)).push([e.id,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-descriptions-title {\n  margin-bottom: "[theme:descriptionsTitleMarginBottom,default:20px]";\n  color: "[theme:headingColor,default:rgba(0, 0, 0, 0.85)]";\n  font-weight: bold;\n  font-size: "[theme:fontSizeLg,default:16px]";\n  line-height: "[theme:lineHeightBase,default:1.5715]";\n}\n.ant-descriptions-view {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 2px;\n}\n.ant-descriptions-view table {\n  width: 100%;\n  table-layout: fixed;\n}\n.ant-descriptions-row > th,\n.ant-descriptions-row > td {\n  padding-bottom: "[theme:descriptionsItemPaddingBottom,default:16px]";\n}\n.ant-descriptions-row:last-child {\n  border-bottom: none;\n}\n.ant-descriptions-item-label {\n  color: "[theme:headingColor,default:rgba(0, 0, 0, 0.85)]";\n  font-weight: normal;\n  font-size: "[theme:fontSizeBase,default:14px]";\n  line-height: "[theme:lineHeightBase,default:1.5715]";\n}\n.ant-descriptions-item-label::after {\n  content: \':\';\n  position: relative;\n  top: -0.5px;\n  margin: 0 8px 0 2px;\n}\n.ant-descriptions-item-label.ant-descriptions-item-no-colon::after {\n  content: \' \';\n}\n.ant-descriptions-item-no-label::after {\n  margin: 0;\n  content: \'\';\n}\n.ant-descriptions-item-content {\n  display: table-cell;\n  color: "[theme:textColor,default:rgba(0, 0, 0, 0.65)]";\n  font-size: "[theme:fontSizeBase,default:14px]";\n  line-height: "[theme:lineHeightBase,default:1.5715]";\n}\n.ant-descriptions-item {\n  padding-bottom: 0;\n}\n.ant-descriptions-item > span {\n  display: inline-block;\n}\n.ant-descriptions-middle .ant-descriptions-row > th,\n.ant-descriptions-middle .ant-descriptions-row > td {\n  padding-bottom: "[theme:paddingSm,default:12px]";\n}\n.ant-descriptions-small .ant-descriptions-row > th,\n.ant-descriptions-small .ant-descriptions-row > td {\n  padding-bottom: "[theme:paddingXs,default:8px]";\n}\n.ant-descriptions-bordered .ant-descriptions-view {\n  border: 1px solid "[theme:borderColorSplit,default:#f0f0f0]";\n}\n.ant-descriptions-bordered .ant-descriptions-view > table {\n  table-layout: auto;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label,\n.ant-descriptions-bordered .ant-descriptions-item-content {\n  padding: "[theme:descriptionsDefaultPadding,default:16px 24px]";\n  border-right: 1px solid "[theme:borderColorSplit,default:#f0f0f0]";\n}\n.ant-descriptions-bordered .ant-descriptions-item-label:last-child,\n.ant-descriptions-bordered .ant-descriptions-item-content:last-child {\n  border-right: none;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label {\n  background-color: "[theme:descriptionsBg,default:#fafafa]";\n}\n.ant-descriptions-bordered .ant-descriptions-item-label::after {\n  display: none;\n}\n.ant-descriptions-bordered .ant-descriptions-row {\n  border-bottom: 1px solid "[theme:borderColorSplit,default:#f0f0f0]";\n}\n.ant-descriptions-bordered .ant-descriptions-row:last-child {\n  border-bottom: none;\n}\n.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,\n.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content {\n  padding: "[theme:descriptionsMiddlePadding,default:12px 24px]";\n}\n.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,\n.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content {\n  padding: "[theme:descriptionsSmallPadding,default:8px 16px]";\n}\n.ant-descriptions-rtl {\n  direction: rtl;\n}\n.ant-descriptions-rtl .ant-descriptions-item-label::after {\n  margin: 0 2px 0 8px;\n}\n',""]),e.exports=t}(r),r.exports}(e),o=n(81);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)}).call(this,n(80)(e))},944:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=(o=n(945))&&o.__esModule?o:{default:o};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e,t,n){var r=t.colon,o=t.prefixCls,l=t.bordered,c=n.component,s=n.type,u=n.showLabel,d=n.showContent;return e.map((function(e,t){var n=e.props,f=n.label,p=n.children,b=n.prefixCls,m=void 0===b?o:b,y=n.className,h=n.style,v=n.span,g=void 0===v?1:v,w=e.key;return"string"==typeof c?i.createElement(a.default,{key:"".concat(s,"-").concat(w||t),className:y,style:h,span:g,colon:r,component:c,itemPrefixCls:m,bordered:l,label:u?f:null,content:d?p:null}):[i.createElement(a.default,{key:"label-".concat(w||t),className:y,style:h,span:1,colon:r,component:c[0],itemPrefixCls:m,bordered:l,label:f}),i.createElement(a.default,{key:"content-".concat(w||t),className:y,style:h,span:2*g-1,component:c[1],itemPrefixCls:m,bordered:l,content:p})]}))}var s=function(e){var t=e.prefixCls,n=e.vertical,r=e.row,o=e.index,a=e.bordered;return n?i.createElement(i.Fragment,null,i.createElement("tr",{key:"label-".concat(o),className:"".concat(t,"-row")},c(r,e,{component:"th",type:"label",showLabel:!0})),i.createElement("tr",{key:"content-".concat(o),className:"".concat(t,"-row")},c(r,e,{component:"td",type:"content",showContent:!0}))):i.createElement("tr",{key:o,className:"".concat(t,"-row")},c(r,e,{component:a?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0}))};t.default=s},945:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=(o=n(23))&&o.__esModule?o:{default:o};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return null!=e}var u=function(e){var t,n=e.itemPrefixCls,r=e.component,o=e.span,l=e.className,u=e.style,d=e.bordered,f=e.label,p=e.content,b=e.colon,m=r;return d?i.createElement(m,{className:(0,a.default)((t={},c(t,"".concat(n,"-item-label"),s(f)),c(t,"".concat(n,"-item-content"),s(p)),t),l),style:u,colSpan:o},s(f)?f:p):i.createElement(m,{className:(0,a.default)("".concat(n,"-item"),l),style:u,colSpan:o},f&&i.createElement("span",{className:(0,a.default)("".concat(n,"-item-label"),c({},"".concat(n,"-item-no-colon"),!b))},f),p&&i.createElement("span",{className:(0,a.default)("".concat(n,"-item-content"))},p))};t.default=u},946:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e.children};t.default=r}}]);