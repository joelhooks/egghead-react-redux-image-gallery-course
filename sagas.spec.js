import test from 'tape';
import { call, put } from 'redux-saga/effects';
import {loadImages} from './sagas';
import { fetchImages } from './api'
import {imagesLoaded, selectImage, imageLoadError} from './actions';

test('loadImages', assert => {
  const generator = loadImages({page:1});

  assert.deepEqual(
    generator.next().value,
    call(fetchImages, 1),
    'should call fetchImages'
  );

  const images = ['test'];

  assert.deepEqual(
    generator.next(images).value,
    put(imagesLoaded(images)),
    'should dispatch IMAGES_LOADED action'
  );

  assert.deepEqual(
    generator.next().value,
    put(selectImage(images[0])),
    'should dispatch SELECT_IMAGE action'
  );

  const error = 'test error';

  assert.deepEqual(
    generator.throw(error).value,
    put(imageLoadError(error)),
    'should dispatch IMAGE_LOADING_ERROR when error occurs'
  );

  assert.end();
});