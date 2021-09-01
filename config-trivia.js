'use strict'
const formSelect = document.querySelector('#form-selectTrivia');
const btn_submit = document.querySelector('#btn_submit');

const userInputs = [];

//Obtiene el value de los inputs
formSelect.addEventListener('submit', (e)=>{
    e.preventDefault();
    const amount = document.querySelector('#amount').value;
    const category = document.querySelector('#selectCategory').value;
    const difficulty = document.querySelector('#selectDifficulty').value;
    const type = document.querySelector('#selectType').value;
    userInputs.push(amount, category, difficulty, type); // Agrega los datos a un arreglo
    localStorage.setItem('inputs', JSON.stringify(userInputs));  //Guarda los datos del arreglo en el localStorage

});




/* Abre la trivia seleccionada */
btn_submit.addEventListener('click', ()=>{ location.href='answer-questions.html'});