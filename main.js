import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Gallery from './Gallery';

import { createStore } from 'redux';
import imagesReducer from './reducer';

const store = createStore(imagesReducer);

console.log(store);

store.subscribe(() => {
  console.log('subscribed:', store.getState());
})

store.dispatch({
  type: 'SELECT_IMAGE',
  data: [1,2,3,4,5],
  other: 'this is something too',
  payload: {
    info: 'some info'
  }
});

ReactDom.render(
  <Gallery />,
  document.getElementById('root')
);