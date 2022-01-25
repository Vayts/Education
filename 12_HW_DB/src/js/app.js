const mysql = require('mysql');
require('dotenv').config()

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
})

conn.connect(err => {
    if (err) {
        return err;
    }
})



//TASK 1

function allPerson() {
    const query = "SELECT COUNT(1) AS count FROM person";
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
    conn.end()
}

//TASK 2

function averageAge() {
    const query = "SELECT AVG(Age) AS averageAge FROM person";
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

//TASK3

function lastNameList() {
    const query = "SELECT DISTINCT LastName FROM person ORDER BY LastName";
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

//TASK4

function lastNameCounter() {
    const query = "SELECT LastName, COUNT(*) AS repeatCounter FROM person GROUP BY LastName"
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

// lastNameCounter()

//TASK5

function findBInLastName() {
    const query = "SELECT LastName FROM person WHERE LastName LIKE '%б%'"
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}
//


//TASK 6

function homeless() {
    const query = "SELECT * FROM person WHERE id_Street is NULL";
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

//TASK 7

function youngPeopleOpPravdiStreet() {
    const query = "SELECT * FROM person INNER JOIN street ON person.id_Street = street.id WHERE Age < 18 AND name='Правды'";
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}


//TASK 8

function streetListCounter() {
    const query = "SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.id) AS residents FROM street ORDER BY street.name";
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}

//TASK 9

function streetNameMoreThanSixLetters() {
    const query = "SELECT * FROM street WHERE CHAR_LENGTH(name) = 6"
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}


//TASK 10

function streetsWithResidentsMoreThanThree() {
    const query = "SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.id ) AS residents FROM street HAVING residents >= 3 ORDER BY street.name "
    conn.query(query, (err, res) => {
        if (!err) {
            console.log(res);
        }
    })
}


