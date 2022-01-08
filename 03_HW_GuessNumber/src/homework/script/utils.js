

function setTextValue(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function getInputValue(id) {
    const input = document.getElementById(id)
    if (input) {
        return input.value;
    }
    return '';
}

function setInputValue(id,value) {
    const input = document.getElementById(id)
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}

function toggleDisabledClass(id) {
    for (let i = 0; i < arguments.length; i++) {
        const node = document.getElementById(arguments[i])
        if (node) {
            node.classList.toggle('disabled')
        } else {
            return false
        }
    }
}

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


function startGame(state) {
    toggleDisabledClass('settings','gameplay')
    setTextValue('dialog-text','Проверим твою удачу!');
    state.gameNumber = randomNumber(state.rangeMin, state.rangeMax)
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//removeIf(production)
module.exports = {getInputValue, setTextValue, setInputValue, addListener, toggleDisabledClass, settingsGame, getSettings, startGame}
//endRemoveIf(production)

