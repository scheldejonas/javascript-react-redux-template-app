import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PostReducer from './src/reducers/post';
import Archive from './src/containers/Archive';

const store = createStore(
  PostReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Archive />
  </Provider>,
  document.getElementById('root')
);
