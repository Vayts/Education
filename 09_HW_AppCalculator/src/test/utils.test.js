//removeIf(production)
const {errorCheck, setTextContent, addTextContent, clearState, getTextValue} = require('../app/script/utils.js')

describe('addTextContent', () => {
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p"></p>'
        expect(addTextContent('test-p', 'test')).toBe(true)
    })
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p-false"></p>'
        expect(addTextContent('test-p', 'test')).toBe(false)
    })
})

describe('setTextContent', () => {
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p"></p>'
        expect(setTextContent('test-p', 'test')).toBe(true)
    })
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p-false"></p>'
        expect(setTextContent('test-p', 'test')).toBe(false)
    })
})

describe('getTextValue', () => {
    test('should return test',() => {
        document.body.innerHTML = '<p id="test-p">Test</p>'
        expect(getTextValue('test-p')).toBe('Test')
    })
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p-false">Test</p>'
        expect(getTextValue('test-p')).toBe(false)
    })
})

describe('clearState', () => {
    test('should return empty state.previous',() => {
        expect(clearState({previous: 'test'})).toEqual({previous: ''})
    })
    test('should return false',() => {
        expect(clearState(null)).toEqual(false)
    })
})

describe('errorCheck', () => {
    test('should return true', () => {
        expect(errorCheck('*')).toBe(true)
    })
    test('should return false', () => {
        expect(errorCheck('*2')).toBe(false)
    })
})

