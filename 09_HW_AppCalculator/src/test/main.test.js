const {
    startFactorial,
    calculateCube,
    calculateTan,
    calculateSin,
    getResult,
    calculate10X,
    calculateCos,
    calculateSquare,
    calculateFactorial,
    calculatePI,
    calculateExp,
    calculateE,
    calculateLog,
    calculatePercent,
    calculateIn,
    calculateDecimal,
    calculate,
    checkInputValue
} = require('../app/script/main');

jest.mock('../app/script/utils.js', () => {
    const originalModule = jest.requireActual('../app/script/utils.js');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,

        setTextContent: jest.fn(() => true),
        addTextContent: jest.fn(() => true),
        errorCheck: jest.fn(() => false),
        setValue: jest.fn(),
        getTextValue: jest.fn(() => '')
    };
});

describe('checkInputValue', () => {
    test('1', () => {
        expect(checkInputValue('1', {})).toBe('Digits')
    })
    test('+', () => {
        expect(checkInputValue('+', {})).toBe('Digits')
    })
    test('=', () => {
        expect(checkInputValue('=', {})).toBe('Result')
    })
    test('clear', () => {
        expect(checkInputValue('clear', {})).toBe('Clear')
    })
    test('delete', () => {
        expect(checkInputValue('delete', {})).toBe('Delete')
    })
    test('%', () => {
        expect(checkInputValue('%', {})).toBe('%')
    })
    test('|x|', () => {
        expect(checkInputValue('|x|', {})).toBe('|x|')
    })
    test('Pi', () => {
        expect(checkInputValue('Pi', {})).toBe('Pi')
    })
    test('exp', () => {
        expect(checkInputValue('exp', {})).toBe('exp')
    })
    test('In', () => {
        expect(checkInputValue('In', {})).toBe('In')
    })
    test('log10', () => {
        expect(checkInputValue('log10', {})).toBe('log10')
    })
    test('1/x', () => {
        expect(checkInputValue('1/x', {})).toBe('1/x')
    })
    test('e', () => {
        expect(checkInputValue('e', {})).toBe('e')
    })
    test('sin', () => {
        expect(checkInputValue('sin', {})).toBe('sin')
    })
    test('cos', () => {
        expect(checkInputValue('cos', {})).toBe('cos')
    })
    test('tan', () => {
        expect(checkInputValue('tan', {})).toBe('tan')
    })
    test('x2', () => {
        expect(checkInputValue('x2', {})).toBe('x2')
    })
    test('x3', () => {
        expect(checkInputValue('x3', {})).toBe('x3')
    })
    test('10x', () => {
        expect(checkInputValue('10x', {})).toBe('10x')
    })
})


describe('getResult', () => {
    test('10+10', () => {
        expect(getResult('10+10')).toEqual(20)
    })
    test('10', () => {
        expect(getResult('10')).toEqual(10)
    })
})

describe('calculate', () => {
    test('calculate',()=> {
        expect(calculate('100+10', calculate10X, {})).toBe(true)
    })
})



describe('calculateFactorial', () => {
    test('3', () => {
        expect(calculateFactorial(3)).toEqual(6)
    })
    test('-3', () => {
        expect(calculateFactorial(-3)).toEqual(6)
    })
    test('3', () => {
        expect(calculateFactorial(0)).toEqual(1)
    })
    test('string', () => {
        expect(calculateFactorial('test')).toEqual('Invalid input data')
    })
})

