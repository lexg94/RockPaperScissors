
const btn = document.querySelectorAll('.games button');
const results = document.querySelector('#display');
const playerScore = document.querySelector('#player .score');
const botScore = document.querySelector('#bot .score');
const rst = document.querySelector('.restart');

var player = 0;
var bot = 0;


function getRandomValue(max){

    return Math.floor(Math.random() * max);
}

function computerPlay() {

    let val = getRandomValue(3);

    if (val === 0){

        return 'rock';
    }
    else if (val === 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }

}

function playRound(playerSelect, compSelect) {

    if(player != 5 && bot != 5)
    {


        if (playerSelect === compSelect){
            results.textContent =  'It\'s a draw';
            results.style.color = 'yellow';
        }
        else if (playerSelect ==='rock' && compSelect === 'paper') {
            bot++;
            results.textContent = 'You lose! Rock loses to paper';
            results.style.color = 'red';
            botScore.textContent = bot;

        }
        else if (playerSelect ==='paper' && compSelect === 'rock') {
            player++;
            results.textContent =  'You Win! Paper beats rock';
            results.style.color = 'green';
            playerScore.textContent = player;
        }
        else if (playerSelect ==='scissors' && compSelect === 'rock') {
            bot++;
            results.textContent =  'You lose! Scissors loses to rock';
            results.style.color = 'red';
            botScore.textContent = bot;
        }
        else if (playerSelect ==='rock' && compSelect === 'scissors') {
            player++;
            results.textContent =  'You Win! Rock beats scissors'
            results.style.color = 'green'
            playerScore.textContent = player;
        }
        else if (playerSelect ==='paper' && compSelect === 'scissors') {
            bot++;
            results.textContent =  'You lose! Paper loses to scissors'
            results.style.color = 'red';
            botScore.textContent = bot;
        }
        else if (playerSelect ==='scissors' && compSelect === 'paper') {
            player++;
            results.textContent =  'You Win! Scissors beats paper'
            results.style.color = 'green'
            playerScore.textContent = player;
        }
    }

    if (player === 5) {
        results.textContent = 'PLAYER WINS';

        
    }
    else if (bot === 5) {
        results.textContent = 'BOT WINS!';

        
    }

}

function restart() {
    player = 0;
    bot = 0;
    playerScore.textContent = player;
    botScore.textContent = bot;
}

btn.forEach((button) => {


    button.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        console.log(playRound(playerChoice,computerPlay()));

    });
});

rst.addEventListener('click',() => {

    restart();

});
