const {Brush} = require('../js/brush')

jest.mock('../js/utils.js', () => {
    const originalModule = jest.requireActual('../js/utils.js');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        // alertCall: jest.fn(),
        // attemptsPlus: jest.fn(),
        addListener: jest.fn(() => true),
        getListener: jest.fn(() => true),
        getInputValue: jest.fn(() => true),
        setTextValue: jest.fn(() => true),
    };
});

let canvas;

beforeEach(() => {
    canvas = document.createElement('canvas');
});

describe('brush.changeSize', () => {
    const testBrush = new Brush(10, '#ff0000')
    test('should return true', () => {
        expect(testBrush.changeSize(10)).toBe(true)
    })
    test('should return false', () => {
        expect(testBrush.changeSize('aaaa')).toBe(false)
    })
})

describe('brush.changeColor', () => {
    const testBrush = new Brush(10, '#ff0000')
    test('should return true', () => {
        expect(testBrush.changeColor('#ff0000')).toBe(true)
    })
    test('should return false', () => {
        expect(testBrush.changeColor(12)).toBe(false)
    })
})
