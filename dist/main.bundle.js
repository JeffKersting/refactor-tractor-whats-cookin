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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n  background-color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  margin: 0.67em 0;\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n.login {\n  display: none;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  height: 45vh;\n  margin-top: 10%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  padding: 25px;\n  border-radius: 10px;\n  background-color: #b6dcca;\n  text-align: center;\n  box-shadow: inset 0 0 15px #C4EB67; }\n\n.welcome-background {\n  background: #C4EB67;\n  height: 75px;\n  width: 110%;\n  transform: translateX(-5%);\n  border-radius: 15px; }\n\n.welcome {\n  height: 100%;\n  line-height: 1.5;\n  font-size: 3em;\n  font-weight: bolder;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.65);\n  mix-blend-mode: multiply;\n  border-radius: 15px; }\n\n.welcome-text {\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n\n.user-icon {\n  background: black;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  font-size: 8em;\n  margin: 15px auto 20px auto; }\n\n.user-input {\n  align-self: center;\n  width: 40%; }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  grid-area: header;\n  padding: 0% 0%;\n  width: 100%;\n  position: fixed;\n  background-color: #5B7894;\n  height: 9%; }\n\n.filter {\n  display: none; }\n\n.home-btn-apple {\n  display: none;\n  font-size: 2em;\n  background: #C4EB67;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n\nh1 {\n  background: #C4EB67;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n  font-weight: 200; }\n\nspan {\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px; }\n\n#search {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset #C4EB67;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Quicksand\", sans-serif;\n  justify-content: center;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  align-self: center; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%; }\n  #search-input:hover {\n    box-shadow: inset 0px 0px 0px 0px white;\n    transition: .8s ease; }\n  #search-input:focus {\n    box-shadow: inset 0px 0px 0px 0px white; }\n  #search-input::placeholder {\n    color: #5B7894;\n    font-size: 20px;\n    text-align: right;\n    text-shadow: none; }\n  #search-input:focus::placeholder {\n    font-size: 0px;\n    transition: .8s ease; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px; }\n\n.nav-btn {\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  margin: 0%;\n  outline: none;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease; }\n  .nav-btn img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px; }\n\n.stroke-right {\n  border-right: 3px solid #C4EB67; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 15%;\n  overflow: hidden;\n  width: 100%;\n  position: fixed;\n  top: 9%; }\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%; }\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: white;\n  width: 100%; }\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px; }\n\n.welcome-msg {\n  margin-top: 50px; }\n\naside {\n  background-color: #DAE4EE;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  position: fixed;\n  top: 24%;\n  width: 15%;\n  margin-left: -1%; }\n\n.wrap {\n  background-color: #DAE4EE;\n  height: 100vh;\n  position: relative; }\n\nul {\n  list-style-type: none;\n  text-align: left; }\n\nmain {\n  position: absolute;\n  top: 25%;\n  left: 15%;\n  width: 85%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: minmax(400px, auto);\n  z-index: -1; }\n\n.recipe-card {\n  border-radius: 7px;\n  height: 75%;\n  margin: 0 10px 0 10px;\n  padding: 15px;\n  width: 85%;\n  margin-left: 50%;\n  transform: translate(-50%) rotateY(0deg) scaleY(1);\n  perspective: 1000px;\n  transition: transform 1.6s ease; }\n  .recipe-card .card-front {\n    transition: transform 1.5s ease;\n    margin-left: 50%;\n    transform: translate(-50%) rotateY(0deg) scaleY(1); }\n  .recipe-card .card-back {\n    transition: transform 1.5s ease;\n    transform: scaleY(1) rotateY(180deg);\n    box-shadow: 0 2px 5px 2px black;\n    z-index: 100; }\n\n.overlap {\n  z-index: 100; }\n\n.recipe-card-active {\n  border-radius: 7px;\n  height: 75%;\n  margin: 0 10px 0 10px;\n  padding: 15px;\n  width: 85%;\n  perspective: 1000px;\n  transition: transform 1.6s ease;\n  z-index: 99;\n  margin-left: 50%;\n  transform: translateX(-50%); }\n  .recipe-card-active .flip-card {\n    transform: rotateY(180deg); }\n  .recipe-card-active .card-back {\n    transition: transform 1.5s ease;\n    -webkit-font-smoothing: subpixel-antialiased;\n    transform: scaleY(2) rotateY(180deg) translate(50%, 25%);\n    box-shadow: 0 2px 5px 2px black; }\n  .recipe-card-active .card-front {\n    transition: transform 1.5s ease;\n    transform: scaleY(2) translateY(25%); }\n\n.flip-card {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 1.6s ease;\n  transform-style: preserve-3d; }\n\n.card-front,\n.card-back {\n  position: absolute;\n  border-radius: 7px;\n  width: 100%;\n  height: 100%;\n  margin: 20px;\n  padding: 15px;\n  background-color: #DAE4EE;\n  border: 2px solid #C4EB67;\n  backface-visibility: hidden;\n  margin-left: 50%;\n  transform: translateX(-50%); }\n\n.card-back p {\n  position: relative;\n  top: 5%;\n  height: 5%;\n  text-align: center;\n  transform: scaleY(0.5) perspective(1px);\n  font-size: 1.5em;\n  height: 0%;\n  margin: 0;\n  padding: 0;\n  color: #359567; }\n\n.card-back .ingredients {\n  position: relative;\n  top: 10%;\n  height: 45%;\n  overflow: auto;\n  font-size: .8em;\n  transform: scaleY(0.5);\n  margin: 0;\n  padding: 0;\n  line-height: .9;\n  background-color: #DAE4EE;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: 0 2px 5px 2px black; }\n\n.card-back .instructions {\n  position: relative;\n  overflow: auto;\n  height: 85%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  font-size: 1em;\n  transform: scaleY(0.5);\n  margin: -20% 0 0 0;\n  padding: 0;\n  line-height: 1.2;\n  background-color: #DAE4EE;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: 0 2px 5px 2px black; }\n\n.card-back #exit-recipe {\n  position: absolute;\n  top: 0%;\n  right: 5%;\n  transform: scaleY(0.5) rotate(-120deg);\n  font-size: 2em;\n  cursor: pointer;\n  background: #359567;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n  .card-back #exit-recipe:hover {\n    background: #84C8A4;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent; }\n\n.card-back button {\n  position: fixed;\n  bottom: 1%;\n  left: 5%;\n  transform: scaleY(0.7); }\n\n.card-back #cooked-recipe {\n  position: absolute;\n  bottom: 0%;\n  right: 5%;\n  transform: scaleY(0.5);\n  font-size: 2em;\n  cursor: pointer;\n  background: #359567;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n  .card-back #cooked-recipe:hover {\n    background: #84C8A4;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent; }\n\n.recipe-card:hover .card-photo-preview {\n  opacity: 50%;\n  transition: .8s ease; }\n\n.recipe-card:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  transition: .5s ease;\n  width: 100%; }\n\n.recipe-card:hover h3 {\n  text-shadow: 0px 0px 4px #C4EB67;\n  transition: .8s ease; }\n\n.to-cook-button {\n  float: left;\n  padding-top: 8%;\n  padding-left: 2%;\n  font-size: 3em;\n  cursor: pointer;\n  background: #84C8A4;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n  .to-cook-button p {\n    font-size: 14px;\n    margin-top: -5%;\n    margin-left: -18%;\n    text-align: left;\n    opacity: 0; }\n  .to-cook-button .to-cook {\n    background: #ff0800;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent; }\n  .to-cook-button:hover #icon-fav, .to-cook-button:hover #icon-cook {\n    background: #a40000;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    transform: translateY(-10%);\n    transition: .4s ease; }\n  .to-cook-button:hover p {\n    color: #a40000;\n    font-size: 14px;\n    text-shadow: 0px 1px 1px black;\n    transition: .4s ease;\n    margin-top: -12%;\n    opacity: 1; }\n\n.favorite-button {\n  float: right;\n  padding-top: 8%;\n  padding-right: 2%;\n  font-size: 3em;\n  cursor: pointer;\n  background: #84C8A4;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent; }\n  .favorite-button p {\n    font-size: 14px;\n    margin-top: -5%;\n    text-align: right;\n    opacity: 0; }\n  .favorite-button .favorited {\n    background: #ff0800;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent; }\n  .favorite-button:hover #icon-fav {\n    background: #a40000;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    transform: translateY(-10%);\n    transition: .4s ease; }\n  .favorite-button:hover p {\n    color: #a40000;\n    font-size: 14px;\n    text-shadow: 0px 1px 1px black;\n    transition: .4s ease;\n    margin-top: -12%;\n    opacity: 1; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%;\n  cursor: pointer; }\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  height: 130px;\n  justify-content: center;\n  position: relative;\n  cursor: pointer; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease; }\n\nbutton {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px; }\n\n.show-pantry-recipes-btn {\n  margin-top: 10px; }\n\n.show-all-btn {\n  height: 40px;\n  margin-top: 20px;\n  width: 200px; }\n\n.filter-btn:hover {\n  background-color: #84C8A4; }\n\n.login-btn {\n  margin-top: 5px;\n  width: 75px;\n  margin-left: 50%;\n  transform: translateX(-50%); }\n\n.load-animation {\n  position: fixed;\n  margin-top: 25%;\n  width: 200px;\n  height: 200px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  background: transparent;\n  border: 25px solid #DAE4EE;\n  border-right: 25px solid #359567;\n  border-radius: 50%;\n  animation: spin 5s linear infinite; }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3; }\n\n.drop-menu h2 {\n  color: #359567;\n  margin: 0px; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left; }\n\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n  .recipe-instructions h4 {\n    background: white;\n    color: #359567; }\n  .recipe-instructions p {\n    margin-left: 2%; }\n  .recipe-instructions ol {\n    margin-right: 2%; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 5px;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease; }\n\n#exit-recipe-btn:hover {\n  background: #C4EB67;\n  transition: .3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n\n.pantry {\n  position: fixed;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  background-color: #DAE4EE;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  box-shadow: 0 2px 5px 2px black;\n  top: 25%;\n  height: 70%;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  transition: 1.6s ease; }\n  .pantry #exit-pantry {\n    position: absolute;\n    top: 0%;\n    right: 2%;\n    transform: rotate(-120deg);\n    font-size: 2em;\n    cursor: pointer;\n    background: #359567;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent; }\n    .pantry #exit-pantry:hover {\n      background: #84C8A4;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      -moz-background-clip: text;\n      -moz-text-fill-color: transparent; }\n  .pantry .pantry-ingredients {\n    position: absolute;\n    overflow-y: scroll;\n    top: 15%;\n    width: 85%;\n    height: 60%;\n    font-size: 1em;\n    padding-left: 5%;\n    background-color: #DAE4EE;\n    border: 2px solid #C4EB67;\n    border-radius: 7px;\n    box-shadow: 0 2px 5px 2px black;\n    margin-left: 50%;\n    transform: translateX(-50%); }\n  .pantry h4 {\n    align-self: center;\n    text-decoration: underline;\n    font-size: 3em;\n    background-color: transparent; }\n  .pantry .add-ingredient-wrapper {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin-left: 50%;\n    transform: translateX(-50%); }\n  .pantry .add-ingredient-form {\n    position: fixed;\n    bottom: 5%;\n    width: 85%;\n    margin-left: 50%;\n    transform: translateX(-50%); }\n  .pantry .find-recipes-using-pantry-btn {\n    margin-top: 2%;\n    margin-left: 50%;\n    transform: translateX(-50%); }\n\n.pantry-hidden {\n  position: fixed;\n  transition: 1.6s ease;\n  display: none;\n  top: 50%; }\n\n@media only screen and (max-width: 1284px) {\n  .login {\n    width: 40vw; } }\n\n@media only screen and (max-width: 1072px) {\n  main {\n    left: 5%; }\n  header h1 {\n    display: none; }\n  header .filter {\n    display: block; }\n  header .home-btn-apple {\n    display: block; }\n  .login {\n    height: 45vh; }\n  .recipe-filters {\n    display: none; }\n  .filter-drop {\n    top: 9%;\n    left: 0%;\n    width: 200px;\n    margin-left: -2%;\n    border-radius: 7px; }\n    .filter-drop .wrap {\n      width: 110%;\n      height: auto;\n      background-color: #DAE4EE;\n      border: 2px solid #C4EB67;\n      border-radius: 7px;\n      box-shadow: 0 2px 5px 2px black; } }\n\n@media only screen and (max-width: 720px) {\n  .login {\n    width: 60vw;\n    height: 45vh; }\n  main {\n    grid-auto-rows: minmax(400px, 600px); }\n  .card-photo-container {\n    height: 200px; }\n    .card-photo-container img {\n      height: 100%; }\n  .recipe-card {\n    height: 90%; }\n  .favorite-button {\n    margin-top: 25%; }\n  .to-cook-button {\n    margin-top: 25%; }\n  .name-ingredient-form,\n  .quantity-ingredient-form,\n  .add-ingredient-button {\n    font-size: .5em; } }\n\n@media only screen and (max-width: 428px) {\n  .login {\n    width: 80vw; } }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/index.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login.scss","webpack://./src/css/_header.scss","webpack://./src/css/_banner.scss","webpack://./src/css/_sidebar.scss","webpack://./src/css/_recipe-display.scss","webpack://./src/css/_buttons.scss","webpack://./src/css/_loading.scss","webpack://./src/css/_pantry.scss","webpack://./src/css/_recipe.scss","webpack://./src/css/_modal.scss","webpack://./src/css/_responsiveness.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n  background-color: $primary-background;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  // font-size: 2em;\n  margin: 0.67em 0;\n  align-self: center;\n  color: white;\n  font-family: $secondary-font;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  width: 70%;\n}\n\nh2 {\n  color: $accent-secondary;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $dark-green;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease;\n}\n\nh4 {\n  color: $dark-green;\n  background-color: $accent-primary;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n","@import \"variables\";\n@import \"normalize\";\n@import \"login\";\n@import \"header\";\n@import \"banner\";\n@import \"sidebar\";\n@import \"recipe-display\";\n@import \"buttons\";\n@import \"loading\";\n@import \"pantry\";\n@import \"recipe\";\n@import \"modal\";\n@import \"responsiveness\";\n\n.hidden {\n  display: none;\n}\n","$primary-background: #5B7894;\n$secondary-background: #b6dcca;\n$accent-primary: #C4EB67;\n$accent-secondary:#84C8A4;\n$dark-green: #359567;\n$grey: #DAE4EE;\n$box-shadow: #475d74;\n$apple-red: #ff0800;\n$dark-apple-red: #a40000;\n\n$primary-font: \"Quicksand\", sans-serif;\n$secondary-font: \"Sulphur Point\", sans-serif;\n\n@mixin transparentText($bgColor) {\n  background: $bgColor;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n}\n\n@mixin lightenText() {\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-background-clip: text;\n  -moz-text-fill-color: transparent;\n}\n\n@mixin centerHorizontally() {\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n@mixin cardUnflipped() {\n  margin-left: 50%;\n  transform: translate(-50%) rotateY(0deg) scaleY(1);\n}\n\n@mixin defineSize($width, $height) {\n  width: $width;\n  height: $height;\n}\n\n@mixin displayRecipe() {\n  margin-left: 50%;\n  transform: rotateY(180deg) translateX(-50%);\n}\n\n@mixin cardStyling() {\n  background-color: $grey;\n  border: 2px solid $accent-primary;\n  border-radius: 7px;\n  box-shadow: 0 2px 5px 2px black;\n}\n",".login {\n  display: none;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  height: 45vh;\n  margin-top: 10%;\n  @include centerHorizontally();\n  padding: 25px;\n  border-radius: 10px;\n  background-color: $secondary-background;\n  text-align: center;\n  box-shadow: inset 0 0 15px $accent-primary;\n}\n\n.welcome-background {\n  background: $accent-primary;\n  height: 75px;\n  width: 110%;\n  transform: translateX(-5%);\n  border-radius: 15px;\n}\n\n\n.welcome {\n  height: 100%;\n  line-height: 1.5;\n  font-size: 3em;\n  font-weight: bolder;\n  text-align: center;\n  background: rgba(0,0,0,.65);\n  mix-blend-mode: multiply;\n  border-radius: 15px;\n\n}\n\n.welcome-text {\n  @include transparentText(white)\n}\n\n\n\n.user-icon {\n  @include transparentText(black);\n  font-size: 8em;\n  margin: 15px auto 20px auto;\n}\n\n.user-input {\n  align-self: center;\n  width: 40%;\n}\n","header {\n  display: flex;\n  flex-direction: row;\n  grid-area: header;\n  padding: 0% 0%;\n  width: 100%;\n  position: fixed;\n  background-color: $primary-background;\n  height: 9%;\n}\n\n.filter {\n  display: none;\n}\n\n.home-btn-apple {\n  display: none;\n  font-size: 2em;\n  @include transparentText($accent-primary)\n}\n\nh1 {\n  @include transparentText($accent-primary)\n  font-weight: 200;\n}\n\nspan {\n  @include transparentText(white)\n}\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px;\n}\n\n#search {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset $accent-primary;\n  box-shadow: 0px 0px 7px 0px $box-shadow;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Quicksand\", sans-serif;\n  justify-content: center;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n  align-self: center;\n}\n\n#search-input {\n  background-color: $secondary-background;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: $primary-background;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%;\n\n  &:hover {\n    box-shadow: inset 0px 0px 0px 0px white;\n    transition: .8s ease;\n  }\n\n  &:focus {\n    box-shadow: inset 0px 0px 0px 0px white;\n  }\n\n  &::placeholder {\n    color: $primary-background;\n    font-size: 20px;\n    text-align: right;\n    text-shadow: none;\n  }\n\n  &:focus::placeholder {\n    font-size: 0px;\n    transition: .8s ease;\n  }\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $accent-primary;\n  border-radius: 0px 15px 15px 0px;\n}\n\n.nav-btn {\n  align-items: center;\n  background: $primary-background no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  margin: 0%;\n  outline: none;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%;\n\n  &:hover {\n    color: $accent-primary;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease;\n  }\n\n  img {\n    max-height: 40px;\n    max-width: 40px;\n    padding: 2px 0px;\n  }\n}\n\n.stroke-right {\n  border-right: 3px solid $accent-primary;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n}\n",".banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  height: 15%;\n  overflow: hidden;\n  width: 100%;\n  position: fixed;\n  top: 9%;\n}\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%;\n}\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: white;\n  width: 100%;\n}\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px;\n}\n\n.welcome-msg {\n  margin-top: 50px;\n}\n","aside {\n  background-color: $grey;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  position: fixed;\n  top: 24%;\n  width: 15%;\n  margin-left: -1%;\n}\n\n.wrap {\n  background-color: $grey;\n  height: 100vh;\n  position: relative;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n}\n","main {\n  position: absolute;\n  top: 25%;\n  left: 15%;\n  width: 85%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: minmax(400px, auto);\n  z-index: -1;\n}\n\n.recipe-card {\n  border-radius: 7px;\n  height: 75%;\n  margin: 0 10px 0 10px;\n  padding: 15px;\n  width: 85%;\n  @include cardUnflipped;\n  perspective: 1000px;\n  transition: transform 1.6s ease;\n\n  .card-front {\n    transition: transform 1.5s ease;\n    @include cardUnflipped()\n  }\n\n  .card-back {\n    transition: transform 1.5s ease;\n    transform: scaleY(1) rotateY(180deg);\n    box-shadow: 0 2px 5px 2px black;\n    z-index: 100;\n  }\n}\n\n.overlap {\n  z-index: 100;\n}\n\n.recipe-card-active  {\n  border-radius: 7px;\n  height: 75%;\n  margin: 0 10px 0 10px;\n  padding: 15px;\n  width: 85%;\n  perspective: 1000px;\n  transition: transform 1.6s ease;\n  z-index: 99;\n  @include centerHorizontally();\n\n  .flip-card {\n    transform: rotateY(180deg);\n  }\n\n  .card-back {\n    transition: transform 1.5s ease;\n    -webkit-font-smoothing: subpixel-antialiased;\n    transform: scaleY(2) rotateY(180deg) translate(50%, 25%);\n    box-shadow: 0 2px 5px 2px black;\n  }\n\n  .card-front {\n    transition: transform 1.5s ease;\n    transform: scaleY(2) translateY(25%);\n  }\n}\n\n.flip-card {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: transform 1.6s ease;\n  transform-style: preserve-3d;\n}\n\n.card-front,\n.card-back {\n  position: absolute;\n  border-radius: 7px;\n  width: 100%;\n  height: 100%;\n  margin: 20px;\n  padding: 15px;\n  background-color: $grey;\n  border: 2px solid $accent-primary;\n  backface-visibility: hidden;\n  @include centerHorizontally();\n}\n\n.card-back {\n  p {\n    position: relative;\n    top: 5%;\n    height: 5%;\n    text-align: center;\n    transform: scaleY(.5)  perspective(1px);\n    font-size: 1.5em;\n    height: 0%;\n    margin: 0;\n    padding: 0;\n    color: $dark-green;\n  }\n\n  .ingredients {\n    position: relative;\n    top: 10%;\n    height: 45%;\n    overflow: auto;\n    font-size: .8em;\n    transform: scaleY(.5);\n    margin: 0;\n    padding: 0;\n    line-height: .9;\n    @include cardStyling()\n  }\n\n  .instructions {\n    position: relative;\n    overflow: auto;\n    height: 85%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-size: 1em;\n    transform: scaleY(.5);\n    margin: -20% 0 0 0;\n    padding: 0;\n    line-height: 1.2;\n    @include cardStyling()\n\n  }\n\n  #exit-recipe {\n    position: absolute;\n    top: 0%;\n    right: 5%;\n    transform: scaleY(.5) rotate(-120deg);\n    font-size: 2em;\n    cursor: pointer;\n    @include transparentText($dark-green);\n\n    &:hover {\n      @include transparentText($accent-secondary);\n    }\n  }\n\n  button {\n    position: fixed;\n    bottom: 1%;\n    left: 5%;\n    transform: scaleY(.7)\n  }\n  #cooked-recipe {\n    position: absolute;\n    bottom: 0%;\n    right: 5%;\n    transform: scaleY(.5);\n    font-size: 2em;\n    cursor: pointer;\n    @include transparentText($dark-green);\n\n    &:hover {\n      @include transparentText($accent-secondary);\n    }\n  }\n\n}\n\n.recipe-card:hover .card-photo-preview {\n  opacity: 50%;\n  transition: .8s ease;\n}\n\n.recipe-card:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  transition: .5s ease;\n  width: 100%;\n}\n\n.recipe-card:hover h3 {\n  text-shadow: 0px 0px 4px $accent-primary;\n  transition: .8s ease;\n}\n\n.to-cook-button {\n  float: left;\n  padding-top: 8%;\n  padding-left: 2%;\n  font-size: 3em;\n  cursor: pointer;\n\n  p {\n    font-size: 14px;\n    margin-top: -5%;\n    margin-left: -18%;\n    text-align: left;\n    opacity: 0;\n  }\n\n\n  @include transparentText($accent-secondary)\n\n\n  .to-cook {\n      @include transparentText($apple-red)\n  }\n\n  &:hover {\n    #icon-fav, #icon-cook {\n      @include transparentText($dark-apple-red);\n      transform: translateY(-10%);\n      transition: .4s ease;\n    }\n\n    p {\n      color: $dark-apple-red;\n      font-size: 14px;\n      text-shadow: 0px 1px 1px black;\n      transition: .4s ease;\n      margin-top: -12%;\n      opacity: 1;\n\n    }\n  }\n}\n\n\n\n.favorite-button {\n  float: right;\n  padding-top: 8%;\n  padding-right: 2%;\n  font-size: 3em;\n  cursor: pointer;\n\n  p {\n    font-size: 14px;\n    margin-top: -5%;\n    text-align: right;\n    opacity: 0;\n  }\n\n\n    @include transparentText($accent-secondary)\n\n\n    .favorited {\n      @include transparentText($apple-red);\n    }\n\n  &:hover {\n    #icon-fav {\n      @include transparentText($dark-apple-red);\n      transform: translateY(-10%);\n      transition: .4s ease;\n    }\n\n    p {\n      color: $dark-apple-red;\n      font-size: 14px;\n      text-shadow: 0px 1px 1px black;\n      transition: .4s ease;\n      margin-top: -12%;\n      opacity: 1;\n    }\n\n  }\n}\n\n\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%;\n  cursor: pointer;\n}\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  height: 130px;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n}\n\n.text {\n  background: $dark-green;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease;\n}\n","button {\n  background-color: $dark-green;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: $primary-font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px;\n}\n\n.show-pantry-recipes-btn {\n  margin-top: 10px;\n}\n\n.show-all-btn {\n  height: 40px;\n  margin-top: 20px;\n  width: 200px;\n}\n\n.filter-btn:hover {\n  background-color: $accent-secondary;\n}\n\n.login-btn {\n  margin-top: 5px;\n  width: 75px;\n  @include centerHorizontally();\n}\n",".load-animation {\n  position: fixed;\n  margin-top: 25%;\n  @include defineSize(200px, 200px);\n  @include centerHorizontally();\n  background: transparent;\n  border: 25px solid $grey;\n  border-right: 25px solid $dark-green;\n  border-radius: 50%;\n  animation: spin 5s linear infinite;\n}\n\n@keyframes spin {\n  0% {transform: rotate(0deg)}\n  100% {transform: rotate(360deg)}\n}\n",".drop-menu {\n  align-items: center;\n  background-color: $grey;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3;\n}\n\n.drop-menu h2 {\n  color: $dark-green;\n  margin: 0px;\n}\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left;\n}\n",".recipe-instructions {\n  background: white;\n  border: 3px solid $accent-primary;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n\n  h4 {\n    background: white;\n    color: $dark-green;\n  }\n\n  p {\n    margin-left: 2%;\n  }\n\n  ol {\n    margin-right: 2%;\n  }\n}\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double $dark-green;\n  border-radius: 5px;\n  color: $dark-green;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease;\n}\n\n#exit-recipe-btn:hover {\n  background: $accent-primary;\n  transition: .3s ease;\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color: $primary-background;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n",".pantry {\n  position: fixed;\n  @include centerHorizontally();\n  @include cardStyling();\n  top: 25%;\n  height: 70%;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  transition: 1.6s ease;\n\n  #exit-pantry {\n    position: absolute;\n    top: 0%;\n    right: 2%;\n    transform: rotate(-120deg);\n    font-size: 2em;\n    cursor: pointer;\n    @include transparentText($dark-green);\n\n    &:hover {\n      @include transparentText($accent-secondary);\n    }\n  }\n\n  .pantry-ingredients {\n    position: absolute;\n    overflow-y: scroll;\n    top: 15%;\n    width: 85%;\n    height: 60%;\n    font-size: 1em;\n    padding-left: 5%;\n    @include cardStyling()\n    @include centerHorizontally()\n  }\n\n  h4 {\n    align-self: center;\n    text-decoration: underline;\n    font-size: 3em;\n    background-color: transparent;\n  }\n\n  .add-ingredient-wrapper {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    @include centerHorizontally()\n  }\n\n  .add-ingredient-form {\n    position: fixed;\n    bottom: 5%;\n    width: 85%;\n    @include centerHorizontally()\n  }\n\n  .find-recipes-using-pantry-btn  {\n    margin-top: 2%;\n    @include centerHorizontally()\n  }\n}\n\n.pantry-hidden {\n  position: fixed;\n  transition: 1.6s ease;\n  display: none;\n  top: 50%;\n}\n","@media only screen and (max-width: 1284px) {\n  .login {\n    width: 40vw;\n  }\n}\n\n@media only screen and (max-width: 1072px) {\n\n  main {\n    left: 5%;\n  }\n\n  header {\n    h1 {\n      display: none;\n    }\n\n    .filter {\n      display: block;\n    }\n\n    .home-btn-apple {\n      display: block;\n    }\n  }\n\n  .login {\n    height: 45vh;\n  }\n\n  .recipe-filters {\n    display: none;\n  }\n\n  .filter-drop {\n    top: 9%;\n    left: 0%;\n    width: 200px;\n    margin-left: -2%;\n    border-radius: 7px;\n\n    .wrap {\n      width: 110%;\n      height: auto;\n      @include cardStyling;\n    }\n\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  .login {\n    width: 60vw;\n    height: 45vh;\n  }\n  main {\n    grid-auto-rows: minmax(400px, 600px);\n  }\n\n  .card-photo-container {\n    height: 200px;\n\n    img {\n      height: 100%\n    }\n  }\n  .recipe-card {\n    height: 90%;\n  }\n\n  .favorite-button {\n    margin-top: 25%;\n  }\n\n  .to-cook-button {\n    margin-top: 25%;\n  }\n\n  .name-ingredient-form,\n  .quantity-ingredient-form,\n  .add-ingredient-button {\n    font-size: .5em;\n  }\n}\n\n@media only screen and (max-width: 428px) {\n  .login {\n    width: 80vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Pantry.js":
/*!***********************!*\
  !*** ./src/Pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(pantry, userID) {
    this.pantry = this.compileSameIngredients(pantry);
    this.userID = userID;
  } 

  compileSameIngredients(pantry) {
    const uniquePantryItems = pantry.reduce((acc, pantryItem) => {
      if (acc[pantryItem.ingredient]) {
        acc[pantryItem.ingredient].amount += parseInt(pantryItem.amount);
      } else {
        acc[pantryItem.ingredient] =
        {
          id: pantryItem.ingredient,
          amount: parseInt(pantryItem.amount)
        };
      }
      return acc
    }, {});
    return uniquePantryItems
  }

  compareIngredients(recipe) {
    let missing = []
    recipe.ingredients.forEach(ingredient => {
      if (!this.pantry[ingredient.id]) {
        missing.push({
          'missing': ingredient.name, 
          'amountNeeded': ingredient.quantity.amount,
        })
      } else if 
      (this.pantry[ingredient.id].amount < ingredient.quantity.amount) {
        missing.push({
          'missing': ingredient.name, 
          'amountNeeded': 
          (ingredient.quantity.amount - this.pantry[ingredient.id].amount),
        })
      }
    })
    return missing  
  }

  removeIngredients(recipe) {
    let apiUpdate = [];
    recipe.ingredients.forEach(ingredient => {
      if (this.pantry[ingredient.id]) {
        this.pantry[ingredient.id].amount -= ingredient.quantity.amount;
        apiUpdate.push({
          userID: this.userID, 
          ingredientID: ingredient.id, 
          ingredientModification: -ingredient.quantity.amount,
        })
      }
    })
    return apiUpdate
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Pantry); 

/***/ }),

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/*! exports provided: getData, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
// use get to grab whatever dataType (users/ingredients/recipes)
function getData(dataType, localArray) {
  fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => response.json())
    .then(dataArray => {
      dataArray.forEach(dataObject => {
        localArray.push(dataObject)
      })
    })
    .catch(error => alert(`Sorry, there is an error: ${error}`))
}

// use post to modify ingredients 
function postData(userId, ingredientId, amount) {
  const amountNum = parseInt(amount)
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      userID: userId, 
      ingredientID: ingredientId, 
      ingredientModification: amountNum
    })
  }
  fetch('http://localhost:3001/api/v1/users', settings)
    .then(response => response.json())
    .catch(error => alert(`Sorry, there is an error: ${error}`))
}

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/data/ingredient-data.js":
/*!*************************************!*\
  !*** ./src/data/ingredient-data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let ingredientsData = [
  {
    "id": 20081,
    "name": "wheat flour",
    "estimatedCostInCents": 142
  },
  {
    "id": 18372,
    "name": "bicarbonate of soda",
    "estimatedCostInCents": 582
  },
  {
    "id": 1123,
    "name": "eggs",
    "estimatedCostInCents": 472
  },
  {
    "id": 19335,
    "name": "sucrose",
    "estimatedCostInCents": 902
  },
  {
    "id": 19206,
    "name": "instant vanilla pudding",
    "estimatedCostInCents": 660
  },
  {
    "id": 19334,
    "name": "brown sugar",
    "estimatedCostInCents": 559
  },
  {
    "id": 2047,
    "name": "salt",
    "estimatedCostInCents": 280
  },
  {
    "id": 1012047,
    "name": "fine sea salt",
    "estimatedCostInCents": 528
  },
  {
    "id": 10019903,
    "name": "semi sweet chips",
    "estimatedCostInCents": 253
  },
  {
    "id": 1145,
    "name": "unsalted butter",
    "estimatedCostInCents": 617
  },
  {
    "id": 2050,
    "name": "vanilla",
    "estimatedCostInCents": 926
  },
  {
    "id": 1009016,
    "name": "apple cider",
    "estimatedCostInCents": 468
  },
  {
    "id": 9003,
    "name": "apple",
    "estimatedCostInCents": 207
  },
  {
    "id": 20027,
    "name": "corn starch",
    "estimatedCostInCents": 236
  },
  {
    "id": 1002046,
    "name": "dijon style mustard",
    "estimatedCostInCents": 619
  },
  {
    "id": 11215,
    "name": "whole garlic clove",
    "estimatedCostInCents": 220
  },
  {
    "id": 1012046,
    "name": "whole grain dijon mustard",
    "estimatedCostInCents": 867
  },
  {
    "id": 19911,
    "name": "maple",
    "estimatedCostInCents": 349
  },
  {
    "id": 16112,
    "name": "miso",
    "estimatedCostInCents": 978
  },
  {
    "id": 10010062,
    "name": "pork chop",
    "estimatedCostInCents": 834
  },
  {
    "id": 1102047,
    "name": "s&p",
    "estimatedCostInCents": 524
  },
  {
    "id": 16124,
    "name": "soy sauce",
    "estimatedCostInCents": 486
  },
  {
    "id": 1016168,
    "name": "sriracha sauce",
    "estimatedCostInCents": 576
  },
  {
    "id": 1002030,
    "name": "black pepper",
    "estimatedCostInCents": 441
  },
  {
    "id": 1001,
    "name": "butter",
    "estimatedCostInCents": 618
  },
  {
    "id": 4582,
    "name": "oil",
    "estimatedCostInCents": 807
  },
  {
    "id": 2031,
    "name": "red pepper powder",
    "estimatedCostInCents": 583
  },
  {
    "id": 5100,
    "name": "chicken wing",
    "estimatedCostInCents": 593
  },
  {
    "id": 2009,
    "name": "red chili powder",
    "estimatedCostInCents": 499
  },
  {
    "id": 1022020,
    "name": "garlic powder",
    "estimatedCostInCents": 344
  },
  {
    "id": 6168,
    "name": "tabasco sauce",
    "estimatedCostInCents": 859
  },
  {
    "id": 9176,
    "name": "mangoes",
    "estimatedCostInCents": 425
  },
  {
    "id": 2026,
    "name": "onion powder",
    "estimatedCostInCents": 597
  },
  {
    "id": 1042047,
    "name": "seasoned salt",
    "estimatedCostInCents": 334
  },
  {
    "id": 18371,
    "name": "baking powder",
    "estimatedCostInCents": 346
  },
  {
    "id": 9040,
    "name": "ripe banana",
    "estimatedCostInCents": 331
  },
  {
    "id": 20011,
    "name": "buck wheat flour",
    "estimatedCostInCents": 865
  },
  {
    "id": 1230,
    "name": "buttermilk",
    "estimatedCostInCents": 773
  },
  {
    "id": 19296,
    "name": "runny honey",
    "estimatedCostInCents": 742
  },
  {
    "id": 16098,
    "name": "peanut butter",
    "estimatedCostInCents": 490
  },
  {
    "id": 2048,
    "name": "apple cider vinegar",
    "estimatedCostInCents": 532
  },
  {
    "id": 20090,
    "name": "brown rice flour",
    "estimatedCostInCents": 667
  },
  {
    "id": 93784,
    "name": "brown rice syrup",
    "estimatedCostInCents": 126
  },
  {
    "id": 1124,
    "name": "egg albumen",
    "estimatedCostInCents": 304
  },
  {
    "id": 93625,
    "name": "evaporated cane juice",
    "estimatedCostInCents": 118
  },
  {
    "id": 12220,
    "name": "flax meal",
    "estimatedCostInCents": 296
  },
  {
    "id": 10118375,
    "name": "instant yeast",
    "estimatedCostInCents": 383
  },
  {
    "id": 19304,
    "name": "unsulfured molasses",
    "estimatedCostInCents": 925
  },
  {
    "id": 11413,
    "name": "Potato Starch Flour",
    "estimatedCostInCents": 895
  },
  {
    "id": 93696,
    "name": "tapioca starch",
    "estimatedCostInCents": 656
  },
  {
    "id": 93760,
    "name": "Whole Grain Teff Flour",
    "estimatedCostInCents": 539
  },
  {
    "id": 14412,
    "name": "ice water",
    "estimatedCostInCents": 625
  },
  {
    "id": 93626,
    "name": "xanthan gum",
    "estimatedCostInCents": 625
  },
  {
    "id": 19350,
    "name": "corn syrup",
    "estimatedCostInCents": 441
  },
  {
    "id": 9099,
    "name": "fruit cocktail",
    "estimatedCostInCents": 953
  },
  {
    "id": 12061,
    "name": "whole almonds",
    "estimatedCostInCents": 1029
  },
  {
    "id": 12104,
    "name": "coconut",
    "estimatedCostInCents": 918
  },
  {
    "id": 12115,
    "name": "coconut cream",
    "estimatedCostInCents": 304
  },
  {
    "id": 4047,
    "name": "coconut oil",
    "estimatedCostInCents": 152
  },
  {
    "id": 10019071,
    "name": "dark chocolate morsels",
    "estimatedCostInCents": 632
  },
  {
    "id": 8212,
    "name": "granola cereal",
    "estimatedCostInCents": 381
  },
  {
    "id": 8121,
    "name": "oatmeal",
    "estimatedCostInCents": 659
  },
  {
    "id": 12142,
    "name": "pecan",
    "estimatedCostInCents": 314
  },
  {
    "id": 93740,
    "name": "blanched almond flour",
    "estimatedCostInCents": 986
  },
  {
    "id": 1125,
    "name": "egg yolks",
    "estimatedCostInCents": 889
  },
  {
    "id": 12023,
    "name": "sesame seeds",
    "estimatedCostInCents": 886
  },
  {
    "id": 1015062,
    "name": "chicken tenders",
    "estimatedCostInCents": 657
  },
  {
    "id": 10011109,
    "name": "slaw mix",
    "estimatedCostInCents": 681
  },
  {
    "id": 10116098,
    "name": "creamy peanut butter",
    "estimatedCostInCents": 152
  },
  {
    "id": 2064,
    "name": "mint",
    "estimatedCostInCents": 575
  },
  {
    "id": 2021,
    "name": "powdered ginger",
    "estimatedCostInCents": 783
  },
  {
    "id": 9160,
    "name": "juice of lime",
    "estimatedCostInCents": 477
  },
  {
    "id": 9266,
    "name": "pineapple",
    "estimatedCostInCents": 834
  },
  {
    "id": 11135,
    "name": "cauliflower",
    "estimatedCostInCents": 486
  },
  {
    "id": 6172,
    "name": "chicken stock",
    "estimatedCostInCents": 454
  },
  {
    "id": 93632,
    "name": "ghee",
    "estimatedCostInCents": 370
  },
  {
    "id": 12120,
    "name": "hazelnut",
    "estimatedCostInCents": 812
  },
  {
    "id": 93690,
    "name": "nutritional yeast flakes",
    "estimatedCostInCents": 969
  },
  {
    "id": 11282,
    "name": "onions",
    "estimatedCostInCents": 439
  },
  {
    "id": 10010123,
    "name": "proscuitto",
    "estimatedCostInCents": 217
  },
  {
    "id": 11096,
    "name": "rapini",
    "estimatedCostInCents": 846
  },
  {
    "id": 6150,
    "name": "bar b que sauce",
    "estimatedCostInCents": 966
  },
  {
    "id": 6194,
    "name": "chicken broth",
    "estimatedCostInCents": 983
  },
  {
    "id": 93627,
    "name": "liquid smoke",
    "estimatedCostInCents": 412
  },
  {
    "id": 2028,
    "name": "paprika",
    "estimatedCostInCents": 302
  },
  {
    "id": 10072,
    "name": "pork shoulder",
    "estimatedCostInCents": 969
  },
  {
    "id": 6971,
    "name": "worcestershire",
    "estimatedCostInCents": 57
  },
  {
    "id": 93607,
    "name": "almondmilk",
    "estimatedCostInCents": 787
  },
  {
    "id": 18942,
    "name": "graham cracker crust",
    "estimatedCostInCents": 655
  },
  {
    "id": 1012010,
    "name": "ground cinnamon",
    "estimatedCostInCents": 742
  },
  {
    "id": 2025,
    "name": "nutmeg powder",
    "estimatedCostInCents": 480
  },
  {
    "id": 43274,
    "name": "low fat cream cheese",
    "estimatedCostInCents": 1048
  },
  {
    "id": 8120,
    "name": "whole grain rolled oats",
    "estimatedCostInCents": 98
  },
  {
    "id": 11424,
    "name": "canned pumpkin",
    "estimatedCostInCents": 852
  },
  {
    "id": 9016,
    "name": "apple juice",
    "estimatedCostInCents": 710
  },
  {
    "id": 18047,
    "name": "raisin bread",
    "estimatedCostInCents": 222
  },
  {
    "id": 1089003,
    "name": "grannysmith apple",
    "estimatedCostInCents": 459
  },
  {
    "id": 1077,
    "name": "full-fat milk",
    "estimatedCostInCents": 276
  },
  {
    "id": 11297,
    "name": "flat leaf parsley leaves",
    "estimatedCostInCents": 1030
  },
  {
    "id": 1032009,
    "name": "dried red chili",
    "estimatedCostInCents": 1015
  },
  {
    "id": 15152,
    "name": "jumbo shrimp",
    "estimatedCostInCents": 804
  },
  {
    "id": 11294,
    "name": "vidalia onion",
    "estimatedCostInCents": 595
  },
  {
    "id": 11007,
    "name": "artichokes",
    "estimatedCostInCents": 203
  },
  {
    "id": 9150,
    "name": "lemon",
    "estimatedCostInCents": 766
  },
  {
    "id": 9156,
    "name": "lemon peel",
    "estimatedCostInCents": 630
  },
  {
    "id": 18069,
    "name": "gluten-free white sandwich bread",
    "estimatedCostInCents": 863
  },
  {
    "id": 1033,
    "name": "parmesan cheese",
    "estimatedCostInCents": 398
  },
  {
    "id": 2027,
    "name": "oregano",
    "estimatedCostInCents": 835
  },
  {
    "id": 1034053,
    "name": "extra virgin olive oil",
    "estimatedCostInCents": 305
  },
  {
    "id": 2004,
    "name": "bay leaves",
    "estimatedCostInCents": 785
  },
  {
    "id": 19336,
    "name": "powdered sugar",
    "estimatedCostInCents": 603
  },
  {
    "id": 11143,
    "name": "celery",
    "estimatedCostInCents": 840
  },
  {
    "id": 1129,
    "name": "hardcooked eggs",
    "estimatedCostInCents": 882
  },
  {
    "id": 4641,
    "name": "reduced fat mayo",
    "estimatedCostInCents": 697
  },
  {
    "id": 1011256,
    "name": "skim greek yogurt",
    "estimatedCostInCents": 263
  },
  {
    "id": 11944,
    "name": "hotdog relish",
    "estimatedCostInCents": 391
  },
  {
    "id": 10011282,
    "name": "red onion",
    "estimatedCostInCents": 638
  },
  {
    "id": 11353,
    "name": "idaho potato",
    "estimatedCostInCents": 742
  },
  {
    "id": 10211821,
    "name": "bell pepper",
    "estimatedCostInCents": 741
  },
  {
    "id": 10020048,
    "name": "brown minute rice",
    "estimatedCostInCents": 386
  },
  {
    "id": 93651,
    "name": "italian cheese blend",
    "estimatedCostInCents": 233
  },
  {
    "id": 7927,
    "name": "sweet italian turkey sausage",
    "estimatedCostInCents": 216
  },
  {
    "id": 11549,
    "name": "canned tomato sauce",
    "estimatedCostInCents": 622
  },
  {
    "id": 10120129,
    "name": "bread flour",
    "estimatedCostInCents": 114
  },
  {
    "id": 1053,
    "name": "cream",
    "estimatedCostInCents": 645
  },
  {
    "id": 4053,
    "name": "pure olive oil",
    "estimatedCostInCents": 705
  },
  {
    "id": 19912,
    "name": "agave syrup",
    "estimatedCostInCents": 642
  },
  {
    "id": 10020080,
    "name": "pastry flour",
    "estimatedCostInCents": 497
  },
  {
    "id": 10019334,
    "name": "dark brown sugar",
    "estimatedCostInCents": 501
  },
  {
    "id": 93814,
    "name": "lightly sweetened whipped cream",
    "estimatedCostInCents": 88
  },
  {
    "id": 11206,
    "name": "cucumber",
    "estimatedCostInCents": 262
  },
  {
    "id": 20035,
    "name": "quinoa",
    "estimatedCostInCents": 514
  },
  {
    "id": 11529,
    "name": "heirloom tomatoes",
    "estimatedCostInCents": 321
  },
  {
    "id": 14242,
    "name": "cranberry juice cocktail",
    "estimatedCostInCents": 335
  },
  {
    "id": 14130,
    "name": "cream soda",
    "estimatedCostInCents": 585
  },
  {
    "id": 19177,
    "name": "gelatine",
    "estimatedCostInCents": 1011
  },
  {
    "id": 93645,
    "name": "halloween sprinkles",
    "estimatedCostInCents": 293
  },
  {
    "id": 14051,
    "name": "grey goose vodka",
    "estimatedCostInCents": 373
  },
  {
    "id": 1054,
    "name": "whipped cream",
    "estimatedCostInCents": 689
  },
  {
    "id": 93828,
    "name": "marinated artichoke hearts",
    "estimatedCostInCents": 982
  },
  {
    "id": 11266,
    "name": "crimini mushrooms",
    "estimatedCostInCents": 150
  },
  {
    "id": 1017,
    "name": "cream cheese",
    "estimatedCostInCents": 955
  },
  {
    "id": 1019,
    "name": "feta",
    "estimatedCostInCents": 1003
  },
  {
    "id": 1022027,
    "name": "mixed italian herbs",
    "estimatedCostInCents": 253
  },
  {
    "id": 1082047,
    "name": "kosher salt",
    "estimatedCostInCents": 972
  },
  {
    "id": 10011457,
    "name": "spinach",
    "estimatedCostInCents": 336
  },
  {
    "id": 2044,
    "name": "basil",
    "estimatedCostInCents": 203
  },
  {
    "id": 7036,
    "name": "italian sausage links",
    "estimatedCostInCents": 1010
  },
  {
    "id": 10111549,
    "name": "marinara sauce",
    "estimatedCostInCents": 171
  },
  {
    "id": 1038,
    "name": "pecorino romano cheese",
    "estimatedCostInCents": 50
  },
  {
    "id": 11304,
    "name": "peas",
    "estimatedCostInCents": 768
  },
  {
    "id": 11677,
    "name": "shallots",
    "estimatedCostInCents": 696
  },
  {
    "id": 11020420,
    "name": "pasta shells",
    "estimatedCostInCents": 862
  },
  {
    "id": 1001026,
    "name": "shredded mozzarella",
    "estimatedCostInCents": 184
  },
  {
    "id": 93630,
    "name": "skim milk ricotta cheese",
    "estimatedCostInCents": 395
  },
  {
    "id": 14106,
    "name": "white wine",
    "estimatedCostInCents": 675
  },
  {
    "id": 11463,
    "name": "frozen spinach",
    "estimatedCostInCents": 830
  },
  {
    "id": 1025,
    "name": "pepperjack",
    "estimatedCostInCents": 212
  },
  {
    "id": 10014623,
    "name": "blackberry juice",
    "estimatedCostInCents": 256
  },
  {
    "id": 9302,
    "name": "raspberry",
    "estimatedCostInCents": 247
  },
  {
    "id": 9354,
    "name": "pineapple with juice",
    "estimatedCostInCents": 926
  },
  {
    "id": 9070,
    "name": "sweet cherries",
    "estimatedCostInCents": 184
  },
  {
    "id": 14181,
    "name": "chocolate syrup",
    "estimatedCostInCents": 530
  },
  {
    "id": 10018617,
    "name": "graham cracker crumbs",
    "estimatedCostInCents": 205
  },
  {
    "id": 12135,
    "name": "nuts",
    "estimatedCostInCents": 978
  },
  {
    "id": 9037,
    "name": "haas avocados",
    "estimatedCostInCents": 275
  },
  {
    "id": 16057,
    "name": "garbanzos",
    "estimatedCostInCents": 85
  },
  {
    "id": 2045,
    "name": "dillweed",
    "estimatedCostInCents": 162
  },
  {
    "id": 1256,
    "name": "greek yogurt",
    "estimatedCostInCents": 231
  },
  {
    "id": 9152,
    "name": "lemon juice",
    "estimatedCostInCents": 274
  },
  {
    "id": 11291,
    "name": "spring onions",
    "estimatedCostInCents": 55
  },
  {
    "id": 9236,
    "name": "peaches",
    "estimatedCostInCents": 109
  },
  {
    "id": 19095,
    "name": "icecream",
    "estimatedCostInCents": 447
  },
  {
    "id": 10862,
    "name": "cooked bacon strips",
    "estimatedCostInCents": 868
  },
  {
    "id": 5114,
    "name": "roasted chicken",
    "estimatedCostInCents": 708
  },
  {
    "id": 11333,
    "name": "green peppers",
    "estimatedCostInCents": 303
  },
  {
    "id": 1026,
    "name": "fresh mozzarella",
    "estimatedCostInCents": 290
  },
  {
    "id": 10211529,
    "name": "italian tomato",
    "estimatedCostInCents": 978
  },
  {
    "id": 1011009,
    "name": "white cheddar",
    "estimatedCostInCents": 709
  },
  {
    "estimatedCostInCents": 205
  },
  {
    "id": 98998,
    "name": "balsamic glaze",
    "estimatedCostInCents": 759
  },
  {
    "id": 8030,
    "name": "fruit loops",
    "estimatedCostInCents": 191
  },
  {
    "id": 19116,
    "name": "marshmallow",
    "estimatedCostInCents": 425
  },
  {
    "id": 16158,
    "name": "hummus",
    "estimatedCostInCents": 491
  },
  {
    "id": 2046,
    "name": "prepared yellow mustard",
    "estimatedCostInCents": 300
  },
  {
    "id": 1214,
    "name": "evaporated milk",
    "estimatedCostInCents": 95
  },
  {
    "id": 9214,
    "name": "orange juice concentrate",
    "estimatedCostInCents": 379
  },
  {
    "id": 9216,
    "name": "orange peel",
    "estimatedCostInCents": 882
  },
  {
    "id": 10123,
    "name": "bacon slices",
    "estimatedCostInCents": 817
  },
  {
    "id": 11052,
    "name": "string beans",
    "estimatedCostInCents": 502
  },
  {
    "id": 11959,
    "name": "baby arugula leaves",
    "estimatedCostInCents": 207
  },
  {
    "id": 1004,
    "name": "blue cheese",
    "estimatedCostInCents": 646
  },
  {
    "id": 9252,
    "name": "pear",
    "estimatedCostInCents": 467
  },
  {
    "id": 43408,
    "name": "pear juice",
    "estimatedCostInCents": 163
  },
  {
    "id": 2049,
    "name": "fresh thyme leaves",
    "estimatedCostInCents": 681
  },
  {
    "id": 12155,
    "name": "walnut halves",
    "estimatedCostInCents": 895
  },
  {
    "id": 10011693,
    "name": "canned tomato",
    "estimatedCostInCents": 171
  },
  {
    "id": 11124,
    "name": "carrots",
    "estimatedCostInCents": 136
  },
  {
    "id": 2012,
    "name": "coriander",
    "estimatedCostInCents": 52
  },
  {
    "id": 1002014,
    "name": "comino",
    "estimatedCostInCents": 547
  },
  {
    "id": 11913,
    "name": "frozen corn",
    "estimatedCostInCents": 558
  },
  {
    "id": 11477,
    "name": "zucchini squash",
    "estimatedCostInCents": 742
  },
  {
    "id": 10220445,
    "name": "steamed rice",
    "estimatedCostInCents": 1040
  },
  {
    "id": 2003,
    "name": "ground basil",
    "estimatedCostInCents": 198
  },
  {
    "id": 16018,
    "name": "canned black beans",
    "estimatedCostInCents": 356
  },
  {
    "id": 99223,
    "name": "canned chipotle chilies in adobo",
    "estimatedCostInCents": 299
  },
  {
    "id": 11165,
    "name": "cilantro",
    "estimatedCostInCents": 159
  },
  {
    "id": 10218364,
    "name": "flour tortilla",
    "estimatedCostInCents": 653
  },
  {
    "id": 10611282,
    "name": "white onions",
    "estimatedCostInCents": 449
  },
  {
    "id": 11457,
    "name": "baby spinach leaves",
    "estimatedCostInCents": 668
  },
  {
    "id": 11268,
    "name": "dried shiitake mushroom",
    "estimatedCostInCents": 806
  },
  {
    "id": 10020005,
    "name": "farro",
    "estimatedCostInCents": 286
  },
  {
    "id": 10511282,
    "name": "yellow onion",
    "estimatedCostInCents": 241
  },
  {
    "id": 2069,
    "name": "balsamic vinegar",
    "estimatedCostInCents": 118
  },
  {
    "id": 11250,
    "name": "boston bibb lettuce",
    "estimatedCostInCents": 61
  },
  {
    "id": 11156,
    "name": "fresh chive",
    "estimatedCostInCents": 728
  },
  {
    "id": 4025,
    "name": "mayonnaise",
    "estimatedCostInCents": 630
  },
  {
    "id": 11119,
    "name": "napa cabbage",
    "estimatedCostInCents": 1009
  },
  {
    "id": 11112,
    "name": "red cabbage",
    "estimatedCostInCents": 659
  },
  {
    "id": 98962,
    "name": "sweet chili sauce",
    "estimatedCostInCents": 1001
  },
  {
    "id": 2042,
    "name": "dried thyme",
    "estimatedCostInCents": 307
  },
  {
    "id": 1002020,
    "name": "granulated garlic",
    "estimatedCostInCents": 228
  },
  {
    "id": 10023572,
    "name": "ground chuck",
    "estimatedCostInCents": 600
  },
  {
    "id": 10011250,
    "name": "butterhead lettuce leaves",
    "estimatedCostInCents": 341
  },
  {
    "id": 5064,
    "name": "baked chicken breast",
    "estimatedCostInCents": 1020
  },
  {
    "id": 2015,
    "name": "curry seasoning",
    "estimatedCostInCents": 312
  },
  {
    "id": 1009159,
    "name": "lime peel",
    "estimatedCostInCents": 435
  },
  {
    "id": 98991,
    "name": "mint chutney",
    "estimatedCostInCents": 927
  },
  {
    "id": 9316,
    "name": "strawberry",
    "estimatedCostInCents": 292
  },
  {
    "id": 11090,
    "name": "broccoli crowns",
    "estimatedCostInCents": 256
  },
  {
    "id": 10011821,
    "name": "sweet orange pepper",
    "estimatedCostInCents": 968
  },
  {
    "id": 10218,
    "name": "pork tenderloin",
    "estimatedCostInCents": 845
  },
  {
    "id": 19157,
    "name": "mini m&m",
    "estimatedCostInCents": 552
  },
  {
    "id": 98871,
    "name": "hawaiian sweet rolls",
    "estimatedCostInCents": 535
  },
  {
    "id": 1055062,
    "name": "boneless skinless chicken breasts",
    "estimatedCostInCents": 897
  },
  {
    "id": 10019151,
    "name": "reese pieces",
    "estimatedCostInCents": 721
  },
  {
    "id": 1041009,
    "name": "cheese",
    "estimatedCostInCents": 850
  },
  {
    "id": 10018413,
    "name": "flatbread",
    "estimatedCostInCents": 326
  },
  {
    "id": 10111529,
    "name": "grape tomato",
    "estimatedCostInCents": 168
  },
  {
    "id": 9019,
    "name": "unsweetened apple sauce",
    "estimatedCostInCents": 154
  },
  {
    "id": 18079,
    "name": "dry breadcrumbs",
    "estimatedCostInCents": 167
  },
  {
    "id": 16069,
    "name": "legumes",
    "estimatedCostInCents": 903
  },
  {
    "id": 9079,
    "name": "dried cranberries",
    "estimatedCostInCents": 921
  },
  {
    "id": 11935,
    "name": "catsup",
    "estimatedCostInCents": 666
  },
  {
    "id": 12151,
    "name": "pistachio",
    "estimatedCostInCents": 813
  },
  {
    "id": 11821,
    "name": "red sweet peppers",
    "estimatedCostInCents": 1027
  },
  {
    "id": 6615,
    "name": "vegetable stock",
    "estimatedCostInCents": 613
  }
]

/* harmony default export */ __webpack_exports__["default"] = (ingredientsData);


