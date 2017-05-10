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
       audio.currentTime = Math.min(Math.max(position,0),audio.duration);
            dispatch({
                type: Types.AUDIO_DURATION_SET,
                payload: audio.currentTime
            });
    }
}

const initializeAudio = (audioElement) => {
    audio = audioElement;
    return (dispatch, getState) => {
        const prevPositon = getState().audio.position;
        console.log('prevPosition', prevPositon);
        let initialized = false;
        audio.oncanplay = () => {
            if (!initialized) {
                initialized = true;
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
