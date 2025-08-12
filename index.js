const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.querySelector("#user-score"); // matches your HTML
const computerScoreEl = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;

        // update bottom score display
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
