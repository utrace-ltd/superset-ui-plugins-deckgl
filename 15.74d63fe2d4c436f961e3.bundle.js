(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{761:function(e,t,i){"use strict";var a=i(0),o=i.n(a),n=i(2),r=i.n(n),s=i(792),l=i(759),c=i(712),u=i(765),d=i(762),p=i(752),h=i(763),g=i(746),f=i(756);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function b(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const{getScale:y}=c.a;const v={formData:r.a.object.isRequired,mapboxApiKey:r.a.string.isRequired,setControlValue:r.a.func.isRequired,viewport:r.a.object.isRequired,getLayer:r.a.func.isRequired,getPoints:r.a.func.isRequired,payload:r.a.object.isRequired,onAddFilter:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired};class x extends o.a.PureComponent{constructor(e){super(e),b(this,"containerRef",o.a.createRef()),b(this,"setTooltip",e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)}),this.state=this.getStateFromProps(e),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(e){e.payload.form_data!==this.state.formData&&this.setState(m({},this.getStateFromProps(e)))}onValuesChange(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}getStateFromProps(e,t){const i=e.payload.data.features||[],a=i.map(e=>e.__timestamp),o=function(e,t){const i=e.color_picker||{r:0,g:0,b:0,a:1},a=[i.r,i.g,i.b,255*i.a],o=y(e.color_scheme),n={};return t.forEach(t=>{if(null!=t.cat_color&&!n.hasOwnProperty(t.cat_color)){let r;r=e.dimension?Object(p.hexToRGB)(o(t.cat_color),255*i.a):a,n[t.cat_color]={color:r,enabled:!0}}}),n}(e.formData,i);if(t&&e.payload.form_data===t.formData)return m({},t,{categories:o});const n=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",{start:r,end:s,getStep:l,values:c,disabled:u}=Object(h.a)(a,n),{width:d,height:g,formData:b}=e;let{viewport:v}=e;return b.autozoom&&(v=Object(f.a)(v,{width:d,height:g,points:e.getPoints(i)})),{start:r,end:s,getStep:l,values:c,disabled:u,viewport:v,selected:[],lastClick:0,formData:e.payload.form_data,categories:o}}getLayers(e){const{getLayer:t,payload:i,formData:a,onAddFilter:o}=this.props;let n=i.data.features?[...i.data.features]:[];if(n=this.addColor(n,a),a.js_data_mutator){n=Object(g.a)(a.js_data_mutator)(n)}n=e[0]===e[1]||e[1]===this.end?n.filter(t=>t.__timestamp>=e[0]&&t.__timestamp<=e[1]):n.filter(t=>t.__timestamp>=e[0]&&t.__timestamp<e[1]);const r=this.state.categories;return a.dimension&&(n=n.filter(e=>r[e.cat_color]&&r[e.cat_color].enabled)),[t(a,m({},i,{data:m({},i.data,{features:n})}),o,this.setTooltip)]}addColor(e,t){const i=t.color_picker||{r:0,g:0,b:0,a:1},a=y(t.color_scheme);return e.map(e=>{let o;return t.dimension?(o=Object(p.hexToRGB)(a(e.cat_color),255*i.a),m({},e,{color:o})):e})}toggleCategory(e){const t=this.state.categories[e],i=m({},this.state.categories,{[e]:m({},t,{enabled:!t.enabled})});Object.values(i).every(e=>!e.enabled)&&Object.values(i).forEach(e=>{e.enabled=!0}),this.setState({categories:i})}showSingleCategory(e){const t=m({},this.state.categories);Object.values(t).forEach(e=>{e.enabled=!1}),t[e].enabled=!0,this.setState({categories:t})}render(){return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(u.a,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},o.a.createElement(d.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}x.propTypes=v,i.d(t,"b",(function(){return S})),i.d(t,"a",(function(){return j}));const w={formData:r.a.object.isRequired,payload:r.a.object.isRequired,setControlValue:r.a.func.isRequired,viewport:r.a.object.isRequired,onAddFilter:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired},P={onAddFilter(){}};function S(e,t){class i extends o.a.PureComponent{constructor(e){super(e),_(this,"containerRef",o.a.createRef()),_(this,"setTooltip",e=>{const{current:t}=this.containerRef;t&&t.setTooltip(e)});const{width:i,height:a,formData:n}=e;let{viewport:r}=e;n.autozoom&&(r=Object(f.a)(r,{width:i,height:a,points:t(e.payload.data.features)})),this.state={viewport:r,layer:this.computeLayer(e)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(e){const t=C({},e.formData,{viewport:null}),i=C({},this.props.formData,{viewport:null});Object(s.isEqual)(t,i)&&e.payload===this.props.payload||this.setState({layer:this.computeLayer(e)})}onViewportChange(e){this.setState({viewport:e})}computeLayer(t){const{formData:i,payload:a,onAddFilter:o}=t;return e(i,a,o,this.setTooltip)}render(){const{formData:e,payload:t,setControlValue:i,height:a,width:n}=this.props,{layer:r,viewport:s}=this.state;return o.a.createElement(l.a,{ref:this.containerRef,mapboxApiAccessToken:t.data.mapboxApiKey,viewport:s,layers:[r],mapStyle:e.mapbox_style,setControlValue:i,width:n,height:a,onViewportChange:this.onViewportChange})}}return i.propTypes=w,i.defaultProps=P,i}function j(e,t){function i(i){const{formData:a,payload:n,setControlValue:r,viewport:s,width:l,height:c}=i;return o.a.createElement(x,{formData:a,mapboxApiKey:n.data.mapboxApiKey,setControlValue:r,viewport:s,getLayer:e,payload:n,getPoints:t,width:l,height:c})}return i.propTypes=w,i.defaultProps=P,i}},762:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var a=i(0),o=i.n(a),n=i(2),r=i.n(n),s=i(1102);i(766);const l={categories:r.a.object,toggleCategory:r.a.func,showSingleCategory:r.a.func,format:r.a.string,position:r.a.oneOf([null,"tl","tr","bl","br"])};class c extends o.a.PureComponent{format(e){if(!this.props.format)return e;const t=parseFloat(e);return Object(s.a)(this.props.format,t)}formatCategoryLabel(e){if(!this.props.format)return e;if(e.includes(" - ")){const t=e.split(" - ");return this.format(t[0])+" - "+this.format(t[1])}return this.format(e)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const e=Object.entries(this.props.categories).map(e=>{let[t,i]=e;const a={color:"rgba("+i.color.join(", ")+")"},n=i.enabled?"◼":"◻";return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(t),onDoubleClick:()=>this.props.showSingleCategory(t)},o.a.createElement("span",{style:a},n)," ",this.formatCategoryLabel(t)))}),t={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return o.a.createElement("div",{className:"legend",style:t},o.a.createElement("ul",{className:"categories"},e))}}c.propTypes=l,c.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},766:function(e,t,i){var a=i(342),o=i(767);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1},r=(a(o,n),o.locals?o.locals:{});e.exports=r},767:function(e,t,i){(t=i(343)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n  font-size: 90%;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n  margin: 24px;\n  padding: 12px 20px;\n  outline: none;\n  overflow-y: scroll;\n  max-height: 200px;\n}\n\nul.categories {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n\nul.categories li a {\n  color: rgb(51, 51, 51);\n  text-decoration: none;\n}\n\nul.categories li a span {\n  margin-right: 10px;\n}\n',""]),e.exports=t},855:function(e,t,i){"use strict";var a=i(735),o=i(736),n=i(738),r=i(737),s=i(747),l=i(739),c=i(839),u=i(815),d=i(1132),p=i(963),h=i(880);i.d(t,"a",(function(){return b}));var g=d.a.fp64LowPart,f=[0,0,0,255],m={radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,fp64:!1,filled:!0,getPosition:{type:"accessor",value:function(e){return e.position}},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:f},getLineColor:{type:"accessor",value:f},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}},b=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"getShaders",value:function(e){return{vs:"#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  float outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity) / 255.;\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity) / 255.;\n  picking_setPickingColor(instancePickingColors);\n}\n",fs:"#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0) {\n    discard;\n  } \n  if (distToCenter > innerUnitRadius) {\n    gl_FragColor = vLineColor;\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n",modules:[this.use64bitProjection()?"project64":"project32","picking"]}}},{key:"initializeState",value:function(){this.getAttributeManager().addInstanced({instancePositions:{size:3,transition:!0,accessor:"getPosition"},instancePositions64xyLow:{size:2,accessor:"getPosition",update:this.calculateInstancePositions64xyLow},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:4,transition:!0,type:5121,accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:5121,accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}},{key:"updateState",value:function(e){var i=e.props,a=e.oldProps,o=e.changeFlags;if(Object(s.a)(Object(r.a)(t.prototype),"updateState",this).call(this,{props:i,oldProps:a,changeFlags:o}),i.fp64!==a.fp64){var n=this.context.gl;this.state.model&&this.state.model.delete(),this.setState({model:this._getModel(n)}),this.getAttributeManager().invalidateAll()}}},{key:"draw",value:function(e){var t=e.uniforms,i=this.context.viewport,a=this.props,o=a.radiusScale,n=a.radiusMinPixels,r=a.radiusMaxPixels,s=a.stroked,l=a.filled,c=a.lineWidthUnits,u=a.lineWidthScale,d=a.lineWidthMinPixels,p=a.lineWidthMaxPixels,h="pixels"===c?i.distanceScales.metersPerPixel[2]:1;this.state.model.setUniforms(Object.assign({},t,{stroked:s?1:0,filled:l,radiusScale:o,radiusMinPixels:n,radiusMaxPixels:r,lineWidthScale:u*h,lineWidthMinPixels:d,lineWidthMaxPixels:p})).draw()}},{key:"_getModel",value:function(e){return new p.a(e,Object.assign(this.getShaders(),{id:this.props.id,geometry:new h.a({drawMode:6,vertexCount:4,attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,-1,1,0,1,1,0,1,-1,0])}}}),isInstanced:!0,shaderCache:this.context.shaderCache}))}},{key:"calculateInstancePositions64xyLow",value:function(e,t){var i=t.startRow,a=t.endRow,o=this.use64bitPositions();if(e.constant=!o,o){var n=this.props,r=n.data,s=n.getPosition,l=e.value,u=i*e.size,d=Object(c.a)(r,i,a),p=d.iterable,h=d.objectInfo,f=!0,m=!1,b=void 0;try{for(var y,v=p[Symbol.iterator]();!(f=(y=v.next()).done);f=!0){var x=y.value;h.index++;var C=s(x,h);l[u++]=g(C[0]),l[u++]=g(C[1])}}catch(e){m=!0,b=e}finally{try{f||null==v.return||v.return()}finally{if(m)throw b}}}else e.value=new Float32Array(2)}}]),t}(u.a);b.layerName="ScatterplotLayer",b.defaultProps=m},970:function(e,t,i){"use strict";i.r(t);var a=i(855),o=i(0),n=i.n(o),r=i(711),s=i(751),l=i(761),c=i(753);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function d(e,t,i,o){const l=e,d=t.data.features.map(e=>{let t=(i=l.point_unit,a=e.radius,("square_m"===i?Math.sqrt(a/Math.PI):"radius_m"===i?a:"radius_km"===i?1e3*a:"radius_miles"===i?1609.34*a:"square_km"===i?1e3*Math.sqrt(a/Math.PI):"square_miles"===i?1609.34*Math.sqrt(a/Math.PI):null)||10);var i,a;if(l.multiplier&&(t*=l.multiplier),e.color)return u({},e,{radius:t});const o=l.color_picker||{r:0,g:0,b:0,a:1};return u({},e,{radius:t,color:[o.r,o.g,o.b,255*o.a]})});return new a.a(u({id:"scatter-layer-"+l.slice_id,data:d,fp64:!0,getFillColor:e=>e.color,getRadius:e=>e.radius,radiusMinPixels:l.min_radius||null,radiusMaxPixels:l.max_radius||null,stroked:!1},Object(s.a)(l,o,function(e){return t=>n.a.createElement("div",{className:"deckgl-tooltip"},n.a.createElement(c.a,{label:Object(r.b)("Longitude and Latitude")+": ",value:t.object.position[0]+", "+t.object.position[1]}),t.object.cat_color&&n.a.createElement(c.a,{label:Object(r.b)("Category")+": ",value:""+t.object.cat_color}),t.object.metric&&n.a.createElement(c.a,{label:e.point_radius_fixed.value.label+": ",value:""+t.object.metric}))}(l))))}i.d(t,"getLayer",(function(){return d}));t.default=Object(l.a)(d,(function(e){return e.map(e=>e.position)}))}}]);