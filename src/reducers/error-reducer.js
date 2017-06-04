import {Types} from '../actions';

const initialState = {
  error:undefined,
  retryList:[],
}

const ErrorReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.RETRY_ERROR:
            return {...state,retryList:state.retryList.concat(action.payload.retry), error:action.payload.error}
        case Types.RETRY_ERROR_CLEAR:
            return {...state,error:"", retryList:[]}
        default:
            return state;
    }
}

export default ErrorReducer