import {getElement,getInputValue,removeChild,removeDisabled,setDisabled,setInputValue,setTextValue,clearAllInputs,createListItem,addListener, getContext} from '../ts/utils'

describe('addHTMLValue', () => {
  test('should return false',() => {
    document.body.innerHTML = '<p id="test-p"></p>'
    expect(setTextValue('test-p', 'test')).toBe(true)
  })
  test('should return false',() => {
    document.body.innerHTML = '<p id="test-p-false"></p>'
    expect(setTextValue('test-p', 'test')).toBe(false)
  })
})

describe('removeChild', () => {
  test('should return false',() => {
    document.body.innerHTML = '<ul id="test-ul"><li></li></ul>'
    expect(removeChild('test-ul')).toBe(true)
  })
  test('should return false',() => {
    document.body.innerHTML = '<ul id="test-ul-false"><li></li></ul>'
    expect(setTextValue('test-ul', 'test')).toBe(false)
  })
})

describe('removeDisabled', () => {
  test('should return 2',() => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(removeDisabled('test-input')).toBe(true);
  })
  test('should return false',() => {
    document.body.innerHTML = '<inpuit id="test-input-false">';
    expect(removeDisabled('test-input')).toBe(false);
  })
})

describe('setInputValue', () => {
  test('should return 2',() => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(setInputValue('test-input', 2)).toBe(true);
  })
  test('should return false',() => {
    document.body.innerHTML = '<inpuit id="test-input-false">';
    expect(setInputValue('test-input', 3)).toBe(false);
  })
})

describe('setDisabled', () => {
  test('should return 2',() => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(setDisabled('test-input')).toBe(true);
  })
  test('should return false',() => {
    document.body.innerHTML = '<inpuit id="test-input-false">';
    expect(setDisabled('test-input')).toBe(false);
  })
})

describe('getInputValue', () => {
  test('should return 2',() => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(getInputValue('test-input')).toBe("2");
  })
  test('should return false',() => {
    document.body.innerHTML = '<inpuit id="test-input-false">';
    expect(getInputValue('test-input')).toBe(false);
  })
})

describe('getElement', () => {
  test('should return true',() => {
    document.body.innerHTML = '<p id="test-p"></p>'
    expect(typeof getElement('test-p')).toEqual('object')
  })
  test('should return false',() => {
    document.body.innerHTML = '<p id="test-p-false"></p>'
    expect(getElement('test-p')).toBe(false)
  })
})

describe('addListener', () => {
  test('should return true',() => {
    document.body.innerHTML = '<p id="test-p"></p>'
    expect(addListener('test-p', 'click', () => {})).toBe(true)
  })
  test('should return false',() => {
    document.body.innerHTML = '<p id="test-p-false"></p>'
    expect(addListener('test-p', 'click', () => {})).toBe(false)
  })
})

describe('getContext', () => {
  test('should return true',() => {
    document.body.innerHTML = '<canvas id="test-canvas"></canvas>';
    expect(typeof getContext('test-canvas')).toBe('object');
  })
  test('should return false',() => {
    document.body.innerHTML = '<canvas id="test-canvas-false"></canvas>';
    expect(getContext('test-canvas')).toBe(false);
  })
})

describe('createListItem', () => {
  test('should return true', () => {
    document.body.innerHTML = '<ul id="test-ul"></ul>'
    expect(createListItem('test-ul', {name: 'test', balance: 'test', age: '1', document: 'test', lang: 'test'})).toBe(true)
  })
  test('should return true', () => {
    document.body.innerHTML = '<ul id="test-ul-false"></ul>'
    expect(createListItem('test-ul', {name: 'test', balance: 'test', age: '1', document: 'test', lang: 'test'})).toBe(false)
  })
})
