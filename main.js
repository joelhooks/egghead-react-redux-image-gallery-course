import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Gallery from './Gallery';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import imagesReducer from './reducer';

import {watchForLoadImages} from './sagas';

const store = createStore(
  imagesReducer,
  applyMiddleware(createSagaMiddleware(watchForLoadImages))
);

ReactDom.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);