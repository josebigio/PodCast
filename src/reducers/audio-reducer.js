import { Types } from '../actions';
//"foo3bar5".match(/\d+/)[0]
const initialState = {
    isPlaying: false,
    position:0,
    duration:0,
    ready:false,
    scrubberPress:false,
    audioSrc:"http://traffic.libsyn.com/joeroganexp/p959.mp3"
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
        case Types.SEARCH_RESULT_CLICKED:
            return {...state, position:0,isPlaying:false,}
        case Types.AUDIO_SRC_SET:
            return {...state, audioSrc:action.payload,position:0,isPlaying:false,duration:0}
        default:
            return state;
    }
}

export default AudioReducer