import  {  createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [photosData, photosError, isPhotosDataLoading] = useFetch(`${process.env.API_URL}/photos`);
    const [userData, userError, isUserDataloading] = useFetch(`https://api.unsplash.com/users/mna96`);
    const [collectionData, collectionsError, isCollectionDataLoading] = useFetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);
    const [collections, setCollections] = useState([]);
    const [user, setUser] = useState({});
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        if(userData) setUser(userData);
    },[userData]);

    useEffect(() => {
        if(photosData) setPhotos(photosData);
    },[photosData]);

    useEffect(() => {
        if(collectionData) setCollections(collectionData);
    },[collectionData]);

    const value = {
        user,
        isUserDataloading,
        setUser,
        photos,
        isPhotosDataLoading,
        setPhotos,
        collections, 
        isCollectionDataLoading,
        setCollections
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(!context) {
        throw new Error('Something went wrong, useAppContext must be used within ContextProvider');
    } else {
        return context;
    }

}