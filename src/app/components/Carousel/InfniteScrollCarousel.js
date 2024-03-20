import { CarouselWrapper, CarouselItem, CarouselTitle, StyledImage, CarouselItems } from "./InfiniteScrollCarousel.styled";
import { Kalam } from 'next/font/google';

// fonts
const kalam = Kalam({ subsets: ['latin'], weight: '300'});

const InfiniteScrollCarousel = (props) => {
    const { items, onItemClick } = props;

    return(
        <CarouselWrapper>
            <CarouselItems>
                {items.map(item => (
                    <CarouselItem key={item.id} onClick={() => onItemClick(item.title)}>
                        <StyledImage width={100} height={100} alt={item.title} src={item.cover_photo ? item.cover_photo?.urls?.small_s3 : '/no-thumb.png'} />
                        <CarouselTitle className={kalam.className}>
                            <b>{item.title}</b>
                        </CarouselTitle>
                    </CarouselItem>
                ))}
            </CarouselItems>
        </CarouselWrapper>
    )
}

export default InfiniteScrollCarousel;