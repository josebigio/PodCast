const STATE_KEY = "STATE_KEY";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (error) {
        console.error('could not deserialize state', error);
        return undefined;
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    }
    catch (error) {
        console.error('could not serialize state', error);
    }
}

export { loadState, saveState };