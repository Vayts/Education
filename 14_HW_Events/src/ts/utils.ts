export function addListener(id, eventType, cb): boolean {
  const node = document.getElementById(id)

  if (node) {
    node.addEventListener(eventType,cb)
    return true;
  }
  return false;
}

export function getElement(id): HTMLElement | boolean {
  const node = document.getElementById(id);

  if(node) {
    return node;
  }
  return false;
}

export function setSrc(id, srcValue): boolean {
  const node = <HTMLImageElement>document.getElementById(id);

  if (node) {
    node.src = srcValue;
    return true;
  }
  return false;
}

export function setSrcToNode(node: HTMLImageElement, srcValue): boolean {
  if (node) {
    node.src = srcValue;
    return true;
  }
  return false;
}

export function getSrcOfNode(node: HTMLImageElement): boolean | string {

  if (node) {
    return node.src
  }
  return false;
}

export function addHTMLValue(id, value): boolean {
  const node = <HTMLElement>document.getElementById(id);

  if (node) {
    node.innerHTML += value;
    return true;
  }
  return false;
}



export function getNodeList(className): NodeList | boolean {
  const NodeList = document.querySelectorAll(className);

  if (NodeList.length > 0) {
    return NodeList;
  }
  return false;

}

export function getClassList(node: HTMLElement): boolean | string[] {
  if (node) {
    return [...node.classList]
  }
  return false;
}


