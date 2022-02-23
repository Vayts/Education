import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

class Application {
  app: express.Application;

  constructor(routes: any) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes(routes);
  }

  settings() {
    this.app.set('port', process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes(routes: any) {
    routes.forEach((route: any) => {
      this.app.use(route.path, route.router);
    });
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on http://localhost:${this.app.get('port')}`);
    });
  }
}

export default Application;
