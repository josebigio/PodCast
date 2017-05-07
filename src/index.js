import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import App from './containers/app';
import reducers from './reducers';
import * as Api from './api';
import { setAudioPosition } from './actions';
import '../style/index.scss';


const reducer = storage.reducer(reducers);
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(thunk,middleware)(createStore);
const store = createStoreWithMiddleware(reducers);
const load = storage.createLoader(engine);
load(store)
    .then((newState) =>{
      console.log('lastPosition: ',newState.audio.position);
      //setAudioPosition(newState.audio.position)(store.dispatch);
    })
    .catch(() => console.log('Failed to load previous state'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.react-container'));
