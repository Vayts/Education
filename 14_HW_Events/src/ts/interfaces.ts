export interface DataObj {
  albumId: number,
  id: number,
  thumbnailUrl: string,
  title: string,
  url: string,
}

export interface AppState {
  currentPhotoIndex: string,
  currentPhotoSrc: string
}

export interface ControlPanel {
  paused: boolean,
  showAll: boolean
}
