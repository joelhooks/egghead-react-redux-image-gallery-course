export const SELECT_IMAGE = 'SELECT_IMAGE';
export const IMAGES_LOADED = 'IMAGES_LOADED';
export const LOAD_IMAGES = 'LOAD_IMAGES';

export function loadImages() {
  return { type: LOAD_IMAGES }
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