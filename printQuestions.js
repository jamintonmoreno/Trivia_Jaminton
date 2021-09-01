'use strict'

let questions = [];
let indexQuestion = 0;
let type_index = 0;
let for_index = 0;

/* Imprime las preguntas de la API en el HTML */
export const printQuestions = ((questionsData)=>{
    const containerQuestions = document.querySelector('#body-questions');
    containerQuestions.innerHTML = '';
    questionsData.forEach((question) => {
        indexQuestion++;
        /*Guarda preguntas en local storage*/
        const questionO =
        {
            question : question.question,
            correct_answer : question.correct_answer,
            incorrect_answers : question.incorrect_answers
        }
        questions.push(questionO);
        localStorage.setItem('questions', JSON.stringify(questions));
        /*****************************************/
        
        /* Ordena las respuestas aleatoriamente */
        const answersRandom = [question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1], question.incorrect_answers[2]];
        answersRandom.sort(()=>{ return Math.random() - 0.5 });
        /*****************************************/
        const html = `<div class="mt-3">
                                <div class="card h-100 bg-dark-ligth p-2 border-noone">
                                    <div class="card-body border text-white">
                                        ${indexQuestion}.- ${question.question}
                                        
                                        <div class="mt-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="${question.correct_answer}" name="type-${type_index}" id="answers[${for_index}]">
                                            <label class="form-check-label" for="answers[${for_index++}]">
                                            ${answersRandom[0]}
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="${question.incorrect_answers[1]}" name="type-${type_index}" id="answers[${for_index}]">
                                            <label class="form-check-label" for="answers[${for_index++}]">
                                            ${answersRandom[1]}
                                            </label>
                                        </div>

                                        <div class="form-check boolean">
                                            <input class="form-check-input" type="radio" value="${question.incorrect_answers[2]}" name="type-${type_index++}" id="answers[${for_index}]">
                                            <label class="form-check-label" for="answers[${for_index++}]">
                                            ${answersRandom[2]}
                                            </label>
                                        </div>
                                        <div class="form-check boolean">
                                            <input class="form-check-input" type="radio" value="${question.incorrect_answers[2]}" name="type-${type_index++}" id="answers[${for_index}]">
                                            <label class="form-check-label" for="answers[${for_index++}]">
                                            ${answersRandom[3]}
                                            </label>
                                        </div>
                                    
                                    <div>
                                    </div>
                                </div>
                            </div>
                            `
                            containerQuestions.innerHTML += html;

                /* Verifica si alguna respuesta es booleana solo imprime dos respuesta */
                 if (answersRandom[2] == undefined && answersRandom[3] == undefined) {
                      document.querySelectorAll('.boolean').forEach((clase)=>{
                          clase.classList.add('d-none');
                      })
                }
            
    });
});

