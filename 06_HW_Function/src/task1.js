function getCookingTime(eggsAmount) {
    let result = 0;
    if (typeof eggsAmount !== 'number') {
        return 'Invalid input data'
    }
    result = Math.ceil(eggsAmount/5) * 5
    return result
}

module.exports = getCookingTime;