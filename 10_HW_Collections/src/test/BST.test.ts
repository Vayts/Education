import exp = require("constants");

const {preOrder, postOrder,order,BST} = require('../ts/BST')

describe('init', () => {
    test('should return arr [1,2,3,4,5]', () => {
        expect((() => {
           const testTree = new BST()
           testTree.init([5,2,4,7,3])
            return testTree.toArray()
        })()).toEqual([2,3,4,5,7])
    })
})

describe('clear', () => {
    test('should return arr []', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([5,2,4,7,3])
            testTree.clear()
            return testTree.toArray()
        })()).toEqual([])
    })
})

describe('size', () => {
    test('should return 5', () => {
        const testTree = new BST()
        testTree.init([1,2,3,4,5])
        expect(testTree.size()).toBe(5)
    })
})

describe('insert', () => {
    test('should return arr [2,3,4,5,6,7]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([5,2,4,7,3])
            testTree.insert(6)
            return testTree.toArray()
        })()).toEqual([2,3,4,5,6,7])
    })
    test('should return arr [2,3,4,5,7]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([5,2,4,7,3])
            testTree.insert()
            return testTree.toArray()
        })()).toEqual([2,3,4,5,7])
    })
    test('should return arr [2,3,4,5,12,12,11,7]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([5,2,4,7,3,12,14])
            testTree.insert(12)
            return testTree.toArray()
        })()).toEqual([2,3,4,5,7,12,12,14])
    })

})

describe('toArray', () => {
    test('should return arr [2,3,4,5,7]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([5,2,4,7,3])
            return testTree.toArray()
        })()).toEqual([2,3,4,5,7])
    })
    test('should return arr []', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([])
            return testTree.toArray()
        })()).toEqual([])
    })
})

describe('search', () => {
    test('should return {value: 3, right: null, left: null}', () => {
        const testTree = new BST()
        testTree.init([2,3,1])
        expect(testTree.search(3)).toEqual({value: 3, right: null, left: null})
    })
    test('should return "Empty"', () => {
        const testTree = new BST()
        testTree.init([])
        expect(testTree.search(3)).toEqual('Empty')
    })
    test('should return "Error"', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.search(3)).toEqual('Error')
    })
    test('should return {value: 1, right: null, left: null}', () => {
        const testTree = new BST()
        testTree.init([2,3,1])
        expect(testTree.search(1)).toEqual({value: 1, right: null, left: null})
    })
})

describe('width', () => {
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([10,7,6,8,11,12])
        expect(testTree.width()).toEqual(3)
    })
    test('should return 0', () => {
        const testTree = new BST()
        testTree.init([])
        expect(testTree.width()).toEqual(0)
    })
    test('should return 1', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.width()).toEqual(1)
    })
})

describe('height', () => {
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([10,7,6,8,11,12])
        expect(testTree.height()).toEqual(3)
    })
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([10,7,6,8,11,12,6,5,4])
        expect(testTree.height()).toEqual(5)
    })
    test('should return 0', () => {
        const testTree = new BST()
        testTree.init([])
        expect(testTree.height()).toEqual(0)
    })
    test('should return 1', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.height()).toEqual(1)
    })
})

describe('nodes', () => {
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([10,7,6,8,11,12])
        expect(testTree.nodes()).toEqual(6)
    })
    test('should return 0', () => {
        const testTree = new BST()
        testTree.init([])
        expect(testTree.nodes()).toEqual(0)
    })
    test('should return 1', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.nodes()).toEqual(1)
    })
})

describe('leaves', () => {
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([10,7,6,8,11,12])
        expect(testTree.leaves()).toEqual(3)
    })
    test('should return 0', () => {
        const testTree = new BST()
        testTree.init([])
        expect(testTree.leaves()).toEqual(0)
    })
    test('should return 1', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.leaves()).toEqual(1)
    })
})

describe('reverse', () => {
    test('should return reversed tree', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([10,7,6,8,11,12])
            testTree.reverse()
            return testTree.toArray()
        })()).toEqual([12,11,10,8,7,6])
    })
})

describe('minNode', () => {
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([6,3,12])
        expect(testTree.minNode()).toEqual({value: 3, right: null, left: null})
    })
    test('should return "Empty"', () => {
        const testTree = new BST()
        expect(testTree.minNode()).toBe('Empty')
    })
    test('should return 1', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.minNode()).toEqual({value: 1, right: null, left: null})
    })
})

describe('maxNode', () => {
    test('should return 3', () => {
        const testTree = new BST()
        testTree.init([1,3,-2])
        expect(testTree.maxNode()).toEqual({value: 3, right: null, left: null})
    })
    test('should return "Empty"', () => {
        const testTree = new BST()
        expect(testTree.maxNode()).toBe('Empty')
    })
    test('should return 1', () => {
        const testTree = new BST()
        testTree.init([1])
        expect(testTree.maxNode()).toEqual({value: 1, right: null, left: null})
    })
})

describe('remove', () => {
    test('should return [6,7,10,11,12]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([10,7,6,8,11,12])
            testTree.remove(8)
            return testTree.toArray()
        })()).toEqual([6,7,10,11,12])
    })
    test('should return [6,8,10,11,12]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([10,7,6,8,11,12])
            testTree.remove(7)
            return testTree.toArray()
        })()).toEqual([6,8,10,11,12])
    })
    test('should return [6,8,10,11,12]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([10,7,6,8,11,12])
            testTree.remove(11)
            return testTree.toArray()
        })()).toEqual([6,7,8,10,12])
    })
    test('should return [6,8,10,11,12]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([10,7,6,8,12,11])
            testTree.remove(12)
            return testTree.toArray()
        })()).toEqual([6,7,8,10,11])
    })
    test('should return [6,8,10,11,12]', () => {
        expect((() => {
            const testTree = new BST()
            testTree.init([10,6,5,7,14,12,23,16])
            testTree.remove(14)
            return testTree.toArray()
        })()).toEqual([5,6,7,10,12,16,23])
    })
    test('should return "Empty"', () => {
        const testTree = new BST()
        testTree.init([])
        expect(testTree.remove(2)).toBe('Empty')
    })
})

describe('print', () => {
    test('should console.log() something', () => {
        const testTree = new BST()
        testTree.init([1])
        jest.spyOn(console, 'log')
        testTree.print(order)
        expect(console.log).toHaveBeenCalledWith({"left": null, "right": null, "value": 1})
    })
    test('should console.log() something', () => {
        const testTree = new BST()
        testTree.init([1])
        jest.spyOn(console, 'log')
        testTree.print(postOrder)
        expect(console.log).toHaveBeenCalledWith({"left": null, "right": null, "value": 1})
    })
    test('should console.log() something', () => {
        const testTree = new BST()
        testTree.init([1])
        jest.spyOn(console, 'log')
        testTree.print(preOrder)
        expect(console.log).toHaveBeenCalledWith({"left": null, "right": null, "value": 1})
    })
})
