import {candidate} from "./types";
import {Circle} from "./canvas";
import {randomTime} from "./logic";

export function addListener(id, eventType, cb): boolean {
  const node = <HTMLElement>document.getElementById(id);

  if (node) {
    node.addEventListener(eventType, cb);
    return true;
  }
  return false;
}

export function setInputValue(id, value): boolean {
  const input = <HTMLInputElement>document.getElementById(id);
  if (input) {
    input.value = value;
    return true;
  }
  return false;
}

export function getInputValue(id): any {
  const input = <HTMLInputElement>document.getElementById(id);

  if (input) {
    if (input.value === '') {
      return undefined;
    }
    return input.value;
  }
  return false;

}

export function createListItem(id, obj): boolean {
  const node = document.getElementById(id);

  if (node) {
    node.innerHTML += `<li>${obj.name}, ${obj.balance}, ${obj.age}, ${obj.document}, ${obj.lang}</li>`;
    return true;
  }
  return false;
}

export function clearAllInputs() {
  setInputValue('input-name', '');
  setInputValue('input-balance', '');
  setInputValue('input-age', '');
  setInputValue('input-document', '');
  setInputValue('input-english', '');
}

export function getElement(id): HTMLCanvasElement | boolean {
  const node = document.getElementById(id);

  if (node) {
    return <HTMLCanvasElement>node;
  }
  return false;
}

export function getContext(id): CanvasRenderingContext2D | boolean{
  const node = <HTMLCanvasElement>document.getElementById(id);

  if (node) {
    return node.getContext('2d');
  }
  return false;
}

export function removeChild(id): boolean {
  const node = document.getElementById(id);

  if (node) {

    while(node.firstChild) {
      node.removeChild(node.firstChild);
    }
    return true;

  }
  return false;

}

export function setDisabled(id) {
  const button = <HTMLButtonElement>document.getElementById(id);

  if (button) {
    button.setAttribute('disabled', 'disabled');
    return true;
  }
  return false;
}

export function removeDisabled(id) {
  const button = <HTMLButtonElement>document.getElementById(id);

  if (button) {
    button.removeAttribute('disabled');
    return true;
  }
  return false;
}

export function setTextValue(id, value) {
  const node = document.getElementById(id);

  if (node) {
    node.innerText = value;
    return true;
  }
  return false;
}


