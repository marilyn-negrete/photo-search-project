import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;        
    padding: 1rem;
    background: ${({bgColor}) => bgColor === 'light' ? 'white' : '#F4DFCA' };
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props) => props.position === 'bottom' && css`
        position: absolute;
        bottom: 0;
    `}
`;