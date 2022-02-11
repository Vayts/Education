//removeIf(production)
const {getContext, setTextValue, getInputValue, addListener, getElement} = require('../js/utils')
const {Brush} = require("./brush");
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', function(){
    initApp()
})

function initApp() {
    const ctx = getContext('canvas');
    const canvas = getElement('canvas');
    const brush = new Brush(ctx,5, '#000000');

    addListener('canvas', 'mousemove', getEvent.bind(null, brush, ctx));
    addListener('size-range', 'input', setRange.bind(null, brush));
    addListener('color', 'input', setColor.bind(null, brush));
    addListener('clear', 'click', clear.bind(null, ctx, canvas));
    addListener('save', 'click', saveImg.bind(null, canvas));
}

function getEvent(brush) {
    draw(event,brush);
}

function draw(event, brush) {
    if (event.buttons > 0) {
        brush.draw(event, event.offsetX, event.offsetY);
        return true;
    }
    return false;
}

function clear(ctx, canvas) {
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return true;
    }
    return false;

}

function setRange(brush) {
    const value = getInputValue('size-range');
    setTextValue('range-value', value);
    brush.changeSize(+value);
    return brush.size;
}

function setColor(brush) {
    const value = getInputValue('color');
    brush.changeColor(value);
    return brush.color;
}


function saveImg(canvas) {
    const result = canvas.toDataURL('text/json');
    this.href = result;
    return result;
}

//removeIf(production)
module.exports={saveImg, setColor, setRange, clear, draw, initApp, getEvent}
//endRemoveIf(production)
