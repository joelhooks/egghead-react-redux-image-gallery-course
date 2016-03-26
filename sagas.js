import {fetchImages} from './api';
import {put} from 'redux-saga/effects';

import * as GalleryActions from './actions';

export function* loadImages() {
  const images = yield fetchImages();
  yield put(GalleryActions.imagesLoaded(images));
  yield put(GalleryActions.selectImage(images[0]));
}