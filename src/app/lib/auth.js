export const getToken = () => `Bearer ` + JSON.parse(window.localStorage.getItem('token'));
