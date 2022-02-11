import {
  getFileFromInput,
  removeChild,
  removeDisabledAttribute,
  setDisabledAttribute,
  setHTMLValue,
  setInputValue,
  setTextValue,
} from './utils';

export function validateInput(state, extension, name) {
  if (extension === false) {
    setTextValue('file-message', 'Unsupported file format');
    setDisabledAttribute('send-file');
    return false;
  }

  if (typeof extension === 'string') {
    setTextValue('file-message', name);
    state.currentMimeType = extension;
    removeDisabledAttribute('send-file');
    return true;
  }

  return false;
}

export function checkMimeType(fileName): boolean | string {
  const fileNameArr = fileName.split('.');
  const fileNameExtension = fileNameArr[fileNameArr.length - 1];

  const MIME = {
    aac: 'audio/aac',
    bin: 'application/octet-stream',
    bmp: 'image/bmp',
    css: 'text/css',
    csv: 'text/csv',
    doc: 'application/msword',
    eot: 'application/vnd.ms-fontobject',
    epub: 'application/epub+zip',
    gif: 'image/gif',
    html: 'text/html',
    ico: 'image/vnd.microsoft.icon',
    json: 'application/json',
    mp3: 'audio/mpeg',
    mp4: 'audio/mp4',
    mpeg: 'audio/mpeg',
    php: 'application/php',
    png: 'image/png',
    ppt: 'application/vnd.ms-powerpoint',
    svg: 'image/svg+xml',
    rar: 'application/vnd.rar',
    txt: 'text/plain',
    webm: 'video/webm',
    woff: 'font/woff',
    woff2: 'font/woff2',
    zip: 'application/zip',
    '7z': 'application/x-7z-compressed',
    xhtml: 'application/xhtml+xml',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    js: 'text/javascript',
  };

  for (const key in MIME) {
    if (key === fileNameExtension) {
      return MIME[key];
    }
  }

  return false;
}

export function sendFile(state, value) {
  setDisabledAttribute('load-file');
  setDisabledAttribute('input-label');
  const formData = new FormData();
  formData.append('file', value);
  const fileName = value.name;
  fetch(`/${fileName}`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      removeDisabledAttribute('load-file');
      removeDisabledAttribute('input-label');
      return response.json();
    })
    .then((data) => {
      setTextValue('file-message', data.message);
      if (data.htmlContent) {
        setHTMLValue('img-link', data.htmlContent);
      }
    })
    .catch(() => {
      setHTMLValue('img-link', 'Something went wrong!');
    });
}

export function startSending(state) {
  sendFile(state, getFileFromInput('load-file'));
  setInputValue('load-file', '');
  setDisabledAttribute('send-file');
  setTextValue('file-message', '');
  return 'Process start';
}

export function fillInput(state) {
  const file: File = <File>getFileFromInput('load-file');
  if (file) {
    const fileExtension = checkMimeType(file.name);
    validateInput(state, fileExtension, file.name);
    removeChild('img-link');
    return true;
  }
  return false;
}
