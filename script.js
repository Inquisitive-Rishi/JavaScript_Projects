// DOM: player choice :
const buttons = document.querySelectorAll('.button');
const choice = document.querySelector('#choice');
const pc = document.querySelector('#player-choice')
const cc = document.querySelector('#computer-choice')
const rr = document.querySelector('#rnd-rslt')
const rslt = document.querySelector('#rslt')
const scoreDiv = document.querySelector('#score-feed');
const ps = document.querySelector('#player-score');
const cs = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');
const pw = document.querySelector('#pw');
const cw = document.querySelector('#cw');

const rldbtndiv = document.querySelector('#rldBtn');
const rldbtn = document.createElement('div');

rldbtn.style.padding = '15px';
rldbtn.style.fontSize = '24px';
rldbtn.style.border = '1px solid black';
rldbtn.style.backgroundColor = 'rgb(231, 62, 62)';


choice.appendChild(pc);
choice.appendChild(cc);   
scoreDiv.appendChild(ps);
scoreDiv.appendChild(cs);
winner.appendChild(pw)
winner.appendChild(cw)
rslt.appendChild(rr)

buttons.forEach(button => {
    button.addEventListener('click', () => 
    playRound(button.id,getComputerChoice()))
});

function reloadPage() {
    rldbtndiv.appendChild(rldbtn);
    rldbtn.textContent = "Reset";
    rldbtn.addEventListener('click', ()=> window.location.reload());
}

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
        return;
    }

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
    if (computerScore >= 5 || playerScore >= 5) {
        checkWinner();
        reloadPage();
        return;
}
}

function checkWinner() {
    if (playerScore > computerScore) {
        pw.textContent = "You saved the humanity from AI invasion."
    } else {
        cw.textContent = "OMG! AI has taken over humanity!";
    }
}   