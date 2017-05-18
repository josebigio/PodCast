import { mouseMoving, onMouseUp, Types } from '../actions'
import { isMobile } from './index';
let document;

const initListeners = (documentParam, store) => {
    document = documentParam;
    if (isMobile()) {
        return;
    }
    document.onmousemove = ((e) => { store.dispatch(mouseMoving(e)) });
    document.onmouseup = (e) => { store.dispatch(onMouseUp(e)) };
}

export { initListeners }