/***/ }),

/***/ "./src/dom-updates.js":
/*!****************************!*\
  !*** ./src/dom-updates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  // CHANGE THE DISPLAY OF ANY ARGS PASSED IN, MUST PASS IN [ARGS]
  toggle(anyArr) {
    anyArr.forEach(area =>
      document.querySelector(area).classList.toggle("hidden"))
  },

  // HELPER FUNCTION TO INSERTHTML
  addDisplay(area, where, what) {
    document.querySelector(area).insertAdjacentHTML(where, what)
  },

  clearDisplay(area) {
    document.querySelector(area).innerHTML = ''
  },

  // CARD DISPLAY
  displayCards(recipeList) {
    this.clearDisplay('main')

    recipeList.forEach(recipe => {
      let instructions = '';
      let ingredients = '';
      recipe.instructions.forEach(step => {
        instructions += `<li aria-label="recipe-instruction-step" tabindex="0">${step.instruction}</li><br>`
      })
      recipe.ingredients.forEach(ingredient => {
        ingredients += `<li aria-label="ingredient-required-for-recipe" tabindex="0">${ingredient.name}: ${ingredient.quantity.amount}${ingredient.quantity.unit}</li><br>`
      })

      const shortName = recipe.name.length > 40
        ? recipe.name.substring(0, 40) + "..."
        : recipe.name

      const favoritedClass = recipe.isFavorited ? "favorited" : ''
      const toCookClass = recipe.isToCook ? "to-cook" : ''

      const cardHtml = `<div class="recipe-card" id=${recipe.id} name=${recipe.id}>
          <div class="flip-card">
            <div class="card-front">
              <h3 maxlength="40">${shortName}</h3>
              <div class="card-photo-container">
                <img src=${recipe.image} class="card-photo-preview" id="img1" alt="${recipe.name} recipe" title="${recipe.name} recipe" aria-label="flip-card-to-reveal-details-for-${recipe.name}" tabindex="0" role="button">
                <div class="text">
                  <div id="img2">Click for Instructions</div>
                </div>
              </div>
            </div>
            <div class="to-cook-button" name=${recipe.id}>
                <div id="icon-cook" aria-label="button-to-add-recipe-to-user-list-to-cook" tabindex="0" role="button">🍽</div>
                <p id="icon-cook-text">Add to cook</p>
            </div>
            <div class="favorite-button" name=${recipe.id}>
                <div id="icon-fav" aria-label="button-to-add-recipe-to-user-list-of-favorites" tabindex="0" role="button">&#127822;</div>
                <p id="icon-fav-text">Favorite</p>
            </div>
          </div>
            <div class="card-back">
              <div id="exit-recipe" aria-label="button-to-exit-details-view-of-${recipe.name}" tabindex="0" role="button">⤸</div>
              <p class="instructions-title">${recipe.name}</p>
              <ol class="ingredients missing-${recipe.id}" aria-label="ingredients-user-must-restock-to-cook-${recipe.name}" tabindex="0">
              <h2>Ingredients:</h2>
              ${ingredients}
              <h2>Total Cost of Ingredients:</h2>
              <p>${recipe.calculateIngredientsCost()}</p>
              </ol>
              <ol class="instructions">
                <h2>Instructions:</h2>
                ${instructions}
              </ol>
              <button class="compare-recipe-button" type="button" id="compare-recipe" aria-label="button-to-check-user-pantry-stock-of-ingredients-to-cook-${recipe.name}" tabindex="0">Check Pantry?</button>
              <div id="cooked-recipe">&#10003;</div>
            </div>
          </div>
        </div>`

      this.addDisplay("main", "beforeend", cardHtml)
    })
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  listTags(allTags) {
    allTags.forEach(tag => {
      const tagHtml = `<li>
        <input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}" aria-label="checkbox-for-${tag}-tag" aria-required="false" tabindex="0">${this.capitalize(tag)}</label>
        </li>`;
      this.addDisplay(".tag-list", "beforeend", tagHtml);
    });
  },

  showUserPantry(user, ingredients) {
    pantryItemArray.forEach(pantryItem => {
      const pantryItemArray = Object.keys(user.pantry.pantry)
        const ingredientName = ingredients.find(ingredient => ingredient.id == pantryItem)
        ? ingredients.find(ingredient => ingredient.id == pantryItem).name
        : `Item ID: ${user.pantry.pantry[pantryItem].id}`
      const pantryItemHTML = `${user.pantry.pantry[pantryItem].amount} - ${ingredientName}  <br>`
      this.addDisplay('.pantry-ingredients', 'beforeend', pantryItemHTML)
    })
  },

  showRecipeComparison(missingList, targetRecipe) {
    const missingItemHtml = ["<h2>Missing Ingredients from Your Pantry:</h2>"]
    missingList.forEach(item => {
      missingItemHtml.push(`<li aria-label="ingredient-to-restock"  tabindex="0">
        ${item.amountNeeded} - ${item.missing}
        </li>`)
    })
    this.addDisplay(`.missing-${targetRecipe.id}`, 'afterbegin', missingItemHtml.join(''))
  }

}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo.png");

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookbook.png");

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/green-apples.jpg");

/***/ }),

