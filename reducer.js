import {IMAGES_LOADED, SELECT_IMAGE} from './actions';

const defaultState = {
  images: []
};

export default function images(state = defaultState, action) {
  switch(action.type) {
    case IMAGES_LOADED:
      return {...state, images: action.images};
    case SELECT_IMAGE:
      return {...state, selectedImage: action.selectedImage};
    default:
      return state;
  }
}