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
        return  "You win! Rock beats Scissors"
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




    


function gamePlay() {
    const buttons = document.querySelectorAll('.clickMe');
    buttons.forEach(button => button.addEventListener('click', (e) => {
        
    }
 
    

    
}


// New Part of the game to be able to play on a web page




const play = document.querySelector('.play');
play.addEventListener('click', gamePlay)

const para = document.createElement('p');
const output = document.querySelector('.output');
para.textContent = `You won ${playerScore} round(s), the computer won ${computerScore} round(s), and there was a tie ${tieScore} round(s).`