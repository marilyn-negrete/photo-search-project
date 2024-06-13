import styled from "styled-components";

export const SideBarWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 7%;
    background: white;
    height: 100%;
`;

export const Items = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    padding: 1rem 2rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background: ${({theme}) => theme.colors.primary.rgb}
    }
`;