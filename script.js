const btnContainer = document.querySelector('container')
const playerScore = document.getElementById('player-score')
const aiScore = document.getElementById('computer-score')
const playerChoice = document.getElementById('player-choice')
const aiChoice = document.getElementById('computer-choice')
const buttons = document.querySelectorAll('#container button')
const roundResult = document.getElementById('round-result')
const winner = document.getElementById('winner')
const restartBtn = document.getElementById('restartBtn')

const domElements = [playerScore, aiScore, playerChoice, aiChoice, roundResult, winner, restartBtn]

const rock = 'rock';
const paper = 'paper'
const scissor = 'scissor'

const choices = [rock, paper, scissor]
let index = Math.trunc(Math.random()*choices.length)

let getComputerChoice = () => choices[index]
const playRound = (playerSelection, aiSelection) => {

    if (playerSelection === aiSelection) {
        return 'It\'s a tie';
    } else {
        if (playerSelection === rock && aiSelection === paper) {
            return `AI won ${aiSelection} beats ${playerSelection}` 
        } else if (playerSelection === rock && aiSelection === scissor) {
            return `You won ${playerSelection} beats ${aiSelection}`
        } else if (playerSelection === paper && aiSelection === rock) {
            return `You won ${playerSelection} beats ${aiSelection}`
        } else if (playerSelection === paper && aiSelection === scissor) {
            return `AI won ${aiSelection} beats ${playerSelection}`
        } else if (playerSelection === scissor && aiSelection === rock) {
            return `AI won ${aiSelection} beats ${playerSelection}`
        } else if (playerSelection === scissor && aiSelection === paper) {
            return `You won ${playerSelection} beats ${aiSelection}`
        }
    }
}

let pScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let pc = e.target.id;
        let cc = getComputerChoice()
        if (!(pScore >= 5 || computerScore >= 5)) {
            let result = playRound(pc, cc)
            if (result.includes('AI')) {
                computerScore++;
            } else if (result.includes('You')) {
                pScore++;
            }
            playerScore.textContent = 'player score -> ' + pScore;
            aiScore.textContent = 'AI score -> ' + computerScore;
            playerChoice.textContent = 'Player: ' + pc;
            aiChoice.textContent = 'AI: ' + cc;
            roundResult.textContent = result;
            console.log('player --> ', pScore);
            console.log('AI --> ', computerScore);
            console.log(result);

            if (pScore === 5) {
                winner.textContent = 'You saved humanity from AI invasion'
                restartBtn.textContent = 'RESTART'
            } else if (computerScore === 5) {
                winner.textContent = 'AI has taken over humanity'
                restartBtn.textContent = 'RESTART'
            }
        } 
    })
})

restartBtn.addEventListener('click', () => {
    pScore = 0;
    computerScore = 0;
    domElements.forEach(el => el.textContent = '')
})
