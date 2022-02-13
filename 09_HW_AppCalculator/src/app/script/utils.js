//removeIf(production)
const {checkInputValue} = require("./main");
//endRemoveIf(production)

function setTextContent(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id);

    if (node) {
        node.addEventListener(eventType, cb);
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

function getTextValue(id) {
    const node = document.getElementById(id)

    if (node) {
        return node.textContent;
    }
    return false;
}

function clearState(state) {
    if (state) {
        state.previous = '';
        return state;
    }
    return false;
}

function errorCheck(string) {
    if (['+', '-', '/', '*'].includes(string[string.length - 1])) {
        return true;
    }
    return false;
}

function setValue(state) {
    const target = event.target.closest('button')
    if (target) {
        checkInputValue(target.dataset.value, state)
        return true;
    }
    return false;
}

//removeIf(production)
module.exports = {errorCheck, setTextContent, addTextContent, clearState, setValue, getTextValue, addListener}
//endRemoveIf(production)