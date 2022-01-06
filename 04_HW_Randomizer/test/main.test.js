const {errorCheck, returnRandomNumber, resetApp, createArr} = require('../src/script/main')

jest.mock('../src/script/utils.js', () => {
    const originalModule = jest.requireActual('../src/script/utils.js');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        // alertCall: jest.fn(),
        // attemptsPlus: jest.fn(),
        getInputValue: jest.fn(() => true),
        setInputValue: jest.fn(() => true),
        addListener: jest.fn(() => true),
        setTextValue: jest.fn(() => true),
        disabledCheck: jest.fn(() => true),
        setDisabled: jest.fn(() => true),
        removeDisabled: jest.fn(() => true),
    };
});

describe('errorCheck', () => {
    test('state, false min, true max', () => {
        expect(errorCheck({
            rangeMin: 0,
            rangeMax: 100,
            arr: undefined,
        }, 123123121212, 100)).toEqual(false)
    })
    test('state, tru min, true max', () => {
        expect(errorCheck({
            rangeMin: 0,
            rangeMax: 100,
            arr: undefined,
        }, 12, 100)).toEqual(true)
    })
    test('state, true min, false max', () => {
        expect(errorCheck({
            rangeMin: 0,
            rangeMax: 100,
            arr: undefined,
        }, 123, 15768576785600)).toEqual(false)
    })
    test('state, true min, false max', () => {
        expect(errorCheck({
            rangeMin: 0,
            rangeMax: 100,
            arr: undefined,
        }, 123, 15768576785600)).toEqual(false)
    })
    test('state, min > max', () => {
        expect(errorCheck({
            rangeMin: 0,
            rangeMax: 100,
            arr: undefined,
        }, 1233, 100)).toEqual(false)
    })
    test('state, not integer min, integer max', () => {
        expect(errorCheck({
            rangeMin: 0,
            rangeMax: 100,
            arr: undefined,
        }, 12.33, 100)).toEqual(false)
    })
})

describe('createArr', () => {
    test('state', () => {
        expect(createArr({
            rangeMin: 0,
            rangeMax: 2,
            arr: undefined,
        })).toEqual({
            rangeMin: 0,
            rangeMax: 2,
            arr: [0,1,2],
        })
    })
})

describe('resetApp', () => {
    test('should reset state.min', () => {
        expect(resetApp({
            rangeMin: 1,
            rangeMax: 100,
            arr: [],
        })).toEqual(
            {
                rangeMin: 0,
                rangeMax: 100,
                arr: undefined,
            }
        )
    })
    test('should reset state.max', () => {
        expect(resetApp({
            rangeMin: 0,
            rangeMax: 120,
            arr: [],
        })).toEqual(
            {
                rangeMin: 0,
                rangeMax: 100,
                arr: undefined,
            }
        )
    })
    test('should reset state.arr', () => {
        expect(resetApp({
            rangeMin: 1,
            rangeMax: 100,
            arr: [1,2],
        })).toEqual(
            {
                rangeMin: 0,
                rangeMax: 100,
                arr: undefined,
            }
        )
    })
})

describe('returnRandomNumber', () => {
    test('state.arr.length > 0', () => {
        expect(returnRandomNumber({
            rangeMin: 1,
            rangeMax: 100,
            arr: [1,2],
        })).toEqual(true)
    })
    test('state.arr.length === 0', () => {
        expect(returnRandomNumber({
            rangeMin: 1,
            rangeMax: 100,
            arr: [],
        })).toEqual(false)
    })
})