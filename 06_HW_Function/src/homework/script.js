function getCookingTime(eggsAmount) {
    let result = 0;
    if (typeof eggsAmount !== 'number') {
        return 'Invalid input data'
    }
    result = Math.ceil(eggsAmount/5) * 5
    return result
}

function getNumber (array) {
    if (!Array.isArray(array)) {
        return 'Invalid input data'
    }

    let odd = array.filter((el)=> el % 2 !== 0)
    let even = array.filter((el) => el % 2 === 0)

    if (odd.length === even.length) {
        return 'Invalid input data'
    }
    if (odd.length === 0 || even.length === 0) {
        return 'Invalid input data'
    }
    if (odd.length > 1 && even.length > 1) {
        return 'Invalid input data'
    }

    if (odd.length > even.length) {
        return even[0]
    }
    return odd[0]
}

// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]))

function findTitle(array, string) {
    let result = []
    for (let key in array) {
        if (array[key].hasOwnProperty('title')) {
            let stringLowerCase = string.toLowerCase()
            let titleLowerCase = array[key].title.toLowerCase()
            if (titleLowerCase.includes(stringLowerCase)) {
                result.push(array[key])
            }
        }
    }
    if (result.length === 0) {
        return 'Nothing'
    }
    return result
}

function countCharacters(string) {
    if (!string) {
        return 'Invalid input data'
    }
    if (typeof string !== 'string') {
        return 'Invalid input data'
    }
    let result = {}
    string.replace(/\s+/g, '').split('').forEach((el) => {
        if (result[el] === undefined) {
            result[el] = 1;
        } else {
           result[el]++
        }
    })
    return result
}

console.log(countCharacters('ascc'))

function getNextPalindrome(number) {
    let result;
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
    result = startPoint;
    return startPoint
}

module.exports = {getCookingTime, getNumber, findTitle, countCharacters, getNextPalindrome}

