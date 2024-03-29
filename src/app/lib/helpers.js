export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getJWToken = () => `Bearer ` + JSON.parse(window.localStorage.getItem('token'));
