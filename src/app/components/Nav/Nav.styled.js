import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    padding: 1rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({position}) => position === 'bottom' && css`
        position: absolute;
        bottom: 0;
        background: ${({theme}) => theme.colors.secondary.main};
    `}

    h3 {
        margin: 0;
    }
`;