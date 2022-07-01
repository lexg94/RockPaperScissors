
// 0 - rock
// 1 - paper
// 2 - scissors

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


    if (playerSelect === compSelect){
        return 'It\'s a draw'
    }
    else if (playerSelect ==='rock' && compSelect === 'paper') {
        return 'You lose! Rock loses to paper'
    }
    else if (playerSelect ==='paper' && compSelect === 'rock') {
        return 'You Win! Paper beats rock'
    }
    else if (playerSelect ==='scissors' && compSelect === 'rock') {
        return 'You lose! Scissors loses to rock'
    }
    else if (playerSelect ==='rock' && compSelect === 'scissors') {
        return 'You Win! Rock beats scissors'
    }
    else if (playerSelect ==='paper' && compSelect === 'scissors') {
        return 'You lose! Paper loses to scissors'
    }
    else if (playerSelect ==='scissors' && compSelect === 'paper') {
        return 'You Win! Scissors beats paper'
    }


}


function game(){
    for (let i = 1; i <= 5; i ++) {

        let playerChoice = prompt("Input either Rock,Paper or Scissors").toLowerCase()

        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        
            console.log(playRound(playerChoice,computerPlay()));

        }
        else {
            alert('Invalid! Please enter a valid word');
            i--;
        }
    }
}

game();