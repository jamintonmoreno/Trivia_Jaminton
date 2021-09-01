'use strict'

import {printQuestions} from './printQuestions.js' 

const getValueInputs = localStorage.getItem('inputs'); 
const convertInputsJSON = JSON.parse(getValueInputs); 
let API_URL = `https://opentdb.com/api.php?amount=${convertInputsJSON[0]}` 


/* Verifica si el usuario selecciono otro campo. */
if (convertInputsJSON[1] !== 'any') {
    API_URL += `&category=${convertInputsJSON[1]}`
}
if (convertInputsJSON[2] !== 'any') {
    API_URL += `&difficulty=${convertInputsJSON[2]}`
}
if (convertInputsJSON[3] !== 'any') {
    API_URL += `&type=${convertInputsJSON[3]}`
}

/* Obtiene los datos de la API en formato JSON */
fetch(API_URL)
    .then(response => response.json())
    .then(data => printQuestions(data.results))

console.log('h');
const score = convertInputsJSON[0];
const modal = document.querySelector('#modal-body');
modal.innerHTML = `Yor score is: ${score} out of ${convertInputsJSON[0]}`