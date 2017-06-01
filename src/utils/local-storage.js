const STATE_KEY = "STATE_KEY";
const PODCAST_KEY = "PODCAST_KEY";

export const loadState = () => {
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

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    }
    catch (error) {
        console.error('could not serialize state', error);
    }
}

export const savePodcast = (state) => {
    const position = state.audio.position;
    if(position === 0) {
        return;
    }
    const audioSrc = state.audio.audioSrc;
    const savedPC = getSavedPocastMap();
    savedPC[audioSrc] = { position: position };
    try {
        const serializedPC = JSON.stringify(savedPC);
        localStorage.setItem(PODCAST_KEY, serializedPC);
    }
    catch (error) {
        console.error('could not serialize pc', error);
    }
}

export const getSavedPodCast = (state) => {
    const audioSrc = state.audio.audioSrc;
    return getSavedPocastMap()[audioSrc];
}

const getSavedPocastMap = () => {
    try {
        const serializedPodcastList = localStorage.getItem(PODCAST_KEY);
        if (serializedPodcastList === null) {
            return {};
        }
        return JSON.parse(serializedPodcastList);
    }
    catch (error) {
        console.error('could not deserialize state', error);
        return undefined;
    }
}