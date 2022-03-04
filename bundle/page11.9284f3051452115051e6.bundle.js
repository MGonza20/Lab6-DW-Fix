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

/***/ "./src/page11/done.js":
/*!****************************!*\
  !*** ./src/page11/done.js ***!
  \****************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//create break\nconst br = document.createElement('br');\n\n\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnTrip = document.createElement('button');\nconst imgD = document.createElement('div');\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Mision cumplida');\n\n\ndiv.append(imgD);\n\n\nimgD.append(img);\nimg.setAttribute('src', './images/misionCumplida.gif');\nimg.setAttribute('width', '400px');\n\n\nbody.append(divQ);\ndivQ.append(br);\ndivQ.append(btnTrip);\nbtnTrip.append(\"Viajar a NYC\");\nbtnTrip.setAttribute('id', 'tripBtn');\n\n\ndocument.getElementById(\"tripBtn\").onclick = function () {\n    location.href = \"../bundle/page12.html\";\n};\n\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\n\n//# sourceURL=webpack://Lab6.1/./src/page11/done.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page11/done.js"]();
/******/ 	
/******/ })()
;