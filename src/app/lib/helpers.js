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

export const updateRequest = async (collection) => {
    const res = await fetch(`${process.env.API_URL}/collections/${collection.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: getJWToken(),
        },
        body: JSON.stringify(collection)
    });

    const data = await res.json();

    if(res.ok) {
        return data;
    } else {
        throw Error `something went wrong`;
    }
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

    const data = await res.json();

    if(res.ok) {
        return data;
    } else {
        throw Error `something went wrong`;
    }
}