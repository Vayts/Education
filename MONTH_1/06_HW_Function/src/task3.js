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

module.exports = findTitle;