import styled from "styled-components";
import css from "styled-jsx/css";

export const DialogWrapper = styled.div`
    width: 25rem;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #cccc;
    border-radius: .5rem;
    display: none;

    ${({isOpen}) => isOpen && css`
        display: block;
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