document.addEventListener('DOMContentLoaded', function(){
    initApp()
})

function initApp() {

    const state = {
        circle: []
    }

    addListener('canvas', 'click', addCircle.bind(null, state))

    setInterval(draw.bind(null, state), 15)
}




