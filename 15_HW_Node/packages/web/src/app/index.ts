import './style.scss';
import { addListener } from './utils';
import { fillInput, startSending} from "./logic";

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const mimeState = {
    currentMimeType: 'text/plain',
  };

  addListener('load-file', 'input', fillInput.bind(null, mimeState));
  addListener('send-file', 'click', startSending.bind(null, mimeState));
}
