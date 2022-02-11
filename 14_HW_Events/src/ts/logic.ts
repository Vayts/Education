import {addHTMLValue, getClassList, getNodeList, getSrcOfNode, setSrc, setSrcToNode} from "./utils";
import {AppState, ControlPanel, DataObj} from "./interfaces";

export function getPhoto(state){

  fetch('https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=21')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    addImgElement(data, state)
    return data
  })
    .catch((err) => {
      return null
    })
}

export function addImgElement(data: object[], state: AppState) {
  let index = 0;

  data.forEach((el: DataObj) => {

    if (index === 0) {
      addHTMLValue('sub-block', `<div class="sub-photo__img-holder"><img class="sub-photo__img" src="" data-index=${index} alt=\'\'></div>`)
      setSrc('main-img', el.url)
      state.currentPhotoSrc = el.url;
    } else {
      addHTMLValue('sub-block', `<div class="sub-photo__img-holder"><img class="sub-photo__img" src="${el.url}" data-index=${index} alt=\'\'></div>`)
    }
    index++;

  })
  return state
}


export function catchClick(state: AppState, control: ControlPanel) {
  selectPhoto(event, state, control);
}

export function selectPhoto(event, state, control) {
  const target = event.target as HTMLImageElement;
  const targetClassList = <string[]>getClassList(target);

  if (control.showAll === true) {
    return false;
  }

  if (targetClassList.includes('sub-photo__img')) {
    swap(state,target.dataset.index);
    return true;
  }

  return false;
}

export function swap(state: AppState, index: string) {
  const imgList = getNodeList('.sub-photo__img');
  const lastImg = <HTMLImageElement>imgList[state.currentPhotoIndex];
  const newImg = <HTMLImageElement>imgList[index];
  const newImgSrc = <string>getSrcOfNode(newImg);

  setSrcToNode(lastImg, state.currentPhotoSrc)
  setSrc('main-img', newImgSrc);
  setSrcToNode(newImg, '');

  state.currentPhotoIndex = index;
  state.currentPhotoSrc = newImgSrc;
  return state;
}

export function showAll(state: AppState, control: ControlPanel) {
  let currentPoint = Number(state.currentPhotoIndex) + 1;
  control.paused = false;

  if (control.showAll === true) {
    return false;
  }

  control.showAll = true;

  const showAllInterval = setInterval(() => {
    if (control.paused === true) {
      clearInterval(showAllInterval);
      control.showAll = false;
      return false;
    }

    swap(state, currentPoint.toString())
    currentPoint += 1;

    if (Number(currentPoint) > 20) {
      currentPoint = 0;
    }

    return true;
  },1500);


}

export function pause(control: ControlPanel) {
  control.paused = true;
  return control;
}

export function restart(state: AppState, control: ControlPanel) {
  if (state.currentPhotoIndex !== '0') {
    swap(state, '0');
  }

  control.showAll = false;
  control.paused = true;
  return state;
}


