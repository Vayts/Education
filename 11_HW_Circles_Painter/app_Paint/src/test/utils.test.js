const {addListener,getInputValue,setTextValue,getElement,getContext} = require('../js/utils')

describe('getElement', () => {
    test('should return true',() => {
        document.body.innerHTML = '<p id="test-p"></p>';
        expect(typeof getElement('test-p')).toEqual('object');
    })
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p-false"></p>';
        expect(getElement('test-p')).toBe(false);
    })
})

describe('addListener', () => {
    test('should return true',() => {
        document.body.innerHTML = '<p id="test-p"></p>';
        expect(addListener('test-p', 'click', () => {})).toBe(true);
    })
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p-false"></p>';
        expect(addListener('test-p', 'click', () => {})).toBe(false);
    })
})

describe('setTextValue', () => {
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p"></p>';
        expect(setTextValue('test-p', 'test')).toBe(true);
    })
    test('should return false',() => {
        document.body.innerHTML = '<p id="test-p-false"></p>';
        expect(setTextValue('test-p', 'test')).toBe(false);
    })
})

describe('getInputValue', () => {
    test('should return 2',() => {
        document.body.innerHTML = '<input value="2" id="test-input">';
        expect(getInputValue('test-input')).toBe("2");
    })
    test('should return false',() => {
        document.body.innerHTML = '<inpuit id="test-p-false"></inpuit>';
        expect(getInputValue('test-p')).toBe(false);
    })
})
