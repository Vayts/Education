const findTitle = require("../src/task3");

describe('getCookingTime', ()=> {
    test('obj, stringTest', () => {
        expect(findTitle([{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn"t have key title js'}, {title: 'Js - is the best!'}], 'stringTest')).toEqual('Nothing')
    })
    test('obj, js', () => {
        expect(findTitle([{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn"t have key title js'}, {title: 'Js - is the best!'}], 'js')).toEqual( [{title: 'I like JS' }, {title: 'Js - is the best!'}])
    })
})