import styled from "styled-components";

export const StyledWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const StyledError = styled.div`
    height: 15rem;
    width: 100%;
    padding: 3rem;
    color: white;
    background: #f00303;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;

    img {
        height: 2rem;
        width: 2rem;
        fill: white;
        color: white;
        margin-right: 1rem;
    }

`;