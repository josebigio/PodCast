import { mouseMoving, onMouseUp, Types } from '../actions'
import { isMobile } from './index';
let document;

console.log('dom-listener',mouseMoving,onMouseUp);
const initListeners = (documentParam, store) => {
    document = documentParam;
    if (isMobile()) {
        document.ontouchmove = ((e) => {
            console.log('onTouchMove');
            e.preventDefault();
            store.dispatch(mouseMoving(e))
        });
        document.ontouchend = (e) => { store.dispatch(onMouseUp(e)) };
    }
    else {
        document.onmousemove = ((e) => { store.dispatch(mouseMoving(e)) });
        document.onmouseup = (e) => { store.dispatch(onMouseUp(e)) };
    }
}

export { initListeners }