import makeNumber from './makeNumber.js';
const guess = document.getElementById('guess');
const guessButton = document.getElementById('gb');
const tries = document.getElementById('triesRemaining');
const youWin = document.getElementById('winner');
const youLose = document.getElementById('loser');
const answerDisplay = document.getElementById('answerIs');
const direction = document.getElementById('direction');
let correctNumber = Math.floor(Math.random() * 20 + 1);
let triesRemaining = 4;
tries.textContent = (triesRemaining);

guessButton.addEventListener('click', () => {
    let guessInteger = parseInt(guess.value);
    const result = makeNumber(guessInteger, correctNumber);
    triesRemaining --;
    tries.textContent = (triesRemaining);
    if(result === 0) {
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
        direction.classList.remove('hidden');
        answerDisplay.textContent = 'Low';
    }
    else if(result === 1) {
        direction.classList.remove('hidden');
        answerDisplay.textContent = 'High';
    }
});