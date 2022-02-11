export function addListener(id, eventType, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(eventType, callback);
    return true;
  }
  return false;
}

export function getFileFromInput(id): File | string | boolean {
  const node = <HTMLInputElement>document.getElementById(id);

  if (node && node.type === 'file') {
    if (node.value === '') {
      return '';
    }
    return node.files[0];
  }
  return false;
}

export function setTextValue(id, value): boolean {
  const input = <HTMLInputElement>document.getElementById(id);
  if (input) {
    input.innerText = value;
    return true;
  }
  return false;
}

export function setInputValue(id, value = ''): boolean {
  const input = <HTMLInputElement>document.getElementById(id);

  if (input) {
    input.value = value;
    return true;
  }
  return false;
}

export function setHTMLValue(id, value): boolean {
  const node = document.getElementById(id);

  if (node) {
    node.innerHTML = value;
    return true;
  }
  return false;
}

export function setDisabledAttribute(id: string): boolean {
  const node = <HTMLElement>document.getElementById(id);
  if (node) {
    node.setAttribute('disabled', 'disabled');
    return true;
  }
  return false;
}

export function removeDisabledAttribute(id: string): boolean {
  const node = <HTMLElement>document.getElementById(id);
  if (node) {
    node.removeAttribute('disabled');
    return true;
  }
  return false;
}

export function removeChild(id): boolean {
  const node = document.getElementById(id);

  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    return true;
  }
  return false;
}
