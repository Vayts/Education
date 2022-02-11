const {
    findAllPersons,
    countAverageAge,
    getLastNameList,
    getLastNameCounter,
    findHomeless,
    findYoungPeoplesOnPravdiStreet,
    getStreetListCounter,
    findStreetNameMoreThanSixLetters,
    getStreetsWithResidentsMoreThanThree
} = require('../js/app.js');

const {connection} = require('../js/connection');

jest.mock('../js/connection.js');

describe('findAllPersons', function () {
    test('', () => {
        const query = jest.fn(() => true);
        // query.mockResolvedValue((err,res) => {
        //     return Promise.resolve(jest.fn())
        // })
        // query.mockResolvedValue({
        //     err: '1',
        //     res: '3'
        // })
        const end = jest.fn();
        connection.mockReturnValue({
        query,
        end
        });
        expect(findAllPersons()).toBe('true')
    })
});
// const query = jest.fn(() => Promise.resolve({ hello: 'jopa'}))
// // query.mockReturnValue('xh')
// connection.mockReturnValue({
//     query,
//     end: jest.fn(),
// });