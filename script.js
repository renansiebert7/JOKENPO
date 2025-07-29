/*
1 - clicar no pedra no papel e no tesoura e fazer essa info chegar no html (onclick)
2 - sortear o que a maquina vai jogar
3 - colocar esses valores no resultado
*/

const result = document.querySelector('.result')
const HumanScore = document.querySelector('#human')
const MachineScore = document.querySelector('#machine')

let humanScoreNumber = 0
let machineScoreNumber = 0

const PlayHuman = (humanChoice) => {
    playTheGame(humanChoice, PlayMachine())
}

const PlayMachine = () => {
    const opçoes = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    return opçoes[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(`humano, ${human}, maquina, ${machine}`)

    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'rock' && machine === 'scissors')) {
        humanScoreNumber++
        HumanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++
        MachineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu pra máquina'
    }
}