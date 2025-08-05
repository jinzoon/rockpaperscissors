let humanScore = 0;
let computerScore = 0;
let playerChoice = null;
let roundNumber = 0;

const rockButton = document.querySelector(".selectionContainer__rockSelection");
const paperButton = document.querySelector(".selectionContainer__paperSelection");
const scissorButton = document.querySelector(".selectionContainer__scissorsSelection");
const scoreText = document.querySelector(".scoreText");
const currentScoreText = document.createElement("p");
const parentDIV = document.querySelector(".main")
const finalText = document.createElement("div");



rockButton.addEventListener("click", () => {
 //alert("Rock World");
 playerChoice = "rock";
 playRound(playerChoice,getComputerChoice(),scoreText,currentScoreText)
});


paperButton.addEventListener("click", () => {
 //alert("Paper World");
 playerChoice = "paper";
 playRound(playerChoice,getComputerChoice(),scoreText,currentScoreText)
});

scissorButton.addEventListener("click", () => {
 //alert("Scissor World");
 playerChoice = "scissors";
 playRound(playerChoice,getComputerChoice(),scoreText,currentScoreText)
});








//plays one round of the game
// this is done by comparing the player choice to the computer choice
// if the final score text is viewable, it is removed on playing the game
// 
function playRound (playerChoice,computerChoice, scoreText, currentScoreText)
{
    let resultString = null;

    if (document.body.contains(finalText)){
        finalText.remove()
    }


    if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")

    ) 
    {
        
        resultString = "<h2>Round " + (roundNumber+1) + ": You win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1) + " beats " + computerChoice + "!</h2>";
        scoreText.innerHTML = resultString;
        humanScore++;
        currentScoreText.textContent = "Your score is "+ humanScore + " My score is " + computerScore;
        scoreText.appendChild(currentScoreText);
    }
    else if  (
        (computerChoice == "rock" &&  playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
        
    ) 
    {
        
        resultString = "<h2>Round " + (roundNumber+1) + ": I win! " + computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1) + " beats " + playerChoice + "!</h2>";
        scoreText.innerHTML = resultString;
        computerScore++;
        currentScoreText.textContent = "Your score is "+ humanScore + " My score is " + computerScore;
        scoreText.appendChild(currentScoreText);
    }
    else {
        
        resultString = "<h2>Round " + (roundNumber+1) +": Tie! We both chose " + playerChoice + "</h2>";
        scoreText.innerHTML = resultString;
        currentScoreText.textContent = "Your score is "+ humanScore + " My score is " + computerScore;
        scoreText.appendChild(currentScoreText);
    }

    roundNumber++;
    // if this is the final round, the final scores and ultimate winner is displayed
    if (roundNumber == 5 && humanScore > computerScore){
        finalText.innerHTML = "<h1>You win!</h1>";
        parentDIV.insertBefore(finalText,scoreText)
        parentDIV.style.textAlign = "center"
        roundNumber = 0;
        humanScore = 0;
        computerScore =0;
    }
    else if (roundNumber == 5 && computerScore > humanScore){
        finalText.innerHTML = "<h1>I win!</h1>";
        parentDIV.insertBefore(finalText,scoreText)
        parentDIV.style.textAlign = "center"
        roundNumber = 0;
        humanScore = 0;
        computerScore =0;
    }
    else if (roundNumber == 5){
        finalText.innerHTML = "<h1>Tie! We're both winners!</h1>";
        parentDIV.insertBefore(finalText,scoreText)
        parentDIV.style.textAlign = "center"

        roundNumber = 0;
        humanScore = 0;
        computerScore =0;
}     
    
}





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