let assert = require('assert')

const {getCookingTime, getNumber, findTitle, countCharacters, getNextPalindrome} = require("../homework/script")

describe('getCookingTime', ()=> {
    it ('should return error', () => {
        assert.equal(getCookingTime('a'), 'Invalid input data')
    })
    it ('should return error', () => {
        assert.equal(getCookingTime(), 'Invalid input data')
    })
    it ('should return correct result', () => {
        assert.equal(getCookingTime(3), 5)
    })
    it ('should return correct result', () => {
        assert.equal(getCookingTime(9), 10)
    })
    it ('should return correct result', () => {
        assert.equal(getCookingTime(11), 15)
    })
})

describe('getCookingTime', ()=> {
    it ('should return error', () => {
        assert.equal(getNumber('a'), 'Invalid input data')
    })
    it ('should return error', () => {
        assert.equal(getNumber([0,0]), 'Invalid input data')
    })
    it ('should return error', () => {
        assert.equal(getNumber([1,3]), 'Invalid input data')
    })
    it ('should return error', () => {
        assert.equal(getNumber(), 'Invalid input data')
    })
    it ('should return correct result', () => {
        assert.equal(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]), 13)
    })
    it ('should return correct result', () => {
        assert.equal(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]), 4)
    })
    it ('should return correct result', () => {
        assert.equal(getNumber([1,2,2]), 1)
    })
})

describe('getCookingTime', ()=> {
    it ('should return nothing', () => {
        assert.deepEqual(findTitle([{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn"t have key title js'}, {title: 'Js - is the best!'}], 'xcvdffd'), 'Nothing')
    })
    it ('should return correct result', () => {
        assert.deepEqual(findTitle([{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn"t have key title js'}, {title: 'Js - is the best!'}], 'js'), [{title: 'I like JS' }, {title: 'Js - is the best!'}])
    })
})

describe('countCharacters', () => {
    it('should return error', () => {
        assert.equal(countCharacters(123), 'Invalid input data')
    })
    it('should return error', () => {
        assert.equal(countCharacters(), 'Invalid input data')
    })
    it('should return correct result', () => {
        assert.deepEqual(countCharacters('123'), {1: 1, 2:1, 3: 1})
    })
    it('should return correct result', () => {
        assert.deepEqual(countCharacters('aaaaaa'), {a: 6})
    })
})

describe('getNextPalindrome', ()=> {
    it('should return error', () => {
        assert.equal(getNextPalindrome('a'), 'Ivalid input data')
    })
    it('should return error', () => {
        assert.equal(getNextPalindrome('a'), 'Ivalid input data')
    })
    it('should return correct palindrome', () => {
        assert.equal(getNextPalindrome(12), 22)
        assert.equal(getNextPalindrome(54), 55)
    })
    it('should return correct palindrome with number < 10', () => {
        assert.equal(getNextPalindrome(1), 11)
        assert.equal(getNextPalindrome(-1), 11)
    })
})