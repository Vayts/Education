import { Request, Response, Router } from 'express';
import { upload } from '../middleware/multer.middleware';
import { AWSUploader } from './AWSUploader.controller';

export class UploadController {
  path = '/*';

  router = Router();

  constructor() {
    this.checkRoutes();
  }

  checkRoutes() {
    this.router.post('/*', UploadController.uploadFile);
  }

  static uploadFile(req: Request, res: Response) {
    const uploadFileToS3 = upload.single('file');
    uploadFileToS3(req, res, (err) => {
      if (err) {
        return res.status(422).send({ message: err.message });
      }

      if (req.file) {
        const params = {
          Body: req.file.buffer,
          Bucket: <string>process.env.BUCKET,
          Key: '',
        };

        const timeStamp = Date.now();
        const fileName = `${timeStamp}_${req.file.originalname.replace(/\s/g, '')}`;
        const amazonUrl = 'https://15hw-nodejs.s3.eu-central-1.amazonaws.com/';

        if (req.file.mimetype.includes('image/') && req.file.mimetype !== 'image/gif') {
          const img = new AWSUploader();
          const largeImg = img.uploadImg(params, 2048, fileName, 'large');
          const mediumImg = img.uploadImg(params, 1024, fileName, 'medium');
          const thumbImg = img.uploadImg(params, 300, fileName, 'thumb');

          Promise.all([largeImg, mediumImg, thumbImg])
            .then(() =>
              res.status(200).send({
                message: `The image has been successfully converted and uploaded.`,
                htmlContent: `<a href="${amazonUrl}large_${fileName}">Large</a><a href="${amazonUrl}medium_${fileName}">Medium</a><a href="${amazonUrl}thumb_${fileName}">Thumb</a>`,
              }),
            )
            .catch(() => res.status(409).send({ message: 'Something went wrong.' }));
        } else {
          const file = new AWSUploader();

          file
            .uploadCommonFile(params, fileName)
            .then(() =>
              res.status(200).send({
                message: `File successfully uploaded.`,
                htmlContent: `<a href="${amazonUrl}${fileName}">File</a>`,
              }),
            )
            .catch(() => res.status(409).send({ message: 'Something went wrong.' }));
        }
      } else {
        return res.status(409).send({ message: 'Invalid request' });
      }
    });
  }
}
