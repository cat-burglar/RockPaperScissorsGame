let playerScore = 0;
let enemyScore = 0;
const playerScore_span = document.getElementById("player-score");
const enemyScore_span = document.getElementById("enemy-score");
const playerMove_span = document.getElementById("player-move");
const enemyMove_span = document.getElementById("enemy-move");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const choices_div = document.querySelector(".choices > div");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissors");


function getEnemyChoice() {
	const choices = ["rock", "paper", "scissors"];
	const rand = Math.floor(Math.random() * 3);
	return choices[rand];
}

function game(playerChoice) {
	rock_div.classList.remove('green-glow');
	paper_div.classList.remove('green-glow');
	scissors_div.classList.remove('green-glow');

	const enemyChoice = getEnemyChoice();
	switch(true) {
		case playerChoice == "rock" && enemyChoice == "scissors":
		case playerChoice == "paper" && enemyChoice == "rock":
		case playerChoice == "scissors" && enemyChoice == "paper":
			endGame(playerChoice, enemyChoice,"win");
			break;
		case playerChoice == enemyChoice:
			endGame(playerChoice, enemyChoice,"draw");
			break;
		default: 
			endGame(playerChoice, enemyChoice,"lose");
	} 
}

function endGame(playerChoice, enemyChoice, gameResult) {
	let line = "";	
	if(gameResult == "win") {
		line = "You Win!"
		playerScore++;
		playerScore_span.innerHTML = playerScore;
		document.getElementById(playerChoice).classList.add('green-glow');
	} else if(gameResult == "lose") {
		line = "You Lose!";
		enemyScore++;
		enemyScore_span.innerHTML = enemyScore;
	}
	else if(gameResult == "draw"){
		line = "It's a draw."
	}

	playerMove_span.innerHTML = playerChoice;
	enemyMove_span.innerHTML = enemyChoice;
	result_p.innerHTML = line;
}

function main() {
	rock_div.addEventListener('click', function() {
		game("rock");
		
	})
	paper_div.addEventListener('click', function() {
		choices_div.classList.remove('green-glow');
		game("paper");
	})
	scissors_div.addEventListener('click', function() {
		choices_div.classList.remove('green-glow');
		game("scissors");
	})


}

main();
