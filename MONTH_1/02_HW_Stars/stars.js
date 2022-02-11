// task 1

function drawStarsFull() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            result = result + '*  '
        }
        result = result +  '\n'

    }
    return result
}

// task 2

function drawStarsSqr() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || i === 6 || j === 0 || j === 6){
                result = result + '*  '
            } else {
                result = result + '   '
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 3

function drawStarsLeftUpTriangle() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || j === 0 || j === 6 - i) {
                result = result + '*  '
            } else {
                result = result + '   '
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 4

function drawStarsLeftDownTriangle() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {

            if (i === 6 || j === 0 || j === i) {
                result = result + '*  '
            } else {
                result = result + '   '
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 5

function drawStarsRightDownTriangle() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 6 || j === 6 || i === 6 - j) {
                result = result + '*  '
            } else {
                result = result + '   '
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 6

function drawStarsRightUpTriangle() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 || j === 6 || i - j === 0) {
                result = result + '*  '
            } else {
                result = result + '   '
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 7

function drawStarsXForm() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 6 - j || i - j === 0) {
                result = result + '*  '
            } else {
                result = result + '   '
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 8

function drawStarsSmallUpTriangle() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i <= 3) {
                if (i === 0 || j === i || j === 6 - i) {
                    result = result + '*  '
                } else {
                    result = result + '   '
                }
            }
        }
        result = result +  '\n'
    }
    return result
}

// task 9

function drawStarsSmallDownTriangle() {
    let result = '';
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i >= 3) {
                if (i === 6 || j === i || j === 6 - i) {
                    result = result + '*  '
                } else {
                    result = result + '   '
                }
            }
        }
        result = result +  '\n'
    }
    return result
}

