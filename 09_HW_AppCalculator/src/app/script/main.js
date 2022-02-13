//removeIf(production)
const {errorCheck, setTextContent, addTextContent, clearState, setValue, getTextValue} = require('../script/utils')
const {addListener} = require("./utils.js");
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', () => {
    initCalculator()
})

function initCalculator() {
    const state = {
        slicedString: '',
        slicedExpression: '',
        previous: '',
        сalcResult: '',
    }

    addListener('table', 'click', setValue.bind(null, state));
}

function checkInputValue(value, state) {

    if (['+', '*', '-', '/'].includes(value)) {

        let currentString = getTextValue('display');

        if (!['+', '*', '-', '/'].includes(currentString[currentString.length-1])) {
            addTextContent('display', value);
            return value;
        }

        if (['+', '*', '-', '/'].includes(value) && ['+', '*', '-', '/'].includes(currentString[currentString.length-1])) {
            currentString = `${currentString.slice(0, currentString.length-1)}${value}`;
            setTextContent('display', currentString);
            return value;
        }
    }

    if (['1','2','3','4','5','6','7','8','9','0','(',')', '.'].includes(value)) {
        addTextContent('display', value);
        return 'Digits';
    }

    if (value === '='){
        setTextContent('display', getResult(getTextValue('display')))
        return 'Result';
    }

    if (value === 'clear') {
        setTextContent('display', '');
        return 'Clear';
    }

    if (value === 'delete') {
        let value = getTextValue('display');
        setTextContent('display', value.slice(0, value.length-1));
        return 'Delete';
    }

    if (value === '%') {
        calculate(getTextValue('display'), calculatePercent, state);
        return '%';
    }

    if (value === '|x|') {
        calculate(getTextValue('display'), startFactorial, state);
        return '|x|';
    }

    if (value === 'Pi') {
        calculate(getTextValue('display'), calculatePI, state);
        return 'Pi';
    }

    if (value === 'exp') {
        calculate(getTextValue('display'), calculateExp, state);
        return 'exp';
    }

    if (value === 'In') {
        calculate(getTextValue('display'), calculateIn, state);
        return 'In';
    }

    if (value === 'log10') {
        calculate(getTextValue('display'), calculateLog, state);
        return 'log10';
    }

    if (value === '1/x') {
        calculate(getTextValue('display'), calculateDecimal, state);
        return '1/x';
    }

    if (value === 'e') {
        calculate(getTextValue('display'), calculateE, state);
        return 'e';
    }

    if (value === 'sin') {
        calculate(getTextValue('display'), calculateSin, state);
        return 'sin';
    }

    if (value === 'cos') {
        calculate(getTextValue('display'), calculateCos, state);
        return 'cos';
    }

    if (value === 'tan') {
        calculate(getTextValue('display'), calculateTan, state);
        return 'tan';
    }

    if (value === 'x2') {
        calculate(getTextValue('display'), calculateSquare, state);
        return 'x2';
    }

    if (value === 'x3') {
        calculate(getTextValue('display'), calculateCube, state);
        return 'x3';
    }

    if (value === '10x') {
        calculate(getTextValue('display'), calculate10X, state);
        return '10x';
    }
}

function calculate(displayValue, func, state) {
    if (errorCheck(displayValue)) {
        setTextContent('display', 'Error');
        return false;
    }
    sliceDisplayValue(displayValue, state);
    setTextContent('display', state.slicedString);
    func(state);
    addTextContent('display',state.calcResult);
    clearState(state);
    return true;
}

function getResult (string) {
    if (['+', '-', '/', '*'].includes(string[string.length - 1])) {
        return eval(string.slice(0, string.length-1));
    } else {
        return eval(string);
    }
}


function calculatePercent(state) {
    if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = (state.slicedString / 100);
    } else {
        const subResult = eval(state.slicedExpression);
        state.calcResult = (subResult * (state.previous / 100)).toFixed(2);
    }
    return state;
}

function startFactorial(state) {
    if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = calculateFactorial(Number(state.slicedString));
    } else {
        state.calcResult = calculateFactorial(Number(state.previous));
    }
    return state;
}

function calculateFactorial(n) {

    if (typeof n !== "number") {
        return 'Invalid input data';
    }

    if (n < 0) {
        n = n*-1;
    }

    if (n === 0) {
        return 1;
    }

    if (n > 0) {
        return n * calculateFactorial(n - 1);
    }
}

function sliceDisplayValue(string, state) {
    const arr = string.split('');

    let index = arr.length;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (['+', '-', '/', '*'].includes(arr[i])) {
            index = i + 1;
            break;
        }
    }
    state.slicedString = string.slice(0, index);
    state.slicedExpression = string.slice(0, index - 1);
    state.previous = string.slice(index, string.length);

    return string.slice(0, index);
}

function calculatePI(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.PI.toFixed(5);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = (Math.PI * eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = (Math.PI * state.previous).toFixed(5);
    }
    return state;
}

function calculateExp(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.exp(0);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.exp(eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = Math.exp(state.previous).toFixed(5);
    }
    return state;
}

function calculateIn(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.log(1);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.log(eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = Math.log(state.previous).toFixed(5);
    }
    return state;
}

function calculateLog(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.log10(1);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.log10(eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = Math.log10(state.previous).toFixed(5);
    }
    return state;
}

function calculateDecimal(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = 1;
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = 1 / eval(state.slicedString);
    } else {
        state.calcResult = 1 / (state.previous);
    }
    return state;
}

function calculateE(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.E.toFixed(5);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = (Math.E * eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = (Math.E * state.previous).toFixed(5);
    }
    return state;
}

function calculateSin(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.sin(1);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.sin(eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = Math.sin(state.previous).toFixed(5);
    }
    return state;
}

function calculateCos(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.cos(1);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.cos(eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = Math.cos(state.previous).toFixed(5);
    }
    return state;
}

function calculateTan(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.tan(1);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.tan(eval(state.slicedString)).toFixed(5);
    } else {
        state.calcResult = Math.tan(state.previous).toFixed(5);
    }
    return state;
}

function calculateSquare(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.pow(1, 2);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.pow(eval(state.slicedString), 2);
    } else {
        state.calcResult = Math.pow(state.previous, 2);
    }
    return state;
}


function calculateCube(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.pow(1, 3);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.pow(eval(state.slicedString), 3);
    } else {
        state.calcResult = Math.pow(state.previous, 3);
    }
    return state;
}

function calculate10X(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.pow(10, 1);
    } else if (state.previous.length === 0) {
        setTextContent('display', '');
        state.calcResult = Math.pow(10, eval(state.slicedString));
    } else {
        state.calcResult = Math.pow(10, state.previous);
    }
    return state;
}

//removeIf(production)
module.exports = {startFactorial, calculateCube, calculateTan, calculateSin, getResult, calculate10X, calculateCos, calculateSquare, calculateFactorial, calculatePI, calculateExp, calculateE, calculateLog, calculatePercent, calculateIn, calculateDecimal, calculate, checkInputValue}
//endRemoveIf(production)


