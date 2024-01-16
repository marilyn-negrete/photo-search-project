import { CarouselWrapper, CarouselItem, CarouselTitle, StyledImage, CarouselItems } from "./InfiniteScrollCarousel.styled";

const InfiniteScrollCarousel = (props) => {
    const { theCollections } = props;

    return(
        <CarouselWrapper>
            <h4>Some text here</h4>
            <CarouselItems>
                {theCollections ? 
                    theCollections.map(album => (
                        <CarouselItem key={album.id}>
                            <StyledImage width={100} height={100} alt={album.title} src="/flowers.avif" />
                            <CarouselTitle>{album.title}</CarouselTitle>
                        </CarouselItem>
                    ))
                : []}
            </CarouselItems>
        </CarouselWrapper>
    )
}

export default InfiniteScrollCarousel;