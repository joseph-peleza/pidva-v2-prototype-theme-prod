(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1394:function(e,t,a){"undefined"!==typeof window?(window.React=a(0),window.ReactDOM=a(11),window.createReactClass=a(290),a(1397),e.exports=window.AmCharts):e.exports={}},1397:function(e,t){!function(){function e(e){return{}.toString.call(e)}function t(e,t){return{}.hasOwnProperty.call(e,t)}function a(r){switch(e(r)){case"[object Array]":return function(e){for(var t=e.length,r=new Array(t),n=0;n<t;++n)r[n]=a(e[n]);return r}(r);case"[object Object]":return function(e){var r={};for(var n in e)t(e,n)&&(r[n]=a(e[n]));return r}(r);case"[object Date]":return new Date(r.getTime());default:return r}}function r(e){return e!==e}function n(e,t,a){if(t!==a){null==t&&(t=[]),null==a&&(a=[]);for(var r=t.length,n=a.length,i=0;i<r;++i){for(var o=t[i],s=!1,l=0;l<n;++l){var c=a[l];if(o.event===c.event&&o.method===c.method){s=!0;break}}s||e.removeListener(e,o.event,o.method)}}}function i(n,s,l,c){var h=!1;if(l!==c&&t(n,s)){var u=e(l);if(u===e(c))switch(u){case"[object Array]":"groupToPeriods"===s?(n[s]=a(c),h=!0):function(e,t,r){var n=!1;if(t!==r){var o=t.length,s=r.length;o!==s&&(e.length=s,n=!0);for(var l=0;l<s;++l)l<o?i(e,l,t[l],r[l])&&(n=!0):(e[l]=a(r[l]),n=!0)}return n}(n[s],l,c)&&(h=!0);break;case"[object Object]":o(n[s],l,c)&&(h=!0);break;case"[object Date]":l.getTime()!==c.getTime()&&(n[s]=a(c),h=!0);break;case"[object Number]":(function(e,t){return e===t||r(e)&&r(t)})(l,c)||(n[s]=a(c),h=!0);break;default:n[s]=a(c),h=!0}else n[s]=a(c),h=!0}return h}function o(e,r,o){var s=!1;if(r!==o){for(var l in o)t(o,l)&&(t(r,l)?("listeners"===l&&n(e,r[l],o[l]),i(e,l,r[l],o[l])&&(s=!0)):(e[l]=a(o[l]),s=!0));for(var l in r)t(r,l)&&!t(o,l)&&("listeners"===l&&n(e,r[l],[]),delete e[l],s=!0)}return s}var s=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++s+"__",chart:null}},componentDidMount:function(){var e=a(this.props.options),t=AmCharts.makeChart(this.state.id,e,this.props.delay);this.setState({chart:t})},componentDidUpdate:function(e){this.state.chart&&(o(this.state.chart,e.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},1974:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(1373),o=a(1394),s=a.n(o),l=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(s.a.React,{style:{width:"100%",height:"500px"},options:{type:"map",theme:"none",dataProvider:{map:"worldLow",zoomLevel:5.5,zoomLongitude:10,zoomLatitude:52,images:[{latitude:40.416775,longitude:-3.70379,imageURL:"https://www.amcharts.com/images/weather/weather-rain.png",width:32,height:32,label:"Madrid: +22C"},{latitude:48.856614,longitude:2.352222,imageURL:"https://www.amcharts.com/images/weather/weather-storm.png",width:32,height:32,label:"Paris: +18C"},{latitude:52.520007,longitude:13.404954,imageURL:"https://www.amcharts.com/images/weather/weather-clouds.png",width:32,height:32,label:"Berlin: +13C"},{latitude:52.229676,longitude:21.012229,imageURL:"https://www.amcharts.com/images/weather/weather-clear.png",width:32,height:32,label:"Warsaw: +22C"},{latitude:41.872389,longitude:12.48018,imageURL:"https://www.amcharts.com/images/weather/weather-clear.png",width:32,height:32,label:"Rome: +29C"},{latitude:51.507351,longitude:-.127758,imageURL:"https://www.amcharts.com/images/weather/weather-showers.png",width:32,height:32,label:"London: +10C"},{latitude:59.329323,longitude:18.068581,imageURL:"https://www.amcharts.com/images/weather/weather-rain.png",width:32,height:32,label:"Stockholm: +8C"}]},imagesSettings:{labelRollOverColor:"#000",labelPosition:"bottom"},areasSettings:{rollOverOutlineColor:"#FFFFFF",rollOverColor:"#CC0000",alpha:.8},export:{enabled:!0}}}))},c=a(2);t.default=function(){return n.a.createElement(i.a,{className:"gx-card",title:n.a.createElement(c.a,{id:"sidebar.map.bubbles"})},n.a.createElement(l,null))}}}]);
//# sourceMappingURL=71.4cb48d91.chunk.js.map