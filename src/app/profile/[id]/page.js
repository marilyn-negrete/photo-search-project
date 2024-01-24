'use client'
import RadioButton from "@/app/components/Buttons/RadioButton";
import Dialog from "@/app/components/Dialog/Dialog";
import { useState } from "react";

export default function Page({params}) {
 const [dialog, setDialog] = useState({
    isOpen: false,
    title: ""
 });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('doing a post request here shortly');
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
            title: ""
        });
    }

    return (
        <>
            <RadioButton handleOnClick={openDialog}/>
            <Dialog dialog={dialog} setDialog={setDialog}>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Title</label>
                        <br></br>
                        <input value="" type="text" placeholder="" />
                    </div>
                    
                    <div>
                        <label>Description</label>
                        <br></br>
                        <input value="" type="text" placeholder="" />
                    </div>
                    
                    <div>
                        <input value="submit" type="submit" />   
                        <input value="close" type="button" onClick={closeDialog}/>
                        <br></br>
                    </div>
                </form>
            </Dialog>
        </>
    )
}