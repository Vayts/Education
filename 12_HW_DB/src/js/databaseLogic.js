const fs = require("node:fs");
const sqlite = require("sqlite3");
const path = require("path");
const dbPath = path.resolve(__dirname, '../db/civil.db')
async function checkDB() {
    if (fs.existsSync(dbPath)) {
        return new sqlite.Database(dbPath);
    } else {
        const emptyDb = new sqlite.Database(dbPath);
        await emptyDb.serialize(() => {
            emptyDb.run(createStreetTable())
                .run(fillStreetTable())
                .run(createPersonTable())
                .run(fillPersonTable())
                .close()
        })
        return emptyDb
    }
}

function createStreetTable() {
    return 'CREATE TABLE IF NOT EXISTS street(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL)'
}

function fillStreetTable() {
    return 'INSERT INTO street (name) ' +
        'VALUES ("Победа"),' +
        '("Людвига Свободы"),' +
        '("Стожка"),' +
        '("Свободы"),' +
        '("Площадь Независимости"),' +
        '("Московский проспект"),' +
        '("Защитников"),' +
        '("Зеленская"),' +
        '("Правды")';
}

function createPersonTable() {
    return 'CREATE TABLE IF NOT EXISTS person (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, FirstName VARCHAR(30) NOT NULL, LastName VARCHAR(30), Age INT CHECK (Age >= 0 AND Age <= 120), id_Street int, FOREIGN KEY (id_Street) REFERENCES street(id))'
}

function fillPersonTable() {
    return 'INSERT INTO person (FirstName, LastName, Age, id_Street) ' +
        'VALUES ("Олег", "Петров", 37, NULL),' +
        '("Дарья", "Петрова", 27, 3),' +
        '("Симеон", "Шевченко", 17, 3),' +
        '("Анастасия", "Галушко", 22, 4),' +
        '("Анастасия", "Симонова", 24, 2),' +
        '("Дмитрий", "Иванов", 21, NULL),' +
        '("Александра", "Ефимова", 17, 3),' +
        '("Вячеслав", "Зиновьев", 65, 9),' +
        '("Ангелина", "Лобанова", 21, 9),' +
        '("Михаил", "Щербаков", 33, NULL),' +
        '("Виктория", "Назарова", 18, 1),' +
        '("Кирилл", "Кузин", 62, 2),' +
        '("Даниил", "Русаков", 22, 5),' +
        '("Полина", "Симонова", 24, 2),' +
        '("Евгений", "Петров", 78, NULL),' +
        '("Ярослав", "Одинцов", 14, 6),' +
        '("Даниил", "Шевченко", 17, 3),' +
        '("Анна", "Лаврова", 58, 6),' +
        '("Алёна", "Гусева", 29, 8),' +
        '("Артем", "Галбдушев", 14, 9)';
}

module.exports = {checkDB}