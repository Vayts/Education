import {
  addListener,
  getFileFromInput,
  removeChild,
  removeDisabledAttribute,
  setDisabledAttribute,
  setHTMLValue,
  setInputValue,
  setTextValue,
} from '../app/utils';

describe('addListener', () => {
  test('should return true', () => {
    document.body.innerHTML = '<p id="test-p"></p>';
    expect(addListener('test-p', 'click', () => {})).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<p id="test-p-false"></p>';
    expect(addListener('test-p', 'click', () => {})).toBe(false);
  });
});

describe('setTextValue', () => {
  test('should return false', () => {
    document.body.innerHTML = '<p id="test-p"></p>';
    expect(setTextValue('test-p', 'test')).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<p id="test-p-false"></p>';
    expect(setTextValue('test-p', 'test')).toBe(false);
  });
});

describe('setInputValue', () => {
  test('should return 2', () => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(setInputValue('test-input', '2')).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<inpuit id="test-input-false"></inpuit>';
    expect(setInputValue('test-input', '3')).toBe(false);
  });
});

describe('getFileFromInput', () => {
  test('should return 2', () => {
    document.body.innerHTML = '<input type="file" value="{name: test}" id="test-input">';
    expect(getFileFromInput('test-input')).toBe('');
  });
  test('should return false', () => {
    document.body.innerHTML = '<inpuit id="test-input-false"></inpuit>';
    expect(getFileFromInput('test-input')).toBe(false);
  });
});

describe('setHTMLValue', () => {
  test('should return false', () => {
    document.body.innerHTML = '<p id="test-p"></p>';
    expect(setHTMLValue('test-p', 'test')).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<p id="test-p-false"></p>';
    expect(setHTMLValue('test-p', 'test')).toBe(false);
  });
});

describe('setDisabled', () => {
  test('should return 2', () => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(setDisabledAttribute('test-input')).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<inpuit id="test-input-false"></inpuit>';
    expect(setDisabledAttribute('test-input')).toBe(false);
  });
});

describe('removeDisabled', () => {
  test('should return 2', () => {
    document.body.innerHTML = '<input value="2" id="test-input">';
    expect(removeDisabledAttribute('test-input')).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<inpuit id="test-input-false"></inpuit>';
    expect(removeDisabledAttribute('test-input')).toBe(false);
  });
});

describe('removeChild', () => {
  test('should return 2', () => {
    document.body.innerHTML = '<ul value="2" id="test-ul"><li></li></ul>';
    expect(removeChild('test-ul')).toBe(true);
  });
  test('should return false', () => {
    document.body.innerHTML = '<ul id="test-ul-false"><li></li></ul>';
    expect(removeChild('test-ull')).toBe(false);
  });
});
