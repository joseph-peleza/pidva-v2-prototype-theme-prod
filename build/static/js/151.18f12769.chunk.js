(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1978:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(1373),c=n(33),i=n(34),l=n(35),u=n(36),s=n(20),d=n(1409),f=n(1459),m=n.n(f),p=n(45),h=n.n(p);function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(u.a)(this,n)}}var v=m.a&&navigator.geolocation?navigator.geolocation:{getCurrentPosition:function(t,e){e("Your browser doesn't support geolocation.")}},y=Object(d.withGoogleMap)(function(t){return r.a.createElement(d.GoogleMap,{defaultZoom:10,center:t.center},t.center&&r.a.createElement(d.InfoWindow,{position:t.center},r.a.createElement("div",null,t.content)),t.center&&r.a.createElement(d.Circle,{center:t.center,radius:t.radius,options:{fillColor:"red",fillOpacity:.2,strokeColor:"red",strokeOpacity:1,strokeWeight:1}}))}),E=function(t){Object(l.a)(n,t);var e=g(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={center:null,content:null,radius:6e3},t.isUnmounted=!1,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=function e(){t.isUnmounted||(t.setState({radius:Math.max(t.state.radius-20,0)}),t.state.radius>200&&h()(e))};v.getCurrentPosition(function(n){t.isUnmounted||(t.setState({center:{lat:n.coords.latitude,lng:n.coords.longitude},content:"Location found using HTML5."}),h()(e))},function(e){t.isUnmounted||t.setState({center:{lat:60,lng:105},content:"Error: The Geolocation service failed (".concat(e,").")})})}},{key:"componentWillUnmount",value:function(){this.isUnmounted=!0}},{key:"render",value:function(){return r.a.createElement(y,{loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"550px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),center:this.state.center,content:this.state.content,radius:this.state.radius})}}]),n}(o.Component),b=n(2);e.default=function(){return r.a.createElement(a.a,{className:"gx-card",title:r.a.createElement(b.a,{id:"sidebar.map.geoLocation"})},r.a.createElement(E,null))}}}]);
//# sourceMappingURL=151.18f12769.chunk.js.map