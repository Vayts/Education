function addListener(id, eventType, cb) {
    const node = document.getElementById(id)

    if (node) {
        node.addEventListener(eventType, cb)
        return true;
    }
    return false;
}

function getElement(id) {
    const node = document.getElementById(id)

    if (node) {
        return node
    }
    return false
}

function getInputValue(id) {
    const input = document.getElementById(id)
    if (input) {
        return input.value
    }
    return false;
}


function setTextValue(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function getContext(id) {
    const node = document.getElementById(id)

    if (node) {
        return node.getContext('2d')
    }
    return true
}

//removeIf(production)
module.exports = {getElement, addListener,getInputValue,setTextValue, getContext}
//endRemoveIf(production)