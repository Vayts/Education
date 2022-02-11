//removeIf(production)
const {getElement, getContext} = require('../js/utils')
//endRemoveIf(production)

class Brush {

    constructor(ctx,size, color) {
        this.size = size;
        this.color = color;
        this.ctx = ctx;
    }

    draw(event, x, y) {
        const dx = event.movementX;
        const dy = event.movementY;

        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x - dx, y - dy);
        this.ctx.lineCap = "round"
        this.ctx.lineWidth = this.size;
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
        return true;
    }

    changeSize(newSize) {
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