import {Types} from '../actions';

const initialState = {
    mousePosition: {
        x:0,
        y:0
    },
    focused:false,
    warning:false
}

const WindowReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.MOUSE_MOVE:
            return {...state, mousePosition:action.payload }
        case Types.ON_WINDOW_BLUR:
            return {...state,focused:false}
        case Types.ON_WINDOW_FOCUS: 
            return {...state, focused:true}
        case Types.WARNING:
            return {...state, warning:true}
        default:
            return state;
    }
}

export default WindowReducer