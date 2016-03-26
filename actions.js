export const SELECT_IMAGE = 'SELECT_IMAGE';
export const IMAGES_LOADED = 'IMAGES_LOADED';
export const LOAD_IMAGES = 'LOAD_IMAGES';

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