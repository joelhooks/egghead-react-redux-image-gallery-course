import {
  IMAGES_LOADED,
  SELECT_IMAGE,
  LOAD_IMAGES,
  IMAGE_LOADING_ERROR
} from './actions';

const defaultState = {
  images: []
};

export default function images(state = defaultState, action) {
  switch(action.type) {
    case IMAGE_LOADING_ERROR:
      console.log(action);
      return {state, error: action.error};
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