import styled from "styled-components";

export const StyledForm = styled.form`
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
