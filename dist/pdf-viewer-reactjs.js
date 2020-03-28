"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React),PropTypes=_interopDefault(require("prop-types"));require("bulma/css/bulma.css"),require("bulma-helpers/css/bulma-helpers.min.css"),require("material-design-icons/iconfont/material-icons.css");var pdfjs=_interopDefault(require("pdfjs-dist")),pdfjsWorker=_interopDefault(require("pdfjs-dist/build/pdf.worker.entry"));function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function asyncGeneratorStep(e,t,a,n,s,r,o){try{var i=e[r](o),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,s)}function _asyncToGenerator(i){return function(){var e=this,o=arguments;return new Promise(function(t,a){var n=i.apply(e,o);function s(e){asyncGeneratorStep(n,t,a,s,r,"next",e)}function r(e){asyncGeneratorStep(n,t,a,s,r,"throw",e)}s(void 0)})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ownKeys(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function _objectSpread2(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(a),!0).forEach(function(e){_defineProperty(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,s=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){s=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(s)throw r}}return a}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Alert=function(e){var t=e.message;return React__default.createElement("div",{className:"columns has-text-danger has-margin-top-5 is-mobile"},React__default.createElement("div",{className:"column is-4 has-text-right has-padding-5"},React__default.createElement("span",{className:"icon"},React__default.createElement("i",{className:"material-icons"},"error_outline"))),React__default.createElement("div",{className:"column is-8 has-text-left has-padding-5"},React__default.createElement("small",null,t)))};Alert.propTypes={message:PropTypes.string.isRequired},pdfjs.GlobalWorkerOptions.workerSrc=pdfjsWorker;var pdf=null,RenderPdf=function(e){var f=e.src,g=e.pageNum,_=e.scale,R=e.rotation,y=e.pageCount,t=e.protectContent,P=e.watermark,a=e.alert,n=_slicedToArray(React.useState({status:!1,message:""}),2),s=n[0],b=n[1],T=React.useRef(null),r=a||Alert,o=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,a,n,s,r,o,i,l,c,p,u,d,m,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pdfjs.getDocument(f).promise;case 3:return pdf=e.sent,e.prev=4,e.next=7,pdf.getPage(g);case 7:return t=e.sent,a=t.getViewport({scale:_,rotation:R}),(n=T.current).height=a.height,n.width=a.width,s=n.getContext("2d"),r={canvasContext:s,viewport:a},o=t.render(r),e.prev=15,e.next=18,o.promise;case 18:0!==Object.entries(P).length&&(i=P.text,l=P.diagonal,c=P.opacity,p=P.size,u=P.color,s.globalAlpha=c,s.font="".concat(p*_,"px Comic Sans MS"),s.fillStyle=u,d=s.measureText(i),m=d.width,h=p*_,s.translate(a.width/2,a.height/2),l&&s.rotate(-.785),s.fillText(i,-m/2,h/2)),y(pdf.numPages),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(15),console.warn("Error occured while rendering !\n",e.t0),b({status:!0,message:"Error occured while rendering !"});case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(4),console.warn("Error while reading the pages !\n",e.t1),b({status:!0,message:"Error while reading the pages !"});case 32:e.next=38;break;case 34:e.prev=34,e.t2=e.catch(0),console.warn("Error while opening the document !\n",e.t2),b({status:!0,message:"Error while opening the document !"});case 38:case"end":return e.stop()}},e,null,[[0,34],[4,28],[15,22]])}));return function(){return e.apply(this,arguments)}}();return React.useEffect(function(){o()},[f,g,_,R,y]),s.status?(y(-1),React__default.createElement(r,{message:s.message})):React__default.createElement("canvas",{onContextMenu:function(e){return t?e.preventDefault():null},ref:T,width:window.innerWidth,height:window.innerHeight})};RenderPdf.propTypes={src:PropTypes.any.isRequired,pageNum:PropTypes.number.isRequired,scale:PropTypes.number.isRequired,rotation:PropTypes.number.isRequired,pageCount:PropTypes.func,protectContent:PropTypes.bool,watermark:PropTypes.shape({text:PropTypes.string,diagonal:PropTypes.bool,opacity:PropTypes.string,size:PropTypes.string,color:PropTypes.string})},RenderPdf.defaultProps={pageCount:function(){},protectContent:!1,watermark:{}};var NextPageButton=function(e){var t=e.css,a=e.page,n=e.pages,s=e.handleNextClick,r=t||"button is-black is-marginless",o=_slicedToArray(React.useState(!1),2),i=o[0],l=o[1];return i||a===n?React__default.createElement("button",{className:r,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))):React__default.createElement("button",{className:r,onClick:function(){l(!0),s(),setTimeout(function(){l(!1)},200)},disabled:i},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"keyboard_arrow_right")))};NextPageButton.propTypes={css:PropTypes.string,page:PropTypes.number.isRequired,pages:PropTypes.number.isRequired,handleNextClick:PropTypes.func.isRequired};var PagesIndicator=function(e){var t=e.css,a=e.page,n=e.pages,s=t||"is-size-7 is-vcentered has-text-centered is-inline-flex has-padding-top-5 button is-black is-marginless has-margin-left-5 has-margin-right-5";return React__default.createElement("span",{className:s},"Page ".concat(a," / ").concat(n))};PagesIndicator.propTypes={css:PropTypes.string,page:PropTypes.number.isRequired,pages:PropTypes.number.isRequired};var PreviousPageButton=function(e){var t=e.css,a=e.page,n=e.handlePrevClick,s=t||"button is-black is-marginless",r=_slicedToArray(React.useState(!1),2),o=r[0],i=r[1];return o||1===a?React__default.createElement("button",{className:s,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"keyboard_arrow_left"))):React__default.createElement("button",{className:s,onClick:function(){i(!0),n(),setTimeout(function(){i(!1)},200)}},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"keyboard_arrow_left")))};PreviousPageButton.propTypes={css:PropTypes.string,page:PropTypes.number.isRequired,handlePrevClick:PropTypes.func.isRequired};var ZoomIn=function(e){var t=e.css,a=e.scale,n=e.maxScale,s=e.handleZoomIn,r=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return a===n?React__default.createElement("button",{className:r,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"zoom_in"))):React__default.createElement("button",{className:r,onClick:s},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"zoom_in")))};ZoomIn.propTypes={css:PropTypes.string,scale:PropTypes.number.isRequired,maxScale:PropTypes.number.isRequired,handleZoomIn:PropTypes.func.isRequired};var ZoomOut=function(e){var t=e.css,a=e.scale,n=e.minScale,s=e.handleZoomOut,r=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return a===n?React__default.createElement("button",{className:r,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"zoom_out"))):React__default.createElement("button",{className:r,onClick:s},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"zoom_out")))};ZoomOut.propTypes={css:PropTypes.string,scale:PropTypes.number.isRequired,minScale:PropTypes.number.isRequired,handleZoomOut:PropTypes.func.isRequired};var ResetZoom=function(e){var t=e.css,a=e.scale,n=e.defaultScale,s=e.handleResetZoom,r=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return a===n?React__default.createElement("button",{className:r,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"refresh"))):React__default.createElement("button",{className:r,onClick:s},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"refresh")))};ResetZoom.propTypes={css:PropTypes.string,scale:PropTypes.number.isRequired,defaultScale:PropTypes.number.isRequired,handleResetZoom:PropTypes.func.isRequired};var RotateLeft=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateLeft,s=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return-90===a?React__default.createElement("button",{className:s,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"rotate_left"))):React__default.createElement("button",{className:s,onClick:n},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"rotate_left")))};RotateLeft.propTypes={css:PropTypes.string,rotationAngle:PropTypes.number.isRequired,handleRotateLeft:PropTypes.func.isRequired};var ResetRotation=function(e){var t=e.css,a=e.rotationAngle,n=e.handleResetRotation,s=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 0===a?React__default.createElement("button",{className:s,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"refresh"))):React__default.createElement("button",{className:s,onClick:n},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"refresh")))};ResetRotation.propTypes={css:PropTypes.string,rotationAngle:PropTypes.number.isRequired,handleResetRotation:PropTypes.func.isRequired};var RotateRight=function(e){var t=e.css,a=e.rotationAngle,n=e.handleRotateRight,s=t||"button is-black is-marginless has-margin-left-5 has-margin-right-5";return 90===a?React__default.createElement("button",{className:s,disabled:!0},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"rotate_right"))):React__default.createElement("button",{className:s,onClick:n},React__default.createElement("span",{className:"icon is-small"},React__default.createElement("i",{className:"material-icons"},"rotate_right")))};RotateRight.propTypes={css:PropTypes.string,rotationAngle:PropTypes.number.isRequired,handleRotateRight:PropTypes.func.isRequired};var Navigation=function(e){var t=e.page,a=e.pages,n=e.scale,s=e.defaultScale,r=e.maxScale,o=e.minScale,i=e.rotationAngle,l=e.hideZoom,c=e.hideRotation,p=e.css,u=e.handlePrevClick,d=e.handleNextClick,m=e.handleZoomIn,h=e.handleResetZoom,f=e.handleZoomOut,g=e.handleRotateLeft,_=e.handleResetRotation,R=e.handleRotateRight;return React__default.createElement("div",{className:p.navbarWrapper||"columns box is-gapless is-mobile has-text-white has-background-black has-margin-top-15 has-margin-bottom-15"},l?React__default.createElement("div",{className:"column is-3"}):React__default.createElement("div",{className:"column is-3 buttons are-small has-addons"},React__default.createElement(ZoomOut,{scale:n,minScale:o,css:p.zoomOutBtn,handleZoomOut:f}),React__default.createElement(ResetZoom,{scale:n,defaultScale:s,css:p.resetZoomBtn,handleResetZoom:h}),React__default.createElement(ZoomIn,{scale:n,maxScale:r,css:p.zoomInBtn,handleZoomIn:m})),React__default.createElement("div",{className:"column is-1"}),React__default.createElement("div",{className:"column is-4 buttons are-small has-addons is-centered"},React__default.createElement(PreviousPageButton,{css:p.previousPageBtn,page:t,pages:a,handlePrevClick:u}),React__default.createElement(PagesIndicator,{css:p.pageIndicator,page:t,pages:a}),React__default.createElement(NextPageButton,{css:p.nextPageBtn,page:t,pages:a,handleNextClick:d})),React__default.createElement("div",{className:"column is-1"}),c?React__default.createElement("div",{className:"column is-3"}):React__default.createElement("div",{className:"column is-3 buttons are-small has-addons is-right"},React__default.createElement(RotateLeft,{css:p.rotateLeftBtn,rotationAngle:i,handleRotateLeft:g}),React__default.createElement(ResetRotation,{css:p.resetRotationBtn,rotationAngle:i,handleResetRotation:_}),React__default.createElement(RotateRight,{css:p.rotateRightBtn,rotationAngle:i,handleRotateRight:R})))};Navigation.propTypes={page:PropTypes.number.isRequired,pages:PropTypes.number.isRequired,scale:PropTypes.number,defaultScale:PropTypes.number,maxScale:PropTypes.number,minScale:PropTypes.number,rotationAngle:PropTypes.number,hideZoom:PropTypes.bool,hideRotation:PropTypes.bool,css:PropTypes.shape({navbarWrapper:PropTypes.string,pages:PropTypes.string,pageIndicator:PropTypes.string,previousPageBtn:PropTypes.string,nextPageBtn:PropTypes.string,zoomOutBtn:PropTypes.string,resetZoomBtn:PropTypes.string,zoomInBtn:PropTypes.string,rotateLeftBtn:PropTypes.string,resetRotationBtn:PropTypes.string,rotateRightBtn:PropTypes.string}),elements:PropTypes.shape({previousPageBtn:PropTypes.any,nextPageBtn:PropTypes.any,pages:PropTypes.any}),handlePrevClick:PropTypes.func.isRequired,handleNextClick:PropTypes.func.isRequired,handleZoomIn:PropTypes.func.isRequired,handleResetZoom:PropTypes.func.isRequired,handleZoomOut:PropTypes.func.isRequired,handleRotateLeft:PropTypes.func.isRequired,handleResetRotation:PropTypes.func.isRequired,handleRotateRight:PropTypes.func.isRequired},Navigation.defaultProps={css:{},elements:{}};var loader={display:"inline-block",verticalAlign:"text-bottom",backgroundColor:"currentColor",borderRadius:"50%",opacity:0,width:"0.5rem",height:"0.5rem",animationDuration:"0.75s",animationTimingFunction:"linear",animationIterationCount:"infinite",animationDirection:"normal",animationFillMode:"none",animationPlayState:"running",animationName:"spinner-grow"},loader1=_objectSpread2({},loader,{animationDelay:"0s"}),loader2=_objectSpread2({},loader,{animationDelay:"0.25s"}),loader3=_objectSpread2({},loader,{animationDelay:"0.5s"}),Loader=function(){return React__default.createElement("div",{className:"flex-row has-margin-10 justify-center align-items-flex-end"},React__default.createElement("p",{className:"is-size-3 flex-column is-marginless"},"Loading"),React__default.createElement("div",{className:"flex-column has-padding-10"},React__default.createElement("div",{style:loader1})),React__default.createElement("div",{className:"flex-column has-padding-10"},React__default.createElement("div",{style:loader2})),React__default.createElement("div",{className:"flex-column has-padding-10"},React__default.createElement("div",{style:loader3})))},PDFViewer=function(){function a(e){var t;return _classCallCheck(this,a),(t=_possibleConstructorReturn(this,_getPrototypeOf(a).call(this,e))).state={page:t.props.page,pages:0,scale:t.props.scale,defaultScale:t.props.scale,rotationAngle:t.props.rotationAngle,isReady:!1},t.getPageCount=t.getPageCount.bind(_assertThisInitialized(t)),t.handlePrevClick=t.handlePrevClick.bind(_assertThisInitialized(t)),t.handleNextClick=t.handleNextClick.bind(_assertThisInitialized(t)),t.handleZoomIn=t.handleZoomIn.bind(_assertThisInitialized(t)),t.handleResetZoom=t.handleResetZoom.bind(_assertThisInitialized(t)),t.handleZoomOut=t.handleZoomOut.bind(_assertThisInitialized(t)),t.handleRotateLeft=t.handleRotateLeft.bind(_assertThisInitialized(t)),t.handleResetRotation=t.handleResetRotation.bind(_assertThisInitialized(t)),t.handleRotateRight=t.handleRotateRight.bind(_assertThisInitialized(t)),t}return _inherits(a,React__default.Component),_createClass(a,[{key:"getPageCount",value:function(e){this.state.pages!==e&&this.setState({pages:e,isReady:!0})}},{key:"handlePrevClick",value:function(){1!==this.state.page&&(this.setState({page:this.state.page-1}),this.props.onPrevBtnClick&&this.props.onPrevBtnClick(this.state.page-1))}},{key:"handleNextClick",value:function(){this.state.page!==this.pages&&(this.setState({page:this.state.page+1}),this.props.onNextBtnClick&&this.props.onNextBtnClick(this.state.page+1))}},{key:"handleZoomIn",value:function(){this.state.scale<this.props.maxScale&&this.setState({scale:this.state.scale+this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale+this.props.scaleStep)}},{key:"handleResetZoom",value:function(){this.setState({scale:this.state.defaultScale}),this.props.onZoom&&this.props.onZoom(this.state.defaultScale)}},{key:"handleZoomOut",value:function(){this.state.scale>this.props.minScale&&this.setState({scale:this.state.scale-this.props.scaleStep}),this.props.onZoom&&this.props.onZoom(this.state.scale-this.props.scaleStep)}},{key:"handleRotateLeft",value:function(){-90!==this.state.rotationAngle&&this.setState({rotationAngle:-90}),this.props.onRotation&&this.props.onRotation(-90)}},{key:"handleResetRotation",value:function(){0!==this.state.rotationAngle&&this.setState({rotationAngle:0}),this.props.onRotation&&this.props.onRotation(0)}},{key:"handleRotateRight",value:function(){90!==this.state.rotationAngle&&this.setState({rotationAngle:90}),this.props.onRotation&&this.props.onRotation(90)}},{key:"render",value:function(){for(var e,t=this,a=0,n=Object.entries(this.props.document);a<n.length;a++){var s=_slicedToArray(n[a],2),r=s[0],o=s[1];e="base64"===r?{data:atob(o)}:o}var i=this.props,l=i.loader,c=i.maxScale,p=i.minScale,u=i.hideNavbar,d=i.hideZoom,m=i.hideRotation,h=i.navbarOnTop,f=i.navigation,g=i.css,_=i.canvasCss,R=i.onDocumentClick,y=i.protectContent,P=i.watermark,b=i.alert,T=this.state,v=T.page,E=T.pages,N=T.scale,k=T.defaultScale,x=T.rotationAngle,C=f,S=React__default.createElement(RenderPdf,{src:e,pageNum:v,scale:N,rotation:x,pageCount:function(e){return t.getPageCount(e)},protectContent:y,watermark:P,alert:b}),w=null;return!u&&0<E&&(w=!f||f&&"object"===_typeof(f)?React__default.createElement(Navigation,{page:v,pages:E,scale:N,defaultScale:k,maxScale:c,minScale:p,rotationAngle:x,hideZoom:d,hideRotation:m,css:f?f.css:void 0,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight}):React__default.createElement(C,{page:v,pages:E,scale:N,defaultScale:k,maxScale:c,minScale:p,rotationAngle:x,hideZoom:d,hideRotation:m,handleNextClick:this.handleNextClick,handlePrevClick:this.handlePrevClick,handleZoomIn:this.handleZoomIn,handleResetZoom:this.handleResetZoom,handleZoomOut:this.handleZoomOut,handleRotateLeft:this.handleRotateLeft,handleResetRotation:this.handleResetRotation,handleRotateRight:this.handleRotateRight})),React__default.createElement("div",{className:g||"container text-center"},React__default.createElement("div",{style:{display:this.state.isReady?"none":"block"}},React__default.createElement("div",{className:_||"",style:_?{}:{height:"1000px",maxHeight:"1000px",maxWidth:"1000px",overflow:"auto"}},l||React__default.createElement(Loader,null))),React__default.createElement("div",{style:{display:this.state.isReady?"block":"none"}},h?React__default.createElement("div",null,React__default.createElement("div",null,w),React__default.createElement("div",{className:_||"",style:_?{}:{height:"1000px",maxHeight:"1000px",maxWidth:"1000px",overflow:"auto"},onClick:R},S)):React__default.createElement("div",null,React__default.createElement("div",{className:_||"",style:_?{}:{height:"1000px",maxHeight:"1000px",maxWidth:"1000px",overflow:"auto"},onClick:R},S),React__default.createElement("div",null,w))))}}]),a}();PDFViewer.propTypes={document:PropTypes.shape({url:PropTypes.string,base64:PropTypes.string}).isRequired,loader:PropTypes.node,page:PropTypes.number,scale:PropTypes.number,scaleStep:PropTypes.number,maxScale:PropTypes.number,minScale:PropTypes.number,css:PropTypes.string,canvasCss:PropTypes.string,rotationAngle:PropTypes.number,onDocumentClick:PropTypes.func,onPrevBtnClick:PropTypes.func,onNextBtnClick:PropTypes.func,onZoom:PropTypes.func,onRotation:PropTypes.func,hideNavbar:PropTypes.bool,navbarOnTop:PropTypes.bool,hideZoom:PropTypes.bool,hideRotation:PropTypes.bool,protectContent:PropTypes.bool,watermark:PropTypes.shape({text:PropTypes.string,diagonal:PropTypes.bool,opacity:PropTypes.string,size:PropTypes.string,color:PropTypes.string}),alert:PropTypes.any,navigation:PropTypes.oneOfType([PropTypes.shape({css:PropTypes.shape({navbarWrapper:PropTypes.string,zoomOutBtn:PropTypes.string,resetZoomBtn:PropTypes.string,zoomInBtn:PropTypes.string,previousPageBtn:PropTypes.string,pageIndicator:PropTypes.string,nextPageBtn:PropTypes.string,rotateLeftBtn:PropTypes.string,resetRotationBtn:PropTypes.string,rotateRightBtn:PropTypes.string})}),PropTypes.any])},PDFViewer.defaultProps={page:1,defaultScale:1,scale:1,scaleStep:1,maxScale:3,minScale:1,rotationAngle:0,hideNavbar:!1,hideZoom:!1,hideRotation:!1,navbarOnTop:!1},module.exports=PDFViewer;
