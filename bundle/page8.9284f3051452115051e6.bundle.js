/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page8/nope2.js":
/*!****************************!*\
  !*** ./src/page8/nope2.js ***!
  \****************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\nconst divTitle = document.createElement('div');\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n//Crear elemento para img\nconst img = document.createElement('img');\nconst imgD = document.createElement('div');\n\n\nbody.append(div);\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Opción incorrecta. Has perdido tu oportunidad');\ndiv.append(imgD);\nimgD.append(img);\n\nimg.setAttribute('src', './images/nope.gif');\nimg.setAttribute('width', '320px');\n\n\n\n\n//# sourceURL=webpack://Lab6.1/./src/page8/nope2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page8/nope2.js"]();
/******/ 	
/******/ })()
;