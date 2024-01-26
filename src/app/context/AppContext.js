import  {  createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
    const [catalog, setCatalog] = useState([]);
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });

    const openDialog = () => {
        setDialog({
            isOpen: true,
            title: "Create Collection"
        });
    }

    const closeDialog = () => {
        setDialog({
            isOpen: false,
            title: ""
        });
    }

    const value = {
        catalog, 
        setCatalog,
        dialog,
        setDialog,
        openDialog,
        closeDialog
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