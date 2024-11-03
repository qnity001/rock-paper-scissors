let humanScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    playRound("rock", computerSelection);
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    playRound("paper", computerSelection);
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    playRound("scissors", computerSelection);
});

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

// Play one round and get output
function playRound(human, computer)
{
    const result = document.querySelector(".result");

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
            roundResult.teexContent = "You win! Scissors beat Paper.";
            humanScore += 1;
        }
        else {
            roundResult.textContent = "You lose! Rock beats scissors.";
            computerScore += 1;
        }
    }

    result.appendChild(roundResult);

    const score = document.createElement("div");
    const humanScorePrint = document.createElement("div");
    humanScorePrint.textContent = "Your score: " + humanScore;
    score.appendChild(humanScorePrint);

    const compScorePrint = document.createElement("div");
    compScorePrint.textContent = "Computer score: " + computerScore;
    score.appendChild(compScorePrint);

    result.appendChild(score);
}


