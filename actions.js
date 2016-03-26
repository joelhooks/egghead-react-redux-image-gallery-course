export const SELECT_IMAGE = 'SELECT_IMAGE';
export const IMAGES_LOADED = 'IMAGES_LOADED';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const IMAGE_LOADING_ERROR = 'IMAGE_LOADING_ERROR';

export const START_SLIDESHOW = 'START_SLIDESHOW';
export const ADVANCE_SLIDESHOW_REQUESTED = 'ADVANCE_SLIDESHOW_REQUESTED';
export const ADVANCE_SLIDESHOW = 'ADVANCE_SLIDESHOW';
export const STOP_SLIDESHOW = 'STOP_SLIDESHOW';

export function requestAdvanceSlideshow() {
  return {
    type: ADVANCE_SLIDESHOW_REQUESTED
  }
}

export function advanceSlideshow() {
  return {
    type: ADVANCE_SLIDESHOW
  }
}

export function startSlideshow() {
  return {
    type: START_SLIDESHOW
  }
}

export function stopSlideshow() {
  return {
    type: STOP_SLIDESHOW
  }
}

export function imageLoadError(error) {
  return {
    type: IMAGE_LOADING_ERROR,
    error
  }
}

export function loadNextPage(currentPage = 0) {
  return loadImages(currentPage + 1)
}

export function loadImages(page = 1) {
  return {
    type: LOAD_IMAGES,
    page: page
  }
}

export function imagesLoaded(images) {
  return {
    type: IMAGES_LOADED,
    images
  }
}

export function selectImage(selectedImage) {
  return {
    type: SELECT_IMAGE,
    selectedImage
  }
}