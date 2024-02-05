export const getToken = () => `Bearer ` + window.localStorage.getItem('token');
