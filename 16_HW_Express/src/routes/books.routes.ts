import express, { Router } from 'express';
import { GetController } from '../controllers/Get.controller';
import { AddController } from '../controllers/Add.controller';
import { UpdateController } from '../controllers/Update.controller';
import { Validation } from '../middleware/vildation.middleware';

export class BooksRouter {
  path = '/books';

  router = Router();

  constructor() {
    this.checkRoutes();
  }

  public checkRoutes() {
    this.router.get('/data/*', Validation.validateGet, GetController.getBooks);
    this.router.put('/change/:id/*', Validation.validatePut, UpdateController.updateBook);
    this.router.post('/add*', Validation.validatePost, AddController.addBook);
  }
}
