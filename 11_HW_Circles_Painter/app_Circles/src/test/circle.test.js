const {getSpeed, findSpeed,getY,getX,addCircle,findAngle,getColor,getSize, Circle, findDistance, staticCollision} = require('../js/circle')

describe('getSpeed', () => {
    test('should return true', () => {
        expect(getSpeed() > 4).toBe(true)
    })
    test('should return true', () => {
        expect(getSpeed() < 11).toBe(true)
    })
})

describe('getColor', () => {
    test('should return true', () => {
        expect(typeof getColor() === 'string').toBe(true)
    })
})

describe('findSpeed', ()=> {
    test('should return', () => {
        expect(findSpeed(4,4)).toBe(5.656854249492381)
    })
})

describe('findAngle', ()=> {
    test('should return', () => {
        expect(findAngle(4,4)).toBe(0.7853981633974483)
    })
})

describe('getSize', () => {
    test('should return true', () => {
        expect(getSize() > 9).toBe(true)
    })
    test('should return true', () => {
        expect(getSize() < 51).toBe(true)
    })
})

const ctx = {
    beginPath: ()=>{},
    moveTo: ()=>{},
    lineTo: ()=>{},
    lineCap: '',
    lineWidth: 10,
    strokeStyle: '#ff0000',
    fillStyle: () => '#ff0000',
    arc: () => {},
    fill: () => {},
    stroke: ()=> {},
    clearRect: ()=>{},
    closePath: () => {}
}

const canvas = {
    width: 300,
    height: 300
}


describe('Circle', () => {
    test('should return [15,15]', ()=>{
        const testCircle = new Circle(10,10,10,'#ff0000', 5, 5, ctx, canvas)
        expect(testCircle.move()).toStrictEqual([15,15])
    })
    test('should return true', ()=>{
        const testCircle = new Circle(10,10,10,'#ff0000', 5, 5, ctx, canvas)
        expect(testCircle.draw()).toBe(true)
    })
})


describe('Circle.direction', () => {
    test('direction', () => {
        const testCircle = new Circle(10,10,8,'#ff0000', 3, 5, ctx, canvas)
        expect(testCircle.direction()).toBe(true)
    })
    test('direction X-Rebound', () => {
        const testCircle = new Circle(10,10,8,'#ff0000', 3, 5, ctx, {width: 20})
        expect(testCircle.direction()).toBe('X-Rebound')
    })
    test('direction Y-Rebound', () => {
        const testCircle = new Circle(10,10,8,'#ff0000', 3, 5, ctx, {height: 20})
        expect(testCircle.direction()).toBe('Y-Rebound')
    })
    test('direction Y-Bottom', () => {
        const testCircle = new Circle(10,30,8,'#ff0000', 3, -10, ctx, {height: 37})
        expect(testCircle.direction()).toBe('Y-Bottom')
    })
    test('direction Y-Top', () => {
        const testCircle = new Circle(10,4,8,'#ff0000', 3, 10, ctx, {height: 37})
        expect(testCircle.direction()).toBe('Y-Top')
    })
    test('direction X-Right', () => {
        const testCircle = new Circle(30,10,8,'#ff0000', -10, 3, ctx, {width: 37})
        expect(testCircle.direction()).toBe('X-Right')
    })
    test('direction X-Left', () => {
        const testCircle = new Circle(4,10,8,'#ff0000', 10, 3, ctx, {width: 37})
        expect(testCircle.direction()).toBe('X-Left')
    })
})

describe('collision', () => {
    test('', () => {
        const testCircle = new Circle(10,10,10,'#ff0000', 5, 5, ctx, canvas);
        const testCircleSecond = new Circle(10,10,10,'#ff0000', 5, 5, ctx, canvas);
        expect(testCircle.collision({
            circle: [testCircle, testCircleSecond]
        }, 0)).toBe(true)

        expect(testCircle.collision({
            circle: [testCircle]
        }, 0)).toBe(false)
    })
})

describe('findDistance', ()=> {
    test('', () => {
        expect(findDistance({x: 1, y: 3}, {x: 3, y: 4})).toBe(2.23606797749979)
    })
})