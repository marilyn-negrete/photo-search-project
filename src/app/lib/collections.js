import { getToken } from "./auth";

// The postNewCollection function makes a post request to the unsplash API with a collection object in the body.
// If successful, a collection object in JSON format will be returned containing all the new created collection details. 
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
