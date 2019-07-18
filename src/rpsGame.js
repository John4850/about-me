import getThrow from './rps.js';
import { didPlayerWin } from './did-player-win.js';


const throwButton = document.getElementById('throw-button');
throwButton.addEventListener('click', () => {
    const computerChoice = getThrow();
    const userChoice = document.querySelector('input:checked').value;
    const gameResult = didPlayerWin(userChoice, computerChoice);
    
    display(gameResult);
    console.log(computerChoice + ' - computer \'s throw');
    console.log(userChoice);
});
function display(result) {
    if(result === true) {
        console.log('Player Wins');
    }
    else if(result === false) {
        console.log('Player Loses');
    }
    else if(result === 'draw') {
        console.log('DRAW');
    }
}