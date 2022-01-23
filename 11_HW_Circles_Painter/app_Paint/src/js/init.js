//removeIf(production)
const {getContext, setTextValue, getInputValue, addListener, getElement} = require('../js/utils')
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', function(){
    initApp()
})

function initApp() {
    const brush = new Brush(5, '#000000')

    addListener('canvas', 'mousemove', draw.bind(null, brush));
    addListener('size-range', 'input', setRange.bind(null, brush));
    addListener('color', 'input', setColor.bind(null, brush));
    addListener('clear', 'click', clear);
    addListener('save', 'click', saveImg);
}

function draw(brush) {
    if (event.buttons > 0) {
        brush.draw(event, event.offsetX, event.offsetY);
        return true;
    }
    return false;
}

function clear() {
    const canvas = getElement('canvas');
    const ctx = getContext('canvas');

    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return true;
    }
    return false;

}

function setRange(brush) {
    const value = getInputValue('size-range')
    setTextValue('range-value', value)
    brush.changeSize(+value)
    return brush
}

function setColor(brush) {
    const value = getInputValue('color')
    brush.changeColor(value)
    return brush
}


function saveImg() {
    const canvas = getElement('canvas')
    const result = canvas.toDataURL('text/json')
    this.href = result
}

//removeIf(production)
module.exports={saveImg, setColor, setRange, clear, draw}
//endRemoveIf(production)
