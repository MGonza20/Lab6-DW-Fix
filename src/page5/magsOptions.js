import "../main.scss";

import imgMag1 from "../images/toscanaItalia2.jpg";
import imgMag2 from "../images/TheNewYorker.jpg";
import imgMag3 from "../images/tailand.jpg";
import { brElement } from "../brElement";

const {bar} = require("../bar.js");



//Crear body
const body = document.body;

//Crear un div para colocar elementos
const div = document.createElement('div');

//Crear titulo y su contenedor
const divTitle = document.createElement('div');
const title = document.createElement('h1');

//Crear tabla 
const table = document.createElement('table');

//Crear cuerpo de tabla 
const tBody = document.createElement('tbody');

//Crear fila
const tRow = document.createElement('tr');
//Crear columna
const tD1 = document.createElement('td');
const tD2 = document.createElement('td');
const tD3 = document.createElement('td');

//Crear figuras para colocar revistas
const fig1 = document.createElement('figure');
const fig2 = document.createElement('figure');
const fig3 = document.createElement('figure');

//crear imgs 
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

//Crear descripciones de las imagenes 
const figCap1 = document.createElement('figcaption');
const figCap2 = document.createElement('figcaption');
const figCap3 = document.createElement('figcaption');

//Create anchors to go to pages 
const anch1 = document.createElement('a');
const anch2 = document.createElement('a');
const anch3 = document.createElement('a');

//Create details for clue
const dets = document.createElement('details');
const sum = document.createElement('summary');
const olElement = document.createElement('ol');
const li1 = document.createElement('li');


body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Elige una revista');

div.append(table);
table.append(tRow);
tRow.append(tD1);
tRow.append(tD2);
tRow.append(tD3);

tD1.append(fig1);
fig1.append(anch1);
anch1.setAttribute('href', '../bundle/page6.html');
img1.setAttribute('src', imgMag1);
img1.setAttribute('width', '350');
anch1.appendChild(img1);
fig1.append(figCap1);
fig1.append("Viajes, Toscana");

tD2.append(fig2);
fig2.append(anch2);
anch2.setAttribute('href', '../bundle/page7.html');
img2.setAttribute('src', imgMag2);
img2.setAttribute('width', '375');
anch2.appendChild(img2);
fig2.append(figCap2);
fig2.append("The New Yorker, New York");

tD3.append(fig3);
fig3.append(anch3);
anch3.setAttribute('href', '../bundle/page6.html');
img3.setAttribute('src', imgMag3);
img3.setAttribute('width', '375');
anch3.append(img3);
fig3.append(figCap3);
fig3.append("Viajar, Tailandia");


div.append(dets);
dets.append(sum);
sum.append('Pistas');
dets.append(olElement);
olElement.append(li1);
li1.append('The New Yorker tiene una fecha.');

div.append(brElement());
div.append(bar(37.5));
