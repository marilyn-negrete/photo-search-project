import  {  createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [photosData, photosError, isPhotosDataLoading] = useFetch(`${process.env.API_URL}/photos?page=1&per_page=5`, "photos");
    const [userData, userError, isUserDataloading] = useFetch(`${process.env.API_URL}/users/mna96`, "userData");
    const [collectionData, collectionsError, isCollectionDataLoading] = useFetch(
        `${process.env.API_URL}/users/mna96/collections?page=1&per_page=10&client_id=${process.env.UNSPLASH_CLIENT_ID}`,
        "collections"
    );
    const [collections, setCollections] = useState([]);
    const [user, setUser] = useState({});
    const [photos, setPhotos] = useState([]);
    
    console.log(photos);
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
        setCollections,
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