const btnContainer = document.querySelector('#container')
const rockBtn = document.querySelector('#container #rock')
const paperBtn = document.querySelector('#container #paper')
const scissorBtn = document.querySelector('#container #scissor')

const rock = 'rock';
const paper = 'paper'
const scissor = 'scissor'

const choices = [rock, paper, scissor]
let index = Math.trunc(Math.random()*choices.length)

const getComputerChoice = () => choices[index]
const getHumanChoice = prompt('Enter your choice').toLowerCase()


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

console.log(playRound(getHumanChoice, getComputerChoice()))