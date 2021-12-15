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
    console.log(attempt)
    console.log(gameNumber)
    console.log(numberDifference)
    if (!suggestNumberInput.value) {
        textFill('Что ты сказал?', suggestButton)
        return false;
    }
    if (numberDifference === 0) {
        textFill('КВАУ! Ты угадал!!!!', suggestButton)
        win(`Ты победил с ${attempt}-ой попытки`)
        return true;
    }
    if(+suggestNumberInput.value > +maxNumberRange.value) {
        attempt++
        looseGameChecker('Твоё число больше оговоренного максимума')
        return false;
    }
    if (+suggestNumberInput.value < +minNumberRange.value) {
        attempt++
        looseGameChecker('Твоё число меньше оговоренного максимума')
        return false;
    }
    if (attempt < 2) {
        attempt++
        looseGameChecker('Не попал! В следующий раз я тебе подскажу')
    } else {
        if (numberDifference > 40) {
            attempt++
            looseGameChecker('Ты ужасно далеко! Возьми больше')
        } else if (numberDifference < -40) {
            attempt++
            looseGameChecker('Ты ужасно далеко! Возьми меньше')
        } else if (numberDifference >= 15 && numberDifference < 40) {
            attempt++
            looseGameChecker(notCloseSuggestNeedMore[randomText()])
        } else if (numberDifference >= 1 && numberDifference < 15) {
            attempt++
            looseGameChecker(closeSuggestNeedMore[randomText()])
        } else if (numberDifference > -40 && numberDifference < -15) {
            attempt++
            looseGameChecker(notCloseSuggestNeedLess[randomText()])
        } else if (numberDifference > -15 && numberDifference <= -1) {
            attempt++
            looseGameChecker(closeSuggestNeedLess[randomText()])
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

function looseGameChecker(message) {
    if (attempt === playerAttemptCounter + 1) {
        textFill('Ты потратил все свои попытки', suggestButton)
        loose('Неудача! Попробуешь ещё?')
        return true
    } else {
        textFill(message,suggestButton)
    }

}

function loose(message) {
    gameResult.classList.remove('disabled')
    gameResultText.textContent = message;
    gameGameplay.classList.add('disabled')
    gameResult.classList.remove('disabled')
}