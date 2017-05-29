import { mouseMoving, onMouseUp, Types, window as w } from '../actions'
import { isMobile } from './index';

const initListeners = (store) => {
    window.onfocus = (e) => { store.dispatch(w.onWindowFocused())}
    window.onblur = (e) => { store.dispatch(w.onWindowBlur())}
    if (!isMobile()) {
        document.onmousemove = ((e) => { store.dispatch(mouseMoving(e)) });
        document.onmouseup = (e) => { store.dispatch(onMouseUp(e)) };
    }
}

export { initListeners }