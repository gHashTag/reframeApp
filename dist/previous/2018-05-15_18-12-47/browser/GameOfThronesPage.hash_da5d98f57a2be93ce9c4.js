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
/******/ 		"GameOfThronesPage": 0
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
/******/ 	deferredModules.push([2,"vendors~CounterPage~GameOfThronesPage~TimePage~WelcomePage"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/source-code/browser-entries/GameOfThronesPage-browser.js":
/*!***********************************************************************!*\
  !*** ./dist/source-code/browser-entries/GameOfThronesPage-browser.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(() => {
  const getProjectBrowserConfig = __webpack_require__(/*! ./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js */ "./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js");

  const projectBrowserConfig = getProjectBrowserConfig();

  projectBrowserConfig.addPlugins([__webpack_require__(/*! ./node_modules/@reframe/react/browser.js */ "./node_modules/@reframe/react/browser.js")(), __webpack_require__(/*! ./node_modules/@reframe/path-to-regexp/browser.js */ "./node_modules/@reframe/path-to-regexp/browser.js")()]);
})();

(() => {
  const getProjectBrowserConfig = __webpack_require__(/*! ./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js */ "./node_modules/@reframe/utils/process-config/getProjectBrowserConfig.js");

  const projectBrowserConfig = getProjectBrowserConfig();

  let pageConfig = __webpack_require__(/*! ./pages/GameOfThronesPage/GameOfThronesPage.config.js */ "./pages/GameOfThronesPage/GameOfThronesPage.config.js");
  pageConfig = (pageConfig || {}).__esModule === true ? pageConfig.default : pageConfig;

  projectBrowserConfig.setCurrentPageConfig(pageConfig);
})();

__webpack_require__(/*! ./node_modules/@reframe/browser/browserEntry.js */ "./node_modules/@reframe/browser/browserEntry.js");

/***/ }),

/***/ "./node_modules/@brillout/fetch/fetch.js":
/*!***********************************************!*\
  !*** ./node_modules/@brillout/fetch/fetch.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const fetch = (
    typeof window !== "undefined" ? (
        window.fetch
    ) : (
        // we use `eval('require')` instead of `require` to
        // make sure that webpack doesn't bundle `node-fetch`
        eval('require')('node-fetch')
    )
);

module.exports = fetch;


/***/ }),

/***/ "./pages/GameOfThronesPage/GameOfThronesPage.config.js":
/*!*************************************************************!*\
  !*** ./pages/GameOfThronesPage/GameOfThronesPage.config.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/Header */ "./views/Header/index.js");
/* harmony import */ var _getJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJson */ "./pages/GameOfThronesPage/getJson.js");






// We load the list of characters from a remote server.
const getInitialProps = async () => {
    const characters = await Object(_getJson__WEBPACK_IMPORTED_MODULE_2__["default"])('https://api.myjson.com/bins/12ktoq');
    return { characters };
};

// Our loaded list is then available at `props.characters`.
const GoT = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { style: { margin: 'auto', maxWidth: 500 } },
        'List of characters loaded from remote server.',
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CharacterList, { characters: props.characters })
    )
);

const CharacterList = ({ characters }) => {
    if (characters === null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            'You are offline. Can\'t retrieve list of characters. '
        );
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'ul',
        null,
        characters.map(character => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'li',
            { key: character.id },
            character.name
        ))
    );
};

/* harmony default export */ __webpack_exports__["default"] = ({
    route: '/game-of-thrones',
    getInitialProps,
    view: GoT,
    // Because we set `htmlStatic` to `false`, the page's HTML is re-rendered on every page request
    // and the list of characters is re-loaded on every page request.
    // If we set `htmlStatic` to `true` then the list is loaded only once (at build-time).
    htmlStatic: false,
    // This page has no interactive/stateful views.
    domStatic: true
});

/***/ }),

/***/ "./pages/GameOfThronesPage/getJson.js":
/*!********************************************!*\
  !*** ./pages/GameOfThronesPage/getJson.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brillout_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brillout/fetch */ "./node_modules/@brillout/fetch/fetch.js");
/* harmony import */ var _brillout_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_brillout_fetch__WEBPACK_IMPORTED_MODULE_0__);




async function getJson(url) {
    const characters = await _brillout_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).catch(err => {
        if (err.code === 'EAI_AGAIN') {
            return null;
        }
        console.error(url);
        throw err;
    });
    return characters;
}

/* harmony default export */ __webpack_exports__["default"] = (getJson);

/***/ }),

/***/ "./views/Header/Header.css":
/*!*********************************!*\
  !*** ./views/Header/Header.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./views/Header/Header.js":
/*!********************************!*\
  !*** ./views/Header/Header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ "./views/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./views/Header/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_2__);






const Header = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'header' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        { href: '/' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a, className: 'logo' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            null,
            'MyApp'
        )
    )
);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./views/Header/index.js":
/*!*******************************!*\
  !*** ./views/Header/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./views/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./views/Header/logo.svg":
/*!*******************************!*\
  !*** ./views/Header/logo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.hash_a58c73cea39efb53701a30522cd1d6a0.svg";

/***/ }),

/***/ 2:
/*!*****************************************************************************!*\
  !*** multi ./dist/source-code/browser-entries/GameOfThronesPage-browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xyz/reframeApp/dist/source-code/browser-entries/GameOfThronesPage-browser.js */"./dist/source-code/browser-entries/GameOfThronesPage-browser.js");


/***/ })

/******/ });
//# sourceMappingURL=GameOfThronesPage.hash_da5d98f57a2be93ce9c4.js.map