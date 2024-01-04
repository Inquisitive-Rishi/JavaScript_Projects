const btnContainer = document.querySelector('#container')
const playerScore = document.getElementById('#player-score')
const aiScore = document.getElementById('#computer-score')
const playerChoice = document.getElementById('#player-choice')
const aiChoice = document.getElementById('#computer-choice')
const buttons = document.querySelectorAll('#container button')
const playerWinner = document.getElementById('#player-winner')
const aiWinner = document.getElementById('#ai-winner')

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
        let result = playRound(e.target.id, getComputerChoice())
        if (result.includes('AI')) {
            computerScore++;
        } else if (result.includes('You')) {
            pScore++;
        }
        console.log('player --> ', pScore);
        console.log('AI --> ', computerScore);
        console.log(result);
    })
})
