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
    
    console.log("You played " + human);
    console.log("Computer played " + computer);

    if (human === computer) {
        console.log("It's a tie!");
    }

    else if (human === "rock") {
        if (computer === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore += 1;
        }
        else {
            console.log("You win! Rock beats Scissors.");
            humanScore += 1;
        }
    }

    else if (human === "paper") {
        if (computer === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        }
        else {
            console.log("You lose. Scissors beat Paper.");
            computerScore += 1;
        }
    }

    else {
        if (computer === "paper") {
            console.log("You win! Scissors beat Paper.");
            humanScore += 1;
        }
        else {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        }
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}


