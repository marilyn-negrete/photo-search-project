import styled from "styled-components";
import Image from "next/image";

export const CarouselWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: auto;
`;

export const CarouselItems = styled.div`
    display: flex;
    align-items: center;
`;

export const CarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: .25rem;
`;

export const StyledImage = styled(Image)`
    border-radius: 20px;
`;

export const CarouselTitle = styled.span`
    margin: 1rem 0;
`;

