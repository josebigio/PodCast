import * as Types from './action-types';
import * as Api from '../api';

let audio;
let tickInterval;


const tick = (dispatch) => {
    dispatch({
        type: Types.TICK,
        payload: audio.currentTime,
    });
}

const fetchComments = (videoId) => {
    return (dispatch) => {
        Api.fetchComments(videoId)
            .then((comments) => {
                dispatch({
                    type: Types.COMMENTS_RECIEVED_SUCCESS,
                    payload: comments
                });
            })
            .catch((error) => {
                dispatch({
                    type: Types.COMMENTS_RECIEVED_FAILURE,
                    payload: error
                });
            });
    }
}

const setAudioPosition = (position) => {
    return (dispatch) => {
        setTimeout(() => {
            audio.currentTime = position;
            dispatch({
                type: Types.AUDIO_DURATION_SET,
                payload: position
            });
        }, 5000);

    }
}

const initializeAudio = (audioElement) => {
    audio = audioElement;
    return (dispatch, getState) => {
        const prevPositon = getState().audio.position;
        console.log('prevPosition', prevPositon);
        audio.oncanplay = () => {
            if (audio.currentTime != prevPositon) {
                audio.currentTime = prevPositon;
                dispatch({
                    type: Types.AUDIO_INITIALIZED,
                    payload: audio.duration
                })
            }

        }
    }

}

const playAudio = () => {
    audio.play();
    return (dispatch) => {
        tickInterval = setInterval(() => { tick(dispatch) }, 1000);
        dispatch({
            type: Types.AUDIO_PLAY,
            payload: audio
        });
    }
}

const pauseAudio = () => {
    audio.pause();
    clearInterval(tickInterval);
    return {
        type: Types.AUDIO_PAUSE,
        payload: audio
    }
}

export { Types, fetchComments, initializeAudio, playAudio, pauseAudio, setAudioPosition }
