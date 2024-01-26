import RadioButton from "@/app/components/Buttons/RadioButton";
import Dialog from "@/app/components/Dialog/Dialog";
import TextField from "@/app/components/Inputs/TextField";
import { useState } from "react";
import { useAppContext } from "@/app/context/AppContext";

const CreateCollectionForm = () => {
    const { openDialog, closeDialog, dialog } = useAppContext();
    const [theCollection, setTheCollection] = useState({
        title: '',
        description: ''
    });

    const addCollection = (e) => {
        e.preventDefault();
        console.log(theCollection, 'doing a post request here shortly');
        clearForm();
    }

    const handleOnChange = (e) => {
        setTheCollection({
            ...theCollection,
            [e.target.id]: `${e.target.value}`
        });
    }

    const clearForm = () => {
        setTheCollection({
            title: '',
            description: ''
        });
    }

    return (
        <>
            <RadioButton handleOnClick={openDialog}/>
            <Dialog dialog={dialog}>
                <form onSubmit={addCollection}>
                    <TextField 
                        label="Title" 
                        value={theCollection.title} 
                        handleOnChange={handleOnChange} 
                        id="title"
                    />
                    <TextField 
                        label="Description" 
                        value={theCollection.description} 
                        handleOnChange={handleOnChange} 
                        id="description" 
                    />
                    <div>
                        <input value="submit" type="submit" />   
                        <input value="close" type="button" onClick={closeDialog}/>
                    </div>
                </form>
            </Dialog>
        </>
    )
}

export default CreateCollectionForm;