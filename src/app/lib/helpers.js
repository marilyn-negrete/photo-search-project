export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
    try {
        return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : '';
    } catch (error) {
        return null;
    }
};

export const getJWToken = () => `Bearer ` + JSON.parse(window.localStorage.getItem('token'));

export const updateRequest = async (obj, url) => {
    const res = await fetch(`${process.env.API_URL}${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getJWToken(),
        },
        body: JSON.stringify(obj)
    });
    const data = await res.json();
    return res.ok ? data : new Error `Update helper: something went wrong`;
}

export const deleteRequest = async (collection) => {
    const res = await fetch(`${process.env.API_URL}/collections/${collection.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getJWToken(),
        },
        body: JSON.stringify(collection)
    });
    return res.ok ? data : new Error `Delete helper: something went wrong`;
}