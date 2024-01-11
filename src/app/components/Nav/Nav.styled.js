import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;        
    padding: 1rem;
    background: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({position}) => position === 'bottom' && css`
        position: absolute;
        bottom: 0;
        background: ${(props) => props.theme.colors.secondary};

    `}
`;