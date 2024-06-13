import styled from "styled-components";

export const NavWrapper = styled.nav`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   
    &.top {
        background: white;
        position: ${({isMenuOpen}) => isMenuOpen ? 'fixed' : 'unset' };
    }

    &.bottom {
        position: fixed;
        bottom: 0;
        background: ${({theme}) => theme.colors.secondary.main};
        @media only screen and (min-width: 768px) {
            display: none;
        }
    }

    h3 {
        margin: 0;
    }
`;