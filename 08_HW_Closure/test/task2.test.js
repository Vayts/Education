const getSum = require('../src/task2')

describe('getSum', () => {
    test('"11111111119991111111111111", "2222222222222222222222"', () => {
        expect(getSum('11111111119991111111111111', '2222222222222222222222')).toEqual('11113333342213333333333333')
    })
    test('"1", "1"', () => {
        expect(getSum('1', '1')).toEqual('2')
    })
    test('"111", "111"', () => {
        expect(getSum('111', '111')).toEqual('222')
    })
    test('"111", "1111"', () => {
        expect(getSum('111', '1111')).toEqual('1222')
    })
    test('"999", "999"', () => {
        expect(getSum('999', '999')).toEqual('1998')
    })
    test('"0", "0"', () => {
        expect(getSum('0', '0')).toEqual('0')
    })
    test('"0", "1"', () => {
        expect(getSum('0', '1')).toEqual('1')
    })
    test('4, "1"', () => {
        expect(getSum(4, '1')).toEqual('Invalid input data')
    })
})