import { CarouselWrapper, CarouselItem, CarouselTitle, StyledImage } from "./InfiniteScrollCarousel.styled";
import { kalam300 } from "@/app/lib/fonts";

const InfiniteScrollCarousel = (props) => {
    const { items, handleClick } = props;

    return(
        <CarouselWrapper>
            {items.map(item => (
                <CarouselItem key={item.id} onClick={() => handleClick(item.title)}>
                    <StyledImage width={100} height={100} alt={item.title} src={item.cover_photo ? item.cover_photo?.urls?.small_s3 : '/no-thumb.png'} />
                    <CarouselTitle className={kalam300.className}>
                        <b>{item.title}</b>
                    </CarouselTitle>
                </CarouselItem>
            ))}
        </CarouselWrapper>
    )
}

export default InfiniteScrollCarousel;