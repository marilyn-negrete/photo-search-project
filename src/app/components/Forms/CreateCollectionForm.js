import RadioButton from "@/app/components/Buttons/RadioButton";
import Dialog from "@/app/components/Dialog/Dialog";
import InputButton from "../Buttons/InputButton";
import { useState } from "react";
import { postNewCollection } from "@/app/lib/collections";
import { StyledForm } from "./CreateCollection.styled";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const CreateCollectionForm = () => {
    const form = useForm();
    const { register, control, handleSubmit, formState: { errors }, reset } = form;
    const [theCollection, setTheCollection] = useState({
        title: '',
        description: '',
        private: false
    });
    const [dialog, setDialog] = useState({
        isOpen: false,
        title: ""
    });
    
    const onSubmit = (data) => {
        setTheCollection({...data});
        postNewCollection(data);
        closeDialog();
    }

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
        reset();
    }

    return (
        <>
            <RadioButton handleOnClick={openDialog} srcIcon="/plus.svg" size="lg" shadow={true} />
            <Dialog dialog={dialog} closeDialog={closeDialog}>
                <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="field">
                        <label>Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            placeholder="Beautiful photos"
                            maxLength={60}
                            {...register('title', {
                                required: 'Title is required',
                                minLength: { 
                                    value: 2, 
                                    message: 'Title is too short'
                                },
                            }
                            )}
                        />
                        <span className="is-required">{errors.title?.message}</span>
                    </div>
                    <div className="field">
                        <label>
                            Description
                            <span className="is-optional">(optional)</span>
                        </label>
                        <input type="text" id="description" {...register('description')}/>
                    </div>
                    <div className="field private">
                        <input type="checkbox" id="private" {...register('private')}/>
                        <label>Make collection private</label>
                    </div>
                    <div className="form-actions">
                        <InputButton value="save" elementType="submit" backgroundColor="black"/>   
                    </div>
                </StyledForm>
            </Dialog>
            {/* <DevTool control={control}/> */}
        </>
    )
}

export default CreateCollectionForm;