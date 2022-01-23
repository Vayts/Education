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
    const context = document.getElementById(id).getContext('2d');

    if (context) {
        return context;
    }
    return false;

}