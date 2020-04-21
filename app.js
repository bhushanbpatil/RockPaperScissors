let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")
const resetScore = document.querySelector('.reset-score')

function getCompChoice(){
	c = ['rock','paper','scissors']
	return c[Math.floor((Math.random() * 3))]
}

function game(userChoice){
	let compChoice = getCompChoice();
	switch(userChoice[0]+compChoice[0]){
		case 'rs':
		case 'pr':
		case 'sp':
			userWins(userChoice, compChoice);
			break;
		case 'sr':
		case 'rp':
		case 'ps':
			compWins(userChoice, compChoice);
			break;
		default:
			drawGame(userChoice, compChoice);
	}
}

function capFirstLetter(Choice){
	return Choice[0].toUpperCase() + Choice.slice(1)
}

function userWins(userChoice, compChoice){
	user = 'User'.fontsize(3).sub()
	comp = 'Comp'.fontsize(3).sub()
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${capFirstLetter(userChoice)}${user} beats ${capFirstLetter(compChoice)}${comp}`
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 300)
}

function compWins(userChoice, compChoice){
	user = 'User'.fontsize(3).sub()
	comp = 'Comp'.fontsize(3).sub()
	compScore ++;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${capFirstLetter(compChoice)}${comp} beats ${capFirstLetter(userChoice)}${user}`
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 300)
}

function drawGame(userChoice, compChoice){
	result_p.innerHTML = `Draw`
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')}, 300)
}



rock_div.addEventListener('click', function() {
	game('rock')
})

paper_div.addEventListener('click', function(){
	game('paper')
});

scissors_div.addEventListener('click', function(){
	game('scissors')
});

resetScore.addEventListener('click', function(){
	userScore = 0;
	compScore = 0;
	compScore_span.innerHTML = '0'
	userScore_span.innerHTML = '0'
});