'use client'
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";
import { Kalam } from 'next/font/google';
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper } from "./Feed.styled";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

// fonts
const kalam700 = Kalam({ subsets: ['latin'], weight: '700'});
const kalam400 = Kalam({ subsets: ['latin'], weight: '400'});

const Feed = () => {
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
                <h4 className={kalam700.className}>My Collections</h4>
                <div className="content">
                    {loading ? (
                        <p className={kalam400.className}>Loading...</p>
                    ) : collections.length >= 1 ? (
                        <InfiniteScrollCarousel items={collections} />
                    ) : (
                        <p className={kalam400.className}>Make something awesome</p>
                    )}
                </div>
            </StyledWrapper> 
            <CreateCollectionForm />
        </>
    )
}

export default Feed;