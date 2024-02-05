import { getToken } from "./auth";

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
