import styled from "styled-components";

export const StyledTopNav = styled.nav`
    width: 100%;        
    height: 3rem;
    padding: 1rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledBottomNav = styled.nav`
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #F4DFCA;

    ul {
        padding: 1rem;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-between;

        li {
            text-decoration: none;
        }
    }
`;