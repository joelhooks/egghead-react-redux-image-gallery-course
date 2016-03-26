export const SELECT_IMAGE = 'SELECT_IMAGE';

export function selectImage(selectedImage) {
  return {
    type: SELECT_IMAGE,
    selectedImage
  }
}