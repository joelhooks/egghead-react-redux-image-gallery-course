import {fetchImages} from './api';
import {takeEvery} from 'redux-saga';
import {put, call, take, fork} from 'redux-saga/effects';

import * as GalleryActions from './actions';

const waitFor = ms => {
  return new Promise(resolve => {
    return setTimeout(resolve, ms)
  })
};

export function* advanceImage() {
  yield put(GalleryActions.advanceSlideshow());
  yield call(waitFor, 1000);
  yield put(GalleryActions.requestAdvanceSlideshow());
}

export function* watchForSlideshowAdvanceRequest(getState) {
  while(true) {
    yield take(GalleryActions.ADVANCE_SLIDESHOW_REQUESTED);
    if(getState().slideshowRunning) {
      yield fork(advanceImage)
    }
  }
}

export function* watchForStartSlideshow() {
  yield* takeEvery(GalleryActions.START_SLIDESHOW, advanceImage);
}

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