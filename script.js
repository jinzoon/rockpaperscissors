// this  program is going to 
// play rock paper scissors

//first it will get the computer's
// choice
// it will use a random number to do this
// 0 rock, 1 paper, 2, scissors

// it will then take the players choice

//these two will be checked against each other

// the winner score will be increased and it will output 
// the winner  with the current score 

//the game will run four more times
// and then the final winner will be announced

let humanScore = 0;
let computerScore = 0;


//let playerChoice = getPlayerChoice().toLowerCase();
//let computerChoice = getComputerChoice();

playGame();
if (humanScore > computerScore){
    console.log("You win!")
}
else if (computerScore > humanScore){
    console.log("I win!")
}
else {
    console.log("Tie! We're both winners!")
}

//plays one round of the game
function playRound (playerChoice,computerChoice )
{
    if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")

    ) 
    {
        console.log("You win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1) + " beats " + computerChoice + "!")
        humanScore++;
    }
    else if  (
        (computerChoice == "rock" &&  playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
        
    ) 
    {
        console.log("I win! " + computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1)  + " beats " + playerChoice + "!")
        computerScore++;
    }
    else {
        console.log("Tie! You both chose " + playerChoice )
    }
}


function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound(getPlayerChoice().toLowerCase(),getComputerChoice());
        console.log("Your score is "+ humanScore + " My score is " + computerScore )
    }
}


// Gets the player's choice
function getPlayerChoice(){
    return prompt("Rock, paper, scissors?")
}

// Returns the computer choice a string
function getComputerChoice() {
    let randomNumber = getRandomInt(1, 4);
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2)
    {
        return "paper";
    }    
    else if (randomNumber == 3) {
        return "scissors";
    }
    else {
        return null;
    }
}


//Creates a random number between to integers
//The lower bound is inclusive, the upper bound is exclusive
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}