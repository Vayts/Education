const {draw, clear, setRange, setColor, saveImg, initApp, getEvent} = require('../js/init')
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

const ctx = {
    beginPath: ()=>{},
    moveTo: ()=>{},
    lineTo: ()=>{},
    lineCap: '',
    lineWidth: 10,
    strokeStyle: '#ff0000',
    stroke: ()=> {},
    clearRect: ()=>{},
    closePath: () => {}
}

describe('setRange', () => {
    const testBrush = new Brush(ctx,5, '#ff0000')
    test('should return new range', () => {
        expect(setRange(testBrush)).toEqual(5)
    })
})

describe('setColor', () => {
    const testBrush = new Brush(ctx,5, '#ff0000')
    test('should return new range', () => {
        expect(setColor(testBrush)).toEqual('#000000')
    })
})

describe('clear', () => {
    test('should return true', () => {
        expect(clear(ctx, {
            width: 100,
            height: 200,
        })).toBe(true)
    })
    test('should return false', () => {
        expect(clear('', {
            width: 100,
            height: 200,
        })).toBe(false)
    })
})

describe('init', function () {
    test('should be undefined', ()=> {
        expect(initApp()).toBeUndefined()
    })
});

describe('saveImg', function () {
    test('should be undefined', ()=> {
        expect(saveImg({
            toDataURL: () => 'test'
        })).toBe('test')
    })
});

describe('draw', function () {
    test('should return true', ()=> {
        const testBrush = new Brush(ctx,10, '#ff0000')
        expect(draw({buttons:2}, testBrush)).toBe(true)
    })
    test('should return false', ()=> {
        const testBrush = new Brush(ctx,10, '#ff0000')
        expect(draw({buttons:0}, testBrush)).toBe(false)
    })
});


