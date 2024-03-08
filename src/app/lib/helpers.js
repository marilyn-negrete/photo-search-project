export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) =>  {
    const storage = window.localStorage.getItem(key);
    return storage ? JSON.parse(storage) : '';
}

export const getJWToken = () => `Bearer ` + JSON.parse(window.localStorage.getItem('token'));
