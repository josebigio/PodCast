import { combineReducers } from 'redux';
import CommentsReducer from './comments-reducer';
import AudioReducer from './audio-reducer';


const rootReducer = combineReducers({
  comments: CommentsReducer,
  audio: AudioReducer,
});

export default rootReducer;
