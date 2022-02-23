import url from 'node:url';
import { Request, Response } from 'express';

import { BooksService } from '../services/books.service';

export class GetController {
  private static res: Response;

  private static req: Request;

  constructor(req: Request, res: Response) {
    GetController.req = req;
    GetController.res = res;
  }

  static getBooks(req = this.req, res = this.res) {
    const urlParts = url.parse(req.url, true);
    const params = urlParts.query;

    const dbRequest = BooksService.getInstance();
    dbRequest
      .read(params)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(409).send(err);
      });
  }
}
