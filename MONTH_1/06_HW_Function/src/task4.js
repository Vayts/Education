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

module.exports = countCharacters;