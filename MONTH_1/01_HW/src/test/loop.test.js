const assert = require("assert");
const  { reverseNumber, evenSum, digitsSum,factorialSearch, binaryRootSearch, rootSearch, primeNumberChecker } = require('../homework1/loop')

describe('evenSum', ()=> {
	it('should return counter and sum of even number from 0 to 100', function () {
		assert.equal(evenSum(), '2450 49')
	});
});

describe('primeNumberChecker', () => {
	it('should return true', function () {
		assert.equal(primeNumberChecker(3), true)
		assert.equal(primeNumberChecker(2), true)
		assert.equal(primeNumberChecker(1), true)
	});
	it('should return false', function () {
		assert.equal(primeNumberChecker(8), false)
		assert.equal(primeNumberChecker(10), false)
	});
	it('should return result with negative number', function () {
		assert.equal(primeNumberChecker(-3), true)
	});
	it('should return error', function () {
		assert.equal(primeNumberChecker('Test'), 'It must be a number')
	});
});

describe('rootSearch', () => {
	it('should return root of number', () => {
		assert.equal(rootSearch(121), 11)
		assert.equal(rootSearch(120), 10)
		assert.equal(rootSearch(9), 3)
	});
	it('should return 1 from 0', function () {
		assert.equal(binaryRootSearch(0), 0)
	});
	it('should return error', function () {
		assert.equal(binaryRootSearch(-5), 'Number must be a positive')
	});
});

describe('binaryRootSearch', function () {
	it('should return root of number', function () {
		assert.equal(binaryRootSearch(121), 11)
		assert.equal(binaryRootSearch(120), 10)
		assert.equal(binaryRootSearch(9), 3)
	});
	it('should return 1 from 0', function () {
		assert.equal(binaryRootSearch(0), 0)
	});
	it('should return error', function () {
		assert.equal(binaryRootSearch(-5), 'Number must be a positive')
	});
});

describe('factorialSearch', () => {
	it('should return factorial of 0', function () {
		assert.equal(factorialSearch(0), 1)
	});
	it('should return big factorial of a number', function () {
		assert.equal(factorialSearch(12), 479001600)
	});
	it('should return factorial of a number', function () {
		assert.equal(factorialSearch(5), 120)
	});
	it('should return error', function () {
		assert.equal(factorialSearch(-5), 'Number must be a positive')
	});
});

describe('digitsSum', function () {
	it('should return sum of digits in number', function () {
		assert.equal(digitsSum(242), 8)
		assert.equal(digitsSum(12222), 9)
	});

	it('should return error', function () {
		assert.equal(digitsSum(-3), 'Invalid input data')
		assert.equal(digitsSum('String'), 'Invalid input data')
	});


});

describe('reverseNumber', function () {
	it('should return reversed number', function () {
		assert.equal(reverseNumber(121), 121)
		assert.equal(reverseNumber(122), 221)
	});
	it('should return reversed one length digit', function () {
		assert.equal(reverseNumber(0), 0)
	});
	it('should return reversed big number', function () {
		assert.equal(reverseNumber(7890101), 1010987)
	});
	it('should return reversed negative number', function () {
		assert.equal(reverseNumber(-455), -554)
	});
});