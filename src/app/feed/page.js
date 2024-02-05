'use client'
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";
import Typography from "../components/Typography/Typography";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper } from "./Feed.styled";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Page = () => {
    const [collections, setCollections] = useState([]);
    const {data, error, loading } = useFetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);

    useEffect(() => {
        if(data) { 
            setCollections(data)
        }
    },[data]);

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