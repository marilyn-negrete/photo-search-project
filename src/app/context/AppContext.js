import  {  createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [topicsData, topicsDataError, isTopicsDataLoading] = useFetch(`${process.env.API_URL}/topics`, "topics");
    const [photosData, photosError, isPhotosDataLoading] = useFetch(`${process.env.API_URL}/photos`, "photos");
    const [userData, userError, isUserDataloading] = useFetch(`${process.env.API_URL}/users/mna96`, "userData");
    const [collectionData, collectionsError, isCollectionDataLoading] = useFetch(
        `${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`,
        "collections"
    );
    const [collections, setCollections] = useState([]);
    const [user, setUser] = useState({});
    const [photos, setPhotos] = useState([]);
    const [topicsList, setTopicsList] = useState([]);
    
    useEffect(() => {
        if(userData) setUser(userData);
    },[userData]);

    useEffect(() => {
        if(photosData) setPhotos(photosData);
    },[photosData]);

    useEffect(() => {
        if(collectionData) setCollections(collectionData);
    },[collectionData]);

    useEffect(() => {
        if(topicsData) setTopicsList(topicsData);
    },[topicsData]);

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
        topicsList, 
        setTopicsList
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