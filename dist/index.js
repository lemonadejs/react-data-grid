(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lemonadejs"));
	else if(typeof define === 'function' && define.amd)
		define(["lemonadejs"], factory);
	else if(typeof exports === 'object')
		exports["Datagrid-react"] = factory(require("lemonadejs"));
	else
		root["Datagrid-react"] = factory(root["lemonadejs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__226__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 534:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

if (! lemonade && "function" === 'function') {
    var lemonade = __webpack_require__(226);
}
!function(e,t){ true?module.exports=t():0}(this,(function(){return function(){var e={794:function(e){e.exports=function(){let e={},t=lemonade;document.addEventListener("click",(function(t){if("TH"==t.target.tagName&&t.target.lemon){let n=t.target.lemon.self;n.name===e.sortingBy?e.sortingAsc=!e.sortingAsc:e.sortingAsc=!1,n.parent.setData(n.parent.data.sort(((t,a)=>e.sortingAsc?"string"==typeof t[n.name]&&"string"==typeof a[n.name]?a[n.name].localeCompare(t[n.name]):Number(a[n.name])-Number(t[n.name]):"string"==typeof t[n.name]&&"string"==typeof a[n.name]?t[n.name].localeCompare(a[n.name]):Number(t[n.name])-Number(a[n.name])))),e.sortingBy=n.name}"TD"==t.target.tagName&&t.target.parentNode.lemon&&(e.selectedCell&&e.selectedCell.classList.remove("datagrid-selected"),e.selectedCell==t.target?e.selectedCell=null:(t.target.classList.add("datagrid-selected"),e.selectedCell=t.target))})),document.addEventListener("dblclick",(function(t){"TD"==t.target.tagName&&t.target.parentNode.lemon&&(e.onEdition=[t.target,t.target.parentNode.lemon.self,t.target.property],t.target.setAttribute("contentEditable",!0),t.target.focus())})),document.addEventListener("blur",(function(t){t.target==e.selectedCell&&(t.target.classList.remove("datagrid-selected"),e.selectedCell=null),e.onEdition&&t.target==e.onEdition[0]&&(e.onEdition[0].removeAttribute("contentEditable"),e.onEdition[1].parent.setValue(e.onEdition[2],Array.prototype.indexOf.call(e.onEdition[0].parentNode.parentNode.children,e.onEdition[0].parentNode),t.target.innerText),e.onEdition=[])}),!0),document.addEventListener("keydown",(function(t){"Enter"==t.key&&e.onEdition&&e.onEdition[0].blur()}));const n=function(){let e=this,n=e.result=e.data;e.goto=function(t){e.page=t},e.setData=function(t){n=e.result=e.data=t,e.page=0,o(),"function"==typeof e.onupdate&&e.onupdate(e.result)},e.setValue=function(t,n,a){let o="number"==typeof t?e.columns[t].name:t;e.data[n][o]=a,"function"==typeof e.onupdate&&e.onupdate(e.result,{x:t,y:n,value:a})},e.loadPages=function(){o()},e.onchange=function(t){"data"===t||"input"===t?(a(e.input),"function"==typeof e.onsearch&&e.onsearch(e)):"page"===t&&(o(),"function"==typeof e.onchangepage&&e.onchangepage(e))},e.onload=function(){e.pagination>0&&(e.page=0),e.search="true"==e.search};const a=function(t){n=e.result=e.data.filter((function(e){return function(e,t){for(let n in e)if((""+e[n]).toLowerCase().search(t.toLowerCase())>=0)return!0;return!1}(e,t)})),e.page=0},o=function(){let t,a,o=parseInt(e.pagination);o&&n.length>o?(t=o*e.page,a=o*e.page+o,n.length<a&&(a=n.length)):(t=0,a=n.length),o=[];for(let e=t;e<a;e++)o.push(n[e]);e.result=o,r()},r=function(){let t=[];if(e.pagination>0){let a=Math.ceil(n.length/e.pagination);if(a>=1){let n,o,r;for(e.page<6?(n=0,o=a<10?a:10):a-e.page<5?(n=a-9,o=a,n<0&&(n=0)):(n=parseInt(e.page)-4,o=parseInt(e.page)+5),t.push({title:Number(e.page)>0?Number(e.page)-1:Number(e.page),value:"Previous",selected:!1}),r=n;r<o;r++)t.push({title:r,value:r+1,selected:e.page==r});t.push({title:Number(e.page)<r-1?Number(e.page)+1:Number(e.page),value:"Next",selected:!1})}}e.pages=t};let i="";e.columns.forEach((e=>{i+=`<td :property="'${e.name}'" style="width: ${e.width||"80px"};text-align: ${e.align||"left"};">${e.renderCell?e.renderCell:`{{self.${e.name}}}`}</td>`}));let l=`<div class="datagrid-card">\n                          <div class="datagrid-search-section" search="{{self.search}}">Search:<input type='text' @bind="self.input"/></div>\n                          <table id="datagrid-table" class="datagrid-table">\n                            <thead>\n                                <tr @loop="self.columns">\n                                    <th style="width: {{self.width || '80px'}};">\n                                        {{self.headerName}}\n                                    </th>\n                                </tr>\n                            </thead>\n                            <tbody @loop="self.result">\n                                <tr>${i}</tr>\n                            </tbody>\n                          </table>\n                          <div class="datagrid-pagination-section"><ul page="{{self.page}}"><Pagination @loop="self.pages"/></ul></div>\n                        </div>`;return t.element(l,e,{Pagination:function(){return t.element('<li onclick="self.parent.page = this.title;" title="{{self.title}}" selected="{{self.selected}}">{{self.value}}</li>',this)}})};return function(e,a){return"object"==typeof e?(t.render(n,e,a),a):n.call(this,e)}}()}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var a={};return function(){"use strict";var e=n(794),t=n.n(e);a.default=t()}(),a.default}()}));

/***/ }),

/***/ 226:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__226__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

;// CONCATENATED MODULE: external "react"
var external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@lemonadejs/datagrid/dist/index.js
var dist = __webpack_require__(534);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/datagrid-react.js




const DatagridReact = external_react_default().forwardRef((props, mainReference) => {
    const dgDom = (0,external_react_namespaceObject.useRef)();

    (0,external_react_namespaceObject.useEffect)(() => {
        if (dgDom.current.innerText) {
            mainReference.current.setData(props.data)
            mainReference.current.columns = props.columns
            mainReference.current.pagination = props.pagination
            mainReference.current.search = props.search
            mainReference.current.loadPages()
        } else {
            mainReference.current = dist_default()(dgDom.current, { ...props });
        }
    })

    return external_react_default().createElement("div", { ref: dgDom })
})

/* harmony default export */ var datagrid_react = (DatagridReact);

;// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ var src = (datagrid_react);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});