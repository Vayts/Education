function draw(state, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle(state)
    return 'Start draw';
}

function drawCircle(state) {
    const circles = state.circle
    circles.forEach((el, index) => {
        el.draw()
        el.move()
        el.direction()
        el.collision(state, index)
    })
    return state;
}

//removeIf(production)
module.exports = {draw, drawCircle}
//endRemoveIf(production)