describe('startFactorial', () => {
    test('Previous length === 0', () => {
        expect(startFactorial({
            slicedString: '3',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '3',
            slicedExpression: '',
            previous: '',
            calcResult: 6,
        })
    })
    test('Previous length > 0', () => {
        expect(startFactorial({
            slicedString: '3',
            slicedExpression: '',
            previous: '3',
            calcResult: '',
        })).toEqual({
            slicedString: '3',
            slicedExpression: '',
            previous: '3',
            calcResult: 6,
        })
    })
})

describe('calculatePercent', () => {
    test('empty previous String', () => {
        expect(calculatePercent({
            slicedString: '10',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '10',
            slicedExpression: '',
            previous: '',
            calcResult: 0.1
        })
    })
    test('stringify Expression', () => {
        expect(calculatePercent({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '2.00'
        })
    })
})

describe('calculatePi', () => {
    test('empty previous String and sliced String', () => {
        expect(calculatePI({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '3.14159'
        })
    })
    test('empty previous String', () => {
        expect(calculatePI({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '3.14159'
        })
    })
    test('stringify Expression', () => {
        expect(calculatePI({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '31.41593'
        })
    })
})

describe('calculateExp', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateExp({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 1
        })
    })
    test('Empty previous string', () => {
        expect(calculateExp({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '2.71828'
        })
    })
    test('stringify Expression', () => {
        expect(calculateExp({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '22026.46579'
        })
    })
})

describe('calculateIn', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateIn({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 0
        })
    })
    test('Empty previous string', () => {
        expect(calculateIn({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '0.00000'
        })
    })
    test('stringify Expression', () => {
        expect(calculateIn({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '2.30259'
        })
    })
})

describe('calculateLog', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateLog({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 0
        })
    })
    test('Empty previous string', () => {
        expect(calculateLog({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '0.00000'
        })
    })
    test('stringify Expression', () => {
        expect(calculateLog({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '1.00000'
        })
    })
})

describe('calculateDecimal', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateDecimal({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 1
        })
    })
    test('Empty previous string', () => {
        expect(calculateDecimal({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: 1
        })
    })
    test('stringify Expression', () => {
        expect(calculateDecimal({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: 0.1
        })
    })
})

describe('calculateE', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateE({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '2.71828'
        })
    })
    test('Empty previous string', () => {
        expect(calculateE({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '2.71828'
        })
    })
    test('stringify Expression', () => {
        expect(calculateE({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '27.18282'
        })
    })
})

describe('calculateSin', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateSin({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 0.8414709848078965
        })
    })
    test('Empty previous string', () => {
        expect(calculateSin({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: "0.84147",
        })
    })
    test('stringify Expression', () => {
        expect(calculateSin({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: "-0.54402"
        })
    })
})

describe('calculateCos', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateCos({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 0.5403023058681398
        })
    })
    test('Empty previous string', () => {
        expect(calculateCos({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: "0.54030",
        })
    })
    test('stringify Expression', () => {
        expect(calculateCos({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: "-0.83907"
        })
    })
})

describe('calculateTan', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateTan({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 1.5574077246549023
        })
    })
    test('Empty previous string', () => {
        expect(calculateTan({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: "1.55741",
        })
    })
    test('stringify Expression', () => {
        expect(calculateTan({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: "0.64836"
        })
    })
})

describe('calculateSquare', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateSquare({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 1
        })
    })
    test('Empty previous string', () => {
        expect(calculateSquare({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: 1,
        })
    })
    test('stringify Expression', () => {
        expect(calculateSquare({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: 100
        })
    })
})

describe('calculateCube', () => {
    test('empty previous String and sliced String', () => {
        expect(calculateCube({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 1
        })
    })
    test('Empty previous string', () => {
        expect(calculateCube({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: 1,
        })
    })
    test('stringify Expression', () => {
        expect(calculateCube({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: 1000
        })
    })
})

describe('calculate10X', () => {
    test('empty previous String and sliced String', () => {
        expect(calculate10X({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '',
            slicedExpression: '',
            previous: '',
            calcResult: 10
        })
    })
    test('Empty previous string', () => {
        expect(calculate10X({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: '',
        })).toEqual({
            slicedString: '1',
            slicedExpression: '',
            previous: '',
            calcResult: 10,
        })
    })
    test('stringify Expression', () => {
        expect(calculate10X({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: '',
        })).toEqual({
            slicedString: '10+10+',
            slicedExpression: '10+10',
            previous: '10',
            calcResult: 10000000000
        })
    })
})
