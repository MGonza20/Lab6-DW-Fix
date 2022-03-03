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

/***/ "./src/page7/selectDate.js":
/*!*********************************!*\
  !*** ./src/page7/selectDate.js ***!
  \*********************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n\n//create break\nconst br = document.createElement('br');\nconst br2 = document.createElement('br');\n\n//texto para subtitulo de pregunta\nconst subQuestion = document.createElement('h2');\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnDate1 = document.createElement('button');\nconst btnDate2 = document.createElement('button');\nconst btnDate3 = document.createElement('button');\nconst btnDate4 = document.createElement('button');\nconst btnDate5 = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Segunda búsqueda. Encuentra la fecha');\n\n\ndiv.append(imgD);\n\n\nimgD.append(img);\nimg.setAttribute('src', '../../../images/general/calendar.gif');\n\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\n//divQ.append(br);\ndivQ.append(btnDate1);\nbtnDate1.append(\"6 de Octubre\");\n//divQ.append(br);\ndivQ.append(btnDate2);\nbtnDate2.append(\"19 de Noviembre\");\n//divQ.append(br2);\ndivQ.append(btnDate3);\nbtnDate3.append(\"11 de Julio\");\n//\ndivQ.append(btnDate4);\nbtnDate4.append(\"7 de Junio\");\n//\ndivQ.append(btnDate5);\nbtnDate5.append(\"9 de Marzo\");\n\nbold.append(subQuestion);\nsubQuestion.append('Basandote en la pista anterior, ¿Qué fecha es?');\nbtnDate1.setAttribute('id', 'date1Btn');\nbtnDate2.setAttribute('id', 'date2Btn');\nbtnDate3.setAttribute('id', 'date3Btn');\nbtnDate4.setAttribute('id', 'date4Btn');\nbtnDate5.setAttribute('id', 'date5Btn');\n\n\ndocument.getElementById(\"date1Btn\").onclick = function () {\n    location.href = \"../bundle/page8.html\";\n};\n\ndocument.getElementById(\"date2Btn\").onclick = function () {\n    location.href = \"../bundle/page10.html\";\n};\n\ndocument.getElementById(\"date3Btn\").onclick = function () {\n    location.href = \"../bundle/page8.html\";\n};\n\ndocument.getElementById(\"date4Btn\").onclick = function () {\n    location.href = \"../bundle/page8.html\";\n};\n\ndocument.getElementById(\"date5Btn\").onclick = function () {\n    location.href = \"../bundle/page8.html\";\n};\n\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\nimgD.setAttribute('id', 'divImg');\n\n\n//# sourceURL=webpack://Lab6.1/./src/page7/selectDate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page7/selectDate.js"]();
/******/ 	
/******/ })()
;