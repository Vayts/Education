const {checkNumber, validateInput} = require('../src/homework/script/logic')


describe('checkNumber', () => {
    test('15,100', () => {
        expect(checkNumber(15, 100)).toEqual('Холодно')
    })
    test('0,100', () => {
        expect(checkNumber(0, 100)).toEqual('Холодно')
    })
    test('105,100', () => {
        expect(checkNumber(105, 100)).toEqual('Тепло')
    })
    test('"String",100', () => {
        expect(checkNumber('string', 100)).toEqual('Invalid input data')
    })
    test('105, "String"', () => {
        expect(checkNumber(105, 'String')).toEqual('Invalid input data')
    })
    test('null, "String"', () => {
        expect(checkNumber(null, 'String')).toEqual('Invalid input data')
    })
})

describe('validateInput', () => {
    test('1, 200, 7', () => {
        expect(validateInput(1, 200, 7)).toEqual(true)
    })
    test('1, 3, 1', () => {
        expect(validateInput(1, 3, 1)).toEqual(true)
    })
    test('199, 200, 7', () => {
        expect(validateInput(198, 200, 1)).toEqual(true)
    })
    test('10, 15, 6', () => {
        expect(validateInput(10, 15, 4)).toEqual(true)
    })
    test('1, 200, 21', () => {
        expect(validateInput(1, 200, 21)).toEqual(false)
    })
    test('199, 200, 7', () => {
        expect(validateInput(199, 200, 7)).toEqual(false)
    })
    test('199, 155, 7', () => {
        expect(validateInput(199, 155, 7)).toEqual(false)
    })
    test('"", 200, 7', () => {
        expect(validateInput('', 200, 7)).toEqual(false)
    })
    test('199, "", 7', () => {
        expect(validateInput(199, '', 7)).toEqual(false)
    })
    test('10, 15, 6', () => {
        expect(validateInput(10, 15, 5)).toEqual(false)
    })

})