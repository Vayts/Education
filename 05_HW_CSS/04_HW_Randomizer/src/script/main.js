//removeIf(production)
const {removeDisabled, disabledCheck, setInputValue, getInputValue, setDisabled, addListener, setTextValue} = require("../../dist/script/utils");
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', function(){
    initApp();
})

function initApp() {
    const state = {
        rangeMin: 0,
        rangeMax: 100,
        arr: undefined,
    }

    addListener('generate-button', 'click', generate.bind(null, state))
    addListener('reset-button', 'click', resetApp.bind(null, state))
}

function generate(state) {
    if (!disabledCheck('min-input')) {
        const min = Number(getInputValue('min-input'))
        const max = Number(getInputValue('max-input'))
        errorCheck(state, min, max)
        removeDisabled('reset-button')
    } else {
        returnRandomNumber(state)
    }
}

function errorCheck(state, min, max) {

    if (min > 1000000 || max > 1000000) {
        setTextValue('result-text','Numbers > 1 mil.')
        return false;
    } else if (min > max) {
        setTextValue('result-text','Min > Max?')
        return false
    } else if (!Number.isInteger(min) || !Number.isInteger(max)) {
        setTextValue('result-text','Only integers')
        return false
    } else {
        state.rangeMin = min
        state.rangeMax = max
        setDisabled('min-input');
        setDisabled('max-input');
        createArr(state);
        returnRandomNumber(state)
        return true;
    }
}

function createArr(state) {
    state.arr = []
    for (let i = state.rangeMin; i <= state.rangeMax; i++) {
        state.arr.push(i)
    }
    return state
}

function resetApp(state) {
    state.arr = undefined;
    state.rangeMin = 0;
    state.rangeMax = 100;
    setInputValue('min-input', state.rangeMin)
    setInputValue('max-input', state.rangeMax)
    setTextValue('result-text', '')
    removeDisabled('min-input')
    removeDisabled('max-input')
    setDisabled('reset-button')

    if(disabledCheck('generate-button')) {
        removeDisabled('generate-button')
    }
    return state
}

function returnRandomNumber(state) {
    if (state.arr.length === 0) {
        setTextValue('result-text','Elements are over')
        setDisabled('generate-button')
        return false;
    } else {
        const randomIndex = random(0, state.arr.length-1)
        const result = state.arr[randomIndex]
        state.arr.splice(randomIndex, 1)
        setTextValue('result-text', result)
        return true;
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//removeIf(production)
module.exports = {errorCheck, returnRandomNumber, resetApp, createArr}
//endRemoveIf(production)