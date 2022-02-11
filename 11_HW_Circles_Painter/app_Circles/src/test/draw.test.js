const {drawCircle, draw} = require('../js/draw.js');
const {Circle} = require("../js/circle");

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

describe('Draw', ()=> {

    test('should "Start draw"', () => {
        const testCircle = new Circle(10,10,10,'#ff0000', 5, 5, ctx, canvas);
        const testCircleSecond = new Circle(10,10,10,'#ff0000', 5, 5, ctx, canvas);
        expect(draw({
            circle: [testCircle, testCircleSecond]
        },ctx,canvas)).toBe('Start draw')
    })
})