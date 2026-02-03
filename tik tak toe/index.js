

let buttons = document.querySelectorAll('button');
let resultDiv = document.getElementById("result");
let userScoreDisplay = document.getElementById("user-score");
let computerScoreDisplay = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let computerChoice = computerPlay();
        let result = playRound(btn.id, computerChoice);
        resultDiv.textContent = result;
        
        if (result.includes("win")) {
            userScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
    });
});

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === "Rock" && computerSelection === "Scissors") ||
        (userSelection === "Paper" && computerSelection === "Rock") ||
        (userSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return `You win! ${userSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${userSelection}`;
    }

}
