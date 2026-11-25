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
    for (let round = 0; round < rounds; round++) {
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                return console.log("Its a tie");
            }
            if (
                (humanChoice === 0 && computerChoice === 1) ||
                (humanChoice === 1 && computerChoice === 2) ||
                (humanChoice === 2 && computerChoice === 0)
            ) {
                computerScore = computerScore++
                return console.log("You lose!");
            }
            humanScore = humanScore++
            return console.log("You win!");
        }
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame(5);