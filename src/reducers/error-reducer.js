import {Types} from '../actions';

const initialState = {
  error:undefined
}

const ErrorReducer = (state = initialState ,action) =>{
    console.log('error reducer',action,state);
    switch(action.type) {
        case Types.ERROR:
            return {...state,error:action.payload}
        case Types.ERROR_CLEAR:
            return {...state,error:""}
        default:
            return state;
    }
}

export default ErrorReducer