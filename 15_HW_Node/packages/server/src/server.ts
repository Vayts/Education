import Application from './app';
import { PageController } from './controllers/page.controller';
import { UploadController } from './controllers/upload.controller';

// https://node15.herokuapp.com/

const app = new Application([new PageController(), new UploadController()]);
app.start();
