import  {  createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [collections, setCollections] = useState({
        page: 1,
        results: []
    });
    const [photos, setPhotos] = useState({
        page: 1,
        results: []
    });
    const [photosData, photosError, isPhotosDataLoading] = useFetch(`${process.env.API_URL}/photos?page=${photos.page}&per_page=5`, "photos");
    const [userData, userError, isUserDataloading] = useFetch(`${process.env.API_URL}/users/mna96`, "userData");
    const [collectionData, collectionsError, isCollectionDataLoading] = useFetch(
        `${process.env.API_URL}/users/mna96/collections?page=${collections.page}&per_page=5&client_id=${process.env.UNSPLASH_CLIENT_ID}`,
        "collections"
    );

    useEffect(() => {
        if(userData) setUser(userData);
    },[userData]);

    useEffect(() => {
        if(photosData) setPhotos({...photos, results: photosData});
    },[photosData]);

    useEffect(() => {
        if(collectionData) setCollections({...collections, results: collectionData});
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