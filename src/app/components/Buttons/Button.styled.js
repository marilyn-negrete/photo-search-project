import styled from "styled-components";
import css from "styled-jsx/css";

export const StyledRadioButton = styled.button`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: white;
    border: 1px solid transparent;
    
    box-shadow: ${({theme, shadow}) => shadow ? theme.shadows.main : 'unset'};
    cursor: pointer;

    ${({size}) => size ==='lg' && css`
        height: 4rem;
        width: 4rem;
        position: absolute;
        bottom: 5rem;
        right: 1rem;
    `}
`;