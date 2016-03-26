import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Gallery from './Gallery';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import imagesReducer from './reducer';

const store = createStore(imagesReducer);

ReactDom.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);