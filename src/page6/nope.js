import "../main.scss";
import "../orderDivs.scss";

import imgNope from "../images/sadFacee.gif";

const {brElement} = require("../brElement.js");
//Colocar body
const body = document.body;

//Hacer un div para colocar elementos
const div = document.createElement('div');
const divTitle = document.createElement('div');

//Crear elemento para colocar titulo
const title = document.createElement('h1');

//Crear elemento para img
const img = document.createElement('img');



//div para colocar pregunta
const divQ = document.createElement('div');
const btnBack = document.createElement('button');
const imgD = document.createElement('div');

body.append(div);

//Colocar titulo
div.append(divTitle);
divTitle.append(title);
title.append('Esta pista no te lleva a la siguiente...');


div.append(imgD);



img.setAttribute('src', imgNope);
img.setAttribute('width', '300px');
imgD.appendChild(img);


body.append(divQ);
divQ.append(brElement());
divQ.append(btnBack);
btnBack.append("Back");
btnBack.setAttribute('id', 'backBtn');


document.getElementById("backBtn").onclick = function () {
    location.href = "../bundle/page5.html";
};


