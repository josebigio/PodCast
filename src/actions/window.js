import * as Types from './action-types';
import { audio } from './index';

export const onWindowFocused = () => {
    return (dispatch) => {
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