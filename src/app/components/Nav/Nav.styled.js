import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    padding: 1rem 10rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1024px) {
        padding: 1rem 5rem;
    }
    @media only screen and (max-width: 768px) {
        padding: 1rem;
    }

    ${({position}) => position === 'bottom' && css`
        position: fixed;
        bottom: 0;
        background: ${({theme}) => theme.colors.secondary.main};
        @media only screen and (min-width: 768px) {
            display: none;
        }
    `}

    h3 {
        margin: 0;
    }
`;