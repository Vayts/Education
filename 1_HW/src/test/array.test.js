const assert = require('assert')
const {minElemInArray, maxElemInArray, minElemIndex, maxElemIndex, sumOddIndexElem, reverseArr, oddElemCounter, swapArrPart, bubbleSort, insertionSort, selectionSort, quickSort, mergeSort,heapSort} = require('../homework1/array')

describe('minElemInArray', () => {
    it('should return minimal elem in array', function () {
        assert.equal(minElemInArray([4,1,3,3]), 1)
    });
    it('should return minimal elem in array with string', function () {
        assert.equal(minElemInArray([4,1,'a',3]), 1)
    });
    it('should return error', function () {
        assert.equal(minElemInArray('test'), 'Invalid input data')
    });
});

describe('maxElemInArray', () => {
    it('should return biggest elem in array', function () {
        assert.equal(maxElemInArray([4,1,3,3]), 4)
    });
    it('should return  biggest elem in array with string', function () {
        assert.equal(maxElemInArray([4,1,'a',3]), 4)
    });
    it('should return error', function () {
        assert.equal(maxElemInArray('test'), 'Invalid input data')
    });
});

describe('minElemIndex', () => {
    it('should return index of minimal elem in array', function () {
        assert.equal(minElemIndex([4,1,3,3]), 1)
    });
    it('should return index of minimal elem in array with string', function () {
        assert.equal(minElemIndex([4,1,'a',3]), 1)
    });
    it('should return error', function () {
        assert.equal(minElemIndex('test'), 'Invalid input data')
    });
});

describe('maxElemIndex', () => {
    it('should return index of biggest elem in array', function () {
        assert.equal(maxElemIndex([4,1,3,3,-4,-1,-100]), 0)
    });
    it('should return index of biggest elem in array with string', function () {
        assert.equal(maxElemIndex([4,1,'a',3]), 0)
    });
    it('should return error', function () {
        assert.equal(maxElemIndex('test'), 'Invalid input data')
    });
});

describe('sumOddIndexElem', () => {
    it('should return correct sum of elem with odd index', function () {
        assert.equal(sumOddIndexElem([4,1,3,3,-4,-1,-100]), 3)
    });
    it('should return error with string in arr', function () {
        assert.equal(sumOddIndexElem([4,1,'a',3]), 'Invalid input data')
    });
    it('should return error', function () {
        assert.equal(sumOddIndexElem('test'), 'Invalid input data')
    });
});

describe('reverseArr', () => {
    it('should return reversed arr', function () {
        assert.deepEqual(reverseArr([1,2,3,4,5]),[5,4,3,2,1])
    });
    it('should return reversed arr with strings', function () {
        assert.deepEqual(reverseArr(['a','b','c','d','e']),['e','d','c','b','a'])
    });
    it('should return error', function () {
        assert.deepEqual(reverseArr('test'),'Invalid input data')
    });
});

describe('oddElemCounter', ()=> {
    it('should correct counter of odd elem in arr', function () {
        assert.equal(oddElemCounter([1,2,3,4,5]),2 )
    });
    it('should return error', function () {
        assert.equal(oddElemCounter('test'),'Invalid input data' )
    });
});

describe('swapArrPart', ()=> {
    it('should return array with swapped part', function () {
        assert.deepEqual(swapArrPart([1,2,3,4,5]),[3,4,5,2,1] )
    });
    it('should return error', function () {
        assert.equal(swapArrPart('test'),'Invalid input data' )
    });
});

describe('bubbleSort', ()=> {
    it('should return sorted array', function () {
        assert.deepEqual(bubbleSort([5,3,2,4,1]),[1,2,3,4,5] )
    });
    it('should return big sorted array', function () {
        assert.deepEqual(bubbleSort([7,5,2,4,3,9,1,5,2,4,2,2,12,65,12,3,4,6,7,1,9,13,6,9,2,3,4,12,145,234,34,54,5]),[1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,9,9,9,12,12,12,13,34,54,65,145,234] )
    });
    it('should return error', function () {
        assert.equal(swapArrPart('test'),'Invalid input data' )
    });
});

describe('insertionSort', ()=> {
    it('insertionSort', function () {
        assert.deepEqual(insertionSort([5,3,2,4,1]),[1,2,3,4,5] )
    });
    it('insertionSort', function () {
        assert.deepEqual(insertionSort([7,5,2,4,3,9,1,5,2,4,2,2,12,65,12,3,4,6,7,1,9,13,6,9,2,3,4,12,145,234,34,54,5]),[1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,9,9,9,12,12,12,13,34,54,65,145,234] )
    });
    it('insertionSort', function () {
        assert.equal(insertionSort('test'),'Invalid input data' )
    });
});

describe('selectionSort', ()=> {
    it('should return sorted array', function () {
        assert.deepEqual(selectionSort([5,3,2,4,1]),[1,2,3,4,5] )
    });
    it('should return big sorted array', function () {
        assert.deepEqual(selectionSort([7,5,2,4,3,9,1,5,2,4,2,2,12,65,12,3,4,6,7,1,9,13,6,9,2,3,4,12,145,234,34,54,5]),[1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,9,9,9,12,12,12,13,34,54,65,145,234] )
    });
    it('should return error', function () {
        assert.equal(selectionSort('test'),'Invalid input data' )
    });
});

describe('quickSort', ()=> {
    it('should return sorted array', function () {
        assert.deepEqual(quickSort([5,3,2,4,1]),[1,2,3,4,5] )
    });
    it('should return big sorted array', function () {
        assert.deepEqual(quickSort([7,5,2,4,3,9,1,5,2,4,2,2,12,65,12,3,4,6,7,1,9,13,6,9,2,3,4,12,145,234,34,54,5]),[1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,9,9,9,12,12,12,13,34,54,65,145,234] )
    });
    it('should return error', function () {
        assert.equal(quickSort('test'),'Invalid input data' )
    });
});

describe('mergeSort', ()=> {
    it('should return sorted array', function () {
        assert.deepEqual(mergeSort([5,3,2,4,1]),[1,2,3,4,5] )
    });
    it('should return big sorted array', function () {
        assert.deepEqual(mergeSort([7,5,2,4,3,9,1,5,2,4,2,2,12,65,12,3,4,6,7,1,9,13,6,9,2,3,4,12,145,234,34,54,5]),[1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,9,9,9,12,12,12,13,34,54,65,145,234] )
    });
    it('should return error', function () {
        assert.equal(mergeSort('test'),'Invalid input data' )
    });
});

describe('heapSort', ()=> {
    it('should return sorted array', function () {
        assert.deepEqual(mergeSort([5,3,2,4,1]),[1,2,3,4,5] )
    });
    it('should return big sorted array', function () {
        assert.deepEqual(heapSort([7,5,2,4,3,9,1,5,2,4,2,2,12,65,12,3,4,6,7,1,9,13,6,9,2,3,4,12,145,234,34,54,5]),[1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,7,7,9,9,9,12,12,12,13,34,54,65,145,234] )
    });
    it('should return error', function () {
        assert.equal(heapSort('test'),'Invalid input data' )
    });
});


