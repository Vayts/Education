function getSum(strA, strB) {

    if (typeof strA !== 'string' || typeof strB !== 'string') {
        return 'Invalid input data'
    }

    let longestStr = strA;
    let shorterStr = strB;

    if (strA.length < strB.length) {
        longestStr = strB;
        shorterStr = strA;
    }

    let result = longestStr.split('');
    for (let i = shorterStr.length - 1; i >= 0; i--) {
        result[result.length - (shorterStr.length - i)] = +result[result.length - (shorterStr.length - i)] + +shorterStr[i]
    }

    result.reverse()

    for(let i  = 0; i < result.length; i++) {

        if (result[i].toString().length === 2) {
            const num1 = result[i].toString()[0]
            const num2 = result[i].toString()[1]

            if (result[i+1]) {
                result[i + 1] = +result[i + 1] + +num1
                result[i] = num2
            } else {
                result.push(num1)
                result[i] = num2
            }
        }
    }

    return result.reverse().join('')
}

module.exports = getSum;