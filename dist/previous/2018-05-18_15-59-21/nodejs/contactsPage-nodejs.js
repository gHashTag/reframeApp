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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/contactsPage.config.js":
/*!**************************************!*\
  !*** ./pages/contactsPage.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Contacts */ "./views/Contacts/index.js");




const ContactsPage = {
  route: '/contacts',
  view: _views_Contacts__WEBPACK_IMPORTED_MODULE_0__["default"],
  title: 'Contacts'
};
/* harmony default export */ __webpack_exports__["default"] = (ContactsPage);

/***/ }),

/***/ "./views/Contacts/index.js":
/*!*********************************!*\
  !*** ./views/Contacts/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "react-native-web/dist/exports/StyleSheet");
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "react-native-web/dist/exports/Text");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "react-native-web/dist/exports/View");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);









const Contacts = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,
  { style: styles.container },
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a,
    { style: { position: 'absolute', top: '50%', right: '15%' } },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a,
      { style: { fontFamily: 'Museo500', fontSize: 80, textAlign: 'right' } },
      'Hello'
    )
  )
);

const styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

/***/ 0:
/*!********************************************!*\
  !*** multi ./pages/contactsPage.config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xyz/reframeApp/pages/contactsPage.config.js */"./pages/contactsPage.config.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native-web/dist/exports/StyleSheet":
/*!***********************************************************!*\
  !*** external "react-native-web/dist/exports/StyleSheet" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/StyleSheet");

/***/ }),

/***/ "react-native-web/dist/exports/Text":
/*!*****************************************************!*\
  !*** external "react-native-web/dist/exports/Text" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/Text");

/***/ }),

/***/ "react-native-web/dist/exports/View":
/*!*****************************************************!*\
  !*** external "react-native-web/dist/exports/View" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native-web/dist/exports/View");

/***/ })

/******/ });
//# sourceMappingURL=contactsPage-nodejs.js.map