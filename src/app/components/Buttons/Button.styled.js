import styled from "styled-components";
import css from "styled-jsx/css";

export const StyledIconButton = styled.button`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: white;
    border: 1px solid transparent;
    cursor: pointer;

    ${({size}) => size ==='lg' && css`
        height: 4rem;
        width: 4rem;
        position: absolute;
        bottom: 5rem;
        right: 1rem;
    `}
`;

export const StyledSquareButton = styled.input`
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({backgroundColor}) => backgroundColor === 'black' ? 'white' : 'black'};
    text-align: center;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;

    &:disabled {
        background-color: rgb(0 0 0 / 30%);
        cursor: not-allowed;
    }
`;

export const StyledDropDrownButton = styled.div`
    &.bottom {
        position: fixed;
        bottom: 5rem;
        right: 1rem;
        @media only screen and (min-width: 768px) {
            bottom: 1rem;
        }
    }
    

    &:hover .dropdown-content {
        display: block;
    }

    .dropbtn {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background-color: white;
        border: 1px solid transparent;
        box-shadow: ${({theme}) => theme.shadows.main};
        cursor: pointer;
    }

    .dropdown-content {
        font-family: Arial, sans-serif;
        background-color: white;
        display: none;
        position: absolute;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        bottom: 4rem;
        right: 0;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
    }

    .dropdown-content a:hover {
        background-color: rgb(196 196 196 / 30%);
    }
`;