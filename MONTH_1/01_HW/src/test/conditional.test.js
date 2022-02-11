const assert = require("assert");
const {evenOddChecker, quarterChecker, positiveNumbersSum, sumMax, ratingCounter} = require('../homework1/conditional')

describe('evenOddChecker', ()=> {
    it('should return a+b', function () {
        assert.equal(evenOddChecker(2,2), 4)
        assert.equal(evenOddChecker(4,2), 8)
    });
    it('should return a*b', function () {
        assert.equal(evenOddChecker(3,2), 5)
    });
    it('should return a*b', function () {
        assert.equal(evenOddChecker('a',2), 'Invalid input data')
    });
})

describe('quarterChecker', ()=> {
    it('should return I quarter', function () {
        assert.equal(quarterChecker(3,2), 'I')
    });
    it('should return II quarter', function () {
        assert.equal(quarterChecker(-3,2), 'II')
    });
    it('should return III quarter', function () {
        assert.equal(quarterChecker(-3,-2), 'III')
    });
    it('should return IV quarter', function () {
        assert.equal(quarterChecker(3,-2), 'IV')
    });
    it('should return abscissa axis', function () {
        assert.equal(quarterChecker(0,2), 'На оси абсцисс')
    });
    it('should return ordinate axis', function () {
        assert.equal(quarterChecker(3,0), 'На оси ординат')
    });
    it('should return center', function () {
        assert.equal(quarterChecker(0,0), 'В центре')
    });
    it('should return error', function () {
        assert.equal(quarterChecker('a',0), 'Invalid input data')
    });
})

describe('positiveNumbersSum', () => {
    it('should return correct sum of number', function () {
        assert.equal(positiveNumbersSum(2,-3,1), 3)
        assert.equal(positiveNumbersSum(-3,2,1), 3)
        assert.equal(positiveNumbersSum(2,1,-3), 3)
    });
    it('should return zero', function () {
        assert.equal(positiveNumbersSum(-2,-3,-1), 0)
    });
    it('should return error', function () {
        assert.equal(positiveNumbersSum(-2,'a',-1), 'Invalid input data')
    });
});

describe('sumMax', () => {
    it('should return correct sum', function () {
        assert.equal(sumMax(1,2,4), 11)
        assert.equal(sumMax(1,1,1), 6)
    });
    it('should return error', function () {
        assert.equal(sumMax('a',1,1), 'Invalid input data')
    });
})

describe('ratingCount', () => {
    it('should return F', function () {
        assert.equal(ratingCounter(19), 'F')
    });
    it('should return E', function () {
        assert.equal(ratingCounter(39), 'E')
    });
    it('should return D', function () {
        assert.equal(ratingCounter(59), 'D')
    });
    it('should return C', function () {
        assert.equal(ratingCounter(74), 'C')
    });
    it('should return B', function () {
        assert.equal(ratingCounter(89), 'B')
    });
    it('should return A', function () {
        assert.equal(ratingCounter(99), 'A')
    });
    it('should return error', function () {
        assert.equal(ratingCounter('a'), 'Invalid input data')
    });

})

