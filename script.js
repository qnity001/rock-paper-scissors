// Declaring variables for score
let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

const buttonContainer = document.querySelector(".container");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

const roundResult = document.createElement("div");

getHumanChoice();

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
    buttonContainer.addEventListener("click", playGame);
}

function playGame(event) {
    const humanChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice(); 
    playRound(humanChoice, computerChoice);
}

// Function to play one round and display winner for each round
function playRound(human, computer)
{
    const humanChoice = document.querySelector(".user-play");
    humanChoice.textContent = "You played " + human;

    const compChoice = document.querySelector(".bot-play");
    compChoice.textContent = "Computer played " + computer;

    
    
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

    resultText.appendChild(roundResult);
    displayScore();
    if (humanScore == 5 || computerScore == 5) {
        buttonContainer.removeEventListener("click", playGame);
        displayResult();
    }
}



// Function to display score after each round 
function displayScore() {
    const humanScorePrint = document.querySelector(".human-score");
    humanScorePrint.textContent = "Your score: " + humanScore;

    const compScorePrint = document.querySelector(".computer-score");
    compScorePrint.textContent = "Bot score: " + computerScore;
}


// Function to display final result after 5 rounds
function displayResult() 
{
    const yes = document.createElement("div");

    if (humanScore == 5) {
        yes.textContent = "HUMANNNN FOR THE WIN";
    }
    else {
        yes.textContent = "COMPUTERRRR FOR THE WIN";
    }

    resultText.appendChild(yes);
}

// Set up button to refresh the page
const replay = document.querySelector(".replay");
replay.addEventListener("click", () => {
    location.reload();
});

