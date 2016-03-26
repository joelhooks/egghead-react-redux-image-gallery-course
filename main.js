import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Gallery from './Gallery';

import { createStore } from 'redux';
import imagesReducer from './reducer';

const store = createStore(imagesReducer);

store.dispatch({
  type: 'SELECT_IMAGE',
  image: '??'
});

ReactDom.render(
  <Gallery store={store} />,
  document.getElementById('root')
);