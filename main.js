import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Gallery from './Gallery';

import { createStore } from 'redux';
import imagesReducer from './reducer';

const store = createStore(imagesReducer);

ReactDom.render(
  <Gallery store={store} />,
  document.getElementById('root')
);