let notCloseSuggestNeedMore = ['Ух! Тут совсем холодно. Может возьмешь больше?', 'Вообще не попал! Попробуй число побольше', 'Даже не близко! Бери выше!']
let notCloseSuggestNeedLess = ['Ух! Ты совсем не попал! Возьми меньше', 'Вообще не попал! Попробуй число поменьше', 'Даже не близко! Бери ниже!']

let closeSuggestNeedMore = ['Совсем рядом! Поробуй выбрать число побольше', 'Ты близко! Возьми выше', 'Почти угадал, но попробуй большее число']
let closeSuggestNeedLess = ['Совсем рядом! Поробуй выбрать число поменьше', 'Ты близко! Возьми ниже', 'Почти угадал, но попробуй меньшее число']

let suggestNumberInput = document.querySelector('.input-attempt')
let suggestButton = document.querySelector('.game-gameplay-button')
let endButton = document.querySelector('.game-end-button')
let gameResult = document.querySelector('.game-result')
let gameResultText = document.querySelector('.game-result-text')
let reloadButton = document.querySelector('.game-result-button')
let attempt = 1;

endButton.onclick = function () {
    location.reload()
}

reloadButton.onclick = function () {
    location.reload()
}

suggestButton.onclick = function () {
    let numberDifference = gameNumber - +suggestNumberInput.value
    if (!suggestNumberInput.value) {
        textFill('Что ты сказал?', suggestButton)
    } else {
        console.log(playerAttemptCounter)
        if (attempt === playerAttemptCounter) {
            textFill('Ты потратил все свои попытки', suggestButton)
            loose('Неудача! Попробуй ещё раз')
        } else {
            if (attempt < 2) {
                textFill('Не попал! В следующий раз я тебе подскажу',suggestButton)
                attempt++
            } else {
                if (numberDifference === 0) {
                    textFill('КВАУ! Ты угадал!!!!', suggestButton)
                    win(`Ты победил с ${attempt}-ой попытки`)
                    return
                }
                if(+suggestNumberInput.value > +maxNumberRange.value) {
                    textFill('Твоё число больше оговоренного максимума', suggestButton)
                    attempt++
                } else if (+suggestNumberInput.value < +minNumberRange.value) {
                    textFill('Твоё число меньше оговоренного максимума', suggestButton)
                    attempt++
                } else if (numberDifference > 40) {
                    textFill('Ты ужасно далеко! Возьми больше',suggestButton)
                    attempt++
                } else if (numberDifference < -40) {
                    textFill('Ты ужасно далеко! Возьми меньше',suggestButton)
                    attempt++
                } else if (numberDifference >= 15 && numberDifference < 40) {
                    textFill(notCloseSuggestNeedMore[randomText()], suggestButton)
                    attempt++
                } else if (numberDifference >= 1 && numberDifference < 15) {
                    textFill(closeSuggestNeedMore[randomText()], suggestButton)
                    attempt++
                } else if (numberDifference > -40 && numberDifference < -15) {
                    textFill(notCloseSuggestNeedLess[randomText()],suggestButton)
                    attempt++
                } else if (numberDifference > -15 && numberDifference <= -1) {
                    textFill(closeSuggestNeedLess[randomText()],suggestButton)
                    attempt++
                }
            }
        }
    }
}

function randomText() {
    return Math.floor(Math.random() * (2 + 1))
}

function win(message) {
    gameResult.classList.remove('disabled')
    gameResultText.innerHTML = message;
    gameGameplay.classList.add('disabled')
    gameResult.classList.remove('disabled')
}

function loose(message) {
    gameResult.classList.remove('disabled')
    gameResultText.textContent = message;
    gameGameplay.classList.add('disabled')
    gameResult.classList.remove('disabled')
}