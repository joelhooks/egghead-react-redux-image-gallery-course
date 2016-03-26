import {fetchImages} from './api';
import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';

import * as GalleryActions from './actions';

export function* loadImages(action) {
  const images = yield fetchImages(action.page);
  yield put(GalleryActions.imagesLoaded(images));
  yield put(GalleryActions.selectImage(images[0]));
}

export function* watchForLoadImages() {
  yield* takeEvery(GalleryActions.LOAD_IMAGES, loadImages);
}