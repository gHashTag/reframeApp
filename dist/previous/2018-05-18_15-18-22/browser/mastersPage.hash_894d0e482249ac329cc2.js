/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"mastersPage": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,"vendors~contactsPage~homePage~mastersPage","vendors~homePage~mastersPage","homePage~mastersPage"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/source-code/browser-entries/mastersPage-browser.js":
/*!*****************************************************************!*\
  !*** ./dist/source-code/browser-entries/mastersPage-browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(() => {
  const getProjectBrowserConfig = __webpack_require__(/*! ./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js */ "./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js");

  const projectBrowserConfig = getProjectBrowserConfig();

  projectBrowserConfig.addPlugins([__webpack_require__(/*! ./node_modules/@reframe/react-router/browser.js */ "./node_modules/@reframe/react-router/browser.js")(), __webpack_require__(/*! ./node_modules/@reframe/react-native-web/browser.js */ "./node_modules/@reframe/react-native-web/browser.js")(), __webpack_require__(/*! ./node_modules/@reframe/react/browser.js */ "./node_modules/@reframe/react/browser.js")(), __webpack_require__(/*! ./node_modules/@reframe/path-to-regexp/browser.js */ "./node_modules/@reframe/path-to-regexp/browser.js")()]);
})();

(() => {
  const getProjectBrowserConfig = __webpack_require__(/*! ./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js */ "./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js");

  const projectBrowserConfig = getProjectBrowserConfig();

  let pageConfig = __webpack_require__(/*! ./pages/mastersPage.config.js */ "./pages/mastersPage.config.js");
  pageConfig = (pageConfig || {}).__esModule === true ? pageConfig.default : pageConfig;

  projectBrowserConfig.setCurrentPageConfig(pageConfig);
})();

__webpack_require__(/*! ./node_modules/@reframe/browser/browserEntry.js */ "./node_modules/@reframe/browser/browserEntry.js");

/***/ }),

/***/ "./pages/mastersPage.config.js":
/*!*************************************!*\
  !*** ./pages/mastersPage.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Masters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Masters */ "./views/Masters/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);





const MastersPage = {
  route: '/masters/master/:params*',
  view: _views_Masters__WEBPACK_IMPORTED_MODULE_0__["default"],
  title: 'Masters'
};
/* harmony default export */ __webpack_exports__["default"] = (MastersPage);

/***/ }),

/***/ 4:
/*!***********************************************************************!*\
  !*** multi ./dist/source-code/browser-entries/mastersPage-browser.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xyz/reframeApp/dist/source-code/browser-entries/mastersPage-browser.js */"./dist/source-code/browser-entries/mastersPage-browser.js");


/***/ })

/******/ });
//# sourceMappingURL=mastersPage.hash_894d0e482249ac329cc2.js.map