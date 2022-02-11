import {init,Circle} from '../ts/canvas'

const ctx = {
  beginPath: ()=>{},
  moveTo: ()=>{},
  lineTo: ()=>{},
  lineCap: '',
  lineWidth: 10,
  strokeStyle: '#ff0000',
  clearRect: () => {},
  stroke: ()=> {},
  closePath: () => {},
  fillText: () => {},
  textAlign: 'left',
  font: 'Test',
  arc: () => {},
  fill: () => {},
}

const canvas = {
  width: 300,
  height: 200,
}

describe('init', function () {
  test('should return false', () => {
    expect(init([], ctx, canvas)).toBe(false)
  })
  test('should return false', () => {
    expect(init([{age: '12', document: 'test',lang: 'C2', balance: '2000', name: 'Test'}], ctx, canvas)).toBe(true)
  })
});

describe('Circle', () => {
  const testCircle = new Circle(1, 2,2,'text', ctx, canvas)
  test('Circle.draw should return Start', () => {
    expect(testCircle.draw()).toBe('Start')
  })
  test('Circle.failure should return Failure', () => {
    expect(testCircle.failure()).toBe('Failure')
  })
  test('Circle.success should return Failure', () => {
    expect(testCircle.success()).toBe('Success')
  })
})
