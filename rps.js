let tieScore = 0;
let computerScore = 0;
let playerScore = 0;

let computerSelection = computerPlay();

function computerPlay() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection,computerSelection) {
   
    if ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'scissors')) {
        console.log("You win! Rock beats scissors!");
        playerScore++;
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'paper')) {
        computerScore++
        return "Computer wins! Paper beats rock!";
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'rock')) {
        playerScore++;
        return "You win! Paper beats rock!";
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'scissors')) {
        computerScore++;
        return "Computer wins! Scissors beat paper!";
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'paper')) {
        playerScore++;
        return "You win! Scissors beat paper!";
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'rock')) {
        computerScore++;
        return "Computer wins! Rock beats scissors!";
    } else {
        tieScore++;
        return "It's a tie! Play again!";
    }
}

function displayWelcome() {
    alert("Ready for some action? You are about to play rock, paper, and scissors game!")
}

function displayScore() {
    
    if (playerScore > computerScore) {
        console.log(`You win with a score of ${playerScore} to ${computerScore} with ties of ${tieScore}.`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins with a score of ${computerScore} to ${playerScore} with ties of ${tieScore}.`);
    } else {
        console.log(`It is a tie! You scored ${playerScore} and computer scored ${computerScore} that makes ${tieScore} tie(s).`);
    }
}

function gamePlay() {
    
    let count = 0;

    displayWelcome();

    while (count < 5) {
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        console.log(playRound(playerSelection, computerSelection));
        count++;
    }

    
    return displayScore();
}