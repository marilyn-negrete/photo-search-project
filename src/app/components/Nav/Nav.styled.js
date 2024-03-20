import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    padding: 1rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({position}) => position === 'bottom' && css`
        position: fixed;
        bottom: 0;
        background: ${({theme}) => theme.colors.secondary.main};
        @media only screen and (min-width: 767px) {
            display: none;
        }
    `}

    h3 {
        margin: 0;
    }
`;