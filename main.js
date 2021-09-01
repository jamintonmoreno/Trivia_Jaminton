// https://opentdb.com/api.php?amount=10 

'use strict'

// Se captura la informacion de los formularios de Configuracion y Respuestas
document.querySelector('#choose_yes').addEventListener('click', ()=>{location.href='./config-trivia.html'});
document.querySelector('#choose_random').addEventListener('click', ()=>{location.href='./answer-questions.html'});
