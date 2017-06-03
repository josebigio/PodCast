import {Types, getEpisodeNumber} from '../actions';

const initialState = {
   episodeNumber:undefined,
   episodeTitle:"",
   youtubeId:undefined,
}

const CurrentEpisodeReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.SEARCH_RESULT_CLICKED:
            const payload = action.payload;
            return {...state,youtubeId:payload.youtubeId, episodeNumber: getEpisodeNumber(payload)}
        default:
            return state;
    }
}

export default CurrentEpisodeReducer