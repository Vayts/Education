const sqlite =  require('sqlite3');
const fs = require('fs');
const path = require('path');
const dbPath = path.resolve(__dirname, '../db/civil.db')

const {checkDB} = require('./databaseLogic')
const {countAverageAge,findByLetterInLastName,findHomeless,findStreetNameMoreThanSixLetters,getAllPersons,getLastNameCounter,getLastNameList,getStreetsWithResidentsMoreThanThree,findYoungPeoplesOnPravdiStreet, getStreetListCounter} = require('./databaseQuery');


//***********************************************************************************************//
//                                                                                               //
//                                                                                               //
// По моей задумке получение инфы из банки происходит по запросу в терминале node . *цифра*      //
//                                                                                               //
//                                                                                               //
//***********************************************************************************************//
async function init(arg) {
    const db = await checkDB()
    control(arg,db)
}

function control(number,db) {
    switch (number) {
        case '1':
            getAllPersons(db);
            break;
        case '2':
            countAverageAge(db);
            break;
        case '3':
            getLastNameList(db);
            break;
        case '4':
            getLastNameCounter(db);
            break;
        case '5':
            findByLetterInLastName(db);
            break;
        case '6':
            findHomeless(db);
            break;
        case '7':
            findYoungPeoplesOnPravdiStreet(db);
            break;
        case '8':
            getStreetListCounter(db);
            break;
        case '9':
            findStreetNameMoreThanSixLetters(db);
            break;
        case '10':
            getStreetsWithResidentsMoreThanThree(db);
            break;
        default:
            console.log('Invalid input data');
    }
}


init(process.argv[2])
