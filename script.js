function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
    let input = prompt("play", "Rock Paper Scissors");
    input = input.toLowerCase();
    input = input.trim();
    if (input === "rock") {
        return 0
    }
    if (input === "paper") {
        return 1
    }
    if (input === "scissors") {
        return 2
    }
}
function playGame(rounds) {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            computerScore++
            humanScore++
            console.log("Its a tie");
        } else if (
            (humanChoice === 0 && computerChoice === 1) ||
            (humanChoice === 1 && computerChoice === 2) ||
            (humanChoice === 2 && computerChoice === 0)
        ) {
            computerScore++
            console.log("You lose!");
        } else { 
        humanScore++
        console.log("You win!");
        }
    }
    for (let round = 0; round < rounds; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert("You win! the final score was " + humanScore + " - " + computerScore);
    } else if (humanScore < computerScore) {
        alert("You lose! the final score was " + computerScore + " - " + humanScore);
    } else if (humanScore === computerScore) {
        alert("It was a tie! the final score was " + computerScore + " = " + humanScore);
    }
}
let roundsNumber = parseInt(prompt("Pick how many rounds -- pls less then (2^53 - 1) so we dont brake js :)"));
playGame(roundsNumber);