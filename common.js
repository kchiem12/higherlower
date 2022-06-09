let counter = 0;

const input = document.querySelector('.input');

const lowerB = document.querySelector('#lower-b');
const upperB = document.querySelector('#upper-b');
const rounds = document.querySelector('#rounds');
const parameters = document.querySelector('.parameters');

let lowerBound = 0;
let upperBound = 0;
let numRounds = 0;

const playerInputForm = document.createElement('form');
playerInputForm.classList.add('player-input');

//this is to obtain the player's input
const playerInput = document.createElement('p');
playerInput.classList.add('game-input');

const submission = document.createElement('p');
submission.classList.add('game-input');
const submitButton = document.createElement('input');
submitButton.setAttribute('id', 'submit-button');
submitButton.type = 'submit';
submitButton.value = 'Submit your number!';
submission.appendChild(submitButton);


const textLabelPlayer = document.createElement('label');
textLabelPlayer.htmlFor = 'player-num-input';

const playerNumber = document.createElement('input');
playerNumber.type = 'text';
playerNumber.name = 'player-num-input';
playerNumber.required = true;

playerInput.appendChild(textLabelPlayer);
playerInput.appendChild(playerNumber);
playerInputForm.appendChild(playerInput);
playerInputForm.appendChild(submission);




//creates the counter
const theCounter = document.createElement('p');
theCounter.classList.add('counter');





//function that begins the game once the startbutton is clicked
function beginGame(e) {
    lowerBound = Number(lowerB.value);
    upperBound = Number(upperB.value);
    numRounds = Number(rounds.value);
    input.removeChild(parameters);
    input.appendChild(playerInputForm);
    console.log(`lowerBound = ${lowerBound}, upperBound = ${upperBound}, numRounds = ${numRounds}`);
    textLabelPlayer.textContent = `Input your number (any number from ${lowerBound} to ${upperBound}): `;

    e.preventDefault();


}

const startButton = document.querySelector('#start-button');

parameters.addEventListener('submit', beginGame);

  


/**
 * Randomly generates a number for the computer to select
 * @param  {Number} upper The upper bound that computer can select
 * @param  {Number} lower The lower bound that computer can select
 * @return {Number}       The number that the computer selects
 */
function computerPlay(upper, lower) {
    return Math.round(Math.random() * (upper-lower) + lower);
}

/**
 * Executes game play for a certain number of times
 * @return {String}   Message displayed in console for the result of the round
 */
function playGame() {
    let num = prompt(`What number do you pick (from ${lowerBound} to ${upperBound})`);
    let comp = computerPlay(upperBound, lowerBound);
    if (num > comp) {
        counter++;
        return `The computer selected ${comp}, which is less than ${num}. You win this round!\nScore is ${counter}`;
    }
    else if (num < comp) {
        if (counter > 0) counter--;
        return `The computer selected ${comp}, which is greater than ${num}. You lose this round!\nScore is ${counter}`;
    }
    else {
        return `The computer selected ${comp}, in which you both tie!\nScore is ${counter}`;
    }
}


/*
for (let i = 0; i < numRounds; i++) {
    console.log(playGame());
}
*/