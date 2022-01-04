// const {validateInput} = require("../../../dist/homework/script/logic");
const rulesButton = document.getElementById('game-rules-button')
const settingsButton = document.getElementById('game-start-button')
const tryButton = document.getElementById('game-try-button')
const endButton = document.getElementById('game-end-button')
const closeButton = document.getElementById('game-close-button')


const tryInput = document.getElementById('try-input')

let gameNumber = 0;
let gameAttempt = 0;
let attempt = 0;


rulesButton.onclick = settingsGame;
settingsButton.onclick = gameCheck;

function gameCheck() {
    const minInput = document.getElementById('min-input')
    const maxInput = document.getElementById('max-input')
    const attemptInput = document.getElementById('attempt-input')

    if(!validateInput(+minInput.value, +maxInput.value, +attemptInput.value)) {
        writeDialogText('Такие условия меня не устраивают!')
    } else {
        startGame(+minInput.value, +maxInput.value, +attemptInput.value)
    }
}

function startGame(min, max, attemptValue) {
    closeSettings()
    closeGameplay()
    writeDialogText('Проверим твою удачу!');
    gameNumber = randomNumber(min, max)
    console.log(gameNumber)
    attempt = attemptValue
}

function settingsGame() {
    closeRules()
    closeSettings()
    writeDialogText('Давай определим условия нашей игры!');
}

tryButton.onclick = function () {
    if (+tryInput.value !== gameNumber) {
        writeDialogText(checkNumber(tryInput.value, gameNumber))
    } else {
        writeDialogText('Ты угадал!')
        endgame(`Ты победил с ${gameAttempt + 1}-ой попытки`)
        return
    }
    gameAttempt++
    if (attempt === gameAttempt) {
        writeDialogText('Ты проиграл')
        endgame(`Ты проиграл=(`)
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function endgame(text) {
    const endText = document.getElementById('game-end-text')

    closeEnd()
    closeGameplay()
    endText.innerText = text;
}

endButton.onclick = function () {
    window.location.reload()
}

closeButton.onclick = function () {
    window.location.reload()
}

function writeDialogText(text) {
    const dialogText = document.getElementById('dialog-text');
    dialogText.innerText = text;
}

function closeRules() {
    const rules = document.getElementById('rules')
    rules.classList.toggle('disabled')
}

function closeSettings() {
    const settings = document.getElementById('settings')
    settings.classList.toggle('disabled')
}

function closeGameplay() {
    const gameplay = document.getElementById('gameplay')
    gameplay.classList.toggle('disabled')
}

function closeEnd() {
    const end = document.getElementById('end')
    end.classList.toggle('disabled')
}