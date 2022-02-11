import {addHTMLValue, getNodeList,getSrcOfNode,setSrc,setSrcToNode,getElement,addListener} from '../ts/utils'

describe('addHTMLValue', () => {
  test('should return false',() => {
    document.body.innerHTML = '<p id="test-p"></p>'
    expect(addHTMLValue('test-p', 'test')).toBe(true)
  })
  test('should return false',() => {
    document.body.innerHTML = '<p id="test-p-false"></p>'
    expect(addHTMLValue('test-p', 'test')).toBe(false)
  })
})

describe('getNodeList', () => {
  test('should return true',() => {
    document.body.innerHTML = '<p class="test-p"></p>'
    expect(typeof getNodeList('.test-p')).toEqual('object')
  })
  test('should return false',() => {
    document.body.innerHTML = '<p class="test-p-false"></p>'
    expect(getNodeList('.test-p')).toBe(false)
  })
})

describe('getSrcOfNode', () => {
  test('should return test',() => {

    expect((() => {
      document.body.innerHTML = '<img class="test-img" src="test">'
      const NodeList = global.document.querySelectorAll('.test-img')
      const firstElem = <HTMLImageElement>NodeList[0]
      return getSrcOfNode(firstElem)
    })()).toBe("http://localhost/test")
  })
  test('should return false',() => {
    document.body.innerHTML = '<img id="test-img-false">'
    expect(addHTMLValue('test-p', 'test')).toBe(false)
  })
})

describe('setSrc', () => {
  test('should return true',() => {
    document.body.innerHTML = '<img id="test-img" src="old">'
    expect(setSrc('test-img', 'test')).toBe(true)
  })
  test('should return false',() => {
    document.body.innerHTML = '<img id="test-img-false" src="old">'
    expect(setSrc('test-img', 'test')).toBe(false)
  })
})

describe('setSrcToNode', () => {
  test('should return true',() => {
    expect((() => {
      document.body.innerHTML = '<img class="test-img" src="test">'
      const NodeList = global.document.querySelectorAll('.test-img')
      const firstElem = <HTMLImageElement>NodeList[0]
      return setSrcToNode(firstElem, 'new')
    })()).toBe(true)
  })
  test('should return false',() => {
    expect((() => {
      document.body.innerHTML = '<img class="test-img" src="test">'
      const NodeList = global.document.querySelectorAll('.test-img-false')
      const firstElem = <HTMLImageElement>NodeList[0]
      return setSrcToNode(firstElem, 'new')
    })()).toBe(false)
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


