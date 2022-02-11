import aws, { AWSError } from 'aws-sdk';
import sharp from 'sharp';

export class AWSUploader {
  s3;

  constructor() {
    this.s3 = new aws.S3({
      secretAccessKey: process.env.ACCESS_SECRET,
      accessKeyId: process.env.ACCESS_KEY,
      region: process.env.REGION,
    });
  }

  uploadImg(
    params: { Body: Buffer; Bucket: string; Key: string },
    size: number,
    name: string,
    sizeName: string,
  ) {
    return new Promise((resolve, reject) => {
      sharp(params.Body)
        .resize(size, size)
        .toBuffer()
        .then((buffer) => {
          params.Body = buffer;
          params.Key = `${sizeName}_${name}`;

          this.s3.putObject(params, (err: AWSError) => {
            if (err) {
              console.log(err);
              reject();
            } else {
              resolve(200);
            }
          });
        });
    });
  }

  uploadCommonFile(params: { Body: Buffer; Bucket: string; Key: string }, name: string) {
    return new Promise((resolve, reject) => {
      params.Key = name;
      this.s3.putObject(params, (err: AWSError) => {
        if (err) {
          reject();
        } else {
          resolve(200);
        }
      });
    });
  }
}
