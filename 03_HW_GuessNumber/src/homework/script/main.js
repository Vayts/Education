//removeIf(production)
const {getInputValue, setTextValue, setInputValue, addListener, toggleDisabledClass, settingsGame, getSettings, startGame} = require('../script/utils')
//endRemoveIf(production)

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

function guess(state) {
    state.userNumber = Number(getInputValue('try-input'))
    if (state.userNumber !== state.gameNumber) {
        setTextValue('dialog-text', checkNumber(state.userNumber, state.gameNumber, state.userAttempt))
        state.userAttempt++
        checkAttempt(state.userAttempt, state.gameAttempt)
        return false;
    }

    if (state.userNumber === state.gameNumber) {
        setTextValue('dialog-text','Ты угадал!')
        setTextValue( 'game-end-text',`Ты победил с ${state.userAttempt + 1}-ой попытки`)
        toggleDisabledClass('end', 'gameplay')
        return true;
    }

    setInputValue('try-input', '')
    return false;
}

function checkAttempt(userAttempt, gameAttempt) {
    if (userAttempt >= gameAttempt) {
        setTextValue('dialog-text','Ты проиграл')
        setTextValue( 'game-end-text',`Ты проиграл=(`)
        toggleDisabledClass('end', 'gameplay')
        return false;
    } else {
        return true;
    }
}

function checkNumber(num, numberValue, attempt) {
    if (typeof num !== 'number' || typeof numberValue !== 'number') {
        return 'Я тебя не понимаю!'
    }

    if (!Number.isInteger(num)) {
        return 'Это не целое число'
    }

    const numberDiff = numberValue - num;

    if (+attempt < 1) {
        return 'Не угадал!  В следующий раз я тебе подскажу'
    } else {
        if (numberDiff > 15 || numberDiff < -15) {
            return 'Холодно'
        } else {
            return 'Тепло'
        }
    }

}

function reloadPage() {
    window.location.reload()
}

//removeIf(production)
module.exports = {checkNumber, validateInput, guess, setSettings, checkAttempt}
//endRemoveIf(production)





