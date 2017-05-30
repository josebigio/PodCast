import {Types} from '../actions';

const CommentsReducer = (state = {comments:[],isLoading:false} ,action) =>{
    switch(action.type) {
        case Types.COMMENTS_FETCH_START: 
            return {...state, isLoading:true}
        case Types.COMMENTS_RECIEVED_SUCCESS:
            return {...state , comments:action.payload, isLoading:false}
        default:
            return state;
    }
}

export default CommentsReducer