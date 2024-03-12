import  {  createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [catalog, setCatalog] = useState([]);
    const [user, setUser] = useState({});
    const [data, error, loading] = useFetch(`https://api.unsplash.com/users/mna96`);

    useEffect(() => {
        if(data) setUser(data);
    },[data]);

    const value = {
        catalog, 
        setCatalog,
        user,
        setUser
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