const btnContainer = document.querySelector('#container')
const buttons = document.querySelectorAll('#container button')

const rock = 'rock';
const paper = 'paper'
const scissor = 'scissor'

const choices = [rock, paper, scissor]
let index = Math.trunc(Math.random()*choices.length)

let getComputerChoice = () => choices[index]


const playRound = (playerSelection, aiSelection) => {
    console.log('player -> ', playerSelection);
    console.log('AI -> ', aiSelection); 

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

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(playRound(e.target.id, getComputerChoice()))
    })
})