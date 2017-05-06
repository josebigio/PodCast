import * as Types from './action-types';
import * as Api from '../api';

let audio;

const fetchComments = (videoId) => {
    console.log('fetchComments');
    return (dispatch)=> {
       Api.fetchComments(videoId)
       .then((comments)=>{
           console.log('got comments');
           dispatch({
                type:Types.COMMENTS_RECIEVED_SUCCESS,
                payload:comments
           });
       })
       .catch((error)=>{
            console.log('error',error);
             dispatch({
                type:Types.COMMENTS_RECIEVED_FAILURE,
                payload:error
           });
       });
    }
}

const initializeAudio = (audioElement) => {
    audio = audioElement;
    return {
        type:Types.AUDIO_INITIALIZED
    }
}

const playAudio = () => {
    audio.play();
    return {
         type:Types.AUDIO_PLAY,
         payload:audio
    }
}

const pauseAudio = () => {
    audio.pause();
    return {
         type:Types.AUDIO_PAUSE,
         payload:audio
    }
}

export { Types, fetchComments, initializeAudio, playAudio, pauseAudio }
