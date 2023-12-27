import styled from "styled-components";

export const StyledHome = styled.section`
    div {
        color: white;
        width: 100%;
        min-height: 30vh;
        text-align: center;
        background: rgb(0 0 0 / 50%);
        border-top-left-radius: 5rem;
        border-top-right-radius: 5rem;

        /* position div in the center */
        transform: translate(-50%, -50%);
        position: absolute;
        top: 85%;
        left: 50%;

        /* centered div content */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            margin: 1.5rem 0;
        }

        h1 {
            font-size: 2.25rem;
            font-weight: 400;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin: 0;
        }
    }
`;

export const StyledBanner = styled.div`

`;