// Complete logic of game inside this function
const game = () => {
	let computer1Score = 0;
	let computer2Score = 0;
	let moves = 0;


	// Function to play game
	const playGame = () => {

		const startBtn = document.querySelector('.start');
		const computer1Options = ['rock', 'paper', 'scissors'];
		const computer2Options = ['rock', 'paper', 'scissors'];
		const play = [startBtn]

		//Function to start playing game
		play.forEach(option => {
			option.addEventListener('click', function () {

				// Determines number of moves left
				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${3 - moves}`;

				// Chooses a random choice from 1 to 3
				const computer1Choice = Math.floor(Math.random() * 3);
				const computer2Choice = Math.floor(Math.random() * 3);

				const pc1Choice = computer1Options[computer1Choice];
				const pc2Choice = computer2Options[computer2Choice]

				// Function to check who wins
				winner(pc1Choice, pc2Choice)

				// Calling gameOver function after 3 moves
				if (moves == 3) {
					gameOver(startBtn, movesLeft);
				}
			})
		})
	}

	//Function to decide winner when PC vs PC
	const winner = (computer1, computer2) => {
		const result = document.querySelector('.result');
		const computer1ScoreBoard = document.querySelector('.pc1-count');
		const computer2ScoreBoard = document.querySelector('.pc2-count');
		computer1 = computer1.toLowerCase();
		computer2 = computer2.toLowerCase();

		if (computer1 === computer2) {
			result.textContent = 'Tie'
			saveToTextFile(computer1, computer2, 'Tie');
		}
		else if (computer1 == 'rock') {
			if (computer2 == 'paper') {
				result.textContent = 'Computer 2 Won';
				computer2Score++;
				computer2ScoreBoard.textContent = computer2Score;
				saveToTextFile(computer1, computer2, 'Computer 2 Won');

			} else {
				result.textContent = 'Computer 1 Won'
				computer1Score++;
				computer1ScoreBoard.textContent = computer1Score;
				saveToTextFile(computer1, computer2, 'Computer 1 Won');
			}
		}
		else if (computer1 == 'scissors') {
			if (computer2 == 'rock') {
				result.textContent = 'Computer 2 Won';
				computer2Score++;
				computer2ScoreBoard.textContent = computer2Score;
				saveToTextFile(computer1, computer2, 'Computer 2 Won');
			} else {
				result.textContent = 'Computer 1 Won';
				computer1Score++;
				computer1ScoreBoard.textContent = computer1Score;
				saveToTextFile(computer1, computer2, 'Computer 1 Won');
			}
		}
		else if (computer1 == 'paper') {
			if (computer2 == 'scissors') {
				result.textContent = 'Computer 2 Won';
				computer2Score++;
				computer2ScoreBoard.textContent = computer2Score;
				saveToTextFile(computer1, computer2, 'Computer 2 Won');
			} else {
				result.textContent = 'Computer 1 Won';
				computer1Score++;
				computer1ScoreBoard.textContent = computer1Score;
				saveToTextFile(computer1, computer2, 'Computer 2 Won');
			}
		}
	}

	// Function to save to a text file
	function saveToTextFile(player1Choice, player2Choice, winner) {
		var url = "https://localhost:44366/Home/SubmitPCvsPC?player1Choice=" + player1Choice + "&player2Choice=" + player2Choice + "&winner=" + winner;
		window.location = url;
	}

	// Function to run when game is over
	const gameOver = (startBtn, movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';
		startBtn.style.display = 'none';

		if (computer1Score > computer2Score) {
			result.style.fontSize = '2rem';
			result.innerText = 'Computer 1 Won The Game'
			result.style.color = '#308D46';
		}
		else if (computer1Score < computer2Score) {
			result.style.fontSize = '2rem';
			result.innerText = 'Computer 2 Won The Game';
			result.style.color = 'red';
		}
		else {
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();

}

// Calling the game function
game();
