import {
  addImgElement,
  selectPhoto,
  swap,
  showAll,
  pause,
  getPhoto,
  catchClick,
  restart
} from "../ts/logic";

jest.mock('../ts/utils.ts', () => {
  const originalModule = jest.requireActual('../ts/utils.ts');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,


    setSrc: jest.fn(() => true),
    addListener: jest.fn(() => true),
    getSrc: jest.fn(() => 'test'),
    getElement: jest.fn(() => true),
    addHTMLValue: jest.fn(() => true),
    getNodeList: jest.fn(() => true),
    setSrcToNode: jest.fn(() => true),
    getSrcOfNode: jest.fn(()=> 'test'),
    getClassList: jest.fn(()=> ['sub-photo__img'])
  };
});

describe('addImgElement', function () {
  test('should return correct state',()=> {
    expect(addImgElement([{url: 'test'}],{currentPhotoIndex: '0',currentPhotoSrc: ''})).toStrictEqual({"currentPhotoIndex": "0", "currentPhotoSrc": "test"})
  })
  test('should return correct state',()=> {
    expect(addImgElement([{url: 'test'}, {url: 'test2'}],{currentPhotoIndex: '0',currentPhotoSrc: ''})).toStrictEqual({"currentPhotoIndex": "0", "currentPhotoSrc": "test"})
  })
});

describe('swap', function () {
  test('', () => {
    expect(swap({currentPhotoSrc: '0', currentPhotoIndex: ''}, '2')).toEqual({currentPhotoSrc: 'test', currentPhotoIndex: '2'})
  })
});

describe('show all', function () {

  jest.useFakeTimers();
  jest.spyOn(global, 'setInterval')

  test('to have been called times = 1', () => {
    showAll({currentPhotoSrc: 'test', currentPhotoIndex: '0'}, {showAll: false, paused: true})
    expect(setInterval).toHaveBeenCalledTimes(1)
  })
});

describe('pause', function () {
  test('should return state with paused: true', () => {
    expect(pause({showAll: false, paused: false})).toEqual({showAll: false, paused: true})
  })
});

describe('restart', function () {
  test('should return state with currentPhotoIndex: 0', () => {
    expect(restart({currentPhotoIndex: "1", currentPhotoSrc: "test"},{showAll: false, paused: false} )).toEqual({currentPhotoIndex: "0", currentPhotoSrc: "test"})
  })
  test('should return state with paused: true', () => {
    expect(restart({currentPhotoIndex: "0", currentPhotoSrc: "test"},{showAll: false, paused: false} )).toEqual({currentPhotoIndex: "0", currentPhotoSrc: "test"})
  })
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;

describe('getPhoto', () => {
  test('undefined', () => {
    expect(getPhoto({})).toBeUndefined()
  })
})

describe('selectPhoto', () => {
  test('should return true', () => {
    expect(selectPhoto({target: {
          dataset: {
            index: 0
          }
      }},{}, {showAll: false})).toBe(true)
  })
  test('should return false', () => {
    expect(selectPhoto({target: {
        dataset: {
          index: 0
        }
      }},{}, {showAll: true})).toBe(false)
  })
})





