// DOM: player choice :
const feed = document.querySelector('#feed');
const pc = document.querySelector('#pc')
const cc = document.querySelector('#cc')
const rr = document.querySelector('#rnd-rslt')

feed.appendChild(pc);
feed.appendChild(cc);   
feed.appendChild(rr);



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

    pc.textContent = `Human: ${playerSelection}`
    cc.textContent = `AI: ${computerSelection}`
    console.log()
    pc.textContent = `Human: ${playerSelection}`;
    cc.textContent = `AI: ${computerSelection}`;
    if (playerSelection == computerSelection) {
        result = "It's a tie.";
        rr.textContent = result;
    } else {
        if (playerSelection == rock && computerSelection == paper) {
            result = `You loose! ${paper} beats ${rock}`;
            rr.textContent = result;
        } else if (playerSelection == rock && computerSelection == scissor) {
            result = `You win! ${rock} beats ${scissor}`;
            rr.textContent = result;
        } else if (playerSelection == paper && computerSelection == rock) {
            result = `You win! ${paper} beats ${rock}`;
            rr.textContent = result;
        } else if (playerSelection == paper && computerSelection == scissor) {
            result = `You loose! ${scissor} beats ${paper}`;
            rr.textContent = result;
        } else if (playerSelection == scissor && computerSelection == rock) {
            result = `You loose! ${rock} beats ${scissor}`;
            rr.textContent = result;
        } else if (playerSelection == scissor && computerSelection == paper) {
            result = `You win! ${scissor} beats ${paper}`;
            rr.textContent = result;
        }
    }
}

let playerScore = 0;
let computerScore = 0;

let game = () => {
    playRound();
        if (result.includes("win"))     {
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

// DOM: button Choice
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.id,getComputerChoice()))
});

