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
        console.log(err)
        return err
    }
    else {
        console.log('test')
    }
})
//TASK 1

// let query = "SELECT COUNT(1) AS count FROM person"

//TASK 2

// let query = "SELECT AVG(Age) AS averageAge FROM person"

//TASK3

// let query = "SELECT DISTINCT LastName FROM person ORDER BY LastName"

//TASK4

// let query = "SELECT LastName, COUNT(*) AS repeatCounter FROM person GROUP BY LastName"

//TASK5

//TASK 6

// let query = "SELECT * FROM person WHERE id_Street is NULL"

//TASK 7

// let query = "SELECT * FROM person INNER JOIN street ON person.id_Street = street.id WHERE Age < 18 AND name='Правды'"

//TASK 8

// let query = "SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.id) AS residents FROM street ORDER BY street.name"

//TASK 9

// let query = "SELECT * FROM street WHERE CHAR_LENGTH(name) = 6"

//TASK 10
// let query = "SELECT street.name, (SELECT COUNT(*) FROM person WHERE person.id_Street=street.id ) AS residents FROM street HAVING residents >= 3 ORDER BY street.name "

conn.query(query, (err, res) => {
    if (!err) {
        // console.log(res[0])
        console.log(res)
    }
})