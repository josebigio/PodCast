import * as Types from './action-types';
import { audio, pauseAudioFromBG, playAudioFromBG } from './index';

export const onWindowFocused = () => {
    return (dispatch) => {
        if (audio.paused) {
            pauseAudioFromBG()(dispatch);
        }
        else {
            playAudioFromBG()(dispatch);
        }
        dispatch( {
            type: Types.ON_WINDOW_FOCUS
        });
    }

}

export const onWindowBlur = () => {
    return {
        type: Types.ON_WINDOW_BLUR
    }
}