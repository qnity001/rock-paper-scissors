// Declaring variables for score
let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
startGame();

function startGame() {
    getHumanChoice();
}

// Functions

// Function to return random choice from Computer
function getComputerChoice()
{
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Function to set Event listener for user choice
function getHumanChoice() {
    const buttonContainer = document.querySelector(".container"); // Assuming buttons are in a container
    
    buttonContainer.addEventListener("click", (event) => {
        const humanChoice = event.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice);
    });
}

// Function to play one round and display winner for each round
function playRound(human, computer)
{
    const humanChoice = document.createElement("div");
    humanChoice.textContent = "You played " + human;
    result.appendChild(humanChoice);

    const compChoice = document.createElement("div");
    compChoice.textContent = "Computer played " + computer;
    result.appendChild(compChoice);

    const roundResult = document.createElement("div");

    if (human === computer) {
        roundResult.textContent = "It's a tie!";
    }

    else if (human === "rock") {
        if (computer === "paper") {
            roundResult.textContent = "You lose! Paper beats Rock.";
            computerScore += 1;
        }
        else {
            roundResult.textContent = "You win! Rock beats Scissors.";
            humanScore += 1;
        }
    }

    else if (human === "paper") {
        if (computer === "rock") {
            roundResult.textContent = "You win! Paper beats Rock.";
            humanScore += 1;
        }
        else {
            roundResult.textContent = "You lose. Scissors beat Paper.";
            computerScore += 1;
        }
    }

    else {
        if (computer === "paper") {
            roundResult.textContent = "You win! Scissors beat Paper.";
            humanScore += 1;
        }
        else {
            roundResult.textContent = "You lose! Rock beats scissors.";
            computerScore += 1;
        }
    }

    result.appendChild(roundResult);
    displayScore();
}



// Function to display score after each round 
function displayScore() {
    const score = document.createElement("div");
    const humanScorePrint = document.createElement("div");
    humanScorePrint.textContent = "Your score: " + humanScore;
    score.appendChild(humanScorePrint);

    const compScorePrint = document.createElement("div");
    compScorePrint.textContent = "Computer score: " + computerScore;
    score.appendChild(compScorePrint);

    result.appendChild(score);
}

// Function to display final result after 5 rounds
function displayResult() 
{
    if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    }
    else if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else {
        console.log("It's a tie!");
    }
}

