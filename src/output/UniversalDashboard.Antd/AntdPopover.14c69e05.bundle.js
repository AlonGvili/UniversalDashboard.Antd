(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[63],{1319:function(e,t,n){"use strict";n.r(t);n(734);var r=n(735),o=n.n(r),a=n(0),c=n.n(a),s=n(575);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.default=e=>{const[{content:t,attributes:n}]=Object(s.a)(e.id,e),r=c.a.createElement("span",null,n.title&&UniversalDashboard.renderComponent(n.title));return c.a.createElement(o.a,l({},n,{title:r,content:UniversalDashboard.renderComponent(t),autoAdjustOverflow:!0}),t&&UniversalDashboard.renderComponent(children))}},575:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(148);function c(e,t){const n=o.a.useRef();n.current=t,o.a.useEffect(()=>{const t=UniversalDashboard.subscribe(e,n.current);return()=>UniversalDashboard.unsubscribe(t)},[e])}function s(e,t){const{content:n,...o}=t,[s,l]=Object(r.useState)({content:n,attributes:o});c(e,(e,t)=>{switch(t.type){case"setState":console.log("dashboard event set state",t.state),l(e=>({attributes:{...e.attributes,...t.state.attributes},content:{...t.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",s),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(t.requestId),{state:s});break;case"addElement":l(e=>({...e,content:e.content.concat(t.elements)}));break;case"removeElement":l(e=>{console.log("remove element event",t);let n=e.content.filter(e=>e.id!==t.componentId);return{...e,content:[...n]}});break;case"clearElement":l(e=>({...e,content:[]}));break;case"syncElement":i()}});const i=()=>{UniversalDashboard.get(Object(a.a)(e),e=>l(t=>({...t,content:e})))};return[s,i,l]}},735:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),c=(o=n(587))&&o.__esModule?o:{default:o},s=n(45),l=n(736);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=a.forwardRef((function(e,t){var n=e.prefixCls,r=e.title,o=e.content,i=f(e,["prefixCls","title","content"]),p=(0,a.useContext(s.ConfigContext).getPrefixCls)("popover",n);return a.createElement(c.default,u({},i,{prefixCls:p,ref:t,overlay:function(e){return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:"".concat(e,"-title")},(0,l.getRenderPropValue)(r)),a.createElement("div",{className:"".concat(e,"-inner-content")},(0,l.getRenderPropValue)(o)))}(p)}))}));p.displayName="Popover",p.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var b=p;t.default=b}}]);