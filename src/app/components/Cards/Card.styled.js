import styled from "styled-components";

export const StyledCard = styled.div `
    max-width: 20rem;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
        border-top: 1px dashed rgba(171, 126, 87, 1);
        border-bottom: 1px dashed rgba(171, 126, 87, 1);
    }

    .col-1 {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        img {
            border-radius: 10px;
            object-fit: cover;
        }
    }
   
    .col-2 {
        width: 100%;
        .title {
            text-align: left;
            margin-top: 0;
        }
        .actions {
            display: flex;
            justify-content: space-between;
        }
    }
`;