import isYes from './is-yes.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quizButton');
const quizResult = document.getElementById('quizResult');

// // Event Handlers
quizButton.onclick = startQuiz;


function startQuiz() {
    const confirmed = confirm('Let\'s see how well you know my best friend. Think you\'re ready?');

    if(confirmed === false) {
        return;
    }
    let name = '';

    const nameResult = prompt('What is your name');
    name = name += nameResult;
    console.log(name);

    let correctAnswers = 0;
    const firstQuestion = prompt('Is my best friend\'s name Meeko?');
    if(isYes(firstQuestion) === true) {
        correctAnswers += 1;
    }
    else {
        correctAnswers += 0;
    }
    const secondQuestion = prompt('Does he prefer Food over Pets?');
    if(isYes(secondQuestion) === true) {
        correctAnswers += 1;
    }
    else {
        correctAnswers += 0;
    }
    
    const thirdQuestion = prompt('Will he steal your girl?');
    if(isYes(thirdQuestion) === true) {
        correctAnswers += 1;
    }
    // else {
        //     correctAnswers + 0;
        // }
    let response = 'Your name is ' + name + ' ';
        
    if(correctAnswers >= 3) {
        response += 'and you know a little about my best friend.';
    }
    else {
        response += ' And you need to meet my best friend.';
            
    }
    console.log(correctAnswers);
    const percentScore = Math.floor((correctAnswers / 3) * 100);
    quizResult.textContent = correctAnswers + '/3 ' + response + ' ' + percentScore + '%';
    //Sam fixed my math
}