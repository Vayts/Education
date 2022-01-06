function setTextValue(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function getInputValue(id) {
    const input = document.getElementById(id)
    if (input) {
        return input.value;
    }
    return '';
}

function setInputValue(id,value) {
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

function toggleDisabledClass(id) {
    for (let i = 0; i < arguments.length; i++) {
        const node = document.getElementById(arguments[i])
        if (node) {
            node.classList.toggle('disabled')
        } else {
            return false
        }
    }
}



module.exports = {getInputValue, setTextValue, setInputValue, addListener, toggleDisabledClass}