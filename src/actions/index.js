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
    console.log('fetchComments');
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

const initializeAudio = (audioElement) => {
    audio = audioElement;
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: Types.AUDIO_INITIALIZED,
                payload: audio.duration
            })
        }, 500)
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

export { Types, fetchComments, initializeAudio, playAudio, pauseAudio }
