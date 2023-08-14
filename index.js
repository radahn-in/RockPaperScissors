
function getComputerChoice(){
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomHand = Math.floor(Math.random() * 3);
    return choices[randomHand];
}

const playerSelection = prompt("Write a Rock, Paper, or Scissors").toUpperCase();
const computerChoice = getComputerChoice();


console.log("C: ",computerChoice);
console.log("P: ",playerSelection);



