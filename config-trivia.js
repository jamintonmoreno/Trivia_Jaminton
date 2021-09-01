'use strict'
const formSelect = document.querySelector('#form-selectTrivia');
const btn_submit = document.querySelector('#btn_submit');
const userInputs = [];

// Se obtiene la informacion del formulario principal y se ingresan a un arreglo.
formSelect.addEventListener('submit', (e)=>{
    e.preventDefault();
    const amount = document.querySelector('#amount').value;
    const category = document.querySelector('#selectCategory').value;
    const difficulty = document.querySelector('#selectDifficulty').value;
    const type = document.querySelector('#selectType').value;
    userInputs.push(amount, category, difficulty, type); 
    localStorage.setItem('inputs', JSON.stringify(userInputs)); 
});

/* Nos envia a la pagina con formulario para diligenciar */
btn_submit.addEventListener('click', ()=>{ location.href='answer-questions.html'});