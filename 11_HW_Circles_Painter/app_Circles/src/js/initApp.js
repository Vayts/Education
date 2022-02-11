//removeIf(production)
const {addCircle} = require('./circle')
const {draw} = require('./draw')
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', function(){
    initApp()
})

function initApp() {

    const state = {
        circle: []
    }
    const ctx = getContext('canvas')
    const canvas = getElement('canvas')

    addListener('canvas', 'click', addCircle.bind(null, state, ctx, canvas))

    setInterval(draw.bind(null, state, ctx, canvas), 15)
}




