'use client'
import { collections } from "../lib/collections";
import MyCollections from "./MyCollections";
import RadioButton from "../components/Buttons/RadioButton";

const Page = () => {
    return (
        <>
            <MyCollections theCollections={collections} theSectionTitle="My Collections"/>
            <RadioButton />
        </>
    )
}

export default Page;