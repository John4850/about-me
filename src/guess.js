import makeNumber from './makeNumber.js';
// Elements
const guess = document.getElementById('guess');
const guessButton = document.getElementById('gb');

guessButton.addEventListener('click', () => {
    let correctNumber = 5;
    let guessInteger = parseInt(guess.value);
    console.log('guessInteger', guessInteger);
    const result = makeNumber(guessInteger, correctNumber);
    console.log(result);
});