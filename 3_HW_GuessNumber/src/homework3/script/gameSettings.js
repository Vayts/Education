const startButton = document.querySelector('.button-start')
const exitButton = document.querySelector('.button-exit')
let gameSettings = document.querySelector('.game-settings')
let gameGameplay = document.querySelector('.game-gameplay')

let settingsButton = document.querySelector('.settings-button')
let maxNumberRange = document.querySelector('.input-max-range')
let minNumberRange = document.querySelector('.input-min-range')
let gameAttempts = document.querySelector('.input-attempts')

let gameNumber;
let playerAttemptCounter;

startButton.onclick = function () {
    textFill('Супер! Давай определим сложность игры!', settingsButton)
    gameStart.classList.add('disabled')
    gameSettings.classList.remove('disabled')
}
exitButton.onclick = () => {
    textFill('Ну и ладно!', settingsButton)
    gameStart.classList.add('disabled')
    setTimeout(() => {
        window.close()
    },5000)
}

settingsButton.onclick = function () {
    if (!maxNumberRange.value) {
        textFill('Я тебя не понимаю! В максимуме точно число?', settingsButton)
        return 'Error'
    } else if (+maxNumberRange.value > 200 || +maxNumberRange.value < 3 || +maxNumberRange.value <= +minNumberRange.value) {
        textFill('Ты чего? Максимум не может быть больше 200 или меньше минимума!',settingsButton)
        maxNumberRange.value = 200;
        minNumberRange.value = 1;
        return 'Error'
    } else if (!minNumberRange.value) {
        textFill('Я тебя не понимаю! В максимуме точно число?', settingsButton)
        return 'Error'
    }  else if (+maxNumberRange.value - +minNumberRange.value < +gameAttempts.value) {
        textFill('Это жульничество! Проси меньше попыток!', settingsButton)
        return 'Error'
    } else if (+minNumberRange.value > 199 || +minNumberRange.value < 1 || +maxNumberRange.value <= +minNumberRange.value) {
        textFill('Ты чего? Минимум не может быть больше 199 или больше максимума!',settingsButton)
        maxNumberRange.value = 200;
        minNumberRange.value = 1;
        return 'Error'
    } else if(!gameAttempts.value) {
        textFill('Я не понимаю сколько попыток ты хочешь взять!',settingsButton)
        return 'Error'
    } else if (gameAttempts.value > 15 || gameAttempts.value < 1) {
        textFill('Я не могу дать тебе меньше 1 попытки и больше 15!',settingsButton)
        return 'Error'
    } else {
        gameSettings.classList.add('disabled')
        gameNumber = getRandomNumber(+minNumberRange.value,+maxNumberRange.value)
        playerAttemptCounter = +gameAttempts.value;
        textFill(`Это будет интересно! Уверен, что у тебя получится?`,suggestButton)
        gameGameplay.classList.remove('disabled')
    }
}

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}



