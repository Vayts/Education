

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function () {
//         // if (buttons[i].value === '=') {
//         //     display.innerText = eval(display.textContent)
//         //     return '-'
//         // } else {
//         //     display.innerText += buttons[i].value
//         // }
//         switch (buttons[i].value) {
//             case '=':
//                 display.innerText = eval(display.textContent)
//                 return '-'
//             case 'clear':
//                 display.innerText = ''
//                 return 'clear'
//             default:
//                 display.innerText += buttons[i].value
//         }
//     }
// }
//
// console.log(display.textContent)

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

    const buttons = document.querySelectorAll('.buttons__button')
    buttons.forEach((el) => el.addEventListener('click', setValue.bind(null, state)))
}




function setValue(state) {
    const display = document.getElementById('display')

    if (['1','2','3','4','5','6','7','8','9','0','(',')', '+', '*', '-', '/', '.'].includes(event.target.value)) {
        display.innerText += event.target.value;
        return;
    }

    if (event.target.value === '='){
        display.innerText = getResult(display.textContent);
        return;
    }

    if (event.target.value === 'clear') {
        display.innerText = '';
        return;
    }

    if (event.target.value === 'delete') {
        display.innerText = display.textContent.slice(0, display.textContent.length-1);
        return;
    }

    if (event.target.value === '%') {
        calculate(display.textContent, calculatePercent, state)
    }

    if (event.target.value === '|x|') {
        calculate(display.textContent, startFactorial, state)
    }

    if (event.target.value === 'Pi') {
        calculate(display.textContent, calculatePI, state)
    }

    if (event.target.value === 'Pi') {
        calculate(display.textContent, calculatePI, state)
    }

    if (event.target.value === 'exp') {
        calculate(display.textContent, calculateExp, state)
    }

    if (event.target.value === 'In') {
        calculate(display.textContent, calculateIn, state)
    }

    if (event.target.value === 'log10') {
        calculate(display.textContent, calculateLog, state)
    }

    if (event.target.value === '1/x') {
        calculate(display.textContent, calculateDecimal, state)
    }
}

function calculate(displayValue, func, state) {
    if (errorCheck(displayValue)) {
        setTextContent('display', 'Error')
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
        return eval(string.slice(0, string.length-1))
    } else {
        return eval(string)
    }
}

function calculatePercent(state) {
    console.log('test')
    if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = (state.slicedString / 100)
        return (state.slicedString / 100)
    } else {
        const subResult = eval(state.slicedExpression)
        console.log((state.slicedExpression * (state.previous / 100)).toFixed(2))
        state.calcResult = (state.slicedExpression * (state.previous / 100)).toFixed(2)
        return subResult * (state.slicedExpression / 100)
    }
}

function startFactorial(state) {

    if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = calculateFactorial(Number(state.slicedString))
    } else {
        state.calcResult = calculateFactorial(Number(state.previous))
    }
}

function calculateFactorial(n) {
    let number = n;

    if (n < 0) {
        number = number * - 1
    }

    if (n === 0) {
        return 1;
    }

    else {
        return n * calculateFactorial(n - 1);
    }
}

function sliceDisplayValue(string, state) {
    const arr = string.split('')

    let index = arr.length;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (['+', '-', '/', '*'].includes(arr[i])) {
            index = i + 1;
            break;
        }
    }
    state.slicedString = string.slice(0, index)
    state.slicedExpression = string.slice(0, index - 1)
    state.previous = string.slice(index, string.length)

    return string.slice(0, index)
}

function calculatePI(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.PI.toFixed(5);
    } else if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = (Math.PI * eval(state.slicedString)).toFixed(5)
    } else {
        state.calcResult = (Math.PI * state.previous).toFixed(5)
    }
}

function calculateExp(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.exp
    } else if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = Math.exp(eval(state.slicedString)).toFixed(5)
    } else {
        state.calcResult = Math.exp(state.previous).toFixed(5)
    }
}

function calculateIn(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.log(1)
    } else if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = Math.log(eval(state.slicedString)).toFixed(5)
    } else {
        state.calcResult = Math.log(state.previous).toFixed(5)
    }
}

function calculateLog(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = Math.log10(1)
    } else if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = Math.log10(eval(state.slicedString)).toFixed(5)
    } else {
        state.calcResult = Math.log10(state.previous).toFixed(5)
    }
}

function calculateDecimal(state) {
    if (state.slicedString === '' && state.previous === '') {
        state.calcResult = 1
    } else if (state.previous.length === 0) {
        setTextContent('display', '')
        state.calcResult = 1 / eval(state.slicedString)
    } else {
        state.calcResult = 1 / (state.previous)
    }
}

