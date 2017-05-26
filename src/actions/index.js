import * as Types from './action-types';
import * as Api from '../api';
import { isMobile } from '../utils';
import { searchPodCast, onSearchResultClicked, handleSearchAll, onSearchFocus, onSearchOnBlur, mouseLeft, mouseEntered } from './search';
import { navigateTo } from './navigation';

let audio;
let tickInterval;
let isDragging = false;

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

const changeAudio = (searchResult) => {
    return (dispatch) => {
        const episodeNumber = searchResult.title.match(/\d+/)[0];
        console.log('episodeNumber',episodeNumber);
        dispatch({
            type:Types.AUDIO_SRC_SET,
            payload:"http://traffic.libsyn.com/joeroganexp/p" + episodeNumber + ".mp3"
        })
    }

}


const setAudioPosition = (position) => {
    return (dispatch) => {
        audio.currentTime = Math.min(Math.max(position, 0), audio.duration);
        dispatch({
            type: Types.AUDIO_DURATION_SET,
            payload: audio.currentTime
        });
    }
}

const initializeAudio = (audioElement) => {
    console.log('initializeAudio',audioElement);
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

const onScrubberDown = (e) => {
    return {
        type: Types.SCRUBBER_DOWN,
        payload: getXYPayload(e)
    }
}


const mouseMoving = (e) => {
    return {
        type: Types.MOUSE_MOVE,
        payload: getXYPayload(e)
    }
}


const onMouseUp = (e) => {
    return (dispatch, getState) => {
        dispatch({
            type: Types.MOUSE_UP,
        });
    }
}

const getXYPayload = (e) => {
    if (isMobile()) {
        try {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY }
        }
        catch (error) {
            console.error('error getting payload', error, e);
            return { x: 0, y: 0 }
        }
    }
    return { x: e.clientX, y: e.clientY };
}

export { Types, fetchComments, changeAudio, searchPodCast, onSearchResultClicked, handleSearchAll, initializeAudio, playAudio, pauseAudio, setAudioPosition, mouseMoving, onMouseUp, onScrubberDown,  onSearchFocus, onSearchOnBlur, mouseLeft, mouseEntered, navigateTo  }
