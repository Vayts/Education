const {Brush} = require('../js/brush')

jest.mock('../js/utils.js', () => {
    const originalModule = jest.requireActual('../js/utils.js');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,

        addListener: jest.fn(() => true),
        getListener: jest.fn(() => true),
        getInputValue: jest.fn(() => true),
        setTextValue: jest.fn(() => true),
    };
});

jest.mock('../js/brush.js', () => {
    const originalModule = jest.requireActual('../js/brush.js');
    return {
        __esModule: true,
        ...originalModule,
        setTextValue: jest.fn(() => true),
    };
});

const ctx = {
    beginPath: ()=>{},
    moveTo: ()=>{},
    lineTo: ()=>{},
    lineCap: '',
    lineWidth: 10,
    strokeStyle: '#ff0000',
    stroke: ()=> {},
    closePath: () => {}
}

describe('brush.changeSize', () => {
    const testBrush = new Brush(ctx,10, '#ff0000')
    test('should return true', () => {
        expect(testBrush.changeSize(10)).toBe(true)
    })
    test('should return false', () => {
        expect(testBrush.changeSize('test')).toBe(false)
    })
})

describe('brush.draw', () => {
    const testBrush = new Brush(ctx,10, '#ff0000')
    test('should return true', () => {
        expect(testBrush.draw({movementX: 3, movementY: 4}, 4, 4)).toBe(true)
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
