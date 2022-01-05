const countCharacters = require('../src/task4')


describe('countCharacters', () => {
    test('123', () => {
        expect(countCharacters(123)).toEqual('Invalid input data')
    })
    test('', () => {
        expect(countCharacters()).toEqual('Invalid input data')
    })
    test('"123"', () => {
        expect(countCharacters('123')).toEqual({1: 1, 2:1, 3: 1})
    })
    test('aaaaaaa', () => {
        expect(countCharacters('aaaaaa')).toEqual({a: 6})
    })
})