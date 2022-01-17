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

function getTextValue(id) {
    const node = document.getElementById(id)

    if (node) {
        return node.textContent
    }
    return false
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



function setValue(state) {
    checkInputValue(event.target.value, state)
}

//removeIf(production)
module.exports = {errorCheck, setTextContent, addTextContent, clearState, setValue, getTextValue}
//endRemoveIf(production)