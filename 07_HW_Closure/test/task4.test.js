const cache = require('../src/task4')

const testFunc1 = (a) => {
    return a + 2
}

const testFunc2 = (a,b) => {
    return a + b
}

let testCache = cache(testFunc1)
let testCache2 = cache(testFunc2)

describe('cache', () => {
    test('1', () => {
        expect(testCache(1)).toEqual('Created: 3')
    })
    test('1', () => {
        expect(testCache(1)).toEqual('From cache: 3')
    })
    test('2', () => {
        expect(testCache(2)).toEqual('Created: 4')
    })

    test('1,2', () => {
        expect(testCache2(1,2)).toEqual('Created: 3')
    })
    test('1,2', () => {
        expect(testCache2(1,2)).toEqual('From cache: 3')
    })
})
