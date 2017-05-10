import { Types } from '../actions';

const initialState = {
    isPlaying: false,
    position:0,
    duration:0,
    ready:false
}

const AudioReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.AUDIO_INITIALIZED:
            return {...state, duration:action.payload,ready:true}
        case Types.AUDIO_PLAY:
           return {...state, isPlaying:true};
        case Types.AUDIO_PAUSE:
            return {...state, isPlaying:false};
        case Types.TICK:
        case Types.AUDIO_DURATION_SET:
            return {...state, position:parseInt(action.payload)};
        default:
            return state;
    }
}

export default AudioReducer