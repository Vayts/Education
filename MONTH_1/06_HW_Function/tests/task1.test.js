
const getCookingTime = require('../src/task1');


describe('getCookingTime', ()=> {
    test('a', () => {
        expect(getCookingTime('a')).toEqual('Invalid input data')
    })
    test('', () => {
        expect(getCookingTime()).toEqual('Invalid input data')
    })
    test('3', () => {
        expect(getCookingTime(3)).toEqual(5)
    })
    test('9', () => {
        expect(getCookingTime(9)).toEqual(10)
    })
    test('11', () => {
        expect(getCookingTime(11)).toEqual(15)
    })
})