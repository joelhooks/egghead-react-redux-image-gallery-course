import 'babel-polyfill';

import React from 'react';
import ReactDom from 'react-dom';

import Gallery from './Gallery';

ReactDom.render(
  <Gallery />,
  document.getElementById('root')
);