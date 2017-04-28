import * as Types from './action-types';
import * as Api from '../api';

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

export { Types, fetchComments }
