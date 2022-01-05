function tickets(person) {

    if (!Array.isArray(person)) {
        return 'Invalid input data'
    }

    const cost = 25;
    let personArr = person;
    let pocket = []

    if (+person[0] !== cost) {
        return 'NO'
    }

    for (let i = 0; i < personArr.length; i++) {
        if (pocket.length === 0 || +personArr[i] === 25) {
            pocket.push(+personArr[i])
            pocket.sort((a,b) => b - a)
        } else {
            let fullChange = +personArr[i] - cost;

            let change = 0;
            let isSold = false;

            for (let m = 0; m < pocket.length; m++) {

                if (change + pocket[m] <= fullChange) {
                    change = change + pocket[m]
                    pocket.splice(m, 1)
                    m--

                    if (change === fullChange) {
                        isSold = true;
                        break;
                    }

                }
            }
            pocket.push(+personArr[i])
            pocket.sort((a,b) => b - a)

            if (isSold === false) {
                return 'NO'
            }
        }
    }
    return 'YES'
}

module.exports = tickets;

