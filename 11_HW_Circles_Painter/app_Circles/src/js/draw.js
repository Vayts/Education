function draw(state) {
    const ctx = getContext('canvas')
    const canvas = getElement('canvas')

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle(state)
}

function drawCircle(state) {
    const ctx = getContext('canvas')
    const circles = state.circle
    for (let i = 0; i < circles.length; i++) {
        ctx.beginPath()
        ctx.arc(circles[i].x, circles[i].y, circles[i].size, 0, Math.PI*2);
        ctx.fillStyle = circles[i].color
        ctx.fill()
        ctx.closePath()
        circles[i].move()
        circles[i].direction()
        circles[i].collision(state, i)
    }
}




