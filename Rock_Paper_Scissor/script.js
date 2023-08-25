let choices = ['rock', 'paper', 'scissor'];

let getComputerChoice = () => {
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

let playerChoice = prompt("Enter a choice:\nRock, Paper, Scissor");
let computerSelection = getComputerChoice();

let rock = 'rock';
let paper = 'paper';
let scissor = 'scissor';

let playRound = (playerSelection, computerSelection) => {

    console.log(`Human: ${playerSelection}`);
    console.log(`AI: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        return "It's a tie.";
    } else {
        if (playerSelection == rock && computerSelection == paper) {
            return `You loose! ${paper} beats ${rock}`;
        } else if (playerSelection == rock && computerSelection == scissor) {
            return `You win! ${rock} beats ${scissor}`;
        } else if (playerSelection == paper && computerSelection == rock) {
            return `You win! ${paper} beats ${rock}`;
        } else if (playerSelection == paper && computerSelection == scissor) {
            return `You loose! ${scissor} beats ${paper}`;
        } else if (playerSelection == scissor && computerSelection == rock) {
            return `You loose! ${rock} beats ${scissor}`;
        } else if (playerSelection == scissor && computerSelection == paper) {
            return `You win! ${scissor} beats ${paper}`;
        }
    }
}

console.log(playRound(playerChoice,getComputerChoice()));