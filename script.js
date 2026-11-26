function getComputerChoice() {
    const computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
        return "rock"
    }
    if (computerInput === 1) {
        return "paper"
    }
    if (computerInput === 2) {
        return "scissors"
    }
}
function getHumanChoice() {
    let input = prompt("play", "Rock Paper Scissors");
    input = input.toLowerCase();
    input = input.trim();
    return input
}
function playGame(rounds) {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! booooRING no one gets a point");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lost! get PAPERED! +1 point to the Computer");
            computerScore++
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lost! get SCISSERD! +1 point to the Computer");
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lost! get ROCKED! +1 point to the Computer");
            computerScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You Won! PAPERUM +1 point to YOU!!");
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You Won! SCISSERUM +1 point to YOU!!");
            humanScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You Won! ROCKUM +1 point to YOU!!");
            humanScore++
        }
    }
    for (let round = 0; round < rounds; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! the final score was " + humanScore + " - " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose! the final score was " + computerScore + " - " + humanScore);
    } else if (humanScore === computerScore) {
        console.log("It was a tie! the final score was " + computerScore + " - " + humanScore);
    }
}
let roundsNumber = parseInt(prompt("Pick how many rounds -- pls less than (2^53 - 1) so we dont break js :)"));
playGame(roundsNumber);