/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/TheNewYorker.jpg":
/*!*************************************!*\
  !*** ./src/images/TheNewYorker.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/448e8f3ae175e958d892972e411b997b.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/TheNewYorker.jpg?");

/***/ }),

/***/ "./src/images/tailand.jpg":
/*!********************************!*\
  !*** ./src/images/tailand.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/f36736bbb5cc8324f4fb713e8b528e43.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/tailand.jpg?");

/***/ }),

/***/ "./src/images/toscanaItalia2.jpg":
/*!***************************************!*\
  !*** ./src/images/toscanaItalia2.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/d8dca7baecc9d79f522dccb6733995cd.jpg\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/toscanaItalia2.jpg?");

/***/ }),

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bar\": () => (/* binding */ bar)\n/* harmony export */ });\nconst bar = (val) => {\r\n\r\n    let bar = document.createElement('progress');\r\n    bar.setAttribute('value', `${val}`);\r\n    bar.setAttribute('max', '100');\r\n    bar.append(`${val}%`);\r\n\r\n    return bar;\r\n}\n\n//# sourceURL=webpack://Lab6.1/./src/bar.js?");

/***/ }),

/***/ "./src/brElement.js":
/*!**************************!*\
  !*** ./src/brElement.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"brElement\": () => (/* binding */ brElement)\n/* harmony export */ });\nconst brElement = () => {\r\n\r\n    const brElement = document.createElement('br');\r\n    return brElement;\r\n}\n\n//# sourceURL=webpack://Lab6.1/./src/brElement.js?");

/***/ }),

/***/ "./src/page5/magsOptions.js":
/*!**********************************!*\
  !*** ./src/page5/magsOptions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_toscanaItalia2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/toscanaItalia2.jpg */ \"./src/images/toscanaItalia2.jpg\");\n/* harmony import */ var _images_TheNewYorker_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/TheNewYorker.jpg */ \"./src/images/TheNewYorker.jpg\");\n/* harmony import */ var _images_tailand_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tailand.jpg */ \"./src/images/tailand.jpg\");\n/* harmony import */ var _brElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brElement */ \"./src/brElement.js\");\n\n\n\n\n\nconst {bar} = __webpack_require__(/*! ../bar.js */ \"./src/bar.js\");\n\n\n\n//Crear body\nconst body = document.body;\n\n//Crear un div para colocar elementos\nconst div = document.createElement('div');\n\n//Crear titulo y su contenedor\nconst divTitle = document.createElement('div');\nconst title = document.createElement('h1');\n\n//Crear tabla \nconst table = document.createElement('table');\n\n//Crear cuerpo de tabla \nconst tBody = document.createElement('tbody');\n\n//Crear fila\nconst tRow = document.createElement('tr');\n//Crear columna\nconst tD1 = document.createElement('td');\nconst tD2 = document.createElement('td');\nconst tD3 = document.createElement('td');\n\n//Crear figuras para colocar revistas\nconst fig1 = document.createElement('figure');\nconst fig2 = document.createElement('figure');\nconst fig3 = document.createElement('figure');\n\n//crear imgs \nconst img1 = document.createElement('img');\nconst img2 = document.createElement('img');\nconst img3 = document.createElement('img');\n\n//Crear descripciones de las imagenes \nconst figCap1 = document.createElement('figcaption');\nconst figCap2 = document.createElement('figcaption');\nconst figCap3 = document.createElement('figcaption');\n\n//Create anchors to go to pages \nconst anch1 = document.createElement('a');\nconst anch2 = document.createElement('a');\nconst anch3 = document.createElement('a');\n\n//Create details for clue\nconst dets = document.createElement('details');\nconst sum = document.createElement('summary');\nconst olElement = document.createElement('ol');\nconst li1 = document.createElement('li');\n\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Elige una revista');\n\ndiv.append(table);\ntable.append(tRow);\ntRow.append(tD1);\ntRow.append(tD2);\ntRow.append(tD3);\n\ntD1.append(fig1);\nfig1.append(anch1);\nanch1.setAttribute('href', '../bundle/page6.html');\nimg1.setAttribute('src', _images_toscanaItalia2_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nimg1.setAttribute('width', '350');\nanch1.appendChild(img1);\nfig1.append(figCap1);\nfig1.append(\"Viajes, Toscana\");\n\ntD2.append(fig2);\nfig2.append(anch2);\nanch2.setAttribute('href', '../bundle/page7.html');\nimg2.setAttribute('src', _images_TheNewYorker_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nimg2.setAttribute('width', '375');\nanch2.appendChild(img2);\nfig2.append(figCap2);\nfig2.append(\"The New Yorker, New York\");\n\ntD3.append(fig3);\nfig3.append(anch3);\nanch3.setAttribute('href', '../bundle/page6.html');\nimg3.setAttribute('src', _images_tailand_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nimg3.setAttribute('width', '375');\nanch3.append(img3);\nfig3.append(figCap3);\nfig3.append(\"Viajar, Tailandia\");\n\n\ndiv.append(dets);\ndets.append(sum);\nsum.append('Pistas');\ndets.append(olElement);\nolElement.append(li1);\nli1.append('The New Yorker tiene una fecha.');\n\ndiv.append((0,_brElement__WEBPACK_IMPORTED_MODULE_3__.brElement)());\ndiv.append(bar(37.5));\n\n\n//# sourceURL=webpack://Lab6.1/./src/page5/magsOptions.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page5/magsOptions.js");
/******/ 	
/******/ })()
;