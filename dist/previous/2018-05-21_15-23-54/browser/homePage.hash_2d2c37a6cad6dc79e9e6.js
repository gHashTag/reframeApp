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
/******/ 		"homePage": 0
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
/******/ 	deferredModules.push([2,"vendors~contactsPage~homePage~mastersPage","vendors~homePage~mastersPage","homePage~mastersPage"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/source-code/browser-entries/homePage-browser.js":
/*!**************************************************************!*\
  !*** ./dist/source-code/browser-entries/homePage-browser.js ***!
  \**************************************************************/
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

  let pageConfig = __webpack_require__(/*! ./pages/homePage.config.js */ "./pages/homePage.config.js");
  pageConfig = (pageConfig || {}).__esModule === true ? pageConfig.default : pageConfig;

  projectBrowserConfig.setCurrentPageConfig(pageConfig);
})();

__webpack_require__(/*! ./node_modules/@reframe/browser/browserEntry.js */ "./node_modules/@reframe/browser/browserEntry.js");

/***/ }),

/***/ "./pages/homePage.config.js":
/*!**********************************!*\
  !*** ./pages/homePage.config.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_homeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/homeView */ "./views/homeView.js");





const HomePage = {
    route: '/:params*',
    view: _views_homeView__WEBPACK_IMPORTED_MODULE_1__["default"],
    title: 'Home'
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./views/Contacts/index.js":
/*!*********************************!*\
  !*** ./views/Contacts/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/Image */ "./node_modules/react-native-web/dist/exports/Image/index.js");
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);










class Contacts extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const img = "http://www.cityretreat.ru/static/media/8.737bc909.png";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,
      { style: styles.container },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,
        { style: { position: 'absolute', top: '50%', right: '15%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a,
          { style: { fontFamily: 'Museo500', fontSize: 80, textAlign: 'right' } },
          'Hello!!!!'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4___default.a, { source: img, style: { position: 'absolute', left: '8%', bottom: 0, width: 500, height: 500 } })
    );
  }
}

const styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  container: {
    flex: 1,
    backgroundColor: 'gold'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./views/Home/index.js":
/*!*****************************!*\
  !*** ./views/Home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/Image */ "./node_modules/react-native-web/dist/exports/Image/index.js");
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);










class Home extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const img = "http://www.cityretreat.ru/static/media/8.737bc909.png";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,
      { style: styles.container },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,
        { style: { position: 'absolute', top: '50%', right: '15%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a,
          { style: { fontFamily: 'Museo500', fontSize: 80, textAlign: 'right' } },
          'Home'
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_4___default.a, { source: img, style: { position: 'absolute', left: '8%', bottom: 0, width: 500, height: 500 } })
    );
  }
}

const styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  container: {
    flex: 1,
    backgroundColor: 'gold'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./views/homeView.js":
/*!***************************!*\
  !*** ./views/homeView.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Masters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Masters */ "./views/Masters/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./views/Home/index.js");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contacts */ "./views/Contacts/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);









const HomeView = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  'div',
  null,
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { exact: true, path: '/', component: _Home__WEBPACK_IMPORTED_MODULE_3__["default"] }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: '/masters', component: _Masters__WEBPACK_IMPORTED_MODULE_2__["default"] }),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: '/contacts', component: _Contacts__WEBPACK_IMPORTED_MODULE_4__["default"] })
);

/* harmony default export */ __webpack_exports__["default"] = (HomeView);

/***/ }),

/***/ 2:
/*!********************************************************************!*\
  !*** multi ./dist/source-code/browser-entries/homePage-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xyz/reframeApp/dist/source-code/browser-entries/homePage-browser.js */"./dist/source-code/browser-entries/homePage-browser.js");


/***/ })

/******/ });
//# sourceMappingURL=homePage.hash_2d2c37a6cad6dc79e9e6.js.map