"use strict";var e=require("@babel/runtime/helpers/typeof"),t=require("@babel/runtime/helpers/classCallCheck"),a=require("@babel/runtime/helpers/createClass"),n=require("@babel/runtime/helpers/assertThisInitialized"),l=require("@babel/runtime/helpers/inherits"),s=require("@babel/runtime/helpers/possibleConstructorReturn"),i=require("@babel/runtime/helpers/getPrototypeOf"),r=require("react"),o=require("prop-types"),u=require("@babel/runtime/regenerator"),d=require("@babel/runtime/helpers/asyncToGenerator"),c=require("@babel/runtime/helpers/slicedToArray"),f=require("pdfjs-dist"),m=require("pdfjs-dist/build/pdf.worker.entry"),h=require("@babel/runtime/helpers/defineProperty");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("react-modal");var g=p(e),b=p(t),v=p(a),R=p(n),E=p(l),y=p(s),k=p(i),x=p(r),w=p(o),C=p(u),N=p(d),S=p(c),q=p(f),P=p(m),Z=p(h),T=function(e){var t=e.message;return x.default.createElement("div",{className:"columns has-text-danger has-margin-top-5 is-mobile"},x.default.createElement("div",{className:"column is-4 has-text-right has-padding-5"},x.default.createElement("span",{className:"icon"},x.default.createElement("i",{className:"material-icons"},"error_outline"))),x.default.createElement("div",{className:"column is-8 has-text-left has-padding-5"},x.default.createElement("small",null,t)))};T.propTypes={message:w.default.string.isRequired},q.default.GlobalWorkerOptions.workerSrc=P.default;var O=null,B=function(e){var t=e.document,a=e.withCredentials,n=e.password,l=e.pageNum,s=e.scale,i=e.rotation,o=e.pageCount,u=e.changePage,d=e.showThumbnail,c=e.protectContent,f=e.watermark,m=e.alert,h=e.canvasCss,p=e.setThumbnails,g=r.useState({status:!1,message:""}),b=S.default(g,2),v=b[0],R=b[1],E=r.useRef(null),y=r.useRef(null),k=r.useRef(null),w=r.useRef(!0),P=r.useState([]),Z=S.default(P,2),B=Z[0],A=Z[1],I=r.useState([]),j=S.default(I,2),D=j[0],L=j[1],_=m||T,z=function(){var e=N.default(C.default.mark((function e(){var l;return C.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l={withCredentials:a,password:n},null==t.url?l.data=atob(t.base64):l.url=t.url,e.next=5,q.default.getDocument(l).promise;case 5:return O=e.sent,e.next=8,M();case 8:return e.next=10,F();case 10:H(),o(O.numPages),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.warn("Error while opening the document !\n",e.t0),R({status:!0,message:"Error while opening the document !"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=N.default(C.default.mark((function e(){var t,a,n,r,o,u,d,c,m,h,p,g,b,v,y;return C.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getPage(l);case 3:return t=e.sent,a=t.getViewport({scale:s,rotation:i}),(n=E.current).height=a.height,n.width=a.width,r=n.getContext("2d"),o={canvasContext:r,viewport:a},u=t.render(o),e.prev=11,e.next=14,u.promise;case 14:0!==Object.entries(f).length&&(d=f.text,c=f.diagonal,m=f.opacity,h=f.font,p=f.size,g=f.color,r.globalAlpha=m,r.font="".concat(p*s,"px ").concat(""!==h?h:"Comic Sans MS"),r.fillStyle=g,b=r.measureText(d),v=b.width,y=p*s,r.translate(a.width/2,a.height/2),c&&r.rotate(-.785),r.fillText(d,-v/2,y/2)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(11),console.warn("Error occured while rendering !\n",e.t0),R({status:!0,message:"Error occured while rendering !"});case 21:e.next=27;break;case 23:e.prev=23,e.t1=e.catch(0),console.warn("Error while reading the pages !\n",e.t1),R({status:!0,message:"Error while reading the pages !"});case 27:case"end":return e.stop()}}),e,null,[[0,23],[11,17]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=N.default(C.default.mark((function e(){var t,a,n,l,s,i,r,o,u,c,m,h,p,g,b,v,R,E,k;return C.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.entries(d).length){e.next=26;break}t=[],a=.1,n=0,1<=d.scale&&d.scale<=5&&(a=d.scale/10),-90!==d.rotationAngle&&90!==d.rotationAngle||(n=d.rotationAngle),l=1;case 7:if(!(l<=O.numPages)){e.next=25;break}return e.next=10,O.getPage(l);case 10:return s=e.sent,i=s.getViewport({scale:a,rotation:n}),(r=y.current).height=i.height,r.width=i.width,o=r.getContext("2d"),u={canvasContext:o,viewport:i},c=s.render(u),e.next=20,c.promise;case 20:0!==Object.entries(f).length&&(m=f.text,h=f.diagonal,p=f.opacity,g=f.font,b=f.size,v=f.color,o.globalAlpha=p,o.font="".concat(b*a,"px ").concat(""!==g?g:"Comic Sans MS"),o.fillStyle=v,R=o.measureText(m),E=R.width,k=b*a,o.translate(i.width/2,i.height/2),h&&o.rotate(-.785),o.fillText(m,-E/2,k/2)),t.push({image:r.toDataURL("image/png"),height:i.height,width:i.width});case 22:l++,e.next=7;break;case 25:L(t);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){if(0!==Object.entries(d).length){for(var e=[],t=function(t){var a=D[t-1].image,n=D[t-1].height,s=D[t-1].width;e.push(x.default.createElement("img",{style:l===t?{height:n,width:s,display:"flex",cursor:"pointer",margin:"10px 15px",border:"5px solid red"}:{height:n,width:s,display:"flex",cursor:"pointer",margin:"10px 15px",boxShadow:"rgba(0, 0, 0, 0.6) 0px 2px 2px 0px"},onClick:function(){return u(t)},ref:l===t?k:null,key:t,alt:"thumbnail of page ".concat(t),src:a}))},a=1;a<=D.length;a++)t(a);e.push(x.default.createElement("div",{key:0,style:{padding:"0px 10px"}})),A(e),p(e)}};return r.useEffect((function(){z()}),[t,n]),r.useEffect((function(){w.current?w.current=!1:(M(),H())}),[l,s,i,o]),r.useEffect((function(){null!==k.current&&0!==Object.entries(d).length&&k.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})})),v.status?(o(-1),x.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},x.default.createElement(_,{message:v.message}))):0!==Object.entries(d).length?x.default.createElement(x.default.Fragment,null,x.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},x.default.createElement("canvas",{onContextMenu:function(e){return c?e.preventDefault():null},ref:E,width:"undefined"!=typeof window&&window.innerWidth,height:"undefined"!=typeof window&&window.innerHeight})),x.default.createElement("div",{style:{backgroundColor:"#EAE6DA",display:"flex",flexDirection:"row",overflowX:"auto"}},B),x.default.createElement("canvas",{ref:y,style:{display:"None"}})):x.default.createElement(x.default.Fragment,null,x.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},x.default.createElement("canvas",{onContextMenu:function(e){return c?e.preventDefault():null},ref:E,width:"undefined"!=typeof window&&window.innerWidth,height:"undefined"!=typeof window&&window.innerHeight})))};B.propTypes={document:w.default.any.isRequired,withCredentials:w.default.bool,password:w.default.string,pageNum:w.default.number.isRequired,scale:w.default.number.isRequired,rotation:w.default.number.isRequired,changePage:w.default.func,pageCount:w.default.func,showThumbnail:w.default.shape({scale:w.default.number,rotationAngle:w.default.number}),protectContent:w.default.bool,watermark:w.default.shape({text:w.default.string,diagonal:w.default.bool,opacity:w.default.string,size:w.default.string,color:w.default.string}),canvasCss:w.default.string,setThumbnails:w.default.func.isRequired},B.defaultProps={changePage:function(){},pageCount:function(){},showThumbnail:{},protectContent:!1,watermark:{},canvasCss:""};var A=function(e){var t=e.css,a=e.page,n=e.pages,l=e.handleNextClick,s=t||"button is-black is-marginless";return a===n?x.default.createElement("button",{className:s,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))):x.default.createElement("button",{className:s,onClick:l},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"keyboard_arrow_right")))};A.propTypes={css:w.default.string,page:w.default.number.isRequired,pages:w.default.number.isRequired,handleNextClick:w.default.func.isRequired};var I=function(e){var t=e.css,a=e.page,n=e.pages,l=t||"is-size-7 is-vcentered has-text-centered is-inline-flex has-padding-top-5 button is-black is-marginless has-margin-left-5 has-margin-right-5";return x.default.createElement("span",{className:l},"Page ".concat(a," / ").concat(n))};I.propTypes={css:w.default.string,page:w.default.number.isRequired,pages:w.default.number.isRequired};var j=function(e){var t=e.css,a=e.page,n=e.handlePrevClick,l=t||"button is-black is-marginless";return 1===a?x.default.createElement("button",{className:l,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"keyboard_arrow_left"))):x.default.createElement("button",{className:l,onClick:n},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"keyboard_arrow_left")))};j.propTypes={css:w.default.string,page:w.default.number.isRequired,handlePrevClick:w.default.func.isRequired};var D=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.maxScale,s=e.handleZoomIn,i=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5",r=l;return n>l&&(r=n),a.toFixed(2)===r.toFixed(2)?x.default.createElement("button",{className:i,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"zoom_in"))):x.default.createElement("button",{className:i,onClick:s},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"zoom_in")))};D.propTypes={css:w.default.string,scale:w.default.number.isRequired,defaultScale:w.default.number.isRequired,maxScale:w.default.number.isRequired,handleZoomIn:w.default.func.isRequired};var L=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.minScale,s=e.handleZoomOut,i=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5",r=l;return n<l&&(r=n),a.toFixed(2)===r.toFixed(2)?x.default.createElement("button",{className:i,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"zoom_out"))):x.default.createElement("button",{className:i,onClick:s},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"zoom_out")))};L.propTypes={css:w.default.string,scale:w.default.number.isRequired,defaultScale:w.default.number.isRequired,minScale:w.default.number.isRequired,handleZoomOut:w.default.func.isRequired};var _=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.handleResetZoom,s=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return a.toFixed(2)===n.toFixed(2)?x.default.createElement("button",{className:s,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"refresh"))):x.default.createElement("button",{className:s,onClick:l},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"refresh")))};_.propTypes={css:w.default.string,scale:w.default.number.isRequired,defaultScale:w.default.number.isRequired,handleResetZoom:w.default.func.isRequired};var z=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateLeft,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return-90===a?x.default.createElement("button",{className:l,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"rotate_left"))):x.default.createElement("button",{className:l,onClick:n},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"rotate_left")))};z.propTypes={css:w.default.string,rotationAngle:w.default.number.isRequired,handleRotateLeft:w.default.func.isRequired};var M=function(e){var t=e.css,a=e.rotationAngle,n=e.handleResetRotation,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 0===a?x.default.createElement("button",{className:l,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"refresh"))):x.default.createElement("button",{className:l,onClick:n},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"refresh")))};M.propTypes={css:w.default.string,rotationAngle:w.default.number.isRequired,handleResetRotation:w.default.func.isRequired};var F=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateRight,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 90===a?x.default.createElement("button",{className:l,disabled:!0},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"rotate_right"))):x.default.createElement("button",{className:l,onClick:n},x.default.createElement("span",{className:"icon is-small"},x.default.createElement("i",{className:"material-icons"},"rotate_right")))};F.propTypes={css:w.default.string,rotationAngle:w.default.number.isRequired,handleRotateRight:w.default.func.isRequired};var H=function(e){var t=e.page,a=e.pages,n=e.scale,l=e.defaultScale,s=e.maxScale,i=e.minScale,r=e.rotationAngle,o=e.hideZoom,u=e.hideRotation,d=e.css,c=e.handlePrevClick,f=e.handleNextClick,m=e.handleZoomIn,h=e.handleResetZoom,p=e.handleZoomOut,g=e.handleRotateLeft,b=e.handleResetRotation,v=e.handleRotateRight,R=e.handleModalToggle;return x.default.createElement("div",{className:"columns is-gapless ".concat(d.navbarWrapper||"box is-mobile has-text-white has-background-black has-margin-top-15 has-margin-bottom-15")},o?x.default.createElement("div",{className:"column is-2"},x.default.createElement("button",{type:"button",onClick:function(){return R(!0)}},x.default.createElement("i",{className:"material-icons"},"grid_on"))):x.default.createElement("div",{className:"column is-2 buttons are-small has-addons"},x.default.createElement(L,{scale:n,minScale:i,defaultScale:l,css:d.zoomOutBtn,handleZoomOut:p}),x.default.createElement(_,{scale:n,defaultScale:l,css:d.resetZoomBtn,handleResetZoom:h}),x.default.createElement(D,{scale:n,maxScale:s,defaultScale:l,css:d.zoomInBtn,handleZoomIn:m})),x.default.createElement("div",{className:"column"}),x.default.createElement("div",{className:"column is-3 buttons are-small has-addons is-centered"},x.default.createElement(j,{css:d.previousPageBtn,page:t,pages:a,handlePrevClick:c}),x.default.createElement(I,{css:d.pageIndicator,page:t,pages:a}),x.default.createElement(A,{css:d.nextPageBtn,page:t,pages:a,handleNextClick:f})),x.default.createElement("div",{className:"column"}),u?x.default.createElement("div",{className:"column is-2"}):x.default.createElement("div",{className:"column is-2 buttons are-small has-addons is-right"},x.default.createElement(z,{css:d.rotateLeftBtn,rotationAngle:r,handleRotateLeft:g}),x.default.createElement(M,{css:d.resetRotationBtn,rotationAngle:r,handleResetRotation:b}),x.default.createElement(F,{css:d.rotateRightBtn,rotationAngle:r,handleRotateRight:v})))};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){Z.default(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}H.propTypes={page:w.default.number.isRequired,pages:w.default.number.isRequired,scale:w.default.number,defaultScale:w.default.number,maxScale:w.default.number,minScale:w.default.number,rotationAngle:w.default.number,hideZoom:w.default.bool,hideRotation:w.default.bool,css:w.default.shape({navbarWrapper:w.default.string,pages:w.default.string,pageIndicator:w.default.string,previousPageBtn:w.default.string,nextPageBtn:w.default.string,zoomOutBtn:w.default.string,resetZoomBtn:w.default.string,zoomInBtn:w.default.string,rotateLeftBtn:w.default.string,resetRotationBtn:w.default.string,rotateRightBtn:w.default.string}),elements:w.default.shape({previousPageBtn:w.default.any,nextPageBtn:w.default.any,pages:w.default.any}),handlePrevClick:w.default.func.isRequired,handleNextClick:w.default.func.isRequired,handleZoomIn:w.default.func.isRequired,handleResetZoom:w.default.func.isRequired,handleZoomOut:w.default.func.isRequired,handleRotateLeft:w.default.func.isRequired,handleResetRotation:w.default.func.isRequired,handleRotateRight:w.default.func.isRequired,handleModalToggle:w.default.func.isRequired},H.defaultProps={css:{},elements:{}};var G={display:"inline-block",verticalAlign:"text-bottom",backgroundColor:"currentColor",borderRadius:"50%",opacity:0,width:"0.5rem",height:"0.5rem",animationDuration:"0.75s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"normal",animationFillMode:"none",animationPlayState:"running",animationName:"spinner-grow"},U=V(V({},G),{},{animationDelay:"0s"}),X=V(V({},G),{},{animationDelay:"0.25s"}),J=V(V({},G),{},{animationDelay:"0.5s"}),K=function(){return x.default.createElement("div",{className:"flex-row has-margin-10 justify-center align-items-flex-end"},x.default.createElement("p",{className:"is-size-3 flex-column is-marginless"},"Loading"),x.default.createElement("div",{className:"flex-column has-padding-10"},x.default.createElement("div",{style:U})),x.default.createElement("div",{className:"flex-column has-padding-10"},x.default.createElement("div",{style:X})),x.default.createElement("div",{className:"flex-column has-padding-10"},x.default.createElement("div",{style:J})))};function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=k.default(e);if(t){var l=k.default(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return y.default(this,a)}}try{require("bulma/css/bulma.css"),require("bulma-helpers/css/bulma-helpers.min.css"),require("material-design-icons/iconfont/material-icons.css")}catch(e){}var Y=function(e){E.default(a,e);var t=Q(a);function a(e){var n;return b.default(this,a),(n=t.call(this,e)).state={page:n.props.page,pages:0,scale:n.props.scale,defaultScale:n.props.scale,rotationAngle:n.props.rotationAngle,isReady:!1,thumbnails:[],modalIsOpen:!1},n.getPageCount=n.getPageCount.bind(R.default(n)),n.handleThumbnailClick=n.handleThumbnailClick.bind(R.default(n)),n.handlePrevClick=n.handlePrevClick.bind(R.default(n)),n.handleNextClick=n.handleNextClick.bind(R.default(n)),n.handleZoomIn=n.handleZoomIn.bind(R.default(n)),n.handleResetZoom=n.handleResetZoom.bind(R.default(n)),n.handleZoomOut=n.handleZoomOut.bind(R.default(n)),n.handleRotateLeft=n.handleRotateLeft.bind(R.default(n)),n.handleResetRotation=n.handleResetRotation.bind(R.default(n)),n.handleRotateRight=n.handleRotateRight.bind(R.default(n)),n.handleHotkeysPressed=n.handleHotkeysPressed.bind(R.default(n)),n.setThumbnails=n.setThumbnails.bind(R.default(n)),n.handleModalToggle=n.handleModalToggle.bind(R.default(n)),n}return v.default(a,[{key:"getPageCount",value:function(e){this.state.pages!==e&&(this.setState({pages:e,isReady:!0}),this.props.getMaxPageCount&&this.props.getMaxPageCount(e))}},{key:"handleThumbnailClick",value:function(e){this.state.page!==e&&this.setState({page:e})}},{key:"handlePrevClick",value:function(){1!==this.state.page&&(this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1))}},{key:"handleNextClick",value:function(){this.state.page!==this.pages&&(this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1))}},{key:"handleZoomIn",value:function(){var e=this.props.maxScale;this.state.defaultScale>this.props.maxScale&&(e=this.state.defaultScale),this.state.scale<e&&this.setState({scale:this.state.scale+this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale+this.props.scaleStep)}},{key:"handleResetZoom",value:function(){this.setState({scale:this.state.defaultScale}),this.props.onZoom&&this.props.onZoom(this.state.defaultScale)}},{key:"handleZoomOut",value:function(){var e=this.props.minScale;this.state.defaultScale<this.props.minScale&&(e=this.state.defaultScale),this.state.scale>e&&this.setState({scale:this.state.scale-this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale-this.props.scaleStep)}},{key:"handleRotateLeft",value:function(){-90!==this.state.rotationAngle&&this.setState({rotationAngle:-90}),this.props.onRotation&&this.props.onRotation(-90)}},{key:"handleResetRotation",value:function(){0!==this.state.rotationAngle&&this.setState({rotationAngle:0}),this.props.onRotation&&this.props.onRotation(0)}},{key:"handleRotateRight",value:function(){90!==this.state.rotationAngle&&this.setState({rotationAngle:90}),this.props.onRotation&&this.props.onRotation(90)}},{key:"handleHotkeysPressed",value:function(e){if(37===e.keyCode){if(1===this.state.page)return;this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1)}else if(39===e.keyCode){if(this.state.page===this.state.pages)return;this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1)}}},{key:"setThumbnails",value:function(e){this.setState({thumbnails:e})}},{key:"handleModalToggle",value:function(e){this.setState({modalIsOpen:e})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleHotkeysPressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleHotkeysPressed)}},{key:"render",value:function(){var e=this,t=this.props,a=t.document,n=t.withCredentials,l=t.password,s=t.loader,i=t.maxScale,r=t.minScale,o=t.hideNavbar,u=t.hideZoom,d=t.hideRotation,c=t.navbarOnTop,f=t.navigation,m=t.css,h=t.canvasCss,p=t.onDocumentClick,b=t.showThumbnail,v=t.protectContent,R=t.watermark,E=t.alert,y=this.state,k=y.page,w=y.pages,C=y.scale,N=y.defaultScale,S=y.rotationAngle,q=f,P=x.default.createElement(B,{document:a,withCredentials:n,password:l,pageNum:k,scale:C,rotation:S,changePage:function(t){return e.handleThumbnailClick(t)},pageCount:function(t){return e.getPageCount(t)},showThumbnail:b,protectContent:v,watermark:R,alert:E,canvasCss:h,setThumbnails:function(t){return e.setThumbnails(t)}}),Z=null;return!o&&w>0&&(Z=!f||f&&"object"===g.default(f)?x.default.createElement(H,{page:k,pages:w,scale:C,defaultScale:N,maxScale:i,minScale:r,rotationAngle:S,hideZoom:u,hideRotation:d,css:f?f.css:void 0,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight,handleModalToggle:this.handleModalToggle}):x.default.createElement(q,{page:k,pages:w,scale:C,defaultScale:N,maxScale:i,minScale:r,rotationAngle:S,hideZoom:u,hideRotation:d,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight})),x.default.createElement(x.default.Fragment,null,x.default.createElement("div",{className:m||"container text-center"},x.default.createElement("div",{style:{display:this.state.isReady?"none":"block"}},x.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},s||x.default.createElement(K,null))),x.default.createElement("div",{style:{display:this.state.isReady?"block":"none"}},c?x.default.createElement("div",null,x.default.createElement("div",null,Z),x.default.createElement("div",{onClick:p},P)):x.default.createElement("div",null,x.default.createElement("div",{onClick:p},P),x.default.createElement("div",null,Z)))))}}]),a}(x.default.Component);Y.propTypes={document:w.default.shape({url:w.default.string,base64:w.default.string}).isRequired,withCredentials:w.default.bool,password:w.default.string,loader:w.default.node,page:w.default.number,scale:w.default.number,scaleStep:w.default.number,maxScale:w.default.number,minScale:w.default.number,css:w.default.string,canvasCss:w.default.string,rotationAngle:w.default.number,onDocumentClick:w.default.func,onPrevBtnClick:w.default.func,onNextBtnClick:w.default.func,onZoom:w.default.func,onRotation:w.default.func,getMaxPageCount:w.default.func,hideNavbar:w.default.bool,navbarOnTop:w.default.bool,hideZoom:w.default.bool,hideRotation:w.default.bool,showThumbnail:w.default.shape({scale:w.default.number,rotationAngle:w.default.number}),protectContent:w.default.bool,watermark:w.default.shape({text:w.default.string,diagonal:w.default.bool,opacity:w.default.string,font:w.default.string,size:w.default.string,color:w.default.string}),alert:w.default.any,navigation:w.default.oneOfType([w.default.shape({css:w.default.shape({navbarWrapper:w.default.string,zoomOutBtn:w.default.string,resetZoomBtn:w.default.string,zoomInBtn:w.default.string,previousPageBtn:w.default.string,pageIndicator:w.default.string,nextPageBtn:w.default.string,rotateLeftBtn:w.default.string,resetRotationBtn:w.default.string,rotateRightBtn:w.default.string})}),w.default.any])},Y.defaultProps={page:1,withCredentials:!1,password:"",defaultScale:1,scale:1,scaleStep:1,maxScale:3,minScale:1,rotationAngle:0,hideNavbar:!1,hideZoom:!1,hideRotation:!1,navbarOnTop:!1,canvasCss:""},module.exports=Y;
