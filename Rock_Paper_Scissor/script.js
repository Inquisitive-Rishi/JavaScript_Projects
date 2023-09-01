// DOM: player choice :
const buttons = document.querySelectorAll('button');
const feed = document.querySelector('#feed');
const pc = document.querySelector('#pc')
const cc = document.querySelector('#cc')
const rr = document.querySelector('#rnd-rslt')
const scoreDiv = document.querySelector('#score-feed');
const ps = document.querySelector('#ps');
const cs = document.querySelector('#cs');
const winner = document.querySelector('#winner');
const pw = document.querySelector('#pw');
const cw = document.querySelector('#cs');

feed.appendChild(pc);
feed.appendChild(cc);   
feed.appendChild(rr);
scoreDiv.appendChild(ps);
scoreDiv.appendChild(cs);
winner.appendChild(pw)
winner.appendChild(cw)

buttons.forEach(button => {
    button.addEventListener('click', () => 
    playRound(button.id,getComputerChoice()))
});

let choices = ['rock', 'paper', 'scissor'];

let getComputerChoice = () => {
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

let rock = 'rock';
let paper = 'paper';
let scissor = 'scissor';
let result; 

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (computerScore >= 5 || playerScore >= 5) {
        checkWinner();
        return;
    } else {
        pc.textContent = `Human: ${playerSelection}`
        cc.textContent = `AI: ${computerSelection}`
        if (playerSelection == computerSelection) {
            result = "It's a tie.";
            rr.textContent = result;
            computerScore+=0;
            playerScore+=0;
    } else {
        if (playerSelection == rock && computerSelection == paper) {
            result = `You loose! ${paper} beats ${rock}`;
            rr.textContent = result;
            computerScore++;
        } else if (playerSelection == rock && computerSelection == scissor) {
            result = `You win! ${rock} beats ${scissor}`;
            rr.textContent = result;
            playerScore++
        } else if (playerSelection == paper && computerSelection == rock) {
            result = `You win! ${paper} beats ${rock}`;
            rr.textContent = result;
            playerScore++
        } else if (playerSelection == paper && computerSelection == scissor) {
            result = `You loose! ${scissor} beats ${paper}`;
            rr.textContent = result;
            computerScore++;
        } else if (playerSelection == scissor && computerSelection == rock) {
            result = `You loose! ${rock} beats ${scissor}`;
            rr.textContent = result;
            computerScore++;
        } else if (playerSelection == scissor && computerSelection == paper) {
            result = `You win! ${scissor} beats ${paper}`;
            rr.textContent = result;
            playerScore++;
        }
    }
    ps.textContent = `Player score: ${playerScore}`;
    cs.textContent = `Computer Score: ${computerScore}`;
}
}

function checkWinner() {
    if (playerScore > computerScore) {
        pw.textContent = "You saved the humanity from AI invasion."
    } else {
        cw.textContent = "OMG! AI has taken over humanity!";
    }
}   