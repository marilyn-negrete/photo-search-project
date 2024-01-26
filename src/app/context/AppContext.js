import  {  createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [theCollections, setTheCollections] = useState([]);

    const value = {
        theCollections, 
        setTheCollections
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>

}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(!context) {
        throw new Error('Something went wrong, useMyContext must be used within a MyContextProvider');
    } else {
        return context;
    }

}