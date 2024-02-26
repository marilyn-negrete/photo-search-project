import styled from "styled-components";

export const StyledWrapper = styled.section`
    
    background-color: ${({theme}) => theme.colors.secondary.main};
    padding: 1rem;

    h4 {
        margin: 0;
    }
    
    .content {
        height: 11.9rem;
        display: flex;
        justify-content: center;
        align-items:center
    }
`;
