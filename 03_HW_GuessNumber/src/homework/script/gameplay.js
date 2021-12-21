let suggestNumberInput = document.querySelector('.gameplay_input-attempt')
let suggestButton = document.querySelector('.gameplay_button-try')
let endButton = document.querySelector('.gameplay_button-end')
let gameResult = document.querySelector('.result')
let gameResultText = document.querySelector('.result_text')
let reloadButton = document.querySelector('.result_button')
let attempt = 1;

endButton.onclick = function () {
    location.reload()
}

reloadButton.onclick = function () {
    location.reload()
}

suggestButton.onclick = function () {
    let numberDifference = gameNumber - +suggestNumberInput.value
    checkNumberMatch(numberDifference)
}

function checkNumberMatch (numberDifference) {
    if (!suggestNumberInput.value) {
        textFill('Что ты сказал?', suggestButton)
        return 'Что ты сказал?';
    }
    if (numberDifference === 0) {
        textFill('КВАУ! Ты угадал!!!!', suggestButton)
        win(`Ты победил с ${attempt}-ой попытки`)
        return `Ты победил с 0-ой попытки`;
    }
    if(+suggestNumberInput.value > +maxNumberRange.value) {
        attempt++
        looseGameChecker('Твоё число больше оговоренного максимума')
        return 'Твоё число больше оговоренного максимума';
    }
    if (+suggestNumberInput.value < +minNumberRange.value) {
        attempt++
        looseGameChecker('Твоё число меньше оговоренного максимума')
        return 'Твоё число меньше оговоренного максимума';
    }
    if (attempt < 2) {
        attempt++
        looseGameChecker('Не попал! В следующий раз я тебе подскажу')
        return 'Не попал! В следующий раз я тебе подскажу'
    } else {
        if (numberDifference > 40) {
            attempt++
            looseGameChecker('Ты ужасно далеко! Возьми больше')
            return 'Ты ужасно далеко! Возьми больше'
        } else if (numberDifference < -40) {
            attempt++
            looseGameChecker('Ты ужасно далеко! Возьми меньше')
            return 'Ты ужасно далеко! Возьми меньше'
        } else if (numberDifference >= 15 && numberDifference < 40) {
            attempt++
            looseGameChecker('Ух! Тут совсем холодно. Может возьмешь больше?')
            return 'Ух! Тут совсем холодно. Может возьмешь больше?'
        } else if (numberDifference >= 1 && numberDifference < 15) {
            attempt++
            looseGameChecker('Совсем рядом! Попробуй выбрать число побольше')
            return 'Совсем рядом! Попробуй выбрать число побольше'
        } else if (numberDifference > -40 && numberDifference < -15) {
            attempt++
            looseGameChecker('Ух! Ты совсем не попал! Возьми меньше')
            return 'Ух! Ты совсем не попал! Возьми меньше'
        } else if (numberDifference > -15 && numberDifference <= -1) {
            attempt++
            looseGameChecker('Совсем рядом! Попробуй выбрать число поменьше')
            return 'Совсем рядом! Попробуй выбрать число поменьше'
        }
    }
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

function sum(a,b) {
    return a + b
}