(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1589:function(e,a,t){},1890:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(194),r=t(106),u=t(1373),o=t(1375),m=function(){return l.a.createElement(u.a,{className:"gx-card",title:"Basic"},l.a.createElement(o.a,{placeholder:"Basic usage"}))},i=(t(1589),function(){return l.a.createElement(u.a,{className:"gx-card",title:"Three Sizes Of Input"},l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(o.a,{size:"large",placeholder:"large size"})),l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(o.a,{placeholder:"default size"})),l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(o.a,{size:"small",placeholder:"small size"})))}),s=t(1374),d=t(41),h=s.a.Option,p=l.a.createElement(s.a,{defaultValue:"Http://",style:{width:90}},l.a.createElement(h,{value:"Http://"},"Http://"),l.a.createElement(h,{value:"Https://"},"Https://")),E=l.a.createElement(s.a,{defaultValue:".com",style:{width:80}},l.a.createElement(h,{value:".com"},".com"),l.a.createElement(h,{value:".jp"},".jp"),l.a.createElement(h,{value:".cn"},".cn"),l.a.createElement(h,{value:".org"},".org")),f=function(){return l.a.createElement(u.a,{className:"gx-card",title:"Post Tab"},l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(o.a,{addonBefore:"Http://",addonAfter:".com",defaultValue:"mysite"})),l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(o.a,{addonBefore:p,addonAfter:E,defaultValue:"mysite"})),l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(o.a,{addonAfter:l.a.createElement(d.a,{type:"setting"}),defaultValue:"mysite"})))},g=o.a.Search,v=function(){return l.a.createElement(u.a,{className:"gx-card",title:"Search Box"},l.a.createElement(g,{placeholder:"input search text",onSearch:function(e){return console.log(e)},style:{width:200}}),l.a.createElement(g,{placeholder:"input search text",onSearch:function(e){return console.log(e)},enterButton:!0}),l.a.createElement(g,{placeholder:"input search text",enterButton:"Search",size:"large"}))},b=t(33),x=t(34),y=t(35),O=t(36),N=t(20),w=t(1508),j=t(1869),V=t(1579),z=t(1507);function C(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,n=Object(N.a)(e);if(a){var l=Object(N.a)(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return Object(O.a)(this,t)}}var S=o.a.Group,A=s.a.Option,B=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],H=function(e){Object(y.a)(t,e);var a=C(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={dataSource:[]},e.handleChange=function(a){e.setState({dataSource:!a||a.indexOf("@")>=0?[]:["".concat(a,"@gmail.com"),"".concat(a,"@163.com"),"".concat(a,"@qq.com")]})},e}return Object(x.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{className:"gx-card",title:"Input Groups"},l.a.createElement(S,{size:"large",className:"gx-mb-3"},l.a.createElement(r.a,{sm:5,xs:12},l.a.createElement(o.a,{defaultValue:"0571"})),l.a.createElement(r.a,{sm:8,xs:12},l.a.createElement(o.a,{defaultValue:"26888888"}))),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(o.a,{style:{width:"30%"},defaultValue:"0571"}),l.a.createElement(o.a,{style:{width:"50%"},defaultValue:"26888888"})),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(s.a,{defaultValue:"Zhejiang"},l.a.createElement(A,{value:"Zhejiang"},"Zhejiang"),l.a.createElement(A,{value:"Jiangsu"},"Jiangsu")),l.a.createElement(o.a,{style:{width:"50%"},defaultValue:"Xihu District, Hangzhou"})),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(s.a,{defaultValue:"Option1"},l.a.createElement(A,{value:"Option1"},"Option1"),l.a.createElement(A,{value:"Option2"},"Option2")),l.a.createElement(o.a,{style:{width:"50%"},defaultValue:"input content"}),l.a.createElement(w.a,null)),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(o.a,{style:{width:"50%"},defaultValue:"input content"}),l.a.createElement(j.a,null)),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(s.a,{defaultValue:"Option1-1"},l.a.createElement(A,{value:"Option1-1"},"Option1-1"),l.a.createElement(A,{value:"Option1-2"},"Option1-2")),l.a.createElement(s.a,{defaultValue:"Option2-2"},l.a.createElement(A,{value:"Option2-1"},"Option2-1"),l.a.createElement(A,{value:"Option2-2"},"Option2-2"))),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(s.a,{defaultValue:"1"},l.a.createElement(A,{value:"1"},"Between"),l.a.createElement(A,{value:"2"},"Except")),l.a.createElement(o.a,{style:{width:100,textAlign:"center"},placeholder:"Minimum"}),l.a.createElement(o.a,{className:"gx-border-lt-xs",style:{width:30,borderLeft:0,pointerEvents:"none",backgroundColor:"#fff"},placeholder:"~",disabled:!0}),l.a.createElement(o.a,{className:"gx-border-lt-xs",style:{width:100,textAlign:"center",borderLeft:0},placeholder:"Maximum"})),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(s.a,{defaultValue:"Sign Up"},l.a.createElement(A,{value:"Sign Up"},"Sign Up"),l.a.createElement(A,{value:"Sign In"},"Sign In")),l.a.createElement(V.a,{dataSource:this.state.dataSource,style:{width:200},onChange:this.handleChange,placeholder:"Email"})),l.a.createElement(S,{compact:!0,className:"gx-mb-3"},l.a.createElement(s.a,{style:{width:"30%"},defaultValue:"Home"},l.a.createElement(A,{value:"Home"},"Home"),l.a.createElement(A,{value:"Company"},"Company")),l.a.createElement(z.a,{style:{width:"70%"},options:B,placeholder:"Select Address"})))}}]),t}(n.Component),R=o.a.TextArea,k=function(){return l.a.createElement(u.a,{className:"gx-card",title:"Autosizing The Height"},l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(R,{placeholder:"Autosize height based on content lines",autosize:!0})),l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(R,{placeholder:"Autosize height with minimum and maximum number of lines",autosize:{minRows:2,maxRows:6}})))},I=o.a.TextArea,T=function(){return l.a.createElement(u.a,{className:"gx-card",title:"Text Areas"},l.a.createElement(I,{rows:4}))},J=t(225);function L(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,n=Object(N.a)(e);if(a){var l=Object(N.a)(this).constructor;t=Reflect.construct(n,arguments,l)}else t=n.apply(this,arguments);return Object(O.a)(this,t)}}var Z=function(e){Object(y.a)(t,e);var a=L(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).onChange=function(a){var t=a.target.value;(!isNaN(t)&&/^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/.test(t)||""===t||"-"===t)&&e.props.onChange(t)},e.onBlur=function(){var a=e.props,t=a.value,n=a.onBlur,l=a.onChange;"."!==t.charAt(t.length-1)&&"-"!==t||l({value:t.slice(0,-1)}),n&&n()},e}return Object(x.a)(t,[{key:"render",value:function(){var e=this.props.value,a=e?l.a.createElement("span",{className:"numeric-input-title"},"-"!==e?function(e){for(var a=(e+="").split("."),t="-"===a[0].charAt(0)?"-":"",n=t?a[0].slice(1):a[0],l="";n.length>3;)l=",".concat(n.slice(-3)).concat(l),n=n.slice(0,n.length-3);return n&&(l=n+l),"".concat(t).concat(l).concat(a[1]?".".concat(a[1]):"")}(e):"-"):"Input a number";return l.a.createElement(J.a,{trigger:["focus"],title:a,placement:"topLeft",overlayClassName:"numeric-input"},l.a.createElement(o.a,Object.assign({},this.props,{onChange:this.onChange,onBlur:this.onBlur,placeholder:"Input a number",maxLength:25})))}}]),t}(n.Component),M=function(e){Object(y.a)(t,e);var a=L(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).onChange=function(e){n.setState({value:e})},n.state={value:""},n}return Object(x.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{className:"gx-card",title:"Numeric Input Demo"},l.a.createElement(Z,{style:{width:120},value:this.state.value,onChange:this.onChange}))}}]),t}(n.Component);a.default=function(){return l.a.createElement(c.a,null,l.a.createElement(r.a,{lg:24,md:24,sm:24,xs:24},l.a.createElement(H,null)),l.a.createElement(r.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m,null),l.a.createElement(i,null),l.a.createElement(f,null),l.a.createElement(v,null)),l.a.createElement(r.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(k,null),l.a.createElement(T,null),l.a.createElement(M,null)))}}}]);
//# sourceMappingURL=48.ffbe674e.chunk.js.map