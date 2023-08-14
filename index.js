
function getComputerChoice(){
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomHand = Math.floor(Math.random() * 3);
    return choices[randomHand];
}

const playerSelection = prompt("Write a Rock, Paper, or Scissors").toUpperCase();
const computerChoice = getComputerChoice();

function playRound(playerSelection, computerChoice){
    if(playerSelection == "ROCK"){
        if(computerChoice == "PAPER"){
            return "Computer Won";
        }
        else if(computerChoice == "ROCK"){
            return "Its a Draw!!!";
        }
        else if(computerChoice == "SCISSORS"){
            return "Player Won";
        }
    }
    else if(playerSelection == "SCISSORS"){
        if(computerChoice == "PAPER"){
            return "Player Won";
        }
        else if(computerChoice == "ROCK"){
            return "Computer Won";
        }
        else if(computerChoice == "SCISSPRS"){
            return "Its a Draw!!!";
        }
    }
    else if(playerSelection=="PAPER"){
        if(computerChoice == "PAPER"){
            return "Its a Draw!!!";
        }
        else if(computerChoice == "ROCK"){
            return "Player Won";
        }
        else if(computerChoice == "SCISSPRS"){
            return "Computer Won";
        }
    }
    
}


console.log("C: ",computerChoice);
console.log("P: ",playerSelection);

result = playRound(playerSelection, computerChoice);
console.log(result);



