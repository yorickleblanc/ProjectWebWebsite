var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var sharebutton = document.querySelector('.sharebutton');
var fullscreen = document.querySelector('.full');
var body = document.querySelector('body');
var header = document.querySelector('header');
var dagspecial = document.querySelector('.dagspecial1');
var bullet1 = document.querySelector('.bullet1');
var bullet2 = document.querySelector('.bullet2');
var bullet3 = document.querySelector('.bullet3');
var locatie = document.getElementById('locatie');
var tijd = document.getElementById ('tijd');
var film = document.getElementById ('film');


function eersteFunctie(){
  button1.classList.toggle('buttonclicked');
}

function tweedeFunctie(){
  button2.classList.toggle('buttonclicked');
}

function derdeFunctie(){
  button3.classList.toggle('buttonclicked');
}

function vierdeFunctie(){
  button4.classList.toggle('buttonclicked');
}

function shareFunctie(){
    fullscreen.classList.toggle('popup');
    body.classList.toggle('popup');
    header.classList.toggle('popup');
}

function sliderFunctie(){
    bullet3.classList.remove('bulletclicked');
    bullet1.classList.remove('bulletclicked');
    dagspecial.classList.remove('dagspecial1');
    dagspecial.classList.remove('dagspecial3');
    dagspecial.classList.add('dagspecial2');
    bullet2.classList.add('bulletclicked');
    locatie.innerHTML='Kino - Rotterdam';
    film.innerHTML='James Bond: No time to Die';
    tijd.innerHTML='vandaag 18:00'
}

function sliderFunctie2(){
    bullet2.classList.remove('bulletclicked');
    bullet1.classList.remove('bulletclicked');
    dagspecial.classList.remove('dagspecial1');
    dagspecial.classList.remove('dagspecial2');
    dagspecial.classList.add('dagspecial3');
    bullet3.classList.add('bulletclicked');
    locatie.innerHTML='Eye - Amsterdam';
    film.innerHTML='La Ultime Primavera';
    tijd.innerHTML='Maandag 20:00'
}

function sliderFunctie3(){
    bullet2.classList.remove('bulletclicked');
    bullet3.classList.remove('bulletclicked');
    dagspecial.classList.remove('dagspecial3');
    dagspecial.classList.remove('dagspecial2');
    dagspecial.classList.add('dagspecial1');
    bullet1.classList.add('bulletclicked');
    locatie.innerHTML='Lido - Leiden';
    film.innerHTML='Spiderman: Into the Spiderverse (OV)';
    tijd.innerHTML='morgen 16:00'
}

window.addEventListener('load', sliderFunctie);
window.addEventListener('load', sliderFunctie2);
window.addEventListener('load', sliderFunctie3);
button1.addEventListener('click', eersteFunctie);
button2.addEventListener('click', tweedeFunctie);
button3.addEventListener('click', derdeFunctie);
button4.addEventListener('click', vierdeFunctie);
sharebutton.addEventListener('click', shareFunctie);
fullscreen.addEventListener('click', shareFunctie);
bullet2.addEventListener('click', sliderFunctie);
bullet1.addEventListener('click', sliderFunctie3);
bullet3.addEventListener('click', sliderFunctie2);