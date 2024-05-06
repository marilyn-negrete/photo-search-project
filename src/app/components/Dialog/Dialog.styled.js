import styled from "styled-components";

export const DialogWrapper = styled.div`
    background-color: white;    
    width: 25rem;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #cccc;
    border-radius: .5rem;
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.open {
        display: block;
        z-index: 3;
    }
`;

export const DialogHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DialogBackdrop = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: rgb(0 0 0 / 50%);
`;