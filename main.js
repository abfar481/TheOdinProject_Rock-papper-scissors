//Function computer choices
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Function human choices
function getHumanChoice() {
    const choices = prompt("Input your answer here!").toLowerCase();

    if (choices === "rock" || choices === "paper" || choices === "scissors") {
        return choices;
    } else {
        console.log("Wrong input,fellas!");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    //Function for play around
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a Tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        }

        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    }

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if(computerScore > humanScore) {
        console.log(`Sorry, you lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`It's a tie! Both you and the computer scored ${humanScore}.`);
    }
}

playGame();
