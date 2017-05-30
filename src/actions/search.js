import _ from 'lodash';
import * as Types from './action-types';
import * as Api from '../api';
import * as storage from '../utils/local-storage';
import { fetchComments, changeAudio, getEpisodeNumber } from './index';

export const searchPodCast = (query, maxResults = 5) => {
    return (dispatch) => {
        dispatch({
            type: Types.SEARCH_VALUE_CHANGED,
            payload: query
        });

        _.debounce((query,maxResults) => {
            dispatch({
                type: Types.PODCAST_SEARCH_STARTED,
            });
            if (query && query.length == 0) {
                query = "Joe Rogan Experience";
            }
            Api.searchPodCast(query, maxResults)
                .then((result) => {
                    dispatch({
                        type: Types.PODCAST_SEARCH_RECIEVED_SUCCESS,
                        payload: result
                    });
                })
                .catch((error) => {
                    dispatch({
                        type: Types.PODCAST_SEARCH_RECIEVED_FAILURE,
                        payload: error
                    });
                });
        }, 300)(query,maxResults);



    }
}

export const onSearchFocus = (inputValue) => {
    return (dispatch) => {
        dispatch({
            type: Types.SEARCH_FOCUSED
        });
        handleSearchAll()(dispatch);
    }

}

export const onSearchOnBlur = (inputValue) => {
    return (dispatch) => {
        dispatch({
            type: Types.SEARCH_UNFOCUS
        });
    }

}

export const mouseLeft = () => {
    return {
        type: Types.SEARCH_MOUSE_LEFT
    }
}

export const mouseEntered = () => {
    return {
        type: Types.SEARCH_MOUSE_ENTERED
    }
}

export const handleSearchAll = () => {
    return (dispatch) => {
        dispatch({
            type: Types.PODCAST_SEARCH_STARTED,
        });
        Api.searchPodCast("Joe Rogan Experience", 50)
            .then((result) => {
                dispatch({
                    type: Types.PODCAST_SEARCH_RECIEVED_SUCCESS,
                    payload: result
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

export const fetchRatings = (searchResult) => {
    return (dispatch) => {
        Api.searchVideoInfo(searchResult.youtubeId)
            .then((result) => {
                dispatch({
                    type: Types.PODCAST_RATINGS_RECIEVED,
                    payload: result
                });
            })
            .catch((error) => {
                dispatch({
                    type: Types.PODCAST_RATINGS_ERROR,
                    payload: error
                });
            });


    }
}

export const onSearchResultClicked = (searchResult) => {
    return (dispatch,getState) => {
        const lastAudioPos = getState().audio.position;
        const prevEpisode = getState().search.currentEpisode;
        storage.savePodcast(prevEpisode,lastAudioPos);
        console.log('SAVING AUDIO POS',prevEpisode,lastAudioPos);
        dispatch({
            type: Types.SEARCH_RESULT_CLICKED,
            payload: searchResult,
        })
        fetchComments(searchResult.youtubeId)(dispatch);
        changeAudio(searchResult)(dispatch);
        fetchRatings(searchResult)(dispatch);
    }
}

