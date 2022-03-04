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

/***/ "./src/page3/boring.js":
/*!*****************************!*\
  !*** ./src/page3/boring.js ***!
  \*****************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//create break\nconst br = document.createElement('br');\n\n\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnTrip = document.createElement('button');\nconst btnNo = document.createElement('button');\nconst imgD = document.createElement('div');\n\nbody.append(div);\n\n\ndiv.append(imgD);\nimgD.append(img);\nimg.setAttribute('src', 'https://media.giphy.com/media/ehJ4vNWRhinhMMvLxp/giphy.gif');\nimg.setAttribute('width', '500px');\n\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(br);\ndivQ.append(btnTrip);\nbtnTrip.append(\"Back\");\nbtnTrip.setAttribute('id', 'backBtn');\n\n\ndocument.getElementById(\"backBtn\").onclick = function () {\n    location.href = \"../bundle/page1.html\";\n};\n\n\n\n\n//# sourceURL=webpack://Lab6.1/./src/page3/boring.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page3/boring.js"]();
/******/ 	
/******/ })()
;