function getNextPalindrome(number) {
    let startPoint = number + 1;
    if (typeof number !== 'number') {
        return 'Invalid input data'
    }
    if (number < 10) {
        startPoint = 10;
    }
    while (startPoint.toString().split('').reverse().join('') !== startPoint.toString()) {
        startPoint++
    }
    return startPoint
}

module.exports = getNextPalindrome;