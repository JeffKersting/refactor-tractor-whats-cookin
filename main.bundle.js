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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/N2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmdyZWRpZW50LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcG90LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFzb25pbmcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmdyZWRpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFt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OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUM1RixZQUFzSTs7QUFFdEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsRUFBRSxzREFBUTtBQUNWLDBCQUEwQixjQUFjLE1BQU0sVUFBVTtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsSUFBSSxvREFBVTtBQUNkLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFlO0FBQ3RDO0FBQ0E7QUFDQSx3QkFBd0IsS0FBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLG9EQUFVO0FBQ1o7Ozs7Ozs7Ozs7Ozs7QUN4T0E7QUFBQTtBQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDcwJTsgfVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjODRDOEE0O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDsgfVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgaGVpZ2h0OiAxNyU7XFxuICBtYXJnaW46IDVweCA1cHggMTBweCAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbmg0IHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuLmxvZ2luIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZGNjYTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICNDNEVCNjc7IH1cXG5cXG4ud2VsY29tZS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogMTEwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxcblxcbi53ZWxjb21lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLnVzZXItaWNvbiB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDhlbTtcXG4gIG1hcmdpbjogMTVweCBhdXRvIDIwcHggYXV0bzsgfVxcblxcbi51c2VyLWlucHV0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MCU7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDAlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiA5JTsgfVxcblxcbi5maWx0ZXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5ob21lLWJ0bi1hcHBsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcblxcbnNwYW4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmhlYWRlci1hcHBsZS1pY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogMzVweDsgfVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAjQzRFQjY3O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICM0NzVkNzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAjc2VhcmNoLWlucHV0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcbiAgI3NlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCB3aGl0ZTsgfVxcbiAgI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogIzVCNzg5NDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7IH1cXG4gICNzZWFyY2gtaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBvdXRzZXQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4OyB9XFxuXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM1Qjc4OTQgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICB3aWR0aDogMTUlOyB9XFxuICAubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjQzRFQjY3O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG4gIC5uYXYtYnRuIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgcGFkZGluZzogMnB4IDBweDsgfVxcblxcbi5zdHJva2UtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI0M0RUI2NzsgfVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4OyB9XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDklOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxcblxcbi53ZWxjb21lLW1zZyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4OyB9XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjQlO1xcbiAgd2lkdGg6IDE1JTtcXG4gIG1hcmdpbi1sZWZ0OiAtMSU7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMTUlO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDQwMHB4LCBhdXRvKTtcXG4gIHotaW5kZXg6IC0xOyB9XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogNzUlO1xcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA4NSU7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSkgcm90YXRlWSgwZGVnKSBzY2FsZVkoMSk7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgZWFzZTsgfVxcbiAgLnJlY2lwZS1jYXJkIC5jYXJkLWZyb250IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSkgcm90YXRlWSgwZGVnKSBzY2FsZVkoMSk7IH1cXG4gIC5yZWNpcGUtY2FyZCAuY2FyZC1iYWNrIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgcm90YXRlWSgxODBkZWcpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrO1xcbiAgICB6LWluZGV4OiAxMDA7IH1cXG5cXG4ub3ZlcmxhcCB7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cXG4ucmVjaXBlLWNhcmQtYWN0aXZlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogNzUlO1xcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA4NSU7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgZWFzZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgLnJlY2lwZS1jYXJkLWFjdGl2ZSAuZmxpcC1jYXJkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG4gIC5yZWNpcGUtY2FyZC1hY3RpdmUgLmNhcmQtYmFjayB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyKSByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlKDUwJSwgMjUlKTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjazsgfVxcbiAgLnJlY2lwZS1jYXJkLWFjdGl2ZSAuY2FyZC1mcm9udCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDIpIHRyYW5zbGF0ZVkoMjUlKTsgfVxcblxcbi5mbGlwLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBlYXNlO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxcblxcbi5jYXJkLWZyb250LFxcbi5jYXJkLWJhY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXFxuLmNhcmQtYmFjayBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNSU7XFxuICBoZWlnaHQ6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KSBwZXJzcGVjdGl2ZSgxcHgpO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGhlaWdodDogMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICMzNTk1Njc7IH1cXG5cXG4uY2FyZC1iYWNrIC5pbmdyZWRpZW50cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwJTtcXG4gIGhlaWdodDogNDUlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBmb250LXNpemU6IC44ZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAuOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjazsgfVxcblxcbi5jYXJkLWJhY2sgLmluc3RydWN0aW9ucyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogODUlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgbWFyZ2luOiAtMjAlIDAgMCAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7IH1cXG5cXG4uY2FyZC1iYWNrICNleGl0LXJlY2lwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KSByb3RhdGUoLTEyMGRlZyk7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzNTk1Njc7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuY2FyZC1iYWNrICNleGl0LXJlY2lwZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM4NEM4QTQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2FyZC1iYWNrIGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDElO1xcbiAgbGVmdDogNSU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjcpOyB9XFxuXFxuLmNhcmQtYmFjayAjY29va2VkLXJlY2lwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDAlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5jYXJkLWJhY2sgI2Nvb2tlZC1yZWNpcGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjODRDOEE0O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgb3BhY2l0eTogNTAlO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgaDMge1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNDNEVCNjc7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi50by1jb29rLWJ1dHRvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctdG9wOiA4JTtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM4NEM4QTQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAudG8tY29vay1idXR0b24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogLTUlO1xcbiAgICBtYXJnaW4tbGVmdDogLTE4JTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgLnRvLWNvb2stYnV0dG9uIC50by1jb29rIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDgwMDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLnRvLWNvb2stYnV0dG9uOmhvdmVyICNpY29uLWZhdiwgLnRvLWNvb2stYnV0dG9uOmhvdmVyICNpY29uLWNvb2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjYTQwMDAwO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlOyB9XFxuICAudG8tY29vay1idXR0b246aG92ZXIgcCB7XFxuICAgIGNvbG9yOiAjYTQwMDAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIG1hcmdpbi10b3A6IC0xMiU7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4uZmF2b3JpdGUtYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmctdG9wOiA4JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjODRDOEE0O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZhdm9yaXRlLWJ1dHRvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNSU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAuZmF2b3JpdGUtYnV0dG9uIC5mYXZvcml0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYwODAwO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZmF2b3JpdGUtYnV0dG9uOmhvdmVyICNpY29uLWZhdiB7XFxuICAgIGJhY2tncm91bmQ6ICNhNDAwMDA7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG4gIC5mYXZvcml0ZS1idXR0b246aG92ZXIgcCB7XFxuICAgIGNvbG9yOiAjYTQwMDAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIG1hcmdpbi10b3A6IC0xMiU7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTsgfVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU5NTY3O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLmZpbHRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDsgfVxcblxcbi5sb2dpbi1idG4ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXFxuLmxvYWQtYW5pbWF0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi10b3A6IDI1JTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDI1cHggc29saWQgI0RBRTRFRTtcXG4gIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCAjMzU5NTY3O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBzcGluIDVzIGxpbmVhciBpbmZpbml0ZTsgfVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDkycHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHotaW5kZXg6IDM7IH1cXG5cXG4uZHJvcC1tZW51IGgyIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyBoNCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogIzM1OTU2NzsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTsgfVxcbiAgLnJlY2lwZS1pbnN0cnVjdGlvbnMgb2wge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlOyB9XFxuXFxuI2V4aXQtcmVjaXBlLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMzU5NTY3O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAtNCUgLTMlIDIlIC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlOyB9XFxuXFxuI2V4aXQtcmVjaXBlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjQzRFQjY3O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7IH1cXG5cXG4jcmVjaXBlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7IH1cXG5cXG4jb3ZlcmxheSB7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNzg5NDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDsgfVxcblxcbi5wYW50cnkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjaztcXG4gIHRvcDogMjUlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2l0aW9uOiAxLjZzIGVhc2U7IH1cXG4gIC5wYW50cnkgI2V4aXQtcGFudHJ5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAlO1xcbiAgICByaWdodDogMiU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgIC5wYW50cnkgI2V4aXQtcGFudHJ5OmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjODRDOEE0O1xcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5wYW50cnkgLnBhbnRyeS1pbmdyZWRpZW50cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICB0b3A6IDE1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgLnBhbnRyeSBoNCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLnBhbnRyeSAuYWRkLWluZ3JlZGllbnQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICAucGFudHJ5IC5hZGQtaW5ncmVkaWVudC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDUlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC5wYW50cnkgLmZpbmQtcmVjaXBlcy11c2luZy1wYW50cnktYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcblxcbi5wYW50cnktaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IDEuNnMgZWFzZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDUwJTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4NHB4KSB7XFxuICAubG9naW4ge1xcbiAgICB3aWR0aDogNDB2dzsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDcycHgpIHtcXG4gIG1haW4ge1xcbiAgICBsZWZ0OiA1JTsgfVxcbiAgaGVhZGVyIGgxIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgaGVhZGVyIC5maWx0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgaGVhZGVyIC5ob21lLWJ0bi1hcHBsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAubG9naW4ge1xcbiAgICBoZWlnaHQ6IDQ1dmg7IH1cXG4gIC5yZWNpcGUtZmlsdGVycyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5maWx0ZXItZHJvcCB7XFxuICAgIHRvcDogOSU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDsgfVxcbiAgICAuZmlsdGVyLWRyb3AgLndyYXAge1xcbiAgICAgIHdpZHRoOiAxMTAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gIC5sb2dpbiB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDQ1dmg7IH1cXG4gIG1haW4ge1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDQwMHB4LCA2MDBweCk7IH1cXG4gIC5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7IH1cXG4gICAgLmNhcmQtcGhvdG8tY29udGFpbmVyIGltZyB7XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAucmVjaXBlLWNhcmQge1xcbiAgICBoZWlnaHQ6IDkwJTsgfVxcbiAgLmZhdm9yaXRlLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDI1JTsgfVxcbiAgLnRvLWNvb2stYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjUlOyB9XFxuICAubmFtZS1pbmdyZWRpZW50LWZvcm0sXFxuICAucXVhbnRpdHktaW5ncmVkaWVudC1mb3JtLFxcbiAgLmFkZC1pbmdyZWRpZW50LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogLjVlbTsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjhweCkge1xcbiAgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDgwdnc7IH0gfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25vcm1hbGl6ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYmFubmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcmVjaXBlLWRpc3BsYXkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2FkaW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3BhbnRyeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZWNpcGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcmVzcG9uc2l2ZW5lc3Muc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBQTtBQUVBOytFQ0ErRTtBREcvRTs7O0VDQ0U7QURJRjtFQUNFLGlCQUFpQjtFQUFFLE1BQUE7RUFDbkIsOEJBQThCO0VBQUUsTUFBQSxFQUFPOztBQUd6QzsrRUNEK0U7QURJL0U7O0VDREU7QURLRjtFQUNFLFNBQVM7RUFDVCx5QkV4QjBCO0VGeUIxQixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULFVBQVU7RUFDViw0QkFBNEIsRUFBQTs7QUFHOUI7O0VDSEU7QURPRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQ0pFO0FEU0Y7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0V0QzBDO0VGdUMxQyxlQUFlO0VBQ2YsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxjRXREdUI7RUZ1RHZCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGNF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QUFBO0VBR2I7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxlQUFlLEVBQUE7RUFHakI7OztJQUdFLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7O0FaMUVIO0VBQ0UsYUFBYSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICAvLyBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAuNSUgMC43JSAwJTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAkYWNjZW50LXNlY29uZGFyeTtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIGhlaWdodDogMTclO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbmg0IHtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtcHJpbWFyeTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibm9ybWFsaXplXFxcIjtcXG5AaW1wb3J0IFxcXCJsb2dpblxcXCI7XFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXG5AaW1wb3J0IFxcXCJiYW5uZXJcXFwiO1xcbkBpbXBvcnQgXFxcInNpZGViYXJcXFwiO1xcbkBpbXBvcnQgXFxcInJlY2lwZS1kaXNwbGF5XFxcIjtcXG5AaW1wb3J0IFxcXCJidXR0b25zXFxcIjtcXG5AaW1wb3J0IFxcXCJsb2FkaW5nXFxcIjtcXG5AaW1wb3J0IFxcXCJwYW50cnlcXFwiO1xcbkBpbXBvcnQgXFxcInJlY2lwZVxcXCI7XFxuQGltcG9ydCBcXFwibW9kYWxcXFwiO1xcbkBpbXBvcnQgXFxcInJlc3BvbnNpdmVuZXNzXFxcIjtcXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLFwiJHByaW1hcnktYmFja2dyb3VuZDogIzVCNzg5NDtcXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQ6ICNiNmRjY2E7XFxuJGFjY2VudC1wcmltYXJ5OiAjQzRFQjY3O1xcbiRhY2NlbnQtc2Vjb25kYXJ5OiM4NEM4QTQ7XFxuJGRhcmstZ3JlZW46ICMzNTk1Njc7XFxuJGdyZXk6ICNEQUU0RUU7XFxuJGJveC1zaGFkb3c6ICM0NzVkNzQ7XFxuJGFwcGxlLXJlZDogI2ZmMDgwMDtcXG4kZGFyay1hcHBsZS1yZWQ6ICNhNDAwMDA7XFxuXFxuJHByaW1hcnktZm9udDogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuJHNlY29uZGFyeS1mb250OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuXFxuQG1peGluIHRyYW5zcGFyZW50VGV4dCgkYmdDb2xvcikge1xcbiAgYmFja2dyb3VuZDogJGJnQ29sb3I7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWl4aW4gbGlnaHRlblRleHQoKSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtaXhpbiBjZW50ZXJIb3Jpem9udGFsbHkoKSB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5AbWl4aW4gY2FyZFVuZmxpcHBlZCgpIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSByb3RhdGVZKDBkZWcpIHNjYWxlWSgxKTtcXG59XFxuXFxuQG1peGluIGRlZmluZVNpemUoJHdpZHRoLCAkaGVpZ2h0KSB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xcbn1cXG5cXG5AbWl4aW4gZGlzcGxheVJlY2lwZSgpIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG5cXG5AbWl4aW4gY2FyZFN0eWxpbmcoKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhY2NlbnQtcHJpbWFyeTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7XFxufVxcblwiLFwiLmxvZ2luIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNXB4ICRhY2NlbnQtcHJpbWFyeTtcXG59XFxuXFxuLndlbGNvbWUtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiAkYWNjZW50LXByaW1hcnk7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogMTEwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNSUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuXFxuLndlbGNvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjY1KTtcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KHdoaXRlKVxcbn1cXG5cXG5cXG5cXG4udXNlci1pY29uIHtcXG4gIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dChibGFjayk7XFxuICBmb250LXNpemU6IDhlbTtcXG4gIG1hcmdpbjogMTVweCBhdXRvIDIwcHggYXV0bztcXG59XFxuXFxuLnVzZXItaW5wdXQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXCIsXCJoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDAlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgaGVpZ2h0OiA5JTtcXG59XFxuXFxuLmZpbHRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9tZS1idG4tYXBwbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtcHJpbWFyeSlcXG59XFxuXFxuaDEge1xcbiAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtcHJpbWFyeSlcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbnNwYW4ge1xcbiAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KHdoaXRlKVxcbn1cXG5cXG4uaGVhZGVyLWFwcGxlLWljb24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgJGFjY2VudC1wcmltYXJ5O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICRib3gtc2hhZG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMS4yJSAwLjUlIDEuMiUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYigyNTUsIDI1NSwgMjU1KSksIGNvbG9yLXN0b3AoMSwgcmdiKDIyNSwyMjUsMjI1KSkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlIDIlIDAlIDAlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxuXFxuICAmOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbiAgfVxcblxcbiAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuICAmOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAkYWNjZW50LXByaW1hcnk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJhY2tncm91bmQgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICB3aWR0aDogMTUlO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAkYWNjZW50LXByaW1hcnk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgcGFkZGluZzogMnB4IDBweDtcXG4gIH1cXG59XFxuXFxuLnN0cm9rZS1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYWNjZW50LXByaW1hcnk7XFxufVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4O1xcbn1cXG5cIixcIi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLCByZ2JhKDAsMCwwLC41KSksdXJsKFxcXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1xcXCIpO1xcbiAgaGVpZ2h0OiAxNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDklO1xcbn1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIsXFxuLndlbGNvbWUtbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciBoMSxcXG4ud2VsY29tZS1tc2cgaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblwiLFwiYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDI0JTtcXG4gIHdpZHRoOiAxNSU7XFxuICBtYXJnaW4tbGVmdDogLTElO1xcbn1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLFwibWFpbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IDE1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg0MDBweCwgYXV0byk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogNzUlO1xcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA4NSU7XFxuICBAaW5jbHVkZSBjYXJkVW5mbGlwcGVkO1xcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjZzIGVhc2U7XFxuXFxuICAuY2FyZC1mcm9udCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIEBpbmNsdWRlIGNhcmRVbmZsaXBwZWQoKVxcbiAgfVxcblxcbiAgLmNhcmQtYmFjayB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpIHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjaztcXG4gICAgei1pbmRleDogMTAwO1xcbiAgfVxcbn1cXG5cXG4ub3ZlcmxhcCB7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5yZWNpcGUtY2FyZC1hY3RpdmUgIHtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogNzUlO1xcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA4NSU7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgZWFzZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxuXFxuICAuZmxpcC1jYXJkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICB9XFxuXFxuICAuY2FyZC1iYWNrIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDIpIHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUoNTAlLCAyNSUpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrO1xcbiAgfVxcblxcbiAgLmNhcmQtZnJvbnQge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyKSB0cmFuc2xhdGVZKDI1JSk7XFxuICB9XFxufVxcblxcbi5mbGlwLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBlYXNlO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuXFxuLmNhcmQtZnJvbnQsXFxuLmNhcmQtYmFjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhY2NlbnQtcHJpbWFyeTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbn1cXG5cXG4uY2FyZC1iYWNrIHtcXG4gIHAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNSU7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLjUpICBwZXJzcGVjdGl2ZSgxcHgpO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIH1cXG5cXG4gIC5pbmdyZWRpZW50cyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGhlaWdodDogNDUlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IC45O1xcbiAgICBAaW5jbHVkZSBjYXJkU3R5bGluZygpXFxuICB9XFxuXFxuICAuaW5zdHJ1Y3Rpb25zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiA4NSU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xcbiAgICBtYXJnaW46IC0yMCUgMCAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIEBpbmNsdWRlIGNhcmRTdHlsaW5nKClcXG5cXG4gIH1cXG5cXG4gICNleGl0LXJlY2lwZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwJTtcXG4gICAgcmlnaHQ6IDUlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNSkgcm90YXRlKC0xMjBkZWcpO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGRhcmstZ3JlZW4pO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICB9XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMSU7XFxuICAgIGxlZnQ6IDUlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNylcXG4gIH1cXG4gICNjb29rZWQtcmVjaXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDAlO1xcbiAgICByaWdodDogNSU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC41KTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRkYXJrLWdyZWVuKTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgfVxcbiAgfVxcblxcbn1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBvcGFjaXR5OiA1MCU7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG9wYWNpdHk6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgaDMge1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICRhY2NlbnQtcHJpbWFyeTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbn1cXG5cXG4udG8tY29vay1idXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nLXRvcDogOCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTglO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcblxcbiAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtc2Vjb25kYXJ5KVxcblxcblxcbiAgLnRvLWNvb2sge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYXBwbGUtcmVkKVxcbiAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgICNpY29uLWZhdiwgI2ljb24tY29vayB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRkYXJrLWFwcGxlLXJlZCk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIGNvbG9yOiAkZGFyay1hcHBsZS1yZWQ7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCBibGFjaztcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgICBtYXJnaW4tdG9wOiAtMTIlO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXFxuLmZhdm9yaXRlLWJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwYWRkaW5nLXRvcDogOCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogLTUlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG5cXG4gICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtc2Vjb25kYXJ5KVxcblxcblxcbiAgICAuZmF2b3JpdGVkIHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFwcGxlLXJlZCk7XFxuICAgIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICAjaWNvbi1mYXYge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkZGFyay1hcHBsZS1yZWQpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBjb2xvcjogJGRhcmstYXBwbGUtcmVkO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmxhY2s7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgICAgbWFyZ2luLXRvcDogLTEyJTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICB9XFxufVxcblxcblxcblxcbi5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogJGRhcmstZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxufVxcblwiLFwiYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmlsdGVyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXNlY29uZGFyeTtcXG59XFxuXFxuLmxvZ2luLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbn1cXG5cIixcIi5sb2FkLWFuaW1hdGlvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tdG9wOiAyNSU7XFxuICBAaW5jbHVkZSBkZWZpbmVTaXplKDIwMHB4LCAyMDBweCk7XFxuICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAyNXB4IHNvbGlkICRncmV5O1xcbiAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkICRkYXJrLWdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBzcGluIDVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyl9XFxufVxcblwiLFwiLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA4MSU7XFxuICBtYXJnaW4tdG9wOiA5MnB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjUwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uZHJvcC1tZW51IGgyIHtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cIixcIi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgJGFjY2VudC1wcmltYXJ5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDE1JTtcXG4gIHdpZHRoOiA3MCU7XFxuICB6LWluZGV4OiAxMDAwO1xcblxcbiAgaDQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgfVxcblxcbiAgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG4gIH1cXG5cXG4gIG9sIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcXG4gIH1cXG59XFxuXFxuI2V4aXQtcmVjaXBlLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAkZGFyay1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XFxufVxcblxcbiNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogJGFjY2VudC1wcmltYXJ5O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XFxufVxcblxcbiNyZWNpcGUtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjaztcXG59XFxuXFxuXFxuXFxuI292ZXJsYXkge1xcbiAgZmlsdGVyOmFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGhlaWdodDoxMDAlO1xcbiAgbGVmdDowO1xcbiAgb3BhY2l0eTowLjU7XFxuICBwb3NpdGlvbjpmaXhlZDtcXG4gIHRvcDowO1xcbiAgd2lkdGg6MTAwJTtcXG4gIHotaW5kZXg6MTAwO1xcbn1cXG5cIixcIi5wYW50cnkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxuICBAaW5jbHVkZSBjYXJkU3R5bGluZygpO1xcbiAgdG9wOiAyNSU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IDEuNnMgZWFzZTtcXG5cXG4gICNleGl0LXBhbnRyeSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwJTtcXG4gICAgcmlnaHQ6IDIlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRkYXJrLWdyZWVuKTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhY2NlbnQtc2Vjb25kYXJ5KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnBhbnRyeS1pbmdyZWRpZW50cyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICB0b3A6IDE1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcbiAgICBAaW5jbHVkZSBjYXJkU3R5bGluZygpXFxuICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpXFxuICB9XFxuXFxuICBoNCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4gIC5hZGQtaW5ncmVkaWVudC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKVxcbiAgfVxcblxcbiAgLmFkZC1pbmdyZWRpZW50LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNSU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpXFxuICB9XFxuXFxuICAuZmluZC1yZWNpcGVzLXVzaW5nLXBhbnRyeS1idG4gIHtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxuICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpXFxuICB9XFxufVxcblxcbi5wYW50cnktaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IDEuNnMgZWFzZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDUwJTtcXG59XFxuXCIsXCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODRweCkge1xcbiAgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3MnB4KSB7XFxuXFxuICBtYWluIHtcXG4gICAgbGVmdDogNSU7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBoMSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuZmlsdGVyIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAuaG9tZS1idG4tYXBwbGUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuXFxuICAubG9naW4ge1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxuICB9XFxuXFxuICAucmVjaXBlLWZpbHRlcnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmZpbHRlci1kcm9wIHtcXG4gICAgdG9wOiA5JTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcblxcbiAgICAud3JhcCB7XFxuICAgICAgd2lkdGg6IDExMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIEBpbmNsdWRlIGNhcmRTdHlsaW5nO1xcbiAgICB9XFxuXFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gIC5sb2dpbiB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxuICB9XFxuICBtYWluIHtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg0MDBweCwgNjAwcHgpO1xcbiAgfVxcblxcbiAgLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDEwMCVcXG4gICAgfVxcbiAgfVxcbiAgLnJlY2lwZS1jYXJkIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICB9XFxuXFxuICAuZmF2b3JpdGUtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjUlO1xcbiAgfVxcblxcbiAgLnRvLWNvb2stYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjUlO1xcbiAgfVxcblxcbiAgLm5hbWUtaW5ncmVkaWVudC1mb3JtLFxcbiAgLnF1YW50aXR5LWluZ3JlZGllbnQtZm9ybSxcXG4gIC5hZGQtaW5ncmVkaWVudC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IC41ZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI4cHgpIHtcXG4gIC5sb2dpbiB7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgUGFudHJ5IHtcbiAgY29uc3RydWN0b3IocGFudHJ5LCB1c2VySUQpIHtcbiAgICB0aGlzLnBhbnRyeSA9IHRoaXMuY29tcGlsZVNhbWVJbmdyZWRpZW50cyhwYW50cnkpO1xuICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICB9IFxuXG4gIGNvbXBpbGVTYW1lSW5ncmVkaWVudHMocGFudHJ5KSB7XG4gICAgY29uc3QgdW5pcXVlUGFudHJ5SXRlbXMgPSBwYW50cnkucmVkdWNlKChhY2MsIHBhbnRyeUl0ZW0pID0+IHtcbiAgICAgIGlmIChhY2NbcGFudHJ5SXRlbS5pbmdyZWRpZW50XSkge1xuICAgICAgICBhY2NbcGFudHJ5SXRlbS5pbmdyZWRpZW50XS5hbW91bnQgKz0gcGFyc2VJbnQocGFudHJ5SXRlbS5hbW91bnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjW3BhbnRyeUl0ZW0uaW5ncmVkaWVudF0gPVxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHBhbnRyeUl0ZW0uaW5ncmVkaWVudCxcbiAgICAgICAgICBhbW91bnQ6IHBhcnNlSW50KHBhbnRyeUl0ZW0uYW1vdW50KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gdW5pcXVlUGFudHJ5SXRlbXNcbiAgfVxuXG4gIGNvbXBhcmVJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZyA9IFtdXG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBpZiAoIXRoaXMucGFudHJ5W2luZ3JlZGllbnQuaWRdKSB7XG4gICAgICAgIG1pc3NpbmcucHVzaCh7XG4gICAgICAgICAgJ21pc3NpbmcnOiBpbmdyZWRpZW50Lm5hbWUsIFxuICAgICAgICAgICdhbW91bnROZWVkZWQnOiBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiBcbiAgICAgICh0aGlzLnBhbnRyeVtpbmdyZWRpZW50LmlkXS5hbW91bnQgPCBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICBtaXNzaW5nLnB1c2goe1xuICAgICAgICAgICdtaXNzaW5nJzogaW5ncmVkaWVudC5uYW1lLCBcbiAgICAgICAgICAnYW1vdW50TmVlZGVkJzogXG4gICAgICAgICAgKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC0gdGhpcy5wYW50cnlbaW5ncmVkaWVudC5pZF0uYW1vdW50KSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBtaXNzaW5nICBcbiAgfVxuXG4gIHJlbW92ZUluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIGxldCBhcGlVcGRhdGUgPSBbXTtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnBhbnRyeVtpbmdyZWRpZW50LmlkXSkge1xuICAgICAgICB0aGlzLnBhbnRyeVtpbmdyZWRpZW50LmlkXS5hbW91bnQgLT0gaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQ7XG4gICAgICAgIGFwaVVwZGF0ZS5wdXNoKHtcbiAgICAgICAgICB1c2VySUQ6IHRoaXMudXNlcklELCBcbiAgICAgICAgICBpbmdyZWRpZW50SUQ6IGluZ3JlZGllbnQuaWQsIFxuICAgICAgICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IC1pbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBhcGlVcGRhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW50cnk7ICIsIi8vIHVzZSBnZXQgdG8gZ3JhYiB3aGF0ZXZlciBkYXRhVHlwZSAodXNlcnMvaW5ncmVkaWVudHMvcmVjaXBlcylcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKGRhdGFUeXBlLCBsb2NhbEFycmF5KSB7XG4gIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxLyR7ZGF0YVR5cGV9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YUFycmF5ID0+IHtcbiAgICAgIGRhdGFBcnJheS5mb3JFYWNoKGRhdGFPYmplY3QgPT4ge1xuICAgICAgICBsb2NhbEFycmF5LnB1c2goZGF0YU9iamVjdClcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoYFNvcnJ5LCB0aGVyZSBpcyBhbiBlcnJvcjogJHtlcnJvcn1gKSlcbn1cblxuLy8gdXNlIHBvc3QgdG8gbW9kaWZ5IGluZ3JlZGllbnRzIFxuZXhwb3J0IGZ1bmN0aW9uIHBvc3REYXRhKHVzZXJJZCwgaW5ncmVkaWVudElkLCBhbW91bnQpIHtcbiAgY29uc3QgYW1vdW50TnVtID0gcGFyc2VJbnQoYW1vdW50KVxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxuICAgICAgdXNlcklEOiB1c2VySWQsIFxuICAgICAgaW5ncmVkaWVudElEOiBpbmdyZWRpZW50SWQsIFxuICAgICAgaW5ncmVkaWVudE1vZGlmaWNhdGlvbjogYW1vdW50TnVtXG4gICAgfSlcbiAgfVxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2VycycsIHNldHRpbmdzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoYFNvcnJ5LCB0aGVyZSBpcyBhbiBlcnJvcjogJHtlcnJvcn1gKSlcbn0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwibGV0IGluZ3JlZGllbnRzRGF0YSA9IFtcbiAge1xuICAgIFwiaWRcIjogMjAwODEsXG4gICAgXCJuYW1lXCI6IFwid2hlYXQgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODM3MixcbiAgICBcIm5hbWVcIjogXCJiaWNhcmJvbmF0ZSBvZiBzb2RhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyMyxcbiAgICBcIm5hbWVcIjogXCJlZ2dzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NzJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzMzUsXG4gICAgXCJuYW1lXCI6IFwic3Vjcm9zZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTAyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MjA2LFxuICAgIFwibmFtZVwiOiBcImluc3RhbnQgdmFuaWxsYSBwdWRkaW5nXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzMzQsXG4gICAgXCJuYW1lXCI6IFwiYnJvd24gc3VnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ3LFxuICAgIFwibmFtZVwiOiBcInNhbHRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI4MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDQ3LFxuICAgIFwibmFtZVwiOiBcImZpbmUgc2VhIHNhbHRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICBcIm5hbWVcIjogXCJzZW1pIHN3ZWV0IGNoaXBzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0NSxcbiAgICBcIm5hbWVcIjogXCJ1bnNhbHRlZCBidXR0ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDUwLFxuICAgIFwibmFtZVwiOiBcInZhbmlsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDA5MDE2LFxuICAgIFwibmFtZVwiOiBcImFwcGxlIGNpZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAwMyxcbiAgICBcIm5hbWVcIjogXCJhcHBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDI3LFxuICAgIFwibmFtZVwiOiBcImNvcm4gc3RhcmNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICBcIm5hbWVcIjogXCJkaWpvbiBzdHlsZSBtdXN0YXJkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyMTUsXG4gICAgXCJuYW1lXCI6IFwid2hvbGUgZ2FybGljIGNsb3ZlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjA0NixcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBncmFpbiBkaWpvbiBtdXN0YXJkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTk5MTEsXG4gICAgXCJuYW1lXCI6IFwibWFwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjExMixcbiAgICBcIm5hbWVcIjogXCJtaXNvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTAwNjIsXG4gICAgXCJuYW1lXCI6IFwicG9yayBjaG9wXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICBcIm5hbWVcIjogXCJzJnBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjEyNCxcbiAgICBcIm5hbWVcIjogXCJzb3kgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgIFwibmFtZVwiOiBcInNyaXJhY2hhIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICBcIm5hbWVcIjogXCJibGFjayBwZXBwZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxLFxuICAgIFwibmFtZVwiOiBcImJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQ1ODIsXG4gICAgXCJuYW1lXCI6IFwib2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAzMSxcbiAgICBcIm5hbWVcIjogXCJyZWQgcGVwcGVyIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTgzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDUxMDAsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiB3aW5nXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwOSxcbiAgICBcIm5hbWVcIjogXCJyZWQgY2hpbGkgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICBcIm5hbWVcIjogXCJnYXJsaWMgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjE2OCxcbiAgICBcIm5hbWVcIjogXCJ0YWJhc2NvIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE3NixcbiAgICBcIm5hbWVcIjogXCJtYW5nb2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyNixcbiAgICBcIm5hbWVcIjogXCJvbmlvbiBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDQyMDQ3LFxuICAgIFwibmFtZVwiOiBcInNlYXNvbmVkIHNhbHRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODM3MSxcbiAgICBcIm5hbWVcIjogXCJiYWtpbmcgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTA0MCxcbiAgICBcIm5hbWVcIjogXCJyaXBlIGJhbmFuYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzMxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDExLFxuICAgIFwibmFtZVwiOiBcImJ1Y2sgd2hlYXQgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjMwLFxuICAgIFwibmFtZVwiOiBcImJ1dHRlcm1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc3M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTI5NixcbiAgICBcIm5hbWVcIjogXCJydW5ueSBob25leVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MDk4LFxuICAgIFwibmFtZVwiOiBcInBlYW51dCBidXR0ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ4LFxuICAgIFwibmFtZVwiOiBcImFwcGxlIGNpZGVyIHZpbmVnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDA5MCxcbiAgICBcIm5hbWVcIjogXCJicm93biByaWNlIGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM3ODQsXG4gICAgXCJuYW1lXCI6IFwiYnJvd24gcmljZSBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTI2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjQsXG4gICAgXCJuYW1lXCI6IFwiZWdnIGFsYnVtZW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYyNSxcbiAgICBcIm5hbWVcIjogXCJldmFwb3JhdGVkIGNhbmUganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDExOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjIyMCxcbiAgICBcIm5hbWVcIjogXCJmbGF4IG1lYWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExODM3NSxcbiAgICBcIm5hbWVcIjogXCJpbnN0YW50IHllYXN0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzMDQsXG4gICAgXCJuYW1lXCI6IFwidW5zdWxmdXJlZCBtb2xhc3Nlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDEzLFxuICAgIFwibmFtZVwiOiBcIlBvdGF0byBTdGFyY2ggRmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg5NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzY5NixcbiAgICBcIm5hbWVcIjogXCJ0YXBpb2NhIHN0YXJjaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNzYwLFxuICAgIFwibmFtZVwiOiBcIldob2xlIEdyYWluIFRlZmYgRmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDQxMixcbiAgICBcIm5hbWVcIjogXCJpY2Ugd2F0ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYyNixcbiAgICBcIm5hbWVcIjogXCJ4YW50aGFuIGd1bVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzUwLFxuICAgIFwibmFtZVwiOiBcImNvcm4gc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDk5LFxuICAgIFwibmFtZVwiOiBcImZydWl0IGNvY2t0YWlsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIwNjEsXG4gICAgXCJuYW1lXCI6IFwid2hvbGUgYWxtb25kc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjEwNCxcbiAgICBcIm5hbWVcIjogXCJjb2NvbnV0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxMTUsXG4gICAgXCJuYW1lXCI6IFwiY29jb251dCBjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQwNDcsXG4gICAgXCJuYW1lXCI6IFwiY29jb251dCBvaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxOTA3MSxcbiAgICBcIm5hbWVcIjogXCJkYXJrIGNob2NvbGF0ZSBtb3JzZWxzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODIxMixcbiAgICBcIm5hbWVcIjogXCJncmFub2xhIGNlcmVhbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzgxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgxMjEsXG4gICAgXCJuYW1lXCI6IFwib2F0bWVhbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTQyLFxuICAgIFwibmFtZVwiOiBcInBlY2FuXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM3NDAsXG4gICAgXCJuYW1lXCI6IFwiYmxhbmNoZWQgYWxtb25kIGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNSxcbiAgICBcIm5hbWVcIjogXCJlZ2cgeW9sa3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjAyMyxcbiAgICBcIm5hbWVcIjogXCJzZXNhbWUgc2VlZHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDE1MDYyLFxuICAgIFwibmFtZVwiOiBcImNoaWNrZW4gdGVuZGVyc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExMTA5LFxuICAgIFwibmFtZVwiOiBcInNsYXcgbWl4XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTYwOTgsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW15IHBlYW51dCBidXR0ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDY0LFxuICAgIFwibmFtZVwiOiBcIm1pbnRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDIxLFxuICAgIFwibmFtZVwiOiBcInBvd2RlcmVkIGdpbmdlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzgzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNjAsXG4gICAgXCJuYW1lXCI6IFwianVpY2Ugb2YgbGltZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDc3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkyNjYsXG4gICAgXCJuYW1lXCI6IFwicGluZWFwcGxlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExMzUsXG4gICAgXCJuYW1lXCI6IFwiY2F1bGlmbG93ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTcyLFxuICAgIFwibmFtZVwiOiBcImNoaWNrZW4gc3RvY2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ1NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYzMixcbiAgICBcIm5hbWVcIjogXCJnaGVlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxMjAsXG4gICAgXCJuYW1lXCI6IFwiaGF6ZWxudXRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzY5MCxcbiAgICBcIm5hbWVcIjogXCJudXRyaXRpb25hbCB5ZWFzdCBmbGFrZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI4MixcbiAgICBcIm5hbWVcIjogXCJvbmlvbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQzOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMDEyMyxcbiAgICBcIm5hbWVcIjogXCJwcm9zY3VpdHRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwOTYsXG4gICAgXCJuYW1lXCI6IFwicmFwaW5pXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjE1MCxcbiAgICBcIm5hbWVcIjogXCJiYXIgYiBxdWUgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTk0LFxuICAgIFwibmFtZVwiOiBcImNoaWNrZW4gYnJvdGhcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYyNyxcbiAgICBcIm5hbWVcIjogXCJsaXF1aWQgc21va2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQxMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDI4LFxuICAgIFwibmFtZVwiOiBcInBhcHJpa2FcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDA3MixcbiAgICBcIm5hbWVcIjogXCJwb3JrIHNob3VsZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjk3MSxcbiAgICBcIm5hbWVcIjogXCJ3b3JjZXN0ZXJzaGlyZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MDcsXG4gICAgXCJuYW1lXCI6IFwiYWxtb25kbWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzg3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4OTQyLFxuICAgIFwibmFtZVwiOiBcImdyYWhhbSBjcmFja2VyIGNydXN0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjAxMCxcbiAgICBcIm5hbWVcIjogXCJncm91bmQgY2lubmFtb25cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDI1LFxuICAgIFwibmFtZVwiOiBcIm51dG1lZyBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ4MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MzI3NCxcbiAgICBcIm5hbWVcIjogXCJsb3cgZmF0IGNyZWFtIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTA0OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MTIwLFxuICAgIFwibmFtZVwiOiBcIndob2xlIGdyYWluIHJvbGxlZCBvYXRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQyNCxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgcHVtcGtpblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwMTYsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGUganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcxMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODA0NyxcbiAgICBcIm5hbWVcIjogXCJyYWlzaW4gYnJlYWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDg5MDAzLFxuICAgIFwibmFtZVwiOiBcImdyYW5ueXNtaXRoIGFwcGxlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA3NyxcbiAgICBcIm5hbWVcIjogXCJmdWxsLWZhdCBtaWxrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOTcsXG4gICAgXCJuYW1lXCI6IFwiZmxhdCBsZWFmIHBhcnNsZXkgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDMwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzIwMDksXG4gICAgXCJuYW1lXCI6IFwiZHJpZWQgcmVkIGNoaWxpXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDE1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE1MTUyLFxuICAgIFwibmFtZVwiOiBcImp1bWJvIHNocmltcFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjk0LFxuICAgIFwibmFtZVwiOiBcInZpZGFsaWEgb25pb25cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTAwNyxcbiAgICBcIm5hbWVcIjogXCJhcnRpY2hva2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE1MCxcbiAgICBcIm5hbWVcIjogXCJsZW1vblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzY2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNTYsXG4gICAgXCJuYW1lXCI6IFwibGVtb24gcGVlbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjMwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MDY5LFxuICAgIFwibmFtZVwiOiBcImdsdXRlbi1mcmVlIHdoaXRlIHNhbmR3aWNoIGJyZWFkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzMyxcbiAgICBcIm5hbWVcIjogXCJwYXJtZXNhbiBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDI3LFxuICAgIFwibmFtZVwiOiBcIm9yZWdhbm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDM0MDUzLFxuICAgIFwibmFtZVwiOiBcImV4dHJhIHZpcmdpbiBvbGl2ZSBvaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDA0LFxuICAgIFwibmFtZVwiOiBcImJheSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMzNixcbiAgICBcIm5hbWVcIjogXCJwb3dkZXJlZCBzdWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTQzLFxuICAgIFwibmFtZVwiOiBcImNlbGVyeVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjksXG4gICAgXCJuYW1lXCI6IFwiaGFyZGNvb2tlZCBlZ2dzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDY0MSxcbiAgICBcIm5hbWVcIjogXCJyZWR1Y2VkIGZhdCBtYXlvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2OTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTI1NixcbiAgICBcIm5hbWVcIjogXCJza2ltIGdyZWVrIHlvZ3VydFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjYzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExOTQ0LFxuICAgIFwibmFtZVwiOiBcImhvdGRvZyByZWxpc2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTI4MixcbiAgICBcIm5hbWVcIjogXCJyZWQgb25pb25cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTM1MyxcbiAgICBcIm5hbWVcIjogXCJpZGFobyBwb3RhdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIxMTgyMSxcbiAgICBcIm5hbWVcIjogXCJiZWxsIHBlcHBlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMDQ4LFxuICAgIFwibmFtZVwiOiBcImJyb3duIG1pbnV0ZSByaWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2NTEsXG4gICAgXCJuYW1lXCI6IFwiaXRhbGlhbiBjaGVlc2UgYmxlbmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA3OTI3LFxuICAgIFwibmFtZVwiOiBcInN3ZWV0IGl0YWxpYW4gdHVya2V5IHNhdXNhZ2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTU0OSxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgdG9tYXRvIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjAxMjksXG4gICAgXCJuYW1lXCI6IFwiYnJlYWQgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDExNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDUzLFxuICAgIFwibmFtZVwiOiBcImNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDA1MyxcbiAgICBcIm5hbWVcIjogXCJwdXJlIG9saXZlIG9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5OTEyLFxuICAgIFwibmFtZVwiOiBcImFnYXZlIHN5cnVwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAwODAsXG4gICAgXCJuYW1lXCI6IFwicGFzdHJ5IGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTkzMzQsXG4gICAgXCJuYW1lXCI6IFwiZGFyayBicm93biBzdWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTAxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzODE0LFxuICAgIFwibmFtZVwiOiBcImxpZ2h0bHkgc3dlZXRlbmVkIHdoaXBwZWQgY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjA2LFxuICAgIFwibmFtZVwiOiBcImN1Y3VtYmVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMzUsXG4gICAgXCJuYW1lXCI6IFwicXVpbm9hXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE1MjksXG4gICAgXCJuYW1lXCI6IFwiaGVpcmxvb20gdG9tYXRvZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMyMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDI0MixcbiAgICBcIm5hbWVcIjogXCJjcmFuYmVycnkganVpY2UgY29ja3RhaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDEzMCxcbiAgICBcIm5hbWVcIjogXCJjcmVhbSBzb2RhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkxNzcsXG4gICAgXCJuYW1lXCI6IFwiZ2VsYXRpbmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2NDUsXG4gICAgXCJuYW1lXCI6IFwiaGFsbG93ZWVuIHNwcmlua2xlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjkzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MDUxLFxuICAgIFwibmFtZVwiOiBcImdyZXkgZ29vc2Ugdm9ka2FcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDU0LFxuICAgIFwibmFtZVwiOiBcIndoaXBwZWQgY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzgyOCxcbiAgICBcIm5hbWVcIjogXCJtYXJpbmF0ZWQgYXJ0aWNob2tlIGhlYXJ0c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjY2LFxuICAgIFwibmFtZVwiOiBcImNyaW1pbmkgbXVzaHJvb21zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxNyxcbiAgICBcIm5hbWVcIjogXCJjcmVhbSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDE5LFxuICAgIFwibmFtZVwiOiBcImZldGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMjAyNyxcbiAgICBcIm5hbWVcIjogXCJtaXhlZCBpdGFsaWFuIGhlcmJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA4MjA0NyxcbiAgICBcIm5hbWVcIjogXCJrb3NoZXIgc2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTcyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExNDU3LFxuICAgIFwibmFtZVwiOiBcInNwaW5hY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ0LFxuICAgIFwibmFtZVwiOiBcImJhc2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzAzNixcbiAgICBcIm5hbWVcIjogXCJpdGFsaWFuIHNhdXNhZ2UgbGlua3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTE1NDksXG4gICAgXCJuYW1lXCI6IFwibWFyaW5hcmEgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE3MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDM4LFxuICAgIFwibmFtZVwiOiBcInBlY29yaW5vIHJvbWFubyBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMzA0LFxuICAgIFwibmFtZVwiOiBcInBlYXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTY3NyxcbiAgICBcIm5hbWVcIjogXCJzaGFsbG90c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjk2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDIwNDIwLFxuICAgIFwibmFtZVwiOiBcInBhc3RhIHNoZWxsc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODYyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEwMjYsXG4gICAgXCJuYW1lXCI6IFwic2hyZWRkZWQgbW96emFyZWxsYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTg0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjMwLFxuICAgIFwibmFtZVwiOiBcInNraW0gbWlsayByaWNvdHRhIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MTA2LFxuICAgIFwibmFtZVwiOiBcIndoaXRlIHdpbmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY3NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ2MyxcbiAgICBcIm5hbWVcIjogXCJmcm96ZW4gc3BpbmFjaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODMwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjUsXG4gICAgXCJuYW1lXCI6IFwicGVwcGVyamFja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE0NjIzLFxuICAgIFwibmFtZVwiOiBcImJsYWNrYmVycnkganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzAyLFxuICAgIFwibmFtZVwiOiBcInJhc3BiZXJyeVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjQ3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNTQsXG4gICAgXCJuYW1lXCI6IFwicGluZWFwcGxlIHdpdGgganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDcwLFxuICAgIFwibmFtZVwiOiBcInN3ZWV0IGNoZXJyaWVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxODRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQxODEsXG4gICAgXCJuYW1lXCI6IFwiY2hvY29sYXRlIHN5cnVwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTg2MTcsXG4gICAgXCJuYW1lXCI6IFwiZ3JhaGFtIGNyYWNrZXIgY3J1bWJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxMzUsXG4gICAgXCJuYW1lXCI6IFwibnV0c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwMzcsXG4gICAgXCJuYW1lXCI6IFwiaGFhcyBhdm9jYWRvc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MDU3LFxuICAgIFwibmFtZVwiOiBcImdhcmJhbnpvc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0NSxcbiAgICBcIm5hbWVcIjogXCJkaWxsd2VlZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTYyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyNTYsXG4gICAgXCJuYW1lXCI6IFwiZ3JlZWsgeW9ndXJ0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE1MixcbiAgICBcIm5hbWVcIjogXCJsZW1vbiBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjkxLFxuICAgIFwibmFtZVwiOiBcInNwcmluZyBvbmlvbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkyMzYsXG4gICAgXCJuYW1lXCI6IFwicGVhY2hlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTA5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MDk1LFxuICAgIFwibmFtZVwiOiBcImljZWNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA4NjIsXG4gICAgXCJuYW1lXCI6IFwiY29va2VkIGJhY29uIHN0cmlwc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDUxMTQsXG4gICAgXCJuYW1lXCI6IFwicm9hc3RlZCBjaGlja2VuXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEzMzMsXG4gICAgXCJuYW1lXCI6IFwiZ3JlZW4gcGVwcGVyc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjYsXG4gICAgXCJuYW1lXCI6IFwiZnJlc2ggbW96emFyZWxsYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjkwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjExNTI5LFxuICAgIFwibmFtZVwiOiBcIml0YWxpYW4gdG9tYXRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTAwOSxcbiAgICBcIm5hbWVcIjogXCJ3aGl0ZSBjaGVkZGFyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDlcbiAgfSxcbiAge1xuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk4OTk4LFxuICAgIFwibmFtZVwiOiBcImJhbHNhbWljIGdsYXplXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODAzMCxcbiAgICBcIm5hbWVcIjogXCJmcnVpdCBsb29wc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTkxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MTE2LFxuICAgIFwibmFtZVwiOiBcIm1hcnNobWFsbG93XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYxNTgsXG4gICAgXCJuYW1lXCI6IFwiaHVtbXVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0NixcbiAgICBcIm5hbWVcIjogXCJwcmVwYXJlZCB5ZWxsb3cgbXVzdGFyZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTQsXG4gICAgXCJuYW1lXCI6IFwiZXZhcG9yYXRlZCBtaWxrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjE0LFxuICAgIFwibmFtZVwiOiBcIm9yYW5nZSBqdWljZSBjb25jZW50cmF0ZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzc5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkyMTYsXG4gICAgXCJuYW1lXCI6IFwib3JhbmdlIHBlZWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMyxcbiAgICBcIm5hbWVcIjogXCJiYWNvbiBzbGljZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTA1MixcbiAgICBcIm5hbWVcIjogXCJzdHJpbmcgYmVhbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUwMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTk1OSxcbiAgICBcIm5hbWVcIjogXCJiYWJ5IGFydWd1bGEgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwNCxcbiAgICBcIm5hbWVcIjogXCJibHVlIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQ2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkyNTIsXG4gICAgXCJuYW1lXCI6IFwicGVhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQzNDA4LFxuICAgIFwibmFtZVwiOiBcInBlYXIganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ5LFxuICAgIFwibmFtZVwiOiBcImZyZXNoIHRoeW1lIGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjgxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTU1LFxuICAgIFwibmFtZVwiOiBcIndhbG51dCBoYWx2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg5NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTY5MyxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgdG9tYXRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNzFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExMjQsXG4gICAgXCJuYW1lXCI6IFwiY2Fycm90c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTM2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMTIsXG4gICAgXCJuYW1lXCI6IFwiY29yaWFuZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDE0LFxuICAgIFwibmFtZVwiOiBcImNvbWlub1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTQ3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExOTEzLFxuICAgIFwibmFtZVwiOiBcImZyb3plbiBjb3JuXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0NzcsXG4gICAgXCJuYW1lXCI6IFwienVjY2hpbmkgc3F1YXNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMjA0NDUsXG4gICAgXCJuYW1lXCI6IFwic3RlYW1lZCByaWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDQwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDMsXG4gICAgXCJuYW1lXCI6IFwiZ3JvdW5kIGJhc2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwMTgsXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIGJsYWNrIGJlYW5zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTkyMjMsXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIGNoaXBvdGxlIGNoaWxpZXMgaW4gYWRvYm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTE2NSxcbiAgICBcIm5hbWVcIjogXCJjaWxhbnRyb1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjE4MzY0LFxuICAgIFwibmFtZVwiOiBcImZsb3VyIHRvcnRpbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA2MTEyODIsXG4gICAgXCJuYW1lXCI6IFwid2hpdGUgb25pb25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0NTcsXG4gICAgXCJuYW1lXCI6IFwiYmFieSBzcGluYWNoIGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjY4LFxuICAgIFwibmFtZVwiOiBcImRyaWVkIHNoaWl0YWtlIG11c2hyb29tXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MDZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAwMDUsXG4gICAgXCJuYW1lXCI6IFwiZmFycm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDUxMTI4MixcbiAgICBcIm5hbWVcIjogXCJ5ZWxsb3cgb25pb25cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDY5LFxuICAgIFwibmFtZVwiOiBcImJhbHNhbWljIHZpbmVnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDExOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI1MCxcbiAgICBcIm5hbWVcIjogXCJib3N0b24gYmliYiBsZXR0dWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTE1NixcbiAgICBcIm5hbWVcIjogXCJmcmVzaCBjaGl2ZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzI4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQwMjUsXG4gICAgXCJuYW1lXCI6IFwibWF5b25uYWlzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjMwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTE5LFxuICAgIFwibmFtZVwiOiBcIm5hcGEgY2FiYmFnZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTExMixcbiAgICBcIm5hbWVcIjogXCJyZWQgY2FiYmFnZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk4OTYyLFxuICAgIFwibmFtZVwiOiBcInN3ZWV0IGNoaWxpIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDAxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDIsXG4gICAgXCJuYW1lXCI6IFwiZHJpZWQgdGh5bWVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDIwLFxuICAgIFwibmFtZVwiOiBcImdyYW51bGF0ZWQgZ2FybGljXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjM1NzIsXG4gICAgXCJuYW1lXCI6IFwiZ3JvdW5kIGNodWNrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTEyNTAsXG4gICAgXCJuYW1lXCI6IFwiYnV0dGVyaGVhZCBsZXR0dWNlIGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDUwNjQsXG4gICAgXCJuYW1lXCI6IFwiYmFrZWQgY2hpY2tlbiBicmVhc3RcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAxNSxcbiAgICBcIm5hbWVcIjogXCJjdXJyeSBzZWFzb25pbmdcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMxMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDA5MTU5LFxuICAgIFwibmFtZVwiOiBcImxpbWUgcGVlbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk4OTkxLFxuICAgIFwibmFtZVwiOiBcIm1pbnQgY2h1dG5leVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzMTYsXG4gICAgXCJuYW1lXCI6IFwic3RyYXdiZXJyeVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjkyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDkwLFxuICAgIFwibmFtZVwiOiBcImJyb2Njb2xpIGNyb3duc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjU2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExODIxLFxuICAgIFwibmFtZVwiOiBcInN3ZWV0IG9yYW5nZSBwZXBwZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIxOCxcbiAgICBcIm5hbWVcIjogXCJwb3JrIHRlbmRlcmxvaW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTE1NyxcbiAgICBcIm5hbWVcIjogXCJtaW5pIG0mbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk4ODcxLFxuICAgIFwibmFtZVwiOiBcImhhd2FpaWFuIHN3ZWV0IHJvbGxzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1NTA2MixcbiAgICBcIm5hbWVcIjogXCJib25lbGVzcyBza2lubGVzcyBjaGlja2VuIGJyZWFzdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg5N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxOTE1MSxcbiAgICBcIm5hbWVcIjogXCJyZWVzZSBwaWVjZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcyMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDQxMDA5LFxuICAgIFwibmFtZVwiOiBcImNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODUwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE4NDEzLFxuICAgIFwibmFtZVwiOiBcImZsYXRicmVhZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzI2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTExNTI5LFxuICAgIFwibmFtZVwiOiBcImdyYXBlIHRvbWF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwMTksXG4gICAgXCJuYW1lXCI6IFwidW5zd2VldGVuZWQgYXBwbGUgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODA3OSxcbiAgICBcIm5hbWVcIjogXCJkcnkgYnJlYWRjcnVtYnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjA2OSxcbiAgICBcIm5hbWVcIjogXCJsZWd1bWVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTA3OSxcbiAgICBcIm5hbWVcIjogXCJkcmllZCBjcmFuYmVycmllc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTIxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExOTM1LFxuICAgIFwibmFtZVwiOiBcImNhdHN1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTUxLFxuICAgIFwibmFtZVwiOiBcInBpc3RhY2hpb1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODEzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExODIxLFxuICAgIFwibmFtZVwiOiBcInJlZCBzd2VldCBwZXBwZXJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDI3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDY2MTUsXG4gICAgXCJuYW1lXCI6IFwidmVnZXRhYmxlIHN0b2NrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MTNcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCBpbmdyZWRpZW50c0RhdGE7XG4iLCJjb25zdCBkb21VcGRhdGVzID0ge1xuICAvLyBDSEFOR0UgVEhFIERJU1BMQVkgT0YgQU5ZIEFSR1MgUEFTU0VEIElOLCBNVVNUIFBBU1MgSU4gW0FSR1NdXG4gIHRvZ2dsZShhbnlBcnIpIHtcbiAgICBhbnlBcnIuZm9yRWFjaChhcmVhID0+XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFyZWEpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIikpXG4gIH0sXG5cbiAgLy8gSEVMUEVSIEZVTkNUSU9OIFRPIElOU0VSVEhUTUxcbiAgYWRkRGlzcGxheShhcmVhLCB3aGVyZSwgd2hhdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJlYSkuaW5zZXJ0QWRqYWNlbnRIVE1MKHdoZXJlLCB3aGF0KVxuICB9LFxuXG4gIGNsZWFyRGlzcGxheShhcmVhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcmVhKS5pbm5lckhUTUwgPSAnJ1xuICB9LFxuXG4gIC8vIENBUkQgRElTUExBWVxuICBkaXNwbGF5Q2FyZHMocmVjaXBlTGlzdCkge1xuICAgIHRoaXMuY2xlYXJEaXNwbGF5KCdtYWluJylcblxuICAgIHJlY2lwZUxpc3QuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgbGV0IGluc3RydWN0aW9ucyA9ICcnO1xuICAgICAgbGV0IGluZ3JlZGllbnRzID0gJyc7XG4gICAgICByZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIGluc3RydWN0aW9ucyArPSBgPGxpIGFyaWEtbGFiZWw9XCJyZWNpcGUtaW5zdHJ1Y3Rpb24tc3RlcFwiIHRhYmluZGV4PVwiMFwiPiR7c3RlcC5pbnN0cnVjdGlvbn08L2xpPjxicj5gXG4gICAgICB9KVxuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIGluZ3JlZGllbnRzICs9IGA8bGkgYXJpYS1sYWJlbD1cImluZ3JlZGllbnQtcmVxdWlyZWQtZm9yLXJlY2lwZVwiIHRhYmluZGV4PVwiMFwiPiR7aW5ncmVkaWVudC5uYW1lfTogJHtpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudH0ke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH08L2xpPjxicj5gXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBzaG9ydE5hbWUgPSByZWNpcGUubmFtZS5sZW5ndGggPiA0MFxuICAgICAgICA/IHJlY2lwZS5uYW1lLnN1YnN0cmluZygwLCA0MCkgKyBcIi4uLlwiXG4gICAgICAgIDogcmVjaXBlLm5hbWVcblxuICAgICAgY29uc3QgZmF2b3JpdGVkQ2xhc3MgPSByZWNpcGUuaXNGYXZvcml0ZWQgPyBcImZhdm9yaXRlZFwiIDogJydcbiAgICAgIGNvbnN0IHRvQ29va0NsYXNzID0gcmVjaXBlLmlzVG9Db29rID8gXCJ0by1jb29rXCIgOiAnJ1xuXG4gICAgICBjb25zdCBjYXJkSHRtbCA9IGA8ZGl2IGNsYXNzPVwicmVjaXBlLWNhcmRcIiBpZD0ke3JlY2lwZS5pZH0gbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZnJvbnRcIj5cbiAgICAgICAgICAgICAgPGgzIG1heGxlbmd0aD1cIjQwXCI+JHtzaG9ydE5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGhvdG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9JHtyZWNpcGUuaW1hZ2V9IGNsYXNzPVwiY2FyZC1waG90by1wcmV2aWV3XCIgaWQ9XCJpbWcxXCIgYWx0PVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCIgdGl0bGU9XCIke3JlY2lwZS5uYW1lfSByZWNpcGVcIiBhcmlhLWxhYmVsPVwiZmxpcC1jYXJkLXRvLXJldmVhbC1kZXRhaWxzLWZvci0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZzJcIj5DbGljayBmb3IgSW5zdHJ1Y3Rpb25zPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvLWNvb2stYnV0dG9uXCIgbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb24tY29va1wiIGFyaWEtbGFiZWw9XCJidXR0b24tdG8tYWRkLXJlY2lwZS10by11c2VyLWxpc3QtdG8tY29va1wiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj7wn429PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJpY29uLWNvb2stdGV4dFwiPkFkZCB0byBjb29rPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGUtYnV0dG9uXCIgbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImljb24tZmF2XCIgYXJpYS1sYWJlbD1cImJ1dHRvbi10by1hZGQtcmVjaXBlLXRvLXVzZXItbGlzdC1vZi1mYXZvcml0ZXNcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JiMxMjc4MjI7PC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJpY29uLWZhdi10ZXh0XCI+RmF2b3JpdGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJhY2tcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImV4aXQtcmVjaXBlXCIgYXJpYS1sYWJlbD1cImJ1dHRvbi10by1leGl0LWRldGFpbHMtdmlldy1vZi0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj7ipLg8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvbnMtdGl0bGVcIj4ke3JlY2lwZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiaW5ncmVkaWVudHMgbWlzc2luZy0ke3JlY2lwZS5pZH1cIiBhcmlhLWxhYmVsPVwiaW5ncmVkaWVudHMtdXNlci1tdXN0LXJlc3RvY2stdG8tY29vay0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICA8aDI+SW5ncmVkaWVudHM6PC9oMj5cbiAgICAgICAgICAgICAgJHtpbmdyZWRpZW50c31cbiAgICAgICAgICAgICAgPGgyPlRvdGFsIENvc3Qgb2YgSW5ncmVkaWVudHM6PC9oMj5cbiAgICAgICAgICAgICAgPHA+JHtyZWNpcGUuY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KCl9PC9wPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJpbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDI+SW5zdHJ1Y3Rpb25zOjwvaDI+XG4gICAgICAgICAgICAgICAgJHtpbnN0cnVjdGlvbnN9XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21wYXJlLXJlY2lwZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb21wYXJlLXJlY2lwZVwiIGFyaWEtbGFiZWw9XCJidXR0b24tdG8tY2hlY2stdXNlci1wYW50cnktc3RvY2stb2YtaW5ncmVkaWVudHMtdG8tY29vay0ke3JlY2lwZS5uYW1lfVwiIHRhYmluZGV4PVwiMFwiPkNoZWNrIFBhbnRyeT88L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNvb2tlZC1yZWNpcGVcIj4mIzEwMDAzOzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcblxuICAgICAgdGhpcy5hZGREaXNwbGF5KFwibWFpblwiLCBcImJlZm9yZWVuZFwiLCBjYXJkSHRtbClcbiAgICB9KVxuICB9LFxuXG4gIGNhcGl0YWxpemUod29yZHMpIHtcbiAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfSxcblxuICBsaXN0VGFncyhhbGxUYWdzKSB7XG4gICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBjb25zdCB0YWdIdG1sID0gYDxsaT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tlZC10YWdcIiBpZD1cIiR7dGFnfVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiJHt0YWd9XCIgYXJpYS1sYWJlbD1cImNoZWNrYm94LWZvci0ke3RhZ30tdGFnXCIgYXJpYS1yZXF1aXJlZD1cImZhbHNlXCIgdGFiaW5kZXg9XCIwXCI+JHt0aGlzLmNhcGl0YWxpemUodGFnKX08L2xhYmVsPlxuICAgICAgICA8L2xpPmA7XG4gICAgICB0aGlzLmFkZERpc3BsYXkoXCIudGFnLWxpc3RcIiwgXCJiZWZvcmVlbmRcIiwgdGFnSHRtbCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgc2hvd1VzZXJQYW50cnkodXNlciwgaW5ncmVkaWVudHMpIHtcbiAgICBwYW50cnlJdGVtQXJyYXkuZm9yRWFjaChwYW50cnlJdGVtID0+IHtcbiAgICAgIGNvbnN0IHBhbnRyeUl0ZW1BcnJheSA9IE9iamVjdC5rZXlzKHVzZXIucGFudHJ5LnBhbnRyeSlcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWUgPSBpbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4gaW5ncmVkaWVudC5pZCA9PSBwYW50cnlJdGVtKVxuICAgICAgICA/IGluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09IHBhbnRyeUl0ZW0pLm5hbWVcbiAgICAgICAgOiBgSXRlbSBJRDogJHt1c2VyLnBhbnRyeS5wYW50cnlbcGFudHJ5SXRlbV0uaWR9YFxuICAgICAgY29uc3QgcGFudHJ5SXRlbUhUTUwgPSBgJHt1c2VyLnBhbnRyeS5wYW50cnlbcGFudHJ5SXRlbV0uYW1vdW50fSAtICR7aW5ncmVkaWVudE5hbWV9ICA8YnI+YFxuICAgICAgdGhpcy5hZGREaXNwbGF5KCcucGFudHJ5LWluZ3JlZGllbnRzJywgJ2JlZm9yZWVuZCcsIHBhbnRyeUl0ZW1IVE1MKVxuICAgIH0pXG4gIH0sXG5cbiAgc2hvd1JlY2lwZUNvbXBhcmlzb24obWlzc2luZ0xpc3QsIHRhcmdldFJlY2lwZSkge1xuICAgIGNvbnN0IG1pc3NpbmdJdGVtSHRtbCA9IFtcIjxoMj5NaXNzaW5nIEluZ3JlZGllbnRzIGZyb20gWW91ciBQYW50cnk6PC9oMj5cIl1cbiAgICBtaXNzaW5nTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbWlzc2luZ0l0ZW1IdG1sLnB1c2goYDxsaSBhcmlhLWxhYmVsPVwiaW5ncmVkaWVudC10by1yZXN0b2NrXCIgIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAke2l0ZW0uYW1vdW50TmVlZGVkfSAtICR7aXRlbS5taXNzaW5nfVxuICAgICAgICA8L2xpPmApXG4gICAgfSlcbiAgICB0aGlzLmFkZERpc3BsYXkoYC5taXNzaW5nLSR7dGFyZ2V0UmVjaXBlLmlkfWAsICdhZnRlcmJlZ2luJywgbWlzc2luZ0l0ZW1IdG1sLmpvaW4oJycpKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY29va2Jvb2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BvdC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsImNsYXNzIEluZ3JlZGllbnQge1xuICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50LCByZWNpcGVJbmdyZWRpZW50RGF0YSkge1xuICAgIHRoaXMuaWQgPSBpbmdyZWRpZW50LmlkLFxuICAgIHRoaXMubmFtZSA9IGluZ3JlZGllbnQubmFtZSxcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyxcbiAgICB0aGlzLnF1YW50aXR5ID0gcmVjaXBlSW5ncmVkaWVudERhdGEucXVhbnRpdHlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50O1xuIiwiaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tICcuL2RhdGEvaW5ncmVkaWVudC1kYXRhJ1xuXG5pbXBvcnQgSW5ncmVkaWVudCBmcm9tICcuL2luZ3JlZGllbnQnO1xuXG5jbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUsIGluZ3JlZGllbnREYXRhKSB7XG4gICAgdGhpcy5pZCA9IHJlY2lwZS5pZDtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlLmltYWdlO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSB0aGlzLmluc3RhbnRpYXRlSW5ncmVkaWVudHMocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLmlzRmF2b3JpdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1RvQ29vayA9IGZhbHNlO1xuICB9XG5cbiAgaW5zdGFudGlhdGVJbmdyZWRpZW50cyhyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMubWFwKHJlY2lwZUluZ3JlZGllbnQgPT4ge1xuICAgICAgY29uc3QgaW5ncmVkaWVudEluZm8gPSBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaWQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpO1xuICAgICAgaWYgKGluZ3JlZGllbnRJbmZvKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW5ncmVkaWVudChpbmdyZWRpZW50SW5mbywgcmVjaXBlSW5ncmVkaWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVJbmdyZWRpZW50c0Nvc3QoKSB7XG4gICAgY29uc3QgdG90YWxDb3N0ID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKHN1bSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgbGV0IGluZ3JlZGllbnRDb3N0UGVyUmVjaXBlID1cbiAgICAgIChpbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzICogaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQpO1xuICAgICAgc3VtICs9IGluZ3JlZGllbnRDb3N0UGVyUmVjaXBlO1xuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCgodG90YWxDb3N0ICogMC4wMSkudG9GaXhlZCgyKSk7XG4gIH1cblxuICBnZXRJbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb25zO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5pbXBvcnQgJy4vY3NzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9hcHBsZS1sb2dvLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFzb25pbmcucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvY29va2Jvb2sucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvcG90LnBuZyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQge2dldERhdGEsIHBvc3REYXRhfSBmcm9tICcuL2FwaXMnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tdXBkYXRlcyc7XG5pbXBvcnQgSW5ncmVkaWVudCBmcm9tICcuL2luZ3JlZGllbnQnO1xuXG5sZXQgdXNlcnMgPSBbXTtcbmxldCByZWNpcGVzID0gW107XG5sZXQgaW5ncmVkaWVudHMgPSBbXTtcbmxldCB1c2VyO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZFBhZ2UpO1xuXG5mdW5jdGlvbiBhZGRFdmVudChhcmVhLCBldmVudFR5cGUsIGZ1bmMpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcmVhKS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZnVuYylcbn1cblxuYWRkRXZlbnQoXCJoZWFkZXJcIiwgXCJjbGlja1wiLCBuYXZDbGlja3MpXG5hZGRFdmVudChcIi5sb2dpbi1idG5cIiwgXCJjbGlja1wiLCBsb2dpbilcbmFkZEV2ZW50KFwiI3NlYXJjaFwiLCBcInN1Ym1pdFwiLCBwcmVzc0VudGVyU2VhcmNoKVxuYWRkRXZlbnQoXCIucGFudHJ5XCIsIFwiY2xpY2tcIiwgcGFudHJ5Q2xpY2tzKVxuYWRkRXZlbnQoXCIuYWRkLWluZ3JlZGllbnQtZm9ybVwiLCBcInN1Ym1pdFwiLCBhZGRJbmdyZWRpZW50VG9QYW50cnkpXG5hZGRFdmVudChcIi5maWx0ZXItYnRuXCIsIFwiY2xpY2tcIiwgZGlzcGxheVRhZ2dlZFJlY2lwZXMpXG5hZGRFdmVudChcIm1haW5cIiwgXCJjbGlja1wiLCBtYWluQ2xpY2tzKVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgZ2V0RGF0YSgndXNlcnMnLCB1c2VycylcbiAgZ2V0RGF0YSgncmVjaXBlcycsIHJlY2lwZXMpXG4gIGdldERhdGEoJ2luZ3JlZGllbnRzJywgaW5ncmVkaWVudHMpXG59XG5cbmZ1bmN0aW9uIGxvZ2luKCkge1xuICB1cGRhdGVEYXRhVG9DbGFzc0luc3RhbmNlcygpXG4gIGNvbnN0IGxvZ2luSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnB1dCcpO1xuICBjb25zdCB1c2VyTG9nZ2luZ0luID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIubmFtZSA9PT0gbG9naW5JbnB1dC52YWx1ZSlcbiAgdXNlciA9IHVzZXJMb2dnaW5nSW5cbiAgZG9tVXBkYXRlcy50b2dnbGUoWycubG9naW4nLCAnLnBhZ2Utd3JhcHBlciddKVxuICBzaG93SG9tZSgpXG4gIGRpc3BsYXlUYWdzU2lkZUJhcigpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGFUb0NsYXNzSW5zdGFuY2VzKCkge1xuICB1c2VycyA9IHVzZXJzLm1hcCh1c2VyID0+IG5ldyBVc2VyKHVzZXIpKVxuICByZWNpcGVzID0gcmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlLCBpbmdyZWRpZW50cykpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYWdzU2lkZUJhcigpIHtcbiAgY29uc3QgYWxsVGFncyA9IHJlY2lwZXMuZmxhdE1hcChyZWNpcGUgPT4gcmVjaXBlLnRhZ3MpXG4gIGNvbnN0IHVuaXF1ZVRhZ3MgPSBuZXcgU2V0KGFsbFRhZ3MpXG4gIGNvbnN0IHNvcnRlZFVuaXF1ZVRhZ3MgPSBBcnJheS5mcm9tKHVuaXF1ZVRhZ3MpLnNvcnQoKVxuICBkb21VcGRhdGVzLmxpc3RUYWdzKHNvcnRlZFVuaXF1ZVRhZ3MpO1xufVxuZnVuY3Rpb24gbmF2Q2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpXG5cbiAgc3dpdGNoKHRhcmdldEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XG4gICAgY2FzZSAnZmlsdGVyLWJ1dHRvbic6XG4gICAgICBzaG93RmlsdGVyTWVudSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdob21lLWJ1dHRvbic6XG4gICAgICBzaG93SG9tZSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXYtc2VhcmNoLWJ1dHRvbic6XG4gICAgICBzZWFyY2hSZWNpcGVzKClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Zhdi1idXR0b24nOlxuICAgICAgZGlzcGxheUZhdm9yaXRlZFJlY2lwZXMoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGFudHJ5LWJ1dHRvbic6XG4gICAgICBkaXNwbGF5UGFudHJ5KClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvLWNvb2stYnV0dG9uJzpcbiAgICAgIGRpc3BsYXlUb0Nvb2tSZWNpcGVzKClcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dGaWx0ZXJNZW51KCkge1xuICBjb25zdCBmaWx0ZXJCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tZmlsdGVyJylcbiAgZmlsdGVyQmFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlci1kcm9wJylcbiAgZmlsdGVyQmFyLmNsYXNzTGlzdC50b2dnbGUoJ3JlY2lwZS1maWx0ZXJzJylcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHJlY2lwZXMpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaFJlY2lwZXMoKSB7XG4gIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykudmFsdWUudG9Mb3dlckNhc2UoKVxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1c2VyU2VhcmNoKTtcbiAgfSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHNlYXJjaFJlc3VsdHMpXG59XG5cbmZ1bmN0aW9uIHByZXNzRW50ZXJTZWFyY2goZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VhcmNoUmVjaXBlcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmF2b3JpdGVkUmVjaXBlcygpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHModXNlci5mYXZvcml0ZVJlY2lwZXMpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0Nvb2tSZWNpcGVzKCkge1xuICBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcyh1c2VyLnJlY2lwZXNUb0Nvb2spXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYW50cnkoKSB7XG4gIGRvbVVwZGF0ZXMuc2hvd1VzZXJQYW50cnkodXNlciwgaW5ncmVkaWVudHMpXG4gIGRvbVVwZGF0ZXMudG9nZ2xlKFsnLnBhbnRyeSddKVxufVxuXG5mdW5jdGlvbiBwYW50cnlDbGlja3MoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gIHN3aXRjaCh0YXJnZXQuaWQpIHtcbiAgICBjYXNlICdleGl0LXBhbnRyeSc6XG4gICAgICBkaXNwbGF5UGFudHJ5KClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmaW5kLXJlY2lwZXMtdXNpbmctcGFudHJ5LWJ0blwiOlxuICAgICAgZmluZFJlY2lwZXNVc2luZ1BhbnRyeSgpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJbmdyZWRpZW50VG9QYW50cnkoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zdCBuYW1lQWRkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWUtaW5ncmVkaWVudC1mb3JtXCIpLnZhbHVlXG4gIGNvbnN0IHF1YW50aXR5QWRkZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1YW50aXR5LWluZ3JlZGllbnQtZm9ybVwiKS52YWx1ZVxuXG4gIGNvbnN0IG1hdGNoID0gaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IHtcbiAgICByZXR1cm4gaW5ncmVkaWVudC5uYW1lID09PSBuYW1lQWRkZWQudG9Mb3dlckNhc2UoKVxuICB9KVxuICBjb25zdCBtYXRjaElkID0gbWF0Y2ggPyBtYXRjaC5pZCA6IERhdGUubm93KClcblxuICBwb3N0RGF0YSh1c2VyLmlkLCBtYXRjaElkLCBxdWFudGl0eUFkZGVkKVxuICBhbGVydChgWW91IGhhdmUgYWRkZWQgJHtxdWFudGl0eUFkZGVkfSBvZiAke25hbWVBZGRlZH0gdG8geW91ciBwYW50cnkhYClcbn1cblxuZnVuY3Rpb24gZmluZFJlY2lwZXNVc2luZ1BhbnRyeSgpIHtcbiAgY29uc3QgcmVjaXBlc1VzZXJDb3VsZENvb2sgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiAhdXNlci5wYW50cnkuY29tcGFyZUluZ3JlZGllbnRzKHJlY2lwZSlcbiAgfSlcbiAgaWYgKHJlY2lwZXNVc2VyQ291bGRDb29rLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHJlY2lwZXNVc2VyQ291bGRDb29rKVxuICAgIGRvbVVwZGF0ZXMudG9nZ2xlKFsnLnBhbnRyeSddKVxuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdTb3JyeSwgeW91IGNhbm5vdCBjb29rIGFueSByZWNpcGVzLCB5b3UgbmVlZCB0byBnbyB0byB0aGUgZ3JvY2Nlcnkgc3RvcmUuJylcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIG1haW5DbGlja3MoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XG4gIGNvbnN0IHRhcmdldFJlY2lwZSA9IGZpbmRUYXJnZXRSZWNpcGUodGFyZ2V0KVxuXG4gIHN3aXRjaCh0YXJnZXQuaWQpIHtcbiAgICBjYXNlICdpbWcxJzpcbiAgICAgIHRhcmdldC5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKS5jbGFzc0xpc3QuYWRkKCdyZWNpcGUtY2FyZC1hY3RpdmUnKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaW1nMic6XG4gICAgICB0YXJnZXQuY2xvc2VzdCgnLnJlY2lwZS1jYXJkJykuY2xhc3NMaXN0LmFkZCgncmVjaXBlLWNhcmQtYWN0aXZlJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ljb24tZmF2JyB8fCAnaWNvbi1mYXYtdGV4dCc6XG4gICAgICBhZGRPclJlbW92ZUZyb21Vc2VyTGlzdCh0YXJnZXRSZWNpcGUsICdpc0Zhdm9yaXRlZCcsICdmYXZvcml0ZVJlY2lwZXMnKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaWNvbi1jb29rJyB8fCAnaWNvbi1jb29rLXRleHQnOlxuICAgICAgYWRkT3JSZW1vdmVGcm9tVXNlckxpc3QodGFyZ2V0UmVjaXBlLCAnaXNUb0Nvb2snLCAncmVjaXBlc1RvQ29vaycpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdleGl0LXJlY2lwZSc6XG4gICAgICB0YXJnZXQuY2xvc2VzdCgnLnJlY2lwZS1jYXJkJykuY2xhc3NMaXN0LnJlbW92ZSgncmVjaXBlLWNhcmQtYWN0aXZlJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nvb2tlZC1yZWNpcGUnOlxuICAgICAgY29va1RoaXNSZWNpcGUodGFyZ2V0UmVjaXBlKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXhpdC1wYW50cnknOlxuICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgYGNvbXBhcmUtcmVjaXBlYDpcbiAgICAgIGNvbXBhcmVSZWNpcGVzKHRhcmdldFJlY2lwZSlcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXJnZXRSZWNpcGUodGFyZ2V0KSB7XG4gIGNvbnN0IHRhcmdldElkID0gdGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gIHJldHVybiByZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PSB0YXJnZXRJZClcbn1cblxuZnVuY3Rpb24gYWRkT3JSZW1vdmVGcm9tVXNlckxpc3QodGFyZ2V0UmVjaXBlLCBjaGVja1Byb3BlcnR5LCB1c2VyTGlzdE5hbWUpIHtcbiAgaWYgKHRhcmdldFJlY2lwZVtjaGVja1Byb3BlcnR5XSkge1xuICAgIHRhcmdldFJlY2lwZVtjaGVja1Byb3BlcnR5XSA9IGZhbHNlXG4gICAgdXNlci5yZW1vdmVSZWNpcGUodGFyZ2V0UmVjaXBlLCB1c2VyTGlzdE5hbWUpXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0UmVjaXBlW2NoZWNrUHJvcGVydHldID0gdHJ1ZVxuICAgIHVzZXIuc2F2ZVJlY2lwZSh0YXJnZXRSZWNpcGUsIHVzZXJMaXN0TmFtZSlcbiAgfVxuICBzaG93SG9tZSgpXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVSZWNpcGVzKHRhcmdldFJlY2lwZSkge1xuICBjb25zdCBtaXNzaW5nTGlzdCA9IHVzZXIucGFudHJ5LmNvbXBhcmVJbmdyZWRpZW50cyh0YXJnZXRSZWNpcGUpXG4gIGlmIChtaXNzaW5nTGlzdCkge1xuICAgIGRvbVVwZGF0ZXMuc2hvd1JlY2lwZUNvbXBhcmlzb24obWlzc2luZ0xpc3QsIHRhcmdldFJlY2lwZSlcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnWW91IGNhbiBjb29rIHRoaXMgd2l0aCB5b3VyIGN1cnJlbnQgcGFudHJ5IGluZ3JlZGllbnRzIScpXG4gIH1cbn1cblxuZnVuY3Rpb24gY29va1RoaXNSZWNpcGUodGFyZ2V0UmVjaXBlKSB7XG4gIHVzZXIucmVtb3ZlUmVjaXBlKHRhcmdldFJlY2lwZSwgJ3JlY2lwZXNUb0Nvb2snKVxuICB1c2VyLnBhbnRyeS5yZW1vdmVJbmdyZWRpZW50cyh0YXJnZXRSZWNpcGUpXG4gIGRvbVVwZGF0ZXMuc2hvd1VzZXJQYW50cnkodXNlciwgaW5ncmVkaWVudHMpXG4gIGFsZXJ0KCdHb29kIGNvb2tpbmchIFJlY2lwZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB5b3VyIHJlY2lwZXMgdG8gY29vay4nKVxuICBzZXRUaW1lb3V0KHNob3dIb21lLCAxMDAwKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFnZ2VkUmVjaXBlcyhjaGVja2JveGVzU2VsZWN0b3IpIHtcbiAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gIGNvbnN0IGNoZWNrYm94VmFsdWVzID0gQXJyYXkuZnJvbShjaGVja2JveGVzKVxuICBjb25zdCBzZWxlY3RlZEJveGVzID0gY2hlY2tib3hWYWx1ZXMuZmlsdGVyKGJveCA9PiBib3guY2hlY2tlZCkubWFwKHRhZyA9PiB0YWcuaWQpXG4gIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiByZWNpcGUudGFncy5zb21lKHRhZyA9PiBzZWxlY3RlZEJveGVzLmluY2x1ZGVzKHRhZykpO1xuICB9KTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoc2VhcmNoUmVzdWx0cylcbn1cbiIsImltcG9ydCBQYW50cnkgZnJvbSAnLi9QYW50cnknXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlcikge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IG5ldyBQYW50cnkodXNlci5wYW50cnksIHVzZXIuaWQpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gIH1cblxuICBzYXZlUmVjaXBlKHJlY2lwZSwgbGlzdCkge1xuICAgIGlmICghdGhpc1tsaXN0XS5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzW2xpc3RdLnB1c2gocmVjaXBlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVSZWNpcGUocmVjaXBlLCBsaXN0KSB7XG4gICAgY29uc3QgaSA9IHRoaXNbbGlzdF0uaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXNbbGlzdF0uc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgZmlsdGVyUmVjaXBlcyh0YWcsIGxpc3QpIHtcbiAgICByZXR1cm4gdGhpc1tsaXN0XS5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZykpO1xuICB9XG4gIFxuICBzZWFyY2hGb3JSZWNpcGUoa2V5d29yZCwgbGlzdCkge1xuICAgIHJldHVybiB0aGlzW2xpc3RdLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoa2V5d29yZCkgfHwgcmVjaXBlLmluZ3JlZGllbnRzLmZpbHRlcihpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQubmFtZS5pbmNsdWRlcyhrZXl3b3JkKSkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=