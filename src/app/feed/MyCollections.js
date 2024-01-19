'use client'
import { StyledWrapper } from "./MyCollections.styled";
import InfiniteScrollCarousel from "../components/Carousel/InfniteScrollCarousel";
import Typography from "../components/Typography/Typography";

const MyCollections = (props) => {
    const {theCollections, theSectionTitle} = props;

    return(
        <StyledWrapper>
            <Typography label={theSectionTitle} variant="h4"/> 
            <InfiniteScrollCarousel items={theCollections} />
        </StyledWrapper> 
    )

}

export default MyCollections;