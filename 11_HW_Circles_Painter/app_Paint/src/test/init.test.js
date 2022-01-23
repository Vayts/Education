const {draw, clear, setRange, setColor, saveImg} = require('../js/init')
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
        getInputValue: jest.fn('')
            .mockReturnValueOnce('5')
            .mockReturnValueOnce('#000000'),
        setTextValue: jest.fn(() => true),
    };
});

describe('setRange', () => {
    const testBrush = new Brush(5, '#ff0000')
    test('should return new range', () => {
        expect(setRange(testBrush)).toEqual({'color': '#ff0000', 'size': 5})
    })
})

describe('setColor', () => {
    const testBrush = new Brush(5, '#ff0000')
    test('should return new range', () => {
        expect(setColor(testBrush)).toEqual({'color': '#000000', 'size': 5})
    })
})


