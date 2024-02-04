'use client'
import { collections } from "../lib/collections";
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";
import Typography from "../components/Typography/Typography";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import { StyledWrapper } from "./Feed.styled";

const Page = () => {
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