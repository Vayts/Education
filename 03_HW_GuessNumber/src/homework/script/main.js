const {setInputValue, setTextValue, getInputValue, addListener, toggleDisabledClass} = require("../../../dist/homework/script/utils");

document.addEventListener('DOMContentLoaded', function(){
    initGame();
})

// Game start

function initGame() {
    const state = {
        gameNumber: undefined,
        userNumber: undefined,
        gameAttempt: undefined,
        userAttempt: 0,
        rangeMin: 0,
        rangeMax: 200
    }

    addListener('game-rules-button', 'click', settingsGame)
    addListener('game-start-button', 'click', getSettings.bind(null, state))
    addListener('game-try-button', 'click', guess.bind(null, state))
    addListener('game-end-button', 'click', reloadPage)
    addListener('game-close-button', 'click', reloadPage)
}


// Game-settings

function settingsGame() {
    toggleDisabledClass('rules', 'settings')
    setTextValue('dialog-text','Давай определим условия нашей игры!');
}

function getSettings(state) {
    const minInput = getInputValue('min-input')
    const maxInput = getInputValue('max-input')
    const attemptInput = getInputValue('attempt-input')

    setSettings(state, +minInput, +maxInput, +attemptInput)
}

function setSettings(state, min, max, attempt) {
    if(!validateInput(min, max, attempt)) {
        setTextValue('dialog-text','Такие условия меня не устраивают!')
        return false;
    }

    state.rangeMin = min;
    state.rangeMax = max;
    state.gameAttempt = attempt;
    startGame(state)
    return true
}

function validateInput(min, max, attempt) {

    if (typeof min !== 'number' || typeof max !== 'number' || typeof attempt !== 'number') {
        return false
    }

    if (min >= max) {
        return false;
    }

    if (max > 200 || max < 3) {
        return false;
    }

    if (min < 1 || min > 198) {
        return false;
    }

    if (max - min <= attempt) {
        return false;
    }

    if (attempt < 1 || attempt > 15) {
        return false;
    }

    return true;
}

// gameplay

function startGame(state) {
    toggleDisabledClass('settings','gameplay')
    setTextValue('dialog-text','Проверим твою удачу!');
    state.gameNumber = randomNumber(state.rangeMin, state.rangeMax)
}

function guess(state) {
    state.userNumber = Number(getInputValue('try-input'))

    if (state.userNumber !== state.gameNumber) {
        if (state.userAttempt < 1) {
            setTextValue('dialog-text','Ты не угадал! В следующий раз я тебе подскажу!')
        } else {
            setTextValue('dialog-text',checkNumber(state.userNumber, state.gameNumber))
        }

    } else {
        setTextValue('dialog-text','Ты угадал!')
        setTextValue( 'game-end-text',`Ты победил с ${state.userAttempt + 1}-ой попытки`)
        toggleDisabledClass('end', 'gameplay')
        return true;
    }
    state.userAttempt++
    if (state.userAttempt === state.gameAttempt) {
        setTextValue('dialog-text','Ты проиграл')
        setTextValue( 'game-end-text',`Ты проиграл=(`)
        toggleDisabledClass('end', 'gameplay')
        return false;
    }
    setInputValue('try-input', '')
    return false;
}

function checkNumber(num, numberValue) {
    if (typeof num !== 'number' || typeof numberValue !== 'number') {
        return 'Я тебя не понимаю!'
    }

    let numberDiff = numberValue - num;
    if (numberDiff > 15 || numberDiff < -15) {
        return 'Холодно'
    } else {
        return 'Тепло'
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reloadPage() {
    window.location.reload()
}

module.exports = {checkNumber, validateInput, guess, setSettings}





