import  {  createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [catalog, setCatalog] = useState([]);
  
    const value = {
        catalog, 
        setCatalog,
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