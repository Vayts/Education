import { checkMimeType, fillInput, sendFile, startSending, validateInput } from '../app/logic';

jest.mock('../app/utils.ts', () => {
  const originalModule = jest.requireActual('../app/utils.ts');
  return {
    __esModule: true,
    ...originalModule,

    addListener: jest.fn(() => true),
    getFileFromInput: jest
      .fn()
      .mockReturnValueOnce({ name: 'test' })
      .mockReturnValueOnce({ name: 'test' })
      .mockReturnValueOnce(false),
    setTextValue: jest.fn(() => true),
    setInputValue: jest.fn(() => true),
    getNodeList: jest.fn(() => true),
    setDisabledAttribute: jest.fn(() => true),
    removeDisabledAttribute: jest.fn(() => true),
    removeChild: jest.fn(() => true),
  };
});

describe('sendFile', () => {
  const globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => {
        'test';
      },
    })
  );
  test('', () => {
    expect(sendFile({}, {})).toBeUndefined();
  });
});

describe('checkMimeType', () => {
  test('should return application/zip', () => {
    expect(checkMimeType('test.zip')).toBe('application/zip');
  });
  test('should return audio/aac', () => {
    expect(checkMimeType('test.aac')).toBe('audio/aac');
  });
  test('should return false', () => {
    expect(checkMimeType('test.sql')).toBe(false);
  });
});

describe('startSending', () => {
  test('startSending', () => {
    expect(startSending({ currentMimeType: 'text/plain' })).toBe('Process start');
  });
});

describe('fillInput', () => {
  test('should return true', () => {
    expect(fillInput({})).toBe(true);
  });
  test('should return false', () => {
    expect(fillInput({})).toBe(false);
  });
});

describe('validateInput', () => {
  test('should return false', () => {
    expect(validateInput({}, false, 'test')).toBe(false);
  });
  test('should return true', () => {
    expect(validateInput({}, 'test', 'test')).toBe(true);
  });

  test('should return false', () => {
    expect(validateInput({}, 1, 'test')).toBe(false);
  });
});
