'use client'
import { collections } from "../lib/collections";
import MyCollections from "./MyCollections";
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";

const Page = () => {
    return (
        <>
            <MyCollections theCollections={collections} theSectionTitle="My Collections"/>
            <CreateCollectionForm />
        </>
    )
}

export default Page;