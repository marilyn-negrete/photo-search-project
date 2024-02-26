import RadioButton from "@/app/components/Buttons/RadioButton";
import Dialog from "@/app/components/Dialog/Dialog";
import TextField from "@/app/components/Inputs/TextField";
import InputButton from "../Buttons/InputButton";
import { useState } from "react";
import { postNewCollection } from "@/app/lib/collections";

const CreateCollectionForm = () => {
    const [theCollection, setTheCollection] = useState({
        title: '',
        description: ''
    });
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

    const addCollection = (e) => {
        e.preventDefault();
        postNewCollection(theCollection);
        clearForm();
        closeDialog();
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
            <RadioButton handleOnClick={openDialog} srcIcon="/plus.svg" size="lg" shadow={true} />
            <Dialog dialog={dialog} closeDialog={closeDialog}>
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
                    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <InputButton value="save" elementType="submit" backgroundColor="black"/>   
                    </div>
                </form>
            </Dialog>
        </>
    )
}

export default CreateCollectionForm;