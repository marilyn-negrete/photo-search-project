'use client'
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";
import Typography from "../components/Typography/Typography";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper } from "./Feed.styled";
import { useEffect, useState } from "react";
import { getUsersCollections } from "../lib/collections";

const Page = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        setCollections(getUsersCollections());
    },[]);

    return (
        <>
            <StyledWrapper>
                <Typography label="My Collections" variant="h4"/> 
                <InfiniteScrollCarousel items={collections} />
            </StyledWrapper> 
            <CreateCollectionForm />
        </>
    )
}

export default Page;