import styled from "styled-components";

export const StyledRadioButton = styled.button`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: white;
    border: 1px solid transparent;
    position: absolute;
    bottom: 5rem;
    right: 1rem;
    box-shadow: ${({theme}) => theme.shadows.main};
`;