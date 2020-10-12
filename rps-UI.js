// Javascript for Rock, Paper, Scissors project @The_Odin_Project

function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'paper')) {
        computerScore++;
        return 'Computer wins! Paper beats Rock!';
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection.toLowerCase() === 'scissors')) {
        playerScore++;
        return 'Player wins! Rock beats Scissors!';
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'rock')) {
        playerScore++;
        return 'Player wins! Paper beats Rock!';
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection.toLowerCase() === 'scissors')) {
        computerScore++;
        return "Computer wins! Scissors beat Paper!";
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'rock')) {
        computerScore++;
        return "Computer wins! Rock beats Scissors!";
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection.toLowerCase() === 'paper')) {
        playerScore++;
        return "Player wins! Scissors beat Paper!";
    } else {
        tieScore++;
        return "It's a tie!"
    }
}

    

function gamePlay() {

    begin.addEventListener('click', (e) => {
    
        para.textContent = 'Let the games begin!';
        
        output.appendChild(para);
        computerScore = 0;
        playerScore = 0;
        tieScore = 0;

        paraPlayer.textContent = `Player score: ${playerScore}`
        scores.appendChild(paraPlayer);
        paraComputer.textContent = `Computer score: ${computerScore}`
        scores.appendChild(paraComputer);
        paraTie.textContent = `Tie score: ${tieScore}`
        scores.appendChild(paraTie);
    });
    
    games = document.querySelectorAll('.game')
    games.forEach((game) => {
        game.addEventListener('click', (e) => {
        const computerSelection = computerPlay();
        para.textContent = playRound(game.id, computerSelection);
        output.appendChild(para);
        paraPlayer.textContent = `Player score: ${playerScore}`;
        scores.appendChild(paraPlayer);
        paraComputer.textContent = `Computer score: ${computerScore}`;
        scores.appendChild(paraComputer);
        paraTie.textContent = `Tie score: ${tieScore}`;
        scores.appendChild(paraTie);

        if (playerScore == 5) {
            para.textContent = 'Player wins with a score of 5!';
            output.appendChild(para);
            computerScore = 0;
            playerScore = 0;
            tieScore = 0;
           
           
        } else if (computerScore == 5) {
            para.textContent = 'Computer wins with a score of 5!';
            output.appendChild(para);
            computerScore = 0;
            playerScore = 0;
            tieScore = 0;
            
        }
        });
    });
    
    
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
        
const para = document.createElement('h2');
const paraPlayer = document.createElement('h2');
const paraComputer = document.createElement('h2');
const paraTie = document.createElement('h2');

const output = document.getElementById('output');
const scores = document.getElementById('scores');

const begin = document.getElementById('begin');

para.style.cssText = 'color: blue;';
paraPlayer.style.cssText = 'color: blue;';
paraComputer.style.cssText = 'color: blue;';
paraTie.style.cssText = 'color: blue;';

gamePlay();
