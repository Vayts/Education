const assert = require("assert");
const { dayWeek, distanceFind, numberToString, stringToNumber } = require('../homework1/function')

describe('dayWeek', ()=> {
    it('should return correct day of week', function () {
        assert.equal(dayWeek(1), 'Понедельник')
    });
    it('should return error', function () {
        assert.equal(dayWeek(0), 'Invalid input data')
    });
    it('should return error', function () {
        assert.equal(dayWeek(8), 'Invalid input data')
    });
    it('should return error', function () {
        assert.equal(dayWeek('string'), 'Invalid input data')
    });
    it('should return error', function () {
        assert.equal(dayWeek(null), 'Invalid input data')
    });
});

describe('distanceFind', ()=> {
    it('should return correct distance between two points', function () {
        assert.equal(distanceFind({x: 1, y: 2,}, {x: 2, y: -1,}), 3.16)
        assert.equal(distanceFind({x: 4, y: 1,}, {x: -2, y: 2,}), 6.08)
    });
    it('should return error', function () {
        assert.equal(distanceFind({x: 4, y: '4',}, {x: -2, y: 2,}), 'Invalid input data')
        assert.equal(distanceFind({x: 'a', y: 1,}, {x: -2, y: 2,}), 'Invalid input data')
        assert.equal(distanceFind({x: 4, y: null,}, {x: -2, y: 2,}), 'Invalid input data')
        assert.equal(distanceFind({x: undefined, y: 1,}, {x: -2, y: 2,}), 'Invalid input data')
        assert.equal(distanceFind({x: 2, y: 1,}, 'a'), 'Invalid input data')
    });
});

describe('functionToString', ()=> {
    it('should return error', function () {
        assert.equal(numberToString(undefined), 'Пусто')
    });
    it('should return NaN', function () {
        assert.equal(numberToString('21'), 'Не число')
    });
    it('should return zero', function () {
        assert.equal(numberToString(0), 'Ноль')
    });
    it('should return big number in words', function () {
        assert.equal(numberToString(999999999999), 'Девятьсот девяносто девять миллиардов девятьсот девяносто девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять')
    });
    it('should return number in words', function () {
        assert.equal(numberToString(122),'Сто двадцать два')
    });
    it('should return number-exception', function () {
        assert.equal(numberToString(12),'Двенадцать')
        assert.equal(numberToString(19191919),'Девятнадцать миллионов сто девяносто одна тысяча девятьсот девятнадцать')
    });
});

describe('stringToNumber', ()=> {
    it('should return error', function () {
        assert.equal(stringToNumber(null), 'Пусто')
    });
    it('should return not a string', function () {
        assert.equal(stringToNumber(12), 'Не строка')
    });
    it('should return zero', function () {
        assert.equal(stringToNumber('Ноль'), 0)
    });
    it('should return correct number', function () {
        assert.equal(stringToNumber('Девятьсот девяносто девять миллиардов девятьсот девяносто девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять'), 999999999999)
    });
    it('should return correct number-exception', function () {
        assert.equal(stringToNumber('Двенадцать'), 12)
        assert.equal(stringToNumber('Девятнадцать миллионов сто девяносто одна тысяча девятьсот девятнадцать'),19191919)
    });
    it('should return correct number', function () {
        assert.equal(stringToNumber('Сто тридцать пять'), 135)
    });
});

