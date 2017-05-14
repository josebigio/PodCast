import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './containers/app';
import reducers from './reducers';
import * as Api from './api';
import { saveState, loadState } from './utils/local-storage';
import { Types, onMouseUp, mouseMoving } from './actions'
import { isMobile } from './utils';
// import { initListeners } from './utils/dom-listener';
import '../style/index.scss';


const logger = createLogger({
  // predicate: (getState, action) => (action.type !== Types.TICK && action.type !==Types.MOUSE_MOVE)
  predicate: (getState, action) => (action.type !== Types.TICK)
});
const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
const prevState = loadState();
if (prevState) {
  prevState.audio.isPlaying = false;
  prevState.progress.isDragging = false;

}
const store = createStoreWithMiddleware(reducers, prevState);
if (isMobile()) {
  document.ontouchmove = ((e) => {
    console.log('onTouchMove');
    // e.preventDefault();
    store.dispatch(mouseMoving(e))
  });
  document.ontouchend = (e) => { store.dispatch(onMouseUp(e)) };
  document.onmousemove = ((e) => { store.dispatch(mouseMoving(e)) });
  document.onmouseup = (e) => { store.dispatch(onMouseUp(e)) };
}
else {
  document.onmousemove = ((e) => { store.dispatch(mouseMoving(e)) });
  document.onmouseup = (e) => { store.dispatch(onMouseUp(e)) };
}


// initListeners(document,store);
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.react-container'));
