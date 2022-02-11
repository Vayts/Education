function getAllPersons(db) {
    db.each('SELECT COUNT(1) AS count FROM person', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function countAverageAge(db) {
    db.each('SELECT AVG(Age) AS averageAge FROM person', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}
function getLastNameList(db) {
    db.each('SELECT DISTINCT LastName FROM person ORDER BY LastName', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function getLastNameCounter(db) {
    db.each('SELECT LastName, COUNT(*) AS repeatCounter FROM person GROUP BY LastName', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function findByLetterInLastName(db) {
    db.each('SELECT LastName FROM person WHERE LastName LIKE \'%б%\'', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function findHomeless(db) {
    db.each('SELECT * FROM person WHERE id_Street is NULL', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function findYoungPeoplesOnPravdiStreet(db) {
    db.each('SELECT * FROM person INNER JOIN street ON person.id_Street = street.id WHERE Age < 18 AND name="Правды"', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function getStreetListCounter(db) {
    db.each('SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.id) AS residents FROM street ORDER BY street.name', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

function findStreetNameMoreThanSixLetters(db) {
    db.each('SELECT * FROM street WHERE LENGTH(name) = 6', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!')
            return false;
        }
        console.log(res);
    })
}

function getStreetsWithResidentsMoreThanThree(db) {
    db.each('SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.id ) AS residents FROM street WHERE residents >= 3 ORDER BY street.name', (err, res) => {
        if(err) {
            console.log('База данных ещё не заполнилась! Повторите попытку!');
            return false;
        }
        console.log(res);
    })
}

module.exports = {countAverageAge,findByLetterInLastName,findHomeless,findStreetNameMoreThanSixLetters,getAllPersons,getLastNameCounter,getLastNameList,getStreetsWithResidentsMoreThanThree,findYoungPeoplesOnPravdiStreet, getStreetListCounter};