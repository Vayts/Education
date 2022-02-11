const getNumber = require('../src/task2')

describe('getCookingTime', ()=> {
    test('a', () => {
        expect(getNumber('a')).toEqual('Invalid input data')
    })
    test('[0,0]', () => {
        expect(getNumber([0,0])).toEqual('Invalid input data')
    })
    test('[1,3]', () => {
        expect(getNumber([1,3])).toEqual('Invalid input data')
    })
    test('should return error', () => {
        expect(getNumber()).toEqual('Invalid input data')
    })
    test('[1,1,1,1,2,2,2,2]', () => {
        expect(getNumber([1,1,1,1,2,2,2,2])).toEqual('Invalid input data')
    })
    test('[0, 2, 8, -4, 0, -122, 13,13 -4, 28, 12]', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13,13 -4, 28, 12])).toEqual('Invalid input data')
    })
    test('[0, 2, 8, -4, 0, -122, 13, -4, 28, 12]', () => {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toEqual(13)
    })
    test('[1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]', () => {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toEqual(4)
    })
    test('[1,2,2]', () => {
        expect(getNumber([1,2,2])).toEqual(1)
    })
})