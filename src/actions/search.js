import * as Types from './action-types';
import * as Api from '../api';
import {fetchComments, changeAudio} from './index';

const searchPodCast = (query) => {
    return (dispatch) => {
        dispatch({
            type:Types.SEARCH_VALUE_CHANGED,
            payload:query
        });
        Api.searchPodCast(query)
            .then((result) => {
                dispatch({
                    type: Types.PODCAST_SEARCH_RECIEVED_SUCCESS,
                    payload:result
                });
            })
            .catch((error) => {
                dispatch({
                    type: Types.PODCAST_SEARCH_RECIEVED_FAILURE,
                    payload: error
                });
            });


    }
}

const onSearchResultClicked = (searchResult) => {
    return (dispatch) => {
        dispatch({
            type: Types.SEARCH_RESULT_CLICKED,
            payload: searchResult,
        })
        fetchComments(searchResult.youtubeId)(dispatch);
        changeAudio(searchResult)(dispatch);
    }
}

export {searchPodCast, onSearchResultClicked}