import * as React from 'react';

import MainScreen  from './src';

import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import movieReducer from './src/store/reducer';
import promise from 'redux-promise-middleware';

export default function App() {
  const store = createStore(movieReducer, applyMiddleware(promise));

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}
