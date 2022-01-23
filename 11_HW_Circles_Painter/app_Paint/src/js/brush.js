//removeIf(production)
const {getElement, getContext} = require('../js/utils')
//endRemoveIf(production)

class Brush {

    constructor(size, color) {
        this.size = size;
        this.color = color;
    }

    draw(event, x, y) {
        const ctx = getContext('canvas')
        const dx = event.movementX;
        const dy = event.movementY;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y - dy);
        ctx.lineCap = "round"
        ctx.lineWidth = this.size;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }

    changeSize(newSize) {
        console.log(typeof newSize)
        if (typeof newSize === 'number') {
            this.size = newSize;
            return true;
        }
        return false;

    }

    changeColor(newColor) {
        if (typeof newColor === 'string') {
            this.color = newColor;
            return true;
        }
        return false;
    }
}

//removeIf(production)
module.exports = {Brush}
//endRemoveIf(production)