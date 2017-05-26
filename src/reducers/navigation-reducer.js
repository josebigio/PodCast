import {Types} from '../actions';

const NavigationReducer = (state = {selection:"comments"} ,action) =>{
    switch(action.type) {
        case Types.NAVIGATION_CHANGED:
            return {
                selection:action.payload
            }
        default:
            return state;
    }
}

export default NavigationReducer;