import  {  createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';
import { getLocalStorage } from  "@/lib/helpers";

const AppContext = createContext();

export const ContextProvider = ({children, params}) => {
    const [loggedUser, setLoggedUser] = useState(() => getLocalStorage("loggedUser"));
    const [collections, setCollections] = useState({
        page: 1,
        results: []
    });
    const [photos, setPhotos] = useState({
        page: 1,
        results: []
    });

    const [photosData, photosError, isPhotosDataLoading] = useFetch(`${process.env.API_URL}/photos?page=${photos.page}&per_page=5`, "photos");
    const [collectionData, collectionsError, isCollectionDataLoading] = useFetch(
        `${process.env.API_URL}/users/mna96/collections?page=${collections.page}&per_page=5&client_id=${process.env.UNSPLASH_CLIENT_ID}`,
        "collections"
    );

    useEffect(() => {
        if(photosData) setPhotos({...photos, results: photosData});
    },[photosData]);

    useEffect(() => {
        if(collectionData) setCollections({...collections, results: collectionData});
    },[collectionData]);

    const value = {
        loggedUser, 
        setLoggedUser,
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