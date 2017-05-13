import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './containers/app';
import reducers from './reducers';
import * as Api from './api';
import { saveState, loadState } from './utils/local-storage';
import { mouseMoving,onMouseUp } from './actions'
import '../style/index.scss';

const createStoreWithMiddleware = applyMiddleware( thunk)(createStore);
const prevState = loadState();
prevState.audio.isPlaying = false;
const store = createStoreWithMiddleware(reducers, prevState);
store.subscribe(() => {
  saveState(store.getState());
});
document.onmousemove = ((e) => { store.dispatch(mouseMoving(e)) });
document.onmouseup = (e) => { store.dispatch(onMouseUp(e)) };
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.react-container'));

