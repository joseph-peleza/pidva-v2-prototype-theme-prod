(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1416:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},1453:function(e,t,n){"use strict";var r=n(0),o=n(4),a=n.n(o),c=n(21),l=n(10),i=n(41),u=n(96);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,r["Component"]);var t,n,o,c=b(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.apply(this,arguments)).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,o=t.getPrefixCls,c=e.props,l=c.prefixCls,i=c.className,u=c.checked,s=g(c,["prefixCls","className","checked"]),y=o("tag",l),h=a()(y,(p(n={},"".concat(y,"-checkable"),!0),p(n,"".concat(y,"-checkable-checked"),u),n),i);return delete s.onChange,r.createElement("span",f({},s,{className:h,onClick:e.handleClick}))},e}return t=l,(n=[{key:"render",value:function(){return r.createElement(u.a,null,this.renderCheckableTag)}}])&&y(t.prototype,n),o&&y(t,o),l}(),d=n(402),O=n(43),C=n(398);function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=new RegExp("^(".concat(d.a.join("|"),")(-inverse)?$")),I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(s,r["Component"]);var t,n,o,l=S(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={visible:!0},t.handleIconClick=function(e){e.stopPropagation(),t.setVisible(!1,e)},t.renderTag=function(e){var n=t.props,o=n.children,a=T(n,["children"]),l="onClick"in a||o&&"a"===o.type,i=Object(c.default)(a,["onClose","afterClose","color","visible","closable","prefixCls"]);return l?r.createElement(C.a,null,r.createElement("span",w({},i,{className:t.getTagClassName(e),style:t.getTagStyle()}),o,t.renderCloseIcon())):r.createElement("span",w({},i,{className:t.getTagClassName(e),style:t.getTagStyle()}),o,t.renderCloseIcon())},Object(O.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),t}return t=s,o=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(n=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return w({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,o=r.prefixCls,c=r.className,l=r.color,i=this.state.visible,u=this.isPresetColor(),s=n("tag",o);return a()(s,(j(t={},"".concat(s,"-").concat(l),u),j(t,"".concat(s,"-has-color"),l&&!u),j(t,"".concat(s,"-hidden"),!i),t),c)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,o=n.afterClose;r&&r(t),o&&!r&&o(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&x.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(i.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderTag)}}])&&k(t.prototype,n),o&&k(t,o),s}();I.CheckableTag=v,I.defaultProps={closable:!1},Object(l.polyfill)(I);t.a=I},1930:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n(34),a=n(35),c=n(36),l=n(20),i=n(0),u=n.n(i),s=n(194),f=n(106),p=n(1373),y=n(1453),h=function(){return u.a.createElement(p.a,{title:"Basic",className:"gx-card"},u.a.createElement(y.a,null,"Tag 1"),u.a.createElement(y.a,null,u.a.createElement("a",{href:"https://github.com/ant-design/ant-design/issues/1862"},"Link")),u.a.createElement(y.a,{closable:!0,onClose:function(e){console.log(e)}},"Tag 2"),u.a.createElement(y.a,{closable:!0,onClose:function(e){e.preventDefault(),console.log("Clicked! But prevent DashTwo.")}},"Prevent Default"))},b=function(){return u.a.createElement(p.a,{title:"Color Tag",className:"gx-card"},u.a.createElement("h4",{style:{marginBottom:16}},"Presets:"),u.a.createElement("div",null,u.a.createElement(y.a,{color:"magenta"},"magenta"),u.a.createElement(y.a,{color:"red"},"red"),u.a.createElement(y.a,{color:"volcano"},"volcano"),u.a.createElement(y.a,{color:"orange"},"orange"),u.a.createElement(y.a,{color:"gold"},"gold"),u.a.createElement(y.a,{color:"lime"},"lime"),u.a.createElement(y.a,{color:"green"},"green"),u.a.createElement(y.a,{color:"cyan"},"cyan"),u.a.createElement(y.a,{color:"blue"},"blue"),u.a.createElement(y.a,{color:"geekblue"},"geekblue"),u.a.createElement(y.a,{color:"purple"},"purple")),u.a.createElement("h4",{style:{margin:"16px 0"}},"Custom:"),u.a.createElement("div",null,u.a.createElement(y.a,{color:"#f50"},"#f50"),u.a.createElement(y.a,{color:"#2db7f5"},"#2db7f5"),u.a.createElement(y.a,{color:"#87d068"},"#87d068"),u.a.createElement(y.a,{color:"#108ee9"},"#108ee9")))},m=n(1416),g=n(225),v=n(1375),d=n(41);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var C=function(e){Object(a.a)(n,e);var t=O(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""},e.handleClose=function(t){var n=e.state.tags.filter(function(e){return e!==t});console.log(n),e.setState({tags:n})},e.showInput=function(){e.setState({inputVisible:!0},function(){return e.input.focus()})},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.handleInputConfirm=function(){var t=e.state,n=t.inputValue,r=t.tags;n&&-1===r.indexOf(n)&&(r=[].concat(Object(m.a)(r),[n])),console.log(r),e.setState({tags:r,inputVisible:!1,inputValue:""})},e.saveInputRef=function(t){return e.input=t},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.tags,r=t.inputVisible,o=t.inputValue;return u.a.createElement(p.a,{title:"Dynamic",className:"gx-card"},n.map(function(t,n){var r=t.length>20,o=u.a.createElement(y.a,{key:t,closable:0!==n,afterClose:function(){return e.handleClose(t)}},r?"".concat(t.slice(0,20),"..."):t);return r?u.a.createElement(g.a,{title:t,key:t},o):o}),r&&u.a.createElement(v.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:o,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!r&&u.a.createElement(y.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},u.a.createElement(d.a,{type:"plus"})," New Tag"))}}]),n}(u.a.Component);function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var j=y.a.CheckableTag,w=["Movies","Books","Music","Sports"],k=function(e){Object(a.a)(n,e);var t=E(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedTags:[]},e}return Object(o.a)(n,[{key:"handleChange",value:function(e,t){var n=this.state.selectedTags,r=t?[].concat(Object(m.a)(n),[e]):n.filter(function(t){return t!==e});console.log("You are interested in: ",r),this.setState({selectedTags:r})}},{key:"render",value:function(){var e=this,t=this.state.selectedTags;return u.a.createElement(p.a,{title:"Hot Tag",className:"gx-card"},u.a.createElement("h6",{style:{marginRight:8,display:"inline"}},"Categories:"),w.map(function(n){return u.a.createElement(j,{key:n,checked:t.indexOf(n)>-1,onChange:function(t){return e.handleChange(n,t)}},n)}))}}]),n}(u.a.Component);function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var S=function(e){Object(a.a)(n,e);var t=P(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement(s.a,null,u.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},u.a.createElement(h,null),u.a.createElement(b,null)),u.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},u.a.createElement(C,null),u.a.createElement(k,null)))}}]),n}(i.Component);t.default=S}}]);
//# sourceMappingURL=42.e25eb867.chunk.js.map