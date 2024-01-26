import styled from "styled-components";
import css from "styled-jsx/css";

export const DialogWrapper = styled.div`
    background-color: white;    
    width: 25rem;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #cccc;
    border-radius: .5rem;
    display: none;
    /* position the div in center */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({isOpen}) => isOpen && css`
        display: block;
        z-index: 3;
    ` }
`;

export const DialogContent = styled.div`
`;

export const DialogBody = styled.div`
`;

export const DialogHead = styled.div`
`;

export const DialogActions = styled.div`
`;

export const DialogBackdrop = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: rgb(0 0 0 / 50%);
`;