'use client'
import RadioButton from "@/app/components/Buttons/RadioButton";
import Dialog from "@/app/components/Dialog/Dialog";

export default function Page({params}) {
    return (
        <>
            <h1>Profile Page: {params.id}</h1>
            <RadioButton />
            <Dialog title="Create a Collection">
                <form>
                    <label>Title</label>
                    <br></br>
                    <input value="" type="text" placeholder="" />
                    <br></br>

                    <label>Description</label>
                    <br></br>
                    <input value="" type="text" placeholder="" />
                    <br></br>

                    <input value="submit" type="submit" />    
                </form>
            </Dialog>
        </>
    )
}