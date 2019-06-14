const submit = document.getElementById('submit');
const result = document.getElementById('result');
const answer = document.getElementById('answer');
const nameId = document.getElementById('name');
const questionId = document.getElementById('question');


let name = [];
let question = [];


function getName(element) {
    name = setData(element);

}

function getQuestion(element) {
    question = setData(element);
}


function setData(element) {
    const array = element.value;
    if (element.value === '') {
        element.classList.add('error');
    }
    else {
        element.classList.remove('error');
    }
    return array;
}

arrayWords = ["Так", "Ні", "Можливо", "100%", "Без сумніву", "Не можу зараз точно  сказати",
    "Все буде залежати від тебе", "Скоріш за все"];
function randomWords(array) {
    const arraysLenght = array.length - 1;
    let rand = (Math.random() * (arraysLenght)).toFixed();
    return array[rand];
}
console.log(randomWords(arrayWords))
const allResult = [];


function generator() {
    const results = {
        name: nameId.value,
        question:questionId.value,
        answer: randomWords(arrayWords)
    }
allResult.push(results);

    result.classList.add('load');
    setTimeout(function () {

        if (name.value !== 0 && question.value !== 0) {
            result.innerHTML = results.name + `,` + randomWords(arrayWords)  ;
            console.log(nameId.value);
        }
        else {
            console.log('Errors!');
        }
        result.classList.remove('load');
    }, 3000);
}


window.onload = function () {


   

    question = questionId.value.split('');
    name = nameId.value.split('');
    console.log(name);
    console.log(question);
    submit.addEventListener('click', generator);
}

