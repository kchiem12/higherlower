let counter = 0;

const input = document.querySelector('.input');

const lowerBound = document.querySelector('#lower-b');
const upperBound = document.querySelector('#upper-b');
const numRounds = document.querySelector('#rounds');
const parameters = document.querySelector('.parameters');

//function that begins the game once the startbutton is clicked
function beginGame(e) {
    console.log(`Hello the even that occurred is ${e}`);
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