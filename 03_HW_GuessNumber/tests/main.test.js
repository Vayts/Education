const {checkNumber, validateInput, guess, setSettings} = require('../src/homework/script/main')

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


document.innerHTML = '<p class="game-end-text"></p>'

describe('guess', () => {
    test('state with correct number', () => {
        expect(guess({
            gameNumber: 0,
            userNumber: undefined,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        })).toEqual(true)
    })
    test('state with uncorrect number', () => {
        expect(guess({
            gameNumber: 12,
            userNumber: undefined,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        })).toEqual(false)
    })
    test('state with userAttempt>gameAttempt', () => {
        expect(guess({
            gameNumber: 1,
            userNumber: undefined,
            gameAttempt: 12,
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
            userNumber: undefined,
            gameAttempt: 12,
            userAttempt: 0,
            rangeMin: 0,
            rangeMax: 200
        }, 10, 200, 16)).toEqual(false)
    })
})



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
        expect(checkNumber('string', 100)).toEqual('Я тебя не понимаю!')
    })
    test('105, "String"', () => {
        expect(checkNumber(105, 'String')).toEqual('Я тебя не понимаю!')
    })
    test('null, "String"', () => {
        expect(checkNumber(null, 'String')).toEqual('Я тебя не понимаю!')
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

