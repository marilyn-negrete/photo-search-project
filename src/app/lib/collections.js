export const getUsersCollections = async () => {
    const response = await fetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);
    const data = await response.json();
    return data;
}