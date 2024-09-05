export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    try {
        return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
        return null;
    }
};

export const getJWToken = () => `Bearer ` + JSON.parse(window.localStorage.getItem('token'));
