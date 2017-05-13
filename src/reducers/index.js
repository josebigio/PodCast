import { combineReducers } from 'redux';
import CommentsReducer from './comments-reducer';
import AudioReducer from './audio-reducer';
import WindowReducer from './window-reducer';
import ProgressReducer from './progress-reducer';


const rootReducer = combineReducers({
  comments: CommentsReducer,
  audio: AudioReducer,
  window: WindowReducer,
  progress:ProgressReducer
});

export default rootReducer;
