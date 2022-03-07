function computerPlay() {
    let choice = Math.floor((Math.random() * 3))

    if(choice == 0) {
        return 'Rock'
    }
    else if(choice == 1) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    if(playerSelection == computerSelection) {
        return 'It\'s a tie. Both players selected ' + capitalize(playerSelection)
    }
    else if((playerSelection == 'ROCK' && computerSelection == 'PAPER')
    || (playerSelection == 'PAPER' && computerSelection == 'SCISSORS')
    || (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')) {
        return 'You lose! ' + capitalize(computerSelection) + ' beats ' + capitalize(playerSelection) 
    }
    else if(playerSelection == 'ROCK' || playerSelection == 'PAPER' || playerSelection == 'SCISSORS'){
        return 'You win! ' + capitalize(playerSelection) + ' beats ' + capitalize(computerSelection)
    }
    else {
        return 'Invalid selection, please type either \'Rock\', \'Paper\', or \'Scissors\''
    }
}

function capitalize(string) {
    string = string.toLowerCase()
    firstChar = string.charAt(0)
    upperChar = firstChar.toUpperCase()
    return string.replace(firstChar, upperChar)
}

function game() {
    let wins = 0

    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please type either rock, paper, or scissors")
        let result = playRound(playerChoice, computerPlay())
        console.log(result)
        if(result.charAt(4) == 'w')
            wins++
    }
    if(wins >= 3) {
        return 'You win! Total wins: ' + wins
    }
    else {
        return 'You lose! Total wins: ' + wins
    }
}