/***/ "./src/images/pot.png":
/*!****************************!*\
  !*** ./src/images/pot.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/pot.png");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/seasoning.png");

/***/ }),

/***/ "./src/ingredient.js":
/*!***************************!*\
  !*** ./src/ingredient.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Ingredient {
  constructor(ingredient, recipeIngredientData) {
    this.id = ingredient.id,
    this.name = ingredient.name,
    this.estimatedCostInCents = ingredient.estimatedCostInCents,
    this.quantity = recipeIngredientData.quantity
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Ingredient);


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_ingredient_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/ingredient-data */ "./src/data/ingredient-data.js");
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient */ "./src/ingredient.js");

// Will need to import fetched ingredient data from API


class Recipe {
  constructor(recipe, ingredientData) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = this.instantiateIngredients(recipe, _data_ingredient_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.instructions = recipe.instructions;
    this.isFavorited = false;
    this.isToCook = false;
  }

  instantiateIngredients(recipe, ingredientsData) {
    return recipe.ingredients.map(recipeIngredient => {
      const ingredientInfo = ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
      if (ingredientInfo) {
        return new _ingredient__WEBPACK_IMPORTED_MODULE_1__["default"](ingredientInfo, recipeIngredient);
      }
    });
  }

  calculateIngredientsCost() {
    const totalCost = this.ingredients.reduce((sum, ingredient) => {
      let ingredientCostPerRecipe =
      (ingredient.estimatedCostInCents * ingredient.quantity.amount);
      sum += ingredientCostPerRecipe;
      return sum;
    }, 0);
    return parseFloat((totalCost * 0.01).toFixed(2));
  }

