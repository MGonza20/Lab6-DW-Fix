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

/***/ "./src/page1/script.js":
/*!*****************************!*\
  !*** ./src/page1/script.js ***!
  \*****************************/
/***/ (() => {

eval("\n//Colocar body\nconst body = document.body;\n\n//Hacer un div para colocar elementos\nconst div = document.createElement('div');\n\nconst divTitle = document.createElement('div');\n\n//Crear elemento para colocar titulo\nconst title = document.createElement('h1');\n\n//Crear elemento para subtitulo \nconst subtitle = document.createElement('h2');\n\n//Crear elemento para img\nconst img = document.createElement('img');\n\n//Crear elemento para colocar texto\nconst text = document.createElement('p');\n//Div para texto\nconst textDiv = document.createElement('div');\n//create break\nconst br = document.createElement('br');\n\n//texto para subtitulo de pregunta\nconst subQuestion = document.createElement('text');\n\n//div para colocar pregunta\nconst divQ = document.createElement('div');\nconst btnYes = document.createElement('button');\nconst btnNo = document.createElement('button');\n//tag bold para pregunta\nconst bold = document.createElement('b');\nconst imgD = document.createElement('div');\n\nbody.append(div);\n\n//Colocar titulo\ndiv.append(divTitle);\ndivTitle.append(title);\ntitle.append('Morning´s surprise');\n\n\ndiv.append(imgD);\ndiv.setAttribute('id', 'page1');\n\n\n//Colocar div donde se colocara texto\ndiv.append(textDiv);\n//Colocar texto dentro del div de texto\ntextDiv.append(text);\n\ntext.append('Te levantas un jueves por la mañana. Es una mañana calurosa de verano, \\\nvas en el tráfico hacia el supermercado y algo que dice el locutor en la radio te llama la atención... \\\n\"Solo llama y quiza te puedas ganar la oportunidad de obtener el viaje de tus sueños, \\\nsolo llama y quizas puedas ganar el viaje misterioso\". Pero piensas, siempre hay un truco, ¿No? ');\ntextDiv.setAttribute('width', '50px');\n\n\n\nimgD.append(img);\nimg.setAttribute('src', 'https://media.giphy.com/media/kL9x7l4nvVl0eMeLoV/giphy.gif');\nimg.setAttribute('width', '300px');\n \n//Pregunta\nbody.append(divQ);\ndivQ.append(bold);\ndivQ.append(br);\ndivQ.append(btnYes);\nbtnYes.append(\"Si\");\ndivQ.append(btnNo);\nbtnNo.append(\"No\");\nbold.append(subQuestion);\nsubQuestion.append('¿Decides llamar?');\nbtnYes.setAttribute('id', 'yesBtn');\nbtnNo.setAttribute('id', 'nopBtn');\n\n\ndocument.getElementById(\"yesBtn\").onclick = function () {\n    location.href = \"../bundle/page2.html\";\n};\n\ndocument.getElementById(\"nopBtn\").onclick = function () {\n    location.href = \"../bundle/page3.html\";\n};\n\ndivQ.setAttribute('id', 'divQ');\ndivTitle.setAttribute('id', 'divT');\ntextDiv.setAttribute('id', 'divText');\nimgD.setAttribute('id', 'divImg');\ntext.setAttribute('id', 'text');\nsubQuestion.setAttribute('id', 'questionText');\n\n//# sourceURL=webpack://Lab6.1/./src/page1/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page1/script.js"]();
/******/ 	
/******/ })()
;