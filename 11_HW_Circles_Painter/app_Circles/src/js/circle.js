class Circle {
    constructor(x,y, size, color, xMoveDirection, yMoveDirection) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = `rgb(${color})`;
        this.dx = xMoveDirection;
        this.dy = yMoveDirection;
    }

    move() {
        this.x += this.dx
        this.y += this.dy
    }

    direction() {
        const canvas = getElement('canvas')

        if (this.x - this.size + this.dx < 0 || this.x + this.size + this.dx > canvas.width) {
            this.dx *= -1
        }
        if (this.y - this.size + this.dy < 0 || this.y + this.size + this.dy > canvas.height) {
            this.dy *= -1
        }
        if (this.y + this.size > canvas.height) {
            this.y = canvas.height - this.size;
        }
        if (this.y - this.size < 0) {
            this.y = this.size
        }
        if (this.x + this.size > canvas.width) {
            this.x = canvas.width - this.size
        }
        if (this.x - this.size < 0) {
            this.x = this.size
        }
    }

    collision(state,ball) {
        for (let i = 0; i < state.circle.length; i++) {
            const circle = state.circle[i]
            const dist = findDistance(this, circle)

            if (i !== ball) {
                if (dist < this.size + circle.size) {

                    // Такие точные расчеты коллизии нагло украдены с инндуского гитхаба (я бы сам не догадался)

                    const theta1 = findAngle(this.dx,this.dy)
                    const theta2 = findAngle(circle.dx, circle.dy)
                    const phi = Math.atan2(circle.y - this.y, circle.x - this.x);
                    const mainSize = this.size;
                    const subSize = circle.size;
                    const mainSpeed = findSpeed(this.dx,this.dy);
                    const subSpeed = findSpeed(circle.dx, circle.dy);

                    const dx1F = (mainSpeed * Math.cos(theta1 - phi) * (mainSize-subSize) + 2*subSize*subSpeed*Math.cos(theta2 - phi)) / (mainSize+subSize) * Math.cos(phi) + mainSpeed*Math.sin(theta1-phi) * Math.cos(phi+Math.PI/2);
                    const dy1F = (mainSpeed * Math.cos(theta1 - phi) * (mainSize-subSize) + 2*subSize*subSpeed*Math.cos(theta2 - phi)) / (mainSize+subSize) * Math.sin(phi) + mainSpeed*Math.sin(theta1-phi) * Math.sin(phi+Math.PI/2);
                    const dx2F = (subSpeed * Math.cos(theta2 - phi) * (subSize-mainSize) + 2*mainSize*mainSpeed*Math.cos(theta1 - phi)) / (mainSize+subSize) * Math.cos(phi) + subSpeed*Math.sin(theta2-phi) * Math.cos(phi+Math.PI/2);
                    const dy2F = (subSpeed * Math.cos(theta2 - phi) * (subSize-mainSize) + 2*mainSize*mainSpeed*Math.cos(theta1 - phi)) / (mainSize+subSize) * Math.sin(phi) + subSpeed*Math.sin(theta2-phi) * Math.sin(phi+Math.PI/2);

                    this.dx = dx1F;
                    this.dy = dy1F
                    circle.dx = dx2F;
                    circle.dy = dy2F;

                    staticCollision(this, circle)
                }

            }

        }
    }
}

function addCircle(state) {
    state.circle.push(new Circle(getX(event), getY(event), getSize(), getColor(), getSpeed(), getSpeed()))
}

function staticCollision(ob1, ob2, emergency=false)  {
    // Спасибо индусам, что помогли найти решение застревания шаров....
    let overlap = ob1.size + ob2.size - findDistance(ob1, ob2);
    let smallerObject = ob1.size < ob2.size ? ob1 : ob2;
    let biggerObject = ob1.size > ob2.size ? ob1 : ob2;

    if (emergency) {
        [smallerObject, biggerObject] = [biggerObject, smallerObject]
    }

    let theta = Math.atan2((biggerObject.y - smallerObject.y), (biggerObject.x - smallerObject.x));
    smallerObject.x -= overlap * Math.cos(theta);
    smallerObject.y -= overlap * Math.sin(theta);

    if (findDistance(ob1, ob2) < ob1.size + ob2.size) {
        if (!emergency) staticCollision(ob1, ob2, true)
    }
}


function getX(event) {
    return  event.clientX - getElement('canvas').offsetLeft
}

function getY(event) {
    return  event.clientY - getElement('canvas').offsetTop
}

function getSize() {
    return  Math.floor(Math.random() * (50 - 10 + 1) ) + 10;
}

function getColor() {
    const r = Math.floor(Math.random() * (255 + 1));
    const g = Math.floor(Math.random() * (255 + 1));
    const b = Math.floor(Math.random() * (255 + 1));
    return `${r},${g},${b}`
}


function getSpeed() {
    return Math.floor(Math.random() * (10 - 5 + 1) ) + 5;
}

function getMove() {
    const random = Math.floor(Math.random() * (50 - 1 + 1) ) + 1;
    if (random >= 25) {
        console.log('aaa')
        return 'minus'
    }
    return 'plus'
}

function collisionHit(mainSize, subSize, mainSpeed, subSpeed, phi, angleFirst, angleSecond) {
    return (mainSpeed * Math.cos(angleFirst - phi) * (mainSize-subSize) + 2*subSize*subSpeed*Math.cos(angleSecond - phi)) / (mainSize+subSize) * Math.cos(phi) + mainSpeed*Math.sin(angleFirst-phi) * Math.cos(phi+Math.PI/2)
}

function findDistance(a, b) {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

function findSpeed(dx,dy) {
    return Math.sqrt(dx * dx + dy * dy);
};

function findAngle(dx,dy) {
    return Math.atan2(dx, dy);
}
