const {checkNumber, validateInput, guess, setSettings, checkAttempt} = require('../src/homework/script/main')

jest.mock('../src/homework/script/utils.js', () => {
    const originalModule = jest.requireActual('../src/homework/script/utils.js');

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
        toggleDisabledClass: jest.fn(() => true),
    };
});

describe('guess', () => {
    test('state with correct number', () => {
        expect(guess({
            gameNumber: 1,
            userNumber: 1,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        })).toEqual(true)
    })
    test('state with uncorrect number', () => {
        expect(guess({
            gameNumber: 12,
            userNumber: 1,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        })).toEqual(false)
    })
    test('state with userAttempt>gameAttempt', () => {
        expect(guess({
            gameNumber: 2,
            userNumber: undefined,
            gameAttempt: 1,
            userAttempt: 13,
            rangeMin: 0,
            rangeMax: 200
        })).toEqual(false)
    })
})

describe('gameSettingsCheck', () => {
    test('correct', () => {
        expect(setSettings({
            gameNumber: 12,
            userNumber: undefined,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        }, 10, 200, 10)).toEqual(true)
    });
    test('correct', () => {
        expect(setSettings({
            gameNumber: 12,
            userNumber: 1,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        }, 10, 200, 16)).toEqual(false)
    })
})



describe('checkNumber', () => {
    test('15,100,2', () => {
        expect(checkNumber(15, 100,2)).toEqual('??????????????')
    })
    test('10,100,3', () => {
        expect(checkNumber(10, 100,3)).toEqual('??????????????')
    })
    test('105,100,1', () => {
        expect(checkNumber(105, 100,1)).toEqual('??????????')
    })
    test('0,100,2', () => {
        expect(checkNumber(0, 100,2)).toEqual('?????????????? ?????? ???????? ???????? ???? ????????????????????!')
    })
    test('"String",100,2', () => {
        expect(checkNumber('string', 100,2)).toEqual('?? ???????? ???? ??????????????!')
    })
    test('105, "String",3', () => {
        expect(checkNumber(105, 'String',3)).toEqual('?? ???????? ???? ??????????????!')
    })
    test('null, "String", 3', () => {
        expect(checkNumber(null, 'String',3)).toEqual('?? ???????? ???? ??????????????!')
    })
    test('1, "12", 0', () => {
        expect(checkNumber(1, 12,0)).toEqual('???? ????????????!  ?? ?????????????????? ?????? ?? ???????? ????????????????')
    })
    test('1.2, "12", 0', () => {
        expect(checkNumber(1.2, 12,0)).toEqual('?????? ???? ?????????? ??????????')
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
    test('1, 220, 21', () => {
        expect(validateInput(1, 220, 11)).toEqual(false)
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

describe('checkAttempt', () => {
    test('12, 15', () => {
        expect(checkAttempt(12,15)).toEqual(true)
    })
    test('12, 10', () => {
        expect(checkAttempt(12,10)).toEqual(false)
    })
})

