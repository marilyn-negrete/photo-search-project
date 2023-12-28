import styled from "styled-components";

export const StyledHome = styled.section`
    color: white;
   
`;

export const StyledBanner = styled.div`
    width: 100%;
    min-height: 30vh;
    text-align: center;
    background: rgb(0 0 0 / 50%);
    border-top-left-radius: 5rem;
    border-top-right-radius: 5rem;
    @media(max-width: 420px) {
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
    }

    /* position div at the bottom center of the page */
    transform: translate(-50%, -50%);
    position: absolute;
    top: 85%;
    left: 50%;

    /* center div content */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 1.5rem 0;
        font-size: 1.35rem;
        @media(max-width: 420px) {
            font-size: 1rem;
        }
    }

    h1 {
        font-size: 2.75rem;
        font-weight: 400;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0;
        @media(max-width: 420px) {
            font-size: 1.85rem;
        }
    }
`;