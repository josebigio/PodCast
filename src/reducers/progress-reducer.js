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
                // console.log('initialMouseX',initialMouseX);
                // console.log('mousePos:',action.payload.x);
                const newOffset = (action.payload.x-initialMouseX);
                // console.log('newOffset',newOffset);
                return {...state,draggingOffset:newOffset}
            }
        default:
            return state;
    }
}

export default ProgressReducer