import { Types } from '../actions';

const initialState = {
    isPlaying: false
}

const AudioReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.AUDIO_PLAY:
            return {
                isPlaying: true
            }
        case Types.AUDIO_PAUSE:
            return {
                isPlaying: false
            }
        default:
            return state;
    }
}

export default AudioReducer