  getInstructions() {
    return this.instructions;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_pot_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pot.png */ "./src/images/pot.png");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apis */ "./src/apis.js");
/* harmony import */ var _dom_updates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-updates */ "./src/dom-updates.js");
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ingredient */ "./src/ingredient.js");
/* eslint-disable indent */












let users = [];
let recipes = [];
let ingredients = [];
let user;

window.addEventListener("load", loadPage);

function addEvent(area, eventType, func) {
  document.querySelector(area).addEventListener(eventType, func)
}

addEvent("header", "click", navClicks)
addEvent(".login-btn", "click", login) 
addEvent("#search", "submit", pressEnterSearch) 
addEvent(".pantry", "click", pantryClicks)
addEvent(".add-ingredient-form", "submit", addIngredientToPantry)
addEvent(".filter-btn", "click", displayTaggedRecipes)
addEvent("main", "click", mainClicks)

function loadPage() {
  Object(_apis__WEBPACK_IMPORTED_MODULE_8__["getData"])('users', users)
  Object(_apis__WEBPACK_IMPORTED_MODULE_8__["getData"])('recipes', recipes)
  Object(_apis__WEBPACK_IMPORTED_MODULE_8__["getData"])('ingredients', ingredients)
}

function login() {
  updateDataToClassInstances()
  const loginInput = document.querySelector('.user-input');
  const userLoggingIn = users.find(user => user.name === loginInput.value)
  user = userLoggingIn
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].toggle(['.login', '.page-wrapper'])
  showHome()
  displayTagsSideBar()
}

function updateDataToClassInstances() {
  users = users.map(user => new _user__WEBPACK_IMPORTED_MODULE_6__["default"](user))
  recipes = recipes.map(recipe => new _recipe__WEBPACK_IMPORTED_MODULE_7__["default"](recipe, ingredients))
}

function displayTagsSideBar() {
  const allTags = recipes.flatMap(recipe => recipe.tags)
  const uniqueTags = new Set(allTags)
  const sortedUniqueTags = Array.from(uniqueTags).sort()
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].listTags(sortedUniqueTags);
}
function navClicks(event) {
  const targetButton = event.target.closest("button")

  switch(targetButton.getAttribute("name")) {
    case 'filter-button':
      showFilterMenu()
      break;
    case 'home-button':
      showHome()
      break;
    case 'nav-search-button':
      searchRecipes()
      break;
    case 'fav-button':
      displayFavoritedRecipes()
      break;
    case 'pantry-button':
      displayPantry()
      break;
    case 'to-cook-button':
      displayToCookRecipes()
      break;
  }
}

function showFilterMenu() {
  const filterBar = document.querySelector('.dropdown-filter')
  filterBar.classList.toggle('filter-drop')
  filterBar.classList.toggle('recipe-filters')
}

function showHome() {
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].displayCards(recipes)
}

function searchRecipes() {
  const userSearch = document.querySelector('#search-input').value.toLowerCase()
  const searchResults = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(userSearch);
  });
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].displayCards(searchResults)
}

function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function displayFavoritedRecipes() {
  console.log(user.favoriteRecipes)
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].displayCards(user.favoriteRecipes)
}

function displayToCookRecipes() {
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].displayCards(user.recipesToCook)
}

function displayPantry() {
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].showUserPantry(user, ingredients)
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].toggle(['.pantry'])
}

function pantryClicks(event) {
  const target = event.target
  switch(target.id) {
    case 'exit-pantry':
      displayPantry()
      break;
    case "find-recipes-using-pantry-btn":
      findRecipesUsingPantry()
      break;
  }
}

function addIngredientToPantry(event) {
  event.preventDefault()
  const nameAdded = document.querySelector(".name-ingredient-form").value
  const quantityAdded = document.querySelector(".quantity-ingredient-form").value

  const match = ingredients.find(ingredient => {
    return ingredient.name === nameAdded.toLowerCase()
  })
  const matchId = match ? match.id : Date.now()

  Object(_apis__WEBPACK_IMPORTED_MODULE_8__["postData"])(user.id, matchId, quantityAdded)
  alert(`You have added ${quantityAdded} of ${nameAdded} to your pantry!`)
}

function findRecipesUsingPantry() {
  const recipesUserCouldCook = recipes.filter(recipe => {
    return !user.pantry.compareIngredients(recipe)
  })
  if (recipesUserCouldCook.length) {
    _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].displayCards(recipesUserCouldCook)
    _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].toggle(['.pantry'])
  } else {
    alert('Sorry, you cannot cook any recipes, you need to go to the groccery store.')
  }
}


function mainClicks(event) {
  const target = event.target
  const targetRecipe = findTargetRecipe(target)

  switch(target.id) {
    case 'img1':
      target.closest('.recipe-card').classList.add('recipe-card-active')
      break;
    case 'img2':
      target.closest('.recipe-card').classList.add('recipe-card-active')
      break;
    case 'icon-fav' || false:
      addOrRemoveFromUserList(targetRecipe, 'isFavorited', 'favoriteRecipes')
      break;
    case 'icon-cook' || false:
      addOrRemoveFromUserList(targetRecipe, 'isToCook', 'recipesToCook')
      break;
    case 'exit-recipe':
      target.closest('.recipe-card').classList.remove('recipe-card-active')
      break;
    case 'cooked-recipe':
      cookThisRecipe(targetRecipe)
      break;
    case 'exit-pantry':
      target.parentNode.classList.add('hidden')
      break;
    case `compare-recipe`:
      compareRecipes(targetRecipe)
      break;
  }
}

function findTargetRecipe(target) {
  const targetId = target.closest('.recipe-card').getAttribute('name')
  return recipes.find(recipe => recipe.id == targetId)
}

function addOrRemoveFromUserList(targetRecipe, checkProperty, userListName) {
  if (targetRecipe[checkProperty]) {
    targetRecipe[checkProperty] = false
    user.removeRecipe(targetRecipe, userListName)
  } else {
    targetRecipe[checkProperty] = true
    user.saveRecipe(targetRecipe, userListName)
  }
  showHome()
}

function compareRecipes(targetRecipe) {
  const missingList = user.pantry.compareIngredients(targetRecipe)
  if (missingList) {
    _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].showRecipeComparison(missingList, targetRecipe)
  } else {
    alert('You can cook this with your current pantry ingredients!')
  }
}

function cookThisRecipe(targetRecipe) {
  user.removeRecipe(targetRecipe, 'recipesToCook')
  user.pantry.removeIngredients(targetRecipe)
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].showUserPantry(user, ingredients)
  alert('Good cooking! Recipe will be removed from your recipes to cook.')
  setTimeout(showHome, 1000)
}

