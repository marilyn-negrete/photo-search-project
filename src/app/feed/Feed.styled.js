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

export const StyledCreateCollectionForm = styled.form`
    font-family: Arial, sans-serif;
    
    .form-actions {
        display: flex;
        justify-content: flex-end;
    }

    .field {
        margin: 1rem 0;

        label {
            display: block;

            .is-optional {
                margin-left: .25rem;
                color: #767676;
            }
        }

        input {
            width: 100%;
            padding: 0.75rem;
            border-radius: 4px;
            border: 1px solid;
            margin: 0.5rem 0;
        }

        .is-required {
            color: red;
            font-size: .85rem;
        }
    }

    .field.private {
        display: flex;
        align-items: center;

        input[type="checkbox"] {
            width: unset;
            margin-right: .25rem;
        }
        
    }
`;

export const StyledCreatePostForm = styled.form`
    .post-area {
        display: flex;
        margin-bottom: 1rem;

        img {
            margin-right: .5rem;
        }

        textarea {
            width: 100%;
            border: none;
            padding: .5rem;
        }
    }

    .form-actions {
        text-align: end;
    }
`;