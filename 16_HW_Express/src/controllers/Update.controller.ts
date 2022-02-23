import { Request, Response } from 'express';
import url from 'node:url';
import { BooksService } from '../services/books.service';

export class UpdateController {
  private static res: Response;

  private static req: Request;

  constructor(req: Request, res: Response) {
    UpdateController.req = req;
    UpdateController.res = res;
  }

  static updateBook(req = this.req, res = this.res) {
    const dbRequest = BooksService.getInstance();
    const urlParts = url.parse(req.url, true);
    const params = urlParts.query;

    dbRequest
      .update(params, req.params.id)
      .then(() => res.status(200).send({ message: 'Success' }))
      .catch((err) => res.status(409).send(err));
  }
}
