function addListener(id, eventType, cb) {
    const node = document.getElementById(id);

    if (node) {
        node.addEventListener(eventType, cb);
        return true;
    }
    return false;
}

function getElement(id) {
    const node = document.getElementById(id);

    if (node) {
        return node;
    }
    return false;
}

function getContext(id) {
    const node = document.getElementById(id);

    if (node) {
        return node.getContext('2d')
    }
    return false;

}

//removeIf(production)
module.exports = {getElement, addListener, getContext}
//endRemoveIf(production)