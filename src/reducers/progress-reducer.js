import {Types} from '../actions';

const initialState = {
    mousePosition: {
       isDragging:false,
       draggingOffset:0
    },

}

let initialMouseX = 0;

const ProgressReducer = (state = initialState ,action) =>{
    switch(action.type) {
        case Types.SCRUBBER_DOWN:
            initialMouseX = action.payload.x;
            return {...state,isDragging:true,draggingOffset:0}
        case Types.MOUSE_UP:
            return {...state,isDragging:false,draggingOffset:0}
        case Types.MOUSE_MOVE:
            if(state.isDragging) {
                const newOffset = (action.payload.x-initialMouseX);
                return {...state,draggingOffset:newOffset}
            }
        default:
            return state;
    }
}

export default ProgressReducer