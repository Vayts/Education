function getInputValue(id) {
    const input = document.getElementById(id)
    if (input) {
        return Number(input.value)
    }
    return ''
}

function setInputValue(id, value) {
    const input = document.getElementById(id)
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id)
    if (node) {
        node.addEventListener(eventType, cb)
        return true
    }
    return false
}

function disabledCheck(id) {
    const node = document.getElementById(id)
    if (node) {
        return node.hasAttribute('disabled');
    }
    return false;
}

function setDisabled(id) {
    const node = document.getElementById(id)
    if (node) {
        node.setAttribute('disabled', 'disabled');
        return true;
    }
    return  false;
}

function removeDisabled(id) {
    const node = document.getElementById(id)
    if (node) {
        node.removeAttribute('disabled');
        return true;
    }
    return  false;
}

function setTextValue(id, text) {
    const node = document.getElementById(id)

    if (node) {
        node.innerText = text;
        return true;
    }
    return false;
}

module.exports = {removeDisabled, disabledCheck, setInputValue, getInputValue, setDisabled, addListener, setTextValue}