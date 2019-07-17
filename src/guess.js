import makeNumber from './makeNumber.js';
// Elements
const guess = document.getElementById('guess');
const guessButton = document.getElementById('gb');
const tries = document.getElementById('triesRemaining');
const youWin = document.getElementById('winner');
const youLose = document.getElementById('loser');
const answerDisplay = document.getElementById('answerIs');
const direction = document.getElementById('direction');
let correctNumber = Math.floor(Math.random() * 20 + 1);
console.log(correctNumber);
let triesRemaining = 4;
tries.textContent = (triesRemaining);

guessButton.addEventListener('click', () => {
    let guessInteger = parseInt(guess.value);
    console.log('guessInteger', guessInteger);
    const result = makeNumber(guessInteger, correctNumber);
    console.log(result);
    triesRemaining --;
    tries.textContent = (triesRemaining);
    console.log(triesRemaining);
    
    if(result === 0) {
        console.log('winner');
        guessButton.disabled = true;
        youWin.classList.remove('hidden');
        direction.classList.add('hidden');
        return;
    }    
    else if(triesRemaining === 0) {
        guessButton.disabled = true;
        youLose.classList.remove('hidden');
        direction.classList.add('hidden');

    }
    else if(result === -1) {
        console.log('TooLow');
        direction.classList.remove('hidden');
        answerDisplay.textContent = 'Low';
    }
    else if(result === 1) {
        console.log('TooHigh');
        direction.classList.remove('hidden');
        answerDisplay.textContent = 'High';
    }

});