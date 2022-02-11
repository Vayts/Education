const getNextPalindrome = require('../src/task5')

describe('getNextPalindrome', ()=> {
    test('string', () => {
        expect(getNextPalindrome('string')).toEqual('Invalid input data')
    })
    test('12', () => {
        expect(getNextPalindrome(12)).toEqual(22)
    })
    test('54', () => {
        expect(getNextPalindrome(54)).toEqual(55)
    })
    test('-1', () => {
        expect(getNextPalindrome(-1)).toEqual(11)
    })
    test('1', () => {
        expect(getNextPalindrome(1)).toEqual(11)
    })
})