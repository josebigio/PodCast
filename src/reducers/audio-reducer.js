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
            console.log('audio play');
           return {...state, isPlaying:true};
        case Types.AUDIO_PAUSE:
            console.log('audio pause');
            return {...state, isPlaying:false};
        case Types.TICK:
            console.log('tick');
            return {...state, position:action.payload};
        default:
            return state;
    }
}

export default AudioReducer