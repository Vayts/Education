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

module.exports = getNumber;