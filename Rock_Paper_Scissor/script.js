let choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    let choice = Math.floor(Math.random()*choices.length);
    return choices[choice];
}

console.log(getComputerChoice());