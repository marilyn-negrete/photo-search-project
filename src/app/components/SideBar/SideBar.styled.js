import styled from "styled-components";

export const SideBarWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 7%;
    background: white;
    height: 100%;
    z-index: 9;
`;

export const Items = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background: ${({theme}) => theme.colors.primary.rgb}
    }

    a {
        padding: 1rem;
        color: ${({theme}) => theme.colors.primary.main};
        display: flex;
    }
`;