import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';
import App from './containers/app';
import reducers from './reducers';
import * as Api from './api';
import {saveState, loadState} from './utils/local-storage';
import '../style/index.scss';

const createStoreWithMiddleware = applyMiddleware(logger,thunk)(createStore);
const prevState = loadState();
prevState.audio.isPlaying = false;
const store = createStoreWithMiddleware(reducers,prevState);
store.subscribe(()=>{
  saveState(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.react-container'));
