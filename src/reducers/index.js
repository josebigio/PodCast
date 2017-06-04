import { combineReducers } from 'redux';
import CommentsReducer from './comments-reducer';
import AudioReducer from './audio-reducer';
import WindowReducer from './window-reducer';
import ProgressReducer from './progress-reducer';
import SearchReducer from './search-reducer';
import NavigationReducer from './navigation-reducer';
import CurrentEpisodeReducer from './current-episode-reducer';
import ErrorReducer from './error-reducer';


const rootReducer = combineReducers({
  comments: CommentsReducer,
  audio: AudioReducer,
  window: WindowReducer,
  progress:ProgressReducer,
  search:SearchReducer,
  navigation:NavigationReducer,
  currentEpisode:CurrentEpisodeReducer,
  error:ErrorReducer,
});

export default rootReducer;
