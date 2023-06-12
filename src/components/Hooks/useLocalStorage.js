import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const serializedPersistedState = localStorage.getItem(key);
        if (serializedPersistedState) {
            const persistedState = JSON.parse(serializedPersistedState);

            return persistedState;
        }
        return initialValue;
    })
    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state,
        setLocalStorageState, 
    ];
}