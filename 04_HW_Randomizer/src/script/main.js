const {removeDisabled, disabledCheck, setInputValue, getInputValue, setDisabled, addListener} = require("../../../dist/script/utils");

document.addEventListener('DOMContentLoaded', function(){
    initApp();
})

function initApp() {
    const state = {
        rangeMin: 0,
        rangeMax: 100,
        arr: [],
    }

    addListener('generate-button', 'click', generate.bind(null, state))
    addListener('reset-button', 'click', resetApp.bind(null, state))
}

function generate(state) {
    if (!disabledCheck('min-input')) {
        errorCheck(state)
        removeDisabled('reset-button')
    } else {
        returnRandomNumber(state)
    }
}

function errorCheck(state) {

    const min = Number(getInputValue('min-input'))
    const max = Number(getInputValue('max-input'))

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
        state.rangeMin = getInputValue('min-input')
        state.rangeMax = getInputValue('max-input')
        setDisabled('min-input');
        setDisabled('max-input');
        createArr(state);
        returnRandomNumber(state)
        return true;
    }
}

function setTextValue(id, text) {
    const node = document.getElementById(id)

    if (node) {
        node.innerText = text;
        return true;
    }
    return false;
}

function createArr(state) {
    state.arr = []

    for (let i = state.rangeMin; i <= state.rangeMax; i++) {
        state.arr.push(i)
    }
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
