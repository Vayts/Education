const tickets = require('../src/task1')

describe('tickets', () => {
    test('[25, 25, 50]', () => {
        expect(tickets([25, 25, 50])).toEqual('YES')
    })
    test('[25, 50, 25, 25,50, 25, 100, 25, 25, 25, 25,25,25,25, 100, 100, 50, 50, 100, 100]', () => {
        expect(tickets([25, 50, 25, 25,50, 25, 100, 25, 25, 25, 25,25,25,25, 100, 100, 50, 50, 100, 100])).toEqual('YES')
    })
    test('[25, 50, 100]', () => {
        expect(tickets([25, 50, 100])).toEqual('NO')
    })
    test('[50, 50, 100]', () => {
        expect(tickets([50, 50, 100])).toEqual('NO')
    })
    test('["25"]', () => {
        expect(tickets(['25'])).toEqual('YES')
    })
    test('["25", "25", "50"]', () => {
        expect(tickets(['25', '25', '50'])).toEqual('YES')
    })
    test('[25, 50, "25", 25,50, 25, 100, 25, "25", "25", 25,25,"25",25,"100", 100, 50, 50, 100, 100]', () => {
        expect(tickets([25, 50, "25", 25,50, 25, 100, 25, "25", 25, 25,"25",25,25, "100", 100, 50, 50, 100, 100])).toEqual('YES')
    })
    test('test', () => {
        expect(tickets('test')).toEqual('Invalid input data')
    })
})