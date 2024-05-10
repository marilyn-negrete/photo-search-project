import { CarouselWrapper, CarouselItem, CarouselTitle, StyledImage } from "./InfiniteScrollCarousel.styled";
import { kalam400 } from "@/lib/fonts"

const InfiniteScrollCarousel = (props) => {
    const { items, handleClick } = props;

    return(
        <CarouselWrapper>
            {items.map(item => (
                <CarouselItem key={item.id} onClick={() => handleClick(item.title)}>
                    <StyledImage 
                        width={100} 
                        height={100} 
                        alt={item.title} 
                        src={item.cover_photo ? `${item.cover_photo?.urls?.raw + "&auto=compress"}` : '/no-thumb.png'} 
                    />
                    <CarouselTitle className={kalam400.className}>
                        {item.title}
                    </CarouselTitle>
                </CarouselItem>
            ))}
        </CarouselWrapper>
    )
}

export default InfiniteScrollCarousel;