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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/css/scss/main.scss":
/*!***************************************!*\
  !*** ./assets/src/css/scss/main.scss ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/img/B9.webp":
/*!********************************!*\
  !*** ./assets/src/img/B9.webp ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/B9.webp");

/***/ }),

/***/ "./assets/src/img/BelasArtes.webp":
/*!****************************************!*\
  !*** ./assets/src/img/BelasArtes.webp ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/BelasArtes.webp");

/***/ }),

/***/ "./assets/src/img/Compasso.webp":
/*!**************************************!*\
  !*** ./assets/src/img/Compasso.webp ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/Compasso.webp");

/***/ }),

/***/ "./assets/src/img/CompassoBlog.webp":
/*!******************************************!*\
  !*** ./assets/src/img/CompassoBlog.webp ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/CompassoBlog.webp");

/***/ }),

/***/ "./assets/src/img/Getnet.webp":
/*!************************************!*\
  !*** ./assets/src/img/Getnet.webp ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/Getnet.webp");

/***/ }),

/***/ "./assets/src/img/IPG.webp":
/*!*********************************!*\
  !*** ./assets/src/img/IPG.webp ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/IPG.webp");

/***/ }),

/***/ "./assets/src/img/asset-videira-2.png":
/*!********************************************!*\
  !*** ./assets/src/img/asset-videira-2.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/asset-videira-2.png");

/***/ }),

/***/ "./assets/src/img/asset-videira.webp":
/*!*******************************************!*\
  !*** ./assets/src/img/asset-videira.webp ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/asset-videira.webp");

/***/ }),

/***/ "./assets/src/img/behance.svg":
/*!************************************!*\
  !*** ./assets/src/img/behance.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/behance.svg");

/***/ }),

/***/ "./assets/src/img/close.svg":
/*!**********************************!*\
  !*** ./assets/src/img/close.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/close.svg");

/***/ }),

/***/ "./assets/src/img/facebook.svg":
/*!*************************************!*\
  !*** ./assets/src/img/facebook.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/facebook.svg");

/***/ }),

/***/ "./assets/src/img/github.svg":
/*!***********************************!*\
  !*** ./assets/src/img/github.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/github.svg");

/***/ }),

/***/ "./assets/src/img/hamburger.svg":
/*!**************************************!*\
  !*** ./assets/src/img/hamburger.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/hamburger.svg");

/***/ }),

/***/ "./assets/src/img/instagram.svg":
/*!**************************************!*\
  !*** ./assets/src/img/instagram.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/instagram.svg");

/***/ }),

/***/ "./assets/src/img/levante.webp":
/*!*************************************!*\
  !*** ./assets/src/img/levante.webp ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/levante.webp");

/***/ }),

/***/ "./assets/src/img/linkedin.svg":
/*!*************************************!*\
  !*** ./assets/src/img/linkedin.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/linkedin.svg");

/***/ }),

/***/ "./assets/src/img/logo.webp":
/*!**********************************!*\
  !*** ./assets/src/img/logo.webp ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/logo.webp");

/***/ }),

/***/ "./assets/src/img/red-arrow.webp":
/*!***************************************!*\
  !*** ./assets/src/img/red-arrow.webp ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/red-arrow.webp");

/***/ }),

/***/ "./assets/src/img/vitorvideira.webp":
/*!******************************************!*\
  !*** ./assets/src/img/vitorvideira.webp ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../assets/src/img/vitorvideira.webp");

/***/ }),

/***/ "./assets/src/js/main.js":
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/scss/main.scss */ "./assets/src/css/scss/main.scss");
/* harmony import */ var _img_vitorvideira_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/vitorvideira.webp */ "./assets/src/img/vitorvideira.webp");
/* harmony import */ var _img_red_arrow_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/red-arrow.webp */ "./assets/src/img/red-arrow.webp");
/* harmony import */ var _img_asset_videira_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/asset-videira.webp */ "./assets/src/img/asset-videira.webp");
/* harmony import */ var _img_asset_videira_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/asset-videira-2.png */ "./assets/src/img/asset-videira-2.png");
/* harmony import */ var _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/hamburger.svg */ "./assets/src/img/hamburger.svg");
/* harmony import */ var _img_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/close.svg */ "./assets/src/img/close.svg");
/* harmony import */ var _img_levante_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/levante.webp */ "./assets/src/img/levante.webp");
/* harmony import */ var _img_B9_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/B9.webp */ "./assets/src/img/B9.webp");
/* harmony import */ var _img_BelasArtes_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/BelasArtes.webp */ "./assets/src/img/BelasArtes.webp");
/* harmony import */ var _img_Compasso_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/Compasso.webp */ "./assets/src/img/Compasso.webp");
/* harmony import */ var _img_CompassoBlog_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/CompassoBlog.webp */ "./assets/src/img/CompassoBlog.webp");
/* harmony import */ var _img_IPG_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/IPG.webp */ "./assets/src/img/IPG.webp");
/* harmony import */ var _img_Getnet_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/Getnet.webp */ "./assets/src/img/Getnet.webp");
/* harmony import */ var _img_logo_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/logo.webp */ "./assets/src/img/logo.webp");
/* harmony import */ var _img_linkedin_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/linkedin.svg */ "./assets/src/img/linkedin.svg");
/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/facebook.svg */ "./assets/src/img/facebook.svg");
/* harmony import */ var _img_github_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/github.svg */ "./assets/src/img/github.svg");
/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/instagram.svg */ "./assets/src/img/instagram.svg");
/* harmony import */ var _img_behance_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/behance.svg */ "./assets/src/img/behance.svg");
/* harmony import */ var _scripts_hamburger_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scripts/hamburger-menu */ "./assets/src/js/scripts/hamburger-menu.js");
/* harmony import */ var _scripts_animationProjects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scripts/animationProjects */ "./assets/src/js/scripts/animationProjects.js");
 //Css

 //Assets







 //Projects






 //Logo

 //Social Icons





 //Scripts



Object(_scripts_hamburger_menu__WEBPACK_IMPORTED_MODULE_20__["default"])();
Object(_scripts_animationProjects__WEBPACK_IMPORTED_MODULE_21__["default"])();

/***/ }),

/***/ "./assets/src/js/scripts/animationProjects.js":
/*!****************************************************!*\
  !*** ./assets/src/js/scripts/animationProjects.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function animationProjects() {
  const projectCards = document.querySelectorAll('.project-container');
  projectCards.forEach(projectCard => {
    console.log(projectCard); // projectCard.classList.add('js-animate-card');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  window.addEventListener('load', function () {
    animationProjects();
  });
});

/***/ }),

/***/ "./assets/src/js/scripts/hamburger-menu.js":
/*!*************************************************!*\
  !*** ./assets/src/js/scripts/hamburger-menu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function toggleHamburger() {
  const sideMenu = document.querySelector('.side-menu');

  if (sideMenu.classList.contains('is--active')) {
    sideMenu.classList.remove('is--active');
  } else {
    sideMenu.classList.add('is--active');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  const hamburgers = document.querySelectorAll('.js-nav-menu-toggle');
  hamburgers.forEach(hamburger => {
    hamburger.addEventListener('click', function (e) {
      e.preventDefault;
      toggleHamburger();
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map