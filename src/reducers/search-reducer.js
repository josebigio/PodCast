import {Types} from '../actions';

const initialState = {
    searchInputVal: "",
    searchResultList:[],
    currentEpisode: "",
    ratings: undefined,
    focused:false,
    mouseInside:false,
    searchLoading:false,
}

const SearchReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.SEARCH_VALUE_CHANGED:
            return {...state, searchInputVal:action.payload }
        case Types.PODCAST_SEARCH_STARTED:
            return {...state,searchLoading:true}
        case Types.PODCAST_SEARCH_RECIEVED_SUCCESS:
            return {...state,searchResultList: action.payload, searchLoading:false}
        case Types.SEARCH_RESULT_CLICKED:
            return {...state,searchInputVal:"", searchResultList:[], currentEpisode:action.payload.title}
        case Types.PODCAST_RATINGS_RECIEVED:
            return {...state,ratings:action.payload}
        case Types.SEARCH_FOCUSED:
            return {...state,focused:true}
        case Types.SEARCH_UNFOCUS:
            return {...state,focused:false}
        case Types.SEARCH_MOUSE_ENTERED:
            return {...state,mouseInside:true}
        case Types.SEARCH_MOUSE_LEFT:
            return {...state,mouseInside:false}
        default:
            return state;
    }
}

export default SearchReducer