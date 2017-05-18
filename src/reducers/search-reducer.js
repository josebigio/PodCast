import {Types} from '../actions';

const initialState = {
    searchInputVal: "",
    searchResultList:[],
}

const SearchReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.SEARCH_VALUE_CHANGED:
            return {...state, searchInputVal:action.payload }
        case Types.PODCAST_SEARCH_RECIEVED_SUCCESS:
            return {...state,searchResultList: action.payload}
        case Types.SEARCH_RESULT_CLICKED:
            return {...state,searchInputVal:""}
        default:
            return state;
    }
}

export default SearchReducer