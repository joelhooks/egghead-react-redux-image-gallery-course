import {fetchImages} from './api';
import {takeEvery} from 'redux-saga';
import {put, call} from 'redux-saga/effects';

import * as GalleryActions from './actions';

export function* loadImages(action) {
  try {
    const images = yield call(fetchImages, action.page);
    yield put(GalleryActions.imagesLoaded(images));
    yield put(GalleryActions.selectImage(images[0]));
  } catch(e) {
    yield put(GalleryActions.imageLoadError(e));
  }

}

export function* watchForLoadImages() {
  yield* takeEvery(GalleryActions.LOAD_IMAGES, loadImages);
}