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

/***/ "./src/page9/seeBooks.js":
/*!*******************************!*\
  !*** ./src/page9/seeBooks.js ***!
  \*******************************/
/***/ (() => {

eval("//Crear body\nconst body = document.body;\n\n//Crear un div para colocar elementos\nconst div = document.createElement('div');\n\n//Crear tabla \nconst table = document.createElement('table');\n\n//Crear cuerpo de tabla \nconst tBody = document.createElement('tbody');\n\n//Crear fila\nconst tRow = document.createElement('tr');\n//Crear columna\nconst tD1 = document.createElement('td');\nconst tD2 = document.createElement('td');\nconst tD3 = document.createElement('td');\n\n\n//Crear figuras para colocar revistas\nconst fig1 = document.createElement('figure');\nconst fig2 = document.createElement('figure');\nconst fig3 = document.createElement('figure');\n\n//crear imgs \nconst img1 = document.createElement('img');\nconst img2 = document.createElement('img');\nconst img3 = document.createElement('img');\n\n//Crear descripciones de las imagenes \nconst figCap1 = document.createElement('figcaption');\nconst figCap2 = document.createElement('figcaption');\nconst figCap3 = document.createElement('figcaption');\n\n//Create anchors to go to pages \nconst anch1 = document.createElement('a');\nconst anch2 = document.createElement('a');\nconst anch3 = document.createElement('a');\n\n//Create back button\nconst backBtn = document.createElement('button');\n\n\nbody.append(div);\ndiv.append(table);\ntable.append(tRow);\ntRow.append(tD1);\ntRow.append(tD2);\ntRow.append(tD3);\ndiv.append(backBtn);\n\n\ntD1.append(fig1);\nfig1.append(img1);\nimg1.setAttribute('src', './images/midnight.jpg');\nimg1.setAttribute('width', '300');\nfig1.append(figCap1);\nfig1.append(\"The midnight library\");\n\ntD2.append(fig2);\nfig2.append(img2);\nimg2.setAttribute('src', './images/duneBook.jpg');\nimg2.setAttribute('width', '275');\nfig2.append(figCap2);\nfig2.append(\"Dune\");\n\ntD3.append(fig3);\nfig3.append(img3);\nimg3.setAttribute('src', './images/pi.jpg');\nimg3.setAttribute('width', '300');\nfig3.append(figCap3);\nfig3.append(\"The life of pi\");\n\nbackBtn.append(\"back\");\nbackBtn.setAttribute('id', 'backBtn');\n\ndocument.getElementById(\"backBtn\").onclick = function () {\n    location.href = \"../bundle/page10.html\";\n};\n\n//# sourceURL=webpack://Lab6.1/./src/page9/seeBooks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page9/seeBooks.js"]();
/******/ 	
/******/ })()
;