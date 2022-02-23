import mysql from 'mysql2';

export class BooksService {
  private static instance: BooksService | null;

  private db: any;

  constructor() {
    this.connection();
  }

  public static getInstance() {
    if (!BooksService.instance) {
      BooksService.instance = new BooksService();
    }
    return BooksService.instance;
  }

  private connection() {
    this.db = mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root',
      database: process.env.MYSQL_DATABASE || 'books',
    });

    this.db.on('error', () => {
      BooksService.instance = null;
    });
  }

  read(obj: any) {
    let query = `SELECT * FROM books_table`;

    if (obj.order) {
      query += ` ORDER BY ${obj.order}`;
    }

    if (obj.group) {
      query += ` ORDER BY ${obj.group}`;
    }

    if (obj.limit) {
      query += ` LIMIT ${obj.limit}`;
    }

    if (obj.start) {
      query += ` OFFSET ${obj.start}`;
    }

    return new Promise((resolve, reject) => {
      this.db.query(query, (err: Error, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  update(obj: any, id: string) {
    const paramsKeys = Object.keys(obj);
    const paramsValue = Object.values(obj);
    const queryArr: string[] = [];
    paramsKeys.forEach((el, idx) => {
      queryArr.push(`${el}='${paramsValue[idx]}'`);
    });
    const query = `UPDATE books_table SET ${queryArr.join(', ')} WHERE id=${id}`;
    return new Promise((resolve, reject) => {
      this.db.query(query, (err: Error, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  create(obj: any) {
    const query = `INSERT INTO books_table(title, date, author, description, image) VALUES ('${obj.title}', '${obj.date}', '${obj.author}', '${obj.description}', '${obj.image}')`;
    return new Promise((resolve, reject) => {
      this.db.query(query, (err: Error, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}
