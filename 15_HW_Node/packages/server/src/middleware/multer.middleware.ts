import multer from 'multer';

const allowedMimeType = [
  'audio/aac',
  'application/octet-stream',
  'image/bmp',
  'text/css',
  'text/csv',
  'application/msword',
  'application/vnd.ms-fontobject',
  'application/epub+zip',
  'image/gif',
  'text/html',
  'image/vnd.microsoft.icon',
  'application/json',
  'audio/mpeg',
  'audio/mp4',
  'audio/mpeg',
  'application/php',
  'image/png',
  'application/vnd.ms-powerpoint',
  'image/svg+xml',
  'application/vnd.rar',
  'text/plain',
  'video/webm',
  'font/woff',
  'font/woff2',
  'application/zip',
  'application/x-7z-compressed',
  'application/x-zip-compressed',
  'application/xhtml+xml',
  'image/jpeg',
  'image/jpeg',
  'text/javascript',
];
const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: {
    fileSize: 20971520,
  },
  fileFilter: (req, file, cb) => {
    const fileMimeType = file.mimetype;
    if (!allowedMimeType.includes(fileMimeType)) {
      return cb(new Error('Invalid mime type'));
    }

    const fileSize = parseInt(<string>req.headers['content-length'], 10);
    if (fileSize > 20971520) {
      return cb(new Error('File to large'));
    }

    return cb(null, true);
  },
});
