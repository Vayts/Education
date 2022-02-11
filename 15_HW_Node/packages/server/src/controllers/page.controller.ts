import { Request, Response, Router } from 'express';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();


export class PageController {
  path = '/';

  router = Router();

  constructor() {
    this.checkRoutes();
  }

  checkRoutes() {
    this.router.get('/', PageController.mainPage);
  }

  static mainPage(req: Request, res: Response) {
    res.sendFile(path.resolve(path.resolve(), './../web', 'dist/index.html'));
  }
}
