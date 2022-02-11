import express from 'express'; // const express = require('express');
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

class Application {
  app: express.Application;

  constructor(controllers: any) {
    this.app = express(); // const app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.controllers(controllers);
  }

  settings() {
    this.app.set('port', process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(express.static('./../web/dist/'));
  }

  controllers(controllers: any) {
    controllers.forEach((el: any) => {
      this.app.use(el.path, el.router);
    });
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server: http://localhost:${this.app.get('port')}`);
    });
  }
}

export default Application;
