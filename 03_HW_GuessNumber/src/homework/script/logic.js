function validateInput(min, max, attempt) {

    if (typeof min !== 'number' || typeof max !== 'number' || typeof attempt !== 'number') {
        return false
    }

    if (min === '' || max === '' || attempt === '') {
        return false;
    }

    if (min >= max) {
        return false;
    }

    if (max > 200 || max < 3) {
        return false;
    }

    if (min < 1 || min > 198) {
        return false;
    }

    if (max - min <= attempt) {
        return false;
    }

    if (attempt < 1 || attempt > 15) {
        return false;
    }

    return true;
}

function checkNumber(num, numberValue) {

    if (typeof num !== 'number' || typeof numberValue !== 'number') {
        return 'Invalid input data'
    }

    let numberDiff = numberValue - num;
    if (numberDiff > 15 || numberDiff < -15) {
        return 'Холодно'
    } else {
        return 'Тепло'
    }
}


module.exports = {validateInput, checkNumber}