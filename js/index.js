import {questions} from "./questions.js";
let questionsOK=[];
let questionsNext=[];
document.getElementById("next").addEventListener("click",next);
document.getElementById("ok").addEventListener("click",ok);


function next() {
    const aux = getQuestion();
    questionsNext.push(aux);
    console.log(questionsNext);
}

function ok() {
    const aux = getQuestion();
    questionsOK.push(aux);
    console.log(questionsOK);
}

function getQuestion() {
    if (questions.length > 0) {
        const question = questions.pop();
        document.getElementById("question1").innerText=question.opt1;
        document.getElementById("question2").innerText=question.opt2;
        return question;
    }else{
        return {"error":"Texto de ejemplo"};
    }
}