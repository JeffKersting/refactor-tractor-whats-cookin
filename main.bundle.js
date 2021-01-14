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
            instructions += `<li>${step.instruction}</li><br>`
        })
        recipe.ingredients.forEach(ingredient => {
            ingredients += `<li>${ingredient.name}: ${ingredient.quantity.amount}${ingredient.quantity.unit}</li><br>`
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
                <img src=${recipe.image} class="card-photo-preview" id="img1" alt="${recipe.name} recipe" title="${recipe.name} recipe">
                <div class="text">
                  <div id="img2">Click for Instructions</div>
                </div>
              </div>
              <div class="to-cook-button" name=${recipe.id}>
                  <div id="icon-cook" class= ${toCookClass}>🍽</div>
                  <p id="icon-cook-text">To Cook</p>
              </div>
              <div class="favorite-button" name=${recipe.id}>
                  <div id="icon-fav" class=${favoritedClass}>&#127822;</div>
                  <p id="icon-fav-text">Favorite</p>
              </div>
            </div>
            <div class="card-back">
              <div id="exit-recipe">⤸</div>
              <p class="instructions-title">${recipe.name}</p>
              <ol class="ingredients missing-${recipe.id}">
              <h2>Ingredients:</h2>
              ${ingredients}
              </ol>
              <ol class="instructions">
                <h2>Instructions:</h2>
                ${instructions}
              </ol>
              <button class="compare-recipe-button" type="button" id="compare-recipe">Check Pantry?</button>
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
          <label for="${tag}">${this.capitalize(tag)}</label>
          </li>`;
            this.addDisplay(".tag-list", "beforeend", tagHtml);
        });
    },

    showUserPantry(user, ingredients) {
      const pantryItemArray = Object.keys(user.pantry.pantry)
      pantryItemArray.forEach(pantryItem => {
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
        missingItemHtml.push(`<li>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BhbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/N2FiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmdyZWRpZW50LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcG90LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFzb25pbmcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmdyZWRpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUM1QjtBQUN2RSw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxnRUFBNkI7QUFDdEc7QUFDQSw4QkFBOEIsUUFBUywwVEFBMFQsc0JBQXNCLDhDQUE4QyxhQUFhLDBKQUEwSixjQUFjLDhCQUE4QiwyQ0FBMkMsY0FBYyxlQUFlLGlDQUFpQyxFQUFFLHNFQUFzRSxtQkFBbUIsRUFBRSxvSkFBb0oscUJBQXFCLHVCQUF1QixpQkFBaUIsK0NBQStDLG9CQUFvQixlQUFlLDBCQUEwQixlQUFlLEVBQUUsUUFBUSxtQkFBbUIsOEJBQThCLEVBQUUsUUFBUSxtQkFBbUIsZ0JBQWdCLDZCQUE2Qix5QkFBeUIsRUFBRSxRQUFRLG1CQUFtQiw4QkFBOEIsdUJBQXVCLDZCQUE2Qiw2QkFBNkIsdUJBQXVCLEVBQUUsZ05BQWdOLDRCQUE0Qix5QkFBeUIsaUNBQWlDLGFBQWEscUpBQXFKLHNDQUFzQyw4QkFBOEIsYUFBYSxxTEFBcUwsa0NBQWtDLEVBQUUsd0pBQXdKLHdCQUF3QiwwQ0FBMEMsaURBQWlELGFBQWEsdUZBQXVGLHdCQUF3QixFQUFFLG1LQUFtSyxzQ0FBc0MsOEJBQThCLGFBQWEsb0VBQW9FLG1CQUFtQixFQUFFLGtIQUFrSCxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsRUFBRSxTQUFTLG9CQUFvQixFQUFFLFNBQVMsZ0JBQWdCLEVBQUUsaUxBQWlMLHVCQUF1QixFQUFFLHdQQUF3UCx5QkFBeUIsK0JBQStCLGlDQUFpQyx5QkFBeUIsYUFBYSw2RkFBNkYsaUNBQWlDLEVBQUUsa0tBQWtLLG9DQUFvQyxFQUFFLHVKQUF1SiwrQkFBK0IsRUFBRSw2TUFBNk0sdUJBQXVCLGVBQWUsRUFBRSxzTUFBc00sbUNBQW1DLEVBQUUsNERBQTRELG1DQUFtQyxFQUFFLHNRQUFzUSwyQkFBMkIsOEJBQThCLDhCQUE4QiwrQkFBK0IsMEJBQTBCLG1DQUFtQyxhQUFhLDhGQUE4Riw2QkFBNkIsRUFBRSw2RUFBNkUsbUJBQW1CLEVBQUUsc0lBQXNJLDJCQUEyQiwwQkFBMEIsYUFBYSxzTEFBc0wsaUJBQWlCLEVBQUUscUlBQXFJLGtDQUFrQyxvQ0FBb0MsYUFBYSx3SEFBd0gsNkJBQTZCLEVBQUUsMktBQTJLLCtCQUErQiw2QkFBNkIsYUFBYSxrTEFBa0wsbUJBQW1CLEVBQUUsbUVBQW1FLHVCQUF1QixFQUFFLDBKQUEwSixrQkFBa0IsRUFBRSw0REFBNEQsa0JBQWtCLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQixnQ0FBZ0Msa0JBQWtCLHdCQUF3Qiw4QkFBOEIsdUJBQXVCLHVDQUF1QyxFQUFFLHlCQUF5Qix3QkFBd0IsaUJBQWlCLGdCQUFnQiwrQkFBK0Isd0JBQXdCLEVBQUUsY0FBYyxpQkFBaUIscUJBQXFCLG1CQUFtQix3QkFBd0IsdUJBQXVCLG9DQUFvQyw2QkFBNkIsd0JBQXdCLEVBQUUsbUJBQW1CLHNCQUFzQixrQ0FBa0MseUNBQXlDLCtCQUErQixzQ0FBc0MsRUFBRSxnQkFBZ0Isc0JBQXNCLGtDQUFrQyx5Q0FBeUMsK0JBQStCLHNDQUFzQyxtQkFBbUIsZ0NBQWdDLEVBQUUsaUJBQWlCLHVCQUF1QixlQUFlLEVBQUUsWUFBWSxrQkFBa0Isd0JBQXdCLHNCQUFzQixtQkFBbUIsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsZUFBZSxFQUFFLGFBQWEsa0JBQWtCLEVBQUUscUJBQXFCLGtCQUFrQixtQkFBbUIsd0JBQXdCLGtDQUFrQyx5Q0FBeUMsK0JBQStCLHNDQUFzQyxFQUFFLFFBQVEsd0JBQXdCLGtDQUFrQyx5Q0FBeUMsK0JBQStCLHNDQUFzQyxxQkFBcUIsRUFBRSxVQUFVLHNCQUFzQixrQ0FBa0MseUNBQXlDLCtCQUErQixzQ0FBc0MsRUFBRSx3QkFBd0IsaUJBQWlCLHFCQUFxQixnQkFBZ0IsRUFBRSxhQUFhLHVDQUF1QywrQkFBK0Isd0NBQXdDLGtCQUFrQix3QkFBd0IsMkNBQTJDLDRCQUE0Qiw4QkFBOEIsZ0JBQWdCLHVCQUF1QixFQUFFLG1CQUFtQiw4QkFBOEIsOEdBQThHLHFDQUFxQyxpQkFBaUIsaURBQWlELG1CQUFtQiwyQ0FBMkMsb0JBQW9CLGlCQUFpQixrQkFBa0IseUJBQXlCLHNCQUFzQix5QkFBeUIsZ0JBQWdCLEVBQUUseUJBQXlCLDhDQUE4QywyQkFBMkIsRUFBRSx5QkFBeUIsOENBQThDLEVBQUUsZ0NBQWdDLHFCQUFxQixzQkFBc0Isd0JBQXdCLHdCQUF3QixFQUFFLHNDQUFzQyxxQkFBcUIsMkJBQTJCLEVBQUUsbUJBQW1CLGtCQUFrQixFQUFFLGlCQUFpQixvQ0FBb0MscUNBQXFDLEVBQUUsY0FBYyx3QkFBd0Isa0NBQWtDLGlCQUFpQixvQkFBb0Isa0JBQWtCLDJCQUEyQixtQkFBbUIscUJBQXFCLDRCQUE0QixlQUFlLGtCQUFrQix1QkFBdUIseUJBQXlCLGVBQWUsRUFBRSxvQkFBb0IscUJBQXFCLHNCQUFzQixxQ0FBcUMsMkJBQTJCLEVBQUUsa0JBQWtCLHVCQUF1QixzQkFBc0IsdUJBQXVCLEVBQUUsbUJBQW1CLG9DQUFvQyxFQUFFLGtCQUFrQixrQkFBa0IsNkJBQTZCLEVBQUUsbUJBQW1CLHlIQUF5SCxnQkFBZ0IscUJBQXFCLGdCQUFnQixvQkFBb0IsWUFBWSxFQUFFLHVDQUF1Qyx1QkFBdUIsZUFBZSxFQUFFLDZDQUE2QyxpQkFBaUIsZ0JBQWdCLEVBQUUsd0JBQXdCLGtCQUFrQixxQkFBcUIsRUFBRSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyw4QkFBOEIsa0JBQWtCLDRCQUE0Qix1QkFBdUIsb0JBQW9CLGFBQWEsZUFBZSxxQkFBcUIsRUFBRSxXQUFXLDhCQUE4QixrQkFBa0IsdUJBQXVCLEVBQUUsUUFBUSwwQkFBMEIscUJBQXFCLEVBQUUsVUFBVSx1QkFBdUIsYUFBYSxjQUFjLGVBQWUsa0JBQWtCLGlFQUFpRSx3Q0FBd0MsZ0JBQWdCLEVBQUUsa0JBQWtCLHVCQUF1QixnQkFBZ0IsMEJBQTBCLGtCQUFrQixlQUFlLHFCQUFxQix1REFBdUQsd0JBQXdCLG9DQUFvQyxFQUFFLDhCQUE4QixzQ0FBc0MsdUJBQXVCLHlEQUF5RCxFQUFFLDZCQUE2QixzQ0FBc0MsMkNBQTJDLHNDQUFzQyxtQkFBbUIsRUFBRSxjQUFjLGlCQUFpQixFQUFFLHlCQUF5Qix1QkFBdUIsZ0JBQWdCLDBCQUEwQixrQkFBa0IsZUFBZSx3QkFBd0Isb0NBQW9DLGdCQUFnQixxQkFBcUIsZ0NBQWdDLEVBQUUsb0NBQW9DLGlDQUFpQyxFQUFFLG9DQUFvQyxzQ0FBc0MsbURBQW1ELCtEQUErRCxzQ0FBc0MsRUFBRSxxQ0FBcUMsc0NBQXNDLDJDQUEyQyxFQUFFLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQ0FBb0MsaUNBQWlDLEVBQUUsOEJBQThCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsa0JBQWtCLDhCQUE4Qiw4QkFBOEIsZ0NBQWdDLHFCQUFxQixnQ0FBZ0MsRUFBRSxrQkFBa0IsdUJBQXVCLFlBQVksZUFBZSx1QkFBdUIsNENBQTRDLHFCQUFxQixlQUFlLGNBQWMsZUFBZSxtQkFBbUIsRUFBRSw2QkFBNkIsdUJBQXVCLGFBQWEsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMkJBQTJCLGNBQWMsZUFBZSxvQkFBb0IsOEJBQThCLDhCQUE4Qix1QkFBdUIsb0NBQW9DLEVBQUUsOEJBQThCLHVCQUF1QixtQkFBbUIsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLDJCQUEyQix1QkFBdUIsZUFBZSxxQkFBcUIsOEJBQThCLDhCQUE4Qix1QkFBdUIsb0NBQW9DLEVBQUUsNkJBQTZCLHVCQUF1QixZQUFZLGNBQWMsMkNBQTJDLG1CQUFtQixvQkFBb0Isd0JBQXdCLGtDQUFrQyx5Q0FBeUMsK0JBQStCLHNDQUFzQyxFQUFFLG1DQUFtQywwQkFBMEIsb0NBQW9DLDJDQUEyQyxpQ0FBaUMsd0NBQXdDLEVBQUUsdUJBQXVCLG9CQUFvQixlQUFlLGFBQWEsMkJBQTJCLEVBQUUsK0JBQStCLHVCQUF1QixlQUFlLGNBQWMsMkJBQTJCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGtDQUFrQyx5Q0FBeUMsK0JBQStCLHNDQUFzQyxFQUFFLHFDQUFxQywwQkFBMEIsb0NBQW9DLDJDQUEyQyxpQ0FBaUMsd0NBQXdDLEVBQUUsNENBQTRDLGlCQUFpQix5QkFBeUIsRUFBRSw4QkFBOEIsb0JBQW9CLGtCQUFrQix5QkFBeUIsZ0JBQWdCLEVBQUUsMkJBQTJCLHFDQUFxQyx5QkFBeUIsRUFBRSxxQkFBcUIsZ0JBQWdCLG9CQUFvQixxQkFBcUIsbUJBQW1CLG9CQUFvQix3QkFBd0Isa0NBQWtDLHlDQUF5QywrQkFBK0Isc0NBQXNDLEVBQUUsdUJBQXVCLHNCQUFzQixzQkFBc0Isd0JBQXdCLHVCQUF1QixpQkFBaUIsRUFBRSw4QkFBOEIsMEJBQTBCLG9DQUFvQywyQ0FBMkMsaUNBQWlDLHdDQUF3QyxFQUFFLHVFQUF1RSwwQkFBMEIsb0NBQW9DLDJDQUEyQyxpQ0FBaUMsd0NBQXdDLGtDQUFrQywyQkFBMkIsRUFBRSw2QkFBNkIscUJBQXFCLHNCQUFzQixxQ0FBcUMsMkJBQTJCLHVCQUF1QixpQkFBaUIsRUFBRSxzQkFBc0IsaUJBQWlCLG9CQUFvQixzQkFBc0IsbUJBQW1CLG9CQUFvQix3QkFBd0Isa0NBQWtDLHlDQUF5QywrQkFBK0Isc0NBQXNDLEVBQUUsd0JBQXdCLHNCQUFzQixzQkFBc0Isd0JBQXdCLGlCQUFpQixFQUFFLGlDQUFpQywwQkFBMEIsb0NBQW9DLDJDQUEyQyxpQ0FBaUMsd0NBQXdDLEVBQUUsc0NBQXNDLDBCQUEwQixvQ0FBb0MsMkNBQTJDLGlDQUFpQyx3Q0FBd0Msa0NBQWtDLDJCQUEyQixFQUFFLDhCQUE4QixxQkFBcUIsc0JBQXNCLHFDQUFxQywyQkFBMkIsdUJBQXVCLGlCQUFpQixFQUFFLHlCQUF5QixpQ0FBaUMsaUNBQWlDLDJCQUEyQix1QkFBdUIsa0JBQWtCLHlCQUF5QixnQkFBZ0Isb0JBQW9CLEVBQUUsMkJBQTJCLHdCQUF3QixrQkFBa0Isa0JBQWtCLDRCQUE0Qix1QkFBdUIsb0JBQW9CLEVBQUUsV0FBVyx3QkFBd0IsaUJBQWlCLHFCQUFxQixtQkFBbUIsZ0JBQWdCLGdCQUFnQix1QkFBdUIsdUJBQXVCLGNBQWMseUJBQXlCLEVBQUUsWUFBWSw4QkFBOEIsY0FBYyx1QkFBdUIsaUJBQWlCLG9CQUFvQiwyQ0FBMkMsb0JBQW9CLHNCQUFzQiwrQkFBK0IsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsbUJBQW1CLGlCQUFpQixxQkFBcUIsaUJBQWlCLEVBQUUsdUJBQXVCLDhCQUE4QixFQUFFLGdCQUFnQixvQkFBb0IsZ0JBQWdCLHFCQUFxQixnQ0FBZ0MsRUFBRSxxQkFBcUIsb0JBQW9CLG9CQUFvQixpQkFBaUIsa0JBQWtCLHFCQUFxQixnQ0FBZ0MsNEJBQTRCLCtCQUErQixxQ0FBcUMsdUJBQXVCLHVDQUF1QyxFQUFFLHFCQUFxQixRQUFRLDhCQUE4QixFQUFFLFVBQVUsZ0NBQWdDLEVBQUUsRUFBRSxnQkFBZ0Isd0JBQXdCLDhCQUE4QixrQkFBa0Isa0JBQWtCLHFCQUFxQixxQkFBcUIscUJBQXFCLGtCQUFrQix1QkFBdUIsdUJBQXVCLGlCQUFpQixlQUFlLEVBQUUsbUJBQW1CLG1CQUFtQixnQkFBZ0IsRUFBRSxrQkFBa0IsbUJBQW1CLHVCQUF1QixxQkFBcUIsRUFBRSwwQkFBMEIsc0JBQXNCLDhCQUE4Qix3QkFBd0Isb0NBQW9DLGtCQUFrQixnQkFBZ0IsY0FBYyx1QkFBdUIseUJBQXlCLG9CQUFvQixlQUFlLGFBQWEsZUFBZSxrQkFBa0IsRUFBRSw2QkFBNkIsd0JBQXdCLHFCQUFxQixFQUFFLDRCQUE0QixzQkFBc0IsRUFBRSw2QkFBNkIsdUJBQXVCLEVBQUUsc0JBQXNCLHNCQUFzQiwrQkFBK0IsdUJBQXVCLG1CQUFtQixvQkFBb0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHlCQUF5QixFQUFFLDRCQUE0Qix3QkFBd0IseUJBQXlCLEVBQUUsbUJBQW1CLGlDQUFpQywyQkFBMkIsbUNBQW1DLGlCQUFpQixvQkFBb0IsY0FBYyxnQkFBZ0IsdUJBQXVCLG1DQUFtQyxFQUFFLGNBQWMsOEJBQThCLDhCQUE4QixpQkFBaUIsWUFBWSxpQkFBaUIsb0JBQW9CLFdBQVcsZ0JBQWdCLGlCQUFpQixFQUFFLGFBQWEsb0JBQW9CLHFCQUFxQixnQ0FBZ0MsOEJBQThCLDhCQUE4Qix1QkFBdUIsb0NBQW9DLGFBQWEsZ0JBQWdCLGVBQWUsa0JBQWtCLDJCQUEyQiwwQkFBMEIsRUFBRSwwQkFBMEIseUJBQXlCLGNBQWMsZ0JBQWdCLGlDQUFpQyxxQkFBcUIsc0JBQXNCLDBCQUEwQixvQ0FBb0MsMkNBQTJDLGlDQUFpQyx3Q0FBd0MsRUFBRSxrQ0FBa0MsNEJBQTRCLHNDQUFzQyw2Q0FBNkMsbUNBQW1DLDBDQUEwQyxFQUFFLGlDQUFpQyx5QkFBeUIseUJBQXlCLGVBQWUsaUJBQWlCLGtCQUFrQixxQkFBcUIsdUJBQXVCLGdDQUFnQyxnQ0FBZ0MseUJBQXlCLHNDQUFzQyx1QkFBdUIsa0NBQWtDLEVBQUUsZ0JBQWdCLHlCQUF5QixpQ0FBaUMscUJBQXFCLG9DQUFvQyxFQUFFLHFDQUFxQyxvQkFBb0IsOEJBQThCLGtCQUFrQix1QkFBdUIsa0NBQWtDLEVBQUUsa0NBQWtDLHNCQUFzQixpQkFBaUIsaUJBQWlCLHVCQUF1QixrQ0FBa0MsRUFBRSw0Q0FBNEMscUJBQXFCLHVCQUF1QixrQ0FBa0MsRUFBRSxvQkFBb0Isb0JBQW9CLDBCQUEwQixrQkFBa0IsYUFBYSxFQUFFLGdEQUFnRCxZQUFZLGtCQUFrQixFQUFFLEVBQUUsZ0RBQWdELFVBQVUsZUFBZSxFQUFFLGVBQWUsb0JBQW9CLEVBQUUsb0JBQW9CLHFCQUFxQixFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLHFCQUFxQixvQkFBb0IsRUFBRSxrQkFBa0IsY0FBYyxlQUFlLG1CQUFtQix1QkFBdUIseUJBQXlCLEVBQUUsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0NBQWtDLGtDQUFrQywyQkFBMkIsd0NBQXdDLEVBQUUsRUFBRSwrQ0FBK0MsWUFBWSxrQkFBa0IsbUJBQW1CLEVBQUUsVUFBVSwyQ0FBMkMsRUFBRSwyQkFBMkIsb0JBQW9CLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLGtCQUFrQixrQkFBa0IsRUFBRSxzQkFBc0Isc0JBQXNCLEVBQUUscUJBQXFCLHNCQUFzQixFQUFFLG9GQUFvRixzQkFBc0IsRUFBRSxFQUFFLCtDQUErQyxZQUFZLGtCQUFrQixFQUFFLEVBQUUsYUFBYSxrQkFBa0IsRUFBRSxTQUFTLHlqQkFBeWpCLEtBQUssT0FBTyxRQUFRLEtBQUssS0FBSyxZQUFZLFVBQVUsYUFBYSxnQkFBZ0IsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsYUFBYSxjQUFjLFdBQVcsVUFBVSxrQkFBa0IsT0FBTyxLQUFLLEtBQUssZ0JBQWdCLFFBQVEsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLGFBQWEsWUFBWSxVQUFVLFlBQVksaUJBQWlCLEtBQUssWUFBWSxvQkFBb0IsTUFBTSxZQUFZLFlBQVksWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGVBQWUsY0FBYyxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sT0FBTyxRQUFRLEtBQUssTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLFFBQVEsS0FBSyxLQUFLLFlBQVksVUFBVSxXQUFXLGdCQUFnQixNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sa0JBQWtCLFFBQVEsS0FBSyxNQUFNLFlBQVksVUFBVSxhQUFhLFVBQVUsYUFBYSxnQkFBZ0IsT0FBTyxLQUFLLE9BQU8sa0JBQWtCLFFBQVEsS0FBSyxRQUFRLFlBQVksVUFBVSxXQUFXLGdCQUFnQixPQUFPLEtBQUssTUFBTSxnQkFBZ0IsUUFBUSxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCLEtBQUssUUFBUSxRQUFRLE1BQU0sTUFBTSxrQkFBa0IsTUFBTSxRQUFRLFNBQVMsTUFBTSxVQUFVLFlBQVksVUFBVSxXQUFXLFVBQVUsYUFBYSxVQUFVLFdBQVcsZ0JBQWdCLFFBQVEsTUFBTSxPQUFPLFVBQVUsa0JBQWtCLFFBQVEsTUFBTSxPQUFPLFVBQVUsa0JBQWtCLE9BQU8sTUFBTSxTQUFTLGtCQUFrQixPQUFPLE1BQU0sU0FBUyxZQUFZLGlCQUFpQixNQUFNLE1BQU0sU0FBUyxrQkFBa0IsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxnQkFBZ0IsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLE9BQU8sTUFBTSxNQUFNLGdCQUFnQixRQUFRLE1BQU0sTUFBTSxhQUFhLFVBQVUsV0FBVyxnQkFBZ0IsT0FBTyxNQUFNLE1BQU0saUJBQWlCLE9BQU8sTUFBTSxLQUFLLGFBQWEsVUFBVSxhQUFhLGdCQUFnQixPQUFPLE1BQU0sS0FBSyxtQkFBbUIsUUFBUSxNQUFNLE1BQU0sWUFBWSxVQUFVLFdBQVcsZ0JBQWdCLE1BQU0sUUFBUSxRQUFRLE1BQU0sTUFBTSxnQkFBZ0IsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLE1BQU0sUUFBUSxRQUFRLE1BQU0sTUFBTSxnQkFBZ0IsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFlBQVksVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sY0FBYyxjQUFjLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksaUJBQWlCLEtBQUssZ0JBQWdCLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGlCQUFpQixLQUFLLFlBQVksY0FBYyxlQUFlLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGtCQUFrQixNQUFNLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsZ0JBQWdCLEtBQUssYUFBYSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLFlBQVksWUFBWSxrQkFBa0IsT0FBTyxXQUFXLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLGFBQWEsb0JBQW9CLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxhQUFhLFlBQVksWUFBWSxrQkFBa0IsT0FBTyxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sbUJBQW1CLE9BQU8sVUFBVSxrQkFBa0IsT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsZ0JBQWdCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxVQUFVLGdCQUFnQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsY0FBYyxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGFBQWEsaUJBQWlCLE1BQU0sZ0JBQWdCLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxjQUFjLGNBQWMsbUJBQW1CLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsa0JBQWtCLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsY0FBYyxjQUFjLGNBQWMsbUJBQW1CLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLGNBQWMsY0FBYyxtQkFBbUIsT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxjQUFjLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE9BQU8sV0FBVyxVQUFVLFVBQVUsa0JBQWtCLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsY0FBYyxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixPQUFPLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksaUJBQWlCLEtBQUssYUFBYSxvQkFBb0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsa0JBQWtCLE9BQU8sYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixPQUFPLFVBQVUsVUFBVSxZQUFZLGdCQUFnQixLQUFLLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsa0JBQWtCLE9BQU8sYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGlCQUFpQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixNQUFNLGFBQWEsWUFBWSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksaUJBQWlCLEtBQUssbUJBQW1CLE9BQU8sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE9BQU8sVUFBVSxVQUFVLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxZQUFZLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxLQUFLLGlCQUFpQixNQUFNLHVCQUF1QixNQUFNLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxXQUFXLGlCQUFpQixLQUFLLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLGVBQWUsS0FBSyxhQUFhLGlCQUFpQixNQUFNLGdCQUFnQixPQUFPLG1CQUFtQixNQUFNLFlBQVksY0FBYyxjQUFjLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLGFBQWEsb0JBQW9CLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksY0FBYyxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxhQUFhLFlBQVksVUFBVSxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsa0JBQWtCLE9BQU8sYUFBYSxhQUFhLFdBQVcsaUJBQWlCLE9BQU8sV0FBVyxZQUFZLFdBQVcsYUFBYSxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsVUFBVSxhQUFhLGtCQUFrQixPQUFPLFdBQVcsY0FBYyxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxnQkFBZ0IsTUFBTSxLQUFLLHFCQUFxQixLQUFLLEtBQUssZUFBZSxLQUFLLGVBQWUsTUFBTSxlQUFlLE1BQU0sZUFBZSxNQUFNLGVBQWUsS0FBSyxlQUFlLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsYUFBYSxjQUFjLGNBQWMseUJBQXlCLEtBQUssS0FBSyxVQUFVLGVBQWUsS0FBSyxpQkFBaUIsTUFBTSxlQUFlLEtBQUssZUFBZSxLQUFLLGVBQWUsS0FBSyxlQUFlLE1BQU0sZUFBZSxRQUFRLHNCQUFzQixLQUFLLEtBQUsscUJBQXFCLE1BQU0sZ1dBQWdXLHNCQUFzQiwyQ0FBMkMsV0FBVyw4SkFBOEosY0FBYywwQ0FBMEMsMkNBQTJDLGNBQWMsZUFBZSxpQ0FBaUMsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsc0pBQXNKLHNCQUFzQixxQkFBcUIsdUJBQXVCLGlCQUFpQixpQ0FBaUMsb0JBQW9CLGVBQWUsMEJBQTBCLGVBQWUsR0FBRyxRQUFRLDZCQUE2Qiw4QkFBOEIsR0FBRyxRQUFRLHVCQUF1QixnQkFBZ0IsNkJBQTZCLHlCQUF5QixHQUFHLFFBQVEsdUJBQXVCLHNDQUFzQyx1QkFBdUIsNkJBQTZCLDZCQUE2Qix1QkFBdUIsR0FBRyxvTkFBb04sNEJBQTRCLHNCQUFzQiw4QkFBOEIsV0FBVyx1SkFBdUosc0NBQXNDLDJCQUEyQixXQUFXLHlMQUF5TCxrQ0FBa0MsR0FBRywwSkFBMEosd0JBQXdCLHVDQUF1Qyw4Q0FBOEMsV0FBVyx5RkFBeUYsd0JBQXdCLEdBQUcscUtBQXFLLHNDQUFzQywyQkFBMkIsV0FBVyxzRUFBc0UsbUJBQW1CLEdBQUcsb0hBQW9ILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxxTEFBcUwsdUJBQXVCLEdBQUcsNFBBQTRQLHlCQUF5Qiw0QkFBNEIsOEJBQThCLHNCQUFzQixXQUFXLCtGQUErRiw4QkFBOEIsR0FBRyxvS0FBb0ssaUNBQWlDLEdBQUcseUpBQXlKLCtCQUErQixHQUFHLCtNQUErTSx1QkFBdUIsZUFBZSxHQUFHLHdNQUF3TSxtQ0FBbUMsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsd1FBQXdRLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLFdBQVcsZ0dBQWdHLDZCQUE2QixHQUFHLCtFQUErRSxtQkFBbUIsR0FBRyx3SUFBd0ksMkJBQTJCLHVCQUF1QixXQUFXLHdMQUF3TCxpQkFBaUIsR0FBRyx1SUFBdUksa0NBQWtDLGlDQUFpQyxXQUFXLDBIQUEwSCw2QkFBNkIsR0FBRyw2S0FBNkssK0JBQStCLDBCQUEwQixXQUFXLHNMQUFzTCxtQkFBbUIsR0FBRyxxRUFBcUUsdUJBQXVCLEdBQUcsOEpBQThKLGtCQUFrQixHQUFHLDZFQUE2RSx3QkFBd0Isb0JBQW9CLHFCQUFxQixxQkFBcUIsc0JBQXNCLDZCQUE2QixzQkFBc0Isc0JBQXNCLHFCQUFxQixxQkFBcUIsb0JBQW9CLDZCQUE2QixhQUFhLGtCQUFrQixHQUFHLGtDQUFrQyxpQ0FBaUMsMkJBQTJCLDRCQUE0Qix1QkFBdUIsaUJBQWlCLHVCQUF1QixzQkFBc0IsMkJBQTJCLDZDQUE2QyxpREFBaUQsc0NBQXNDLHlCQUF5QixrQ0FBa0MseUNBQXlDLCtCQUErQixzQ0FBc0MsR0FBRywwQkFBMEIsc0JBQXNCLGtDQUFrQyx5Q0FBeUMsK0JBQStCLHNDQUFzQyxHQUFHLGlDQUFpQyxxQkFBcUIsZ0NBQWdDLEdBQUcsNEJBQTRCLHFCQUFxQix1REFBdUQsR0FBRyx3Q0FBd0Msa0JBQWtCLG9CQUFvQixHQUFHLDRCQUE0QixxQkFBcUIsZ0RBQWdELEdBQUcsMEJBQTBCLDRCQUE0QixzQ0FBc0MsdUJBQXVCLG9DQUFvQyxHQUFHLGFBQWEsa0JBQWtCLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGtDQUFrQyxrQkFBa0Isd0JBQXdCLDRDQUE0Qyx1QkFBdUIsK0NBQStDLEdBQUcseUJBQXlCLGdDQUFnQyxpQkFBaUIsZ0JBQWdCLCtCQUErQix3QkFBd0IsR0FBRyxnQkFBZ0IsaUJBQWlCLHFCQUFxQixtQkFBbUIsd0JBQXdCLHVCQUF1QixnQ0FBZ0MsNkJBQTZCLHdCQUF3QixLQUFLLG1CQUFtQixzQ0FBc0Msb0JBQW9CLG9DQUFvQyxtQkFBbUIsZ0NBQWdDLEdBQUcsaUJBQWlCLHVCQUF1QixlQUFlLEdBQUcsYUFBYSxrQkFBa0Isd0JBQXdCLHNCQUFzQixtQkFBbUIsZ0JBQWdCLG9CQUFvQiwwQ0FBMEMsZUFBZSxHQUFHLGFBQWEsa0JBQWtCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsZ0RBQWdELFFBQVEsa0VBQWtFLEdBQUcsVUFBVSxzQ0FBc0Msd0JBQXdCLGlCQUFpQixxQkFBcUIsZ0JBQWdCLEdBQUcsYUFBYSx1Q0FBdUMsdUNBQXVDLDRDQUE0QyxrQkFBa0Isd0JBQXdCLDJDQUEyQyw0QkFBNEIsOEJBQThCLGdCQUFnQix1QkFBdUIsR0FBRyxtQkFBbUIsNENBQTRDLG9JQUFvSSxxQ0FBcUMsaUJBQWlCLGlEQUFpRCwrQkFBK0IsMkNBQTJDLG9CQUFvQixpQkFBaUIsa0JBQWtCLHlCQUF5QixzQkFBc0IseUJBQXlCLGdCQUFnQixlQUFlLDhDQUE4QywyQkFBMkIsS0FBSyxlQUFlLDhDQUE4QyxLQUFLLHNCQUFzQixpQ0FBaUMsc0JBQXNCLHdCQUF3Qix3QkFBd0IsS0FBSyw0QkFBNEIscUJBQXFCLDJCQUEyQixLQUFLLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLGlCQUFpQiw0Q0FBNEMscUNBQXFDLEdBQUcsY0FBYyx3QkFBd0IsOENBQThDLGlCQUFpQixvQkFBb0Isa0JBQWtCLDJCQUEyQixtQkFBbUIscUJBQXFCLDRCQUE0QixlQUFlLGtCQUFrQix1QkFBdUIseUJBQXlCLGVBQWUsZUFBZSw2QkFBNkIsc0JBQXNCLHFDQUFxQywyQkFBMkIsS0FBSyxXQUFXLHVCQUF1QixzQkFBc0IsdUJBQXVCLEtBQUssR0FBRyxtQkFBbUIsNENBQTRDLEdBQUcsa0JBQWtCLGtCQUFrQiw2QkFBNkIsR0FBRyxvQkFBb0Isb0dBQW9HLGdCQUFnQixxQkFBcUIsZ0JBQWdCLG9CQUFvQixZQUFZLEdBQUcsdUNBQXVDLHVCQUF1QixlQUFlLEdBQUcsNkNBQTZDLGlCQUFpQixnQkFBZ0IsR0FBRyx3QkFBd0Isa0JBQWtCLHFCQUFxQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxZQUFZLDRCQUE0QixrQkFBa0IsNEJBQTRCLHVCQUF1QixvQkFBb0IsYUFBYSxlQUFlLHFCQUFxQixHQUFHLFdBQVcsNEJBQTRCLGtCQUFrQix1QkFBdUIsR0FBRyxRQUFRLDBCQUEwQixxQkFBcUIsR0FBRyxXQUFXLHVCQUF1QixhQUFhLGNBQWMsZUFBZSxrQkFBa0IsaUVBQWlFLHdDQUF3QyxnQkFBZ0IsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQiwwQkFBMEIsa0JBQWtCLGVBQWUsMkJBQTJCLHdCQUF3QixvQ0FBb0MsbUJBQW1CLHNDQUFzQyxtQ0FBbUMsa0JBQWtCLHNDQUFzQywyQ0FBMkMsc0NBQXNDLG1CQUFtQixLQUFLLEdBQUcsY0FBYyxpQkFBaUIsR0FBRywwQkFBMEIsdUJBQXVCLGdCQUFnQiwwQkFBMEIsa0JBQWtCLGVBQWUsd0JBQXdCLG9DQUFvQyxnQkFBZ0Isa0NBQWtDLGtCQUFrQixpQ0FBaUMsS0FBSyxrQkFBa0Isc0NBQXNDLG1EQUFtRCwrREFBK0Qsc0NBQXNDLEtBQUssbUJBQW1CLHNDQUFzQywyQ0FBMkMsS0FBSyxHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQ0FBb0MsaUNBQWlDLEdBQUcsOEJBQThCLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsa0JBQWtCLDRCQUE0QixzQ0FBc0MsZ0NBQWdDLGtDQUFrQyxHQUFHLGdCQUFnQixPQUFPLHlCQUF5QixjQUFjLGlCQUFpQix5QkFBeUIsOENBQThDLHVCQUF1QixpQkFBaUIsZ0JBQWdCLGlCQUFpQix5QkFBeUIsS0FBSyxvQkFBb0IseUJBQXlCLGVBQWUsa0JBQWtCLHFCQUFxQixzQkFBc0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsc0JBQXNCLGlDQUFpQyxxQkFBcUIseUJBQXlCLHFCQUFxQixrQkFBa0IseUJBQXlCLHlCQUF5QixxQkFBcUIsNEJBQTRCLHlCQUF5QixpQkFBaUIsdUJBQXVCLG1DQUFtQyxvQkFBb0IseUJBQXlCLGNBQWMsZ0JBQWdCLDRDQUE0QyxxQkFBcUIsc0JBQXNCLDRDQUE0QyxpQkFBaUIsb0RBQW9ELE9BQU8sS0FBSyxjQUFjLHNCQUFzQixpQkFBaUIsZUFBZSxnQ0FBZ0Msb0JBQW9CLHlCQUF5QixpQkFBaUIsZ0JBQWdCLDRCQUE0QixxQkFBcUIsc0JBQXNCLDRDQUE0QyxpQkFBaUIsb0RBQW9ELE9BQU8sS0FBSyxLQUFLLDRDQUE0QyxpQkFBaUIseUJBQXlCLEdBQUcsOEJBQThCLG9CQUFvQixrQkFBa0IseUJBQXlCLGdCQUFnQixHQUFHLDJCQUEyQiw2Q0FBNkMseUJBQXlCLEdBQUcscUJBQXFCLGdCQUFnQixvQkFBb0IscUJBQXFCLG1CQUFtQixvQkFBb0IsU0FBUyxzQkFBc0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLEtBQUsscUVBQXFFLGlEQUFpRCxlQUFlLDZCQUE2QixrREFBa0Qsb0NBQW9DLDZCQUE2QixPQUFPLFdBQVcsK0JBQStCLHdCQUF3Qix1Q0FBdUMsNkJBQTZCLHlCQUF5QixtQkFBbUIsU0FBUyxLQUFLLEdBQUcsMEJBQTBCLGlCQUFpQixvQkFBb0Isc0JBQXNCLG1CQUFtQixvQkFBb0IsU0FBUyxzQkFBc0Isc0JBQXNCLHdCQUF3QixpQkFBaUIsS0FBSywyRUFBMkUsNkNBQTZDLE9BQU8sZUFBZSxpQkFBaUIsa0RBQWtELG9DQUFvQyw2QkFBNkIsT0FBTyxXQUFXLCtCQUErQix3QkFBd0IsdUNBQXVDLDZCQUE2Qix5QkFBeUIsbUJBQW1CLE9BQU8sT0FBTyxHQUFHLDZCQUE2QixpQ0FBaUMsaUNBQWlDLDJCQUEyQix1QkFBdUIsa0JBQWtCLHlCQUF5QixnQkFBZ0Isb0JBQW9CLEdBQUcsMkJBQTJCLHdCQUF3QixrQkFBa0Isa0JBQWtCLDRCQUE0Qix1QkFBdUIsb0JBQW9CLEdBQUcsV0FBVyw0QkFBNEIsaUJBQWlCLHFCQUFxQixtQkFBbUIsZ0JBQWdCLGdCQUFnQix1QkFBdUIsdUJBQXVCLGNBQWMseUJBQXlCLEdBQUcsYUFBYSxrQ0FBa0MsY0FBYyx1QkFBdUIsaUJBQWlCLG9CQUFvQiwrQkFBK0Isb0JBQW9CLHNCQUFzQiwrQkFBK0IsR0FBRyw4QkFBOEIscUJBQXFCLEdBQUcsbUJBQW1CLGlCQUFpQixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLHdDQUF3QyxHQUFHLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGtDQUFrQyxHQUFHLHNCQUFzQixvQkFBb0Isb0JBQW9CLHNDQUFzQyxrQ0FBa0MsNEJBQTRCLDZCQUE2Qix5Q0FBeUMsdUJBQXVCLHVDQUF1QyxHQUFHLHFCQUFxQixRQUFRLHdCQUF3QixVQUFVLDBCQUEwQixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLGtCQUFrQixrQkFBa0IscUJBQXFCLHFCQUFxQixxQkFBcUIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGVBQWUsR0FBRyxtQkFBbUIsdUJBQXVCLGdCQUFnQixHQUFHLGtCQUFrQixtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLDJCQUEyQixzQkFBc0Isc0NBQXNDLHdCQUF3QixvQ0FBb0Msa0JBQWtCLGdCQUFnQixjQUFjLHVCQUF1Qix5QkFBeUIsb0JBQW9CLGVBQWUsYUFBYSxlQUFlLGtCQUFrQixVQUFVLHdCQUF3Qix5QkFBeUIsS0FBSyxTQUFTLHNCQUFzQixLQUFLLFVBQVUsdUJBQXVCLEtBQUssR0FBRyxzQkFBc0Isc0JBQXNCLG1DQUFtQyx1QkFBdUIsdUJBQXVCLG9CQUFvQixvQkFBb0IscUJBQXFCLDJCQUEyQixvQkFBb0IseUJBQXlCLEdBQUcsNEJBQTRCLGdDQUFnQyx5QkFBeUIsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQixtQ0FBbUMsaUJBQWlCLG9CQUFvQixjQUFjLGdCQUFnQix1QkFBdUIsbUNBQW1DLEdBQUcsa0JBQWtCLDZCQUE2QiwwQ0FBMEMsZ0JBQWdCLFdBQVcsZ0JBQWdCLG1CQUFtQixVQUFVLGVBQWUsZ0JBQWdCLEdBQUcsY0FBYyxvQkFBb0Isa0NBQWtDLDJCQUEyQixhQUFhLGdCQUFnQixlQUFlLGtCQUFrQiwyQkFBMkIsMEJBQTBCLG9CQUFvQix5QkFBeUIsY0FBYyxnQkFBZ0IsaUNBQWlDLHFCQUFxQixzQkFBc0IsNENBQTRDLGlCQUFpQixvREFBb0QsT0FBTyxLQUFLLDJCQUEyQix5QkFBeUIseUJBQXlCLGVBQWUsaUJBQWlCLGtCQUFrQixxQkFBcUIsdUJBQXVCLG9FQUFvRSxVQUFVLHlCQUF5QixpQ0FBaUMscUJBQXFCLG9DQUFvQyxLQUFLLCtCQUErQixvQkFBb0IsOEJBQThCLGtCQUFrQix3Q0FBd0MsNEJBQTRCLHNCQUFzQixpQkFBaUIsaUJBQWlCLHdDQUF3Qyx1Q0FBdUMscUJBQXFCLHdDQUF3QyxHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLGtCQUFrQixhQUFhLEdBQUcsaURBQWlELFlBQVksa0JBQWtCLEtBQUssR0FBRyxnREFBZ0QsWUFBWSxlQUFlLEtBQUssY0FBYyxVQUFVLHNCQUFzQixPQUFPLGlCQUFpQix1QkFBdUIsT0FBTyx5QkFBeUIsdUJBQXVCLE9BQU8sS0FBSyxjQUFjLG1CQUFtQixLQUFLLHVCQUF1QixvQkFBb0IsS0FBSyxvQkFBb0IsY0FBYyxlQUFlLG1CQUFtQix1QkFBdUIseUJBQXlCLGVBQWUsb0JBQW9CLHFCQUFxQiw2QkFBNkIsT0FBTyxPQUFPLEdBQUcsK0NBQStDLFlBQVksa0JBQWtCLG1CQUFtQixLQUFLLFVBQVUsMkNBQTJDLEtBQUssNkJBQTZCLG9CQUFvQixhQUFhLDJCQUEyQixLQUFLLGtCQUFrQixrQkFBa0IsS0FBSyx3QkFBd0Isc0JBQXNCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLHNGQUFzRixzQkFBc0IsS0FBSyxHQUFHLCtDQUErQyxZQUFZLGtCQUFrQixLQUFLLEdBQUcscUJBQXFCO0FBQzltMEQ7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDL0JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDMURyQjtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1Asd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLHVEQUF1RCxNQUFNO0FBQzdEOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxNQUFNO0FBQzdELEM7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUM1RixZQUFzSTs7QUFFdEk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7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QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxFQUFFLHNEQUFRO0FBQ1YsMEJBQTBCLGNBQWMsTUFBTSxVQUFVO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLElBQUksb0RBQVU7QUFDZCxJQUFJLG9EQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQWU7QUFDdEM7QUFDQTtBQUNBLHdCQUF3QixLQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVU7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsb0RBQVU7QUFDWjs7Ozs7Ozs7Ozs7OztBQ3pPQTtBQUFBO0FBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtDQUFNO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIG1hcmdpbjogMCU7XFxuICBwYWRkaW5nOiAwLjUlIDAuNyUgMCU7XFxuICB3aWR0aDogNzAlOyB9XFxuXFxuaDIge1xcbiAgY29sb3I6ICM4NEM4QTQ7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4OyB9XFxuXFxuaDMge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBoZWlnaHQ6IDE3JTtcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuaDQge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50OyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG4ubG9naW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDQ1dmg7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggI0M0RUI2NzsgfVxcblxcbi53ZWxjb21lLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiAxMTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XFxuXFxuLndlbGNvbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4udXNlci1pY29uIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMjBweCBhdXRvOyB9XFxuXFxuLnVzZXItaW5wdXQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMCUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICBoZWlnaHQ6IDklOyB9XFxuXFxuLmZpbHRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmhvbWUtYnRuLWFwcGxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuaDEge1xcbiAgYmFja2dyb3VuZDogI0M0RUI2NztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuc3BhbiB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uaGVhZGVyLWFwcGxlLWljb24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiAzNXB4OyB9XFxuXFxuI3NlYXJjaCB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggIzQ3NWQ3NDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmRjY2E7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHdoaXRlKSwgY29sb3Itc3RvcCgxLCAjZTFlMWUxKSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0O1xcbiAgY29sb3I6ICM1Qjc4OTQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gICNzZWFyY2gtaW5wdXQ6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuICAjc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlOyB9XFxuICAjc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjNUI3ODk0O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTsgfVxcbiAgI3NlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXNpemU6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7IH1cXG5cXG4ubmF2LWJ0biB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzVCNzg5NCBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIHdpZHRoOiAxNSU7IH1cXG4gIC5uYXYtYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6ICNDNEVCNjc7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTsgfVxcbiAgLm5hdi1idG4gaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAycHggMHB4OyB9XFxuXFxuLnN0cm9rZS1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjQzRFQjY3OyB9XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIG1hcmdpbjogMSUgMCU7XFxuICBwYWRkaW5nOiAxcHggNnB4IDVweCAwcHg7IH1cXG5cXG4uYmFubmVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogOSU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIsXFxuLndlbGNvbWUtbXNnIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIgaDEsXFxuLndlbGNvbWUtbXNnIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyNCU7XFxuICB3aWR0aDogMTUlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xJTsgfVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNSU7XFxuICBsZWZ0OiAxNSU7XFxuICB3aWR0aDogODUlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNDAwcHgsIGF1dG8pO1xcbiAgei1pbmRleDogLTE7IH1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSByb3RhdGVZKDBkZWcpIHNjYWxlWSgxKTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBlYXNlOyB9XFxuICAucmVjaXBlLWNhcmQgLmNhcmQtZnJvbnQge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKSByb3RhdGVZKDBkZWcpIHNjYWxlWSgxKTsgfVxcbiAgLnJlY2lwZS1jYXJkIC5jYXJkLWJhY2sge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKSByb3RhdGVZKDE4MGRlZyk7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7XFxuICAgIHotaW5kZXg6IDEwMDsgfVxcblxcbi5vdmVybGFwIHtcXG4gIHotaW5kZXg6IDEwMDsgfVxcblxcbi5yZWNpcGUtY2FyZC1hY3RpdmUge1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBlYXNlO1xcbiAgei1pbmRleDogOTk7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICAucmVjaXBlLWNhcmQtYWN0aXZlIC5mbGlwLWNhcmQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbiAgLnJlY2lwZS1jYXJkLWFjdGl2ZSAuY2FyZC1iYWNrIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDIpIHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGUoNTAlLCAyNSUpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrOyB9XFxuICAucmVjaXBlLWNhcmQtYWN0aXZlIC5jYXJkLWZyb250IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMikgdHJhbnNsYXRlWSgyNSUpOyB9XFxuXFxuLmZsaXAtY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjZzIGVhc2U7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyB9XFxuXFxuLmNhcmQtZnJvbnQsXFxuLmNhcmQtYmFjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG5cXG4uY2FyZC1iYWNrIHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1JTtcXG4gIGhlaWdodDogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHBlcnNwZWN0aXZlKDFweCk7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgaGVpZ2h0OiAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzM1OTU2NzsgfVxcblxcbi5jYXJkLWJhY2sgLmluZ3JlZGllbnRzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTAlO1xcbiAgaGVpZ2h0OiA0NSU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IC45O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrOyB9XFxuXFxuLmNhcmQtYmFjayAuaW5zdHJ1Y3Rpb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiA4NSU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XFxuICBtYXJnaW46IC0yMCUgMCAwIDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjazsgfVxcblxcbi5jYXJkLWJhY2sgI2V4aXQtcmVjaXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICByaWdodDogNSU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHJvdGF0ZSgtMTIwZGVnKTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzM1OTU2NztcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5jYXJkLWJhY2sgI2V4aXQtcmVjaXBlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzg0QzhBNDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYXJkLWJhY2sgYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMSU7XFxuICBsZWZ0OiA1JTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNyk7IH1cXG5cXG4uY2FyZC1iYWNrICNjb29rZWQtcmVjaXBlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMCU7XFxuICByaWdodDogNSU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmNhcmQtYmFjayAjY29va2VkLXJlY2lwZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM4NEM4QTQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBvcGFjaXR5OiA1MCU7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciAudGV4dCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciBoMyB7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI0M0RUI2NztcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLnRvLWNvb2stYnV0dG9uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZy10b3A6IDglO1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzg0QzhBNDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC50by1jb29rLWJ1dHRvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTglO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAudG8tY29vay1idXR0b24gLnRvLWNvb2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYwODAwO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAudG8tY29vay1idXR0b246aG92ZXIgI2ljb24tZmF2LCAudG8tY29vay1idXR0b246aG92ZXIgI2ljb24tY29vayB7XFxuICAgIGJhY2tncm91bmQ6ICNhNDAwMDA7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG4gIC50by1jb29rLWJ1dHRvbjpob3ZlciBwIHtcXG4gICAgY29sb3I6ICNhNDAwMDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgbWFyZ2luLXRvcDogLTEyJTtcXG4gICAgb3BhY2l0eTogMTsgfVxcblxcbi5mYXZvcml0ZS1idXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZy10b3A6IDglO1xcbiAgcGFkZGluZy1yaWdodDogMiU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM4NEM4QTQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZmF2b3JpdGUtYnV0dG9uIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IC01JTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIC5mYXZvcml0ZS1idXR0b24gLmZhdm9yaXRlZCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjA4MDA7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5mYXZvcml0ZS1idXR0b246aG92ZXIgI2ljb24tZmF2IHtcXG4gICAgYmFja2dyb3VuZDogI2E0MDAwMDtcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTsgfVxcbiAgLmZhdm9yaXRlLWJ1dHRvbjpob3ZlciBwIHtcXG4gICAgY29sb3I6ICNhNDAwMDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgbWFyZ2luLXRvcDogLTEyJTtcXG4gICAgb3BhY2l0eTogMTsgfVxcblxcbi5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTk1Njc7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyB9XFxuXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4uc2hvdy1hbGwtYnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cXG4uZmlsdGVyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRDOEE0OyB9XFxuXFxuLmxvZ2luLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG5cXG4ubG9hZC1hbmltYXRpb24ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luLXRvcDogMjUlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMjVweCBzb2xpZCAjREFFNEVFO1xcbiAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkICMzNTk1Njc7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gNXMgbGluZWFyIGluZmluaXRlOyB9XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogOTJweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgei1pbmRleDogMzsgfVxcblxcbi5kcm9wLW1lbnUgaDIge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBtYXJnaW46IDBweDsgfVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4ucmVjaXBlLWluc3RydWN0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBibGFjaztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG4gIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIGg0IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiAjMzU5NTY3OyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyBwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuICAucmVjaXBlLWluc3RydWN0aW9ucyBvbCB7XFxuICAgIG1hcmdpbi1yaWdodDogMiU7IH1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMzNTk1Njc7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogIzM1OTU2NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7IH1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcblxcbiNyZWNpcGUtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjazsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLnBhbnRyeSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrO1xcbiAgdG9wOiAyNSU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IDEuNnMgZWFzZTsgfVxcbiAgLnBhbnRyeSAjZXhpdC1wYW50cnkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMCU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMzNTk1Njc7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnBhbnRyeSAjZXhpdC1wYW50cnk6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICM4NEM4QTQ7XFxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLnBhbnRyeSAucGFudHJ5LWluZ3JlZGllbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHRvcDogMTUlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEVCNjc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjaztcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuICAucGFudHJ5IGg0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAucGFudHJ5IC5hZGQtaW5ncmVkaWVudC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC5wYW50cnkgLmFkZC1pbmdyZWRpZW50LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogNSU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgLnBhbnRyeSAuZmluZC1yZWNpcGVzLXVzaW5nLXBhbnRyeS1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXFxuLnBhbnRyeS1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogMS42cyBlYXNlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogNTAlOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjg0cHgpIHtcXG4gIC5sb2dpbiB7XFxuICAgIHdpZHRoOiA0MHZ3OyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzJweCkge1xcbiAgbWFpbiB7XFxuICAgIGxlZnQ6IDUlOyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICBoZWFkZXIgLmZpbHRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICBoZWFkZXIgLmhvbWUtYnRuLWFwcGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5sb2dpbiB7XFxuICAgIGhlaWdodDogNDV2aDsgfVxcbiAgLnJlY2lwZS1maWx0ZXJzIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmZpbHRlci1kcm9wIHtcXG4gICAgdG9wOiA5JTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4OyB9XFxuICAgIC5maWx0ZXItZHJvcCAud3JhcCB7XFxuICAgICAgd2lkdGg6IDExMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0M0RUI2NztcXG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjazsgfSB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNDV2aDsgfVxcbiAgbWFpbiB7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNDAwcHgsIDYwMHB4KTsgfVxcbiAgLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDsgfVxcbiAgICAuY2FyZC1waG90by1jb250YWluZXIgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5yZWNpcGUtY2FyZCB7XFxuICAgIGhlaWdodDogOTAlOyB9XFxuICAuZmF2b3JpdGUtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjUlOyB9XFxuICAudG8tY29vay1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7IH1cXG4gIC5uYW1lLWluZ3JlZGllbnQtZm9ybSxcXG4gIC5xdWFudGl0eS1pbmdyZWRpZW50LWZvcm0sXFxuICAuYWRkLWluZ3JlZGllbnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAuNWVtOyB9IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyOHB4KSB7XFxuICAubG9naW4ge1xcbiAgICB3aWR0aDogODB2dzsgfSB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fbm9ybWFsaXplLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19iYW5uZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fc2lkZWJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZWNpcGUtZGlzcGxheS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvYWRpbmcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcGFudHJ5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3JlY2lwZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZXNwb25zaXZlbmVzcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUFBO0FBRUE7K0VDQStFO0FERy9FOzs7RUNDRTtBRElGO0VBQ0UsaUJBQWlCO0VBQUUsTUFBQTtFQUNuQiw4QkFBOEI7RUFBRSxNQUFBLEVBQU87O0FBR3pDOytFQ0QrRTtBREkvRTs7RUNERTtBREtGO0VBQ0UsU0FBUztFQUNULHlCRXhCMEI7RUZ5QjFCLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLDRCQUE0QixFQUFBOztBQUc5Qjs7RUNIRTtBRE9GO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7O0VDSkU7QURTRjtFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdDRXRDMEM7RUZ1QzFDLGVBQWU7RUFDZixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGNFdER1QjtFRnVEdkIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsY0UxRGtCO0VGMkRsQixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG9CQUFvQixFQUFBOztBQUd0QjtF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R0UsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0U7SUFDRSxXQUFXLEVBQUEsRUFDWjs7QVoxRUg7RUFDRSxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIC8vIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICRhY2NlbnQtc2Vjb25kYXJ5O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgaGVpZ2h0OiAxNyU7XFxuICBtYXJnaW46IDVweCA1cHggMTBweCAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG59XFxuXFxuaDQge1xcbiAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1wcmltYXJ5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJub3JtYWxpemVcXFwiO1xcbkBpbXBvcnQgXFxcImxvZ2luXFxcIjtcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcbkBpbXBvcnQgXFxcImJhbm5lclxcXCI7XFxuQGltcG9ydCBcXFwic2lkZWJhclxcXCI7XFxuQGltcG9ydCBcXFwicmVjaXBlLWRpc3BsYXlcXFwiO1xcbkBpbXBvcnQgXFxcImJ1dHRvbnNcXFwiO1xcbkBpbXBvcnQgXFxcImxvYWRpbmdcXFwiO1xcbkBpbXBvcnQgXFxcInBhbnRyeVxcXCI7XFxuQGltcG9ydCBcXFwicmVjaXBlXFxcIjtcXG5AaW1wb3J0IFxcXCJtb2RhbFxcXCI7XFxuQGltcG9ydCBcXFwicmVzcG9uc2l2ZW5lc3NcXFwiO1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCIkcHJpbWFyeS1iYWNrZ3JvdW5kOiAjNUI3ODk0O1xcbiRzZWNvbmRhcnktYmFja2dyb3VuZDogI2I2ZGNjYTtcXG4kYWNjZW50LXByaW1hcnk6ICNDNEVCNjc7XFxuJGFjY2VudC1zZWNvbmRhcnk6Izg0QzhBNDtcXG4kZGFyay1ncmVlbjogIzM1OTU2NztcXG4kZ3JleTogI0RBRTRFRTtcXG4kYm94LXNoYWRvdzogIzQ3NWQ3NDtcXG4kYXBwbGUtcmVkOiAjZmYwODAwO1xcbiRkYXJrLWFwcGxlLXJlZDogI2E0MDAwMDtcXG5cXG4kcHJpbWFyeS1mb250OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4kc2Vjb25kYXJ5LWZvbnQ6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5AbWl4aW4gdHJhbnNwYXJlbnRUZXh0KCRiZ0NvbG9yKSB7XFxuICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtbW96LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbkBtaXhpbiBsaWdodGVuVGV4dCgpIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQG1peGluIGNlbnRlckhvcml6b250YWxseSgpIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbkBtaXhpbiBjYXJkVW5mbGlwcGVkKCkge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpIHJvdGF0ZVkoMGRlZykgc2NhbGVZKDEpO1xcbn1cXG5cXG5AbWl4aW4gZGVmaW5lU2l6ZSgkd2lkdGgsICRoZWlnaHQpIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxufVxcblxcbkBtaXhpbiBkaXNwbGF5UmVjaXBlKCkge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcblxcbkBtaXhpbiBjYXJkU3R5bGluZygpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcbiAgYm9yZGVyOiAycHggc29saWQgJGFjY2VudC1wcmltYXJ5O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDJweCBibGFjaztcXG59XFxuXCIsXCIubG9naW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDQ1dmg7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggJGFjY2VudC1wcmltYXJ5O1xcbn1cXG5cXG4ud2VsY29tZS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtcHJpbWFyeTtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiAxMTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5cXG4ud2VsY29tZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNjUpO1xcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG5cXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQod2hpdGUpXFxufVxcblxcblxcblxcbi51c2VyLWljb24ge1xcbiAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KGJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMjBweCBhdXRvO1xcbn1cXG5cXG4udXNlci1pbnB1dCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cIixcImhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMCUgMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxuICBoZWlnaHQ6IDklO1xcbn1cXG5cXG4uZmlsdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob21lLWJ0bi1hcHBsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1wcmltYXJ5KVxcbn1cXG5cXG5oMSB7XFxuICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1wcmltYXJ5KVxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuc3BhbiB7XFxuICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQod2hpdGUpXFxufVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAkYWNjZW50LXByaW1hcnk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggJGJveC1zaGFkb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoIGxpbmVhcixsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiKDI1NSwgMjU1LCAyNTUpKSwgY29sb3Itc3RvcCgxLCByZ2IoMjI1LDIyNSwyMjUpKSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggLTFweCAyMHB4IDFweCAjNWM3ODk0O1xcbiAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIH1cXG5cXG4gICY6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAwcHggd2hpdGU7XFxuICB9XFxuXFxuICAmOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gICY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICRhY2NlbnQtcHJpbWFyeTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktYmFja2dyb3VuZCBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIHdpZHRoOiAxNSU7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICRhY2NlbnQtcHJpbWFyeTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAycHggMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3Ryb2tlLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhY2NlbnQtcHJpbWFyeTtcXG59XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIG1hcmdpbjogMSUgMCU7XFxuICBwYWRkaW5nOiAxcHggNnB4IDVweCAwcHg7XFxufVxcblwiLFwiLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNSksIHJnYmEoMCwwLDAsLjUpKSx1cmwoXFxcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXFxcIik7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogOSU7XFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lcixcXG4ud2VsY29tZS1tc2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXCIsXCJhc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMjQlO1xcbiAgd2lkdGg6IDE1JTtcXG4gIG1hcmdpbi1sZWZ0OiAtMSU7XFxufVxcblxcbi53cmFwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsXCJtYWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMTUlO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDQwMHB4LCBhdXRvKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDg1JTtcXG4gIEBpbmNsdWRlIGNhcmRVbmZsaXBwZWQ7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNnMgZWFzZTtcXG5cXG4gIC5jYXJkLWZyb250IHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgQGluY2x1ZGUgY2FyZFVuZmxpcHBlZCgpXFxuICB9XFxuXFxuICAuY2FyZC1iYWNrIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgcm90YXRlWSgxODBkZWcpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMnB4IGJsYWNrO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICB9XFxufVxcblxcbi5vdmVybGFwIHtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWFjdGl2ZSAge1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS42cyBlYXNlO1xcbiAgei1pbmRleDogOTk7XFxuICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG5cXG4gIC5mbGlwLWNhcmQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gIH1cXG5cXG4gIC5jYXJkLWJhY2sge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMikgcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZSg1MCUsIDI1JSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggYmxhY2s7XFxuICB9XFxuXFxuICAuY2FyZC1mcm9udCB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDIpIHRyYW5zbGF0ZVkoMjUlKTtcXG4gIH1cXG59XFxuXFxuLmZsaXAtY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjZzIGVhc2U7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4uY2FyZC1mcm9udCxcXG4uY2FyZC1iYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmV5O1xcbiAgYm9yZGVyOiAycHggc29saWQgJGFjY2VudC1wcmltYXJ5O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxufVxcblxcbi5jYXJkLWJhY2sge1xcbiAgcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA1JTtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNSkgIHBlcnNwZWN0aXZlKDFweCk7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGhlaWdodDogMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgfVxcblxcbiAgLmluZ3JlZGllbnRzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmb250LXNpemU6IC44ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC41KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogLjk7XFxuICAgIEBpbmNsdWRlIGNhcmRTdHlsaW5nKClcXG4gIH1cXG5cXG4gIC5pbnN0cnVjdGlvbnMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSguNSk7XFxuICAgIG1hcmdpbjogLTIwJSAwIDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgQGluY2x1ZGUgY2FyZFN0eWxpbmcoKVxcblxcbiAgfVxcblxcbiAgI2V4aXQtcmVjaXBlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAlO1xcbiAgICByaWdodDogNSU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC41KSByb3RhdGUoLTEyMGRlZyk7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkZGFyay1ncmVlbik7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYWNjZW50LXNlY29uZGFyeSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAxJTtcXG4gICAgbGVmdDogNSU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC43KVxcbiAgfVxcbiAgI2Nvb2tlZC1yZWNpcGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIHJpZ2h0OiA1JTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGRhcmstZ3JlZW4pO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICB9XFxuICB9XFxuXFxufVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciBoMyB7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGFjY2VudC1wcmltYXJ5O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbi50by1jb29rLWJ1dHRvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctdG9wOiA4JTtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIHAge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IC01JTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xOCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuXFxuICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1zZWNvbmRhcnkpXFxuXFxuXFxuICAudG8tY29vayB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRhcHBsZS1yZWQpXFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgI2ljb24tZmF2LCAjaWNvbi1jb29rIHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGRhcmstYXBwbGUtcmVkKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgY29sb3I6ICRkYXJrLWFwcGxlLXJlZDtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICAgIG1hcmdpbi10b3A6IC0xMiU7XFxuICAgICAgb3BhY2l0eTogMTtcXG5cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG5cXG4uZmF2b3JpdGUtYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmctdG9wOiA4JTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNSU7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcblxcbiAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1zZWNvbmRhcnkpXFxuXFxuXFxuICAgIC5mYXZvcml0ZWQge1xcbiAgICAgIEBpbmNsdWRlIHRyYW5zcGFyZW50VGV4dCgkYXBwbGUtcmVkKTtcXG4gICAgfVxcblxcbiAgJjpob3ZlciB7XFxuICAgICNpY29uLWZhdiB7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNwYXJlbnRUZXh0KCRkYXJrLWFwcGxlLXJlZCk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgICAgIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIGNvbG9yOiAkZGFyay1hcHBsZS1yZWQ7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCBibGFjaztcXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gICAgICBtYXJnaW4tdG9wOiAtMTIlO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gIH1cXG59XFxuXFxuXFxuXFxuLmNhcmQtcGhvdG8tcHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAkZGFyay1ncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDBweDtcXG4gIG9wYWNpdHk6IDAlO1xcbiAgcGFkZGluZzogMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMCU7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG59XFxuXCIsXCJidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JlZW47XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxufVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2hvdy1hbGwtYnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5maWx0ZXItYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtc2Vjb25kYXJ5O1xcbn1cXG5cXG4ubG9naW4tYnRuIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxufVxcblwiLFwiLmxvYWQtYW5pbWF0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbi10b3A6IDI1JTtcXG4gIEBpbmNsdWRlIGRlZmluZVNpemUoMjAwcHgsIDIwMHB4KTtcXG4gIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDI1cHggc29saWQgJGdyZXk7XFxuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgJGRhcmstZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKX1cXG59XFxuXCIsXCIuZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDkycHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5kcm9wLW1lbnUgaDIge1xcbiAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLFwiLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAkYWNjZW50LXByaW1hcnk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBibGFjaztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDEwMDA7XFxuXFxuICBoNCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICB9XFxuXFxuICBwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbiAgfVxcblxcbiAgb2wge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgfVxcbn1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICRkYXJrLWdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcXG59XFxuXFxuI2V4aXQtcmVjaXBlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAkYWNjZW50LXByaW1hcnk7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcXG59XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrO1xcbn1cXG5cXG5cXG5cXG4jb3ZlcmxheSB7XFxuICBmaWx0ZXI6YWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgaGVpZ2h0OjEwMCU7XFxuICBsZWZ0OjA7XFxuICBvcGFjaXR5OjAuNTtcXG4gIHBvc2l0aW9uOmZpeGVkO1xcbiAgdG9wOjA7XFxuICB3aWR0aDoxMDAlO1xcbiAgei1pbmRleDoxMDA7XFxufVxcblwiLFwiLnBhbnRyeSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gIEBpbmNsdWRlIGNhcmRTdHlsaW5nKCk7XFxuICB0b3A6IDI1JTtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNpdGlvbjogMS42cyBlYXNlO1xcblxcbiAgI2V4aXQtcGFudHJ5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAlO1xcbiAgICByaWdodDogMiU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGRhcmstZ3JlZW4pO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBAaW5jbHVkZSB0cmFuc3BhcmVudFRleHQoJGFjY2VudC1zZWNvbmRhcnkpO1xcbiAgICB9XFxuICB9XFxuXFxuICAucGFudHJ5LWluZ3JlZGllbnRzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHRvcDogMTUlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIEBpbmNsdWRlIGNhcmRTdHlsaW5nKClcXG4gICAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KClcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLmFkZC1pbmdyZWRpZW50LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpXFxuICB9XFxuXFxuICAuYWRkLWluZ3JlZGllbnQtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiA1JTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KClcXG4gIH1cXG5cXG4gIC5maW5kLXJlY2lwZXMtdXNpbmctcGFudHJ5LWJ0biAge1xcbiAgICBtYXJnaW4tdG9wOiAyJTtcXG4gICAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KClcXG4gIH1cXG59XFxuXFxuLnBhbnRyeS1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogMS42cyBlYXNlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogNTAlO1xcbn1cXG5cIixcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4NHB4KSB7XFxuICAubG9naW4ge1xcbiAgICB3aWR0aDogNDB2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDcycHgpIHtcXG5cXG4gIG1haW4ge1xcbiAgICBsZWZ0OiA1JTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGgxIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5maWx0ZXIge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5ob21lLWJ0bi1hcHBsZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5sb2dpbiB7XFxuICAgIGhlaWdodDogNDV2aDtcXG4gIH1cXG5cXG4gIC5yZWNpcGUtZmlsdGVycyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuZmlsdGVyLWRyb3Age1xcbiAgICB0b3A6IDklO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuXFxuICAgIC53cmFwIHtcXG4gICAgICB3aWR0aDogMTEwJTtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgQGluY2x1ZGUgY2FyZFN0eWxpbmc7XFxuICAgIH1cXG5cXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNDV2aDtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDQwMHB4LCA2MDBweCk7XFxuICB9XFxuXFxuICAuY2FyZC1waG90by1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcblxcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMTAwJVxcbiAgICB9XFxuICB9XFxuICAucmVjaXBlLWNhcmQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gIH1cXG5cXG4gIC5mYXZvcml0ZS1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxuICB9XFxuXFxuICAudG8tY29vay1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxuICB9XFxuXFxuICAubmFtZS1pbmdyZWRpZW50LWZvcm0sXFxuICAucXVhbnRpdHktaW5ncmVkaWVudC1mb3JtLFxcbiAgLmFkZC1pbmdyZWRpZW50LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjhweCkge1xcbiAgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3RvcihwYW50cnksIHVzZXJJRCkge1xuICAgIHRoaXMucGFudHJ5ID0gdGhpcy5jb21waWxlU2FtZUluZ3JlZGllbnRzKHBhbnRyeSk7XG4gICAgdGhpcy51c2VySUQgPSB1c2VySUQ7XG4gIH0gXG5cbiAgY29tcGlsZVNhbWVJbmdyZWRpZW50cyhwYW50cnkpIHtcbiAgICBjb25zdCB1bmlxdWVQYW50cnlJdGVtcyA9IHBhbnRyeS5yZWR1Y2UoKGFjYywgcGFudHJ5SXRlbSkgPT4ge1xuICAgICAgaWYgKGFjY1twYW50cnlJdGVtLmluZ3JlZGllbnRdKSB7XG4gICAgICAgIGFjY1twYW50cnlJdGVtLmluZ3JlZGllbnRdLmFtb3VudCArPSBwYXJzZUludChwYW50cnlJdGVtLmFtb3VudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2NbcGFudHJ5SXRlbS5pbmdyZWRpZW50XSA9XG4gICAgICAgIHtcbiAgICAgICAgICBpZDogcGFudHJ5SXRlbS5pbmdyZWRpZW50LFxuICAgICAgICAgIGFtb3VudDogcGFyc2VJbnQocGFudHJ5SXRlbS5hbW91bnQpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwge30pO1xuICAgIHJldHVybiB1bmlxdWVQYW50cnlJdGVtc1xuICB9XG5cbiAgY29tcGFyZUluZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nID0gW11cbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmICghdGhpcy5wYW50cnlbaW5ncmVkaWVudC5pZF0pIHtcbiAgICAgICAgbWlzc2luZy5wdXNoKHtcbiAgICAgICAgICAnbWlzc2luZyc6IGluZ3JlZGllbnQubmFtZSwgXG4gICAgICAgICAgJ2Ftb3VudE5lZWRlZCc6IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIFxuICAgICAgKHRoaXMucGFudHJ5W2luZ3JlZGllbnQuaWRdLmFtb3VudCA8IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSB7XG4gICAgICAgIG1pc3NpbmcucHVzaCh7XG4gICAgICAgICAgJ21pc3NpbmcnOiBpbmdyZWRpZW50Lm5hbWUsIFxuICAgICAgICAgICdhbW91bnROZWVkZWQnOiBcbiAgICAgICAgICAoaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgLSB0aGlzLnBhbnRyeVtpbmdyZWRpZW50LmlkXS5hbW91bnQpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIG1pc3NpbmcgIFxuICB9XG5cbiAgcmVtb3ZlSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gICAgbGV0IGFwaVVwZGF0ZSA9IFtdO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKHRoaXMucGFudHJ5W2luZ3JlZGllbnQuaWRdKSB7XG4gICAgICAgIHRoaXMucGFudHJ5W2luZ3JlZGllbnQuaWRdLmFtb3VudCAtPSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudDtcbiAgICAgICAgYXBpVXBkYXRlLnB1c2goe1xuICAgICAgICAgIHVzZXJJRDogdGhpcy51c2VySUQsIFxuICAgICAgICAgIGluZ3JlZGllbnRJRDogaW5ncmVkaWVudC5pZCwgXG4gICAgICAgICAgaW5ncmVkaWVudE1vZGlmaWNhdGlvbjogLWluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFwaVVwZGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbnRyeTsgIiwiLy8gdXNlIGdldCB0byBncmFiIHdoYXRldmVyIGRhdGFUeXBlICh1c2Vycy9pbmdyZWRpZW50cy9yZWNpcGVzKVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoZGF0YVR5cGUsIGxvY2FsQXJyYXkpIHtcbiAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvJHtkYXRhVHlwZX1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhQXJyYXkgPT4ge1xuICAgICAgZGF0YUFycmF5LmZvckVhY2goZGF0YU9iamVjdCA9PiB7XG4gICAgICAgIGxvY2FsQXJyYXkucHVzaChkYXRhT2JqZWN0KVxuICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChgU29ycnksIHRoZXJlIGlzIGFuIGVycm9yOiAke2Vycm9yfWApKVxufVxuXG4vLyB1c2UgcG9zdCB0byBtb2RpZnkgaW5ncmVkaWVudHMgXG5leHBvcnQgZnVuY3Rpb24gcG9zdERhdGEodXNlcklkLCBpbmdyZWRpZW50SWQsIGFtb3VudCkge1xuICBjb25zdCBhbW91bnROdW0gPSBwYXJzZUludChhbW91bnQpXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXG4gICAgICB1c2VySUQ6IHVzZXJJZCwgXG4gICAgICBpbmdyZWRpZW50SUQ6IGluZ3JlZGllbnRJZCwgXG4gICAgICBpbmdyZWRpZW50TW9kaWZpY2F0aW9uOiBhbW91bnROdW1cbiAgICB9KVxuICB9XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzJywgc2V0dGluZ3MpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChgU29ycnksIHRoZXJlIGlzIGFuIGVycm9yOiAke2Vycm9yfWApKVxufSIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJsZXQgaW5ncmVkaWVudHNEYXRhID0gW1xuICB7XG4gICAgXCJpZFwiOiAyMDA4MSxcbiAgICBcIm5hbWVcIjogXCJ3aGVhdCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MzcyLFxuICAgIFwibmFtZVwiOiBcImJpY2FyYm9uYXRlIG9mIHNvZGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTIzLFxuICAgIFwibmFtZVwiOiBcImVnZ3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ3MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMzNSxcbiAgICBcIm5hbWVcIjogXCJzdWNyb3NlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkyMDYsXG4gICAgXCJuYW1lXCI6IFwiaW5zdGFudCB2YW5pbGxhIHB1ZGRpbmdcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMzNCxcbiAgICBcIm5hbWVcIjogXCJicm93biBzdWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDcsXG4gICAgXCJuYW1lXCI6IFwic2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjgwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgXCJuYW1lXCI6IFwiZmluZSBzZWEgc2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTI4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5OTAzLFxuICAgIFwibmFtZVwiOiBcInNlbWkgc3dlZXQgY2hpcHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ1LFxuICAgIFwibmFtZVwiOiBcInVuc2FsdGVkIGJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNTAsXG4gICAgXCJuYW1lXCI6IFwidmFuaWxsYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDkwMTYsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGUgY2lkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDAzLFxuICAgIFwibmFtZVwiOiBcImFwcGxlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMjcsXG4gICAgXCJuYW1lXCI6IFwiY29ybiBzdGFyY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgIFwibmFtZVwiOiBcImRpam9uIHN0eWxlIG11c3RhcmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTIxNSxcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBnYXJsaWMgY2xvdmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDQ2LFxuICAgIFwibmFtZVwiOiBcIndob2xlIGdyYWluIGRpam9uIG11c3RhcmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTkxMSxcbiAgICBcIm5hbWVcIjogXCJtYXBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MTEyLFxuICAgIFwibmFtZVwiOiBcIm1pc29cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMDA2MixcbiAgICBcIm5hbWVcIjogXCJwb3JrIGNob3BcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgIFwibmFtZVwiOiBcInMmcFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTI0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MTI0LFxuICAgIFwibmFtZVwiOiBcInNveSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgXCJuYW1lXCI6IFwic3JpcmFjaGEgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgIFwibmFtZVwiOiBcImJsYWNrIHBlcHBlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEsXG4gICAgXCJuYW1lXCI6IFwiYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDU4MixcbiAgICBcIm5hbWVcIjogXCJvaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDMxLFxuICAgIFwibmFtZVwiOiBcInJlZCBwZXBwZXIgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTEwMCxcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIHdpbmdcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDA5LFxuICAgIFwibmFtZVwiOiBcInJlZCBjaGlsaSBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgIFwibmFtZVwiOiBcImdhcmxpYyBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTY4LFxuICAgIFwibmFtZVwiOiBcInRhYmFzY28gc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTc2LFxuICAgIFwibmFtZVwiOiBcIm1hbmdvZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDI2LFxuICAgIFwibmFtZVwiOiBcIm9uaW9uIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNDIwNDcsXG4gICAgXCJuYW1lXCI6IFwic2Vhc29uZWQgc2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MzcxLFxuICAgIFwibmFtZVwiOiBcImJha2luZyBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDQwLFxuICAgIFwibmFtZVwiOiBcInJpcGUgYmFuYW5hXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMTEsXG4gICAgXCJuYW1lXCI6IFwiYnVjayB3aGVhdCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMzAsXG4gICAgXCJuYW1lXCI6IFwiYnV0dGVybWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzczXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5Mjk2LFxuICAgIFwibmFtZVwiOiBcInJ1bm55IGhvbmV5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwOTgsXG4gICAgXCJuYW1lXCI6IFwicGVhbnV0IGJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDgsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGUgY2lkZXIgdmluZWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTMyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDkwLFxuICAgIFwibmFtZVwiOiBcImJyb3duIHJpY2UgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5Mzc4NCxcbiAgICBcIm5hbWVcIjogXCJicm93biByaWNlIHN5cnVwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNCxcbiAgICBcIm5hbWVcIjogXCJlZ2cgYWxidW1lblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjI1LFxuICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgY2FuZSBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMjIwLFxuICAgIFwibmFtZVwiOiBcImZsYXggbWVhbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTE4Mzc1LFxuICAgIFwibmFtZVwiOiBcImluc3RhbnQgeWVhc3RcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMwNCxcbiAgICBcIm5hbWVcIjogXCJ1bnN1bGZ1cmVkIG1vbGFzc2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0MTMsXG4gICAgXCJuYW1lXCI6IFwiUG90YXRvIFN0YXJjaCBGbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjk2LFxuICAgIFwibmFtZVwiOiBcInRhcGlvY2Egc3RhcmNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM3NjAsXG4gICAgXCJuYW1lXCI6IFwiV2hvbGUgR3JhaW4gVGVmZiBGbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTM5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0NDEyLFxuICAgIFwibmFtZVwiOiBcImljZSB3YXRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjI2LFxuICAgIFwibmFtZVwiOiBcInhhbnRoYW4gZ3VtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzNTAsXG4gICAgXCJuYW1lXCI6IFwiY29ybiBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwOTksXG4gICAgXCJuYW1lXCI6IFwiZnJ1aXQgY29ja3RhaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjA2MSxcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBhbG1vbmRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDI5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTA0LFxuICAgIFwibmFtZVwiOiBcImNvY29udXRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkxOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjExNSxcbiAgICBcIm5hbWVcIjogXCJjb2NvbnV0IGNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDA0NyxcbiAgICBcIm5hbWVcIjogXCJjb2NvbnV0IG9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5MDcxLFxuICAgIFwibmFtZVwiOiBcImRhcmsgY2hvY29sYXRlIG1vcnNlbHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MjEyLFxuICAgIFwibmFtZVwiOiBcImdyYW5vbGEgY2VyZWFsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODEyMSxcbiAgICBcIm5hbWVcIjogXCJvYXRtZWFsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNDIsXG4gICAgXCJuYW1lXCI6IFwicGVjYW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMxNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5Mzc0MCxcbiAgICBcIm5hbWVcIjogXCJibGFuY2hlZCBhbG1vbmQgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI1LFxuICAgIFwibmFtZVwiOiBcImVnZyB5b2xrc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODg5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMDIzLFxuICAgIFwibmFtZVwiOiBcInNlc2FtZSBzZWVkc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTUwNjIsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiB0ZW5kZXJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTExMDksXG4gICAgXCJuYW1lXCI6IFwic2xhdyBtaXhcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICBcIm5hbWVcIjogXCJjcmVhbXkgcGVhbnV0IGJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNjQsXG4gICAgXCJuYW1lXCI6IFwibWludFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTc1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjEsXG4gICAgXCJuYW1lXCI6IFwicG93ZGVyZWQgZ2luZ2VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE2MCxcbiAgICBcIm5hbWVcIjogXCJqdWljZSBvZiBsaW1lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NzdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTI2NixcbiAgICBcIm5hbWVcIjogXCJwaW5lYXBwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTEzNSxcbiAgICBcIm5hbWVcIjogXCJjYXVsaWZsb3dlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNzIsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiBzdG9ja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDU0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjMyLFxuICAgIFwibmFtZVwiOiBcImdoZWVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjEyMCxcbiAgICBcIm5hbWVcIjogXCJoYXplbG51dFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjkwLFxuICAgIFwibmFtZVwiOiBcIm51dHJpdGlvbmFsIHllYXN0IGZsYWtlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjgyLFxuICAgIFwibmFtZVwiOiBcIm9uaW9uc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDM5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEwMTIzLFxuICAgIFwibmFtZVwiOiBcInByb3NjdWl0dG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTA5NixcbiAgICBcIm5hbWVcIjogXCJyYXBpbmlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTUwLFxuICAgIFwibmFtZVwiOiBcImJhciBiIHF1ZSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxOTQsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiBicm90aFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTgzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjI3LFxuICAgIFwibmFtZVwiOiBcImxpcXVpZCBzbW9rZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjgsXG4gICAgXCJuYW1lXCI6IFwicGFwcmlrYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDcyLFxuICAgIFwibmFtZVwiOiBcInBvcmsgc2hvdWxkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2OTcxLFxuICAgIFwibmFtZVwiOiBcIndvcmNlc3RlcnNoaXJlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYwNyxcbiAgICBcIm5hbWVcIjogXCJhbG1vbmRtaWxrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTg5NDIsXG4gICAgXCJuYW1lXCI6IFwiZ3JhaGFtIGNyYWNrZXIgY3J1c3RcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgIFwibmFtZVwiOiBcImdyb3VuZCBjaW5uYW1vblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjUsXG4gICAgXCJuYW1lXCI6IFwibnV0bWVnIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDgwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQzMjc0LFxuICAgIFwibmFtZVwiOiBcImxvdyBmYXQgY3JlYW0gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDQ4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgxMjAsXG4gICAgXCJuYW1lXCI6IFwid2hvbGUgZ3JhaW4gcm9sbGVkIG9hdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDI0LFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCBwdW1wa2luXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAxNixcbiAgICBcIm5hbWVcIjogXCJhcHBsZSBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzEwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MDQ3LFxuICAgIFwibmFtZVwiOiBcInJhaXNpbiBicmVhZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjIyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwODkwMDMsXG4gICAgXCJuYW1lXCI6IFwiZ3Jhbm55c21pdGggYXBwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDc3LFxuICAgIFwibmFtZVwiOiBcImZ1bGwtZmF0IG1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5NyxcbiAgICBcIm5hbWVcIjogXCJmbGF0IGxlYWYgcGFyc2xleSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzMjAwOSxcbiAgICBcIm5hbWVcIjogXCJkcmllZCByZWQgY2hpbGlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTUxNTIsXG4gICAgXCJuYW1lXCI6IFwianVtYm8gc2hyaW1wXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOTQsXG4gICAgXCJuYW1lXCI6IFwidmlkYWxpYSBvbmlvblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDA3LFxuICAgIFwibmFtZVwiOiBcImFydGljaG9rZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTUwLFxuICAgIFwibmFtZVwiOiBcImxlbW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE1NixcbiAgICBcIm5hbWVcIjogXCJsZW1vbiBwZWVsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgwNjksXG4gICAgXCJuYW1lXCI6IFwiZ2x1dGVuLWZyZWUgd2hpdGUgc2FuZHdpY2ggYnJlYWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDMzLFxuICAgIFwibmFtZVwiOiBcInBhcm1lc2FuIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzk4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjcsXG4gICAgXCJuYW1lXCI6IFwib3JlZ2Fub1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzQwNTMsXG4gICAgXCJuYW1lXCI6IFwiZXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDQsXG4gICAgXCJuYW1lXCI6IFwiYmF5IGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzg1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzM2LFxuICAgIFwibmFtZVwiOiBcInBvd2RlcmVkIHN1Z2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExNDMsXG4gICAgXCJuYW1lXCI6IFwiY2VsZXJ5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOSxcbiAgICBcIm5hbWVcIjogXCJoYXJkY29va2VkIGVnZ3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0NjQxLFxuICAgIFwibmFtZVwiOiBcInJlZHVjZWQgZmF0IG1heW9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY5N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMjU2LFxuICAgIFwibmFtZVwiOiBcInNraW0gZ3JlZWsgeW9ndXJ0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNjNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5NDQsXG4gICAgXCJuYW1lXCI6IFwiaG90ZG9nIHJlbGlzaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzkxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgIFwibmFtZVwiOiBcInJlZCBvbmlvblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjM4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMzUzLFxuICAgIFwibmFtZVwiOiBcImlkYWhvIHBvdGF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjExODIxLFxuICAgIFwibmFtZVwiOiBcImJlbGwgcGVwcGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAwNDgsXG4gICAgXCJuYW1lXCI6IFwiYnJvd24gbWludXRlIHJpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzY1MSxcbiAgICBcIm5hbWVcIjogXCJpdGFsaWFuIGNoZWVzZSBibGVuZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjMzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDc5MjcsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgaXRhbGlhbiB0dXJrZXkgc2F1c2FnZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjE2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNTQ5LFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCB0b21hdG8gc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDEyOSxcbiAgICBcIm5hbWVcIjogXCJicmVhZCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTMsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MDUzLFxuICAgIFwibmFtZVwiOiBcInB1cmUgb2xpdmUgb2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTk5MTIsXG4gICAgXCJuYW1lXCI6IFwiYWdhdmUgc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDA4MCxcbiAgICBcIm5hbWVcIjogXCJwYXN0cnkgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxOTMzNCxcbiAgICBcIm5hbWVcIjogXCJkYXJrIGJyb3duIHN1Z2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM4MTQsXG4gICAgXCJuYW1lXCI6IFwibGlnaHRseSBzd2VldGVuZWQgd2hpcHBlZCBjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyMDYsXG4gICAgXCJuYW1lXCI6IFwiY3VjdW1iZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI2MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAzNSxcbiAgICBcIm5hbWVcIjogXCJxdWlub2FcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUxNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTUyOSxcbiAgICBcIm5hbWVcIjogXCJoZWlybG9vbSB0b21hdG9lc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzIxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MjQyLFxuICAgIFwibmFtZVwiOiBcImNyYW5iZXJyeSBqdWljZSBjb2NrdGFpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MTMwLFxuICAgIFwibmFtZVwiOiBcImNyZWFtIHNvZGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTE3NyxcbiAgICBcIm5hbWVcIjogXCJnZWxhdGluZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzY0NSxcbiAgICBcIm5hbWVcIjogXCJoYWxsb3dlZW4gc3ByaW5rbGVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQwNTEsXG4gICAgXCJuYW1lXCI6IFwiZ3JleSBnb29zZSB2b2RrYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzczXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTQsXG4gICAgXCJuYW1lXCI6IFwid2hpcHBlZCBjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjg5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzODI4LFxuICAgIFwibmFtZVwiOiBcIm1hcmluYXRlZCBhcnRpY2hva2UgaGVhcnRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNjYsXG4gICAgXCJuYW1lXCI6IFwiY3JpbWluaSBtdXNocm9vbXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDE3LFxuICAgIFwibmFtZVwiOiBcImNyZWFtIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTU1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTksXG4gICAgXCJuYW1lXCI6IFwiZmV0YVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIyMDI3LFxuICAgIFwibmFtZVwiOiBcIm1peGVkIGl0YWxpYW4gaGVyYnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgIFwibmFtZVwiOiBcImtvc2hlciBzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTE0NTcsXG4gICAgXCJuYW1lXCI6IFwic3BpbmFjaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDQsXG4gICAgXCJuYW1lXCI6IFwiYmFzaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA3MDM2LFxuICAgIFwibmFtZVwiOiBcIml0YWxpYW4gc2F1c2FnZSBsaW5rc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMTU0OSxcbiAgICBcIm5hbWVcIjogXCJtYXJpbmFyYSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTcxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzgsXG4gICAgXCJuYW1lXCI6IFwicGVjb3Jpbm8gcm9tYW5vIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEzMDQsXG4gICAgXCJuYW1lXCI6IFwicGVhc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNjc3LFxuICAgIFwibmFtZVwiOiBcInNoYWxsb3RzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2OTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwMjA0MjAsXG4gICAgXCJuYW1lXCI6IFwicGFzdGEgc2hlbGxzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTAyNixcbiAgICBcIm5hbWVcIjogXCJzaHJlZGRlZCBtb3p6YXJlbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxODRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MzAsXG4gICAgXCJuYW1lXCI6IFwic2tpbSBtaWxrIHJpY290dGEgY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQxMDYsXG4gICAgXCJuYW1lXCI6IFwid2hpdGUgd2luZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjc1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDYzLFxuICAgIFwibmFtZVwiOiBcImZyb3plbiBzcGluYWNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyNSxcbiAgICBcIm5hbWVcIjogXCJwZXBwZXJqYWNrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTQ2MjMsXG4gICAgXCJuYW1lXCI6IFwiYmxhY2tiZXJyeSBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjU2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzMDIsXG4gICAgXCJuYW1lXCI6IFwicmFzcGJlcnJ5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM1NCxcbiAgICBcIm5hbWVcIjogXCJwaW5lYXBwbGUgd2l0aCBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwNzAsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgY2hlcnJpZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE4NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDE4MSxcbiAgICBcIm5hbWVcIjogXCJjaG9jb2xhdGUgc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxODYxNyxcbiAgICBcIm5hbWVcIjogXCJncmFoYW0gY3JhY2tlciBjcnVtYnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjEzNSxcbiAgICBcIm5hbWVcIjogXCJudXRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAzNyxcbiAgICBcIm5hbWVcIjogXCJoYWFzIGF2b2NhZG9zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwNTcsXG4gICAgXCJuYW1lXCI6IFwiZ2FyYmFuem9zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ1LFxuICAgIFwibmFtZVwiOiBcImRpbGx3ZWVkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTI1NixcbiAgICBcIm5hbWVcIjogXCJncmVlayB5b2d1cnRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTUyLFxuICAgIFwibmFtZVwiOiBcImxlbW9uIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOTEsXG4gICAgXCJuYW1lXCI6IFwic3ByaW5nIG9uaW9uc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTIzNixcbiAgICBcIm5hbWVcIjogXCJwZWFjaGVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkwOTUsXG4gICAgXCJuYW1lXCI6IFwiaWNlY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDg2MixcbiAgICBcIm5hbWVcIjogXCJjb29rZWQgYmFjb24gc3RyaXBzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTExNCxcbiAgICBcIm5hbWVcIjogXCJyb2FzdGVkIGNoaWNrZW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTMzMyxcbiAgICBcIm5hbWVcIjogXCJncmVlbiBwZXBwZXJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyNixcbiAgICBcIm5hbWVcIjogXCJmcmVzaCBtb3p6YXJlbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTE1MjksXG4gICAgXCJuYW1lXCI6IFwiaXRhbGlhbiB0b21hdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMDA5LFxuICAgIFwibmFtZVwiOiBcIndoaXRlIGNoZWRkYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwOVxuICB9LFxuICB7XG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg5OTgsXG4gICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgZ2xhemVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MDMwLFxuICAgIFwibmFtZVwiOiBcImZydWl0IGxvb3BzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOTFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkxMTYsXG4gICAgXCJuYW1lXCI6IFwibWFyc2htYWxsb3dcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjE1OCxcbiAgICBcIm5hbWVcIjogXCJodW1tdXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ2LFxuICAgIFwibmFtZVwiOiBcInByZXBhcmVkIHllbGxvdyBtdXN0YXJkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNCxcbiAgICBcIm5hbWVcIjogXCJldmFwb3JhdGVkIG1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkyMTQsXG4gICAgXCJuYW1lXCI6IFwib3JhbmdlIGp1aWNlIGNvbmNlbnRyYXRlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTIxNixcbiAgICBcIm5hbWVcIjogXCJvcmFuZ2UgcGVlbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIzLFxuICAgIFwibmFtZVwiOiBcImJhY29uIHNsaWNlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODE3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDUyLFxuICAgIFwibmFtZVwiOiBcInN0cmluZyBiZWFuc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTAyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExOTU5LFxuICAgIFwibmFtZVwiOiBcImJhYnkgYXJ1Z3VsYSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDA0LFxuICAgIFwibmFtZVwiOiBcImJsdWUgY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NDZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTI1MixcbiAgICBcIm5hbWVcIjogXCJwZWFyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDM0MDgsXG4gICAgXCJuYW1lXCI6IFwicGVhciBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTYzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDksXG4gICAgXCJuYW1lXCI6IFwiZnJlc2ggdGh5bWUgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNTUsXG4gICAgXCJuYW1lXCI6IFwid2FsbnV0IGhhbHZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExNjkzLFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCB0b21hdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE3MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTEyNCxcbiAgICBcIm5hbWVcIjogXCJjYXJyb3RzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAxMixcbiAgICBcIm5hbWVcIjogXCJjb3JpYW5kZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgXCJuYW1lXCI6IFwiY29taW5vXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5MTMsXG4gICAgXCJuYW1lXCI6IFwiZnJvemVuIGNvcm5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ3NyxcbiAgICBcIm5hbWVcIjogXCJ6dWNjaGluaSBzcXVhc2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIyMDQ0NSxcbiAgICBcIm5hbWVcIjogXCJzdGVhbWVkIHJpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMyxcbiAgICBcIm5hbWVcIjogXCJncm91bmQgYmFzaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE5OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjAxOCxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgYmxhY2sgYmVhbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5OTIyMyxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgY2hpcG90bGUgY2hpbGllcyBpbiBhZG9ib1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTY1LFxuICAgIFwibmFtZVwiOiBcImNpbGFudHJvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTgzNjQsXG4gICAgXCJuYW1lXCI6IFwiZmxvdXIgdG9ydGlsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDYxMTI4MixcbiAgICBcIm5hbWVcIjogXCJ3aGl0ZSBvbmlvbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ1NyxcbiAgICBcIm5hbWVcIjogXCJiYWJ5IHNwaW5hY2ggbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNjgsXG4gICAgXCJuYW1lXCI6IFwiZHJpZWQgc2hpaXRha2UgbXVzaHJvb21cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDAwNSxcbiAgICBcIm5hbWVcIjogXCJmYXJyb1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTExMjgyLFxuICAgIFwibmFtZVwiOiBcInllbGxvdyBvbmlvblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNjksXG4gICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgdmluZWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjUwLFxuICAgIFwibmFtZVwiOiBcImJvc3RvbiBiaWJiIGxldHR1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTU2LFxuICAgIFwibmFtZVwiOiBcImZyZXNoIGNoaXZlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDAyNSxcbiAgICBcIm5hbWVcIjogXCJtYXlvbm5haXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExMTksXG4gICAgXCJuYW1lXCI6IFwibmFwYSBjYWJiYWdlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDA5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTEyLFxuICAgIFwibmFtZVwiOiBcInJlZCBjYWJiYWdlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg5NjIsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgY2hpbGkgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0MixcbiAgICBcIm5hbWVcIjogXCJkcmllZCB0aHltZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMjAsXG4gICAgXCJuYW1lXCI6IFwiZ3JhbnVsYXRlZCBnYXJsaWNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMzU3MixcbiAgICBcIm5hbWVcIjogXCJncm91bmQgY2h1Y2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYwMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTI1MCxcbiAgICBcIm5hbWVcIjogXCJidXR0ZXJoZWFkIGxldHR1Y2UgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTA2NCxcbiAgICBcIm5hbWVcIjogXCJiYWtlZCBjaGlja2VuIGJyZWFzdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDE1LFxuICAgIFwibmFtZVwiOiBcImN1cnJ5IHNlYXNvbmluZ1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDkxNTksXG4gICAgXCJuYW1lXCI6IFwibGltZSBwZWVsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg5OTEsXG4gICAgXCJuYW1lXCI6IFwibWludCBjaHV0bmV5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTMxNixcbiAgICBcIm5hbWVcIjogXCJzdHJhd2JlcnJ5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwOTAsXG4gICAgXCJuYW1lXCI6IFwiYnJvY2NvbGkgY3Jvd25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTE4MjEsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgb3JhbmdlIHBlcHBlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjE4LFxuICAgIFwibmFtZVwiOiBcInBvcmsgdGVuZGVybG9pblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQ1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MTU3LFxuICAgIFwibmFtZVwiOiBcIm1pbmkgbSZtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg4NzEsXG4gICAgXCJuYW1lXCI6IFwiaGF3YWlpYW4gc3dlZXQgcm9sbHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDU1MDYyLFxuICAgIFwibmFtZVwiOiBcImJvbmVsZXNzIHNraW5sZXNzIGNoaWNrZW4gYnJlYXN0c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5MTUxLFxuICAgIFwibmFtZVwiOiBcInJlZXNlIHBpZWNlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzIxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNDEwMDksXG4gICAgXCJuYW1lXCI6IFwiY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTg0MTMsXG4gICAgXCJuYW1lXCI6IFwiZmxhdGJyZWFkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTE1MjksXG4gICAgXCJuYW1lXCI6IFwiZ3JhcGUgdG9tYXRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAxOSxcbiAgICBcIm5hbWVcIjogXCJ1bnN3ZWV0ZW5lZCBhcHBsZSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTU0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MDc5LFxuICAgIFwibmFtZVwiOiBcImRyeSBicmVhZGNydW1ic1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MDY5LFxuICAgIFwibmFtZVwiOiBcImxlZ3VtZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDc5LFxuICAgIFwibmFtZVwiOiBcImRyaWVkIGNyYW5iZXJyaWVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5MzUsXG4gICAgXCJuYW1lXCI6IFwiY2F0c3VwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNTEsXG4gICAgXCJuYW1lXCI6IFwicGlzdGFjaGlvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE4MjEsXG4gICAgXCJuYW1lXCI6IFwicmVkIHN3ZWV0IHBlcHBlcnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjYxNSxcbiAgICBcIm5hbWVcIjogXCJ2ZWdldGFibGUgc3RvY2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxM1xuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGluZ3JlZGllbnRzRGF0YTtcbiIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gICAgLy8gQ0hBTkdFIFRIRSBESVNQTEFZIE9GIEFOWSBBUkdTIFBBU1NFRCBJTiwgTVVTVCBQQVNTIElOIFtBUkdTXVxuICAgIHRvZ2dsZShhbnlBcnIpIHtcbiAgICAgICAgYW55QXJyLmZvckVhY2goYXJlYSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcmVhKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpKVxuICAgIH0sXG5cbiAgICAvLyBIRUxQRVIgRlVOQ1RJT04gVE8gSU5TRVJUSFRNTFxuICAgIGFkZERpc3BsYXkoYXJlYSwgd2hlcmUsIHdoYXQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcmVhKS5pbnNlcnRBZGphY2VudEhUTUwod2hlcmUsIHdoYXQpXG4gICAgfSxcblxuICAgIGNsZWFyRGlzcGxheShhcmVhKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFyZWEpLmlubmVySFRNTCA9ICcnXG4gICAgfSxcblxuICAgIC8vIENBUkQgRElTUExBWVxuICAgIGRpc3BsYXlDYXJkcyhyZWNpcGVMaXN0KSB7XG4gICAgICB0aGlzLmNsZWFyRGlzcGxheSgnbWFpbicpXG5cbiAgICAgIHJlY2lwZUxpc3QuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gJyc7XG4gICAgICAgIGxldCBpbmdyZWRpZW50cyA9ICcnO1xuICAgICAgICByZWNpcGUuaW5zdHJ1Y3Rpb25zLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgICAgICBpbnN0cnVjdGlvbnMgKz0gYDxsaT4ke3N0ZXAuaW5zdHJ1Y3Rpb259PC9saT48YnI+YFxuICAgICAgICB9KVxuICAgICAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICAgIGluZ3JlZGllbnRzICs9IGA8bGk+JHtpbmdyZWRpZW50Lm5hbWV9OiAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50fSR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fTwvbGk+PGJyPmBcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzaG9ydE5hbWUgPSByZWNpcGUubmFtZS5sZW5ndGggPiA0MFxuICAgICAgICA/IHJlY2lwZS5uYW1lLnN1YnN0cmluZygwLCA0MCkgKyBcIi4uLlwiXG4gICAgICAgIDogcmVjaXBlLm5hbWVcblxuICAgICAgICBjb25zdCBmYXZvcml0ZWRDbGFzcyA9IHJlY2lwZS5pc0Zhdm9yaXRlZCA/IFwiZmF2b3JpdGVkXCIgOiAnJ1xuICAgICAgICBjb25zdCB0b0Nvb2tDbGFzcyA9IHJlY2lwZS5pc1RvQ29vayA/IFwidG8tY29va1wiIDogJydcblxuICAgICAgICBjb25zdCBjYXJkSHRtbCA9IGA8ZGl2IGNsYXNzPVwicmVjaXBlLWNhcmRcIiBpZD0ke3JlY2lwZS5pZH0gbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZnJvbnRcIj5cbiAgICAgICAgICAgICAgPGgzIG1heGxlbmd0aD1cIjQwXCI+JHtzaG9ydE5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGhvdG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9JHtyZWNpcGUuaW1hZ2V9IGNsYXNzPVwiY2FyZC1waG90by1wcmV2aWV3XCIgaWQ9XCJpbWcxXCIgYWx0PVwiJHtyZWNpcGUubmFtZX0gcmVjaXBlXCIgdGl0bGU9XCIke3JlY2lwZS5uYW1lfSByZWNpcGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImltZzJcIj5DbGljayBmb3IgSW5zdHJ1Y3Rpb25zPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG8tY29vay1idXR0b25cIiBuYW1lPSR7cmVjaXBlLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpY29uLWNvb2tcIiBjbGFzcz0gJHt0b0Nvb2tDbGFzc30+8J+NvTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJpY29uLWNvb2stdGV4dFwiPlRvIENvb2s8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGUtYnV0dG9uXCIgbmFtZT0ke3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaWNvbi1mYXZcIiBjbGFzcz0ke2Zhdm9yaXRlZENsYXNzfT4mIzEyNzgyMjs8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGlkPVwiaWNvbi1mYXYtdGV4dFwiPkZhdm9yaXRlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYmFja1wiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhpdC1yZWNpcGVcIj7ipLg8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbnN0cnVjdGlvbnMtdGl0bGVcIj4ke3JlY2lwZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiaW5ncmVkaWVudHMgbWlzc2luZy0ke3JlY2lwZS5pZH1cIj5cbiAgICAgICAgICAgICAgPGgyPkluZ3JlZGllbnRzOjwvaDI+XG4gICAgICAgICAgICAgICR7aW5ncmVkaWVudHN9XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDxvbCBjbGFzcz1cImluc3RydWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoMj5JbnN0cnVjdGlvbnM6PC9oMj5cbiAgICAgICAgICAgICAgICAke2luc3RydWN0aW9uc31cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbXBhcmUtcmVjaXBlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cImNvbXBhcmUtcmVjaXBlXCI+Q2hlY2sgUGFudHJ5PzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29va2VkLXJlY2lwZVwiPiYjMTAwMDM7PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgICAgIHRoaXMuYWRkRGlzcGxheShcIm1haW5cIiwgXCJiZWZvcmVlbmRcIiwgY2FyZEh0bWwpXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBjYXBpdGFsaXplKHdvcmRzKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcbiAgICAgICAgfSkuam9pbihcIiBcIik7XG4gICAgICB9LFxuXG4gICAgbGlzdFRhZ3MoYWxsVGFncykge1xuICAgICAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgICAgICBjb25zdCB0YWdIdG1sID0gYDxsaT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIiR7dGFnfVwiPiR7dGhpcy5jYXBpdGFsaXplKHRhZyl9PC9sYWJlbD5cbiAgICAgICAgICA8L2xpPmA7XG4gICAgICAgICAgICB0aGlzLmFkZERpc3BsYXkoXCIudGFnLWxpc3RcIiwgXCJiZWZvcmVlbmRcIiwgdGFnSHRtbCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaG93VXNlclBhbnRyeSh1c2VyLCBpbmdyZWRpZW50cykge1xuICAgICAgY29uc3QgcGFudHJ5SXRlbUFycmF5ID0gT2JqZWN0LmtleXModXNlci5wYW50cnkucGFudHJ5KVxuICAgICAgcGFudHJ5SXRlbUFycmF5LmZvckVhY2gocGFudHJ5SXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnROYW1lID0gaW5ncmVkaWVudHMuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaWQgPT0gcGFudHJ5SXRlbSlcbiAgICAgICAgPyBpbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4gaW5ncmVkaWVudC5pZCA9PSBwYW50cnlJdGVtKS5uYW1lXG4gICAgICAgIDogYEl0ZW0gSUQ6ICR7dXNlci5wYW50cnkucGFudHJ5W3BhbnRyeUl0ZW1dLmlkfWBcbiAgICAgICAgY29uc3QgcGFudHJ5SXRlbUhUTUwgPSBgJHt1c2VyLnBhbnRyeS5wYW50cnlbcGFudHJ5SXRlbV0uYW1vdW50fSAtICR7aW5ncmVkaWVudE5hbWV9ICA8YnI+YFxuICAgICAgICB0aGlzLmFkZERpc3BsYXkoJy5wYW50cnktaW5ncmVkaWVudHMnLCAnYmVmb3JlZW5kJywgcGFudHJ5SXRlbUhUTUwpXG4gICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2hvd1JlY2lwZUNvbXBhcmlzb24obWlzc2luZ0xpc3QsIHRhcmdldFJlY2lwZSkge1xuICAgICAgY29uc3QgbWlzc2luZ0l0ZW1IdG1sID0gW1wiPGgyPk1pc3NpbmcgSW5ncmVkaWVudHMgZnJvbSBZb3VyIFBhbnRyeTo8L2gyPlwiXVxuICAgICAgbWlzc2luZ0xpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbWlzc2luZ0l0ZW1IdG1sLnB1c2goYDxsaT5cbiAgICAgICAgJHtpdGVtLmFtb3VudE5lZWRlZH0gLSAke2l0ZW0ubWlzc2luZ31cbiAgICAgICAgPC9saT5gKVxuICAgICAgfSlcbiAgICAgIHRoaXMuYWRkRGlzcGxheShgLm1pc3NpbmctJHt0YXJnZXRSZWNpcGUuaWR9YCwgJ2FmdGVyYmVnaW4nLCBtaXNzaW5nSXRlbUh0bWwuam9pbignJykpXG4gICAgfVxuXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY29va2Jvb2sucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BvdC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsImNsYXNzIEluZ3JlZGllbnQge1xuICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50LCByZWNpcGVJbmdyZWRpZW50RGF0YSkge1xuICAgIHRoaXMuaWQgPSBpbmdyZWRpZW50LmlkLFxuICAgIHRoaXMubmFtZSA9IGluZ3JlZGllbnQubmFtZSxcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyxcbiAgICB0aGlzLnF1YW50aXR5ID0gcmVjaXBlSW5ncmVkaWVudERhdGEucXVhbnRpdHlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmdyZWRpZW50O1xuIiwiaW1wb3J0IGluZ3JlZGllbnRzRGF0YSBmcm9tICcuL2RhdGEvaW5ncmVkaWVudC1kYXRhJ1xuLy8gV2lsbCBuZWVkIHRvIGltcG9ydCBmZXRjaGVkIGluZ3JlZGllbnQgZGF0YSBmcm9tIEFQSVxuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9pbmdyZWRpZW50JztcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50RGF0YSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gdGhpcy5pbnN0YW50aWF0ZUluZ3JlZGllbnRzKHJlY2lwZSwgaW5ncmVkaWVudHNEYXRhKTtcbiAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy5pc0Zhdm9yaXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNUb0Nvb2sgPSBmYWxzZTtcbiAgfVxuXG4gIGluc3RhbnRpYXRlSW5ncmVkaWVudHMocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChyZWNpcGVJbmdyZWRpZW50ID0+IHtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnRJbmZvID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09PSByZWNpcGVJbmdyZWRpZW50LmlkKTtcbiAgICAgIGlmIChpbmdyZWRpZW50SW5mbykge1xuICAgICAgICByZXR1cm4gbmV3IEluZ3JlZGllbnQoaW5ncmVkaWVudEluZm8sIHJlY2lwZUluZ3JlZGllbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlSW5ncmVkaWVudHNDb3N0KCkge1xuICAgIGNvbnN0IHRvdGFsQ29zdCA9IHRoaXMuaW5ncmVkaWVudHMucmVkdWNlKChzdW0sIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGxldCBpbmdyZWRpZW50Q29zdFBlclJlY2lwZSA9XG4gICAgICAoaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KTtcbiAgICAgIHN1bSArPSBpbmdyZWRpZW50Q29zdFBlclJlY2lwZTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKHRvdGFsQ29zdCAqIDAuMDEpLnRvRml4ZWQoMikpO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9ucztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2Vhc29uaW5nLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3BvdC5wbmcnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9yZWNpcGUnO1xuaW1wb3J0IHtnZXREYXRhLCBwb3N0RGF0YX0gZnJvbSAnLi9hcGlzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tLXVwZGF0ZXMnO1xuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9pbmdyZWRpZW50JztcblxubGV0IHVzZXJzID0gW107XG5sZXQgcmVjaXBlcyA9IFtdO1xubGV0IGluZ3JlZGllbnRzID0gW107XG5sZXQgdXNlcjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWRQYWdlKTtcblxuZnVuY3Rpb24gYWRkRXZlbnQoYXJlYSwgZXZlbnRUeXBlLCBmdW5jKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJlYSkuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmMpXG59XG5cbmFkZEV2ZW50KFwiaGVhZGVyXCIsIFwiY2xpY2tcIiwgbmF2Q2xpY2tzKVxuYWRkRXZlbnQoXCIubG9naW4tYnRuXCIsIFwiY2xpY2tcIiwgbG9naW4pIFxuYWRkRXZlbnQoXCIjc2VhcmNoXCIsIFwic3VibWl0XCIsIHByZXNzRW50ZXJTZWFyY2gpIFxuYWRkRXZlbnQoXCIucGFudHJ5XCIsIFwiY2xpY2tcIiwgcGFudHJ5Q2xpY2tzKVxuYWRkRXZlbnQoXCIuYWRkLWluZ3JlZGllbnQtZm9ybVwiLCBcInN1Ym1pdFwiLCBhZGRJbmdyZWRpZW50VG9QYW50cnkpXG5hZGRFdmVudChcIi5maWx0ZXItYnRuXCIsIFwiY2xpY2tcIiwgZGlzcGxheVRhZ2dlZFJlY2lwZXMpXG5hZGRFdmVudChcIm1haW5cIiwgXCJjbGlja1wiLCBtYWluQ2xpY2tzKVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgZ2V0RGF0YSgndXNlcnMnLCB1c2VycylcbiAgZ2V0RGF0YSgncmVjaXBlcycsIHJlY2lwZXMpXG4gIGdldERhdGEoJ2luZ3JlZGllbnRzJywgaW5ncmVkaWVudHMpXG59XG5cbmZ1bmN0aW9uIGxvZ2luKCkge1xuICB1cGRhdGVEYXRhVG9DbGFzc0luc3RhbmNlcygpXG4gIGNvbnN0IGxvZ2luSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnB1dCcpO1xuICBjb25zdCB1c2VyTG9nZ2luZ0luID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIubmFtZSA9PT0gbG9naW5JbnB1dC52YWx1ZSlcbiAgdXNlciA9IHVzZXJMb2dnaW5nSW5cbiAgZG9tVXBkYXRlcy50b2dnbGUoWycubG9naW4nLCAnLnBhZ2Utd3JhcHBlciddKVxuICBzaG93SG9tZSgpXG4gIGRpc3BsYXlUYWdzU2lkZUJhcigpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGFUb0NsYXNzSW5zdGFuY2VzKCkge1xuICB1c2VycyA9IHVzZXJzLm1hcCh1c2VyID0+IG5ldyBVc2VyKHVzZXIpKVxuICByZWNpcGVzID0gcmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlLCBpbmdyZWRpZW50cykpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYWdzU2lkZUJhcigpIHtcbiAgY29uc3QgYWxsVGFncyA9IHJlY2lwZXMuZmxhdE1hcChyZWNpcGUgPT4gcmVjaXBlLnRhZ3MpXG4gIGNvbnN0IHVuaXF1ZVRhZ3MgPSBuZXcgU2V0KGFsbFRhZ3MpXG4gIGNvbnN0IHNvcnRlZFVuaXF1ZVRhZ3MgPSBBcnJheS5mcm9tKHVuaXF1ZVRhZ3MpLnNvcnQoKVxuICBkb21VcGRhdGVzLmxpc3RUYWdzKHNvcnRlZFVuaXF1ZVRhZ3MpO1xufVxuZnVuY3Rpb24gbmF2Q2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpXG5cbiAgc3dpdGNoKHRhcmdldEJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XG4gICAgY2FzZSAnZmlsdGVyLWJ1dHRvbic6XG4gICAgICBzaG93RmlsdGVyTWVudSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdob21lLWJ1dHRvbic6XG4gICAgICBzaG93SG9tZSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICduYXYtc2VhcmNoLWJ1dHRvbic6XG4gICAgICBzZWFyY2hSZWNpcGVzKClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Zhdi1idXR0b24nOlxuICAgICAgZGlzcGxheUZhdm9yaXRlZFJlY2lwZXMoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGFudHJ5LWJ1dHRvbic6XG4gICAgICBkaXNwbGF5UGFudHJ5KClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvLWNvb2stYnV0dG9uJzpcbiAgICAgIGRpc3BsYXlUb0Nvb2tSZWNpcGVzKClcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dGaWx0ZXJNZW51KCkge1xuICBjb25zdCBmaWx0ZXJCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tZmlsdGVyJylcbiAgZmlsdGVyQmFyLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlci1kcm9wJylcbiAgZmlsdGVyQmFyLmNsYXNzTGlzdC50b2dnbGUoJ3JlY2lwZS1maWx0ZXJzJylcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWUoKSB7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHJlY2lwZXMpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaFJlY2lwZXMoKSB7XG4gIGNvbnN0IHVzZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykudmFsdWUudG9Mb3dlckNhc2UoKVxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1c2VyU2VhcmNoKTtcbiAgfSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHNlYXJjaFJlc3VsdHMpXG59XG5cbmZ1bmN0aW9uIHByZXNzRW50ZXJTZWFyY2goZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc2VhcmNoUmVjaXBlcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmF2b3JpdGVkUmVjaXBlcygpIHtcbiAgY29uc29sZS5sb2codXNlci5mYXZvcml0ZVJlY2lwZXMpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9Db29rUmVjaXBlcygpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHModXNlci5yZWNpcGVzVG9Db29rKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFudHJ5KCkge1xuICBkb21VcGRhdGVzLnNob3dVc2VyUGFudHJ5KHVzZXIsIGluZ3JlZGllbnRzKVxuICBkb21VcGRhdGVzLnRvZ2dsZShbJy5wYW50cnknXSlcbn1cblxuZnVuY3Rpb24gcGFudHJ5Q2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICBzd2l0Y2godGFyZ2V0LmlkKSB7XG4gICAgY2FzZSAnZXhpdC1wYW50cnknOlxuICAgICAgZGlzcGxheVBhbnRyeSgpXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmluZC1yZWNpcGVzLXVzaW5nLXBhbnRyeS1idG5cIjpcbiAgICAgIGZpbmRSZWNpcGVzVXNpbmdQYW50cnkoKVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkSW5ncmVkaWVudFRvUGFudHJ5KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgbmFtZUFkZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYW1lLWluZ3JlZGllbnQtZm9ybVwiKS52YWx1ZVxuICBjb25zdCBxdWFudGl0eUFkZGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWFudGl0eS1pbmdyZWRpZW50LWZvcm1cIikudmFsdWVcblxuICBjb25zdCBtYXRjaCA9IGluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgcmV0dXJuIGluZ3JlZGllbnQubmFtZSA9PT0gbmFtZUFkZGVkLnRvTG93ZXJDYXNlKClcbiAgfSlcbiAgY29uc3QgbWF0Y2hJZCA9IG1hdGNoID8gbWF0Y2guaWQgOiBEYXRlLm5vdygpXG5cbiAgcG9zdERhdGEodXNlci5pZCwgbWF0Y2hJZCwgcXVhbnRpdHlBZGRlZClcbiAgYWxlcnQoYFlvdSBoYXZlIGFkZGVkICR7cXVhbnRpdHlBZGRlZH0gb2YgJHtuYW1lQWRkZWR9IHRvIHlvdXIgcGFudHJ5IWApXG59XG5cbmZ1bmN0aW9uIGZpbmRSZWNpcGVzVXNpbmdQYW50cnkoKSB7XG4gIGNvbnN0IHJlY2lwZXNVc2VyQ291bGRDb29rID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gIXVzZXIucGFudHJ5LmNvbXBhcmVJbmdyZWRpZW50cyhyZWNpcGUpXG4gIH0pXG4gIGlmIChyZWNpcGVzVXNlckNvdWxkQ29vay5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcyhyZWNpcGVzVXNlckNvdWxkQ29vaylcbiAgICBkb21VcGRhdGVzLnRvZ2dsZShbJy5wYW50cnknXSlcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnU29ycnksIHlvdSBjYW5ub3QgY29vayBhbnkgcmVjaXBlcywgeW91IG5lZWQgdG8gZ28gdG8gdGhlIGdyb2NjZXJ5IHN0b3JlLicpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBtYWluQ2xpY2tzKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxuICBjb25zdCB0YXJnZXRSZWNpcGUgPSBmaW5kVGFyZ2V0UmVjaXBlKHRhcmdldClcblxuICBzd2l0Y2godGFyZ2V0LmlkKSB7XG4gICAgY2FzZSAnaW1nMSc6XG4gICAgICB0YXJnZXQuY2xvc2VzdCgnLnJlY2lwZS1jYXJkJykuY2xhc3NMaXN0LmFkZCgncmVjaXBlLWNhcmQtYWN0aXZlJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ltZzInOlxuICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZS1jYXJkLWFjdGl2ZScpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdpY29uLWZhdicgfHwgJ2ljb24tZmF2LXRleHQnOlxuICAgICAgYWRkT3JSZW1vdmVGcm9tVXNlckxpc3QodGFyZ2V0UmVjaXBlLCAnaXNGYXZvcml0ZWQnLCAnZmF2b3JpdGVSZWNpcGVzJylcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ljb24tY29vaycgfHwgJ2ljb24tY29vay10ZXh0JzpcbiAgICAgIGFkZE9yUmVtb3ZlRnJvbVVzZXJMaXN0KHRhcmdldFJlY2lwZSwgJ2lzVG9Db29rJywgJ3JlY2lwZXNUb0Nvb2snKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXhpdC1yZWNpcGUnOlxuICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy5yZWNpcGUtY2FyZCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3JlY2lwZS1jYXJkLWFjdGl2ZScpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb29rZWQtcmVjaXBlJzpcbiAgICAgIGNvb2tUaGlzUmVjaXBlKHRhcmdldFJlY2lwZSlcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2V4aXQtcGFudHJ5JzpcbiAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICBicmVhaztcbiAgICBjYXNlIGBjb21wYXJlLXJlY2lwZWA6XG4gICAgICBjb21wYXJlUmVjaXBlcyh0YXJnZXRSZWNpcGUpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kVGFyZ2V0UmVjaXBlKHRhcmdldCkge1xuICBjb25zdCB0YXJnZXRJZCA9IHRhcmdldC5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKS5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICByZXR1cm4gcmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT0gdGFyZ2V0SWQpXG59XG5cbmZ1bmN0aW9uIGFkZE9yUmVtb3ZlRnJvbVVzZXJMaXN0KHRhcmdldFJlY2lwZSwgY2hlY2tQcm9wZXJ0eSwgdXNlckxpc3ROYW1lKSB7XG4gIGlmICh0YXJnZXRSZWNpcGVbY2hlY2tQcm9wZXJ0eV0pIHtcbiAgICB0YXJnZXRSZWNpcGVbY2hlY2tQcm9wZXJ0eV0gPSBmYWxzZVxuICAgIHVzZXIucmVtb3ZlUmVjaXBlKHRhcmdldFJlY2lwZSwgdXNlckxpc3ROYW1lKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldFJlY2lwZVtjaGVja1Byb3BlcnR5XSA9IHRydWVcbiAgICB1c2VyLnNhdmVSZWNpcGUodGFyZ2V0UmVjaXBlLCB1c2VyTGlzdE5hbWUpXG4gIH1cbiAgc2hvd0hvbWUoKVxufVxuXG5mdW5jdGlvbiBjb21wYXJlUmVjaXBlcyh0YXJnZXRSZWNpcGUpIHtcbiAgY29uc3QgbWlzc2luZ0xpc3QgPSB1c2VyLnBhbnRyeS5jb21wYXJlSW5ncmVkaWVudHModGFyZ2V0UmVjaXBlKVxuICBpZiAobWlzc2luZ0xpc3QpIHtcbiAgICBkb21VcGRhdGVzLnNob3dSZWNpcGVDb21wYXJpc29uKG1pc3NpbmdMaXN0LCB0YXJnZXRSZWNpcGUpXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1lvdSBjYW4gY29vayB0aGlzIHdpdGggeW91ciBjdXJyZW50IHBhbnRyeSBpbmdyZWRpZW50cyEnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvb2tUaGlzUmVjaXBlKHRhcmdldFJlY2lwZSkge1xuICB1c2VyLnJlbW92ZVJlY2lwZSh0YXJnZXRSZWNpcGUsICdyZWNpcGVzVG9Db29rJylcbiAgdXNlci5wYW50cnkucmVtb3ZlSW5ncmVkaWVudHModGFyZ2V0UmVjaXBlKVxuICBkb21VcGRhdGVzLnNob3dVc2VyUGFudHJ5KHVzZXIsIGluZ3JlZGllbnRzKVxuICBhbGVydCgnR29vZCBjb29raW5nISBSZWNpcGUgd2lsbCBiZSByZW1vdmVkIGZyb20geW91ciByZWNpcGVzIHRvIGNvb2suJylcbiAgc2V0VGltZW91dChzaG93SG9tZSwgMTAwMClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhZ2dlZFJlY2lwZXMoY2hlY2tib3hlc1NlbGVjdG9yKSB7XG4gIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrZWQtdGFnXCIpO1xuICBjb25zdCBjaGVja2JveFZhbHVlcyA9IEFycmF5LmZyb20oY2hlY2tib3hlcylcbiAgY29uc3Qgc2VsZWN0ZWRCb3hlcyA9IGNoZWNrYm94VmFsdWVzLmZpbHRlcihib3ggPT4gYm94LmNoZWNrZWQpLm1hcCh0YWcgPT4gdGFnLmlkKVxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLnRhZ3Muc29tZSh0YWcgPT4gc2VsZWN0ZWRCb3hlcy5pbmNsdWRlcyh0YWcpKTtcbiAgfSk7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHNlYXJjaFJlc3VsdHMpXG59XG4iLCJpbXBvcnQgUGFudHJ5IGZyb20gJy4vUGFudHJ5J1xuY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy5wYW50cnkgPSBuZXcgUGFudHJ5KHVzZXIucGFudHJ5LCB1c2VyLmlkKTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgc2F2ZVJlY2lwZShyZWNpcGUsIGxpc3QpIHtcbiAgICBpZiAoIXRoaXNbbGlzdF0uaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpc1tsaXN0XS5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUmVjaXBlKHJlY2lwZSwgbGlzdCkge1xuICAgIGNvbnN0IGkgPSB0aGlzW2xpc3RdLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzW2xpc3RdLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIGZpbHRlclJlY2lwZXModGFnLCBsaXN0KSB7XG4gICAgcmV0dXJuIHRoaXNbbGlzdF0uZmlsdGVyKHJlY2lwZSA9PiByZWNpcGUudGFncy5pbmNsdWRlcyh0YWcpKTtcbiAgfVxuICBcbiAgc2VhcmNoRm9yUmVjaXBlKGtleXdvcmQsIGxpc3QpIHtcbiAgICByZXR1cm4gdGhpc1tsaXN0XS5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5uYW1lLmluY2x1ZGVzKGtleXdvcmQpIHx8IHJlY2lwZS5pbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoa2V5d29yZCkpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9