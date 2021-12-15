// start

let startDialogTextSample = ['Давай поиграем!','Я загадаю число, а ты должен будешь его отгадать!','Согласен?']
let startDialogCounter = 0;
let text = document.querySelector('.dialog-text')
let dialogButton = document.querySelector('.dialog-button')
let gameStart = document.querySelector('.game-start')
let gameRules = document.querySelector('.game-rules')

dialogButton.addEventListener('click', skipDialog)

function skipDialog() {
    let sentence = startDialogTextSample[startDialogCounter];
    textFill(sentence, dialogButton)
    startDialogCounter++
    if (startDialogCounter === startDialogTextSample.length) {
        goToSettingStage();
    }
}

function goToSettingStage() {
    dialogButton.style.borderColor = 'transparent transparent transparent #bea611;'
    dialogButton.removeEventListener('click', skipDialog)
    dialogButton.classList.add('disabled')
    gameRules.classList.add('disabled')
    gameStart.classList.add('active')
}


