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

/***/ "./src/images/IWoon.gif":
/*!******************************!*\
  !*** ./src/images/IWoon.gif ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/da793ca204fe9d3826e87d63e8b36193.gif\");\n\n//# sourceURL=webpack://Lab6.1/./src/images/IWoon.gif?");

/***/ }),

/***/ "./src/page2/scriptCallRadio.js":
/*!**************************************!*\
  !*** ./src/page2/scriptCallRadio.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_IWoon_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/IWoon.gif */ \"./src/images/IWoon.gif\");\n\n\n//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n//create break\nconst br = document.createElement('br');\n\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnNext = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\n\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('¡Haz ganado!');\n\n\ndiv.append(imgD);\n\n\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\n\n\ntext.append('Tu llamada ha entrado a la radio y el locutor te dice: \\\n    \"¡Felicidades! Haz sido uno de los 3 afortunados. Debes ir a la \\\n    bibliblioteca central mañana a las 3:00 p.m. cuando estes ahí la \\\n    bibliotecaria te dará un listado de cosas que debes buscar, resolver \\\n    y obtener, estas serán pistas para poder reclamar tu boleto en la \\\n    agencia de viajes\"'); \n\n\n\nimgD.append(img);\nimg.setAttribute('src', '{profile}');\nimg.setAttribute('width', '245px');\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(btnNext);\nbtnNext.append(\"Siguiente\");\nbtnNext.setAttribute('id', 'nextBtn');\n\n\ndocument.getElementById(\"nextBtn\").onclick = function () {\n    location.href = \"../bundle/page4.html\";\n};\n\n//src\\page4\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\n\n\n\n//# sourceURL=webpack://Lab6.1/./src/page2/scriptCallRadio.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page2/scriptCallRadio.js");
/******/ 	
/******/ })()
;