//The player and computer's score
let playerScore = 0;
let computerScore = 0;

//References
const input = document.querySelector('.input');
const lowerB = document.querySelector('#lower-b');
const upperB = document.querySelector('#upper-b');
const rounds = document.querySelector('#rounds');
const parameters = document.querySelector('.parameters');

//Parameters of the game
let lowerBound = 0;
let upperBound = 0;
let numRounds = Number(rounds.value);

//Creates the form to gather the parameters
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
const theCounter = document.createElement('div');
theCounter.classList.add('counter');

const playerPoints = document.createElement('p');
playerPoints.setAttribute('id', 'player-points');
playerPoints.textContent = `Your score is: ${playerScore}`
const computerPoints = document.createElement('p');
computerPoints.setAttribute('id', 'computer-points');
computerPoints.textContent = `The Computer's score is: ${computerScore}`

theCounter.appendChild(playerPoints);
theCounter.appendChild(computerPoints);


/*

For when the game is finished (numRounds == 0)

*/
const gameOver = document.createElement('div');
gameOver.classList.add('game-over');
const gameOverText = document.createElement('p');
gameOverText.classList.add('game-over');
const restart = document.createElement('input');
restart.classList.add('restart-button');
restart.type = 'button';
restart.value = 'Restart';
gameOver.appendChild(gameOverText);
gameOver.appendChild(restart);

restart.addEventListener('click', () => {
    document.body.removeChild(gameOver);
    input.appendChild(parameters);
})


//function that begins the game once the startbutton is clicked
function beginGame(e) {
    lowerBound = Number(lowerB.value);
    upperBound = Number(upperB.value);
    numRounds = Number(rounds.value);
    input.removeChild(parameters);
    input.appendChild(playerInputForm);

    console.log(`lowerBound = ${lowerBound}, upperBound = ${upperBound}, numRounds = ${numRounds}`);
    textLabelPlayer.textContent = `Input your number (any number from ${lowerBound} to ${upperBound}): `;
    document.body.insertBefore(theCounter, document.body.children[1]);

    e.preventDefault();
}

const startButton = document.querySelector('#start-button');

//for the forms
parameters.addEventListener('submit', beginGame);
playerInputForm.addEventListener('submit', playGame);
  


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
function playGame(e) {
    let num = Number(playerNumber.value);
    let comp = computerPlay(upperBound, lowerBound);
    if (num > comp) {
        playerScore++;
    }
    else {
        computerScore++;
    }

    playerPoints.textContent = `Your score is: ${playerScore}`;
    computerPoints.textContent = `The Computer's score is: ${computerScore}`;

    numRounds--;

    //When the player has played through the specified number of rounds, execute this:
    if (numRounds == 0) {
        document.body.removeChild(theCounter);
        input.removeChild(playerInputForm);
        document.body.appendChild(gameOver);
        if (playerScore > computerScore) {
            gameOverText.textContent = 'Congratulations! You won against the computer!'
        }
        else if (playerScore < computerScore) {
            gameOverText.textContent = 'Oh no! Unfortunately you lost against the computer!'
        }
        else {
            gameOverText.textContent = 'It is a tie!!'
        }
    }
    

    console.log(numRounds);

    e.preventDefault();
}

/*
for (let i = 0; i < numRounds; i++) {
    console.log(playGame());
}
*/