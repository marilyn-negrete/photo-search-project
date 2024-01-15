import styled from "styled-components";

export const StyledHome = styled.section`
    color: white;
    
    img {
        object-position: 70%;
    }
`;

export const StyledBanner = styled.div`
    width: 100%;
    min-height: 30vh;
    text-align: center;
    background: ${({theme}) => theme.colors.darkGray.rgba};
    border-top-left-radius: 5rem;
    border-top-right-radius: 5rem;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* center div content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: ${({theme}) => theme.breakpoints.lgMobile}) {
        min-height: 36vh;
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
        top: 82%;
    }

    p {
        margin: 1.5rem 0;
        font-size: 1.35rem;
        @media(max-width: ${({theme}) => theme.breakpoints.lgMobile}) {
            font-size: 1rem;
            margin: .25rem 0 1rem 0;
        }
    }

    h1 {
        font-size: 2.75rem;
        font-weight: 400;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0;
        @media(max-width: ${({theme}) => theme.breakpoints.lgMobile}) {
            font-size: 2.25rem;
        }
    }
`;