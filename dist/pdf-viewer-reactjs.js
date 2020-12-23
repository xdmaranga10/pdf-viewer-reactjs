"use strict";var e=require("@babel/runtime/helpers/typeof"),t=require("@babel/runtime/helpers/classCallCheck"),a=require("@babel/runtime/helpers/createClass"),n=require("@babel/runtime/helpers/assertThisInitialized"),l=require("@babel/runtime/helpers/inherits"),s=require("@babel/runtime/helpers/possibleConstructorReturn"),i=require("@babel/runtime/helpers/getPrototypeOf"),r=require("react"),o=require("prop-types"),u=require("@babel/runtime/regenerator"),c=require("@babel/runtime/helpers/asyncToGenerator"),d=require("@babel/runtime/helpers/slicedToArray"),f=require("pdfjs-dist"),m=require("pdfjs-dist/build/pdf.worker.entry"),h=require("react-modal"),p=require("@babel/runtime/helpers/defineProperty");function g(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var b=g(e),v=g(t),R=g(a),E=g(n),k=g(l),y=g(s),x=g(i),C=g(r),w=g(o),N=g(u),S=g(c),P=g(d),q=g(f),Z=g(m),O=g(h),T=g(p),B=function(e){var t=e.message;return C.default.createElement("div",{className:"columns has-text-danger has-margin-top-5 is-mobile"},C.default.createElement("div",{className:"column is-4 has-text-right has-padding-5"},C.default.createElement("span",{className:"icon"},C.default.createElement("i",{className:"material-icons"},"error_outline"))),C.default.createElement("div",{className:"column is-8 has-text-left has-padding-5"},C.default.createElement("small",null,t)))};B.propTypes={message:w.default.string.isRequired},q.default.GlobalWorkerOptions.workerSrc=Z.default;var A=null,j=function(e){var t=e.document,a=e.withCredentials,n=e.password,l=e.pageNum,s=e.scale,i=e.rotation,o=e.pageCount,u=e.changePage,c=e.showThumbnail,d=e.protectContent,f=e.watermark,m=e.alert,h=e.canvasCss,p=r.useState({status:!1,message:""}),g=P.default(p,2),b=g[0],v=g[1],R=r.useRef(null),E=r.useRef(null),k=r.useRef(null),y=r.useRef(!0),x=r.useState([]),w=P.default(x,2),Z=w[0],T=w[1],j=r.useState([]),I=P.default(j,2),D=I[0],L=I[1],_=r.useState([]),z=P.default(_,2),M=z[0],F=z[1],H=r.useState(!1),W=P.default(H,2),V=W[0],G=W[1],U=m||B,X=function(){var e=S.default(N.default.mark((function e(){var l;return N.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l={withCredentials:a,password:n},null==t.url?l.data=atob(t.base64):l.url=t.url,e.next=5,q.default.getDocument(l).promise;case 5:return A=e.sent,e.next=8,J();case 8:return e.next=10,K();case 10:Q(),o(A.numPages),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.warn("Error while opening the document !\n",e.t0),v({status:!0,message:"Error while opening the document !"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=S.default(N.default.mark((function e(){var t,a,n,r,o,u,c,d,m,h,p,g,b,E,k;return N.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.getPage(l);case 3:return t=e.sent,a=t.getViewport({scale:s,rotation:i}),console.log("page",t,"pdf",A,"viewport",a),(n=R.current).height=a.height,n.width=a.width,r=n.getContext("2d"),o={canvasContext:r,viewport:a},u=t.render(o),e.prev=12,e.next=15,u.promise;case 15:0!==Object.entries(f).length&&(c=f.text,d=f.diagonal,m=f.opacity,h=f.font,p=f.size,g=f.color,r.globalAlpha=m,r.font="".concat(p*s,"px ").concat(""!==h?h:"Comic Sans MS"),r.fillStyle=g,b=r.measureText(c),E=b.width,k=p*s,r.translate(a.width/2,a.height/2),d&&r.rotate(-.785),r.fillText(c,-E/2,k/2)),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(12),console.warn("Error occured while rendering !\n",e.t0),v({status:!0,message:"Error occured while rendering !"});case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(0),console.warn("Error while reading the pages !\n",e.t1),v({status:!0,message:"Error while reading the pages !"});case 28:case"end":return e.stop()}}),e,null,[[0,24],[12,18]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=S.default(N.default.mark((function e(){var t,a,n,l,s,i,r,o,u,d,m,h,p,g,b,v,R,k,y;return N.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.entries(c).length){e.next=26;break}t=[],a=.1,n=0,1<=c.scale&&c.scale<=5&&(a=c.scale/10),-90!==c.rotationAngle&&90!==c.rotationAngle||(n=c.rotationAngle),l=1;case 7:if(!(l<=A.numPages)){e.next=25;break}return e.next=10,A.getPage(l);case 10:return s=e.sent,i=s.getViewport({scale:a,rotation:n}),(r=E.current).height=i.height,r.width=i.width,o=r.getContext("2d"),u={canvasContext:o,viewport:i},d=s.render(u),e.next=20,d.promise;case 20:0!==Object.entries(f).length&&(m=f.text,h=f.diagonal,p=f.opacity,g=f.font,b=f.size,v=f.color,o.globalAlpha=p,o.font="".concat(b*a,"px ").concat(""!==g?g:"Comic Sans MS"),o.fillStyle=v,R=o.measureText(m),k=R.width,y=b*a,o.translate(i.width/2,i.height/2),h&&o.rotate(-.785),o.fillText(m,-k/2,y/2)),t.push({image:r.toDataURL("image/png"),height:i.height,width:i.width});case 22:l++,e.next=7;break;case 25:L(t);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){if(0!==Object.entries(c).length){for(var e=[],t=function(t){var a=D[t-1].image,n=D[t-1].height,s=D[t-1].width;e.push(C.default.createElement("img",{style:l===t?{height:n,width:s,display:"flex",cursor:"pointer",margin:"10px 15px",border:"5px solid red"}:{height:n,width:s,display:"flex",cursor:"pointer",margin:"10px 15px",boxShadow:"rgba(0, 0, 0, 0.6) 0px 2px 2px 0px"},onClick:function(){return u(t)},ref:l===t?k:null,key:t,alt:"thumbnail of page ".concat(t),src:a})),M.push({image:a,isSelected:l===t,onClick:function(){return u(t)}})},a=1;a<=D.length;a++)t(a);e.push(C.default.createElement("div",{key:0,style:{padding:"0px 10px"}})),T(e),F(M)}};r.useEffect((function(){X()}),[t,n]),r.useEffect((function(){y.current?y.current=!1:(J(),Q())}),[l,s,i,o]),r.useEffect((function(){null!==k.current&&0!==Object.entries(c).length&&k.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}));var Y=C.default.createElement(O.default,{isOpen:V},C.default.createElement("button",{type:"button",onClick:function(){return G(!1)}},"Close"),C.default.createElement("div",null,M.map((function(e,t){var a=e.image,n=e.onClick;return C.default.createElement("img",{key:t,src:a,onClick:function(){G(!1),n()}})}))));return b.status?(o(-1),C.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},C.default.createElement(U,{message:b.message}))):0!==Object.entries(c).length?C.default.createElement(C.default.Fragment,null,Y,C.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},C.default.createElement("canvas",{onContextMenu:function(e){return d?e.preventDefault():null},ref:R,width:"undefined"!=typeof window&&window.innerWidth,height:"undefined"!=typeof window&&window.innerHeight})),C.default.createElement("div",{style:{backgroundColor:"#EAE6DA",display:"flex",flexDirection:"row",overflowX:"auto"}},Z),C.default.createElement("canvas",{ref:E,style:{display:"none"}})):C.default.createElement(C.default.Fragment,null,Y,C.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},C.default.createElement("canvas",{onContextMenu:function(e){return d?e.preventDefault():null},ref:R,width:"undefined"!=typeof window&&window.innerWidth,height:"undefined"!=typeof window&&window.innerHeight})))};j.propTypes={document:w.default.any.isRequired,withCredentials:w.default.bool,password:w.default.string,pageNum:w.default.number.isRequired,scale:w.default.number.isRequired,rotation:w.default.number.isRequired,changePage:w.default.func,pageCount:w.default.func,showThumbnail:w.default.shape({scale:w.default.number,rotationAngle:w.default.number}),protectContent:w.default.bool,watermark:w.default.shape({text:w.default.string,diagonal:w.default.bool,opacity:w.default.string,size:w.default.string,color:w.default.string}),canvasCss:w.default.string},j.defaultProps={changePage:function(){},pageCount:function(){},showThumbnail:{},protectContent:!1,watermark:{},canvasCss:""};var I=function(e){var t=e.css,a=e.page,n=e.pages,l=e.handleNextClick,s=t||"button is-black is-marginless";return a===n?C.default.createElement("button",{className:s,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))):C.default.createElement("button",{className:s,onClick:l},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"keyboard_arrow_right")))};I.propTypes={css:w.default.string,page:w.default.number.isRequired,pages:w.default.number.isRequired,handleNextClick:w.default.func.isRequired};var D=function(e){var t=e.css,a=e.page,n=e.pages,l=t||"is-size-7 is-vcentered has-text-centered is-inline-flex has-padding-top-5 button is-black is-marginless has-margin-left-5 has-margin-right-5";return C.default.createElement("span",{className:l},"Page ".concat(a," / ").concat(n))};D.propTypes={css:w.default.string,page:w.default.number.isRequired,pages:w.default.number.isRequired};var L=function(e){var t=e.css,a=e.page,n=e.handlePrevClick,l=t||"button is-black is-marginless";return 1===a?C.default.createElement("button",{className:l,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"keyboard_arrow_left"))):C.default.createElement("button",{className:l,onClick:n},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"keyboard_arrow_left")))};L.propTypes={css:w.default.string,page:w.default.number.isRequired,handlePrevClick:w.default.func.isRequired};var _=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.maxScale,s=e.handleZoomIn,i=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5",r=l;return n>l&&(r=n),a.toFixed(2)===r.toFixed(2)?C.default.createElement("button",{className:i,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"zoom_in"))):C.default.createElement("button",{className:i,onClick:s},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"zoom_in")))};_.propTypes={css:w.default.string,scale:w.default.number.isRequired,defaultScale:w.default.number.isRequired,maxScale:w.default.number.isRequired,handleZoomIn:w.default.func.isRequired};var z=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.minScale,s=e.handleZoomOut,i=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5",r=l;return n<l&&(r=n),a.toFixed(2)===r.toFixed(2)?C.default.createElement("button",{className:i,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"zoom_out"))):C.default.createElement("button",{className:i,onClick:s},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"zoom_out")))};z.propTypes={css:w.default.string,scale:w.default.number.isRequired,defaultScale:w.default.number.isRequired,minScale:w.default.number.isRequired,handleZoomOut:w.default.func.isRequired};var M=function(e){var t=e.css,a=e.scale,n=e.defaultScale,l=e.handleResetZoom,s=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return a.toFixed(2)===n.toFixed(2)?C.default.createElement("button",{className:s,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"refresh"))):C.default.createElement("button",{className:s,onClick:l},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"refresh")))};M.propTypes={css:w.default.string,scale:w.default.number.isRequired,defaultScale:w.default.number.isRequired,handleResetZoom:w.default.func.isRequired};var F=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateLeft,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return-90===a?C.default.createElement("button",{className:l,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"rotate_left"))):C.default.createElement("button",{className:l,onClick:n},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"rotate_left")))};F.propTypes={css:w.default.string,rotationAngle:w.default.number.isRequired,handleRotateLeft:w.default.func.isRequired};var H=function(e){var t=e.css,a=e.rotationAngle,n=e.handleResetRotation,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 0===a?C.default.createElement("button",{className:l,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"refresh"))):C.default.createElement("button",{className:l,onClick:n},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"refresh")))};H.propTypes={css:w.default.string,rotationAngle:w.default.number.isRequired,handleResetRotation:w.default.func.isRequired};var W=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateRight,l=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 90===a?C.default.createElement("button",{className:l,disabled:!0},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"rotate_right"))):C.default.createElement("button",{className:l,onClick:n},C.default.createElement("span",{className:"icon is-small"},C.default.createElement("i",{className:"material-icons"},"rotate_right")))};W.propTypes={css:w.default.string,rotationAngle:w.default.number.isRequired,handleRotateRight:w.default.func.isRequired};var V=function(e){var t=e.page,a=e.pages,n=e.scale,l=e.defaultScale,s=e.maxScale,i=e.minScale,r=e.rotationAngle,o=e.hideZoom,u=e.hideRotation,c=e.css,d=e.handlePrevClick,f=e.handleNextClick,m=e.handleZoomIn,h=e.handleResetZoom,p=e.handleZoomOut,g=e.handleRotateLeft,b=e.handleResetRotation,v=e.handleRotateRight,R=e.handleModalToggle;return C.default.createElement("div",{className:"columns is-gapless ".concat(c.navbarWrapper||"box is-mobile has-text-white has-background-black has-margin-top-15 has-margin-bottom-15")},o?C.default.createElement("div",{className:"column is-2"},C.default.createElement("button",{type:"button",onClick:function(){return R(!0)}},C.default.createElement("i",{className:"material-icons"},"grid_on"))):C.default.createElement("div",{className:"column is-2 buttons are-small has-addons"},C.default.createElement(z,{scale:n,minScale:i,defaultScale:l,css:c.zoomOutBtn,handleZoomOut:p}),C.default.createElement(M,{scale:n,defaultScale:l,css:c.resetZoomBtn,handleResetZoom:h}),C.default.createElement(_,{scale:n,maxScale:s,defaultScale:l,css:c.zoomInBtn,handleZoomIn:m})),C.default.createElement("div",{className:"column"}),C.default.createElement("div",{className:"column is-3 buttons are-small has-addons is-centered"},C.default.createElement(L,{css:c.previousPageBtn,page:t,pages:a,handlePrevClick:d}),C.default.createElement(D,{css:c.pageIndicator,page:t,pages:a}),C.default.createElement(I,{css:c.nextPageBtn,page:t,pages:a,handleNextClick:f})),C.default.createElement("div",{className:"column"}),u?C.default.createElement("div",{className:"column is-2"}):C.default.createElement("div",{className:"column is-2 buttons are-small has-addons is-right"},C.default.createElement(F,{css:c.rotateLeftBtn,rotationAngle:r,handleRotateLeft:g}),C.default.createElement(H,{css:c.resetRotationBtn,rotationAngle:r,handleResetRotation:b}),C.default.createElement(W,{css:c.rotateRightBtn,rotationAngle:r,handleRotateRight:v})))};function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){T.default(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}V.propTypes={page:w.default.number.isRequired,pages:w.default.number.isRequired,scale:w.default.number,defaultScale:w.default.number,maxScale:w.default.number,minScale:w.default.number,rotationAngle:w.default.number,hideZoom:w.default.bool,hideRotation:w.default.bool,css:w.default.shape({navbarWrapper:w.default.string,pages:w.default.string,pageIndicator:w.default.string,previousPageBtn:w.default.string,nextPageBtn:w.default.string,zoomOutBtn:w.default.string,resetZoomBtn:w.default.string,zoomInBtn:w.default.string,rotateLeftBtn:w.default.string,resetRotationBtn:w.default.string,rotateRightBtn:w.default.string}),elements:w.default.shape({previousPageBtn:w.default.any,nextPageBtn:w.default.any,pages:w.default.any}),handlePrevClick:w.default.func.isRequired,handleNextClick:w.default.func.isRequired,handleZoomIn:w.default.func.isRequired,handleResetZoom:w.default.func.isRequired,handleZoomOut:w.default.func.isRequired,handleRotateLeft:w.default.func.isRequired,handleResetRotation:w.default.func.isRequired,handleRotateRight:w.default.func.isRequired,handleModalToggle:w.default.func.isRequired},V.defaultProps={css:{},elements:{}};var X={display:"inline-block",verticalAlign:"text-bottom",backgroundColor:"currentColor",borderRadius:"50%",opacity:0,width:"0.5rem",height:"0.5rem",animationDuration:"0.75s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"normal",animationFillMode:"none",animationPlayState:"running",animationName:"spinner-grow"},J=U(U({},X),{},{animationDelay:"0s"}),K=U(U({},X),{},{animationDelay:"0.25s"}),Q=U(U({},X),{},{animationDelay:"0.5s"}),Y=function(){return C.default.createElement("div",{className:"flex-row has-margin-10 justify-center align-items-flex-end"},C.default.createElement("p",{className:"is-size-3 flex-column is-marginless"},"Loading"),C.default.createElement("div",{className:"flex-column has-padding-10"},C.default.createElement("div",{style:J})),C.default.createElement("div",{className:"flex-column has-padding-10"},C.default.createElement("div",{style:K})),C.default.createElement("div",{className:"flex-column has-padding-10"},C.default.createElement("div",{style:Q})))};function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x.default(e);if(t){var l=x.default(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return y.default(this,a)}}try{require("bulma/css/bulma.css"),require("bulma-helpers/css/bulma-helpers.min.css"),require("material-design-icons/iconfont/material-icons.css")}catch(e){}var ee=function(e){k.default(a,e);var t=$(a);function a(e){var n;return v.default(this,a),(n=t.call(this,e)).state={page:n.props.page,pages:0,scale:n.props.scale,defaultScale:n.props.scale,rotationAngle:n.props.rotationAngle,isReady:!1},n.getPageCount=n.getPageCount.bind(E.default(n)),n.handleThumbnailClick=n.handleThumbnailClick.bind(E.default(n)),n.handlePrevClick=n.handlePrevClick.bind(E.default(n)),n.handleNextClick=n.handleNextClick.bind(E.default(n)),n.handleZoomIn=n.handleZoomIn.bind(E.default(n)),n.handleResetZoom=n.handleResetZoom.bind(E.default(n)),n.handleZoomOut=n.handleZoomOut.bind(E.default(n)),n.handleRotateLeft=n.handleRotateLeft.bind(E.default(n)),n.handleResetRotation=n.handleResetRotation.bind(E.default(n)),n.handleRotateRight=n.handleRotateRight.bind(E.default(n)),n.handleHotkeysPressed=n.handleHotkeysPressed.bind(E.default(n)),n}return R.default(a,[{key:"getPageCount",value:function(e){this.state.pages!==e&&(this.setState({pages:e,isReady:!0}),this.props.getMaxPageCount&&this.props.getMaxPageCount(e))}},{key:"handleThumbnailClick",value:function(e){this.state.page!==e&&this.setState({page:e})}},{key:"handlePrevClick",value:function(){1!==this.state.page&&(this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1))}},{key:"handleNextClick",value:function(){this.state.page!==this.pages&&(this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1))}},{key:"handleZoomIn",value:function(){var e=this.props.maxScale;this.state.defaultScale>this.props.maxScale&&(e=this.state.defaultScale),this.state.scale<e&&this.setState({scale:this.state.scale+this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale+this.props.scaleStep)}},{key:"handleResetZoom",value:function(){this.setState({scale:this.state.defaultScale}),this.props.onZoom&&this.props.onZoom(this.state.defaultScale)}},{key:"handleZoomOut",value:function(){var e=this.props.minScale;this.state.defaultScale<this.props.minScale&&(e=this.state.defaultScale),this.state.scale>e&&this.setState({scale:this.state.scale-this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale-this.props.scaleStep)}},{key:"handleRotateLeft",value:function(){-90!==this.state.rotationAngle&&this.setState({rotationAngle:-90}),this.props.onRotation&&this.props.onRotation(-90)}},{key:"handleResetRotation",value:function(){0!==this.state.rotationAngle&&this.setState({rotationAngle:0}),this.props.onRotation&&this.props.onRotation(0)}},{key:"handleRotateRight",value:function(){90!==this.state.rotationAngle&&this.setState({rotationAngle:90}),this.props.onRotation&&this.props.onRotation(90)}},{key:"handleHotkeysPressed",value:function(e){if(37===e.keyCode){if(1===this.state.page)return;this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1)}else if(39===e.keyCode){if(this.state.page===this.state.pages)return;this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1)}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleHotkeysPressed)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleHotkeysPressed)}},{key:"render",value:function(){var e=this,t=this.props,a=t.document,n=t.withCredentials,l=t.password,s=t.loader,i=t.maxScale,r=t.minScale,o=t.hideNavbar,u=t.hideZoom,c=t.hideRotation,d=t.navbarOnTop,f=t.navigation,m=t.css,h=t.canvasCss,p=t.onDocumentClick,g=t.showThumbnail,v=t.protectContent,R=t.watermark,E=t.alert,k=this.state,y=k.page,x=k.pages,w=k.scale,N=k.defaultScale,S=k.rotationAngle,P=f,q=C.default.createElement(j,{document:a,withCredentials:n,password:l,pageNum:y,scale:w,rotation:S,changePage:function(t){return e.handleThumbnailClick(t)},pageCount:function(t){return e.getPageCount(t)},showThumbnail:g,protectContent:v,watermark:R,alert:E,canvasCss:h}),Z=null;return!o&&x>0&&(Z=!f||f&&"object"===b.default(f)?C.default.createElement(V,{page:y,pages:x,scale:w,defaultScale:N,maxScale:i,minScale:r,rotationAngle:S,hideZoom:u,hideRotation:c,css:f?f.css:void 0,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight}):C.default.createElement(P,{page:y,pages:x,scale:w,defaultScale:N,maxScale:i,minScale:r,rotationAngle:S,hideZoom:u,hideRotation:c,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight})),C.default.createElement("div",{className:m||"container text-center"},C.default.createElement("div",{style:{display:this.state.isReady?"none":"block"}},C.default.createElement("div",{className:h||"",style:h?{}:{height:"1000px",overflow:"auto"}},s||C.default.createElement(Y,null))),C.default.createElement("div",{style:{display:this.state.isReady?"block":"none"}},d?C.default.createElement("div",null,C.default.createElement("div",null,Z),C.default.createElement("div",{onClick:p},q)):C.default.createElement("div",null,C.default.createElement("div",{onClick:p},q),C.default.createElement("div",null,Z))))}}]),a}(C.default.Component);ee.propTypes={document:w.default.shape({url:w.default.string,base64:w.default.string}).isRequired,withCredentials:w.default.bool,password:w.default.string,loader:w.default.node,page:w.default.number,scale:w.default.number,scaleStep:w.default.number,maxScale:w.default.number,minScale:w.default.number,css:w.default.string,canvasCss:w.default.string,rotationAngle:w.default.number,onDocumentClick:w.default.func,onPrevBtnClick:w.default.func,onNextBtnClick:w.default.func,onZoom:w.default.func,onRotation:w.default.func,getMaxPageCount:w.default.func,hideNavbar:w.default.bool,navbarOnTop:w.default.bool,hideZoom:w.default.bool,hideRotation:w.default.bool,showThumbnail:w.default.shape({scale:w.default.number,rotationAngle:w.default.number}),protectContent:w.default.bool,watermark:w.default.shape({text:w.default.string,diagonal:w.default.bool,opacity:w.default.string,font:w.default.string,size:w.default.string,color:w.default.string}),alert:w.default.any,navigation:w.default.oneOfType([w.default.shape({css:w.default.shape({navbarWrapper:w.default.string,zoomOutBtn:w.default.string,resetZoomBtn:w.default.string,zoomInBtn:w.default.string,previousPageBtn:w.default.string,pageIndicator:w.default.string,nextPageBtn:w.default.string,rotateLeftBtn:w.default.string,resetRotationBtn:w.default.string,rotateRightBtn:w.default.string})}),w.default.any])},ee.defaultProps={page:1,withCredentials:!1,password:"",defaultScale:1,scale:1,scaleStep:1,maxScale:3,minScale:1,rotationAngle:0,hideNavbar:!1,hideZoom:!1,hideRotation:!1,navbarOnTop:!1,canvasCss:""},module.exports=ee;
