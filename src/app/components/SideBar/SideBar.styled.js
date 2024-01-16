import styled from "styled-components";

export const SideBarWrapper = styled.div`
    width: 100%;
    position: absolute;
    background: white;
    height: calc(100% - 18%);
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