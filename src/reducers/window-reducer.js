import {Types} from '../actions';

const initialState = {
    mousePosition: {
        x:0,
        y:0
    },

}

const WindowReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.MOUSE_MOVE:
            return {...state, mousePosition:action.payload }
        default:
            return state;
    }
}

export default WindowReducer