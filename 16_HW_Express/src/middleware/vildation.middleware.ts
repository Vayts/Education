import { NextFunction, Request, Response } from 'express';
import url from 'node:url';

export class Validation {
  public static next: NextFunction;

  private static res: Response;

  private static req: Request;


  constructor(req: Request, res: Response, next: NextFunction) {
    Validation.req = req;
    Validation.res = res;
    Validation.next = next;
  }

  static validateGet(req = this.req, res = this.res, next = this.next) {
    const urlParts = url.parse(req.url, true);
    const params = urlParts.query;
    const paramsArr = Object.keys(params);
    const validParams = ['order', 'group', 'limit', 'start'];
    let isValid = true;

    paramsArr.forEach((el) => {
      if (!validParams.includes(el)) {
        isValid = false;
        return res.status(409).send({ message: `Incorrect input data: ${el}` });
      }
    });

    if (isValid) {
      next();
    }
  }

  static validatePut(req = this.req, res = this.res, next = this.next) {
    const urlParts = url.parse(req.url, true);
    const params = urlParts.query;
    const paramsArr = Object.keys(params);
    const validParams = ['title', 'date', 'author', 'description', 'image'];
    let isValid = true;
    console.log(params);
    paramsArr.forEach((el) => {
      if (!validParams.includes(el)) {
        isValid = false;
        return res.status(409).send({ message: `Incorrect input data: ${el}` });
      }
    });

    if (isValid) {
      next();
    }
  }

  static validatePost(req = this.req, res = this.res, next = this.next) {
    const urlParts = url.parse(req.url, true);
    const params = urlParts.query;
    const paramsArr = Object.keys(params);

    const validParams = ['title', 'date', 'author', 'description', 'image'];
    let isValid = false;

    if (paramsArr.length !== 5) {
      isValid = false;
      return res.status(409).send({ message: `Incorrect request` });
    }

    paramsArr.forEach((el) => {
      if (!validParams.includes(el)) {
        isValid = false;
        return res.status(409).send({ message: `Incorrect request: ${el}` });
      }
    });

    if (isValid) {
      next();
    }
  }

  static validateData(obj: any) {
    const yearRegEx = /^\d{4}$/;

    if (obj.title.length < 1 || obj.title.length > 50) {
      return { valid: false, message: 'Incorrect input data: title'};
    }
  }
}


