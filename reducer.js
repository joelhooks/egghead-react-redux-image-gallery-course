import {
  IMAGES_LOADED,
  SELECT_IMAGE,
  LOAD_IMAGES,
  IMAGE_LOADING_ERROR,
  START_SLIDESHOW,
  STOP_SLIDESHOW,
  ADVANCE_SLIDESHOW
} from './actions';

const defaultState = {
  images: [],
  slideshowRunning: false
};

export default function images(state = defaultState, action) {
  switch(action.type) {
    case ADVANCE_SLIDESHOW:
      const currentImageIndex = state.images.indexOf(state.selectedImage);
      let nextIndex = currentImageIndex + 1;

      if(nextIndex > state.images.length - 1 || nextIndex === -1) {
        nextIndex = 0
      }

      return {...state, selectedImage: state.images[nextIndex]};
    case START_SLIDESHOW:
      return {...state, slideshowRunning: true};
    case STOP_SLIDESHOW:
      return {...state, slideshowRunning: false};
    case IMAGE_LOADING_ERROR:
      return {...state, error: action.error};
    case LOAD_IMAGES:
      return {...state, currentPage: action.page};
    case IMAGES_LOADED:
      return {...state, images: action.images};
    case SELECT_IMAGE:
      return {...state, selectedImage: action.selectedImage};
    default:
      return state;
  }
}