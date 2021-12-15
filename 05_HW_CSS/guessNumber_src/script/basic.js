function textFill(message, disableButton) {
    disableButton.setAttribute('disabled', 'disabled')
    let splitText = message.split('')
    text.textContent = ''
    let letterCounter = 0;
    let dialogInterval = setInterval(() => {
        if (letterCounter < splitText.length) {
            text.textContent += splitText[letterCounter]
            letterCounter++
            if (letterCounter === splitText.length) {
                disableButton.removeAttribute('disabled')
                clearInterval(dialogInterval)
            }
        }
    },25)
}
