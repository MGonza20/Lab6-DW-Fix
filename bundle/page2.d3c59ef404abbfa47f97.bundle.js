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

/***/ "./src/page2/scriptCallRadio.js":
/*!**************************************!*\
  !*** ./src/page2/scriptCallRadio.js ***!
  \**************************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n//create break\nconst br = document.createElement('br');\n\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnNext = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\n\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('¡Haz ganado!');\n\n\ndiv.append(imgD);\n\n\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\n\n\ntext.append('Tu llamada ha entrado a la radio y el locutor te dice: \\\n    \"¡Felicidades! Haz sido uno de los 3 afortunados. Debes ir a la \\\n    bibliblioteca central mañana a las 3:00 p.m. cuando estes ahí la \\\n    bibliotecaria te dará un listado de cosas que debes buscar, resolver \\\n    y obtener, estas serán pistas para poder reclamar tu boleto en la \\\n    agencia de viajes\"'); \n\n\n\nimgD.append(img);\nimg.setAttribute('src', '../../../images/general/IWoon.gif');\nimg.setAttribute('width', '245px');\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(btnNext);\nbtnNext.append(\"Siguiente\");\nbtnNext.setAttribute('id', 'nextBtn');\n\n\ndocument.getElementById(\"nextBtn\").onclick = function () {\n    location.href = \"../bundle/page4.html\";\n};\n\n//src\\page4\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\n\n\n\n//# sourceURL=webpack://Lab6.1/./src/page2/scriptCallRadio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page2/scriptCallRadio.js"]();
/******/ 	
/******/ })()
;