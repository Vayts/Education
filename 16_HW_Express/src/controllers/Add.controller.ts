import { Request, Response } from 'express';
import url from 'node:url';
import { BooksService } from '../services/books.service';

export class AddController {
  private static res: Response;

  private static req: Request;

  constructor(req: Request, res: Response) {
    AddController.req = req;
    AddController.res = res;
  }

  static addBook(req = this.req, res = this.res) {
    const dbRequest = BooksService.getInstance();
    const urlParts = url.parse(req.url, true);
    const params = urlParts.query;

    dbRequest
      .create(params)
      .then(() => res.status(200).send({ message: 'Success' }))
      .catch((err) => res.status(409).send(err));
  }
}
