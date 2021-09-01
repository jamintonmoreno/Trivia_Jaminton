// https://opentdb.com/api.php?amount=10 

let mainForm = document.getElementById('main-form');
let questions = [];

//Funciones

const createURLApi = e => {
    e.preventDefault();
    let amount = document.getElementById('amount').value;
    let category = document.getElementById('category').value;
    let difficulty = document.getElementById('difficulty').value;
    let type = document.getElementById('type').value;
    const API = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    fetchDataApi(API);
};

const fetchDataApi = url => {
    fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error));
};

// Events

mainForm.onsubmit = createURLApi;
