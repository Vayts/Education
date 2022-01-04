function cache(fn) {
    let data = {}

    return function () {
        let key = [].slice.call(arguments).join('');
        if (data[key]) {
            return `From cache: ${data[key]}`
        } else {
            data[key] = fn.apply(this, arguments)
            return `Created: ${data[key]}`
        }
    }


}

module.exports = cache;

