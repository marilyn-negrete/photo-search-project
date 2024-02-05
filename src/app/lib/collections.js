import { getToken } from "./auth";

export const getUsersCollections = async () => {
    const response = await fetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);
    const data = await response.json();
    return data;
}

export const postNewCollection = async (collection) => {
    const response = await fetch(`${process.env.API_URL}/collections`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: JSON.stringify(collection)
    });
}