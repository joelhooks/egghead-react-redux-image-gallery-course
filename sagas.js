import {fetchImages} from './api';
import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';

import * as GalleryActions from './actions';

export function* loadImages() {
  const images = yield fetchImages();
  yield put(GalleryActions.imagesLoaded(images));
  yield put(GalleryActions.selectImage(images[0]));
}

export function* watchForLoadImages() {
  yield* takeEvery(GalleryActions.LOAD_IMAGES, loadImages);
}