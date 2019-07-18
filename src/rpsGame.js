import getThrow from './rps.js';


const throwButton = document.getElementById('throw-button');
throwButton.addEventListener('click', () => {
    const computerChoice = getThrow();
    const userChoice = document.querySelector('input:checked').value;
//    const winner = whoWon(userChoice, computerChoice); 
    

    console.log(computerChoice + ' - computer \'s throw');
    console.log(userChoice);
    
});