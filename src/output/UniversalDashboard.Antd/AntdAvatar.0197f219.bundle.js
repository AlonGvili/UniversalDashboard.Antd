(window.webpackJsonpAntd=window.webpackJsonpAntd||[]).push([[21],{1327:function(t,e,n){"use strict";n.r(e);n(634);var a=n(636),r=n.n(a),o=n(0),i=n.n(o),s=n(575);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}e.default=({id:t,...e})=>{const[{content:n,attributes:a}]=Object(s.a)(t,e),o={children:n},l={src:a.src,srcSet:a.srcSet,alt:a.alt},u={children:UniversalDashboard.renderComponent(n)};let f;switch(a.parameterSet){case"Icon":f={...u};break;case"Image":f={...l};break;case"Content":f={...o};break;default:console.log("No ParameterSet Was Selected!, Please Select One Of The Following: Content,Image,Icon")}return i.a.createElement(r.a,c({},a,f))}},575:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n(0),r=n.n(a),o=n(148);function i(t,e){const n=r.a.useRef();n.current=e,r.a.useEffect(()=>{const e=UniversalDashboard.subscribe(t,n.current);return()=>UniversalDashboard.unsubscribe(e)},[t])}function s(t,e){const{content:n,...r}=e,[s,c]=Object(a.useState)({content:n,attributes:r});i(t,(t,e)=>{switch(e.type){case"setState":console.log("dashboard event set state",e.state),c(t=>({attributes:{...t.attributes,...e.state.attributes},content:{...e.state.content}}));break;case"requestState":console.log("REQUEST_STATE: ",s),UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(e.requestId),{state:s});break;case"addElement":c(t=>({...t,content:t.content.concat(e.elements)}));break;case"removeElement":c(t=>{console.log("remove element event",e);let n=t.content.filter(t=>t.id!==e.componentId);return{...t,content:[...n]}});break;case"clearElement":c(t=>({...t,content:[]}));break;case"syncElement":l()}});const l=()=>{UniversalDashboard.get(Object(o.a)(t),t=>c(e=>({...e,content:t})))};return[s,l,c]}},634:function(t,e,n){"use strict";n(109),n(635)},635:function(t,e,n){(function(t){var a=function(t){var a={id:t.id,exports:{}};return function(t){var a=n(88);(e=a(!1)).push([t.id,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-avatar {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: "[theme:textColor,default:rgba(0, 0, 0, 0.65)]";\n  font-size: "[theme:fontSizeBase,default:14px]";\n  font-variant: tabular-nums;\n  line-height: "[theme:lineHeightBase,default:1.5715]";\n  list-style: none;\n  font-feature-settings: \'tnum\';\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  color: #fff;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  background: "[theme:avatarBg,default:#ccc]";\n  width: "[theme:avatarSizeBase,default:32px]";\n  height: "[theme:avatarSizeBase,default:32px]";\n  line-height: "[theme:avatarSizeBase,default:32px]";\n  border-radius: 50%;\n}\n.ant-avatar-image {\n  background: transparent;\n}\n.ant-avatar-string {\n  position: absolute;\n  left: 50%;\n  transform-origin: 0 center;\n}\n.ant-avatar.ant-avatar-icon {\n  font-size: "[theme:avatarFontSizeBase,default:18px]";\n}\n.ant-avatar.ant-avatar-icon > .anticon {\n  margin: 0;\n}\n.ant-avatar-lg {\n  width: "[theme:avatarSizeLg,default:40px]";\n  height: "[theme:avatarSizeLg,default:40px]";\n  line-height: "[theme:avatarSizeLg,default:40px]";\n  border-radius: 50%;\n}\n.ant-avatar-lg-string {\n  position: absolute;\n  left: 50%;\n  transform-origin: 0 center;\n}\n.ant-avatar-lg.ant-avatar-icon {\n  font-size: "[theme:avatarFontSizeLg,default:24px]";\n}\n.ant-avatar-lg.ant-avatar-icon > .anticon {\n  margin: 0;\n}\n.ant-avatar-sm {\n  width: "[theme:avatarSizeSm,default:24px]";\n  height: "[theme:avatarSizeSm,default:24px]";\n  line-height: "[theme:avatarSizeSm,default:24px]";\n  border-radius: 50%;\n}\n.ant-avatar-sm-string {\n  position: absolute;\n  left: 50%;\n  transform-origin: 0 center;\n}\n.ant-avatar-sm.ant-avatar-icon {\n  font-size: "[theme:avatarFontSizeSm,default:14px]";\n}\n.ant-avatar-sm.ant-avatar-icon > .anticon {\n  margin: 0;\n}\n.ant-avatar-square {\n  border-radius: 2px;\n}\n.ant-avatar > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n',""]),t.exports=e}(a),a.exports}(t),r=n(81);"string"==typeof a&&(a=[[t.i,a]]);for(var o=0;o<a.length;o++)r.loadStyles(a[o][1],!1);a.locals&&(t.exports=a.locals)}).call(this,n(80)(t))},636:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var o=a?Object.getOwnPropertyDescriptor(t,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n(0)),r=s(n(23)),o=n(45),i=s(n(236));function s(t){return t&&t.__esModule?t:{default:t}}function c(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(l,t);var e,n,s,c=v(l);function l(){var t;return p(this,l),(t=c.apply(this,arguments)).state={scale:1,mounted:!1,isImgExist:!0},t.setScale=function(){if(t.avatarChildren&&t.avatarNode){var e=t.avatarChildren.offsetWidth,n=t.avatarNode.offsetWidth,a=t.props.gap,r=void 0===a?4:a;0===e||0===n||t.lastChildrenWidth===e&&t.lastNodeWidth===n||(t.lastChildrenWidth=e,t.lastNodeWidth=n),2*r<n&&t.setState({scale:n-2*r<e?(n-2*r)/e:1})}},t.handleImgLoadError=function(){var e=t.props.onError;!1!==(e?e():void 0)&&t.setState({isImgExist:!1})},t.renderAvatar=function(e){var n,o,s=e.getPrefixCls,c=t.props,l=c.prefixCls,p=c.shape,d=c.size,h=c.src,v=c.srcSet,m=c.icon,b=c.className,y=c.alt,S=c.draggable,O=g(c,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable"]);(0,i.default)(!("string"==typeof m&&m.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(m,"` at https://ant.design/components/icon"));var w=t.state,x=w.isImgExist,j=w.scale,E=(w.mounted,s("avatar",l)),k=(0,r.default)((f(n={},"".concat(E,"-lg"),"large"===d),f(n,"".concat(E,"-sm"),"small"===d),n)),P=(0,r.default)(E,b,k,(f(o={},"".concat(E,"-").concat(p),p),f(o,"".concat(E,"-image"),h&&x),f(o,"".concat(E,"-icon"),m),o)),z="number"==typeof d?{width:d,height:d,lineHeight:"".concat(d,"px"),fontSize:m?d/2:18}:{},C=t.props.children;if(h&&x)C=a.createElement("img",{src:h,draggable:S,srcSet:v,onError:t.handleImgLoadError,alt:y});else if(m)C=m;else{if(t.avatarChildren||1!==j){var _="scale(".concat(j,") translateX(-50%)"),I={msTransform:_,WebkitTransform:_,transform:_},N="number"==typeof d?{lineHeight:"".concat(d,"px")}:{};C=a.createElement("span",{className:"".concat(E,"-string"),ref:function(e){return t.avatarChildren=e},style:u(u({},N),I)},C)}else{C=a.createElement("span",{className:"".concat(E,"-string"),style:{opacity:0},ref:function(e){return t.avatarChildren=e}},C)}}return delete O.onError,delete O.gap,a.createElement("span",u({},O,{style:u(u({},z),O.style),className:P,ref:function(e){return t.avatarNode=e}}),C)},t}return e=l,(n=[{key:"componentDidMount",value:function(){this.setScale(),this.setState({mounted:!0})}},{key:"componentDidUpdate",value:function(t){t.src!==this.props.src&&this.setState({isImgExist:!0,scale:1}),t.children===this.props.children&&t.gap===this.props.gap||this.setScale()}},{key:"render",value:function(){return a.createElement(o.ConfigConsumer,null,this.renderAvatar)}}])&&d(e.prototype,n),s&&d(e,s),l}(a.Component);e.default=y,y.defaultProps={shape:"circle",size:"default"}}}]);