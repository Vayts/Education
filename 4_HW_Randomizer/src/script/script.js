let resultButton = document.querySelector('.result-button')
let resetButton = document.querySelector('.reset-button')
let minInput = document.querySelector('.min-input')
let maxInput = document.querySelector('.max-input')
let resultText = document.querySelector('.randomizer-result-text')

let arr = []

resultButton.onclick = function () {
    if (!minInput.hasAttribute('disabled')) {
        if (errorCheck(+minInput.value, +maxInput.value)) {
            startGenerate()
            returnRandomNumber()
        }
    } else {
        returnRandomNumber()
    }

}

resetButton.onclick = function () {
    resetGenerate()
}

function startGenerate() {
    arr=[]
    let min = +minInput.value;
    let max = +maxInput.value;

    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    minInput.setAttribute('disabled', 'disabled')
    maxInput.setAttribute('disabled', 'disabled')
    resetButton.removeAttribute('disabled')
}

function resetGenerate() {
    arr = []
    minInput.removeAttribute('disabled')
    maxInput.removeAttribute('disabled')
    minInput.value = 1;
    maxInput.valie = 100;
    resetButton.setAttribute('disabled', 'disabled')
    if (resultButton.hasAttribute('disabled')) {
        resultButton.removeAttribute('disabled')
    }
}

function returnRandomNumber() {
    if (arr.length === 0) {
        resultText.innerText = 'Elements are over'
        resultButton.setAttribute('disabled', 'disabled')
    } else {
        let randomIndex = random(0, arr.length-1)
        let result = arr[randomIndex]
        arr.splice(randomIndex, 1)
        console.log(arr)
        resultText.innerText = result
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function errorCheck(min, max) {
    if (min > 1000000 || max > 1000000) {
        resultText.innerText = 'Numbers > 1 mil.'
        return false;
    } else if (min > max) {
        resultText.innerText = 'Min > Max?'
        return false
    } else if (!Number.isInteger(min) || !Number.isInteger(max)) {
        resultText.innerText = 'Only integers'
        return false
    } else {
        return true
    }
}