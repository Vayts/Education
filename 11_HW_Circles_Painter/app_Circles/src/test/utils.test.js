const {addListener,getElement,getContext} = require('../js/utils.js');

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

describe('getContext', () => {
    test('should return true',() => {
        document.body.innerHTML = '<canvas id="test-canvas"></canvas>';
        expect(typeof getContext('test-canvas')).toBe('object');
    })
    test('should return false',() => {
        document.body.innerHTML = '<canvas id="test-canvas-false"></canvas>';
        expect(getContext('test-canvas')).toBe(false);
    })
})

