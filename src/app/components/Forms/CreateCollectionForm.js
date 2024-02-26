import RadioButton from "@/app/components/Buttons/RadioButton";
import Dialog from "@/app/components/Dialog/Dialog";
import TextField from "@/app/components/Inputs/TextField";
import InputButton from "../Buttons/InputButton";
import Checkbox from "../Inputs/Checkbox";
import { useState } from "react";
import { postNewCollection } from "@/app/lib/collections";
import { StyledForm } from "./CreateCollection.styled";

const CreateCollectionForm = () => {
    const [theCollection, setTheCollection] = useState({
        title: '',
        description: '',
        private: false
    });
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });

    console.log(theCollection);

    const openDialog = () => {
        setDialog({
            isOpen: true,
            title: "Create Collection"
        });
    }

    const closeDialog = () => {
        setDialog({
            isOpen: false,
            title: "",
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

    const handleCheckbox = (e) => {
        setTheCollection({
            ...theCollection,
            private: e.target.checked
        });
    }

    const clearForm = () => {
        setTheCollection({
            title: '',
            description: '',
            private: false
        });
    }

    return (
        <>
            <RadioButton handleOnClick={openDialog} srcIcon="/plus.svg" size="lg" shadow={true} />
            <Dialog dialog={dialog} closeDialog={closeDialog}>
                <StyledForm onSubmit={addCollection}>
                    <TextField 
                        label="Title" 
                        value={theCollection.title} 
                        handleOnChange={handleOnChange} 
                        id="title"
                        required="true"
                    />
                    <TextField 
                        label="Description" 
                        value={theCollection.description} 
                        handleOnChange={handleOnChange} 
                        id="description" 
                    />
                    <Checkbox label="Make collection private" id="private" handleCheckbox={handleCheckbox} />
                    <div className="form-actions">
                        <InputButton value="save" elementType="submit" backgroundColor="black"/>   
                    </div>
                </StyledForm>
            </Dialog>
        </>
    )
}

export default CreateCollectionForm;