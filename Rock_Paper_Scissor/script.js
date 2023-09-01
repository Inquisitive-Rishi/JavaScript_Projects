let choices = ['rock', 'paper', 'scissor'];

let getComputerChoice = () => {
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

let rock = 'rock';
let paper = 'paper';
let scissor = 'scissor';
let result; 

let playRound = (playerSelection, computerSelection) => {
    playerSelection = prompt("Enter a choice:\nRock, Paper, Scissor").toLowerCase();
    computerSelection = getComputerChoice();

    console.log(`Human: ${playerSelection}`);
    console.log(`AI: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        result = "It's a tie.";
        console.log(result);
    } else {
        if (playerSelection == rock && computerSelection == paper) {
            result = `You loose! ${paper} beats ${rock}`;
            console.log(result);
        } else if (playerSelection == rock && computerSelection == scissor) {
            result = `You win! ${rock} beats ${scissor}`;
            console.log(result);
        } else if (playerSelection == paper && computerSelection == rock) {
            result = `You win! ${paper} beats ${rock}`;
            console.log(result);
        } else if (playerSelection == paper && computerSelection == scissor) {
            result = `You loose! ${scissor} beats ${paper}`;
            console.log(result);
        } else if (playerSelection == scissor && computerSelection == rock) {
            result = `You loose! ${rock} beats ${scissor}`;
            console.log(result);
        } else if (playerSelection == scissor && computerSelection == paper) {
            result = `You win! ${scissor} beats ${paper}`;
            console.log(result);
        }
    }
}

let playerScore = 0;
let computerScore = 0;

let game = () => {
        playRound();
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("loose")) {
            computerScore++;
        }
    checkWinner();
}

function checkWinner() {
    console.log();
    console.log("---FINAL SCORE---");
    console.log("Player: "+playerScore);
    console.log("AI: "+computerScore);
    if (playerScore > computerScore) {
        console.log("You saved the humanity from AI invasion.");
    } else if (playerScore < computerScore) {
        console.log("OMG! AI has taken over humanity!");
    } else {
        console.log("It was a tough fight! No one wins.");
    }
}
game();