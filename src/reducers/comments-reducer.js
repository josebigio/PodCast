import {Types} from '../actions';

const CommentsReducer = (state = {coments:[]} ,action) =>{
    switch(action.type) {
        case Types.COMMENTS_RECIEVED_SUCCESS:
            return {
                comments:action.payload
            }
        default:
            return state;
    }
}

export default CommentsReducer