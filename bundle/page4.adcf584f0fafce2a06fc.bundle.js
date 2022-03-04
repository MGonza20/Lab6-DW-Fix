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

/***/ "./src/page4/scriptGoToLibrary.js":
/*!****************************************!*\
  !*** ./src/page4/scriptGoToLibrary.js ***!
  \****************************************/
/***/ (() => {

eval("//Colocar body\nconst body = document.body;\n\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n//create break\nconst br = document.createElement('br');\n\nconst br2 = document.createElement('br');\n\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnNext = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\nconst dets = document.createElement('details');\nconst sum = document.createElement('summary');\nconst olElement = document.createElement('ol');\nconst li1 = document.createElement('li');\nconst li2 = document.createElement('li');\nconst i = document.createElement('i');\nconst br314 = document.createElement('br');\nconst br315 = document.createElement('br');\n\n\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Llegas a la biblioteca');\n\ndiv.append(imgD);\n\n\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\n\n\ntext.append('En efecto la bibliotecaria te espera en la biblioteca central a las 3:00 p.m. \\\n            Te pide un momento para poder imprimir desde su computadora apple la lista de \\\n            pistas que debes buscar. Al momento de darte la lista te indica que debes encontrar \\\n            la fecha y hora del viaje con las pistas. Pero lo primero que debes hacer es seleccionar \\\n            de la estanteria una de las revistas con portada de la ciudad a la que crees que iras\".'); \n\n\nimgD.append(img);\nimg.setAttribute('src', './images/librarian.jpeg');\nimg.setAttribute('width', '450px');\n\ndivQ.append(dets);\ndets.append(sum);\nsum.append('Pistas');\ndets.append(olElement);\nolElement.append(li1);\nli1.append('La primera busqueda te llevará a la segunda pista.');\nolElement.append(li2);\nli2.append('¿A que se podrá referir la marca');\ni.append('\"apple\"');\nli2.append(i);\nli2.append('de la computadora?');\nli2.append(br314);\nli2.append(\"* En el contexto del juego.\");\ndivQ.append(br315);\n\n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(btnNext);\nbtnNext.append(\"Siguiente\");\nbtnNext.setAttribute('id', 'nextBtn');\n\n\n\ndocument.getElementById(\"nextBtn\").onclick = function () {\n    location.href = \"../bundle/page5.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\nsum.setAttribute('id', 'summary');\nli1.setAttribute('id', 'li');\nli1.setAttribute('id', 'li2');\n\n\n\n\n\n\n//# sourceURL=webpack://Lab6.1/./src/page4/scriptGoToLibrary.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page4/scriptGoToLibrary.js"]();
/******/ 	
/******/ })()
;