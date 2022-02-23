import Application from './app';
import { BooksRouter } from './routes/books.routes';

const app = new Application([new BooksRouter()]);

app.start();
