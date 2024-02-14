'use client'
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";
import Typography from "../components/Typography/Typography";
import { Kalam } from 'next/font/google';
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper } from "./Feed.styled";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

// fonts
const kalam = Kalam({ subsets: ['latin'], weight: '700'});

const Feed = () => {
    const [collections, setCollections] = useState([]);
    // useFetch is a reusable function (hook) that receives an url endpoint as a parameter; data, error and loading are destructured for easier use.
    const {data, error, loading } = useFetch(`${process.env.API_URL}/users/mna96/collections?client_id=${process.env.UNSPLASH_CLIENT_ID}`);

    // to ensure the effect gets triggered whenever the value of data changes
    useEffect(() => {
        // this is to ensure the setCollections function only runs if data exists is truthy
        if(data) { 
            setCollections(data)
        }
    },[data]);

    return (
        <>
            <StyledWrapper>
                <Typography label="My Collections" variant="h4" className={kalam.className}/> 
                <InfiniteScrollCarousel items={collections} />
            </StyledWrapper> 
            <CreateCollectionForm />
        </>
    )
}

export default Feed;