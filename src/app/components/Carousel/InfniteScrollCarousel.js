import { CarouselWrapper, CarouselItem, CarouselTitle, StyledImage, CarouselItems } from "./InfiniteScrollCarousel.styled";

const InfiniteScrollCarousel = (props) => {
    const { items } = props;

    return(
        <CarouselWrapper>
            <CarouselItems>
                {items.length ? 
                    items.map(album => (
                        <CarouselItem key={album.id}>
                            <StyledImage width={100} height={100} alt={album.title} src={album.cover_photo.urls.small_s3} />
                            <CarouselTitle>{album.title}</CarouselTitle>
                        </CarouselItem>
                    ))
                : []}
            </CarouselItems>
        </CarouselWrapper>
    )
}

export default InfiniteScrollCarousel;