function displayTaggedRecipes(checkboxesSelector) {
  const checkboxes = document.querySelectorAll(".checked-tag");
  const checkboxValues = Array.from(checkboxes)
  const selectedBoxes = checkboxValues.filter(box => box.checked).map(tag => tag.id)
  const searchResults = recipes.filter(recipe => {
    return recipe.tags.some(tag => selectedBoxes.includes(tag));
  });
  _dom_updates__WEBPACK_IMPORTED_MODULE_9__["default"].displayCards(searchResults)
}


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pantry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pantry */ "./src/Pantry.js");

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = new _Pantry__WEBPACK_IMPORTED_MODULE_0__["default"](user.pantry, user.id);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe, list) {
    if (!this[list].includes(recipe)) {
      this[list].push(recipe);
    }
  }

  removeRecipe(recipe, list) {
    const i = this[list].indexOf(recipe);
    this[list].splice(i, 1);
  }

  filterRecipes(tag, list) {
    return this[list].filter(recipe => recipe.tags.includes(tag));
  }
  
  searchForRecipe(keyword, list) {
    return this[list].filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.filter(ingredient => ingredient.name.includes(keyword)))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/N2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmdyZWRpZW50LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcG90LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFzb25pbmcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmdyZWRpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFt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OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUM1RixZQUFzSTs7QUFFdEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7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Y2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNzg5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvOyB9XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAuNSUgMC43JSAwJTtcXG4gIHdpZHRoOiA3MCU7IH1cXG5cXG5oMiB7XFxuICBjb2xvcjogIzg0QzhBNDtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7IH1cXG5cXG5oMyB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG5oNCB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbi5sb2dpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogNDV2aDtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmRjY2E7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAjQzRFQjY3OyB9XFxuXFxuLndlbGNvbWUtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDExMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cXG5cXG4ud2VsY29tZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi51c2VyLWljb24ge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiA4ZW07XFxuICBtYXJnaW46IDE1cHggYXV0byAyMHB4IGF1dG87IH1cXG5cXG4udXNlci1pbnB1dCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNDAlOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAwJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNzg5NDtcXG4gIGhlaWdodDogOSU7IH1cXG5cXG4uZmlsdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uaG9tZS1idG4tYXBwbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG5oMSB7XFxuICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG5cXG5zcGFuIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7IH1cXG5cXG4jc2VhcmNoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgI0M0RUI2NztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGNjYTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgd2hpdGUpLCBjb2xvci1zdG9wKDEsICNlMWUxZTEpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtMXB4IDIwcHggMXB4ICM1Yzc4OTQ7XFxuICBjb2xvcjogIzVCNzg5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgI3NlYXJjaC1pbnB1dDpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG4gICNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggd2hpdGU7IH1cXG4gICNzZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICM1Qjc4OTQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lOyB9XFxuICAjc2VhcmNoLWlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDsgfVxcblxcbi5uYXYtYnRuIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjNUI3ODk0IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgd2lkdGg6IDE1JTsgfVxcbiAgLm5hdi1idG46aG92ZXIge1xcbiAgICBjb2xvcjogI0M0RUI2NztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuICAubmF2LWJ0biBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDJweCAwcHg7IH1cXG5cXG4uc3Ryb2tlLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNDNEVCNjc7IH1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDsgfVxcblxcbi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTUlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA5JTsgfVxcblxcbi5teS1yZWNpcGVzLWJhbm5lcixcXG4ud2VsY29tZS1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTsgfVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciBoMSxcXG4ud2VsY29tZS1tc2cgaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IH1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgbWFyZ2luLXRvcDogNTBweDsgfVxcblxcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI0JTtcXG4gIHdpZHRoOiAxNSU7XFxuICBtYXJnaW4tbGVmdDogLTElOyB9XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IDE1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg0MDBweCwgYXV0byk7XFxuICB6LWluZGV4OiAtMTsgfVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpIHJvdGF0ZVkoMGRlZykgc2NhbGVZKDEpO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjZzIGVhc2U7IH1cXG4gIC5yZWNpcGUtY2FyZCAuY2FyZC1mcm9udCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpIHJvdGF0ZVkoMGRlZykgc2NhbGVZKDEpOyB9XFxuICAucmVjaXBlLWNhcmQgLmNhcmQtYmFjayB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpIHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjaztcXG4gICAgei1pbmRleDogMTAwOyB9XFxuXFxuLm92ZXJsYXAge1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLnJlY2lwZS1jYXJkLWFjdGl2ZSB7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogODUlO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjZzIGVhc2U7XFxuICB6LWluZGV4OiA5OTtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC5yZWNpcGUtY2FyZC1hY3RpdmUgLmZsaXAtY2FyZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuICAucmVjaXBlLWNhcmQtYWN0aXZlIC5jYXJkLWJhY2sge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMikgcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZSg1MCUsIDI1JSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7IH1cXG4gIC5yZWNpcGUtY2FyZC1hY3RpdmUgLmNhcmQtZnJvbnQge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyKSB0cmFuc2xhdGVZKDI1JSk7IH1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgZWFzZTtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7IH1cXG5cXG4uY2FyZC1mcm9udCxcXG4uY2FyZC1iYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblxcbi5jYXJkLWJhY2sgcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUlO1xcbiAgaGVpZ2h0OiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSkgcGVyc3BlY3RpdmUoMXB4KTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBoZWlnaHQ6IDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjMzU5NTY3OyB9XFxuXFxuLmNhcmQtYmFjayAuaW5ncmVkaWVudHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMCU7XFxuICBoZWlnaHQ6IDQ1JTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogLjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7IH1cXG5cXG4uY2FyZC1iYWNrIC5pbnN0cnVjdGlvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBoZWlnaHQ6IDg1JTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIG1hcmdpbjogLTIwJSAwIDAgMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrOyB9XFxuXFxuLmNhcmQtYmFjayAjZXhpdC1yZWNpcGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwJTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSkgcm90YXRlKC0xMjBkZWcpO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmNhcmQtYmFjayAjZXhpdC1yZWNpcGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjODRDOEE0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNhcmQtYmFjayBidXR0b24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxJTtcXG4gIGxlZnQ6IDUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC43KTsgfVxcblxcbi5jYXJkLWJhY2sgI2Nvb2tlZC1yZWNpcGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwJTtcXG4gIHJpZ2h0OiA1JTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNTk1Njc7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuY2FyZC1iYWNrICNjb29rZWQtcmVjaXBlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzg0QzhBNDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIGgzIHtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAjQzRFQjY3O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4udG8tY29vay1idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDogOCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjODRDOEE0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLnRvLWNvb2stYnV0dG9uIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IC01JTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xOCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIC50by1jb29rLWJ1dHRvbiAudG8tY29vayB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjA4MDA7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC50by1jb29rLWJ1dHRvbjpob3ZlciAjaWNvbi1mYXYsIC50by1jb29rLWJ1dHRvbjpob3ZlciAjaWNvbi1jb29rIHtcXG4gICAgYmFja2dyb3VuZDogI2E0MDAwMDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTsgfVxcbiAgLnRvLWNvb2stYnV0dG9uOmhvdmVyIHAge1xcbiAgICBjb2xvcjogI2E0MDAwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTIlO1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuXFxuLmZhdm9yaXRlLWJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXRvcDogOCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzg0QzhBNDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mYXZvcml0ZS1idXR0b24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogLTUlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgLmZhdm9yaXRlLWJ1dHRvbiAuZmF2b3JpdGVkIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDgwMDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZhdm9yaXRlLWJ1dHRvbjpob3ZlciAjaWNvbi1mYXYge1xcbiAgICBiYWNrZ3JvdW5kOiAjYTQwMDAwO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuICAuZmF2b3JpdGUtYnV0dG9uOmhvdmVyIHAge1xcbiAgICBjb2xvcjogI2E0MDAwMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTIlO1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi50ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICMzNTk1Njc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7IH1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IH1cXG5cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbi5zaG93LWFsbC1idG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDsgfVxcblxcbi5maWx0ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NEM4QTQ7IH1cXG5cXG4ubG9naW4tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblxcbi5sb2FkLWFuaW1hdGlvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tdG9wOiAyNSU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAyNXB4IHNvbGlkICNEQUU0RUU7XFxuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogc3BpbiA1cyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbi5kcm9wLW1lbnUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA4MSU7XFxuICBtYXJnaW4tdG9wOiA5MnB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjUwcHg7XFxuICB6LWluZGV4OiAzOyB9XFxuXFxuLmRyb3AtbWVudSBoMiB7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIG1hcmdpbjogMHB4OyB9XFxuXFxuLnBhbnRyeS1saXN0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMzNTk1Njc7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcblxcbiNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlOyB9XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrOyB9XFxuXFxuI292ZXJsYXkge1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cXG4ucGFudHJ5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7XFxuICB0b3A6IDI1JTtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNpdGlvbjogMS42cyBlYXNlOyB9XFxuICAucGFudHJ5ICNleGl0LXBhbnRyeSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwJTtcXG4gICAgcmlnaHQ6IDIlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAucGFudHJ5ICNleGl0LXBhbnRyeTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzg0QzhBNDtcXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAucGFudHJ5IC5wYW50cnktaW5ncmVkaWVudHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgdG9wOiAxNSU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC5wYW50cnkgaDQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5wYW50cnkgLmFkZC1pbmdyZWRpZW50LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgLnBhbnRyeSAuYWRkLWluZ3JlZGllbnQtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICAucGFudHJ5IC5maW5kLXJlY2lwZXMtdXNpbmctcGFudHJ5LWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG5cXG4ucGFudHJ5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAxLjZzIGVhc2U7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiA1MCU7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODRweCkge1xcbiAgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDQwdnc7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3MnB4KSB7XFxuICBtYWluIHtcXG4gICAgbGVmdDogNSU7IH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIGhlYWRlciAuZmlsdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIGhlYWRlciAuaG9tZS1idG4tYXBwbGUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmxvZ2luIHtcXG4gICAgaGVpZ2h0OiA0NXZoOyB9XFxuICAucmVjaXBlLWZpbHRlcnMge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuZmlsdGVyLWRyb3Age1xcbiAgICB0b3A6IDklO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7IH1cXG4gICAgLmZpbHRlci1kcm9wIC53cmFwIHtcXG4gICAgICB3aWR0aDogMTEwJTtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAubG9naW4ge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA0NXZoOyB9XFxuICBtYWluIHtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg0MDBweCwgNjAwcHgpOyB9XFxuICAuY2FyZC1waG90by1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4OyB9XFxuICAgIC5jYXJkLXBob3RvLWNvbnRhaW5lciBpbWcge1xcbiAgICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLnJlY2lwZS1jYXJkIHtcXG4gICAgaGVpZ2h0OiA5MCU7IH1cXG4gIC5mYXZvcml0ZS1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7IH1cXG4gIC50by1jb29rLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDI1JTsgfVxcbiAgLm5hbWUtaW5ncmVkaWVudC1mb3JtLFxcbiAgLnF1YW50aXR5LWluZ3JlZGllbnQtZm9ybSxcXG4gIC5hZGQtaW5ncmVkaWVudC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IC41ZW07IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI4cHgpIHtcXG4gIC5sb2dpbiB7XFxuICAgIHdpZHRoOiA4MHZ3OyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ub3JtYWxpemUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbG9naW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Jhbm5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3JlY2lwZS1kaXNwbGF5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbG9hZGluZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19wYW50cnkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcmVjaXBlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc3BvbnNpdmVuZXNzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUE7QUFFQTsrRUNBK0U7QURHL0U7OztFQ0NFO0FESUY7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTzs7QUFHekM7K0VDRCtFO0FESS9FOztFQ0RFO0FES0Y7RUFDRSxTQUFTO0VBQ1QseUJFeEIwQjtFRnlCMUIsb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNEJBQTRCLEVBQUE7O0FBRzlCOztFQ0hFO0FET0Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUNKRTtBRFNGO0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0NFdEMwQztFRnVDMUMsZUFBZTtFQUNmLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0V0RHVCO0VGdUR2Qix5QkFBeUIsRUFB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RUFFRjtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsZUFBZSxFQUFBO0VBR2pCOzs7SUFHRSxlQUFlLEVBQUEsRUFDaEI7O0FBR0g7RUFDRTtJQUNFLFdBQVcsRUFBQSxFQUNaOztBWjFFSDtFQUNFLGFBQWEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgLy8gZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIG1hcmdpbjogMCU7XFxuICBwYWRkaW5nOiAwLjUlIDAuNyUgMCU7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogJGFjY2VudC1zZWNvbmRhcnk7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xcbn1cXG5cXG5oMyB7XFxuICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICBoZWlnaHQ6IDE3JTtcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbn1cXG5cXG5oNCB7XFxuICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXByaW1hcnk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4IDFweCA0cHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXCIsXCJAaW1wb3J0IFxcXCJ2YXJpYWJsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIm5vcm1hbGl6ZVxcXCI7XFxuQGltcG9ydCBcXFwibG9naW5cXFwiO1xcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxuQGltcG9ydCBcXFwiYmFubmVyXFxcIjtcXG5AaW1wb3J0IFxcXCJzaWRlYmFyXFxcIjtcXG5AaW1wb3J0IFxcXCJyZWNpcGUtZGlzcGxheVxcXCI7XFxuQGltcG9ydCBcXFwiYnV0dG9uc1xcXCI7XFxuQGltcG9ydCBcXFwibG9hZGluZ1xcXCI7XFxuQGltcG9ydCBcXFwicGFudHJ5XFxcIjtcXG5AaW1wb3J0IFxcXCJyZWNpcGVcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZGFsXFxcIjtcXG5AaW1wb3J0IFxcXCJyZXNwb25zaXZlbmVzc1xcXCI7XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixcIiRwcmltYXJ5LWJhY2tncm91bmQ6ICM1Qjc4OTQ7XFxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kOiAjYjZkY2NhO1xcbiRhY2NlbnQtcHJpbWFyeTogI0M0RUI2NztcXG4kYWNjZW50LXNlY29uZGFyeTojODRDOEE0O1xcbiRkYXJrLWdyZWVuOiAjMzU5NTY3O1xcbiRncmV5OiAjREFFNEVFO1xcbiRib3gtc2hhZG93OiAjNDc1ZDc0O1xcbiRhcHBsZS1yZWQ6ICNmZjA4MDA7XFxuJGRhcmstYXBwbGUtcmVkOiAjYTQwMDAwO1xcblxcbiRwcmltYXJ5LWZvbnQ6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiRzZWNvbmRhcnktZm9udDogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcblxcbkBtaXhpbiB0cmFuc3BhcmVudFRleHQoJGJnQ29sb3IpIHtcXG4gIGJhY2tncm91bmQ6ICRiZ0NvbG9yO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQG1peGluIGxpZ2h0ZW5UZXh0KCkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWl4aW4gY2VudGVySG9yaXpvbnRhbGx5KCkge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuQG1peGluIGNhcmRVbmZsaXBwZWQoKSB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSkgcm90YXRlWSgwZGVnKSBzY2FsZVkoMSk7XFxufVxcblxcbkBtaXhpbiBkZWZpbmVTaXplKCR3aWR0aCwgJGhlaWdodCkge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIGhlaWdodDogJGhlaWdodDtcXG59XFxuXFxuQG1peGluIGRpc3BsYXlSZWNpcGUoKSB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuQG1peGluIGNhcmRTdHlsaW5nKCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkYWNjZW50LXByaW1hcnk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrO1xcbn1cXG5cIixcIi5sb2dpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogNDV2aDtcXG4gIG1hcmdpbi10b3A6IDEwJTtcXG4gIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAkYWNjZW50LXByaW1hcnk7XFxufVxcblxcbi53ZWxjb21lLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZDogJGFjY2VudC1wcmltYXJ5O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDExMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcblxcbi53ZWxjb21lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC42NSk7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCh3aGl0ZSlcXG59XFxuXFxuXFxuXFxuLnVzZXItaWNvbiB7XFxuICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoYmxhY2spO1xcbiAgZm9udC1zaXplOiA4ZW07XFxuICBtYXJnaW46IDE1cHggYXV0byAyMHB4IGF1dG87XFxufVxcblxcbi51c2VyLWlucHV0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblwiLFwiaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAwJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGhlaWdodDogOSU7XFxufVxcblxcbi5maWx0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvbWUtYnRuLWFwcGxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXByaW1hcnkpXFxufVxcblxcbmgxIHtcXG4gIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXByaW1hcnkpXFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG5zcGFuIHtcXG4gIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCh3aGl0ZSlcXG59XFxuXFxuLmhlYWRlci1hcHBsZS1pY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICRhY2NlbnQtcHJpbWFyeTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAkYm94LXNoYWRvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtMXB4IDIwcHggMXB4ICM1Yzc4OTQ7XFxuICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJSAyJSAwJSAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgfVxcblxcbiAgJjpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCB3aGl0ZTtcXG4gIH1cXG5cXG4gICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgJjpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBvdXRzZXQgJGFjY2VudC1wcmltYXJ5O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iYWNrZ3JvdW5kIG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgd2lkdGg6IDE1JTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogJGFjY2VudC1wcmltYXJ5O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDJweCAwcHg7XFxuICB9XFxufVxcblxcbi5zdHJva2UtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFjY2VudC1wcmltYXJ5O1xcbn1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDtcXG59XFxuXCIsXCIuYmFubmVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC41KSwgcmdiYSgwLDAsMCwuNSkpLHVybChcXFwiLi4vaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcXFwiKTtcXG4gIGhlaWdodDogMTUlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA5JTtcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIgaDEsXFxuLndlbGNvbWUtbXNnIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cIixcImFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNCU7XFxuICB3aWR0aDogMTUlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcXG59XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIixcIm1haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNSU7XFxuICBsZWZ0OiAxNSU7XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNDAwcHgsIGF1dG8pO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogODUlO1xcbiAgQGluY2x1ZGUgY2FyZFVuZmxpcHBlZDtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBlYXNlO1xcblxcbiAgLmNhcmQtZnJvbnQge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICBAaW5jbHVkZSBjYXJkVW5mbGlwcGVkKClcXG4gIH1cXG5cXG4gIC5jYXJkLWJhY2sge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKSByb3RhdGVZKDE4MGRlZyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gIH1cXG59XFxuXFxuLm92ZXJsYXAge1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtYWN0aXZlICB7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogODUlO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjZzIGVhc2U7XFxuICB6LWluZGV4OiA5OTtcXG4gIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcblxcbiAgLmZsaXAtY2FyZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgfVxcblxcbiAgLmNhcmQtYmFjayB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyKSByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlKDUwJSwgMjUlKTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjaztcXG4gIH1cXG5cXG4gIC5jYXJkLWZyb250IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMikgdHJhbnNsYXRlWSgyNSUpO1xcbiAgfVxcbn1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgZWFzZTtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi5jYXJkLWZyb250LFxcbi5jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkYWNjZW50LXByaW1hcnk7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG59XFxuXFxuLmNhcmQtYmFjayB7XFxuICBwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC41KSAgcGVyc3BlY3RpdmUoMXB4KTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICB9XFxuXFxuICAuaW5ncmVkaWVudHMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBoZWlnaHQ6IDQ1JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAuOTtcXG4gICAgQGluY2x1ZGUgY2FyZFN0eWxpbmcoKVxcbiAgfVxcblxcbiAgLmluc3RydWN0aW9ucyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC41KTtcXG4gICAgbWFyZ2luOiAtMjAlIDAgMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBAaW5jbHVkZSBjYXJkU3R5bGluZygpXFxuXFxuICB9XFxuXFxuICAjZXhpdC1yZWNpcGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMCU7XFxuICAgIHJpZ2h0OiA1JTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLjUpIHJvdGF0ZSgtMTIwZGVnKTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRkYXJrLWdyZWVuKTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDElO1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLjcpXFxuICB9XFxuICAjY29va2VkLXJlY2lwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgcmlnaHQ6IDUlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNSk7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkZGFyay1ncmVlbik7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIH1cXG4gIH1cXG5cXG59XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgb3BhY2l0eTogNTAlO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciAudGV4dCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIGgzIHtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCAkYWNjZW50LXByaW1hcnk7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG59XFxuXFxuLnRvLWNvb2stYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZy10b3A6IDglO1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogLTUlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE4JTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG5cXG4gIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXNlY29uZGFyeSlcXG5cXG5cXG4gIC50by1jb29rIHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFwcGxlLXJlZClcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICAjaWNvbi1mYXYsICNpY29uLWNvb2sge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkZGFyay1hcHBsZS1yZWQpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBjb2xvcjogJGRhcmstYXBwbGUtcmVkO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgICAgbWFyZ2luLXRvcDogLTEyJTtcXG4gICAgICBvcGFjaXR5OiAxO1xcblxcbiAgICB9XFxuICB9XFxufVxcblxcblxcblxcbi5mYXZvcml0ZS1idXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy10b3A6IDglO1xcbiAgcGFkZGluZy1yaWdodDogMiU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IC01JTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuXFxuICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXNlY29uZGFyeSlcXG5cXG5cXG4gICAgLmZhdm9yaXRlZCB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhcHBsZS1yZWQpO1xcbiAgICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgI2ljb24tZmF2IHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGRhcmstYXBwbGUtcmVkKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgY29sb3I6ICRkYXJrLWFwcGxlLXJlZDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICAgIG1hcmdpbi10b3A6IC0xMiU7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgfVxcbn1cXG5cXG5cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50ZXh0IHtcXG4gIGJhY2tncm91bmQ6ICRkYXJrLWdyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbn1cXG5cIixcImJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG59XFxuXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5zaG93LWFsbC1idG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZpbHRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1zZWNvbmRhcnk7XFxufVxcblxcbi5sb2dpbi1idG4ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG59XFxuXCIsXCIubG9hZC1hbmltYXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luLXRvcDogMjUlO1xcbiAgQGluY2x1ZGUgZGVmaW5lU2l6ZSgyMDBweCwgMjAwcHgpO1xcbiAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMjVweCBzb2xpZCAkZ3JleTtcXG4gIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCAkZGFyay1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogc3BpbiA1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyl9XFxuICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpfVxcbn1cXG5cIixcIi5kcm9wLW1lbnUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogOTJweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLmRyb3AtbWVudSBoMiB7XFxuICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnBhbnRyeS1saXN0IHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsXCIucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICRhY2NlbnQtcHJpbWFyeTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDtcXG5cXG4gIGg0IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxuICB9XFxuXFxuICBvbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7XFxuICB9XFxufVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgJGRhcmstZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcbn1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtcHJpbWFyeTtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcbn1cXG5cXG4jcmVjaXBlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7XFxufVxcblxcblxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxuICBoZWlnaHQ6MTAwJTtcXG4gIGxlZnQ6MDtcXG4gIG9wYWNpdHk6MC41O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MDtcXG4gIHdpZHRoOjEwMCU7XFxuICB6LWluZGV4OjEwMDtcXG59XFxuXCIsXCIucGFudHJ5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgQGluY2x1ZGUgY2FyZFN0eWxpbmcoKTtcXG4gIHRvcDogMjUlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2l0aW9uOiAxLjZzIGVhc2U7XFxuXFxuICAjZXhpdC1wYW50cnkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMCU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkZGFyay1ncmVlbik7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wYW50cnktaW5ncmVkaWVudHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgdG9wOiAxNSU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgQGluY2x1ZGUgY2FyZFN0eWxpbmcoKVxcbiAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKVxcbiAgfVxcblxcbiAgaDQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuICAuYWRkLWluZ3JlZGllbnQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KClcXG4gIH1cXG5cXG4gIC5hZGQtaW5ncmVkaWVudC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDUlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKVxcbiAgfVxcblxcbiAgLmZpbmQtcmVjaXBlcy11c2luZy1wYW50cnktYnRuICB7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKVxcbiAgfVxcbn1cXG5cXG4ucGFudHJ5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAxLjZzIGVhc2U7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdG9wOiA1MCU7XFxufVxcblwiLFwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjg0cHgpIHtcXG4gIC5sb2dpbiB7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzJweCkge1xcblxcbiAgbWFpbiB7XFxuICAgIGxlZnQ6IDUlO1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgaDEge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmZpbHRlciB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUtYnRuLWFwcGxlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxvZ2luIHtcXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgfVxcblxcbiAgLnJlY2lwZS1maWx0ZXJzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5maWx0ZXItZHJvcCB7XFxuICAgIHRvcDogOSU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXG4gICAgLndyYXAge1xcbiAgICAgIHdpZHRoOiAxMTAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBAaW5jbHVkZSBjYXJkU3R5bGluZztcXG4gICAgfVxcblxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAubG9naW4ge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA0NXZoO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNDAwcHgsIDYwMHB4KTtcXG4gIH1cXG5cXG4gIC5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuXFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAxMDAlXFxuICAgIH1cXG4gIH1cXG4gIC5yZWNpcGUtY2FyZCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgfVxcblxcbiAgLmZhdm9yaXRlLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXG4gIH1cXG5cXG4gIC50by1jb29rLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXG4gIH1cXG5cXG4gIC5uYW1lLWluZ3JlZGllbnQtZm9ybSxcXG4gIC5xdWFudGl0eS1pbmdyZWRpZW50LWZvcm0sXFxuICAuYWRkLWluZ3JlZGllbnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAuNWVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyOHB4KSB7XFxuICAubG9naW4ge1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHBhbnRyeSwgdXNlcklEKSB7XG4gICAgdGhpcy5wYW50cnkgPSB0aGlzLmNvbXBpbGVTYW1lSW5ncmVkaWVudHMocGFudHJ5KTtcbiAgICB0aGlzLnVzZXJJRCA9IHVzZXJJRDtcbiAgfSBcblxuICBjb21waWxlU2FtZUluZ3JlZGllbnRzKHBhbnRyeSkge1xuICAgIGNvbnN0IHVuaXF1ZVBhbnRyeUl0ZW1zID0gcGFudHJ5LnJlZHVjZSgoYWNjLCBwYW50cnlJdGVtKSA9PiB7XG4gICAgICBpZiAoYWNjW3BhbnRyeUl0ZW0uaW5ncmVkaWVudF0pIHtcbiAgICAgICAgYWNjW3BhbnRyeUl0ZW0uaW5ncmVkaWVudF0uYW1vdW50ICs9IHBhcnNlSW50KHBhbnRyeUl0ZW0uYW1vdW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY1twYW50cnlJdGVtLmluZ3JlZGllbnRdID1cbiAgICAgICAge1xuICAgICAgICAgIGlkOiBwYW50cnlJdGVtLmluZ3JlZGllbnQsXG4gICAgICAgICAgYW1vdW50OiBwYXJzZUludChwYW50cnlJdGVtLmFtb3VudClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIHVuaXF1ZVBhbnRyeUl0ZW1zXG4gIH1cblxuICBjb21wYXJlSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgbGV0IG1pc3NpbmcgPSBbXVxuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbnRyeVtpbmdyZWRpZW50LmlkXSkge1xuICAgICAgICBtaXNzaW5nLnB1c2goe1xuICAgICAgICAgICdtaXNzaW5nJzogaW5ncmVkaWVudC5uYW1lLCBcbiAgICAgICAgICAnYW1vdW50TmVlZGVkJzogaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgXG4gICAgICAodGhpcy5wYW50cnlbaW5ncmVkaWVudC5pZF0uYW1vdW50IDwgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpIHtcbiAgICAgICAgbWlzc2luZy5wdXNoKHtcbiAgICAgICAgICAnbWlzc2luZyc6IGluZ3JlZGllbnQubmFtZSwgXG4gICAgICAgICAgJ2Ftb3VudE5lZWRlZCc6IFxuICAgICAgICAgIChpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIHRoaXMucGFudHJ5W2luZ3JlZGllbnQuaWRdLmFtb3VudCksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gbWlzc2luZyAgXG4gIH1cblxuICByZW1vdmVJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICBsZXQgYXBpVXBkYXRlID0gW107XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBpZiAodGhpcy5wYW50cnlbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgdGhpcy5wYW50cnlbaW5ncmVkaWVudC5pZF0uYW1vdW50IC09IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgICAgICBhcGlVcGRhdGUucHVzaCh7XG4gICAgICAgICAgdXNlcklEOiB0aGlzLnVzZXJJRCwgXG4gICAgICAgICAgaW5ncmVkaWVudElEOiBpbmdyZWRpZW50LmlkLCBcbiAgICAgICAgICBpbmdyZWRpZW50TW9kaWZpY2F0aW9uOiAtaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYXBpVXBkYXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFudHJ5OyAiLCIvLyB1c2UgZ2V0IHRvIGdyYWIgd2hhdGV2ZXIgZGF0YVR5cGUgKHVzZXJzL2luZ3JlZGllbnRzL3JlY2lwZXMpXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShkYXRhVHlwZSwgbG9jYWxBcnJheSkge1xuICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke2RhdGFUeXBlfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGFBcnJheSA9PiB7XG4gICAgICBkYXRhQXJyYXkuZm9yRWFjaChkYXRhT2JqZWN0ID0+IHtcbiAgICAgICAgbG9jYWxBcnJheS5wdXNoKGRhdGFPYmplY3QpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGBTb3JyeSwgdGhlcmUgaXMgYW4gZXJyb3I6ICR7ZXJyb3J9YCkpXG59XG5cbi8vIHVzZSBwb3N0IHRvIG1vZGlmeSBpbmdyZWRpZW50cyBcbmV4cG9ydCBmdW5jdGlvbiBwb3N0RGF0YSh1c2VySWQsIGluZ3JlZGllbnRJZCwgYW1vdW50KSB7XG4gIGNvbnN0IGFtb3VudE51bSA9IHBhcnNlSW50KGFtb3VudClcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcbiAgICAgIHVzZXJJRDogdXNlcklkLCBcbiAgICAgIGluZ3JlZGllbnRJRDogaW5ncmVkaWVudElkLCBcbiAgICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IGFtb3VudE51bVxuICAgIH0pXG4gIH1cbiAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXNlcnMnLCBzZXR0aW5ncylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGBTb3JyeSwgdGhlcmUgaXMgYW4gZXJyb3I6ICR7ZXJyb3J9YCkpXG59IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBpbmdyZWRpZW50c0RhdGEgPSBbXG4gIHtcbiAgICBcImlkXCI6IDIwMDgxLFxuICAgIFwibmFtZVwiOiBcIndoZWF0IGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgzNzIsXG4gICAgXCJuYW1lXCI6IFwiYmljYXJib25hdGUgb2Ygc29kYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjMsXG4gICAgXCJuYW1lXCI6IFwiZWdnc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDcyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzM1LFxuICAgIFwibmFtZVwiOiBcInN1Y3Jvc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTIwNixcbiAgICBcIm5hbWVcIjogXCJpbnN0YW50IHZhbmlsbGEgcHVkZGluZ1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjYwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzM0LFxuICAgIFwibmFtZVwiOiBcImJyb3duIHN1Z2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0NyxcbiAgICBcIm5hbWVcIjogXCJzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyODBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICBcIm5hbWVcIjogXCJmaW5lIHNlYSBzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTk5MDMsXG4gICAgXCJuYW1lXCI6IFwic2VtaSBzd2VldCBjaGlwc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDUsXG4gICAgXCJuYW1lXCI6IFwidW5zYWx0ZWQgYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA1MCxcbiAgICBcIm5hbWVcIjogXCJ2YW5pbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwOTAxNixcbiAgICBcIm5hbWVcIjogXCJhcHBsZSBjaWRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwMDMsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAyNyxcbiAgICBcIm5hbWVcIjogXCJjb3JuIHN0YXJjaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjM2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwNDYsXG4gICAgXCJuYW1lXCI6IFwiZGlqb24gc3R5bGUgbXVzdGFyZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjE1LFxuICAgIFwibmFtZVwiOiBcIndob2xlIGdhcmxpYyBjbG92ZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjIwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwNDYsXG4gICAgXCJuYW1lXCI6IFwid2hvbGUgZ3JhaW4gZGlqb24gbXVzdGFyZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5OTExLFxuICAgIFwibmFtZVwiOiBcIm1hcGxlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYxMTIsXG4gICAgXCJuYW1lXCI6IFwibWlzb1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEwMDYyLFxuICAgIFwibmFtZVwiOiBcInBvcmsgY2hvcFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgXCJuYW1lXCI6IFwicyZwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MjRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYxMjQsXG4gICAgXCJuYW1lXCI6IFwic295IHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICBcIm5hbWVcIjogXCJzcmlyYWNoYSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTc2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgXCJuYW1lXCI6IFwiYmxhY2sgcGVwcGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMSxcbiAgICBcIm5hbWVcIjogXCJidXR0ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0NTgyLFxuICAgIFwibmFtZVwiOiBcIm9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMzEsXG4gICAgXCJuYW1lXCI6IFwicmVkIHBlcHBlciBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MTAwLFxuICAgIFwibmFtZVwiOiBcImNoaWNrZW4gd2luZ1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTkzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDksXG4gICAgXCJuYW1lXCI6IFwicmVkIGNoaWxpIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDk5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgXCJuYW1lXCI6IFwiZ2FybGljIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNjgsXG4gICAgXCJuYW1lXCI6IFwidGFiYXNjbyBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNzYsXG4gICAgXCJuYW1lXCI6IFwibWFuZ29lc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjYsXG4gICAgXCJuYW1lXCI6IFwib25pb24gcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA0MjA0NyxcbiAgICBcIm5hbWVcIjogXCJzZWFzb25lZCBzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgzNzEsXG4gICAgXCJuYW1lXCI6IFwiYmFraW5nIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwNDAsXG4gICAgXCJuYW1lXCI6IFwicmlwZSBiYW5hbmFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAxMSxcbiAgICBcIm5hbWVcIjogXCJidWNrIHdoZWF0IGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIzMCxcbiAgICBcIm5hbWVcIjogXCJidXR0ZXJtaWxrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NzNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkyOTYsXG4gICAgXCJuYW1lXCI6IFwicnVubnkgaG9uZXlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjA5OCxcbiAgICBcIm5hbWVcIjogXCJwZWFudXQgYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0OCxcbiAgICBcIm5hbWVcIjogXCJhcHBsZSBjaWRlciB2aW5lZ2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwOTAsXG4gICAgXCJuYW1lXCI6IFwiYnJvd24gcmljZSBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNzg0LFxuICAgIFwibmFtZVwiOiBcImJyb3duIHJpY2Ugc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEyNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI0LFxuICAgIFwibmFtZVwiOiBcImVnZyBhbGJ1bWVuXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MjUsXG4gICAgXCJuYW1lXCI6IFwiZXZhcG9yYXRlZCBjYW5lIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIyMjAsXG4gICAgXCJuYW1lXCI6IFwiZmxheCBtZWFsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgXCJuYW1lXCI6IFwiaW5zdGFudCB5ZWFzdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzgzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzA0LFxuICAgIFwibmFtZVwiOiBcInVuc3VsZnVyZWQgbW9sYXNzZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQxMyxcbiAgICBcIm5hbWVcIjogXCJQb3RhdG8gU3RhcmNoIEZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2OTYsXG4gICAgXCJuYW1lXCI6IFwidGFwaW9jYSBzdGFyY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5Mzc2MCxcbiAgICBcIm5hbWVcIjogXCJXaG9sZSBHcmFpbiBUZWZmIEZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgXCJuYW1lXCI6IFwiaWNlIHdhdGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MjYsXG4gICAgXCJuYW1lXCI6IFwieGFudGhhbiBndW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTM1MCxcbiAgICBcIm5hbWVcIjogXCJjb3JuIHN5cnVwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTA5OSxcbiAgICBcIm5hbWVcIjogXCJmcnVpdCBjb2NrdGFpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMDYxLFxuICAgIFwibmFtZVwiOiBcIndob2xlIGFsbW9uZHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxMDQsXG4gICAgXCJuYW1lXCI6IFwiY29jb251dFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTE1LFxuICAgIFwibmFtZVwiOiBcImNvY29udXQgY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MDQ3LFxuICAgIFwibmFtZVwiOiBcImNvY29udXQgb2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTkwNzEsXG4gICAgXCJuYW1lXCI6IFwiZGFyayBjaG9jb2xhdGUgbW9yc2Vsc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjMyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgyMTIsXG4gICAgXCJuYW1lXCI6IFwiZ3Jhbm9sYSBjZXJlYWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MTIxLFxuICAgIFwibmFtZVwiOiBcIm9hdG1lYWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE0MixcbiAgICBcIm5hbWVcIjogXCJwZWNhblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzE0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNzQwLFxuICAgIFwibmFtZVwiOiBcImJsYW5jaGVkIGFsbW9uZCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjUsXG4gICAgXCJuYW1lXCI6IFwiZWdnIHlvbGtzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIwMjMsXG4gICAgXCJuYW1lXCI6IFwic2VzYW1lIHNlZWRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxNTA2MixcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIHRlbmRlcnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICBcIm5hbWVcIjogXCJzbGF3IG1peFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjgxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTE2MDk4LFxuICAgIFwibmFtZVwiOiBcImNyZWFteSBwZWFudXQgYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA2NCxcbiAgICBcIm5hbWVcIjogXCJtaW50XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyMSxcbiAgICBcIm5hbWVcIjogXCJwb3dkZXJlZCBnaW5nZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTYwLFxuICAgIFwibmFtZVwiOiBcImp1aWNlIG9mIGxpbWVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ3N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjY2LFxuICAgIFwibmFtZVwiOiBcInBpbmVhcHBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTM1LFxuICAgIFwibmFtZVwiOiBcImNhdWxpZmxvd2VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjE3MixcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIHN0b2NrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MzIsXG4gICAgXCJuYW1lXCI6IFwiZ2hlZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzcwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTIwLFxuICAgIFwibmFtZVwiOiBcImhhemVsbnV0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2OTAsXG4gICAgXCJuYW1lXCI6IFwibnV0cml0aW9uYWwgeWVhc3QgZmxha2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyODIsXG4gICAgXCJuYW1lXCI6IFwib25pb25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTAxMjMsXG4gICAgXCJuYW1lXCI6IFwicHJvc2N1aXR0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjE3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDk2LFxuICAgIFwibmFtZVwiOiBcInJhcGluaVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQ2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNTAsXG4gICAgXCJuYW1lXCI6IFwiYmFyIGIgcXVlIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjE5NCxcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIGJyb3RoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MjcsXG4gICAgXCJuYW1lXCI6IFwibGlxdWlkIHNtb2tlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyOCxcbiAgICBcIm5hbWVcIjogXCJwYXByaWthXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwNzIsXG4gICAgXCJuYW1lXCI6IFwicG9yayBzaG91bGRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDY5NzEsXG4gICAgXCJuYW1lXCI6IFwid29yY2VzdGVyc2hpcmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjA3LFxuICAgIFwibmFtZVwiOiBcImFsbW9uZG1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODk0MixcbiAgICBcIm5hbWVcIjogXCJncmFoYW0gY3JhY2tlciBjcnVzdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgXCJuYW1lXCI6IFwiZ3JvdW5kIGNpbm5hbW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyNSxcbiAgICBcIm5hbWVcIjogXCJudXRtZWcgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDMyNzQsXG4gICAgXCJuYW1lXCI6IFwibG93IGZhdCBjcmVhbSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODEyMCxcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBncmFpbiByb2xsZWQgb2F0c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0MjQsXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIHB1bXBraW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDE2LFxuICAgIFwibmFtZVwiOiBcImFwcGxlIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgwNDcsXG4gICAgXCJuYW1lXCI6IFwicmFpc2luIGJyZWFkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA4OTAwMyxcbiAgICBcIm5hbWVcIjogXCJncmFubnlzbWl0aCBhcHBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNzcsXG4gICAgXCJuYW1lXCI6IFwiZnVsbC1mYXQgbWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjk3LFxuICAgIFwibmFtZVwiOiBcImZsYXQgbGVhZiBwYXJzbGV5IGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDMyMDA5LFxuICAgIFwibmFtZVwiOiBcImRyaWVkIHJlZCBjaGlsaVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNTE1MixcbiAgICBcIm5hbWVcIjogXCJqdW1ibyBzaHJpbXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5NCxcbiAgICBcIm5hbWVcIjogXCJ2aWRhbGlhIG9uaW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwMDcsXG4gICAgXCJuYW1lXCI6IFwiYXJ0aWNob2tlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNTAsXG4gICAgXCJuYW1lXCI6IFwibGVtb25cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc2NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTU2LFxuICAgIFwibmFtZVwiOiBcImxlbW9uIHBlZWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODA2OSxcbiAgICBcIm5hbWVcIjogXCJnbHV0ZW4tZnJlZSB3aGl0ZSBzYW5kd2ljaCBicmVhZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODYzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzMsXG4gICAgXCJuYW1lXCI6IFwicGFybWVzYW4gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyNyxcbiAgICBcIm5hbWVcIjogXCJvcmVnYW5vXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzNDA1MyxcbiAgICBcIm5hbWVcIjogXCJleHRyYSB2aXJnaW4gb2xpdmUgb2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwNCxcbiAgICBcIm5hbWVcIjogXCJiYXkgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzMzYsXG4gICAgXCJuYW1lXCI6IFwicG93ZGVyZWQgc3VnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTE0MyxcbiAgICBcIm5hbWVcIjogXCJjZWxlcnlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5LFxuICAgIFwibmFtZVwiOiBcImhhcmRjb29rZWQgZWdnc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQ2NDEsXG4gICAgXCJuYW1lXCI6IFwicmVkdWNlZCBmYXQgbWF5b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTEyNTYsXG4gICAgXCJuYW1lXCI6IFwic2tpbSBncmVlayB5b2d1cnRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI2M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTk0NCxcbiAgICBcIm5hbWVcIjogXCJob3Rkb2cgcmVsaXNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOTFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTEyODIsXG4gICAgXCJuYW1lXCI6IFwicmVkIG9uaW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEzNTMsXG4gICAgXCJuYW1lXCI6IFwiaWRhaG8gcG90YXRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTE4MjEsXG4gICAgXCJuYW1lXCI6IFwiYmVsbCBwZXBwZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDA0OCxcbiAgICBcIm5hbWVcIjogXCJicm93biBtaW51dGUgcmljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjUxLFxuICAgIFwibmFtZVwiOiBcIml0YWxpYW4gY2hlZXNlIGJsZW5kXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzkyNyxcbiAgICBcIm5hbWVcIjogXCJzd2VldCBpdGFsaWFuIHR1cmtleSBzYXVzYWdlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE1NDksXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIHRvbWF0byBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjIyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwMTI5LFxuICAgIFwibmFtZVwiOiBcImJyZWFkIGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1MyxcbiAgICBcIm5hbWVcIjogXCJjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQ1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQwNTMsXG4gICAgXCJuYW1lXCI6IFwicHVyZSBvbGl2ZSBvaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTkxMixcbiAgICBcIm5hbWVcIjogXCJhZ2F2ZSBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMDgwLFxuICAgIFwibmFtZVwiOiBcInBhc3RyeSBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5MzM0LFxuICAgIFwibmFtZVwiOiBcImRhcmsgYnJvd24gc3VnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUwMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzgxNCxcbiAgICBcIm5hbWVcIjogXCJsaWdodGx5IHN3ZWV0ZW5lZCB3aGlwcGVkIGNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTIwNixcbiAgICBcIm5hbWVcIjogXCJjdWN1bWJlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjYyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDM1LFxuICAgIFwibmFtZVwiOiBcInF1aW5vYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTE0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNTI5LFxuICAgIFwibmFtZVwiOiBcImhlaXJsb29tIHRvbWF0b2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQyNDIsXG4gICAgXCJuYW1lXCI6IFwiY3JhbmJlcnJ5IGp1aWNlIGNvY2t0YWlsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQxMzAsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW0gc29kYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTg1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MTc3LFxuICAgIFwibmFtZVwiOiBcImdlbGF0aW5lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDExXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjQ1LFxuICAgIFwibmFtZVwiOiBcImhhbGxvd2VlbiBzcHJpbmtsZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDA1MSxcbiAgICBcIm5hbWVcIjogXCJncmV5IGdvb3NlIHZvZGthXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1NCxcbiAgICBcIm5hbWVcIjogXCJ3aGlwcGVkIGNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM4MjgsXG4gICAgXCJuYW1lXCI6IFwibWFyaW5hdGVkIGFydGljaG9rZSBoZWFydHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI2NixcbiAgICBcIm5hbWVcIjogXCJjcmltaW5pIG11c2hyb29tc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTcsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW0gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxOSxcbiAgICBcIm5hbWVcIjogXCJmZXRhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjIwMjcsXG4gICAgXCJuYW1lXCI6IFwibWl4ZWQgaXRhbGlhbiBoZXJic1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwODIwNDcsXG4gICAgXCJuYW1lXCI6IFwia29zaGVyIHNhbHRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTQ1NyxcbiAgICBcIm5hbWVcIjogXCJzcGluYWNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0NCxcbiAgICBcIm5hbWVcIjogXCJiYXNpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDcwMzYsXG4gICAgXCJuYW1lXCI6IFwiaXRhbGlhbiBzYXVzYWdlIGxpbmtzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDEwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTExNTQ5LFxuICAgIFwibmFtZVwiOiBcIm1hcmluYXJhIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNzFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzOCxcbiAgICBcIm5hbWVcIjogXCJwZWNvcmlubyByb21hbm8gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTMwNCxcbiAgICBcIm5hbWVcIjogXCJwZWFzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE2NzcsXG4gICAgXCJuYW1lXCI6IFwic2hhbGxvdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY5NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTAyMDQyMCxcbiAgICBcIm5hbWVcIjogXCJwYXN0YSBzaGVsbHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMDI2LFxuICAgIFwibmFtZVwiOiBcInNocmVkZGVkIG1venphcmVsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE4NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYzMCxcbiAgICBcIm5hbWVcIjogXCJza2ltIG1pbGsgcmljb3R0YSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDEwNixcbiAgICBcIm5hbWVcIjogXCJ3aGl0ZSB3aW5lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0NjMsXG4gICAgXCJuYW1lXCI6IFwiZnJvemVuIHNwaW5hY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDI1LFxuICAgIFwibmFtZVwiOiBcInBlcHBlcmphY2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICBcIm5hbWVcIjogXCJibGFja2JlcnJ5IGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTMwMixcbiAgICBcIm5hbWVcIjogXCJyYXNwYmVycnlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI0N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzU0LFxuICAgIFwibmFtZVwiOiBcInBpbmVhcHBsZSB3aXRoIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTA3MCxcbiAgICBcIm5hbWVcIjogXCJzd2VldCBjaGVycmllc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTg0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MTgxLFxuICAgIFwibmFtZVwiOiBcImNob2NvbGF0ZSBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTMwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE4NjE3LFxuICAgIFwibmFtZVwiOiBcImdyYWhhbSBjcmFja2VyIGNydW1ic1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTM1LFxuICAgIFwibmFtZVwiOiBcIm51dHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDM3LFxuICAgIFwibmFtZVwiOiBcImhhYXMgYXZvY2Fkb3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjA1NyxcbiAgICBcIm5hbWVcIjogXCJnYXJiYW56b3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDUsXG4gICAgXCJuYW1lXCI6IFwiZGlsbHdlZWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjU2LFxuICAgIFwibmFtZVwiOiBcImdyZWVrIHlvZ3VydFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjMxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNTIsXG4gICAgXCJuYW1lXCI6IFwibGVtb24ganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5MSxcbiAgICBcIm5hbWVcIjogXCJzcHJpbmcgb25pb25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjM2LFxuICAgIFwibmFtZVwiOiBcInBlYWNoZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTA5NSxcbiAgICBcIm5hbWVcIjogXCJpY2VjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQ3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwODYyLFxuICAgIFwibmFtZVwiOiBcImNvb2tlZCBiYWNvbiBzdHJpcHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MTE0LFxuICAgIFwibmFtZVwiOiBcInJvYXN0ZWQgY2hpY2tlblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMzMzLFxuICAgIFwibmFtZVwiOiBcImdyZWVuIHBlcHBlcnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDI2LFxuICAgIFwibmFtZVwiOiBcImZyZXNoIG1venphcmVsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIxMTUyOSxcbiAgICBcIm5hbWVcIjogXCJpdGFsaWFuIHRvbWF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTEwMDksXG4gICAgXCJuYW1lXCI6IFwid2hpdGUgY2hlZGRhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA5XG4gIH0sXG4gIHtcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODk5OCxcbiAgICBcIm5hbWVcIjogXCJiYWxzYW1pYyBnbGF6ZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgwMzAsXG4gICAgXCJuYW1lXCI6IFwiZnJ1aXQgbG9vcHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE5MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTExNixcbiAgICBcIm5hbWVcIjogXCJtYXJzaG1hbGxvd1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MTU4LFxuICAgIFwibmFtZVwiOiBcImh1bW11c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDYsXG4gICAgXCJuYW1lXCI6IFwicHJlcGFyZWQgeWVsbG93IG11c3RhcmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE0LFxuICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgbWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTIxNCxcbiAgICBcIm5hbWVcIjogXCJvcmFuZ2UganVpY2UgY29uY2VudHJhdGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjE2LFxuICAgIFwibmFtZVwiOiBcIm9yYW5nZSBwZWVsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjMsXG4gICAgXCJuYW1lXCI6IFwiYmFjb24gc2xpY2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwNTIsXG4gICAgXCJuYW1lXCI6IFwic3RyaW5nIGJlYW5zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5NTksXG4gICAgXCJuYW1lXCI6IFwiYmFieSBhcnVndWxhIGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDQsXG4gICAgXCJuYW1lXCI6IFwiYmx1ZSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjUyLFxuICAgIFwibmFtZVwiOiBcInBlYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MzQwOCxcbiAgICBcIm5hbWVcIjogXCJwZWFyIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0OSxcbiAgICBcIm5hbWVcIjogXCJmcmVzaCB0aHltZSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE1NSxcbiAgICBcIm5hbWVcIjogXCJ3YWxudXQgaGFsdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTE2OTMsXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIHRvbWF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTcxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTI0LFxuICAgIFwibmFtZVwiOiBcImNhcnJvdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEzNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDEyLFxuICAgIFwibmFtZVwiOiBcImNvcmlhbmRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICBcIm5hbWVcIjogXCJjb21pbm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU0N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTkxMyxcbiAgICBcIm5hbWVcIjogXCJmcm96ZW4gY29yblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTU4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDc3LFxuICAgIFwibmFtZVwiOiBcInp1Y2NoaW5pIHNxdWFzaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjIwNDQ1LFxuICAgIFwibmFtZVwiOiBcInN0ZWFtZWQgcmljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTA0MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAzLFxuICAgIFwibmFtZVwiOiBcImdyb3VuZCBiYXNpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTk4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MDE4LFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCBibGFjayBiZWFuc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzU2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk5MjIzLFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCBjaGlwb3RsZSBjaGlsaWVzIGluIGFkb2JvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExNjUsXG4gICAgXCJuYW1lXCI6IFwiY2lsYW50cm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIxODM2NCxcbiAgICBcIm5hbWVcIjogXCJmbG91ciB0b3J0aWxsYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNjExMjgyLFxuICAgIFwibmFtZVwiOiBcIndoaXRlIG9uaW9uc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQ5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDU3LFxuICAgIFwibmFtZVwiOiBcImJhYnkgc3BpbmFjaCBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI2OCxcbiAgICBcIm5hbWVcIjogXCJkcmllZCBzaGlpdGFrZSBtdXNocm9vbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMDA1LFxuICAgIFwibmFtZVwiOiBcImZhcnJvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1MTEyODIsXG4gICAgXCJuYW1lXCI6IFwieWVsbG93IG9uaW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA2OSxcbiAgICBcIm5hbWVcIjogXCJiYWxzYW1pYyB2aW5lZ2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNTAsXG4gICAgXCJuYW1lXCI6IFwiYm9zdG9uIGJpYmIgbGV0dHVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExNTYsXG4gICAgXCJuYW1lXCI6IFwiZnJlc2ggY2hpdmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcyOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MDI1LFxuICAgIFwibmFtZVwiOiBcIm1heW9ubmFpc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTExOSxcbiAgICBcIm5hbWVcIjogXCJuYXBhIGNhYmJhZ2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExMTIsXG4gICAgXCJuYW1lXCI6IFwicmVkIGNhYmJhZ2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODk2MixcbiAgICBcIm5hbWVcIjogXCJzd2VldCBjaGlsaSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQyLFxuICAgIFwibmFtZVwiOiBcImRyaWVkIHRoeW1lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAyMCxcbiAgICBcIm5hbWVcIjogXCJncmFudWxhdGVkIGdhcmxpY1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjI4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIzNTcyLFxuICAgIFwibmFtZVwiOiBcImdyb3VuZCBjaHVja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjAwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExMjUwLFxuICAgIFwibmFtZVwiOiBcImJ1dHRlcmhlYWQgbGV0dHVjZSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MDY0LFxuICAgIFwibmFtZVwiOiBcImJha2VkIGNoaWNrZW4gYnJlYXN0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDIwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMTUsXG4gICAgXCJuYW1lXCI6IFwiY3Vycnkgc2Vhc29uaW5nXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwOTE1OSxcbiAgICBcIm5hbWVcIjogXCJsaW1lIHBlZWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQzNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODk5MSxcbiAgICBcIm5hbWVcIjogXCJtaW50IGNodXRuZXlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzE2LFxuICAgIFwibmFtZVwiOiBcInN0cmF3YmVycnlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTA5MCxcbiAgICBcIm5hbWVcIjogXCJicm9jY29saSBjcm93bnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTgyMSxcbiAgICBcIm5hbWVcIjogXCJzd2VldCBvcmFuZ2UgcGVwcGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTgsXG4gICAgXCJuYW1lXCI6IFwicG9yayB0ZW5kZXJsb2luXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkxNTcsXG4gICAgXCJuYW1lXCI6IFwibWluaSBtJm1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODg3MSxcbiAgICBcIm5hbWVcIjogXCJoYXdhaWlhbiBzd2VldCByb2xsc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTUwNjIsXG4gICAgXCJuYW1lXCI6IFwiYm9uZWxlc3Mgc2tpbmxlc3MgY2hpY2tlbiBicmVhc3RzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTkxNTEsXG4gICAgXCJuYW1lXCI6IFwicmVlc2UgcGllY2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA0MTAwOSxcbiAgICBcIm5hbWVcIjogXCJjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxODQxMyxcbiAgICBcIm5hbWVcIjogXCJmbGF0YnJlYWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMyNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMTUyOSxcbiAgICBcIm5hbWVcIjogXCJncmFwZSB0b21hdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDE5LFxuICAgIFwibmFtZVwiOiBcInVuc3dlZXRlbmVkIGFwcGxlIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgwNzksXG4gICAgXCJuYW1lXCI6IFwiZHJ5IGJyZWFkY3J1bWJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwNjksXG4gICAgXCJuYW1lXCI6IFwibGVndW1lc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwNzksXG4gICAgXCJuYW1lXCI6IFwiZHJpZWQgY3JhbmJlcnJpZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTkzNSxcbiAgICBcIm5hbWVcIjogXCJjYXRzdXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE1MSxcbiAgICBcIm5hbWVcIjogXCJwaXN0YWNoaW9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTgyMSxcbiAgICBcIm5hbWVcIjogXCJyZWQgc3dlZXQgcGVwcGVyc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2NjE1LFxuICAgIFwibmFtZVwiOiBcInZlZ2V0YWJsZSBzdG9ja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjEzXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgaW5ncmVkaWVudHNEYXRhO1xuIiwiY29uc3QgZG9tVXBkYXRlcyA9IHtcbiAgLy8gQ0hBTkdFIFRIRSBESVNQTEFZIE9GIEFOWSBBUkdTIFBBU1NFRCBJTiwgTVVTVCBQQVNTIElOIFtBUkdTXVxuICB0b2dnbGUoYW55QXJyKSB7XG4gICAgYW55QXJyLmZvckVhY2goYXJlYSA9PlxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcmVhKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpKVxuICB9LFxuXG4gIC8vIEhFTFBFUiBGVU5DVElPTiBUTyBJTlNFUlRIVE1MXG4gIGFkZERpc3BsYXkoYXJlYSwgd2hlcmUsIHdoYXQpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFyZWEpLmluc2VydEFkamFjZW50SFRNTCh3aGVyZSwgd2hhdClcbiAgfSxcblxuICBjbGVhckRpc3BsYXkoYXJlYSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJlYSkuaW5uZXJIVE1MID0gJydcbiAgfSxcblxuICAvLyBDQVJEIERJU1BMQVlcbiAgZGlzcGxheUNhcmRzKHJlY2lwZUxpc3QpIHtcbiAgICB0aGlzLmNsZWFyRGlzcGxheSgnbWFpbicpXG5cbiAgICByZWNpcGVMaXN0LmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGxldCBpbnN0cnVjdGlvbnMgPSAnJztcbiAgICAgIGxldCBpbmdyZWRpZW50cyA9ICcnO1xuICAgICAgcmVjaXBlLmluc3RydWN0aW9ucy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBpbnN0cnVjdGlvbnMgKz0gYDxsaSBhcmlhLWxhYmVsPVwicmVjaXBlLWluc3RydWN0aW9uLXN0ZXBcIiB0YWJpbmRleD1cIjBcIj4ke3N0ZXAuaW5zdHJ1Y3Rpb259PC9saT48YnI+YFxuICAgICAgfSlcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBpbmdyZWRpZW50cyArPSBgPGxpIGFyaWEtbGFiZWw9XCJpbmdyZWRpZW50LXJlcXVpcmVkLWZvci1yZWNpcGVcIiB0YWJpbmRleD1cIjBcIj4ke2luZ3JlZGllbnQubmFtZX06ICR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnR9JHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9PC9saT48YnI+YFxuICAgICAgfSlcblxuICAgICAgY29uc3Qgc2hvcnROYW1lID0gcmVjaXBlLm5hbWUubGVuZ3RoID4gNDBcbiAgICAgICAgPyByZWNpcGUubmFtZS5zdWJzdHJpbmcoMCwgNDApICsgXCIuLi5cIlxuICAgICAgICA6IHJlY2lwZS5uYW1lXG5cbiAgICAgIGNvbnN0IGZhdm9yaXRlZENsYXNzID0gcmVjaXBlLmlzRmF2b3JpdGVkID8gXCJmYXZvcml0ZWRcIiA6ICcnXG4gICAgICBjb25zdCB0b0Nvb2tDbGFzcyA9IHJlY2lwZS5pc1RvQ29vayA/IFwidG8tY29va1wiIDogJydcblxuICAgICAgY29uc3QgY2FyZEh0bWwgPSBgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9JHtyZWNpcGUuaWR9IG5hbWU9JHtyZWNpcGUuaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZyb250XCI+XG4gICAgICAgICAgICAgIDxoMyBtYXhsZW5ndGg9XCI0MFwiPiR7c2hvcnROYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXBob3RvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7cmVjaXBlLmltYWdlfSBjbGFzcz1cImNhcmQtcGhvdG8tcHJldmlld1wiIGlkPVwiaW1nMVwiIGFsdD1cIiR7cmVjaXBlLm5hbWV9IHJlY2lwZVwiIHRpdGxlPVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCIgYXJpYS1sYWJlbD1cImZsaXAtY2FyZC10by1yZXZlYWwtZGV0YWlscy1mb3ItJHtyZWNpcGUubmFtZX1cIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWcyXCI+Q2xpY2sgZm9yIEluc3RydWN0aW9uczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvLWNvb2stYnV0dG9uXCIgbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb24tY29va1wiIGFyaWEtbGFiZWw9XCJidXR0b24tdG8tYWRkLXJlY2lwZS10by11c2VyLWxpc3QtdG8tY29va1wiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj7wn429PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJpY29uLWNvb2stdGV4dFwiPkFkZCB0byBjb29rPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGUtYnV0dG9uXCIgbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb24tZmF2XCIgYXJpYS1sYWJlbD1cImJ1dHRvbi10by1hZGQtcmVjaXBlLXRvLXVzZXItbGlzdC1vZi1mYXZvcml0ZXNcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JiMxMjc4MjI7PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJpY29uLWZhdi10ZXh0XCI+RmF2b3JpdGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJhY2tcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImV4aXQtcmVjaXBlXCIgYXJpYS1sYWJlbD1cImJ1dHRvbi10by1leGl0LWRldGFpbHMtdmlldy1vZi0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj7ipLg8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvbnMtdGl0bGVcIj4ke3JlY2lwZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiaW5ncmVkaWVudHMgbWlzc2luZy0ke3JlY2lwZS5pZH1cIiBhcmlhLWxhYmVsPVwiaW5ncmVkaWVudHMtdXNlci1tdXN0LXJlc3RvY2stdG8tY29vay0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICA8aDI+SW5ncmVkaWVudHM6PC9oMj5cbiAgICAgICAgICAgICAgJHtpbmdyZWRpZW50c31cbiAgICAgICAgICAgICAgPGgyPlRvdGFsIENvc3Qgb2YgSW5ncmVkaWVudHM6PC9oMj5cbiAgICAgICAgICAgICAgPHA+JHtyZWNpcGUuY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KCl9PC9wPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJpbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDI+SW5zdHJ1Y3Rpb25zOjwvaDI+XG4gICAgICAgICAgICAgICAgJHtpbnN0cnVjdGlvbnN9XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21wYXJlLXJlY2lwZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb21wYXJlLXJlY2lwZVwiIGFyaWEtbGFiZWw9XCJidXR0b24tdG8tY2hlY2stdXNlci1wYW50cnktc3RvY2stb2YtaW5ncmVkaWVudHMtdG8tY29vay0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiPkNoZWNrIFBhbnRyeT88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNvb2tlZC1yZWNpcGVcIj4mIzEwMDAzOzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcblxuICAgICAgdGhpcy5hZGREaXNwbGF5KFwibWFpblwiLCBcImJlZm9yZWVuZFwiLCBjYXJkSHRtbClcbiAgICB9KVxuICB9LFxuXG4gIGNhcGl0YWxpemUod29yZHMpIHtcbiAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfSxcblxuICBsaXN0VGFncyhhbGxUYWdzKSB7XG4gICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBjb25zdCB0YWdIdG1sID0gYDxsaT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tlZC10YWdcIiBpZD1cIiR7dGFnfVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiJHt0YWd9XCIgYXJpYS1sYWJlbD1cImNoZWNrYm94LWZvci0ke3RhZ30tdGFnXCIgYXJpYS1yZXF1aXJlZD1cImZhbHNlXCIgdGFiaW5kZXg9XCIwXCI+JHt0aGlzLmNhcGl0YWxpemUodGFnKX08L2xhYmVsPlxuICAgICAgICA8L2xpPmA7XG4gICAgICB0aGlzLmFkZERpc3BsYXkoXCIudGFnLWxpc3RcIiwgXCJiZWZvcmVlbmRcIiwgdGFnSHRtbCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvd1VzZXJQYW50cnkodXNlciwgaW5ncmVkaWVudHMpIHtcbiAgICBwYW50cnlJdGVtQXJyYXkuZm9yRWFjaChwYW50cnlJdGVtID0+IHtcbiAgICAgIGNvbnN0IHBhbnRyeUl0ZW1BcnJheSA9IE9iamVjdC5rZXlzKHVzZXIucGFudHJ5LnBhbnRyeSlcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWUgPSBpbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4gaW5ncmVkaWVudC5pZCA9PSBwYW50cnlJdGVtKVxuICAgICAgICA/IGluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09IHBhbnRyeUl0ZW0pLm5hbWVcbiAgICAgICAgOiBgSXRlbSBJRDogJHt1c2VyLnBhbnRyeS5wYW50cnlbcGFudHJ5SXRlbV0uaWR9YFxuICAgICAgY29uc3QgcGFudHJ5SXRlbUhUTUwgPSBgJHt1c2VyLnBhbnRyeS5wYW50cnlbcGFudHJ5SXRlbV0uYW1vdW50fSAtICR7aW5ncmVkaWVudE5hbWV9ICA8YnI+YFxuICAgICAgdGhpcy5hZGREaXNwbGF5KCcucGFudHJ5LWluZ3JlZGllbnRzJywgJ2JlZm9yZWVuZCcsIHBhbnRyeUl0ZW1IVE1MKVxuICAgIH0pXG4gIH0sXG5cbiAgc2hvd1JlY2lwZUNvbXBhcmlzb24obWlzc2luZ0xpc3QsIHRhcmdldFJlY2lwZSkge1xuICAgIGNvbnN0IG1pc3NpbmdJdGVtSHRtbCA9IFtcIjxoMj5NaXNzaW5nIEluZ3JlZGllbnRzIGZyb20gWW91ciBQYW50cnk6PC9oMj5cIl1cbiAgICBtaXNzaW5nTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbWlzc2luZ0l0ZW1IdG1sLnB1c2goYDxsaSBhcmlhLWxhYmVsPVwiaW5ncmVkaWVudC10by1yZXN0b2NrXCIgIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAke2l0ZW0uYW1vdW50TmVlZGVkfSAtICR7aXRlbS5taXNzaW5nfVxuICAgICAgICA8L2xpPmApXG4gICAgfSlcbiAgICB0aGlzLmFkZERpc3BsYXkoYC5taXNzaW5nLSR7dGFyZ2V0UmVjaXBlLmlkfWAsICdhZnRlcmJlZ2luJywgbWlzc2luZ0l0ZW1IdG1sLmpvaW4oJycpKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY29va2Jvb2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BvdC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsImNsYXNzIEluZ3JlZGllbnQge1xuICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50LCByZWNpcGVJbmdyZWRpZW50RGF0YSkge1xuICAgIHRoaXMuaWQgPSBpbmdyZWRpZW50LmlkLFxuICAgIHRoaXMubmFtZSA9IGluZ3JlZGllbnQubmFtZSxcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyxcbiAgICB0aGlzLnF1YW50aXR5ID0gcmVjaXBlSW5ncmVkaWVudERhdGEucXVhbnRpdHlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50O1xuIiwiaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tICcuL2RhdGEvaW5ncmVkaWVudC1kYXRhJ1xuLy8gV2lsbCBuZWVkIHRvIGltcG9ydCBmZXRjaGVkIGluZ3JlZGllbnQgZGF0YSBmcm9tIEFQSVxuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9pbmdyZWRpZW50JztcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50RGF0YSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gdGhpcy5pbnN0YW50aWF0ZUluZ3JlZGllbnRzKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy5pc0Zhdm9yaXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNUb0Nvb2sgPSBmYWxzZTtcbiAgfVxuXG4gIGluc3RhbnRpYXRlSW5ncmVkaWVudHMocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChyZWNpcGVJbmdyZWRpZW50ID0+IHtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnRJbmZvID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09PSByZWNpcGVJbmdyZWRpZW50LmlkKTtcbiAgICAgIGlmIChpbmdyZWRpZW50SW5mbykge1xuICAgICAgICByZXR1cm4gbmV3IEluZ3JlZGllbnQoaW5ncmVkaWVudEluZm8sIHJlY2lwZUluZ3JlZGllbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KCkge1xuICAgIGNvbnN0IHRvdGFsQ29zdCA9IHRoaXMuaW5ncmVkaWVudHMucmVkdWNlKChzdW0sIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGxldCBpbmdyZWRpZW50Q29zdFBlclJlY2lwZSA9XG4gICAgICAoaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KTtcbiAgICAgIHN1bSArPSBpbmdyZWRpZW50Q29zdFBlclJlY2lwZTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKHRvdGFsQ29zdCAqIDAuMDEpLnRvRml4ZWQoMikpO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9ucztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2Vhc29uaW5nLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3BvdC5wbmcnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9yZWNpcGUnO1xuaW1wb3J0IHtnZXREYXRhLCBwb3N0RGF0YX0gZnJvbSAnLi9hcGlzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tLXVwZGF0ZXMnO1xuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9pbmdyZWRpZW50JztcblxubGV0IHVzZXJzID0gW107XG5sZXQgcmVjaXBlcyA9IFtdO1xubGV0IGluZ3JlZGllbnRzID0gW107XG5sZXQgdXNlcjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWRQYWdlKTtcblxuZnVuY3Rpb24gYWRkRXZlbnQoYXJlYSwgZXZlbnRUeXBlLCBmdW5jKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJlYSkuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmMpXG59XG5cbmFkZEV2ZW50KFwiaGVhZGVyXCIsIFwiY2xpY2tcIiwgbmF2Q2xpY2tzKVxuYWRkRXZlbnQoXCIubG9naW4tYnRuXCIsIFwiY2xpY2tcIiwgbG9naW4pIFxuYWRkRXZlbnQoXCIjc2VhcmNoXCIsIFwic3VibWl0XCIsIHByZXNzRW50ZXJTZWFyY2gpIFxuYWRkRXZlbnQoXCIucGFudHJ5XCIsIFwiY2xpY2tcIiwgcGFudHJ5Q2xpY2tzKVxuYWRkRXZlbnQoXCIuYWRkLWluZ3JlZGllbnQtZm9ybVwiLCBcInN1Ym1pdFwiLCBhZGRJbmdyZWRpZW50VG9QYW50cnkpXG5hZGRFdmVudChcIi5maWx0ZXItYnRuXCIsIFwiY2xpY2tcIiwgZGlzcGxheVRhZ2dlZFJlY2lwZXMpXG5hZGRFdmVudChcIm1haW5cIiwgXCJjbGlja1wiLCBtYWluQ2xpY2tzKVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgZ2V0RGF0YSgndXNlcnMnLCB1c2VycylcbiAgZ2V0RGF0YSgncmVjaXBlcycsIHJlY2lwZXMpXG4gIGdldERhdGEoJ2luZ3JlZGllbnRzJywgaW5ncmVkaWVudHMpXG59XG5cbmZ1bmN0aW9uIGxvZ2luKCkge1xuICB1cGRhdGVEYXRhVG9DbGFzc0luc3RhbmNlcygpXG4gIGNvbnN0IGxvZ2luSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnB1dCcpO1xuICBjb25zdCB1c2VyTG9nZ2luZ0luID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIubmFtZSA9PT0gbG9naW5JbnB1dC52YWx1ZSlcbiAgdXNlciA9IHVzZXJMb2dnaW5nSW5cbiAgZG9tVXBkYXRlcy50b2dnbGUoWycubG9naW4nLCAnLnBhZ2Utd3JhcHBlciddKVxuICBzaG93SG9tZSgpXG4gIGRpc3BsYXlUYWdzU2lkZUJhcigpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGFUb0NsYXNzSW5zdGFuY2VzKCkge1xuICB1c2VycyA9IHVzZXJzLm1hcCh1c2VyID0+IG5ldyBVc2VyKHVzZXIpKVxuICByZWNpcGVzID0gcmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlLCBpbmdyZWRpZW50cykpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYWdzU2lkZUJhcigpIHtcbiAgY29uc3QgYWxsVGFncyA9IHJlY2lwZXMuZmxhdE1hcChyZWNpcGUgPT4gcmVjaXBlLnRhZ3MpXG4gIGNvbnN0IHVuaXF1ZVRhZ3MgPSBuZXcgU2V0KGFsbFRhZ3MpXG4gIGNvbnN0IHNvcnRlZFVuaXF1ZVRhZ3MgPSBBcnJheS5mcm9tKHVuaXF1ZVRhZ3MpLnNvcnQoKVxuICBkb21VcGRhdGVzLmxpc3RUYWdzKHNvcnRlZFVuaXF1ZVRhZ3MpO1xufVxuZnVuY3Rpb24gbmF2Q2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpXG5cbiAgc3dpdGNoKHRhcmdldEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XG4gICAgY2FzZSAnZmlsdGVyLWJ1dHRvbic6XG4gICAgICBzaG93RmlsdGVyTWVudSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdob21lLWJ1dHRvbic6XG4gICAgICBzaG93SG9tZSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXYtc2VhcmNoLWJ1dHRvbic6XG4gICAgICBzZWFyY2hSZWNpcGVzKClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Zhdi1idXR0b24nOlxuICAgICAgZGlzcGxheUZhdm9yaXRlZFJlY2lwZXMoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGFudHJ5LWJ1dHRvbic6XG4gICAgICBkaXNwbGF5UGFudHJ5KClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvLWNvb2stYnV0dG9uJzpcbiAgICAgIGRpc3BsYXlUb0Nvb2tSZWNpcGVzKClcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dGaWx0ZXJNZW51KCkge1xuICBjb25zdCBmaWx0ZXJCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tZmlsdGVyJylcbiAgZmlsdGVyQmFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlci1kcm9wJylcbiAgZmlsdGVyQmFyLmNsYXNzTGlzdC50b2dnbGUoJ3JlY2lwZS1maWx0ZXJzJylcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHJlY2lwZXMpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaFJlY2lwZXMoKSB7XG4gIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykudmFsdWUudG9Mb3dlckNhc2UoKVxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1c2VyU2VhcmNoKTtcbiAgfSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHNlYXJjaFJlc3VsdHMpXG59XG5cbmZ1bmN0aW9uIHByZXNzRW50ZXJTZWFyY2goZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VhcmNoUmVjaXBlcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmF2b3JpdGVkUmVjaXBlcygpIHtcbiAgY29uc29sZS5sb2codXNlci5mYXZvcml0ZVJlY2lwZXMpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9Db29rUmVjaXBlcygpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHModXNlci5yZWNpcGVzVG9Db29rKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFudHJ5KCkge1xuICBkb21VcGRhdGVzLnNob3dVc2VyUGFudHJ5KHVzZXIsIGluZ3JlZGllbnRzKVxuICBkb21VcGRhdGVzLnRvZ2dsZShbJy5wYW50cnknXSlcbn1cblxuZnVuY3Rpb24gcGFudHJ5Q2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICBzd2l0Y2godGFyZ2V0LmlkKSB7XG4gICAgY2FzZSAnZXhpdC1wYW50cnknOlxuICAgICAgZGlzcGxheVBhbnRyeSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmluZC1yZWNpcGVzLXVzaW5nLXBhbnRyeS1idG5cIjpcbiAgICAgIGZpbmRSZWNpcGVzVXNpbmdQYW50cnkoKVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSW5ncmVkaWVudFRvUGFudHJ5KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgbmFtZUFkZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWluZ3JlZGllbnQtZm9ybVwiKS52YWx1ZVxuICBjb25zdCBxdWFudGl0eUFkZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbmdyZWRpZW50LWZvcm1cIikudmFsdWVcblxuICBjb25zdCBtYXRjaCA9IGluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZSA9PT0gbmFtZUFkZGVkLnRvTG93ZXJDYXNlKClcbiAgfSlcbiAgY29uc3QgbWF0Y2hJZCA9IG1hdGNoID8gbWF0Y2guaWQgOiBEYXRlLm5vdygpXG5cbiAgcG9zdERhdGEodXNlci5pZCwgbWF0Y2hJZCwgcXVhbnRpdHlBZGRlZClcbiAgYWxlcnQoYFlvdSBoYXZlIGFkZGVkICR7cXVhbnRpdHlBZGRlZH0gb2YgJHtuYW1lQWRkZWR9IHRvIHlvdXIgcGFudHJ5IWApXG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNpcGVzVXNpbmdQYW50cnkoKSB7XG4gIGNvbnN0IHJlY2lwZXNVc2VyQ291bGRDb29rID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gIXVzZXIucGFudHJ5LmNvbXBhcmVJbmdyZWRpZW50cyhyZWNpcGUpXG4gIH0pXG4gIGlmIChyZWNpcGVzVXNlckNvdWxkQ29vay5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcyhyZWNpcGVzVXNlckNvdWxkQ29vaylcbiAgICBkb21VcGRhdGVzLnRvZ2dsZShbJy5wYW50cnknXSlcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnU29ycnksIHlvdSBjYW5ub3QgY29vayBhbnkgcmVjaXBlcywgeW91IG5lZWQgdG8gZ28gdG8gdGhlIGdyb2NjZXJ5IHN0b3JlLicpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYWluQ2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICBjb25zdCB0YXJnZXRSZWNpcGUgPSBmaW5kVGFyZ2V0UmVjaXBlKHRhcmdldClcblxuICBzd2l0Y2godGFyZ2V0LmlkKSB7XG4gICAgY2FzZSAnaW1nMSc6XG4gICAgICB0YXJnZXQuY2xvc2VzdCgnLnJlY2lwZS1jYXJkJykuY2xhc3NMaXN0LmFkZCgncmVjaXBlLWNhcmQtYWN0aXZlJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ltZzInOlxuICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZS1jYXJkLWFjdGl2ZScpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdpY29uLWZhdicgfHwgJ2ljb24tZmF2LXRleHQnOlxuICAgICAgYWRkT3JSZW1vdmVGcm9tVXNlckxpc3QodGFyZ2V0UmVjaXBlLCAnaXNGYXZvcml0ZWQnLCAnZmF2b3JpdGVSZWNpcGVzJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ljb24tY29vaycgfHwgJ2ljb24tY29vay10ZXh0JzpcbiAgICAgIGFkZE9yUmVtb3ZlRnJvbVVzZXJMaXN0KHRhcmdldFJlY2lwZSwgJ2lzVG9Db29rJywgJ3JlY2lwZXNUb0Nvb2snKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXhpdC1yZWNpcGUnOlxuICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3JlY2lwZS1jYXJkLWFjdGl2ZScpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb29rZWQtcmVjaXBlJzpcbiAgICAgIGNvb2tUaGlzUmVjaXBlKHRhcmdldFJlY2lwZSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2V4aXQtcGFudHJ5JzpcbiAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICBicmVhaztcbiAgICBjYXNlIGBjb21wYXJlLXJlY2lwZWA6XG4gICAgICBjb21wYXJlUmVjaXBlcyh0YXJnZXRSZWNpcGUpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kVGFyZ2V0UmVjaXBlKHRhcmdldCkge1xuICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldC5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKS5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICByZXR1cm4gcmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT0gdGFyZ2V0SWQpXG59XG5cbmZ1bmN0aW9uIGFkZE9yUmVtb3ZlRnJvbVVzZXJMaXN0KHRhcmdldFJlY2lwZSwgY2hlY2tQcm9wZXJ0eSwgdXNlckxpc3ROYW1lKSB7XG4gIGlmICh0YXJnZXRSZWNpcGVbY2hlY2tQcm9wZXJ0eV0pIHtcbiAgICB0YXJnZXRSZWNpcGVbY2hlY2tQcm9wZXJ0eV0gPSBmYWxzZVxuICAgIHVzZXIucmVtb3ZlUmVjaXBlKHRhcmdldFJlY2lwZSwgdXNlckxpc3ROYW1lKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldFJlY2lwZVtjaGVja1Byb3BlcnR5XSA9IHRydWVcbiAgICB1c2VyLnNhdmVSZWNpcGUodGFyZ2V0UmVjaXBlLCB1c2VyTGlzdE5hbWUpXG4gIH1cbiAgc2hvd0hvbWUoKVxufVxuXG5mdW5jdGlvbiBjb21wYXJlUmVjaXBlcyh0YXJnZXRSZWNpcGUpIHtcbiAgY29uc3QgbWlzc2luZ0xpc3QgPSB1c2VyLnBhbnRyeS5jb21wYXJlSW5ncmVkaWVudHModGFyZ2V0UmVjaXBlKVxuICBpZiAobWlzc2luZ0xpc3QpIHtcbiAgICBkb21VcGRhdGVzLnNob3dSZWNpcGVDb21wYXJpc29uKG1pc3NpbmdMaXN0LCB0YXJnZXRSZWNpcGUpXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1lvdSBjYW4gY29vayB0aGlzIHdpdGggeW91ciBjdXJyZW50IHBhbnRyeSBpbmdyZWRpZW50cyEnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvb2tUaGlzUmVjaXBlKHRhcmdldFJlY2lwZSkge1xuICB1c2VyLnJlbW92ZVJlY2lwZSh0YXJnZXRSZWNpcGUsICdyZWNpcGVzVG9Db29rJylcbiAgdXNlci5wYW50cnkucmVtb3ZlSW5ncmVkaWVudHModGFyZ2V0UmVjaXBlKVxuICBkb21VcGRhdGVzLnNob3dVc2VyUGFudHJ5KHVzZXIsIGluZ3JlZGllbnRzKVxuICBhbGVydCgnR29vZCBjb29raW5nISBSZWNpcGUgd2lsbCBiZSByZW1vdmVkIGZyb20geW91ciByZWNpcGVzIHRvIGNvb2suJylcbiAgc2V0VGltZW91dChzaG93SG9tZSwgMTAwMClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhZ2dlZFJlY2lwZXMoY2hlY2tib3hlc1NlbGVjdG9yKSB7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrZWQtdGFnXCIpO1xuICBjb25zdCBjaGVja2JveFZhbHVlcyA9IEFycmF5LmZyb20oY2hlY2tib3hlcylcbiAgY29uc3Qgc2VsZWN0ZWRCb3hlcyA9IGNoZWNrYm94VmFsdWVzLmZpbHRlcihib3ggPT4gYm94LmNoZWNrZWQpLm1hcCh0YWcgPT4gdGFnLmlkKVxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLnRhZ3Muc29tZSh0YWcgPT4gc2VsZWN0ZWRCb3hlcy5pbmNsdWRlcyh0YWcpKTtcbiAgfSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHNlYXJjaFJlc3VsdHMpXG59XG4iLCJpbXBvcnQgUGFudHJ5IGZyb20gJy4vUGFudHJ5J1xuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBuZXcgUGFudHJ5KHVzZXIucGFudHJ5LCB1c2VyLmlkKTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgc2F2ZVJlY2lwZShyZWNpcGUsIGxpc3QpIHtcbiAgICBpZiAoIXRoaXNbbGlzdF0uaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpc1tsaXN0XS5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUmVjaXBlKHJlY2lwZSwgbGlzdCkge1xuICAgIGNvbnN0IGkgPSB0aGlzW2xpc3RdLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzW2xpc3RdLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGZpbHRlclJlY2lwZXModGFnLCBsaXN0KSB7XG4gICAgcmV0dXJuIHRoaXNbbGlzdF0uZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpKTtcbiAgfVxuICBcbiAgc2VhcmNoRm9yUmVjaXBlKGtleXdvcmQsIGxpc3QpIHtcbiAgICByZXR1cm4gdGhpc1tsaXN0XS5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5uYW1lLmluY2x1ZGVzKGtleXdvcmQpIHx8IHJlY2lwZS5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoa2V5d29yZCkpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9