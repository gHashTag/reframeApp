module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/WelcomePage.config.js":
/*!*************************************!*\
  !*** ./pages/WelcomePage.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Header */ "./views/Header/index.js");





const Welcome = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { style: { margin: 'auto', maxWidth: 500 } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h2',
            { style: { fontWeight: 'normal' } },
            'Welcome to Reframe'
        ),
        'Interactive/stateful pages',
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'ul',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'a',
                    { href: '/counter' },
                    '/counter'
                ),
                ' - Counter'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'a',
                    { href: '/time' },
                    '/time'
                ),
                ' - Display time'
            )
        ),
        'Non-interactive pages',
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'ul',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'a',
                    { href: '/game-of-thrones' },
                    '/game-of-thrones'
                ),
                ' - Load and display list of GoT characters'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'a',
                    { href: '/' },
                    '/'
                ),
                ' - This landing page'
            )
        )
    )
);

const WelcomePage = {
    route: '/',
    view: Welcome,
    title: 'Welcome',
    // The WelcomePage's HTML doesn't need to be re-rendered on every page request.
    // Hence, we set `htmlStatic` to `true` to render the HTML at build-time instead of request-time.
    htmlStatic: true,
    // This page contains no interactive/stateful views.
    // Thus, we set `domStatic` to `true` to avoid loading unnecessary JavaScript code.
    domStatic: true
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomePage);

/***/ }),

/***/ "./views/Header/Header.css":
/*!*********************************!*\
  !*** ./views/Header/Header.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./views/Header/Header.js":
/*!********************************!*\
  !*** ./views/Header/Header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ 3:
/*!*******************************************!*\
  !*** multi ./pages/WelcomePage.config.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xyz/reframeApp/pages/WelcomePage.config.js */"./pages/WelcomePage.config.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=WelcomePage-nodejs.js.map