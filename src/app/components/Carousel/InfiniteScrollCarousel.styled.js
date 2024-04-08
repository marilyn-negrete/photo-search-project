import styled from "styled-components";
import Image from "next/image";

export const CarouselWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
    max-width: 71rem;
    margin: 0 auto;
`;

export const CarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: .25rem;
    cursor: pointer;
`;

export const StyledImage = styled(Image)`
    border-radius: 20px;
    object-fit: cover;
`;

export const CarouselTitle = styled.span`
    margin: 1rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 6.25rem;
    white-space: nowrap;
`;

