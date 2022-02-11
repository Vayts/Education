

import {clearCanvas,generateEnglishLevel,clearAll,generateAge,generateAll,ageCheck,balanceCheck,generateBalance,generateDocument,documentCheck,generateName,langCheck,randomTime,startRace,validateInput,addCandidate, race} from "../ts/logic";

jest.mock('../ts/utils.ts', () => {
  const originalModule = jest.requireActual('../ts/utils.ts');

  return {
    __esModule: true,

    getInputValue: jest.fn(() => '')
      .mockReturnValueOnce('John Doe')
      .mockReturnValueOnce('3200')
      .mockReturnValueOnce('22')
      .mockReturnValueOnce('passport, insurance, photo')
      .mockReturnValueOnce('C2'),
    setInputValue: jest.fn(() => true),
    addListener: jest.fn(() => true),
    getContext: jest.fn(() => true),
    getElement: jest.fn(() => true),
    removeChild: jest.fn(() => true),
    createListItem: jest.fn(() => true),
    setDisabled: jest.fn(() => true),
    removeDisabled: jest.fn(() => true),
    setTextValue: jest.fn(()=>true),
    clearAllInputs: jest.fn(()=> true)
  };
});

describe('generateEnglishLevel', function () {
  test('should return A1', () => {
    expect(generateEnglishLevel(['A1'])).toBe('A1')
  })
});

describe('generateAge', () => {
  test('should return 12', () => {
    expect(generateAge(['12'])).toBe('12')
  })
});
describe('generateBalance', () => {
  test('should return 100', () => {
    expect(generateBalance(['100'])).toBe('100')
  })
});

describe('generateDocument', () => {
  test('should return "passport, insurance, photo"', () => {
    expect(generateDocument(['passport, insurance, photo'])).toBe('passport, insurance, photo')
  })
});

describe('generateName',  () =>  {
  test('should return "John Doe"', () => {
    expect(generateDocument(['John Doe'])).toBe('John Doe')
  })
});

describe('ageCheck', () => {
  test('should return false', () => {
    expect(ageCheck(16)).toBe(false);
  })
  test('should return false', () => {
    expect(ageCheck(66)).toBe(false);
  })
  test('should return true', () => {
    expect(ageCheck(22)).toBe(true);
  })
})

describe('balanceCheck', () => {
  test('should return false', () => {
    expect(balanceCheck(1999)).toBe(false);
  })
  test('should return false', () => {
    expect(balanceCheck(-1999)).toBe(false);
  })
  test('should return true', () => {
    expect(balanceCheck(2000)).toBe(true);
  })
})

describe('documentCheck', () => {
  test('should return false', () => {
    expect(documentCheck('passport, insurance')).toBe(false);
  })
  test('should return false', () => {
    expect(documentCheck('passport, insurance, photo, test')).toBe(false);
  })
  test('should return true', () => {
    expect(documentCheck('passport, insurance, photo')).toBe(true);
  })
})

describe('langCheck', () => {
  test('should return false', () => {
    expect(langCheck('C33')).toBe(false);
  })
  test('should return false', () => {
    expect(langCheck('C3')).toBe(false);
  })
  test('should return true', () => {
    expect(langCheck('C2')).toBe(true);
  })
})

describe('randomTime', () => {
  test('', () => {
    expect(randomTime(3,3)).toBe(3000)
  })
})

describe('startRace', () => {
  test('', () => {
    expect(startRace([], {},{})).toBeUndefined()
  })
})

describe('addCandidate', () => {
  test('should return obj: candidate',() => {
    expect(addCandidate([])).toEqual({"age": "22", "balance": "3200", "document": "passport, insurance, photo", "lang": "C2", "name": "John Doe"})
  })
  test('should return false',() => {
    expect(addCandidate([])).toBe(false)
  })
})

describe('generateAll', () => {
  test('should return obj:candidate', () => {
    expect(generateAll({
      age: [14],
      document: ['passport, insurance, photo'],
      lang: ['A1'],
      money: [1],
      name: ['John']
    })).toEqual({
      "age": 14,
      "balance": 1,
      "document": "passport, insurance, photo",
      "lang": "A1",
      "name": "John"
    })
  })
})

describe('validateInput', () => {
  test('should return true', () => {
    expect(validateInput({"age": "22", "balance": "3200", "document": "passport, insurance, photo", "lang": "C2", "name": "John Doe"})).toBe(true)
  })
  test('should return false', () => {
    expect(validateInput({"age": "-1", "balance": "3200", "document": "passport, insurance, photo", "lang": "C2", "name": "John Doe"})).toBe(false)
  })
  test('should return false', () => {
    expect(validateInput({"age": "22", "balance": "-2000", "document": "passport, insurance, photo", "lang": "C2", "name": "John Doe"})).toBe(false)
  })
  test('should return false', () => {
    expect(validateInput({"age": "22", "balance": "3200", "document": "test, insurance, photo", "lang": "C2", "name": "John Doe"})).toBe(false)
  })
  test('should return false', () => {
    expect(validateInput({"age": "22", "balance": "3200", "document": "passport, insurance, photo", "lang": "C22", "name": "John Doe"})).toBe(false)
  })
})

const ctx = {
  beginPath: ()=>{},
  moveTo: ()=>{},
  lineTo: ()=>{},
  lineCap: '',
  lineWidth: 10,
  strokeStyle: '#ff0000',
  clearRect: () => {},
  stroke: ()=> {},
  closePath: () => {}
}

const canvas = {
  width: 300,
  height: 200,
}

describe('clearCanvas', function () {
  test('should return true', ()=> {
    expect(clearCanvas(ctx, canvas)).toBe(true)
  })
  test('should return false', ()=> {
    expect(clearCanvas(null, canvas)).toBe(false)
  })
});

describe('clearAll', function () {
  test('should return empty arr', ()=> {
    expect(clearAll(['1'],ctx, canvas)).toStrictEqual([])
  })
});

describe('race', function () {
  test('should return false', () => {
    expect(race([], [])).toBeUndefined()
  })
});

// describe('getPromise', () => {
//   test('promise', () => {
//     return getPromise(0, [{
//       "age": '24',
//       "balance": '2300',
//       "document": "passport, insurance, photo",
//       "lang": "A1",
//       "name": "John Doe"
//     }], 1, 1, ageCheck, '24', 'Age', 2).then((data) => {
//       expect(data).toBe(undefined)
//     })
//   })
// })

// describe('getPromise', () => {
//   test('promise', () => {
//     expect(getPromise(0, [{
//       "age": '24',
//       "balance": '2300',
//       "document": "passport, insurance, photo",
//       "lang": "A1",
//       "name": "John Doe"
//     }], 1, 1, ageCheck, '24', 'Age', 2)).toBeInstanceOf(Promise)
//   })
// })


