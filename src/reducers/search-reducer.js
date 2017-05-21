import {Types} from '../actions';

const initialState = {
    searchInputVal: "",
    searchResultList:[],
    currentEpisode: "",
    ratings: undefined,
}

const SearchReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.SEARCH_VALUE_CHANGED:
            return {...state, searchInputVal:action.payload }
        case Types.PODCAST_SEARCH_RECIEVED_SUCCESS:
            return {...state,searchResultList: action.payload}
        case Types.SEARCH_RESULT_CLICKED:
            return {...state,searchInputVal:"", currentEpisode:action.payload.title}
        case Types.PODCAST_RATINGS_RECIEVED: {
            return {...state,ratings:action.payload}
        }
        default:
            return state;
    }
}

export default SearchReducer