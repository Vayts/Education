const getQuantityPostsByAuthor = require('../src/task3')

describe('getQuantityPostsByAuthor', () => {
    test('list1, "Rimus"', () => {
        expect(getQuantityPostsByAuthor(list1, 'Rimus')).toEqual('posts -> 1, comments -> 3')
    })
    test('list1, "Uncle"', () => {
        expect(getQuantityPostsByAuthor(list1, 'Uncle')).toEqual('posts -> 1, comments -> 2')
    })
    test('list1, "Ivanov"', () => {
        expect(getQuantityPostsByAuthor(list1, 'Ivanov')).toEqual('posts -> 2, comments -> 0')
    })
    test('list1, "Ivanov"', () => {
        expect(getQuantityPostsByAuthor('string', 'Ivanov')).toEqual('Invalid input data')
    })
    test('list1, "Ivanov"', () => {
        expect(getQuantityPostsByAuthor('string', 12)).toEqual('Invalid input data')
    })
})

let list1 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle',
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }
]