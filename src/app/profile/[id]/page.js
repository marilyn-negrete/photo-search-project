'use client'
import RadioButton from "@/app/components/Buttons/RadioButton";

export default function Page({params}) {
    return (
        <>
            <h1>Profile Page: {params.id}</h1>
            <RadioButton />
        </>
    )
}