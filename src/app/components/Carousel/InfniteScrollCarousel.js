
import { CarouselWrapper, CarouselItem, CarouselTitle, StyledImage, CarouselItems } from "./InfiniteScrollCarousel.styled";
import Image from "next/image";

const InfiniteScrollCarousel = () => {
    return(
        <CarouselWrapper>
            <h4>Some text here</h4>
            <CarouselItems>
                <CarouselItem>
                    <StyledImage width={100} height={100} alt="colection name" src="/flowers.avif"/>
                    <CarouselTitle>Lorem</CarouselTitle>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage width={100} height={100} alt="colection name" src='/flowers.avif'/>
                    <CarouselTitle>Ipsum</CarouselTitle>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage width={100} height={100} alt="colection name" src='/flowers.avif'/>
                    <CarouselTitle>Sit a</CarouselTitle>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage width={100} height={100} alt="colection name" src='/flowers.avif'/>
                    <CarouselTitle>Met</CarouselTitle>
                </CarouselItem>
            </CarouselItems>
        </CarouselWrapper>
    )
}

export default InfiniteScrollCarousel;