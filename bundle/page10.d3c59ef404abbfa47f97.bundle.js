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

/***/ "./src/page10/selectTime.js":
/*!**********************************!*\
  !*** ./src/page10/selectTime.js ***!
  \**********************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n\n//create break\nconst br = document.createElement('br');\nconst br2 = document.createElement('br');\n\n//texto para subtitulo de pregunta\nconst subQuestion = document.createElement('h2');\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnTime1 = document.createElement('button');\nconst btnTime2 = document.createElement('button');\nconst btnTime3 = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\nconst anchBooks = document.createElement('a');\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Tercera búsqueda. Encuentra la hora');\n\n\ndiv.append(imgD);\n\n\nimgD.append(img);\nimg.setAttribute('src', '../../../images/general/tiktok.gif');\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\ntext.append('Debes buscar estos libros y ver si en cuentras alguna pista en alguno de ellos.');\n\nanchBooks.append('Ver libros');\nanchBooks.setAttribute('href', '../bundle/page9.html');\ntext.append(anchBooks);\n\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(br);\ndivQ.append(btnTime1);\nbtnTime1.append(\"8:00\");\ndivQ.append(br);\ndivQ.append(btnTime2);\nbtnTime2.append(\"12:00\");\ndivQ.append(br2);\ndivQ.append(btnTime3);\nbtnTime3.append(\"9:00\");\nbold.append(subQuestion);\nsubQuestion.append('¿Cuál es la respuesta?');\nbtnTime1.setAttribute('id', 'time1Btn');\nbtnTime2.setAttribute('id', 'time2Btn');\nbtnTime3.setAttribute('id', 'time3Btn');\n\n\ndocument.getElementById(\"time1Btn\").onclick = function () {\n    location.href = \"../bundle/page8.html\";\n};\n\ndocument.getElementById(\"time2Btn\").onclick = function () {\n    location.href = \"../bundle/page11.html\";\n};\n\ndocument.getElementById(\"time3Btn\").onclick = function () {\n    location.href = \"../bundle/page8.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\n\n//# sourceURL=webpack://Lab6.1/./src/page10/selectTime.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page10/selectTime.js"]();
/******/ 	
/******/ })()
;