import "../main.scss";


import imgMag1 from "../images/toscanaItalia2.jpg";
import imgMag2 from "../images/TheNewYorker.jpg";
import imgMag3 from "../images/tailand.jpg";
import { brElement } from "../brElement";

const {bar} = require("../bar.js");
const {bsGrid} = require("../bsGrid.js");



//Crear body
const body = document.body;

//Crear un div para colocar elementos
const div = document.createElement('div');

const divGrid = document.createElement('div');

//Crear titulo y su contenedor
const divTitle = document.createElement('div');
const title = document.createElement('h1');



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


div.append(divTitle);
div.append(divGrid);

divTitle.append(title);
title.append('Elige una revista');


fig1.append(anch1);
anch1.setAttribute('href', '../bundle/page6.html');
img1.setAttribute('src', imgMag1);
img1.setAttribute('width', '300');
anch1.appendChild(img1);
fig1.append(figCap1);
fig1.append("Viajes, Toscana");



fig2.append(anch2);
anch2.setAttribute('href', '../bundle/page7.html');
img2.setAttribute('src', imgMag2);
img2.setAttribute('width', '300');
anch2.appendChild(img2);
fig2.append(figCap2);
fig2.append("The New Yorker, New York");


fig3.append(anch3);
anch3.setAttribute('href', '../bundle/page6.html');
img3.setAttribute('src', imgMag3);
img3.setAttribute('width', '300');
anch3.append(img3);
fig3.append(figCap3);
fig3.append("Viajar, Tailandia");

divGrid.appendChild(bsGrid(fig1,fig2,fig3));


div.append(dets);
dets.append(sum);
sum.append('Pista');
dets.append(olElement);
olElement.append(li1);
li1.append('The New Yorker tiene una fecha.');


div.append(brElement());
div.append(bar(37.5));
