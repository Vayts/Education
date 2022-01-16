function setTextContent(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function addTextContent(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText += value;
        return true;
    }
    return false;
}

function clearState(state) {
    state.previous = ''
}

function errorCheck(string) {
    if (['+', '-', '/', '*'].includes(string[string.length - 1])) {
        return true
    }
    return false
}