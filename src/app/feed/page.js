'use client'
import { collections } from "../lib/collections";
import MyCollections from "./MyCollections";

const Page = () => {
    return (
        <MyCollections theCollections={collections} theSectionTitle="My Collections"/>
    )
}

export default Page;