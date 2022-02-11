import '../scss/style.scss'
import {addListener} from "./utils";
import {catchClick, getPhoto, pause, restart, selectPhoto, showAll} from "./logic";
import {AppState, ControlPanel} from "./interfaces";

document.addEventListener('DOMContentLoaded', () => {
  initApp()
})

function initApp() {

  const state: AppState = {
    currentPhotoIndex: '0',
    currentPhotoSrc: ''
  }

  const controlState: ControlPanel = {
    showAll: false,
    paused: false
  }

  getPhoto(state)
  addListener('sub-block', 'click', catchClick.bind(null, state, controlState))
  addListener('play', 'click', showAll.bind(null, state, controlState))
  addListener('pause', 'click', pause.bind(null, controlState))
  addListener('restart', 'click', restart.bind(null, state, controlState))
}




